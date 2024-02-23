import React from "react";

const MyButton = ({ isActive }) => {

  const myboutonStyles = {
    backgroundColor: isActive ? "green" : "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px"
  };

  return (
    <div>

      <button style={myboutonStyles}>Clickez-moi</button>
    </div>
  );
};

export default MyButton;