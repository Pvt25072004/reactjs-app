const yearOfExperiences = ["Fresher", "Middle", "Junior", "Senior"];
const randomIndex = (num) => Math.floor(Math.random() * num);
const Header = () => {
  const yoe = yearOfExperiences[randomIndex(yearOfExperiences.length)];
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <p>I have {yoe} in web development</p>
    </header>
  );
};
export default Header;
