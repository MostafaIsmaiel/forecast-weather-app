import { useEffect } from "react";

const Header = (props) => {
  const { isC, celsius, setToggle, toggle, setDark } = props;

  function handleToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleDark = () => {
      const toggleContainer = document.querySelector(".toggle-mode");

      if (toggle) {
        setDark("dark");
        toggleContainer.classList.add("active");
      } else {
        setDark("");
        toggleContainer.classList.remove("active");
      }
    };
    handleDark();
  }, [setDark, toggle]);

  return (
    <section className="header">
      <h2 className="temperature-heading">Week</h2>
      <div
        className="toggle-mode"
        onClick={() => {
          handleToggle();
        }}
      ></div>
      <div className="temperature">
        <div
          className={`celsius ${celsius ? "active" : ""}`}
          onClick={() => isC(true)}
        >
          °C
        </div>
        <div
          className={`fahrenheit ${!celsius ? "active" : ""}`}
          onClick={() => isC(false)}
        >
          °F
        </div>
      </div>
    </section>
  );
};

export default Header;
