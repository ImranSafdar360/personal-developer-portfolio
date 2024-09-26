export default function Section({ children, className }) {
  return (
      <div className={`${className} w-full py-[30px] bg-whole text-whole-text`}>
        {children}
    </div>
  );
}
