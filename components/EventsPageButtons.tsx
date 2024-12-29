import CircularButton from './CircularButtonForEventsPage';
import Link from "next/link"; // Use this if you're using Next.js routing.

const ButtonRow = () => {
  return (
    <div className="flex justify-center items-center gap-16 flex-col md:flex-row md:h-[100vh] mt-16 mb-16">
      <Link href={'#weeklyEvents'}>
        <CircularButton
            imageSrc="/ImmaculateHeart.png"
            textInButton="Weekly"
            bottomText="Events"
            bgColor="bg-[rgba(114,28,64,0.8)]"
        />
      </Link>
      <Link href={"#upcomingEvents"}>
        <CircularButton
            imageSrc="/SacredHeart.png"
            textInButton="Upcoming"
            bottomText="Events"
            bgColor="bg-[rgba(255,200,46,1.0)]"
        />
      </Link>
      <Link href={"#eventHighlights"}>
        <CircularButton
            imageSrc="/ChasteHeart.png"
            textInButton="Event"
            bottomText="Highlights"
            bgColor="bg-[rgba(31,103,226,1.0)]"
        />
      </Link>
    </div>
  );
};

export default ButtonRow;
