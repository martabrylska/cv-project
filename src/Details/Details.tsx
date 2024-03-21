import "./Details.scss";
import {Details} from "../types";

interface Props {
    data: Details;
}

export const Details = ({data}: Props) => {
    return <section className="cv-details">
        <h2>Experience</h2>
        <ul>
            {data.experience.map(experience => (
                <li key={experience.year}>
                    <strong>{experience.year}</strong> - {experience.description}
                </li>
            ))}
        </ul>
        <h2>Education</h2>
        <ul>
            {data.education.map((education, index) => (
                <li key={index}>{education}</li>
            ))}
        </ul>
    </section>
}