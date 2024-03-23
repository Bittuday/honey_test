"use client";
import React, { useState, useEffect } from "react";
import { useUserDetailsFillter } from "@/store/useUserDetails";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { userDetails, setUserDetails } = useUserDetailsFillter();
  const router = useRouter();
  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      if (res.ok) {
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleViewClick = (user) => {
    setUserDetails(user);

    router.push(`user/${user?.id}`);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">User Name</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 text-center border">{user.name}</td>
              <td className="px-4 py-2 text-center border">
                <button
                  className="px-4 py-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={() => handleViewClick(user)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
