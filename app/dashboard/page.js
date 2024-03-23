"use client";
import { useUserDetailsFillter } from "@/store/useUserDetails";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24"></div>
  );
}
