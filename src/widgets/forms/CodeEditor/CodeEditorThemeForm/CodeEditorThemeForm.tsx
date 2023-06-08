import { type FC } from 'react';
import { Form } from 'formik';
import { RadioFormField } from '../../../../entities/formik/fields';

import editorThemeOptions from '../../../../shared/constants/editorThemeOptions';

import '../styles.scss';

interface IFormField {
  id: string;
  name: string;
  type: string;
  label: string;
  show?: boolean;
}

const generateFormField = (): IFormField[] => {
  const formFields = [];
  for (const [key, value] of Object.entries(editorThemeOptions)) {
    formFields.push({
      id: key,
      name: 'theme',
      type: 'radio',
      label: value,
    });
  }

  return formFields;
};

const handleSubmitForm = (): void => {
  document.getElementById('code-editor-th-form-button')?.click();
};

const renderRadioFormField: FC<IFormField> = (fieldProps) => (
  <RadioFormField
    {...fieldProps}
    key={fieldProps.id}
    customContainerClassName="code-editor-radio-input-container"
    customFieldClassName="code-editor-radio-label"
    onClick={handleSubmitForm}
  />
);

const CodeEditorThemeForm: FC<{ values: any }> = () => (
  <Form className="code-editor__form" id="ce-theme-form">
    <div className="code-editor__form_container">
      {generateFormField().map(renderRadioFormField)}
    </div>
    <button type="submit" id="code-editor-th-form-button" />
  </Form>
);

export default CodeEditorThemeForm;
