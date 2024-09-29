import { Input } from "antd";
import { FormikProps, useFormik } from "formik";

interface ProductFormValue {
  name_product: string;
  price_product: number;
  stock_product: number;
}

const AddProducts = () => {
  const formikProducts: FormikProps<ProductFormValue> =
    useFormik<ProductFormValue>({
      initialValues: {
        name_product: "",
        price_product: 0,
        stock_product: 0,
      },
      onSubmit: (value) => {
        console.log(value);
      },
    });

  return (
    <div>
      <form onSubmit={formikProducts.handleSubmit}>
        <div className="grid gap-2">
          <div className="">
            <p className="w-1/2">Product Name:</p>
            <Input
              name="name_product"
              type="text"
              onChange={formikProducts.handleChange}
              value={formikProducts.values.name_product}
              placeholder="Example: Hambagah"
            />
          </div>
          <div className="">
            <p className="w-1/2">Price:</p>
            <Input
              name="price_product"
              type="number"
              onChange={formikProducts.handleChange}
              value={formikProducts.values.price_product}
            />
          </div>
          <div className="">
            <p className="w-1/2">Stock:</p>
            <Input
              name="stock_product"
              type="number"
              onChange={formikProducts.handleChange}
              value={formikProducts.values.stock_product}
            />
          </div>
          <button type="submit" className="btn-base">
            Submit
          </button>
          <button
            type="button"
            onClick={formikProducts.handleReset}
            className="btn-second"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
