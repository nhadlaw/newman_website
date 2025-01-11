import PageBanner from "../../../components/PageBanner";
import CampusMinistryDisplay from "../../../components/CampusMinistryDisplay";
import { getOfficersAndMinisters } from "../../../sanity/sanity-utils";
import colors from '../../../constants/colors';
import { getStaffDescriptions, getAllHeadersAndSubHeaders } from "../../../sanity/sanity-utils";
import Footer from "../../../components/Footer";
import StaffPageButtons from "../../../components/StaffPageButtons";
import BackToTop from "../../../components/BackToTop";
import grabText from '../../../constants/helpers';


const {oratoryStaffColors, focusStaffColors, execBoardColors} = colors;


export default async function OfficersAndMinistersPage() {
  const officersAndMinisters = await getOfficersAndMinisters();
  const staffDesc = await getStaffDescriptions();
  const allHeaders = await getAllHeadersAndSubHeaders();

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Officers & Ministers"} pageDesc={grabText('staff_subheading', allHeaders)} pageImg={allHeaders[0].staff_heading_img}/>
          <BackToTop/>
          <StaffPageButtons subheading={grabText('staff_seePeople_subheading', allHeaders)}/>
          <div className="bg-white my-48 flex flex-col gap-24">                
            <CampusMinistryDisplay refId={"oratoryStaff"} link={staffDesc[0].oratory_link} linkName={staffDesc[0].oratory_link_name} heading={"Pittsburgh Oratory Assoc."} staffDesc={staffDesc[0].oratory_staff_desc} people={officersAndMinisters[0].oratoryStaff.information} bgColors={oratoryStaffColors}/>
            <CampusMinistryDisplay refId={"focusStaff"} link={staffDesc[0].focus_link} linkName={staffDesc[0].focus_link_name} heading={"FOCUS Missionaries"} staffDesc={staffDesc[0].focus_staff_desc} people={officersAndMinisters[0].focusStaff.information} bgColors={focusStaffColors}/>
            <CampusMinistryDisplay refId={"execStaff"} link={null} linkName={null} heading={"Exec Board"} staffDesc={staffDesc[0].exec_staff_desc} people={officersAndMinisters[0].execBoard.information} bgColors={execBoardColors}/>
          </div>
          <Footer/>
      </div>
  );
}