import {Header} from "../Header/Header";
import {Personal} from "../Personal/Personal";
import {Details} from "../Details/Details";
import "./CV.scss";
import {CVData} from "../types";

export const CV = () => {

    const cvData: CVData = {
        personal:
            {
                firstName: "Marta",
                lastName: "Brylska",
                photo: "https://placehold.co/400x400?text=MB",
                position: "developer"
            },
        details: {
            experience: [
                {year: 2020, description: "Lorem ipsum dolor sit amet"},
                {year: 2021, description: "Lorem ipsum sialala lalala lalalala lalalal"}
            ],
            education: ["Lorem ipsum", "Dolor sit amet"]
        }
    }

    return <main className="cv-main">
        <Header data={cvData.personal}/>
        <Personal data={cvData.personal}/>
        <Details data={cvData.details}/>
    </main>
}