import { Field } from "formik";
import classNames from "classnames";
import "./styles.scss";
import { FC, SVGProps } from "react";

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

const RadioFormField = (props: IRadioFormField) => {
  const {
    component,
    name,
    id,
    label,
    customContainerClassName,
    customFieldClassName,
  } = props;

  return (
    <div
      className={classNames("radio-input-container", customContainerClassName)}
    >
      <Field
        name={name}
        id={id}
        {...(component && { component })}
        value={id}
        type="radio"
        className="radio-field"
      />
      <label
        className={classNames("radio-label", customFieldClassName)}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioFormField;
