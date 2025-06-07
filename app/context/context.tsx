import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext("blue");

export function Context() {
  console.log("Context component rendered");
  const [theme, setTheme] = useState("blue");
  return (
    <>
      <ThemeContext value={theme}>
        <Form />
      </ThemeContext>

      <Button
        onClick={() => {
          setTheme(theme === "blue" ? "red" : "blue");
        }}
      >
        Toggle theme
      </Button>
      <p>(current theme is {theme}, in Context)</p>
    </>
  );
}

function Form({ children }) {
  console.log("Form component rendered");
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  console.log("Panel component rendered");
  const theme = useContext(ThemeContext);
  const className = `bg-${theme}-300`;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
      <p>(current theme is {theme}, in Panel)</p>
    </section>
  );
}

function Button({ children, onClick }) {
  console.log("Button component rendered", children);
  const theme = useContext(ThemeContext);
  const className = `bg-${theme}-300 border`;
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
      <p>(current theme is {theme}, in Button)</p>
    </>
  );
}
