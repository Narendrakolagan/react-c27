import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />

    <div className="home-container">
      <div className="home-content-container">
        <h1>Clothes That Get You Noticed </h1>
        <p>
          Fashion is part of the daily air and it does not get quite that it
          help it changes all the time. Clothes have always be an marker of the
          era and the all clothes are being. Your fashion markers are around
        </p>
        <button type="button" className="shop-btn">
          Shop Now
        </button>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-clothes-img"
      />
    </div>
  </>
)

export default Home
