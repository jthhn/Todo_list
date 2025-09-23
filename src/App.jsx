import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="bg-black text-white text-4xl p-10">Hey Iam Red.</div>
      </div>
    </>
  );
}

export default App;
