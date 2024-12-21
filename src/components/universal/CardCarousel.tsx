import React from "react";
import { motion } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "/assets/10mans.webp",
      title: "AfterHours",
      description: "[10 Mans]",
      link: "https://www.faceit.com/en/hub/acc37195-57a0-4149-aa70-d5f545f30411/After%20Hours%20League%20%5B10Man%5D/requirements",
    },
    {
      image: "/assets/shark.jpeg",
      title: "AfterHours x SharkBoyz",
      description: "[2v2]",
      link: "https://www.faceit.com/en/hub/f7efa731-f485-47a1-ac54-1139dbda289a/SharkBoyz%20x%20AfterHours%20%5B2v2%5D/requirements",
    },
    {
      image: "/assets/shark.jpeg",
      title: "AfterHours x SharkBoyz",
      description: "[Wing-Man]",
      link: "https://www.faceit.com/en/hub/0f41b337-59fc-4476-b97f-a578ed2b55d2/SharkBoyz%20x%20AfterHours%20%5BWing%20Man%5D/requirements",
    },
    {
      image: "/assets/shark.jpeg",
      title: "AfterHours x SharkBoyz",
      description: "[1v1]",
      link: "https://www.faceit.com/en/hub/468d7962-a84a-40be-9787-3682e6b2487e/SharkBoyz%20x%20AfterHours%20%5B1v1%5D/requirements",
    },
  ];

  const handlePrev = () => {
    if (currentIndex == 0) {
      setCurrentIndex(cards.length - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex == cards.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="mx-auto mt-4 w-[230px] text-bluegray md:mt-0 md:w-full">
      <div className="lg:relative">
        <div className="flex items-center justify-center">
          {cards.slice(currentIndex, currentIndex + 1).map((card, index) => (
            <div
              className="relative z-30 rounded-lg border-[1px] border-neonblue bg-[#000000] p-4 shadow-xl  md:w-[25%]"
              key={index}
            >
              <img
                className="mx-auto mb-4 h-[200px] w-full rounded-lg border-[1px] border-neonblue object-cover md:h-[350px]"
                src={card.image}
                alt="Card"
              />
              <h3 className="py-2 text-2xl font-bold">{card.title}</h3>
              <p className="text-gray-500 py-2">{card.description}</p>
              {card.link && (
                <button className="mt-3 rounded-lg bg-darkblue text-white transition hover:scale-110 active:scale-90">
                  <a
                    href={card.link}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-700 flex h-10 w-28 items-center justify-center rounded text-center font-bold "
                  >
                    Join Now
                  </a>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="relative bottom-44 mt-4 flex items-center justify-between">
          <button
            className="relative -left-[40px] bottom-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-3xl transition hover:scale-125 active:scale-90 md:left-[200px] lg:left-[510px] md:h-12 md:w-12"
            onClick={handlePrev}
          >
            <MdNavigateBefore />
          </button>
          <button
            className="relative -right-[40px] bottom-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-3xl transition hover:scale-125 active:scale-90 md:-left-[200px] lg:-left-[510px] md:h-12 md:w-12"
            onClick={handleNext}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
