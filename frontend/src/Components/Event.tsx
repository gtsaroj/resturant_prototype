import React from "react";
import EventCard from "./Common/Card/Event.card";

export const Event: React.FC = () => {
  const events = [
    {
      title: "Live Jazz Night",
      image:
        "https://imgs.search.brave.com/Q7TJOWBQ8tu3jN0CtPkw_2m1qvxFVo59Zw_yH2UdHwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzEwNTgwMjAzODct/M2JlMzQ0NTU2YmU2/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE9IeDhaWFps/Ym5SOFpXNThNSHg4/TUh4OGZEQT0",
      date: "2024-11-25",
      time: "7:00 PM - 10:00 PM",
      location: "The Gourmet Restaurant, Downtown",
      description: "An evening of live jazz music with a curated menu.",
      price: 50,
      tags: ["Live Music", "Special Menu"],
      ctaLink: "/reserve",
      availableSeats: 8,
    },
    {
      title: "Art & Wine Night",
      image:
        "https://imgs.search.brave.com/vHKxiNssdtyxLTbPJJEiz56ks2yz4EIFRxsxXQEvLtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXN0/YXVyYW50LmVhdGFw/cC5jby9ocy1mcy9o/dWJmcy9yZXN0YXVy/YW50JTIwZXZlbnQl/MjBpZGVhcy53ZWJw/P3dpZHRoPTY3MCZo/ZWlnaHQ9NDQwJm5h/bWU9cmVzdGF1cmFu/dCUyMGV2ZW50JTIw/aWRlYXMud2VicA",
      date: "2024-12-05",
      time: "6:00 PM - 9:00 PM",
      location: "Artisan Lounge, Uptown",
      description: "Sip on fine wines while enjoying an art exhibit.",
      price: 40,
      tags: ["Art", "Wine Tasting"],
      ctaLink: "/book",
      availableSeats: 20,
    },
    {
      title: "Cooking Masterclass: Italian Cuisine",
      image:
        "https://imgs.search.brave.com/MgQ-tr18tNm7Sz4fJg5_totwdxPKq49_HUu8a0305ew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQzNDY0ODA3NzUt/OTM2YTlmMGQwODc3/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5ueDhjbVZ6/ZEdGMWNtRnVkSHhs/Ym53d2ZId3dmSHg4/TUE9PQ",
      date: "2024-12-12",
      time: "5:00 PM - 8:00 PM",
      location: "The Culinary Studio, Midtown",
      description: "Learn to cook authentic Italian dishes with a top chef.",
      price: 100,
      tags: ["Cooking", "Hands-On"],
      ctaLink: "/register",
      availableSeats: 15,
    },
    {
      title: "Stand-Up Comedy Night",
      image:
        "https://imgs.search.brave.com/ZlS35yGM86yh5iNWataWzdHWkzeo74w-1XQwA5wT-ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3NhbGVz/LmFwcGluc3QuaW8v/MjAxOS8wNC9pbWFn/ZTI2LTEuanBn",
      date: "2024-11-30",
      time: "8:00 PM - 10:30 PM",
      location: "Laugh Out Loud Comedy Club",
      description: "A night of laughter featuring top comedians.",
      price: 30,
      tags: ["Comedy", "Nightlife"],
      ctaLink: "/tickets",
      availableSeats: 50,
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-center gap-10 px-3 py-10">
      <div className="w-full flex items-center ">
        <h3 className="h-[2px] w-full sm:text-[22px] text-[16px]  bg-gradient-to-r from-black/100 dark:from-white/100  to-black/0 dark:to-white/0"></h3>
        <p className="font-bold text-center sm:text-[22px] text-[14px]  sm:min-w-[300px] w-[512px] tracking-wide text-[var(--dark-text)]">
          Explore Our Events!
        </p>
        <h3 className="h-[2px] w-full  bg-gradient-to-r from-black/0 dark:from-white/0 to-black/100 dark:to-white/100"></h3>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 justify-items-center sm:justify-items-stretch sm:grid-cols-2 gap-4">
        {events?.map((event, index) => (
          <EventCard
            ctaLink={event.ctaLink}
            date={event.date}
            image={event.image}
            location={event.location}
            price={event.price}
            tags={event.tags}
            time={event.time}
            title={event.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
