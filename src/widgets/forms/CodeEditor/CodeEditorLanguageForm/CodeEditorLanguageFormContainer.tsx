import { Formik } from 'formik';
import { type FC } from 'react';
import { useAppDispatch } from '../../../../store/hooks';
// import { useDispatch } from 'react-redux';
// import { changeTheme } from '../../../store/actions';
import { codeEditorActions } from '../../../../store/actions';
import CodeEditorLanguageForm from './CodeEditorLanguageForm';

interface IThemeFormContainer {
  currentLang: string;
  initialValues?: any;
}

const CodeEditorLanguageFormContainer: FC<IThemeFormContainer> = ({
  currentLang,
  initialValues = {
    lang: currentLang,
  },
}) => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (value: string): void => {
    dispatch(codeEditorActions.changeLanguage(value));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={({ lang }) => {
        handleFormSubmit(lang);
      }}
    >
      {({ values }) => <CodeEditorLanguageForm values={values} />}
    </Formik>
  );
};

export default CodeEditorLanguageFormContainer;
