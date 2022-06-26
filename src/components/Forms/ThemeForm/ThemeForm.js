import { useEffect } from 'react';
import { Form } from 'formik';
import { RadioFormField } from '../../Formik/Fields'
import './styles.scss'

const formFields = () => [
    {
        id: 'editors-top',
        name: 'theme',
        type: 'radio',
        label: 'Top',
        show: true
    },
    {
        id: 'editors-left',
        name: 'theme',
        type: 'radio',
        label: 'Left',
        show: true
    },
    {
        id: 'editors-right',
        name: 'theme',
        type: 'radio',
        label: 'Right',
        show: true
    },
].filter(({show}) => show)

const renderRadioFormField = ({ show, ...fieldProps }) => (
    <RadioFormField key={fieldProps.id} {...fieldProps} />
)

const ThemeForm = ({values}) => {
    useEffect(() => {
        document.getElementById('theme-form-button').click();
    }, [values]);

    return (
        <Form className="theme-form" id='theme-form'>
            {formFields({values}).map(renderRadioFormField)}
            <button type='submit' id="theme-form-button"/>
        </Form>
    )
}

export default ThemeForm