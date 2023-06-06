import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../store/actions";
import ThemeForm from "./ThemeForm";

const ThemeFormContainer = ({
  currentTheme,
  initialValues = {
    theme: currentTheme,
  },
}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={({ theme }) => dispatch(changeTheme(theme))}
    >
      {({ values }) => <ThemeForm values={values} />}
    </Formik>
  );
};

export default ThemeFormContainer;
