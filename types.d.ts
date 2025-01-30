interface ArtworkPhotoTransformation {
  preset_key: string;
  width: number;
  height: number;
  filename_disk: string;
}

interface ArtworkPhoto {
  id: string;
  width: number;
  height: number;
  title: string;
  filename_disk: string;
  transformations: ArtworkPhotoTransformation[];
}

interface Artwork {
  id: number;
  artwork_name: string;
  documents_number: number;
  has_notifications: boolean;
  status: string | null;
  views: number;
  visibility: boolean;
  main_photo: ArtworkPhoto;
  artist_name: string;
  creation_year: number;
  date_created: string;
  date_updated: string | null;
  price: number;
}

interface Sorter {
  field: string;
  order: "asc" | "desc";
}
