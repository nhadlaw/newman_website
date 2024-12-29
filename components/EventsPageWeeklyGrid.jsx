export default function EventsPageWeeklyGrid({items}) {
    return (
        <div className="p-6 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-80 flex flex-col justify-end p-4">
                  <p className="overflow-scroll font-light h-full items-center text-center pt-6 opacity-0 hover:opacity-100 text-white ">{item.event_desc[0].children[0].text}</p>
                  <h2 className="text-lg font-bold text-white">{item.event_name}</h2>
                  <p className="text-sm text-white block">{item.event_location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}
