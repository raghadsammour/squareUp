import "./ContactSection.css"

const ContactSection = (props) => {
    return (
        <section className="RB_ContactSection whiteSpacing">
            {props.children}
        </section>
    )
};

export default ContactSection;
