import "./Personal.scss";

interface CVData {
    firstName: string;
    lastName: string;
    photo: string;
    position: string;
}

const cvData: CVData = {
    firstName: "Marta",
    lastName: "Brylska",
    photo: "https://placehold.co/400x400?text=MB",
    position: "developer"

}

export const Personal = () => {
    return <aside className="cv-personal">
        <h2>Personal data</h2>
        <img className="cv-photo" src={cvData.photo} alt={`${cvData.firstName} ${cvData.lastName} profile photo`}/>
        <p>{cvData.firstName} {cvData.lastName}</p>
        <small>{cvData.position}</small>
    </aside>
}