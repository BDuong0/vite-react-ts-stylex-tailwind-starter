import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

const styles = stylex.create({
  header: {
    backgroundColor: "cornflowerblue",
    color: "white",
    border: "1px solid red",
  },
  title: {
    backgroundColor: "rgb(255, 0, 251)",
    fontWeight: "bold",
    color: "white",
  },
});

const Test_Component = () => {
  const [headerState, setHeaderState] = useState(true);

  return (
    <div>
      <h2 data-cy="test-component" {...stylex.props(styles.header)}>
        Element with StyleX styles applied
      </h2>
      <p className="bg-amber-500 font-bold">
        Element with Tailwind styles applied
      </p>
    </div>
  );
};

export default Test_Component;
