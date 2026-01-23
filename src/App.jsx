import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import TabButton from "./components/tabButton.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const onClickHandle = (n) => () => setText(n);
  const tabText = {
    1: "Home button clicked",
    2: "Product button clicked",
    3: "Cart button clicked",
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <h2>Tab Buttons</h2>
        <menu>
          <TabButton label="Home" onClickHandled={onClickHandle(1)}>
            {text}
          </TabButton>
          <TabButton label="Product" onClickHandled={onClickHandle(2)}>
            {text}
          </TabButton>
          <TabButton label="Cart" onClickHandled={onClickHandle(3)}>
            {text}
          </TabButton>
          <p>{text ? tabText[text] : ""}</p>
          {/* <TabButton>Home</TabButton>
          <TabButton>Product</TabButton> */}
        </menu>
      </section>
      <Header />
    </>
  );
}

export default App;
