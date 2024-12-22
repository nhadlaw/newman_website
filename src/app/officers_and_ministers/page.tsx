import PageBanner from "../../../components/PageBanner";
import CampusMinistryDisplay from "../../../components/CampusMinistryDisplay";
import { getOfficersAndMinisters } from "../../../sanity/sanity-utils";
import colors from '../../../constants/colors';
const {oratoryStaffColors, focusStaffColors} = colors;
const oratory = [
    {
        imgSrc: '/FrThomas.png', // Replace with the person's image path
        name: 'Fr. Thomas Skamai',
        contact: 'john.doe@example.com',
        bgColor: '#00008B',
        about: 'John is a software developer with a passion for creating user-friendly applications and solving challenging problems.',
    },
    {
        imgSrc: '/HannahNaylorB&W.png', // Replace with the person's image path
        name: 'Hannah Naylor',
        contact: 'john.doe@example.com',
        bgColor: '#FFB302',
        about: 'John is a software developer with a passion for creating user-friendly applications and solving challenging problems.',
    },
    {
        imgSrc: '/HannahNaylor.png', // Replace with the person's image path
        name: 'Hannah Naylor',
        contact: 'john.doe@example.com',
        bgColor: '#00008B',
        about: 'John is a software developer with a passion for creating user-friendly applications and solving challenging problems.',
    }
]
const eventsQuote = 'Some description about the pittsburgh oratory staff can go here.Some description about the pittsburgh oratory staff can go here. Some description about the pittsburgh oratory staff can go here. Some description about the pittsburgh oratory staff can go here.'

//TODO move these constants to a separate file  

export default async function OfficersAndMinistersPage() {
  const officersAndMinisters = await getOfficersAndMinisters();
  console.log("Officers and Ministers: ", officersAndMinisters[0].oratoryStaff)
  console.log('colors: ', oratoryStaffColors)

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Officers & Ministers"} pageDesc={eventsQuote} pageImg={'/OfficersAndMinistersPage.png'}/>
          <div className="bg-white pb-28">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Pittsburgh Oratory Assoc.</p>
            <p className="mt-4 font-light pr-16 pl-16 text-xl text-black z-10 relative text-center">{eventsQuote}</p>
            <CampusMinistryDisplay people={officersAndMinisters[0].oratoryStaff.information} bgColors={oratoryStaffColors}/>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black text-center font-bold text-black text-7xl">FOCUS Missionaries</p>
            <p className="mt-4 font-light pr-16 pl-16 text-xl text-black z-10 relative text-center">{eventsQuote}</p>
            <CampusMinistryDisplay people={officersAndMinisters[0].focusStaff.information} bgColors={focusStaffColors}/>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black text-center font-bold text-black text-7xl">Executive Board</p>
            <p className="mt-4 font-light pr-16 pl-16 text-xl text-black z-10 relative text-center">{eventsQuote}</p>
            <CampusMinistryDisplay people={officersAndMinisters[0].execBoard.information} bgColors={oratoryStaffColors}/>
          </div>
      </div>
  );
}