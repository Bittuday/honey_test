"use client";
import React, { useState, useEffect } from "react";
import { useUserDetailsFillter } from "@/store/useUserDetails";
import Link from "next/link";

const Page = ({ params }) => {
  console.log("params", params.id);

  // const { userDetails, setUserDetails } = useUserDetailsFillter();
  const [userDetails, setUserDetails] = useState([]);
  const id = params.id;

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();

      if (res.ok) {
        setUserDetails(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [params.id]);

  return (
    <div className="">
      <div className="container mx-auto">
        <p>
          <strong>Name:</strong> {userDetails.name}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {userDetails.phone}
        </p>
      </div>
      <Link
        href={`/dashboard/${userDetails.id}`}
        className="px-4 py-2 mt-4 font-bold text-center text-white bg-blue-500 rounded ml-15 hover:bg-blue-700"
      >
        Dashboard
      </Link>

      <Link
        href={"/"}
        className="px-4 py-2 font-bold text-center text-white bg-blue-500 rounded ml-15 hover:bg-blue-700"
      >
        Home
      </Link>
    </div>
  );
};

export default Page;
