import { Formik } from 'formik';
import { type FC } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../../store/actions';
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
  const dispatch = useDispatch();

  const handleSubmit = (value: string): void => {
    dispatch(changeTheme(value));
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
