import React, { useState, useEffect } from "react";
import "./App.scss";

const App = () => {
  const API = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => {
        console.error("Fetching Error😢😢😢: ", error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.login.uuid !== userId));
  };

  return (
    <div className="container">
      <h1>Random Users by IBL</h1>
      {users.map((user) => (
        <div className="user" key={user.login.uuid}>
          <img src={user.picture.medium} alt="User" />
          <p>Hi my name's {`${user.name.first} ${user.name.last}`}</p>
          <p>and I'm from {`${user.location.country}`}</p>
          <button onClick={() => handleDeleteUser(user.login.uuid)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
