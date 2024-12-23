// components/ImageRow.js
import Image from 'next/image';
import Link from "next/link"; // Use this if you're using Next.js routing.


const SacramentOptions = () => {
  const items = [
    {
      imgSrc: '/MassOutline.png', // Replace with your image paths
      alt: 'Mass Outline',
      title: 'Mass',
      desc: 'See all Mass times near campus',
      divLink: '#massTimes'
    },
    {
      imgSrc: '/ConfessionOutline.png', // Replace with your image paths
      alt: 'Confession Outline',
      title: 'Confession',
      desc: 'View all Confession options',
      divLink: '#confessionOptions'
    },
    {
      imgSrc: '/EucharistOutline.png', // Replace with your image paths
      alt: 'Eucharist Outline',
      title: 'Divine Office & Devotions',
      desc: 'Check out the Devotion options',
      divLink: '#divineOfficeAndDevotions'
    },
    {
      imgSrc: '/StPaulOutline.png', // Replace with your image paths
      alt: 'Church Outline',
      title: 'Church info',
      desc: 'Find out about our churches',
      divLink: '#churchInfo'

    },
  ];

  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 py-6">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.divLink} // Make sure each object in the array has a 'link' property.
          className="
              bg-black shadow-lg rounded-lg text-center 
              transform transition-transform duration-300 
              border-black border-2 hover:scale-105 hover:border-white cursor-pointer"
        >
            {/* Image Section */}
            <div className="w-48 h-48">
              <Image
                src={item.imgSrc}
                alt={item.alt}
                width={100}
                height={100}
                className="rounded-md object-cover w-full h-full"
              />
            </div>

            {/* Title and Description */}
            <p className="mt-4 text-white p-4 pb-0 w-48 font-bold text-xl">
              {item.title}
            </p>
            <p className="text-white p-4 pt-0 w-48 font-light text-md">
              {item.desc}
            </p>
        </Link>
      ))}
    </div>
  );
};

export default SacramentOptions;