import Image from "next/image";

import { formatDate, formatSum, sortArtworks } from "@/lib/utils";
import { mobileFilterTitle } from "@/constants";
import useSort from "@/hooks/useSort";

import StatusBadge from "@/components/StatusBadge";
import VisibilityBadge from "@/components/VisibilityBadge";
import DocsBadge from "@/components/DocsBadge";
import SortBtn from "@/components/SortBtn";

interface Props {
  artworks: Artwork[];
}

const ArtworkCardList = ({ artworks }: Props) => {
  const { activeSorter, handleSorterChange } = useSort();
  const sortedArtworks = sortArtworks(artworks, activeSorter);

  return (
    <div className="flex flex-col gap-2 md:hidden ">
      <div className="grid grid-cols-5 gap-2">
        {mobileFilterTitle.map((item) => (
          <div key={item.key} className="flex text-xs sm:text-sm items-center gap-2">
            {item.title}
            <SortBtn
              isActive={activeSorter?.field === item.key}
              onClick={() => handleSorterChange(item.key)}
            />
          </div>
        ))}
      </div>
      {sortedArtworks.map((artwork) => (
        <div
          key={artwork.id}
          className="bg-default-200 w-full rounded-lg cursor-pointer hover:bg-default-100"
        >
          <div className="flex gap-2 p-4">
       <div  className="flex-1  my-auto h-full sm:flex-none ">
           <Image
               src={`/images/${artwork.main_photo.transformations[1].filename_disk}`}
               alt={artwork.artwork_name}
               width={150}
               height={150}
               className="rounded-md object-cover object-center"
           />
       </div>
            <div className="flex flex-col gap-1 w-2/3 sm:w-full">
              <div className="flex flex-wrap items-center justify-end gap-2 ">
                <StatusBadge status={artwork.status} />
                <VisibilityBadge visible={artwork.visibility} />
                <DocsBadge docs={artwork.documents_number} />
              </div>
              <div className="text-xs sm:text-sm">
                <div className="flex gap-2">
                  <b>Artwork:</b>
                <div className="flex items-center gap-1 truncate">
                    <div className="truncate">{artwork.artwork_name}</div>
                    {artwork.has_notifications && (
                        <div className="w-[6px] h-[6px] bg-indigo-400 rounded-lg"></div>
                    )}
                </div>
                </div>
                <div className="flex items-center gap-2 truncate">
                  <b>Author:</b> {artwork.artist_name}
                </div>
                <div className="flex items-center gap-2">
                  <b>Years:</b> {artwork.creation_year}
                </div>
                <div className="flex items-center  gap-2 mb-2">
                  <b>Price:</b> <span>{formatSum(artwork.price)}</span>
                  <Image
                    src="/icons/usdc.svg"
                    alt="usdc"
                    width={18}
                    height={18}
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center gap-2">
                  <div className="text-xs sm:text-sm">
                    <b>Views:</b> {formatSum(artwork.views)}
                  </div>
                  <div className="text-xs sm:text-sm">
                    <b>Updated:</b>{" "}
                    {artwork.date_updated
                      ? formatDate(artwork.date_updated)
                      : "-"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ArtworkCardList;
