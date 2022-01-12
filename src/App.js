import { useState } from "react";
import "./App.scss";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { fakeData1, fakeData2 } from "./fakeData";

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <div className="container">
        <div className="title_container">
          <h1 className="title">Popular Tournaments</h1>
          <a className="viewmore"></a>
        </div>
        <div className="card_container">
          {fakeData1?.slice(0, 3)?.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              avatar={item.avatar}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
            />
          ))}
        </div>
        <a className="viewmore" href="#">
          View More
        </a>
      </div>

      <div className="container">
        <div className="title_container">
          <h1 className="title">Browse Games</h1>
          <a className="viewmore" href="#">
            Show All
          </a>
        </div>
        <div className="card_container card_container2">
          {fakeData2?.slice(0, 6)?.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="title_container">
          <h1 className="title">Trending Tournaments</h1>
          <a className="viewmore"></a>
        </div>
        <div className="card_container card_container3">
          {fakeData1?.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              avatar={item.avatar}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
            />
          ))}
        </div>
        <a className="viewmore" href="#">
          View More
        </a>
      </div>

      <div className="bannerTwo">
        <div className="bannerTwo_container">
          <div className="bannerTwo_left"></div>
          <div className="bannerTwo_right">
            <h1>KON10DR</h1>
            <h3>
              LEADING PLATFORM FOR <br /> E-SPORT COMPETITIONS
            </h3>
            <a href="#">KNOW MORE</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title_container">
          <h1 className="title">Tournaments with huge prices</h1>
          <a className="viewmore" href="#"></a>
        </div>
        <div className="card_container card_container3">
          {fakeData1?.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              avatar={item.avatar}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
            />
          ))}
        </div>
        <a className="viewmore" href="#">
          View More
        </a>
      </div>

      <Footer />
    </>
  );
}

export default App;
