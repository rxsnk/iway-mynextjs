"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-items-center  py-4 px-6 rounded-lg shadow border">
      <p className="text-2xl"> Contact Me </p>
      <p className="text-lg mb-4"> Gmail: rexxa.ai07@gmail.com </p>
      <button
        onClick={() => router.back()}
        className="px-4 py-2 rounded-lg shadow mt-4"
      >
        Back to home
      </button>
    </div>
  );
}
