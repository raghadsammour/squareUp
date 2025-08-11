import TitleText from "../../Components/TitleText/TitleText"
import "./Contact.css"
import bgAbout from "../../assets/imgs/contact/contactus.webp"
import smallSquare from "../../assets/Icons/smallSquare.png"

const Contact = () => {
  return (
  <TitleText
  title="Contact Us"
  text="Get in touch with us today and let us help you with any questions or inquiries you may have."
image={bgAbout}
overlay={smallSquare}
/>
  )
}

export default Contact
