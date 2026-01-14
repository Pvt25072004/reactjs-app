const CoreConcept = (props) => {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.des}</p>
      <img src={props.image} alt="JavaScript" />
      <br />
      <button onClick={props.notify}>Click Me</button>
    </div>
  );
};
export default CoreConcept;
