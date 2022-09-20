import { UserModel } from "../../infra/interfaces/user.model";
import { userMapper } from "./user.mapper";

describe("userMapper unit test", () => {
  const userModel: UserModel = {
    name: "name",
    email: "email@email.com",
    password: "pass",
  };
  test("Should return an user map successfuly", () => {
    const user = userMapper(userModel);

    //Removing the fields that should be mapped: password
    const { password, ...userWithoutField } = userModel;

    expect(userWithoutField).toStrictEqual(user);
  });
  test("Should return null when the user was not correctly", () => {
    expect(userMapper(null)).toBeNull();
    expect(userMapper(undefined)).toBeNull();
  });
});
