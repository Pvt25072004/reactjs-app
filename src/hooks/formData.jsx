const InputFlied = (props) => {
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        id=""
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
export default InputFlied;
