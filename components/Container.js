export default function Container({ children, className }) {
  return (
      <div className={`${className} mx-auto w-full max-w-[1440px] self-center bg-whole text-whole-text px-[20px] md:px-[40px] lg:px-[60px] py-[30px]`}>
        {children}
    </div>
  );
}
