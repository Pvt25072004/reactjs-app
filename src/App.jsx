import { useState } from "react";
import "./App.css";
import Header from "./layout/Header.jsx";
import TabButton from "./components/tabButton.jsx";
import InputFlied from "./hooks/formData.jsx";
import { CourseData } from "./constants/courseData.js";
import Navbar from "./layout/navbar.jsx";

function App() {
  // when should you split components
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  console.log("app");
  return (
    <>
      <Navbar />
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
