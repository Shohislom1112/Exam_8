"use client";
import { useEffect, useState } from "react";
import "@/app/produckts/page.scss";
import getProducts from "@/store/produckt.store";

const Produckts = () => {
  const { loading, error, getproducts, products } = getProducts();
  const [search, setSearch]= useState<string>('')

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="mt-40">
      <header className="mx-auto">
        <p className="p1">All products</p>
      </header>

      <div className="container mx-auto h-min-screen bg-white mt-20 div">
          <input type="text" placeholder="search" className="inputt" value={search} onChange={((e) => setSearch(e.target.value))}/>
        <main>
          <div className="div1">
            <p className="p1">Product type</p>
            <div className="text">
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">Furniture</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">Homeware</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">Sofas</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">Homeware</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">Light fittings</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">Accessories</p>
              </div>
            </div>
            <p className="p1">Price</p>
            <div className="text">
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">0-100</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">101-250</p>
              </div>
              <div className="input">
                <input type="checkbox" className="check" />
                <p className="p">250 +</p>
              </div>
            </div>
          </div>
          <div className="div2">
            {products.filter((product) => {
                if (search  === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(search.toLowerCase()) 
                
                ) {
                  return product;
                }
              }).map((product) => (
              <div key={product.id} className="product">
                <img className="img" src={product.image} alt={product.name} />
                <p className="p1">{product.name}</p>
                <p className="p1">{product.sale}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Produckts;
