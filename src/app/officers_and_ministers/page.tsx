import PageBanner from "../../../components/PageBanner";
import CampusMinistryDisplay from "../../../components/CampusMinistryDisplay";
import { getOfficersAndMinisters } from "../../../sanity/sanity-utils";
import colors from '../../../constants/colors';
const {oratoryStaffColors, focusStaffColors, execBoardColors} = colors;

const staffQuote = "We are very blessed to have the Oratorian Fathers, FOCUS missionaries, and our fellow classmates on the Exec board that support our club and help build a wonderful community."
const oratoryStaffInfo = "The Oratorian Fathers are members of the congregation at the Oratory, serving as campus ministers for Carnegie Mellon University, the University of Pittsburgh, and Chatham University. We are also fortunate to have our dedicated Campus Minister, who plays a vital role in fostering community life at the Newman Center and supporting the club. Together, the Oratorian staff has an incredible influence on the vibrant and welcoming community we are proud to call our own, thanks to the Oratory."
const focusStaffInfo = "FOCUS staff info";
const execBoardInfo = 'Exec Board Info';

//TODO move these constants to a separate file  

export default async function OfficersAndMinistersPage() {
  const officersAndMinisters = await getOfficersAndMinisters();

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Officers & Ministers"} pageDesc={staffQuote} pageImg={'/OfficersAndMinistersPage.png'}/>
          <div className="bg-white pb-28">                
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Pittsburgh Oratory Assoc.</p>
            <p className="mt-4 font-light pr-16 pl-16 text-xl text-black z-10 relative text-center">{oratoryStaffInfo}</p>
            <CampusMinistryDisplay people={officersAndMinisters[0].oratoryStaff.information} bgColors={oratoryStaffColors}/>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black text-center font-bold text-black text-7xl">FOCUS Missionaries</p>
            <p className="mt-4 font-light pr-16 pl-16 text-xl text-black z-10 relative text-center">{focusStaffInfo}</p>
            <CampusMinistryDisplay people={officersAndMinisters[0].focusStaff.information} bgColors={focusStaffColors}/>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black text-center font-bold text-black text-7xl">Executive Board</p>
            <p className="mt-4 font-light pr-16 pl-16 text-xl text-black z-10 relative text-center">{execBoardInfo}</p>
            <CampusMinistryDisplay people={officersAndMinisters[0].execBoard.information} bgColors={execBoardColors}/>
          </div>
      </div>
  );
}