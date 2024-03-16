import "@/app/main.scss";
import {
  truck,
  card,
  feature,
  check,
  stul,
  stul2,
  stul3,
  stul4,
  imag2,
  imag1,
} from "@/assets";
import Image from "next/image";

import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto h-min-screen bg-white mt-20 ">
      <header className="">
        <div className="  justify-center head">
          <div className="divs mx-auto">
            <div className="div1">
              <div className="div_1">
                <p className="p1">
                  The furniture brand for the future, with timeless designs
                </p>
                <p className="p-[16px 32px]  p2">View collection</p>
              </div>
              <div className="div_2">
                <p className="p3">
                  A new era in eco friendly furniture with Avelon, the French
                  luxury retail brand with nice fonts, tasteful colors and a
                  beautiful way to display things digitally using modern web
                  technologies.
                </p>
              </div>
            </div>
            <div className="div2"></div>
          </div>
          <div className="card">
            <p className=" flex justify-center mb-7 p_1">
              What makes our brand different
            </p>
            <div className="cards">
              <div className="card1">
                <Image src={truck} alt="truck" className="Image" />
                <p className="t1">Next day as standard</p>
                <p className="t2">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
              <div className="card1">
                {" "}
                <Image src={check} alt="check" className="Image" />
                <p className="t1">Made by true artisans</p>
                <p className="t2">
                  Handmade crafted goods made with real passion and craftmanship
                </p>
              </div>
              <div className="card1">
                {" "}
                <Image src={card} alt="card" className="Image" />
                <p className="t1">Unbeatable prices</p>
                <p className="t2">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>
              <div className="card1">
                {" "}
                <Image src={feature} alt="feature" className="Image" />
                <p className="t1">Recycled packaging</p>
                <p className="t2">
                  We use 100% recycled packaging to ensure our footprint is
                  manageable
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <div className="main">
          <div className="card">
            <div className="card_1">
              <div className="cards">
                <p className="mb-5 p_1">New ceramics</p>
                <div className="card">
                  <div className="card1">
                    <Image src={stul} className="image" alt="" />
                    <p className="p11">The Dandy chair</p>
                    <p className="p22">£250</p>
                  </div>
                  <div className="card1">
                    <Image src={stul2} className="image" alt="" />
                    <p className="p11">Rustic Vase Set</p>
                    <p className="p22">£155</p>
                  </div>
                  <div className="card1">
                    <Image src={stul3} className="image" alt="" />
                    <p className="p11">The Silky Vase</p>
                    <p className="p22">£125</p>
                  </div>
                  <div className="card1">
                    <Image src={stul4} className="image" alt="" />
                    <p className="p11">The Lucy Lamp</p>
                    <p className="p22">£399</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_2">
              <div className="cards">
                <p className="mb-5 p_1">Our popular products</p>
                <div className="card">
                  <div className="card0">
                    <Image src={imag1} className="image" alt="" />
                    <p className="p11">Our popular products</p>
                    <p className="p22">£980</p>
                  </div>
                  <div className="card1">
                    <Image src={stul} className="image" alt="" />
                    <p className="p11">Our popular products</p>
                    <p className="p22">£250</p>
                  </div>
                  <div className="card1">
                    <Image src={imag2} className="image" alt="" />
                    <p className="p11">Our popular products</p>
                    <p className="p22">£250</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="">
        <div className=" mx-auto foot">
          <div className="foot1">
            <p className="p1">Join the club and get the benefits</p>
            <p className="p2">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
            <div className="input">
              <input
                type="text"
                placeholder="your@email.com"
                className="input1"
              />
              <button className="but">Sign Up</button>
            </div>
          </div>
          <div className="foot2">
            <div className="cards">
              <div className="card1">
                <p className="p1">
                  From a studio in London to a global brand with over 400
                  outlets
                </p>
                <p className="p2">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                </p>
                <p className="p3">
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design so our Chelsea boutique become the
                  hotbed for the London interior design community.
                </p>
                <p className="p4">
                Get in touch
                </p>
              </div>
              <div className="card2"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
