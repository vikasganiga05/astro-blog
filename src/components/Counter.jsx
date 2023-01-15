import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="bg-blue-400 text-blue-900"
      onClick={() => setCount((prev) => prev + 1)}
    >
      {count}
    </button>
  );
};

export default Counter;
