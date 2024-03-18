import React from "react";
import "./page.scss";
import { card, check, feature, truck } from "@/assets";
import Image from "next/image";


const About = () => {
  return (
    <div className="container mx-auto h-min-screen bg-white mt-20">
      <header>
        <div className="cards">
          <p className=" d-flex mx-auto justify-center p1">
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </p>
          <div className="card1">
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
                <p className="p4">Get in touch</p>
              </div>
              <div className="card2"></div>
            </div>
          </div>
          <div className="card2">
            <div className="cards">
              <div className="card2"></div>
              <div className="card1">
                <p className="p1">
                  Our service isn’t just personal, it’s actually hyper
                  personally exquisite
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
                <p className="p4">Get in touch</p>
              </div>
            </div>
          </div>
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
                
                <Image src={check} alt="check" className="Image" />
                <p className="t1">Made by true artisans</p>
                <p className="t2">
                  Handmade crafted goods made with real passion and craftmanship
                </p>
              </div>
              <div className="card1">
                
                <Image src={card} alt="card" className="Image" />
                <p className="t1">Unbeatable prices</p>
                <p className="t2">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>
              <div className="card1">
                
                <Image src={feature} alt="feature" className="Image" />
                <p className="t1">Recycled packaging</p>
                <p className="t2">
                  We use 100% recycled packaging to ensure our footprint is
                  manageable
                </p>
              </div>
            </div>
          </div>
      </header>
      <main>
      <div className="foot1">
            <p className="p1">Join the club and get the benefits</p>
            <p className="p2">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>
            <div className="text">
              <div className="p">
                <Image src={check} className="text-[24px] hover:scale-[1.2] text-white hover:text-[#008cff] duration-200 img" alt="" />
                <p className="p1">Exclusive offers</p>
              </div>
              <div className="p">
                <Image src={check} className="img text-[24px] hover:scale-[1.2] text-white hover:text-[#008cff] duration-200" alt="" />
                <p className="p1">Free events</p>
              </div>
              <div className="p">
                <Image src={check} className="text-[24px] hover:scale-[1.2] text-white hover:text-[#008cff] duration-200 img" alt="" />
                <p className="p1">Large discounts</p>
              </div>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="your@email.com"
                className="input1"
              />
              <button className="but">Sign Up</button>
            </div>
          </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default About;
