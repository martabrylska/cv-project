import "./Header.scss";

interface CVData {
    firstName: string,
    lastName: string,
}

const cvData: CVData = {
    firstName: "Marta",
    lastName: "Brylska",
}

export const Header = () => {
    return <header className="cv-header">
        <h1>CV {cvData.firstName} {cvData.lastName}</h1>
    </header>
}