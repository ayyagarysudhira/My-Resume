// Personal Information
export const personalInfo = {
  name: 'Sudhira Ayyagary',
  title: 'Full stack lead developer',
  tagline:
    'Bridging cultures, technologies, and teams to deliver impactful engineering solutions.',
  description:
    'Originally from India, I survived California’s kombucha culture, avocado‑toast economy, and the startup scene where every third person was pitching a “revolutionary” idea still in beta. During my time there, I worked with people from a wide mix of cultures and backgrounds—collaborating both remotely and in person—which strengthened my communication skills, adaptability, and appreciation for different perspectives.California is also where I first discovered my passion for mobile development, fueled by innovation, curiosity, and the occasional late-night debugging session powered by overpriced cold brew.I eventually settled in Southlake, Texas—where the SUVs are massive, the barbecue aisles endless, and the storms dramatic. My journey across continents, coasts, and cultures has made me adaptable, grounded, and always prepared for unexpected weather—both literal and professional.',
  description2:
    'Outside of work, you’ll usually find me behind a camera trying to convince the Texas sky to cooperate, scribbling half‑finished poems in stray notebooks, or diving into a new book while pretending my to‑do list doesn’t exist. I’m also big into podcasts and audiobooks—perfect companions for long walks, commutes, or days when reading with my eyes just feels like too much responsibility.',
  email: 'your@email.com',
  linkedin: 'linkedin.com/in/yourname',
  github: 'github.com/yourname'
}

export const skillsByCategory = {
  // --- Backend Development ---
  backend: [
    {
      name: 'Java',
      description:
        'Skilled in building reliable, object‑oriented backend services using Java across enterprise applications.'
    },
    {
      name: 'Spring Boot',
      description:
        'Worked extensively with Spring Boot to develop microservices, REST APIs, dependency-injection based components, and production-grade backend systems.'
    },
    {
      name: 'REST API Development',
      description:
        'Designed and implemented RESTful services supporting secure, scalable, high‑performance data exchange.'
    }
  ],

  // --- Mobile Development ---
  mobile: [
    {
      name: 'React Native',
      description:
        'Developed cross‑platform mobile applications using React Native, working with components, hooks, navigation, and native integrations.'
    },
    {
      name: 'Appcelerator Titanium',
      description:
        'Built and maintained mobile apps using Appcelerator Titanium, leveraging its cross‑platform capabilities, native UI components, and Alloy MVC framework.'
    },

    {
      name: 'Mobile Build & Deployment',
      description:
        'Hands-on experience with Android/iOS build processes, debugging, packaging, and publishing workflows. Worked closely with the MDM team and utilized Microsoft Intune App Store for deploying enterprise-level mobile applications. Successfully published apps to the Google Play Store and Apple App Store, managing certificates, provisioning profiles, release builds, and store compliance requirements.'
    }
  ],

  // --- Testing ---
  testing: [
    {
      name: 'Jest',
      description:
        'Developed unit and integration tests using Jest for React and React Native applications. Focused on testing components, hooks, business logic, and asynchronous workflows to ensure application reliability and reduce regressions.'
    },
    {
      name: 'Enzyme',
      description:
        'Used Enzyme for React component testing, enabling shallow, mount, and full DOM rendering to validate UI behavior, state changes, and event handling. Enhanced overall test coverage and supported efficient UI‑level validation in React applications.'
    },
    {
      name: 'Mockito',
      description:
        'Utilized Mockito to create mocks, stubs, and spies for testing Spring Boot applications. Wrote unit and integration tests to isolate business logic, mock external dependencies, validate service interactions, and improve test reliability. Combined Mockito with JUnit to build robust, maintainable test suites for backend microservices.'
    }
  ],

  // --- Frontend Development ---
  frontend: [
    {
      name: 'JavaScript',
      description:
        'Proficient in modern ES6+ JavaScript, asynchronous patterns, and writing clean, maintainable code across mobile and web.'
    },
    {
      name: 'React',
      description:
        'Experience building modular, component-driven UIs with React, including state management and reusable UI patterns.'
    },
    {
      name: 'HTML/CSS',
      description:
        'Strong understanding of semantic HTML, responsive layout techniques, and styling modern user interfaces.'
    }
  ],

  // --- DevOps & Cloud ---
  devopsAndCloud: [
    {
      name: 'Kubernetes',
      description:
        'Worked with container orchestration for deploying and scaling backend services in cloud environments.'
    },
    {
      name: 'AWS',
      description:
        'Experience integrating backend applications with AWS services (EC2, S3, IAM, CloudWatch) for reliability and monitoring.'
    },
    {
      name: 'Jenkins',
      description:
        'Built and maintained CI/CD pipelines using Jenkins for automated builds, testing, and deployment workflows across mobile and backend applications.'
    }
  ],

  // --- Security & Compliance ---
  securityAndCompliance: [
    {
      name: 'Agent Smith',
      description:
        'Worked with Agent Smith for automated security scanning, vulnerability detection, and compliance enforcement in CI/CD pipelines.'
    },
    {
      name: 'Compliance Buddy',
      description:
        'Utilized Compliance Buddy to ensure adherence to regulatory requirements, security policies, and organizational standards throughout the development lifecycle.'
    },
    {
      name: 'SonarQube',
      description:
        'Implemented SonarQube for automated static code analysis, code smells detection, vulnerability scanning, and enforcing quality gates within CI/CD pipelines. Used SonarQube dashboards to monitor maintainability, reliability, and code coverage across backend and frontend applications.'
    },

    {
      name: 'HashiCorp Vault',
      description:
        'Implemented HashiCorp Vault for secure secrets management, encryption, and token-based authentication across backend services. Integrated Vault with Spring Boot applications to securely retrieve database credentials, API keys, and service tokens. Worked with infrastructure and security teams to configure Vault policies, dynamic secrets, environment-based access controls, and automated secret rotation to strengthen application security.'
    }
  ],

  // --- Observability ---
  observability: [
    {
      name: 'Datadog',
      description:
        'Implemented Datadog for full‑stack observability, including APM, distributed traces, monitors, logs, and real-time metrics. Integrated Datadog into React Native and Spring Boot applications to capture performance data, error tracking, and user behavior insights. Developed custom dashboards and alerts, and leveraged Datadog APIs to programmatically fetch monitor statuses and embed health checks within applications.'
    }
  ],

  // --- Version Control & Collaboration ---
  versionControlAndCollaboration: [
    {
      name: 'GitHub',
      description:
        'Skilled in managing repositories, branches, PRs, and CI workflows using GitHub for collaborative development.'
    },
    {
      name: 'Bitbucket',
      description:
        'Hands‑on experience using Bitbucket for code reviews, branch strategies, pipelines, and agile development workflows.'
    },
    {
      name: 'Cross-functional Collaboration',
      description:
        'Worked closely with designers, product managers, QA, and backend teams to deliver end‑to‑end mobile and web experiences.'
    }
  ],

  // -- Databases ---
  databases: [
    {
      name: 'SQL Server / Databases',
      description:
        'Experienced with relational database design, query optimization, and integrating persistence layers in backend services. Integrated SQL Server with Spring Boot applications using JDBC, JPA/Hibernate, and connection pooling configurations. Collaborated closely with database teams and Active Directory teams to provision new SQL Server instances, set up access controls, manage service accounts, and ensure secure connectivity for application deployments.'
    }
  ],

  // --- IDE's ---
  ides: [
    {
      name: 'IntelliJ IDEA',
      description:
        'Experienced using IntelliJ IDEA for Java and Spring Boot development, leveraging advanced debugging tools, code inspections, refactoring utilities, and seamless integration with Git, Maven, and Gradle.'
    },
    {
      name: 'Eclipse',
      description:
        'Worked with Eclipse for Java development, plugin-based workflows, and legacy project maintenance, utilizing its debugging, profiling, and workspace management features.'
    },
    {
      name: 'Xcode',
      description:
        'Used Xcode for building, debugging, and profiling iOS applications, managing provisioning profiles, certificates, and performing device and simulator testing.'
    },
    {
      name: 'Visual Studio Code (VS Code)',
      description:
        'Skilled in using VS Code for JavaScript, React, and React Native development with extensions for debugging, linting, formatting, Git workflows, and productivity enhancements.'
    },
    {
      name: 'Atom',
      description:
        'Used Atom for lightweight editing and web development, leveraging community packages for productivity, linting, formatting, and Git integration.'
    },
    {
      name: 'Android Studio',
      description:
        'Experienced using Android Studio for Android development, including layout design, Gradle build configuration, performance profiling, emulator testing, and debugging native and Java/Kotlin components.'
    },

    {
      name: 'Swagger / OpenAPI',
      description:
        'Implemented Swagger (OpenAPI) documentation for RESTful services in Spring Boot applications, enabling clear API definitions, interactive testing, and seamless integration for frontend and third‑party consumers. Used annotations to automatically generate API docs, maintain versioning, and support contract-first development workflows.'
    },

    {
      name: 'Postman / Bruno',
      description:
        'Experience using Postman and Bruno for designing, testing, and validating REST APIs. Built reusable API collections, managed environment variables, and tested authenticated flows such as OAuth2, JWT, and API key–based access. Utilized scripting features for automated test cases, shared collections with teams for consistent integration testing, and leveraged Bruno for fast, lightweight, and developer-friendly API testing workflows.'
    }
  ],

  // --- Agile & Engineering Practices ---
  agileAndEngineeringPractices: [
    {
      name: 'Agile / Scrum / Extreme Programming (XP)',
      description:
        'Participated in agile teams following Scrum ceremonies—including sprint planning, daily standups, backlog refinement, and retrospectives—while also applying Extreme Programming (XP) engineering practices. Experience includes pair programming, test-driven development (TDD), continuous integration, continuous refactoring, and close collaboration with product owners to ensure rapid, high‑quality delivery. Emphasized incremental development, collective code ownership, fast feedback loops, and sustainable engineering practices to improve code quality, reliability, and team productivity.'
    },
    {
      name: 'Agile Facilitation',
      description:
        'Actively facilitated and participated in Agile ceremonies to drive team alignment, unblock work, and support continuous improvement.'
    },
    {
      name: 'Retrospectives',
      description:
        'Regularly contributed to retrospectives, identifying improvements, capturing insights, and helping implement action items.'
    },
    {
      name: 'Team Health Checks',
      description:
        'Worked with the team during health checks to evaluate collaboration, morale, and delivery patterns and identify areas for growth.'
    }
  ],

  // --- Product & Discovery Practices ---
  productAndDiscoveryPractices: [
    {
      name: 'Discovery & Framing',
      description:
        'Worked hands-on in D&F sessions to define the problem space, validate assumptions, understand user needs, and shape initial product direction.'
    },
    {
      name: 'Inception',
      description:
        'Collaborated with cross-functional teams during Inception sessions to establish scope, identify risks, and co-create the initial backlog.'
    },
    {
      name: 'Backlog Management',
      description:
        'Participated in backlog refinement, story writing, and prioritization to maintain clarity and readiness for upcoming IPMs.'
    },
    {
      name: 'User Story Mapping',
      description:
        'Contributed to user story mapping workshops to break down end-to-end experiences into deliverable slices and MVP releases.'
    },
    {
      name: 'Lean Experimentation',
      description:
        'Participated in forming hypotheses, defining experiments, and reviewing learnings to validate product ideas before investing heavily.'
    },
    {
      name: 'Design Thinking',
      description:
        'Worked through empathy, ideation, and prototyping exercises to help the team solve user-centered problems and iterate quickly.'
    },
    {
      name: 'Usability Testing',
      description:
        'Participated in planning and running usability testing sessions to gather feedback and identify improvements early in the design cycle.'
    },
    {
      name: 'Prioritization (WSJF, 2x2)',
      description:
        'Worked with product teams to prioritize work using WSJF and 2x2 frameworks, focusing on delivering the highest impact first.'
    },
    {
      name: 'Value Stream Mapping',
      description:
        'Collaborated with the team to analyze workflow inefficiencies through value stream mapping and identify optimization opportunities.'
    },
    {
      name: 'Product Reviews',
      description:
        'Participated in product review sessions to present progress, share learnings, and align with stakeholders on next steps.'
    },
    {
      name: 'Opportunity Solution Tree',
      description:
        'Participated in constructing Opportunity Solution Trees to connect desired outcomes with opportunities, ideas, and experiments.'
    },
    {
      name: 'Outcome-based Roadmaps',
      description:
        'Collaborated on outcome-based roadmaps that centered around customer problems and measurable impacts rather than feature lists.'
    },
    {
      name: 'MVP Definition',
      description:
        'Helped teams define MVP slices that reduce risk, test assumptions, and deliver early value to customers.'
    },
    {
      name: 'Customer Feedback Loops',
      description:
        'Actively engaged in collecting, reviewing, and integrating customer feedback to refine product direction and backlog priorities.'
    }
  ]
}

// Experience
export const experience = [
  {
    id: 1,
    title: 'Product Engineer',
    company: 'Allstate',
    period: '2022 – Present',
    responsibilities: [
      'Built observability dashboards.',
      'Improved monitoring reliability.',
      'Led internal tooling.'
    ]
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'Previous Company',
    period: '2019 – 2022',
    responsibilities: [
      'Developed UIs with React.',
      'Implemented microservices.',
      'Improved performance.'
    ]
  }
]

// Projects
export const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Observability tool using React & Grafana APIs.'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Mobile-first architecture exploration.'
  }
]
