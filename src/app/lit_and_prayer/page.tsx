import PageBanner from "../../../components/PageBanner";
import SacramentOptions from "../../../components/SacramentOptions"
import ChurchInfo from "../../../components/ChurchInfo";
import LitAndPrayerOptions from "../../../components/LitAndPrayerOptions";
// import {getChurchLituraryOptionsSchema } from "../../sanity/sanity-utils";
import { getChurchLituraryOptionsSchema } from "../../../sanity/sanity-utils";
import BackToTop from "../../../components/BackToTop";

const description = "So many options for so many churches that are all a walking distance away from campus";


const eventsQuote = '"If we wish to be perfect, we have nothing more to do than to perform the ordinary duties of the day well. -St. John Henry Newman"'

export default async function LitAndPray() {
  const churchAndLituragyOptions = await getChurchLituraryOptionsSchema();
  console.log('CHURCHES: ', churchAndLituragyOptions)

  return (
      <div style={{overflowX: "hidden"}}>
          <PageBanner pageName={"Lituragy & Prayer"} pageDesc={eventsQuote} pageImg={'/LitAndPrayPage.png'}/>
          <BackToTop/>
          <div className="bg-black pb-28">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-white pt-28 text-center font-bold">The Sacraments</p>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '1rem'}} className="text-white pt-2 text-center font-light text-black ">We are very lucky to have so many of the Sacraments available to us nearby.</p>
            <SacramentOptions/>
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
           <div className="bg-white pb-28" id="churchInfo">
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '4rem'}} className="text-black pt-28 text-center font-bold text-black text-7xl">Churches in Pittsburgh</p>
            <p style={{paddingRight: "20px", paddingLeft: "20px", fontSize: '1rem'}} className="text-black pt-2 text-center font-light text-black ">So many options for so many churches that are all a walking distance away from campus!</p>
            <ChurchInfo/>
          </div>
      </div>
  );
}
//other option for background: [rgba(255,200,46,0.6)]