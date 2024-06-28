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
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore*/}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />

      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-grey-500 text-sm">{selectedTemplate?.desc}</p>
      <form onSubmit={onSubmit} className="mt-6">
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label htmlFor="" className="font-bold">
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handelInput}
              />
            ) : item.field == "textarea" ? (
              <Textarea name={item.name} onChange={handelInput} />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />} Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
