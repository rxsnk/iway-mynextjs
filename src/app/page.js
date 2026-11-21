"use "
import Link from "next/link";
import MyMotto from "./components/MyMotto";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-100 text-amber-800 p-15">


      <Link href="/contact">Go to Contact</Link>
      <Link href="/about">Go to About</Link>
    </div>
  );
}
