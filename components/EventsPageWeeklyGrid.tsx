export default function EventsPageWeeklyGrid() {
    const items = [
      {
        title: "Newman Night",
        description: "Sundays @ 7 PM.",
        location: "St. Paul Cathedral Social Hall",
        full_description: "Just your average event description goes in here with all and everything we could possible need to describe the event and such and such and such",
        image: "/EventsPage.jpg",
      },
      {
        title: "Mass on Campus",
        description: "Mondays @ 5:15 PM.",
        location: "CUC Wright-Rogal Chapel",
        full_description: "Just your average event description goes in here with all and everything we could possible need to describe the event and such and such and such",
        image: "/EventsPage1.png",
      },
      {
        title: "Chit Chats",
        description: "Thursdays @ 8 PM.",
        location: "Highmark Center Well-Being Lab",
        full_description: "Just your average event description goes in here with all and everything we could possible need to describe the event and such and such and such",
        image: "/EventsPage2.png",
      },
      {
        title: "Womens Bible Study",
        description: "Contact a Missionary",
        full_description: "Just your average event description goes in here with all and everything we could possible need to describe the event and such and such and such",
        location: "TBD",
        image: "/EventsPage3.png",
      },
      {
        title: "Mens Bible Study",
        description: "Contact A missionary.",
        location: "St. Paul Cathedral Basement",
        full_description: "Just your average event description goes in here with all and everything we could possible need to describe the event and such and such and such",
        image: "/EventsPage2.png",
      },
      {
        title: "Red Door",
        description: "Thursdays & Fridays time TBD.",
        location: "St. Mary of Mercy Divine Parish",
        full_description: "Just your average event description goes in here with all and everything we could possible need to describe the event and such and such and such",
        image: "/EventsPage1.png",
      },
    ];

    return (
        <div className="p-6 text-white">
        <h1 className="font-light text-2xl font-bold text-center mb-8">We have numerous weekly events for food, fellowship, service, and more!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center h-48"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-80 flex flex-col justify-end p-4">
                  <p className="font-light h-full items-center text-center pt-12 opacity-0 hover:opacity-100 text-white ">{item.full_description}</p>
                  <h2 className="text-lg font-bold text-white">{item.title}</h2>
                  <p className="text-sm text-white block">{item.description}</p>
                  <span className="absolute left-0 top-0 hidden text-red-500 hover:block">This is the text on hover</span>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}
