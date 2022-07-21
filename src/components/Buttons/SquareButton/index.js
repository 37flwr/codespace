import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

const SquareButton = (props) => {
    const {
        children, 
        path, 
        customClassName, 
        onClick,
    } = props
    
    return (
        <>
            {path?
                <Link to={path} className={classNames(`square-button`, customClassName)}>
                    {children}
                </Link>
            :
                <button className={classNames('square-button', customClassName)} onClick={() => onClick()}>
                    {children}
                </button>
            }
        </>
    )
}

export default SquareButton