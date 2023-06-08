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
  handleSubmit: (arg0: string) => void;
}

const CodeEditorLanguageFormContainer: FC<IThemeFormContainer> = ({
  currentLang,
  initialValues = {
    lang: currentLang,
  },
  handleSubmit,
}) => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (value: string): void => {
    dispatch(codeEditorActions.changeLanguage(value));
    handleSubmit(value);
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
