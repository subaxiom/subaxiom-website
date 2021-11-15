import React, { useState } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export const Example = () => {
  return (
    <div>
      <ExampleComponent />
    </div>
  );
};
