import { describe, expect, test, vi } from "vitest";
import { getPerson } from "./person";
import * as fetchModule from "./fetch";

/* describe("person tests", () => {
  test("without mock", () => {
    expect(getPerson("1")).resolves.toMatchInlineSnapshot(`
    {
      "address": "Address 1",
      "id": "1",
      "name": "Name 1",
    }
  `);
  });
}); */

describe("person tests with vi.spyOn", () => {
  test("mocked with vi.spyOn", () => {
    vi.spyOn(fetchModule, "fetchPersonName").mockImplementationOnce(
      async () => "Mocked name with vi.spyOn"
    );
    expect(getPerson("1")).resolves.toMatchInlineSnapshot(`
      {
        "address": "Address 1",
        "id": "1",
        "name": "Mocked name with vi.spyOn",
      }
    `);
  });
});

describe("person tests with vi.mock and vi.fn", () => {
  test("mocked with vi.mock", () => {
    vi.mock("./fetch", async (importOriginal) => ({
      ...(await importOriginal<typeof import("./fetch")>()),
      fetchPersonName: vi.fn(),
    }));

    vi.mocked(fetchModule.fetchPersonName).mockReturnValueOnce(
      Promise.resolve("Mocked with vi.fn")
    );

    expect(getPerson("1")).resolves.toMatchInlineSnapshot(`
      {
        "address": "Address 1",
        "id": "1",
        "name": "Mocked with vi.fn",
      }
    `);
  });
});
