import { useContext } from "react";
import ThemeContext, { themes } from "../../context/UseContextTheme";

const Button = () => {
  const theme = useContext(ThemeContext);
  return (
    <button>
      I am styled by theme context!
    </button>
  );
};

export default Button;
