interface Place {
  name: string;
  lat: number;
  lng: number;
}

interface SavedPlace {
  // base information
  id: string;
  place_id: string;
  user_id: string;
  create_datetime: number;

  // additional information
  lat: number;
  lng: number;
  name: string;
  description: string;
  rate: number;
}

interface SavePlaceRequest {
  userId: string;
  placeId: string;
  lat: number;
  lng: number;
  name: string;
  description: string;
  rate: number;
}

interface SavePlaceRequestBody {
  lat: number;
  lng: number;
  name: string;
  placeId: string;
  description: string;
  rate: number;
}
