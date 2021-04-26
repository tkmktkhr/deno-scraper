export const TYPE_OF_ROOM = {
  ENTIRE_PLACE: "ENTIRE_PLACE",
  PRIVATE_ROOM: "PRIVATE_ROOM",
  HOTEL_ROOM: "HOTEL_ROOM",
  SHARED_ROOM: "SHARED_ROOM",
  OTHER: "OTHER",
} as const;

export type TtypeOfRoom = keyof typeof TYPE_OF_ROOM;
