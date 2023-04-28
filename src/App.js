import './App.css';
// Use selector is used to read state of store
import { useSelector } from 'react-redux';

//grabs current state of users list


function App() {
  const userList = useSelector((state) => state.users.value);
  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input type="text" placeholder='Name...'></input>
        <input type="text" placeholder='Username...'></input>
        <button>Add User</button>

        <div className="displayUsers"></div>
        {userList.map((user) => {
          return (
            <div className="user" key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
