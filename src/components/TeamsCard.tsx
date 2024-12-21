import React from "react";

type Player = {
  name: string;
  faceitUrl: string;
  twitchUrl?: string; // Optional since not all players may have a Twitch link
};

type TeamCardProps = {
  imageUrl: string;
  title: string;
  players: Player[];
};

export default function TeamsCard({ imageUrl, title, players }: TeamCardProps) {
  return (
    <div className="flex h-60 w-80 md:w-[50%] md:h-[50%] items-center rounded-md border bg-bg shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="h-60 w-36 rounded-r-lg object-cover md:h-full md:w-60"
      />
      <div className="flex flex-col justify-between leading-normal">
        <h1 className="mb-4 text-sm font-bold tracking-tight text-start px-2 text-white md:mb-2 md:px-5 md:text-2xl">
          {title}
        </h1>
        <ul>
          {players.map((player, index) => (
            <li
              className="cursor-pointer px-3 py-[3px] text-start text-sm text-white hover:text-accent md:px-5 md:text-lg"
              key={index}
            >
              {player.faceitUrl ? (
                <a href={player.faceitUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {player.name}
                </a>
              ) : (
                <span>{player.name}</span> // Render the player's name without a link if no URL is provided
              )}
              {player.twitchUrl && (
                <>
                  {" - "}
                  <a href={player.twitchUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Twitch
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
