import { type FC, useEffect } from 'react';
import { Form } from 'formik';
import { RadioFormField } from '../../../entities/formik/fields';

import './styles.scss';

interface IFormField {
  id: string;
  name: string;
  type: string;
  label: JSX.Element;
  show: boolean;
}

const formFields = (): IFormField[] =>
  [
    {
      id: 'javascript1',
      name: 'lang',
      type: 'radio',
      label: <p>Javascript</p>,
      show: true,
    },
    {
      id: 'javascript2',
      name: 'lang',
      type: 'radio',
      label: <p>Javascript2</p>,
      show: true,
    },
    {
      id: 'javascript3',
      name: 'lang',
      type: 'radio',
      label: <p>Javascript3</p>,
      show: true,
    },
  ].filter(({ show }) => show);

const renderRadioFormField: FC<IFormField> = (fieldProps) => (
  <RadioFormField
    {...fieldProps}
    key={fieldProps.id}
    customContainerClassName="code-editor-radio-field"
  />
);

const CodeEditorThemeForm: FC<{ values: any }> = ({ values }) => {
  useEffect(() => {
    document.getElementById('code-editor-lang-form-button')?.click();
  }, [values]);

  return (
    <Form className="code-editor-lang-form" id="code-editor-lang-form">
      {formFields().map(renderRadioFormField)}
      <button type="submit" id="code-editor-lang-form-button" />
    </Form>
  );
};

export default CodeEditorThemeForm;
