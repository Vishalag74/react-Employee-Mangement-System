const employees = [
    {
        "id": 1,
        "firstname": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Submit report",
                "taskDescription": "Submit the monthly performance report.",
                "taskDate": "2025-06-10",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client follow-up",
                "taskDescription": "Call client about contract renewal.",
                "taskDate": "2025-06-11",
                "category": "Client",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Schedule client meeting",
                "taskDescription": "Arrange a meeting with the client regarding new terms.",
                "taskDate": "2025-06-13",
                "category": "Client Relations",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update CRM records",
                "taskDescription": "Log all lead interactions from previous week.",
                "taskDate": "2025-06-09",
                "category": "Data Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Neha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Prepare pitch deck",
                "taskDescription": "Design slides for new client pitch.",
                "taskDate": "2025-06-12",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Review code",
                "taskDescription": "Inspect the recent merge requests.",
                "taskDate": "2025-06-10",
                "category": "Code Review",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Audit feature changes",
                "taskDescription": "Check QA merge logs and improvements.",
                "taskDate": "2025-06-11",
                "category": "Quality Control",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Weekly team meeting",
                "taskDescription": "Join the regular team alignment session.",
                "taskDate": "2025-06-08",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Resolve UI glitch",
                "taskDescription": "Fix overlapping buttons on homepage.",
                "taskDate": "2025-06-07",
                "category": "Bug Fixing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Initiate server backup",
                "taskDescription": "Start full backup of all departmental machines.",
                "taskDate": "2025-06-10",
                "category": "IT Support",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Patch server modules",
                "taskDescription": "Ensure stability during latest patch update.",
                "taskDate": "2025-06-11",
                "category": "Infrastructure",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Test server logs",
                "taskDescription": "Monitor real-time server response during update.",
                "taskDate": "2025-06-12",
                "category": "Infrastructure",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Guide intern setup",
                "taskDescription": "Support intern with initial tool access.",
                "taskDate": "2025-06-09",
                "category": "Human Resources",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Update work policy",
                "taskDescription": "Revise and circulate the updated remote policy.",
                "taskDate": "2025-06-08",
                "category": "Compliance",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Plan campaign content",
                "taskDescription": "Outline social media posts for July launch.",
                "taskDate": "2025-06-12",
                "category": "Digital Strategy",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Landing page audit",
                "taskDescription": "Check and optimize SEO factors on homepage.",
                "taskDate": "2025-06-10",
                "category": "SEO",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Keyword performance review",
                "taskDescription": "Analyze top keyword rankings for June.",
                "taskDate": "2025-06-11",
                "category": "SEO",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Write monthly digest",
                "taskDescription": "Draft the June newsletter content.",
                "taskDate": "2025-06-09",
                "category": "Internal Comms",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
        ]
    },
    {
        "id": 5,
        "firstname": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Call supplier rep",
                "taskDescription": "Discuss renewal and pricing options with vendor.",
                "taskDate": "2025-06-10",
                "category": "Vendor Relations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Q3 budget planning",
                "taskDescription": "Draft proposal for Q3 department expenditures.",
                "taskDate": "2025-06-11",
                "category": "Financial Planning",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Analyze expense trends",
                "taskDescription": "Review patterns in past month’s expenditures.",
                "taskDate": "2025-06-12",
                "category": "Accounting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Supply inventory check",
                "taskDescription": "Review and update inventory in supply storage.",
                "taskDate": "2025-06-08",
                "category": "Logistics",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Reconcile expense errors",
                "taskDescription": "Identify and report mismatches in April’s expenses.",
                "taskDate": "2025-06-07",
                "category": "Audit",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];



const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
}