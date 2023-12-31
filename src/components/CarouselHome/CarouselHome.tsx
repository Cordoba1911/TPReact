import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="d block w 100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            alt="First slide"
          />
        </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="d block w 100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="d block w 100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
            src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
