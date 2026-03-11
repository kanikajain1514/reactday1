import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}

    </div>
  );
}

export default Api;