import { SearchAccommodationRepository } from "../databases/repositoryImples/SearchAccommodationRepository.ts";
import { SearchAccommodationUseCase } from "../../usecases/SearchAccommodationUseCase.ts";
import { Accommodation } from "../../entities/Accommodation.ts";
import {
  ACCOMMODATION_HOST_ARRAY,
  TAccommodationHost,
} from "../../constants/accommodationHost.ts";
import { TSearchAccommodation } from "../requests/searchAccommodationRequest.ts";
import { CustomError } from "../../common/error.ts";
import { Status } from "../../mod.ts";

export class SearchAccommodationController {
  private searchAccommodationRepository: SearchAccommodationRepository;

  constructor() {
    this.searchAccommodationRepository = new SearchAccommodationRepository();
  }

  searchAccommodation = async (reqVal: TSearchAccommodation) => {
    // RequestBody Validation
    validate(reqVal);
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

const validate = (reqVal: TSearchAccommodation) => {
  if (
    !ACCOMMODATION_HOST_ARRAY.includes(reqVal.accommodationHost)
  ) {
    throw new CustomError(Status.BadRequest, [
      `accommodationHost: ${reqVal.accommodationHost}`,
    ]);
  }
};
