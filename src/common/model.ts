export interface User {
    id: string;
    name: string;
    avatar: string;
}

export interface Tag {
    label: string;
}

export interface Unit {
    name: string;
    tags?: Tag[];
    city: {
        name: string;
        province: Province;
    };
}

export interface School extends Unit {

}

export interface Company extends Unit {

}

export interface Province {
    name: string;
    tags?: Tag[];
}

export interface Major {
    name: string;
    tags?: Tag[];
}

export interface Department {
    name: string;
    tags?: Tag[];
}

export interface Topic {
    name: string;
    tags?: Tag[];
}

export interface GaoKao {
    province: Province;
    from: School;
    year: number;
    score: number;
    to: {
        school: School;
        major: Major;
    };
}

export type Achievement = Qualification | Education | Job;

export interface Qualification {
    startYear: string;
    name: string;
    tags?: Tag[];
}

export interface Education {
    startYear: string;
    qualification: string;
    school: School;
    department?: Department;
    major?: Major;
    period: Period;
}

export interface Job {
    startYear: string;
    company: Company;
    position: string;
    period: Period;
}

export interface Period {
    start: string;
    end: string;
}
