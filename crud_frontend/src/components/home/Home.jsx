import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { userId } = useParams()

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      setUsers.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/users/${userId}`)
    loadUsers()
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped table-hover shadow">
          <thead>
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>

                <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.userId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.userId}`}
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.userId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
