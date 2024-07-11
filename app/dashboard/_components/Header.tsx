import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <div className="p-5 shadow-sm border-b-2 bg-zinc-950 flex justify-end items-center sticky z-1 w-full">
        {/* <div className="flex gap-2 items-center p-2 border-2 border-purple-500 rounded-md max-w-lg bg-white">
          <input type="text" placeholder="Search..." className="outline-none" />
        </div> */}

        <div>
          <div className="p-1 bg-primary flex justify-center items-center rounded-full relative right-0">
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
}
