import { fetchPersonAddress, fetchPersonName } from "./fetch";

type Person = {
  id: string;
  name: string;
  address: string;
};

export class PersonService {
  async getPerson(id: string): Promise<Person> {
    return {
      id,
      name: await fetchPersonName(id),
      address: await fetchPersonAddress(id),
    };
  }
}
