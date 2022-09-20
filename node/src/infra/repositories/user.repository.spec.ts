const mockFindOne = jest.fn();
import { userEntity } from "../fixture/user.fixture";
import { getUserByEmail } from "./user.repository";

jest.mock("./schema/user.schema", () => ({
  findOne: mockFindOne,
}));
describe("user repository unit test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should find and user and return successfuly", async () => {
    mockFindOne.mockResolvedValue(userEntity);
    const userModel = await getUserByEmail("email");

    expect(userModel).toStrictEqual(userEntity);
  });
  test("Should return null when the user was not found", async () => {
    mockFindOne.mockResolvedValue(null);
    const userModel = await getUserByEmail("email");

    expect(userModel).toBeNull();
  });
  test("Should return null when email is null", async () => {
    mockFindOne.mockResolvedValue(null);
    const userModel = await getUserByEmail(null);

    expect(userModel).toBeNull();
  });
});
