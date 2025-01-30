import Image from "next/image";

interface Props {
  visible: boolean;
}

const VisibilityBadge = ({ visible }: Props) => {
  return (
    <>
      {visible ? (
        <div
          aria-label="Visible"
          className="flex items-center justify-center gap-2 py-1 rounded-md font-normal bg-[#6EE7B780] text-[#065F46] text-xs w-[78px]"
        >
          <Image src="/icons/Eye.svg" alt="visible" width={16} height={16} />
          Visible
        </div>
      ) : (
        <div
          aria-label="Hidden"
          className="flex items-center justify-center gap-2  py-1 text-xs font-normal rounded-md bg-[#CBD5E1] text-[#1E293B] w-[81px]"
        >
          <Image
            src="/icons/EyeSlash.svg"
            alt="hidden"
            width={16}
            height={16}
          />
          Hidden
        </div>
      )}
    </>
  );
};
export default VisibilityBadge;
