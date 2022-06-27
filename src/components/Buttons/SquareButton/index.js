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
                <Link to={path} className={classNames(`round-button`, customClassName)}>
                    {children}
                </Link>
            :
                <button className={`round-button ${customClassName}`} onClick={() => onClick()}>
                    <div className='round-button-content'>
                        {children}
                    </div>
                </button>
            }
        </>
    )
}

export default SquareButton