import { Formik } from 'formik';
import { type FC } from 'react';
// import { useDispatch } from 'react-redux';
// import { changeTheme } from '../../../store/actions';
import CodeEditorThemeForm from './CodeEditorThemeForm';

interface IThemeFormContainer {
  currentTheme: string;
  initialValues?: any;
  handleSubmit: (arg0: string) => void;
}

const CodeEditorThemeFormContainer: FC<IThemeFormContainer> = ({
  currentTheme,
  initialValues = {
    theme: currentTheme,
  },
  handleSubmit,
}) => {
  // const dispatch = useDispatch();

  const handleFormSubmit = (value: string): void => {
    // dispatch(changeTheme(value));
    handleSubmit(value);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={({ theme }) => {
        handleFormSubmit(theme);
      }}
    >
      {({ values }) => <CodeEditorThemeForm values={values} />}
    </Formik>
  );
};

export default CodeEditorThemeFormContainer;
