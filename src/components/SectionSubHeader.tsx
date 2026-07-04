export default function SectionSubHeader({title}: {title:string;}) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
      {title}
    </h3>
  );
}

