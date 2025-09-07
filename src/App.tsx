import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    "border-radius": "5px",
  },
});

console.log(styles);

function App() {
  return (
    <main>
      <h1 className="bg-amber-800 text-white underline">
        This H1 is styled with TailWind
      </h1>
      <button {...stylex.props(styles.button)}>
        This button is styled with StyleX
      </button>
    </main>
  );
}

export default App;
