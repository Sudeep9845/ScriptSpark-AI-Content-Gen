// app/dashboard/settings/[[...rest]].tsx
"use client";
import { UserProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full my-4">
      <UserProfile routing="hash" />
    </div>
  );
};

export default SettingsPage;
