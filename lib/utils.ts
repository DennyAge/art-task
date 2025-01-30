import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("ru-RU");
};

export const formatSum = (value: number) => {
  return value.toLocaleString("en-US");
};

export const sortArtworks = (
  artworks: Artwork[],
  activeSorter: Sorter | null,
) => {
  if (!Array.isArray(artworks)) return [];

  const sortedArtworks = [...artworks];

  if (activeSorter) {
    const field = activeSorter.field as keyof Artwork;
    sortedArtworks.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return activeSorter.order === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return activeSorter.order === "asc" ? valueA - valueB : valueB - valueA;
      }

      if (
        field === "date_updated" &&
        (typeof valueA === "string" || typeof valueA === "number") &&
        (typeof valueB === "string" || typeof valueB === "number")
      ) {
        const dateA = new Date(valueA).getTime();
        const dateB = new Date(valueB).getTime();
        return activeSorter.order === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (typeof valueA === "boolean" && typeof valueB === "boolean") {
        return activeSorter.order === "asc"
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      }

      return 0;
    });
  }

  return sortedArtworks;
};
