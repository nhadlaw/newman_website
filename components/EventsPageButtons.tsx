import CircularButton from './CircularButtonForEventsPage';
import Link from "next/link"; // Use this if you're using Next.js routing.

const ButtonRow = () => {
  return (
    <div className="flex justify-center items-center gap-8 flex-wrap sm:flex-row mt-16">
      <Link href={'#weeklyEvents'}>
        <CircularButton
            imageSrc="/ImmaculateHeart.svg"
            textInButton="Weekly"
            bottomText="Events"
            bgColor="bg-[rgba(114,28,64,0.8)]"
        />
      </Link>
      <Link href={"#upcomingEvents"}>
        <CircularButton
            imageSrc="/SacredHeart.svg"
            textInButton="Upcoming"
            bottomText="Events"
            bgColor="bg-[rgba(255,200,46,1.0)]"
        />
      </Link>
      <Link href={"#eventHighlights"}>
        <CircularButton
            imageSrc="/ChasteHeart.svg"
            textInButton="Event"
            bottomText="Highlights"
            bgColor="bg-[rgba(31,103,226,1.0)]"
        />
      </Link>
    </div>
  );
};

export default ButtonRow;
