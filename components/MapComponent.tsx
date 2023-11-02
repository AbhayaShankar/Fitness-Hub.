"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

export default function MapComponent() {
  const [mounted, setMounted] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 23.760209790070338, lng: 86.35606878025722 }}
      mapContainerClassName="h-[30rem] w-full"
    >
      <Marker position={{ lat: 23.760209790070338, lng: 86.35606878025722 }} />
    </GoogleMap>
  );
}
