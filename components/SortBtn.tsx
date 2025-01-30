interface Props {
  isActive: boolean;
  onClick: () => void;
  color?: string;
}

const SortBtn = ({ isActive, onClick, color = "bg-default-600" }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label={isActive ? "Sort active" : "Sort inactive"}
      className="flex flex-col justify-center items-center cursor-pointer mt-1"
    >
      <div className="flex flex-col gap-[2px]  sm:gap-[3px] w-[10px] h-[10px] md:w-[12px] md:h-[12px]">
        <span
          className={`h-[1px] ${color} transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-[50%]"}`}
        ></span>
        <span className={`h-[1px] ${color} w-[75%]`}></span>
        <span
          className={`h-[1px] ${color} transition-all duration-300 ease-in-out ${isActive ? "w-[50%]" : "w-full"}`}
        ></span>
      </div>
    </button>
  );
};

export default SortBtn;
