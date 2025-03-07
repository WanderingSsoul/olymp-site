import { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-3 font-medium text-lg bg-gray-100 hover:bg-gray-200"
      >
        {title}
      </button>
      <div className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="p-3 bg-white">{children}</div>
      </div>
    </div>
  );
};

const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="border border-gray-300 rounded-md">{children}</div>;
};

export { Accordion, AccordionItem };
