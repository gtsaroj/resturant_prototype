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
    src: "https://lh5.googleusercontent.com/p/AF1QipPgOgEl3NkXL3MWoNML867LPN8Ljrr2zBoYULFl=s516-k-no",
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
    src: "https://lh5.googleusercontent.com/p/AF1QipOWqJy7jLTXO8YcLdt6skXhhSts4HsfxfB8mN6H=w203-h152-k-no",
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

export default function About() {
  const { t } = useTranslation();
  const reviews = t("reviews") as any;

  const { title, description } = t("AboutPage_banner") as unknown as {
    title: string;
    description: string;
  };
  const { title: T, subTitle, description1, description2 } = t("about") as any;
  const misions = t("mission") as unknown as {
    title: string;
    description: string;
  }[];
  return (
    <div className="w-full px-2">
      <Banner
        image={
          "https://img.freepik.com/premium-photo/tokyo-japan-january-09-2018-chefs-are-cooking-restaurant-most-popular-delicious-japanese-snack-food-japan_175935-25.jpg?semt=ais_hybrid"
        }
        title={title}
        description={description}
      />
      <div className="w-full py-16  gap-7 lg:gap-10 flex flex-col items-center">
        <h2 className="sm:text-3xl tracking-wider text-lg font-bold text-gray-800 mb-4">
          {T}
        </h2>
        <div className="flex  flex-col lg:flex-row  items-start gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-[500px] ">
            <img
              src="https://www.burgessrawson.com.au/wp-content/uploads/2024/01/a0E0I0000139JE1UAM_P170-Internet-Image-768x576.jpg" // Replace with a free resource image
              alt="Delicious food at Pink Putali"
              className="w-full h-full rounded-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full flex flex-col gap-3 sm:gap-8 lg:w-1/2">
            <h2 className="sm:text-2xl text-lg font-bold text-gray-800 lg:mb-4">
              {subTitle}
            </h2>
            <p className="text-gray-600   flex flex-col gap-2 lg:text-lg text-sm  leading-relaxed">
              {description1}
              <span>{description2}</span>
            </p>

            <a
              target="_blank"
              href="https://maps.app.goo.gl/NmqbahcxCsrSxbcRA"
              className="w-[150px] bg-[var(--primary-color)] hover:bg-[var(--primary-dark)] duration-150 text-lg  text-white text-center rounded-lg py-3 px-3 lg:mt-8"
            >
           {t("about_button")}
            </a>
          </div>
        </div>
      </div>
      {/* Mission & Vision Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="sm:text-3xl text-xl font-bold mb-8">
            {t("mission_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {misions?.map((mission, index) => (
              <Card key={index}>
                <CardContent>
                  <h3 className="sm:text-2xl text-xl font-semibold mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 sm:text-[16px] text-[15px] ">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="sm:text-3xl text-xl font-bold mb-8 text-center">
            {t("gallery")}
          </h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="mb-4 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-5 w-full flex flex-col items-stretch justify-center ">
        <h2 className="sm:text-3xl text-xl text-center tracking-wider font-bold mb-8">
          {t("visit")}
        </h2>
        <div className="flex w-full h-[400px] flex-col md:flex-row items-center justify-center gap-8">
          <iframe
            allowFullScreen={true}
            className="w-full h-full rounded-lg transform transition-all duration-500 hover:scale-105"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.897405829733!2d85.33158407477636!3d27.689059176193012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e99b7e259f%3A0xe77e0b6b366f6c1c!2sDailo%20Daily%20See%20Us!5e1!3m2!1sen!2snp!4v1731576014026!5m2!1sen!2snp"
            title="Restaurant Location"
          ></iframe>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="sm:text-3xl text-xl tracking-wider font-bold mb-8 text-center">
           {t("customer_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review: any, index: number) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex flex-col justify-start">
                    <div className="w-full flex items-start justify-start gap-5">
                      <img
                        src={review.image}
                        className="size-12 rounded-full border "
                        alt={review.name}
                      />
                      <div className="flex flex-col  gap-2 items-start justify-end">
                        <span className="text-[1rem] font-semibold">
                          {review.name}
                        </span>
                        <div className="flex items-center justify-start  gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-current text-yellow-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 italic">
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
