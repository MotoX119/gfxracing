import { twMerge } from "tailwind-merge";



export default function SectionContainer({ id, className, isStriped, children }: { id: string; className?: string; isStriped?: boolean; children: React.ReactNode }) {
  const classNameCombined = twMerge("py-30 border-t border-white/5", isStriped && "bg-[#0d0d0d] racing-stripe", className);

  return (
    <section className={classNameCombined} id={id}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
  );
}



