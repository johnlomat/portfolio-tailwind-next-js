// components/HeadingPreset.js

export const HeadingTwo = ({ title }) => {
  return (
    <div className="px-5 py-3 md:px-12 mb-20 inline-block border-4 border-black text-[1.875rem] tracking-[0.5rem] uppercase font-bold text-center">
      <h2>{title}</h2>
    </div>
  );
};
