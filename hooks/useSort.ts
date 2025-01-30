import { useState } from "react";

const useSort = () => {
  const [activeSorter, setActiveSorter] = useState<Sorter | null>(null);

  const handleSorterChange = (field: string) => {
    setActiveSorter((prev) =>
      prev?.field === field
        ? {
            field: prev.field === field ? "" : field,
            order: prev.order === "asc" ? "desc" : "asc",
          }
        : { field, order: "asc" },
    );
  };

  return { activeSorter, handleSorterChange };
};

export default useSort;
