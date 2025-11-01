"use client";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

interface Props {
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
}

export const AutocompleteWebComponent = ({ onPlaceSelect }: Props) => {
  // make sure the `<gmp-place-autocomplete>` component gets loaded
  useMapsLibrary("places");

  async function handlePlaceSelect(place: google.maps.places.Place) {
    console.log("Fetching fields for place:", place);
    await place.fetchFields({
      fields: ["displayName", "formattedAddress", "googleMapsURI"],
    });

    onPlaceSelect(place);
  }

  return (
    <div>
      <gmp-place-autocomplete
        included-primary-types="establishment"
        included-region-codes="br"
        ongmp-select={(ev: any) => {
          console.log("Place selected event:", ev);
          void handlePlaceSelect(ev.placePrediction.toPlace());
        }}
        gmp-select={(ev: any) => {
          console.log("Place selected event:", ev);
          void handlePlaceSelect(ev.place);
        }}
      />
    </div>
  );
};
