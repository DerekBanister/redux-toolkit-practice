import './App.css';
// Use selector is used to read state of store
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/userReducer';
import { useState } from 'react';


function App() {
  // useDispatch is used to dispatch actions.
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');


  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input
          type="text"
          placeholder='Name...'
          onChange={(event) => {
            setName(event.target.value)
          }}
        ></input>
        <input
          type="text"
          placeholder='Username...'
          onChange={(event) => {
            setUsername(event.target.value)
          }}
        ></input>
        {/* using shorthand notation for the dispatch */}
        <button onClick={() => {
          dispatch(addUser({
            // allows us to get the last id in the array and add 1 to it
            id: userList[userList.length - 1].id + 1,
            name,
            username
          }))
        }}>Add User</button>

        <div className="displayUsers"></div>
        {userList.map((user) => {
          return (
            <div className="user" key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
              <br></br>
            </div>
          );
        })}
      </div>
    </div >
  );
}

export default App;
