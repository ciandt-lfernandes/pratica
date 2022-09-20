import { connect } from "mongoose";

export const connectMongo = async () => {
  await connect("mongodb://writer:password@localhost:27017/pratica");
};
