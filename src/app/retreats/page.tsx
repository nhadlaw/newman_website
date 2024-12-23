import PageBanner from "../../../components/PageBanner";
import RetreatInfo from "../../../components/RetreatInfo";
import PreviousRetreats from "../../../components/PreviousRetreats";


const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'

const retreatsInfo = "The Catholic Newman Club at CMU hosts one retreat in Ligonier each semester. Join us for a weekend of prayer, rest, and fellowship! Our next retreat will be February 7–9, 2025; theme TBD."

export default async function Retreats() {

  return (
      <div>
          <PageBanner pageName={"Retreats"} pageDesc={eventsQuote} pageImg={'/RetreatsPage.png'}/>
          <div className="text-center">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Semesterly Retreats</p>
            <p 
            className="mb-12 mt-4 font-light pr-24 pl-24 text-xl text-black z-10 relative text-center">{retreatsInfo}</p>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-8 py-4 text-xl font-medium rounded shadow-md hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
              >
              Sign Up for Our Next Retreat!
          </a>
          </div>
        <RetreatInfo/>
        <div className="text-center">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Previous Retreats</p>
            <p className="mb-12 mt-4 font-light pr-24 pl-24 text-xl text-black z-10 relative text-center">{retreatsInfo}</p>
        </div>
        <PreviousRetreats/>
      </div>
  );
}