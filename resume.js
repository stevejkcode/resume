'use strict';

const theme = require('jsonresume-theme-spartan');

const resume = {
    "basics": {
        "name": "Stephen Kent",
        "label": "Backend Developer",
        "image": "",
        "email": "stevejameskent1@gmail.com",
        "phone": "(571) 295-6530",
        // "url": "https://johndoe.com",
        "summary": "I'm a backend web developer with several years of experience developing, maintaining, and managing cloud native web applications. My skills center around gathering requirements, planning and tracking the work output of myself as well as my teams, and architecting and implementing solutions to meet the needs of critical business objectives.",
        "location": {
            "address": "2700 Dorr Ave",
            "postalCode": "22031",
            "city": "Fairfax",
            "countryCode": "US",
            "state": "VA"
        },
        "profiles": [
            // {
            //     "network": "Twitter",
            //     "username": "john",
            //     "url": "https://twitter.com/john"
            // }
        ]
    },
    "work": [
        {
            "name": "Capital One",
            "position": "Mid - Sr Backend Engineer",
            "url": "https://capitalone.com",
            "startDate": "2016-03",
            "endDate": "2022-03",
            "summary": "I worked for ~6 years as a mid to senior backend engineer for Capital One on multiple projects. My largest project involved a platform to make performing and managing automated security scans easier for developers which was used across the company. Gradually the focus shifted to smaller microservices, and I helped design and implement a more modern ingestion setup for WhiteSource findings using Lambda functions. I also worked on a larger finding ingestion and attribution platform composed of microservices, built using Lambda functions with DynamoDB as the database layer.",
            "highlights": [
                "- Instrumental in the design of a software project that helped make it easier for developers across the company to write secure code",
                "- Worked to design and deploy cloud native software on AWS",
                "- Drove database and schema designs in Mongo & Dynamo (some minor experience with PostgreSQL as well)",
                "- Reviewed and helped mentor the work of more junior team members through PRs and informal pair programming sessions",
                "- Co-author of a patent for the de-duplication of static source code security findings"
            ]
        }
    ],
    "volunteer": [
        // {
        //     "organization": "Organization",
        //     "position": "Volunteer",
        //     "url": "https://organization.com/",
        //     "startDate": "2012-01-01",
        //     "endDate": "2013-01-01",
        //     "summary": "Description…",
        //     "highlights": [
        //         "Awarded 'Volunteer of the Month'"
        //     ]
        // }
    ],
    "education": [
        {
            "institution": "University of Maryland",
            "url": "https://umd.edu/",
            "area": "Computer Engineering",
            "studyType": "Bachelor"
        }
    ],
    "certificates": [
        {
            "name": "AWS Solutions Architect Associate",
            "date": "2022-03",
            "issuer": "Amazon",
            "url": "https://certificate.com"
        }
    ],
    "publications": [
        // {
        //     "name": "Publication",
        //     "publisher": "Company",
        //     "releaseDate": "2014-10-01",
        //     "url": "https://publication.com",
        //     "summary": "Description…"
        // }
    ],
    "skills": [
        {
            "name": "Backend Development",
            "level": "Senior",
            "keywords": [
                "JavaScript",
                "Python"
            ]
        },
        {
            "name": "Database Design",
            "level": "Senior",
            "keywords": [
                "MongoDB",
                "Dynamo",
                "PostgreSQL"
            ]
        },
        {
            "name": "Cloud",
            "level": "Mid",
            "keywords": [
                "AWS",
                "Lambda",
                "EC2",
                "S3"
            ]
        }
    ],
    "languages": [
        // {
        //     "language": "English",
        //     "fluency": "Native speaker"
        // }
    ],
    "interests": [
        // {
        //     "name": "Wildlife",
        //     "keywords": [
        //         "Ferrets",
        //         "Unicorns"
        //     ]
        // }
    ],
    "references": [
        // {
        //     "name": "Jane Doe",
        //     "reference": "Reference…"
        // }
    ],
    "projects": [
        // {
        //     "name": "Project",
        //     "description": "Description…",
        //     "highlights": [
        //         "Won award at AIHacks 2016"
        //     ],
        //     "keywords": [
        //         "HTML"
        //     ],
        //     "startDate": "2019-01-01",
        //     "endDate": "2021-01-01",
        //     "url": "https://project.com/",
        //     "roles": [
        //         "Team Lead"
        //     ],
        //     "entity": "Entity",
        //     "type": "application"
        // }
    ],
    "meta": {
        "theme": "jsonresume-theme-stackoverflow"
    }
};

// process.stdout.write(theme.render(resume));

module.exports = resume;