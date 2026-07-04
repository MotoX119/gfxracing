import { twMerge } from "tailwind-merge";

export default function SectionHeader({title, className}: {title:string; className?: string; }) {
  const classNameCombined = twMerge("text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-18", className);
  return (
      <h2 className={classNameCombined}>
        {title}
        <div className="mt-4 h-1 w-auto bg-red-600 rounded-full" />
      </h2>
  );
}
