import {
  userData,
  adminData,
  yearOfExperiences,
} from "./constants/userData.js";
import imageProgramming from "./assets/images/programming.avif";
import jsLanguage from "./assets/images/js.avif";
import CoreConcept from "./components/coreConcept.jsx";
import Card from "./components/card.jsx";
import { cardData } from "./constants/cardData.js";
import UserCard from "./components/userCard.jsx";

const Header = () => {
  const randomIndex = (num) => Math.floor(Math.random() * num);
  const yoe = yearOfExperiences[randomIndex(yearOfExperiences.length)];
  const alertClick = () => {
    alert("You clicked me!");
    console.log(cardData);
  };
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <p>I have {yoe} in web development</p>
      <h3>My info about me</h3>
      <ul>
        <li>Name: {userData.name}</li>
        <li>Age: {userData.age}</li>
        <li>Email: {userData.email}</li>
      </ul>
      <img src={imageProgramming} alt="programming" width="300" />
      <h3>Admin Info</h3>
      <ul>
        <li>Name: {adminData.name}</li>
        <li>Password: {adminData.password}</li>
      </ul>
      <CoreConcept
        heading="Javascript"
        des="This is a basic course about js"
        image={jsLanguage}
        notify={alertClick}
      />
      <Card title={cardData[0].title} image={cardData[0].image} />
      {/* rest in array */}
      <Card {...cardData[1]} />
      <Card {...cardData[2]} />
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <UserCard user={userData} />
    </header>
  );
};
export default Header;
