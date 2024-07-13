"use client";
import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

export default function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      {/*Serach Sections*/}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/*Template list section*/}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}
