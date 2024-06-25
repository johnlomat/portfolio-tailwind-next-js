// components/Separator.js
import Image from "next/image";

const Separator = () => {
  return (
    <div className="w-full flex justify-center bg-transparent -mt-[0.8125rem] translate-y-2">
      <Image src="images/separatorBlack 1.png" alt="Separator" width={170} height={12} />
    </div>
  );
};

export default Separator;
