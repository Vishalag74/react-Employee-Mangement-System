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
                "taskTitle": "UptaskDate CRM",
                "taskDescription": "Log all new leads from last week.",
                "taskDate": "2025-06-09",
                "category": "Data Entry",
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
                "taskTitle": "Prepare presentation",
                "taskDescription": "Create slides for upcoming pitch.",
                "taskDate": "2025-06-12",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team meeting",
                "taskDescription": "Attend bi-weekly team sync.",
                "taskDate": "2025-06-08",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Fix bug #401",
                "taskDescription": "Resolve UI issue in dashboard.",
                "taskDate": "2025-06-07",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Code review",
                "taskDescription": "Review PRs from QA team.",
                "taskDate": "2025-06-10",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
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
                "taskTitle": "Onboard intern",
                "taskDescription": "Help new intern set up accounts.",
                "taskDate": "2025-06-09",
                "category": "HR",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "System backup",
                "taskDescription": "Backup all department files.",
                "taskDate": "2025-06-10",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Policy uptaskDate",
                "taskDescription": "UptaskDate remote work policy document.",
                "taskDate": "2025-06-08",
                "category": "Admin",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Server maintenance",
                "taskDescription": "Monitor system during patch uptaskDate.",
                "taskDate": "2025-06-11",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
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
                "taskTitle": "Draft newsletter",
                "taskDescription": "Write June company newsletter.",
                "taskDate": "2025-06-09",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Social media plan",
                "taskDescription": "Create content calendar for July.",
                "taskDate": "2025-06-12",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO audit",
                "taskDescription": "Run audit on landing page.",
                "taskDate": "2025-06-10",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
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
                "taskTitle": "Inventory check",
                "taskDescription": "Audit supply room and record missing items.",
                "taskDate": "2025-06-08",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Vendor call",
                "taskDescription": "Discuss contract terms with vendor.",
                "taskDate": "2025-06-10",
                "category": "Procurement",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Budget forecast",
                "taskDescription": "Prepare Q3 budget proposal.",
                "taskDate": "2025-06-11",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Expense review",
                "taskDescription": "Verify last month’s expenses.",
                "taskDate": "2025-06-07",
                "category": "Finance",
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