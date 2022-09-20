const mockFind = jest.fn();
import { productEntity } from "../fixture/product.fixture";
import { getAllProductsRepository } from "./product.repository";

jest.mock("./schema/product.schema", () => ({
  find: mockFind,
}));
describe("product repository unit test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("Should find and product and return successfuly", async () => {
    mockFind.mockResolvedValue([{ _doc: productEntity }]);
    const productsModel = await getAllProductsRepository();

    expect(productsModel).toStrictEqual([productEntity]);
  });
  test("Should return empty array when the product list was empty", async () => {
    mockFind.mockResolvedValue([]);
    const productModel = await getAllProductsRepository();

    expect(productModel).toStrictEqual([]);
  });
});
