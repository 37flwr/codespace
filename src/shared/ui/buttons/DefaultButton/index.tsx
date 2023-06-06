import React, { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import "./styles.scss";

interface IDefaultButton {
  text: string;
  icon?: JSX.Element | undefined;
  type?: string;
  onClick?: () => void;
  path?: string;
  customClassName?: string;
}

const DefaultButton = ({
  text,
  icon,
  type,
  onClick = () => {},
  path = "/",
  customClassName,
}: IDefaultButton) => {
  switch (type) {
    case "button":
      return (
        <button
          onClick={() => onClick()}
          className={classNames("default-button", customClassName)}
        >
          <>
            {icon}
            {text}
          </>
        </button>
      );
    default:
      return (
        <Link
          to={path}
          className={classNames("default-button", customClassName)}
        >
          <>
            {icon}
            {text}
          </>
        </Link>
      );
  }
};

export default DefaultButton;
