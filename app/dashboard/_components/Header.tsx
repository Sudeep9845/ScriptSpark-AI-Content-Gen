import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
        <div className="flex gap-2 items-center p-2 border-2 border-purple-500 rounded-md max-w-lg bg-white">
          <Search />
          <input type="text" placeholder="Search..." className="outline-none" />
        </div>
        <div>
          <div className="p-1 bg-primary flex justify-center items-center rounded-full">
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
}
