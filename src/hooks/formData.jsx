import { Fragment } from "react";
const InputFlied = (props) => {
  return (
    <Fragment>
      <input
        type={props.type}
        name={props.name}
        id=""
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
};
export default InputFlied;
