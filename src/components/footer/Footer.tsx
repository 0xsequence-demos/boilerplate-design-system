export function Footer({ to }: { to: string }) {
  return (
    <div className="text-14 font-medium">
      <p>
        Want to learn more? Read the{"  "}
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-white"
        >
          docs
        </a>
        !
      </p>
    </div>
  );
}
