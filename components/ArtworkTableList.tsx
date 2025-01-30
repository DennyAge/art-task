"use client";

//core
import { useMemo } from "react";
import Image from "next/image";
//helpers
import useSort from "@/hooks/useSort";
import { cn, formatDate, formatSum, sortArtworks } from "@/lib/utils";
import { headTitle } from "@/constants";
//components
import SortBtn from "@/components/SortBtn";
import StatusBadge from "@/components/StatusBadge";
import VisibilityBadge from "@/components/VisibilityBadge";
import DocsBadge from "@/components/DocsBadge";
import Loader from "@/components/Loader";

interface Props {
  artworks: Artwork[];
}

const ArtworkTableList = ({ artworks }: Props) => {
  const { activeSorter, handleSorterChange } = useSort();
  const sortedArtworks = useMemo(
    () => sortArtworks(artworks, activeSorter),
    [artworks, activeSorter],
  );

  if (!artworks.length) {
    return <Loader />;
  }

  return (
    <div className="hidden md:block overflow-x-auto pb-3">
      <table className="w-full max-w-[1200px] border-separate border-spacing-y-1">
        <thead>
          <tr>
            {headTitle.map((item, index) => (
              <th
                key={item.key}
                className={cn(
                  "py-[20px] px-[10px] text-left text-sm font-medium leading-[20px] text-default-600",
                  item.key === "artwork_name" && "max-w-[140px]",
                  item.key === "artist_name" && "max-w-[200px]",
                  item.key === "updated" && "text-default-900",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  {item.title}
                  {!["status", "documents_number"].includes(item.key) &&
                    index !== 0 && (
                      <SortBtn
                        isActive={activeSorter?.field === item.key}
                        onClick={() => handleSorterChange(item.key)}
                      />
                    )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedArtworks.map((artwork) => (
            <tr
              key={artwork.id}
              className="text-sm bg-default-200 text-default-900 font-medium cursor-pointer shadow-sm text-left  hover:bg-default-100"
            >
              <td className="rounded-s-lg pl-3">
                <div className="w-[55px]">
                  <Image
                    src={`/images/${artwork.main_photo.transformations[1].filename_disk}`}
                    alt={artwork.artwork_name}
                    width={50}
                    height={50}
                    priority
                    className="rounded-md"
                  />
                </div>
              </td>
              <td className="py-[26px] px-[10px] text-left w-full max-w-[137px] flex items-center gap-2">
                <span className="truncate">{artwork.artwork_name}</span>
                {artwork.has_notifications && (
                  <div className="w-[8px] h-[8px] bg-indigo-400 rounded-lg"></div>
                )}
              </td>
              <td className="py-[26px] px-[10px] text-left max-w-[200px] truncate">
                {artwork.artist_name}
              </td>
              <td className="py-[26px] px-[10px] text-left w-max">
                {formatSum(artwork.views)}
              </td>
              <td className="py-[26px] px-[10px] text-left w-max">
                {artwork.creation_year}
              </td>
              <td className="py-[26px] px-[10px] text-left w-max ">
                {<StatusBadge status={artwork.status} />}
              </td>
              <td className="py-[26px] px-[10px] text-left w-max ">
                <VisibilityBadge visible={artwork.visibility} />
              </td>
              <td className="py-[26px] px-[10px] text-left  w-max flex items-center gap-1">
                <Image
                  src="/icons/usdc.svg"
                  alt="usdc"
                  width={18}
                  height={18}
                  className="rounded-md"
                />
                <span>{formatSum(artwork.price)}</span>
              </td>
              <td className="py-[26px] px-[10px] text-left w-max ">
                <DocsBadge docs={artwork.documents_number} />
              </td>
              <td className="py-[26px] px-[10px] text-left  w-max  rounded-e-lg">
                {artwork.date_updated ? formatDate(artwork.date_updated) : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ArtworkTableList;
