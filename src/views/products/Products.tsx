import { useEffect, useState } from "react";
import AddProducts from "./AddProducts";
import { axiosLocalApi } from "../../lib/axiosLocalApi";
import { Table } from "antd";

interface ProductData {
  key: string,
  name_product: string,
  price_product: number,
  stock_product: number
}

const Products = () => {
  const [dataProduct, setDataProduct] = useState<ProductData[]>([]);
  const fetchProduct = async () => {
    try {
      const response = await axiosLocalApi.get<{data: ProductData[]}>("/products");
      setDataProduct(response.data.data);
    } catch (err) {
      console.log(`Error fetching product ${err}`);
    }
  };

  const productField = [
    {
      key: "1",
      title: "Product Name",
      dataIndex: "name_product",
    },
    {
      key: "2",
      title: "Price",
      dataIndex: "price_product",
      render: (value: number) => (
        value.toLocaleString('id')
      )
    },
    {
      key: "3",
      title: "Stock",
      dataIndex: "stock_product",
    },
  ];

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="p-2 grid gap-2">
      <h2 className="text-center">Products</h2>
      <hr />
      <AddProducts />

      <Table dataSource={dataProduct} columns={productField} pagination={false} />
    </div>
  );
};

export default Products;
