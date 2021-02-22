import { Carousel } from "react-bootstrap";

export function CarouselMain(props) {
  return (
    <div className="container mt-4">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            height="450"
            src="https://a-static.besthdwallpaper.com/belyy-dom-oboi-29922_L.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            height="450"
            className="d-block w-100"
            src="https://fijivoyage.com/wp-content/uploads/2016/12/CanadaToronto-Kanada-e1446479342839.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            height="450"
            className="d-block w-100"
            src="http://img1.reactor.cc/pics/post/%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0-%D0%9D%D0%B0%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%A4%D0%91%D0%9A-%D0%BA%D0%BE%D1%80%D1%80%D1%83%D0%BF%D1%86%D0%B8%D1%8F-5841913.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
