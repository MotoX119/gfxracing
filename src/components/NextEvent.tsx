import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { events } from '../../content/events';


function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

const DAY_SHORT  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDay(iso: string): string {
  const d = parseLocalDate(iso);
  return `${DAY_SHORT[d.getDay()]}, ${MONTH_SHORT[d.getMonth()]} ${d.getDate()}`;
}

export default function NextEvent({className}:{className?: string;}) {
    const today = useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);

    // Sort all future events chronologically
    const upcoming = useMemo(
        () =>
        events
            .filter((e) => parseLocalDate(e.date) >= today)
            .sort(
            (a, b) =>
                parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime(),
            ),
        [today],
    );

    // featured "next race" card
    const nextEvent = upcoming[0];      

    if (!nextEvent) {
        return null;
    }

    const classNameCombined = twMerge("mb-10 rounded-2xl bg-red-600 px-6 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[0_0_50px_rgba(220,38,38,0.3)] relative overflow-hidden", className);
    
    return (
      <div
        className={classNameCombined}
        aria-label={`Next Race: ${nextEvent.title} on ${formatDay(nextEvent.date)}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg,white,white 1px,transparent 1px,transparent 14px)',
          }}
        />
        <div className="relative">
          <p className="text-white text-2xl sm:text-3xl font-black leading-tight">
            {nextEvent.title}
          </p>
          <p className="text-red-100 text-lg mt-1">
            {formatDay(nextEvent.date)}
            {nextEvent.notes ? ` · ${nextEvent.notes}` : ''}
          </p>
        </div>
        <a
          href="#membership"
          className="relative shrink-0 self-start sm:self-auto px-6 py-2.5 rounded-full bg-white text-red-600 text-sm font-black uppercase tracking-wide hover:bg-red-50 transition-colors"
        >
          Race Info →
        </a>
      </div>
    )
}