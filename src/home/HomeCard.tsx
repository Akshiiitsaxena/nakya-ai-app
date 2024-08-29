import React from "react";

interface CardProps {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const HomeCard: React.FC<CardProps> = ({
  backgroundColor,
  textColor,
  borderColor,
  icon,
  title,
  content,
}) => {
  return (
    <div
      className={`rounded-xl px-6 py-6 flex flex-col justify-between w-1/3 pb-10 ${backgroundColor} bg-opacity-50 hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex text-gray-400 items-center">
        <div className={`${backgroundColor} rounded-full`}>
          <div className={`${textColor} p-3`}>{icon}</div>
        </div>
        <div className={`font-spectral text-3xl ml-3 ${textColor}`}>
          {title}
        </div>
      </div>
      <div className="flex text-gray-400 font-montserrat">
        <div>{content}</div>
      </div>
    </div>
  );
};

export default HomeCard;
