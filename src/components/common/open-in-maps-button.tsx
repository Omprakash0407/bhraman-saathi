import { MapPin } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OpenInMapsButtonProps = {
  latitude: number;
  longitude: number;
  className?: string;
};

function getGoogleMapsUrl(latitude: number, longitude: number) {
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

export function OpenInMapsButton({
  latitude,
  longitude,
  className,
}: OpenInMapsButtonProps) {
  const mapsUrl = getGoogleMapsUrl(latitude, longitude);

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({
          variant: "outline",
          size: "sm",
        }),
        className
      )}
    >
      <MapPin className="size-4" />
      Open in Google Maps
    </a>
  );
}