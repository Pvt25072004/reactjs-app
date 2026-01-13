import { userData, adminData } from "./constants/userData.js";
import imageProgramming from "../public/images/programming.avif";
const yearOfExperiences = ["Fresher", "Middle", "Junior", "Senior"];
const randomIndex = (num) => Math.floor(Math.random() * num);
const Header = () => {
  const yoe = yearOfExperiences[randomIndex(yearOfExperiences.length)];
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
    </header>
  );
};
export default Header;
