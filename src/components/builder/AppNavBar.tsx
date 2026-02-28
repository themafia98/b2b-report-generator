import { NavBar, NavLinks, NavLink, NavRight } from "./styled-navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageSelector } from "../language-selector/language-selector.tsx";
import { useTranslation } from "react-i18next";

export const AppNavBar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <NavBar>
      <NavLinks>
        <NavLink
          href="/"
          active={location.pathname === "/"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          {t("Home")}
        </NavLink>
        <NavLink
          href="/builder"
          active={location.pathname === "/builder"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/builder");
          }}
        >
          {t("Builder")}
        </NavLink>
        <NavLink
          href="/help"
          active={location.pathname === "/help"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/help");
          }}
        >
          {t("Help")}
        </NavLink>
        <NavLink
          href="/reports"
          active={location.pathname === "/reports"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/reports");
          }}
        >
          {t("Saved Reports")}
        </NavLink>
      </NavLinks>
      <NavRight>
        <LanguageSelector />
      </NavRight>
    </NavBar>
  );
};
