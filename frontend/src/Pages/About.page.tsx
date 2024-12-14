import React from "react";

import { Star } from "lucide-react";
import { Banner } from "../Components/Banner/Banner";
import { useTranslation } from "react-i18next";
import AboutImg from "../assets/about.jpg";
import { Gallery } from "../Components/Gallery/Gallery";
import { Location } from "../Components/Location/Location";
import { Testimonial } from "../Components/Testimonial/Testimonial";
import { TestimonialPage } from "./Testimonial.page";

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
    <div className="w-full mt-16 px-2">
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
              src={AboutImg}
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

      <Gallery />
      <Location />
      <TestimonialPage />
    </div>
  );
}
