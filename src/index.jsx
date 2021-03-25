import React from 'https://cdn.skypack.dev/react@17.0.2?min';
import ReactDOM from 'https://cdn.skypack.dev/react-dom@17.0.2?min';
import Carousel from 'https://cdn.skypack.dev/react-slick@0.28.1?min';

const config = {
  touchMove: false,
  swipe: false,
  draggable: false,
  focusOnSelect: false,
  accessibility: false,
  arrows: false,
  dots: false,
  vertical: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 100,
  speed: 100
};

function Superposition() {
  return (
    <Carousel {...config}>
      <h2 className='spin'>Yes</h2>
      <h2 className='spin'>No</h2>
    </Carousel>
  );
}

ReactDOM.render(
  <Superposition />,
  document.querySelector('#react')
);
