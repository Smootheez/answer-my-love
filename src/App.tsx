import { useState } from "react";
import pinching from "/cute-sweet.gif";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-2">
      <img src={pinching} alt="pinching" />
      <h1 className="text-3xl font-bold">Do you love me?</h1>
      <div className="flex gap-4 mb-26">
        <Link to="/yes">
          <button className="bg-red-500 rounded-full w-15 px-3 py-1 drop-shadow-red-500 drop-shadow-xl hover:bg-red-500/70 transition-colors duration-300">
            Yes
          </button>
        </Link>
        <div className="w-15">
          <NoButton />
        </div>
      </div>
    </div>
  );
}

export default App;

function NoButton() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  const handleClick = () => {
    if (isInitial) {
      setIsInitial(false);
    }
    setTop(Math.random() * (window.innerHeight - 50));
    setLeft(Math.random() * (window.innerWidth - 50));
  };

  return (
    <button
      className="bg-red-500 rounded-full w-15 px-3 py-1 drop-shadow-red-500 drop-shadow-xl hover:bg-red-500/70 transition-colors duration-300"
      style={{ position: isInitial ? "relative" : "absolute", top, left }}
      onClick={handleClick}
    >
      No
    </button>
  );
}
