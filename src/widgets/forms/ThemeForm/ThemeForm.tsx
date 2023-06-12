import { type FC, useEffect } from 'react';
import { Form } from 'formik';
import { RadioFormField } from '../../../entities/formik/fields';

import IconEditorsTop from '../../../shared/assets/svg/EditorsTop';
import IconEditorsLeft from '../../../shared/assets/svg/EditorsLeft';
import IconEditorsRight from '../../../shared/assets/svg/EditorsRight';

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
      id: 'editors-top',
      name: 'theme',
      type: 'radio',
      label: <IconEditorsTop />,
      show: true,
    },
    {
      id: 'editors-left',
      name: 'theme',
      type: 'radio',
      label: <IconEditorsLeft />,
      show: true,
    },
    {
      id: 'editors-right',
      name: 'theme',
      type: 'radio',
      label: <IconEditorsRight />,
      show: true,
    },
  ].filter(({ show }) => show);

const renderRadioFormField: FC<IFormField> = (fieldProps) => (
  <RadioFormField {...fieldProps} key={fieldProps.id} />
);

const ThemeForm: FC<{ values: any }> = ({ values }) => {
  useEffect(() => {
    document.getElementById('theme-form-button')?.click();
  }, [values]);

  return (
    <Form className="theme-form" id="theme-form">
      {formFields().map(renderRadioFormField)}
      <button type="submit" id="theme-form-button" />
    </Form>
  );
};

export default ThemeForm;
