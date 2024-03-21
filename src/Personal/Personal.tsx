import "./Personal.scss";
import {Personal} from "../types";

interface Props {
    data: Personal;
}

export const Personal = ({data: {photo, firstName, lastName, position}}: Props) => {
    return <aside className="cv-personal">
        <h2>Personal data</h2>
        <img className="cv-photo" src={photo} alt={`${firstName} ${lastName} profile photo`}/>
        <p>{firstName} {lastName}</p>
        <small>{position}</small>
    </aside>
}