"use client";
import React, { useState, useEffect } from "react";
import { useUserDetailsFillter } from "@/store/useUserDetails";
import Link from "next/link";

const Page = ({ params }) => {
  console.log("params", params);

  // const { userDetails, setUserDetails } = useUserDetailsFillter();
  const [userDetails, setUserDetails] = useState([]);
  const id = params.dataId;
  console.log("userDetails", userDetails);

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
    <div className="container flex mx-auto ">
      {userDetails.id != 2 ? (
        <p>welcome {userDetails.name}</p>
      ) : (
        <p>user not allowed to this page</p>
      )}
      <Link
        href={`/user/${userDetails.id}`}
        className="px-4 py-2 font-bold text-center text-white bg-blue-500 rounded ml-3hover:bg-blue-700"
      >
        back
      </Link>
    </div>
  );
};

export default Page;
