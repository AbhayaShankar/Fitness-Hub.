"use client";

import { useEffect, useState } from "react";

const SubscribeComp = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div className="z-50 ">SubscribeComp</div>;
};

export default SubscribeComp;
