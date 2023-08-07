"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function MobileComponent() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [mobile, setMobile] = useState(isMobile);

  useEffect(() => {
    const checkResize = () => {
      setMobile(isMobile);
    };

    // 이벤트 리스너 등록 및 해제
    window.addEventListener("resize", checkResize);
    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, [isMobile]);

  // mobile 값 반환
  return mobile;
}