import "./button.css";

export default function Button({ setInput }) {
  const handleClick = (button) => {
    if (button === "=") {
      try {
        setInput((prev) => eval(prev));
      } catch {
        setInput("Error");
      }
      return;
    } else if (button === "C") {
      setInput("0");
    } else if (button === "CE") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + button);
    }
  };
  return (
    <div className="buttons">
      {[
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        ".",
        "0",
        "00",
        "+",
        "C",
        "CE",
        "%",
        "=",
      ].map((button) => (
        <button
          className="button"
          key={button}
          onClick={() => handleClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
