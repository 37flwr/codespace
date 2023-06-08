import { Formik } from 'formik';
import { type FC } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
// import { useDispatch } from 'react-redux';
// import { changeTheme } from '../../../store/actions';
import { codeEditorActions } from '../../../../store/actions';
import CodeEditorThemeForm from './CodeEditorThemeForm';
import { defineCodeEditorTheme } from '../../../../shared/lib/defineCodeEditorTheme';

interface IThemeFormContainer {
  currentTheme: string;
  initialValues?: any;
}

const CodeEditorThemeFormContainer: FC<IThemeFormContainer> = ({
  currentTheme,
  initialValues = {
    theme: currentTheme,
  },
}) => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (value: string): void => {
    defineCodeEditorTheme(value)
      .then(() => {
        dispatch(codeEditorActions.changeTheme(value));
      })
      .catch(() => {});
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
