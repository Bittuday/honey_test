"use client";
import React, { useState, useEffect } from "react";
import { useUserDetailsFillter } from "@/store/useUserDetails";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return <div className="container mx-auto"></div>;
};

export default Page;
