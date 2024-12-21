import TeamsCard from "@/components/TeamsCard";

export default function Team() {
  const teamData = [
    {
      imageUrl: "/assets/esea-logo.png",
      title: "AfterHours - ESEA Advance (S50, S49, S48, S47)",
      players: [
        { name: "1Freaky", faceitUrl: "https://www.faceit.com/en/players/1Freaky" },
        { name: "FRIZZY", faceitUrl: "https://www.faceit.com/en/players/FRIZZY" },
        { name: "LittleBeer", faceitUrl: "https://www.faceit.com/en/players/LittleBEER" },
        { name: "icarus", faceitUrl: "https://www.faceit.com/en/players/1lcarus" },
        { name: "cMitch", faceitUrl: "https://www.faceit.com/en/players/CMitch", twitchUrl: "https://www.twitch.tv/cmitch" }
      ]
    },
    {
      imageUrl: "/assets/odyssey.png",
      title: "AfterHours - Odyssey ESEA-IM (S50, S49, S48)",
      players: [
        { name: "Ciisco-", faceitUrl: "https://www.faceit.com/en/players/ciisco-" },
        { name: "Costerfunk", faceitUrl: "https://www.faceit.com/en/players/ciisco-" },
        { name: "slYc3", faceitUrl: "https://www.faceit.com/en/players/slYc3_" },
        { name: "Eckz", faceitUrl: "https://www.faceit.com/en/players/Eckz_" },
        { name: "xKaiser_x", faceitUrl: "https://www.faceit.com/en/players/xKaiser_x" }
      ]
    },
    {
      imageUrl: "/assets/mirrored.png",
      title: "AfterHours - Mirrored ESEA (IM) (S50, S49, S48)",
      players: [
        { name: "LeJoy-", faceitUrl: "https://www.faceit.com/en/players/LeJoy-" },
        { name: "SardineS", faceitUrl: "https://www.faceit.com/en/players/SardineS" },
        { name: "supyrk", faceitUrl: "https://www.faceit.com/en/players/supyrk" },
        { name: "_-rekt-_", faceitUrl: "https://www.faceit.com/en/players/_-rekt-_" },
        { name: "-n9n-", faceitUrl: "https://www.faceit.com/en/players/-n9n-" }
      ]
    },
    {
      imageUrl: "/assets/afterhours-club.png",
      title: "AfterHours Club - S50 IM / S49 Open",
      players: [
        { name: "Evol", faceitUrl: "https://www.faceit.com/en/players/EvoI" },
        { name: "CoreyInTheNA", faceitUrl: "https://www.faceit.com/en/players/CoreyInTheNA" },
        { name: "Sag3Mode", faceitUrl: "https://www.faceit.com/en/players/Sag3Mode" },
        { name: "Gringochainz", faceitUrl: "https://www.faceit.com/en/players/Gringochainz" },
        { name: "Tread", faceitUrl: "https://www.faceit.com/en/players/Tread17" }
      ]
    },
    {
      imageUrl: "/assets/nightwatch.png",
      title: "AfterHours NightWatch - S50 IM / S49 Open",
      players: [
        { name: "Treybittie", faceitUrl: "https://www.faceit.com/en/players/Treybittie" },
        { name: "Tedd_yy", faceitUrl: "https://www.faceit.com/en/players/Ted_yy" },
        { name: "Serapix", faceitUrl: "https://www.faceit.com/en/players/Serapix" },
        { name: "__rIVal", faceitUrl: "https://www.faceit.com/en/players/__rIVal" },
        { name: "ispikee", faceitUrl: "https://www.faceit.com/en/players/ispikee" }
      ]
    }
  ];

  return (
    <div className="background-animate bg-gradient-to-r from-[#2b5876] via-darkblue to-[#4e4376] py-10 text-center shadow-lg flex flex-wrap min-h-screen items-center justify-center gap-y-6 md:gap-x-10">
      {teamData.map((team, index) => (
        <TeamsCard key={index} {...team} />
      ))}
    </div>
  );
}
