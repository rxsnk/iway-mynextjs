"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-items-center  py-4 px-6 rounded-lg shadow border">
      <p className="text-lg font-bold text-center"> About </p>
      <img
       className="w-64 rounded-full shadow-lg justify-center items-center mx-auto my-4  ``"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Hbt9C6WkRDqaA_hHtuxGm8PBvGLPZFRfyBhaGLjkIA&s=10"></img>
      
      <button
        onClick={() => router.back()}
        className="bg-amber-600 text-white px-4 py-2 rounded-lg shadow mt-4"
      >
        Back to home
      </button>
    </div>
  );
}
