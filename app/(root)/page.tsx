"use client";

import { useEffect, useState } from "react";

import ArtworkTableList from "@/components/ArtworkTableList";
import ArtworkCardList from "@/components/ArtworkCardList";
import Loader from "@/components/Loader";

const Home = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getArtworks = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api_data.json");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setArtworks(data.items);
      } catch (error: any) {
        setLoading(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getArtworks();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ArtworkTableList artworks={artworks} />
      <ArtworkCardList artworks={artworks} />
    </div>
  );
};

export default Home;
