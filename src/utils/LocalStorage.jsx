const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Submit report",
                "description": "Submit the monthly performance report.",
                "date": "2025-06-10",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "complete": false,
                "failed": false
            },
            {
                "title": "Client follow-up",
                "description": "Call client about contract renewal.",
                "date": "2025-06-11",
                "category": "Client",
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false
            },
            {
                "title": "Update CRM",
                "description": "Log all new leads from last week.",
                "date": "2025-06-09",
                "category": "Data Entry",
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare presentation",
                "description": "Create slides for upcoming pitch.",
                "date": "2025-06-12",
                "category": "Design",
                "active": true,
                "newTask": true,
                "complete": false,
                "failed": false
            },
            {
                "title": "Team meeting",
                "description": "Attend bi-weekly team sync.",
                "date": "2025-06-08",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false
            },
            {
                "title": "Fix bug #401",
                "description": "Resolve UI issue in dashboard.",
                "date": "2025-06-07",
                "category": "Development",
                "active": false,
                "newTask": false,
                "complete": false,
                "failed": true
            },
            {
                "title": "Code review",
                "description": "Review PRs from QA team.",
                "date": "2025-06-10",
                "category": "Development",
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Onboard intern",
                "description": "Help new intern set up accounts.",
                "date": "2025-06-09",
                "category": "HR",
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false
            },
            {
                "title": "System backup",
                "description": "Backup all department files.",
                "date": "2025-06-10",
                "category": "IT",
                "active": true,
                "newTask": true,
                "complete": false,
                "failed": false
            },
            {
                "title": "Policy update",
                "description": "Update remote work policy document.",
                "date": "2025-06-08",
                "category": "Admin",
                "active": false,
                "newTask": false,
                "complete": false,
                "failed": true
            },
            {
                "title": "Server maintenance",
                "description": "Monitor system during patch update.",
                "date": "2025-06-11",
                "category": "IT",
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Draft newsletter",
                "description": "Write June company newsletter.",
                "date": "2025-06-09",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false
            },
            {
                "title": "Social media plan",
                "description": "Create content calendar for July.",
                "date": "2025-06-12",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "complete": false,
                "failed": false
            },
            {
                "title": "SEO audit",
                "description": "Run audit on landing page.",
                "date": "2025-06-10",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Inventory check",
                "description": "Audit supply room and record missing items.",
                "date": "2025-06-08",
                "category": "Operations",
                "active": false,
                "newTask": false,
                "complete": true,
                "failed": false
            },
            {
                "title": "Vendor call",
                "description": "Discuss contract terms with vendor.",
                "date": "2025-06-10",
                "category": "Procurement",
                "active": true,
                "newTask": true,
                "complete": false,
                "failed": false
            },
            {
                "title": "Budget forecast",
                "description": "Prepare Q3 budget proposal.",
                "date": "2025-06-11",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "complete": false,
                "failed": false
            },
            {
                "title": "Expense review",
                "description": "Verify last month’s expenses.",
                "date": "2025-06-07",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "complete": false,
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