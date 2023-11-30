"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import RichText from "./RichText";

interface Props {
  data: any;
}

export default function TestimonialsSlider({ data }: Props) {
  return (
    <Carousel
      interval={5000}
      autoPlay={true}
      centerMode={false}
      infiniteLoop={true}
      showIndicators={false}
      stopOnHover={true}
      useKeyboardArrows={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
    >
      {data.map((testimonial: any, i: number) => {
        const { name, company, quote } = testimonial.fields;

        return (
          <div className="testimonial" key={i}>
            <RichText data={quote} />
            <div className="author">
              <h5>- {name}</h5>
              <span>{company}</span>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
