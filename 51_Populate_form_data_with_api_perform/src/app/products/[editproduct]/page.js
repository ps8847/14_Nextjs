"use client";
import { useEffect, useState } from "react";
import "../../style.css";
import Link from "next/link";
export default function Page(props) {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [color, setcolor] = useState("");
  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);

  let getProductDetail = async () => {
    let id = props.params.editproduct;
    let productData = await fetch("http://localhost:3000/api/products/" + id);
    productData = await productData.json();
    if (productData.success) {
      let result = productData.result;
      setname(result.name);
      setprice(result.price);
      setcolor(result.color);
      setcompany(result.company);
      setcategory(result.category);
    }
  };
  return (
    <div>
      <h1>Update Product</h1>
      <input
        className="input"
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        placeholder="Enter product name"
      />
      <input
        className="input"
        value={price}
        onChange={(e) => setprice(e.target.value)}
        type="text"
        placeholder="Enter price"
      />
      <input
        className="input"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
        type="text"
        placeholder="Enter color"
      />
      <input
        className="input"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
        type="text"
        placeholder="Enter company"
      />
      <input
        className="input"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
        type="text"
        placeholder="Enter category"
      />
      <button className="btn">Update Product</button>
      <Link href={"/products"}>Go Back</Link>
    </div>
  );
}
