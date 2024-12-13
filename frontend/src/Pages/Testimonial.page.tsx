import { Testimonial } from "../Components/Testimonial/Testimonial";

const dummyData = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/100",
      description: "This is an amazing product! I love using it every day."
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/100",
      description: "Fantastic experience. It has greatly improved my workflow."
    },
    {
      name: "Alice Johnson",
      image: "https://via.placeholder.com/100",
      description: "Highly recommend! The service is fast and reliable."
    },
    {
      name: "Bob Brown",
      image: "https://via.placeholder.com/100",
      description: "Very user-friendly. I can't imagine going without it now."
    },
    {
      name: "Charlie White",
      image: "https://via.placeholder.com/100",
      description: "Support team is excellent, and the product exceeded expectations."
    }
  ];
  


  
export const TestimonialPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-10 ">
      <h1 className=" text-xl tracking-wide font-bold sm:text-3xl ">
        Testimonials
      </h1>
      <Testimonial users={dummyData} />
    </div>
  );
};
