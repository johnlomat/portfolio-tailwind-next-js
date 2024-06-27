export const HeadingTwo = ({ title, className = null }) => {
  return (
    <div
      className={`${className} inline-block border-4 border-black px-5 py-3 text-center text-[1.875rem] font-bold uppercase tracking-[0.5rem] md:px-12`}
    >
      <h2>{title}</h2>
    </div>
  );
};
