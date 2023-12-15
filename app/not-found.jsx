"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NotFound() {
  const [redirect, setRedirect] = useState("6");
  const router = useRouter();

  useEffect(() => {
    let time = 5;
    const timer = setInterval(() => {
      if (time > 0) {
        setRedirect(time);
        time--;
      } else {
        // router.push("/");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <Image
        src={"/error.png"}
        alt="error"
        height={500}
        width={400}
        className="w-48 h-auto"
      />
      <p className="text-[34px] font-semibold text-[#292929] tracking-wider">
        There was a problem. !!
      </p>

      <p className="">We could not find the page you were looking for.</p>
      <p className="leading-7">Re-routing to Home page in {redirect}</p>
    </div>
  );
}
