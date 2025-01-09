export default function EventsPageWeeklyGrid({items}) {
    return (
        <div className="p-6 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-80 flex flex-col justify-end p-4 w-full">
                  <div className="flex flex-col overflow-scroll font-light h-full items-center text-center pt-2 opacity-0 hover:opacity-100 text-white">
                    {item.event_link && <a
                      href={item.event_link}
                      className="text-xl border-white border-2 px-8 py-2 font-medium rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
                    >
                      <p>
                            {item.link_name}
                        </p>
                    </a>}
                    <p className="pt-4 ">{item.event_desc[0].children[0].text}</p>
                  </div>
                  <h2 className="text-lg font-bold text-white">{item.event_name}</h2>
                  <p className="text-sm text-white block">{item.event_location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

{/*

 {item.event_link && <a
                    href={item.event_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 hover:opacity-100  w-full text-center text-white border-2 border-white px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
                    >
                      <div>
                        <p>
                            {'See More Info'}
                        </p>
                      </div>
                    </a>}
*/}