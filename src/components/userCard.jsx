const UserCard = ({ user }) => {
  return (
    <div>
      <h3>User Card Component</h3>
      <span>{user.name}</span>
      <ul>
        {user.purchaseHistory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => console.log(user.purchaseHistory)}>click</button>
    </div>
  );
};
export default UserCard;
