"use client";
import { Images } from "@/types/Search";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function Home() {
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_APP_PIXIBAY_IMAGES}&q=cat&image_type=photo&pretty=true`
        );

        const data = await res.json();
        setImages(data.hits);
        setLoading(false);
        setErr(null);
      } catch (error) {
        setErr("An Error as Occured");
      }
    };

    fetchData();
  }, []);

  return (
    <main className="container mx-auto p-6">
      <Navbar setSearchText={setSearchText} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image) => (
          <Card key={image.id} {...image} />
        ))}
      </div>
    </main>
  );
}
