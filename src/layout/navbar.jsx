import TabButton from "../components/tabButton.jsx";
import { useState } from "react";
import { CourseData } from "../constants/courseData.js";
import Section from "../components/section.jsx";
import Tabs from "../components/tabs.jsx";
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
      <Section title="Tab Buttons">
        <Tabs
          buttons={
            <>
              <div className="row">
                <div className="col">
                  <TabButton
                    isSelected={text === "Home page"}
                    label="Home"
                    onClick={(e) => {
                      onClickHandle("Home page", e);
                    }}
                  />
                </div>
                <div className="col">
                  <TabButton
                    isSelected={text === "Product page"}
                    label="Product"
                    onClick={(e) => {
                      onClickHandle("Product page", e);
                    }}
                  />
                </div>
                <div className="col">
                  <TabButton
                    isSelected={text === "Cart page"}
                    label="Cart"
                    onClick={(e) => {
                      onClickHandle("Cart page", e);
                    }}
                  />
                </div>
              </div>
            </>
          }
        >
          {course ? (
            <div>
              <title>{CourseData[course].title}</title>
              <p>{CourseData[course].description}</p>
              <span>{CourseData[course].price}</span>
            </div>
          ) : (
            "Please choose a course"
          )}
        </Tabs>

        <div className="row">
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

        {/* <p>{text}</p> */}
        {/* <p>{text ? tabText[text] : ""}</p> */}
        {/* <TabButton>Home</TabButton>
          <TabButton>Product</TabButton> */}
      </Section>
    </>
  );
};
export default Navbar;
