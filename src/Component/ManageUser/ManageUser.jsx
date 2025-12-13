import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManageUser.css";


const BASE_URL = "";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  axios
    .get(`${BASE_URL}/admin/users`)
    .then((res) => {
      const usersArray = Array.isArray(res.data)
        ? res.data
        : res.data.data;

      setUsers(usersArray || []);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);


  const banUser = (id) => {
    axios.post(`${BASE_URL}/admin/users/${id}/ban`).then(() => {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, status: "Banned" } : u
        )
      );
    });
  };

  const unbanUser = (id) => {
    axios.post(`${BASE_URL}/admin/users/${id}/unban`).then(() => {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, status: "Active" } : u
        )
      );
    });
  };

  if (loading) {
    return (
      <p className="text-center text-light mt-5">
        Loading...
      </p>
    );
  }

  return (
    <div className="manage-users-page p-4">
      <h2 className="title mb-4">Manage Users</h2>

      <div className="table-responsive">
        <table className="table table-dark table-hover align-middle">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>
                  <span
                    className={`badge role-${user.role.toLowerCase()}`}
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      user.status === "Active"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="text-center">
                  {user.status === "Active" ? (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => banUser(user.id)}
                    >
                      Ban
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => unbanUser(user.id)}
                    >
                      Unban
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
