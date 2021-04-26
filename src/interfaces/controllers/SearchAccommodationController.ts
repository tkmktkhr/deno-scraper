import { SearchAccommodationRepository } from "../databases/repositoryImples/SearchAccommodationRepository.ts";
import { SearchAccommodationUseCase } from "../../usecases/SearchAccommodationUseCase.ts";
import { Accommodation } from "../../entities/Accommodation.ts";
import { TAccommodationHost } from "../../constants/accommodationHost.ts";

export class SearchAccommodationController {
  private searchAccommodationRepository: SearchAccommodationRepository;

  constructor() {
    this.searchAccommodationRepository = new SearchAccommodationRepository();
  }

  searchAccommodation = async (reqVal: any) => {
    // RequestBody Validation

    // Usecase
    const usecase = new SearchAccommodationUseCase(
      this.searchAccommodationRepository,
    );

    // const acc = new Accommodation({

    // })

    const result = await usecase.searchAccommodation(reqVal);
    return result;
  };
}
