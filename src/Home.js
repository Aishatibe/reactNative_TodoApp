import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* product */}
          <Product
            id={1}
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repellat fuga commodi totam voluptatibus tenetur laborum laudantium esse
            aspernatur quisquam ut, natus adipisci ea fugit officia quia distinctio,
            possimus doloribus."
            price={19.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          {/* product */}
          <Product
            id={2}
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repellat fuga commodi totam voluptatibus tenetur laborum laudantium esse
            aspernatur quisquam ut, natus adipisci ea fugit officia quia distinctio,
            possimus doloribus."
            price={200.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>
        <div className="home__row">
          {/* product */}
          <Product
            id={3}
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repellat fuga commodi totam voluptatibus tenetur laborum laudantium esse
            aspernatur quisquam ut, natus adipisci ea fugit officia quia distinctio,
            possimus doloribus."
            price={100.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          {/* product */}
          <Product
            id={4}
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repellat fuga commodi totam voluptatibus tenetur laborum laudantium esse
            aspernatur quisquam ut, natus adipisci ea fugit officia quia distinctio,
            possimus doloribus."
            price={129.0}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          {/* product */}
          <Product
            id={5}
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repellat fuga commodi totam voluptatibus tenetur laborum laudantium esse
            aspernatur quisquam ut, natus adipisci ea fugit officia quia distinctio,
            possimus doloribus."
            price={199.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>
        <div className="home__row">
          {/* product */}
          <Product
            id={6}
            title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            repellat fuga commodi totam voluptatibus tenetur laborum laudantium esse
            aspernatur quisquam ut, natus adipisci ea fugit officia quia distinctio,
            possimus doloribus."
            price={112.0}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
