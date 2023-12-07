import { Carousel } from "../utils";
import { TestimonialCard } from "../components";
import { testimonials } from "../constant";

function Testimonials (){
  
  return(
      <section className="max-container min-h-screen padding-x pt-16 bg-tertiary-1100">
        <div className="max-w-full h-full flex flex-col gap-y-[0.8rem] justify-center">
          <h4 className="font-gfs-didot text-heading-four lg:text-heading-one text-tertiary-100 font-normal uppercase">
              Testimonial 
            </h4>
            <Carousel>
              {testimonials.map(testimonial => (
                <TestimonialCard  {...testimonial} key={testimonial.id} />
              ))}
            </Carousel>
        </div>
      </section>
  )
}

export default Testimonials;