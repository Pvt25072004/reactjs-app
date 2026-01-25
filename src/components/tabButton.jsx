export default function TabButton(props) {
  const handleClick = () => {
    console.log("This is a log when you click btn");
  };
  return (
    <div>
      <button
        className={props.isSelected ? "active" : ""}
        onClick={props.onClickHandled}
      >
        {props.label}
      </button>
    </div>
  );
}
// export default function TabButton({ label, children }) {
//   return (
//     <button>
//       {label}
//       {children}
//     </button>
//   );
// }
