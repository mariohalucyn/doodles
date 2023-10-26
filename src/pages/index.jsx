import * as React from 'react';
import '../components/sassStyles/_typography.scss';
import '../components/sassStyles/_global.scss';
import './index.scss';
import { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import { ReactComponent as Site } from '../assets/icons/doodles__site-icon.svg';
import { ReactComponent as Composition } from '../assets/icons/doodles__composition-icon.svg';
import { ReactComponent as Paint } from '../assets/icons/doodles__paint-icon.svg';
import { ReactComponent as Chillin } from '../assets/images/doodles__chillin.svg';
import { ReactComponent as Corpo } from '../assets/images/doodles__corpo.svg';
import { ReactComponent as IceCream } from '../assets/images/doodles__ice-cream.svg';

const images = [Chillin, IceCream, Corpo];

function IndexPage() {
  const [image, setImage] = useState(images[0]);

  return (
    <main>
      <Header />
      <Hero />
      <div className="cards">
        <ul>
          <li>
            <Site />
            <h2>Site</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea nam recusandae
              temporibus unde voluptate!
            </p>
            <button type="button" className="filled--button">click here</button>
          </li>
          <li>
            <Composition />
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores ea explicabo harum, natus nulla?</p>
            <button type="button" className="filled--button">click here</button>
          </li>
          <li>
            <Paint />
            <h2>Paint</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut error illum ipsa, sed
              voluptatum.
            </p>
            <button type="button" className="filled--button">click here</button>
          </li>
        </ul>
      </div>
      <div className="hi">
        <div className="hi__heading">
          <h1>consectetur adipisicing elit.</h1>
        </div>
        <div className="hi__container" />
      </div>
      <div className="about">
        <div className="about__heading">
          <h2>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsum nesciunt odio quia
            quis tempore velit voluptatum! Aliquam consequuntur corporis cum nesciunt obcaecati officiis,
            quia reiciendis sed tempore ullam?
          </p>
        </div>
        <div className="about__container">
          <div>{image}</div>
          <ul>
            <li>
              <label htmlFor="chillin">
                <input type="radio" name="about" id="chillin" onClick={() => (setImage(images[0]))} />
                <div className="about__container-caseButton">
                  <h3>Chillin&apos;</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid asperiores
                    autem, modi nemo perferendis provident quasi qui, quidem reprehenderit similique
                    sunt voluptates!
                  </p>
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="iceCream">
                <input type="radio" name="about" id="iceCream" onClick={() => (setImage(images[1]))} />
                <div className="about__container-caseButton">
                  <h3>Ice cream</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloribus
                    harum nesciunt nobis obcaecati quam quas repellat saepe sequi similique.
                  </p>
                </div>
              </label>
            </li>
            <li>
              <label htmlFor="Corpo">
                <input type="radio" name="about" id="Corpo" onClick={() => (setImage(images[2]))} />
                <div className="about__container-caseButton">
                  <h3>Corpo</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ipsam maiores
                    optio praesentium quia sint temporibus, veritatis vitae!
                  </p>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="monochromeCards">
        <div className="monochromeCards__heading">
          <h2>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse ipsum nesciunt odio quia
            quis tempore velit voluptatum! Aliquam consequuntur corporis cum nesciunt obcaecati officiis,
            quia reiciendis sed tempore ullam?
          </p>
        </div>
        <ul className="monochromeCards__outerList">
          <li className="monochromeCards__innerList">
            <ul className="monochromeCards__innerList-item">
              <li><h3>consectetur.</h3></li>
              <li>
                <h1>&gt;1.3M</h1>
                <h4>views</h4>
              </li>
              <li>
                <button type="button" className="filled--button">Read more</button>
              </li>
            </ul>
          </li>
          <li className="monochromeCards__innerList">
            <ul className="monochromeCards__innerList-item">
              <li><h3>consectetur.</h3></li>
              <li>
                <h1>3X</h1>
                <h4>views</h4>
              </li>
              <li>
                <button type="button" className="filled--button">Read more</button>
              </li>
            </ul>
          </li>
          <li className="monochromeCards__innerList">
            <ul className="monochromeCards__innerList-item">
              <li><h3>consectetur.</h3></li>
              <li>
                <h1>4X</h1>
                <h4>views</h4>
              </li>
              <li>
                <button type="button" className="filled--button">Read more</button>
              </li>
            </ul>
          </li>
          <li className="monochromeCards__innerList">
            <ul className="monochromeCards__innerList-item">
              <li><h3>consectetur.</h3></li>
              <li>
                <h1>200+</h1>
                <h4>views</h4>
              </li>
              <li>
                <button type="button" className="filled--button">Read more</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="slider">
        <div className="slider__heading">
          <div className="slider__heading-container">
            <h2>Ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque dolorem earum
              ipsa
              repellat reprehenderit tenetur totam velit voluptates! Minima?
            </p>
            <button type="button" className="filled--button">click here</button>
          </div>
        </div>
        <div className="slider__images">
          <div><Chillin /></div>
          <div><Corpo /></div>
          <div><IceCream /></div>
        </div>
      </div>
    </main>
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}
