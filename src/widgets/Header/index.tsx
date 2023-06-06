import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeFormContainer } from "../forms";
import {
  DropdownSquareButton,
  SquareButton,
  DefaultButton,
} from "../../shared/ui/buttons";

import { ReactComponent as CodespaceLogo } from "../../shared/assets/svg/CodespaceLogo.svg";
import { ReactComponent as IconSettings } from "../../shared/assets/svg/Settings.svg";
import { ReactComponent as IconLightTheme } from "../../shared/assets/svg/LightTheme.svg";
import { ReactComponent as IconDarkTheme } from "../../shared/assets/svg/DarkTheme.svg";
import { ReactComponent as IconExplore } from "../../shared/assets/svg/Explore.svg";
import { ReactComponent as IconDiscord } from "../../shared/assets/svg/Discord.svg";

import "./styles.scss";

const headerButtons = [
  {
    text: "Explore",
    Icon: IconExplore,
    path: "/",
  },
  {
    text: "Discord",
    Icon: IconDiscord,
    path: "/",
  },
  {
    text: "</> Code",
    path: "/editor",
    customClassName: "filled",
  },
];

interface IHeader {
  themeHandler: () => void;
  currentTheme: string;
}

const Header = ({ themeHandler, currentTheme }: IHeader) => {
  const { theme } = useSelector((state: any) => state.Theme);
  const memoizedTheme = useMemo(() => theme, [theme]);

  return (
    <section id="header">
      <div className="header-logo-container text-heading">
        <CodespaceLogo className="header-logo" />
        <span className="header-logo-text">Codespace</span>
      </div>
      <div id="header-buttons">
        {window.location.pathname === "/editor" ? (
          <>
            <DropdownSquareButton
              content={memoizedTheme}
              customId="theme-button"
            >
              <ThemeFormContainer currentTheme={memoizedTheme} />
            </DropdownSquareButton>
            <SquareButton onClick={themeHandler}>
              {currentTheme === "light" ? (
                <IconLightTheme width="85%" height="85%" />
              ) : (
                <IconDarkTheme width="75%" height="75%" />
              )}
            </SquareButton>
            <SquareButton path="/settings">
              <IconSettings width="55%" height="55%" />
            </SquareButton>
          </>
        ) : (
          <>
            {headerButtons.map(({ Icon, ...buttonProps }, idx) => {
              return (
                <DefaultButton
                  key={idx}
                  icon={Icon && <Icon />}
                  {...buttonProps}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
