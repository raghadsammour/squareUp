const Section = ({ titleSpan, secTitle, desc }) => {
    return (
        <div className="section">
            <h1>
                <span>{titleSpan}</span> {secTitle}
            </h1>
            <p>{desc}</p>
        </div>
    );
};

export default Section;
