import { Formik } from 'formik';
import { type FC } from 'react';
import { themeActions } from '../../../store/actions';
import { useAppDispatch } from '../../../store/hooks';
import ThemeForm from './ThemeForm';

interface IThemeFormContainer {
  currentTheme: string;
  initialValues?: any;
}

const ThemeFormContainer: FC<IThemeFormContainer> = ({
  currentTheme,
  initialValues = {
    theme: currentTheme,
  },
}) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (value: string): void => {
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={({ theme }) => {
        handleSubmit(theme);
      }}
    >
      {({ values }) => <ThemeForm values={values} />}
    </Formik>
  );
};

export default ThemeFormContainer;
