import React, { useState, useEffect } from 'react';

const TOTAL_USERS = 6;

const Exercise01 = () => {
  const [users, setUsers] = useState([]); 
  let a , filtro 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(dato => {
        filtro = dato.length;
        let users = [];
        if(dato.length > TOTAL_USERS -1){
          filtro = TOTAL_USERS;
        }
        for (a=0; a< filtro; a++) {
          users = [...users, dato[a]];         
        }
        return users;        
      })
      .then(users =>
        setUsers(users)
      ); 
    }, []); 
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>We are currently trying to render the first 5 users we obtain from a REST API. The problem is that, for some reason, it's only rendering one of them. Another thing we've noticed is that, sometimes, it renders different user.</p>

      <p>
        <strong>TODO:</strong>
        <ul>
          <li>Fetch and Render the first 5 users</li>
          <li>Make sure the order is ascendant by ID</li>
        </ul>
      </p>

      <hr className="my-5" />

      <h3>Users</h3>

      <ul className="list-group">
        {users.map(user => <li key={`user-${user.id}`} className="list-group-item">
          <strong>ID:</strong> {user.id} - <strong>Name:</strong> {user.name} <strong>Email:</strong> {user.email}
        </li>)}
      </ul>

    </div>
  );
};
export default Exercise01;