import { type FC } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import './styles.scss';

interface IRadioFormField {
  component?: FC;
  name: string;
  id: string;
  key?: any;
  label: JSX.Element | string;
  type?: string;
  customContainerClassName?: string;
  customFieldClassName?: string;
  onClick?: () => void;
}

const RadioFormField: FC<IRadioFormField> = ({
  component,
  name,
  id,
  label,
  customContainerClassName,
  customFieldClassName,
  onClick,
}) => {
  return (
    <div
      className={classNames(customContainerClassName, 'radio-input-container')}
      onClick={onClick}
    >
      <Field
        name={name}
        id={id}
        value={id}
        type="radio"
        className="radio-field"
        component={component}
      />
      <label className={classNames(customFieldClassName, 'radio-label')} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioFormField;
