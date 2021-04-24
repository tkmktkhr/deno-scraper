import { ISearchAccommodationRepository } from "../../repositories/ISearchAccommodationRepository.ts";

export class SearchAccommodationRepository implements ISearchAccommodationRepository {
  search = (reqBody: any) => {
    console.log(reqBody);
    
    return {
      name: reqBody.name,
      address: reqBody.address,
    }
  }
}