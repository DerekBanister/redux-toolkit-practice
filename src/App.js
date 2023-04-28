import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/userReducer';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder='Name...'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder='Username...'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={() => {
          dispatch(addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            username
          }));
          setName('');
          setUsername('');
        }}>Add User</button>
      </div>
      <div className="displayUsers">
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
