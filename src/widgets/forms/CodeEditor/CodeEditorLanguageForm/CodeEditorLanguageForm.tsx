import { type FC } from 'react';
import { Form } from 'formik';
import { RadioFormField } from '../../../../entities/formik/fields';

import editorLanguageOptions from '../../../../shared/constants/editorLanguageOptions';

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
  for (const langOption of editorLanguageOptions) {
    formFields.push({
      id: `${langOption.value}${langOption.id}`,
      name: 'lang',
      type: 'radio',
      label: langOption.label,
    });
  }

  return formFields;
};

const handleSubmitForm = (): void => {
  document.getElementById('code-editor-lang-form-button')?.click();
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

const CodeEditorLanguageForm: FC<{ values: any }> = () => (
  <Form className="code-editor__form" id="ce-lang-form">
    <div className="code-editor__form_container">
      {generateFormField().map(renderRadioFormField)}
    </div>
    <button type="submit" id="code-editor-lang-form-button" />
  </Form>
);

export default CodeEditorLanguageForm;
