import { type FC } from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import './styles.scss';

interface IRadioFormField {
  component?: FC;
  name: string;
  id: string;
  key?: any;
  label: JSX.Element;
  type?: string;
  customContainerClassName?: string;
  customFieldClassName?: string;
}

const RadioFormField: FC<IRadioFormField> = ({
  component,
  name,
  id,
  label,
  customContainerClassName,
  customFieldClassName,
}) => {
  return (
    <div className={classNames('radio-input-container', customContainerClassName)}>
      <Field
        name={name}
        id={id}
        value={id}
        type="radio"
        className="radio-field"
        component={component}
      />
      <label className={classNames('radio-label', customFieldClassName)} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioFormField;
