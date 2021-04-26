import { TtypeOfRoom } from "../../constants/typeOfRoom";

/**
 * @param {TAccommodationHosts} accommodationHost Accommodation Host Name. Ex.) Airbnb, HafH etc. If it is null, all companies are search condition.
 * @param {string} location Where the accommodation is located. Ex.) 'Tokyo', '世田谷区, 東京' etc.
 * @param {number} priceRangeFrom Total price minimum. Ex.) 100000. (Unit: Japanese yen)
 * @param {number} priceRangeTo Total price maximum. Ex.) 150000. (Unit: Japanese yen)
 * @param {Date} checkIn checkIn date. Ex.) 2021-04-22.
 * @param {Date} checkOut checkOut date. Ex.) 2021-04-30.
 * @param {number} guests The number of guests. Ex.) 2.
 * @param {TTypeOfRoom | null} typeOfRoom Room type. Ex.) .
 */
export type TSearchAccommodation = {
  accommodationHost: TAccommodationHost;
  location: string; // Want to create as a ValueObject.
  priceRangeFrom: number;
  priceRangeTo: number;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  typeOfRoom: TtypeOfRoom | null;
};
