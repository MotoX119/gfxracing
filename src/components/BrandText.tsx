interface Props {
  className?: string;
}

export default function BrandText({ className = '' }: Props) {
  return <img src="/gfxracing/logo-text.png" alt="GFX RACING" className={className} />;
}
