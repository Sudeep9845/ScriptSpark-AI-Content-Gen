"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: (formData: any) => void;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({});
  const handelInput = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className="p-5 shadow-md border-none rounded-lg bg-zinc-950 ">
      {/* @ts-ignore*/}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />

      <h2 className="font-bold text-2xl mb-2 text-lime-400">
        {selectedTemplate?.name}
      </h2>
      <p className="text-white text-md">{selectedTemplate?.desc}</p>
      <form onSubmit={onSubmit} className="mt-6">
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label htmlFor="" className="font-bold text-orange-400">
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                className="text-white text-md bg-zinc-800"
                name={item.name}
                required={item?.required}
                onChange={handelInput}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                onChange={handelInput}
                className="text-white bg-zinc-800 text-md outline-none border-2 border-sky-400"
              />
            ) : null}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-6 bg-green-500 hover:bg-green-600 active:scale-95"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin" />} Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
