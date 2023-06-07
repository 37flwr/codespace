import { Formik } from 'formik';
import { type FC } from 'react';
// import { useDispatch } from 'react-redux';
// import { changeTheme } from '../../../store/actions';
import CodeEditorThemeForm from './CodeEditorThemeForm';

interface IThemeFormContainer {
  currentLang: string;
  initialValues?: any;
}

const CodeEditorThemeFormContainer: FC<IThemeFormContainer> = ({
  currentLang,
  initialValues = {
    lang: currentLang,
  },
}) => {
  // const dispatch = useDispatch();

  const handleSubmit = (value: string): void => {
    // dispatch(changeTheme(value));
    console.log(value);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={({ lang }) => {
        handleSubmit(lang);
      }}
    >
      {({ values }) => <CodeEditorThemeForm values={values} />}
    </Formik>
  );
};

export default CodeEditorThemeFormContainer;
