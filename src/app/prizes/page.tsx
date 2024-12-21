import Image from "next/image";

const Card = ({
  name,
  image,
  content,
  href,
  alt,
}: {
  name: string;
  image: string;
  content: string;
  href?: string;
  alt: string;
}) => {
  return (
    <a href={href} target="_blank" className="inline-block w-1/2">
      <div className="relative flex w-[300px] flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg transition duration-100 ease-in-out hover:-translate-y-4 hover:opacity-80 md:w-full">
        <Image
          src={image}
          width={10000}
          height={10000}
          alt={alt}
          className="z-0 max-h-80 w-full rounded-lg object-cover"
        />
        <div className="absolute z-10 w-full items-center justify-center px-6 py-4 text-center text-white">
          <h5 className="mb-2 text-xl font-bold text-[#fafafae8]">{name}</h5>
          <p className="font-medium text-secondary">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default function Prizes() {
  return (
    <div className="background-animate h-screen w-full bg-gradient-to-r from-[#2b5876] via-darkblue to-[#4e4376] pt-16">
      <div className="flex w-1/2 flex-col items-center justify-center gap-14 md:w-full">
        {/* REPLACE NAME/CONTENT/IMAGE/HREF/ALT TO CHANGE CONTENT (HREF IS FOR LINKS) (ALT IS PRESERVED FOR PHOTO CREDITS AND ACCESSIBILITY) */}
        <Card
          name="AfterHours Season 2"
          content="Summer Break Cash Cup ($1000 USD)"
          href="https://www.faceit.com/en/championship/deb428dc-be6a-4a05-ad65-06280ae388eb/After%20Hours%20Season%202%20-%20Summer%20Break%20Cash%20Cup%20%5B1000%20USD%5D"
          image="/assets/card-bg.jpg"
          alt="Photo of a razer headphone; Credits to: https://unsplash.com/@fazlyshah?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash Fazly Shah"
        />
      </div>
    </div>
  );
}
