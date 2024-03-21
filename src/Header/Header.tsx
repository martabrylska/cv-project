import "./Header.scss";
import {Personal} from "../types";

interface Props {
    data: Personal;
}

export const Header = ({data}: Props) => {
    return <header className="cv-header">
        <h1>CV {data.firstName} {data.lastName}</h1>
    </header>
}