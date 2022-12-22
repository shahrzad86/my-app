import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <header>header</header>
  <section>
    <div className="row">
      <div className="col">
        <div className="card">
          <img src="./images/flower-g275776720_1920.jpg" />
          <div className="card-body">
            <h5  className="card-title">flower</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque excepturi adipisci porro enim. Provident ab aperiam magni illo qui ipsum, adipisci officiis reprehenderit similique sapiente est saepe cumque nihil.</p>
          </div>
        </div>
      </div><div className="col">
        <div className="card">
          <img src="./images/flower-g275776720_1920.jpg" />
          <div className="card-body">
            <h5  className="card-title">flower</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque excepturi adipisci porro enim. Provident ab aperiam magni illo qui ipsum, adipisci officiis reprehenderit similique sapiente est saepe cumque nihil.</p>
          </div>
        </div>
      </div><div className="col">
        <div className="card">
          <img src="./images/flower-g275776720_1920.jpg" />
          <div className="card-body">
            <h5  className="card-title">flower</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque excepturi adipisci porro enim. Provident ab aperiam magni illo qui ipsum, adipisci officiis reprehenderit similique sapiente est saepe cumque nihil.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>footer</footer>
  </>
);

