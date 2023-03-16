import type {StudentCounselor} from "@/counselor/model";
import departments from '@/data/departments.json';
import highschools from '@/data/highschools.json';
import majors from '@/data/majors.json';
import provinces from '@/data/provinces.json';
import topics from '@/data/topics.json';
import universities from '@/data/universities.json';

export default class Data {
    public static readonly students: StudentCounselor[] = [
        {
            "id": "123456",
            "name": "王磊",
            "avatar": "https://example.com/alice.jpg",
            "educations": [
                {
                    "qualification": "理学学士",
                    "school": universities[0],
                    "department": departments[0],
                    "major": majors[0],
                    "period": {
                        "start": "2019-09-01",
                        "end": "2023-06-30"
                    },
                    "startYear": "2019"
                },
                {
                    "qualification": "高中生",
                    "school": highschools[0],
                    "period": {
                        "start": "2016-09-01",
                        "end": "2019-06-30"
                    },
                    "startYear": "2016"
                }
            ],
            "position": "大三",
            "unit": universities[0],
            "department": majors[0],
            "gaokao": {
                "province": provinces[0],
                "from": highschools[0],
                "to": {
                    school: universities[0],
                    major: majors[0]
                },
                "year": 2019,
                "score": 700
            },
            "topics": [topics[1], topics[3], topics[5], topics[0], topics[2], topics[4]],
            "goodRating": 96
        },
        {
            "id": "654321",
            "name": "王磊",
            "avatar": "https://example.com/bob.jpg",
            "educations": [
                {
                    "qualification": "文学硕士",
                    "school": universities[1],
                    "department": departments[1],
                    "major": majors[1],
                    "period": {
                        "start": "2018-09-01",
                        "end": "2022-06-30"
                    },
                    "startYear": "2018"
                },
                {
                    "qualification": "高中生",
                    "school": highschools[1],
                    "period": {
                        "start": "2015-09-01",
                        "end": "2018-06-30"
                    },
                    "startYear": "2015"
                },
            ],
            "position": "研一",
            "unit": universities[1],
            "department": majors[1],
            "gaokao": {
                "province": provinces[1],
                "from": highschools[1],
                "to": {
                    "school": universities[1],
                    "major": majors[1]
                },
                "year": 2018,
                "score": 680
            },
            "topics": [topics[0], topics[2], topics[4], topics[1], topics[3], topics[5]],
            "goodRating": 98
        }
    ];
}