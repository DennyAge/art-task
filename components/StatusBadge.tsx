import { cn } from "@/lib/utils";

interface Props {
  status:
    | "draft"
    | "on_sale"
    | "on_digitalization"
    | "ready_for_verification"
    | "published"
    | string
    | null;
}

const StatusBadge = ({ status }: Props) => {
  let badgeText = "";
  let badgeColor = "";
  let badgeTextColor = "";

  switch (status) {
    case null:
    case "draft":
      badgeText = "Draft";
      badgeColor = "bg-default-350";
      badgeTextColor = "text-default-900";
      break;
    case "on_sale":
      badgeText = "On Sale";
      badgeColor = "bg-[#86EFAC80]";
      badgeTextColor = "text-green-800";
      break;
    case "on_digitalization":
      badgeText = "On Digitalization";
      badgeColor = "bg-[#5F6EFF40]";
      badgeTextColor = "text-[#5F6EFF40]";
      break;
    case "ready_for_verification":
      badgeText = "Ready to Verification";
      badgeColor = "bg-[#FDBA7480]";
      badgeTextColor = "text-orange-800";
      break;
    case "published":
      badgeText = "Published";
      badgeColor = "bg-[#CBD5E1]";
      badgeTextColor = "text-[#1E293B]";
      break;
  }

  return (
    <div
      aria-label={`Status: ${badgeText}`}
      className={cn(
        badgeColor,
        badgeTextColor,
        "flex items-center justify-center rounded-[50px] py-1 px-[10px] text-xs font-normal leading-[16px] w-max",
      )}
    >
      {badgeText}
    </div>
  );
};
export default StatusBadge;
