"use client"

import CursorsCanvas from "@/components/CursorsCanvas";
import ModalProvider from "@/components/providers/ModalProvider";
// import { useSearchParams } from "next/navigation";

const Page = () => {
  // const searchParams = useSearchParams()
  // const username = searchParams.get("username") as string ?? null

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="w-full h-full">
      <ModalProvider />
      <CursorsCanvas />
    </div>
  );
}

export default Page;