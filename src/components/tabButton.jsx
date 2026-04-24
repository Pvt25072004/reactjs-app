export default function TabButton({ label, isSelected, ...props }) {
  const handleClick = () => {
    console.log("This is a log when you click btn");
  };
  console.log("tab");
  return (
    <div>
      <button className={isSelected ? "active" : ""} {...props}>
        {label}
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
