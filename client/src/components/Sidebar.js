const Sidebar = ({ category, name, time, description, address }) => {
  return (
    <div className="sidebar">
      <p>{name}</p>
      <p>{address}</p>
      <p>{time}</p>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  );
};

export default Sidebar;
