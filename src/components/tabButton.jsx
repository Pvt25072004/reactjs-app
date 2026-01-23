// export default function TabButton(props) {
//   return <button>{props.children}</button>;
// }
export default function TabButton({ label, children }) {
  return (
    <button>
      {label}
      {children}
    </button>
  );
}
