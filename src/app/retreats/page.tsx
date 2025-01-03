import PageBanner from "../../../components/PageBanner";
import RetreatInfo from "../../../components/RetreatInfo";
import PreviousRetreats from "../../../components/PreviousRetreats";
import { getSemesterlyRetreats, getPreviousRetreats } from "../../../sanity/sanity-utils";


const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'

const previousRetreatsInfo = "Check out some of our previous Retreat themes!"

export default async function Retreats() {
  const retreatInfo = await getSemesterlyRetreats();
  const previousRetreats = await getPreviousRetreats();
  console.log('PREVIOUS RETREATS: ', previousRetreats)

  return (
      <div>
          <PageBanner pageName={"Retreats"} pageDesc={eventsQuote} pageImg={'/RetreatsPage.png'}/>
          <div className="text-center">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Semesterly Retreats</p>
            <p 
            className="mb-12 mt-4 font-light pr-24 pl-24 text-xl text-black z-10 relative text-center">{retreatInfo[0].retreats_header_desc}</p>
            <a
              href={retreatInfo[0].retreat_signUp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
              >
              Sign Up for Our Next Retreat!
          </a>
          </div>
        <RetreatInfo items={retreatInfo[0].retreat_info}/>
        <div className="text-center">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Previous Retreats</p>
            <p className="mb-12 mt-4 font-light pr-24 pl-24 text-xl text-black z-10 relative text-center">{previousRetreatsInfo}</p>
        </div>
        <PreviousRetreats items={previousRetreats}/>
      </div>
  );
}