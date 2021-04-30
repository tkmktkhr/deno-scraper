import { ISearchAccommodationRepository } from "../interfaces/repositories/ISearchAccommodationRepository.ts";
import { TSearchAccommodation } from "../interfaces/requests/searchAccommodationRequest.ts";


export class SearchAccommodationUseCase {
  constructor(
    private searchAccommodationRepository: ISearchAccommodationRepository,
  ) {
  }

  searchAccommodation = async (reqBody: TSearchAccommodation) => {
    return await this.searchAccommodationRepository.search(reqBody);
  };
}
