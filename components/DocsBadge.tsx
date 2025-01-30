import Image from "next/image";

interface Props {
  docs: number;
}

const DocsBadge = ({ docs }: Props) => {
  return (
    <>
      {docs > 0 ? (
        <div className="flex items-center justify-center gap-2 py-1 rounded-md font-normal leading-[16px] bg-indigo-300/50 text-indigo-800 text-xs w-[48px]">
          <Image src="/icons/File.svg" alt="docs" width={16} height={16} />
          {docs}
        </div>
      ) : (
        <div className="flex items-center justify-center py-1 text-xs font-normal leading-[16px] rounded-md bg-default-350 text-default-600 w-[65px]">
          No Docs
        </div>
      )}
    </>
  );
};
export default DocsBadge;
