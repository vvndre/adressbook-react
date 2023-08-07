import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      /* Action To Take */
      axios.get("https://randomuser.me/api?results=25").then(({ data }) => {
        console.log(data.results);
        setUsers(data.results);
      });
    },
    [
      /* Leave Empty To Execute Once */
    ]
  );

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            <img src={user.picture.medium} />
            <h3>{user.name.first}</h3>
            <button onClick={false}>Show Details</button>
            {/* Include details if button was clicked */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
