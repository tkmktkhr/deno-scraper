import { SearchAccommodationRepository } from "../databases/repositoryImples/SearchAccommodationRepository.ts";
import { SearchAccommodationUseCase } from "../../usecases/SearchAccommodationUseCase.ts";

export class SearchAccommodationController {
  private searchAccommodationRepository: SearchAccommodationRepository;

  constructor() {
    this.searchAccommodationRepository = new SearchAccommodationRepository();
  }

  searchAccommodation = async (reqBody: any) => {
    // RequestBody Validation

    // Usecase
    const usecase = new SearchAccommodationUseCase(
      this.searchAccommodationRepository,
    );

    const result = await usecase.searchAccommodation(reqBody);
    return result;
  };
}
