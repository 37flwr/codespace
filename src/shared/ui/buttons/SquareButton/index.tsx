import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface ISquareButton extends PropsWithChildren {
  path?: string;
  customClassName?: string;
  onClick?: () => void;
}

const SquareButton = ({
  children,
  path,
  customClassName,
  onClick,
}: ISquareButton) => {
  if (path) {
    return (
      <Link to={path} className={classNames(`square-button`, customClassName)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNames("square-button", customClassName)}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export default SquareButton;
