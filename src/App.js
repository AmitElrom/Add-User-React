import { useState } from "react";
import UserInputs from "./components/user inputs/UserInputs";
import Users from "./components/users general/users/Users";

function App() {

  const [newUser, setNewUser] = useState({})

  const handleNewUser = (newUserVal) => {

    setNewUser(newUserVal)
  }

  return (
    <div >
      <UserInputs onAddUser={handleNewUser} />
      <Users />
    </div>
  );
}

export default App;
