import { Field } from 'formik';
import classNames from 'classnames';
import './styles.scss';

const RadioFormField = (props) => {
    const {
        component,
        name,
        id,
        label,
        customContainerClassName,
        customFieldClassName
    } = props
  return (
    <div className={classNames('radio-input-container', customContainerClassName)} >
        <Field
            name={name}
            id={id}
            {...(component && { component })}
            value={id}
            type='radio'
            className='radio-field'
        />
        <label className={classNames("radio-label", customFieldClassName)} htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioFormField