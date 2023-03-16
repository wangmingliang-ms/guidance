import type {Company, Department, Education, GaoKao, Job, Major, Qualification, School, Tag, Topic, User} from "@/common/model";

export interface Counselor extends User {
    unit: School | Company;
    department: Major | Department;
    position: string;
    qualifications?: Qualification[];
    jobs?: Job[];
    educations: Education[];
    gaokao?: GaoKao;
    topics: Topic[];
    goodRating: number;
}

export interface StudentCounselor extends Counselor {
    unit: School;
    department: Major;
}

export interface JobCounselor extends Counselor {
    unit: Company;
    department: Department;
    jobs?: Job[];
}
