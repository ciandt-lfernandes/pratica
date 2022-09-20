import { ProductEntity } from "../repositories/schema/product.schema";
import { productMapper } from "./product.mapper";

describe("productMapper unit test", () => {
  const product: ProductEntity = {
    name: "name",
    image: "image",
    price: 10,
  };
  test("Should return an product mapped successfuly", () => {
    const { name, image, price } = productMapper(product);

    expect(name).toBe("name");
    expect(image).toBe("image");
    expect(price).toBe(10);
  });
  test("Should return null when the product was not correctly", () => {
    expect(productMapper(null)).toBeNull();
    expect(productMapper(undefined)).toBeNull();
  });
});
