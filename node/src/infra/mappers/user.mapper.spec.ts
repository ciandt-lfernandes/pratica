import { userEntity } from "../fixture/user.fixture";
import { userMapper } from "./user.mapper";

describe("userMapper unit test", () => {
  test("Should return an user map successfuly", () => {
    const userModel = userMapper(userEntity);

    expect(userEntity).toStrictEqual(userModel);
  });
  test("Should return null when the user was not correctly", () => {
    expect(userMapper(null)).toBeNull();
    expect(userMapper(undefined)).toBeNull();
  });
});
