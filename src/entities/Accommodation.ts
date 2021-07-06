import { Station } from "../valueObject/Station.ts";
import { SuperMarket } from "../valueObject/SuperMarket.ts";
import { TBedSize } from "../constants/bedSize.ts";
import { TtypeOfRoom } from "../constants/typeOfRoom.ts";

export class Accommodation {
  accommodationId?: number;
  accommodationHost: string;
  accommodationName: string;
  typeOfRoom: TtypeOfRoom;
  price: number;
  wifi: boolean;
  pocketWifi: boolean;
  bath: boolean;
  toilet: boolean;
  kitchen: boolean;
  microwave: boolean;
  refrigerator: boolean;
  washingMachine: boolean;
  beds: TBedSize[];
  superMarkets: SuperMarket[];
  stations: Station[];

  constructor(init: TAccommodation) {
    Object.assign(this, init);
  }
}
type TAccommodation = Accommodation;
