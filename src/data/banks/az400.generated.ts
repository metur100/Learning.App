import type { Question } from "../../types";

export const az400Questions: Question[] = [
  {
    id: 1,
    number: 1,
    topic: "Topic 1",
    prompt: "You are configuring project metrics for dashboards in Azure DevOps.\nYou need to configure a chart widget that measures the elapsed time to complete work items once they become active.\nWhich of the following is the widget you should use?",
    keySource: "source",
    explanation: "Source answer: C. Cycle time",
    type: "single",
    options: [
      {
        id: "A",
        text: "Cumulative Flow Diagram"
      },
      {
        id: "B",
        text: "Burnup"
      },
      {
        id: "C",
        text: "Cycle time"
      },
      {
        id: "D",
        text: "Burndown"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 2,
    number: 2,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nThe Burnup widget measures the elapsed time from creation of work items to their completion.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: B. Lead time",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "Lead time"
      },
      {
        id: "C",
        text: "Test results trend"
      },
      {
        id: "D",
        text: "Burndown"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 3,
    number: 3,
    topic: "Topic 1",
    prompt: "You are making use of Azure DevOps manage build pipelines, and also deploy pipelines.\nThe development team is quite large, and is regularly added to.\nYou have been informed that the management of users and licenses must be automated when it can be.\nWhich of the following is a task that can't be automated?",
    keySource: "source",
    explanation: "Source answer: D. License procurement",
    type: "single",
    options: [
      {
        id: "A",
        text: "Group membership changes"
      },
      {
        id: "B",
        text: "License assignment"
      },
      {
        id: "C",
        text: "Assigning entitlements"
      },
      {
        id: "D",
        text: "License procurement "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 4,
    number: 4,
    topic: "Topic 1",
    prompt: "You have been tasked with strengthening the security of your team's development process.\nYou need to suggest a security tool type for the Continuous Integration (CI) phase of the development process.\nWhich of the following is the option you would suggest?",
    keySource: "source",
    explanation: "Source answer: B. Static code analysis",
    type: "single",
    options: [
      {
        id: "A",
        text: "Penetration testing"
      },
      {
        id: "B",
        text: "Static code analysis"
      },
      {
        id: "C",
        text: "Threat modeling"
      },
      {
        id: "D",
        text: "Dynamic code analysis"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 5,
    number: 5,
    topic: "Topic 1",
    prompt: "Your company is currently making use of Team Foundation Server 2013 (TFS 2013), but intend to migrate to Azure DevOps.\nYou have been tasked with supplying a migration approach that allows for the preservation of Team Foundation Version Control changesets dates,\nas well as the changes dates of work items revisions. The approach should also allow for the migration of all TFS artifacts, while keeping\nmigration effort to a minimum.\nYou have suggested upgrading TFS to the most recent RTW release.\nWhich of the following should also be suggested?",
    keySource: "source",
    explanation: "Source answer: B. Using the TFS Database Import Service to perform the upgrade.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Installing the TFS kava SDK"
      },
      {
        id: "B",
        text: "Using the TFS Database Import Service to perform the upgrade."
      },
      {
        id: "C",
        text: "Upgrading PowerShell Core to the latest version."
      },
      {
        id: "D",
        text: "Using the TFS Integration Platform to perform the upgrade."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 6,
    number: 6,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou have an on-premises Bitbucket Server with a firewall configured to block inbound Internet trafic. The server is used for Git-based source\ncontrol.\nYou intend to manage the build and release processes using Azure DevOps. This plan requires you to integrate Azure DevOps and Bitbucket.\nWhich of the following will allow for this integration? Answer by dragging the correct options from the list to the answer area.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: A self-hosted agent, An external git service connection",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "agent"
      },
      {
        id: "O2",
        text: "A self-hosted agent"
      },
      {
        id: "O3",
        text: "An external git service connection"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 7,
    number: 7,
    topic: "Topic 1",
    prompt: "You are currently developing a project for a client that will be managing work items via Azure DevOps.\nYou want to make sure that the work item process you use for the client allows for requirements, change requests, risks, and reviews to be\ntracked.\nWhich of the following is the option you would choose?",
    keySource: "source",
    explanation: "Source answer: D. CMMI",
    type: "single",
    options: [
      {
        id: "A",
        text: "Basic"
      },
      {
        id: "B",
        text: "Agile"
      },
      {
        id: "C",
        text: "Scrum"
      },
      {
        id: "D",
        text: "CMMI"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 8,
    number: 8,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYou run the Register-AzureRmAutomationDscNode command in your company's environment.\nYou need to make sure that your company's test servers remain correctly configured, regardless of configuration drift.\nSolution: You set the -ConfigurationMode parameter to ApplyOnly.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B: No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 9,
    number: 9,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYou run the Register-AzureRmAutomationDscNode command in your company's environment.\nYou need to make sure that your company's test servers remain correctly configured, regardless of configuration drift.\nSolution: You set the -ConfigurationMode parameter to ApplyAndMonitor.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B: No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 10,
    number: 10,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYou run the Register-AzureRmAutomationDscNode command in your company's environment.\nYou need to make sure that your company's test servers remain correctly configured, regardless of configuration drift.\nSolution: You set the -ConfigurationMode parameter to ApplyAndAutocorrect.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 11,
    number: 11,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nTo compile an Internet Information Services (IIS) web application that runs docker, you should use a Default build agent pool.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: B. Hosted Windows Container",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "Hosted Windows Container"
      },
      {
        id: "C",
        text: "Hosted"
      },
      {
        id: "D",
        text: "Hosted macOS"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 12,
    number: 12,
    topic: "Topic 1",
    prompt: "Your company has an Azure DevOps environment that can only be accessed by Azure Active Directory users.\nYou are instructed to make sure that the Azure DevOps environment can only be accessed from devices connected to the company's on-premises\nnetwork.\nWhich of the following actions should you take?",
    keySource: "source",
    explanation: "Source answer: D. Configure conditional access in Azure Active Directory.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign the devices to a security group."
      },
      {
        id: "B",
        text: "Create a GPO."
      },
      {
        id: "C",
        text: "Configure Security in Project Settings from Azure DevOps."
      },
      {
        id: "D",
        text: "Configure conditional access in Azure Active Directory. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 13,
    number: 13,
    topic: "Topic 1",
    prompt: "You are making use of Azure DevOps to configure Azure Pipelines for project, named PROJ-01.\nYou are preparing to use a version control system that allows for source code to be stored on a managed Windows server located on the company\nnetwork.\nWhich of the following is the version control system you should use?",
    keySource: "source",
    explanation: "Source answer: D. Git in Azure Repos",
    type: "single",
    options: [
      {
        id: "A",
        text: "Github Enterprise"
      },
      {
        id: "B",
        text: "Bitbucket cloud"
      },
      {
        id: "C",
        text: "Github Professional"
      },
      {
        id: "D",
        text: "Git in Azure Repos"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 14,
    number: 14,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nWhen moving to Azure DevOps, JIRA must be replaced with the build pipelines Azure DevOps service.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: D. boards",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "repos"
      },
      {
        id: "C",
        text: "release pipelines"
      },
      {
        id: "D",
        text: "boards"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 15,
    number: 15,
    topic: "Topic 1",
    prompt: "You scan a Node.js application using WhiteSource Bolt.\nThe scan finds numerous libraries with invalid licenses, but are only used during development.\nYou have to make sure that only production dependencies are scanned by WhiteSource Bolt.\nWhich of the following is a command you should run?",
    keySource: "source",
    explanation: "Source answer: C: npm install",
    type: "single",
    options: [
      {
        id: "A",
        text: "npm edit"
      },
      {
        id: "B",
        text: "npm publish"
      },
      {
        id: "C",
        text: "npm install"
      },
      {
        id: "D",
        text: "npm update "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 16,
    number: 16,
    topic: "Topic 1",
    prompt: "You are currently defining a release strategy for an app, named APP-01.\nThe strategy should allow you to keep the time it takes to deploy new releases of the app to a minimum. The strategy should also allow you to roll\nback in the shortest time required.\nWhich of the following is the release strategy you should use?",
    keySource: "source",
    explanation: "Source answer: A: Red/Black deployment",
    type: "single",
    options: [
      {
        id: "A",
        text: "Red/Black deployment"
      },
      {
        id: "B",
        text: "Rolling deployment"
      },
      {
        id: "C",
        text: "ג€Big Bangג€ deployment"
      },
      {
        id: "D",
        text: "Canary deployment"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 17,
    number: 17,
    topic: "Topic 1",
    prompt: "Your company hosts a web application in Azure, and makes use of Azure Pipelines for managing the build and release of the application.\nWhen stakeholders report that system performance has been adversely affected by the most recent releases, you configure alerts in Azure\nMonitor.\nYou are informed that new releases must satisfy specified performance baseline conditions in the staging environment before they can be\ndeployed to production.\nYou need to make sure that releases not satisfying the performance baseline are prevented from being deployed.\nWhich of the following actions should you take?",
    keySource: "source",
    explanation: "Source answer: C. You should make use of a gate.",
    type: "single",
    options: [
      {
        id: "A",
        text: "You should make use of a branch control check."
      },
      {
        id: "B",
        text: "You should make use of an alert trigger."
      },
      {
        id: "C",
        text: "You should make use of a gate."
      },
      {
        id: "D",
        text: "You should make use of an approval check."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 18,
    number: 18,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nTo deploy an application to a number of Azure virtual machines, you should create a universal group.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: C: deployment",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "security"
      },
      {
        id: "C",
        text: "deployment"
      },
      {
        id: "D",
        text: "resource "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 19,
    number: 19,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou are preparing to deploy an Azure resource group via Terraform.\nTo achieve your goal, you have to install the necessary frameworks.\nWhich of the following are the frameworks you should use? Answer by dragging the correct options from the list to the answer area.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Yeoman, Terratest",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Yeoman"
      },
      {
        id: "O2",
        text: "Tiller"
      },
      {
        id: "O3",
        text: "Terratest"
      },
      {
        id: "O4",
        text: "WhiteSource"
      },
      {
        id: "O5",
        text: "Vault"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O3"
    ]
  },
  {
    id: 20,
    number: 20,
    topic: "Topic 1",
    prompt: "You intend to make use of Azure Artifacts to share packages that you wrote, tested, validated, and deployed.\nYou want to use a solitary feed to release several builds of each package. You have to make sure that the release of packages that are in\ndevelopment is restricted.\nWhich of the following actions should you take?",
    keySource: "source",
    explanation: "Source answer: B. You should make use of views.",
    type: "single",
    options: [
      {
        id: "A",
        text: "You should make use of static code analysis."
      },
      {
        id: "B",
        text: "You should make use of views."
      },
      {
        id: "C",
        text: "You should make use of dynamic code analysis."
      },
      {
        id: "D",
        text: "You should make use of upstream sources."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 21,
    number: 21,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nTo find when common open source libraries are added to the code base, you should add Jenkins to the build pipeline.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: C. WhiteSource",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "SourceGear Vault"
      },
      {
        id: "C",
        text: "WhiteSource"
      },
      {
        id: "D",
        text: "OWASP ZAP "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 22,
    number: 22,
    topic: "Topic 1",
    prompt: "Your company has an Azure DevOps project, which includes a build pipeline that makes use of roughly fifty open source libraries.\nYou have been tasked with making sure that you are able to scan project for common security weaknesses in the open source libraries.\nWhich of the following actions should you take?",
    keySource: "source",
    explanation: "Source answer: A. You should create a build task and use the WhiteSource Bolt service.",
    type: "single",
    options: [
      {
        id: "A",
        text: "You should create a build task and use the WhiteSource Bolt service."
      },
      {
        id: "B",
        text: "You should create a deployment task and use the WhiteSource Bolt service."
      },
      {
        id: "C",
        text: "You should create a build task and use the Chef service."
      },
      {
        id: "D",
        text: "You should create a deployment task and use the Chef service."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 23,
    number: 23,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nBlack Duck can be used to make sure that all the open source libraries conform to your company's licensing criteria.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: A. No adjustment required.",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "Maven"
      },
      {
        id: "C",
        text: "Bamboo"
      },
      {
        id: "D",
        text: "CMAKE"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 24,
    number: 24,
    topic: "Topic 1",
    prompt: "You have created an Azure DevOps project for a new application that will be deployed to a number of Windows Server 2016 Azure virtual\nmachines.\nYou are preparing a deployment solution that allows for the virtual machines to maintain a uniform configuration, and also keep administrative\neffort with regards to configuring the virtual machines to a minimum.\nWhich of the following should be part of your solution? (Choose two.)",
    keySource: "source",
    explanation: "Source answer: A. Azure Resource Manager templates und B. The PowerShell Desired State Configuration (DSC) extension for Windows",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Azure Resource Manager templates"
      },
      {
        id: "B",
        text: "The PowerShell Desired State Configuration (DSC) extension for Windows"
      },
      {
        id: "C",
        text: "Azure pipeline deployment groups"
      },
      {
        id: "D",
        text: "The Custom Script Extension for Windows"
      },
      {
        id: "E",
        text: "Azure pipeline stage templates "
      }
    ],
    correct: [
      "A",
      "B"
    ]
  },
  {
    id: 25,
    number: 25,
    topic: "Topic 1",
    prompt: "Your company has an application that contains a number of Azure App Service web apps and Azure functions.\nYou would like to view recommendations with regards to the security of the web apps and functions. You plan to navigate to Compute and Apps to\nachieve your goal.\nWhich of the following should you access to make use of Compute and Apps?",
    keySource: "source",
    explanation: "Source answer: D. Azure Security Center",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Log Analytics"
      },
      {
        id: "B",
        text: "Azure Event Hubs"
      },
      {
        id: "C",
        text: "Azure Advisor"
      },
      {
        id: "D",
        text: "Azure Security Center"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 26,
    number: 26,
    topic: "Topic 1",
    prompt: "You need to consider the underlined segment to establish whether it is accurate.\nYour company has a multi-tier application that has its front end hosted in Azure App Service.\nTo pinpoint the average load times of the application pages, you should make use of Azure Event Hubs.\nSelect `No adjustment required` if the underlined segment is accurate. If the underlined segment is inaccurate, select the accurate option.",
    keySource: "source",
    explanation: "Source answer: B: Azure Application Insights",
    type: "single",
    options: [
      {
        id: "A",
        text: "No adjustment required."
      },
      {
        id: "B",
        text: "Azure Application Insights"
      },
      {
        id: "C",
        text: "Azure Log Analytics"
      },
      {
        id: "D",
        text: "Azure Advisor"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 27,
    number: 27,
    topic: "Topic 1",
    prompt: "Your company makes use of Azure SQL Database Intelligent Insights and Azure Application Insights for monitoring purposes.\nYou have been tasked with analyzing the monitoring using ad-hoc queries. You need to utilize the correct query language.\nSolution: You use the Contextual Query Language (CQL).\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B: No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 28,
    number: 28,
    topic: "Topic 1",
    prompt: "Your company makes use of Azure SQL Database Intelligent Insights and Azure Application Insights for monitoring purposes.\nYou have been tasked with analyzing the monitoring using ad-hoc queries. You need to utilize the correct query language.\nSolution: You use the Transact-SQL.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B: No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 29,
    number: 29,
    topic: "Topic 1",
    prompt: "Your company makes use of Azure SQL Database Intelligent Insights and Azure Application Insights for monitoring purposes.\nYou have been tasked with analyzing the monitoring using ad-hoc queries. You need to utilize the correct query language.\nSolution: You use Azure Log Analytics.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B: No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 30,
    number: 30,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou have recently created a web application for your company.\nYou have been tasked with making sure that a summary of the exceptions that transpire in the application is automatically sent to Microsoft\nTeams on a daily basis.\nWhich of the following Azure services should you use? Answer by dragging the correct options from the list to the answer area.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Azure Logic App, Azure Application Insights",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure DevOps"
      },
      {
        id: "O2",
        text: "Azure Pipelines"
      },
      {
        id: "O3",
        text: "Azure Logic Apps"
      },
      {
        id: "O4",
        text: "Azure Application"
      },
      {
        id: "O5",
        text: "Project"
      },
      {
        id: "O6",
        text: "Insights"
      },
      {
        id: "O7",
        text: "Azure Logic App"
      },
      {
        id: "O8",
        text: "Azure Application Insights"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8"
    ]
  },
  {
    id: 31,
    number: 31,
    topic: "Topic 1",
    prompt: "You are in the process of building a mobile app aimed at Android and iOS devices.\nAll work items and release cycles are managed via Azure DevOps.\nYou want to make sure that crash reports for issue analysis is collected, and that beta releases are distributed to your testers. Also, you want to\nensure that user feedback on the functionality of new apps is received.\nWhich of the following must be part of your solution?",
    keySource: "source",
    explanation: "Source answer: A. The Microsoft Test & Feedback extension und B. Azure Application Insights",
    type: "single",
    options: [
      {
        id: "A",
        text: "The Microsoft Test & Feedback extension."
      },
      {
        id: "B",
        text: "OWASP ZAP"
      },
      {
        id: "C",
        text: "TFS Integration Platform"
      },
      {
        id: "D",
        text: "Code Style "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 32,
    number: 1,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou need to recommend project metrics for dashboards in Azure DevOps.\nWhich chart widgets should you recommend for each metric? To answer, drag the appropriate chart widgets to the correct metrics. Each chart\nwidget may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Lead Time, Cycle Time, Burndown",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Lead Time"
      },
      {
        id: "O2",
        text: "Cycle Time"
      },
      {
        id: "O3",
        text: "Burndown"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2",
      "t3:O3"
    ]
  },
  {
    id: 33,
    number: 2,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou plan to create alerts that will be triggered based on the page load performance of a home page.\nYou have the Application Insights log query shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: percentile_duration_95, success",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "source"
      },
      {
        id: "O2",
        text: "threshold"
      },
      {
        id: "O3",
        text: "resultCode"
      },
      {
        id: "O4",
        text: "users, the alerting level must be based on [answer choice]. - -"
      },
      {
        id: "O5",
        text: "To only create an alert when authentication error occurs Iv]"
      },
      {
        id: "O6",
        text: "percentile_duration_95"
      },
      {
        id: "O7",
        text: "success"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7"
    ]
  },
  {
    id: 34,
    number: 3,
    topic: "Topic 2",
    prompt: "You manage an Azure web app that supports an e-commerce website.\nYou need to increase the logging level when the web app exceeds normal usage patterns. The solution must minimize administrative overhead.\nWhich two resources should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: B. an Azure Monitor alert that has a dynamic threshold A. An Azure Automation runbook",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "an Azure Automation runbook"
      },
      {
        id: "B",
        text: "an Azure Monitor alert that has a dynamic threshold"
      },
      {
        id: "C",
        text: "an Azure Monitor alert that has a static threshold"
      },
      {
        id: "D",
        text: "the Azure Monitor autoscale settings"
      },
      {
        id: "E",
        text: "an Azure Monitor alert that uses an action group that has an email action"
      }
    ],
    correct: [
      "B",
      "A"
    ]
  },
  {
    id: 35,
    number: 4,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an Azure Kubernetes Service (AKS) pod.\nYou need to configure a probe to perform the following actions:\n✑ Confirm that the pod is responding to service requests.\n✑ Check the status of the pod four times a minute.\n✑ Initiate a shutdown if the pod is unresponsive.\nHow should you complete the YAML configuration file? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: readinessProbe, periodSeconds: 15",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "name: readiness-http"
      },
      {
        id: "O2",
        text: "readinessProbe"
      },
      {
        id: "O3",
        text: "periodSeconds: 15"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 36,
    number: 5,
    topic: "Topic 2",
    prompt: "You have a Microsoft ASP.NET Core web app in Azure that is accessed worldwide.\nYou need to run a URL ping test once every five minutes and create an alert when the web app is unavailable from specific Azure regions. The\nsolution must minimize development time.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B. Create an Azure Application Insights availability test and alert.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an Azure Monitor Availability metric and alert."
      },
      {
        id: "B",
        text: "Create an Azure Application Insights availability test and alert."
      },
      {
        id: "C",
        text: "Write an Azure function and deploy the function to the specific regions."
      },
      {
        id: "D",
        text: "Create an Azure Service Health alert for the specific regions."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 37,
    number: 6,
    topic: "Topic 2",
    prompt: "You have a multi-tier application. The front end of the application is hosted in Azure App Service.\nYou need to identify the average load times of the application pages.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A. Azure Application Insights",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Application Insights"
      },
      {
        id: "B",
        text: "the activity log of the App Service"
      },
      {
        id: "C",
        text: "the diagnostics logs of the App Service"
      },
      {
        id: "D",
        text: "Azure Advisor"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 38,
    number: 7,
    topic: "Topic 2",
    prompt: "SIMULATION -\nYou need to create an instance of Azure Application Insights named az400-123456789-main and configure the instance to receive telemetry data\nfrom an Azure web app named az400-123456789-main.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: Step 1: Create an instance of Azure Application Insights1. Open Microsoft Azure Portal2. Log into your Azure account, Select Create a resource > Developer tools > Application Insights.\n\n3. Enter the following settings, and then select Review + create.Name: az400-123456789-main -Step 2: Configure App Insights SDK1. Open your ASP.NET Core Web App project in Visual Studio > Right-click on the AppName in the Solution Explorer > Select Add > Application InsightsTelemetry.\n\n2. Click the Get Started button3. Select your account and subscription > Select the Existing resource you created in the Azure portal > Click Register.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Step 1: Create an instance of Azure Application Insights1. Open Microsoft Azure Portal2. Log into your Azure account, Select Create a resource > Developer tools > Application Insights.\n\n3. Enter the following settings, and then select Review + create.Name: az400-123456789-main -Step 2: Configure App Insights SDK1. Open your ASP.NET Core Web App project in Visual Studio > Right-click on the AppName in the Solution Explorer > Select Add > Application InsightsTelemetry.\n\n2. Click the Get Started button3. Select your account and subscription > Select the Existing resource you created in the Azure portal > Click Register."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 39,
    number: 8,
    topic: "Topic 2",
    prompt: "Your company uses ServiceNow for incident management.\nYou develop an application that runs on Azure.\nThe company needs to generate a ticket in ServiceNow when the application fails to authenticate.\nWhich Azure Log Analytics solution should you use?",
    keySource: "source",
    explanation: "Source answer: C. IT Service Management Connector (ITSM)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Application Insights Connector"
      },
      {
        id: "B",
        text: "Automation & Control"
      },
      {
        id: "C",
        text: "IT Service Management Connector (ITSM)"
      },
      {
        id: "D",
        text: "Insight & Analytics "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 40,
    number: 9,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYour company is building a new web application.\nYou plan to collect feedback from pilot users on the features being delivered.\nAll the pilot users have a corporate computer that has Google Chrome and the Microsoft Test & Feedback extension installed. The pilot users will\ntest the application by using Chrome.\nYou need to identify which access levels are required to ensure that developers can request and gather feedback from the pilot users. The solution\nmust use the principle of least privilege.\nWhich access levels in Azure DevOps should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Basic, Stakeholder",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Pipelines"
      },
      {
        id: "O2",
        text: "Azure Logic Apps"
      },
      {
        id: "O3",
        text: "Azure DevOps Project"
      },
      {
        id: "O4",
        text: "Azure Application Insights"
      },
      {
        id: "O5",
        text: "Stakeholder"
      },
      {
        id: "O6",
        text: "Transact-SQL"
      },
      {
        id: "O7",
        text: "Basic"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O5"
    ]
  },
  {
    id: 41,
    number: 10,
    topic: "Topic 2",
    prompt: "You use Azure SQL Database Intelligent Insights and Azure Application Insights for monitoring.\nYou need to write ad-hoc queries against the monitoring data.\nWhich query language should you use?",
    keySource: "source",
    explanation: "Source answer: A. Kusto Query Language (KQL)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Kusto Query Language (KQL)"
      },
      {
        id: "B",
        text: "PL/pgSQL"
      },
      {
        id: "C",
        text: "PL/SQL"
      },
      {
        id: "D",
        text: "Transact-SQL"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 42,
    number: 11,
    topic: "Topic 2",
    prompt: "Your company creates a web application.\nYou need to recommend a solution that automatically sends to Microsoft Teams a daily summary of the exceptions that occur in the application.\nWhich two Azure services should you recommend? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: A. Azure Logic Apps E. Azure Application Insights",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Azure Logic Apps"
      },
      {
        id: "B",
        text: "Azure Pipelines"
      },
      {
        id: "C",
        text: "Microsoft Visual Studio App Center"
      },
      {
        id: "D",
        text: "Azure DevOps Project"
      },
      {
        id: "E",
        text: "Azure Application Insights "
      }
    ],
    correct: [
      "A",
      "E"
    ]
  },
  {
    id: 43,
    number: 12,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYour company wants to use Azure Application Insights to understand how user behaviors affect an application.\nWhich Application Insights tool should you use to analyze each behavior? To answer, drag the appropriate tools to the correct behaviors. Each tool\nmay be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: User Flows, Users, Impact",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Application Insights widgets"
      },
      {
        id: "O2",
        text: "User Flows"
      },
      {
        id: "O3",
        text: "Users"
      },
      {
        id: "O4",
        text: "Impact"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 44,
    number: 13,
    topic: "Topic 2",
    prompt: "Your company is building a mobile app that targets Android and iOS devices.\nYour team uses Azure DevOps to manage all work items and release cycles.\nYou need to recommend a solution to perform the following tasks:\n✑ Collect crash reports for issue analysis.\n✑ Distribute beta releases to your testers.\n✑ Get user feedback on the functionality of new apps.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: B. Microsoft Visual Studio App Center integration",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Microsoft Test & Feedback extension"
      },
      {
        id: "B",
        text: "Microsoft Visual Studio App Center integration"
      },
      {
        id: "C",
        text: "Azure Application Insights widgets"
      },
      {
        id: "D",
        text: "Jenkins integration "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 45,
    number: 14,
    topic: "Topic 2",
    prompt: "You have an Azure DevOps project named Project1 and an Azure subscription named Sub1. Sub1 contains an Azure virtual machine scale set\nnamed VMSS1.\nVMSS1 hosts a web application named WebApp1. WebApp1 uses stateful sessions.\nThe WebApp1 installation is managed by using the Custom Script extension. The script resides in an Azure Storage account named sa1.\nYou plan to make a minor change to a UI element of WebApp1 and to gather user feedback about the change.\nYou need to implement limited user testing for the new version of WebApp1 on VMSS1.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CDE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Modify the load balancer settings of VMSS1."
      },
      {
        id: "B",
        text: "Redeploy VMSS1."
      },
      {
        id: "C",
        text: "Upload a custom script file to sa1."
      },
      {
        id: "D",
        text: "Modify the Custom Script extension settings of VMSS1."
      },
      {
        id: "E",
        text: "Update the configuration of a virtual machine in VMSS1."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 46,
    number: 15,
    topic: "Topic 2",
    prompt: "SIMULATION -\nYou need to create a notification if the peak average response time of an Azure web app named az400-123456789-main is more than five seconds\nwhen evaluated during a five-minute period. The notification must trigger the `https://contoso.com/notify` webhook.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: 1. Open Microsoft Azure Portal2. Log into your Azure account and go to App Service and look under Monitoring then you will see Alert.3. Select Add an alert rule4. Configure the alert rule as per below and click Ok.Source: Alert on Metrics -Resource Group: az400-123456789-mainResource: az400-123456789-main -Threshold: 5 -Period: Over the last 5 minutes -Webhook: https://contoso.com/notify",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. Open Microsoft Azure Portal2. Log into your Azure account and go to App Service and look under Monitoring then you will see Alert.3. Select Add an alert rule4. Configure the alert rule as per below and click Ok.Source: Alert on Metrics -Resource Group: az400-123456789-mainResource: az400-123456789-main -Threshold: 5 -Period: Over the last 5 minutes -Webhook: https://contoso.com/notify"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 47,
    number: 16,
    topic: "Topic 2",
    prompt: "SIMULATION -\nYou need to create and configure an Azure Storage account named az400lod123456789stor in a resource group named RG1lod123456789 to\nstore the boot diagnostics for a virtual machine named VM1.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: Step 1: To create a general-purpose v2 storage account in the Azure portal, follow these steps:1. On the Azure portal menu, select All services. In the list of resources, type Storage Accounts. As you begin typing, the list filters based on your input. SelectStorage Accounts.2. On the Storage Accounts window that appears, choose Add.3. Select the subscription in which to create the storage account.4. Under the Resource group field, select RG1lod1234567895. Next, enter a name for your storage account named: az400lod123456789stor6. Select Create.Step 2: Enable boot diagnostics on existing virtual machineTo enable Boot diagnostics on an existing virtual machine, follow these steps:1. Sign in to the Azure portal, and then select the virtual machine VM1.2. In the Support + troubleshooting section, select Boot diagnostics, then select the Settings tab.3. In Boot diagnostics settings, change the status to On, and from the Storage account drop-down list, select the storage account az400lod123456789stor.4. Save the change.You must restart the virtual machine for the change to take effect.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Step 1: To create a general-purpose v2 storage account in the Azure portal, follow these steps:1. On the Azure portal menu, select All services. In the list of resources, type Storage Accounts. As you begin typing, the list filters based on your input. SelectStorage Accounts.2. On the Storage Accounts window that appears, choose Add.3. Select the subscription in which to create the storage account.4. Under the Resource group field, select RG1lod1234567895. Next, enter a name for your storage account named: az400lod123456789stor6. Select Create.Step 2: Enable boot diagnostics on existing virtual machineTo enable Boot diagnostics on an existing virtual machine, follow these steps:1. Sign in to the Azure portal, and then select the virtual machine VM1.2. In the Support + troubleshooting section, select Boot diagnostics, then select the Settings tab.3. In Boot diagnostics settings, change the status to On, and from the Storage account drop-down list, select the storage account az400lod123456789stor.4. Save the change.You must restart the virtual machine for the change to take effect."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 48,
    number: 17,
    topic: "Topic 2",
    prompt: "SIMULATION -\nYou have a web app that connects to an Azure SQL Database named db1.\nYou need to configure db1 to send Query Store runtime statistics to Azure Log Analytics.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "No extracted answer"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 49,
    number: 18,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou have several Azure virtual machines that run Windows Server 2019.\nYou need to identify the distinct event IDs of each virtual machine as shown in the following table.\nHow should you complete the Azure Monitor query? To answer, drag the appropriate values to the correct locations. Each value may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: summarize, makelist(EventID)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "traces"
      },
      {
        id: "O2",
        text: "requests"
      },
      {
        id: "O3",
        text: "pageViews"
      },
      {
        id: "O4",
        text: "exceptions"
      },
      {
        id: "O5",
        text: "availabilityResult"
      },
      {
        id: "O6",
        text: "summarize"
      },
      {
        id: "O7",
        text: "makelist(EventID)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7"
    ]
  },
  {
    id: 50,
    number: 19,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an Azure web app named Webapp1.\nYou need to use an Azure Monitor query to create a report that details the top 10 pages of Webapp1 that failed.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: requests, success == false",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "traces"
      },
      {
        id: "O2",
        text: "requests"
      },
      {
        id: "O3",
        text: "pageViews"
      },
      {
        id: "O4",
        text: "exceptions"
      },
      {
        id: "O5",
        text: "availabilityResult"
      },
      {
        id: "O6",
        text: "success == false"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O6"
    ]
  },
  {
    id: 51,
    number: 20,
    topic: "Topic 2",
    prompt: "You are monitoring the health and performance of an Azure web app by using Azure Application Insights.\nYou need to ensure that an alert is sent when the web app has a sudden rise in performance issues and failures.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: D. Smart Detection",
    type: "single",
    options: [
      {
        id: "A",
        text: "custom events"
      },
      {
        id: "B",
        text: "Application Insights Profiler"
      },
      {
        id: "C",
        text: "usage analysis"
      },
      {
        id: "D",
        text: "Smart Detection"
      },
      {
        id: "E",
        text: "Continuous export"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 52,
    number: 21,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have a project in Azure DevOps named Contoso App that contains pipelines in Azure Pipelines for GitHub repositories.\nYou need to ensure that developers receive Microsoft Teams notifications when there are failures in a pipeline of Contoso App.\nWhat should you run in Teams? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: subscribe, https://dev.azure.com/contoso/contoso-app/",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Create a GitHub action in GitHub."
      },
      {
        id: "O2",
        text: "subscribe"
      },
      {
        id: "O3",
        text: "https://dev.azure.com/contoso/contoso-app/"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 53,
    number: 22,
    topic: "Topic 2",
    prompt: "You have a private GitHub repository.\nYou need to display the commit status of the repository on Azure Boards.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure multi-factor authentication (MFA) for your GitHub account."
      },
      {
        id: "B",
        text: "Add the Azure Pipelines app to the GitHub repository."
      },
      {
        id: "C",
        text: "Add the Azure Boards app to the repository."
      },
      {
        id: "D",
        text: "Create a GitHub action in GitHub. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 54,
    number: 23,
    topic: "Topic 2",
    prompt: "You are integrating Azure Pipelines and Microsoft Teams.\nYou install the Azure Pipelines app in Microsoft Teams.\nYou have an Azure DevOps organization named Contoso that contains a project name Project1.\nYou subscribe to Project1 in Microsoft Teams.\nYou need to ensure that you only receive events about failed builds in Microsoft Teams.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Microsoft Teams, run @azure pipelines subscribe https://dev.azure.com/Contoso/Project1."
      },
      {
        id: "B",
        text: "From Azure Pipelines, add a Publish Build Artifacts task to Project1."
      },
      {
        id: "C",
        text: "From Microsoft Teams, run @azure pipelines subscriptions."
      },
      {
        id: "D",
        text: "From Azure Pipelines, enable continuous integration for Project1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 55,
    number: 24,
    topic: "Topic 2",
    prompt: "You have an Azure DevOps organization named Contoso.\nYou need to receive Microsoft Teams notifications when work items are updated.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Azure DevOps, configure a service hook subscription"
      },
      {
        id: "B",
        text: "From Microsoft Teams, configure a connector"
      },
      {
        id: "C",
        text: "From the Microsoft Teams admin center, configure external access"
      },
      {
        id: "D",
        text: "From Microsoft Teams, add a channel"
      },
      {
        id: "E",
        text: "From Azure DevOps, install an extension "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 56,
    number: 25,
    topic: "Topic 2",
    prompt: "You create an alert rule in Azure Monitor as shown in the following exhibit.\nWhich action will trigger an alert?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "a failed attempt to delete the ASP-9bb7 resource"
      },
      {
        id: "B",
        text: "a change to a role assignment for the ASP-9bb7 resource"
      },
      {
        id: "C",
        text: "a successful attempt to delete the ASP-9bb7 resource"
      },
      {
        id: "D",
        text: "a failed attempt to scale up the ASP-9bb7 resource"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 57,
    number: 26,
    topic: "Topic 2",
    prompt: "You have a web app hosted on Azure App Service. The web app stores data in an Azure SQL database.\nYou need to generate an alert when there are 10,000 simultaneous connections to the database. The solution must minimize development effort.\nWhich option should you select in the Diagnostics settings of the database?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Send to Log Analytics"
      },
      {
        id: "B",
        text: "Stream to an event hub"
      },
      {
        id: "C",
        text: "Archive to a storage account "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 58,
    number: 27,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou use Azure DevOps to manage the build and deployment of an app named App1.\nYou have a release pipeline that deploys a virtual machine named VM1.\nYou plan to monitor the release pipeline by using Azure Monitor.\nYou need to create an alert to monitor the performance of VM1. The alert must be triggered when the average CPU usage exceeds 70 percent for\nfive minutes.\nThe alert must calculate the average once every minute.\nHow should you configure the alert rule? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: 5 minutes, static, Greater than",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Static"
      },
      {
        id: "O2",
        text: "Dynamic"
      },
      {
        id: "O3",
        text: "the Telegraf agent"
      },
      {
        id: "O4",
        text: "the Dependency agent"
      },
      {
        id: "O5",
        text: "the Azure monitor agent"
      },
      {
        id: "O6",
        text: "The virtual machine has the Azure Log Analytics agent installed."
      },
      {
        id: "O7",
        text: "You plan to deploy the Service Map solution from the Azure Marketplace."
      },
      {
        id: "O8",
        text: "5 minutes"
      },
      {
        id: "O9",
        text: "Greater than"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O1",
      "t3:O9"
    ]
  },
  {
    id: 59,
    number: 28,
    topic: "Topic 2",
    prompt: "You have an Azure virtual machine that is monitored by using Azure Monitor.\nThe virtual machine has the Azure Log Analytics agent installed.\nYou plan to deploy the Service Map solution from the Azure Marketplace.\nWhat should you deploy to the virtual machine to support the Service Map solution?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Dependency agent"
      },
      {
        id: "B",
        text: "the Telegraf agent"
      },
      {
        id: "C",
        text: "the Windows Azure diagnostics extension (WAD)"
      },
      {
        id: "D",
        text: "the Azure monitor agent "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 60,
    number: 29,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have a project in Azure DevOps that contains a Continuous Integration/Continuous Deployment (CI/CD) pipeline.\nYou need to enable detailed logging by defining a pipeline variable.\nHow should you configure the variable? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: System.Debug, true",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "detailed"
      },
      {
        id: "O2",
        text: "System.Log"
      },
      {
        id: "O3",
        text: "System.Debug"
      },
      {
        id: "O4",
        text: "Log"
      },
      {
        id: "O5",
        text: "true"
      },
      {
        id: "O6",
        text: "Debug"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O5"
    ]
  },
  {
    id: 61,
    number: 30,
    topic: "Topic 2",
    prompt: "You build an iOS app.\nYou receive crash reports from Crashlytics.\nYou need to capture the following data:\n✑ Crash-free users\n✑ Custom events\n✑ Breadcrumbs\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C. Configure the Crashlytics pod in the app.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the xcworkspace file in the project"
      },
      {
        id: "B",
        text: "Add the GoogleAnalytics pod to the app."
      },
      {
        id: "C",
        text: "Configure the Crashlytics pod in the app."
      },
      {
        id: "D",
        text: "Import the Firebase module to UIApplicationDelegate. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 62,
    number: 31,
    topic: "Topic 2",
    prompt: "You have multiple teams that work on multiple projects in Azure DevOps.\nYou need to plan and manage the consumers and producers for each project. The solution must provide an overview of all the projects.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a Predecessor or Successor link to the feature or user story for the items of each project."
      },
      {
        id: "B",
        text: "Add a Parent or Child link to the feature or user story for the items of each project."
      },
      {
        id: "C",
        text: "Install the Dependency Tracker extension and create dependencies for each project."
      },
      {
        id: "D",
        text: "Create a custom query to show the consumers and producers and add a widget to a dashboard. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 63,
    number: 32,
    topic: "Topic 2",
    prompt: "DRAG DROP\n-\nYou have a GitHub repository that contains the source code for an app named App1.\nYou need to create process documentation for App1. The solution must include a diagram that displays the relationships between the phases of\nApp1 as shown in the following exhibit.\nHow should you complete the markdown code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: stateDiagram, processing",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "sequenceDiagram"
      },
      {
        id: "O2",
        text: "stateDiagram"
      },
      {
        id: "O3",
        text: "processing"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 64,
    number: 33,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou have an Azure web app named webapp1 that uses the .NET Core runtime stack. You have an Azure Application Insights resource named\nAppInsights1 that collects telemetry data generated by webapp1.\nYou plan to deploy webapp1 by using an Azure DevOps pipeline.\nYou need to modify the sampling rate of the telemetry data processed by AppInsights1 without having to redeploy webapp1 after each\nmodification.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Modify Application.config, Modify the suage and estimated costs settings",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "From Applnsights1: v"
      },
      {
        id: "O2",
        text: "Disable adaptive sampling."
      },
      {
        id: "O3",
        text: "Enable fixed-rate sampling."
      },
      {
        id: "O4",
        text: "From the code repository of webapp: -"
      },
      {
        id: "O5",
        text: "modification."
      },
      {
        id: "O6",
        text: "You plan to deploy webapp1 by using an Azure DevOps pipeline."
      },
      {
        id: "O7",
        text: "Modify Application.config"
      },
      {
        id: "O8",
        text: "Modify the suage and estimated costs settings"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8"
    ]
  },
  {
    id: 65,
    number: 34,
    topic: "Topic 2",
    prompt: "Your company has multiple microservices-based apps that use the following tracing libraries:\n• OpenTelemetry\n• OpenCensus\n• OpenTracing\n• Honeycomb\n• Jaeger\nThe company purchases an Azure subscription and implements Application Insights in Azure Monitor.\nYou plan to centralize distributed tracing for the apps.\nYou need to identify which libraries can integrate directly with Application Insights.\nWhich two libraries should you identify? Each correct answer presents a complete solution.\nNOTE: Each correct solution is worth one point.",
    keySource: "source",
    explanation: "Source answer: D. OpenTelemetry E. OpenCensus",
    type: "single",
    options: [
      {
        id: "A",
        text: "Honeycomb"
      },
      {
        id: "B",
        text: "OpenTracing"
      },
      {
        id: "C",
        text: "Jaeger"
      },
      {
        id: "D",
        text: "OpenTelemtry"
      },
      {
        id: "E",
        text: "OpenCensus"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 66,
    number: 35,
    topic: "Topic 2",
    prompt: "You have an Azure web app named webapp1 that uses the .NET Core runtime stack. You have an Azure Application Insights resource named\nAppInsights1. Webapp1 sends telemetry data to AppInsights1.\nYou need to ensure that webapp1 sends the telemetry data at a fixed sampling rate.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the code repository of webapp1, modify the ApplicationInsights.config file."
      },
      {
        id: "B",
        text: "From the code repository of webapp1, modify the Startup.cs file."
      },
      {
        id: "C",
        text: "From AppInsights1, modify the Usage and estimated costs settings."
      },
      {
        id: "D",
        text: "From AppInsights1, configure the Continuous export settings. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 67,
    number: 36,
    topic: "Topic 2",
    prompt: "DRAG DROP\n-\nYou have an app named App1. You have a Log Analytics workspace named Workspace1 that contains two tables named Events and Logs. App1\nmanages events in multiple locations and writes logs to Workspace1.\nYou need to query Workspace1 for all log entries related to Asia that occurred during the last two days.\nIn which order should you arrange the query statements? To answer, move all statements from the list of statements to the answer area and\narrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Logs, where continent == ‘Asia’, join (Events, where timestamp> ago(2d),) on Requestid",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "percent."
      },
      {
        id: "O2",
        text: "Logs"
      },
      {
        id: "O3",
        text: "where continent == ‘Asia’"
      },
      {
        id: "O4",
        text: "join (Events"
      },
      {
        id: "O5",
        text: "where timestamp> ago(2d)"
      },
      {
        id: "O6",
        text: ") on Requestid"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4",
      "t4:O5",
      "t5:O6"
    ]
  },
  {
    id: 68,
    number: 37,
    topic: "Topic 2",
    prompt: "DRAG DROP\n-\nYou have a web app named App1 that uses Application Insights in Azure Monitor.\nYou need to compare the hourly CPU usage of App1 from the last 24 hours. The solution must include a graph that has a threshold line at 75\npercent.\nHow should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: bin(TimeGenerated, 1h), extend",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "percent."
      },
      {
        id: "O2",
        text: "bin(TimeGenerated"
      },
      {
        id: "O3",
        text: "1h)"
      },
      {
        id: "O4",
        text: "extend"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 69,
    number: 38,
    topic: "Topic 2",
    prompt: "You use Azure Pipelines to build and deploy an app named App1.\nYou plan to monitor App1 by using Application Insights.\nYou create an Application Insights instance named AI1.\nYou need to configure App1 to use AI1.\nWhich file should you modify?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "appsettings.json"
      },
      {
        id: "B",
        text: "launchSettings.json"
      },
      {
        id: "C",
        text: "startup.cs"
      },
      {
        id: "D",
        text: "project.json"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 70,
    number: 39,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou have an Azure virtual machine named web1.\nYou need to query the amount of free memory that was available on web1 during the past seven days. The solution must meet the following\nrequirements:\n• Display the data as a time chart.\n• Calculate the average value per hour.\nHow should you complete the KQL query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: TimeGenerated > ago (7d), bin(timeGenerated,1h)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "project.json"
      },
      {
        id: "O2",
        text: "appsettings.json"
      },
      {
        id: "O3",
        text: "launchSettings.json"
      },
      {
        id: "O4",
        text: "startup.cs"
      },
      {
        id: "O5",
        text: "You create an Application Insights instance named Al1."
      },
      {
        id: "O6",
        text: "You plan to monitor App1 by using Application Insights."
      },
      {
        id: "O7",
        text: "webl"
      },
      {
        id: "O8",
        text: "Perf"
      },
      {
        id: "O9",
        text: "TimeGenerated > ago (7d)"
      },
      {
        id: "O10",
        text: "bin(timeGenerated"
      },
      {
        id: "O11",
        text: "1h)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O9",
      "t2:O10",
      "t3:O11"
    ]
  },
  {
    id: 71,
    number: 40,
    topic: "Topic 2",
    prompt: "DRAG DROP\n-\nYou have a web app named App1 that uses Application Insights in Azure Monitor to store log data. App1 has users in multiple locations.\nYou need to query App1 requests from London and Paris that return a 404 error. The solution must meet the following requirements:\n• Return the timestamp url, resultCode, and duration fields\n• Only show requests made during the last hour.\nHow should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all.\n",
    keySource: "source",
    explanation: "Source answer: timestamp >= ago(1hr), project",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "London"
      },
      {
        id: "O2",
        text: "Paris"
      },
      {
        id: "O3",
        text: ". | where resultCode == “404” and (client City"
      },
      {
        id: "O4",
        text: "timestamp >= ago (lhr) == “London” or client City == “Paris”)"
      },
      {
        id: "O5",
        text: "timestamp >= ago(1hr)"
      },
      {
        id: "O6",
        text: "project"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6"
    ]
  },
  {
    id: 72,
    number: 41,
    topic: "Topic 2",
    prompt: "DRAG DROP\n-\nYou have a project in Azure DevOps.\nYou need to configure a dashboard. The solution must include the following metrics:\n• Bottlenecks in the software development process\n• A burndown chart for the work in a single iteration\n• How long it takes to close a work item after the item was started\nWhich type of widget should you use for each metric? To answer, drag the appropriate widget types to the correct metrics. Each widget type may\nbe used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Burndown chart, Cycle time, Sprint burndown",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Velocity"
      },
      {
        id: "O2",
        text: "Burndown chart"
      },
      {
        id: "O3",
        text: "Cycle time"
      },
      {
        id: "O4",
        text: "Sprint burndown"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 73,
    number: 42,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a Log Analytics workspace named WS1 and a virtual machine named VM1.\nYou need to install the Microsoft Enterprise Cloud Monitoring extension on VM1.\nWhich two values are required to configure the extension? Each correct answer presents part of the solution.\nNOTE: Each correct answer is worth one point.",
    keySource: "source",
    explanation: "Source answer: D. the ID of WS1 A. the secret key of WS1",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "the secret key of WS1"
      },
      {
        id: "B",
        text: "the ID of the subscription"
      },
      {
        id: "C",
        text: "the system-assigned managed identity of VM1"
      },
      {
        id: "D",
        text: "the ID of WS1"
      },
      {
        id: "E",
        text: "the resource ID of VM1 "
      }
    ],
    correct: [
      "D",
      "A"
    ]
  },
  {
    id: 74,
    number: 43,
    topic: "Topic 2",
    prompt: "You have an app named App1 that uses Application Insights to monitor application performance.\nYou need to analyze how often a page in App1 is accessed.\nWhich pane in Application Insights should you use?",
    keySource: "source",
    explanation: "Source answer: D. Users",
    type: "single",
    options: [
      {
        id: "A",
        text: "Events"
      },
      {
        id: "B",
        text: "Sessions"
      },
      {
        id: "C",
        text: "Impact"
      },
      {
        id: "D",
        text: "Users "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 75,
    number: 44,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou have a project in Azure DevOps that includes two users named User1 and User2.\nYou plan to use Azure Monitor to manage logs.\nYou need to ensure that the users can perform the actions shown in following the table.\nThe solution must follow the principle of least privilege.\nWhich role should you assign to each user? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Monitoring Contributor, Monitoring Reader",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "User e Create private monitoring dashboards."
      },
      {
        id: "O2",
        text: "User: v"
      },
      {
        id: "O3",
        text: "User2: v"
      },
      {
        id: "O4",
        text: "workspace."
      },
      {
        id: "O5",
        text: "User2 ¢ View autoscale settings."
      },
      {
        id: "O6",
        text: "You plan to use Azure Monitor to manage logs."
      },
      {
        id: "O7",
        text: "Monitoring Contributor"
      },
      {
        id: "O8",
        text: "Monitoring Reader"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8"
    ]
  },
  {
    id: 76,
    number: 1,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains multiple Azure services.\nYou need to send an SMS alert when scheduled maintenance is planned for the Azure services.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Enable Azure Security Center."
      },
      {
        id: "B",
        text: "Create and configure an Azure Monitor alert rule."
      },
      {
        id: "C",
        text: "Create an Azure Service Health alert."
      },
      {
        id: "D",
        text: "Create and configure an action group."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 77,
    number: 2,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps organization named Contoso and an Azure subscription. The subscription contains an Azure virtual machine scale set\nnamed VMSS1 that is configured for autoscaling.\nYou have a project in Azure DevOps named Project1. Project1 is used to build a web app named App1 and deploy App1 to VMSS1.\nYou need to ensure that an email alert is generated whenever VMSS1 scales in or out.\nSolution: From Azure Monitor, configure the autoscale settings.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 78,
    number: 3,
    topic: "Topic 3",
    prompt: "You configure Azure Application Insights and the shared service plan tier for a web app.\nYou enable Smart Detection.\nYou confirm that standard metrics are visible in the logs, but when you test a failure, you do not receive a Smart Detection notification.\nWhat prevents the Smart Detection notification from being sent?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "You must enable the Snapshot Debugger for the web app."
      },
      {
        id: "B",
        text: "Smart Detection uses the first 24 hours to establish the normal behavior of the web app."
      },
      {
        id: "C",
        text: "The web app is configured to use the shared service plan tier."
      },
      {
        id: "D",
        text: "You must restart the web app before Smart Detection is enabled. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 79,
    number: 4,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are planning projects for three customers. Each customer's preferred process for work items is shown in the following table.\nThe customers all plan to use Azure DevOps for work item management.\nWhich work item process should you use for each customer? To answer, drag the appropriate work item processes to the correct customers. Each\nwork item process may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Scrum, Agile, CMMI",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "an HTTP trigger"
      },
      {
        id: "O2",
        text: "Scrum"
      },
      {
        id: "O3",
        text: "Agile"
      },
      {
        id: "O4",
        text: "CMMI"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 80,
    number: 5,
    topic: "Topic 3",
    prompt: "You configure an Azure Application Insights availability test.\nYou need to notify the customer services department at your company by email when availability is degraded.\nYou create an Azure logic app that will handle the email and follow up actions.\nWhich type of trigger should you use to invoke the logic app?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "an HTTPWebhook trigger"
      },
      {
        id: "B",
        text: "an HTTP trigger"
      },
      {
        id: "C",
        text: "a Request trigger"
      },
      {
        id: "D",
        text: "an ApiConnection trigger"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 81,
    number: 6,
    topic: "Topic 3",
    prompt: "You have an Azure DevOps organization named Contoso and an Azure subscription.\nYou use Azure DevOps to build a containerized app named App1 and deploy App1 to an Azure container instance named ACI1.\nYou need to restart ACI1 when App1 stops responding.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A. Add a liveness probe to the YAML configuration of App1.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a liveness probe to the YAML configuration of App1."
      },
      {
        id: "B",
        text: "Add a readiness probe to the YAML configuration of App1."
      },
      {
        id: "C",
        text: "Use Connection Monitor in Azure Network Watcher."
      },
      {
        id: "D",
        text: "Use IP fiow verify in Azure Network Watcher. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 82,
    number: 7,
    topic: "Topic 3",
    prompt: "You have a multi-tier application that has an Azure Web Apps front end and an Azure SQL Database back end.\nYou need to recommend a solution to capture and store telemetry data. The solution must meet the following requirements:\n✑ Support using ad-hoc queries to identify baselines.\n✑ Trigger alerts when metrics in the baseline are exceeded.\n✑ Store application and database metrics in a central location.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: D. Azure Log Analytics",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Event Hubs"
      },
      {
        id: "B",
        text: "Azure SQL Database Intelligent Insights"
      },
      {
        id: "C",
        text: "Azure Application Insights"
      },
      {
        id: "D",
        text: "Azure Log Analytics"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 83,
    number: 8,
    topic: "Topic 3",
    prompt: "You have an Azure DevOps organization named Contoso and an Azure subscription. The subscription contains an Azure virtual machine scale set\nnamed VMSS1 that is configured for autoscaling.\nYou use Azure DevOps to build a web app named App1 and deploy App1 to VMSS1. App1 is used heavily and has usage patterns that vary on a\nweekly basis.\nYou need to recommend a solution to detect an abnormal rise in the rate of failed requests to App1. The solution must minimize administrative\neffort.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A. the Smart Detection feature in Azure Application Insights",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Smart Detection feature in Azure Application Insights"
      },
      {
        id: "B",
        text: "the Failures feature in Azure Application Insights"
      },
      {
        id: "C",
        text: "an Azure Service Health alert"
      },
      {
        id: "D",
        text: "an Azure Monitor alert that uses an Azure Log Analytics query"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 84,
    number: 9,
    topic: "Topic 3",
    prompt: "SIMULATION -\nYou need to ensure that Microsoft Visual Studio 2017 can remotely attach to an Azure Function named fa-11566895.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: Enable Remote Debugging -Before we start a debugging session to our Azure Function app we need to enable the functionality.1. Navigate in the Azure portal to your function app fa-115668952. Go to the ג€Application settingsג€3. Under ג€Debuggingג€ set Remote Debugging to On and set Remote Visual Studio version to 2017.Reference:https://www.locktar.nl/uncategorized/azure-remote-debugging-manually-in-visual-studio-2017/",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable Remote Debugging -Before we start a debugging session to our Azure Function app we need to enable the functionality.1. Navigate in the Azure portal to your function app fa-115668952. Go to the ג€Application settingsג€3. Under ג€Debuggingג€ set Remote Debugging to On and set Remote Visual Studio version to 2017.Reference:https://www.locktar.nl/uncategorized/azure-remote-debugging-manually-in-visual-studio-2017/"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 85,
    number: 10,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains resources in several resource groups.\nYou need to design a monitoring strategy that will provide a consolidated view. The solution must support the following requirements:\n✑ Support role-based access control (RBAC) by using Azure Active Directory (Azure AD) identifies.\n✑ Include visuals from Azure Monitor that are generated by using the Kusto query language.\n✑ Support documentation written in markdown.\n✑ Use the latest data available for each visual.\nWhat should you use to create the consolidated view?",
    keySource: "source",
    explanation: "Source answer: D. Azure dashboards",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Monitor"
      },
      {
        id: "B",
        text: "Microsoft Power BI"
      },
      {
        id: "C",
        text: "Azure Data Explorer"
      },
      {
        id: "D",
        text: "Azure dashboards"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 86,
    number: 11,
    topic: "Topic 3",
    prompt: "You are automating the testing process for your company.\nYou need to automate UI testing of a web application.\nWhich framework should you use?",
    keySource: "source",
    explanation: "Source answer: B. Selenium",
    type: "single",
    options: [
      {
        id: "A",
        text: "JaCoco"
      },
      {
        id: "B",
        text: "Selenium"
      },
      {
        id: "C",
        text: "Xamarin.UITest"
      },
      {
        id: "D",
        text: "Microsoft.CodeAnalysis"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 87,
    number: 12,
    topic: "Topic 3",
    prompt: "You are building an ASP.NET Core application.\nYou plan to create an application utilization baseline by capturing telemetry data.\nYou need to add code to the application to capture the telemetry data. The solution must minimize the costs of storing the telemetry data.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Add the <InitialSamplingPercentage>99</InitialSamplingPercentage> parameter to the ApplicationInsights.config file."
      },
      {
        id: "B",
        text: "From the code of the application, enable adaptive sampling."
      },
      {
        id: "C",
        text: "From the code of the application, add Azure Application Insights telemetry."
      },
      {
        id: "D",
        text: "Add the <MaxTelemetryItemsPerSecond>5</MaxTelemetryItemsPerSecond> parameter to the ApplicationInsights.config file."
      },
      {
        id: "E",
        text: "From the code of the application, disable adaptive sampling. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 88,
    number: 13,
    topic: "Topic 3",
    prompt: "You have an Azure DevOps organization named Contoso and an Azure subscription. The subscription contains an Azure virtual machine scale set\nnamed VMSS1 and an Azure Standard Load Balancer named LB1. LB1 distributes incoming requests across VMSS1 instances.\nYou use Azure DevOps to build a web app named App1 and deploy App1 to VMSS1. App1 is accessible via HTTPS only and configured to require\nmutual authentication by using a client certificate.\nYou need to recommend a solution for implementing a health check of App1. The solution must meet the following requirements:\n✑ Identify whether individual instances of VMSS1 are eligible for an upgrade operation.\n✑ Minimize administrative effort.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A. an Azure Load Balancer health probe",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Load Balancer health probe"
      },
      {
        id: "B",
        text: "Azure Monitor autoscale"
      },
      {
        id: "C",
        text: "the Custom Script Extension"
      },
      {
        id: "D",
        text: "the Application Health extension "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 89,
    number: 14,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou have an application named App1 that has a custom domain of app.contoso.com.\nYou create a test in Azure Application Insights as shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\tNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: every five minutes at a random location, all the HTML, Javascripts and images of APP1 load",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Enabled"
      },
      {
        id: "O2",
        text: "Create test"
      },
      {
        id: "O3",
        text: "Enable retries for availability test failures. @"
      },
      {
        id: "O4",
        text: "HTTP response @"
      },
      {
        id: "O5",
        text: "every five minutes at a random location"
      },
      {
        id: "O6",
        text: "all the HTML"
      },
      {
        id: "O7",
        text: "Javascripts and images of APP1 load"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7"
    ]
  },
  {
    id: 90,
    number: 15,
    topic: "Topic 3",
    prompt: "You have a build pipeline in Azure Pipelines that occasionally fails.\nYou discover that a test measuring the response time of an API endpoint causes the failures.\nYou need to prevent the build pipeline from failing due to the test.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Set Flaky test detection to Off."
      },
      {
        id: "B",
        text: "Clear Flaky tests included in test pass percentage."
      },
      {
        id: "C",
        text: "Enable Test Impact Analysis (TIA)."
      },
      {
        id: "D",
        text: "Manually mark the test as fiaky."
      },
      {
        id: "E",
        text: "Enable test slicing."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 91,
    number: 16,
    topic: "Topic 3",
    prompt: "Your company hosts a web application in Azure. The company uses Azure Pipelines for the build and release management of the application.\nStakeholders report that the past few releases have negatively affected system performance.\nYou configure alerts in Azure Monitor.\nYou need to ensure that new releases are only deployed to production if the releases meet defined performance baseline criteria in the staging\nenvironment first.\nWhat should you use to prevent the deployment of releases that fall to meet the performance baseline?",
    keySource: "source",
    explanation: "Source answer: C. a gate",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Scheduler job"
      },
      {
        id: "B",
        text: "a trigger"
      },
      {
        id: "C",
        text: "a gate"
      },
      {
        id: "D",
        text: "an Azure function "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 92,
    number: 17,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a project in Azure DevOps.\nYou need to prevent the configuration of the project from changing over time.\nSolution: Perform a Subscription Health scan when packages are created.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 93,
    number: 18,
    topic: "Topic 3",
    prompt: "Your company uses the following resources:\n✑ Windows Server 2019 container images hosted in an Azure Container Registry.\n✑ Azure virtual machines that run the latest version of Ubuntu\n✑ An Azure Log Analytics workspace\n✑ Azure Active Directory (Azure AD)\n✑ An Azure key vault\nFor which two resources can you receive vulnerability assessments in Azure Security Center? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: C. the Azure virtual machines that run the latest version of Ubuntu E. The Windows Server 2019 container images hosted in the Azure Container",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "the Azure Log Analytics workspace"
      },
      {
        id: "B",
        text: "the Azure key vault"
      },
      {
        id: "C",
        text: "the Azure virtual machines that run the latest version of Ubuntu"
      },
      {
        id: "D",
        text: "Azure Active Directory (Azure AD)"
      },
      {
        id: "E",
        text: "The Windows Server 2019 container images hosted in the Azure Container Registry."
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 94,
    number: 19,
    topic: "Topic 3",
    prompt: "You use Azure Pipelines to manage build pipelines, GitHub to store source code, and Dependabot to manage dependencies.\nYou have an app named App1.\nDependabot detects a dependency in App1 that requires an update.\nWhat should you do first to apply the update?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a pull request."
      },
      {
        id: "B",
        text: "Approve the pull request."
      },
      {
        id: "C",
        text: "Create a branch."
      },
      {
        id: "D",
        text: "Perform a commit. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 95,
    number: 20,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a project in Azure DevOps.\nYou need to prevent the configuration of the project from changing over time.\nSolution: Add a code coverage step to the build pipelines.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 96,
    number: 21,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a project in Azure DevOps.\nYou need to prevent the configuration of the project from changing over time.\nSolution: Implement Continuous Integration for the project.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 97,
    number: 22,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a project in Azure DevOps.\nYou need to prevent the configuration of the project from changing over time.\nSolution: Implement Continuous Assurance for the project.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A: Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 98,
    number: 23,
    topic: "Topic 3",
    prompt: "You are designing a configuration management solution to support five apps hosted on Azure App Service. Each app is available in the following\nthree environments: development, test, and production.\nYou need to recommend a configuration management solution that meets the following requirements:\n✑ Supports feature fiags\n✑ Tracks configuration changes from the past 30 days\n✑ Stores hierarchically structured configuration values\n✑ Controls access to the configurations by using role-based access control (RBAC) permissions\n✑ Stores shared values as key/value pairs that can be used by all the apps\nWhich Azure service should you recommend as the configuration management solution?",
    keySource: "source",
    explanation: "Source answer: C. Azure App Configuration",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Cosmos DB"
      },
      {
        id: "B",
        text: "Azure App Service"
      },
      {
        id: "C",
        text: "Azure App Configuration"
      },
      {
        id: "D",
        text: "Azure Key Vault"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 99,
    number: 24,
    topic: "Topic 3",
    prompt: "You have a containerized solution that runs in Azure Container Instances. The solution contains a frontend container named App1 and a backend\ncontainer named DB1. DB1 loads a large amount of data during startup.\nYou need to verify that DB1 can handle incoming requests before users can submit requests to App1.\nWhat should you configure?",
    keySource: "source",
    explanation: "Source answer: C. a readiness probe",
    type: "single",
    options: [
      {
        id: "A",
        text: "a liveness probe"
      },
      {
        id: "B",
        text: "a performance log"
      },
      {
        id: "C",
        text: "a readiness probe"
      },
      {
        id: "D",
        text: "an Azure Load Balancer health probe"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 100,
    number: 25,
    topic: "Topic 3",
    prompt: "You are designing a strategy to monitor the baseline metrics of Azure virtual machines that run Windows Server.\nYou need to collect detailed data about the processes running in the guest operating system.\nWhich two agents should you deploy? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: B. the Azure Log Analytics agent D. the Dependency agent",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "the Telegraf agent"
      },
      {
        id: "B",
        text: "the Azure Log Analytics agent"
      },
      {
        id: "C",
        text: "the Azure Network Watcher Agent for Windows"
      },
      {
        id: "D",
        text: "the Dependency agent "
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 101,
    number: 26,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou use Azure Pipelines to automate Continuous Integration/Continuous Deployment (CI/CD) for an Azure web app named WebApp1.\nYou configure an Azure Monitor alert that is triggered when WebApp1 generates an error.\nYou need to configure the alert to forward details of the error to a third-party system. The solution must minimize administrative effort.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create an Azure, Select the HTTP request trigger, Update the action group in Azure Monitor",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an Azure"
      },
      {
        id: "O2",
        text: "trigger."
      },
      {
        id: "O3",
        text: "Select the HTTP ©) ®)"
      },
      {
        id: "O4",
        text: "Select the HTTP request trigger"
      },
      {
        id: "O5",
        text: "Update the action group in Azure Monitor"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O4",
      "t3:O5"
    ]
  },
  {
    id: 102,
    number: 27,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps organization named Contoso and an Azure subscription. The subscription contains an Azure virtual machine scale set\nnamed VMSS1 that is configured for autoscaling.\nYou have a project in Azure DevOps named Project1. Project1 is used to build a web app named App1 and deploy App1 to VMSS1.\nYou need to ensure that an email alert is generated whenever VMSS1 scales in or out.\nSolution: From Azure DevOps, configure the Notifications settings for Project1.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 103,
    number: 28,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps organization named Contoso and an Azure subscription. The subscription contains an Azure virtual machine scale set\nnamed VMSS1 that is configured for autoscaling.\nYou have a project in Azure DevOps named Project1. Project1 is used to build a web app named App1 and deploy App1 to VMSS1.\nYou need to ensure that an email alert is generated whenever VMSS1 scales in or out.\nSolution: From Azure DevOps, configure the Service hooks settings for Project1.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 104,
    number: 29,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps organization named Contoso and an Azure subscription. The subscription contains an Azure virtual machine scale set\nnamed VMSS1 that is configured for autoscaling.\nYou have a project in Azure DevOps named Project1. Project1 is used to build a web app named App1 and deploy App1 to VMSS1.\nYou need to ensure that an email alert is generated whenever VMSS1 scales in or out.\nSolution: From Azure Monitor, create an action group.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 105,
    number: 30,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are using the Dependency Tracker extension in a project in Azure DevOps.\nYou generate a risk graph for the project.\nWhat should you use in the risk graph to identify the number of dependencies and the risk level of the project? To answer, drag the appropriate\nelements to the correct data points. Each element may be used once, more than once, or not at all. You may need to drag the split bar between\npanes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Link width, Link color",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "ll"
      },
      {
        id: "O2",
        text: "eT"
      },
      {
        id: "O3",
        text: "Link width"
      },
      {
        id: "O4",
        text: "Link color"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4"
    ]
  },
  {
    id: 106,
    number: 1,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains the resources shown in the following table.\nYou plan to create a linked service in DF1. The linked service will connect to SQL1 by using Microsoft SQL Server authentication. The password for\nthe SQL\nServer login will be stored -\nin KV1.\nYou need to configure DF1 to retrieve the password when the data factory connects to SQL1. The solution must use the principle of least privilege.\nHow should you configure DF1? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Secret, Access policy",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Secret"
      },
      {
        id: "O2",
        text: "Certificate"
      },
      {
        id: "O3",
        text: "Access policy"
      },
      {
        id: "O4",
        text: "Service endpoint policy"
      },
      {
        id: "O5",
        text: "Key"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O3"
    ]
  },
  {
    id: 107,
    number: 2,
    topic: "Topic 4",
    prompt: "You have several Azure Active Directory (Azure AD) accounts.\nYou need to ensure that users use multi-factor authentication (MFA) to access Azure apps from untrusted networks.\nWhat should you configure in Azure AD?",
    keySource: "source",
    explanation: "Source answer: D. conditional access",
    type: "single",
    options: [
      {
        id: "A",
        text: "access reviews"
      },
      {
        id: "B",
        text: "managed identities"
      },
      {
        id: "C",
        text: "entitlement management"
      },
      {
        id: "D",
        text: "conditional access "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 108,
    number: 3,
    topic: "Topic 4",
    prompt: "You plan to provision a self-hosted Linux agent.\nWhich authentication mechanism should you use to register the self-hosted agent?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "personal access token (PAT)"
      },
      {
        id: "B",
        text: "SSH key"
      },
      {
        id: "C",
        text: "Alternate credentials"
      },
      {
        id: "D",
        text: "certificate"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 109,
    number: 4,
    topic: "Topic 4",
    prompt: "You are building a Microsoft ASP.NET application that requires authentication.\nYou need to authenticate users by using Azure Active Directory (Azure AD).\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign an enterprise application to users and groups"
      },
      {
        id: "B",
        text: "Create an app registration in Azure AD"
      },
      {
        id: "C",
        text: "Configure the application to use a SAML endpoint"
      },
      {
        id: "D",
        text: "Create a new OAuth token from the application"
      },
      {
        id: "E",
        text: "Create a membership database in an Azure SQL database"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 110,
    number: 5,
    topic: "Topic 4",
    prompt: "You have an Azure DevOps organization named Contoso.\nYou need to recommend an authentication mechanism that meets the following requirements:\n✑ Supports authentication from Git\n✑ Minimizes the need to provide credentials during authentication\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: A. personal access tokens (PATs) in Azure DevOps",
    type: "single",
    options: [
      {
        id: "A",
        text: "personal access tokens (PATs) in Azure DevOps"
      },
      {
        id: "B",
        text: "Alternate credentials in Azure DevOps"
      },
      {
        id: "C",
        text: "user accounts in Azure Active Directory (Azure AD)"
      },
      {
        id: "D",
        text: "managed identities in Azure Active Directory (Azure AD) "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 111,
    number: 6,
    topic: "Topic 4",
    prompt: "You have an application that consists of several Azure App Service web apps and Azure functions.\nYou need to assess the security of the web apps and the functions.\nWhich Azure feature can you use to provide a recommendation for the security of the application?",
    keySource: "source",
    explanation: "Source answer: D. Compute & apps in Azure Security Center",
    type: "single",
    options: [
      {
        id: "A",
        text: "Security & Compliance in Azure Log Analytics"
      },
      {
        id: "B",
        text: "Resource health in Azure Service Health"
      },
      {
        id: "C",
        text: "Smart Detection in Azure Application Insights"
      },
      {
        id: "D",
        text: "Compute & apps in Azure Security Center"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 112,
    number: 7,
    topic: "Topic 4",
    prompt: "Your company has a project in Azure DevOps for a new web application.\nThe company identifies security as one of the highest priorities.\nYou need to recommend a solution to minimize the likelihood that infrastructure credentials will be leaked.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C. Add an Azure Key Vault task to the pipeline.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a Run Inline Azure PowerShell task to the pipeline."
      },
      {
        id: "B",
        text: "Add a PowerShell task to the pipeline and run Set-AzureKeyVaultSecret."
      },
      {
        id: "C",
        text: "Add an Azure Key Vault task to the pipeline."
      },
      {
        id: "D",
        text: "Add Azure Key Vault references to Azure Resource Manger templates."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 113,
    number: 8,
    topic: "Topic 4",
    prompt: "SIMULATION -\nYou need to ensure that an Azure web app named az400-123456789-main can retrieve secrets from an Azure key vault named az400-123456789-\nkv1 by using a system managed identity.\nThe solution must use the principle of least privilege.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "No extracted answer"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 114,
    number: 9,
    topic: "Topic 4",
    prompt: "You create a Microsoft ASP.NET Core application.\nYou plan to use Azure Key Vault to provide secrets to the application as configuration data.\nYou need to create a Key Vault access policy to assign secret permissions to the application. The solution must use the principle of least\nprivilege.\nWhich secret permissions should you use?",
    keySource: "source",
    explanation: "Source answer: B. Get only",
    type: "single",
    options: [
      {
        id: "A",
        text: "List only"
      },
      {
        id: "B",
        text: "Get only"
      },
      {
        id: "C",
        text: "Get and List "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 115,
    number: 10,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYour company has a project in Azure DevOps.\nYou plan to create a release pipeline that will deploy resources by using Azure Resource Manager templates. The templates will reference secrets\nstored in Azure\nKey Vault.\nYou need to recommend a solution for accessing the secrets stored in the key vault during deployments. The solution must use the principle of\nleast privilege.\nWhat should you include in the recommendation? To answer, drag the appropriate configurations to the correct targets. Each configuration may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: A Key Vault advanced access policy, RBAC",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "o> View the agent pool and agents of the organization."
      },
      {
        id: "O2",
        text: "o> Use a project agent pool when authoring build or release pipelines."
      },
      {
        id: "O3",
        text: "A Key Vault advanced access policy"
      },
      {
        id: "O4",
        text: "RBAC"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4"
    ]
  },
  {
    id: 116,
    number: 11,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou need to configure access to Azure DevOps agent pools to meet the following requirements:\n✑ Use a project agent pool when authoring build or release pipelines.\n✑ View the agent pool and agents of the organization.\n✑ Use the principle of least privilege.\nWhich role memberships are required for the Azure DevOps organization and the project? To answer, drag the appropriate role memberships to the\ncorrect targets. Each role membership may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll\nto view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Reader, Service Account",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "o> View the agent pool and agents of the organization."
      },
      {
        id: "O2",
        text: "o> Use a project agent pool when authoring build or release pipelines."
      },
      {
        id: "O3",
        text: "Reader"
      },
      {
        id: "O4",
        text: "Service Account"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4"
    ]
  },
  {
    id: 117,
    number: 12,
    topic: "Topic 4",
    prompt: "You have a branch policy in a project in Azure DevOps. The policy requires that code always builds successfully.\nYou need to ensure that a specific user can always merge changes to the master branch, even if the code fails to compile. The solution must use\nthe principle of least privilege.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D. From the Security settings of the branch, modify the access control for the user.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add the user to the Build Administrators group."
      },
      {
        id: "B",
        text: "Add the user to the Project Administrators group."
      },
      {
        id: "C",
        text: "From the Security settings of the repository, modify the access control for the user."
      },
      {
        id: "D",
        text: "From the Security settings of the branch, modify the access control for the user."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 118,
    number: 13,
    topic: "Topic 4",
    prompt: "You have an Azure Resource Manager template that deploys a multi-tier application.\nYou need to prevent the user who performs the deployment from viewing the account credentials and connection strings used by the application.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A. Azure Key Vault",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Key Vault"
      },
      {
        id: "B",
        text: "a Web.config file"
      },
      {
        id: "C",
        text: "an Appsettings.json file"
      },
      {
        id: "D",
        text: "an Azure Storage table"
      },
      {
        id: "E",
        text: "an Azure Resource Manager parameter file"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 119,
    number: 14,
    topic: "Topic 4",
    prompt: "SIMULATION -\nYour company plans to implement a new compliance strategy that will require all Azure web apps to be backed up every five hours.\nYou need to back up an Azure web app named az400-123456789-main every five hours to an Azure Storage account in your resource group.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "No extracted answer"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 120,
    number: 15,
    topic: "Topic 4",
    prompt: "SIMULATION -\nYou need to configure a virtual machine named VM1 to securely access stored secrets in an Azure Key Vault named az400-123456789-kv.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "No extracted answer"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 121,
    number: 16,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYour company has an Azure subscription named Subscription1. Subscription1 is associated to an Azure Active Directory tenant named\ncontoso.com.\nYou need to provision an Azure Kubernetes Services (AKS) cluster in Subscription1 and set the permissions for the cluster by using RBAC roles\nthat reference the identities in contoso.com.\nWhich three objects should you create in sequence? To answer, move the appropriate objects from the list of objects to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: a clusterm a system-assigned managed identity, an RBAC binding",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Grant authorization"
      },
      {
        id: "O2",
        text: "Azure Resource Manager"
      },
      {
        id: "O3",
        text: "Azure Active Directory OAuth 2.0"
      },
      {
        id: "O4",
        text: "Objects"
      },
      {
        id: "O5",
        text: "an RBAC binding"
      },
      {
        id: "O6",
        text: "a clusterm a system-assigned managed identity"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O5",
      "t3:O5"
    ]
  },
  {
    id: 122,
    number: 17,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou manage build and release pipelines by using Azure DevOps. Your entire managed environment resides in Azure.\nYou need to configure a service endpoint for accessing Azure Key Vault secrets. The solution must meet the following requirements:\n✑ Ensure that the secrets are retrieved by Azure DevOps.\n✑ Avoid persisting credentials and tokens in Azure DevOps.\nHow should you configure the service endpoint? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: Team Foundattion Server / Azure Pipelines service connection, Managed Service Identity Authentication",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Grant authorization"
      },
      {
        id: "O2",
        text: "Azure Resource Manager"
      },
      {
        id: "O3",
        text: "Azure Active Directory OAuth 2.0"
      },
      {
        id: "O4",
        text: "Objects"
      },
      {
        id: "O5",
        text: "an RBAC binding"
      },
      {
        id: "O6",
        text: "Team Foundattion Server / Azure Pipelines service connection"
      },
      {
        id: "O7",
        text: "Managed Service Identity Authentication"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7"
    ]
  },
  {
    id: 123,
    number: 18,
    topic: "Topic 4",
    prompt: "You are deploying a server application that will run on a Server Core installation of Windows Server 2019.\nYou create an Azure key vault and a secret.\nYou need to use the key vault to secure API secrets for third-party integrations.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Configure RBAC for the key vault."
      },
      {
        id: "B",
        text: "Modify the application to access the key vault."
      },
      {
        id: "C",
        text: "Configure a Key Vault access policy."
      },
      {
        id: "D",
        text: "Deploy an Azure Desired State Configuration (DSC) extension."
      },
      {
        id: "E",
        text: "Deploy a virtual machine that uses a system-assigned managed identity."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 124,
    number: 19,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYour company is creating a suite of three mobile applications.\nYou need to control access to the application builds. The solution must be managed at the organization level.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Microsoft Visual Studio App Center distribution groups, shared",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Create an XAML build service."
      },
      {
        id: "O2",
        text: "Create a variable group in Project1."
      },
      {
        id: "O3",
        text: "Group type: v"
      },
      {
        id: "O4",
        text: "Azure Active Directory groups"
      },
      {
        id: "O5",
        text: "Groups to control the build access: v"
      },
      {
        id: "O6",
        text: "Public"
      },
      {
        id: "O7",
        text: "Shared"
      },
      {
        id: "O8",
        text: "Private"
      },
      {
        id: "O9",
        text: "Configure the security policy of Contoso."
      },
      {
        id: "O10",
        text: "Microsoft Visual Studio App Center distribution groups"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O10",
      "t2:O7"
    ]
  },
  {
    id: 125,
    number: 20,
    topic: "Topic 4",
    prompt: "You have an Azure DevOps organization named Contoso that contains a project named Project1.\nYou provision an Azure key vault named Keyvault1.\nYou need to reference Keyvault1 secrets in a build pipeline of Project1.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a secure file to Project1."
      },
      {
        id: "B",
        text: "Create an XAML build service."
      },
      {
        id: "C",
        text: "Create a variable group in Project1."
      },
      {
        id: "D",
        text: "Configure the security policy of Contoso. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 126,
    number: 21,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have a tenant in Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra. The tenant contains three groups named Group1,\nGroup2, and Group3.\nYou create a new project in Azure DevOps named Project1.\nYou need to secure the service connections for Project1. The solution must meet the following requirements:\n• The members of Group1 must be able to share and unshare a service connection with other projects.\n• The members of Group2 must be able to rename a service connection and update the description.\n• The members of Group3 must be able to use the service connection within build or release pipelines.\n• The principle of least privilege must be followed.\nWhich permission should you grant to each group? To answer, drag the appropriate permissions to the correct groups. Each permission may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: organization-level Administration, Creator, User",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Group2, and Group3."
      },
      {
        id: "O2",
        text: "Creator"
      },
      {
        id: "O3",
        text: "Contributor"
      },
      {
        id: "O4",
        text: "You create a new project in Azure DevOps named Project."
      },
      {
        id: "O5",
        text: "organization-level Administration"
      },
      {
        id: "O6",
        text: "User"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O2",
      "t3:O6"
    ]
  },
  {
    id: 127,
    number: 22,
    topic: "Topic 4",
    prompt: "You have the following Azure policy.\nYou assign the policy to the Tenant root group.\nWhat is the effect of the policy?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "prevents all HTTP trafic to existing Azure Storage accounts"
      },
      {
        id: "B",
        text: "ensures that all trafic to new Azure Storage accounts is encrypted"
      },
      {
        id: "C",
        text: "prevents HTTPS trafic to new Azure Storage accounts when the accounts are accessed over the Internet"
      },
      {
        id: "D",
        text: "ensures that all data for new Azure Storage accounts is encrypted at rest"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 128,
    number: 23,
    topic: "Topic 4",
    prompt: "You have an Azure DevOps organization named Contoso, an Azure DevOps project named Project1, an Azure subscription named Sub1, and an\nAzure key vault named vault1.\nYou need to ensure that you can reference the values of the secrets stored in vault1 in all the pipelines of Project1. The solution must prevent the\nvalues from being stored in the pipelines.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a variable group in Project1."
      },
      {
        id: "B",
        text: "Add a secure file to Project1."
      },
      {
        id: "C",
        text: "Modify the security settings of the pipelines."
      },
      {
        id: "D",
        text: "Configure the security policy of Contoso. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 129,
    number: 24,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou use GitHub Enterprise Server as a source code repository.\nYou create an Azure DevOps organization named Contoso.\nIn the Contoso organization, you create a project named Project1.\nYou need to link GitHub commits, pull requests, and issues to the work items of Project1. The solution must use OAuth-based authentication.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: From Developer settings in Github Enterprise Server, register a new OAuth app, From Organisation settings in Azure DevOps, add an Oauith configuration, From Project Seetings in Azure DevOps, add a GitHub connection",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "pipeline."
      },
      {
        id: "O2",
        text: "From Project Settings in Azure DevOps, create a service hook"
      },
      {
        id: "O3",
        text: "Create a service principal in Azure Active Directory (Azure AD)."
      },
      {
        id: "O4",
        text: "From Organization settings in Azure DevOps, add an OAuth"
      },
      {
        id: "O5",
        text: "From Organization settings in Azure DevOps, connect to Azure"
      },
      {
        id: "O6",
        text: "From Developer settings in GitHub Enterprise Server, register"
      },
      {
        id: "O7",
        text: "From Developer settings in GitHub Enterprise Server, generate"
      },
      {
        id: "O8",
        text: "connection."
      },
      {
        id: "O9",
        text: "subscription."
      },
      {
        id: "O10",
        text: "configuration."
      },
      {
        id: "O11",
        text: "From Project Settings in Azure DevOps, add a GitHub (©) ©"
      },
      {
        id: "O12",
        text: "Configure an access policy in the key vault. ® ®"
      },
      {
        id: "O13",
        text: "From Developer settings in Github Enterprise Server"
      },
      {
        id: "O14",
        text: "register a new OAuth app"
      },
      {
        id: "O15",
        text: "From Organisation settings in Azure DevOps"
      },
      {
        id: "O16",
        text: "add an Oauith configuration"
      },
      {
        id: "O17",
        text: "From Project Seetings in Azure DevOps"
      },
      {
        id: "O18",
        text: "add a GitHub connection"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      },
      {
        id: "t6",
        text: "Blank 6"
      }
    ],
    correct: [
      "t1:O13",
      "t2:O14",
      "t3:O15",
      "t4:O16",
      "t5:O17",
      "t6:O18"
    ]
  },
  {
    id: 130,
    number: 25,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are configuring an Azure DevOps deployment pipeline. The deployed application will authenticate to a web service by using a secret stored in\nan Azure key vault.\nYou need to use the secret in the deployment pipeline.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Create a service principal in Azure Active Directory (Azure AD), Configure an access policy in the key vault., Add an azure Resource Manager service connection to the pipeline",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "pipeline."
      },
      {
        id: "O2",
        text: "From Project Settings in Azure DevOps, create a service hook"
      },
      {
        id: "O3",
        text: "Create a service principal in Azure Active Directory (Azure AD)."
      },
      {
        id: "O4",
        text: "From Organization settings in Azure DevOps, add an OAuth"
      },
      {
        id: "O5",
        text: "From Organization settings in Azure DevOps, connect to Azure"
      },
      {
        id: "O6",
        text: "From Developer settings in GitHub Enterprise Server, register"
      },
      {
        id: "O7",
        text: "From Developer settings in GitHub Enterprise Server, generate"
      },
      {
        id: "O8",
        text: "connection."
      },
      {
        id: "O9",
        text: "subscription."
      },
      {
        id: "O10",
        text: "configuration."
      },
      {
        id: "O11",
        text: "From Project Settings in Azure DevOps, add a GitHub (©) ©"
      },
      {
        id: "O12",
        text: "Configure an access policy in the key vault. ® ®"
      },
      {
        id: "O13",
        text: "Create a service principal in Azure Active Directory (Azure AD)"
      },
      {
        id: "O14",
        text: "Configure an access policy in the key vault."
      },
      {
        id: "O15",
        text: "Add an azure Resource Manager service connection to the pipeline"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O13",
      "t2:O14",
      "t3:O15"
    ]
  },
  {
    id: 131,
    number: 26,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have a private project in Azure DevOps and two users named User1 and User2.\nYou need to add User1 and User2 to groups to meet the following requirements:\n✑ User1 must be able to create a code wiki.\n✑ User2 must be able to edit wiki pages.\n✑ The solution must use the principle of least privilege.\nTo which group should you add each user? To answer, drag the appropriate groups to the correct users. Each group may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: User1: Project Administrators, User2: Contributors",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Groups Answer Area"
      },
      {
        id: "O2",
        text: "Stakeholders"
      },
      {
        id: "O3",
        text: "of a production deployment."
      },
      {
        id: "O4",
        text: "Build Administrators Userl: rT]"
      },
      {
        id: "O5",
        text: "Modify the devDependencies section of the project's Package json file."
      },
      {
        id: "O6",
        text: "User1: Project Administrators"
      },
      {
        id: "O7",
        text: "User2: Contributors"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7"
    ]
  },
  {
    id: 132,
    number: 27,
    topic: "Topic 4",
    prompt: "You use WhiteSource Bolt to scan a Node.js application.\nThe WhiteSource Bolt scan identifies numerous libraries that have invalid licenses. The libraries are used only during development and are not part\nof a production deployment.\nYou need to ensure that WhiteSource Bolt only scans production dependencies.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AD",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Run npm install and specify the --production fiag."
      },
      {
        id: "B",
        text: "Modify the WhiteSource Bolt policy and set the action for the licenses used by the development tools to Reassign."
      },
      {
        id: "C",
        text: "Modify the devDependencies section of the project's Package.json file."
      },
      {
        id: "D",
        text: "Configure WhiteSource Bolt to scan the node_modules directory only. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 133,
    number: 28,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to update the Azure DevOps strategy of your company.\nYou need to identify the following issues as they occur during the company's development process:\n✑ Licensing violations\n✑ Prohibited libraries\nSolution: You implement continuous integration.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B: No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 134,
    number: 29,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to update the Azure DevOps strategy of your company.\nYou need to identify the following issues as they occur during the company's development process:\n✑ Licensing violations\n✑ Prohibited libraries\nSolution: You implement pre-deployment gates.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 135,
    number: 30,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to update the Azure DevOps strategy of your company.\nYou need to identify the following issues as they occur during the company's development process:\n✑ Licensing violations\n✑ Prohibited libraries\nSolution: You implement automated security testing.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 136,
    number: 31,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to update the Azure DevOps strategy of your company.\nYou need to identify the following issues as they occur during the company's development process:\n✑ Licensing violations\n✑ Prohibited libraries\nSolution: You implement continuous deployment.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 137,
    number: 32,
    topic: "Topic 4",
    prompt: "SIMULATION -\nYou manage a website that uses an Azure SQL Database named db1 in a resource group named RG1lod11566895.\nYou need to modify the SQL database to protect against SQL injection.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "No extracted answer"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 138,
    number: 33,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYour company has an Azure subscription.\nThe company requires that all resource groups in the subscription have a tag named organization set to a value of Contoso.\nYou need to implement a policy to meet the tagging requirement.\nHow should you complete the policy? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: MicrosoftResources/subscriptions/resourceGroups, Deny",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Create a conditional access policy in Azure AD."
      },
      {
        id: "O2",
        text: "Create an Azure Active Directory B2C (Azure AD B2C) tenant."
      },
      {
        id: "O3",
        text: "equals"
      },
      {
        id: "O4",
        text: "Contoso"
      },
      {
        id: "O5",
        text: "details"
      },
      {
        id: "O6",
        text: "policyRule"
      },
      {
        id: "O7",
        text: "ba"
      },
      {
        id: "O8",
        text: "not"
      },
      {
        id: "O9",
        text: "ro."
      },
      {
        id: "O10",
        text: "type"
      },
      {
        id: "O11",
        text: "then"
      },
      {
        id: "O12",
        text: "field"
      },
      {
        id: "O13",
        text: "MicrosoftResources/subscriptions/resourceGroups"
      },
      {
        id: "O14",
        text: "Deny"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O13",
      "t2:O14"
    ]
  },
  {
    id: 139,
    number: 34,
    topic: "Topic 4",
    prompt: "You need to configure GitHub to use Azure Active Directory (Azure AD) for authentication.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: B. Register GitHub in Azure AD.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a conditional access policy in Azure AD."
      },
      {
        id: "B",
        text: "Register GitHub in Azure AD."
      },
      {
        id: "C",
        text: "Create an Azure Active Directory B2C (Azure AD B2C) tenant."
      },
      {
        id: "D",
        text: "Modify the Security settings of the GitHub organization. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 140,
    number: 35,
    topic: "Topic 4",
    prompt: "You have an Azure DevOps project named Project1 and an Azure subscription named Sub1.\nYou need to prevent releases from being deployed unless the releases comply with the Azure Policy rules assigned to Sub1.\nWhat should you do in the release pipeline of Project1?",
    keySource: "source",
    explanation: "Source answer: A. Add a deployment gate.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a deployment gate."
      },
      {
        id: "B",
        text: "Modify the Deployment queue settings."
      },
      {
        id: "C",
        text: "Configure a deployment trigger."
      },
      {
        id: "D",
        text: "Create a pipeline variable."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 141,
    number: 36,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have an Azure Kubernetes Service (AKS) implementation that is RBAC-enabled.\nYou plan to use Azure Container Instances as a hosted development environment to run containers in the AKS implementation.\nYou need to configure Azure Container Instances as a hosted environment for running the containers in AKS.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create a YAML file, Run kubectl apply, Run helm init",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a YAML file. ® @"
      },
      {
        id: "O2",
        text: "Ansible"
      },
      {
        id: "O3",
        text: "Helm"
      },
      {
        id: "O4",
        text: "Maven"
      },
      {
        id: "O5",
        text: "Create a YAML file"
      },
      {
        id: "O6",
        text: "Run kubectl apply"
      },
      {
        id: "O7",
        text: "Run helm init"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7"
    ]
  },
  {
    id: 142,
    number: 37,
    topic: "Topic 4",
    prompt: "You have an Azure DevOps project that contains a build pipeline. The build pipeline uses approximately 50 open source libraries.\nYou need to ensure that all the open source libraries comply with your company's licensing standards.\nWhich service should you use?",
    keySource: "source",
    explanation: "Source answer: C. WhiteSource Bolt",
    type: "single",
    options: [
      {
        id: "A",
        text: "Ansible"
      },
      {
        id: "B",
        text: "Maven"
      },
      {
        id: "C",
        text: "WhiteSource Bolt"
      },
      {
        id: "D",
        text: "Helm "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 143,
    number: 38,
    topic: "Topic 4",
    prompt: "You are designing the security validation strategy for a project in Azure DevOps.\nYou need to identify package dependencies that have known security issues and can be resolved by an update.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: D. SonarQube",
    type: "single",
    options: [
      {
        id: "A",
        text: "Octopus Deploy"
      },
      {
        id: "B",
        text: "Jenkins"
      },
      {
        id: "C",
        text: "Gradle"
      },
      {
        id: "D",
        text: "SonarQube"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 144,
    number: 39,
    topic: "Topic 4",
    prompt: "You administer an Azure DevOps project that includes package feeds.\nYou need to ensure that developers can unlist and deprecate packages. The solution must use the principle of least privilege.\nWhich access level should you grant to the developers?",
    keySource: "source",
    explanation: "Source answer: B. Contributor",
    type: "single",
    options: [
      {
        id: "A",
        text: "Collaborator"
      },
      {
        id: "B",
        text: "Contributor"
      },
      {
        id: "C",
        text: "Owner "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 145,
    number: 40,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have a project in Azure DevOps that has three teams as shown in the Teams exhibit. (Click the Teams tab.)\nYou create a new dashboard named Dash1.\nYou configure the dashboard permissions for the Contoso project as shown in the Permissions exhibit. (Click the Permissions tab.)\nAll other permissions have the default values set.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: No, Yes, Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 146,
    number: 41,
    topic: "Topic 4",
    prompt: "Your company is concerned that when developers introduce open source libraries, it creates licensing compliance issues.\nYou need to add an automated process to the build pipeline to detect when common open source libraries are added to the code base.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: C: Black Duck",
    type: "single",
    options: [
      {
        id: "A",
        text: "Microsoft Visual SourceSafe"
      },
      {
        id: "B",
        text: "Code Style"
      },
      {
        id: "C",
        text: "Black Duck"
      },
      {
        id: "D",
        text: "Jenkins"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 147,
    number: 42,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are implementing a package management solution for a Node.js application by using Azure Artifacts.\nYou need to configure the development environment to connect to the package repository. The solution must minimize the likelihood that\ncredentials will be leaked.\nWhich file should you use to configure each connection? To answer, drag the appropriate files to the correct connections. Each file may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: The .npmrc file in the project, The .npmrc file in the user’s home folder",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "The Project.json file in the project"
      },
      {
        id: "O2",
        text: "Files"
      },
      {
        id: "O3",
        text: "The .npmrc file in the project"
      },
      {
        id: "O4",
        text: "The .npmrc file in the user’s home folder"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4"
    ]
  },
  {
    id: 148,
    number: 43,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have an Azure DevOps project that contains a build pipeline. The build pipeline uses approximately 50 open source libraries.\nYou need to ensure that the project can be scanned for known security vulnerabilities in the open source libraries.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: a build task, WhiteSource Bolt",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Helm"
      },
      {
        id: "O2",
        text: "NuGet"
      },
      {
        id: "O3",
        text: "Maven"
      },
      {
        id: "O4",
        text: "Object to create: | lw"
      },
      {
        id: "O5",
        text: "a build task"
      },
      {
        id: "O6",
        text: "WhiteSource Bolt"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6"
    ]
  },
  {
    id: 149,
    number: 44,
    topic: "Topic 4",
    prompt: "You have an Azure DevOps project that contains a build pipeline. The build pipeline uses approximately 50 open source libraries.\nYou need to ensure that all the open source libraries comply with your company's licensing standards.\nWhich service should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "NuGet"
      },
      {
        id: "B",
        text: "Maven"
      },
      {
        id: "C",
        text: "Black Duck"
      },
      {
        id: "D",
        text: "Helm "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 150,
    number: 45,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou plan to use Azure Kubernetes Service (AKS) to host containers deployed from images hosted in a Docker Trusted Registry.\nYou need to recommend a solution for provisioning and connecting to AKS. The solution must ensure that AKS is RBAC-enabled and uses a\ncustom service principal.\nWhich three commands should you recommend be run in sequence? To answer, move the appropriate commands from the list of commands to\nthe answer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: az aks create, az ad sp create-for-rbac, kubectl create",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "kubectl create"
      },
      {
        id: "O2",
        text: "az ad sp create-for-rbac"
      },
      {
        id: "O3",
        text: "az role assignment create"
      },
      {
        id: "O4",
        text: "az aks get-credentials"
      },
      {
        id: "O5",
        text: "C..p12"
      },
      {
        id: "O6",
        text: "You plan to distribute a new release of the app."
      },
      {
        id: "O7",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O8",
        text: "cer"
      },
      {
        id: "O9",
        text: "az aks create"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O9",
      "t2:O2",
      "t3:O1"
    ]
  },
  {
    id: 151,
    number: 46,
    topic: "Topic 4",
    prompt: "Your company develops an app for iOS. All users of the app have devices that are members of a private distribution group in Microsoft Visual\nStudio App Center.\nYou plan to distribute a new release of the app.\nYou need to identify which certificate file you require to distribute the new release from App Center.\nWhich file type should you upload to App Center?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: ".cer"
      },
      {
        id: "B",
        text: ".pfx"
      },
      {
        id: "C",
        text: ".p12"
      },
      {
        id: "D",
        text: ".pvk"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 152,
    number: 47,
    topic: "Topic 4",
    prompt: "SIMULATION -\nYou need to prepare a network security group (NSG) named az400-123456789-nsg1 to host an Azure DevOps pipeline agent. The solution must\nallow only the required outbound port for Azure DevOps and deny all other inbound and outbound access to the Internet.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: 1. Open Microsoft Azure Portal and Log into your Azure account.2. Select network security group (NSG) named az400-123456789-nsg13. Select Settings, Outbound security rules, and click Add4. Click Advanced5. Change the following settings:✑ Destination Port range: 8080✑ Protocol. TCP✑ Action: AllowNote: By default, Azure DevOps Server uses TCP Port 8080.",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. Open Microsoft Azure Portal and Log into your Azure account.2. Select network security group (NSG) named az400-123456789-nsg13. Select Settings, Outbound security rules, and click Add4. Click Advanced5. Change the following settings:✑ Destination Port range: 8080✑ Protocol. TCP✑ Action: AllowNote: By default, Azure DevOps Server uses TCP Port 8080."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 153,
    number: 48,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have a project in Azure DevOps named Project1 that contains two Azure DevOps pipelines named Pipeline1 and Pipeline2.\nYou need to ensure that Pipeline1 can deploy code successfully to an Azure web app named webapp1. The solution must ensure that Pipeline2\ndoes not have permission to webapp1.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create a service principal in Azure Active Directory, In Project1, create a service connection, In project1, configure permissions",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a service principal in Azure"
      },
      {
        id: "O2",
        text: "Create a system-assigned managed ©) ©"
      },
      {
        id: "O3",
        text: "connection."
      },
      {
        id: "O4",
        text: "In Project, create a service"
      },
      {
        id: "O5",
        text: "In Pipeline, create a variable."
      },
      {
        id: "O6",
        text: "In Pipeline, authorize the service"
      },
      {
        id: "O7",
        text: "Create a service principal in Azure Active Directory"
      },
      {
        id: "O8",
        text: "In Project1"
      },
      {
        id: "O9",
        text: "create a service connection"
      },
      {
        id: "O10",
        text: "configure permissions"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9",
      "t4:O8",
      "t5:O10"
    ]
  },
  {
    id: 154,
    number: 49,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou need to increase the security of your team's development process.\nWhich type of security tool should you recommend for each stage of the development process? To answer, drag the appropriate security tools to\nthe correct stages. Each security tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll\nto view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: threat modeling, Static code analysis, Penetration testing",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a service principal in Azure"
      },
      {
        id: "O2",
        text: "Create a system-assigned managed ©) ©"
      },
      {
        id: "O3",
        text: "connection."
      },
      {
        id: "O4",
        text: "In Project, create a service"
      },
      {
        id: "O5",
        text: "In Pipeline, create a variable."
      },
      {
        id: "O6",
        text: "In Pipeline, authorize the service"
      },
      {
        id: "O7",
        text: "threat modeling"
      },
      {
        id: "O8",
        text: "Static code analysis"
      },
      {
        id: "O9",
        text: "Penetration testing"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9"
    ]
  },
  {
    id: 155,
    number: 50,
    topic: "Topic 4",
    prompt: "Your company is concerned that when developers introduce open source libraries, it creates licensing compliance issues.\nYou need to add an automated process to the build pipeline to detect when common open source libraries are added to the code base.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "OWASP ZAP"
      },
      {
        id: "B",
        text: "Jenkins"
      },
      {
        id: "C",
        text: "Code Style"
      },
      {
        id: "D",
        text: "WhiteSource Bolt"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 156,
    number: 51,
    topic: "Topic 4",
    prompt: "You plan to use a NuGet package in a project in Azure DevOps. The NuGet package is in a feed that requires authentication.\nYou need to ensure that the project can restore the NuGet package automatically.\nWhat should the project use to automate the authentication?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Automation account"
      },
      {
        id: "B",
        text: "an Azure Artifacts Credential Provider"
      },
      {
        id: "C",
        text: "an Azure Active Directory (Azure AD) account that has multi-factor authentication (MFA) enabled"
      },
      {
        id: "D",
        text: "an Azure Active Directory (Azure AD) service principal"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 157,
    number: 52,
    topic: "Topic 4",
    prompt: "You use Azure Pipelines to manage project builds and deployments.\nYou plan to use Azure Pipelines for Microsoft Teams to notify the legal team when a new build is ready for release.\nYou need to configure the Organization Settings in Azure DevOps to support Azure Pipelines for Microsoft Teams.\nWhat should you turn on?",
    keySource: "source",
    explanation: "Source answer: Antwort A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Third-party application access via OAuth"
      },
      {
        id: "B",
        text: "Azure Active Directory Conditional Access Policy Validation"
      },
      {
        id: "C",
        text: "Alternate authentication credentials"
      },
      {
        id: "D",
        text: "SSH authentication"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 158,
    number: 53,
    topic: "Topic 4",
    prompt: "You have an existing project in Azure DevOps.\nYou plan to integrate GitHub as the repository for the project.\nYou need to ensure that Azure Pipelines runs under the Azure Pipelines identity.\nWhich authentication mechanism should you use?",
    keySource: "source",
    explanation: "Source answer: Antwort B",
    type: "single",
    options: [
      {
        id: "A",
        text: "personal access token (PAT)"
      },
      {
        id: "B",
        text: "GitHub App"
      },
      {
        id: "C",
        text: "Azure Active Directory (Azure AD)"
      },
      {
        id: "D",
        text: "OAuth "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 159,
    number: 54,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have an Azure subscription that uses Azure Monitor and contains a Log Analytics workspace.\nYou have an encryption key.\nYou need to configure Azure Monitor to use the key to encrypt log data.\nWhich five actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Antwort Create an Azure key vault and store the key, Create an Azure Monitor logs dedicated cluster that has a system-assigned managed identity, Grant the system-assigned managed identity key permissions for the key vault, Configure the key vault properties for the cluster, Link the Log Analytics workspace to the cluster",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a Log Analytics cluster."
      },
      {
        id: "O2",
        text: "Create an Azure key vault and store the key"
      },
      {
        id: "O3",
        text: "Create an Azure Monitor Logs dedicated cluster that"
      },
      {
        id: "O4",
        text: "Enable soft delete for the key vault."
      },
      {
        id: "O5",
        text: "Grant the system-assigned managed identity"
      },
      {
        id: "O6",
        text: "Grant the system-assigned managed identity Key"
      },
      {
        id: "O7",
        text: "Grant permissions to the key vault. © ®"
      },
      {
        id: "O8",
        text: "Antwort Create an Azure key vault and store the key"
      },
      {
        id: "O9",
        text: "Create an Azure Monitor logs dedicated cluster that has a system-assigned managed identity"
      },
      {
        id: "O10",
        text: "Grant the system-assigned managed identity key permissions for the key vault"
      },
      {
        id: "O11",
        text: "Configure the key vault properties for the cluster"
      },
      {
        id: "O12",
        text: "Link the Log Analytics workspace to the cluster"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9",
      "t3:O10",
      "t4:O11",
      "t5:O12"
    ]
  },
  {
    id: 160,
    number: 55,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have an Azure Key Vault that contains an encryption key named key1.\nYou plan to create a Log Analytics workspace that will store logging data.\nYou need to encrypt the workspace by using key1.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Antwort Enable soft delete for the key Vault, Create a Log Analytics cluster, Frant permissions to the key vault, Link the workspace",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a Log Analytics cluster."
      },
      {
        id: "O2",
        text: "Create an Azure key vault and store the key"
      },
      {
        id: "O3",
        text: "Create an Azure Monitor Logs dedicated cluster that"
      },
      {
        id: "O4",
        text: "Enable soft delete for the key vault."
      },
      {
        id: "O5",
        text: "Grant the system-assigned managed identity"
      },
      {
        id: "O6",
        text: "Grant the system-assigned managed identity Key"
      },
      {
        id: "O7",
        text: "Grant permissions to the key vault. © ®"
      },
      {
        id: "O8",
        text: "Antwort Enable soft delete for the key Vault"
      },
      {
        id: "O9",
        text: "Create a Log Analytics cluster"
      },
      {
        id: "O10",
        text: "Frant permissions to the key vault"
      },
      {
        id: "O11",
        text: "Link the workspace"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9",
      "t3:O10",
      "t4:O11"
    ]
  },
  {
    id: 161,
    number: 56,
    topic: "Topic 4",
    prompt: "You use release pipelines in Azure Pipelines to deploy an app. Secrets required be the pipeline are stored as pipeline variables. Logging of\ncommands is enabled for the Azure Pipelines agent.\nYou need to prevent the values of the secrets from being logged.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Store the secrets in the environment variables instead of the pipeline variables."
      },
      {
        id: "B",
        text: "Pass the secrets on the command line instead of in the pipeline variables."
      },
      {
        id: "C",
        text: "Apply a prefix of secret to the name of the variables."
      },
      {
        id: "D",
        text: "Echo the values of the secrets to the command line."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 162,
    number: 57,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou need to deploy a new project in Azure DevOps that has the following requirements:\n* The lead developer must be able to create repositories, manage permissions, manage policies, and contribute to the repository.\n* Developers must be able to contribute to the repository and create branches, but NOT bypass policies when pushing builds.\n* Project managers must only be able to view the repository.\n* The principle of least privilege must be used.\nYou create a new Azure DevOps project team for each role.\nTo which Azure DevOps groups should you add each team? To answer, drag the appropriate groups to the correct teams. Each group may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Readers. Project Administartions, Contributors",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure DevOps groups Answer Area"
      },
      {
        id: "O2",
        text: "Readers. Project Administartions"
      },
      {
        id: "O3",
        text: "Contributors"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 163,
    number: 58,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have an Azure subscription that contains a project in Azure DevOps named Project1. You have three Azure Active Directory (Azure AD) users\nthat require access to Project1 as shown in the following table.\nYou need to ensure that the users have the appropriate permissions. The solution must use the principle of least privilege.\nTo which permission group in Azure DevOps should you add each user? To answer, drag the appropriate permission groups to the correct users.\nEach permission group may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view\ncontent.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Readers, Project Administrators, Contributors",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "User2 Development Lead Create repositories and"
      },
      {
        id: "O2",
        text: "User2:"
      },
      {
        id: "O3",
        text: "User3:"
      },
      {
        id: "O4",
        text: "Readers"
      },
      {
        id: "O5",
        text: "content."
      },
      {
        id: "O6",
        text: "Contributors"
      },
      {
        id: "O7",
        text: "* Requires approval to activate privileged access"
      },
      {
        id: "O8",
        text: "Project Administrators"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O8",
      "t3:O6"
    ]
  },
  {
    id: 164,
    number: 59,
    topic: "Topic 4",
    prompt: "You have an Azure subscription linked to an Azure Active Directory Premium Plan 1 tenant.\nA security review indicates that too many users have privileged access to resources.\nYou need to deploy a privileged access management solution that meets the following requirements:\n• Enforces time limits on the use of privileged access\n• Requires approval to activate privileged access\n• Minimizes costs\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure notifications when privileged roles are activated."
      },
      {
        id: "B",
        text: "Configure alerts for the activation of privileged roles."
      },
      {
        id: "C",
        text: "Enforce Azure Multi-Factor Authentication (MFA) for role activation."
      },
      {
        id: "D",
        text: "Upgrade the license of the Azure Active Directory (Azure AD) tenant. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 165,
    number: 60,
    topic: "Topic 4",
    prompt: "You plan to create a GitHub workfiow that will use GitHub Actions. The actions will require a 256-KB secret.\nYou need to recommend a solution to store and encrypt the secret. The secret value must be accessible only to the workfiow. The solution must\nminimize administrative effort\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Store the secret in the organization-level GitHub secrets."
      },
      {
        id: "B",
        text: "Store the secret in the repository-level GitHub secrets."
      },
      {
        id: "C",
        text: "Encrypt the secret value and store the value in the repository. Store the decryption key in the repository-level GitHub secrets."
      },
      {
        id: "D",
        text: "Encrypt the secret value and store the value in the repository. Store the decryption key in the organization-level GitHub secrets."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 166,
    number: 61,
    topic: "Topic 4",
    prompt: "You have a GitHub Enterprise account.\nYou need to enable push protection for secret scanning of the account repositories.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Purchase a GitHub Advanced Security license."
      },
      {
        id: "B",
        text: "Purchase Premium Plus support."
      },
      {
        id: "C",
        text: "Enforce multi-factor authentication (MFA)."
      },
      {
        id: "D",
        text: "Create an access policy for secrets. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 167,
    number: 62,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYour company has a project in Azure DevOps named Project1.\nAll the developers at the company have Windows 10 devices.\nYou need to create a Git repository for Project1. The solution must meet the following requirements:\n• Support large binary files.\n• Store binary files outside of the repository.\n• Use a standard Git workfiow to maintain the metadata of the binary files by using commits to the repository.\nWhich three actions should you perform in sequence on each developer’s device? To answer, move the appropriate actions from the list of actions\nto the answer area and arrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Configure personal access token (PAT)- based authentication, Perform a custom installation of Git for Windows that includes Git Virtual File System (GVFS), Configure Git Large File Storage (LFS) file tracking",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "tracking."
      },
      {
        id: "O2",
        text: "authentication."
      },
      {
        id: "O3",
        text: "Configure Git Large File Storage (LFS) file"
      },
      {
        id: "O4",
        text: "that includes Git Large File Storage (LFS)."
      },
      {
        id: "O5",
        text: "Configure personal access token (PAT)- based authentication"
      },
      {
        id: "O6",
        text: "Perform a custom installation of Git for Windows that includes Git Virtual File System (GVFS)"
      },
      {
        id: "O7",
        text: "Configure Git Large File Storage (LFS) file tracking"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7"
    ]
  },
  {
    id: 168,
    number: 63,
    topic: "Topic 4",
    prompt: "Your company uses Azure DevOps and Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra.\nOnly users who have accounts in Azure AD can access the Azure DevOps environment.\nYou need to ensure that only devices that are connected to the on-premises network can access the Azure DevOps environment.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign the Stakeholder access level to all users."
      },
      {
        id: "B",
        text: "In Azure DevOps, configure Security in Project Settings."
      },
      {
        id: "C",
        text: "In Azure AD, configure conditional access."
      },
      {
        id: "D",
        text: "In Azure AD, configure risky sign-ins. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 169,
    number: 64,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains four Azure virtual machines.\nYou need to configure the virtual machines to use a single identity. The solution must meet the following requirements:\n• Ensure that the credentials for the identity are managed automatically.\n• Support granting privileges to the identity.\nWhich type of identity should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "a system-assigned managed identity"
      },
      {
        id: "B",
        text: "a user-assigned managed identity"
      },
      {
        id: "C",
        text: "a service principal"
      },
      {
        id: "D",
        text: "a user account"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 170,
    number: 65,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou have an Azure subscription that contains an Azure key vault named Vault1, an Azure pipeline named Pipeline1, and an Azure SQL database\nnamed DB1.\nPipeline1 is used to deploy an app that will authenticate to DB1 by using a password.\nYou need to store the password in Vault1. The solution must ensure that the password can be accessed by Pipeline1.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Secret, Access policies",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Grant Pipeline? access to Vault1 by modifying the: [»"
      },
      {
        id: "O2",
        text: "Secret"
      },
      {
        id: "O3",
        text: "Certificate"
      },
      {
        id: "O4",
        text: "Key"
      },
      {
        id: "O5",
        text: "Access policies"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O5"
    ]
  },
  {
    id: 171,
    number: 66,
    topic: "Topic 4",
    prompt: "You have a GitHub repository that contains multiple workfiows and a secret stored at the environment level.\nYou need to ensure that the secret can be used by all the workfiows.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Recreate the secret at the organization level."
      },
      {
        id: "B",
        text: "Recreate the secret at the repository level."
      },
      {
        id: "C",
        text: "Enable required reviewers."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 172,
    number: 67,
    topic: "Topic 4",
    prompt: "DRAG DROP\n-\nYou have a GitHub organization that contains three users named User1, User2, and User3. You have a project that contains a repository named\nrepo1.\nYou need to configure permissions for repo1. The solution must meet the following requirements:\n• Ensure that User1 can actively push to repo1.\n• Ensure that User2 can manage issues and pull requests for repo1.\n• Ensure that User3 can manage repo1.\n• Prevent User3 from accessing sensitive data in repo1.\nWhich role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Write, Triage, Maintain",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable required reviewers."
      },
      {
        id: "O2",
        text: "repol."
      },
      {
        id: "O3",
        text: "Triage"
      },
      {
        id: "O4",
        text: "« Ensure that User3 can manage repo."
      },
      {
        id: "O5",
        text: "« Ensure that User1 can actively push to repo."
      },
      {
        id: "O6",
        text: "+ Ensure that User2 can manage issues and pull requests for repo."
      },
      {
        id: "O7",
        text: "Write"
      },
      {
        id: "O8",
        text: "Maintain"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O3",
      "t3:O8"
    ]
  },
  {
    id: 173,
    number: 68,
    topic: "Topic 4",
    prompt: "You have an Azure key vault named KV1 and three web servers.\nYou plan to deploy an app named App1 to the web servers.\nYou need to ensure that App1 can retrieve a secret from KV1. The solution must meet the following requirements:\n• Minimize the number of permission grants required.\n• Follow the principle of least privilege.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "role-based access control (RBAC) permission"
      },
      {
        id: "B",
        text: "a system-assigned managed identity"
      },
      {
        id: "C",
        text: "a user-assigned managed identity"
      },
      {
        id: "D",
        text: "a service principal"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 174,
    number: 69,
    topic: "Topic 4",
    prompt: "You plan to use Azure DevOps to build and deploy an app that will be hosted in a Kubernetes cluster.\nYou need to scan the app image for vulnerabilities before the image is deployed to the cluster.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Microsoft Defender for Containers"
      },
      {
        id: "B",
        text: "Microsoft Defender for App Service"
      },
      {
        id: "C",
        text: "Microsoft Defender for DevOps"
      },
      {
        id: "D",
        text: "Microsoft Defender for Storage "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 175,
    number: 70,
    topic: "Topic 4",
    prompt: "DRAG DROP\n-\nYou have an Azure Pipelines application CI/CD pipeline named Pipeline1.\nYou need to add OWASP ZAP testing to Pipeline1.\nWhich four actions should you add to Pipeline1 in sequence? To answer, move the appropriate actions from the list of actions to the answer area\nand arrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Start a container, Run the baseline, Run an active scan, Report the results.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Rollbar"
      },
      {
        id: "O2",
        text: "libraries."
      },
      {
        id: "O3",
        text: "DeepSource"
      },
      {
        id: "O4",
        text: "You have an Azure Pipelines application CI/CD pipeline named Pipeline."
      },
      {
        id: "O5",
        text: "Start a container"
      },
      {
        id: "O6",
        text: "Run the baseline"
      },
      {
        id: "O7",
        text: "Run an active scan"
      },
      {
        id: "O8",
        text: "Report the results."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7",
      "t4:O8"
    ]
  },
  {
    id: 176,
    number: 71,
    topic: "Topic 4",
    prompt: "You have an app named App1 that is built by using Azure Pipelines. The source code for App1 is stored in Azure Repos and contains open source\nlibraries.\nYou need to identify security vulnerabilities in the open source code.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Mend Bolt"
      },
      {
        id: "B",
        text: "Rollbar"
      },
      {
        id: "C",
        text: "Code Climate"
      },
      {
        id: "D",
        text: "DeepSource "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 177,
    number: 72,
    topic: "Topic 4",
    prompt: "You manage code by using GitHub.\nYou plan to use Dependabot to scan for code dependencies.\nYou need to identify when scanning will be triggered automatically.\nWhich two actions will trigger a scan? Each correct answer presents a complete solution.\nNOTE: Each correct solution is worth one point.",
    keySource: "source",
    explanation: "Source answer: A. The dependency graph of a repository changes. E. A new advisory is added.",
    type: "single",
    options: [
      {
        id: "A",
        text: "The dependency graph of a repository changes."
      },
      {
        id: "B",
        text: "A pull request is created."
      },
      {
        id: "C",
        text: "A branch is forked."
      },
      {
        id: "D",
        text: "Any commit is pushed."
      },
      {
        id: "E",
        text: "A new advisory is added."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 178,
    number: 1,
    topic: "Topic 5",
    prompt: "You are designing the development process for your company.\nYou need to recommend a solution for continuous inspection of the company's code base to locate common code patterns that are known to be\nproblematic.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Microsoft Visual Studio test plans"
      },
      {
        id: "B",
        text: "Gradle wrapper scripts"
      },
      {
        id: "C",
        text: "SonarCloud analysis"
      },
      {
        id: "D",
        text: "the JavaScript task runner"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 179,
    number: 2,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nThe lead developer at your company reports that adding new application features takes longer than expected due to a large accumulated\ntechnical debt.\nYou need to recommend changes to reduce the accumulated technical debt.\nSolution: You recommend reducing the code coupling and the dependency cycles?\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 180,
    number: 3,
    topic: "Topic 5",
    prompt: "Your company uses Azure DevOps for the build pipelines and deployment pipelines of Java-based projects.\nYou need to recommend a strategy for managing technical debt.\nWhich two actions should you include in the recommendation? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BC",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Configure post-deployment approvals in the deployment pipeline."
      },
      {
        id: "B",
        text: "Configure pre-deployment approvals in the deployment pipeline."
      },
      {
        id: "C",
        text: "Integrate Azure DevOps and SonarQube."
      },
      {
        id: "D",
        text: "Integrate Azure DevOps and Azure DevTest Labs."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 181,
    number: 4,
    topic: "Topic 5",
    prompt: "Your company is building a new solution in Java.\nThe company currently uses a SonarQube server to analyze the code of .NET solutions.\nYou need to analyze and monitor the code quality of the Java solution.\nWhich task types should you add to the build pipeline?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Gradle"
      },
      {
        id: "B",
        text: "CocoaPods"
      },
      {
        id: "C",
        text: "Grunt"
      },
      {
        id: "D",
        text: "Gulp "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 182,
    number: 5,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYour company uses GitHub for source control. GitHub repositories store source code and store process documentation. The process\ndocumentation is saved as\nMicrosoft Word documents that contain simple fiow charts stored as .bmp files.\nYou need to optimize the integration and versioning of the process documentation and the fiow charts. The solution must meet the following\nrequirements:\n✑ Store documents as plain text.\n✑ Minimize the number of files that must be maintained.\n✑ Simplify the modification, merging, and reuse of fiow charts.\nSimplify the modification, merging, and reuse of documents.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Markdown (.md), Mermaid diagrams",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Octopus"
      },
      {
        id: "O2",
        text: "Gulp"
      },
      {
        id: "O3",
        text: "Grunt"
      },
      {
        id: "O4",
        text: "Maven"
      },
      {
        id: "O5",
        text: "Markdown (.md)"
      },
      {
        id: "O6",
        text: "Mermaid diagrams"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6"
    ]
  },
  {
    id: 183,
    number: 6,
    topic: "Topic 5",
    prompt: "Your company is building a new solution in Java.\nThe company currently uses a SonarQube server to analyze the code of .NET solutions.\nYou need to analyze and monitor the code quality of the Java solution.\nWhich task types should you add to the build pipeline?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Grunt"
      },
      {
        id: "B",
        text: "Octopus"
      },
      {
        id: "C",
        text: "Maven"
      },
      {
        id: "D",
        text: "Gulp "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 184,
    number: 7,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou are developing a full Microsoft .NET Framework solution that includes unit tests.\nYou need to configure SonarQube to perform a code quality validation of the C# code as part of the build pipelines.\nWhich four tasks should you perform in sequence? To answer, move the appropriate tasks from the list of tasks to the answer area and arrange\nthem in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Prepare Analysis Configuration, Visual Studio Build, Visual Studio Test, Run Code Analysis",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a dependency graph for the application."
      },
      {
        id: "O2",
        text: "Group the related components."
      },
      {
        id: "O3",
        text: "Configure post-deployment approvals in the deployment pipeline."
      },
      {
        id: "O4",
        text: "Prepare Analysis Configuration"
      },
      {
        id: "O5",
        text: "Visual Studio Build"
      },
      {
        id: "O6",
        text: "Visual Studio Test"
      },
      {
        id: "O7",
        text: "Run Code Analysis"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6",
      "t4:O7"
    ]
  },
  {
    id: 185,
    number: 8,
    topic: "Topic 5",
    prompt: "Your company uses Azure DevOps for the build pipelines and deployment pipelines of Java-based projects.\nYou need to recommend a strategy for managing technical debt.\nWhich action should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure post-deployment approvals in the deployment pipeline."
      },
      {
        id: "B",
        text: "Integrate Azure DevOps and SonarQube."
      },
      {
        id: "C",
        text: "Integrate Azure DevOps and Azure DevTest Labs."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 186,
    number: 9,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou need to find and isolate shared code. The shared code will be maintained in a series of packages.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Create a dependency graph for the application, Group the related components, Assign ownership to each component group",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a dependency graph for the application."
      },
      {
        id: "O2",
        text: "Group the related components."
      },
      {
        id: "O3",
        text: "Configure post-deployment approvals in the deployment pipeline."
      },
      {
        id: "O4",
        text: "Create a dependency graph for the application"
      },
      {
        id: "O5",
        text: "Group the related components"
      },
      {
        id: "O6",
        text: "Assign ownership to each component group"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6"
    ]
  },
  {
    id: 187,
    number: 10,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou are creating a NuGet package.\nYou plan to distribute the package to your development team privately.\nYou need to share the package and test that the package can be consumed.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Configure a self-hosted agent, Create a new Azure Artifacts feed, Publish a package, Connect to an Azure Artifacts feed.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a new Azure Artifacts feed."
      },
      {
        id: "O2",
        text: "Create a new feed in Azure Artifacts."
      },
      {
        id: "O3",
        text: "Create a Git repository in Azure Repos."
      },
      {
        id: "O4",
        text: "Configure a self-hosted agent."
      },
      {
        id: "O5",
        text: "In a Maven build task, select Run PMD."
      },
      {
        id: "O6",
        text: "In a Gradle build task, select Run Checkstyle."
      },
      {
        id: "O7",
        text: "In a Xcode build task, select Use xcpretty from Advanced."
      },
      {
        id: "O8",
        text: "In a Grunt build task, select Enabled from Control Options."
      },
      {
        id: "O9",
        text: "Configure a self-hosted agent"
      },
      {
        id: "O10",
        text: "Create a new Azure Artifacts feed"
      },
      {
        id: "O11",
        text: "Publish a package"
      },
      {
        id: "O12",
        text: "Connect to an Azure Artifacts feed."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O9",
      "t2:O10",
      "t3:O11",
      "t4:O12"
    ]
  },
  {
    id: 188,
    number: 11,
    topic: "Topic 5",
    prompt: "During a code review, you discover many quality issues. Many modules contain unused variables and empty catch blocks.\nYou need to recommend a solution to improve the quality of the code.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "In a Grunt build task, select Enabled from Control Options."
      },
      {
        id: "B",
        text: "In a Maven build task, select Run PMD."
      },
      {
        id: "C",
        text: "In a Xcode build task, select Use xcpretty from Advanced."
      },
      {
        id: "D",
        text: "In a Gradle build task, select Run Checkstyle."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 189,
    number: 12,
    topic: "Topic 5",
    prompt: "Your development team is building a new web solution by using the Microsoft Visual Studio integrated development environment (IDE).\nYou need to make a custom package available to all the developers. The package must be managed centrally, and the latest version must be\navailable for consumption in Visual Studio automatically.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: ABE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Publish the package to a feed."
      },
      {
        id: "B",
        text: "Create a new feed in Azure Artifacts."
      },
      {
        id: "C",
        text: "Upload a package to a Git repository."
      },
      {
        id: "D",
        text: "Add the package URL to the Environment settings in Visual Studio."
      },
      {
        id: "E",
        text: "Add the package URL to the NuGet Package Manager settings in Visual Studio."
      },
      {
        id: "F",
        text: "Create a Git repository in Azure Repos. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 190,
    number: 13,
    topic: "Topic 5",
    prompt: "You use GitHub for source control.\nA file that contains sensitive data is committed accidentally to the Git repository of a project.\nYou need to delete the file and its history form the repository.\nWhich two tools can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AB",
    type: "single",
    options: [
      {
        id: "A",
        text: "the git filter-branch command"
      },
      {
        id: "B",
        text: "BFG Repo-Cleaner"
      },
      {
        id: "C",
        text: "the git rebase command"
      },
      {
        id: "D",
        text: "GitHub Desktop"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 191,
    number: 14,
    topic: "Topic 5",
    prompt: "Your company uses GitHub for source control. The company has a team that performs code reviews.\nYou need to automate the assignment of the code reviews. The solution must meet the following requirements:\n✑ Prioritize the assignment of code reviews to team members who have the fewest outstanding assignments.\n✑ Ensure that each team member performs an equal number of code reviews in any 30-day period.\n✑ Prevent the assignment of code reviews to the team leader.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Clear Never assign certain team members."
      },
      {
        id: "B",
        text: "Select If assigning team members, don't notify the entire team."
      },
      {
        id: "C",
        text: "Select Never assign certain team members."
      },
      {
        id: "D",
        text: "Set Routing algorithm to Round robin."
      },
      {
        id: "E",
        text: "Set Routing algorithm to Load balance."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 192,
    number: 15,
    topic: "Topic 5",
    prompt: "You have a GitHub repository.\nYou create a new repository in Azure DevOps.\nYou need to recommend a procedure to clone the repository from GitHub to Azure DevOps.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a pull request."
      },
      {
        id: "B",
        text: "Create a webhook."
      },
      {
        id: "C",
        text: "Create a service connection for GitHub."
      },
      {
        id: "D",
        text: "From Import a Git repository, click Import."
      },
      {
        id: "E",
        text: "Create a personal access token in Azure DevOps. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 193,
    number: 16,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nThe lead developer at your company reports that adding new application features takes longer than expected due to a large accumulated\ntechnical debt.\nYou need to recommend changes to reduce the accumulated technical debt.\nSolution: You recommend increasing the code duplication.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 194,
    number: 17,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nThe lead developer at your company reports that adding new application features takes longer than expected due to a large accumulated\ntechnical debt.\nYou need to recommend changes to reduce the accumulated technical debt.\nSolution: You recommend increasing the test coverage.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 195,
    number: 18,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nThe lead developer at your company reports that adding new application features takes longer than expected due to a large accumulated\ntechnical debt.\nYou need to recommend changes to reduce the accumulated technical debt.\nSolution: You recommend reducing the code complexity.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 196,
    number: 19,
    topic: "Topic 5",
    prompt: "During a code review, you discover quality issues in a Java application.\nYou need to recommend a solution to detect quality issues including unused variables and empty catch blocks.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "In a Maven build task, select Run PMD."
      },
      {
        id: "B",
        text: "In an Xcode build task, select Use xcpretty from Advanced."
      },
      {
        id: "C",
        text: "In a Gulp build task, specify a custom condition expression."
      },
      {
        id: "D",
        text: "In a Grunt build task, select Enabled from Control Options."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 197,
    number: 20,
    topic: "Topic 5",
    prompt: "You use Azure Artifacts to host NuGet packages that you create.\nYou need to make one of the packages available to anonymous users outside your organization. The solution must minimize the number of\npublication points.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D. Publish the package to a public NuGet repository",
    type: "single",
    options: [
      {
        id: "A",
        text: "Change the feed URL of the package"
      },
      {
        id: "B",
        text: "Create a new feed for the package"
      },
      {
        id: "C",
        text: "Promote the package to a release view."
      },
      {
        id: "D",
        text: "Publish the package to a public NuGet repository."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 198,
    number: 21,
    topic: "Topic 5",
    prompt: "You use GitHub for source control and project-related discussions.\nYou receive a notification when an entry is made to any team discussion.\nYou need to ensure that you receive email notifications only for discussions in which you commented or in which you are mentioned.\nWhich two Notifications settings should you clear? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Automatically watch teams"
      },
      {
        id: "B",
        text: "Participating"
      },
      {
        id: "C",
        text: "Automatically watch repositories"
      },
      {
        id: "D",
        text: "Watching "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 199,
    number: 22,
    topic: "Topic 5",
    prompt: "You have an Azure Automation account that contains a runbook. The runbook is used to configure the application infrastructure of an Azure\nsubscription.\nYou have a project in Azure DevOps named Project1. Project1 contains a repository that stores code for the runbook.\nYou need to ensure that every committed change to the code will update automatically and publish the runbook to Azure Automation.\nWhat should you configure?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Service hooks settings for Project1"
      },
      {
        id: "B",
        text: "the Connections settings for the Automation account"
      },
      {
        id: "C",
        text: "the Source control settings for the Automation account"
      },
      {
        id: "D",
        text: "the Service connections settings for Project1"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 200,
    number: 23,
    topic: "Topic 5",
    prompt: "You use Git for source control.\nYou enable GitHub code scanning.\nYou raise a pull request from a non-default branch. In the code scanning output, you receive the following error message: “Analysis not found.”\nYou need to ensure that the code scanning completes successfully for the pull request.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Add the name of the default branch to the on: push specification in the code scanning workfiow."
      },
      {
        id: "B",
        text: "Add the name of the non-default branch to the on:push specification in the code scanning workfiow."
      },
      {
        id: "C",
        text: "Delete the pull request, and then raise the request again from the default branch."
      },
      {
        id: "D",
        text: "Update the code in the pull request."
      },
      {
        id: "E",
        text: "Add a new workfiow for code scanning. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 201,
    number: 24,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have a GitHub repository named repo1 that stores the code of an app named App1.\nYou need deploy a workfiow for repo1 by using GitHub Actions. The solution must meet the following requirements:\n• Scan on pushes to the main branch.\n• Scan on pull requests to the main branch.\n• Scan on pull requests to any branch that has a prefix of releases/.\n• Scan all the files in the subdirectories of the src directory.\n• Exclude scanning of markdown files.\nHow should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: - ‘releases/**’, -‘src/**’, -**/*.md’",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "CC"
      },
      {
        id: "O2",
        text: "+ Scan on pushes to the main branch."
      },
      {
        id: "O3",
        text: "« Scan on pull requests to the main branch."
      },
      {
        id: "O4",
        text: "- ‘releases/**’"
      },
      {
        id: "O5",
        text: "-‘src/**’"
      },
      {
        id: "O6",
        text: "-**/*.md’"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6"
    ]
  },
  {
    id: 202,
    number: 25,
    topic: "Topic 5",
    prompt: "You have a GitHub repository that contains multiple versions of an Azure Pipelines template.\nYou plan to deploy multiple pipelines that will use a template stored in the repository.\nYou need to ensure that you use a fixed version of the template.\nWhat should you use to reference which version of the template repository to use?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "the serial"
      },
      {
        id: "B",
        text: "the SHA-based hashes"
      },
      {
        id: "C",
        text: "the runner"
      },
      {
        id: "D",
        text: "the branch"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 203,
    number: 26,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have the repositories shown in the following table.\nYou need to migrate the contents of the GitHub repository to the Azure Repos repository. The solution must ensure that the Azure Repos\nrepository only contains branches and history from the GitHub repository.\nWhich three commands should you run in sequence? To answer, move the appropriate commands from the list of commands to the answer area\nand arrange them in the correct order.\n",
    keySource: "source",
    explanation: "Source answer: git clone –bare https://github.com/contoso/project1.git, cd project1.git, git push –mirror https://dev.azure.com/contoso/project1/_it/proj",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "git clone --bare"
      },
      {
        id: "O2",
        text: "GitHub hitps:/github.com/contoso/project.git"
      },
      {
        id: "O3",
        text: "the branch"
      },
      {
        id: "O4",
        text: "git push —-mirrcr"
      },
      {
        id: "O5",
        text: "git push —-mirrcr © ®"
      },
      {
        id: "O6",
        text: "git clone –bare https://github.com/contoso/project1.git"
      },
      {
        id: "O7",
        text: "cd project1.git"
      },
      {
        id: "O8",
        text: "git push –mirror https://dev.azure.com/contoso/project1/_it/proj"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O8"
    ]
  },
  {
    id: 204,
    number: 27,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have a GitHub repository that contains the code for an app named App1.\nApp1 depends on a library of functions from a repository at https://github.com/contoso/afeed.\nYou need to keep a clone of the afeed repository as a subdirectory of the App1 repository.\nHow should you complete the Git command? To answer, drag the appropriate values to the correct targets. Each value may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: clone, branch",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "reflog"
      },
      {
        id: "O2",
        text: "git ¥ ——prune= v"
      },
      {
        id: "O3",
        text: "git W expire --expire-unreachable=now --all"
      },
      {
        id: "O4",
        text: "gc"
      },
      {
        id: "O5",
        text: "reset"
      },
      {
        id: "O6",
        text: "stash"
      },
      {
        id: "O7",
        text: "+ Remove history that is NOT in any current branch."
      },
      {
        id: "O8",
        text: "clone"
      },
      {
        id: "O9",
        text: "branch"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9"
    ]
  },
  {
    id: 205,
    number: 28,
    topic: "Topic 5",
    prompt: "HOTSPOT\n-\nYou use Git for source control.\nYou need to optimize the performance of a repository. The solution must meet the following requirements:\n• Permanently remove all items referenced only in the refiog.\n• Remove history that is NOT in any current branch.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: reflog,gc,now",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "reflog"
      },
      {
        id: "O2",
        text: "git ¥ ——prune= v"
      },
      {
        id: "O3",
        text: "git W expire --expire-unreachable=now --all"
      },
      {
        id: "O4",
        text: "gc"
      },
      {
        id: "O5",
        text: "reset"
      },
      {
        id: "O6",
        text: "stash"
      },
      {
        id: "O7",
        text: "+ Remove history that is NOT in any current branch."
      },
      {
        id: "O8",
        text: "now"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O4",
      "t3:O8"
    ]
  },
  {
    id: 206,
    number: 29,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have an Azure Repos Git repository named repo1.\nYou need to ensure that you can authenticate to repo1 by using SSH.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.",
    keySource: "source",
    explanation: "Source answer: Sign in to Azure DevOps, Create SHH keys by using ssh-keygen, Add the SSH public key, Clone repo1.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create SSH keys by using ssh-keygen"
      },
      {
        id: "O2",
        text: "git checkout [hash]~1 --path/to/file ® ®»"
      },
      {
        id: "O3",
        text: "Save the SSH key to the root of repo. G) ®"
      },
      {
        id: "O4",
        text: "Sign in to Azure DevOps"
      },
      {
        id: "O5",
        text: "Create SHH keys by using ssh-keygen"
      },
      {
        id: "O6",
        text: "Add the SSH public key"
      },
      {
        id: "O7",
        text: "Clone repo1."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6",
      "t4:O7"
    ]
  },
  {
    id: 207,
    number: 30,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou use Git for source control.\nYou delete a file, commit the changes, and continue to work.\nYou need to recover the deleted file.\nWhich three commands should you run in sequence? To answer, move the appropriate commands from the list of commands to the answer area\nand arrange them in the correct order.\n",
    keySource: "source",
    explanation: "Source answer: git log, gitcheckout Hash -1 –path/to/file, git restore path/to/file",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create SSH keys by using ssh-keygen"
      },
      {
        id: "O2",
        text: "git checkout [hash]~1 --path/to/file ® ®»"
      },
      {
        id: "O3",
        text: "Save the SSH key to the root of repo. G) ®"
      },
      {
        id: "O4",
        text: "git log"
      },
      {
        id: "O5",
        text: "gitcheckout Hash -1 –path/to/file"
      },
      {
        id: "O6",
        text: "git restore path/to/file"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6"
    ]
  },
  {
    id: 208,
    number: 31,
    topic: "Topic 5",
    prompt: "HOTSPOT\n-\nYou use Git for source control. You have an app named App1.\nIn the main branch, you need to restore the third most recent revision of a file named App.exe.config.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: checkout, --staged",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch"
      },
      {
        id: "O2",
        text: "git w main"
      },
      {
        id: "O3",
        text: "switch"
      },
      {
        id: "O4",
        text: "source"
      },
      {
        id: "O5",
        text: "Feature"
      },
      {
        id: "O6",
        text: "Develop"
      },
      {
        id: "O7",
        text: "checkout"
      },
      {
        id: "O8",
        text: "git restore w main~3 App.exe.config"
      },
      {
        id: "O9",
        text: "You plan to implement GitFlow as a workflow strategy."
      },
      {
        id: "O10",
        text: "Main"
      },
      {
        id: "O11",
        text: "reset"
      },
      {
        id: "O12",
        text: "patch"
      },
      {
        id: "O13",
        text: "--staged"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O13"
    ]
  },
  {
    id: 209,
    number: 32,
    topic: "Topic 5",
    prompt: "HOTSPOT\n-\nYou company uses a Git source-code repository.\nYou plan to implement GitFlow as a workfiow strategy.\nYou need to identify which branch types are used for production code and preproduction code in the strategy.\nWhich branch type should you identify for each code type? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Main, Develop",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch"
      },
      {
        id: "O2",
        text: "git w main"
      },
      {
        id: "O3",
        text: "switch"
      },
      {
        id: "O4",
        text: "source"
      },
      {
        id: "O5",
        text: "Feature"
      },
      {
        id: "O6",
        text: "Develop"
      },
      {
        id: "O7",
        text: "checkout"
      },
      {
        id: "O8",
        text: "git restore w main~3 App.exe.config"
      },
      {
        id: "O9",
        text: "You plan to implement GitFlow as a workflow strategy."
      },
      {
        id: "O10",
        text: "Main"
      },
      {
        id: "O11",
        text: "reset"
      },
      {
        id: "O12",
        text: "patch"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O10",
      "t2:O6"
    ]
  },
  {
    id: 210,
    number: 33,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have an Azure Repos repository named repo1.\nYou need to clone repo1. The solution must clone only a directory named src/web.\nHow should you complete the script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: https://dev.azure.com/organi..., repo1/src/, web",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "You have an Azure Repos repository named repo."
      },
      {
        id: "O2",
        text: "git@ssh.dev.azure.com:v3/organization/project/repol cd repos"
      },
      {
        id: "O3",
        text: "https://dev.azure.com/organi..."
      },
      {
        id: "O4",
        text: "repo1/src/"
      },
      {
        id: "O5",
        text: "web"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4",
      "t3:O5"
    ]
  },
  {
    id: 211,
    number: 34,
    topic: "Topic 5",
    prompt: "You use GitHub for source control and Microsoft Teams for collaboration.\nYou need to send a notification to a Teams channel for each commit. The solution must minimize development effort.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use Azure Automation to connect to the GitHub Actions API and send a message to the Teams channel."
      },
      {
        id: "B",
        text: "Use the Microsoft Teams for GitHub app and configure a subscription to receive notifications in the Teams channel."
      },
      {
        id: "C",
        text: "Use GitHub Actions with a dispatch to send a message to the Teams channel by using the Teams API."
      },
      {
        id: "D",
        text: "Use Azure Functions to connect to the GitHub REST API and send a message to the Teams channel. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 212,
    number: 35,
    topic: "Topic 5",
    prompt: "You manage source code control and versioning by using GitHub.\nYou need to ensure that a PowerShell script is executed automatically before rebase operations are performed.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "a package"
      },
      {
        id: "B",
        text: "GitHub Copilot"
      },
      {
        id: "C",
        text: "a webhook"
      },
      {
        id: "D",
        text: "a gist"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 213,
    number: 36,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have a GitHub repository named repo1.\nYou migrate repo1 to an Azure Repos repository named repo2.\nAfter the migration, changes are made to repo1.\nYou need to sync the changes to repo2.\nHow should you complete the script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: repo1 repo URL, repo1, repo2 clone URL",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "GitHub Copilot"
      },
      {
        id: "O2",
        text: "repol repo URL"
      },
      {
        id: "O3",
        text: "You have a GitHub repository named repo."
      },
      {
        id: "O4",
        text: "git remote add --mirror=fetch upstream 1]"
      },
      {
        id: "O5",
        text: "You migrate repo to an Azure Repos repository named repo2."
      },
      {
        id: "O6",
        text: "repo1 repo URL"
      },
      {
        id: "O7",
        text: "repo1"
      },
      {
        id: "O8",
        text: "repo2 clone URL"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O8"
    ]
  },
  {
    id: 214,
    number: 37,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have an Azure Repos repository named repo1.\nYou delete a branch named features/feature11.\nYou need to recover the deleted branch.\nWhich three commands should you run in sequence? To answer, move the appropriate commands from the list of commands to the answer area\nand arrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: git branch feature/feature11, git log, git checkout <SHA>",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "You delete a branch named features/feature11."
      },
      {
        id: "O2",
        text: "You have an Azure Repos repository named repo."
      },
      {
        id: "O3",
        text: "You use GitHub to host container packages that use Semantic Versioning (SemVer)."
      },
      {
        id: "O4",
        text: "git branch feature/feature11"
      },
      {
        id: "O5",
        text: "git log"
      },
      {
        id: "O6",
        text: "git checkout <SHA>"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6"
    ]
  },
  {
    id: 215,
    number: 38,
    topic: "Topic 5",
    prompt: "You use GitHub to host container packages that use Semantic Versioning (SemVer).\nYou have an app named App1. The current version of App1 is 11.2.0.\nYou change the code of App1 to fix a bug that was introduced in version 10.5.1.\nWhich version number should you assign to the release?",
    keySource: "source",
    explanation: "Source answer: B. 11.2.1",
    type: "single",
    options: [
      {
        id: "A",
        text: "10.5.1-PATCH"
      },
      {
        id: "B",
        text: "11.2.1"
      },
      {
        id: "C",
        text: "10.5.2"
      },
      {
        id: "D",
        text: "10.6.0 "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 216,
    number: 39,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have an Azure Repos repository that contains large PSD files.\nYou need to configure Git LFS to manage all the files.\nHow should you complete the script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: git lfs install # Initialize Git LFS in the repository git lfs track \"*.psd\" # Track the large PSD files using Git LFS git add .gitattributes # Generated by lfs track, contains the LFS tracking information git commit -m \"commit changes\" git lfs migrate import --include=\"*.psd\" --everything # Migrate the existing large PSD filesgit push # Send the commit changes to Azure Repo",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "git 1fs install"
      },
      {
        id: "O2",
        text: "git commit -m “track *.psd files using Git LFS”"
      },
      {
        id: "O3",
        text: "Configure branch protection rules for each repository."
      },
      {
        id: "O4",
        text: "git lfs install # Initialize Git LFS in the repository git lfs track \"*.psd\" # Track the large PSD files using Git LFS git add .gitattributes # Generated by lfs track"
      },
      {
        id: "O5",
        text: "contains the LFS tracking information git commit -m \"commit changes\" git lfs migrate import --include=\"*.psd\" --everything # Migrate the existing large PSD filesgit push # Send the commit changes to Azure Repo"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5"
    ]
  },
  {
    id: 217,
    number: 40,
    topic: "Topic 5",
    prompt: "You manage code by using GitHub.\nYou need to ensure that repository owners are notified if a new vulnerable dependency or malware is found in their repository.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure CodeQL scanning actions."
      },
      {
        id: "B",
        text: "Configure Dependabot alerts."
      },
      {
        id: "C",
        text: "Configure branch protection rules for each repository."
      },
      {
        id: "D",
        text: "Subscribe all the repository owners to the GitHub Advisory Database. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 218,
    number: 41,
    topic: "Topic 5",
    prompt: "You have a public GitHub repository named Public1.\nA commit is made to Public1. The commit contains a pattern that matches a regular expression.\nWho is notified first when the commit is made?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "the administrator of the GitHub organization"
      },
      {
        id: "B",
        text: "the committer"
      },
      {
        id: "C",
        text: "the owner of Public1"
      },
      {
        id: "D",
        text: "the secret scanning partner"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 219,
    number: 42,
    topic: "Topic 5",
    prompt: "You have a GitHub repository.\nYou need to ensure that all the code in the repository is scanned for vulnerabilities.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Dependabot alerts"
      },
      {
        id: "B",
        text: "branch protection rules"
      },
      {
        id: "C",
        text: "CodeQL actions"
      },
      {
        id: "D",
        text: "GitHub Advisory Database databases "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 220,
    number: 43,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou create a Git repository named Repo1 in Azure Repos.\nYou need to configure Repo1 to meet the following requirements:\n• Work items must be linked to a pull request.\n• Pull requests must have a minimum of two reviewers.\n• Pull requests must complete a code review by using a third-party tool.\nThe solution must minimize administrative effort.\nWhich type of policy should you use for each requirement? To answer, drag the appropriate policy types to the correct requirements. Each type\npolicy may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Check-in, Status, Branch",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "You create a Git repository named Repo in Azure Repos."
      },
      {
        id: "O2",
        text: "git clone git@ssh.dev.azure.com.com:v3/org/Project1/repol"
      },
      {
        id: "O3",
        text: "git clone —-depth-1 git@ssh.dev.azure.com:v3/org/Project1/repol"
      },
      {
        id: "O4",
        text: "git clone —filter=true:0 git@ssh.dev.azure.com:v3/org/Project1/repo1"
      },
      {
        id: "O5",
        text: "git clone —-filter=blob:none git@ssh.dev.azure.com:v3/org/Project1/repol"
      },
      {
        id: "O6",
        text: "Check-in"
      },
      {
        id: "O7",
        text: "Status"
      },
      {
        id: "O8",
        text: "Branch"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O8"
    ]
  },
  {
    id: 221,
    number: 44,
    topic: "Topic 5",
    prompt: "You have a 1-TB Azure Repos repository named repo1.\nYou need to clone repo1. The solution must meet the following requirements:\n• You must be able to search the commit history of the /src directory\n• The amount of time it takes to clone the repository must be minimized\nWhich command should you run?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "git clone –-depth-1 git@ssh.dev.azure.com:v3/org/Project1/repo1"
      },
      {
        id: "B",
        text: "git clone –-filter=blob:none git@ssh.dev.azure.com:v3/org/Project1/repo1"
      },
      {
        id: "C",
        text: "git clone git@ssh.dev.azure.com.com:v3/org/Project1/repo1"
      },
      {
        id: "D",
        text: "git clone –-filter=true:0 git@ssh.dev.azure.com:v3/org/Project1/repo1 "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 222,
    number: 45,
    topic: "Topic 5",
    prompt: "You use GitHub for source control.\nYou are evaluating whether to use proxying to add a private upstream MyGet package feed to your MyGet feed.\nWhat are two possible advantages of this approach? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AC",
    type: "single",
    options: [
      {
        id: "A",
        text: "minimizes the impact of upstream source availability issues"
      },
      {
        id: "B",
        text: "minimizes latency when accessing the package"
      },
      {
        id: "C",
        text: "provides automatic authentication"
      },
      {
        id: "D",
        text: "minimizes the impact on your storage quota"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 223,
    number: 46,
    topic: "Topic 5",
    prompt: "You manage source code control and versioning by using GitHub.\nA large file is committed to a repository accidentally.\nYou need to reduce the size of the repository. The solution must remove the file from the repository.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "bfg"
      },
      {
        id: "B",
        text: "lfs"
      },
      {
        id: "C",
        text: "gvfs"
      },
      {
        id: "D",
        text: "init "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 224,
    number: 47,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have a GitHub repository.\nYou need to configure Dependabot dependency scanning. The solution must meet the following requirements:\n• Automatically open a pull request to resolve an alert.\n• Automatically open a pull request when a dependency is updated.\nWhat should you enable for each requirement? To answer, drag the appropriate features to the correct requirements. Each feature may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: A dependency graph",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "A dependency graph"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O1"
    ]
  },
  {
    id: 225,
    number: 48,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou have a large repository named Repo1 that contains a directory named directory1.\nYou plan to modify files in directory1.\nYou need to create a clone of Repo1. The solution must minimize the amount of transferred data.\nHow should you complete the script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: git clone, git sparse-checkout",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "branch policies"
      },
      {
        id: "O2",
        text: "branch security"
      },
      {
        id: "O3",
        text: "You plan to modify files in directory1."
      },
      {
        id: "O4",
        text: "git sparse-checkout [ https://dev.azure.com/organisation/_git/Repol"
      },
      {
        id: "O5",
        text: "git clone"
      },
      {
        id: "O6",
        text: "git sparse-checkout"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6"
    ]
  },
  {
    id: 226,
    number: 49,
    topic: "Topic 5",
    prompt: "You have a project in Azure DevOps.\nYou need to implement a new branching solution. The solution must ensure that all pull requests meet the following requirements:\n• Include linked work items.\n• Pass build validation policies.\n• Require at least three reviewers.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "branch policies"
      },
      {
        id: "B",
        text: "pull request templates"
      },
      {
        id: "C",
        text: "branch security"
      },
      {
        id: "D",
        text: "pull request permissions "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 227,
    number: 50,
    topic: "Topic 5",
    prompt: "You use Git for source control.\nYou need to commit a 3-GB ZIP file that contains virtual machines used for testing. The solution must meet the following requirements:\n• The file must be versioned.\n• The file must be associated with the corresponding code commits.\nWhich two actions should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Install the git-fat extension and associate the extension to ZIP files."
      },
      {
        id: "B",
        text: "Install the Git LFS extension and associate the extension to ZIP files."
      },
      {
        id: "C",
        text: "Install the git-stash extension and associate the extension to ZIP files."
      },
      {
        id: "D",
        text: "Use GZip to compress the file before committing the file."
      },
      {
        id: "E",
        text: "Store files in Azure Storage and enable blob versions."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 228,
    number: 1,
    topic: "Topic 6",
    prompt: "Your company has 60 developers who are assigned to four teams. Each team has 15 members.\nThe company uses an agile development methodology.\nYou need to structure the work of the development teams so that each team owns their respective work while working together to reach a\ncommon goal.\nWhich parts of the taxonomy should you enable the team to perform autonomously?",
    keySource: "source",
    explanation: "Source answer: D Stories and Tasks",
    type: "single",
    options: [
      {
        id: "A",
        text: "Features and Tasks"
      },
      {
        id: "B",
        text: "Initiatives and Epics"
      },
      {
        id: "C",
        text: "Epics and Features"
      },
      {
        id: "D",
        text: "Stories and Tasks"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 229,
    number: 2,
    topic: "Topic 6",
    prompt: "Your company creates a new Azure DevOps team.\nYou plan to use Azure DevOps for sprint planning.\nYou need to visualize the fiow of your work by using an agile methodology.\nWhich Azure DevOps component should you use?",
    keySource: "source",
    explanation: "Source answer: A Kanban boards",
    type: "single",
    options: [
      {
        id: "A",
        text: "Kanban boards"
      },
      {
        id: "B",
        text: "sprint planning"
      },
      {
        id: "C",
        text: "delivery plans"
      },
      {
        id: "D",
        text: "portfolio backlogs "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 230,
    number: 3,
    topic: "Topic 6",
    prompt: "Your company implements an Agile development methodology.\nYou plan to implement retrospectives at the end of each sprint.\nWhich three questions should you include? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CDE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Who performed well?"
      },
      {
        id: "B",
        text: "Who should have performed better?"
      },
      {
        id: "C",
        text: "What could have gone better?"
      },
      {
        id: "D",
        text: "What went well?"
      },
      {
        id: "E",
        text: "What should we try next?"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 231,
    number: 4,
    topic: "Topic 6",
    prompt: "Your team uses an agile development approach.\nYou need to recommend a branching strategy for the team's Git repository. The strategy must meet the following requirements.\n✑ Provide the ability to work on multiple independent tasks in parallel.\n✑ Ensure that checked-in code remains in a releasable state always.\n✑ Ensure that new features can be abandoned at any time.\n✑ Encourage experimentation.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "a single long-running branch without forking"
      },
      {
        id: "B",
        text: "multiple long-running branches"
      },
      {
        id: "C",
        text: "a single fork per team member"
      },
      {
        id: "D",
        text: "a single long-running branch with multiple short-lived feature branches"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 232,
    number: 5,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou integrate a cloud-hosted Jenkins server and a new Azure DevOps deployment.\nYou need Azure DevOps to send a notification to Jenkins when a developer commits changes to a branch in Azure Repos.\nSolution: You create a service hook subscription that uses the build completed event.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B.No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 233,
    number: 6,
    topic: "Topic 6",
    prompt: "You have a project in Azure DevOps that has a release pipeline.\nYou need to integrate work item tracking and an Agile project management system to meet the following requirements:\n✑ Ensure that developers can track whether their commits are deployed to production.\n✑ Report the deployment status.\n✑ Minimize integration effort.\nWhich system should you use?",
    keySource: "source",
    explanation: "Source answer: Jira",
    type: "single",
    options: [
      {
        id: "A",
        text: "Asana"
      },
      {
        id: "B",
        text: "Basecamp"
      },
      {
        id: "C",
        text: "Trello"
      },
      {
        id: "D",
        text: "Jira"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 234,
    number: 7,
    topic: "Topic 6",
    prompt: "You plan to onboard 10 new developers.\nYou need to recommend a development environment that meets the following requirements:\n✑ Integrates with GitHub\n✑ Provides integrated debugging tools\n✑ Supports remote workers and hot-desking environments\n✑ Supports developers who use browsers, tablets, and Chromebooks\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: Github Codespaces",
    type: "single",
    options: [
      {
        id: "A",
        text: "VS Code"
      },
      {
        id: "B",
        text: "Xamarin Studio"
      },
      {
        id: "C",
        text: "MonoDevelop"
      },
      {
        id: "D",
        text: "Github Codespaces"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 235,
    number: 8,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou integrate a cloud-hosted Jenkins server and a new Azure DevOps deployment.\nYou need Azure DevOps to send a notification to Jenkins when a developer commits changes to a branch in Azure Repos.\nSolution: You create an email subscription to an Azure DevOps notification.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B.No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 236,
    number: 9,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou integrate a cloud-hosted Jenkins server and a new Azure DevOps deployment.\nYou need Azure DevOps to send a notification to Jenkins when a developer commits changes to a branch in Azure Repos.\nSolution: You create a service hook subscription that uses the code pushed event.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 237,
    number: 10,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou integrate a cloud-hosted Jenkins server and a new Azure DevOps deployment.\nYou need Azure DevOps to send a notification to Jenkins when a developer commits changes to a branch in Azure Repos.\nSolution: You add a trigger to the build pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 238,
    number: 11,
    topic: "Topic 6",
    prompt: "You plan to create in Azure DevOps. Multiple developers will work on the project. The developers will work ofiine frequently and will require\naccess to the full project history while they are ofiine.\nWhich version control solution should you use?",
    keySource: "source",
    explanation: "Source answer: B. Git",
    type: "single",
    options: [
      {
        id: "A",
        text: "Team Foundation Version Control"
      },
      {
        id: "B",
        text: "Git"
      },
      {
        id: "C",
        text: "TortoiseSVN"
      },
      {
        id: "D",
        text: "Subversion "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 239,
    number: 12,
    topic: "Topic 6",
    prompt: "You plan to onboard 10 new developers.\nYou need to recommend a development environment that meets the following requirements:\n✑ Integrates with GitHub\n✑ Provides integrated debugging tools\n✑ Supports remote workers and hot-desking environments\n✑ Supports developers who use browsers, tablets, and Chromebooks\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: D Visual Studio Codespaces",
    type: "single",
    options: [
      {
        id: "A",
        text: "VS Code"
      },
      {
        id: "B",
        text: "Xamarin Studio"
      },
      {
        id: "C",
        text: "MonoDevelop"
      },
      {
        id: "D",
        text: "Visual Studio Codespaces"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 240,
    number: 13,
    topic: "Topic 6",
    prompt: "You have a build pipeline in Azure Pipelines.\nYou create a Slack App Integration.\nYou need to send build notifications to a Slack channel named #Development.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: D. Creates a service hook subscription",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a project-level notification."
      },
      {
        id: "B",
        text: "Configure a service connection."
      },
      {
        id: "C",
        text: "Create a global notification."
      },
      {
        id: "D",
        text: "Creates a service hook subscription."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 241,
    number: 14,
    topic: "Topic 6",
    prompt: "You have an Azure DevOps organization named Contoso and an Azure subscription.\nYou use Azure DevOps to build and deploy a web app named App1. Azure Monitor is configured to generate an email notification in response to\nalerts generated whenever App1 generates a server-side error.\nYou need to receive notifications in Microsoft Teams whenever an Azure Monitor alert is generated.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: B.D.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create an Azure Monitor workbook."
      },
      {
        id: "B",
        text: "Create an Azure logic app that has an HTTP request trigger."
      },
      {
        id: "C",
        text: "Create an Azure logic app that has an Azure DevOps trigger."
      },
      {
        id: "D",
        text: "Modify an action group in Azure Monitor."
      },
      {
        id: "E",
        text: "Modify the Diagnostics settings in Azure Monitor. "
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 242,
    number: 15,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nYour company uses Azure DevOps for Git source control.\nYou have a project in Azure DevOps named Contoso App that contains the following repositories:\n✑ https://dev.azure.com/contoso/contoso-app/core-api\n✑ https://dev.azure.com/contoso/contoso-app/core-spa\n✑ https://dev.azure.com/contoso/contoso-app/core-db\nYou need to ensure that developers receive Slack notifications when there are pull requests created for Contoso App.\nWhat should you run in Slack? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: subscribe, dev.azure.com/contoso/contoso-app",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Bamboo"
      },
      {
        id: "O2",
        text: "Modify the Storage settings of Project1."
      },
      {
        id: "O3",
        text: "In Project, create an Azure DevOps pipeline."
      },
      {
        id: "O4",
        text: "In Project1, create an Azure DevOps repository."
      },
      {
        id: "O5",
        text: "subscribe"
      },
      {
        id: "O6",
        text: "dev.azure.com/contoso/contoso-app"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6"
    ]
  },
  {
    id: 243,
    number: 16,
    topic: "Topic 6",
    prompt: "You have an Azure DevOps organization that contains a project named Project1.\nYou need to create a published wiki in Project1.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: C. In Project1, create an Azure DevOps repository.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the Storage settings of Project1."
      },
      {
        id: "B",
        text: "In Project1, create an Azure DevOps pipeline."
      },
      {
        id: "C",
        text: "In Project1, create an Azure DevOps repository."
      },
      {
        id: "D",
        text: "Modify the Team configuration settings of Project1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 244,
    number: 17,
    topic: "Topic 6",
    prompt: "Your company plans to use an agile approach to software development.\nYou need to recommend an application to provide communication between members of the development team who work in locations around the\nworld. The applications must meet the following requirements:\n✑ Provide the ability to isolate the members of different project teams into separate communication channels and to keep a history of the chats\nwithin those channels.\n✑ Be available on Windows 10, Mac OS, iOS, and Android operating systems.\n✑ Provide the ability to add external contractors and suppliers to projects.\n✑ Integrate directly with Azure DevOps.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: D. Microsoft Teams",
    type: "single",
    options: [
      {
        id: "A",
        text: "Microsoft Project"
      },
      {
        id: "B",
        text: "Bamboo"
      },
      {
        id: "C",
        text: "Microsoft Lync"
      },
      {
        id: "D",
        text: "Microsoft Teams "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 245,
    number: 18,
    topic: "Topic 6",
    prompt: "You are developing a multi-tier application. The application will use Azure App Service web apps as the front end and an Azure SQL database as\nthe back end.\nThe application will use Azure functions to write some data to Azure Storage.\nYou need to send the Azure DevOps team an email message when the front end fails to return a status code of 200.\nWhich feature should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Service Map in Azure Log Analytics"
      },
      {
        id: "B",
        text: "availability tests in Azure Application Insights"
      },
      {
        id: "C",
        text: "Profiler in Azure Application Insights"
      },
      {
        id: "D",
        text: "Application Map in Azure Application Insights"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 246,
    number: 19,
    topic: "Topic 6",
    prompt: "You have a project in Azure DevOps named Project1. Project1 contains a published wiki.\nYou need to change the order of pages in the navigation pane of the published wiki in the Azure DevOps portal.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "At the root of the wiki, create a file named .order that defines the page hierarchy."
      },
      {
        id: "B",
        text: "At the root of the wiki, create a file named wiki.md that defines the page hierarchy."
      },
      {
        id: "C",
        text: "Rename the pages in the navigation pane."
      },
      {
        id: "D",
        text: "Drag and drop the pages in the navigation pane."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 247,
    number: 20,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou have a GitHub organization named org1 and an Azure tenant named Tenant1.\nYou need to enable single sign-on (SSO) in Azure Active Directory (Azure AD) for the users in org1.\nWhich URIs should you use for the SAML configuration in Azure AD? To answer, drag the appropriate URIs to the correct settings. Each URI may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: https://github.com/orgs/org1, https://github.com/orgs/org1/saml/consume, https://github.com/orgs/org1/sso",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "https://github.com/orgs/org1"
      },
      {
        id: "O2",
        text: "https://github.com/orgs/org1/saml/consume"
      },
      {
        id: "O3",
        text: "https://github.com/orgs/org1/sso"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2",
      "t3:O3"
    ]
  },
  {
    id: 248,
    number: 21,
    topic: "Topic 6",
    prompt: "Your company plans to use an agile approach to software development.\nYou need to recommend an application to provide communication between members of the development team who work in locations around the\nworld. The applications must meet the following requirements:\n✑ Provide the ability to isolate the members of different project teams into separate communication channels and to keep a history of the chats\nwithin those channels.\n✑ Be available on Windows 10, Mac OS, iOS, and Android operating systems.\n✑ Provide the ability to add external contractors and suppliers to projects.\n✑ Integrate directly with Azure DevOps.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: Slack",
    type: "single",
    options: [
      {
        id: "A",
        text: "Skype for Business"
      },
      {
        id: "B",
        text: "Bamboo"
      },
      {
        id: "C",
        text: "Octopus"
      },
      {
        id: "D",
        text: "Slack"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 249,
    number: 22,
    topic: "Topic 6",
    prompt: "You are designing a YAML template for use with Azure Pipelines. The template will include the outputfile parameter.\nWhich two methods can you use to reference the parameter? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: A: ${{parameters.outputfile}}, E: ${{parameters['outputfile']}}",
    type: "single",
    options: [
      {
        id: "A",
        text: "${{parameters.outputfile}}"
      },
      {
        id: "B",
        text: "$(parameters['outputfile'])"
      },
      {
        id: "C",
        text: "$(parameters.outputfile)"
      },
      {
        id: "D",
        text: "$(parameters[outputfile])"
      },
      {
        id: "E",
        text: "${{parameters['outputfile']}}"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 250,
    number: 23,
    topic: "Topic 6",
    prompt: "You have a pipeline named Pipeline1 in Azure Pipelines.\nYou need to create a service connection to enable Pipeline1 to download a public container image.\nWhich type of service connection should you create?",
    keySource: "source",
    explanation: "Source answer: B; a Docker registery",
    type: "single",
    options: [
      {
        id: "A",
        text: "a Docker host"
      },
      {
        id: "B",
        text: "a Docker registry"
      },
      {
        id: "C",
        text: "Azure Service Fabric"
      },
      {
        id: "D",
        text: "Azure Kubernetes Service (AKS) "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 251,
    number: 24,
    topic: "Topic 6",
    prompt: "You have a project in Azure DevOps named Project1 that contains a Kanban board named Board1.\nYou create a Microsoft Teams channel and add the Azure Boards app to the channel.\nYou need to ensure that users can create work items in Board1 from Microsoft Teams.\nWhich command should you run?",
    keySource: "source",
    explanation: "Source answer: azure boards link",
    type: "single",
    options: [
      {
        id: "A",
        text: "@azure boards subscriptions"
      },
      {
        id: "B",
        text: "@azure boards create"
      },
      {
        id: "C",
        text: "@azure boards sign in"
      },
      {
        id: "D",
        text: "@azure boards link"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 252,
    number: 25,
    topic: "Topic 6",
    prompt: "You manage a project by using Azure Board, and you manage the project code by using Azure Repos.\nYou have a bug work item that has an ID of 123.\nYou need to set the work item state to Resolved.\nWhat should you add to the commit message?",
    keySource: "source",
    explanation: "Source answer: Fixes #123",
    type: "single",
    options: [
      {
        id: "A",
        text: "#123 completes"
      },
      {
        id: "B",
        text: "#123 Resolved"
      },
      {
        id: "C",
        text: "Completed #123"
      },
      {
        id: "D",
        text: "Fixes #123"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 253,
    number: 26,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a storage account and 20 virtual machines.\nYou plan to use LogRhythm for aggregation and analysis of the virtual machine logs.\nYou need to configure AzLog to export the logs and push them to the storage account.\nIn which format should you export the logs?",
    keySource: "source",
    explanation: "Source answer: JSON",
    type: "single",
    options: [
      {
        id: "A",
        text: "JSON"
      },
      {
        id: "B",
        text: "EVTX"
      },
      {
        id: "C",
        text: "EVT"
      },
      {
        id: "D",
        text: "binary "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 254,
    number: 27,
    topic: "Topic 6",
    prompt: "DRAG DROP\n-\nYou use Exabeam Fusion SIEM and the Azure cloud platform.\nYou need to integrate Exabeam and Azure. The solution must use OAuth authentication.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Create a client secret, Register an Exambeam application in Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "comment"
      },
      {
        id: "O2",
        text: "milestone"
      },
      {
        id: "O3",
        text: "description"
      },
      {
        id: "O4",
        text: "You plan to create a pull request in GitHub."
      },
      {
        id: "O5",
        text: "label"
      },
      {
        id: "O6",
        text: "title"
      },
      {
        id: "O7",
        text: "Create a client secret"
      },
      {
        id: "O8",
        text: "Register an Exambeam application in Microsoft Azure Active Directory (Azure AD)"
      },
      {
        id: "O9",
        text: "part of Microsoft Entra."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9"
    ]
  },
  {
    id: 255,
    number: 28,
    topic: "Topic 6",
    prompt: "You use GitHub for source control and Azure Boards for project management. GitHub and Azure Boards are integrated.\nYou plan to create a pull request in GitHub.\nYou need to automatically link the request to an existing Azure Boards work item by using the text of AB#.\nTo which two elements can you add the text? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "milestone"
      },
      {
        id: "B",
        text: "label"
      },
      {
        id: "C",
        text: "title"
      },
      {
        id: "D",
        text: "comment"
      },
      {
        id: "E",
        text: "description "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 256,
    number: 29,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou are using Agile process methodologies in Azure DevOps.\nYou need to deploy a dashboard that will provide progress reports for the following work items:\n• How long it took to close a work item after it was created.\n• How long it took to close a work item after the work was started.\nWhich type of widget should you use for each work item? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Lead Time, cycle time",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "GitHub user credentials"
      },
      {
        id: "O2",
        text: "Velocity"
      },
      {
        id: "O3",
        text: "Lead Time"
      },
      {
        id: "O4",
        text: "cycle time"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4"
    ]
  },
  {
    id: 257,
    number: 30,
    topic: "Topic 6",
    prompt: "You are integrating an Azure Boards project and a GitHub repository.\nYou need to authenticate Azure Boards to GitHub.\nWhich two authentication methods can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: D.E.",
    type: "single",
    options: [
      {
        id: "A",
        text: "a publisher certificate"
      },
      {
        id: "B",
        text: "a trusted root certificate"
      },
      {
        id: "C",
        text: "Microsoft Azure Active Directory (Azure AD), part of Microsoft Entra"
      },
      {
        id: "D",
        text: "GitHub user credentials"
      },
      {
        id: "E",
        text: "a personal access token (PAT) "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 258,
    number: 31,
    topic: "Topic 6",
    prompt: "You have a GitHub repository that is integrated with Azure Boards. Azure Boards has a work item that has the number 715.\nYou need to ensure that when you commit source code in GitHub, the work item is updated automatically.\nWhat should you include in the commit comments?",
    keySource: "source",
    explanation: "Source answer: B. AB#715",
    type: "single",
    options: [
      {
        id: "A",
        text: "the URL of the work item"
      },
      {
        id: "B",
        text: "AB#715"
      },
      {
        id: "C",
        text: "@715"
      },
      {
        id: "D",
        text: "#715"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 259,
    number: 32,
    topic: "Topic 6",
    prompt: "You are creating a dashboard in Azure Boards.\nYou need to visualize the time from when work starts on a work item until the work item is closed.\nWhich type of widget should you use?",
    keySource: "source",
    explanation: "Source answer: A. cycle time",
    type: "single",
    options: [
      {
        id: "A",
        text: "cycle time"
      },
      {
        id: "B",
        text: "velocity"
      },
      {
        id: "C",
        text: "cumulative fiow"
      },
      {
        id: "D",
        text: "lead time"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 260,
    number: 33,
    topic: "Topic 6",
    prompt: "You manage a project by using Azure Boards. You manage the project code by using GitHub.\nYou have three work items that have IDs of 456, 457, and 458.\nYou need to create a pull request that will be linked to all the work items. The solution must set the state of work item 456 to done.\nWhat should you add to the commit message?",
    keySource: "source",
    explanation: "Source answer: B. Fixes #AB456, #AB457, #AB458",
    type: "single",
    options: [
      {
        id: "A",
        text: "Fixes #456, #457, #458"
      },
      {
        id: "B",
        text: "Fixes #AB456, #AB457, #AB458"
      },
      {
        id: "C",
        text: "#456, #457, #458 Completed #456"
      },
      {
        id: "D",
        text: "#AB456, #AB457, #AB458 "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 261,
    number: 34,
    topic: "Topic 6",
    prompt: "You manage code by using GitHub.\nYou plan to ensure that all GitHub Actions are validated by a security team.\nYou create a branch protection rule requiring that code changes be reviewed by code owners.\nYou need to create the CODEOWNERS file.\nWhere should you create the file?",
    keySource: "source",
    explanation: "Source answer: B. .github/",
    type: "single",
    options: [
      {
        id: "A",
        text: ".github/actions/"
      },
      {
        id: "B",
        text: ".github/"
      },
      {
        id: "C",
        text: ".git/"
      },
      {
        id: "D",
        text: ".github/workfiows/"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 262,
    number: 35,
    topic: "Topic 6",
    prompt: "DRAG DROP\n-\nYou are implementing a new project in Azure DevOps.\nYou need to assess the performance of the project. The solution must identify the following metrics:\n• How long it takes to complete a work item\n• The percentage of defects found in production\nWhich DevOps KPI should you review for each metric? To answer, drag the appropriate KPIs to the correct metrics. Each KPI may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Cycle time, Defect escape rate",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Deployment speed"
      },
      {
        id: "O2",
        text: "Cycle time"
      },
      {
        id: "O3",
        text: "Defect escape rate"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 263,
    number: 36,
    topic: "Topic 6",
    prompt: "You manage a project by using Azure Boards. You manage the project code by using GitHub.\nYou have three work items that have IDs of 456, 457, and 458.\nYou need to create a pull request that will be linked to all the work items. The solution must set the state of work item 456 to done.\nWhat should you add to the commit message?",
    keySource: "source",
    explanation: "Source answer: D (statt completed -> fixed)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Done #456, #457, #458"
      },
      {
        id: "B",
        text: "#AB456, #AB457, #AB458"
      },
      {
        id: "C",
        text: "#456, #457, #458 Completed #456"
      },
      {
        id: "D",
        text: "#AB456, #AB457, #AB458 Completed #AB456"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 264,
    number: 37,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure container registry. The container registry contains an ACR Tasks task named Task1. Task1\nis configured to run once every five days.\nYou need to trigger Task1 to run immediately.\nWhich command should you run?",
    keySource: "source",
    explanation: "Source answer: A. az acr task run",
    type: "single",
    options: [
      {
        id: "A",
        text: "az acr task run"
      },
      {
        id: "B",
        text: "az acr build"
      },
      {
        id: "C",
        text: "az acr taskrun"
      },
      {
        id: "D",
        text: "az acr run"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 265,
    number: 38,
    topic: "Topic 6",
    prompt: "You manage a project by using Azure Boards. You manage the project code by using GitHub.\nYou have three work items that have IDs of 456, 457, and 458.\nYou need to create a pull request that will be linked to all the work items. The solution must set the state of work item 456 to done.\nWhat should you add to the commit message?",
    keySource: "source",
    explanation: "Source answer: D (verifies)",
    type: "single",
    options: [
      {
        id: "A",
        text: "#AB456, #AB457, #AB458 Completed #AB456"
      },
      {
        id: "B",
        text: "#456, #457, #458 Completed #456"
      },
      {
        id: "C",
        text: "Done #AB456, #AB457, #AB458"
      },
      {
        id: "D",
        text: "#AB456, #AB457, #AB458 Verifies #AB456 "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 266,
    number: 39,
    topic: "Topic 6",
    prompt: "You manage projects by using Azure Boards.\nYou have a current work item name itemA that is dependant on a work item named itemB.\nYou need to define the dependency for itemA.\nWhat should you do in the web portal for Azure DevOps?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a Parent link to the user story of itemA."
      },
      {
        id: "B",
        text: "From Backlogs, open the context menu, select Add link, and then select itemA. Set Link type to Successor and add the ID of itemB."
      },
      {
        id: "C",
        text: "From itemA, open the Links tab, and then select Add link. Set Link type to References and add the ID of itemB."
      },
      {
        id: "D",
        text: "From Backlogs, open he context menu, select Add link, and then select itemA. Set Link type to References and add the ID of itemB."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 267,
    number: 40,
    topic: "Topic 6",
    prompt: "You manage projects by using Azure Boards.\nYou have a current work item name itemA that is dependant on a work item named itemB.\nYou need to define the dependency for itemA.\nWhat should you do in the web portal for Azure DevOps?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "From itemA, open the Links tab, and then select Add link. Set Link type to Related and add the ID of itemB."
      },
      {
        id: "B",
        text: "From Backlogs, open the context menu, select Add link, and then select itemA. Set Link type to Successor and add the ID of itemB."
      },
      {
        id: "C",
        text: "From itemA, open the Links tab, and then select Add link. Set Link type to References and add the ID of itemB."
      },
      {
        id: "D",
        text: "From Queries, open the context menu, select Add link, and then select Existing Item. Set Link type to Affected By and add the ID of itemB. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 268,
    number: 41,
    topic: "Topic 6",
    prompt: "You have the services shown in the following table.\nYou manage a project by using Azure Boards.\nYou need to notify the services of build status changes.\nWhich services can be notified by using a webhook?",
    keySource: "source",
    explanation: "Source answer: C. Service1 and Service 2",
    type: "single",
    options: [
      {
        id: "A",
        text: "Service1 only"
      },
      {
        id: "B",
        text: "Service2 only"
      },
      {
        id: "C",
        text: "Service1 and Service2 "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 269,
    number: 42,
    topic: "Topic 6",
    prompt: "DRAG DROP\n-\nYou are using Agile process methodologies and Azure Boards in Azure DevOps.\nYou import the work items shown in the following table.\nYou need to categorize the items.\nWhich state should you assign to each item? To answer, drag the appropriate states to the correct items. Each state may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Item1: Resolved, Item2: Proposed, Item3: Completed",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Item1: Resolved"
      },
      {
        id: "O2",
        text: "Item2: Proposed"
      },
      {
        id: "O3",
        text: "Item3: Completed"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2",
      "t3:O3"
    ]
  },
  {
    id: 270,
    number: 43,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure Pipelines pipeline named Pipeline1 and an app named App1. Pipeline1 is used to automate\nthe building of App1.\nYou have a Slack channel named App1chat that includes an incoming webhook.\nYou need to ensure that when a successful build of App1 is created, a notification is sent to App1chat by using the webhook.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: C. a subscription",
    type: "single",
    options: [
      {
        id: "A",
        text: "a notification"
      },
      {
        id: "B",
        text: "an alert rule"
      },
      {
        id: "C",
        text: "a subscription"
      },
      {
        id: "D",
        text: "an action group"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 271,
    number: 44,
    topic: "Topic 6",
    prompt: "You manage projects by using Azure Boards. You manage project code by using GitHub.\nYou have a work item that has an ID of 123.\nYou need to link work item 123 to a new pull request.\nWhat are two ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct solution is worth one point.",
    keySource: "source",
    explanation: "Source answer: A.B.",
    type: "single",
    options: [
      {
        id: "A",
        text: "In the Development section for work item 123, select Add link, and then enter the URL of the pull request."
      },
      {
        id: "B",
        text: "To the description of the pull request, add #AB123."
      },
      {
        id: "C",
        text: "To work item 123 add a comment that includes the URL of the pull request."
      },
      {
        id: "D",
        text: "From work item 123, open the Links tab, select Add link, select Existing item, and then enter the URL of the commit. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 272,
    number: 45,
    topic: "Topic 6",
    prompt: "DRAG DROP\n-\nYou plan to use Azure DevOps in development processes.\nYou identify the following issues with the existing development processes:\n• Frequent discovery of bugs in production\n• Increasing detection of bugs by customers\n• Slow resolution of bugs and slow resumption of production\nYou need to implement Key Performance Indicators (KPIs) to track each issue.\nWhich KPI should you implement for each issue? To answer, drag the appropriate KPIs to the correct issues. Each KPI may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Bug report rate, Defect escape rate, Application failure rates",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Deployment failure rates"
      },
      {
        id: "O2",
        text: "You plan to use Azure DevOps in development processes."
      },
      {
        id: "O3",
        text: "Bug report rate"
      },
      {
        id: "O4",
        text: "Defect escape rate"
      },
      {
        id: "O5",
        text: "Application failure rates"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4",
      "t3:O5"
    ]
  },
  {
    id: 273,
    number: 46,
    topic: "Topic 6",
    prompt: "You manage projects by using Azure Boards.\nYou have a current work item name itemA that is dependant on a work item named itemB.\nYou need to define the dependency for itemA.\nWhat should you do in the web portal for Azure DevOps?",
    keySource: "source",
    explanation: "Source answer: D.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a Parent link to the user story of itemA."
      },
      {
        id: "B",
        text: "From Backlogs, open the context menu, select Add link, and then select itemA. Set Link type to References and add the ID of itemB."
      },
      {
        id: "C",
        text: "From itemA, open the Links tab, and then select Add link. Set Link type to References and add the ID of itemB."
      },
      {
        id: "D",
        text: "From itemA, open the Links tab, and then select Add link. Set Link type to Successor and add the ID of itemB. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 274,
    number: 47,
    topic: "Topic 6",
    prompt: "You have a project in Azure DevOps named App Project that is used to develop an app named App1. App1Project has an Azure Boards team\ndashboard that is used to monitor the progress of App1 and track work items.\nYou need to track how long it takes to close a work item once work for the item has commenced.\nWhich type of widget should you add to the dashboard?",
    keySource: "source",
    explanation: "Source answer: D. Cycle time",
    type: "single",
    options: [
      {
        id: "A",
        text: "sprint burndown"
      },
      {
        id: "B",
        text: "velocity"
      },
      {
        id: "C",
        text: "lead time"
      },
      {
        id: "D",
        text: "cycle time"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 275,
    number: 48,
    topic: "Topic 6",
    prompt: "You manage a project by using Azure Board, and you manage the project code by using Azure Repos.\nYou have a bug work item that has an ID of 123.\nYou need to set the work item state to Resolved.\nWhat should you add to the commit message?",
    keySource: "source",
    explanation: "Source answer: D. Fixes #123",
    type: "single",
    options: [
      {
        id: "A",
        text: "#123 completes"
      },
      {
        id: "B",
        text: "Resolves #AB-123"
      },
      {
        id: "C",
        text: "Verifies #123"
      },
      {
        id: "D",
        text: "Fixes #123"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 276,
    number: 1,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to recommend an integration strategy for the build process of a Java application. The solution must meet the following requirements:\n✑ The build must access an on-premises dependency management system.\n✑ The build outputs must be stored as Server artifacts in Azure DevOps.\n✑ The source code must be stored in a Git repository in Azure DevOps.\nSolution: Configure the build pipeline to use a Microsoft-hosted agent pool running the Windows Server 2019 with Visual Studio 2019 image.\nInclude the Java Tool\nInstaller task in the build pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 277,
    number: 2,
    topic: "Topic 7",
    prompt: "You have a project in Azure DevOps.\nYou create the following YAML template named Template1.yml.\nsteps:\n- script: npm install\n- script: yarn install\n- script: npm run compile\nYou create the following pipeline named File1.yml.\nparameters:\nusersteps:\n- task: MyTask@1\n- script: echo Done\nYou need to ensure that Template1.yaml runs before File1.yml.\nHow should you update File1.yml?",
    keySource: "source",
    explanation: "Source answer: C. extends: template:",
    type: "single",
    options: [
      {
        id: "A",
        text: "parameters: usersteps: extends: template: template1.yml - task: MyTask@1 - script: echo Done"
      },
      {
        id: "B",
        text: "template: template1.yml parameters: usersteps: - task: MyTask@1 - script: echo Done"
      },
      {
        id: "C",
        text: "extends: template: templatel.yml parameters: usersteps: - task: MyTask@1 - script: echo Done"
      },
      {
        id: "D",
        text: "parameters: usersteps: - template: templatel.yml - task: MyTask@1 - script: echo Done"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 278,
    number: 3,
    topic: "Topic 7",
    prompt: "You have an Azure solution that contains a build pipeline in Azure Pipelines.\nYou experience intermittent delays before the build pipeline starts.\nYou need to reduce the time it takes to start the build pipeline.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A oder D (most voted A)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable self-hosted build agents."
      },
      {
        id: "B",
        text: "Create a new agent pool."
      },
      {
        id: "C",
        text: "Split the build pipeline into multiple stages."
      },
      {
        id: "D",
        text: "Purchase an additional parallel job."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 279,
    number: 4,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to recommend an integration strategy for the build process of a Java application. The solution must meet the following requirements:\n✑ The build must access an on-premises dependency management system.\n✑ The build outputs must be stored as Server artifacts in Azure DevOps.\n✑ The source code must be stored in a Git repository in Azure DevOps.\nSolution: Configure the build pipeline to use a Microsoft-hosted agent pool running a Linux image. Include the Java Tool Installer task in the build\npipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 280,
    number: 5,
    topic: "Topic 7",
    prompt: "You store source code in a Git repository in Azure Repos. You use a third-party continuous integration (CI) tool to control builds.\nWhat will Azure DevOps use to authenticate with the tool?",
    keySource: "source",
    explanation: "Source answer: B. a personal access token(PAT)",
    type: "single",
    options: [
      {
        id: "A",
        text: "certificate authentication"
      },
      {
        id: "B",
        text: "a personal access token (PAT)"
      },
      {
        id: "C",
        text: "a Shared Access Signature (SAS) token"
      },
      {
        id: "D",
        text: "NTLM authentication"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 281,
    number: 6,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou are configuring Azure Pipelines for three projects in Azure DevOps as shown in the following table.\nWhich version control system should you recommend for each project? To answer, drag the appropriate version control systems to the correct\nprojects. Each version control system may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll\nto view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: 1 -> Git in Azure DevOps, 2 -> Github Enterprise, 3 -> Subversion",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "GitHub Enterprise"
      },
      {
        id: "O2",
        text: "1 -> Git in Azure DevOps"
      },
      {
        id: "O3",
        text: "2 -> Github Enterprise"
      },
      {
        id: "O4",
        text: "3 -> Subversion"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 282,
    number: 7,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to recommend an integration strategy for the build process of a Java application. The solution must meet the following requirements:\n✑ The builds must access an on-premises dependency management system.\n✑ The build outputs must be stored as Server artifacts in Azure DevOps.\n✑ The source code must be stored in a Git repository in Azure DevOps.\nSolution: Configure an Octopus Tentacle on an on-premises machine. Use the Package Application task in the build pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 283,
    number: 8,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to recommend an integration strategy for the build process of a Java application. The solution must meet the following requirements:\n✑ The builds must access an on-premises dependency management system.\n✑ The build outputs must be stored as Server artifacts in Azure DevOps.\nThe source code must be stored in a Git repository in Azure DevOps.\nSolution: Install and configure a self-hosted build agent on an on-premises machine. Configure the build pipeline to use the Default agent pool.\nInclude the Java\nTool Installer task in the build pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 284,
    number: 9,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to recommend an integration strategy for the build process of a Java application. The solution must meet the following requirements:\n✑ The builds must access an on-premises dependency management system.\n✑ The build outputs must be stored as Server artifacts in Azure DevOps.\n✑ The source code must be stored in a Git repository in Azure DevOps.\nSolution: Configure the build pipeline to use a Hosted VS 2019 agent pool. Include the Java Tool Installer task in the build pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 285,
    number: 10,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to recommend an integration strategy for the build process of a Java application. The solution must meet the following requirements:\n✑ The builds must access an on-premises dependency management system.\n✑ The build outputs must be stored as Server artifacts in Azure DevOps.\n✑ The source code must be stored in a Git repository in Azure DevOps.\nSolution: Configure the build pipeline to use a Hosted Ubuntu agent pool. Include the Java Tool Installer task in the build pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. no",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 286,
    number: 11,
    topic: "Topic 7",
    prompt: "Your company uses a Git repository in Azure Repos to manage the source code of a web application. The master branch is protected from direct\nupdates.\nDevelopers work on new features in the topic branches.\nBecause of the high volume of requested features, it is dificult to follow the history of the changes to the master branch.\nYou need to enforce a pull request merge strategy. The strategy must meet the following requirements:\n✑ Consolidate commit histories.\n✑ Merge the changes into a single commit.\nWhich merge strategy should you use in the branch policy?",
    keySource: "source",
    explanation: "Source answer: A. squash merge",
    type: "single",
    options: [
      {
        id: "A",
        text: "squash merge"
      },
      {
        id: "B",
        text: "fast-forward merge"
      },
      {
        id: "C",
        text: "Git fetch"
      },
      {
        id: "D",
        text: "no-fast-forward merge"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 287,
    number: 12,
    topic: "Topic 7",
    prompt: "Your company uses cloud-hosted Jenkins for builds.\nYou need to ensure that Jenkins can retrieve source code from Azure Repos.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: C.D.E. (most voted 48%)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create a webhook in Jenkins."
      },
      {
        id: "B",
        text: "Add the Team Foundation Server (TFS) plug-in to Jenkins."
      },
      {
        id: "C",
        text: "Add a personal access token to your Jenkins account."
      },
      {
        id: "D",
        text: "Create a personal access token (PAT) in your Azure DevOps account."
      },
      {
        id: "E",
        text: "Create a service hook in Azure DevOps. "
      }
    ],
    correct: [
      "C",
      "D",
      "E"
    ]
  },
  {
    id: 288,
    number: 13,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYour company has four projects. The version control requirements for each project are shown in the following table.\nYou plan to use Azure Repos for all the projects.\nWhich version control system should you use for each project? To answer, drag the appropriate version control systems to the correct projects.\nEach version control system may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view\ncontent.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: TFVS(Team Foundation Version Control), Git, Git, TFVS",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "JaCoCo"
      },
      {
        id: "O2",
        text: "MSTest"
      },
      {
        id: "O3",
        text: "pasaz"
      },
      {
        id: "O4",
        text: "JUnit"
      },
      {
        id: "O5",
        text: "TFVS(Team Foundation Version Control)"
      },
      {
        id: "O6",
        text: "Git"
      },
      {
        id: "O7",
        text: "TFVS"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O6",
      "t4:O7"
    ]
  },
  {
    id: 289,
    number: 14,
    topic: "Topic 7",
    prompt: "You are automating the build process for a Java-based application by using Azure DevOps.\nYou need to add code coverage testing and publish the outcomes to the pipeline.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: C. JaCoCo",
    type: "single",
    options: [
      {
        id: "A",
        text: "Bullseye Coverage"
      },
      {
        id: "B",
        text: "JUnit"
      },
      {
        id: "C",
        text: "JaCoCo"
      },
      {
        id: "D",
        text: "MSTest "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 290,
    number: 15,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou company uses Azure DevOps to deploy infrastructures to Azure.\nPipelines are developed by using YAML.\nYou execute a pipeline and receive the results in the web portal for Azure Pipelines as shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: 1 Job, 3 stages (build, deploy to dev, deploy to UAT)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "one stage"
      },
      {
        id: "O2",
        text: "Build_vmecontains | [¥]"
      },
      {
        id: "O3",
        text: "The pipeline contains J]"
      },
      {
        id: "O4",
        text: "1 Job"
      },
      {
        id: "O5",
        text: "3 stages (build"
      },
      {
        id: "O6",
        text: "deploy to dev"
      },
      {
        id: "O7",
        text: "deploy to UAT)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6",
      "t4:O7"
    ]
  },
  {
    id: 291,
    number: 16,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou are configuring Azure DevOps build pipelines.\nYou plan to use hosted build agents.\nWhich build agent pool should you use to compile each application type? To answer, drag the appropriate build agent pools to the correct\napplication types. Each build agent pool may be used once, more than once, or not at all. You may need to drag the split bar between panes or\nscroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Hosted macOs, hosted windows container",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Build Agent Pools Answer Area"
      },
      {
        id: "O2",
        text: "MSTest"
      },
      {
        id: "O3",
        text: "Coverlet"
      },
      {
        id: "O4",
        text: "Cobertura"
      },
      {
        id: "O5",
        text: "a self-hosted agent"
      },
      {
        id: "O6",
        text: "a File Transform task"
      },
      {
        id: "O7",
        text: "You have an existing build pipeline in Azure Pipelines."
      },
      {
        id: "O8",
        text: "Hosted macOs"
      },
      {
        id: "O9",
        text: "hosted windows container"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9"
    ]
  },
  {
    id: 292,
    number: 17,
    topic: "Topic 7",
    prompt: "You are automating the build process for a Java-based application by using Azure DevOps.\nYou need to add code coverage testing and publish the outcomes to the pipeline.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A. Cobertura",
    type: "single",
    options: [
      {
        id: "A",
        text: "Cobertura"
      },
      {
        id: "B",
        text: "Bullseye Coverage"
      },
      {
        id: "C",
        text: "MSTest"
      },
      {
        id: "D",
        text: "Coverlet"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 293,
    number: 18,
    topic: "Topic 7",
    prompt: "You have an existing build pipeline in Azure Pipelines.\nYou need to use incremental builds without purging the environment between pipeline executions.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A. a self-hosted agent",
    type: "single",
    options: [
      {
        id: "A",
        text: "a self-hosted agent"
      },
      {
        id: "B",
        text: "Microsoft-hosted parallel jobs"
      },
      {
        id: "C",
        text: "a File Transform task "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 294,
    number: 19,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou are designing YAML-based Azure pipelines for the apps shown in the following table.\nYou need to configure the YAML strategy value for each app. The solution must minimize app downtime.\nWhich value should you configure for each app? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: App1: rolling, App2: canary",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "canary"
      },
      {
        id: "O2",
        text: "Reader"
      },
      {
        id: "O3",
        text: "rolling"
      },
      {
        id: "O4",
        text: "runonce"
      },
      {
        id: "O5",
        text: "Contributor"
      },
      {
        id: "O6",
        text: "App1: rolling"
      },
      {
        id: "O7",
        text: "App2: canary"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7"
    ]
  },
  {
    id: 295,
    number: 20,
    topic: "Topic 7",
    prompt: "You have a private project in Azure DevOps.\nYou need to ensure that a project manager can create custom work item queries to report on the project's progress. The solution must use the\nprinciple of least privilege.\nTo which security group should you add the project manager?",
    keySource: "source",
    explanation: "Source answer: D. Contributor",
    type: "single",
    options: [
      {
        id: "A",
        text: "Reader"
      },
      {
        id: "B",
        text: "Project Collection Administrators"
      },
      {
        id: "C",
        text: "Project Administrators"
      },
      {
        id: "D",
        text: "Contributor "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 296,
    number: 21,
    topic: "Topic 7",
    prompt: "Your company has a project in Azure DevOps for a new application. The application will be deployed to several Azure virtual machines that run\nWindows Server\n2019.\nYou need to recommend a deployment strategy for the virtual machines. The strategy must meet the following requirements:\n✑ Ensure that the virtual machines maintain a consistent configuration.\n✑ Minimize administrative effort to configure the virtual machines.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A. ARM templates…PowerShell Desired State configuration (DSC)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Resource Manager templates and the PowerShell Desired State Configuration (DSC) extension for Windows"
      },
      {
        id: "B",
        text: "Deployment YAML and Azure pipeline deployment groups"
      },
      {
        id: "C",
        text: "Azure Resource Manager templates and the Custom Script Extension for Windows"
      },
      {
        id: "D",
        text: "Deployment YAML and Azure pipeline stage templates"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 297,
    number: 22,
    topic: "Topic 7",
    prompt: "You have an Azure DevOps project that uses many package feeds.\nYou need to simplify the project by using a single feed that stores packages produced by your company and packages consumed from remote\nfeeds. The solution must support public feeds and authenticated feeds.\nWhat should you enable in DevOps?",
    keySource: "source",
    explanation: "Source answer: B. upstream sources",
    type: "single",
    options: [
      {
        id: "A",
        text: "Universal Packages"
      },
      {
        id: "B",
        text: "upstream sources"
      },
      {
        id: "C",
        text: "views in Azure Artifacts"
      },
      {
        id: "D",
        text: "a symbol server "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 298,
    number: 23,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYour company has two virtual machines that run Linux in a third-party public cloud.\nYou plan to use the company's Azure Automation State Configuration implementation to manage the two virtual machines and detect\nconfiguration drift.\nYou need to onboard the Linux virtual machines.\nYou install PowerShell Desired State Configuration (DSC) on the virtual machines, and then run register.py.\nWhich three actions should you perform next in sequence? To answer, move the actions from the list of actions to the answer area and arrange\nthem in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create a DSC metaconfiguration\n\nCopy the metaconfiguration to the virtual machines\n\nFrom the virtual machines, run setdsclocalconfigurationmanager.py",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a DSC metaconfiguration"
      },
      {
        id: "O2",
        text: "From the virtual machines, run"
      },
      {
        id: "O3",
        text: "setdsclocalconfigurationmanager.py"
      },
      {
        id: "O4",
        text: "machines"
      },
      {
        id: "O5",
        text: "Azure Automation ®"
      },
      {
        id: "O6",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O7",
        text: "Copy the metaconfiguration to the virtual machines"
      },
      {
        id: "O8",
        text: "From the virtual machines"
      },
      {
        id: "O9",
        text: "run setdsclocalconfigurationmanager.py"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O7",
      "t3:O8",
      "t4:O9"
    ]
  },
  {
    id: 299,
    number: 24,
    topic: "Topic 7",
    prompt: "SIMULATION -\nYou plan to deploy a runbook that will create Azure AD user accounts.\nYou need to ensure that runbooks can run the Azure PowerShell cmdlets for Azure Active Directory.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: (Simulation)",
    type: "single",
    options: [
      {
        id: "A",
        text: "(Simulation)"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 300,
    number: 25,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou are creating a container for an ASP.NET Core app.\nYou need to create a Dockerfile file to build the image. The solution must ensure that the size of the image is minimized.\nHow should you configure the file? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or\nnot at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build-env\n\nWORKDIR /app\n\nCOPY *.csproj ./\n\nRUN dotnet restore\n\nCOPY . ./\n\nRUN dotnet publish -c Release -o out\n\nFROM mcr.microsoft.com/dotnet/core/aspnet:2.1\n\nWORKDIR /app\n\nCOPY --from=build-env /app/out .\n\nENTRYPOINT [\"dotnet\", \"asp-net-getting-started.dll\"]",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "dotnet"
      },
      {
        id: "O2",
        text: "MvcMovie.dl1"
      },
      {
        id: "O3",
        text: "Policy Types"
      },
      {
        id: "O4",
        text: "A status policy"
      },
      {
        id: "O5",
        text: "dotnet publish -c Release -o out FROM | Value i AS build-env"
      },
      {
        id: "O6",
        text: "A check-in policy Pull requests must have a Quality Gate status"
      },
      {
        id: "O7",
        text: "FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build-env"
      },
      {
        id: "O8",
        text: "WORKDIR /app"
      },
      {
        id: "O9",
        text: "COPY *.csproj ./"
      },
      {
        id: "O10",
        text: "RUN dotnet restore"
      },
      {
        id: "O11",
        text: "COPY . ./"
      },
      {
        id: "O12",
        text: "RUN dotnet publish -c Release -o out"
      },
      {
        id: "O13",
        text: "FROM mcr.microsoft.com/dotnet/core/aspnet:2.1"
      },
      {
        id: "O14",
        text: "COPY --from=build-env /app/out ."
      },
      {
        id: "O15",
        text: "ENTRYPOINT [\"dotnet\""
      },
      {
        id: "O16",
        text: "\"asp-net-getting-started.dll\"]"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      },
      {
        id: "t6",
        text: "Blank 6"
      },
      {
        id: "t7",
        text: "Blank 7"
      },
      {
        id: "t8",
        text: "Blank 8"
      },
      {
        id: "t9",
        text: "Blank 9"
      },
      {
        id: "t10",
        text: "Blank 10"
      },
      {
        id: "t11",
        text: "Blank 11"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9",
      "t4:O10",
      "t5:O11",
      "t6:O12",
      "t7:O13",
      "t8:O8",
      "t9:O14",
      "t10:O15",
      "t11:O16"
    ]
  },
  {
    id: 301,
    number: 26,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou are configuring the settings of a new Git repository in Azure Repos.\nYou need to ensure that pull requests in a branch meet the following criteria before they are merged:\n✑ Committed code must compile successfully.\n✑ Pull requests must have a Quality Gate status of Passed in SonarCloud.\nWhich policy type should you configure for each requirement? To answer, drag the appropriate policy types to the correct requirements. Each\npolicy type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: a build policy, a status policy",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "dotnet"
      },
      {
        id: "O2",
        text: "MvcMovie.dl1"
      },
      {
        id: "O3",
        text: "Policy Types"
      },
      {
        id: "O4",
        text: "A status policy"
      },
      {
        id: "O5",
        text: "dotnet publish -c Release -o out FROM | Value i AS build-env"
      },
      {
        id: "O6",
        text: "A check-in policy Pull requests must have a Quality Gate status"
      },
      {
        id: "O7",
        text: "a build policy"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O4"
    ]
  },
  {
    id: 302,
    number: 27,
    topic: "Topic 7",
    prompt: "You use a Git repository in Azure Repos to manage the source code of a web application. Developers commit changes directly to the default\nbranch.\nYou need to implement a change management procedure that meets the following requirements:\n✑ The default branch must be protected, and new changes must be built in the feature branches first.\n✑ Changes must be reviewed and approved by at least one release manager before each merge.\n✑ Changes must be brought into the default branch by using pull requests.\nWhat should you configure in Azure Repos?",
    keySource: "source",
    explanation: "Source answer: A. branch policies of the default branch",
    type: "single",
    options: [
      {
        id: "A",
        text: "branch policies of the default branch"
      },
      {
        id: "B",
        text: "Services in Project Settings"
      },
      {
        id: "C",
        text: "Deployment pools in Project Settings"
      },
      {
        id: "D",
        text: "branch security of the default branch"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 303,
    number: 28,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company uses Azure DevOps to manage the build and release processes for applications.\nYou use a Git repository for applications source control.\nYou need to implement a pull request strategy that reduces the history volume in the master branch.\nSolution: You implement a pull request strategy that uses fast-forward merges.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 304,
    number: 29,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company uses Azure DevOps to manage the build and release processes for applications.\nYou use a Git repository for applications source control.\nYou need to implement a pull request strategy that reduces the history volume in the master branch.\nSolution: You implement a pull request strategy that uses squash merges.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 305,
    number: 30,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company uses Azure DevOps to manage the build and release processes for applications.\nYou use a Git repository for applications source control.\nYou need to implement a pull request strategy that reduces the history volume in the master branch.\nSolution: You implement a pull request strategy that uses an explicit merge.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 306,
    number: 31,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company uses Azure DevOps to manage the build and release processes for applications.\nYou use a Git repository for applications source control.\nYou need to implement a pull request strategy that reduces the history volume in the master branch.\nSolution: You implement a pull request strategy that uses a three-way merge.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 307,
    number: 32,
    topic: "Topic 7",
    prompt: "You need to recommend a Docker container build strategy that meets the following requirements:\n✑ Minimizes image sizes\n✑ Minimizes the security surface area of the final image\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: multi-stage builds",
    type: "single",
    options: [
      {
        id: "A",
        text: "multi-stage builds"
      },
      {
        id: "B",
        text: "PowerShell Desired State Configuration (DSC)"
      },
      {
        id: "C",
        text: "Docker Swarm"
      },
      {
        id: "D",
        text: "single-stage builds "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 308,
    number: 33,
    topic: "Topic 7",
    prompt: "You plan to create an image that will contain a .NET Core application.\nYou have a Dockerfile file that contains the following code. (Line numbers are included for reference only.)\nYou need to ensure that the image is as small as possible when the image is built.\nWhich line should you modify in the file?",
    keySource: "source",
    explanation: "Source answer: C. 4",
    type: "single",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "3"
      },
      {
        id: "C",
        text: "4"
      },
      {
        id: "D",
        text: "7"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 309,
    number: 34,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has a project in Azure DevOps for a new web application.\nYou need to ensure that when code is checked in, a build runs automatically.\nSolution: From the Triggers tab of the build pipeline, you select Batch changes while a build is in progress.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. no",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 310,
    number: 35,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou need to deploy Azure Kubernetes Service (AKS) to host an application. The solution must meet the following requirements:\n✑ Containers must only be published internally.\n✑ AKS clusters must be able to create and manage containers in Azure.\nWhat should you use for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Azure Container Registry, An Azure service principal",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Dockerfile"
      },
      {
        id: "O2",
        text: "Azure Container Registry"
      },
      {
        id: "O3",
        text: "Azure Container Instances"
      },
      {
        id: "O4",
        text: "shrinkwrap.json files."
      },
      {
        id: "O5",
        text: "Delete Package-lock.json."
      },
      {
        id: "O6",
        text: "Configure the File System Agent plug-in."
      },
      {
        id: "O7",
        text: "Add a devDependencies section to Package-lock.json."
      },
      {
        id: "O8",
        text: "manual tasks performed during the planning phase and the deployment phase"
      },
      {
        id: "O9",
        text: "An Azure service principal"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O9"
    ]
  },
  {
    id: 311,
    number: 36,
    topic: "Topic 7",
    prompt: "You have 50 Node.js-based projects that you scan by using WhiteSource. Each project includes Package.json, Package-lock.json, and Npm-\nshrinkwrap.json files.\nYou need to minimize the number of libraries reports by WhiteSource to only the libraries that you explicitly reference.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B. add a devDependencies section to Package-lock.json",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the File System Agent plug-in."
      },
      {
        id: "B",
        text: "Add a devDependencies section to Package-lock.json."
      },
      {
        id: "C",
        text: "Configure the Artifactory plug-in."
      },
      {
        id: "D",
        text: "Delete Package-lock.json."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 312,
    number: 37,
    topic: "Topic 7",
    prompt: "Your company deploys applications in Docker containers.\nYou want to detect known exploits in the Docker images used to provision the Docker containers.\nYou need to integrate image scanning into the application lifecycle. The solution must expose the exploits as early as possible during the\napplication lifecycle.\nWhat should you configure?",
    keySource: "source",
    explanation: "Source answer: A. a task executed in the continuous integration pipeline and a scheduled task that analyzes the image registry",
    type: "single",
    options: [
      {
        id: "A",
        text: "a task executed in the continuous integration pipeline and a scheduled task that analyzes the image registry"
      },
      {
        id: "B",
        text: "manual tasks performed during the planning phase and the deployment phase"
      },
      {
        id: "C",
        text: "a task executed in the continuous deployment pipeline and a scheduled task against a running production container"
      },
      {
        id: "D",
        text: "a task executed in the continuous integration pipeline and a scheduled task that analyzes the production container "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 313,
    number: 38,
    topic: "Topic 7",
    prompt: "Your company has a hybrid cloud between Azure and Azure Stack.\nThe company uses Azure DevOps for its full CI/CD pipelines. Some applications are built by using Erlang and Hack.\nYou need to ensure that Erlang and Hack are supported as part of the build strategy across the hybrid cloud. The solution must minimize\nmanagement overhead.\nWhat should you use to execute the build pipeline?",
    keySource: "source",
    explanation: "Source answer: D. Azure DevOps self-hosted agents on virtual machines that run on Azure Stack",
    type: "single",
    options: [
      {
        id: "A",
        text: "a Microsoft-hosted agent"
      },
      {
        id: "B",
        text: "Azure DevOps self-hosted agents on Azure DevTest Labs virtual machines."
      },
      {
        id: "C",
        text: "Azure DevOps self-hosted agents on Hyper-V virtual machines"
      },
      {
        id: "D",
        text: "Azure DevOps self-hosted agents on virtual machines that run on Azure Stack"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 314,
    number: 39,
    topic: "Topic 7",
    prompt: "Your company has an Azure DevOps project,\nThe source code for the project is stored in an on-premises repository and uses on an on-premises build server.\nYou plan to use Azure DevOps to control the build process on the build server by using a self-hosted agent.\nYou need to implement the self-hosted agent.\nYou download and install the agent on the build server.\nWhich two actions should you perform next? Each correct answer presents part of the solution.",
    keySource: "source",
    explanation: "Source answer: D.E.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "From Azure, create a shared access signature (SAS)."
      },
      {
        id: "B",
        text: "From the build server, create a certificate, and then upload the certificate to Azure Storage."
      },
      {
        id: "C",
        text: "From the build server, create a certificate, and then upload the certificate to Azure Key Vault."
      },
      {
        id: "D",
        text: "From DevOps, create a personal access token (PAT)."
      },
      {
        id: "E",
        text: "From the build server, run config.cmd."
      }
    ],
    correct: [
      "D",
      "E"
    ]
  },
  {
    id: 315,
    number: 40,
    topic: "Topic 7",
    prompt: "You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.\nYou are configuring a build pipeline in Azure Pipelines that will include a task named Task1. Task1 will authenticate by using an Azure AD service\nprincipal.\nWhich three values should you configure for Task1? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: A.C.D. the tenant ID, the client secret, the app ID",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "the tenant ID"
      },
      {
        id: "B",
        text: "the subscription ID"
      },
      {
        id: "C",
        text: "the client secret"
      },
      {
        id: "D",
        text: "the app ID"
      },
      {
        id: "E",
        text: "the object ID "
      }
    ],
    correct: [
      "A",
      "C",
      "D"
    ]
  },
  {
    id: 316,
    number: 41,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou are deploying a new application that uses Azure virtual machines.\nYou plan to use the Desired State Configuration (DSC) extension on the virtual machines.\nYou need to ensure that the virtual machines always have the same Windows feature installed.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: - Create a PowerShell configuration file\n\n- Load the file to Azure Blob storage\n\n- Configure the *DSC extension* on the virtual machines",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a YAML configuration file."
      },
      {
        id: "O2",
        text: "Create a PowerShell configuration file."
      },
      {
        id: "O3",
        text: "a multi-stage Dockerfile"
      },
      {
        id: "O4",
        text: "a single stage Dockerfile"
      },
      {
        id: "O5",
        text: "being published to the pipeline."
      },
      {
        id: "O6",
        text: "Configure the Custom Script Extension"
      },
      {
        id: "O7",
        text: "Load the file to Azure Blob storage. S ®"
      },
      {
        id: "O8",
        text: "- Create a PowerShell configuration file"
      },
      {
        id: "O9",
        text: "Load the file to Azure Blob storage"
      },
      {
        id: "O10",
        text: "Configure the *DSC extension* on the virtual machines"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9",
      "t3:O10"
    ]
  },
  {
    id: 317,
    number: 42,
    topic: "Topic 7",
    prompt: "You need to execute inline testing of an Azure DevOps pipeline that uses a Docker deployment model. The solution must prevent the results from\nbeing published to the pipeline.\nWhat should you use for the inline testing?",
    keySource: "source",
    explanation: "Source answer: C. a multi-stage Dockerfile",
    type: "single",
    options: [
      {
        id: "A",
        text: "a single stage Dockerfile"
      },
      {
        id: "B",
        text: "an Azure Kubernetes Service (AKS) pod"
      },
      {
        id: "C",
        text: "a multi-stage Dockerfile"
      },
      {
        id: "D",
        text: "a Docker Compose file"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 318,
    number: 43,
    topic: "Topic 7",
    prompt: "You are designing an Azure DevOps strategy for your company's development team.\nYou suspect that the team's productivity is low due to accumulate technical debt.\nYou need to recommend a metric to assess the amount of the team's technical debt.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: D. the percentage of overall time spent on rework",
    type: "single",
    options: [
      {
        id: "A",
        text: "the number of code modules in an application"
      },
      {
        id: "B",
        text: "the number of unit test failures"
      },
      {
        id: "C",
        text: "the percentage of unit test failures"
      },
      {
        id: "D",
        text: "the percentage of overall time spent on rework "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 319,
    number: 44,
    topic: "Topic 7",
    prompt: "You are developing an open source solution that uses a GitHub repository.\nYou create a new public project in Azure DevOps.\nYou plan to use Azure Pipelines for continuous build. The solution will use the GitHub Checks API.\nWhich authentication type should you use?",
    keySource: "source",
    explanation: "Source answer: B. GitHub App",
    type: "single",
    options: [
      {
        id: "A",
        text: "OpenID"
      },
      {
        id: "B",
        text: "GitHub App"
      },
      {
        id: "C",
        text: "a personal access token (PAT)"
      },
      {
        id: "D",
        text: "SAML"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 320,
    number: 45,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has a project in Azure DevOps for a new web application.\nYou need to ensure that when code is checked in, a build runs automatically.\nSolution: From the Continuous deployment trigger settings of the release pipeline, you enable the Pull request trigger setting.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 321,
    number: 46,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has a project in Azure DevOps for a new web application.\nYou need to ensure that when code is checked in, a build runs automatically.\nSolution: From the Pre-deployment conditions settings of the release pipeline, you select After stage.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 322,
    number: 47,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has a project in Azure DevOps for a new web application.\nYou need to ensure that when code is checked in, a build runs automatically.\nSolution: From the Pre-deployment conditions settings of the release pipeline, you select Batch changes while a build is in progress.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 323,
    number: 48,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou have an Azure DevOps release pipeline as shown in the following exhibit.\nYou need to complete the pipeline to configure OWASP ZAP for security testing.\nWhich five Azure CLI tasks should you add in sequence? To answer, move the tasks from the list of tasks to the answer area and arrange them in\nthe correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Docker CLI installer (f)\n\nBuild machine image (b)\n\nCall the Baseline Scan (e)\n\nConvert Report Format (a)\n\nDestroy OWASP Container (d)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Build machine image"
      },
      {
        id: "O2",
        text: "Docker CLI installer"
      },
      {
        id: "O3",
        text: "Call the Baseline Scan"
      },
      {
        id: "O4",
        text: "Docker CLI installer (f)"
      },
      {
        id: "O5",
        text: "Build machine image (b)"
      },
      {
        id: "O6",
        text: "Call the Baseline Scan (e)"
      },
      {
        id: "O7",
        text: "Convert Report Format (a)"
      },
      {
        id: "O8",
        text: "Destroy OWASP Container (d)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6",
      "t4:O7",
      "t5:O8"
    ]
  },
  {
    id: 324,
    number: 49,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou have an Azure DevOps pipeline that is used to deploy a Node.js app.\nYou need to ensure that the dependencies are cached between builds.\nHow should you configure the deployment YAML? To answer, drag the appropriate values to the correct targets. Each value may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Entweder ( build.sh + eq(var…)) oder (npm install + ne(var…))",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an agent pool"
      },
      {
        id: "O2",
        text: "Create a deployment group"
      },
      {
        id: "O3",
        text: "build.sh npm_config cache: $(Pipeline.Workspace)/.npm"
      },
      {
        id: "O4",
        text: "Move to a blue/green deployment pattern"
      },
      {
        id: "O5",
        text: "The build pipeline takes approximately one day to complete."
      },
      {
        id: "O6",
        text: "nem | nS (Agent 08) ”"
      },
      {
        id: "O7",
        text: "Entweder ( build.sh + eq(var…)) oder (npm install + ne(var…))"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O7"
    ]
  },
  {
    id: 325,
    number: 50,
    topic: "Topic 7",
    prompt: "You have a build pipeline in Azure Pipelines that uses different jobs to compile an application for 10 different architectures.\nThe build pipeline takes approximately one day to complete.\nYou need to reduce the time it takes to execute the build pipeline.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: C.E. Increase the number of parallel jobs, Create an agent pool",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Move to a blue/green deployment pattern"
      },
      {
        id: "B",
        text: "Create a deployment group"
      },
      {
        id: "C",
        text: "Increase the number of parallel jobs"
      },
      {
        id: "D",
        text: "Reduce the size of the repository"
      },
      {
        id: "E",
        text: "Create an agent pool "
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 326,
    number: 51,
    topic: "Topic 7",
    prompt: "You are creating a build pipeline in Azure Pipelines.\nYou define several tests that might fail due to third-party applications.\nYou need to ensure that the build pipeline completes successfully if the third-party applications are unavailable.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B. Configure flaky tests",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the build pipeline to use parallel jobs"
      },
      {
        id: "B",
        text: "Configure fiaky tests"
      },
      {
        id: "C",
        text: "Increase the test pass percentage"
      },
      {
        id: "D",
        text: "Add the Requirements quality widget to your dashboard"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 327,
    number: 52,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou have an Azure subscription that contains a resources group named RG1. RG1 contains the following resources:\n✑ Four Azure virtual machines that run Windows Server and have Internet Information Services (IIS) installed.\n✑ SQL Server on an Azure virtual machine.\n✑ An Azure Load Balancer.\nYou need to deploy an application to the virtual machines in RG1 by using Azure Pipelines.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create a deployment group\n\nAdd the Azure Pipelines Agent extension to the virtual machines\n\nAdd and configure a deployment group job for the pipeline\n\nexcuse the pipeline",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an agent pool"
      },
      {
        id: "O2",
        text: "Create a deployment group"
      },
      {
        id: "O3",
        text: "Execute the pipeline"
      },
      {
        id: "O4",
        text: "Add the Azure Pipelines Agent"
      },
      {
        id: "O5",
        text: "Add and configure a deployment group"
      },
      {
        id: "O6",
        text: "Add the Puppet Agent extension to the"
      },
      {
        id: "O7",
        text: "job for the pipeline ®"
      },
      {
        id: "O8",
        text: "Add the Azure Pipelines Agent extension to the virtual machines"
      },
      {
        id: "O9",
        text: "Add and configure a deployment group job for the pipeline"
      },
      {
        id: "O10",
        text: "excuse the pipeline"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O8",
      "t3:O9",
      "t4:O10"
    ]
  },
  {
    id: 328,
    number: 53,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has a project in Azure DevOps for a new web application.\nYou need to ensure that when code is checked in, a build runs automatically.\nSolution: From the Triggers tab of the build pipeline, you select Enable continuous integration.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 329,
    number: 54,
    topic: "Topic 7",
    prompt: "You have an Azure DevOps organization named Contoso and an Azure DevOps project named Project1.\nYou plan to use Microsoft-hosted agents to build container images that will host full Microsoft .NET Framework apps in a YAML pipeline in\nProject1.\nWhat are two possible virtual machine images that you can use for the Microsoft-hosted agent pool? Each correct answer presents a complete\nsolution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: A.B.",
    type: "single",
    options: [
      {
        id: "A",
        text: "vs2017-win2016"
      },
      {
        id: "B",
        text: "ubuntu-16.04"
      },
      {
        id: "C",
        text: "win1803"
      },
      {
        id: "D",
        text: "macOS-10.13"
      },
      {
        id: "E",
        text: "vs.2015-win2012r2"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 330,
    number: 55,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou currently use JIRA, Jenkins, and Octopus as part of your DevOps processes.\nYou plan to use Azure DevOps to replace these tools.\nWhich Azure DevOps service should you use to replace each tool? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: Jira: Boards, Jenkins: Build pipelines, Octopus: Release pipelines",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Build pipelines"
      },
      {
        id: "O2",
        text: "Release pipelines"
      },
      {
        id: "O3",
        text: "Boards"
      },
      {
        id: "O4",
        text: "Repos"
      },
      {
        id: "O5",
        text: "Jira: Boards"
      },
      {
        id: "O6",
        text: "Jenkins: Build pipelines"
      },
      {
        id: "O7",
        text: "Octopus: Release pipelines"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7"
    ]
  },
  {
    id: 331,
    number: 56,
    topic: "Topic 7",
    prompt: "Your company has a project in Azure DevOps.\nYou need to ensure that when there are multiple builds pending deployment, only the most recent build is deployed.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: B. deployment queue settings",
    type: "single",
    options: [
      {
        id: "A",
        text: "deployment conditions"
      },
      {
        id: "B",
        text: "deployment queue settings"
      },
      {
        id: "C",
        text: "release gates"
      },
      {
        id: "D",
        text: "pull request triggers"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 332,
    number: 57,
    topic: "Topic 7",
    prompt: "Your company develops a client banking application that processes a large volume of data.\nCode quality is an ongoing issue for the company. Recently, the code quality has deteriorated because of an increase in time pressure on the\ndevelopment team.\nYou need to implement static code analysis.\nDuring which phase should you use static code analysis?",
    keySource: "source",
    explanation: "Source answer: D. build",
    type: "single",
    options: [
      {
        id: "A",
        text: "integration testing"
      },
      {
        id: "B",
        text: "staging"
      },
      {
        id: "C",
        text: "production release"
      },
      {
        id: "D",
        text: "build"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 333,
    number: 58,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou have a project in Azure DevOps that uses packages from multiple public feeds. Some of the feeds are unreliable.\nYou need to consolidate the packages into a single feed.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: (erklärung in Comments)\n\nCreate an azure artifacts feed that uses upstream sources\n\nModify the configuration files to reference the Arure Artifacts feed\n\nRun an initial package restore",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an npm package."
      },
      {
        id: "O2",
        text: "Create a NuGet package."
      },
      {
        id: "O3",
        text: "Create a Microsoft Visual Studio project that includes all the"
      },
      {
        id: "O4",
        text: "Create an Azure Artifacts feed that uses upstream sources. ® ©"
      },
      {
        id: "O5",
        text: "feed."
      },
      {
        id: "O6",
        text: "(erklärung in Comments)"
      },
      {
        id: "O7",
        text: "Create an azure artifacts feed that uses upstream sources"
      },
      {
        id: "O8",
        text: "Modify the configuration files to reference the Arure Artifacts feed"
      },
      {
        id: "O9",
        text: "Run an initial package restore"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O8",
      "t4:O9"
    ]
  },
  {
    id: 334,
    number: 59,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou have the Azure DevOps pipeline shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: 1 Job: (Cloud Agent), 4 Tasks (Nuget Restore, Compile Application, Copy Files, Publish Artifact)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "The pipeline has w job(s)."
      },
      {
        id: "O2",
        text: "The pipeline has w task(s)."
      },
      {
        id: "O3",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O4",
        text: "1 Job: (Cloud Agent)"
      },
      {
        id: "O5",
        text: "4 Tasks (Nuget Restore"
      },
      {
        id: "O6",
        text: "Compile Application"
      },
      {
        id: "O7",
        text: "Copy Files"
      },
      {
        id: "O8",
        text: "Publish Artifact)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6",
      "t4:O7",
      "t5:O8"
    ]
  },
  {
    id: 335,
    number: 60,
    topic: "Topic 7",
    prompt: "SIMULATION -\nYou have an Azure function hosted in an App Service plan named az400-123456789-func1.\nYou need to configure az400-123456789-func1 to upgrade the functions automatically whenever new code is committed to the master branch of\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: Simulation",
    type: "single",
    options: [
      {
        id: "A",
        text: "Simulation"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 336,
    number: 61,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou need to use Azure Automation State Configuration to manage the ongoing consistency of virtual machine configurations.\nWhich five actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Upload\n\nCompile\n\nOnboard\n\nAssing the node configuration\n\nCheck",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a management group."
      },
      {
        id: "O2",
        text: "Rebase"
      },
      {
        id: "O3",
        text: "Configuration."
      },
      {
        id: "O4",
        text: "You make several changes to a branch used for experimentation."
      },
      {
        id: "O5",
        text: "Push"
      },
      {
        id: "O6",
        text: "Fetch"
      },
      {
        id: "O7",
        text: "Merge"
      },
      {
        id: "O8",
        text: "Upload"
      },
      {
        id: "O9",
        text: "Compile"
      },
      {
        id: "O10",
        text: "Onboard"
      },
      {
        id: "O11",
        text: "Assing the node configuration"
      },
      {
        id: "O12",
        text: "Check"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9",
      "t3:O10",
      "t4:O11",
      "t5:O12"
    ]
  },
  {
    id: 337,
    number: 62,
    topic: "Topic 7",
    prompt: "You are developing an application. The application source has multiple branches.\nYou make several changes to a branch used for experimentation.\nYou need to update the main branch to capture the changes made to the experimentation branch and override the history of the Git repository.\nWhich Git option should you use?",
    keySource: "source",
    explanation: "Source answer: A. Rebase",
    type: "single",
    options: [
      {
        id: "A",
        text: "Rebase"
      },
      {
        id: "B",
        text: "Fetch"
      },
      {
        id: "C",
        text: "Merge"
      },
      {
        id: "D",
        text: "Push "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 338,
    number: 63,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou use Azure Pipelines to build and test a React.js application.\nYou have a pipeline that has a single job.\nYou discover that installing JavaScript packages from npm takes approximately five minutes each time you run the pipeline.\nYou need to recommend a solution to reduce the pipeline execution time.\nSolution: You recommend defining a container job that uses a custom container that has the JavaScript packages preinstalled.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 339,
    number: 64,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou use Azure Pipelines to build and test a React.js application.\nYou have a pipeline that has a single job.\nYou discover that installing JavaScript packages from npm takes approximately five minutes each time you run the pipeline.\nYou need to recommend a solution to reduce the pipeline execution time.\nSolution: You recommend enabling pipeline caching.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 340,
    number: 65,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou use Azure Pipelines to build and test a React.js application.\nYou have a pipeline that has a single job.\nYou discover that installing JavaScript packages from npm takes approximately five minutes each time you run the pipeline.\nYou need to recommend a solution to reduce the pipeline execution time.\nSolution: You recommend enabling parallel jobs for the pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 341,
    number: 66,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to create a release pipeline that will deploy Azure resources by using Azure Resource Manager templates. The release pipeline will create\nthe following resources:\n✑ Two resource groups\n✑ Four Azure virtual machines in one resource group\n✑ Two Azure SQL databases in other resource group\nYou need to recommend a solution to deploy the resources.\nSolution: Create two standalone templates, each of which will deploy the resources in its respective group.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 342,
    number: 67,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to create a release pipeline that will deploy Azure resources by using Azure Resource Manager templates. The release pipeline will create\nthe following resources:\n✑ Two resource groups\n✑ Four Azure virtual machines in one resource group\n✑ Two Azure SQL databases in other resource group\nYou need to recommend a solution to deploy the resources.\nSolution: Create a single standalone template that will deploy all the resources.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 343,
    number: 68,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps project.\nYour build process creates several artifacts.\nYou need to deploy the artifacts to on-premises servers.\nSolution: You deploy a Kubernetes cluster on-premises. You deploy a Helm agent to the cluster. You add a Download Build Artifacts task to the\ndeployment pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 344,
    number: 69,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps project.\nYour build process creates several artifacts.\nYou need to deploy the artifacts to on-premises servers.\nSolution: You deploy a Docker build to an on-premises server. You add a Download Build Artifacts task to the deployment pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 345,
    number: 70,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps project.\nYour build process creates several artifacts.\nYou need to deploy the artifacts to on-premises servers.\nSolution: You deploy an Azure self-hosted agent to an on-premises server. You add a Copy and Publish Build Artifacts task to the deployment\npipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes (50%)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 346,
    number: 71,
    topic: "Topic 7",
    prompt: "You have a project in Azure DevOps named Project1. Project1 contains a pipeline that builds a container image named Image1 and pushes Image1\nto an Azure container registry named ACR1. Image1 uses a base image stored in Docker Hub.\nYou need to ensure that Image1 is updated automatically whenever the base image is updated.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C. Create and rund an Azure Container Registry task.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable the Azure Event Grid resource provider and subscribe to registry events."
      },
      {
        id: "B",
        text: "Add a Docker Hub service connection to Azure Pipelines."
      },
      {
        id: "C",
        text: "Create and run an Azure Container Registry task."
      },
      {
        id: "D",
        text: "Create a service hook in Project1. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 347,
    number: 72,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure DevOps project.\nYour build process creates several artifacts.\nYou need to deploy the artifacts to on-premises servers.\nSolution: You deploy an Octopus Deploy server. You deploy a polled Tentacle agent to an on-premises server. You add an Octopus task to the\ndeployment pipeline.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 348,
    number: 73,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to create a release pipeline that will deploy Azure resources by using Azure Resource Manager templates. The release pipeline will create\nthe following resources:\n✑ Two resource groups\n✑ Four Azure virtual machines in one resource group\n✑ Two Azure SQL databases in other resource group\nYou need to recommend a solution to deploy the resources.\nSolution: Create a main template that will deploy the resources in one resource group and a nested template that will deploy the resources in the\nother resource group.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 349,
    number: 74,
    topic: "Topic 7",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to create a release pipeline that will deploy Azure resources by using Azure Resource Manager templates. The release pipeline will create\nthe following resources:\n✑ Two resource groups\n✑ Four Azure virtual machines in one resource group\n✑ Two Azure SQL databases in other resource group\nYou need to recommend a solution to deploy the resources.\nSolution: Create a main template that has two linked templates, each of which will deploy the resources in its respective group.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 350,
    number: 75,
    topic: "Topic 7",
    prompt: "DRAG DROP -\nYou are building an application that has the following assets:\n✑ Source code\n✑ Logs from automated tests and builds\n✑ Large and frequently updated binary assets\n✑ A common library used by multiple applications\nWhere should you store each asset? To answer, drag the appropriate Azure services to the correct assets. Each service may be used once. You\nmay need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: 1. Azure Repos\n\nAzure Artifacts\n\nAzure Pipelines\n\nAzure Storage",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create two container jobs."
      },
      {
        id: "O2",
        text: "Azure Test Plans"
      },
      {
        id: "O3",
        text: "development."
      },
      {
        id: "O4",
        text: "Azure Services ~~ Answer Area"
      },
      {
        id: "O5",
        text: "Add another self-hosted agent."
      },
      {
        id: "O6",
        text: "Add a Docker Compose task to the build pipelines."
      },
      {
        id: "O7",
        text: "Azure Pipelines | A common library used by muttiple applications C1]"
      },
      {
        id: "O8",
        text: "Change the self-hosted agent to use Red Hat Enterprise Linux (RHEL) 8."
      },
      {
        id: "O9",
        text: "views"
      },
      {
        id: "O10",
        text: "1. Azure Repos"
      },
      {
        id: "O11",
        text: "Azure Artifacts"
      },
      {
        id: "O12",
        text: "Azure Pipelines"
      },
      {
        id: "O13",
        text: "Azure Storage"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O10",
      "t2:O11",
      "t3:O12",
      "t4:O13"
    ]
  },
  {
    id: 351,
    number: 76,
    topic: "Topic 7",
    prompt: "You plan to share packages that you wrote, tested, validated, and deployed by using Azure Artifacts.\nYou need to release multiple builds of each package by using a single feed. The solution must limit the release of packages that are in\ndevelopment.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: B. views",
    type: "single",
    options: [
      {
        id: "A",
        text: "local symbols"
      },
      {
        id: "B",
        text: "views"
      },
      {
        id: "C",
        text: "global symbols"
      },
      {
        id: "D",
        text: "upstream sources"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 352,
    number: 77,
    topic: "Topic 7",
    prompt: "You have a project in Azure DevOps named Project1. Project1 contains a build pipeline named Pipe1 that builds an application named App1.\nYou have an agent pool named Pool1 that contains a Windows Server 2019-based self-hosted agent. Pipe1 uses Pool1.\nYou plan to implement another project named Project2. Project2 will have a build pipeline named Pipe2 that builds an application named App2.\nApp1 and App2 have confiicting dependencies.\nYou need to minimize the possibility that the two build pipelines will confiict with each other. The solution must minimize infrastructure costs.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D. Create two container jobs",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add another self-hosted agent."
      },
      {
        id: "B",
        text: "Add a Docker Compose task to the build pipelines."
      },
      {
        id: "C",
        text: "Change the self-hosted agent to use Red Hat Enterprise Linux (RHEL) 8."
      },
      {
        id: "D",
        text: "Create two container jobs. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 353,
    number: 78,
    topic: "Topic 7",
    prompt: "SIMULATION -\nYou plan to store signed images in an Azure Container Registry instance named az4009940427acr1.\nYou need to modify the SKU for az4009940427acr1 to support the planned images. The solution must minimize costs.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: Simulation",
    type: "single",
    options: [
      {
        id: "A",
        text: "Simulation"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 354,
    number: 79,
    topic: "Topic 7",
    prompt: "You manage build pipelines and deployment pipelines by using Azure DevOps.\nYour company has a team of 500 developers. New members are added continually to the team.\nYou need to automate the management of users and licenses whenever possible.\nWhich task must you perform manually?",
    keySource: "source",
    explanation: "Source answer: D. procuring licenses",
    type: "single",
    options: [
      {
        id: "A",
        text: "modifying group memberships"
      },
      {
        id: "B",
        text: "adding users"
      },
      {
        id: "C",
        text: "assigning entitlements"
      },
      {
        id: "D",
        text: "procuring licenses"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 355,
    number: 80,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYour company uses Team Foundation Server 2013 (TFS 2013).\nYou plan to migrate to Azure DevOps.\nYou need to recommend a migration strategy that meets the following requirements:\n✑ Preserves the dates of Team Foundation Version Control changesets\n✑ Preserves the changed dates of work items revisions\nMinimizes migration effort -\n✑ Migrates all TFS artifacts\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: Upgrade TFS to the most recent RTW release\n\nUse TFS Database Import Service",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Upgrade TFS to the most recent RTW release"
      },
      {
        id: "O2",
        text: "Use TFS Database Import Service"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2"
    ]
  },
  {
    id: 356,
    number: 81,
    topic: "Topic 7",
    prompt: "Your company is building a new solution in Java.\nThe company currently uses a SonarQube server to analyze the code of .NET solutions.\nYou need to analyze and monitor the code quality of the Java solution.\nWhich task types should you add to the build pipeline?",
    keySource: "source",
    explanation: "Source answer: D. gradle",
    type: "single",
    options: [
      {
        id: "A",
        text: "Octopus"
      },
      {
        id: "B",
        text: "Chef"
      },
      {
        id: "C",
        text: "CocoaPods"
      },
      {
        id: "D",
        text: "Gradle"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 357,
    number: 82,
    topic: "Topic 7",
    prompt: "Your company is building a new solution in Java.\nThe company currently uses a SonarQube server to analyze the code of .NET solutions.\nYou need to analyze and monitor the code quality of the Java solution.\nWhich task types should you add to the build pipeline?",
    keySource: "source",
    explanation: "Source answer: A. Maven",
    type: "single",
    options: [
      {
        id: "A",
        text: "Maven"
      },
      {
        id: "B",
        text: "CocoaPods"
      },
      {
        id: "C",
        text: "Xcode"
      },
      {
        id: "D",
        text: "Gulp"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 358,
    number: 83,
    topic: "Topic 7",
    prompt: "You have an Azure subscription named Subscription1 that contains a custom Azure policy named Policy1. Policy1 is an audit policy that monitors\nnaming convention compliance for the resources deployed to Subscription1.\nYou have a pipeline named Pipeline1 in Azure Pipelines. Pipeline1 deploys Azure Resource Manager (ARM) resources to Subscription1.\nYou need to ensure that the resources deployed by Pipeline1 comply with Policy1.\nWhat should you add to Pipeline1?",
    keySource: "source",
    explanation: "Source answer: A. a pre-deployment task that runs a security and compliance assessment",
    type: "single",
    options: [
      {
        id: "A",
        text: "a pre-deployment task that runs a security and compliance assessment"
      },
      {
        id: "B",
        text: "a post-deployment task that runs a security and compliance assessment"
      },
      {
        id: "C",
        text: "an ARM template deployment task to assign Policy1 to Subscription1"
      },
      {
        id: "D",
        text: "an ARM template deployment task to deploy Policy1 to Subscription1 "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 359,
    number: 84,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou plan to use Desired State Configuration (DSC) to maintain the configuration state of virtual machines that run Windows Server.\nYou need to perform the following:\n✑ Install Internet Information Services (IIS) on the virtual machines.\n✑ Update the default home page of the IIS web server.\nHow should you configure the DSC configuration file? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: 1. WindowsFeature 2. File",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Script"
      },
      {
        id: "O2",
        text: "Present"
      },
      {
        id: "O3",
        text: "Service"
      },
      {
        id: "O4",
        text: "Archive"
      },
      {
        id: "O5",
        text: "Package"
      },
      {
        id: "O6",
        text: "Web-Server"
      },
      {
        id: "O7",
        text: "WindowsFeature"
      },
      {
        id: "O8",
        text: "WindowsProcess"
      },
      {
        id: "O9",
        text: "File"
      },
      {
        id: "O10",
        text: "\\DSCResources\\web\\index.htm’"
      },
      {
        id: "O11",
        text: "1. WindowsFeature 2. File"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O11"
    ]
  },
  {
    id: 360,
    number: 85,
    topic: "Topic 7",
    prompt: "You have a project in Azure DevOps.\nYou need to push notifications about pull requests to a Microsoft Teams channel. The solution must minimize development effort.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Install the Azure Pipelines app for Teams and configure a subscription to receive notifications in the channel."
      },
      {
        id: "B",
        text: "Use Azure Automation to connect to the Azure DevOps REST API and send messages to Teams."
      },
      {
        id: "C",
        text: "Install the Azure Repos app for Teams and configure a subscription to receive notifications in the channel."
      },
      {
        id: "D",
        text: "Use an Azure function to connect to the Azure DevOps REST API and send messages to Teams. "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 361,
    number: 86,
    topic: "Topic 7",
    prompt: "HOTSPOT -\nYou are creating a YAML-based Azure pipeline to deploy an Azure Data Factory instance that has the following requirements:\n✑ If a Data Factory instance exists already, the instance must be overwritten.\n✑ No other resources in a resource group named Fabrikam must be affected.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Create or Update Resource Group, Incremental",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "deploymentMode: 5,2"
      },
      {
        id: "O2",
        text: "deploymentScope: \"Resource Group'"
      },
      {
        id: "O3",
        text: "‘Create Or Update Resource Group’"
      },
      {
        id: "O4",
        text: "task: AzureResourceManagerTemplateDeployment@3"
      },
      {
        id: "O5",
        text: "azureResourceManagerConnection: 'Fabrikam Corporate(a41fbled-a2aa-42f@-a7ac-8fcc6eflcsdb)’"
      },
      {
        id: "O6",
        text: "Create or Update Resource Group"
      },
      {
        id: "O7",
        text: "Incremental"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7"
    ]
  },
  {
    id: 362,
    number: 87,
    topic: "Topic 7",
    prompt: "You have an Azure DevOps project that produces Node Package Manager (npm) packages. Multiple projects consume the packages.\nYou need to configure Azure Artifacts to ensure that both the latest and pre-release versions of the packages are available for consumption.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create two feed views named @prerelease and @release, Set @release as the default view. Configure a release pipeline that tags the packages as release after successful testing."
      },
      {
        id: "B",
        text: "Create a feed view named @prerelease. Configure a release pipeline that tags the packages as release after successful testing."
      },
      {
        id: "C",
        text: "Create two feed views named @prerelease and @default. Configure a release pipeline that promotes a package to the @default view after successful testing."
      },
      {
        id: "D",
        text: "Create two feed views named @prerelease and @release. Set @release as the default view. Configure a release pipeline that promotes a package to the @release view after successful testing. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 363,
    number: 88,
    topic: "Topic 7",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\nProject produces npm packages that are published to Feed1. Feed1 is consumed by multiple projects.\nYou need to ensure that only tested packages are available for consumption. The solution must minimize development effort.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a feed view named @release and set @release as the default view. After the npm packages test successfully, configure a release pipeline that promotes a package to the @release view."
      },
      {
        id: "B",
        text: "Create a feed view named @release and set @release as the default view. After the npm packages test successfully, configure a release pipeline that tags the packages as release."
      },
      {
        id: "C",
        text: "Create a feed view named @default. After the npm packages test successfully, configure a release pipeline that tags the packages as release."
      },
      {
        id: "D",
        text: "Create a feed view named @default. After the npm packages test successfully, configure a release pipeline that promotes a package to the @default view."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 364,
    number: 89,
    topic: "Topic 7",
    prompt: "Your company has an Azure DevOps project that produces Node Package Manager (npm) packages. Multiple projects consume the packages.\nYou need to minimize the amount of disk space used by older packages in Azure Artifacts.\nWhat should you modify?",
    keySource: "source",
    explanation: "Source answer: B. the retention settings of the project’s pipeline",
    type: "single",
    options: [
      {
        id: "A",
        text: "the retention settings of the project’s release"
      },
      {
        id: "B",
        text: "the retention settings of the project’s pipeline"
      },
      {
        id: "C",
        text: "the retention settings of the project’s tests"
      },
      {
        id: "D",
        text: "the retention settings of the company pipeline "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 365,
    number: 1,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou manage the Git repository for a large enterprise application.\nYou need to minimize the data size of the repository.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: aggressive, prune",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "git gc -"
      },
      {
        id: "O2",
        text: "git w ——expire now"
      },
      {
        id: "O3",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O4",
        text: "aggressive"
      },
      {
        id: "O5",
        text: "prune"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5"
    ]
  },
  {
    id: 366,
    number: 2,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou plan to deploy a template named D:\\Deploy.json to a resource group named Deploy-lod123456789.\nYou need to modify the template to meet the following requirements, and then to deploy the template:\n✑ The address space must be reduced to support only 256 total IP addresses.\n✑ The subnet address space must be reduced to support only 64 total IP addresses.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: 1. Sign in to the portal.2. Choose template Deploy-lod1234567893. Select Edit template, and then paste your JSON template code into the code window.4. Change the ASddressPrefixes to 10.0.0.0/24 in order to support only 256 total IP addresses. addressSpace\":{\"addressPrefixes\": [\"10.0.0.0/24\"]},5. Change the firstSubnet addressprefix to 10.0.0.0/26 to support only 64 total IP addresses.\"subnets\":[{\"name\":\"firstSubnet\",\"properties\":{\"addressPrefix\":\"10.0.0.0/24\"}6. Select Save.7. Select Edit parameters, provide values for the parameters that are shown, and then select OK.8. Select Subscription. Choose the subscription you want to use, and then select OK.9. Select Resource group. Choose an existing resource group or create a new one, and then select OK.10. Select Create. A new tile on the dashboard tracks the progress of your template deployment.",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. Sign in to the portal.2. Choose template Deploy-lod1234567893. Select Edit template, and then paste your JSON template code into the code window.4. Change the ASddressPrefixes to 10.0.0.0/24 in order to support only 256 total IP addresses. addressSpace\":{\"addressPrefixes\": [\"10.0.0.0/24\"]},5. Change the firstSubnet addressprefix to 10.0.0.0/26 to support only 64 total IP addresses.\"subnets\":[{\"name\":\"firstSubnet\",\"properties\":{\"addressPrefix\":\"10.0.0.0/24\"}6. Select Save.7. Select Edit parameters, provide values for the parameters that are shown, and then select OK.8. Select Subscription. Choose the subscription you want to use, and then select OK.9. Select Resource group. Choose an existing resource group or create a new one, and then select OK.10. Select Create. A new tile on the dashboard tracks the progress of your template deployment."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 367,
    number: 3,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou need to configure an Azure web app named az400-123456789-main to contain an environmental variable named `MAX_ITEMS`. The\nenvironmental variable must have a value of 50.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: 1. In the Azure portal, navigate to the az400-123456789-main app's management page. In the app's left menu, click Configuration > Application settings.2. Click New Application settings3. Enter the following:✑ Name: MAX_ITEMS✑ Value: 50",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. In the Azure portal, navigate to the az400-123456789-main app's management page. In the app's left menu, click Configuration > Application settings.2. Click New Application settings3. Enter the following:✑ Name: MAX_ITEMS✑ Value: 50"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 368,
    number: 4,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou provision an Azure Kubernetes Service (AKS) cluster that has RBAC enabled. You have a Helm chart for a client application.\nYou need to configure Helm and Tiller on the cluster and install the chart.\nWhich three commands should you recommend be run in sequence? To answer, move the appropriate commands from the list of commands to\nthe answer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: kubectl create, helm init, helm install",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "From Azure Cloud Shell, run Azure PowerShell commands to create and delete the new virtual machines in a staging resource group."
      },
      {
        id: "O2",
        text: "kubectl create"
      },
      {
        id: "O3",
        text: "helm init"
      },
      {
        id: "O4",
        text: "helm install"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 369,
    number: 5,
    topic: "Topic 8",
    prompt: "Your company builds a multi-tier web application.\nYou use Azure DevOps and host the production application on Azure virtual machines.\nYour team prepares an Azure Resource Manager template of the virtual machine that you will use to test new features.\nYou need to create a staging environment in Azure that meets the following requirements:\n✑ Minimizes the cost of Azure hosting\n✑ Provisions the virtual machines automatically\n✑ Uses the custom Azure Resource Manager template to provision the virtual machines\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "In Azure Cloud Shell, run Azure CLI commands to create and delete the new virtual machines in a staging resource group."
      },
      {
        id: "B",
        text: "In Azure DevOps, configure new tasks in the release pipeline to deploy to Azure Cloud Services."
      },
      {
        id: "C",
        text: "From Azure Cloud Shell, run Azure PowerShell commands to create and delete the new virtual machines in a staging resource group."
      },
      {
        id: "D",
        text: "In Azure DevOps, configure new tasks in the release pipeline to create and delete the virtual machines in Azure DevTest Labs. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 370,
    number: 6,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou are implementing an Azure DevOps strategy for mobile devices using App Center.\nYou plan to use distribution groups to control access to releases.\nYou need to create the distribution groups shown in the following table.\nWhich type of distribution group should you use for each group? To answer, drag the appropriate group types to the correct locations. Each group\ntype may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Group1: Private, Group2: Public, Group3: Shared",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O2",
        text: "Group1: Private"
      },
      {
        id: "O3",
        text: "Group2: Public"
      },
      {
        id: "O4",
        text: "Group3: Shared"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O4"
    ]
  },
  {
    id: 371,
    number: 7,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou need to ensure that the https://contoso.com/statushook webhook is called every time a repository named az400123456789acr1 receives a\nnew version of an image named dotnetapp.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: 1. Sign in to the Azure portal.2. Navigate to the container registry az400123456789acr1.3. Under Services, select Webhooks.4. Select the existing webhook https://contoso.com/statushook, and double-click on it to get its properties.5. For Trigger actions select image push",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. Sign in to the Azure portal.2. Navigate to the container registry az400123456789acr1.3. Under Services, select Webhooks.4. Select the existing webhook https://contoso.com/statushook, and double-click on it to get its properties.5. For Trigger actions select image push"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 372,
    number: 8,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou need to create deployment files for an Azure Kubernetes Service (AKS) cluster. The deployments must meet the provisioning storage\nrequirements shown in the following table.\nWhich resource type should you use for each deployment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: provisioner: Kubernetes.io/azure-file, : provisioner: Kubernetes.io/azure-disk, driver: secrets-store.csi.k8s.io",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Deployment 2: ir"
      },
      {
        id: "O2",
        text: "Set as default branch"
      },
      {
        id: "O3",
        text: "Deployment 1: ~"
      },
      {
        id: "O4",
        text: "Deployment 3: ~"
      },
      {
        id: "O5",
        text: "Revert"
      },
      {
        id: "O6",
        text: "Reactivate"
      },
      {
        id: "O7",
        text: "Cherry-pick"
      },
      {
        id: "O8",
        text: "volume.beta.kubernetes.io/storage-provisioner"
      },
      {
        id: "O9",
        text: "Ivolume.beta kubernetes.io/storage- provisioner"
      },
      {
        id: "O10",
        text: "provisioner: Kubernetes.io/azure-file"
      },
      {
        id: "O11",
        text: ": provisioner: Kubernetes.io/azure-disk"
      },
      {
        id: "O12",
        text: "driver: secrets-store.csi.k8s.io"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O10",
      "t2:O11",
      "t3:O12"
    ]
  },
  {
    id: 373,
    number: 9,
    topic: "Topic 8",
    prompt: "Your company uses Azure DevOps to manage the build and release processes for applications.\nYou use a Git repository for applications source control.\nYou plan to create a new branch from an existing pull request. Later, you plan to merge the new branch and the target branch of the pull request.\nYou need to use a pull request action to create the new branch. The solution must ensure that the branch uses only a portion of the code in the\npull request.\nWhich pull request action should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Set as default branch"
      },
      {
        id: "B",
        text: "Approve with suggestions"
      },
      {
        id: "C",
        text: "Cherry-pick"
      },
      {
        id: "D",
        text: "Reactivate"
      },
      {
        id: "E",
        text: "Revert "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 374,
    number: 10,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou manage the Git repository for a large enterprise application.\nDuring the development of the application, you use a file named Config.json.\nYou need to prevent Config.json from being committed to the source control whenever changes to the application are committed.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Delete and recreate the repository, Add Config.json to the .gitignore file, Run the git add .gitignore command.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure virtual machines"
      },
      {
        id: "O2",
        text: "Azure Container Instances"
      },
      {
        id: "O3",
        text: "Runthe git commit command."
      },
      {
        id: "O4",
        text: "Runthe git reflog expire command."
      },
      {
        id: "O5",
        text: "Runthe git add .gitignore command. © ®"
      },
      {
        id: "O6",
        text: "Add Config.json to the .gitignore file. ® ©"
      },
      {
        id: "O7",
        text: "Delete and recreate the repository"
      },
      {
        id: "O8",
        text: "Add Config.json to the .gitignore file"
      },
      {
        id: "O9",
        text: "Run the git add .gitignore command."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9"
    ]
  },
  {
    id: 375,
    number: 11,
    topic: "Topic 8",
    prompt: "You are designing a build pipeline in Azure Pipelines.\nThe pipeline requires a self-hosted agent. The build pipeline will run once daily and will take 30 minutes to complete.\nYou need to recommend a compute type for the agent. The solution must minimize costs.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Kubernetes Service (AKS) cluster"
      },
      {
        id: "B",
        text: "Azure Container Instances"
      },
      {
        id: "C",
        text: "an Azure virtual machine scale set"
      },
      {
        id: "D",
        text: "Azure virtual machines "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 376,
    number: 12,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou are finalizing a release in GitHub.\nYou need to apply the following labels to the release:\n✑ Name\n✑ Email\n✑ Release v3.0\n✑ Release date\nHow should you complete the git command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: tag, -a, -m",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure RM Web App Deployment"
      },
      {
        id: "O2",
        text: "Azure Cloud Service Deployment"
      },
      {
        id: "O3",
        text: "Release v3.0"
      },
      {
        id: "O4",
        text: "Azure PowerShell"
      },
      {
        id: "O5",
        text: "Azure DevOps project."
      },
      {
        id: "O6",
        text: "Azure App Service Manage"
      },
      {
        id: "O7",
        text: "git v vw v3.0 ¥ \"Release v3.0\""
      },
      {
        id: "O8",
        text: "tag"
      },
      {
        id: "O9",
        text: "-a"
      },
      {
        id: "O10",
        text: "-m"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9",
      "t3:O10"
    ]
  },
  {
    id: 377,
    number: 13,
    topic: "Topic 8",
    prompt: "You have a project in Azure DevOps. You have an Azure Resource Group deployment project in Microsoft Visual Studio that is checked in to the\nAzure DevOps project.\nYou need to create a release pipeline that will deploy resources by using Azure Resource Manager templates. The solution must minimize\nadministrative effort.\nWhich task type should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Cloud Service Deployment"
      },
      {
        id: "B",
        text: "Azure RM Web App Deployment"
      },
      {
        id: "C",
        text: "Azure PowerShell"
      },
      {
        id: "D",
        text: "Azure App Service Manage "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 378,
    number: 14,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYour company has a project in Azure DevOps.\nYou plan to create a release pipeline that will deploy resources by using Azure Resource Manager templates. The templates will reference secrets\nstored in Azure\nKey Vault.\nYou need to recommend a solution for accessing the secrets stored in the key vault during deployments. The solution must use the principle of\nleast privilege.\nWhat should you include in the recommendation? To answer, drag the appropriate configurations to the correct targets. Each configuration may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: an Azure Key Vault access policy",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a package."
      },
      {
        id: "O2",
        text: "Create a job agent."
      },
      {
        id: "O3",
        text: "Create a release pipeline. 8 B"
      },
      {
        id: "O4",
        text: "Set the template parameters."
      },
      {
        id: "O5",
        text: "Add an Azure Resource Group Deployment task."
      },
      {
        id: "O6",
        text: "an Azure Key Vault access policy"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O6"
    ]
  },
  {
    id: 379,
    number: 15,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nAs part of your application build process, you need to deploy a group of resources to Azure by using an Azure Resource Manager template located\non GitHub.\nWhich three action should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Create a release pipeline, Add an Azure Resource Group Deployment task, Set the template parameters.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a package."
      },
      {
        id: "O2",
        text: "Create a job agent."
      },
      {
        id: "O3",
        text: "Create a release pipeline. 8 B"
      },
      {
        id: "O4",
        text: "Set the template parameters."
      },
      {
        id: "O5",
        text: "Add an Azure Resource Group Deployment task."
      },
      {
        id: "O6",
        text: "Create a release pipeline"
      },
      {
        id: "O7",
        text: "Add an Azure Resource Group Deployment task"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O4"
    ]
  },
  {
    id: 380,
    number: 16,
    topic: "Topic 8",
    prompt: "You have an Azure DevOps project that contains a release pipeline and a Git repository.\nWhen a new code revision is committed to the repository, a build and release is triggered.\nYou need to ensure that release information for the pipeline is added automatically to the work items associated to the Git commit.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the Integrations options for the pipeline."
      },
      {
        id: "B",
        text: "Modify the post-deployment conditions for the last stage of the pipeline."
      },
      {
        id: "C",
        text: "Add an agentless job to the pipeline."
      },
      {
        id: "D",
        text: "Modify the service hooks for the project."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 381,
    number: 17,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou plan to add a new web farm that will be published by using an IP address of 10.0.0.5.\nYou need to allow trafic from the web farm to an Azure Database for MySQL server named az400-123456789-mysql.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: Server-level firewall rules can be used to manage access to an Azure Database for MySQL Server from a specified IP address or a range of IP addresses.Create a server-level firewall rule in the Azure portal1. On the MySQL server page, under Settings heading, click Connection Security to open the Connection Security page for the Azure Database for MySQL. 2. In the firewall rules for the Azure Database for MySQL, you can specify a single IP address or a range of addresses. If you want to limit the rule to a single IP address, type the same address in the Start IP and End IP fields. Opening the firewall enables administrators, users, and application to access any database on the MySQL server to which they have valid credentials. 3. Click Save on the toolbar to save this server-level firewall rule. Wait for the confirmation that the update to the firewall rules is successful.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Server-level firewall rules can be used to manage access to an Azure Database for MySQL Server from a specified IP address or a range of IP addresses.Create a server-level firewall rule in the Azure portal1. On the MySQL server page, under Settings heading, click Connection Security to open the Connection Security page for the Azure Database for MySQL. 2. In the firewall rules for the Azure Database for MySQL, you can specify a single IP address or a range of addresses. If you want to limit the rule to a single IP address, type the same address in the Start IP and End IP fields. Opening the firewall enables administrators, users, and application to access any database on the MySQL server to which they have valid credentials. 3. Click Save on the toolbar to save this server-level firewall rule. Wait for the confirmation that the update to the firewall rules is successful."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 382,
    number: 18,
    topic: "Topic 8",
    prompt: "Your company has a release pipeline in an Azure DevOps project.\nYou plan to deploy to an Azure Kubernetes Services (AKS) cluster by using the Helm package and deploy task.\nYou need to install a service in the AKS namespace for the planned deployment.\nWhich service should you install?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Container Registry"
      },
      {
        id: "B",
        text: "Chart"
      },
      {
        id: "C",
        text: "Kubectl"
      },
      {
        id: "D",
        text: "Tiller"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 383,
    number: 19,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou need to create a virtual machine template in an Azure DevTest Labs environment named az400-123456789-dtl1. The template must be based\non Windows\nServer 2019 Datacenter. Virtual machines created from the template must include the selenium tool and the Google Chrome browser.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: Open Microsoft Azure Portal2. Select All Services, and then select DevTest Labs in the DEVOPS section.\n\n3. From the list of labs, select the az400-123456789-dtl1 lab.4. On the home page for your lab, select + Add on the toolbar.5. Select the Windows Server 2019 Datacenter base image for the VM.6. Select automation options at the bottom of the page above the Submit button.7. You see the Azure Resource Manager template for creating the virtual machine.8. The JSON segment in the resources section has the definition for the image type you selected earlier.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Open Microsoft Azure Portal2. Select All Services, and then select DevTest Labs in the DEVOPS section.\n\n3. From the list of labs, select the az400-123456789-dtl1 lab.4. On the home page for your lab, select + Add on the toolbar.5. Select the Windows Server 2019 Datacenter base image for the VM.6. Select automation options at the bottom of the page above the Submit button.7. You see the Azure Resource Manager template for creating the virtual machine.8. The JSON segment in the resources section has the definition for the image type you selected earlier."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 384,
    number: 20,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou are configuring a release pipeline in Azure DevOps as shown in the exhibit.\nUse the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: 5, The internal Review stage",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "The Production stage"
      },
      {
        id: "O2",
        text: "The Development stage"
      },
      {
        id: "O3",
        text: "The Internal Review stage"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 385,
    number: 21,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYour company plans to deploy an application to the following endpoints:\n✑ Ten virtual machines hosted in Azure\n✑ Ten virtual machines hosted in an on-premises data center environment\nAll the virtual machines have the Azure Pipelines agent.\nYou need to implement a release strategy for deploying the application to the endpoints.\nWhat should you recommend using to deploy the application to the endpoints? To answer, drag the appropriate components to the correct\nendpoints. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view\ncontent.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: A deployment group, A deployment group",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Yeoman"
      },
      {
        id: "O2",
        text: "Tiller"
      },
      {
        id: "O3",
        text: "Node.js"
      },
      {
        id: "O4",
        text: "Terratest"
      },
      {
        id: "O5",
        text: "A deployment group"
      },
      {
        id: "O6",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O7",
        text: "Vault"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O5"
    ]
  },
  {
    id: 386,
    number: 22,
    topic: "Topic 8",
    prompt: "You plan to use Terraform to deploy an Azure resource group from a Windows system.\nYou need to install the required frameworks to support the planned deployment.\nWhich two frameworks should you install? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BD",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Vault"
      },
      {
        id: "B",
        text: "Terratest"
      },
      {
        id: "C",
        text: "Node.js"
      },
      {
        id: "D",
        text: "Yeoman"
      },
      {
        id: "E",
        text: "Tiller"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 387,
    number: 23,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou plan to implement a CI/CD strategy for an Azure Web App named az400-123456789-main.\nYou need to configure a staging environment for az400-123456789-main.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: 1. In the Azure portal, search for and select App Services and select your app az400-123456789-main.2. In the left pane, select Deployment slots > Add Slot.3. In the Add a slot dialog box, give the slot a name, and select whether to clone an app configuration from another deployment slot. Select Add to continue.",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. In the Azure portal, search for and select App Services and select your app az400-123456789-main.2. In the left pane, select Deployment slots > Add Slot.3. In the Add a slot dialog box, give the slot a name, and select whether to clone an app configuration from another deployment slot. Select Add to continue."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 388,
    number: 24,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou have several apps that use an Azure SQL Database named db1.\nYou need to ensure that queries to db1 are tuned by Azure over time. The solution must only apply to db1.\nTo complete this task, sign in to the Microsoft Azure portal.",
    keySource: "source",
    explanation: "Source answer: 1. To enable automatic tuning on a single database, navigate to the database in the Azure portal and select Automatic tuning.2. Select the automatic tuning options you want to enable and select Apply.Note: Individual automatic tuning settings can be separately configured for each database. You can manually configure an individual automatic tuning option, or specify that an option inherits its settings from the server.4. After the slot is added, select Close to close the dialog box. The new slot is now shown on the Deployment slots page.",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. To enable automatic tuning on a single database, navigate to the database in the Azure portal and select Automatic tuning.2. Select the automatic tuning options you want to enable and select Apply.Note: Individual automatic tuning settings can be separately configured for each database. You can manually configure an individual automatic tuning option, or specify that an option inherits its settings from the server.4. After the slot is added, select Close to close the dialog box. The new slot is now shown on the Deployment slots page."
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 389,
    number: 25,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou use Azure Pipelines to manage the build and deployment of apps.\nYou are planning the release strategies for a new app.\nYou need to choose strategies for the following scenarios:\nReleases will be made available to users who are grouped by their tolerance for software faults.\n✑ Code will be deployed to enable functionality that will be available in later releases of the app.\n✑ When a new release occurs, the existing deployment will remain active to minimize recovery time if a return to the previous version is required.\nWhich strategy should you choose for each scenario? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: Progressive exposure, Feature flags, Blue/green",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Releases will be made available to users who are grouped v"
      },
      {
        id: "O2",
        text: "When a new release occurs, the existing deployment will v"
      },
      {
        id: "O3",
        text: "Progressive exposure"
      },
      {
        id: "O4",
        text: "Feature flags"
      },
      {
        id: "O5",
        text: "Blue/green"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4",
      "t3:O5"
    ]
  },
  {
    id: 390,
    number: 26,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou have a project in Azure DevOps.\nYou need to associate an automated test to a test case.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create a test project, Check in a project to the Azure DevOps repository, Add the automated test to the build pipeline",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "deployment pipeline."
      },
      {
        id: "O2",
        text: "Create a test project"
      },
      {
        id: "O3",
        text: "Create a service principal in Azure Active"
      },
      {
        id: "O4",
        text: "Create a work item ® ®"
      },
      {
        id: "O5",
        text: "Actions"
      },
      {
        id: "O6",
        text: "repository"
      },
      {
        id: "O7",
        text: "the deployment pipeline."
      },
      {
        id: "O8",
        text: "Add a Docker Compose task to the"
      },
      {
        id: "O9",
        text: "Add an Azure Function App for Container"
      },
      {
        id: "O10",
        text: "Add a Helm package and deploy a task to"
      },
      {
        id: "O11",
        text: "Add the automated test to a build pipeline"
      },
      {
        id: "O12",
        text: "Check in a project to the Azure DevOps repository"
      },
      {
        id: "O13",
        text: "Add the automated test to the build pipeline"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O12",
      "t3:O13"
    ]
  },
  {
    id: 391,
    number: 27,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou have an Azure Kubernetes Service (AKS) cluster.\nYou need to deploy an application to the cluster by using Azure DevOps.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Create a service principal in Azure Active Directory, Add a Helm package and deploy to task to the deployment pipeline, Add a Docker Compose task to the deployment pipeline.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "deployment pipeline."
      },
      {
        id: "O2",
        text: "Create a test project"
      },
      {
        id: "O3",
        text: "Create a service principal in Azure Active"
      },
      {
        id: "O4",
        text: "Create a work item ® ®"
      },
      {
        id: "O5",
        text: "Actions"
      },
      {
        id: "O6",
        text: "repository"
      },
      {
        id: "O7",
        text: "the deployment pipeline."
      },
      {
        id: "O8",
        text: "Add a Docker Compose task to the"
      },
      {
        id: "O9",
        text: "Add an Azure Function App for Container"
      },
      {
        id: "O10",
        text: "Add a Helm package and deploy a task to"
      },
      {
        id: "O11",
        text: "Add the automated test to a build pipeline"
      },
      {
        id: "O12",
        text: "Create a service principal in Azure Active Directory"
      },
      {
        id: "O13",
        text: "Add a Helm package and deploy to task to the deployment pipeline"
      },
      {
        id: "O14",
        text: "Add a Docker Compose task to the deployment pipeline."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O12",
      "t2:O13",
      "t3:O14"
    ]
  },
  {
    id: 392,
    number: 28,
    topic: "Topic 8",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an approval process that contains a condition. The condition requires that releases be approved by a team leader before they are\ndeployed.\nYou have a policy stating that approvals must occur within eight hours.\nYou discover that deployment fail if the approvals take longer than two hours.\nYou need to ensure that the deployments only fail if the approvals take longer than eight hours.\nSolution: From Post-deployment conditions, you modify the Time between re-evaluation of gates option.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 393,
    number: 29,
    topic: "Topic 8",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an approval process that contains a condition. The condition requires that releases be approved by a team leader before they are\ndeployed.\nYou have a policy stating that approvals must occur within eight hours.\nYou discover that deployment fail if the approvals take longer than two hours.\nYou need to ensure that the deployments only fail if the approvals take longer than eight hours.\nSolution: From Pre-deployment conditions, you modify the Time between re-evaluation of gates option.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 394,
    number: 30,
    topic: "Topic 8",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an approval process that contains a condition. The condition requires that releases be approved by a team leader before they are\ndeployed.\nYou have a policy stating that approvals must occur within eight hours.\nYou discover that deployment fail if the approvals take longer than two hours.\nYou need to ensure that the deployments only fail if the approvals take longer than eight hours.\nSolution: From Pre-deployment conditions, you modify the Timeout setting for pre-deployment approvals.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 395,
    number: 31,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou are defining release strategies for two applications as shown in the following table.\nWhich release strategy should you use for each application? To answer, drag the appropriate release strategies to the correct applications. Each\nrelease strategy may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Canary deployment, Rolling deployment",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "deployed."
      },
      {
        id: "O2",
        text: "Release Strategies Answer Area:"
      },
      {
        id: "O3",
        text: "Rolling deployment"
      },
      {
        id: "O4",
        text: "Blue/Green deployment"
      },
      {
        id: "O5",
        text: "canary deployment foe 1"
      },
      {
        id: "O6",
        text: "You have a policy stating that approvals must occur within eight hours."
      },
      {
        id: "O7",
        text: "Solution: From Post-deployment conditions, you modify the Timeout setting for post-deployment approvals."
      },
      {
        id: "O8",
        text: "Canary deployment"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O3"
    ]
  },
  {
    id: 396,
    number: 32,
    topic: "Topic 8",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an approval process that contains a condition. The condition requires that releases be approved by a team leader before they are\ndeployed.\nYou have a policy stating that approvals must occur within eight hours.\nYou discover that deployment fail if the approvals take longer than two hours.\nYou need to ensure that the deployments only fail if the approvals take longer than eight hours.\nSolution: From Post-deployment conditions, you modify the Timeout setting for post-deployment approvals.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 397,
    number: 33,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou have an Azure DevOps organization named Contoso.\nYou have 10 Azure virtual machines that run Windows Server 2019. The virtual machines host an application that you build and deploy by using\nAzure Pipelines.\nEach virtual machine has the Web Server (IIS) role installed and configured.\nYou need to ensure that the web server configurations on the virtual machines is maintained automatically. The solution must provide centralized\nmanagement of the configuration settings and minimize management overhead.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create an Azure Automation Account, Install the custom Desired State Configuration (DSC) extension on the virtual machines, Onboard the virtual machines to the Azure Automation account, Compile the Desires State Configuration(DSC) configuration.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an Azure Automation account."
      },
      {
        id: "O2",
        text: "Create a zip file and upload it to Azure Blob storage. 2 Q"
      },
      {
        id: "O3",
        text: "To complete this task, sign in to the Microsoft Azure portal."
      },
      {
        id: "O4",
        text: "Create an Azure Automation Account"
      },
      {
        id: "O5",
        text: "Install the custom Desired State Configuration (DSC) extension on the virtual machines"
      },
      {
        id: "O6",
        text: "Onboard the virtual machines to the Azure Automation account"
      },
      {
        id: "O7",
        text: "Compile the Desires State Configuration(DSC) configuration."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5",
      "t3:O6",
      "t4:O7"
    ]
  },
  {
    id: 398,
    number: 34,
    topic: "Topic 8",
    prompt: "You have a free tier of an Azure DevOps organization named Contoso. Contoso contains 10 private projects. Each project has multiple jobs with\nno dependencies. The build process requires access to resource files located in an on-premises file system.\nYou frequently run the jobs on five self-hosted agents but experience long build times and frequently queued builds.\nYou need to minimize the number of queued builds and the time it takes to run the builds.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the pipelines to use the Microsoft-hosted agents."
      },
      {
        id: "B",
        text: "Register additional self-hosted agents."
      },
      {
        id: "C",
        text: "Purchase self-hosted parallel jobs."
      },
      {
        id: "D",
        text: "Purchase Microsoft-hosted parallel jobs."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 399,
    number: 35,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou need to ensure that an Azure web app named az400-123456789-main supports rolling upgrades. The solution must ensure that only 10\npercent of users who connect to az400-123456789-main use update versions of the app.\nThe solution must minimize administrative effort.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: Set up staging environments in Azure App Service1. Open Microsoft Azure Portal2. Log into your Azure account, select your app's resource page, in the left pane, select Deployment slots > Add Slot.3. In the Add a slot dialog box, give the slot a name, and select whether to clone an app configuration from another deployment slot. Select Add to continue.4. After the slot is added, select Close to close the dialog box. The new slot is now shown on the Deployment slots page. By default, Traffic % is set to 0 for the new slot, with all customer traffic routed to the production slot.5. Select the new deployment slot to open that slot's resource page.6. Change TRAFFIC % to 10",
    type: "single",
    options: [
      {
        id: "A",
        text: "Set up staging environments in Azure App Service1. Open Microsoft Azure Portal2. Log into your Azure account, select your app's resource page, in the left pane, select Deployment slots > Add Slot.3. In the Add a slot dialog box, give the slot a name, and select whether to clone an app configuration from another deployment slot. Select Add to continue.4. After the slot is added, select Close to close the dialog box. The new slot is now shown on the Deployment slots page. By default, Traffic % is set to 0 for the new slot, with all customer traffic routed to the production slot.5. Select the new deployment slot to open that slot's resource page.6. Change TRAFFIC % to 10"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 400,
    number: 36,
    topic: "Topic 8",
    prompt: "You have an Azure DevOps project named Project1 and an Azure subscription named Sub1. Sub1 contains an Azure SQL database named DB1.\nYou need to create a release pipeline that uses the Azure SQL Database Deployment task to update DB1.\nWhich artifact should you deploy?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "a BACPAC"
      },
      {
        id: "B",
        text: "a DACPAC"
      },
      {
        id: "C",
        text: "an LDF file"
      },
      {
        id: "D",
        text: "an MDF file"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 401,
    number: 37,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou have a project in Azure DevOps.\nYou plan to create a build pipeline that will deploy resources by using Azure Resource Manager templates. The templates will reference secrets\nstored in Azure\nKey Vault.\nYou need to ensure that you can dynamically generate the resource ID of the key vault during template deployment.\nWhat should you include in the template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: Microsoft Resources/deployments, templateLink",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "secret"
      },
      {
        id: "O2",
        text: "secrets"
      },
      {
        id: "O3",
        text: "resources"
      },
      {
        id: "O4",
        text: "reference"
      },
      {
        id: "O5",
        text: "apiversion"
      },
      {
        id: "O6",
        text: "parameters"
      },
      {
        id: "O7",
        text: "secretiame"
      },
      {
        id: "O8",
        text: "Incremental"
      },
      {
        id: "O9",
        text: "be"
      },
      {
        id: "O10",
        text: "Te"
      },
      {
        id: "O11",
        text: "name"
      },
      {
        id: "O12",
        text: "mode"
      },
      {
        id: "O13",
        text: "concat('./nested/sqlserver.json’,"
      },
      {
        id: "O14",
        text: "Microsoft Resources/deployments"
      },
      {
        id: "O15",
        text: "templateLink"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O14",
      "t2:O15"
    ]
  },
  {
    id: 402,
    number: 38,
    topic: "Topic 8",
    prompt: "Your company has a project in Azure DevOps for a new web application.\nThe company uses ServiceNow for change management.\nYou need to ensure that a change request is processed before any components can be deployed to the production environment.\nWhat are two ways to integrate ServiceNow into the Azure DevOps release pipeline? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BD",
    type: "single",
    options: [
      {
        id: "A",
        text: "Define a deployment control that invokes the ServiceNow REST API."
      },
      {
        id: "B",
        text: "Define a pre-deployment gate before the deployment to the Prod stage."
      },
      {
        id: "C",
        text: "Define a deployment control that invokes the ServiceNow SOAP API."
      },
      {
        id: "D",
        text: "Define a post-deployment gate after the deployment to the QA stage."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 403,
    number: 39,
    topic: "Topic 8",
    prompt: "Your company develops an application named App1 that is deployed in production.\nAs part of an application update, a new service is being added to App1. The new service requires access to an application named App2 that is\ncurrently in development.\nYou need to ensure that you can deploy the update to App1 before App2 becomes available. You must be able to enable the service in App1 once\nApp2 is deployed.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Implement a feature fiag."
      },
      {
        id: "B",
        text: "Create a fork in the build."
      },
      {
        id: "C",
        text: "Create a branch in the build."
      },
      {
        id: "D",
        text: "Implement a branch policy."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 404,
    number: 40,
    topic: "Topic 8",
    prompt: "You have a private distribution group that contains provisioned and unprovisioned devices.\nYou need to distribute a new iOS application to the distribution group by using Microsoft Visual Studio App Center.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Request the Apple ID associated with the user of each device."
      },
      {
        id: "B",
        text: "Register the devices on the Apple Developer portal."
      },
      {
        id: "C",
        text: "Create an active subscription in App Center Test."
      },
      {
        id: "D",
        text: "Add the device owner to the organization in App Center. "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 405,
    number: 41,
    topic: "Topic 8",
    prompt: "You are developing an iOS application by using Azure DevOps.\nYou need to test the application manually on 10 devices without releasing the application to the public.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BF",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create a Microsoft Intune device compliance policy."
      },
      {
        id: "B",
        text: "Deploy a certificate from an internal certification authority (CA) to each device."
      },
      {
        id: "C",
        text: "Register the application in the iTunes store."
      },
      {
        id: "D",
        text: "Onboard the devices into Microsoft Intune."
      },
      {
        id: "E",
        text: "Distribute a new release of the application."
      },
      {
        id: "F",
        text: "Register the IDs of the devices in the Apple Developer portal."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 406,
    number: 42,
    topic: "Topic 8",
    prompt: "You have a private distribution group that contains provisioned and unprovisioned devices.\nYou need to distribute a new iOS application to the distribution group by using Microsoft Visual Studio App Center.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Select Register devices and sign my app."
      },
      {
        id: "B",
        text: "Create an active subscription in App Center Test."
      },
      {
        id: "C",
        text: "Create an unsigned build."
      },
      {
        id: "D",
        text: "Add the device owner to the collaborators group."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 407,
    number: 43,
    topic: "Topic 8",
    prompt: "SIMULATION -\nYou plan to deploy a website that will be hosted in two Azure regions.\nYou need to create an Azure Trafic Manager profile named az400123456789n1-tm in a resource group named RG1lod123456789. The solution\nmust ensure that users will always connect to a copy of the website that is in the same country.\nTo complete this task, sign in to the Microsoft Azure portal.\n",
    keySource: "source",
    explanation: "Source answer: 1. Go to the Azure portal, navigate to Traffic Manager profiles and click on the Add button to create a routing profile. 2, In the Create Traffic Manager profile, enter, or select these settings:Name: az400123456789n1-tm -Routing method: Geographic -Resource group: RG1lod123456789 -",
    type: "single",
    options: [
      {
        id: "A",
        text: "1. Go to the Azure portal, navigate to Traffic Manager profiles and click on the Add button to create a routing profile. 2, In the Create Traffic Manager profile, enter, or select these settings:Name: az400123456789n1-tm -Routing method: Geographic -Resource group: RG1lod123456789 -"
      },
      {
        id: "B",
        text: "Other / unsure"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 408,
    number: 44,
    topic: "Topic 8",
    prompt: "Your company has an on-premises Bitbucket Server that is used for Git-based source control. The server is protected by a firewall that blocks\ninbound Internet trafic.\nYou plan to use Azure DevOps to manage the build and release processes.\nWhich two components are required to integrate Azure DevOps and Bitbucket? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: DE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "a deployment group"
      },
      {
        id: "B",
        text: "a Microsoft-hosted agent"
      },
      {
        id: "C",
        text: "service hooks"
      },
      {
        id: "D",
        text: "a self-hosted agent"
      },
      {
        id: "E",
        text: "an External Git service connection"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 409,
    number: 45,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYour company uses Git as a source code control system for a complex app named App1.\nYou plan to add a new functionality to App1.\nYou need to design a branching model for the new functionality.\nWhich branch lifetime and branch time should you use in the branching model? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Short-lived, Feature",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Master"
      },
      {
        id: "O2",
        text: "Feature"
      },
      {
        id: "O3",
        text: "Long-lived"
      },
      {
        id: "O4",
        text: "Short-lived"
      },
      {
        id: "O5",
        text: "Integration"
      },
      {
        id: "O6",
        text: "the agent pool name"
      },
      {
        id: "O7",
        text: "the deployment group name"
      },
      {
        id: "O8",
        text: "Branch type: |__| v]"
      },
      {
        id: "O9",
        text: "Branch lifetime: | [|"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O2"
    ]
  },
  {
    id: 410,
    number: 46,
    topic: "Topic 8",
    prompt: "You have a project in Azure DevOps.\nYou plan to deploy a self-hosted agent by using an unattended configuration script.\nWhich two values should you define in the configuration script? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AD",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "authorization credentials"
      },
      {
        id: "B",
        text: "the project name"
      },
      {
        id: "C",
        text: "the deployment group name"
      },
      {
        id: "D",
        text: "the organization URL"
      },
      {
        id: "E",
        text: "the agent pool name "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 411,
    number: 47,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou have an Azure virtual machine named VM1 that runs Linux.\nYou plan to deploy the Desired State Configuration (DSC) extension to VM1.\nYou need to grant the Log Analytics agent the appropriate directory permissions.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: rwx, /tmp",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "setfacl -m u:omsagent: i Io"
      },
      {
        id: "O2",
        text: "branch filters"
      },
      {
        id: "O3",
        text: "The build pipeline has continuous integration enabled."
      },
      {
        id: "O4",
        text: "rwx"
      },
      {
        id: "O5",
        text: "/tmp"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5"
    ]
  },
  {
    id: 412,
    number: 48,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou are using PowerShell to administer Azure Log Analytics workspaces.\nYou need to list the available workspaces and their properties.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Get-AzResource, -ResourceType",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "setfacl -m u:omsagent: i Io"
      },
      {
        id: "O2",
        text: "branch filters"
      },
      {
        id: "O3",
        text: "The build pipeline has continuous integration enabled."
      },
      {
        id: "O4",
        text: "Get-AzResource"
      },
      {
        id: "O5",
        text: "-ResourceType"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O4",
      "t2:O5"
    ]
  },
  {
    id: 413,
    number: 49,
    topic: "Topic 8",
    prompt: "You have Azure Pipelines and GitHub integrated as a source code repository.\nThe build pipeline has continuous integration enabled.\nYou plan to trigger an automated build whenever code changes are committed to the repository.\nYou need to ensure that the system will wait until a build completes before queuing another build.\nWhat should you implement?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "path filters"
      },
      {
        id: "B",
        text: "batch changes"
      },
      {
        id: "C",
        text: "scheduled builds"
      },
      {
        id: "D",
        text: "branch filters "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 414,
    number: 50,
    topic: "Topic 8",
    prompt: "You are using GitHub as a source code repository.\nYou create a client-side Git hook on the commit-msg event. The hook requires that each commit message contain a custom work item tag.\nYou need to make a commit that does not have a work item tag.\nWhich git commit parameter should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "--squash"
      },
      {
        id: "B",
        text: "--no-verify"
      },
      {
        id: "C",
        text: "--message ''"
      },
      {
        id: "D",
        text: "--no-post-rewrite"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 415,
    number: 51,
    topic: "Topic 8",
    prompt: "You have a private distribution group that contains provisioned and unprovisioned devices.\nYou need to distribute a new iOS application to the distribution group by using Microsoft Visual Studio App Center.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Select Register devices and sign my app."
      },
      {
        id: "B",
        text: "Create an active subscription in App Center Test."
      },
      {
        id: "C",
        text: "Add the device owner to the organization in App Center."
      },
      {
        id: "D",
        text: "Create an unsigned build."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 416,
    number: 52,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou need to deploy Internet Information Services (IIS) to an Azure virtual machine that runs Windows Server 2019.\nHow should you complete the Desired State Configuration (DSC) configuration script? To answer, drag the appropriate values to the correct\nlocations. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: Configuration, WindowsFeature",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "MyDsc"
      },
      {
        id: "O2",
        text: "Configuration"
      },
      {
        id: "O3",
        text: "WindowsFeature"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 417,
    number: 53,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou plan to use Desired State Configuration (DSC) to maintain the configuration of a server that runs Windows Server 2019.\nThe server must have the following features installed:\n✑ A web server\n✑ An email server\nHow should you complete the DSC configuration file? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: = SMTP-Server, Web-Server, Ensure",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Create an unsigned build."
      },
      {
        id: "O2",
        text: "Web-Server"
      },
      {
        id: "O3",
        text: "Mail-Server"
      },
      {
        id: "O4",
        text: "SMTP-Server"
      },
      {
        id: "O5",
        text: "= SMTP-Server"
      },
      {
        id: "O6",
        text: "Ensure"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O2",
      "t3:O6"
    ]
  },
  {
    id: 418,
    number: 54,
    topic: "Topic 8",
    prompt: "You have a private distribution group that contains provisioned and unprovisioned devices.\nYou need to distribute a new iOS application to the distribution group by using Microsoft Visual Studio App Center.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Register the devices on the Apple Developer portal."
      },
      {
        id: "B",
        text: "Add the device owner to the organization in App Center."
      },
      {
        id: "C",
        text: "Create an unsigned build."
      },
      {
        id: "D",
        text: "Add the device owner to the collaborators group. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 419,
    number: 55,
    topic: "Topic 8",
    prompt: "Your company uses Azure Artifacts for package management.\nYou need to configure an upstream source in Azure Artifacts for Python packages.\nWhich repository type should you use as an upstream source?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "npmjs.org"
      },
      {
        id: "B",
        text: "PyPI"
      },
      {
        id: "C",
        text: "Maven Central"
      },
      {
        id: "D",
        text: "third-party trusted Python"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 420,
    number: 56,
    topic: "Topic 8",
    prompt: "You have a GitHub repository that contains workfiows. The workfiows contain steps that execute predefined actions. Each action has one or more\nversions.\nYou need to request the specific version of an action to execute.\nWhich three attributes can you use to identify the version? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: ABD",
    type: "single",
    options: [
      {
        id: "A",
        text: "the SHA-based hashes"
      },
      {
        id: "B",
        text: "the tag"
      },
      {
        id: "C",
        text: "the runner"
      },
      {
        id: "D",
        text: "the branch"
      },
      {
        id: "E",
        text: "the serial"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 421,
    number: 57,
    topic: "Topic 8",
    prompt: "You have an Azure subscription that contains multiple Azure pipelines.\nYou need to deploy a monitoring solution for the pipelines. The solution must meet the following requirements:\n✑ Parse logs from multiple sources.\n✑ Identify the root cause of issues.\nWhat advanced feature of a monitoring tool should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "analytics"
      },
      {
        id: "B",
        text: "synthetic monitoring"
      },
      {
        id: "C",
        text: "directed monitoring"
      },
      {
        id: "D",
        text: "Alert Management "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 422,
    number: 58,
    topic: "Topic 8",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou use Azure Pipelines to build and test a React.js application.\nYou have a pipeline that has a single job.\nYou discover that installing JavaScript packages from npm takes approximately five minutes each time you run the pipeline.\nYou need to recommend a solution to reduce the pipeline execution time.\nSolution: You recommend using pipeline artifacts.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 423,
    number: 59,
    topic: "Topic 8",
    prompt: "You use GitHub for source control of .NET applications.\nYou need to deploy a documentation solution that meets the following requirements:\n✑ Documents will be written in Markdown as developers make code changes.\n✑ Changes to the documents will trigger the recompilation of a static website.\n✑ Users will access the documents from the static website.\n✑ Documents will be stored in a GitHub repository.\nWhich two tools can you use to compile the website? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BC",
    type: "single",
    options: [
      {
        id: "A",
        text: "Word Press"
      },
      {
        id: "B",
        text: "Jekyll"
      },
      {
        id: "C",
        text: "DocFX"
      },
      {
        id: "D",
        text: "caret"
      },
      {
        id: "E",
        text: "Medium"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 424,
    number: 60,
    topic: "Topic 8",
    prompt: "You have an on-premises app named App1 that accesses Azure resources by using credentials stored in a configuration file.\nYou plan to upgrade App1 to use an Azure service principal.\nWhat is required for App1 to programmatically sign in to Azure Active Directory (Azure AD)?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "the application ID, a client secret, and the object ID"
      },
      {
        id: "B",
        text: "a client secret, the object ID, and the tenant ID"
      },
      {
        id: "C",
        text: "the application ID, a client secret, and the tenant ID"
      },
      {
        id: "D",
        text: "the application ID, a client secret, and the subscription ID "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 425,
    number: 61,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou have a virtual machine that runs Windows Server 2019 and is managed by using Desired State Configuration (DSC).\nYou have the following DSC configuration.\nYou have the following Local Configuration Manager (LCM) configuration.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "source",
    explanation: "Source answer: Yes, Yes, No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 426,
    number: 62,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou have a web app named App1 that is hosted on multiple servers. App1 uses Application Insights in Azure Monitor.\nYou need to compare the daily CPU usage from the last week for all servers.\nHow should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all.\nYou may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: bin(timestamp,Id), render timechart",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "performanceCounters"
      },
      {
        id: "O2",
        text: "EN"
      },
      {
        id: "O3",
        text: "bin(timestamp"
      },
      {
        id: "O4",
        text: "Id)"
      },
      {
        id: "O5",
        text: "render timechart"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4",
      "t3:O5"
    ]
  },
  {
    id: 427,
    number: 63,
    topic: "Topic 8",
    prompt: "You have an Azure subscription that contains 50 virtual machines.\nYou plan to manage the configuration of the virtual machines by using Azure Automation State Configuration.\nYou need to create the Desired State Configuration (DSC) configuration files.\nHow should you structure the code blocks?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Node > Configuration > Resource"
      },
      {
        id: "B",
        text: "Configuration > Resource > Node"
      },
      {
        id: "C",
        text: "Resource > Configuration > Node"
      },
      {
        id: "D",
        text: "Configuration > Node > Resource"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 428,
    number: 64,
    topic: "Topic 8",
    prompt: "Your team uses Azure Pipelines to deploy applications.\nYou need to ensure that when a failure occurs during the build or release process, all the team members are notified by using Microsoft Teams.\nThe solution must minimize development effort.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Install the Azure Boards app for Teams and configure a subscription to receive notifications in a channel."
      },
      {
        id: "B",
        text: "Use Azure Automation to connect to the Azure DevOps REST API and notify the team members."
      },
      {
        id: "C",
        text: "Use an Azure function to connect to the Azure DevOps REST API and notify the team members."
      },
      {
        id: "D",
        text: "Install the Azure Pipelines app for Teams and configure a subscription to receive notifications in a channel. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 429,
    number: 65,
    topic: "Topic 8",
    prompt: "DRAG DROP -\nYou have an app named App1. You have a Log Analytics workspace named Workspace1 that contains a table named AppEvents. App1 writes logs\nto\nWorkspace1.\nYou need to query the AppEvents table. The solution must meet the following requirements:\n✑ Only query rows for a column named Name that starts with the following text: \"Clicked Create New Ticket.\"\n✑ Calculate the number of daily clicks per user.\n✑ Return the top 10 users based on their number of clicks for any day.\n✑ Sort the results based on the highest number of clicks.\n✑ Ignore any users who have less than three daily clicks.\nIn which order should you arrange the query statements? To answer, move all statements from the list of statements to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "source",
    explanation: "Source answer: AppEvents, where Name startswith “Clicked Create New ticket, summarize NumberOfClicks = count() by bin (TimerGenerated, Id), UserId, where NumberOfClicks >=3, top 10 by NumberOfClicks desc",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Userld"
      },
      {
        id: "O2",
        text: "| where Name startswith \"Clicked Create New Ticket |"
      },
      {
        id: "O3",
        text: "AppEvents"
      },
      {
        id: "O4",
        text: "where Name startswith “Clicked Create New ticket"
      },
      {
        id: "O5",
        text: "summarize NumberOfClicks = count() by bin (TimerGenerated"
      },
      {
        id: "O6",
        text: "Id)"
      },
      {
        id: "O7",
        text: "UserId"
      },
      {
        id: "O8",
        text: "where NumberOfClicks >=3"
      },
      {
        id: "O9",
        text: "top 10 by NumberOfClicks desc"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      },
      {
        id: "t5",
        text: "Blank 5"
      },
      {
        id: "t6",
        text: "Blank 6"
      },
      {
        id: "t7",
        text: "Blank 7"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6",
      "t5:O7",
      "t6:O8",
      "t7:O9"
    ]
  },
  {
    id: 430,
    number: 66,
    topic: "Topic 8",
    prompt: "HOTSPOT\n-\nYou have an Azure subscription that contains two resource groups named ContosoRG and ContosoDev, an Azure data factory named Contoso\nData Factory, and a release pipeline in Azure Pipelines named Pipeline1.\nYou plan to deploy Contoso Data Factory to ContosoRG by using Pipeline1.\nYou add the Azure Resource Manager (ARM) template deployment task shown in the following exhibit.\n\tUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Deployment mode, location specified in the Linked artifact variable",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Deployment mode * @"
      },
      {
        id: "O2",
        text: "Deployment scope * ®"
      },
      {
        id: "O3",
        text: "Create or update resource group ~"
      },
      {
        id: "O4",
        text: "Deploy the Contoso Data Factory"
      },
      {
        id: "O5",
        text: "Azure Details ~"
      },
      {
        id: "O6",
        text: "Azure Resource Manager connection * (@ | Manage 12"
      },
      {
        id: "O7",
        text: "Data Factory, and a release pipeline in Azure Pipelines named Pipeline1."
      },
      {
        id: "O8",
        text: "You plan to deploy Contoso Data Factory to ContosoRG by using Pipeline1."
      },
      {
        id: "O9",
        text: "Task version 3° hd"
      },
      {
        id: "O10",
        text: "ARM template deployment @ ff ViewYAML [il Remove"
      },
      {
        id: "O11",
        text: "Deployment mode"
      },
      {
        id: "O12",
        text: "location specified in the Linked artifact variable"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O11",
      "t2:O12"
    ]
  },
  {
    id: 431,
    number: 67,
    topic: "Topic 8",
    prompt: "DRAG DROP\n-\nYou have an Azure Pipeline.\nYou need to store configuration values as variables.\nAt which four scopes can the variables be defined, and what is the precedence of the variables from the highest precedence to lowest\nprecedence? To answer, move the appropriate scope from the list of scopes to the answer area and arrange them in the correct order.\n",
    keySource: "source",
    explanation: "Source answer: job, stage, pipeline root, pipeline seetings UI",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Deployment scope."
      },
      {
        id: "O2",
        text: "You have an Azure Pipeline."
      },
      {
        id: "O3",
        text: "default branch of the Git repository of Contoso Data Factory"
      },
      {
        id: "O4",
        text: "Pipeline will retrieve the ARM template from the [answer choice]. BN oo ="
      },
      {
        id: "O5",
        text: "job"
      },
      {
        id: "O6",
        text: "stage"
      },
      {
        id: "O7",
        text: "pipeline root"
      },
      {
        id: "O8",
        text: "pipeline seetings UI"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      },
      {
        id: "t4",
        text: "Blank 4"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7",
      "t4:O8"
    ]
  },
  {
    id: 432,
    number: 68,
    topic: "Topic 8",
    prompt: "You have a project in Azure DevOps named Project1 that contains two environments named environment1 and environment2.\nWhen a new version of Project is released, the latest version is deployed to environment2, and the previous version is redeployed to environment1.\nYou need to distribute users across the environments. The solution must meet the following requirements:\n• New releases must be available to only a subset of the users.\n• You must gradually increase the number of users that can access environment2.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "VIP swaping"
      },
      {
        id: "B",
        text: "web app deployment slots"
      },
      {
        id: "C",
        text: "Azure Load Balancer"
      },
      {
        id: "D",
        text: "Azure Trafic Manager"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 433,
    number: 69,
    topic: "Topic 8",
    prompt: "DRAG DROP\n-\nYou are designing a versioning strategy for Git-based packages.\nYou plan to use a Semantic Versioning (SemVer)-based strategy.\nYou need to identify when to change the build version.\nWhat should you identify for each scenario? To answer, drag the appropriate versions to the correct scenarios. Each version may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Major, Minor, Minor",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Load Balancer"
      },
      {
        id: "O2",
        text: "Azure Traffic Manager"
      },
      {
        id: "O3",
        text: "web app deployment slots"
      },
      {
        id: "O4",
        text: "You plan to use a Semantic Versioning (SemVer)-based strategy."
      },
      {
        id: "O5",
        text: "Major"
      },
      {
        id: "O6",
        text: "Minor"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O6"
    ]
  },
  {
    id: 434,
    number: 70,
    topic: "Topic 8",
    prompt: "You use Calendar Versioning (CalVer) for code assets.\nYou need to store an optional tag of beta as part of the version.\nWhich part of the version should you use for the tag?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "minor"
      },
      {
        id: "B",
        text: "major"
      },
      {
        id: "C",
        text: "micro"
      },
      {
        id: "D",
        text: "modifier"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 435,
    number: 71,
    topic: "Topic 8",
    prompt: "DRAG DROP\n-\nYou have an Azure subscription that uses Azure Automation State Configuration to manage the configuration of virtual machines.\nYou need to identify which nodes are noncompliant.\nHow should you complete the query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Category, OperationName, ResultType",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "azuzeniagnostics"
      },
      {
        id: "O2",
        text: "modifier"
      },
      {
        id: "O3",
        text: "compliant"
      },
      {
        id: "O4",
        text: "DscNodestatus"
      },
      {
        id: "O5",
        text: "minor"
      },
      {
        id: "O6",
        text: "major"
      },
      {
        id: "O7",
        text: "micro"
      },
      {
        id: "O8",
        text: "Category"
      },
      {
        id: "O9",
        text: "OperationName"
      },
      {
        id: "O10",
        text: "ResultType"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O8",
      "t2:O9",
      "t3:O10"
    ]
  },
  {
    id: 436,
    number: 72,
    topic: "Topic 8",
    prompt: "You have a project in Azure DevOps named Project1.\nYou need to ensure that all new pipelines in Project1 execute three specific tasks during pipeline execution.\nWhat should you create?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "a task group"
      },
      {
        id: "B",
        text: "a JSON template"
      },
      {
        id: "C",
        text: "a YAML template"
      },
      {
        id: "D",
        text: "a PowerShell task"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 437,
    number: 73,
    topic: "Topic 8",
    prompt: "HOTSPOT -\nYou have a project in Azure DevOps that contains a release pipeline. The pipeline contains two stages named QA and Prod. QA deploys code to an\nAzure web app named webapp1. Prod deploys code to an Azure web app named webapp2.\nYou need to ensure that code deployments to webapp2 are blocked if Azure Application Insights generates Failed requests alerts following the\ndeployment of new code to webapp1.\nWhat should you do for each stage? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Add a task to configure alert rules in Application Insights, Configure a gate in the pre-deployment conditions",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "deployment of new code to webapp."
      },
      {
        id: "O2",
        text: "a task group"
      },
      {
        id: "O3",
        text: "a JSON template"
      },
      {
        id: "O4",
        text: "a PowerShell task"
      },
      {
        id: "O5",
        text: "Configure a gate in the pre-deployment conditions."
      },
      {
        id: "O6",
        text: "Configure a trigger in the pre-deployment conditions."
      },
      {
        id: "O7",
        text: "Add a task to configure alert rules in Application Insights."
      },
      {
        id: "O8",
        text: "Configure an auto-redeploy trigger in the post-deployment conditions"
      },
      {
        id: "O9",
        text: "Configure a post-deployment approval in the post-deployment conditions"
      },
      {
        id: "O10",
        text: "Configure the Deployment queue settings in the pre-deployment conditions."
      },
      {
        id: "O11",
        text: "\\Add a task to configure an alert rule in Application Insights."
      },
      {
        id: "O12",
        text: "Azure web app named webapp. Prod deploys code to an Azure web app named webapp2."
      },
      {
        id: "O13",
        text: "Add a task to configure alert rules in Application Insights"
      },
      {
        id: "O14",
        text: "Configure a gate in the pre-deployment conditions"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O13",
      "t2:O14"
    ]
  },
  {
    id: 438,
    number: 74,
    topic: "Topic 8",
    prompt: "You use Azure DevOps processes to build and deploy code.\nYou need to compare how much time is spent troubleshooting issues found during development and how much time is spent troubleshooting\nissues found in released code.\nWhich KPI should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "defect escape rate"
      },
      {
        id: "B",
        text: "unplanned work rate"
      },
      {
        id: "C",
        text: "defect rate"
      },
      {
        id: "D",
        text: "rework rate"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 439,
    number: 75,
    topic: "Topic 8",
    prompt: "You have a project in Azure DevOps named Project1.\nYou implement a Continuous Integration/Continuous Deployment (CI/CD) pipeline that uses PowerShell Desired State Configuration (DSC) to\nconfigure the application infrastructure.\nYou need to perform a unit test and an integration test of the configuration before Project1 is deployed.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "the PSScriptAnalyzer tool"
      },
      {
        id: "B",
        text: "the Pester test framework"
      },
      {
        id: "C",
        text: "the PSCodeHealth module"
      },
      {
        id: "D",
        text: "the Test-DscConfiguration cmdlet"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 440,
    number: 76,
    topic: "Topic 8",
    prompt: "You use Azure Repos to manage source code and Azure Pipelines to implement continuous integration and continuous deployment (CI/CD).\nYou need to ensure that all comments on pull requests are resolved before the pull requests are included in a build. The solution must minimize\nadministrative effort.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "a custom action"
      },
      {
        id: "B",
        text: "a post-deployment gate"
      },
      {
        id: "C",
        text: "a branch policy"
      },
      {
        id: "D",
        text: "a pre-deployment gate "
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 441,
    number: 77,
    topic: "Topic 8",
    prompt: "DRAG DROP\n-\nYou have a project in Azure DevOps named Project that has a release pipeline in Azure Pipeline named ReleaseP1.\nYou need to ensure that when a new release is generated for ReleaseP1, a new release note document is created. The release notes must contain\nnew features and bug fixes.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.",
    keySource: "source",
    explanation: "Source answer: Create a personal access token (PAT), Create a service principal, Create a PowerShell task in RealseP1 that writes the retrieved data to a markdown file",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "dotnet"
      },
      {
        id: "O2",
        text: "Create a query that retrieves the feature and bug fix information."
      },
      {
        id: "O3",
        text: "Create 2 service principal. ® 2] ®»"
      },
      {
        id: "O4",
        text: "Create a personal access token (PAT). [1]"
      },
      {
        id: "O5",
        text: "appl.dll"
      },
      {
        id: "O6",
        text: "Al"
      },
      {
        id: "O7",
        text: "B.3"
      },
      {
        id: "O8",
        text: "C.4"
      },
      {
        id: "O9",
        text: "D.7"
      },
      {
        id: "O10",
        text: "Create a personal access token (PAT)"
      },
      {
        id: "O11",
        text: "Create a service principal"
      },
      {
        id: "O12",
        text: "Create a PowerShell task in RealseP1 that writes the retrieved data to a markdown file"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O10",
      "t2:O11",
      "t3:O12"
    ]
  },
  {
    id: 442,
    number: 1,
    topic: "Topic 9",
    prompt: "You plan to create an image that will contain a .NET Core application.\nYou have a Dockerfile file that contains the following code. (Line numbers are included for reference only.)\nYou need to ensure that the image is as small as possible when the image is built.\nWhich line should you modify in the file?",
    keySource: "source",
    explanation: "Source answer: Velocity, Releasse pipeline overview, Query tile",
    type: "single",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "3"
      },
      {
        id: "C",
        text: "4"
      },
      {
        id: "D",
        text: "7 "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 443,
    number: 2,
    topic: "Topic 9",
    prompt: "You have a project in Azure DevOps named Project1. Project1 contains a build pipeline named Pipe1 that builds an application named App1.\nYou have an agent pool named Pool1 that contains a Windows Server 2022-based self-hosted agent. Pipe1 uses Pool1.\nYou plan to implement another project named Project2. Project2 will have a build pipeline named Pipe2 that builds an application named App2.\nApp1 and App2 have confiicting dependencies.\nYou need to minimize the possibility that the two build pipelines will confiict with each other. The solution must minimize infrastructure costs.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add another self-hosted agent."
      },
      {
        id: "B",
        text: "Add a Docker Compose task to the build pipelines."
      },
      {
        id: "C",
        text: "Change the self-hosted agent to use Red Hat Enterprise Linux (RHEL) 9."
      },
      {
        id: "D",
        text: "Create two container jobs."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 444,
    number: 3,
    topic: "Topic 9",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\nDepPipeline1 and ADFPipeline1 use a single credential that is stored in Vault1.\nYou need to configure ADFPipeline1 to retrieve the credential from Vault1.\nWhich type of activity should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Lookup"
      },
      {
        id: "B",
        text: "Get Metadata"
      },
      {
        id: "C",
        text: "Сoрy"
      },
      {
        id: "D",
        text: "Web "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 445,
    number: 4,
    topic: "Topic 9",
    prompt: "DRAG DROP\n-\nYou have a project in Azure DevOps named Project1 that contains two Azure DevOps pipelines named Pipeline1 and Pipeline2.\nYou need to ensure that Pipeline1 can deploy code successfully to an Azure web app named webapp1. The solution must ensure that Pipeline2\ndoes not have permission to webapp1.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Set the default retention policy to 30 days, Set the stage retention policy to 60 days.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a system-assigned managed identity in Microsoft Azure"
      },
      {
        id: "O2",
        text: "Create a service principal in Microsoft Azure Active Directory"
      },
      {
        id: "O3",
        text: "a single web app and two deployment slots"
      },
      {
        id: "O4",
        text: "a single web app and two deployment pipelines"
      },
      {
        id: "O5",
        text: "Ba"
      },
      {
        id: "O6",
        text: "+ Minimize downtime during the deployment."
      },
      {
        id: "O7",
        text: "Set the default retention policy to 30 days"
      },
      {
        id: "O8",
        text: "Set the stage retention policy to 60 days."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O8"
    ]
  },
  {
    id: 446,
    number: 5,
    topic: "Topic 9",
    prompt: "You have an Azure web app that is deployed by using Azure Pipelines.\nYou need to ensure that when a new version of the app is deployed to production, you can roll back to the previous version. The solution must\nmeet the following requirements:\n• Minimize downtime during the deployment.\n• Minimize the time it takes for the rollback.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A source control system, A hosted service\n\nTopic 19: Testlet 10 - Introductory Info",
    type: "single",
    options: [
      {
        id: "A",
        text: "a single web app and two deployment slots"
      },
      {
        id: "B",
        text: "a single web app and two deployment pipelines"
      },
      {
        id: "C",
        text: "two web apps and an Azure Standard Load Balancer"
      },
      {
        id: "D",
        text: "two web apps and an Azure Trafic Manager instance "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 447,
    number: 6,
    topic: "Topic 9",
    prompt: "You have an app named App1 that you release by using Azure Pipelines. App1 has the versions shown in the following table.\nYou complete a code change to fix a bug that was introduced in version 3.4.3.\nWhich version number should you assign to the release?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "3.4.4"
      },
      {
        id: "B",
        text: "3.4.8"
      },
      {
        id: "C",
        text: "3.5.0"
      },
      {
        id: "D",
        text: "4.0.1"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 448,
    number: 7,
    topic: "Topic 9",
    prompt: "You are automating the testing process for your company.\nYou need to automate UI testing of a web application.\nWhich framework should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "JaCoco"
      },
      {
        id: "B",
        text: "Playwright"
      },
      {
        id: "C",
        text: "Xamarin.UITest"
      },
      {
        id: "D",
        text: "Microsoft.CodeAnalysis "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 449,
    number: 8,
    topic: "Topic 9",
    prompt: "You have a project in Azure DevOps named Project1 that references an Azure Artifacts feed named Feed1.\nYou have a package named Package1 that has the versions shown in the following table.\nYou need to perform a build of Project1.\nWhich version of Package1 will be used?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "1.0.3"
      },
      {
        id: "B",
        text: "1.4.0"
      },
      {
        id: "C",
        text: "2.0.0"
      },
      {
        id: "D",
        text: "2.3.1 "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 450,
    number: 9,
    topic: "Topic 9",
    prompt: "HOTSPOT\n-\nYou have an Azure subscription.\nYou need to create a storage account by using a Bicep file.\nHow should you complete the file? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: kind, properties",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "resource invoiceStorage 'Microsoft.Storage/storageAccounts@2022-05-01' = {"
      },
      {
        id: "O2",
        text: "kind"
      },
      {
        id: "O3",
        text: "properties"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3"
    ]
  },
  {
    id: 451,
    number: 10,
    topic: "Topic 9",
    prompt: "DRAG DROP\n-\nYou have a GitHub repository named repo1 that stores the code of an app named App1. You need deploy a workfiow for repo1 by using GitHub\nActions. The solution must meet the following requirements:\n• Scan on pushes to the main branch.\n• Scan on pull requests to the main branch.\n• Scan on pull requests to any branch that has a prefix of releases/.\n• Scan all the files in the subdirectories of the src directory.\nHow should you complete the code? To answer, drag he appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all.",
    keySource: "source",
    explanation: "Source answer: - ‘releases/**’, - ‘src/**’, -‘*.md’",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "View the Pipeline duration report."
      },
      {
        id: "O2",
        text: "min"
      },
      {
        id: "O3",
        text: "+ Scan on pushes to the main branch."
      },
      {
        id: "O4",
        text: "« Scan on pull requests to the main branch."
      },
      {
        id: "O5",
        text: "- ‘releases/**’"
      },
      {
        id: "O6",
        text: "‘src/**’"
      },
      {
        id: "O7",
        text: "-‘*.md’"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6",
      "t3:O7"
    ]
  },
  {
    id: 452,
    number: 11,
    topic: "Topic 9",
    prompt: "You use Azure Pipelines to build and test code projects.\nYou notice an increase in cycle times.\nYou need to identify whether agent pool exhaustion is causing the issue.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BD",
    type: "single",
    options: [
      {
        id: "A",
        text: "Query the PipelineRun/PipelineRuns endpoint."
      },
      {
        id: "B",
        text: "Query the TaskAgentPoolSizeSnapshots endpoint."
      },
      {
        id: "C",
        text: "View the Pipeline duration report."
      },
      {
        id: "D",
        text: "View the pool consumption report at the organization level. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 453,
    number: 12,
    topic: "Topic 9",
    prompt: "You have an Azure subscription that contains an Azure pipeline named Pipeline1 and a GitHub repository named Repo1. Repo1 contains Bicep\nmodules. Pipeline1 deploys Azure resources by using the Bicep modules.\nYou need to ensure that all releases comply with Azure Policy before they are deployed to production.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "To Pipeline1, add a step that runs a What if deployment before the deployment step."
      },
      {
        id: "B",
        text: "Configure a deployment gate for Pipeline1 that uses Azure Automation to run a What If deployment."
      },
      {
        id: "C",
        text: "Create an Azure DevOps build that runs on the creation of a pull request and assesses the code for compliance."
      },
      {
        id: "D",
        text: "Configure a deployment gate for Pipeline1 and include the Azure DevOps Security and compliance assessment task."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 454,
    number: 13,
    topic: "Topic 9",
    prompt: "DRAG DROP\n-\nYou use Semantic Versioning (SemVer) as a dependency versioning strategy.\nYou perform changes to code as shown in the following table.\nWhich part of the version should you increment for each change? To answer, drag the appropriate parts to the correct changes. Each part may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: Minor, Major, Patch",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Minor"
      },
      {
        id: "O2",
        text: "Major"
      },
      {
        id: "O3",
        text: "Patch"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2",
      "t3:O3"
    ]
  },
  {
    id: 455,
    number: 14,
    topic: "Topic 9",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure pipeline that is used to deploy a web app. The pipeline includes a test suite named TestSuite1. TestSuite1 is used to validate\nthe operations of the web app.\nTestSuite1 fails intermittently.\nYou identify that the failures are unrelated to changes in the source code and execution environment.\nYou need to minimize troubleshooting effort for the TestSuite1 failures.\nSolution: You enable fiaky test management.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Yes",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 456,
    number: 15,
    topic: "Topic 9",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure pipeline that is used to deploy a web app. The pipeline includes a test suite named TestSuite1. TestSuite1 is used to validate\nthe operations of the web app.\nTestSuite1 fails intermittently.\nYou identify that the failures are unrelated to changes in the source code and execution environment.\nYou need to minimize troubleshooting effort for the TestSuite1 failures.\nSolution: You implement the Test Results Trend widget.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B .No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 457,
    number: 16,
    topic: "Topic 9",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure pipeline that is used to deploy a web app. The pipeline includes a test suite named TestSuite1. TestSuite1 is used to validate\nthe operations of the web app.\nTestSuite1 fails intermittently.\nYou identify that the failures are unrelated to changes in the source code and execution environment.\nYou need to minimize troubleshooting effort for the TestSuite1 failures.\nSolution: You enable Test Impact Analysis (TIA).\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 458,
    number: 17,
    topic: "Topic 9",
    prompt: "You plan to publish build artifacts by using an Azure pipeline.\nYou need to create an .artifactignore file that meets the following requirements:\n• Includes all files in the build output folder and all subfolders\n• Excludes files that have the .dll extension\nWhat should you include in the file?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "./** !*.dll"
      },
      {
        id: "B",
        text: "**/* !*.dll"
      },
      {
        id: "C",
        text: "*/** *.dll"
      },
      {
        id: "D",
        text: "**/* #*.dll "
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 459,
    number: 18,
    topic: "Topic 9",
    prompt: "HOTSPOT\n-\nYou have a GitHub repository.\nYou plan to use the repository to create a container.\nYou need to configure GitHub Actions to deploy the container to GitHub Container Registry.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: echo $GITHUB_TOKEN .. , docker build. –file Dockerfile –tag ….. ,Docker push ghcr.io/$...",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "docker login ghcr.io -u USERNAME --password-stdin"
      },
      {
        id: "O2",
        text: "You plan to use the repository to create a container."
      },
      {
        id: "O3",
        text: "docker push ghcr.io/${{ github.repository_owner }}/${{ github.repository }}latest"
      },
      {
        id: "O4",
        text: "docker pull ghcr.io/${{ github.repository_owner }}/${{ github.repository }}:latest"
      },
      {
        id: "O5",
        text: "docker push ghcr.io/${{ github.repository_owner }}/${{ github.repository }}:latest"
      },
      {
        id: "O6",
        text: "docker build. --file Dockerfile --tag ${{ github.repository }}:latest --label \"runnumber=${{ github.run_number }}\""
      },
      {
        id: "O7",
        text: "echo $GITHUB_TOKEN .."
      },
      {
        id: "O8",
        text: "docker build. –file Dockerfile –tag ….."
      },
      {
        id: "O9",
        text: "Docker push ghcr.io/$..."
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9"
    ]
  },
  {
    id: 460,
    number: 19,
    topic: "Topic 9",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure pipeline that is used to deploy a web app. The pipeline includes a test suite named TestSuite1. TestSuite1 is used to validate\nthe operations of the web app.\nTestSuite1 fails intermittently.\nYou identify that the failures are unrelated to changes in the source code and execution environment.\nYou need to minimize troubleshooting effort for the TestSuite1 failures.\nSolution: You increase code coverage.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: B. No",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 461,
    number: 20,
    topic: "Topic 9",
    prompt: "You have an Azure pipeline that is used to build and deploy an app named App1. The build job uses a Microsoft-hosted Windows agent.\nThe build job for App1 intermittently returns a timeout error.\nYou need to ensure that the build job completes successfully. The solution must minimize administrative effort.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Change the configuration of the build agent."
      },
      {
        id: "B",
        text: "Deploy a self-hosted agent."
      },
      {
        id: "C",
        text: "Change to a Microsoft-hosted Linux agent."
      },
      {
        id: "D",
        text: "Purchase more parallel jobs. "
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 462,
    number: 21,
    topic: "Topic 9",
    prompt: "You have an Azure subscription that contains an Azure Pipelines pipeline named Pipeline1 and a user named User1. Pipeline1 is used to build and\ntest an app named App1. User1 is assigned the Contributors role for Pipeline1.\nYou plan to test App1 by using an Azure Deployment Environments environment.\nYou need to ensure that User1 can provision the environment. The solution must follow the principle of least privilege.\nWhich role should you assign to User1?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "DevCenter Project Admin"
      },
      {
        id: "B",
        text: "Deployment Environments User"
      },
      {
        id: "C",
        text: "Contributors"
      },
      {
        id: "D",
        text: "Build Administrators"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 463,
    number: 22,
    topic: "Topic 9",
    prompt: "HOTSPOT\n-\nYou have an Azure subscription that contains Azure DevOps build pipelines.\nYou need to implement pipeline caching by using the cache task.\nHow should you complete the YAML definition? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: key: , path:",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Deployment Environments User"
      },
      {
        id: "O2",
        text: "Build Administrators"
      },
      {
        id: "O3",
        text: "Contributors"
      },
      {
        id: "O4",
        text: "script: yarn --frozen-lockfile"
      },
      {
        id: "O5",
        text: "You plan to test App1 by using an Azure Deployment Environments environment."
      },
      {
        id: "O6",
        text: "yarn"
      },
      {
        id: "O7",
        text: "$(Agent.05)"
      },
      {
        id: "O8",
        text: "task: Cache§2"
      },
      {
        id: "O9",
        text: "¥ | ‘\"yarn\" | \"$(Agent.05)\" | yarn.lock'"
      },
      {
        id: "O10",
        text: "YARN_CACHE_FOLDER: $(Pipeline.lWorkspace)/.yarn"
      },
      {
        id: "O11",
        text: "key:"
      },
      {
        id: "O12",
        text: "path:"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O11",
      "t2:O12"
    ]
  },
  {
    id: 464,
    number: 23,
    topic: "Topic 9",
    prompt: "HOTSPOT\n-\nYou have a management group that contains four Azure subscriptions. Each subscription contains four resource groups.\nYou develop a new web app named App1.\nYou plan to deploy an instance of App1 to each resource group.\nYou need to create a Bicep template that will be used to deploy App1. The solution must meet the following requirements:\n• The name of each App1 instance must be consistent for each subscription and resource group.\n• The name of each App Service plan used to host App1 must be consistent.\nHow should you complete the template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\n",
    keySource: "source",
    explanation: "Source answer: (subscription().id), (resourceGroup().id)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "(deployment().name)')"
      },
      {
        id: "O2",
        text: "You plan to deploy an instance of App1 to each resource group."
      },
      {
        id: "O3",
        text: "hs"
      },
      {
        id: "O4",
        text: "(deployment().name)’)"
      },
      {
        id: "O5",
        text: "(subscription().id)"
      },
      {
        id: "O6",
        text: "(resourceGroup().id)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5",
      "t2:O6"
    ]
  },
  {
    id: 465,
    number: 24,
    topic: "Topic 9",
    prompt: "DRAG DROP\n-\nYou use an Azure pipeline to build a .NET app that has NuGet dependencies.\nYou need to ensure that the pipeline caches required NuGet packages.\nHow should you configure the pipeline? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: $Build.SourcesDirectory)/**/packages.lock.json, $Agent.OS, $NUGET_Packages",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "effort."
      },
      {
        id: "O2",
        text: "an Azure Repos branch policy"
      },
      {
        id: "O3",
        text: "an Azure Pipelines deployment gate"
      },
      {
        id: "O4",
        text: "nuget"
      },
      {
        id: "O5",
        text: "$(Agent.0) variables:"
      },
      {
        id: "O6",
        text: "NUGET_PACKAGES: $(Pipeline.Workspace)/.nuget/packages"
      },
      {
        id: "O7",
        text: "$Build.SourcesDirectory)/**/packages.lock.json"
      },
      {
        id: "O8",
        text: "$Agent.OS"
      },
      {
        id: "O9",
        text: "$NUGET_Packages"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O7",
      "t2:O8",
      "t3:O9"
    ]
  },
  {
    id: 466,
    number: 25,
    topic: "Topic 9",
    prompt: "You have an Azure pipeline that is used to deploy an app named App1.\nYou need to ensure that new versions of App1 are released only if they exceed performance baselines. The solution must minimize administrative\neffort.\nWhat should you configure?",
    keySource: "source",
    explanation: "Source answer: D\n\nTopic 10: Testlet 1 - Introductory Info",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Pipelines release artifact"
      },
      {
        id: "B",
        text: "an Azure Repos branch policy"
      },
      {
        id: "C",
        text: "an Azure Monitor alert"
      },
      {
        id: "D",
        text: "an Azure Pipelines deployment gate  Topic 10 - Testlet 1"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 467,
    number: 1,
    topic: "Topic 10",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table.\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nHOTSPOT -\nYou need to configure the alert for VM1. The solution must meet the technical requirements.\nWhich two settings should you configure? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\nTopic 11 - Testlet 2",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Deploy App1 to Azure App Service."
      },
      {
        id: "O2",
        text: "Deploy an Azure AD tenant named woodgrovebank.com."
      },
      {
        id: "O3",
        text: "Deploy App2 to an Azure virtual machine named VM1."
      },
      {
        id: "O4",
        text: "Merge the POC branch into the GitHub default branch."
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 468,
    number: 1,
    topic: "Topic 11",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\n\tThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\nThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nHOTSPOT -\nHow should you complete the code to initialize App Center in the mobile application? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\nTopic 12 - Testlet 3",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch offices access the source code by using TFS proxy servers."
      },
      {
        id: "O2",
        text: "base."
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 469,
    number: 1,
    topic: "Topic 12",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n\t- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nYou add the virtual machines as managed nodes in Azure Automation State Configuration.\nYou need to configure the managed computers in Pool7.\nWhat should you do next?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the RefreshMode property of the Local Configuration Manager (LCM)."
      },
      {
        id: "B",
        text: "Run the Register-AzureRmAutomationDscNode Azure Powershell cmdlet."
      },
      {
        id: "C",
        text: "Modify the ConfigurationMode property of the Local Configuration Manager (LCM)."
      },
      {
        id: "D",
        text: "Install PowerShell Core. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 470,
    number: 2,
    topic: "Topic 12",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n\t- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nDRAG DROP -\nYou need to implement the code fiow strategy for Project2 in Azure DevOps.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable Team2 to submit pull requests for Project2."
      },
      {
        id: "O2",
        text: "Enable Team2 to work independently on changes to a copy of Project2."
      },
      {
        id: "O3",
        text: "Project6 will provide support for build and deployment pipelines. Deployment"
      },
      {
        id: "O4",
        text: "Project? will contain a target deployment group named Group? that maps"
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 471,
    number: 3,
    topic: "Topic 12",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n\t- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nDRAG DROP -\nYou need to configure Azure Automation for the computers in Pool7.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n\nTopic 13 - Testlet 4",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable Team2 to submit pull requests for Project2."
      },
      {
        id: "O2",
        text: "Enable Team2 to work independently on changes to a copy of Project2."
      },
      {
        id: "O3",
        text: "Project6 will provide support for build and deployment pipelines. Deployment"
      },
      {
        id: "O4",
        text: "Project? will contain a target deployment group named Group? that maps"
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 472,
    number: 1,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\n\tThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\nThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nHOTSPOT -\nHow should you configure the release retention policy for the investment planning depletions suite? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch offices access the source code by using TFS proxy servers."
      },
      {
        id: "O2",
        text: "base."
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 473,
    number: 2,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\nThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\n\tThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nHOTSPOT -\nYou need to configure a cloud service to store the secrets required by the mobile applications to call the share pricing service.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch offices access the source code by using TFS proxy servers."
      },
      {
        id: "O2",
        text: "base."
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 474,
    number: 3,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\nThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\n\tThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nDRAG DROP -\nWhich package feed access levels should be assigned to the Developers and Team Leaders groups for the investment planning applications suite?\nTo answer, drag the appropriate access levels to the correct groups. Each access level may be used once, more than once, or not at all. You may\nneed to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\nTopic 14 - Testlet 5",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "branch offices access the source code by using TFS proxy servers."
      },
      {
        id: "O2",
        text: "base."
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 475,
    number: 1,
    topic: "Topic 14",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table.\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nYou need to meet the technical requirements for controlling access to Azure DevOps.\nWhat should you use?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Multi-Factor Authentication (MFA)"
      },
      {
        id: "B",
        text: "on-premises firewall rules"
      },
      {
        id: "C",
        text: "conditional access policies in Azure AD"
      },
      {
        id: "D",
        text: "Azure role-based access control (Azure RBAC) "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 476,
    number: 2,
    topic: "Topic 14",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table.\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nYou need to configure Azure Pipelines to control App2 builds.\nWhich authentication method should you use?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Windows NTLM"
      },
      {
        id: "B",
        text: "certificate"
      },
      {
        id: "C",
        text: "SAML"
      },
      {
        id: "D",
        text: "personal access token (PAT) "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 477,
    number: 3,
    topic: "Topic 14",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table.\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nDRAG DROP -\nYou need to configure authentication for App1. The solution must support the planned changes.\nWhich three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in\nthe correct order.\nSelect and Place:\n\nTopic 15 - Testlet 6",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Deploy App1 to Azure App Service."
      },
      {
        id: "O2",
        text: "Deploy an Azure AD tenant named woodgrovebank.com."
      },
      {
        id: "O3",
        text: "Deploy App2 to an Azure virtual machine named VM1."
      },
      {
        id: "O4",
        text: "Merge the POC branch into the GitHub default branch."
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 478,
    number: 1,
    topic: "Topic 15",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table.\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nDRAG DROP -\nYou need to replace the existing DevOps tools to support the planned changes.\nWhat should you use? To answer, drag the appropriate tools to the correct targets. Each tool may be used once, more than once, or not at all. You\nmay need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Deploy App1 to Azure App Service."
      },
      {
        id: "O2",
        text: "Deploy an Azure AD tenant named woodgrovebank.com."
      },
      {
        id: "O3",
        text: "Deploy App2 to an Azure virtual machine named VM1."
      },
      {
        id: "O4",
        text: "Merge the POC branch into the GitHub default branch."
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 479,
    number: 2,
    topic: "Topic 15",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table.\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nYou need to the merge the POC branch into the default branch. The solution must meet the technical requirements.\nWhich command should you run?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "git rebase"
      },
      {
        id: "B",
        text: "git merge --squash"
      },
      {
        id: "C",
        text: "git push"
      },
      {
        id: "D",
        text: "git merge --allow-unrelated-histories  Topic 16 - Testlet 7"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 480,
    number: 1,
    topic: "Topic 16",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table:\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nYou need to perform the GitHub code migration. The solution must support the planned changes for the DevOps environment.\nWhat should you use?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "git clone"
      },
      {
        id: "B",
        text: "GitHub Importer"
      },
      {
        id: "C",
        text: "Import repository in Azure Repos"
      },
      {
        id: "D",
        text: "git-tfs  Topic 17 - Testlet 8"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 481,
    number: 1,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n\t- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nHOTSPOT -\nHow should you configure the filters for the Project5 trigger? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Project6 will provide support for build and deployment pipelines. Deployment"
      },
      {
        id: "O2",
        text: "Project? will contain a target deployment group named Group? that maps"
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 482,
    number: 2,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n\t- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nIn Azure DevOps, you create Project3.\nYou need to meet the requirements of the project.\nWhat should you do first?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Azure DevOps, modify the build definition."
      },
      {
        id: "B",
        text: "From SonarQube, obtain an authentication token."
      },
      {
        id: "C",
        text: "From Azure DevOps, create a service endpoint."
      },
      {
        id: "D",
        text: "From SonarQube, create a project. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 483,
    number: 3,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n\t- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nYou need to implement Project4.\nWhat should you do first?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add the FROM instruction in the Dockerfile file."
      },
      {
        id: "B",
        text: "Add a Copy and Publish Build Artifacts task to the build pipeline."
      },
      {
        id: "C",
        text: "Add a Docker task to the build pipeline."
      },
      {
        id: "D",
        text: "Add the MAINTAINER instruction in the Dockerfile file. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 484,
    number: 4,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n\t- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nDRAG DROP -\nYou need to recommend a procedure to implement the build agent for Project1.\nWhich three actions should you recommend be performed in sequence? To answer, move the appropriate actions from the list of actions to the\nanswer area and arrange them in the correct order.\nSelect and Place:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable Team2 to submit pull requests for Project2."
      },
      {
        id: "O2",
        text: "Enable Team2 to work independently on changes to a copy of Project2."
      },
      {
        id: "O3",
        text: "Project6 will provide support for build and deployment pipelines. Deployment"
      },
      {
        id: "O4",
        text: "Project? will contain a target deployment group named Group? that maps"
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 485,
    number: 5,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has a main ofice in Chicago.\nExisting Environment -\nContoso plans to improve its IT development and operations processes by implementing Azure DevOps principles. Contoso has an Azure\nsubscription and creates an Azure DevOps organization.\nThe Azure DevOps organization includes:\nThe Docker extension\nA deployment pool named Pool7 that contains 10 Azure virtual machines that run Windows Server 2019\nThe Azure subscription contains an Azure Automation account.\nRequirements -\nPlanned changes -\nContoso plans to create projects in Azure DevOps as shown in the following table.\nTechnical requirements -\nContoso identifies the following technical requirements:\nImplement build agents for Project1.\nWhenever possible, use Azure resources.\nAvoid using deprecated technologies.\nImplement a code fiow strategy for Project2 that will:\n- Enable Team2 to submit pull requests for Project2.\n- Enable Team2 to work independently on changes to a copy of Project2.\n\t- Ensure that any intermediary changes performed by Team2 on a copy of Project2 will be subject to the same restrictions as the ones defined in\nthe build policy of Project2.\nWhenever possible, implement automation and minimize administrative effort.\nImplement Project3, Project5, Project6, and Project7 based on the planned changes.\nImplement Project4 and configure the project to push Docker images to Azure Container Registry.\nQuestion\nDRAG DROP -\nYou need to implement Project6.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:\n\nTopic 18 - Testlet 9",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable Team2 to submit pull requests for Project2."
      },
      {
        id: "O2",
        text: "Enable Team2 to work independently on changes to a copy of Project2."
      },
      {
        id: "O3",
        text: "Project6 will provide support for build and deployment pipelines. Deployment"
      },
      {
        id: "O4",
        text: "Project? will contain a target deployment group named Group? that maps"
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      },
      {
        id: "t2",
        text: "Blank 2"
      },
      {
        id: "t3",
        text: "Blank 3"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 486,
    number: 1,
    topic: "Topic 18",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\n\tThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\nThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nTo resolve the current technical issue, what should you do to the Register-AzureRmAutomationDscNode command?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Change the value of the ConfigurationMode parameter."
      },
      {
        id: "B",
        text: "Replace the Register-AzureRmAutomationDscNode cmdlet with Register-AzureRmAutomationScheduledRunbook"
      },
      {
        id: "C",
        text: "Add the AllowModuleOverwrite parameter."
      },
      {
        id: "D",
        text: "Add the DefaultProfile parameter. "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 487,
    number: 2,
    topic: "Topic 18",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\nThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\n\tThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nWhich branching strategy should you recommend for the investment planning applications suite?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "release isolation"
      },
      {
        id: "B",
        text: "main only"
      },
      {
        id: "C",
        text: "development isolation"
      },
      {
        id: "D",
        text: "feature isolation "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 488,
    number: 3,
    topic: "Topic 18",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\nThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\n\tThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nWhat should you use to implement the code quality restriction on the release pipeline for the investment planning applications suite?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "a pre-deployment approval"
      },
      {
        id: "B",
        text: "a deployment gate"
      },
      {
        id: "C",
        text: "a post-deployment approval"
      },
      {
        id: "D",
        text: "a trigger "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 489,
    number: 4,
    topic: "Topic 18",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\nThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\n\tThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nHOTSPOT -\nHow should you configure the release retention policy for the investment planning applications suite? To answer, select the appropriate options in\nthe answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch offices access the source code by using TFS proxy servers."
      },
      {
        id: "O2",
        text: "base."
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 490,
    number: 5,
    topic: "Topic 18",
    prompt: "Introductory Info\nCase Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is an independent software vendor (ISV). Litware has a main ofice and five branch ofices.\nExisting Environment -\nApplication Architecture -\nThe company's primary application is a single monolithic retirement fund management system based on ASP.NET web forms that use logic written\nin VB.NET.\nSome new sections of the application are written in C#.\nVariations of the application are created for individual customers. Currently, there are more than 80 live code branches in the application's code\nbase.\nThe application was developed by using Microsoft Visual Studio. Source code is stored in Team Foundation Server (TFS) in the main ofice. The\nbranch ofices access the source code by using TFS proxy servers.\nArchitectural Issues -\nLitware focuses on writing new code for customers. No resources are provided to refactor or remove existing code. Changes to the code base\ntake a long time, as dependencies are not obvious to individual developers.\nMerge operations of the code often take months and involve many developers. Code merging frequently introduces bugs that are dificult to locate\nand resolve.\nCustomers report that ownership costs of the retirement fund management system increase continually. The need to merge unrelated code makes\neven minor code changes expensive.\nCustomers report that bug reporting is overly complex.\nRequirements -\nPlanned Changes -\nLitware plans to develop a new suite of applications for investment planning. The investment planning applications will require only minor\nintegration with the existing retirement fund management system.\nThe investment planning applications suite will include one multi-tier web application and two iOS mobile applications. One mobile application will\nbe used by employees; the other will be used by customers.\nLitware plans to move to a more agile development methodology. Shared code will be extracted into a series of packages.\nLitware has started an internal cloud transformation process and plans to use cloud-based services whenever suitable.\nLitware wants to become proactive in detecting failures, rather than always waiting for customer bug reports.\nTechnical Requirements -\nThe company's investment planning applications suite must meet the following technical requirements:\nNew incoming connections through the firewall must be minimized.\nMembers of a group named Developers must be able to install packages.\n\tThe principle of least privilege must be used for all permission assignments.\nA branching strategy that supports developing new functionality in isolation must be used.\nMembers of a group named Team Leaders must be able to create new packages and edit the permissions of package feeds.\nVisual Studio App Center must be used to centralize the reporting of mobile application crashes and device types in use.\nBy default, all releases must remain available for 30 days, except for production releases, which must be kept for 60 days.\nCode quality and release quality are critical. During release, deployments must not proceed between stages if any active bugs are logged against\nthe release.\nThe mobile applications must be able to call the share pricing service of the existing retirement fund management system. Until the system is\nupgraded, the service will only support basic authentication over HTTPS.\nThe required operating system configuration for the test servers changes weekly. Azure Automation State Configuration must be used to ensure\nthat the operating system on each test server is configured the same way when the servers are created and checked periodically.\nCurrent Technical Issue -\nThe test servers are configured correctly when first deployed, but they experience configuration drift over time. Azure Automation State\nConfiguration fails to correct the configurations.\nAzure Automation State Configuration nodes are registered by using the following command.\nQuestion\nHOTSPOT -\nWhere should the build and release agents for the investment planning applications suite run? To answer, select the appropriate options in the\nanswer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\nTopic 19 - Testlet 10",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "branch offices access the source code by using TFS proxy servers."
      },
      {
        id: "O2",
        text: "base."
      },
      {
        id: "O3",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O3"
    ]
  },
  {
    id: 491,
    number: 1,
    topic: "Topic 19",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table:\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nDRAG DROP -\nYou are configuring the Azure DevOps dashboard. The solution must meet the technical requirements.\nWhich widget should you use for each metric? To answer, drag the appropriate widgets to the correct metrics. Each widget may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n",
    keySource: "domain",
    explanation: "Source answer: (missing)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Deploy App1 to Azure App Service."
      },
      {
        id: "O2",
        text: "Deploy an Azure AD tenant named woodgrovebank.com."
      },
      {
        id: "O3",
        text: "Deploy App2 to an Azure virtual machine named VM1."
      },
      {
        id: "O4",
        text: "Merge the POC branch into the GitHub default branch."
      },
      {
        id: "O5",
        text: "No extracted answer"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:O5"
    ]
  },
  {
    id: 492,
    number: 2,
    topic: "Topic 19",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table:\n\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nYou plan to deploy a new database environment. The solution must meet the technical requirements.\nYou need to prepare the database for the deployment.\nHow should you format the export?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "NDF"
      },
      {
        id: "B",
        text: "BACPAC"
      },
      {
        id: "C",
        text: "DACPAC"
      },
      {
        id: "D",
        text: "MDF "
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 493,
    number: 3,
    topic: "Topic 19",
    prompt: "Introductory Info\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nWoodgrove Bank is a financial services company that has a main ofice in the United Kingdom.\nTechnical Requirements and Planned Changes\nPlanned Changes -\nWoodgrove Bank plans to implement the following project management changes:\nImplement Azure DevOps for project tracking.\nCentralize source code control in private GitHub repositories.\nImplement Azure Pipelines for build pipelines and release pipelines.\nWoodgrove Bank plans to implement the following changes to the identity environment:\nDeploy an Azure AD tenant named woodgrovebank.com.\nSync the Active Directory domain to Azure AD.\nConfigure App1 to use a service principal.\nIntegrate GitHub with Azure AD.\nWoodgrove Bank plans to implement the following changes to the core apps:\nMigrate App1 to ASP.NET Core.\nIntegrate Azure Pipelines and the third-party build tool used to develop App2.\nWoodgrove Bank plans to implement the following changes to the DevOps environment:\nDeploy App1 to Azure App Service.\nImplement source control for the DB1 schema.\nMigrate all the source code from TFS1 to GitHub.\nDeploy App2 to an Azure virtual machine named VM1.\nMerge the POC branch into the GitHub default branch.\nImplement an Azure DevOps dashboard for stakeholders to monitor development progress.\nTechnical Requirements -\nWoodgrove Bank identifies the following technical requirements:\nThe initial databases for new environments must contain both schema and reference data.\nAn Azure Monitor alert for VM1 must be configured to meet the following requirements:\n- Be triggered when average CPU usage exceeds 80 percent for 15 minutes.\n- Calculate CPU usage averages once every minute.\nThe commit history of the POC branch must replace the history of the default branch.\nThe Azure DevOps dashboard must display the metrics shown in the following table:\n\nGet IT Certification\nUnlock free, top-quality video courses on  with a simple\nregistration. Elevate your learning journey with our expertly curated content.\nRegister now to access a diverse range of educational resources designed for\nyour success. Start learning today with !\nStart Learning for free\nAccess to Azure DevOps must be restricted to specific IP addresses.\nPage load times for App1 must be captured and monitored.\nAdministrative effort must be minimized.\nQuestion\nYou need to meet the technical requirements for monitoring App1.\nWhat should you use?",
    keySource: "domain",
    explanation: "Source answer: (missing - no docx key found)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Splunk"
      },
      {
        id: "B",
        text: "Azure Application Insights"
      },
      {
        id: "C",
        text: "Azure Advisor"
      },
      {
        id: "D",
        text: "App Service logs"
      }
    ],
    correct: [
      "A"
    ]
  }
];
