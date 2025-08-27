import "./ContactDays.css"
const ContactDays = ({description,days}) => {
  return (
    <div className="RB_DaysWorking">
        <span>{description}</span>
        <span>{days}</span>
    </div>
  )
}

export default ContactDays