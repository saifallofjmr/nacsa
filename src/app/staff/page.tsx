import Image from "next/image";

//CARD COMPONENT FOR STAFF
const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="poppins flex h-24 w-[120px] flex-col items-center justify-center rounded-lg bg-[#28282B] py-6 shadow-lg md:h-60 md:w-64">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="counter-strike bot profile picture"
        className="h-12 w-12 rounded-full md:h-40 md:w-40"
      />
      <h5 className="text-center text-sm font-semibold text-white md:text-2xl">
        {name}
      </h5>
    </div>
  );
};

export default function Staff() {
  return (
    <div className="flex flex-col ">
      <h1 className="m-5 text-center text-3xl font-bold text-white md:text-6xl">
        STAFF
      </h1>
      <p className="montserrat mx-auto w-2/3 text-center text-sm text-white md:w-1/2 md:text-xl">
        Our staff is here to help. We are dedicated to the cause. All of our
        members are actively engaged in the community and working hard for our
        growth!
      </p>
      <div className="mx-auto mt-10 grid w-[50%] md:w-[60%] grid-cols-2 md:grid-cols-4 gap-x-[100px] gap-y-[20px] md:gap-10 place-items-center">
        {/* CHANGE NAME/IMAGE FOR NEW CONTENT */}
        <Card image="/assets/ct-pfp.png" name="mousee" />
        <Card image="/assets/ct-pfp.png" name="pink ocean yuki" />
        <Card image="/assets/ct-pfp.png" name="costerfunk" />
        <Card image="/assets/ct-pfp.png" name="ev0l" />
        <Card image="/assets/t-pfp.png" name="denverg" />
        <Card image="/assets/t-pfp.png" name="thyme et basil" />
        <Card image="/assets/t-pfp.png" name="1freaky" />
        <Card image="/assets/t-pfp.png" name="b1tter" />
      </div>
    </div>
  );
}
