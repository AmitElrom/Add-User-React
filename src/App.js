import { useState } from "react";
import UserInputs from "./components/user inputs/UserInputs";
import Users from "./components/users general/users/Users";
import ErrorModal from "./components/UI/error modal/ErrorModal";

import './App.css'

function App() {

  // fake database - users collection
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({ isError: false, errorType: '' });

  const handleNewUser = (newUserVal) => {

    setError((prevVal) => {
      return { ...prevVal, isError: false }
    })
    setUsers((prevVal) => {
      return [...prevVal, newUserVal]
    })
  }

  const handleDelete = (userId) => {
    setUsers((prevVal) => {
      return prevVal.filter(user => user.id !== userId)
    })
  }

  const handleError = (errorType) => {
    setError((prevVal) => {
      return { ...prevVal, isError: true, errorType }
    })
  }

  return (
    <div >
      <UserInputs onAddUser={handleNewUser} onError={handleError} />
      {users.length > 0 &&
        <Users
          users={users}
          onDelete={handleDelete} />}

      {error.isError &&
        <ErrorModal
          error={error.errorType}
        />}
    </div>
  );
}

export default App;
