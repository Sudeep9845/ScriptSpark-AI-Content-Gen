"use client";
import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: PROPS) => {
  const editorRef: any = useRef();

  // useEffect(() => {
  //   if (!editorRef.current) return;

  //   try {
  //     const editorInstance = editorRef.current.getInstance();
  //     const sanitizedOutput = sanitizeContent(aiOutput); // Example: Sanitize content if needed
  //     editorInstance.setMarkdown(sanitizedOutput);
  //   } catch (error) {
  //     console.error("Error setting editor content:", error);
  //   }
  // }, [aiOutput]);

  // const sanitizeContent = (content: string): string => {
  //   // Example: Basic content sanitization (you may need more sophisticated logic)
  //   return content.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
  // };

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-zinc-950 shadow-lg border-2 rounded-lg text-white border-sky-400  shadow-sky-300">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result is Here😃</h2>
        <Button
          className="flex gap-2 bg-rose-500 hover:bg-rose-600 active:scale-75"
          onClick={() => navigator.clipboard.writeText(aiOutput)}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <div>
        <Editor
          ref={editorRef}
          initialValue="Your Result appears Here"
          initialEditType="wysiwyg"
          height="500px"
          theme="dark"
          useCommandShortcut={true}
          onChange={() =>
            console.log(editorRef.current.getInstance().getMarkdown())
          }
        />
      </div>
    </div>
  );
};

export default OutputSection;
