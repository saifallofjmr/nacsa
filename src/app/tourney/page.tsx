import Link from "next/link";
import Image from "next/image";

const Card = ({
  name,
  image,
  content,
  href,
}: {
  name: string;
  image: string;
  content: string;
  href?: string;
}) => {
  return (
    <a href={href} target="_blank">
      <div className="max-w-sm overflow-hidden rounded bg-[#212930] shadow-lg transition duration-100 ease-in-out hover:-translate-y-4 hover:opacity-80">
        <Image
          src={image}
          width={10000}
          height={10000}
          alt="latest news image"
          className="max-h-80 rounded-lg object-cover"
        />
        <div className="px-6 py-4 text-center">
          <h5 className="mb-2 text-xl font-bold text-[#fafafae8]">{name}</h5>
          <p className="font-medium text-secondary">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default function Tourney() {
  return (
    <div className="">
      <div className="background-animate mx-auto h-screen w-full bg-gradient-to-r from-[#2b5876] via-darkblue to-[#4e4376] text-center text-white shadow-lg">
        <h3 className="pt-10">CURRENT</h3>
        <h1 className="poppins text-3xl font-semibold underline underline-offset-8 md:text-5xl">
          TOURNEYS
        </h1>
        <p className="montserrat m-5 mx-auto w-2/3 text-sm md:w-[50%] md:py-4 md:text-xl">
          Sharpen your aim and dominate Counter-Strike 2 in our FACEIT Hub! Join
          the community for skilled matches and climb the leaderboards.
        </p>
        <div className="m-10 flex items-center justify-center rounded-lg">
          {/* CHANGE NAME/CONTENT/IMAGE FOR NEW CONTENT */}
          <Card
            name="SharkBoyz x AfterHours"
            image="/assets/tournament.webp"
            content="[2v2]"
            href="https://www.faceit.com/en/championship/deb428dc-be6a-4a05-ad65-06280ae388eb/After%20Hours%20Season%202%20-%20Summer%20Break%20Cash%20Cup%20%5B1000%20USD%5D"
          />
        </div>
      </div>
    </div>
  );
}
