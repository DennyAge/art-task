interface Props {
  isActive: boolean;
  onClick: () => void;
}

const SortBtn = ({ isActive, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center cursor-pointer mt-1"
    >
      <div className="flex flex-col gap-[2px] w-[10px] h-[10px] md:w-[12px] md:h-[12px]">
        <span
          className={`h-[1px] bg-default-600 transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-[50%]"}`}
        ></span>
        <span className="h-[1px] bg-default-600 w-[75%]"></span>
        <span
          className={`h-[1px] bg-default-600 transition-all duration-300 ease-in-out ${isActive ? "w-[50%]" : "w-full"}`}
        ></span>
      </div>
    </button>
  );
};

export default SortBtn;
