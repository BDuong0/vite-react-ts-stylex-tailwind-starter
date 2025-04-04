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
      <h1>Vite + React</h1>
      <button {...stylex.props(styles.button)}>Click me</button>
    </>
  )
}

export default App
