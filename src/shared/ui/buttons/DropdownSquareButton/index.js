import { useState } from "react";
import classNames from "classnames";
import { ReactComponent as IconEditorsTop } from "../../../assets/svg/EditorsTop.svg";
import { ReactComponent as IconEditorsLeft } from "../../../assets/svg/EditorsLeft.svg";
import { ReactComponent as IconEditorsRight } from "../../../assets/svg/EditorsRight.svg";
import "./styles.scss";

const DropdownSquareButton = ({
  content,
  customClassName,
  customId,
  details,
  clickHandler,
  children,
}) => {
  const [active, toggleActive] = useState(false);
  const handleClick = () => {
    toggleActive(!active);
  };

  // Handle click outside of the button
  const button = document.getElementById(customId);
  window.onclick = function (event) {
    if (event.target !== button) {
      toggleActive(false);
    }
  };

  const themeIcon = (theme) => {
    if (theme === "editors-top") {
      return <IconEditorsTop />;
    } else if (theme === "editors-left") {
      return <IconEditorsLeft />;
    } else if (theme === "editors-right") {
      return <IconEditorsRight />;
    }
    return "Theme";
  };

  return (
    <div className="square-button-wrapper">
      <button
        className={classNames("square-button", customClassName)}
        onClick={() => handleClick()}
        id={customId}
      >
        {themeIcon(content)}
      </button>
      <div className={classNames("button-details", active && "active")}>
        {children}
      </div>
    </div>
  );
};

export default DropdownSquareButton;
