import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel >
      <Carousel.Item>
       <img src="https://images.pexels.com/photos/29151466/pexels-photo-29151466.jpeg" alt="slide 1"   />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src="https://images.pexels.com/photos/28946911/pexels-photo-28946911.jpeg" alt="slide 1"    />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src="https://images.pexels.com/photos/28460693/pexels-photo-28460693.jpeg" alt="slide 1"    />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;