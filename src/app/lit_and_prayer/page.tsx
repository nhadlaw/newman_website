import PageBanner from "../../../components/PageBanner";
import SacramentOptions from "../../../components/SacramentOptions"
import ChurchInfo from "../../../components/ChurchInfo";
import LitAndPrayerOptions from "../../../components/LitAndPrayerOptions";
import { getChurchLituraryOptionsSchema, getAllHeadersAndSubHeaders } from "../../../sanity/sanity-utils";
import BackToTop from "../../../components/BackToTop";
import Footer from "../../../components/Footer";
import grabText from '../../../constants/helpers';

const description = "So many options for so many churches that are all a walking distance away from campus";


export default async function LitAndPray() {
  const churchAndLituragyOptions = await getChurchLituraryOptionsSchema();
  const allHeaders = await getAllHeadersAndSubHeaders();

  return (
      <div style={{overflowX: "hidden"}} className="bg-black">
          <PageBanner pageName={"Lituragy & Prayer"} pageDesc={grabText('litAndPray_subheading', allHeaders)} pageImg={allHeaders[0].litAndPray_heading_img}/>
          <BackToTop/>
          <div className="bg-black pb-28">
            <SacramentOptions subheading={grabText('sacraments_subheading', allHeaders)}/>
          </div>
          <div className="bg-[rgba(31,103,226,0.8)] pb-28" id="massTimes">
            <LitAndPrayerOptions items={churchAndLituragyOptions} bgColor={"bg-[rgba(31,103,226,0.8)]"} heading={"Mass Times"} description={description} informationToGrab={"massTimes"}/>
          </div>
          <div className="bg-[rgba(114,28,64,0.8)] pb-28" id="confessionOptions">
            <LitAndPrayerOptions items={churchAndLituragyOptions} bgColor={"bg-[rgba(114,28,64,0.8)]"} heading={"Confession Options"} description={description} informationToGrab={"confessionOptions"}/>
          </div>
          <div className="bg-[rgba(0,168,107,0.8)] pb-28" id="divineOfficeAndDevotions">
            <LitAndPrayerOptions items={churchAndLituragyOptions} bgColor={"bg-[rgba(0,168,107,0.8)]"} heading={"Divine Office & Devotions"} description={description} informationToGrab={"divineOfficeAndDevotions"}/>
          </div>
           {/* <div className="bg-black" id="churchInfo">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-white pt-28 text-center font-bold text-white text-7xl">Churches in Pittsburgh</p>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '1rem'}} className="text-white pt-2 mb-8 text-center font-light text-white ">So many options for so many churches that are all a walking distance away from campus!</p>
            <ChurchInfo slides={churchAndLituragyOptions}/>
          </div> */}
          <Footer/>
      </div>
  );
}
