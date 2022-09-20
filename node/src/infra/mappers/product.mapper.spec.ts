import { productEntity } from "../fixture/product.fixture";
import { productMapper } from "./product.mapper";

describe("productMapper unit test", () => {
  test("Should return an product mapped successfuly", () => {
    const productModel = productMapper(productEntity);

    expect(productModel).toStrictEqual(productEntity);
  });
  test("Should return null when the product was not correctly", () => {
    expect(productMapper(null)).toBeNull();
    expect(productMapper(undefined)).toBeNull();
  });
});
