import TitleText from "../../Components/TitleText/TitleText"
import "./Contact.css"
import bgAbout from "../../assets/imgs/contact/contactus.webp"
import Faq from "../../Components/Faq/Faq"
import ContactForm from "../../Components/ConatactForm/ContactForm"
import ContactSection from "../../Components/ContactSection/ContactSection"
import ContactIcons from "../../Components/ConatctIcons/ContactIcons"
import ContactIcon from "../../Components/ContactIcon/ContactIcon"
import ContactConnectionEnding from "../../Components/ContactConnectionEnding/ContactConnectionEnding"
import ContactDays from "../../Components/ContactDays/ContactDays"
import ContactSocialIcons from "../../Components/ContactSocialIcons/ContactSocialIcons"
import faceboookIcon from "../../assets/Icons/facebook icon.svg"
import xIcon from "../../assets/Icons/twitter icon.svg"
import linkedIn from "../../assets/Icons/in icon.svg"
import locationIcon from "../../assets/Icons/locationicon.svg"
import phoneIcon from "../../assets/Icons/phoneicon.svg"
import emailIcon from "../../assets/Icons/emailicon.svg"
import Divider from "../../Components/Divider/Divider"
import ContactProject from "../../Components/ContactProject/ContactProject"
const Contact = () => {
  return (
    <div className="whiteSpacing work-page">
  <TitleText
  title="Contact Us"
  text="Get in touch with us today and let us help you with any questions or inquiries you may have."
image={bgAbout}

/>
    <ContactSection>
      <ContactIcons>
        <ContactIcon path="mailto:hello@squareup.com"
            image={emailIcon}
            content="hello@squareup.com" 
        />
        <ContactIcon
            path="tel:+91 91813 23 2309"
            image={phoneIcon}
            content="+91 91813 23 2309"
          />
          <ContactIcon
            path="https://www.google.com/maps?q=30.0444,31.2357"
            image={locationIcon}
            content="Get Location"
          />
      </ContactIcons>
      <ContactForm/>
      <ContactConnectionEnding>
        <ContactDays description="Operating Days" days="Monday to Friday" />
        <Divider/>
        <ContactSocialIcons
        description="Stay Connected"
            imageface={faceboookIcon}
            alternativef="facebook icon"
            imagex={xIcon}
            alternativex="x icon"
            imagein={linkedIn}
            alternativefin="linkedin icon"/>
      </ContactConnectionEnding>
    </ContactSection>
      <TitleText
  title="Frequently Asked Questions"
  text="Still you have any questions? Contact our Team via hello@squareup.com"
image={bgAbout}

/>
<Faq />

<ContactProject/>

</div>
  )
}

export default Contact