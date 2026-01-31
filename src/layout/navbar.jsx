import TabButton from "../components/tabButton.jsx";
import { useState } from "react";
import { CourseData } from "../constants/courseData.js";
const Navbar = () => {
  const [text, setText] = useState("");
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
    </>
  );
};
export default Navbar;
