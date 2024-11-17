import React from "react";

import { Star } from "lucide-react";
import BannerImg from "../assets/pinkputali_banner.jpg";
import { Banner } from "../Components/Banner/Banner";

// Custom Card component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

// Custom CardContent component
const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

// Dummy data for gallery and reviews
const galleryImages = [
  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/466741974_122098905560619692_6413809504327135313_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGnkrqlPc4uwyLZ5rxofZcf6eluqhVfcJPp6W6qFV9wk8U9MY9_kNTOuWUvIFlmxoMpYzTTKH6em014_DQuNKKF&_nc_ohc=TrCwLqLnBYkQ7kNvgG0mD43&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=APGuT0bir2OzVZMFqD3ohil&oh=00_AYDOcxLAAewU2lwCSt-E0MsYqObe7-Bt300zbSwxNhrFcw&oe=673FEAE7",
    alt: "Restaurant Interior",
  },

  {
    src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg",
    alt: "Signature Dish",
  },
  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/465783691_122093653358619692_9174135003382140474_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHr-GVe3kEoXDkhi0nQkMGt5ei7xeUmpu3l6LvF5Sam7dOonfbuO78t3i4QvOeYOF2idki1QG5srER7Th4xiUrz&_nc_ohc=4WED2K0K194Q7kNvgFuThB-&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AC7B9h54TwaUcV4LK2VhOkk&oh=00_AYCErpJLf5sJC8f7c6qAeQRZOnUT1aSfAqnbi93Ma8azIA&oe=673FE1E3",
    alt: "Cocktail Selection",
  },
  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/465796974_122093653292619692_1958588039483646147_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFAEH-1Esh5vv_RXYttloiEDhO0Cit-oJUOE7QKK36glb-fh3pSqp2K_faswpqxqO-0HV4hwKW_eTUbnllkkcY_&_nc_ohc=-h8huoLeAbEQ7kNvgHnyW9g&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AYG-gkP5-bwnWDM4vjm3TCf&oh=00_AYDaRlw0liy5VL7YshUKPqh6YyKDATRI9WnYbcd7UEg_CQ&oe=673FE49E",
    alt: "Outdoor Seating",
  },

  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/466741974_122098905560619692_6413809504327135313_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGnkrqlPc4uwyLZ5rxofZcf6eluqhVfcJPp6W6qFV9wk8U9MY9_kNTOuWUvIFlmxoMpYzTTKH6em014_DQuNKKF&_nc_ohc=TrCwLqLnBYkQ7kNvgG0mD43&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=APGuT0bir2OzVZMFqD3ohil&oh=00_AYDOcxLAAewU2lwCSt-E0MsYqObe7-Bt300zbSwxNhrFcw&oe=673FEAE7",
    alt: "Restaurant Interior",
  },
  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/466129505_122093653400619692_4376605311407162761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEwpd_HibdtrkapTl41XoNIeHbSj-Isv094dtKP4iy_T361Gz16-ZNv_cw4Qrg6rMtY1Joho8IWO5TV1zYAfdCy&_nc_ohc=PDn9y-m_5uwQ7kNvgGOxuAE&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AugAh6iC0H6t_On3HtkfniD&oh=00_AYCi6IpZqRJLOtb46qFrMbLYFelAnpeKhIU2W8ZhJbZ7NA&oe=673FEC01",
    alt: "Signature Dish",
  },
  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/465783691_122093653358619692_9174135003382140474_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHr-GVe3kEoXDkhi0nQkMGt5ei7xeUmpu3l6LvF5Sam7dOonfbuO78t3i4QvOeYOF2idki1QG5srER7Th4xiUrz&_nc_ohc=4WED2K0K194Q7kNvgFuThB-&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AC7B9h54TwaUcV4LK2VhOkk&oh=00_AYCErpJLf5sJC8f7c6qAeQRZOnUT1aSfAqnbi93Ma8azIA&oe=673FE1E3",
    alt: "Cocktail Selection",
  },

  {
    src: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?cs=srgb&dl=pexels-joshsorenson-976866.jpg&fm=jpg",
    alt: "Restaurant Interior",
  },

  {
    src: "https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-6/466129505_122093653400619692_4376605311407162761_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEwpd_HibdtrkapTl41XoNIeHbSj-Isv094dtKP4iy_T361Gz16-ZNv_cw4Qrg6rMtY1Joho8IWO5TV1zYAfdCy&_nc_ohc=PDn9y-m_5uwQ7kNvgGOxuAE&_nc_zt=23&_nc_ht=scontent.fktm17-1.fna&_nc_gid=AugAh6iC0H6t_On3HtkfniD&oh=00_AYCi6IpZqRJLOtb46qFrMbLYFelAnpeKhIU2W8ZhJbZ7NA&oe=673FEC01",
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
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great atmosphere and friendly staff. Will definitely return.",
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment: "The best Nepalese cuisine I've had outside of Nepal!",
  },
];

export default function About() {
  return (
    <div className="w-full px-2">
      <Banner
        image={BannerImg}
        title="Welcome to Pink Putali"
        description="Savor the fusion of Nepalese flavors with a sip of cocktails"
      />

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-600">
                  To offer the best fusion of Nepalese flavors in a cozy and
                  inviting atmosphere, paired with innovative cocktails.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-600">
                  To become the premier destination for Nepalese fusion cuisine
                  and cocktails, creating unforgettable dining experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Gallery</h2>
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
        <h2 className="text-3xl text-center tracking-wider font-bold mb-8">
          Visit Us
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
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{review.comment}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
