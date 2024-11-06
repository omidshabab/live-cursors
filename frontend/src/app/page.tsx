"use client"

import CursorsCanvas from "@/components/CursorsCanvas";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams()
  const username = searchParams.get("username") as string ?? null

  return (
    <main>
      <CursorsCanvas />
    </main>
  );
}

export default Page;