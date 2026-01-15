const UserCard = ({ user }) => {
  return (
    <div>
      <h3>User Card Component</h3>
      <span>{user.name}</span>
      <p>{user.purchaseHistory.join(", ")}</p>
      <button onClick={() => console.log(user.purchaseHistory)}>click</button>
    </div>
  );
};
export default UserCard;
