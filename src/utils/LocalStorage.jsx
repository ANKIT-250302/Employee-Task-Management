const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Develop Authentication Module",
        "description": "Implement user authentication with JWT for secure login.",
        "date": "2024-10-19",
        "category": "Backend Development"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Implement OAuth2 Login",
        "description": "Add OAuth2-based login with Google and Facebook.",
        "date": "2024-10-17",
        "category": "Backend Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Write API Documentation",
        "description": "Create detailed API documentation using Swagger.",
        "date": "2024-10-21",
        "category": "Documentation"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Setup CI/CD Pipeline",
        "description": "Configure CI/CD pipeline using Jenkins and Docker.",
        "date": "2024-10-14",
        "category": "DevOps"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Database Migration",
        "description": "Migrate the database from PostgreSQL to MySQL.",
        "date": "2024-10-22",
        "category": "Database Management"
      }
    ],
    "task_count": {
      "active": 3,
      "new_task": 3,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Isha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "title": "Create Responsive Design",
        "description": "Ensure the website is responsive across all devices using CSS Grid and Flexbox.",
        "date": "2024-10-18",
        "category": "Frontend Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Design Login Page",
        "description": "Redesign the login page with updated UI components.",
        "date": "2024-10-19",
        "category": "Frontend Development"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "title": "Enhance Dashboard UI",
        "description": "Improve the dashboard with better UX design.",
        "date": "2024-10-21",
        "category": "Frontend Development"
      }
    ],
    "task_count": {
      "active": 3,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstname": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Database Schema Optimization",
        "description": "Optimize the existing MySQL schema to improve query performance.",
        "date": "2024-10-20",
        "category": "Database Management"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Implement Backup Strategy",
        "description": "Set up automated backups for the database.",
        "date": "2024-10-18",
        "category": "Database Management"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "title": "Database Indexing",
        "description": "Create and optimize indexes for high-traffic tables.",
        "date": "2024-10-19",
        "category": "Database Management"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Refactor SQL Queries",
        "description": "Refactor and optimize complex SQL queries.",
        "date": "2024-10-22",
        "category": "Database Management"
      }
    ],
    "task_count": {
      "active": 3,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstname": "Rohit",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "API Integration",
        "description": "Integrate third-party payment API for the checkout process.",
        "date": "2024-10-17",
        "category": "API Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Create Microservice Architecture",
        "description": "Refactor the existing monolithic app into microservices.",
        "date": "2024-10-20",
        "category": "Backend Development"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Implement API Rate Limiting",
        "description": "Implement rate limiting on public APIs to prevent abuse.",
        "date": "2024-10-21",
        "category": "API Development"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "title": "Create API Gateway",
        "description": "Set up an API gateway using AWS API Gateway.",
        "date": "2024-10-19",
        "category": "API Development"
      }
    ],
    "task_count": {
      "active": 3,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstname": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "Unit Testing for User Module",
        "description": "Write unit tests for the user registration and login functionalities using Jest.",
        "date": "2024-10-21",
        "category": "Testing"
      },
      {
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false,
        "title": "End-to-End Testing",
        "description": "Implement end-to-end tests using Cypress.",
        "date": "2024-10-22",
        "category": "Testing"
      },
      {
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "title": "Performance Testing",
        "description": "Conduct performance testing to check API response times.",
        "date": "2024-10-20",
        "category": "Testing"
      },
      {
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "title": "Test Payment Gateway",
        "description": "Conduct manual testing for payment gateway integration.",
        "date": "2024-10-18",
        "category": "Testing"
      }
    ],
    "task_count": {
      "active": 3,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    }
  }
];


const admins = [
  {
    "id": 1,
    "firstname": "Ankit",
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admins',JSON.stringify(admins))
  }
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admins=JSON.parse(localStorage.getItem('admins'))
  return{employees,admins}
}
// localStorage.clear()
setLocalStorage()