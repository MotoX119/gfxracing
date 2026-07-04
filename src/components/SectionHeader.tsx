export default function SectionHeader({title}: {title:string}) {
  return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-18 text-center">
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
           {title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-16 bg-red-600 rounded-full" />
        </div>
      </div>
  );
}

