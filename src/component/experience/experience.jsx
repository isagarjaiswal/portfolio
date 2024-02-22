export const Experience = ({ data, head }) => {
    return (
        <div className="experience-section">
            <div className="experience-heading">{head}</div>
            <div className="experience-container">
                {data.map((experience) => (
                    <div key={experience.id}>
                        <div className="experience-item">
                            <div className="experience-date">{experience.date}</div>
                            <div className="experience-content">
                                <div className="compnay-role-experience">
                                    <div className="experience-company">{experience.company}</div>
                                    <div className="experience-role">{experience.role}</div>
                                </div>
                                {experience.description && <div className="experience-description">{experience.description}</div>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};