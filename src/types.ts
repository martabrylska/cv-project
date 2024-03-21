export interface Personal {
    firstName: string;
    lastName: string;
    photo: string;
    position: string;
}

interface Experience {
    year: number;
    description: string;
}


export interface Details {
    experience: Experience[];
    education: string[];
}

export interface CVData {
    personal: Personal,
    details: Details,
}
