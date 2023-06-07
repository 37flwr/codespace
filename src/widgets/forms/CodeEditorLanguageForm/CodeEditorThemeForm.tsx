import { type FC, useEffect } from 'react';
import { Form } from 'formik';
import { RadioFormField } from '../../../entities/formik/fields';

import editorLanguageOptions from '../../../shared/constants/editorLanguageOptions';

import './styles.scss';

interface IFormField {
  id: string;
  name: string;
  type: string;
  label: JSX.Element;
  show?: boolean;
}

const generateFormField = (): IFormField[] => {
  const formFields = [];
  for (const langOption of editorLanguageOptions) {
    formFields.push({
      id: `${langOption.value}${langOption.id}`,
      name: 'lang',
      type: 'radio',
      label: <p className="code-editor-form-field">{langOption.label}</p>,
    });
  }

  return formFields;
};

const renderRadioFormField: FC<IFormField> = (fieldProps) => (
  <RadioFormField
    {...fieldProps}
    key={fieldProps.id}
    customContainerClassName="code-editor-radio-field"
    customFieldClassName="code-editor-form-field"
  />
);

const CodeEditorThemeForm: FC<{ values: any }> = ({ values }) => {
  useEffect(() => {
    document.getElementById('code-editor-lang-form-button')?.click();
  }, [values]);

  return (
    <Form className="code-editor-lang-form" id="code-editor-lang-form">
      {generateFormField().map(renderRadioFormField)}
      <button type="submit" id="code-editor-lang-form-button" />
    </Form>
  );
};

export default CodeEditorThemeForm;
