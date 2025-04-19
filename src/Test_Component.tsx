import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  header: {
    backgroundColor: "cornflowerblue",
    color: "white",
    border: "1px solid red",
  },
});

const Test_Component = () => {
  return (
    <div>
      <h2 {...stylex.props(styles.header)}>
        Element with StyleX styles applied
      </h2>
      <p className="bg-amber-500 font-bold">
        Element with Tailwind styles applied
      </p>
    </div>
  );
};

export default Test_Component;
