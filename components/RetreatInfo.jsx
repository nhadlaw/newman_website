"use client"


const retreatsInfoColors = ["bg-[rgba(31,103,226,0.8)]", "bg-[rgba(114,28,64,1.0)]", "bg-[rgba(0,168,107,0.8)]", "bg-[rgba(255,200,46,1.0)]"]
const retreatsInfoTextColors = ["text-[rgba(31,103,226,0.8)]", "text-[rgba(114,28,64,1.0)]", "text-[rgba(0,168,107,0.8)]", "text-[rgba(255,200,46,1.0)]"]

const RetreatInfo = ({items}) => {
    console.log("retreat info: ", items)
    return (
        <div className="container mx-auto py-8 px-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <article
                key={index}
                className="transform transition-transform duration-300 hover:scale-105 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                {/* Top Half: Title */}
                <div className={`${retreatsInfoColors[index]} text-white font-semibold text-3xl py-4 text-center rounded-t-lg`}>
                  {item.desc_title}
                </div>
    
                {/* Bottom Half: Split into two parts */}
                <div className="flex flex-grow flex-col lg:flex-row">
                  {/* Left: Image */}
                  <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.desc_title}
                      className="max-w-full h-full object-cover"
                    />
                  </div>
    
                  {/* Right: Description */}
                  <div className="lg:w-1/2 bg-gray-50 flex flex-col justify-center p-4">
                    <p className={ `text-2xl font-bold text-center ${retreatsInfoTextColors[index]}`}>{item.desc_subtitle}</p>
                    <p className="text-gray-700 mb-4 font-light mt-8">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      );
};

export default RetreatInfo