import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import CopyButton from "./_components/CopyButton";
import Image from "next/image";
import RotateRefreshButton from "./_components/RotateRefreshButton";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templatesSlug: string;
  createdBy: string;
  createdAt: string;
}
async function History() {
  const user = await currentUser();

  // @ts-expect-error
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    // @ts-ignore
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIOutput.id));
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates?.find(
      (item) => item.slug == slug
    );
    return template;
  };
  return (
    <div className="m-5 p-5 rounded-lg bg-zinc-950">
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="font-bold text-orange-400 text-3xl">History</h2>
          <p className="text-sky-500">
            Search your previously generate AI content
          </p>
        </div>
        <div>
          <RotateRefreshButton />
        </div>
      </div>
      <div className="rounded-lg bg-zinc-800 text-sky-400 grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3 ">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.map((item: HISTORY, index: number) => (
        <>
          <div
            key={index}
            className="grid grid-cols-7 my-5 py-3 px-3 bg-zinc-800  rounded-lg "
          >
            <h2 className="col-span-2 flex gap-2 items-center text-lg text-lime-400 font-semibold">
              <Image
                src={GetTemplateName(item?.templatesSlug)?.icon}
                width={25}
                height={25}
                alt="icon"
              />
              {GetTemplateName(item.templatesSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3 mr-3 text-orange-400">
              {item?.aiResponse}
            </h2>
            <h2 className="h-full pt-6 text-zinc-100">{item.createdAt}</h2>
            <h2 className="h-full pt-6 text-purple-400">
              {item?.aiResponse.length}
            </h2>
            <h2>
              <CopyButton aiResponse={item.aiResponse} />
            </h2>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
export default History;
