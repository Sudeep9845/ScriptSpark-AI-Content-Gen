import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <div className="p-5 shadow-sm border-b-4 border-b-lime-400 bg-zinc-950 flex justify-end items-center sticky z-1 w-full">
        {/* <div className="flex gap-2 items-center p-2 border-2 border-purple-500 rounded-md max-w-lg bg-white">
          <input type="text" placeholder="Search..." className="outline-none" />
        </div> */}

        <div>
          <div className="rounded-full border-4 border-lime-400">
            <div className="p-1 bg-zinc-800 flex justify-center items-center rounded-full relative right-0">
              <UserButton showName />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
