import { describe, expect, test, vi } from "vitest";
import { PersonService } from "./person-service";

describe("person service tests", () => {
  test("mocked with vi.mock", () => {
    vi.spyOn(PersonService.prototype, "getPerson").mockImplementationOnce(
      async (id) => ({
        id,
        name: "Mocked name",
        address: "Mocked address",
      })
    );

    const service = new PersonService();

    expect(service.getPerson("1")).resolves.toMatchInlineSnapshot(`
      {
        "address": "Mocked address",
        "id": "1",
        "name": "Mocked name",
      }
    `);
  });
});
