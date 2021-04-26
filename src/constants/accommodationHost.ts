export const ACCOMMODATION_HOST = {
  AIRBNB: "airbnb",
  HAFH: "hafh",
  NOW_ROOM: "nowRoom",
  ADDRESS: "nowRoom",
  ALL: null,
} as const;
export type TAccommodationHost = keyof typeof ACCOMMODATION_HOST;
