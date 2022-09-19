import { UserEntity } from "../schema/user.schema";
import { userMapper } from "./user.mapper";

describe("userMapper unit test", () => {
  const user: UserEntity = {
    name: "name",
    email: "email@email.com",
    password: "pass",
  };
  test("map user sucessfully", () => {
    const { name, email, password } = userMapper(user);

    expect(name).toBe("name");
    expect(email).toBe("email@email.com");
    expect(password).toBe("pass");
  });
});
