import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

const CLASSES_1_28 = [
  "Box Stock",
  "AAA Superstock",
  "F1",
  "50+",
  "2500 Spec",
  "3500 Lipo Lexan",
  "2wd Mod",
  "4wd Mod",
] as const;

const CLASSES_1_10_1_12 = [
  "TBD"
] as const;

interface ScaleCardProps {
  scale: string;
  subtitle: string;
  classes: readonly string[];
}

function ScaleCard({ scale, subtitle, classes }: ScaleCardProps) {
  return (
    <div className="bg-surface rounded-2xl border border-white/10 overflow-hidden">
      {/* Card header */}
      <div className="bg-red-600 px-6 py-5 relative overflow-hidden">
        {/* Decorative diagonal stripe in card header */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 12px)",
          }}
        />
        <p className="relative text-red-200 text-[10px] font-bold uppercase tracking-widest mb-1">
          Scale
        </p>
        <h3 className="relative text-3xl font-black text-white leading-none">{scale}</h3>
        <p className="relative text-red-200 text-sm mt-1">{subtitle}</p>
      </div>

      {/* Class list */}
      <ul className="divide-y divide-white/5" role="list">
        {classes.map((cls) => (
          <li
            key={cls}
            className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors group"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0 group-hover:bg-red-400 transition-colors"
            />
            {cls}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ClassesSection() {
  return (
    <SectionContainer id="classes" isStriped={false}>
        <SectionHeader title="Classes &amp; Rules" />
        
        <div className="mb-14 text-center">
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            GFX★RACING runs competitive classes across three scale platforms.
            From beginner-friendly Box Stock to open Modified — there"s a class for every driver.
          </p>
        </div>
        
        {/* Scale cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <ScaleCard scale="1/28" subtitle="Mini carpet racing" classes={CLASSES_1_28} />
          <ScaleCard scale="1/12 - 1/10" subtitle="Carpet racing" classes={CLASSES_1_10_1_12} />
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600">
          Full class specifications and technical rules are available at the track.
        </p>
    </SectionContainer>
  );
}

