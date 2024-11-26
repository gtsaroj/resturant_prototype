import React from "react";

import { Star } from "lucide-react";
import { Banner } from "../Components/Banner/Banner";
import { useTranslation } from "react-i18next";

// Custom Card component
const Card = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

// Custom CardContent component
const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`p-6 ${className}`}>{children}</div>;

// Dummy data for gallery and reviews
const galleryImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1724707432701-cb7808e3c3fa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Restaurant Interior",
  },

  {
    src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    alt: "Signature Dish",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_640.jpg",
    alt: "Cocktail Selection",
  },
  {
    src: "https://srilanka.gg/wp-content/uploads/2023/11/The-Gallery-Cafe-large.jpeg",
    alt: "Outdoor Seating",
  },

  {
    src: "https://img.freepik.com/premium-photo/tokyo-japan-january-09-2018-chefs-are-cooking-restaurant-most-popular-delicious-japanese-snack-food-japan_175935-25.jpg?semt=ais_hybrid",
  },
  {
    src: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg",
    alt: "Signature Dish",
  },
  {
    src: "https://images.unsplash.com/photo-1696062985889-de626efe0148?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cocktail Selection",
  },

  {
    src: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg",
    alt: "Restaurant Interior",
  },

  {
    src: "https://lh5.googleusercontent.com/p/AF1QipORIAjiv4MAv9tqRbDof_zz75RwFSoQihFTduU=w203-h270-k-no",
    alt: "Signature Dish",
  },

  {
    src: "https://us.123rf.com/450wm/maxbelchenko777/maxbelchenko7772407/maxbelchenko777240700691/231844227-fans-enjoying-rock-concert-with-light-show-and-clapping-hands.jpg?ver=6",
    alt: "Signature Dish",
  },
];

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Amazing fusion of flavors! The cocktails are a must-try.",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great atmosphere and friendly staff. Will definitely return.",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg",
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment: "The best Nepalese cuisine I've had outside of Nepal!",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg",
  },
  {
    name: "Alice Brown",
    rating: 3,
    comment: "Good food, but the service was a bit slow during peak hours.",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg",
  },
];

export default function About() {
  const { t } = useTranslation();
  const { title, description } = t("AboutPage_banner") as unknown as {
    title: string;
    description: string;
  };
  const { title: T, subTitle, description1, description2 } = t("about") as any;
  return (
    <div className="w-full px-2">
      <Banner
        image={
          "https://img.freepik.com/premium-photo/tokyo-japan-january-09-2018-chefs-are-cooking-restaurant-most-popular-delicious-japanese-snack-food-japan_175935-25.jpg?semt=ais_hybrid"
        }
        title={title}
        description={description}
      />
      <div className="flex flex-col items-center w-full py-16 gap-7 lg:gap-10">
        <h2 className="mb-4 text-lg font-bold tracking-wider text-gray-800 sm:text-3xl">
          {T}
        </h2>
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-[500px] ">
            <img
              src="https://www.burgessrawson.com.au/wp-content/uploads/2024/01/a0E0I0000139JE1UAM_P170-Internet-Image-768x576.jpg" // Replace with a free resource image
              alt="Delicious food at Pink Putali"
              className="w-full h-full rounded-md"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col w-full gap-3 sm:gap-8 lg:w-1/2">
            <h2 className="text-lg font-bold text-gray-800 sm:text-2xl lg:mb-4">
              {subTitle}
            </h2>
            <p className="flex flex-col gap-2 text-sm leading-relaxed text-gray-600 lg:text-lg">
              {description1}
              <span>{description2}</span>
            </p>

            <a
              target="_blank"
              href="https://maps.app.goo.gl/NmqbahcxCsrSxbcRA"
              className="w-[150px] bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] duration-150 text-lg  text-white text-center rounded-lg py-3 px-3 lg:mt-8"
            >
              Find out
            </a>
          </div>
        </div>
      </div>
      {/* Mission & Vision Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-xl font-bold sm:text-3xl">
            Our Mission & Vision
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                  Mission
                </h3>
                <p className="text-gray-600 sm:text-[16px] text-[15px] ">
                  To offer the best fusion of Nepalese flavors in a cozy and
                  inviting atmosphere, paired with innovative cocktails.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                  Vision
                </h3>
                <p className="text-gray-600 sm:text-[16px] text-[15px] ">
                  To become the premier destination for Nepalese fusion cuisine
                  and cocktails, creating unforgettable dining experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-xl font-bold text-center sm:text-3xl">
            Our Gallery
          </h2>
          <div className="gap-4 columns-2 md:columns-3 lg:columns-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-full mb-4 transition-shadow duration-300 rounded-lg shadow-md hover:shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="flex flex-col items-stretch justify-center w-full px-5 py-16 ">
        <h2 className="mb-8 text-xl font-bold tracking-wider text-center sm:text-3xl">
          Visit Us
        </h2>
        <div className="flex w-full h-[400px] flex-col md:flex-row items-center justify-center gap-8">
          <iframe
            allowFullScreen={true}
            className="w-full h-full transition-all duration-500 transform rounded-lg hover:scale-105"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.897405829733!2d85.33158407477636!3d27.689059176193012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e99b7e259f%3A0xe77e0b6b366f6c1c!2sDailo%20Daily%20See%20Us!5e1!3m2!1sen!2snp!4v1731576014026!5m2!1sen!2snp"
            title="Restaurant Location"
          ></iframe>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-xl font-bold tracking-wider text-center sm:text-3xl">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex flex-col justify-start">
                    <div className="flex items-start justify-start w-full gap-5">
                      <img
                        src={review.image}
                        className="border rounded-full size-12 "
                        alt={review.name}
                      />
                      <div className="flex flex-col items-start justify-end gap-2">
                        <span className="text-[1rem] font-semibold">
                          {review.name}
                        </span>
                        <div className="flex items-center justify-start gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 italic text-gray-600">
                    " {review.comment} "
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
