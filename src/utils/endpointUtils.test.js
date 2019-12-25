import makeRequest from "./endpointUtils";

beforeEach(() => {
  jest.clearAllMocks();
});

it("should handles fulfilled promise", async () => {
  makeRequest.post = jest.fn(() => new Promise(resolve => resolve(true)));
  await expect(makeRequest.post("abc", {})).resolves.toBe(true);
});

it("should handles rejected promise", async () => {
  makeRequest.post = jest.fn(
    () => new Promise((resolve, reject) => reject(true))
  );
  await expect(makeRequest.post("abc", {})).rejects.toBe(true);
});
