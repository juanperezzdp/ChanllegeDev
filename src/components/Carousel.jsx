import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          id: 1,
          imageUrl: "https://static.addtoany.com/images/dracaena-cinnabari.jpg",
          text: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!",
        },
        {
          id: 2,
          imageUrl: "https://www.w3schools.com/w3css/img_lights.jpg",
          text: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!",
        },
        {
          id: 3,
          imageUrl:
            "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          text: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!",
        },
        {
          id: 4,
          imageUrl:
            "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          text: "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!",
        },
        {
          id: 5,
          imageUrl:
            "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
          text: "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="card-carousel">
          {this.state.cards.map((card) => (
            <div className="card" key={card.id}>
              <div
                className="image-container"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              ></div>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <a href="#" className="visuallyhidden card-controller">
          Carousel controller
        </a>
      </div>
    );
  }
}

export default Carousel;
