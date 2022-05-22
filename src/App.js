import { useState } from "react";
import UserInputs from "./components/user inputs/UserInputs";
import Users from "./components/users general/users/Users";

function App() {

  // fake database - users collection
  const [users, setUsers] = useState([]);

  const handleNewUser = (newUserVal) => {

    setUsers((prevVal) => {
      return [...prevVal, newUserVal]
    })
  }

  return (
    <div style={{ textAlign: 'center' }} >
      <UserInputs onAddUser={handleNewUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
