import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      type="button"
    >
      {theme === "dark" ? <img src={sunIcon} alt="sun" className="theme-toggle-img" /> : <img src={moonIcon} alt="moon" className="theme-toggle-img" />}
    </button>
  );
}

export default ThemeToggle;
