import { ISearchAccommodationRepository } from "../../repositories/ISearchAccommodationRepository.ts";
import { TSearchAccommodation } from "../../../interfaces/requests/searchAccommodationRequest.ts";

export class SearchAccommodationRepository
  implements ISearchAccommodationRepository {
  search = (reqBody: TSearchAccommodation) => {
    console.log(reqBody);

    return {
      accommodationHost: `host is ${reqBody.accommodationHost}`,
      location: `location is ${reqBody.location}`,
    };
  };
}
