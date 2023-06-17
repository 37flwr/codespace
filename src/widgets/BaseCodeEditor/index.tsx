import { type FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector } from '../../store/hooks';
import CodeEditor from '../../entities/code-editor/CodeEditor';
import CodeEditorNavBar from '../../entities/code-editor/CodeEditorNavBar';
import {
  extractAlphabeticChars,
  extractNumericChars,
} from '../../shared/lib/stringCharactersExtractors';
import {
  parseCodeEditorLanguage,
  parseCodeEditorTheme,
} from '../../shared/lib/parseCodeEditorVitals';
import { defineCodeEditorTheme } from '../../shared/lib/defineCodeEditorTheme';
import OutputWindow from '../../entities/code-editor/OutputWindow';
import './styles.scss';

const BaseCodeEditor: FC = () => {
  const [code, setCode] = useState<string>('');
  // eslint-disable-next-line
  const [processing, setProcessing] = useState<boolean>(false);
  const [outputDetails, setOutputDetails] = useState(undefined);

  const codeEditorSettings = useAppSelector((state) => state.CodeEditor);
  const { theme, language } = codeEditorSettings;

  const onCodeChange = (value: string): void => {
    setCode(value);
  };

  const checkStatus = async (token: string): Promise<boolean | undefined> => {
    const options = {
      method: 'GET',
      // eslint-disable-next-line
      url: `${process.env.REACT_APP_RAPID_API_URL}/${token}`,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      const response = await axios.request(options);
      const statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          // eslint-disable-next-line
          checkStatus(token);
        }, 2000);
        return true;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        // showSuccessToast('Compiled Successfully!');
        return false;
      }
    } catch (err) {
      setProcessing(false);
      // showErrorToast();
    }
  };

  const handleCompile = (): void => {
    setProcessing(true);
    const formData = {
      language_id: extractNumericChars(language),
      // encode source code in base64
      source_code: btoa(code),
    };
    const options = {
      method: 'POST',
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        const token = response.data.token;
        // eslint-disable-next-line
        checkStatus(token);
      })
      .catch((err) => {
        // eslint-disable-next-line
        let error = err.response ? err.response.data : err;
        setProcessing(false);
      });
  };

  useEffect(() => {
    defineCodeEditorTheme(theme).catch(() => {});
  }, []);

  return (
    <section className="code-editor">
      <CodeEditorNavBar
        lang={parseCodeEditorLanguage(language)}
        theme={parseCodeEditorTheme(theme)}
        handleCompile={handleCompile}
      />
      <div className="code-editor__body">
        <CodeEditor
          theme={theme}
          language={extractAlphabeticChars(language)}
          code={code}
          onChange={onCodeChange}
        />
        <div className="code-editor__body__aside">
          <OutputWindow outputDetails={outputDetails} />
        </div>
      </div>
    </section>
  );
};

export default BaseCodeEditor;
