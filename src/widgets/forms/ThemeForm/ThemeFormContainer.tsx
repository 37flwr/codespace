import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../store/actions";
import ThemeForm from "./ThemeForm";

interface IThemeFormContainer {
  currentTheme: string;
  initialValues?: any;
}

const ThemeFormContainer = ({
  currentTheme,
  initialValues = {
    theme: currentTheme,
  },
}: IThemeFormContainer) => {
  const dispatch = useDispatch();

  const handleSubmit = (value: string) => {
    dispatch(changeTheme(value));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={({ theme }) => handleSubmit(theme)}
    >
      {({ values }) => <ThemeForm values={values} />}
    </Formik>
  );
};

export default ThemeFormContainer;
