import PageBanner from "../../../components/PageBanner";
import SacramentOptions from "../../../components/SacramentOptions"
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
          <PageBanner pageName={"Liturgy & Prayer"} pageDesc={grabText('litAndPray_subheading', allHeaders)} pageImg={allHeaders[0].litAndPray_heading_img}/>
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
          <Footer/>
      </div>
  );
}
