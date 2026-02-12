import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-bold text-sky-700">Hello World</p>
      <Button variant="destructive">Click Me</Button>
    </div>
  );
}
