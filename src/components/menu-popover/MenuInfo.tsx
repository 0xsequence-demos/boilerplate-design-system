export function MenuInfo({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`ml-auto mr-0 text-14 inline-flex gap-2   border border-grey-800/50 px-2 py-1.5 rounded-[0.5rem]  `}
    >
      {children}
    </span>
  );
}
