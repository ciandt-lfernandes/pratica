import { UserModel } from "../../infra/interfaces/user.model";

type GetUserByEmail = (email: string) => Promise<UserModel>;

export { GetUserByEmail };
