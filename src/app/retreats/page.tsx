import PageBanner from "../../../components/PageBanner";
import RetreatInfo from "../../../components/RetreatInfo";
import PreviousRetreats from "../../../components/PreviousRetreats";
import { getSemesterlyRetreats, getPreviousRetreats, getAllHeadersAndSubHeaders } from "../../../sanity/sanity-utils";
import Footer from "../../../components/Footer";
import grabText from '../../../constants/helpers';

const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'


export default async function Retreats() {
  const retreatInfo = await getSemesterlyRetreats();
  const previousRetreats = await getPreviousRetreats();
  const allHeaders = await getAllHeadersAndSubHeaders();


  return (
      <div>
          <PageBanner pageName={"Retreats"} pageDesc={grabText('retreats_subheading', allHeaders)} pageImg={allHeaders[0].retreats_heading_img}/>
          <RetreatInfo signup_link={retreatInfo[0].retreat_signUp_link} header_desc={retreatInfo[0].retreats_header_desc} items={retreatInfo[0].retreat_info}/>
          <PreviousRetreats items={previousRetreats}/>
          <Footer/>
      </div>
  );
}