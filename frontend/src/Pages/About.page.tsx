import React from "react";

import { Banner } from "../Components/Banner/Banner";
import { useTranslation } from "react-i18next";
import AboutImg from "../assets/about.jpg";
import { Gallery } from "../Components/Gallery/Gallery";
import { Location } from "../Components/Location/Location";
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

export default function About() {
  const { t } = useTranslation();

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
    <div className="w-full  overflow-x-hidden flex flex-col items-start justify-start gap-20 sm:gap-28">
      <Banner
        image={
          "https://img.freepik.com/premium-photo/tokyo-japan-january-09-2018-chefs-are-cooking-restaurant-most-popular-delicious-japanese-snack-food-japan_175935-25.jpg?semt=ais_hybrid"
        }
        title={title}
        description={description}
      />

      <div className="w-full px-5   flex flex-col items-start justify-start gap-20 sm:gap-36 ">
        <div className="w-full    sm:gap-16 flex flex-col items-start">
          <h2 className="sm:text-3xl tracking-wider text-xl font-bold text-gray-800 mb-4">
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

        <div className="w-full  sm:gap-16 gap-5  flex flex-col items-start">
          <h2 className="sm:text-3xl text-xl font-bold ">
            {t("mission_title")}
          </h2>
          <div className="grid   md:grid-cols-2 gap-8">
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

        <Gallery />
        <Location />
      
      </div>
      <TestimonialPage />
    </div>
  );
}
