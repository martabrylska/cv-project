import {Header} from "../Header/Header";
import {Personal} from "../Personal/Personal";
import {Details} from "../Details/Details";
import "./CV.scss";

export const CV = () => {
    return <main className="cv-main">
        <Header/>
        <Personal/>
        <Details/>
    </main>
}