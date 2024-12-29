import PageBanner from "../../../components/PageBanner";
import CampusMinistryDisplay from "../../../components/CampusMinistryDisplay";
import { getOfficersAndMinisters } from "../../../sanity/sanity-utils";
import colors from '../../../constants/colors';
const {oratoryStaffColors, focusStaffColors, execBoardColors} = colors;

const staffQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'
const oratoryStaffInfo = "Oratorian info";
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