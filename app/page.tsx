import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-3xl flex items-center p-5 justify-between">
      <div>Hello Next!</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
