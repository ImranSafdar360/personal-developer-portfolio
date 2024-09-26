export default function Container({ children, className }) {
  return (
      <div className={`${className} mx-auto w-full max-w-[1366px] self-center bg-whole text-whole-text px-[60px] py-[30px]`}>
        {children}
    </div>
  );
}
