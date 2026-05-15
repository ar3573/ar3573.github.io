(function () {
  const workItems = [
    {
      id: "assignment-01",
      type: "Assignment",
      title: "Assignment 01",
      subtitle: "Submission package",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 1,
      summary: "Final report, source files, figures, and submission notes slot.",
      stack: ["Quarto", "GitHub", "Reproducible report"],
      artifacts: [
        { label: "Report", href: "" },
        { label: "Repository", href: "" },
        { label: "Figures", href: "" }
      ],
      metrics: ["Report", "Code", "Figures"]
    },
    {
      id: "assignment-02",
      type: "Assignment",
      title: "Assignment 02",
      subtitle: "Data preparation",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 2,
      summary: "Clean data, validation checks, source code, and reproducible output slot.",
      stack: ["Data cleaning", "Validation", "Notebook"],
      artifacts: [
        { label: "Notebook", href: "" },
        { label: "Data notes", href: "" },
        { label: "Source", href: "" }
      ],
      metrics: ["Checks", "Notebook", "Data"]
    },
    {
      id: "assignment-03",
      type: "Assignment",
      title: "Assignment 03",
      subtitle: "Exploratory analysis",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 3,
      summary: "Exploration, visuals, interpretation table, and final writeup slot.",
      stack: ["EDA", "Visualization", "Statistics"],
      artifacts: [
        { label: "Report", href: "" },
        { label: "Charts", href: "" },
        { label: "Code", href: "" }
      ],
      metrics: ["EDA", "Charts", "Writeup"]
    },
    {
      id: "assignment-04",
      type: "Assignment",
      title: "Assignment 04",
      subtitle: "Model or methods checkpoint",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 4,
      summary: "Method, assumptions, diagnostics, results, and reproducible analysis slot.",
      stack: ["Modeling", "Diagnostics", "Methods"],
      artifacts: [
        { label: "Methods", href: "" },
        { label: "Results", href: "" },
        { label: "Code", href: "" }
      ],
      metrics: ["Method", "Result", "Diagnostic"]
    },
    {
      id: "assignment-05",
      type: "Assignment",
      title: "Assignment 05",
      subtitle: "Visualization deliverable",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 5,
      summary: "Chart system, design decisions, exported figures, and source slot.",
      stack: ["Visualization", "Design system", "Export"],
      artifacts: [
        { label: "Gallery", href: "" },
        { label: "Source", href: "" },
        { label: "Brief", href: "" }
      ],
      metrics: ["Visuals", "Brief", "Exports"]
    },
    {
      id: "assignment-06",
      type: "Assignment",
      title: "Assignment 06",
      subtitle: "Interactive or final submission",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 6,
      summary: "Interactive output, final files, deployment link, and review notes slot.",
      stack: ["Interactive", "Deployment", "Documentation"],
      artifacts: [
        { label: "Demo", href: "" },
        { label: "Repo", href: "" },
        { label: "Notes", href: "" }
      ],
      metrics: ["Demo", "Deploy", "Docs"]
    },
    {
      id: "project-01",
      type: "Project",
      title: "Project 01",
      subtitle: "Applied build",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 7,
      summary: "Problem frame, implementation, results, deployment, and source slot.",
      stack: ["Pipeline", "Analysis", "Quarto"],
      artifacts: [
        { label: "Case page", href: "" },
        { label: "Repository", href: "" },
        { label: "Demo", href: "" }
      ],
      metrics: ["Build", "Report", "Repo"]
    },
    {
      id: "project-02",
      type: "Project",
      title: "Project 02",
      subtitle: "Dashboard or tool",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 8,
      summary: "Interface, workflow, data model, screenshots, and deployment slot.",
      stack: ["Dashboard", "UX", "Data model"],
      artifacts: [
        { label: "Live demo", href: "" },
        { label: "Screens", href: "" },
        { label: "Source", href: "" }
      ],
      metrics: ["Demo", "Screens", "UX"]
    },
    {
      id: "final-project",
      type: "Project",
      title: "Final Project",
      subtitle: "End-to-end deliverable",
      period: "Spring 2026",
      status: "Ready for artifact links",
      priority: 9,
      summary: "Final report, technical appendix, code, deployment, and artifacts slot.",
      stack: ["Research", "Engineering", "Presentation"],
      artifacts: [
        { label: "Final report", href: "" },
        { label: "Repository", href: "" },
        { label: "Presentation", href: "" }
      ],
      metrics: ["Final", "Code", "Presentation"]
    }
  ];

  window.WORK_ITEMS = workItems;
})();
