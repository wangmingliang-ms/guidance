import type {Counselor} from "@/counselor/model";
import Data from "@/data";

export default class CounselorService {

    public static readonly counselors: Counselor[] = Data.students;

    public static async getCounselors(limit: number = 20): Promise<Counselor[]> {
        return CounselorService.counselors;
    }

    public static async getCounselor(id: string): Promise<Counselor> {
        const counselor = CounselorService.counselors.find(c => c.id === id);
        if (!counselor) {
            throw new Error(`failed to find counselor with id '${id}'`);
        }
        return counselor;
    }
}