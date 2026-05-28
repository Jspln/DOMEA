/* eslint-disable @next/next/no-img-element */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/domea-sans-fond.png"
      alt="DOMÉA — Services à domicile"
      className={className}
    />
  );
}
