import { twMerge } from "tailwind-merge";

export default function MapEmbed({
  address = '2481 Kaladar Ave, Ottawa, ON',
  height = 320,
  className
}: {
  address?: string;
  height?: number;
  className?: string;
}) {
  const query = encodeURIComponent(address);
  const classNameCombined = twMerge("rounded-lg overflow-hidden border border-white/10", className);

  return (
    <figure className={classNameCombined}>
      <iframe
        src={`https://maps.google.com/maps?q=${query}&output=embed&z=16`}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${address}`}
        aria-label={`Google Map showing the location of ${address}`}
      />
      <figcaption className="px-3 py-2 text-sm text-zinc-400 bg-surface border-t border-white/10">
        <address className="not-italic">{address} &mdash; Unit 103</address>
      </figcaption>
    </figure>
  );
}
