import { ISearchAccommodationRepository } from "../interfaces/repositories/ISearchAccommodationRepository.ts";

export class SearchAccommodationUseCase {
  constructor(
    private searchAccommodationRepository: ISearchAccommodationRepository,
  ) {
  }

  searchAccommodation = async (reqBody: any) => {
    return await this.searchAccommodationRepository.search(reqBody);
  }
}
