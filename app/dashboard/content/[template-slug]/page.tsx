"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AIModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
interface PROPS {
  params: {
    "template-slug": string;
  };
}
const CreateContent = (props: PROPS) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  /**
   *Used to generate Content from AI
   * @param formData
   * @returns
   */
  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 20000) {
      console.log("Please Upgrade");
      router.push("/dashboard/billing");
      return;
    }
    setLoading(true);

    const SelectedPrompt = selectedTemplate?.aiPrompt || "";
    const FinalPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalPrompt);

    // console.log("FinalPrompt:", FinalPrompt); // Check FinalPrompt in console

    // const responseText = await fetchAIContentWithRetry(FinalPrompt, 3, 1000);

    // if (responseText) {
    setAiOutput(result?.response.text());
    await SaveInDb(
      JSON.stringify(formData),
      selectedTemplate?.slug || "",
      result?.response.text()
    );
    // }

    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };

  // async function fetchAIContentWithRetry(
  //   prompt: string,
  //   retries: number,
  //   delay: number
  // ): Promise<string | null> {
  //   for (let i = 0; i < retries; i++) {
  //     try {
  // const result = await chatSession.sendMessage(prompt);
  //       return result.response.text();
  //     } catch (error) {
  //       if (i === retries - 1 || !isTemporaryError(error)) {
  //         throw error;
  //       }
  //       await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
  //     }
  //   }
  //   return null;
  // }

  // function isTemporaryError(error: any): boolean {
  //   return error.message.includes("503");
  // }
  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templatesSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress || "",
      createdAt: moment().format("DD/MM/yyyy"),
    });

    console.log(result);
  };
  return (
    <div className=" p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/*Form Section*/}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/*Output Section*/}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
