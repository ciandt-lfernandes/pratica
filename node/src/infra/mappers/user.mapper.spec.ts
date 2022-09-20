import { UserEntity } from "../repositories/schema/user.schema";
import { userMapper } from "./user.mapper";

describe("userMapper unit test", () => {
  const user: UserEntity = {
    name: "name",
    email: "email@email.com",
    password: "pass",
  };
  test("Should return an user map successfuly", () => {
    const userEntity = userMapper(user);

    expect(user).toStrictEqual(userEntity);
  });
  test("Should return null when the user was not correctly", () => {
    expect(userMapper(null)).toBeNull();
    expect(userMapper(undefined)).toBeNull();
  });
});
