import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
  },
});

console.log(styles)

function App() {
  return (
    <>
      <h1 className="underline">Vite + React</h1>
      <button {...stylex.props(styles.button)}>StyleX Button</button>
    </>
  )
}

export default App
