import BackToTop from "../../../components/BackToTop";
import Footer from "../../../components/Footer";
import { getAboutPageContents, getAlumniVocations } from "../../../sanity/sanity-utils";
import AboutPageSection from "../../../components/AboutPageSection";
import AboutNewman from "../../../components/aboutPage/AboutNewman";
import AboutOratory from "../../../components/aboutPage/AboutOratory";
import OurCommunityOptions from "../../../components/aboutPage/OurCommunityOptions";
import AboutService from "../../../components/aboutPage/AboutService";
import AboutServiceOpportunities from "../../../components/aboutPage/AboutServiceOpportunities";
import AboutFOCUS from "../../../components/aboutPage/AboutFOCUS";
import AboutAlumni from "../../../components/aboutPage/AboutAlumni";
import AboutPageButtons from "../../../components/aboutPage/AboutPageButtons";


import AboutSEEK from "../../../components/aboutPage/AboutSEEK";
import AboutSEEKHighlights from "../../../components/aboutPage/AboutSEEKHighlights";
import Navbar from "../../../components/Navbar";


export default async function Events() {
  const aboutPageContents = await getAboutPageContents();
  const alumniVocations = await getAlumniVocations();

  console.log(alumniVocations);

  const communityItems = [
    {
        image: aboutPageContents[0].support_link_img,
        title: 'Support Us',
        description: 'Find ways to help support our community and students',
        link: aboutPageContents[0].support_link,
        link_name: 'Give'
    },
    {
        image: aboutPageContents[0].events_link_img,
        title: 'See Events',
        description: 'Join us in our events with fellowship, food, and fun!',
        link: '/events',
        link_name: 'Join'
    },
    {
        image: aboutPageContents[0].alumni_link_img,
        title: 'Alumni',
        description: 'Learn more about and connect with our alumni',
        link: '#aboutAlumni',
        link_name: 'Connect'
    },
  ]

  //CMU Maroon rgb: 114, 28, 64

  return (
      <div style={{overflowX: "hidden"}} className='bg-cmu-maroon'>
          <Navbar/>
          <BackToTop/>
          <AboutPageButtons/>
          <AboutPageSection 
            bgColor={"bg-cmu-maroon"} 
            heading={"What is Newman?"} 
            idRef={"aboutNewman"}
            sectionComponents={[<AboutNewman key="about-newman" newmanImg={aboutPageContents[0].what_is_newman_img} newmanTxt={aboutPageContents[0].what_is_newman_text}/>]}
          />
          <AboutPageSection 
            bgColor={"bg-cmu-maroon"} 
            heading={"Our Community"} 
            idRef={"aboutOurCommunity"}
            sectionComponents={[<OurCommunityOptions key="out-community" subheading={aboutPageContents[0].our_community_subheading} items={communityItems}/>]
        }/>
        <AboutPageSection 
          bgColor={"bg-cmu-maroon"} 
          heading={"The Oratory"} 
          idRef={"aboutOratory"}
          sectionComponents={[<AboutOratory key="about-oratory" oratoryTxt={aboutPageContents[0].oratory_text} oratoryImgs={aboutPageContents[0].oratory_images}/>]}
        />
          <AboutPageSection 
            bgColor={"bg-cmu-maroon"} 
            heading={"Service"} 
            idRef={"aboutService"}
            sectionComponents={
                [<AboutService key="about-service" subheading={aboutPageContents[0].service_subheading} discordLink={aboutPageContents[0].service_discord_link} seeMoreLink={aboutPageContents[0].service_see_more_link} />, 
                <AboutServiceOpportunities key="about-service-opportunities" serviceOpportunities={aboutPageContents[0].service_opportunity_images} subheading={"Check out some of our favorite ways to help out"}/>]}/>
          <AboutPageSection 
            bgColor={"bg-cmu-maroon"} 
            heading={"FOCUS"} 
            idRef={"aboutFOCUS"}
            sectionComponents={[
                <AboutFOCUS key="about-focus" subheading={aboutPageContents[0].focus_subheading} missionariesImg={aboutPageContents[0].our_missionaries_img} missionariesTxt={aboutPageContents[0].our_missionaries_text}/>, 
                <AboutSEEK key="about-seek" subheading={aboutPageContents[0].seek_subheading} signupLink={aboutPageContents[0].seek_signup_link} seekDesc={aboutPageContents[0].what_is_seek_text} seekImg={aboutPageContents[0].what_is_seek_img}/>, 
                <AboutSEEKHighlights 
                    key="about-seek-highlights"
                    highlightImages={aboutPageContents[0].seek_highlights}
                    recapLink={aboutPageContents[0].seek_recap_link}
                    seeMoreLink={aboutPageContents[0].seek_see_more_link}
                />
            ]}
          />
          <AboutPageSection 
           idRef={"aboutAlumni"}
            bgColor={"bg-cmu-maroon"} 
            heading={"Alumni"} 
            sectionComponents={[<AboutAlumni key="about-alumni" subheading={aboutPageContents[0].alumni_subheading} vocations={alumniVocations[0].categories}/>]}/>
          <Footer/>
      </div>
  );
}