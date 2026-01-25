import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import TabButton from "./components/tabButton.jsx";
import InputFlied from "./hooks/formData.jsx";
import { CourseData } from "./constants/courseData.js";

function App() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [course, setCourse] = useState();

  const onClickHandle = (selected, e) => {
    e.preventDefault();
    // setText(selected);
    setCourse(selected);
  };
  // const onClickHandle = (n) => () => setText(n);
  const tabText = {
    1: "Home button clicked",
    2: "Product button clicked",
    3: "Cart button clicked",
  };
  const onHandleInput = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  console.log("app");
  return (
    <>
      <section>
        <h2>Tab Buttons</h2>
        <div className="row">
          <div className="col">
            <TabButton
              isSelected={text === "Home page"}
              label="Home"
              onClickHandled={(e) => {
                onClickHandle("Home page", e);
              }}
            />
          </div>
          <div className="col">
            <TabButton
              isSelected={text === "Product page"}
              label="Product"
              onClickHandled={(e) => {
                onClickHandle("Product page", e);
              }}
            />
          </div>
          <div className="col">
            <TabButton
              isSelected={text === "Cart page"}
              label="Cart"
              onClickHandled={(e) => {
                onClickHandle("Cart page", e);
              }}
            />
          </div>
          {/* <div className="col">
            <TabButton label="Home" onClickHandled={onClickHandle(1)} />
          </div>
          <div className="col">
            <TabButton label="Product" onClickHandled={onClickHandle(2)} />
          </div>
          <div className="col">
            <TabButton label="Cart" onClickHandled={onClickHandle(3)} />
          </div> */}
        </div>
        {course ? (
          <div>
            <title>{CourseData[course].title}</title>
            <p>{CourseData[course].description}</p>
            <span>{CourseData[course].price}</span>
          </div>
        ) : (
          "Please choose a course"
        )}
        {/* <p>{text}</p> */}
        {/* <p>{text ? tabText[text] : ""}</p> */}
        {/* <TabButton>Home</TabButton>
          <TabButton>Product</TabButton> */}
      </section>
      <Header />

      <form action="">
        <InputFlied
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <InputFlied
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={onHandleInput}>Login</button>
      </form>
    </>
  );
}

export default App;
