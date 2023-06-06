import { useEffect } from "react";
import { Form } from "formik";
import { RadioFormField } from "../../../entities/formik/fields";

import { ReactComponent as IconEditorsTop } from "../../../shared/assets/svg/EditorsTop.svg";
import { ReactComponent as IconEditorsLeft } from "../../../shared/assets/svg/EditorsLeft.svg";
import { ReactComponent as IconEditorsRight } from "../../../shared/assets/svg/EditorsRight.svg";

import "./styles.scss";

const formFields = () =>
  [
    {
      id: "editors-top",
      name: "theme",
      type: "radio",
      label: <IconEditorsTop />,
      show: true,
    },
    {
      id: "editors-left",
      name: "theme",
      type: "radio",
      label: <IconEditorsLeft />,
      show: true,
    },
    {
      id: "editors-right",
      name: "theme",
      type: "radio",
      label: <IconEditorsRight />,
      show: true,
    },
  ].filter(({ show }) => show);

const renderRadioFormField = ({ ...fieldProps }) => (
  <RadioFormField key={fieldProps.id} {...fieldProps} />
);

const ThemeForm = ({ values }) => {
  useEffect(() => {
    document.getElementById("theme-form-button").click();
  }, [values]);

  return (
    <Form className="theme-form" id="theme-form">
      {formFields({ values }).map(renderRadioFormField)}
      <button type="submit" id="theme-form-button" />
    </Form>
  );
};

export default ThemeForm;
