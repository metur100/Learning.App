import type { Question } from "../../types";

export const az204Questions: Question[] = [
  {
    id: 1,
    number: 1,
    topic: "Topic 1",
    prompt: "You have two Hyper-V hosts named Host1 and Host2. Host1 has an Azure virtual machine named VM1 that was deployed by using a custom Azure\nResource\nManager template.\nYou need to move VM1 to Host2.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Update management blade, click Enable."
      },
      {
        id: "B",
        text: "From the Overview blade, move VM1 to a different subscription."
      },
      {
        id: "C",
        text: "From the Redeploy blade, click Redeploy."
      },
      {
        id: "D",
        text: "From the Prole blade, modify the usage location."
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
    prompt: "DRAG DROP -\nYou have downloaded an Azure Resource Manager template to deploy numerous virtual machines. The template is based on a current virtual\nmachine, but must be adapted to reference an administrative password.\nYou need to make sure that the password is not stored in plain text.\nYou are preparing to create the necessary components to achieve your goal.\nWhich of the following should you create to achieve your goal? Answer by dragging the correct option from the list to the answer area.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Key Vault, An access policy",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "An Azure Key Vault"
      },
      {
        id: "O2",
        text: "An access policy"
      },
      {
        id: "O3",
        text: "Azure Active Directory (AD)"
      },
      {
        id: "O4",
        text: "Identity Protection"
      },
      {
        id: "O5",
        text: "An Azure policy"
      },
      {
        id: "O6",
        text: "A backup policy"
      },
      {
        id: "O7",
        text: "An Azure Storage account"
      },
      {
        id: "O8",
        text: "Key Vault"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Resource"
      },
      {
        id: "t2",
        text: "Configuration"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2"
    ]
  },
  {
    id: 3,
    number: 3,
    topic: "Topic 1",
    prompt: "Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a\nresource group.\nDevelopers have created an application named MyApp. MyApp was packaged into a container image.\nYou need to deploy the YAML manifest le for the application.\nSolution: You install the Azure CLI on the device and run the kubectl apply `\"f myapp.yaml command.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES",
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
    id: 4,
    number: 4,
    topic: "Topic 1",
    prompt: "Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a\nresource group.\nDevelopers have created an application named MyApp. MyApp was packaged into a container image.\nYou need to deploy the YAML manifest le for the application.\nSolution: You install the docker client on the device and run the docker run -it microsoft/azure-cli:0.10.17 command.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: No (should be kubectl command)",
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
    id: 5,
    number: 5,
    topic: "Topic 1",
    prompt: "Your company has a web app named WebApp1.\nYou use the WebJobs SDK to design a triggered App Service background task that automatically invokes a function in the code every time new\ndata is received in a queue.\nYou are preparing to congure the service processes a queue data item.\nWhich of the following is the service you should use?",
    keySource: "source",
    explanation: "Source answer: B (WebJobs)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Logic Apps"
      },
      {
        id: "B",
        text: "WebJobs"
      },
      {
        id: "C",
        text: "Flow"
      },
      {
        id: "D",
        text: "Functions"
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
    prompt: "Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual\nmachines will be included in a single availability set.\nYou need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or\nmaintenance.\nWhich of the following is the value that you should congure for the platformFaultDomainCount property?",
    keySource: "source",
    explanation: "Source answer: Max Value",
    type: "single",
    options: [
      {
        id: "A",
        text: "10"
      },
      {
        id: "B",
        text: "30"
      },
      {
        id: "C",
        text: "Min Value"
      },
      {
        id: "D",
        text: "Max Value"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 7,
    number: 7,
    topic: "Topic 1",
    prompt: "Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual\nmachines will be included in a single availability set.\nYou need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or\nmaintenance.\nWhich of the following is the value that you should congure for the platformUpdateDomainCount property?",
    keySource: "source",
    explanation: "Source answer: B (20) even though 40 is right…",
    type: "single",
    options: [
      {
        id: "A",
        text: "10"
      },
      {
        id: "B",
        text: "20"
      },
      {
        id: "C",
        text: "30"
      },
      {
        id: "D",
        text: "40"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 8,
    number: 8,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application.\nYou need to ensure that an email notication is sent when information is received from IoT devices, and that compute cost is reduced.\nYou decide to deploy a function app.\nWhich of the following should you congure the function app to use? Answer by dragging the correct options from the list to the answer area.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Consumption Plan(reduce costs), SendGrid binding(sends email)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Cosmos DB connector"
      },
      {
        id: "O2",
        text: "SendGrid action"
      },
      {
        id: "O3",
        text: "Consumption plan"
      },
      {
        id: "O4",
        text: "Azure Event Hubs binding"
      },
      {
        id: "O5",
        text: "SendGrid binding"
      },
      {
        id: "O6",
        text: "Azure Storage Explorer"
      },
      {
        id: "O7",
        text: "mongorestore"
      },
      {
        id: "O8",
        text: "AzCopy"
      },
      {
        id: "O9",
        text: "Consumption Plan(reduce costs)"
      },
      {
        id: "O10",
        text: "SendGrid binding(sends email)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Hosting plan"
      },
      {
        id: "t2",
        text: "Output binding"
      }
    ],
    correct: [
      "t1:O3",
      "t2:O5"
    ]
  },
  {
    id: 9,
    number: 9,
    topic: "Topic 1",
    prompt: "This question requires that you evaluate the underlined text to determine if it is correct.\nYou company has an on-premises deployment of MongoDB, and an Azure Cosmos DB account that makes use of the MongoDB API.\nYou need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account.\nYou include the Data Management Gateway tool in your migration strategy.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change required.` If the statement is incorrect, select the\nanswer choice that makes the statement correct.",
    keySource: "source",
    explanation: "Source answer: B (mongorestore)",
    type: "single",
    options: [
      {
        id: "A",
        text: "No change required"
      },
      {
        id: "B",
        text: "mongorestore"
      },
      {
        id: "C",
        text: "Azure Storage Explorer"
      },
      {
        id: "D",
        text: "AzCopy"
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
    prompt: "You are developing an e-Commerce Web App.\nYou want to use Azure Key Vault to ensure that sign-ins to the e-Commerce Web App are secured by using Azure App Service authentication and\nAzure Active\nDirectory (AAD).\nWhat should you do on the e-Commerce Web App?",
    keySource: "source",
    explanation: "Source answer: C (MSI)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Run the az keyvault secret command."
      },
      {
        id: "B",
        text: "Enable Azure AD Connect."
      },
      {
        id: "C",
        text: "Enable Managed Service Identity (MSI)."
      },
      {
        id: "D",
        text: "Create an Azure AD service principal."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 11,
    number: 11,
    topic: "Topic 1",
    prompt: "This question requires that you evaluate the underlined text to determine if it is correct.\nYour Azure Active Directory Azure (Azure AD) tenant has an Azure subscription linked to it.\nYour developer has created a mobile application that obtains Azure AD access tokens using the OAuth 2 implicit grant type.\nThe mobile application must be registered in Azure AD.\nYou require a redirect URI from the developer for registration purposes.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the\nanswer choice that makes the statement correct.",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "No change required."
      },
      {
        id: "B",
        text: "a secret"
      },
      {
        id: "C",
        text: "a login hint"
      },
      {
        id: "D",
        text: "a client ID"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 12,
    number: 12,
    topic: "Topic 1",
    prompt: "You are creating an Azure key vault using PowerShell. Objects deleted from the key vault must be kept for a set period of 90 days.\nWhich two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)",
    keySource: "source",
    explanation: "Source answer: B,D",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "EnabledForDeployment"
      },
      {
        id: "B",
        text: "EnablePurgeProtection"
      },
      {
        id: "C",
        text: "EnabledForTemplateDeployment"
      },
      {
        id: "D",
        text: "EnableSoftDelete"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 13,
    number: 13,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure Active Directory (Azure AD) tenant.\nYou want to implement multi-factor authentication by making use of a conditional access policy. The conditional access policy must be applied to\nall users when they access the Azure portal.\nWhich three settings should you congure? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Users and Group, Cloud apps, Grant",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Users and groups"
      },
      {
        id: "O2",
        text: "Cloud apps"
      },
      {
        id: "O3",
        text: "Conditions"
      },
      {
        id: "O4",
        text: "Grant"
      },
      {
        id: "O5",
        text: "Session"
      },
      {
        id: "O6",
        text: "Users"
      },
      {
        id: "O7",
        text: "Group"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Assignment"
      },
      {
        id: "t2",
        text: "Target app"
      },
      {
        id: "t3",
        text: "Access control"
      }
    ],
    correct: [
      "t1:O1",
      "t2:O2",
      "t3:O4"
    ]
  },
  {
    id: 14,
    number: 14,
    topic: "Topic 1",
    prompt: "You manage an Azure SQL database that allows for Azure AD authentication.\nYou need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also\nneed to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication\nprompts to be kept to a minimum.\nWhich of the following should you implement?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD token."
      },
      {
        id: "B",
        text: "Azure Multi-Factor authentication."
      },
      {
        id: "C",
        text: "Active Directory integrated authentication."
      },
      {
        id: "D",
        text: "OATH software tokens."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 15,
    number: 15,
    topic: "Topic 1",
    prompt: "You are developing an application to transfer data between on-premises le servers and Azure Blob storage. The application stores keys, secrets,\nand certicates in Azure Key Vault and makes use of the Azure Key Vault APIs.\nYou want to congure the application to allow recovery of an accidental deletion of the key vault or key vault objects for 90 days after deletion.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Run the Add-AzKeyVaultKey cmdlet."
      },
      {
        id: "B",
        text: "Run the az keyvault update --enable-soft-delete true --enable-purge-protection true CLI."
      },
      {
        id: "C",
        text: "Implement virtual network service endpoints for Azure Key Vault."
      },
      {
        id: "D",
        text: "Run the az keyvault update --enable-soft-delete false CLI."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 16,
    number: 16,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have developed a Web App for your company. The Web App provides services and must run in multiple regions.\nYou want to be notied whenever the Web App uses more than 85 percent of the available CPU cores over a 5 minute period. Your solution must\nminimize costs.\nWhich command should you use? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Avg Percentage, window size",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az monitor metrics alert create -n myAlert -g myResourceGroup"
      },
      {
        id: "O2",
        text: "Avg Percentage"
      },
      {
        id: "O3",
        text: "window size"
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
    id: 17,
    number: 17,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are conguring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to congure the\napplication to store data in a geographic location that is nearest to the user.\nSolution: You include the use of Azure Redis Cache in your design.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: NO",
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
    id: 18,
    number: 18,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are conguring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to congure the\napplication to store data in a geographic location that is nearest to the user.\nSolution: You include the use of an Azure Content Delivery Network (CDN) in your design.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES",
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
    id: 19,
    number: 19,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are conguring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to congure the\napplication to store data in a geographic location that is nearest to the user.\nSolution: You include the use of a Storage Area Network (SAN) in your design.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: NO",
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
    id: 20,
    number: 20,
    topic: "Topic 1",
    prompt: "You develop a Web App on a tier D1 app service plan.\nYou notice that page load times increase during periods of peak trac.\nYou want to implement automatic scaling when CPU load is above 80 percent. Your solution must minimize costs.\nWhat should you do rst?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable autoscaling on the Web App."
      },
      {
        id: "B",
        text: "Switch to the Premium App Service tier plan."
      },
      {
        id: "C",
        text: "Switch to the Standard App Service tier plan."
      },
      {
        id: "D",
        text: "Switch to the Azure App Services consumption plan."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 21,
    number: 21,
    topic: "Topic 1",
    prompt: "Your company's Azure subscription includes an Azure Log Analytics workspace.\nYour company has a hundred on-premises servers that run either Windows Server 2012 R2 or Windows Server 2016, and is linked to the Azure Log\nAnalytics workspace. The Azure Log Analytics workspace is set up to gather performance counters associated with security from these linked\nservers.\nYou must congure alerts based on the information gathered by the Azure Log Analytics workspace.\nYou have to make sure that alert rules allow for dimensions, and that alert creation time should be kept to a minimum. Furthermore, a single alert\nnotication must be created when the alert is created and when the alert is resolved.\nYou need to make use of the necessary signal type when creating the alert rules.\nWhich of the following is the option you should use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "The Activity log signal type."
      },
      {
        id: "B",
        text: "The Application Log signal type."
      },
      {
        id: "C",
        text: "The Metric signal type."
      },
      {
        id: "D",
        text: "The Audit Log signal type."
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
    prompt: "You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.\nYou want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to\naccommodation.\nYou want the application to allow customers to search the index by using regular expressions.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Congure the SearchMode property of the SearchParameters class."
      },
      {
        id: "B",
        text: "Congure the QueryType property of the SearchParameters class."
      },
      {
        id: "C",
        text: "Congure the Facets property of the SearchParameters class."
      },
      {
        id: "D",
        text: "Congure the Filter property of the SearchParameters class."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 23,
    number: 23,
    topic: "Topic 1",
    prompt: "You are a developer at your company.\nYou need to update the denitions for an existing Logic App.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Enterprise Integration Pack (EIP)"
      },
      {
        id: "B",
        text: "the Logic App Code View"
      },
      {
        id: "C",
        text: "the API Connections"
      },
      {
        id: "D",
        text: "the Logic Apps Designer"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 24,
    number: 24,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must congure back-end authentication for the API Management service instance.\nSolution: You congure Basic gateway credentials for the Azure resource.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B",
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
    id: 25,
    number: 25,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must congure back-end authentication for the API Management service instance.\nSolution: You congure Client cert gateway credentials for the HTTP(s) endpoint.\nDoes the solution meet the goal?",
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
    id: 26,
    number: 26,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must congure back-end authentication for the API Management service instance.\nSolution: You congure Basic gateway credentials for the HTTP(s) endpoint.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: B",
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
    id: 27,
    number: 27,
    topic: "Topic 1",
    prompt: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satises the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must congure back-end authentication for the API Management service instance.\nSolution: You congure Client cert gateway credentials for the Azure resource.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: A",
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
    id: 28,
    number: 28,
    topic: "Topic 1",
    prompt: "You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.\nYou want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to\naccommodation venues.\nYou want the application to list holiday accommodation venues that fall within a specic price range and are within a specied distance to an\nairport.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Congure the SearchMode property of the SearchParameters class."
      },
      {
        id: "B",
        text: "Congure the QueryType property of the SearchParameters class."
      },
      {
        id: "C",
        text: "Congure the Facets property of the SearchParameters class."
      },
      {
        id: "D",
        text: "Congure the Filter property of the SearchParameters class."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 29,
    number: 29,
    topic: "Topic 1",
    prompt: "You are a developer at your company.\nYou need to edit the workows for an existing Logic App.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Enterprise Integration Pack (EIP)"
      },
      {
        id: "B",
        text: "the Logic App Code View"
      },
      {
        id: "C",
        text: "the API Connections"
      },
      {
        id: "D",
        text: "the Logic Apps Designer"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 30,
    number: 30,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou are a developer for a company that provides a bookings management service in the tourism industry. You are implementing Azure Search for\nthe tour agencies listed in your company's solution.\nYou create the index in Azure Search. You now need to use the Azure Search .NET SDK to import the relevant data into the Azure Search service.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions from left to right and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create SearchIndexClient, Create IndexBatch, Call Document.Index",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a DataSource instance and set its Container property to the DataContainer."
      },
      {
        id: "O2",
        text: "Create a SearchIndexClient object to connect to the search index."
      },
      {
        id: "O3",
        text: "Create an IndexBatch that contains the documents which must be added."
      },
      {
        id: "O4",
        text: "Set the DataSources property of the SearchServiceClient."
      },
      {
        id: "O5",
        text: "Call the Documents.Index method of the SearchIndexClient and pass the IndexBatch."
      },
      {
        id: "O6",
        text: "Call the Documents.Suggest method of the SearchIndexClient and pass the DataSource."
      },
      {
        id: "O7",
        text: "Create SearchIndexClient"
      },
      {
        id: "O8",
        text: "Create IndexBatch"
      },
      {
        id: "O9",
        text: "Call Document.Index"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Step 1"
      },
      {
        id: "t2",
        text: "Step 2"
      },
      {
        id: "t3",
        text: "Step 3"
      }
    ],
    correct: [
      "t1:O2",
      "t2:O3",
      "t3:O5"
    ]
  },
  {
    id: 31,
    number: 31,
    topic: "Topic 1",
    prompt: "You are developing an application that applies a set of governance policies for internal and external services, as well as for applications.\nYou develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. The PolicyApp reacts\nto events from\nAzure Event Grid and performs policy actions based on those events.\nYou have the following requirements:\n✑ Authentication events must be used to monitor users when they sign in and sign out.\n✑ All authentication events must be processed by PolicyApp.\n✑ Sign outs must be processed as fast as possible.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D m",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events."
      },
      {
        id: "B",
        text: "Create a separate Azure Event Grid handler for sign-in and sign-out events."
      },
      {
        id: "C",
        text: "Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events."
      },
      {
        id: "D",
        text: "Add a subject prex to sign-out events. Create an Azure Event Grid subscription. Congure the subscription to use the subjectBeginsWith lter."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 32,
    number: 32,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou are developing a C++ application that compiles to a native application named process.exe. The application accepts images as input and\nreturns images in one of the following image formats: GIF, PNG, or JPEG.\nYou must deploy the application as an Azure Function.\nYou need to congure the function and host json les.\nHow should you complete the json les? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Type: “http”, customHandler: description, enableForwardinghttprequeste: true, responseOverrides, 401, aad, .referrer, ts create, meinTemplate.json",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "host.json"
      },
      {
        id: "O2",
        text: "http"
      },
      {
        id: "O3",
        text: "enableForwardingHttpRequest"
      },
      {
        id: "O4",
        text: "stream"
      },
      {
        id: "O5",
        text: "result"
      },
      {
        id: "O6",
        text: "worker"
      },
      {
        id: "O7",
        text: "platform"
      },
      {
        id: "O8",
        text: "datatype"
      },
      {
        id: "O9",
        text: "direction"
      },
      {
        id: "O10",
        text: "extensions"
      },
      {
        id: "O11",
        text: "process.exe"
      },
      {
        id: "O12",
        text: "description"
      },
      {
        id: "O13",
        text: "customHandler"
      },
      {
        id: "O14",
        text: "languageWorker"
      },
      {
        id: "O15",
        text: "function. json"
      },
      {
        id: "O16",
        text: "\"type\": \"http\""
      },
      {
        id: "O17",
        text: "extensionBundle"
      },
      {
        id: "O18",
        text: "defaultExecutablePath"
      },
      {
        id: "O19",
        text: "by"
      },
      {
        id: "O20",
        text: "gem"
      },
      {
        id: "O21",
        text: "out"
      },
      {
        id: "O22",
        text: "type"
      },
      {
        id: "O23",
        text: "Type: \"http\""
      },
      {
        id: "O24",
        text: "customHandler: description"
      },
      {
        id: "O25",
        text: "enableForwardinghttprequeste: true"
      },
      {
        id: "O26",
        text: "responseOverrides"
      },
      {
        id: "O27",
        text: "401"
      },
      {
        id: "O28",
        text: "aad"
      },
      {
        id: "O29",
        text: ".referrer"
      },
      {
        id: "O30",
        text: "ts create"
      },
      {
        id: "O31",
        text: "meinTemplate.json"
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
      }
    ],
    correct: [
      "t1:O23",
      "t2:O24",
      "t3:O25",
      "t4:O26",
      "t5:O27",
      "t6:O28",
      "t7:O29",
      "t8:O30",
      "t9:O31"
    ]
  },
  {
    id: 33,
    number: 33,
    topic: "Topic 1",
    prompt: "HOTSPOT\n-\nYou are developing an Azure Static Web app that contains training materials for a tool company. Each tool’s training material is contained in a\nstatic web page that is linked from the tool’s publicly available description page.\nA user must be authenticated using Azure AD prior to viewing training.\nYou need to ensure that the user can view training material pages after authentication.\nHow should you complete the conguration le? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: webpubsubTrigger, user, premium ssd, geo-redundant storage, Container Group, empty dir",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "azure"
      },
      {
        id: "O2",
        text: "routes"
      },
      {
        id: "O3",
        text: "return"
      },
      {
        id: "O4",
        text: "headers"
      },
      {
        id: "O5",
        text: "redirect"
      },
      {
        id: "O6",
        text: "referrer"
      },
      {
        id: "O7",
        text: "microsoftonline"
      },
      {
        id: "O8",
        text: "responseOverrides"
      },
      {
        id: "O9",
        text: "navigationFallback"
      },
      {
        id: "O10",
        text: "A04"
      },
      {
        id: "O11",
        text: "add"
      },
      {
        id: "O12",
        text: "graph"
      },
      {
        id: "O13",
        text: "lorig"
      },
      {
        id: "O14",
        text: "route"
      },
      {
        id: "O15",
        text: "webpubsubTrigger"
      },
      {
        id: "O16",
        text: "user"
      },
      {
        id: "O17",
        text: "premium ssd"
      },
      {
        id: "O18",
        text: "geo-redundant storage"
      },
      {
        id: "O19",
        text: "Container Group"
      },
      {
        id: "O20",
        text: "empty dir"
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
      "t1:O15",
      "t2:O16",
      "t3:O17",
      "t4:O18",
      "t5:O19",
      "t6:O20"
    ]
  },
  {
    id: 34,
    number: 34,
    topic: "Topic 1",
    prompt: "HOTSPOT\n-\nYou are authoring a set of nested Azure Resource Manager templates to deploy Azure resources. You author an Azure Resource Manager template\nnamed mainTemplate.json that contains the following linked templates: linkedTemplate1.json, linkedTemplate2.json.\nYou add parameters to a parameters template le named mainTemplate.parameters,json. You save all templates on a local device in the\nC:\\templates\\ folder.\nYou have the following requirements:\n• Store the templates in Azure for later deployment.\n• Enable versioning of the templates.\n• Manage access to the templates by using Azure RBAC.\n• Ensure that users have read-only access to the templates.\n• Allow users to deploy the templates.\nYou need to store the templates in Azure.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: 4,isolated, Developer for a Saas company, Deployment",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az wv"
      },
      {
        id: "O2",
        text: "ts create"
      },
      {
        id: "O3",
        text: "mainTemplate json"
      },
      {
        id: "O4",
        text: "linkedTemplate1 json"
      },
      {
        id: "O5",
        text: "linkedTemplate2 json"
      },
      {
        id: "O6",
        text: "storage account create"
      },
      {
        id: "O7",
        text: "storage account update"
      },
      {
        id: "O8",
        text: "mainTemplate parameters json"
      },
      {
        id: "O9",
        text: "[blueprint artifact template create"
      },
      {
        id: "O10",
        text: "named mainTemplate.json that contains the following linked templates: linked Template1.json, linked Template2.json."
      },
      {
        id: "O11",
        text: "isolated"
      },
      {
        id: "O12",
        text: "Developer for a Saas company"
      },
      {
        id: "O13",
        text: "Deployment"
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
      "t1:O11",
      "t2:O12",
      "t3:O13"
    ]
  },
  {
    id: 35,
    number: 35,
    topic: "Topic 1",
    prompt: "HOTSPOT\n-\nYou are developing a service where customers can report news events from a browser using Azure Web PubSub. The service is implemented as an\nAzure Function App that uses the JSON WebSocket subprotocol to receive news events.\nYou need to implement the bindings for the Azure Function App.\nHow should you congure the binding? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: ScaledObject, Secret, CLI Script",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "user"
      },
      {
        id: "O2",
        text: "system"
      },
      {
        id: "O3",
        text: "message"
      },
      {
        id: "O4",
        text: "bindings"
      },
      {
        id: "O5",
        text: "eventName"
      },
      {
        id: "O6",
        text: "eventType"
      },
      {
        id: "O7",
        text: "lconnected"
      },
      {
        id: "O8",
        text: "webPubSubTrigger"
      },
      {
        id: "O9",
        text: "webPubSubConnection"
      },
      {
        id: "O10",
        text: "Azure Function App that uses the JSON WebSocket subprotocol to receive news events."
      },
      {
        id: "O11",
        text: "in"
      },
      {
        id: "O12",
        text: "name"
      },
      {
        id: "O13",
        text: "data"
      },
      {
        id: "O14",
        text: "ScaledObject"
      },
      {
        id: "O15",
        text: "Secret"
      },
      {
        id: "O16",
        text: "CLI Script"
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
      "t1:O14",
      "t2:O15",
      "t3:O16"
    ]
  },
  {
    id: 36,
    number: 36,
    topic: "Topic 1",
    prompt: "HOTSPOT\n-\nYou are building a software-as-a-service (SaaS) application that analyzes DNA data that will run on Azure virtual machines (VMs) in an availability\nzone. The data is stored on managed disks attached to the VM. The performance of the analysis is determined by the speed of the disk attached\nto the VM.\nYou have the following requirements:\n• The application must be able to quickly revert to the previous day’s data if a systemic error is detected.\n• The application must minimize downtime in the case of an Azure datacenter outage.\nYou need to provision the managed disk for the VM to maximize performance while meeting the requirements.\nWhich type of Azure Managed Disk should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Az appservice plan create, az webapp create, --plan $webappname",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium SSD"
      },
      {
        id: "O2",
        text: "Standard SSD"
      },
      {
        id: "O3",
        text: "Standard HDD"
      },
      {
        id: "O4",
        text: "Geo-redundant storage (GRS)"
      },
      {
        id: "O5",
        text: "Zone-redundant storage (ZRS)"
      },
      {
        id: "O6",
        text: "Locally-redundant storage (LRS)"
      },
      {
        id: "O7",
        text: "Az appservice plan create"
      },
      {
        id: "O8",
        text: "az webapp create"
      },
      {
        id: "O9",
        text: "--plan $webappname"
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
    id: 37,
    number: 37,
    topic: "Topic 1",
    prompt: "HOTSPOT\n-\nYou are developing an application that includes two Docker containers.\nThe application must meet the following requirements:\n• The containers must not run as root.\n• The containers must be deployed to Azure Container Instances by using a YAML le.\n• The containers must share a lifecycle, resources, local network, and storage volume.\n• The storage volume must persist through container crashes.\n• The storage volume must be deployed on stop or restart of the containers.\nYou need to congure Azure Container Instances for the application.\nWhich conguration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: az webapp deployment, -repo url $gitrepo –branch master –manual integration",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure file share"
      },
      {
        id: "O2",
        text: "Secret"
      },
      {
        id: "O3",
        text: "Storage volume v"
      },
      {
        id: "O4",
        text: "« The storage volume must persist through container crashes."
      },
      {
        id: "O5",
        text: "az webapp deployment"
      },
      {
        id: "O6",
        text: "-repo url $gitrepo –branch master –manual integration"
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
    id: 38,
    number: 1,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are implementing a software as a service (SaaS) ASP.NET Core web service that will run as an Azure Web App. The web service will use an on-\npremises\nSQL Server database for storage. The web service also includes a WebJob that processes data updates. Four customers will use the web service.\n✑ Each instance of the WebJob processes data for a single customer and must run as a singleton instance.\n✑ Each deployment must be tested by using deployment slots prior to serving production data.\n✑ Azure costs must be minimized.\n✑ Azure resources must be located in an isolated network.\nYou need to congure the App Service plan for the Web App.\nHow should you congure the App Service plan? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: NO (blob storage is not reliable when it comes to time consumption), YES – web.config include applicationinitialization",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium"
      },
      {
        id: "O2",
        text: "Standard"
      },
      {
        id: "O3",
        text: "Consumption"
      },
      {
        id: "O4",
        text: "Isolated"
      },
      {
        id: "O5",
        text: "App service plan setting Value"
      },
      {
        id: "O6",
        text: "NO (blob storage is not reliable when it comes to time consumption)"
      },
      {
        id: "O7",
        text: "YES"
      },
      {
        id: "O8",
        text: "web.config include applicationinitialization"
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
    id: 39,
    number: 2,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs\non an Azure\nFunction app that is triggered by an Azure Storage queue.\nYou are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).\nYou need to congure Kubernetes Custom Resource Denitions (CRD) for the Azure Function.\nWhich CRDs should you congure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: NO - Enable auto swap, deploy the app",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Secret"
      },
      {
        id: "O2",
        text: "Deployment"
      },
      {
        id: "O3",
        text: "TriggerAuthentication | Azure Storage connection string 7]"
      },
      {
        id: "O4",
        text: "NO"
      },
      {
        id: "O5",
        text: "Enable auto swap"
      },
      {
        id: "O6",
        text: "deploy the app"
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
    id: 40,
    number: 3,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are creating a CLI script that creates an Azure web app and related services in Azure App Service. The web app uses the following variables:\nYou need to automatically deploy code from GitHub to the newly created web app.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: NO – use web.config applicationinitialization instead",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az webapp create"
      },
      {
        id: "O2",
        text: "az appservice plan create"
      },
      {
        id: "O3",
        text: "az group create --location westeurope --name myResourceGroup"
      },
      {
        id: "O4",
        text: "az webapp"
      },
      {
        id: "O5",
        text: "az group delete"
      },
      {
        id: "O6",
        text: "az webapp deployment"
      },
      {
        id: "O7",
        text: "NO"
      },
      {
        id: "O8",
        text: "use web.config applicationinitialization instead"
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
    id: 41,
    number: 4,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos\nin Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-\nfriendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Trigger the photo processing from Blob storage events.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: NO - Convert Azure Storage account to BlockBlobStorage",
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
    id: 42,
    number: 5,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional\ndeployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Update the web.cong le to include the applicationInitialization conguration element. Specify custom initialization actions to run the\nscripts.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: HTTP Request Header, Base64",
    type: "single",
    options: [
      {
        id: "A",
        text: "No"
      },
      {
        id: "B",
        text: "Yes"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 43,
    number: 6,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional\ndeployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Enable auto swap for the Testing slot. Deploy the app to the Testing slot.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Develop Docker using Azure App Service Web App for Containers",
    type: "single",
    options: [
      {
        id: "A",
        text: "No"
      },
      {
        id: "B",
        text: "Yes"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 44,
    number: 7,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional\ndeployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Disable auto swap. Update the app with a method named statuscheck to run the scripts. Re-enable auto swap and deploy the app to the\nProduction slot.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: az group create",
    type: "single",
    options: [
      {
        id: "A",
        text: "No"
      },
      {
        id: "B",
        text: "Yes"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 45,
    number: 8,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos\nin Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-\nfriendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Convert the Azure Storage account to a BlockBlobStorage storage account.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: az appservice plan create",
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
    id: 46,
    number: 9,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are developing an Azure Web App. You congure TLS mutual authentication for the web app.\nYou need to validate the client certicate in the web app. To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: az webapp create, Fourth Coffee, /bin/bash",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az group create"
      },
      {
        id: "O2",
        text: "az appservice plan create"
      },
      {
        id: "O3",
        text: "az webapp create ©) ®"
      },
      {
        id: "O4",
        text: "az group update"
      },
      {
        id: "O5",
        text: "Docker container image to use."
      },
      {
        id: "O6",
        text: "Azure CLI Commands Answer Area"
      },
      {
        id: "O7",
        text: "Base64"
      },
      {
        id: "O8",
        text: "Unicode"
      },
      {
        id: "O9",
        text: "Client cookie"
      },
      {
        id: "O10",
        text: "HTTP message body"
      },
      {
        id: "O11",
        text: "HTTP request header"
      },
      {
        id: "O12",
        text: "az webapp update © QD)"
      },
      {
        id: "O13",
        text: "Client certificate location v"
      },
      {
        id: "O14",
        text: "URL"
      },
      {
        id: "O15",
        text: "HTML"
      },
      {
        id: "O16",
        text: "az webapp create"
      },
      {
        id: "O17",
        text: "Fourth Coffee"
      },
      {
        id: "O18",
        text: "/bin/bash"
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
      "t1:O16",
      "t2:O17",
      "t3:O18"
    ]
  },
  {
    id: 47,
    number: 10,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are developing a Docker/Go using Azure App Service Web App for Containers. You plan to run the container in an App Service on Linux. You\nidentify a\nDocker container image to use.\nNone of your current resource groups reside in a location that supports Linux. You must minimize the number of resource groups required.\nYou need to create the application and perform an initial deployment.\nWhich three Azure CLI commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands\nto the answer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Az webapp create, ~  config container set, ~ config hostname add",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "az group create"
      },
      {
        id: "O2",
        text: "az appservice plan create"
      },
      {
        id: "O3",
        text: "az webapp create ©) ®"
      },
      {
        id: "O4",
        text: "az group update"
      },
      {
        id: "O5",
        text: "Docker container image to use."
      },
      {
        id: "O6",
        text: "Azure CLI Commands Answer Area"
      },
      {
        id: "O7",
        text: "Base64"
      },
      {
        id: "O8",
        text: "Unicode"
      },
      {
        id: "O9",
        text: "Client cookie"
      },
      {
        id: "O10",
        text: "HTTP message body"
      },
      {
        id: "O11",
        text: "HTTP request header"
      },
      {
        id: "O12",
        text: "az webapp update © QD)"
      },
      {
        id: "O13",
        text: "Client certificate location v"
      },
      {
        id: "O14",
        text: "URL"
      },
      {
        id: "O15",
        text: "HTML"
      },
      {
        id: "O16",
        text: "Az webapp create"
      },
      {
        id: "O17",
        text: "~ config container set"
      },
      {
        id: "O18",
        text: "~ config hostname add"
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
      "t1:O16",
      "t2:O17",
      "t3:O18"
    ]
  },
  {
    id: 48,
    number: 11,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nFourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain.\nFourth Coffee is migrating this application to Azure.\nYou need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app.\nA resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named\nAppServiceLinuxDockerPlan.\nWhich order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of\ncommands to the answer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Serverless Java Application on Azure, Premium plan type (avoid any cold starts and connect to a VNet), Create system assigned",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "az webapp create"
      },
      {
        id: "O2",
        text: "Azure CLI Commands Answer Area"
      },
      {
        id: "O3",
        text: "az webapp config container set"
      },
      {
        id: "O4",
        text: "WestUS"
      },
      {
        id: "O5",
        text: "-plan AppSenaceLinuxDockerPlan"
      },
      {
        id: "O6",
        text: "az webapp config hostname add ©, ®"
      },
      {
        id: "O7",
        text: "dockerHubContainerPath=\"FourthCoffee/publicweb:v1\""
      },
      {
        id: "O8",
        text: "Iqdn=\"http.//www_fourthcoflee.com™>www fourthcoffee.co"
      },
      {
        id: "O9",
        text: "Serverless Java Application on Azure"
      },
      {
        id: "O10",
        text: "Premium plan type (avoid any cold starts"
      },
      {
        id: "O11",
        text: "connect to a VNet)"
      },
      {
        id: "O12",
        text: "Create system assigned"
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
    id: 49,
    number: 12,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are developing a serverless Java application on Azure. You create a new Azure Key Vault to work with secrets from a new Azure Functions\napplication.\nThe application must meet the following requirements:\n✑ Reference the Azure Key Vault without requiring any changes to the Java code.\n✑ Dynamically add and remove instances of the Azure Functions host based on the number of incoming application events.\n✑ Ensure that instances are perpetually warm to avoid any cold starts.\n✑ Connect to a VNet.\n✑ Authentication to the Azure Key Vault instance must be removed if the Azure Function application is deleted.\nYou need to grant the Azure Functions application access to the Azure Key Vault.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create an access policy in Azure Key Vault, D (Shared and Free services tier do not offer scaling flexibility and have limits)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Premium plan type."
      },
      {
        id: "O2",
        text: "Consumption plan type."
      },
      {
        id: "O3",
        text: "Create the Azure Functions app with a"
      },
      {
        id: "O4",
        text: "Create the Azure Functions app with an"
      },
      {
        id: "O5",
        text: "Create an SSL certification in Azure Key"
      },
      {
        id: "O6",
        text: "Create a system-assigned managed identity"
      },
      {
        id: "O7",
        text: "Create an access policy in Azure Key Vault"
      },
      {
        id: "O8",
        text: "Create a user-assigned managed identity for"
      },
      {
        id: "O9",
        text: "App Service plan type."
      },
      {
        id: "O10",
        text: "D (Shared"
      },
      {
        id: "O11",
        text: "Free services tier do not offer scaling flexibility"
      },
      {
        id: "O12",
        text: "have limits)"
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
      "t1:O7",
      "t2:O10",
      "t3:O11",
      "t4:O12"
    ]
  },
  {
    id: 50,
    number: 13,
    topic: "Topic 2",
    prompt: "You develop a website. You plan to host the website in Azure. You expect the website to experience high trac volumes after it is published.\nYou must ensure that the website remains available and responsive while minimizing cost.\nYou need to deploy the website.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Java web app Github repository",
    type: "single",
    options: [
      {
        id: "A",
        text: "Deploy the website to a virtual machine. Congure the virtual machine to automatically scale when the CPU load is high."
      },
      {
        id: "B",
        text: "Deploy the website to an App Service that uses the Shared service tier. Congure the App Service plan to automatically scale when the CPU load is high."
      },
      {
        id: "C",
        text: "Deploy the website to a virtual machine. Congure a Scale Set to increase the virtual machine instance count when the CPU load is high."
      },
      {
        id: "D",
        text: "Deploy the website to an App Service that uses the Standard service tier. Congure the App Service plan to automatically scale when the CPU load is high."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 51,
    number: 14,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nA company is developing a Java web app. The web app code is hosted in a GitHub repository located at https://github.com/Contoso/webapp.\nThe web app must be evaluated before it is moved to production. You must deploy the initial code release to a deployment slot named staging.\nYou need to create the web app and deploy the code.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Group create, Appservice plan create, Webapp create",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "group"
      },
      {
        id: "O2",
        text: "az | WF create location centralus name $resourcegroupname"
      },
      {
        id: "O3",
        text: "az 'W create --name Swebappname —resource-group Sresourcegroupname --sku $3"
      },
      {
        id: "O4",
        text: "az | WW create —-name S$webappname --resource-group $resourcegroupname --slot staging"
      },
      {
        id: "O5",
        text: "az | Ww create -name Swebappname --resource-group $resourcegroupname --plan Swebappname"
      },
      {
        id: "O6",
        text: "webapp"
      },
      {
        id: "O7",
        text: "appservice plan"
      },
      {
        id: "O8",
        text: "az | 'W config —name $webappname —resource-group Sresourcegroupname \\"
      },
      {
        id: "O9",
        text: "Group create"
      },
      {
        id: "O10",
        text: "Appservice plan create"
      },
      {
        id: "O11",
        text: "Webapp create"
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
    id: 52,
    number: 15,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have a web service that is used to pay for food deliveries. The web service uses Azure Cosmos DB as the data store.\nYou plan to add a new feature that allows users to set a tip amount. The new feature requires that a property named tip on the document in\nCosmos DB must be present and contain a numeric value.\nThere are many existing websites and mobile apps that use the web service that will not be updated to set the tip property for some time.\nHow should you complete the trigger?\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Webapp deployment slot create, Webapp deployment source config, Web service pay for food delivery",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Solution: Use the Durable Function async pattern to process the blob data."
      },
      {
        id: "O2",
        text: "tip"
      },
      {
        id: "O3",
        text: "function ensureTip() {"
      },
      {
        id: "O4",
        text: "Webapp deployment slot create"
      },
      {
        id: "O5",
        text: "Webapp deployment source config"
      },
      {
        id: "O6",
        text: "Web service pay for food delivery"
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
    id: 53,
    number: 16,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Use the Durable Function async pattern to process the blob data.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Var r = getContext().getRequest();",
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
    id: 54,
    number: 17,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Pass the HTTP trigger payload into an Azure Service Bus queue to be processed by a queue trigger function and return an immediate\nHTTP success response.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: if(isNaN(i[“tip”]) || i[“tip”] ===null){ // isNaN = is Not a Number",
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
    id: 55,
    number: 18,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Congure the app to use an App Service hosting plan and enable the Always On setting.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: r.setBody(i)",
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
    id: 56,
    number: 19,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos\nin Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-\nfriendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Move photo processing to an Azure Function triggered from the blob upload.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES – Durable function async pattern ensure no time out and process blob data effectively",
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
    id: 57,
    number: 20,
    topic: "Topic 2",
    prompt: "You are developing an application that uses Azure Blob storage.\nThe application must read the transaction logs of all the changes that occur to the blobs and the blob metadata in the storage account for\nauditing purposes. The changes must be in the order in which they occurred, include only create, update, delete, and copy operations and be\nretained for compliance reasons.\nYou need to process the transaction logs asynchronously.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: YES – HTTP trigger payload into azure Service bus, return immediate HTTP success response",
    type: "single",
    options: [
      {
        id: "A",
        text: "Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app."
      },
      {
        id: "B",
        text: "Enable the change feed on the storage account and process all changes for available events."
      },
      {
        id: "C",
        text: "Process all Azure Storage Analytics logs for successful blob events."
      },
      {
        id: "D",
        text: "Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 58,
    number: 21,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and\na series of application les including ContosoApp.dll.\nYou need to create a Dockerle document that meets the following requirements:\n✑ Call setupScripts.ps1 when the container is built.\n✑ Run ContosoApp.dll when the container starts.\nThe Dockerle document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.\nWhich ve commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the\nanswer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: NO – Always On setting won’t control an execution timeout",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "dotnet"
      },
      {
        id: "O2",
        text: "FROM microsoft/aspnetcore:latest"
      },
      {
        id: "O3",
        text: "ContosoApp.dll"
      },
      {
        id: "O4",
        text: "CMD [\"dotnet\", \"ContosoApp.dll\"]"
      },
      {
        id: "O5",
        text: "NO"
      },
      {
        id: "O6",
        text: "Always On setting won’t control an execution timeout"
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
    id: 59,
    number: 22,
    topic: "Topic 2",
    prompt: "You are developing an Azure Function App that processes images that are uploaded to an Azure Blob container.\nImages must be processed as quickly as possible after they are uploaded, and the solution must minimize latency. You create code to process\nimages when the\nFunction App is triggered.\nYou need to congure the Function App.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: YES – wouldn’t work on a consumption plan, time would exceed 1 minute",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use an App Service plan. Congure the Function App to use an Azure Blob Storage input trigger."
      },
      {
        id: "B",
        text: "Use a Consumption plan. Congure the Function App to use an Azure Blob Storage trigger."
      },
      {
        id: "C",
        text: "Use a Consumption plan. Congure the Function App to use a Timer trigger."
      },
      {
        id: "D",
        text: "Use an App Service plan. Congure the Function App to use an Azure Blob Storage trigger."
      },
      {
        id: "E",
        text: "Use a Consumption plan. Congure the Function App to use an Azure Blob Storage input trigger."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 60,
    number: 23,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are conguring a new development environment for a Java application.\nThe environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components.\nThe VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network is\ncongured.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: B – Change feed (provides a chronological log of events) support in Azure Blob Storage, ContosoApp, CMD [“Dotnet”, [ContosoApp.dll”]",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Standard_LRS"
      },
      {
        id: "O2",
        text: "Storage"
      },
      {
        id: "O3",
        text: "outputs"
      },
      {
        id: "O4",
        text: "priority"
      },
      {
        id: "O5",
        text: "resources"
      },
      {
        id: "O6",
        text: "copylndex"
      },
      {
        id: "O7",
        text: "dependsOn"
      },
      {
        id: "O8",
        text: "apiVersion"
      },
      {
        id: "O9",
        text: "properties"
      },
      {
        id: "O10",
        text: "storagesetup"
      },
      {
        id: "O11",
        text: "\"kind\": \"Storage\","
      },
      {
        id: "O12",
        text: "Microsoft.Storage/storageAccounts"
      },
      {
        id: "O13",
        text: "\"type\": \"Microsoft.Storage/storageAccounts\","
      },
      {
        id: "O14",
        text: "in"
      },
      {
        id: "O15",
        text: "bs"
      },
      {
        id: "O16",
        text: "Is"
      },
      {
        id: "O17",
        text: "type"
      },
      {
        id: "O18",
        text: "name"
      },
      {
        id: "O19",
        text: "Change feed (provides a chronological log of events) support in Azure Blob Storage"
      },
      {
        id: "O20",
        text: "ContosoApp"
      },
      {
        id: "O21",
        text: "CMD [\"Dotnet\""
      },
      {
        id: "O22",
        text: "[ContosoApp.dll\"]"
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
      "t1:O19",
      "t2:O20",
      "t3:O21",
      "t4:O22"
    ]
  },
  {
    id: 61,
    number: 24,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are developing an Azure Function App by using Visual Studio. The app will process orders input by an Azure Web App. The web app places the\norder information into Azure Queue Storage.\nYou need to review the Azure Function App code shown below.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: FROM Microsoft/aspnetcore:latest, WORKDIR /apps/ContosoAPP, COPY ./.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Consistent."
      },
      {
        id: "O2",
        text: "Table Storage."
      },
      {
        id: "O3",
        text: "retrieved from the queue and the ProcessOrders function will run multiple"
      },
      {
        id: "O4",
        text: "FROM Microsoft/aspnetcore:latest"
      },
      {
        id: "O5",
        text: "WORKDIR /apps/ContosoAPP"
      },
      {
        id: "O6",
        text: "COPY ./."
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
    id: 62,
    number: 25,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are developing a solution for a hospital to support the following use cases:\n✑ The most recent patient status details must be retrieved even if multiple users in different locations have updated the patient record.\n✑ Patient health monitoring data retrieved must be the current version or the prior version.\n✑ After a patient is discharged and all charges have been assessed, the patient billing record contains the nal charges.\nYou provision a Cosmos DB NoSQL database and set the default consistency level for the database account to Strong. You set the value for\nIndexing Mode to\nConsistent.\nYou need to minimize latency and any impact to the availability of the solution. You must override the default consistency level at the query level\nto meet the required consistency guarantees for the scenarios.\nWhich consistency levels should you implement? To answer, drag the appropriate consistency levels to the correct requirements. Each\nconsistency level may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: RUN powershell ./setupScript.ps1, D – Use an App Service plan Configure the Function App to use an Azure Blob trigger, Consumption plan can cause 10-min delay",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Consistent."
      },
      {
        id: "O2",
        text: "Table Storage."
      },
      {
        id: "O3",
        text: "retrieved from the queue and the ProcessOrders function will run multiple"
      },
      {
        id: "O4",
        text: "RUN powershell ./setupScript.ps1"
      },
      {
        id: "O5",
        text: "Use an App Service plan Configure the Function App to use an Azure Blob trigger"
      },
      {
        id: "O6",
        text: "Consumption plan can cause 10-min delay"
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
    id: 63,
    number: 26,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are conguring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your\nAzure subscription.\nThe development environment requires several software development kits (SDKs) and third-party components to support application development\nacross the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be\nsaved to allow provisioning of a new team member development environment.\nYou need to save the customized VM for future provisioning.\nWhich tools or services should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Virtual Machine Scale Set (VMSS) several storage account, networking component, copyIndex (), zero-based(starts counting from 0)namensgebung",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Blob Storage"
      },
      {
        id: "O2",
        text: "Azure File Storage"
      },
      {
        id: "O3",
        text: "Azure Table Storage"
      },
      {
        id: "O4",
        text: "Azure Data Lake Storage"
      },
      {
        id: "O5",
        text: "Azure Backup"
      },
      {
        id: "O6",
        text: "Azure Migrate"
      },
      {
        id: "O7",
        text: "Azure PowerShell"
      },
      {
        id: "O8",
        text: "Visual Studio command prompt"
      },
      {
        id: "O9",
        text: "You plan to use the Azure Web App continuous deployment feature."
      },
      {
        id: "O10",
        text: "Virtual Machine Scale Set (VMSS) several storage account"
      },
      {
        id: "O11",
        text: "networking component"
      },
      {
        id: "O12",
        text: "copyIndex ()"
      },
      {
        id: "O13",
        text: "zero-based(starts counting from 0)namensgebung"
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
    id: 64,
    number: 27,
    topic: "Topic 2",
    prompt: "You are preparing to deploy a website to an Azure Web App from a GitHub repository. The website includes static content generated by a script.\nYou plan to use the Azure Web App continuous deployment feature.\nYou need to run the static generation script before the website starts serving trac.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: copy",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json le."
      },
      {
        id: "B",
        text: "Add a PreBuild target in the websites csproj project le that runs the static content generation script."
      },
      {
        id: "C",
        text: "Create a le named run.cmd in the folder /run that calls a script which generates the static content and deploys the website."
      },
      {
        id: "D",
        text: "Create a le named .deployment in the root of the repository that calls a script which generates the static content and deploys the website."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 65,
    number: 28,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are developing an application to use Azure Blob storage. You have congured Azure Blob storage to include change feeds.\nA copy of your storage account must be created in another region. Data must be copied from the current storage account to the new storage\naccount directly between the storage servers.\nYou need to create a copy of the storage account in another region and copy the data.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: copy loop, set number of resources to deploy and avoid redundancy, dependsOn, When deploying resources, you may need to make sure some resources exist before other resources. For example, you need a logical SQL server before deploying a database",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a new template deployment."
      },
      {
        id: "O2",
        text: "Custom Script Extension"
      },
      {
        id: "O3",
        text: "the new storage account."
      },
      {
        id: "O4",
        text: "r ) Supporting services script"
      },
      {
        id: "O5",
        text: "storage account name and region."
      },
      {
        id: "O6",
        text: "Deploy the template to create a new"
      },
      {
        id: "O7",
        text: "storage account in the target region."
      },
      {
        id: "O8",
        text: "copy loop"
      },
      {
        id: "O9",
        text: "set number of resources to deploy"
      },
      {
        id: "O10",
        text: "avoid redundancy"
      },
      {
        id: "O11",
        text: "dependsOn"
      },
      {
        id: "O12",
        text: "When deploying resources"
      },
      {
        id: "O13",
        text: "you may need to make sure some resources exist before other resources. For example"
      },
      {
        id: "O14",
        text: "you need a logical SQL server before deploying a database"
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
      "t1:O8",
      "t2:O9",
      "t3:O10",
      "t4:O11",
      "t5:O12",
      "t6:O13",
      "t7:O14"
    ]
  },
  {
    id: 66,
    number: 29,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are preparing to deploy an Azure virtual machine (VM)-based application.\nThe VMs that run the application have the following requirements:\n✑ When a VM is provisioned the rewall must be automatically congured before it can access Azure resources.\n✑ Supporting services must be installed by using an Azure PowerShell script that is stored in Azure Storage.\nYou need to ensure that the requirements are met.\nWhich features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Develop Azure Function App(process orders input by an Azure Web App)Web App places order information into Azure Queue Storage, NO – ExpirationTime and InsertionTime were added to queue",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a new template deployment."
      },
      {
        id: "O2",
        text: "Custom Script Extension"
      },
      {
        id: "O3",
        text: "the new storage account."
      },
      {
        id: "O4",
        text: "r ) Supporting services script"
      },
      {
        id: "O5",
        text: "storage account name and region."
      },
      {
        id: "O6",
        text: "Deploy the template to create a new"
      },
      {
        id: "O7",
        text: "storage account in the target region."
      },
      {
        id: "O8",
        text: "Develop Azure Function App(process orders input by an Azure Web App)Web App places order information into Azure Queue Storage"
      },
      {
        id: "O9",
        text: "NO"
      },
      {
        id: "O10",
        text: "ExpirationTime"
      },
      {
        id: "O11",
        text: "InsertionTime were added to queue"
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
    id: 67,
    number: 30,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nA company is developing a Node.js web app. The web app code is hosted in a GitHub repository located at\nThe web app must be reviewed before it is moved to production. You must deploy the initial code release to a deployment slot named review.\nYou need to create the web app and deploy the code.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: YES – maxDequeueCount(number of times to process message before putting it to poison queue) default 5 times",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "master"
      },
      {
        id: "O2",
        text: "WestUS2"
      },
      {
        id: "O3",
        text: "ContosoRG"
      },
      {
        id: "O4",
        text: "ContosoVM"
      },
      {
        id: "O5",
        text: "New-AzWebApp"
      },
      {
        id: "O6",
        text: "TailSpinToysWeb"
      },
      {
        id: "O7",
        text: "New-AzWebAppSiot"
      },
      {
        id: "O8",
        text: "New-AzWebAppSlot"
      },
      {
        id: "O9",
        text: "New-AzResourceGroup"
      },
      {
        id: "O10",
        text: "New-AzAppServicePlan"
      },
      {
        id: "O11",
        text: "Set-AzResource -PropertyObject $PropertiesObject -ResourceGroupName myResourceGroup -ResourceType"
      },
      {
        id: "O12",
        text: "YES"
      },
      {
        id: "O13",
        text: "maxDequeueCount(number of times to process message before putting it to poison queue) default 5 times"
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
      "t1:O12",
      "t2:O13"
    ]
  },
  {
    id: 68,
    number: 31,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are developing an application that needs access to an Azure virtual machine (VM).\nThe access lifecycle for the application must be associated with the VM service instance.\nYou need to enable managed identity for the VM.\nHow should you complete the PowerShell segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: YES – maximum number of messages processed concurrently per VM is 24",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "master"
      },
      {
        id: "O2",
        text: "WestUS2"
      },
      {
        id: "O3",
        text: "ContosoRG"
      },
      {
        id: "O4",
        text: "ContosoVM"
      },
      {
        id: "O5",
        text: "New-AzWebApp"
      },
      {
        id: "O6",
        text: "TailSpinToysWeb"
      },
      {
        id: "O7",
        text: "New-AzWebAppSiot"
      },
      {
        id: "O8",
        text: "New-AzWebAppSlot"
      },
      {
        id: "O9",
        text: "New-AzResourceGroup"
      },
      {
        id: "O10",
        text: "New-AzAppServicePlan"
      },
      {
        id: "O11",
        text: "Set-AzResource -PropertyObject $PropertiesObject -ResourceGroupName myResourceGroup -ResourceType"
      },
      {
        id: "O12",
        text: "YES"
      },
      {
        id: "O13",
        text: "maximum number of messages processed concurrently per VM is 24"
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
      "t1:O12",
      "t2:O13"
    ]
  },
  {
    id: 69,
    number: 32,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos\nin Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-\nfriendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Create an Azure Function app that uses the Consumption hosting model and that is triggered from the blob upload.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES – ProcessOrder function output order to Orders table",
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
    id: 70,
    number: 33,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional\ndeployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Update the app with a method named statuscheck to run the scripts. Update the app settings for the app. Set the\nWEBSITE_SWAP_WARMUP_PING_PATH and WEBSITE_SWAP_WARMUP_PING_STATUSES with a path to the new method and appropriate response\ncodes.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: [Table(\"Orders\")]ICollector<Order> table bindings",
    type: "single",
    options: [
      {
        id: "A",
        text: "No"
      },
      {
        id: "B",
        text: "Yes"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 71,
    number: 34,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou create the following PowerShell script:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: tableBindings.Add(JsonConvert.DeserializeObject<Object>(myQueueItem.AsString));, develop solution for hospital (Consistency level), strong",
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
    id: 72,
    number: 35,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are developing an Azure Function app.\nThe app must meet the following requirements:\n✑ Enable developers to write the functions by using the Rust language.\n✑ Declaratively connect to an Azure Blob Storage account.\nYou need to implement the app.\nWhich Azure Function app features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: bounded staleness, consistent prefix, Strong Consistency: Guarantees that all reads return the most recent write. It's like reading from a single, up-to-date source.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Trigger"
      },
      {
        id: "O2",
        text: "Hosting plan"
      },
      {
        id: "O3",
        text: "Declaratively connect to an Azure Blob Storage Fah"
      },
      {
        id: "O4",
        text: "c= Declaratively connect to an Azure Blob Storage account."
      },
      {
        id: "O5",
        text: "bounded staleness"
      },
      {
        id: "O6",
        text: "consistent prefix"
      },
      {
        id: "O7",
        text: "Strong Consistency: Guarantees that all reads return the most recent write. It's like reading from a single"
      },
      {
        id: "O8",
        text: "up-to-date source."
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
    id: 73,
    number: 36,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are developing an ASP.NET Core web application. You plan to deploy the application to Azure Web App for Containers.\nThe application needs to store runtime diagnostic data that must be persisted across application restarts. You have the following code:\nYou need to congure the application settings so that diagnostic data is stored as required.\nHow should you congure the web app's settings? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Bounded Staleness: Allows a slight delay between writes and reads, but with a defined maximum time lag. Data may not be immediately up-to-date but won't be too stale., Consistent Prefix: Ensures that reads never see writes that occurred after they started. It provides a partial order of operations., Eventual Consistency: No specific guarantees about when data will be consistent. Eventually, all replicas will catch up, but there's no fixed time frame.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "DOTNET_HOSTING_OPTIMIZATION_CACHE /home"
      },
      {
        id: "O2",
        text: "Application"
      },
      {
        id: "O3",
        text: "Bounded Staleness: Allows a slight delay between writes"
      },
      {
        id: "O4",
        text: "reads"
      },
      {
        id: "O5",
        text: "but with a defined maximum time lag. Data may not be immediately up-to-date but won't be too stale."
      },
      {
        id: "O6",
        text: "Consistent Prefix: Ensures that reads never see writes that occurred after they started. It provides a partial order of operations."
      },
      {
        id: "O7",
        text: "Eventual Consistency: No specific guarantees about when data will be consistent. Eventually"
      },
      {
        id: "O8",
        text: "all replicas will catch up"
      },
      {
        id: "O9",
        text: "but there's no fixed time frame."
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
    id: 74,
    number: 37,
    topic: "Topic 2",
    prompt: "You are developing a web app that is protected by Azure Web Application Firewall (WAF). All trac to the web app is routed through an Azure\nApplication\nGateway instance that is used by multiple web apps. The web app address is contoso.azurewebsites.net.\nAll trac must be secured with SSL. The Azure Application Gateway instance is used by multiple web apps.\nYou need to congure the Azure Application Gateway for the web app.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Configuring a development environment",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "In the Azure Application Gateway's HTTP setting, enable the Use for App service setting."
      },
      {
        id: "B",
        text: "Convert the web app to run in an Azure App service environment (ASE)."
      },
      {
        id: "C",
        text: "Add an authentication certicate for contoso.azurewebsites.net to the Azure Application Gateway."
      },
      {
        id: "D",
        text: "In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso22.azurewebsites.net."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 75,
    number: 38,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos\nin Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-\nfriendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Use the Azure Blob Storage change feed to trigger photo processing.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Azure Powershell (sysprep to generalize virtual machine, powershell to create image)",
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
    id: 76,
    number: 39,
    topic: "Topic 2",
    prompt: "You are developing a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and stores les in\nan Azure\nStorage account. The web application makes HTTP requests to external services as part of normal operations.\nThe web application is instrumented with Application Insights. The external services are OpenTelemetry compliant.\nYou need to ensure that the customer ID of the signed in user is associated with all operations throughout the overall system.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Azure Blob Storage (store images )",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add the customer ID for the signed in user to the CorrelationContext in the web application"
      },
      {
        id: "B",
        text: "On the current SpanContext, set the TraceId to the customer ID for the signed in user"
      },
      {
        id: "C",
        text: "Set the header Ocp-Apim-Trace to the customer ID for the signed in user"
      },
      {
        id: "D",
        text: "Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 77,
    number: 40,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are developing an Azure Function App. You develop code by using a language that is not supported by the Azure Function App host. The code\nlanguage supports HTTP primitives.\nYou must deploy the code to a production Azure Function App environment.\nYou need to congure the app for deployment.\nWhich conguration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Azure WebApp from GitHup repository, B – Add a Prebuild target (csproject file), D – Create a file named .deployment",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Docker Container"
      },
      {
        id: "O2",
        text: "Python"
      },
      {
        id: "O3",
        text: "custom"
      },
      {
        id: "O4",
        text: "Node.js"
      },
      {
        id: "O5",
        text: "Code"
      },
      {
        id: "O6",
        text: "Azure WebApp from GitHup repository"
      },
      {
        id: "O7",
        text: "Add a Prebuild target (csproject file)"
      },
      {
        id: "O8",
        text: "Create a file named .deployment"
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
    id: 78,
    number: 41,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou provision virtual machines (VMs) as development environments.\nOne VM does not start. The VM is stuck in a Windows update process. You attach the OS disk for the affected VM to a recovery VM.\nYou need to correct the issue.\nIn which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange\nthem in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Develop app using blob storage, Export resource manager template, Create new template deployment",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Run the following command at an elevated command prompt:"
      },
      {
        id: "O2",
        text: "Run the following command at an elevated command prompt: ®"
      },
      {
        id: "O3",
        text: "Develop app using blob storage"
      },
      {
        id: "O4",
        text: "Export resource manager template"
      },
      {
        id: "O5",
        text: "Create new template deployment"
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
    id: 79,
    number: 42,
    topic: "Topic 2",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Update the functionTimeout property of the host.json project le to 10 minutes.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Modify template, change storage account name and region",
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
    id: 80,
    number: 43,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are developing an Azure Durable Function based application that processes a list of input values. The application is monitored using a\nconsole application that retrieves JSON data from an Azure Function diagnostic endpoint.\nDuring processing a single instance of invalid input does not cause the function to fail. Invalid input must be available to the monitoring\napplication.\nYou need to implement the Azure Durable Function and the monitoring console application.\nHow should you complete the code segments? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Deploy template to create new storage account in target region, Use AZcopy to copy data to new storage account, Deploy azure vm",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "using (var client = new HttpClient())"
      },
      {
        id: "O2",
        text: "var response = await client.GetAsync(™. . .\");"
      },
      {
        id: "O3",
        text: "dynamic result = JsonConvert.DeserializeObject(json);"
      },
      {
        id: "O4",
        text: "var json = await response.Content.ReadAsStringAsync();"
      },
      {
        id: "O5",
        text: "Deploy template to create new storage account in target region"
      },
      {
        id: "O6",
        text: "Use AZcopy to copy data to new storage account"
      },
      {
        id: "O7",
        text: "Deploy azure vm"
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
    id: 81,
    number: 44,
    topic: "Topic 2",
    prompt: "You are developing an Azure Durable Function to manage an online ordering process.\nThe process must call an external API to gather product discount information.\nYou need to implement the Azure Durable Function.\nWhich Azure Durable Function types should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Run Command",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Orchestrator"
      },
      {
        id: "B",
        text: "Entity"
      },
      {
        id: "C",
        text: "Client"
      },
      {
        id: "D",
        text: "Activity"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 82,
    number: 45,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou are authoring a set of nested Azure Resource Manager templates to deploy multiple Azure resources.\nThe templates must be tested before deployment and must follow recommended practices.\nYou need to validate and test the templates before deployment.\nWhich tools should you use? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or\nnot at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Custom Script Extension, Develop node.js web app, New-AzResourceGroup",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "client"
      },
      {
        id: "O2",
        text: "entity"
      },
      {
        id: "O3",
        text: "activity"
      },
      {
        id: "O4",
        text: "environment."
      },
      {
        id: "O5",
        text: "orchestrator"
      },
      {
        id: "O6",
        text: "Azure Deployment Manager |"
      },
      {
        id: "O7",
        text: "Azure Resource Manager test toolkit EE —"
      },
      {
        id: "O8",
        text: "Custom Script Extension"
      },
      {
        id: "O9",
        text: "Develop node.js web app"
      },
      {
        id: "O10",
        text: "New-AzResourceGroup"
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
    id: 83,
    number: 46,
    topic: "Topic 2",
    prompt: "You develop Azure Durable Functions to manage vehicle loans.\nThe loan process includes multiple actions that must be run in a specied order. One of the actions includes a customer credit check process,\nwhich may require multiple days to process.\nYou need to implement Azure Durable Functions for the loan process.\nWhich Azure Durable Functions type should you use?",
    keySource: "source",
    explanation: "Source answer: New-AzAppServicePlan",
    type: "single",
    options: [
      {
        id: "A",
        text: "orchestrator"
      },
      {
        id: "B",
        text: "client"
      },
      {
        id: "C",
        text: "entity"
      },
      {
        id: "D",
        text: "activity"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 84,
    number: 47,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou are developing an Azure Function app.\nAll functions in the app meet the following requirements:\n• Run until either a successful run or until 10 run attempts occur.\n• Ensure that there are at least 20 seconds between attempts for up to 15 minutes.\nYou need to congure the host.json le.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: New-AzWebApp, New-AzWebAppSlot, Develop app Azure VM",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "strategy"
      },
      {
        id: "O2",
        text: "singleton"
      },
      {
        id: "O3",
        text: "fixedDelay"
      },
      {
        id: "O4",
        text: "healthMonitor"
      },
      {
        id: "O5",
        text: "maxRetryCount"
      },
      {
        id: "O6",
        text: "counterThreshold"
      },
      {
        id: "O7",
        text: "exponentialBackoff"
      },
      {
        id: "O8",
        text: "healthCheckInterval"
      },
      {
        id: "O9",
        text: "healthCheckThreshold"
      },
      {
        id: "O10",
        text: "vv"
      },
      {
        id: "O11",
        text: "retry"
      },
      {
        id: "O12",
        text: "New-AzWebApp"
      },
      {
        id: "O13",
        text: "New-AzWebAppSlot"
      },
      {
        id: "O14",
        text: "Develop app Azure VM"
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
    id: 85,
    number: 48,
    topic: "Topic 2",
    prompt: "You develop Azure Web Apps for a commercial diving company. Regulations require that all divers ll out a health questionnaire every 15 days\nafter each diving job starts.\nYou need to congure the Azure Web Apps so that the instance count scales up when divers are lling out the questionnaire and scales down after\nthey are complete.\nYou need to congure autoscaling.\nWhat are two possible auto scaling congurations to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: IdentityId (should be IdentityType)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Recurrence prole"
      },
      {
        id: "B",
        text: "CPU usage-based autoscaling"
      },
      {
        id: "C",
        text: "Fixed date prole"
      },
      {
        id: "D",
        text: "Predictive autoscaling"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 86,
    number: 49,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou are developing an online game that allows players to vote for their favorite photo that illustrates a word. The game is built by using Azure\nFunctions and uses durable entities to track the vote count.\nThe voting window is 30 seconds. You must minimize latency.\nYou need to implement the Azure Function for voting.\nHow should you complete the code? To answer, select the appropriate options in the answer area.",
    keySource: "source",
    explanation: "Source answer: SystemAssigned, NO – Consumption plan can take up to several minutes",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "CallEntityAsync"
      },
      {
        id: "O2",
        text: "SignalEntityAsync"
      },
      {
        id: "O3",
        text: "pic"
      },
      {
        id: "O4",
        text: "POST"
      },
      {
        id: "O5",
        text: "vote"
      },
      {
        id: "O6",
        text: "vVote"
      },
      {
        id: "O7",
        text: "SystemAssigned"
      },
      {
        id: "O8",
        text: "NO"
      },
      {
        id: "O9",
        text: "Consumption plan can take up to several minutes"
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
    id: 87,
    number: 50,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou have an App Service plan named asp1 based on the Free pricing tier.\nYou plan to use asp1 to implement an Azure Function app with a queue trigger. Your solution must minimize cost.\nYou need to identify the conguration options that will meet the requirements.\nWhich value should you congure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: YES, WEBSITE_SWAP_WARMUP_PING_PATH The path to ping to warm up your site., WEBSITE_SWAP_WARMUP_PING_STATUSES: Valid HTTP response codes for the warm-up operation",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Standard"
      },
      {
        id: "O2",
        text: "Shared"
      },
      {
        id: "O3",
        text: "Azure App Service feature [|"
      },
      {
        id: "O4",
        text: "Azure App Service pricing tier |"
      },
      {
        id: "O5",
        text: "Basic"
      },
      {
        id: "O6",
        text: "YES"
      },
      {
        id: "O7",
        text: "WEBSITE_SWAP_WARMUP_PING_PATH The path to ping to warm up your site."
      },
      {
        id: "O8",
        text: "WEBSITE_SWAP_WARMUP_PING_STATUSES: Valid HTTP response codes for the warm-up operation"
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
    id: 88,
    number: 51,
    topic: "Topic 2",
    prompt: "DRAG DROP\n-\nYou are developing several microservices to run on Azure Container Apps.\nThe microservices must allow HTTPS access by using a custom domain.\nYou need to congure the custom domain in Azure Container Apps.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
    keySource: "source",
    explanation: "Source answer: Powershell Skript, NO – No log alert when cpu is above 60 for 5 min",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable ingress."
      },
      {
        id: "O2",
        text: "Enable single revision mode."
      },
      {
        id: "O3",
        text: "Enable multiple revision mode."
      },
      {
        id: "O4",
        text: "Powershell Skript"
      },
      {
        id: "O5",
        text: "NO"
      },
      {
        id: "O6",
        text: "No log alert when cpu is above 60 for 5 min"
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
    id: 89,
    number: 52,
    topic: "Topic 2",
    prompt: "You are developing several microservices to run on Azure Container Apps. External HTTP ingress trac has been enabled for the microservices.\nThe microservices must be deployed to the same virtual network and write logs to the same Log Analytics workspace.\nYou need to deploy the microservices.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: YES – log alert that sends e-mail when number of vm heartbeats? Is less than 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable single revision mode."
      },
      {
        id: "B",
        text: "Use a separate environment for each container."
      },
      {
        id: "C",
        text: "Use a private container registry image and single image for all containers."
      },
      {
        id: "D",
        text: "Use a single environment for all containers."
      },
      {
        id: "E",
        text: "Enable multiple revision mode."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 90,
    number: 53,
    topic: "Topic 2",
    prompt: "HOTSPOT\n-\nYou are developing several microservices to run on Azure Container Apps. External HTTP ingress trac has been enabled for the microservices.\nA deployed microservice must be updated to allow users to test new features. You have the following requirements:\n• Enable and maintain a single URL for the updated microservice to provide to test users.\n• Update the microservice that corresponds to the current microservice version.\nYou need to congure Azure Container Apps.\nWhich features should you congure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: NO – lo g alert is scheduled every 2 hours, Azure function app, Custom handler",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "NO"
      },
      {
        id: "O2",
        text: "lo g alert is scheduled every 2 hours"
      },
      {
        id: "O3",
        text: "Azure function app"
      },
      {
        id: "O4",
        text: "Custom handler"
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
      "t2:O2",
      "t3:O3",
      "t4:O4"
    ]
  },
  {
    id: 91,
    number: 1,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing a solution that uses the Azure Storage Client library for .NET. You have the following code: (Line numbers are included for\nreference only.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Trigger, Diagnostic data that must be persisted across application restarts, WEBSITES_ENABLE_APP_SERVICE_STORAGE",
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
    id: 92,
    number: 2,
    topic: "Topic 3",
    prompt: "You are building a website that uses Azure Blob storage for data storage. You congure Azure Blob storage lifecycle to move all blobs to the\narchive tier after 30 days.\nCustomers have requested a service-level agreement (SLA) for viewing data older than 30 days.\nYou need to document the minimum SLA for data recovery.\nWhich SLA should you use?",
    keySource: "source",
    explanation: "Source answer: /home",
    type: "single",
    options: [
      {
        id: "A",
        text: "at least two days"
      },
      {
        id: "B",
        text: "between one and 15 hours"
      },
      {
        id: "C",
        text: "at least one day"
      },
      {
        id: "D",
        text: "between zero and 60 minutes"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 93,
    number: 3,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing a ticket reservation system for an airline.\nThe storage solution for the application must meet the following requirements:\n✑ Ensure at least 99.99% availability and provide low latency.\n✑ Accept reservations even when localized network outages or other unforeseen failures occur.\n✑ Process reservations in the exact sequence as reservations are submitted to minimize overbooking or selling the same seat to multiple\ntravelers.\n✑ Allow simultaneous and out-of-order reservations with a maximum ve-second tolerance window.\nYou provision a resource group named airlineResourceGroup in the Azure South-Central US region.\nYou need to provision a SQL API Cosmos DB account to support the app.\nHow should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Windows Firewall(WAF), Gateway’s HTTP setting, enable use for App sercive settings, Overrid backend path option to: contoso22.azurewebsites.net",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az cosmosdb create \\"
      },
      {
        id: "O2",
        text: "Strong"
      },
      {
        id: "O3",
        text: "Eventual"
      },
      {
        id: "O4",
        text: "ConsistentPrefix"
      },
      {
        id: "O5",
        text: "BoundedStaleness"
      },
      {
        id: "O6",
        text: "Windows Firewall(WAF)"
      },
      {
        id: "O7",
        text: "Gateway’s HTTP setting"
      },
      {
        id: "O8",
        text: "enable use for App sercive settings"
      },
      {
        id: "O9",
        text: "Overrid backend path option to: contoso22.azurewebsites.net"
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
    id: 94,
    number: 4,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are preparing to deploy a Python website to an Azure Web App using a container. The solution will use multiple containers in the same\ncontainer group. The\nDockerle that builds the container is as follows:\nYou build a container by using the following command. The Azure Container Registry instance named images is a private registry.\nThe user name and password for the registry is admin.\nThe Web App must always run the same version of the website regardless of future builds.\nYou need to create an Azure Web App to run the website.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: SAAS software develop. Use Azure Blob Storage change feed to trigger photo processing, NO – Change feed takes several minutes. We want photo processing in under 1 min, Developing a web app using azure web app. OpenTelemetry compliant",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az webapp create --plan websitePlan v"
      },
      {
        id: "O2",
        text: "az appservice plan create --name websitePlan v"
      },
      {
        id: "O3",
        text: "az webapp config [ v"
      },
      {
        id: "O4",
        text: "az configure --defaults web=website"
      },
      {
        id: "O5",
        text: "az configure --defaults group=website"
      },
      {
        id: "O6",
        text: "set —python-version 2.7 -generic-configurations user=admin password=admin"
      },
      {
        id: "O7",
        text: "set —python-version 3.6 --generic-configurations user=admin password=admin"
      },
      {
        id: "O8",
        text: "SAAS software develop. Use Azure Blob Storage change feed to trigger photo processing"
      },
      {
        id: "O9",
        text: "NO"
      },
      {
        id: "O10",
        text: "Change feed takes several minutes. We want photo processing in under 1 min"
      },
      {
        id: "O11",
        text: "Developing a web app using azure web app. OpenTelemetry compliant"
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
    id: 95,
    number: 5,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.\nA rule already exists to scale up the App Service when the average queue length of unprocessed and valid queue messages is greater than 1000.\nYou need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.\nHow should you congure the Scale rule? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Add the customer ID , use the CorrelationContext, Azure function App, develop code, language not supported by azure, Code",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Maximum"
      },
      {
        id: "O2",
        text: "Average"
      },
      {
        id: "O3",
        text: "Resource"
      },
      {
        id: "O4",
        text: "Criteria"
      },
      {
        id: "O5",
        text: "Resourcetype"
      },
      {
        id: "O6",
        text: "Storage queue"
      },
      {
        id: "O7",
        text: "ad"
      },
      {
        id: "O8",
        text: "Total"
      },
      {
        id: "O9",
        text: "Add the customer ID"
      },
      {
        id: "O10",
        text: "use the CorrelationContext"
      },
      {
        id: "O11",
        text: "Azure function App"
      },
      {
        id: "O12",
        text: "develop code"
      },
      {
        id: "O13",
        text: "language not supported by azure"
      },
      {
        id: "O14",
        text: "Code"
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
      "t1:O9",
      "t2:O10",
      "t3:O11",
      "t4:O12",
      "t5:O13",
      "t6:O14"
    ]
  },
  {
    id: 96,
    number: 6,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou have an application that uses Azure Blob storage.\nYou need to update the metadata of the blobs.\nWhich three methods should you use to develop the solution? To answer, move the appropriate methods from the list of methods to the answer\narea and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Custom Handler, Custom, (not important) VM in development environments",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "SetMetadataAsync"
      },
      {
        id: "O2",
        text: "SetPropertiesAsync"
      },
      {
        id: "O3",
        text: "QueueClient"
      },
      {
        id: "O4",
        text: "TopicClient"
      },
      {
        id: "O5",
        text: "Metadata.Add"
      },
      {
        id: "O6",
        text: "UploadFileStream"
      },
      {
        id: "O7",
        text: "CloudQueueClient"
      },
      {
        id: "O8",
        text: "SubscriptionClient"
      },
      {
        id: "O9",
        text: "FetchAttributesAsync"
      },
      {
        id: "O10",
        text: "Custom Handler"
      },
      {
        id: "O11",
        text: "Custom"
      },
      {
        id: "O12",
        text: "(not important) VM in development environments"
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
    id: 97,
    number: 7,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device\ncan produce\n2 megabytes (MB) of data every 24 hours. Each store location has one to ve devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identier. Additional stores are expected\nto open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Grid. Congure the machine identier as the partition key and enable capture.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Open C:\\\\temp\\Patch",
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
    id: 98,
    number: 8,
    topic: "Topic 3",
    prompt: "You develop Azure solutions.\nA .NET application needs to receive a message each time an Azure virtual machine nishes processing data. The messages must NOT persist\nafter being processed by the receiving application.\nYou need to implement the .NET object that will receive the messages.\nWhich object should you use?",
    keySource: "source",
    explanation: "Source answer: Dism /image:\\ /get-packages > c:/temp/patch.txt",
    type: "single",
    options: [
      {
        id: "A",
        text: "QueueClient"
      },
      {
        id: "B",
        text: "SubscriptionClient"
      },
      {
        id: "C",
        text: "TopicClient"
      },
      {
        id: "D",
        text: "CloudQueueClient"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 99,
    number: 9,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are maintaining an existing application that uses an Azure Blob GPv1 Premium storage account. Data older than three months is rarely used.\nData newer than three months must be available immediately. Data older than a year must be saved but does not need to be available\nimmediately.\nYou need to congure the account to support a lifecycle management rule that moves blob data to archive storage for data not modied in the last\nyear.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: HTTP triggered Azure Function. Solution: Update timeout function to 10 min?, NO – 230 sec(~4 min) is maximum for HTTP triggered function",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "AzCopy"
      },
      {
        id: "O2",
        text: "Azure Storage Explorer"
      },
      {
        id: "O3",
        text: "Create a new GPv2 Standard account"
      },
      {
        id: "O4",
        text: "Azure portal"
      },
      {
        id: "O5",
        text: ".NET Storage Client Library"
      },
      {
        id: "O6",
        text: "Change the storage account access"
      },
      {
        id: "O7",
        text: "Upgrade the storage account to GPv2"
      },
      {
        id: "O8",
        text: "data from the original storage account"
      },
      {
        id: "O9",
        text: "GPv2 storage account and then delete the"
      },
      {
        id: "O10",
        text: "HTTP triggered Azure Function. Solution: Update timeout function to 10 min?"
      },
      {
        id: "O11",
        text: "NO"
      },
      {
        id: "O12",
        text: "230 sec(~4 min) is maximum for HTTP triggered function"
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
    id: 100,
    number: 10,
    topic: "Topic 3",
    prompt: "You develop Azure solutions.\nYou must connect to a No-SQL globally-distributed database by using the .NET API.\nYou need to create an object to congure and execute requests in the database.\nWhich code segment should you use?",
    keySource: "source",
    explanation: "Source answer: Azure durable function",
    type: "single",
    options: [
      {
        id: "A",
        text: "new Container(EndpointUri, PrimaryKey);"
      },
      {
        id: "B",
        text: "new Database(EndpointUri, PrimaryKey);"
      },
      {
        id: "C",
        text: "new CosmosClient(EndpointUri, PrimaryKey);"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 101,
    number: 11,
    topic: "Topic 3",
    prompt: "You have an existing Azure storage account that stores large volumes of data across multiple containers.\nYou need to copy all data from the existing storage account to a new storage account. The copy process must meet the following requirements:\n✑ Automate data movement.\n✑ Minimize user input required to perform the operation.\n✑ Ensure that the data movement process is recoverable.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: SetOutput()",
    type: "single",
    options: [
      {
        id: "A",
        text: "AzCopy"
      },
      {
        id: "B",
        text: "Azure Storage Explorer"
      },
      {
        id: "C",
        text: "Azure portal"
      },
      {
        id: "D",
        text: ".NET Storage Client Library"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 102,
    number: 12,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are developing a web service that will run on Azure virtual machines that use Azure Storage. You congure all virtual machines to use\nmanaged identities.\nYou have the following requirements:\n✑ Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.\n✑ Must use only Azure Instance Metadata Service endpoints.\nYou need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct\nlocations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Completed, Output, Develop an azure durable function",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure"
      },
      {
        id: "O2",
        text: "http: //localhost:50342/0auth2/token"
      },
      {
        id: "O3",
        text: "http: //169.254.169.254:50432/0auth2/token"
      },
      {
        id: "O4",
        text: "var client = new HttpClient();"
      },
      {
        id: "O5",
        text: "Completed"
      },
      {
        id: "O6",
        text: "Output"
      },
      {
        id: "O7",
        text: "Develop an azure durable function"
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
    id: 103,
    number: 13,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are developing a new page for a website that uses Azure Cosmos DB for data storage. The feature uses documents that have the following\nformat:\nYou must display data for the new page in a specic order. You create the following query for the page:\nYou need to congure a Cosmos DB policy to support the query.\nHow should you congure the policy? To answer, drag the appropriate JSON segments to the correct locations. Each JSON segment may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: A - Orchestrator, D – Activity, Nested Azure Resource Manager",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "automatic"
      },
      {
        id: "O2",
        text: "descending"
      },
      {
        id: "O3",
        text: "includedPaths"
      },
      {
        id: "O4",
        text: "JSON segments Answer Area"
      },
      {
        id: "O5",
        text: "io"
      },
      {
        id: "O6",
        text: "order"
      },
      {
        id: "O7",
        text: "Orchestrator"
      },
      {
        id: "O8",
        text: "Activity"
      },
      {
        id: "O9",
        text: "Nested Azure Resource Manager"
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
    id: 104,
    number: 14,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are building a trac monitoring system that monitors trac along six highways. The system produces time series analysis-based reports for\neach highway.\nData from trac sensors are stored in Azure Event Hub.\nTrac data is consumed by four departments. Each department has an Azure Web App that displays the time series-based reports and contains a\nWebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.\nData throughput must be maximized. Latency must be minimized.\nYou need to implement the Azure Event Hub.\nWhich settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Azure Resource Manager test toolkit, What-if operation, Durable Function;vehicle loan",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Setting Value"
      },
      {
        id: "O2",
        text: "Highway"
      },
      {
        id: "O3",
        text: "Timestamp"
      },
      {
        id: "O4",
        text: "Department"
      },
      {
        id: "O5",
        text: "Azure Resource Manager test toolkit"
      },
      {
        id: "O6",
        text: "What-if operation"
      },
      {
        id: "O7",
        text: "Durable Function"
      },
      {
        id: "O8",
        text: "vehicle loan"
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
    id: 105,
    number: 15,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are developing a microservices solution. You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster.\nYou need to deploy a solution that includes the following features:\n✑ reverse proxy capabilities\n✑ congurable trac routing\n✑ TLS termination with a custom certicate\nWhich components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Orchestrator, Azure function app(10 attempts, 20wec between attempts up to 15 min), retry",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "CoreDNS"
      },
      {
        id: "O2",
        text: "addressing."
      },
      {
        id: "O3",
        text: "Orchestrator"
      },
      {
        id: "O4",
        text: "Azure function app(10 attempts"
      },
      {
        id: "O5",
        text: "20wec between attempts up to 15 min)"
      },
      {
        id: "O6",
        text: "retry"
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
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6"
    ]
  },
  {
    id: 106,
    number: 16,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are implementing an order processing system. A point of sale application publishes orders to topics in an Azure Service Bus queue. The Label\nproperty for the topic includes the following data:\nThe system has the following requirements for subscriptions:\nYou need to implement ltering and maximize throughput while evaluating lters.\nWhich lter types should you implement? To answer, drag the appropriate lter types to the correct subscriptions. Each lter type may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: exponentialBackoff, maxRetryCount, commercial diving company",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "exponentialBackoff"
      },
      {
        id: "O2",
        text: "maxRetryCount"
      },
      {
        id: "O3",
        text: "commercial diving company"
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
    id: 107,
    number: 17,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYour company has several websites that use a company logo image. You use Azure Content Delivery Network (CDN) to store the static image.\nYou need to determine the correct process of how the CDN and the Point of Presence (POP) server will distribute the image and list the items in\nthe correct order.\nIn which order do the actions occur? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: cpu usage-base autoscaling, predictive autoscaling, game develop, favorite photo vote",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "the image to the client."
      },
      {
        id: "O2",
        text: "cpu usage-base autoscaling"
      },
      {
        id: "O3",
        text: "predictive autoscaling"
      },
      {
        id: "O4",
        text: "game develop"
      },
      {
        id: "O5",
        text: "favorite photo vote"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 108,
    number: 18,
    topic: "Topic 3",
    prompt: "You are developing an Azure Cosmos DB solution by using the Azure Cosmos DB SQL API. The data includes millions of documents. Each\ndocument may contain hundreds of properties.\nThe properties of the documents do not contain distinct values for partitioning. Azure Cosmos DB must scale individual containers in the\ndatabase to meet the performance needs of the application by spreading the workload evenly across all partitions over time.\nYou need to select a partition key.\nWhich two partition keys can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: IDurableEntityClient",
    type: "single",
    options: [
      {
        id: "A",
        text: "a single property value that does not appear frequently in the documents"
      },
      {
        id: "B",
        text: "a value containing the collection name"
      },
      {
        id: "C",
        text: "a single property value that appears frequently in the documents"
      },
      {
        id: "D",
        text: "a concatenation of multiple property values with a random sux appended"
      },
      {
        id: "E",
        text: "a hash sux appended to a property value"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 109,
    number: 19,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing an Azure-hosted e-commerce web application. The application will use Azure Cosmos DB to store sales orders. You are using\nthe latest SDK to manage the sales orders in the database.\nYou create a new Azure Cosmos DB instance. You include a valid endpoint and valid authorization key to an appSettings.json le in the code\nproject.\nYou are evaluating the following application code: (Line number are included for reference only.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: SignalentityAsync, App service plan “asp1” free pricing tier, Always On(shouldn’t go idle)",
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
    id: 110,
    number: 20,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou develop an Azure solution that uses Cosmos DB.\nThe current Cosmos DB container must be replicated and must use a partition key that is optimized for queries.\nYou need to implement a change feed processor solution.\nWhich change feed processor components should you use? To answer, drag the appropriate components to the correct requirements. Each\ncomponent may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view the content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Basic (cheapest with good compute), Microsevices to run container apps, Enable ingress",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Set a lifecycle management policy to move blobs to the cool tier"
      },
      {
        id: "O2",
        text: "Set a lifecycle management policy to move blobs to the archive tier"
      },
      {
        id: "O3",
        text: "Implement Blob Storage"
      },
      {
        id: "O4",
        text: "Implement Storage (general purpose v1)"
      },
      {
        id: "O5",
        text: "=» Implement Zone Redundant Storage for application data."
      },
      {
        id: "O6",
        text: "Basic (cheapest with good compute)"
      },
      {
        id: "O7",
        text: "Microsevices to run container apps"
      },
      {
        id: "O8",
        text: "Enable ingress"
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
    id: 111,
    number: 21,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing a web application that will use Azure Storage. Older data will be less frequently used than more recent data.\nYou need to congure data storage for the application. You have the following requirements:\n✑ Retain copies of data for ve years.\n✑ Minimize costs associated with storing data that is over one year old.\n✑ Implement Zone Redundant Storage for application data.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Add custom domain name, Bind the certificate (only enabled after finishing the validation), Add DNS records to the domain provider",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Set a lifecycle management policy to move blobs to the cool tier"
      },
      {
        id: "O2",
        text: "Set a lifecycle management policy to move blobs to the archive tier"
      },
      {
        id: "O3",
        text: "Implement Blob Storage"
      },
      {
        id: "O4",
        text: "Implement Storage (general purpose v1)"
      },
      {
        id: "O5",
        text: "=» Implement Zone Redundant Storage for application data."
      },
      {
        id: "O6",
        text: "Add custom domain name"
      },
      {
        id: "O7",
        text: "Bind the certificate (only enabled after finishing the validation)"
      },
      {
        id: "O8",
        text: "Add DNS records to the domain provider"
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
    id: 112,
    number: 22,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nA company develops a series of mobile games. All games use a single leaderboard service.\nYou have the following requirements:\n✑ Code must be scalable and allow for growth.\n✑ Each record must consist of a playerId, gameId, score, and time played.\n✑ When users reach a new high score, the system will save the new score using the SaveScore function below.\nEach game is assigned an Id based on the series title.\nYou plan to store customer information in Azure Cosmos DB. The following data already exists in the database:\nYou develop the following code to save scores in the data store. (Line numbers are included for reference only.)\nYou develop the following code to query the database. (Line numbers are included for reference only.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Validate the custom domain name, Microservices container apps. External http ingress traffic enabled, D – Use single environment for all containers",
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
    id: 113,
    number: 23,
    topic: "Topic 3",
    prompt: "You develop and deploy a web application to Azure App Service. The application accesses data stored in an Azure Storage account. The account\ncontains several containers with several blobs with large amounts of data. You deploy all Azure resources to a single region.\nYou need to move the Azure Storage account to the new region. You must copy all data to the new region.\nWhat should you do rst?",
    keySource: "source",
    explanation: "Source answer: Microservices container apps. External http ingress traffic enabled",
    type: "single",
    options: [
      {
        id: "A",
        text: "Export the Azure Storage account Azure Resource Manager template"
      },
      {
        id: "B",
        text: "Initiate a storage account failover"
      },
      {
        id: "C",
        text: "Congure object replication for all blobs"
      },
      {
        id: "D",
        text: "Use the AzCopy command line tool"
      },
      {
        id: "E",
        text: "Create a new Azure Storage account in the current region"
      },
      {
        id: "F",
        text: "Create a new subscription in the current region"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 114,
    number: 24,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing an application to collect the following telemetry data for delivery drivers: rst name, last name, package count, item id, and\ncurrent location coordinates. The app will store the data in Azure Cosmos DB.\nYou need to congure Azure Cosmos DB to query the data.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Revision label, Revision mode, You plan to develop an Azure Functions app with an HTTP trigger.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Cosmos DB partition key Fv"
      },
      {
        id: "O2",
        text: "Gremlin"
      },
      {
        id: "O3",
        text: "Azure Cosmos DB API | [Y"
      },
      {
        id: "O4",
        text: "Revision label"
      },
      {
        id: "O5",
        text: "Revision mode"
      },
      {
        id: "O6",
        text: "You plan to develop an Azure Functions app with an HTTP trigger."
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
    id: 115,
    number: 25,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYou are implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK. You add a change feed processor to a\nnew container instance.\nYou attempt to read a batch of 100 documents. The process fails when reading one of the documents. The solution must monitor the progress of\nthe change feed processor instance on the new container as the change feed is read. You must prevent the change feed processor from retrying\nthe entire batch when one document cannot be read.\nYou need to implement the change feed processor to read the documents.\nWhich features should you use? To answer, drag the appropriate features to the cored requirements. Each feature may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each cored selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Premium, 230 seconds (Http trigger max 300 sec.), You develop a Python application for image rendering.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Nr"
      },
      {
        id: "O2",
        text: "Premium"
      },
      {
        id: "O3",
        text: "230 seconds (Http trigger max 300 sec.)"
      },
      {
        id: "O4",
        text: "You develop a Python application for image rendering."
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
    id: 116,
    number: 26,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing an application that uses a premium block blob storage account. The application will process a large volume of transactions\ndaily. You enable\nBlob storage versioning.\nYou are optimizing costs by automating Azure Blob Storage access tiers. You apply the following policy rules to the storage account. (Line\nnumbers are included for reference only.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Azure Container Instances, Restart policy, Code solution that uses storage client library",
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
    id: 117,
    number: 27,
    topic: "Topic 3",
    prompt: "An organization deploys Azure Cosmos DB.\nYou need to ensure that the index is updated as items are created, updated, or deleted.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Yes (creates an infinite lease)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Set the indexing mode to Lazy."
      },
      {
        id: "B",
        text: "Set the value of the automatic property of the indexing policy to False."
      },
      {
        id: "C",
        text: "Set the value of the EnableScanInQuery option to True."
      },
      {
        id: "D",
        text: "Set the indexing mode to Consistent."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 118,
    number: 28,
    topic: "Topic 3",
    prompt: "You are developing a .Net web application that stores data in Azure Cosmos DB. The application must use the Core API and allow millions of\nreads and writes.\nThe Azure Cosmos DB account has been created with multiple write regions enabled. The application has been deployed to the East US2 and\nCentral US regions.\nYou need to update the application to support multi-region writes.\nWhat are two possible ways to achieve this goal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: No (line 06 always creates anew blob",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Update the ConnectionPolicy class for the Cosmos client and populate the PreferredLocations property based on the geo-proximity of the application."
      },
      {
        id: "B",
        text: "Update Azure Cosmos DB to use the Strong consistency level. Add indexed properties to the container to indicate region."
      },
      {
        id: "C",
        text: "Update the ConnectionPolicy class for the Cosmos client and set the UseMultipleWriteLocations property to true."
      },
      {
        id: "D",
        text: "Create and deploy a custom conict resolution policy."
      },
      {
        id: "E",
        text: "Update Azure Cosmos DB to use the Session consistency level. Send the SessionToken property value from the FeedResponse object of the write action to the end-user by using a cookie."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 119,
    number: 29,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing a solution to store documents in Azure Blob storage. Customers upload documents to multiple containers. Documents consist\nof PDF, CSV,\nMicrosoft Oce format and plain text les.\nThe solution must process millions of documents across hundreds of containers. The solution must meet the following requirements:\n✑ Documents must be categorized by a customer identier as they are uploaded to the storage account.\n✑ Allow ltering by the customer identier.\n✑ Allow searching of information contained within a document\n✑ Minimize costs.\nYou create and congure a standard general-purpose v2 storage account to support the solution.\nYou need to implement the solution.\nWhat should you implement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Yes (finally block releases the lease), Building website using azure blob storage (archive access tier-> lowest storage cost), B - Between one and 15 hours",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Blob index tags"
      },
      {
        id: "O2",
        text: "Azure Blob inventory policy"
      },
      {
        id: "O3",
        text: "Azure Blob metadata"
      },
      {
        id: "O4",
        text: "Azure Cognitive Search"
      },
      {
        id: "O5",
        text: "Yes (finally block releases the lease)"
      },
      {
        id: "O6",
        text: "Building website using azure blob storage (archive access tier-> lowest storage cost)"
      },
      {
        id: "O7",
        text: "Between one"
      },
      {
        id: "O8",
        text: "15 hours"
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
    id: 120,
    number: 30,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are developing a web application by using the Azure SDK. The web application accesses data in a zone-redundant BlockBlobStorage storage\naccount.\nThe application must determine whether the data has changed since the application last read the data. Update operations must use the latest\ndata changes when writing data to the storage account.\nYou need to implement the update operations.\nWhich values should you use? To answer, select the appropriate option in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Ticket reservation system, Bounded staleness (max-interval indicates this must be bounded staleness, –enable automatic-failover true (indicates this must be multi region)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "If-Match"
      },
      {
        id: "O2",
        text: "Versionld"
      },
      {
        id: "O3",
        text: "If-None-Match"
      },
      {
        id: "O4",
        text: "WithSnapshotCore"
      },
      {
        id: "O5",
        text: "If-Modified-Since"
      },
      {
        id: "O6",
        text: "Delete (Azure.Storage.Blobs.Models.DeleteSnapshotsOption"
      },
      {
        id: "O7",
        text: "ETag"
      },
      {
        id: "O8",
        text: "HTTP Headervalue | [v]"
      },
      {
        id: "O9",
        text: "snapshotsOption = Azure.Storage.Blobs.Models.[ [vy] .[— \"Tvy])"
      },
      {
        id: "O10",
        text: "Ticket reservation system"
      },
      {
        id: "O11",
        text: "Bounded staleness (max-interval indicates this must be bounded staleness"
      },
      {
        id: "O12",
        text: "–enable automatic-failover true (indicates this must be multi region)"
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
    id: 121,
    number: 31,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nAn organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.\nYou need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: –locations ‘soutcentralus=0 easus=1 westus=2’, Deploy python website to web app, –sku b1 --is-linux",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "If-Match"
      },
      {
        id: "O2",
        text: "Versionld"
      },
      {
        id: "O3",
        text: "If-None-Match"
      },
      {
        id: "O4",
        text: "WithSnapshotCore"
      },
      {
        id: "O5",
        text: "If-Modified-Since"
      },
      {
        id: "O6",
        text: "Delete (Azure.Storage.Blobs.Models.DeleteSnapshotsOption"
      },
      {
        id: "O7",
        text: "ETag"
      },
      {
        id: "O8",
        text: "HTTP Headervalue | [v]"
      },
      {
        id: "O9",
        text: "snapshotsOption = Azure.Storage.Blobs.Models.[ [vy] .[— \"Tvy])"
      },
      {
        id: "O10",
        text: "–locations ‘soutcentralus=0 easus=1 westus=2’"
      },
      {
        id: "O11",
        text: "Deploy python website to web app"
      },
      {
        id: "O12",
        text: "–sku b1 --is-linux"
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
    id: 122,
    number: 32,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nAn organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.\nYou need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: –deployment-container-image-name images.azurecr.io/website:v1.0.0, Container set --docker-registry-server-url https://images.azurecr.io -u admin -p admin, Back-end azure app service, scale based on number of messages contained in service bus queue",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "snapshots_present"
      },
      {
        id: "O2",
        text: "ContinuationToken"
      },
      {
        id: "O3",
        text: "–deployment-container-image-name images.azurecr.io/website:v1.0.0"
      },
      {
        id: "O4",
        text: "Container set --docker-registry-server-url https://images.azurecr.io -u admin -p admin"
      },
      {
        id: "O5",
        text: "Back-end azure app service"
      },
      {
        id: "O6",
        text: "scale based on number of messages contained in service bus queue"
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
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6"
    ]
  },
  {
    id: 123,
    number: 33,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou are developing an application that monitors data added to an Azure Blob storage account.\nYou need to process each change made to the storage account.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Service Bus queue (metric source), Active Message Count(criteria: Metric name, Average(time grain statistic)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "snapshots_present"
      },
      {
        id: "O2",
        text: "ContinuationToken"
      },
      {
        id: "O3",
        text: "Service Bus queue (metric source)"
      },
      {
        id: "O4",
        text: "Active Message Count(criteria: Metric name"
      },
      {
        id: "O5",
        text: "Average(time grain statistic)"
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
    id: 124,
    number: 34,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou develop an application that sells AI generated images based on user input. You recently started a marketing campaign that displays unique\nads every second day.\nSales data is stored in Azure Cosmos DB with the date of each sale being stored in a property named ‘whenFinished’.\nThe marketing department requires a view that shows the number of sales for each unique ad.\nYou need to implement the query for the view.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Less than or equal to(operator), Decrease count by(operation), Update metadata",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "group by"
      },
      {
        id: "O2",
        text: "SELECT"
      },
      {
        id: "O3",
        text: "FROM ©"
      },
      {
        id: "O4",
        text: "Less than or equal to(operator)"
      },
      {
        id: "O5",
        text: "Decrease count by(operation)"
      },
      {
        id: "O6",
        text: "Update metadata"
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
    id: 125,
    number: 35,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou implement an Azure solution to include Azure Cosmos DB, the latest Azure Cosmos DB SDK, and the Core (SQL) API. You also implement a\nchange feed processor on a new container instance by using the Azure Functions trigger for Azure Cosmos DB.\nA large batch of documents continues to fail when reading one of the documents in the batch. The same batch of documents is continuously\nretried by the triggered function and a new batch of documents must be read.\nYou need to implement the change feed processor to read the documents.\nWhich feature should you implement? To answer, select the appropriate features in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: FetchattributesAsync (first it needs to be fetched), Metadata.add (manipulate metadata to update them ), SetMetadataAsync (changes have to be persisting)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Create a service shared-access signature (SAS)."
      },
      {
        id: "O2",
        text: "Create an account shared-access signature (SAS)."
      },
      {
        id: "O3",
        text: "Enable the blob change feed for the storage account."
      },
      {
        id: "O4",
        text: "Enable version-level immutability support for the storage account."
      },
      {
        id: "O5",
        text: "Enable point-in-time restore for containers in the storage account."
      },
      {
        id: "O6",
        text: "Configure a time-based retention policy for the storage account."
      },
      {
        id: "O7",
        text: "FetchattributesAsync (first it needs to be fetched)"
      },
      {
        id: "O8",
        text: "Metadata.add (manipulate metadata to update them )"
      },
      {
        id: "O9",
        text: "SetMetadataAsync (changes have to be persisting)"
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
    id: 126,
    number: 36,
    topic: "Topic 3",
    prompt: "You are developing an application to store business-critical data in Azure Blob storage.\nThe application must meet the following requirements:\n• Data must not be modied or deleted for a user-specied interval.\n• Data must be protected from overwrites and deletes.\n• Data must be written once and allowed to be read many times.\nYou need to protect the data in the Azure Blob storage account.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Provision an Azure Event Grid. Configure the machine identifier as the partition key and enable capture.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Congure a time-based retention policy for the storage account."
      },
      {
        id: "B",
        text: "Create an account shared-access signature (SAS)."
      },
      {
        id: "C",
        text: "Enable the blob change feed for the storage account."
      },
      {
        id: "D",
        text: "Enable version-level immutability support for the storage account."
      },
      {
        id: "E",
        text: "Enable point-in-time restore for containers in the storage account."
      },
      {
        id: "F",
        text: "Create a service shared-access signature (SAS)."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 127,
    number: 37,
    topic: "Topic 3",
    prompt: "You are updating an application that stores data on Azure and uses Azure Cosmos DB for storage. The application stores data in multiple\ndocuments associated with a single username.\nThe application requires the ability to update multiple documents for a username in a single ACID operation.\nYou need to congure Azure Cosmos DB.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: B- NO (It’s Event hub, not Event grid)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create a collection sharded on username to store documents."
      },
      {
        id: "B",
        text: "Congure Azure Cosmos DB to use the Gremlin API."
      },
      {
        id: "C",
        text: "Create an unsharded collection to store documents."
      },
      {
        id: "D",
        text: "Congure Azure Cosmos DB to use the MongoDB API."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 128,
    number: 38,
    topic: "Topic 3",
    prompt: "You develop Azure solutions.\nYou must connect to a No-SQL globally-distributed database by using the .NET API.\nYou need to create an object to congure and execute requests in the database.\nWhich code segment should you use?",
    keySource: "source",
    explanation: "Source answer: “The messages must NOT persist after being processed",
    type: "single",
    options: [
      {
        id: "A",
        text: "database_name = 'MyDatabase' database = client.create_database_if_not_exists(id=database_name)"
      },
      {
        id: "B",
        text: "client = CosmosClient(endpoint, key)"
      },
      {
        id: "C",
        text: "container_name = 'MyContainer' container = database.create_container_if_not_exists( id=container_name, partition_key=PartitionKey(path=\"/lastName\"), offer_throughput=400 )"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 129,
    number: 39,
    topic: "Topic 3",
    prompt: "You develop a web application that provides access to legal documents that are stored on Azure Blob Storage with version-level immutability\npolicies. Documents are protected with both time-based policies and legal hold policies. All time-based retention policies have the\nAllowProtectedAppendWrites property enabled.\nYou have a requirement to prevent the user from attempting to perform operations that would fail only when a legal hold is in effect and when all\nother policies are expired.\nYou need to meet the requirement.\nWhich two operations should you prevent? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: A – Queueclient",
    type: "single",
    options: [
      {
        id: "A",
        text: "adding data to documents"
      },
      {
        id: "B",
        text: "deleting documents"
      },
      {
        id: "C",
        text: "creating documents"
      },
      {
        id: "D",
        text: "overwriting existing documents"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 130,
    number: 40,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou provisioned an Azure Cosmos DB for NoSQL account named account1 with the default consistency level.\nYou plan to congure the consistency level on a per request basis. The level needs to be set for consistent prex for read and write operations to\naccount1.\nYou need to identify the resulting consistency level for read and write operations.\nWhich levels should you congure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Azure blob storage GPv1, Upgrade to GPv2, Create New GP2v standard account, set default to cool",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "strong"
      },
      {
        id: "O2",
        text: "account1."
      },
      {
        id: "O3",
        text: "Azure blob storage GPv1"
      },
      {
        id: "O4",
        text: "Upgrade to GPv2"
      },
      {
        id: "O5",
        text: "Create New GP2v standard account"
      },
      {
        id: "O6",
        text: "set default to cool"
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
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6"
    ]
  },
  {
    id: 131,
    number: 41,
    topic: "Topic 3",
    prompt: "DRAG DROP\n-\nYou are developing an application to store millions of images in Azure blob storage. The images are uploaded to an Azure blob storage container\nnamed companyimages contained in an Azure blob storage account named companymedia. The stored images are uploaded with multiple blob\nindex tags across multiple blobs in the container.\nYou must nd all blobs whose tags match a search expression in the container. The search expression must evaluate an index tag named status\nwith a value of nal.\nYou need to construct the GET method request URI.\nHow should you complete the URI? To answer, drag the appropriate parameters to the correct request URI targets. Each parameter may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
    keySource: "source",
    explanation: "Source answer: Copy the data to be archived to a Standard GPv2 storage account, Connect to a no-SQL globally distributed database by using .NET API, C - new CosmosClient(EndpointUri, PrimaryKey);",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "index tags across multiple blobs in the container."
      },
      {
        id: "O2",
        text: "Copy the data to be archived to a Standard GPv2 storage account"
      },
      {
        id: "O3",
        text: "Connect to a no-SQL globally distributed database by using .NET API"
      },
      {
        id: "O4",
        text: "new CosmosClient(EndpointUri"
      },
      {
        id: "O5",
        text: "PrimaryKey)"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 132,
    number: 42,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou develop two Python scripts to process data.\nThe Python scripts must be deployed to two, separate Linux containers running in an Azure Container Instance container group. The containers\nmust access external data by using the Server Message Block (SMB) protocol. Containers in the container group must run only once.\nYou need to congure the Azure Container Instance.\nWhich conguration value should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage account that stores large volumes of data, copy all data to new storage, AzCopy, all virtual machines to use managed identities",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure file share"
      },
      {
        id: "O2",
        text: "Secret"
      },
      {
        id: "O3",
        text: "Always"
      },
      {
        id: "O4",
        text: "OnfFailure"
      },
      {
        id: "O5",
        text: "Never"
      },
      {
        id: "O6",
        text: "Storage account that stores large volumes of data"
      },
      {
        id: "O7",
        text: "copy all data to new storage"
      },
      {
        id: "O8",
        text: "AzCopy"
      },
      {
        id: "O9",
        text: "all virtual machines to use managed identities"
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
    id: 133,
    number: 43,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou are developing a static website hosted on Azure Blob Storage. You create a storage account and enable static website hosting.\nThe website must support the following requirements:\n• Custom domain name\n• Custom header values for all responses\n• Custom SSL certicate\nYou need to implement the static website.\nWhat should you congure? To answer, select the appropriate values in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: http://169.254..../identity/oauth2/token, JsonConvert.DeserializeObject<Dictionary<string,string>>(payload);, New page that uses cosmos db",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Storage Service Encryption (SSE)"
      },
      {
        id: "O2",
        text: "Azure Content Delivery Network (CDN)"
      },
      {
        id: "O3",
        text: "Blob index tags"
      },
      {
        id: "O4",
        text: "http://169.254..../identity/oauth2/token"
      },
      {
        id: "O5",
        text: "JsonConvert.DeserializeObject<Dictionary<string"
      },
      {
        id: "O6",
        text: "string>>(payload)"
      },
      {
        id: "O7",
        text: "New page that uses cosmos db"
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
    id: 134,
    number: 44,
    topic: "Topic 3",
    prompt: "You are developing an inventory tracking solution. The solution includes an Azure Function app containing multiple functions triggered by Azure\nCosmos DB. You plan to deploy the solution to multiple Azure regions.\nThe solution must meet the following requirements:\n• Item results from Azure Cosmos DS must return the most recent committed version of an item.\n• Items written to Azure Cosmos DB must provide ordering guarantees.\nYou need to congure the consistency level for the Azure Cosmos DB deployments.\nWhich consistency level should you use?",
    keySource: "source",
    explanation: "Source answer: compositeIndexes -You can order by multiple properties. A query that orders by multiple properties requires a composite index.",
    type: "single",
    options: [
      {
        id: "A",
        text: "consistent prex"
      },
      {
        id: "B",
        text: "eventual"
      },
      {
        id: "C",
        text: "bounded staleness"
      },
      {
        id: "D",
        text: "strong"
      },
      {
        id: "E",
        text: "session"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 135,
    number: 45,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nYou are developing an application that runs in several customer Azure Kubernetes Service clusters. Within each cluster, a pod runs that collects\nperformance data to be analyzed later. A large amount of data is collected so saving latency must be minimized.\nThe performance data must be stored so that pod restarts do not impact the stored data. Write latency should be minimized.\nYou need to congure blob storage.\nHow should you complete the YAML conguration? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Descending, You are building a traffic monitoring system that monitors traffic along six highways., 6",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "azure-disk"
      },
      {
        id: "O2",
        text: "azure-file"
      },
      {
        id: "O3",
        text: "retain"
      },
      {
        id: "O4",
        text: "delete"
      },
      {
        id: "O5",
        text: "scaleio"
      },
      {
        id: "O6",
        text: "PodStorage"
      },
      {
        id: "O7",
        text: "StorageClass"
      },
      {
        id: "O8",
        text: "portworx-volume"
      },
      {
        id: "O9",
        text: "PersistentVolume"
      },
      {
        id: "O10",
        text: "PersistentVolumeClaim"
      },
      {
        id: "O11",
        text: "apiVersion: storage.k8s.io/vl"
      },
      {
        id: "O12",
        text: "local"
      },
      {
        id: "O13",
        text: "Descending"
      },
      {
        id: "O14",
        text: "You are building a traffic monitoring system that monitors traffic along six highways."
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
    id: 136,
    number: 46,
    topic: "Topic 3",
    prompt: "HOTSPOT\n-\nCase study\n-\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study\n-\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground\n-\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment\n-\nCorporate website\n-\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations\n-\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements\n-\nThe application components must meet the following requirements:\nCorporate website\n-\n• Secure the website by using SSL.\n• Minimize costs for data storage and hosting.\n• Implement native GitHub workows for continuous integration and continuous deployment (CI/CD).\n• Distribute the website content globally for local use.\n• Implement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\n• The website must have 99.95 percent uptime.\nRetail store locations\n-\n• Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by\nusing native SQL language queries.\n• Audit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services\n-\n• Store service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\n• Store delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services\n-\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to\ninclude read-only access to the data.\nSecurity\n-\n• All Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\n• Authentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues\n-\nRetail Store Locations\n-\n• You must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\n• Azure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nYou need to implement the delivery service telemetry data.\nHow should you congure the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Highway, You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster., Helm (Helm helps you manage Kubernetes applications)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Background"
      },
      {
        id: "O2",
        text: "Highway"
      },
      {
        id: "O3",
        text: "You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster."
      },
      {
        id: "O4",
        text: "Helm (Helm helps you manage Kubernetes applications)"
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
    id: 137,
    number: 47,
    topic: "Topic 3",
    prompt: "You create and publish a new Azure App Service web app.\nUser authentication and authorization must use Azure Active Directory (Azure AD).\nYou need to congure authentication and authorization.\nWhat should you do rst?",
    keySource: "source",
    explanation: "Source answer: KubeCtl (The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.)",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add an identity provider."
      },
      {
        id: "B",
        text: "Map an existing custom DNS name."
      },
      {
        id: "C",
        text: "Create and congure a new app setting."
      },
      {
        id: "D",
        text: "Add a private certicate."
      },
      {
        id: "E",
        text: "Create and congure a managed identity."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 138,
    number: 48,
    topic: "Topic 3",
    prompt: "DRAG DROP\n-\nYou have an Azure Cosmos DB for NoSQL account.\nYou plan to develop two apps named App1 and App2 that will use the change feed functionality to track changes to containers. App1 will use the\npull model and App2 will use the push model.\nYou need to choose the method to track the most recently processed change in App1 and App2.\nWhich component should you use? To answer, drag the appropriate components to the correct apps. Each component may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Ingress Controller (Kubernetes ingress resources are used to configure the ingress rules and routes for individual Kubernetes services), You are implementing an order processing system, Correlation Filter",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Cassandra"
      },
      {
        id: "O2",
        text: "Ingress Controller (Kubernetes ingress resources are used to configure the ingress rules"
      },
      {
        id: "O3",
        text: "routes for individual Kubernetes services)"
      },
      {
        id: "O4",
        text: "You are implementing an order processing system"
      },
      {
        id: "O5",
        text: "Correlation Filter"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 139,
    number: 1,
    topic: "Topic 4",
    prompt: "You are developing a Java application that uses Cassandra to store key and value data. You plan to use a new Azure Cosmos DB resource and the\nCassandra\nAPI in the application. You create an Azure Active Directory (Azure AD) group named Cosmos DB Creators to enable provisioning of Azure Cosmos\naccounts, databases, and containers.\nThe Azure AD group must not be able to access the keys that are required to access the data.\nYou need to restrict access to the Azure AD group.\nWhich role-based access control should you use?",
    keySource: "source",
    explanation: "Source answer: SQL filter",
    type: "single",
    options: [
      {
        id: "A",
        text: "DocumentDB Accounts Contributor"
      },
      {
        id: "B",
        text: "Cosmos Backup Operator"
      },
      {
        id: "C",
        text: "Cosmos DB Operator"
      },
      {
        id: "D",
        text: "Cosmos DB Account Reader"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 140,
    number: 2,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD)\ncredentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership\nmust be used to determine the permission level.\nYou need to congure authorization.\nSolution: Congure the Azure Web App for the website to allow only authenticated requests and require Azure AD log on.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: SQL filter",
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
    id: 141,
    number: 3,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD)\ncredentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership\nmust be used to determine the permission level.\nYou need to congure authorization.\nSolution:\n✑ Create a new Azure AD application. In the application's manifest, set value of the groupMembershipClaims option to All.\n✑ In the website, use the value of the groups claim from the JWT for the user to determine permissions.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: SQL filter",
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
    id: 142,
    number: 4,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD)\ncredentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership\nmust be used to determine the permission level.\nYou need to congure authorization.\nSolution:\n✑ Create a new Azure AD application. In the application's manifest, dene application roles that match the required permission levels for the\napplication.\n✑ Assign the appropriate Azure AD group to each role. In the website, use the value of the roles claim from the JWT for the user to determine\npermissions.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: No filter",
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
    id: 143,
    number: 5,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are developing an application to securely transfer data between on-premises le systems and Azure Blob storage. The application stores keys,\nsecrets, and certicates in Azure Key Vault. The application uses the Azure Key Vault APIs.\nThe application must allow recovery of an accidental deletion of the key vault or key vault objects. Key vault objects must be retained for 90 days\nafter deletion.\nYou need to protect the key vault and key vault objects.\nWhich Azure Key Vault feature should you use? To answer, drag the appropriate features to the correct actions. Each feature may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: You use Azure Content Delivery Network (CDN) to store the static image., A user requests the image from CDN, If no edge servers in the POP(Point of Presence) have image in cache, request to origin server",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Enable retention period and accidental deletion. rr Feature |"
      },
      {
        id: "O2",
        text: "You use Azure Content Delivery Network (CDN) to store the static image."
      },
      {
        id: "O3",
        text: "A user requests the image from CDN"
      },
      {
        id: "O4",
        text: "If no edge servers in the POP(Point of Presence) have image in cache"
      },
      {
        id: "O5",
        text: "request to origin server"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 144,
    number: 6,
    topic: "Topic 4",
    prompt: "You provide an Azure API Management managed web service to clients. The back-end web service implements HTTP Strict Transport Security\n(HSTS).\nEvery request to the backend service must include a valid HTTP authorization header.\nYou need to congure the Azure API Management instance with an authentication policy.\nWhich two policies can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: The origin server returns the loho imate to an edge server in the POP",
    type: "single",
    options: [
      {
        id: "A",
        text: "Basic Authentication"
      },
      {
        id: "B",
        text: "Digest Authentication"
      },
      {
        id: "C",
        text: "Certicate Authentication"
      },
      {
        id: "D",
        text: "OAuth Client Credential Grant"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 145,
    number: 7,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are developing an ASP.NET Core website that can be used to manage photographs which are stored in Azure Blob Storage containers.\nUsers of the website authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou implement role-based access control (RBAC) role permissions on the containers that store photographs. You assign users to RBAC roles.\nYou need to congure the website's Azure AD Application so that user's permissions can be used with the Azure Blob containers.\nHow should you congure the application? To answer, drag the appropriate setting to the correct location. Each setting can be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Subsequent request for the file may be directed to the same POP, Azure Cosmos DB SQL API. The data includes millions of documents, D - a concatenation of multiple property values with a random suffix appended",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Settings Answer Area"
      },
      {
        id: "O2",
        text: "delegated Azure Storage TO cc I (I Oc"
      },
      {
        id: "O3",
        text: "Subsequent request for the file may be directed to the same POP"
      },
      {
        id: "O4",
        text: "Azure Cosmos DB SQL API. The data includes millions of documents"
      },
      {
        id: "O5",
        text: "a concatenation of multiple property values with a random suffix appended"
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
    id: 146,
    number: 8,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are developing an ASP.NET Core app that includes feature ags which are managed by Azure App Conguration. You create an Azure App\nConguration store named AppFeatureFlagStore that contains a feature ag named Export.\nYou need to update the app to meet the following requirements:\n✑ Use the Export feature in the app without requiring a restart of the app.\n✑ Validate users before users are allowed access to secure resources.\n✑ Permit users to access secure resources.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: E -  a hash suffix appended to a property value, Azure-hosted e-commerce web application (SalesOrder ManagedSalesOrder)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "UseRequestLocalization"
      },
      {
        id: "O2",
        text: "UseCors"
      },
      {
        id: "O3",
        text: "UseSession"
      },
      {
        id: "O4",
        text: "UseStaticFiles"
      },
      {
        id: "O5",
        text: "UseCoakiePolicy"
      },
      {
        id: "O6",
        text: "UseCookiePolicy"
      },
      {
        id: "O7",
        text: "UseAuthorization"
      },
      {
        id: "O8",
        text: "UseAuthentication"
      },
      {
        id: "O9",
        text: "UseHttpsRedirection"
      },
      {
        id: "O10",
        text: "HH"
      },
      {
        id: "O11",
        text: "else"
      },
      {
        id: "O12",
        text: "a hash suffix appended to a property value"
      },
      {
        id: "O13",
        text: "Azure-hosted e-commerce web application (SalesOrder ManagedSalesOrder)"
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
      "t1:O12",
      "t2:O13"
    ]
  },
  {
    id: 147,
    number: 9,
    topic: "Topic 4",
    prompt: "You have an application that includes an Azure Web app and several Azure Function apps. Application secrets including connection strings and\ncerticates are stored in Azure Key Vault.\nSecrets must not be stored in the application or application runtime environment. Changes to Azure Active Directory (Azure AD) must be\nminimized.\nYou need to design the approach to loading application secrets.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a single user-assigned Managed Identity with permission to access Key Vault and congure each App Service to use that Managed Identity."
      },
      {
        id: "B",
        text: "Create a single Azure AD Service Principal with permission to access Key Vault and use a client secret from within the App Services to access Key Vault."
      },
      {
        id: "C",
        text: "Create a system assigned Managed Identity in each App Service with permission to access Key Vault."
      },
      {
        id: "D",
        text: "Create an Azure AD Service Principal with Permissions to access Key Vault for each App Service and use a certicate from within the App Services to access Key Vault."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 148,
    number: 10,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution:\n1. Create an Azure Key Vault key named skey.\n2. Encrypt the intake forms using the public key portion of skey.\n3. Store the encrypted data in Azure Blob storage.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES",
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
    id: 149,
    number: 11,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution:\n1. Create an Azure Cosmos DB database with Storage Service Encryption enabled.\n2. Store the intake forms in the Azure Cosmos DB database.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES",
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
    id: 150,
    number: 12,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution: Store the intake forms as Azure Key Vault secrets.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: You need to implement a change feed processor solution.",
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
    id: 151,
    number: 13,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou plan to deploy a new application to a Linux virtual machine (VM) that is hosted in Azure.\nThe entire VM must be secured at rest by using industry-standard encryption technology to address organizational security and compliance\nrequirements.\nYou need to congure Azure Disk Encryption for the VM.\nHow should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Monitored container, Lease container, Host",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az W create \\"
      },
      {
        id: "O2",
        text: "az WW create \\"
      },
      {
        id: "O3",
        text: "az group create --name S$resourcegroup --location westus"
      },
      {
        id: "O4",
        text: "az W enable)"
      },
      {
        id: "O5",
        text: "az provider register -n Microsoft.KeyVault"
      },
      {
        id: "O6",
        text: "keyvault"
      },
      {
        id: "O7",
        text: "vm"
      },
      {
        id: "O8",
        text: "os"
      },
      {
        id: "O9",
        text: "all"
      },
      {
        id: "O10",
        text: "data"
      },
      {
        id: "O11",
        text: "Monitored container"
      },
      {
        id: "O12",
        text: "Lease container"
      },
      {
        id: "O13",
        text: "Host"
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
      "t1:O11",
      "t2:O12",
      "t3:O13"
    ]
  },
  {
    id: 152,
    number: 14,
    topic: "Topic 4",
    prompt: "Your company is developing an Azure API hosted in Azure.\nYou need to implement authentication for the Azure API to access other Azure resources. You have the following requirements:\n✑ All API calls must be authenticated.\n✑ Callers to the API must not send credentials to the API.\nWhich authentication mechanism should you use?",
    keySource: "source",
    explanation: "Source answer: Delegate",
    type: "single",
    options: [
      {
        id: "A",
        text: "Basic"
      },
      {
        id: "B",
        text: "Anonymous"
      },
      {
        id: "C",
        text: "Managed identity"
      },
      {
        id: "D",
        text: "Client certicate"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 153,
    number: 15,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are developing an application. You have an Azure user account that has access to two subscriptions.\nYou need to retrieve a storage account key secret from Azure Key Vault.\nIn which order should you arrange the PowerShell commands to develop the solution? To answer, move all commands from the list of commands\nto the answer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Develop web app, azure storage, Implement Storage v2, Set a lifecycle management policy to move blobs to the cool tier",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Set-AzReyVaultSecret —-VaultName"
      },
      {
        id: "O2",
        text: "Set-AzContext —SubscriptionId ) QD)"
      },
      {
        id: "O3",
        text: "Develop web app"
      },
      {
        id: "O4",
        text: "azure storage"
      },
      {
        id: "O5",
        text: "Implement Storage v2"
      },
      {
        id: "O6",
        text: "Set a lifecycle management policy to move blobs to the cool tier"
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
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6"
    ]
  },
  {
    id: 154,
    number: 16,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specic resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Use an X.509 certicate to authenticate the VM with Azure Resource Manager.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Mobile Games . All games use a single leaderboard",
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
    id: 155,
    number: 17,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specic resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Use the Reader role-based access control (RBAC) role to authenticate the VM with Azure Resource Manager.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: YES",
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
    id: 156,
    number: 18,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are building a website that is used to review restaurants. The website will use an Azure CDN to improve performance and add functionality to\nrequests.\nYou build and deploy a mobile app for Apple iPhones. Whenever a user accesses the website from an iPhone, the user must be redirected to the\napp store.\nYou need to implement an Azure CDN rule that ensures that iPhone users are redirected to the app store.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: No, No",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "FROM DeliveryRulePostArgsConditionParameters"
      },
      {
        id: "O2",
        text: "iPhone"
      },
      {
        id: "O3",
        text: "Desktop"
      },
      {
        id: "O4",
        text: "IsDevice"
      },
      {
        id: "O5",
        text: "operator"
      },
      {
        id: "O6",
        text: "Contains"
      },
      {
        id: "O7",
        text: "selector"
      },
      {
        id: "O8",
        text: "conditions"
      },
      {
        id: "O9",
        text: "parameters"
      },
      {
        id: "O10",
        text: "matchValues"
      },
      {
        id: "O11",
        text: "X-POWERED-BY"
      },
      {
        id: "O12",
        text: "RequestHeader"
      },
      {
        id: "O13",
        text: "HTTP_USER_AGENT"
      },
      {
        id: "O14",
        text: "Th"
      },
      {
        id: "O15",
        text: "name"
      },
      {
        id: "O16",
        text: "No"
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
      "t1:O16",
      "t2:O16"
    ]
  },
  {
    id: 157,
    number: 19,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD)\ncredentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership\nmust be used to determine the permission level.\nYou need to congure authorization.\nSolution:\n✑ Congure and use Integrated Windows Authentication in the website.\n✑ In the website, query Microsoft Graph API to load the groups to which the user is a member.\nDoes the solution meet the goal?",
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
    id: 158,
    number: 20,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specic resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Run the Invoke-RestMethod cmdlet to make a request to the local managed identity for Azure resources endpoint.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: deploy all Azure resources to a single region, move the Azure Storage account to the new region",
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
    id: 159,
    number: 21,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are building a website to access project data related to teams within your organization. The website does not allow anonymous access.\nAuthentication is performed using an Azure Active Directory (Azure AD) app named internal.\nThe website has the following authentication requirements:\n✑ Azure AD users must be able to login to the website.\n✑ Personalization of the website must be based on membership in Active Directory groups.\nYou need to congure the application's manifest to meet the authentication requirements.\nHow should you congure the manifest? To answer, select the appropriate conguration in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: A – Export the azure storage account to ARM template, Temeletry data for delivery drivers, Core (SQL)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "groupMembershipClaims"
      },
      {
        id: "O2",
        text: "internal"
      },
      {
        id: "O3",
        text: "displayName"
      },
      {
        id: "O4",
        text: "optionalClaims"
      },
      {
        id: "O5",
        text: "\"optionalClaims\""
      },
      {
        id: "O6",
        text: "oauth2Permissions"
      },
      {
        id: "O7",
        text: "\"oauth2Permissions\""
      },
      {
        id: "O8",
        text: "\"groupMembershipClaims\""
      },
      {
        id: "O9",
        text: "\"requiredResourceAccess\""
      },
      {
        id: "O10",
        text: "yo"
      },
      {
        id: "O11",
        text: "appld"
      },
      {
        id: "O12",
        text: "Export the azure storage account to ARM template"
      },
      {
        id: "O13",
        text: "Temeletry data for delivery drivers"
      },
      {
        id: "O14",
        text: "Core (SQL)"
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
    id: 160,
    number: 22,
    topic: "Topic 4",
    prompt: "You develop an app that allows users to upload photos and videos to Azure storage. The app uses a storage REST API call to upload the media to\na blob storage account named Account1. You have blob storage containers named Container1 and Container2.\nUploading of videos occurs on an irregular basis.\nYou need to copy specic blobs from Container1 to Container2 when a new video is uploaded.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Item id",
    type: "single",
    options: [
      {
        id: "A",
        text: "Copy blobs to Container2 by using the Put Blob operation of the Blob Service REST API"
      },
      {
        id: "B",
        text: "Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet"
      },
      {
        id: "C",
        text: "Use AzCopy with the Snapshot switch to copy blobs to Container2"
      },
      {
        id: "D",
        text: "Download the blob to a virtual machine and then upload the blob to Container2"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 161,
    number: 23,
    topic: "Topic 4",
    prompt: "You are developing an ASP.NET Core website that uses Azure FrontDoor. The website is used to build custom weather data sets for researchers.\nData sets are downloaded by users as Comma Separated Value (CSV) les. The data is refreshed every 10 hours.\nSpecic les must be purged from the FrontDoor cache based upon Response Header values.\nYou need to purge individual assets from the Front Door cache.\nWhich type of cache purge should you use?",
    keySource: "source",
    explanation: "Source answer: Solution using Cosmos DB and Cosmos DB SDK, add change feed processor",
    type: "single",
    options: [
      {
        id: "A",
        text: "single path"
      },
      {
        id: "B",
        text: "wildcard"
      },
      {
        id: "C",
        text: "root domain"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 162,
    number: 24,
    topic: "Topic 4",
    prompt: "Your company is developing an Azure API.\nYou need to implement authentication for the Azure API. You have the following requirements:\nAll API calls must be secure.\n✑ Callers to the API must not send credentials to the API.\nWhich authentication mechanism should you use?",
    keySource: "source",
    explanation: "Source answer: Change fedd estimator",
    type: "single",
    options: [
      {
        id: "A",
        text: "Basic"
      },
      {
        id: "B",
        text: "Anonymous"
      },
      {
        id: "C",
        text: "Managed identity"
      },
      {
        id: "D",
        text: "Client certicate"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 163,
    number: 25,
    topic: "Topic 4",
    prompt: "You are a developer for a SaaS company that offers many web services.\nAll web services for the company must meet the following requirements:\n✑ Use API Management to access the services\n✑ Use OpenID Connect for authentication\n✑ Prevent anonymous usage\nA recent security audit found that several web services can be called without any authentication.\nWhich API Management policy should you implement?",
    keySource: "source",
    explanation: "Source answer: Dead-letter queue",
    type: "single",
    options: [
      {
        id: "A",
        text: "jsonp"
      },
      {
        id: "B",
        text: "authentication-certicate"
      },
      {
        id: "C",
        text: "check-header"
      },
      {
        id: "D",
        text: "validate-jwt"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 164,
    number: 26,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nContoso, Ltd. provides an API to customers by using Azure API Management (APIM). The API authorizes users with a JWT token.\nYou must implement response caching for the APIM gateway. The caching mechanism must detect the user ID of the client that accesses data for\na given location and cache the response for that user ID.\nYou need to add the following policies to the policies le:\n✑ a set-variable policy to store the detected user identity\n✑ a cache-lookup-value policy\n✑ a cache-store-value policy\n✑ a nd-and-replace policy to update the response body with the user prole information\nTo which policy section should you add the policies? To answer, drag the appropriate sections to the correct policies. Each section may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Premium block storage account, NO",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "KEY_VAULT_URI"
      },
      {
        id: "O2",
        text: "Policy section Policy Policy section"
      },
      {
        id: "O3",
        text: "Premium block storage account"
      },
      {
        id: "O4",
        text: "NO"
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
    id: 165,
    number: 27,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are developing an Azure solution.\nYou need to develop code to access a secret stored in Azure Key Vault.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: NO, YES",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "KEY_VAULT_URI"
      },
      {
        id: "O2",
        text: "Policy section Policy Policy section"
      },
      {
        id: "O3",
        text: "NO"
      },
      {
        id: "O4",
        text: "YES"
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
    id: 166,
    number: 28,
    topic: "Topic 4",
    prompt: "You are developing an Azure App Service REST API.\nThe API must be called by an Azure App Service web app. The API must retrieve and update user prole information stored in Azure Active\nDirectory (Azure AD).\nYou need to congure the API to make the updates.\nWhich two tools should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: NO",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Microsoft Graph API"
      },
      {
        id: "B",
        text: "Microsoft Authentication Library (MSAL)"
      },
      {
        id: "C",
        text: "Azure API Management"
      },
      {
        id: "D",
        text: "Microsoft Azure Security Center"
      },
      {
        id: "E",
        text: "Microsoft Azure Key Vault SDK"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 167,
    number: 29,
    topic: "Topic 4",
    prompt: "You develop a REST API. You implement a user delegation SAS token to communicate with Azure Blob storage.\nThe token is compromised.\nYou need to revoke the token.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Deploy Cosmos DB, ensure that index is updated as items are created, updated or deleted",
    type: "single",
    options: [
      {
        id: "A",
        text: "Revoke the delegation key."
      },
      {
        id: "B",
        text: "Delete the stored access policy."
      },
      {
        id: "C",
        text: "Regenerate the account key."
      },
      {
        id: "D",
        text: "Remove the role assignment for the security principle."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 168,
    number: 30,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are developing an Azure-hosted application that must use an on-premises hardware security module (HSM) key.\nThe key must be transferred to your existing Azure Key Vault by using the Bring Your Own Key (BYOK) process.\nYou need to securely transfer the key to Azure Key Vault.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: D – Set the indexing mode to consistent, Application needs to be updated to multi region writes, A – Update the ConnectionPolicy class for the Cosmos client and populate the PreferredLocations property based on the geo-proximity of the application.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a custom policy definition in Azure Policy."
      },
      {
        id: "O2",
        text: "Run the az keyvault key restore COMmand."
      },
      {
        id: "O3",
        text: "Set the indexing mode to consistent"
      },
      {
        id: "O4",
        text: "Application needs to be updated to multi region writes"
      },
      {
        id: "O5",
        text: "Update the ConnectionPolicy class for the Cosmos client"
      },
      {
        id: "O6",
        text: "populate the PreferredLocations property based on the geo-proximity of the application."
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
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6"
    ]
  },
  {
    id: 169,
    number: 31,
    topic: "Topic 4",
    prompt: "You develop and deploy an Azure Logic app that calls an Azure Function app. The Azure Function app includes an OpenAPI (Swagger) denition\nand uses an\nAzure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).\nThe Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.\nYou need to secure the Azure Logic app.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C - Update the ConnectionPolicy class for the Cosmos client and set the UseMultipleWriteLocations property to true",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a user-assigned managed identity and assign role-based access controls."
      },
      {
        id: "B",
        text: "Create an Azure AD custom role and assign the role to the Azure Blob storage account."
      },
      {
        id: "C",
        text: "Create an Azure Key Vault and issue a client certicate."
      },
      {
        id: "D",
        text: "Create a system-assigned managed identity and issue a client certicate."
      },
      {
        id: "E",
        text: "Create an Azure AD custom role and assign role-based access controls."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 170,
    number: 32,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are developing an application that uses a premium block blob storage account. You are optimizing costs by automating Azure Blob Storage\naccess tiers.\nYou apply the following policy rules to the storage account. You must determine the implications of applying the rules to the data. (Line numbers\nare included for reference only.)\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: developing a solution to store documents in Azure Blob storage, Azure Blob index tags, Azure Cognitive Search",
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
    id: 171,
    number: 33,
    topic: "Topic 4",
    prompt: "You are developing a solution that will use a multi-partitioned Azure Cosmos DB database. You plan to use the latest Azure Cosmos DB SDK for\ndevelopment.\nThe solution must meet the following requirements:\n✑ Send insert and update operations to an Azure Blob storage account.\n✑ Process changes to all partitions immediately.\n✑ Allow parallelization of change processing.\nYou need to process the Azure Cosmos DB operations.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Web application accesses data in a zone-redundant BlobBlobStorage",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an Azure App Service API and implement the change feed estimator of the SDK. Scale the API by using multiple Azure App Service instances."
      },
      {
        id: "B",
        text: "Create a background job in an Azure Kubernetes Service and implement the change feed feature of the SDK."
      },
      {
        id: "C",
        text: "Create an Azure Function to use a trigger for Azure Cosmos DB. Congure the trigger to connect to the container."
      },
      {
        id: "D",
        text: "Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 172,
    number: 34,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:\n$resourceGroupName = \"testResourceGroup\"\n$accountName = \"testCosmosAccount\"\n$databaseName = \"testDatabase\"\n$containerName = \"testContainer\"\n$partitionKeyPath = \"/EmployeeId\"\n$autoscaleMaxThroughput = 5000\nNew-AzCosmosDBSqlContainer -\n-ResourceGroupName $resourceGroupName\n-AccountName $accountName\n-DatabaseName $databaseName\n-Name $containerName\n-PartitionKeyKind Hash\n-PartitionKeyPath $partitionKeyPath\n-AutoscaleMaxThroughput $autoscaleMaxThroughput\nYou create the following queries that target the container:\nSELECT * FROM c WHERE c.EmployeeId > '12345'\nSELECT * FROM c WHERE c.UserID = '12345'\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: ETag (Entity Tag) is an HTTP header that represents a unique identifier for a version of the resource, If-match, You need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.",
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
    id: 173,
    number: 35,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are developing a web application that makes calls to the Microsoft Graph API. You register the application in the Azure portal and upload a\nvalid X509 certicate.\nYou create an appsettings.json le containing the certicate name, client identier for the application, and the tenant identier of the Azure Active\nDirectory (Azure\nAD). You create a method named ReadCerticate to return the X509 certicate by name.\nYou need to implement code that acquires a token by using the certicate.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: DeleteSnapshotOption, OnlySnapshots, Same scene as 31",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "appsettings.json"
      },
      {
        id: "O2",
        text: "scopes"
      },
      {
        id: "O3",
        text: "config"
      },
      {
        id: "O4",
        text: "AcrPull"
      },
      {
        id: "O5",
        text: "AcrPush"
      },
      {
        id: "O6",
        text: "Contributor"
      },
      {
        id: "O7",
        text: "app"
      },
      {
        id: "O8",
        text: "Owner"
      },
      {
        id: "O9",
        text: "var app = = .Create(config.Clientld)"
      },
      {
        id: "O10",
        text: "DeleteSnapshotOption"
      },
      {
        id: "O11",
        text: "OnlySnapshots"
      },
      {
        id: "O12",
        text: "Same scene as 31"
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
    id: 174,
    number: 36,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou develop a containerized application. You plan to deploy the application to a new Azure Container instance by using a third-party continuous\nintegration and continuous delivery (CI/CD) utility.\nThe deployment must be unattended and include all application assets. The third-party utility must only be able to push and pull images from the\nregistry. The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege.\nYou need to ensure that the third-party utility can access the registry.\nWhich authentication options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: delete_blob= (delete_snapshots = Only), need to process each change made to the storage account, changeFeedClient.GetChanges(x).AsPages()",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "appsettings.json"
      },
      {
        id: "O2",
        text: "scopes"
      },
      {
        id: "O3",
        text: "config"
      },
      {
        id: "O4",
        text: "AcrPull"
      },
      {
        id: "O5",
        text: "AcrPush"
      },
      {
        id: "O6",
        text: "Contributor"
      },
      {
        id: "O7",
        text: "app"
      },
      {
        id: "O8",
        text: "Owner"
      },
      {
        id: "O9",
        text: "var app = = .Create(config.Clientld)"
      },
      {
        id: "O10",
        text: "delete_blob= (delete_snapshots = Only)"
      },
      {
        id: "O11",
        text: "need to process each change made to the storage account"
      },
      {
        id: "O12",
        text: "changeFeedClient.GetChanges(x).AsPages()"
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
    id: 175,
    number: 37,
    topic: "Topic 4",
    prompt: "You deploy an Azure App Service web app. You create an app registration for the app in Azure Active Directory (Azure AD) and Twitter.\nThe app must authenticate users and must use SSL for all communications. The app must use Twitter as the identity provider.\nYou need to validate the Azure AD request in the app code.\nWhat should you validate?",
    keySource: "source",
    explanation: "Source answer: c.ContinuationToken",
    type: "single",
    options: [
      {
        id: "A",
        text: "ID token header"
      },
      {
        id: "B",
        text: "ID token signature"
      },
      {
        id: "C",
        text: "HTTP response code"
      },
      {
        id: "D",
        text: "Tenant ID"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 176,
    number: 38,
    topic: "Topic 4",
    prompt: "A development team is creating a new REST API. The API will store data in Azure Blob storage. You plan to deploy the API to Azure App Service.\nDevelopers must access the Azure Blob storage account to develop the API for the next two months. The Azure Blob storage account must not be\naccessible by the developers after the two-month time period.\nYou need to grant developers access to the Azure Blob storage account.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: application that sells AI generated images based on user input",
    type: "single",
    options: [
      {
        id: "A",
        text: "Generate a shared access signature (SAS) for the Azure Blob storage account and provide the SAS to all developers."
      },
      {
        id: "B",
        text: "Create and apply a new lifecycle management policy to include a last accessed date value. Apply the policy to the Azure Blob storage account."
      },
      {
        id: "C",
        text: "Provide all developers with the access key for the Azure Blob storage account. Update the API to include the Coordinated Universal Time (UTC) timestamp for the request header."
      },
      {
        id: "D",
        text: "Grant all developers access to the Azure Blob storage account by assigning role-based access control (RBAC) roles."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 177,
    number: 39,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou develop a web application.\nYou need to register the application with an active Azure Active Directory (Azure AD) tenant.\nWhich three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in\nthe correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Count(c.whenFinished) ( Date not a number, can’t sum it), DatetimeBin(c.whenFinished, ‘day’,2)",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a new application and provide the Q) Q)"
      },
      {
        id: "O2",
        text: "resource."
      },
      {
        id: "O3",
        text: "application."
      },
      {
        id: "O4",
        text: "registration."
      },
      {
        id: "O5",
        text: "In Azure AD, create a new conditional access policy."
      },
      {
        id: "O6",
        text: "In Azure AD conditional access, enable the baseline policy."
      },
      {
        id: "O7",
        text: "Count(c.whenFinished) ( Date not a number"
      },
      {
        id: "O8",
        text: "can’t sum it)"
      },
      {
        id: "O9",
        text: "DatetimeBin(c.whenFinished"
      },
      {
        id: "O10",
        text: "‘day’"
      },
      {
        id: "O11",
        text: "2)"
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
      "t4:O10",
      "t5:O11"
    ]
  },
  {
    id: 178,
    number: 40,
    topic: "Topic 4",
    prompt: "You have a new Azure subscription. You are developing an internal website for employees to view sensitive data. The website uses Azure Active\nDirectory (Azure\nAD) for authentication.\nYou need to implement multifactor authentication for the website.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: DateTimeBin(c.whenFinished, ‘day’,2)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Congure the website to use Azure AD B2C."
      },
      {
        id: "B",
        text: "In Azure AD, create a new conditional access policy."
      },
      {
        id: "C",
        text: "Upgrade to Azure AD Premium."
      },
      {
        id: "D",
        text: "In Azure AD, enable application proxy."
      },
      {
        id: "E",
        text: "In Azure AD conditional access, enable the baseline policy."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 179,
    number: 41,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nAn organization plans to deploy Azure storage services.\nYou need to congure shared access signature (SAS) for granting access to Azure Storage.\nWhich SAS types should you use? To answer, drag the appropriate SAS types to the correct requirements. Each SAS type may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: A large batch of documents continues to fail when reading one of the documents in the batch., Change feed estimator, Dead-letter queue",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "User delegation Delegate access to a resource in a single storage i"
      },
      {
        id: "O2",
        text: "ervice-leve storage services amma"
      },
      {
        id: "O3",
        text: "A large batch of documents continues to fail when reading one of the documents in the batch."
      },
      {
        id: "O4",
        text: "Change feed estimator"
      },
      {
        id: "O5",
        text: "Dead-letter queue"
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
    id: 180,
    number: 42,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are developing an ASP.NET Core app that includes feature ags which are managed by Azure App Conguration. You create an Azure App\nConguration store named AppFeatureagStore as shown in the exhibit:\nYou must be able to use the feature in the app by using the following markup:\nYou need to update the app to use the feature ag.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: store business-critical data in Azure Blob storage, A - Configure a time-based retention policy for the storage account, A time-based retention policy stores blob data in a Write-Once, Read-Many (WORM) format for a specified interval. When a time-based retention policy is set, clients can create and read blobs, but can't modify or delete them. After the retention interval has expired, blobs can be deleted but not overwritten.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "TypeFilter"
      },
      {
        id: "O2",
        text: "FeatureGate"
      },
      {
        id: "O3",
        text: "ServiceFilter"
      },
      {
        id: "O4",
        text: "AddUserSecrets"
      },
      {
        id: "O5",
        text: "Route"
      },
      {
        id: "O6",
        text: "store business-critical data in Azure Blob storage"
      },
      {
        id: "O7",
        text: "Configure a time-based retention policy for the storage account"
      },
      {
        id: "O8",
        text: "A time-based retention policy stores blob data in a Write-Once"
      },
      {
        id: "O9",
        text: "Read-Many (WORM) format for a specified interval. When a time-based retention policy is set"
      },
      {
        id: "O10",
        text: "clients can create"
      },
      {
        id: "O11",
        text: "read blobs"
      },
      {
        id: "O12",
        text: "but can't modify or delete them. After the retention interval has expired"
      },
      {
        id: "O13",
        text: "blobs can be deleted but not overwritten."
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
      }
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O8",
      "t4:O9",
      "t5:O10",
      "t6:O11",
      "t7:O12",
      "t8:O13"
    ]
  },
  {
    id: 181,
    number: 43,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have a single page application (SPA) web application that manages information based on data returned by Microsoft Graph from another\ncompany's Azure\nActive Directory (Azure AD) instance.\nUsers must be able to authenticate and access Microsoft Graph by using their own company's Azure AD instance.\nYou need to congure the application manifest for the app registration.\nHow should you complete the manifest? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: D - Enable version-level immutability support for the storage account., Before you can apply a time-based retention policy to a blob version, you must enable support for version-level immutability., updating an application that stores data on Azure and uses Azure Cosmos DB for storage",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "AzureADMyOrg"
      },
      {
        id: "O2",
        text: "AzureADMultipleOrgs"
      },
      {
        id: "O3",
        text: "User Delegation SAS"
      },
      {
        id: "O4",
        text: "AzureADandPersonalMicrosoftAccount"
      },
      {
        id: "O5",
        text: "resourceAppId"
      },
      {
        id: "O6",
        text: "orgRestrictions"
      },
      {
        id: "O7",
        text: "Service SAS with a stored access policy"
      },
      {
        id: "O8",
        text: "type"
      },
      {
        id: "O9",
        text: "Scope"
      },
      {
        id: "O10",
        text: "Enable version-level immutability support for the storage account."
      },
      {
        id: "O11",
        text: "Before you can apply a time-based retention policy to a blob version"
      },
      {
        id: "O12",
        text: "you must enable support for version-level immutability."
      },
      {
        id: "O13",
        text: "updating an application that stores data on Azure"
      },
      {
        id: "O14",
        text: "uses Azure Cosmos DB for storage"
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
      "t1:O10",
      "t2:O11",
      "t3:O12",
      "t4:O13",
      "t5:O14"
    ]
  },
  {
    id: 182,
    number: 44,
    topic: "Topic 4",
    prompt: "You manage a data processing application that receives requests from an Azure Storage queue.\nYou need to manage access to the queue. You have the following requirements:\n✑ Provide other applications access to the Azure queue.\n✑ Ensure that you can revoke access to the queue without having to regenerate the storage account keys.\n✑ Specify access at the queue level and not at the storage account level.\nWhich type of shared access signature (SAS) should you use?",
    keySource: "source",
    explanation: "Source answer: Create an unsharded collection to store documents. This will ensure that all documents are stored in the same logical partition.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Service SAS with a stored access policy"
      },
      {
        id: "B",
        text: "Account SAS"
      },
      {
        id: "C",
        text: "User Delegation SAS"
      },
      {
        id: "D",
        text: "Service SAS with ad hoc SAS"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 183,
    number: 45,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are developing an application to store and retrieve data in Azure Blob storage. The application will be hosted in an on-premises virtual\nmachine (VM). The\nVM is connected to Azure by using a Site-to-Site VPN gateway connection. The application is secured by using Azure Active Directory (Azure AD)\ncredentials.\nThe application must be granted access to the Azure Blob storage account with a start time, expiry time, and read permissions. The Azure Blob\nstorage account access must use the Azure AD credentials of the application to secure data access. Data access must be able to be revoked if\nthe client application security is breached.\nYou need to secure the application access to Azure Blob storage.\nWhich security features should you use? To answer select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Configure Azure Cosmos DB to use the MongoDB API. The MongoDB API supports multi-document ACID transactions, which allow you to update multiple documents in a single atomic operation.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "User-assigned Managed Identity"
      },
      {
        id: "O2",
        text: "Stored Access Policy"
      },
      {
        id: "O3",
        text: "Storage Account Access Key"
      },
      {
        id: "O4",
        text: "aud"
      },
      {
        id: "O5",
        text: "oid"
      },
      {
        id: "O6",
        text: "nonce"
      },
      {
        id: "O7",
        text: "D.idp"
      },
      {
        id: "O8",
        text: "Application (Client) | ~~ [¥]"
      },
      {
        id: "O9",
        text: "Configure Azure Cosmos DB to use the MongoDB API. The MongoDB API supports multi-document ACID transactions"
      },
      {
        id: "O10",
        text: "which allow you to update multiple documents in a single atomic operation."
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
      "t1:O9",
      "t2:O10"
    ]
  },
  {
    id: 184,
    number: 46,
    topic: "Topic 4",
    prompt: "You are building a web application that uses the Microsoft identity platform for user authentication.\nYou are implementing user identication for the web application.\nYou need to retrieve a claim to uniquely identify a user.\nWhich claim type should you use?",
    keySource: "source",
    explanation: "Source answer: No-SQL globally-distributed database",
    type: "single",
    options: [
      {
        id: "A",
        text: "aud"
      },
      {
        id: "B",
        text: "nonce"
      },
      {
        id: "C",
        text: "oid"
      },
      {
        id: "D",
        text: "idp"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 185,
    number: 47,
    topic: "Topic 4",
    prompt: "You are developing an Azure Function that calls external APIs by providing an access token for the API. The access token is stored in a secret\nnamed token in an\nAzure Key Vault named mykeyvault.\nYou need to ensure the Azure Function can access to the token. Which value should you store in the Azure Function App conguration?",
    keySource: "source",
    explanation: "Source answer: client = CosmosClient(endpoint, key) (Only .NET answer)",
    type: "single",
    options: [
      {
        id: "A",
        text: "KeyVault:mykeyvault;Secret:token"
      },
      {
        id: "B",
        text: "App:Settings:Secret:mykeyvault:token"
      },
      {
        id: "C",
        text: "AZUREKVCONNSTR_ https://mykeyveult.vault.ezure.net/secrets/token/"
      },
      {
        id: "D",
        text: "@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 186,
    number: 48,
    topic: "Topic 4",
    prompt: "A company maintains multiple web and mobile applications. Each application uses custom in-house identity providers as well as social identity\nproviders.\nYou need to implement single sign-on (SSO) for all the applications.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: web application that provides access to legal documents that are stored on Azure Blob Storage with version-level immutability policies.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use Azure Active Directory B2C (Azure AD B2C) with custom policies."
      },
      {
        id: "B",
        text: "Use Azure Active Directory B2B (Azure AD B2B) and enable external collaboration."
      },
      {
        id: "C",
        text: "Use Azure Active Directory B2C (Azure AD B2C) with user ows."
      },
      {
        id: "D",
        text: "Use Azure Active Directory B2B (Azure AD B2B)."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 187,
    number: 49,
    topic: "Topic 4",
    prompt: "You develop a Python application for image rendering that uses GPU resources to optimize rendering processes. You deploy the application to an\nAzure\nContainer Instances (ACI) Linux container.\nThe application requires a secret value to be passed when the container is started. The value must only be accessed from within the container.\nYou need to pass the secret value.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: deleting documents",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an environment variable Set the secureValue property to the secret value."
      },
      {
        id: "B",
        text: "Add the secret value to the container image. Use a managed identity."
      },
      {
        id: "C",
        text: "Add the secret value to the application code Set the container startup command."
      },
      {
        id: "D",
        text: "Add the secret value to an Azure Blob storage account. Generate a SAS token."
      },
      {
        id: "E",
        text: "Mount a secret volume containing the secret value in a secrets le."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 188,
    number: 50,
    topic: "Topic 4",
    prompt: "You are developing a user portal for a company.\nYou need to create a report for the portal that lists information about employees who are subject matter experts for a specic topic. You must\nensure that administrators have full control and consent over the data.\nWhich technology should you use?",
    keySource: "source",
    explanation: "Source answer: overwriting existing documents",
    type: "single",
    options: [
      {
        id: "A",
        text: "Microsoft Graph data connect"
      },
      {
        id: "B",
        text: "Microsoft Graph API"
      },
      {
        id: "C",
        text: "Microsoft Graph connectors"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 189,
    number: 51,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are a developer building a web site using a web app. The web site stores conguration data in Azure App Conguration.\nAccess to Azure App Conguration has been congured to use the identity of the web app for authentication. Security requirements specify that\nno other authentication systems must be used.\nYou need to load conguration data from Azure App Conguration.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Azure Cosmos DB for NoSQL account named account1 with the default consistency level., Consistent Prefix, Session",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "AddAzureKeyVault"
      },
      {
        id: "O2",
        text: "Host .CreateDefaultBuilder(args)"
      },
      {
        id: "O3",
        text: "BH"
      },
      {
        id: "O4",
        text: "Azure Cosmos DB for NoSQL account named account1 with the default consistency level."
      },
      {
        id: "O5",
        text: "Consistent Prefix"
      },
      {
        id: "O6",
        text: "Session"
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
    id: 190,
    number: 52,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are building an application that stores sensitive customer data in Azure Blob storage. The data must be encrypted with a key that is unique for\neach customer.\nIf the encryption key has been corrupted it must not be used for encryption.\nYou need to ensure that the blob is encrypted.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: blob storage container named companyimages contained in an Azure blob storage account named companymedia., Companymedia, CompanyImages",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Version"
      },
      {
        id: "O2",
        text: "Transport"
      },
      {
        id: "O3",
        text: "EncryptionScope"
      },
      {
        id: "O4",
        text: "CustomerProvidedKey"
      },
      {
        id: "O5",
        text: "bs"
      },
      {
        id: "O6",
        text: "blob storage container named companyimages contained in an Azure blob storage account named companymedia."
      },
      {
        id: "O7",
        text: "Companymedia"
      },
      {
        id: "O8",
        text: "CompanyImages"
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
    id: 191,
    number: 53,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou are developing a web application that uses the Microsoft Identity platform for user and resource authentication. The web application called\nseveral REST APIs.\nYou are implementing various authentication and authorization ows for the web application.\nYou need to validate the claims in the authentication token.\nWhich token type should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Status=’Final’, You develop two Python scripts to process data., Azure file share",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Refresh"
      },
      {
        id: "O2",
        text: "ID"
      },
      {
        id: "O3",
        text: "SAML"
      },
      {
        id: "O4",
        text: "Status=’Final’"
      },
      {
        id: "O5",
        text: "You develop two Python scripts to process data."
      },
      {
        id: "O6",
        text: "Azure file share"
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
    id: 192,
    number: 54,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou are developing a content management application for technical manuals. The application is deployed as an Azure Static Web app.\nAuthenticated users can view pages under/manuals but only contributors can access the page /manuals/new.html.\nYou need to congure the routing for the web app.\nHow should you complete the conguration? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Never, The website must support the following requirements:Custom domain nameCustom header values for all responsesCustom SSL certificate, Azure Content Delivery Network (CDN)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "routes"
      },
      {
        id: "O2",
        text: "contributors"
      },
      {
        id: "O3",
        text: "authenticated"
      },
      {
        id: "O4",
        text: "br"
      },
      {
        id: "O5",
        text: "route"
      },
      {
        id: "O6",
        text: "Never"
      },
      {
        id: "O7",
        text: "The website must support the following requirements:Custom domain nameCustom header values for all responsesCustom SSL certificate"
      },
      {
        id: "O8",
        text: "Azure Content Delivery Network (CDN)"
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
    id: 193,
    number: 55,
    topic: "Topic 4",
    prompt: "You are developing a web application that uses the Microsoft identity platform for user and resource authentication. The web application calls\nseveral REST APIs.\nA REST API call must read the user’s calendar. The web application requires permission to send an email as the user.\nYou need to authorize the web application and the API.\nWhich parameter should you use?",
    keySource: "source",
    explanation: "Source answer: CDN",
    type: "single",
    options: [
      {
        id: "A",
        text: "tenant"
      },
      {
        id: "B",
        text: "code_challenge"
      },
      {
        id: "C",
        text: "state"
      },
      {
        id: "D",
        text: "client_id"
      },
      {
        id: "E",
        text: "scope"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 194,
    number: 56,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou develop and deploy a web app to Azure App service. The web app allows users to authenticate by using social identity providers through the\nAzure B2C service. All user prole information is stored in Azure B2C.\nYou must update the web app to display common user properties from Azure B2C to include the following information:\n• Email address\n• Job title\n• First name\n• Last name\n• Oce location\nYou need to implement the user properties in the web app.\nWhich code library and API should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CDN, You are developing an inventory tracking solution., D – strong consistency",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure AD Graph"
      },
      {
        id: "O2",
        text: "Azure Key Vault"
      },
      {
        id: "O3",
        text: "Azure Identity libra"
      },
      {
        id: "O4",
        text: "Azure AD entitlement management"
      },
      {
        id: "O5",
        text: "Azure B2C service. All user profile information is stored in Azure B2C."
      },
      {
        id: "O6",
        text: "tenant"
      },
      {
        id: "O7",
        text: "client_id"
      },
      {
        id: "O8",
        text: "code_challenge"
      },
      {
        id: "O9",
        text: "state"
      },
      {
        id: "O10",
        text: "scope"
      },
      {
        id: "O11",
        text: "CDN"
      },
      {
        id: "O12",
        text: "You are developing an inventory tracking solution."
      },
      {
        id: "O13",
        text: "strong consistency"
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
      "t1:O11",
      "t2:O12",
      "t3:O13"
    ]
  },
  {
    id: 195,
    number: 57,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou develop and deploy the following staticwebapp.cong.json le to the app_location value specied in the workow le of an Azure Static Web\napp:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You need to configure blob storage.How should you complete the YAML configuration? To answer, select the appropriate options in the answer area., StorageClass, Azure-disk",
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
    id: 196,
    number: 58,
    topic: "Topic 4",
    prompt: "You develop and deploy an Azure App Service web app named App1. You create a new Azure Key Vault named Vault1. You import several API\nkeys, passwords, certicates, and cryptographic keys into Vault1.\nYou need to grant App1 access to Vault1 and automatically rotate credentials. Credentials must not be stored in code.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Retain",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable App Service authentication for Appl. Assign a custom RBAC role to Vault1."
      },
      {
        id: "B",
        text: "Add a TLS/SSL binding to App1."
      },
      {
        id: "C",
        text: "Upload a self-signed client certicate to Vault1. Update App1 to use the client certicate."
      },
      {
        id: "D",
        text: "Assign a managed identity to App1."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 197,
    number: 59,
    topic: "Topic 4",
    prompt: "You are developing a Java application to be deployed in Azure. The application stores sensitive data in Azure Cosmos DB.\nYou need to congure Always Encrypted to encrypt the sensitive data inside the application.\nWhat should you do rst?",
    keySource: "source",
    explanation: "Source answer: VanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a new container to include an encryption policy with the JSON properties to be encrypted."
      },
      {
        id: "B",
        text: "Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance."
      },
      {
        id: "C",
        text: "Create a data encryption key (DEK) by using the Azure Cosmos DB SDK and store the key in Azure Cosmos DB."
      },
      {
        id: "D",
        text: "Create an Azure AD managed identity and assign the identity to a new Azure Key Vault instance."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 198,
    number: 60,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou develop a web app that interacts with Azure Active Directory (Azure AD) groups by using Microsoft Graph.\nYou build a web page that shows all Azure AD groups that are not of the type 'Unied'.\nYou need to build the Microsoft Graph query for the page.\nHow should you complete the query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Core (SQL), Item id, You need to configure authentication and authorization.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "groupTypes/contains('Unified') eq false"
      },
      {
        id: "O2",
        text: "secret"
      },
      {
        id: "O3",
        text: "CloudClients"
      },
      {
        id: "O4",
        text: "Core (SQL)"
      },
      {
        id: "O5",
        text: "Item id"
      },
      {
        id: "O6",
        text: "You need to configure authentication"
      },
      {
        id: "O7",
        text: "authorization."
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
    id: 199,
    number: 61,
    topic: "Topic 4",
    prompt: "DRAG DROP\n-\nYou are developing an Azure solution.\nYou need to develop code to access a secret stored in Azure Key Vault.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: A – Add an identity provider, change feed functionality to track changes to containers. App1 will use the pull model and App2 will use the push model., Continuation token",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "groupTypes/contains('Unified') eq false"
      },
      {
        id: "O2",
        text: "secret"
      },
      {
        id: "O3",
        text: "CloudClients"
      },
      {
        id: "O4",
        text: "Add an identity provider"
      },
      {
        id: "O5",
        text: "change feed functionality to track changes to containers. App1 will use the pull model"
      },
      {
        id: "O6",
        text: "App2 will use the push model."
      },
      {
        id: "O7",
        text: "Continuation token"
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
    id: 200,
    number: 62,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou are a developer building a web site using a web app. The web site stores conguration data in Azure App Conguration.\nAccess to Azure App Conguration has been congured to use the identity of the web app for authentication. Security requirements specify that\nno other authentication systems must be used.\nYou need to load conguration data from Azure App Conguration.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Lease container, You need to configure the console application to access the images., Azure BlobFuse",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "from azure.identity import v"
      },
      {
        id: "O2",
        text: "from azure.app configuration import v"
      },
      {
        id: "O3",
        text: "client = ¥ | (base_url=\"..\", credential=credential)"
      },
      {
        id: "O4",
        text: "Lease container"
      },
      {
        id: "O5",
        text: "You need to configure the console application to access the images."
      },
      {
        id: "O6",
        text: "Azure BlobFuse"
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
    id: 201,
    number: 63,
    topic: "Topic 4",
    prompt: "You are developing several microservices to deploy to a new Azure Kubernetes Service cluster. The microservices manage data stored in Azure\nCosmos DB and Azure Blob storage. The data is secured by using customer-managed keys stored in Azure Key Vault.\nYou must automate key rotation for all Azure Key Vault keys and allow for manual key rotation. Keys must rotate every three months. Notications\nof expiring keys must be sent before key expiry.\nYou need to congure key rotation and enable key expiry notications.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You are developing several microservices named serviceA, serviceB, and serviceC. You deploy the microservices to a new Azure Container Apps environment.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create and congure a new Azure Event Grid instance."
      },
      {
        id: "B",
        text: "Congure Azure Key Vault alerts."
      },
      {
        id: "C",
        text: "Create and assign an Azure Key Vault access policy."
      },
      {
        id: "D",
        text: "Create and congure a key rotation policy during key creation."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 202,
    number: 64,
    topic: "Topic 4",
    prompt: "You are developing a web application that uses the Microsoft identity platform to authenticate users and resources. The web application calls\nseveral REST APIs.\nThe APIs require an access token from the Microsoft identity platform.\nYou need to request a token.\nWhich three properties should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Container file system",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Redirect URI/URL"
      },
      {
        id: "B",
        text: "Application ID"
      },
      {
        id: "C",
        text: "Application name"
      },
      {
        id: "D",
        text: "Application secret"
      },
      {
        id: "E",
        text: "Supported account type"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 203,
    number: 65,
    topic: "Topic 4",
    prompt: "HOTSPOT\n-\nYou are developing an application that uses Azure Storage to store customer data. The data must only be decrypted by the customer and the\ncustomer must be provided a script to rotate keys.\nYou need to provide a script to rotate keys to the customer.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Ephemeral volume, Azure File storage, DocumentDB Accounts Contributor",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az storage account update"
      },
      {
        id: "O2",
        text: "secret"
      },
      {
        id: "O3",
        text: "recover"
      },
      {
        id: "O4",
        text: "certificate"
      },
      {
        id: "O5",
        text: "Microsoft.Secret"
      },
      {
        id: "O6",
        text: "properties.hsmUri"
      },
      {
        id: "O7",
        text: "Microsoft Storage"
      },
      {
        id: "O8",
        text: "Microsoft.Certificate"
      },
      {
        id: "O9",
        text: "customer must be provided a script to rotate keys."
      },
      {
        id: "O10",
        text: "Configure and apply a new backend policy scoped to global."
      },
      {
        id: "O11",
        text: "Configure and apply a new outbound policy scoped to global."
      },
      {
        id: "O12",
        text: "Configure and apply a new inbound policy scoped to a product."
      },
      {
        id: "O13",
        text: "Configure and apply a new outbound policy scoped to the operation."
      },
      {
        id: "O14",
        text: "key"
      },
      {
        id: "O15",
        text: "Ephemeral volume"
      },
      {
        id: "O16",
        text: "Azure File storage"
      },
      {
        id: "O17",
        text: "DocumentDB Accounts Contributor"
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
      "t1:O15",
      "t2:O16",
      "t3:O17"
    ]
  },
  {
    id: 204,
    number: 66,
    topic: "Topic 4",
    prompt: "You are developing several Azure API Management (APIM) hosted APIs.\nYou must transform the APIs to hide private backend information and obscure the technology stack used to implement the backend processing.\nYou need to protect all APIs.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Which role-based access control should you use?",
    type: "single",
    options: [
      {
        id: "A",
        text: "Congure and apply a new inbound policy scoped to a product."
      },
      {
        id: "B",
        text: "Congure and apply a new outbound policy scoped to the operation."
      },
      {
        id: "C",
        text: "Congure and apply a new outbound policy scoped to global."
      },
      {
        id: "D",
        text: "Congure and apply a new backend policy scoped to global."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 205,
    number: 1,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou develop a web app that uses the tier D1 app service plan by using the Web Apps feature of Microsoft Azure App Service.\nSpikes in trac have caused increases in page load times.\nYou need to ensure that the web app automatically scales when CPU load is about 85 percent and minimize costs.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: DocumentDB Account Contributor: Can manage Azure Cosmos DB accounts. Cosmos Backup Operator: Can submit a restore request for Azure portal for a periodic backup enabled database or a container. Can modify the backup interval and retention on the Azure portal. Cannot access any data or use Data Explorer., Cosmos DB Operator: Can provision Azure Cosmos accounts, databases, and containers. Cannot access any data or use Data Explorer.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Premium App Service tier."
      },
      {
        id: "O2",
        text: "Enable autoscaling on the"
      },
      {
        id: "O3",
        text: "Standard App Service tier."
      },
      {
        id: "O4",
        text: "output."
      },
      {
        id: "O5",
        text: "Services consumption plan."
      },
      {
        id: "O6",
        text: "c= Save full HTTP responses for concurrent requests."
      },
      {
        id: "O7",
        text: "DocumentDB Account Contributor: Can manage Azure Cosmos DB accounts. Cosmos Backup Operator: Can submit a restore request for Azure portal for a periodic backup enabled database or a container. Can modify the backup interval"
      },
      {
        id: "O8",
        text: "retention on the Azure portal. Cannot access any data or use Data Explorer."
      },
      {
        id: "O9",
        text: "Cosmos DB Operator: Can provision Azure Cosmos accounts"
      },
      {
        id: "O10",
        text: "databases"
      },
      {
        id: "O11",
        text: "containers. Cannot access any data or use Data Explorer."
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
      "t4:O10",
      "t5:O11"
    ]
  },
  {
    id: 206,
    number: 2,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.\nDetermine whether the solution meets the stated goals.\nYou are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML\noutput.\nYou must use a storage mechanism with the following requirements:\n✑ Share session state across all ASP.NET web applications.\n✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.\n✑ Save full HTTP responses for concurrent requests.\nYou need to store the information.\nProposed Solution: Enable Application Request Routing (ARR).\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Cosmos DB Account Reader: Can read Azure Cosmos DB account data.",
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
    id: 207,
    number: 3,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.\nDetermine whether the solution meets the stated goals.\nYou are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML\noutput.\nYou must use a storage mechanism with the following requirements:\n✑ Share session state across all ASP.NET web applications.\n✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.\n✑ Save full HTTP responses for concurrent requests.\nYou need to store the information.\nProposed Solution: Deploy and congure an Azure Database for PostgreSQL. Update the web applications.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: CosmosRestoreOperator: Can perform restore action for Azure Cosmos DB account with continuous backup mode.",
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
    id: 208,
    number: 4,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nA company is developing a gaming platform. Users can join teams to play online and see leaderboards that include player statistics. The solution\nincludes an entity named Team.\nYou plan to implement an Azure Redis Cache instance to improve the eciency of data operations for entities that rarely change.\nYou need to invalidate the cache when team data is changed.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Configure the Azure Web App for the website to allow only authenticated requests and require Azure AD log on.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Team"
      },
      {
        id: "O2",
        text: "Configure the Azure Web App for the website to allow only authenticated requests"
      },
      {
        id: "O3",
        text: "require Azure AD log on."
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
    id: 209,
    number: 5,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nA company has multiple warehouses. Each warehouse contains IoT temperature devices which deliver temperature data to an Azure Service Bus\nqueue.\nYou need to send email alerts to facility supervisors immediately if the temperature at a warehouse goes above or below specied threshold\ntemperatures.\nWhich ve actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: NO, ✑ Create a new Azure AD application. In the application's manifest, set value of the groupMembershipClaims option to All.✑ In the website, use the value of the groups claim from the JWT for the user to determine permissions.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a blank Logic app."
      },
      {
        id: "O2",
        text: "thresholds."
      },
      {
        id: "O3",
        text: "user's decision to purchase a product? Co"
      },
      {
        id: "O4",
        text: "NO"
      },
      {
        id: "O5",
        text: "✑ Create a new Azure AD application. In the application's manifest"
      },
      {
        id: "O6",
        text: "set value of the groupMembershipClaims option to All.✑ In the website"
      },
      {
        id: "O7",
        text: "use the value of the groups claim from the JWT for the user to determine permissions."
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
    id: 210,
    number: 6,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou develop an ASP.NET Core MVC application. You congure the application to track webpages and custom events.\nYou need to identify trends in application usage.\nWhich Azure Application Insights Usage Analysis features should you use? To answer, drag the appropriate features to the correct requirements.\nEach feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: YES, ✑ Create a new Azure AD application. In the application's manifest, define application roles that match the required permission levels for the application.✑ Assign the appropriate Azure AD group to each role. In the website, use the value of the roles claim from the JWT for the user to determine permissions.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create a blank Logic app."
      },
      {
        id: "O2",
        text: "thresholds."
      },
      {
        id: "O3",
        text: "user's decision to purchase a product? Co"
      },
      {
        id: "O4",
        text: "YES"
      },
      {
        id: "O5",
        text: "✑ Create a new Azure AD application. In the application's manifest"
      },
      {
        id: "O6",
        text: "define application roles that match the required permission levels for the application.✑ Assign the appropriate Azure AD group to each role. In the website"
      },
      {
        id: "O7",
        text: "use the value of the roles claim from the JWT for the user to determine permissions."
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
    id: 211,
    number: 7,
    topic: "Topic 5",
    prompt: "You develop a gateway solution for a public facing news API. The news API back end is implemented as a RESTful service and uses an OpenAPI\nspecication.\nYou need to ensure that you can access the news API by using an Azure API Management service instance.\nWhich Azure PowerShell command should you run?",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "single",
    options: [
      {
        id: "A",
        text: "Import-AzureRmApiManagementApi -Context $ApiMgmtContext -SpecicationFormat \"Swagger\" -SpecicationPath $SwaggerPath -Path $Path"
      },
      {
        id: "B",
        text: "New-AzureRmApiManagementBackend -Context $ApiMgmtContext -Url $Url -Protocol http"
      },
      {
        id: "C",
        text: "New-AzureRmApiManagement -ResourceGroupName $ResourceGroup -Name $Name ג€\"Location $Location -Organization $Org - AdminEmail $AdminEmail"
      },
      {
        id: "D",
        text: "New-AzureRmApiManagementBackendProxy -Url $ApiUrl"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 212,
    number: 8,
    topic: "Topic 5",
    prompt: "You are creating a hazard notication system that has a single signaling server which triggers audio and visual alarms to start and stop.\nYou implement Azure Service Bus to publish alarms. Each alarm controller uses Azure Service Bus to receive alarm signals as part of a\ntransaction. Alarm events must be recorded for audit purposes. Each transaction record must include information about the alarm type that was\nactivated.\nYou need to implement a reply trail auditing solution.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You need to protect the key vault and key vault objects.Which Azure Key Vault feature should you use?",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Assign the value of the hazard message SessionID property to the ReplyToSessionId property."
      },
      {
        id: "B",
        text: "Assign the value of the hazard message MessageId property to the DevileryCount property."
      },
      {
        id: "C",
        text: "Assign the value of the hazard message SessionID property to the SequenceNumber property."
      },
      {
        id: "D",
        text: "Assign the value of the hazard message MessageId property to the CorrelationId property."
      },
      {
        id: "E",
        text: "Assign the value of the hazard message SequenceNumber property to the DeliveryCount property."
      },
      {
        id: "F",
        text: "Assign the value of the hazard message MessageId property to the SequenceNumber property."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 213,
    number: 9,
    topic: "Topic 5",
    prompt: "You are developing an Azure function that connects to an Azure SQL Database instance. The function is triggered by an Azure Storage queue.\nYou receive reports of numerous System.InvalidOperationExceptions with the following message:\n`Timeout expired. The timeout period elapsed prior to obtaining a connection from the pool. This may have occurred because all pooled\nconnections were in use and max pool size was reached.`\nYou need to prevent the exception.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Soft delete",
    type: "single",
    options: [
      {
        id: "A",
        text: "In the host.json le, decrease the value of the batchSize option"
      },
      {
        id: "B",
        text: "Convert the trigger to Azure Event Hub"
      },
      {
        id: "C",
        text: "Convert the Azure Function to the Premium plan"
      },
      {
        id: "D",
        text: "In the function.json le, change the value of the type option to queueScaling"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 214,
    number: 10,
    topic: "Topic 5",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.\nDetermine whether the solution meets the stated goals.\nYou are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML\noutput.\nYou must use a storage mechanism with the following requirements:\n✑ Share session state across all ASP.NET web applications.\n✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.\n✑ Save full HTTP responses for concurrent requests.\nYou need to store the information.\nProposed Solution: Deploy and congure Azure Cache for Redis. Update the web applications.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Purge protection",
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
    id: 215,
    number: 11,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYou are debugging an application that is running on Azure Kubernetes cluster named cluster1. The cluster uses Azure Monitor for containers to\nmonitor the cluster.\nThe application has sticky sessions enabled on the ingress controller.\nSome customers report a large number of errors in the application over the last 24 hours.\nYou need to determine on which virtual machines (VMs) the errors are occurring.\nHow should you complete the Azure Monitor query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You provide an Azure API Management managed web service to clients. The back-end web service implements HTTP Strict Transport Security (HSTS)., Basic Authentication, Certificate Authentication",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Cluster1"
      },
      {
        id: "O2",
        text: "ContainerLog"
      },
      {
        id: "O3",
        text: "You provide an Azure API Management managed web service to clients. The back-end web service implements HTTP Strict Transport Security (HSTS)."
      },
      {
        id: "O4",
        text: "Basic Authentication"
      },
      {
        id: "O5",
        text: "Certificate Authentication"
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
    id: 216,
    number: 12,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYou plan to deploy a web app to App Service on Linux. You create an App Service plan. You create and push a custom Docker image that contains\nthe web app to Azure Container Registry.\nYou need to access the console logs generated from inside the container in real-time.\nHow should you complete the Azure CLI command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You implement role-based access control (RBAC) role permissions on the containers that store photographs. You assign users to RBAC roles., User_impersonation, delegated, Delegated",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "az webapp log Ww name Contosoweb --resource-group ContosoDevRG"
      },
      {
        id: "O2",
        text: "config"
      },
      {
        id: "O3",
        text: "download"
      },
      {
        id: "O4",
        text: "integration"
      },
      {
        id: "O5",
        text: "az ¥ log W name ContosoWeb —resource-group ContosoDevRG"
      },
      {
        id: "O6",
        text: "show"
      },
      {
        id: "O7",
        text: "tail"
      },
      {
        id: "O8",
        text: "unit"
      },
      {
        id: "O9",
        text: "load"
      },
      {
        id: "O10",
        text: "You implement role-based access control (RBAC) role permissions on the containers that store photographs. You assign users to RBAC roles."
      },
      {
        id: "O11",
        text: "User_impersonation"
      },
      {
        id: "O12",
        text: "delegated"
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
      "t4:O12"
    ]
  },
  {
    id: 217,
    number: 13,
    topic: "Topic 5",
    prompt: "You develop and deploy an ASP.NET web app to Azure App Service. You use Application Insights telemetry to monitor the app.\nYou must test the app to ensure that the app is available and responsive from various points around the world and at regular intervals. If the app is\nnot responding, you must send an alert to support staff.\nYou need to congure a test for the web app.\nWhich two test types can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You need to update the app to meet the following requirements:✑ Use the Export feature in the app without requiring a restart of the app.✑ Validate users before users are allowed access to secure resources.✑ Permit users to access secure resources.",
    type: "single",
    options: [
      {
        id: "A",
        text: "integration"
      },
      {
        id: "B",
        text: "multi-step web"
      },
      {
        id: "C",
        text: "URL ping"
      },
      {
        id: "D",
        text: "unit"
      },
      {
        id: "E",
        text: "load"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 218,
    number: 14,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nA web service provides customer summary information for e-commerce partners. The web service is implemented as an Azure Function app with\nan HTTP trigger.\nAccess to the API is provided by an Azure API Management instance. The API Management instance is congured in consumption plan mode. All\nAPI calls are authenticated by using OAuth.\nAPI calls must be cached. Customers must not be able to view cached data for other customers.\nYou need to congure API Management policies for caching.\nHow should you complete the policy statement?\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: UseAuthentication, UseAuthorization, UseAzureAppConfiguration",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an Azure function to query the home page."
      },
      {
        id: "O2",
        text: "Create a multi-step web test to query the home page."
      },
      {
        id: "O3",
        text: "Create a Custom Track Availability Test to query the home page."
      },
      {
        id: "O4",
        text: "Set up a URL ping test to query the home page."
      },
      {
        id: "O5",
        text: "ess"
      },
      {
        id: "O6",
        text: "UseAuthentication"
      },
      {
        id: "O7",
        text: "UseAuthorization"
      },
      {
        id: "O8",
        text: "UseAzureAppConfiguration"
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
    id: 219,
    number: 15,
    topic: "Topic 5",
    prompt: "You are developing applications for a company. You plan to host the applications on Azure App Services.\nThe company has the following requirements:\n✑ Every ve minutes verify that the websites are responsive.\n✑ Verify that the websites respond within a specied time threshold. Dependent requests such as images and JavaScript les must load properly.\n✑ Generate alerts if a website is experiencing issues.\n✑ If a website fails to load, the system must attempt to reload the site three more times.\nYou need to implement this process with the least amount of effort.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: You need to design the approach to loading application secrets.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a Selenium web test and congure it to run from your workstation as a scheduled task."
      },
      {
        id: "B",
        text: "Set up a URL ping test to query the home page."
      },
      {
        id: "C",
        text: "Create an Azure function to query the home page."
      },
      {
        id: "D",
        text: "Create a multi-step web test to query the home page."
      },
      {
        id: "E",
        text: "Create a Custom Track Availability Test to query the home page."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 220,
    number: 16,
    topic: "Topic 5",
    prompt: "You develop and add several functions to an Azure Function app that uses the latest runtime host. The functions contain several REST API\nendpoints secured by using SSL. The Azure Function app runs in a Consumption plan.\nYou must send an alert when any of the function endpoints are unavailable or responding too slowly.\nYou need to monitor the availability and responsiveness of the functions.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Create a single user-assigned Managed Identity with permission to access Key Vault and configure each App Service to use that Managed Identity.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a URL ping test."
      },
      {
        id: "B",
        text: "Create a timer triggered function that calls TrackAvailability() and send the results to Application Insights."
      },
      {
        id: "C",
        text: "Create a timer triggered function that calls GetMetric(\"Request Size\") and send the results to Application Insights."
      },
      {
        id: "D",
        text: "Add a new diagnostic setting to the Azure Function app. Enable the FunctionAppLogs and Send to Log Analytics options."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 221,
    number: 17,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou are developing an application to retrieve user prole information. The application will use the Microsoft Graph SDK.\nThe app must retrieve user prole information by using a Microsoft Graph API call.\nYou need to call the Microsoft Graph API from the application.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: You need to store the intake forms according to the requirements.Solution:1. Create an Azure Key Vault key named skey.2. Encrypt the intake forms using the public key portion of skey.3. Store the encrypted data in Azure Blob storage., YES, You need to store the intake forms according to the requirements",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an authentication provider."
      },
      {
        id: "O2",
        text: "Create a new instance of the GraphServiceClient."
      },
      {
        id: "O3",
        text: "Build a client by using the client app ID."
      },
      {
        id: "O4",
        text: "You need to store the intake forms according to the requirements.Solution:1. Create an Azure Key Vault key named skey.2. Encrypt the intake forms using the public key portion of skey.3. Store the encrypted data in Azure Blob storage."
      },
      {
        id: "O5",
        text: "YES"
      },
      {
        id: "O6",
        text: "You need to store the intake forms according to the requirements"
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
    id: 222,
    number: 18,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou develop and deploy an Azure Logic App that calls an Azure Function app. The Azure Function App includes an OpenAPI (Swagger) denition\nand uses an\nAzure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).\nThe Logic App must use Azure Monitor logs to record and store information about runtime data and events. The logs must be stored in the Azure\nBlob storage account.\nYou need to set up Azure Monitor logs and collect diagnostics data for the Azure Logic App.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create an Azure Cosmos DB database with Storage Service Encryption enabled. Store the intake forms in the Azure Cosmos DB database., NO, You need to store the intake forms according to the requirements.Solution: Store the intake forms as Azure Key Vault secrets.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an Azure storage account."
      },
      {
        id: "O2",
        text: "Create a Log Analytics workspace."
      },
      {
        id: "O3",
        text: "Create action groups and alert rules."
      },
      {
        id: "O4",
        text: "Create an Application Insights resource."
      },
      {
        id: "O5",
        text: "Add a diagnostic setting to the Azure Function App. ® ©"
      },
      {
        id: "O6",
        text: "Create an Azure Cosmos DB database with Storage Service Encryption enabled. Store the intake forms in the Azure Cosmos DB database."
      },
      {
        id: "O7",
        text: "NO"
      },
      {
        id: "O8",
        text: "You need to store the intake forms according to the requirements.Solution: Store the intake forms as Azure Key Vault secrets."
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
    id: 223,
    number: 19,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou develop an application. You plan to host the application on a set of virtual machines (VMs) in Azure.\nYou need to congure Azure Monitor to collect logs from the application.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: NO, How should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area., Keyvault",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an Azure storage account."
      },
      {
        id: "O2",
        text: "Create a Log Analytics workspace."
      },
      {
        id: "O3",
        text: "Create action groups and alert rules."
      },
      {
        id: "O4",
        text: "Create an Application Insights resource."
      },
      {
        id: "O5",
        text: "Add a diagnostic setting to the Azure Function App. ® ©"
      },
      {
        id: "O6",
        text: "NO"
      },
      {
        id: "O7",
        text: "How should you complete the Azure CLI commands? To answer"
      },
      {
        id: "O8",
        text: "select the appropriate options in the answer area."
      },
      {
        id: "O9",
        text: "Keyvault"
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
    id: 224,
    number: 20,
    topic: "Topic 5",
    prompt: "You develop and deploy an Azure App Service web app. The app is deployed to multiple regions and uses Azure Trac Manager. Application\nInsights is enabled for the app.\nYou need to analyze app uptime for each month.\nWhich two solutions will achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Keyvault key",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Monitor logs"
      },
      {
        id: "B",
        text: "Application Insights alerts"
      },
      {
        id: "C",
        text: "Azure Monitor metrics"
      },
      {
        id: "D",
        text: "Application Insights web tests"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 225,
    number: 21,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nYou develop and deploy an Azure App Service web app. The web app accesses data in an Azure SQL database.\nYou must update the web app to store frequently used data in a new Azure Cache for Redis Premium instance.\nYou need to implement the Azure Cache for Redis features.\nWhich feature should you implement? To answer, drag the appropriate feature to the correct requirements. Each feature may be used once, more\nthan once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Vm, Vm encryption, All",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "set publisher/subscriber mechanism"
      },
      {
        id: "O2",
        text: "Telemetry.Id"
      },
      {
        id: "O3",
        text: "Telemetry.Name"
      },
      {
        id: "O4",
        text: "Vm"
      },
      {
        id: "O5",
        text: "Vm encryption"
      },
      {
        id: "O6",
        text: "All"
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
    id: 226,
    number: 22,
    topic: "Topic 5",
    prompt: "You are developing an ASP.NET Core Web API web service. The web service uses Azure Application Insights for all telemetry and dependency\ntracking. The web service reads and writes data to a database other than Microsoft SQL Server.\nYou need to ensure that dependency tracking works for calls to the third-party database.\nWhich two dependency telemetry properties should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: ✑ All API calls must be authenticated.✑ Callers to the API must not send credentials to the API.Which authentication mechanism should you use?",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Telemetry.Context.Cloud.RoleInstance"
      },
      {
        id: "B",
        text: "Telemetry.Id"
      },
      {
        id: "C",
        text: "Telemetry.Name"
      },
      {
        id: "D",
        text: "Telemetry.Context.Operation.Id"
      },
      {
        id: "E",
        text: "Telemetry.Context.Session.Id"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 227,
    number: 23,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYou are using Azure Front Door Service.\nYou are expecting inbound les to be compressed by using Brotli compression. You discover that inbound XML les are not compressed. The les\nare 9 megabytes (MB) in size.\nYou need to determine the root cause for the issue.\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Managed Identity, You are developing an application. You have an Azure user account that has access to two subscriptions, Get-AzSubscription",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Managed Identity"
      },
      {
        id: "O2",
        text: "You are developing an application. You have an Azure user account that has access to two subscriptions"
      },
      {
        id: "O3",
        text: "Get-AzSubscription"
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
    id: 228,
    number: 24,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYou are developing an Azure App Service hosted ASP.NET Core web app to deliver video-on-demand streaming media. You enable an Azure\nContent Delivery\nNetwork (CDN) Standard for the web endpoint. Customer videos are downloaded from the web app by using the following example URL:\nAll media content must expire from the cache after one hour. Customer videos with varying quality must be delivered to the closest regional point\nof presence\n(POP) node.\nYou need to congure Azure CDN caching rules.\nWhich options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Set-AzContext -SubscritopnId $subscriptionID, Get-AzStorageAccountKey, $secretvalue = ConvertTo-SecureString",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Setting Action"
      },
      {
        id: "O2",
        text: "Set if missing"
      },
      {
        id: "O3",
        text: "Override"
      },
      {
        id: "O4",
        text: "Set-AzContext -SubscritopnId $subscriptionID"
      },
      {
        id: "O5",
        text: "Get-AzStorageAccountKey"
      },
      {
        id: "O6",
        text: "$secretvalue = ConvertTo-SecureString"
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
    id: 229,
    number: 25,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYou are developing an ASP.NET Core time sheet application that runs as an Azure Web App. Users of the application enter their time sheet\ninformation on the rst day of every month.\nThe application uses a third-party web service to validate data.\nThe application encounters periodic server errors due to errors that result from calling a third-party web server. Each request to the third-party\nserver has the same chance of failure.\nYou need to congure an Azure Monitor alert to detect server errors unrelated to the third-party service. You must minimize false-positive alerts.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Get-AzKeyVaultSecret, Use an X.509 certificate to authenticate the VM with Azure Resource Manager.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Httpdxx"
      },
      {
        id: "O2",
        text: "HttpSxx"
      },
      {
        id: "O3",
        text: "properties"
      },
      {
        id: "O4",
        text: "metricName"
      },
      {
        id: "O5",
        text: "noeviction"
      },
      {
        id: "O6",
        text: "allkeys-Iru"
      },
      {
        id: "O7",
        text: "volatile-lru"
      },
      {
        id: "O8",
        text: "volatile-ttl"
      },
      {
        id: "O9",
        text: "allkeys-random"
      },
      {
        id: "O10",
        text: "volatile-random"
      },
      {
        id: "O11",
        text: "alertSensitivity"
      },
      {
        id: "O12",
        text: "Hl"
      },
      {
        id: "O13",
        text: "type"
      },
      {
        id: "O14",
        text: "High"
      },
      {
        id: "O15",
        text: "Get-AzKeyVaultSecret"
      },
      {
        id: "O16",
        text: "Use an X.509 certificate to authenticate the VM with Azure Resource Manager."
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
      "t1:O15",
      "t2:O16"
    ]
  },
  {
    id: 230,
    number: 26,
    topic: "Topic 5",
    prompt: "You are developing a web application that uses Azure Cache for Redis. You anticipate that the cache will frequently ll and that you will need to\nevict keys.\nYou must congure Azure Cache for Redis based on the following predicted usage pattern: A small subset of elements will be accessed much\nmore often than the rest.\nYou need to congure the Azure Cache for Redis to optimize performance for the predicted usage pattern.\nWhich two eviction policies will achieve the goal?\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: NO",
    type: "single",
    options: [
      {
        id: "A",
        text: "noeviction"
      },
      {
        id: "B",
        text: "allkeys-lru"
      },
      {
        id: "C",
        text: "volatile-lru"
      },
      {
        id: "D",
        text: "allkeys-random"
      },
      {
        id: "E",
        text: "volatile-ttl"
      },
      {
        id: "F",
        text: "volatile-random"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 231,
    number: 27,
    topic: "Topic 5",
    prompt: "DRAG DROP -\nAn organization has web apps hosted in Azure.\nThe organization wants to track events and telemetry data in the web apps by using Application Insights.\nYou need to congure the web apps for Application Insights.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Use the Reader role-based access control (RBAC) role to authenticate the VM with Azure Resource Manager., NO, You need to implement an Azure CDN rule that ensures that iPhone users are redirected to the app store.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create an Application Insights resource"
      },
      {
        id: "O2",
        text: "Create an Azure Machine Learning workspace"
      },
      {
        id: "O3",
        text: "Profiler"
      },
      {
        id: "O4",
        text: "AppServiceAppLogs"
      },
      {
        id: "O5",
        text: "AppServiceAuditLogs"
      },
      {
        id: "O6",
        text: "AppServiceConsoleLogs"
      },
      {
        id: "O7",
        text: "Use the Reader role-based access control (RBAC) role to authenticate the VM with Azure Resource Manager."
      },
      {
        id: "O8",
        text: "NO"
      },
      {
        id: "O9",
        text: "You need to implement an Azure CDN rule that ensures that iPhone users are redirected to the app store."
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
    id: 232,
    number: 28,
    topic: "Topic 5",
    prompt: "An organization hosts web apps in Azure. The organization uses Azure Monitor.\nYou discover that conguration changes were made to some of the web apps.\nYou need to identify the conguration changes.\nWhich Azure Monitor log should you review?",
    keySource: "source",
    explanation: "Source answer: DeliveryRuleDeviceConditionParameters",
    type: "single",
    options: [
      {
        id: "A",
        text: "AppServiceAppLogs"
      },
      {
        id: "B",
        text: "AppServiceEnvironmentPlatformlogs"
      },
      {
        id: "C",
        text: "AppServiceConsoleLogs"
      },
      {
        id: "D",
        text: "AppServiceAuditLogs"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 233,
    number: 29,
    topic: "Topic 5",
    prompt: "You develop and deploy an Azure App Service web app to a production environment. You enable the Always On setting and the Application\nInsights site extensions.\nYou deploy a code update and receive multiple failed requests and exceptions in the web app.\nYou need to validate the performance and failure counts of the web app in near real time.\nWhich Application Insights tool should you use?",
    keySource: "source",
    explanation: "Source answer: Mobile",
    type: "single",
    options: [
      {
        id: "A",
        text: "Proler"
      },
      {
        id: "B",
        text: "Smart Detection"
      },
      {
        id: "C",
        text: "Live Metrics Stream"
      },
      {
        id: "D",
        text: "Application Map"
      },
      {
        id: "E",
        text: "Snapshot Debugger"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 234,
    number: 30,
    topic: "Topic 5",
    prompt: "HOTSPOT -\nYou deploy an ASP.NET web app to Azure App Service.\nYou must monitor the web app by using Application Insights.\nYou need to congure Application Insights to meet the requirements.\nWhich feature should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: DeliveryRequestHeaderConditionParameters, HTTP_USER_AGENT, iPhone",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Set backup frequency to the minimum value."
      },
      {
        id: "O2",
        text: "reprocessed."
      },
      {
        id: "O3",
        text: "Configure second storage account for persistence."
      },
      {
        id: "O4",
        text: "DeliveryRequestHeaderConditionParameters"
      },
      {
        id: "O5",
        text: "HTTP_USER_AGENT"
      },
      {
        id: "O6",
        text: "iPhone"
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
    id: 235,
    number: 31,
    topic: "Topic 5",
    prompt: "You are building a web application that performs image analysis on user photos and returns metadata containing objects identied. The image\nanalysis is very costly in terms of time and compute resources. You are planning to use Azure Redis Cache so duplicate uploads do not need to be\nreprocessed.\nIn case of an Azure data center outage, metadata loss must be kept to a minimum.\nYou need to congure the Azure Redis cache instance.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Configure and use Integrated Windows Authentication in the website.✑ In the website, query Microsoft Graph API to load the groups to which the user is a member.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Congure Azure Redis with AOF persistence."
      },
      {
        id: "B",
        text: "Congure Azure Redis with RDB persistence."
      },
      {
        id: "C",
        text: "Congure second storage account for persistence."
      },
      {
        id: "D",
        text: "Set backup frequency to the minimum value."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 236,
    number: 32,
    topic: "Topic 5",
    prompt: "You are developing an Azure-based web application. The application goes oine periodically to perform oine data processing. While the\napplication is oine, numerous Azure Monitor alerts re which result in the on-call developer being paged.\nThe application must always log when the application is oine for any reason.\nYou need to ensure that the on-call developer is not paged during oine processing.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: NO",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add Azure Monitor alert processing rules to suppress notications."
      },
      {
        id: "B",
        text: "Disable Azure Monitor Service Health Alerts during oine processing."
      },
      {
        id: "C",
        text: "Create an Azure Monitor Metric Alert."
      },
      {
        id: "D",
        text: "Build an Azure Monitor action group that suppresses the alerts."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 237,
    number: 33,
    topic: "Topic 5",
    prompt: "You are developing an online game that includes a feature that allows players to interact with other players on the same team within a certain\ndistance. The calculation to determine the players in range occurs when players move and are cached in an Azure Cache for Redis instance.\nThe system should prioritize players based on how recently they have moved and should not prioritize players who have logged out of the game.\nYou need to select an eviction policy.\nWhich eviction policy should you use?",
    keySource: "source",
    explanation: "Source answer: Run the Invoke-RestMethod cmdlet to make a request to the local managed identity for Azure resources endpoint.",
    type: "single",
    options: [
      {
        id: "A",
        text: "allkeys-Iru"
      },
      {
        id: "B",
        text: "volatile-Iru"
      },
      {
        id: "C",
        text: "allkeys-lfu"
      },
      {
        id: "D",
        text: "volatile-ttl"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 238,
    number: 34,
    topic: "Topic 5",
    prompt: "You develop an Azure App Service web app and deploy to a production environment. You enable Application Insights for the web app.\nThe web app is throwing multiple exceptions in the environment.\nYou need to examine the state of the source code and variables when the exceptions are thrown.\nWhich Application Insights feature should you congure?",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "single",
    options: [
      {
        id: "A",
        text: "Smart detection"
      },
      {
        id: "B",
        text: "Proler"
      },
      {
        id: "C",
        text: "Snapshot Debugger"
      },
      {
        id: "D",
        text: "Standard test"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 239,
    number: 35,
    topic: "Topic 5",
    prompt: "DRAG DROP\n-\nYou develop and deploy a Java application to Azure. The application has been instrumented by using the Application Insights SDK.\nThe telemetry data must be enriched and processed before it is sent to the Application Insights service.\nYou need to modify the telemetry data.\nWhich Application Insights SDK features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may\nbe used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: How should you configure the manifest? To answer, select the appropriate configuration in the answer area., groupMembershipClaims, oauth2AllowImplicitFlow",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "item."
      },
      {
        id: "O2",
        text: "How should you configure the manifest? To answer"
      },
      {
        id: "O3",
        text: "select the appropriate configuration in the answer area."
      },
      {
        id: "O4",
        text: "groupMembershipClaims"
      },
      {
        id: "O5",
        text: "oauth2AllowImplicitFlow"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 240,
    number: 36,
    topic: "Topic 5",
    prompt: "HOTSPOT\n-\nYou develop new functionality in a web application for a company that provides access to seismic data from around the world. The seismic data is\nstored in Redis Streams within an Azure Cache for Redis instance.\nThe new functionality includes a real-time display of seismic events as they occur.\nYou need to implement the Azure Cache for Redis command to receive seismic data.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You need to copy specific blobs from Container1 to Container2 when a new video is uploaded., Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet, You need to purge individual assets from the Front Door cache.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Create and implement environment variables for each App Configuration store setting."
      },
      {
        id: "O2",
        text: "Create and configure Azure Key Vault. Implement the Azure Key Vault configuration provider."
      },
      {
        id: "O3",
        text: "You need to copy specific blobs from Container1 to Container2 when a new video is uploaded."
      },
      {
        id: "O4",
        text: "Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet"
      },
      {
        id: "O5",
        text: "You need to purge individual assets from the Front Door cache."
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
    id: 241,
    number: 37,
    topic: "Topic 5",
    prompt: "You develop an ASP.NET Core app that uses Azure App Conguration. You also create an App Conguration containing 100 settings.\nThe app must meet the following requirements:\n• Ensure the consistency of all conguration data when changes to individual settings occur.\n• Handle conguration data changes dynamically without causing the application to restart.\n• Reduce the overall number of requests made to App Conguration APIs.\nYou must implement dynamic conguration updates in the app.\nWhat are two ways to achieve this goal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: single path",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create and register a sentinel key in the App Conguration store. Set the refreshAll parameter of the Register method to true."
      },
      {
        id: "B",
        text: "Increase the App Conguration cache expiration from the default value."
      },
      {
        id: "C",
        text: "Decrease the App Conguration cache expiration from the default value."
      },
      {
        id: "D",
        text: "Create and congure Azure Key Vault. Implement the Azure Key Vault conguration provider."
      },
      {
        id: "E",
        text: "Register all keys in the App Conguration store. Set the refreshAll parameter of the Register method to false."
      },
      {
        id: "F",
        text: "Create and implement environment variables for each App Conguration store setting."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 242,
    number: 38,
    topic: "Topic 5",
    prompt: "HOTSPOT\n-\nYou develop and deploy an Azure App Service web app that connects to Azure Cache for Redis as a content cache. All resources have been\ndeployed to the East US 2 region.\nThe security team requires the following audit information from Azure Cache for Redis:\n• The number of Redis client connections from an associated IP address.\n• Redis operations completed on the content cache.\n• The location (region) in which the Azure Cach3e for Redis instance was accessed.\nThe audit information must be captured and analyzed by a security team application deployed to the Central US region.\nYou need to log information on all client connections to the cache.\nWhich conguration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Callers to the API must not send credentials to the API.Which authentication mechanism should you use?, C. Managed identity, A recent security audit found that several web services can be called without any authentication.Which API Management policy should you implement?",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Enable client connection logging. I —"
      },
      {
        id: "O2",
        text: "Blob Storage account"
      },
      {
        id: "O3",
        text: "Data Lake Storage Gen2 Storage account"
      },
      {
        id: "O4",
        text: "+ The number of Redis client connections from an associated IP address."
      },
      {
        id: "O5",
        text: "Callers to the API must not send credentials to the API.Which authentication mechanism should you use?"
      },
      {
        id: "O6",
        text: "C. Managed identity"
      },
      {
        id: "O7",
        text: "A recent security audit found that several web services can be called without any authentication.Which API Management policy should you implement?"
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
    id: 243,
    number: 39,
    topic: "Topic 5",
    prompt: "You develop and deploy a web app to Azure App Service. The Azure App Service uses a Basic plan in a single region.\nUsers report that the web app is responding slow. You must capture the complete call stack to help identify performance issues in the code. Call\nstack data must be correlated across app instances. You must minimize cost and impact to users on the web app.\nYou need to capture the telemetry.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: D. validate-jwt",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Restart all apps in the App Service plan."
      },
      {
        id: "B",
        text: "Enable Application Insights site extensions."
      },
      {
        id: "C",
        text: "Upgrade the Azure App Service plan to Premium."
      },
      {
        id: "D",
        text: "Enable Proler."
      },
      {
        id: "E",
        text: "Enable the Always On setting for the app service."
      },
      {
        id: "F",
        text: "Enable Snapshot debugger."
      },
      {
        id: "G",
        text: "Enable remote debugging."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 244,
    number: 40,
    topic: "Topic 5",
    prompt: "You are building an application to track cell towers that are available to phones in near real time. A phone will send information to the application\nby using the Azure Web PubSub service. The data will be processed by using an Azure Functions app. Trac will be transmitted by using a content\ndelivery network (CDN).\nThe Azure function must be protected against miscongured or unauthorized invocations.\nYou need to ensure that the CDN allows for the Azure function protection.\nWhich HTTP header should be on the allowed list?",
    keySource: "source",
    explanation: "Source answer: Contoso, Ltd. provides an API to customers by using Azure API Management (APIM).",
    type: "single",
    options: [
      {
        id: "A",
        text: "Authorization"
      },
      {
        id: "B",
        text: "WebHook-Request-Callback"
      },
      {
        id: "C",
        text: "Resource"
      },
      {
        id: "D",
        text: "WebHook-Request-Origin"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 245,
    number: 41,
    topic: "Topic 5",
    prompt: "You are developing an Azure App Service web app.\nThe web app must securely store session information in Azure Redis Cache.\nYou need to connect the web app to Azure Redis Cache.\nWhich three Azure Redis Cache properties should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Inbound",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Access key"
      },
      {
        id: "B",
        text: "SSL port"
      },
      {
        id: "C",
        text: "Subscription name"
      },
      {
        id: "D",
        text: "Location"
      },
      {
        id: "E",
        text: "Host name"
      },
      {
        id: "F",
        text: "Subscription id"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 246,
    number: 42,
    topic: "Topic 5",
    prompt: "HOTSPOT\n-\nYou are developing several microservices to run on Azure Container Apps.\nYou need to monitor and diagnose the microservices.\nWhich features should you use? To answer, select the appropriate feature in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Inbound, Inbound, Outbound",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Monitor metrics"
      },
      {
        id: "O2",
        text: "Azure Container Registry"
      },
      {
        id: "O3",
        text: "Azure Monitor Log Analytics"
      },
      {
        id: "O4",
        text: "Location"
      },
      {
        id: "O5",
        text: "Host name"
      },
      {
        id: "O6",
        text: "Inbound"
      },
      {
        id: "O7",
        text: "Outbound"
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
      "t2:O6",
      "t3:O7"
    ]
  },
  {
    id: 247,
    number: 43,
    topic: "Topic 5",
    prompt: "Case study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\n• Secure the website by using SSL.\n• Minimize costs for data storage and hosting.\n• Implement native GitHub workows for continuous integration and continuous deployment (CI/CD).\n• Distribute the website content globally for local use.\n• Implement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\n• The website must have 99.95 percent uptime.\nRetail store locations -\n• Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by\nusing native SQL language queries.\n• Audit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\n• Store service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\n• Store delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\n• All Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\n• Authentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\n• You must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\n• Azure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nYou need to test the availability of the corporate website.\nWhich two test types can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You need to develop code to access a secret stored in Azure Key Vault.How should you complete the code segment",
    type: "single",
    options: [
      {
        id: "A",
        text: "Standard"
      },
      {
        id: "B",
        text: "URL ping"
      },
      {
        id: "C",
        text: "Custom testing using the TrackAvailability API method"
      },
      {
        id: "D",
        text: "Multi-step"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 248,
    number: 44,
    topic: "Topic 5",
    prompt: "You have an Azure API Management (APIM) Standard tier instance named APIM1 that uses a managed gateway.\nYou plan to use APIM1 to publish an API named API1 that uses a backend database that supports only a limited volume of requests per minute.\nYou also need a policy for API1 that will minimize the possibility that the number of requests to the backend database from an individual IP\naddress you specify exceeds the supported limit.\nYou need to identify a policy for API1 that will meet the requirements.\nWhich policy should you use?",
    keySource: "source",
    explanation: "Source answer: SecretClient",
    type: "single",
    options: [
      {
        id: "A",
        text: "ip-lter"
      },
      {
        id: "B",
        text: "quota-by-key"
      },
      {
        id: "C",
        text: "rate-limit-by-key"
      },
      {
        id: "D",
        text: "rate-limit"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 249,
    number: 1,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device\ncan produce 2 megabytes (MB) of data every 24 hours. Each store location has one to ve devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identier. Additional stores are expected\nto open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Service Bus. Congure a topic to receive the device data by using a correlation lter.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: DefaultAzureCredential",
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
    id: 250,
    number: 2,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device\ncan produce 2 megabytes (MB) of data every 24 hours. Each store location has one to ve devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identier. Additional stores are expected\nto open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Grid. Congure event ltering to evaluate the device identier.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: The API must retrieve and update user profile information stored in Azure Active Directory (Azure AD).",
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
    id: 251,
    number: 3,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou manage several existing Logic Apps.\nYou need to change denitions, add new logic, and optimize these apps on a regular basis.\nWhat should you use? To answer, drag the appropriate tools to the correct functionalities. Each tool may be used once, more than once, or not at\nall. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Microsoft Graph API, Microsoft Authentication Library (MSAL), You develop a REST API. You implement a user delegation SAS token to communicate with Azure Blob storage.The token is compromised.You need to revoke the token.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Code View Editor Edit definitions in JSON 7]"
      },
      {
        id: "O2",
        text: "Microsoft Graph API"
      },
      {
        id: "O3",
        text: "Microsoft Authentication Library (MSAL)"
      },
      {
        id: "O4",
        text: "You develop a REST API. You implement a user delegation SAS token to communicate with Azure Blob storage.The token is compromised.You need to revoke the token."
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
    id: 252,
    number: 4,
    topic: "Topic 6",
    prompt: "A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing\ntier, subscription, resource group, and location.\nYou need to complete the conguration.\nWhich Azure CLI or PowerShell command should you run?\nA.\nB.\nC.\nD.",
    keySource: "source",
    explanation: "Source answer: A. Revoke the delegation key.",
    type: "single",
    options: [
      {
        id: "A",
        text: "A. Revoke the delegation key."
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
    id: 253,
    number: 5,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nYou are developing an application that uses Azure Storage Queues.\nYou have the following code:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: D. Remove the role assignment for the security principle., The key must be transferred to your existing Azure Key Vault by using the Bring Your Own Key (BYOK) process.You need to securely transfer the key to Azure Key Vault., Generate a Key Exchange Key(KEK)",
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
    id: 254,
    number: 6,
    topic: "Topic 6",
    prompt: "A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing\ntier, subscription, resource group, and location.\nYou need to complete the conguration.\nWhich Azure CLI or PowerShell command should you run?\nA.\nB.\nC.\nD.",
    keySource: "source",
    explanation: "Source answer: Retrieve the Key exchange Key(KEK) public key",
    type: "single",
    options: [
      {
        id: "A",
        text: "Retrieve the Key exchange Key(KEK) public key"
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
    id: 255,
    number: 7,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may\nnot be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use rst-in-rst-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Storage Queue from the mobile application. Create an Azure Function App that uses an\nAzure Storage\nQueue trigger.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: Generate a key transfer blob file by using the HSM vendor-provided tool",
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
    id: 256,
    number: 8,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou develop software solutions for a mobile delivery service. You are developing a mobile app that users can use to order from a restaurant in\ntheir area. The app uses the following workow:\n1. A driver selects the restaurants for which they will deliver orders.\n2. Orders are sent to all available drivers in an area.\n3. Only orders for the selected restaurants will appear for the driver.\n4. The rst driver to accept an order removes it from the list of available orders.\nYou need to implement an Azure Service Bus solution.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Run the “az keyvault key import” command, The Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.You need to secure the Azure Logic app., Create a user-assigned managed identity and assign role-based access controls.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Create s single Service Bus Namespace."
      },
      {
        id: "O2",
        text: "Create a Service Bus Namespace for each"
      },
      {
        id: "O3",
        text: "Create a single Service Bus subscription."
      },
      {
        id: "O4",
        text: "Create a Service Bus subscription for each"
      },
      {
        id: "O5",
        text: "Run the \"az keyvault key import\" command"
      },
      {
        id: "O6",
        text: "The Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.You need to secure the Azure Logic app."
      },
      {
        id: "O7",
        text: "Create a user-assigned managed identity"
      },
      {
        id: "O8",
        text: "assign role-based access controls."
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
    id: 257,
    number: 9,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nYou develop a news and blog content app for Windows devices.\nA notication must arrive on a user's device when there is a new article available for them to view.\nYou need to implement push notications.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You are developing an application that uses a premium block blob storage account., YES",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "contoso_hub"
      },
      {
        id: "O2",
        text: "NotificationHubJob"
      },
      {
        id: "O3",
        text: "NotificationDetails"
      },
      {
        id: "O4",
        text: "NotificationHubClient"
      },
      {
        id: "O5",
        text: "try"
      },
      {
        id: "O6",
        text: "<toast><visual»><binding template="
      },
      {
        id: "O7",
        text: "</text></binding></visual></toast>"
      },
      {
        id: "O8",
        text: "@\"New item to view\" + @\"</text></binding></visual></toast>\";"
      },
      {
        id: "O9",
        text: "@\"<toast><visual»><binding template=\"\"ToastText@l\"\"><text id=\"\"1\"\">\" +"
      },
      {
        id: "O10",
        text: "You are developing an application that uses a premium block blob storage account."
      },
      {
        id: "O11",
        text: "YES"
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
      "t2:O11"
    ]
  },
  {
    id: 258,
    number: 10,
    topic: "Topic 6",
    prompt: "You are developing an Azure messaging solution.\nYou need to ensure that the solution meets the following requirements:\n✑ Provide transactional support.\n✑ Provide duplicate detection.\n✑ Store the messages for an unlimited period of time.\nWhich two technologies will meet the requirements? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Bus Topic"
      },
      {
        id: "B",
        text: "Azure Service Bus Queue"
      },
      {
        id: "C",
        text: "Azure Storage Queue"
      },
      {
        id: "D",
        text: "Azure Event Hub"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 259,
    number: 11,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou develop a gateway solution for a public facing news API.\nThe news API back end is implemented as a RESTful service and hosted in an Azure App Service instance.\nYou need to congure back-end authentication for the API Management service instance.\nWhich target and gateway credential type should you use? To answer, drag the appropriate values to the correct parameters. Each value may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: YES, NO, The solution must meet the following requirements:✑ Send insert and update operations to an Azure Blob storage account.✑ Process changes to all partitions immediately.✑ Allow parallelization of change processing.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Resource"
      },
      {
        id: "O2",
        text: "Client cert"
      },
      {
        id: "O3",
        text: "HTTP(s) endpoint J"
      },
      {
        id: "O4",
        text: "YES"
      },
      {
        id: "O5",
        text: "NO"
      },
      {
        id: "O6",
        text: "The solution must meet the following requirements:✑ Send insert"
      },
      {
        id: "O7",
        text: "update operations to an Azure Blob storage account.✑ Process changes to all partitions immediately.✑ Allow parallelization of change processing."
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
    id: 260,
    number: 12,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nYou are creating an app that uses Event Grid to connect with other services. Your app's event data will be sent to a serverless function that checks\ncompliance.\nThis function is maintained by your company.\nYou write a new event subscription at the scope of your resource. The event must be invalidated after a specic period of time.\nYou need to congure Event Grid.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: C.  Create an Azure Function to use a trigger for Azure Cosmos DB. Configure the trigger to connect to the container., D. Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions., running the following PowerShell script",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "C. Create an Azure Function to use a trigger for Azure Cosmos DB. Configure the trigger to connect to the container."
      },
      {
        id: "O2",
        text: "D. Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions."
      },
      {
        id: "O3",
        text: "running the following PowerShell script"
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
    id: 261,
    number: 13,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nYou are working for Contoso, Ltd.\nYou dene an API Policy object by using the following XML markup:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: NO, NO",
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
    id: 262,
    number: 14,
    topic: "Topic 6",
    prompt: "You are developing a solution that will use Azure messaging services.\nYou need to ensure that the solution uses a publish-subscribe model and eliminates the need for constant polling.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "single",
    options: [
      {
        id: "A",
        text: "Service Bus"
      },
      {
        id: "B",
        text: "Event Hub"
      },
      {
        id: "C",
        text: "Event Grid"
      },
      {
        id: "D",
        text: "Queue"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 263,
    number: 15,
    topic: "Topic 6",
    prompt: "A company is implementing a publish-subscribe (Pub/Sub) messaging component by using Azure Service Bus. You are developing the rst\nsubscription application.\nIn the Azure portal you see that messages are being sent to the subscription for each topic. You create and initialize a subscription client object\nby supplying the correct details, but the subscription application is still not consuming the messages.\nYou need to ensure that the subscription client processes all messages.\nWhich code segment should you use?",
    keySource: "source",
    explanation: "Source answer: You create a method named ReadCertificate to return the X509 certificate by name.You need to implement code that acquires a token by using the certificate.",
    type: "single",
    options: [
      {
        id: "A",
        text: "await subscriptionClient.AddRuleAsync(new RuleDescription(RuleDescription.DefaultRuleName, new TrueFilter()));"
      },
      {
        id: "B",
        text: "subscriptionClient = new SubscriptionClient(ServiceBusConnectionString, TopicName, SubscriptionName);"
      },
      {
        id: "C",
        text: "await subscriptionClient.CloseAsync();"
      },
      {
        id: "D",
        text: "subscriptionClient.RegisterMessageHandler(ProcessMessagesAsync, messageHandlerOptions);"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 264,
    number: 16,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may\nnot be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use rst-in-rst-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Storage Queue from the mobile application. Create an Azure VM that is triggered from\nAzure Storage\nQueue events.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: ConfidentialClientApplicationBuilder",
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
    id: 265,
    number: 17,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may\nnot be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use rst-in-rst-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Service Bus Queue from the mobile application. Create an Azure Windows VM that is\ntriggered from\nAzure Service Bus Queue.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: scopes",
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
    id: 266,
    number: 18,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou are developing a REST web service. Customers will access the service by using an Azure API Management instance.\nThe web service does not correctly handle conicts. Instead of returning an HTTP status code of 409, the service returns a status code of 500.\nThe body of the status message contains only the word conict.\nYou need to ensure that conicts produce the correct response.\nHow should you complete the policy? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege., Service principal, AcrPush",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Policy segments Answer Area"
      },
      {
        id: "O2",
        text: "The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege."
      },
      {
        id: "O3",
        text: "Service principal"
      },
      {
        id: "O4",
        text: "AcrPush"
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
    id: 267,
    number: 19,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou are a developer for a Software as a Service (SaaS) company. You develop solutions that provide the ability to send notications by using\nAzure Notication\nHubs.\nYou need to create sample code that customers can use as a reference for how to send raw notications to Windows Push Notication Services\n(WNS) devices.\nThe sample code must not use external packages.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct locations. Each code segment may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: You create an app registration for the app in Azure Active Directory (Azure AD) and Twitter., B. ID token signature, You need to grant developers access to the Azure Blob storage account.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "X-WNS-Type"
      },
      {
        id: "O2",
        text: "await client.SendAsync (request);"
      },
      {
        id: "O3",
        text: "application/xml var client = new HttpClient();"
      },
      {
        id: "O4",
        text: "You create an app registration for the app in Azure Active Directory (Azure AD)"
      },
      {
        id: "O5",
        text: "Twitter."
      },
      {
        id: "O6",
        text: "B. ID token signature"
      },
      {
        id: "O7",
        text: "You need to grant developers access to the Azure Blob storage account."
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
    id: 268,
    number: 20,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device\ncan produce\n2 megabytes (MB) of data every 24 hours. Each store location has one to ve devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identier. Additional stores are expected\nto open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Hub. Congure the machine identier as the partition key and enable capture.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: A. Generate a shared access signature (SAS) for the Azure Blob storage account and provide the SAS to all developers.",
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
    id: 269,
    number: 21,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou are developing an Azure solution to collect inventory data from thousands of stores located around the world. Each store location will send\nthe inventory data hourly to an Azure Blob storage account for processing.\nThe solution must meet the following requirements:\n✑ Begin processing when data is saved to Azure Blob storage.\n✑ Filter data based on store location information.\n✑ Trigger an Azure Logic App to process the data for output to Azure Cosmos DB.\n✑ Enable high availability and geographic distribution.\n✑ Allow 24-hours for retries.\n✑ Implement an exponential back off data processing.\nYou need to congure the solution.\nWhat should you implement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: You need to register the application with an active Azure Active Directory (Azure AD) tenant., SelectAzure AD instance, In App Registration, select new registration",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Blob Storage Am Co"
      },
      {
        id: "O2",
        text: "Azure Logic App"
      },
      {
        id: "O3",
        text: "Azure App Service Le"
      },
      {
        id: "O4",
        text: "Azure Event Hub Object Technology"
      },
      {
        id: "O5",
        text: "Azure Service Bus . Es |"
      },
      {
        id: "O6",
        text: "Azure Event Grid Event Source i |"
      },
      {
        id: "O7",
        text: "You need to register the application with an active Azure Active Directory (Azure AD) tenant."
      },
      {
        id: "O8",
        text: "SelectAzure AD instance"
      },
      {
        id: "O9",
        text: "In App Registration"
      },
      {
        id: "O10",
        text: "select new registration"
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
      "t1:O7",
      "t2:O8",
      "t3:O9",
      "t4:O10"
    ]
  },
  {
    id: 270,
    number: 22,
    topic: "Topic 6",
    prompt: "You are creating an app that will use CosmosDB for data storage. The app will process batches of relational data.\nYou need to select an API for the app.\nWhich API should you use?",
    keySource: "source",
    explanation: "Source answer: Create a new application and provide the name",
    type: "single",
    options: [
      {
        id: "A",
        text: "MongoDB API"
      },
      {
        id: "B",
        text: "Table API"
      },
      {
        id: "C",
        text: "SQL API"
      },
      {
        id: "D",
        text: "Cassandra API"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 271,
    number: 23,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nYou are developing a .NET application that communicates with Azure Storage.\nA message must be stored when the application initializes.\nYou need to implement the message.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: The website uses Azure Active Directory (AzureAD) for authentication., B. In Azure AD, create a new conditional access policy., C. Upgrade to Azure AD Premium.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "contoso-storage"
      },
      {
        id: "O2",
        text: "try"
      },
      {
        id: "O3",
        text: "Ww DpVarZ = pVarl. Ww | (\"contoso-storage\");"
      },
      {
        id: "O4",
        text: "The website uses Azure Active Directory (AzureAD) for authentication."
      },
      {
        id: "O5",
        text: "B. In Azure AD"
      },
      {
        id: "O6",
        text: "create a new conditional access policy."
      },
      {
        id: "O7",
        text: "C. Upgrade to Azure AD Premium."
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
    id: 272,
    number: 24,
    topic: "Topic 6",
    prompt: "HOTSPOT -\nA software as a service (SaaS) company provides document management services. The company has a service that consists of several Azure web\napps. All\nAzure web apps run in an Azure App Service Plan named PrimaryASP.\nYou are developing a new web service by using a web app named ExcelParser. The web app contains a third-party library for processing Microsoft\nExcel les.\nThe license for the third-party library stipulates that you can only run a single instance of the library.\nYou need to congure the service.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You need to configure shared access signature (SAS) for granting access to Azure Storage, Account-level, Service-level",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "PrimaryASP"
      },
      {
        id: "O2",
        text: "ExcelParser"
      },
      {
        id: "O3",
        text: "Set-AzWebApp $app"
      },
      {
        id: "O4",
        text: "Set-AzAppServicePlan *'"
      },
      {
        id: "O5",
        text: "You need to configure shared access signature (SAS) for granting access to Azure Storage"
      },
      {
        id: "O6",
        text: "Account-level"
      },
      {
        id: "O7",
        text: "Service-level"
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
    id: 273,
    number: 25,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou have an application that provides weather forecasting data to external partners. You use Azure API Management to publish APIs.\nYou must change the behavior of the API to meet the following requirements:\n✑ Support alternative input parameters\n✑ Remove formatting text from responses\n✑ Provide additional context to back-end services\nWhich types of policies should you implement? To answer, drag the policy types to the correct requirements. Each policy type may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: User delegation, You create an Azure App Configuration store named AppFeatureflagStore as shown in the exhibit:, featuregate",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Storage Queue"
      },
      {
        id: "O2",
        text: "Azure Event Hub"
      },
      {
        id: "O3",
        text: "Azure Event Grid"
      },
      {
        id: "O4",
        text: "Azure Service Bus"
      },
      {
        id: "O5",
        text: "Inbound"
      },
      {
        id: "O6",
        text: "Policy types Answer Area"
      },
      {
        id: "O7",
        text: "Support alternative input parameters. policy type"
      },
      {
        id: "O8",
        text: ": Remove formatting text from responses. policy type"
      },
      {
        id: "O9",
        text: "Provide additional context to back-end services. policy type"
      },
      {
        id: "O10",
        text: "User delegation"
      },
      {
        id: "O11",
        text: "You create an Azure App Configuration store named AppFeatureflagStore as shown in the exhibit:"
      },
      {
        id: "O12",
        text: "featuregate"
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
    id: 274,
    number: 26,
    topic: "Topic 6",
    prompt: "You are developing an e-commerce solution that uses a microservice architecture.\nYou need to design a communication backplane for communicating transactional messages between various parts of the solution. Messages\nmust be communicated in rst-in-rst-out (FIFO) order.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: addazure appconfiguration",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Storage Queue"
      },
      {
        id: "B",
        text: "Azure Event Hub"
      },
      {
        id: "C",
        text: "Azure Service Bus"
      },
      {
        id: "D",
        text: "Azure Event Grid"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 275,
    number: 27,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nA company backs up all manufacturing data to Azure Blob Storage. Admins move blobs from hot storage to archive tier storage every month.\nYou must automatically move blobs to Archive tier after they have not been modied within 180 days. The path for any item that is not archived\nmust be placed in an existing queue. This operation must be performed automatically once a month. You set the value of TierAgeInDays to -180.\nHow should you congure the Logic App? To answer, drag the appropriate triggers or action blocks to the correct trigger or action slots. Each\ntrigger or action block may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: appfeatureflagstore.azconfig.io, Users must be able to authenticate and access Microsoft Graph by using their own company's Azure AD instance., True",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "vanabie"
      },
      {
        id: "O2",
        text: "appfeatureflagstore.azconfig.io"
      },
      {
        id: "O3",
        text: "Users must be able to authenticate"
      },
      {
        id: "O4",
        text: "access Microsoft Graph by using their own company's Azure AD instance."
      },
      {
        id: "O5",
        text: "True"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 276,
    number: 28,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may\nnot be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use rst-in-rst-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Service Bus Queue from the mobile application. Create an Azure Function App that uses\nan Azure\nService Bus Queue trigger.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: requiredResourceAccess",
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
    id: 277,
    number: 29,
    topic: "Topic 6",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device\ncan produce 2 megabytes (MB) of data every 24 hours. Each store location has one to ve devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identier. Additional stores are expected\nto open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Notication Hub. Register all devices with the hub.\nDoes the solution meet the goal?",
    keySource: "source",
    explanation: "Source answer: AzureAdMyOrg",
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
    id: 278,
    number: 30,
    topic: "Topic 6",
    prompt: "You are building a loyalty program for a major snack producer. When customers buy a snack at any of 100 participating retailers the event is\nrecorded in Azure\nEvent Hub. Each retailer is given a unique identier that is used as the primary identier for the loyalty program.\nRetailers must be able to be added or removed at any time. Retailers must only be able to record sales for themselves.\nYou need to ensure that retailers can record sales.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Provide other applications access to the Azure queue.✑ Ensure that you can revoke access to the queue without having to regenerate the storage account keys.✑ Specify access at the queue level and not at the storage account level.Which type of shared access signature (SAS) should you use?",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use publisher policies for retailers."
      },
      {
        id: "B",
        text: "Create a partition for each retailer."
      },
      {
        id: "C",
        text: "Dene a namespace for each retailer."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 279,
    number: 31,
    topic: "Topic 6",
    prompt: "DRAG DROP -\nYou develop and deploy a web app to Azure App Service in a production environment. You scale out the web app to four instances and congure a\nstaging slot to support changes.\nYou must monitor the web app in the environment to include the following requirements:\n✑ Increase web app availability by re-routing requests away from instances with error status codes and automatically replace instances if they\nremain in an error state after one hour.\n✑ Send web server logs, application logs, standard output, and standard error messaging to an Azure Storage blob account.\nYou need to congure Azure App Service.\nWhich values should you use? To answer, drag the appropriate conguration value to the correct requirements. Each conguration value may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Service SAS with a stored access policy, You need to secure the application access to Azure Blob storage.Which security features should you use?, Shared access signature (SAS) token",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "From the code on the VM, generate a user delegation SAS token."
      },
      {
        id: "O2",
        text: "Manager."
      },
      {
        id: "O3",
        text: "From the code on the VM, call Azure Resource Manager using a SAS token."
      },
      {
        id: "O4",
        text: "From the code on the VM, call Azure Resource Manager using an access token."
      },
      {
        id: "O5",
        text: "Service SAS with a stored access policy"
      },
      {
        id: "O6",
        text: "You need to secure the application access to Azure Blob storage.Which security features should you use?"
      },
      {
        id: "O7",
        text: "Shared access signature (SAS) token"
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
    id: 280,
    number: 32,
    topic: "Topic 6",
    prompt: "You develop a solution that uses Azure Virtual Machines (VMs).\nThe VMs contain code that must access resources in an Azure resource group. You grant the VM access to the resource group in Resource\nManager.\nYou need to obtain an access token that uses the VM's system-assigned managed identity.\nWhich two actions should you perform? Each correct answer presents part of the solution.",
    keySource: "source",
    explanation: "Source answer: Stored Access Policy",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "From the code on the VM, call Azure Resource Manager using an access token."
      },
      {
        id: "B",
        text: "Use PowerShell on a remote machine to make a request to the local managed identity for Azure resources endpoint."
      },
      {
        id: "C",
        text: "Use PowerShell on the VM to make a request to the local managed identity for Azure resources endpoint."
      },
      {
        id: "D",
        text: "From the code on the VM, call Azure Resource Manager using a SAS token."
      },
      {
        id: "E",
        text: "From the code on the VM, generate a user delegation SAS token."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 281,
    number: 33,
    topic: "Topic 6",
    prompt: "You are developing a road tollway tracking application that sends tracking events by using Azure Event Hubs using premium tier.\nEach road must have a throttling policy uniquely assigned.\nYou need to congure the event hub to allow for per-road throttling.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: You need to retrieve a claim to “uniquely” identify a user.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use a unique consumer group for each road."
      },
      {
        id: "B",
        text: "Ensure each road stores events in a different partition."
      },
      {
        id: "C",
        text: "Ensure each road has a unique connection string."
      },
      {
        id: "D",
        text: "Use a unique application group for each road."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 282,
    number: 34,
    topic: "Topic 6",
    prompt: "You develop and deploy an ASP.NET Core application that connects to an Azure Database for MySQL instance.\nConnections to the database appear to drop intermittently and the application code does not handle the connection failure.\nYou need to handle the transient connection errors in code by implementing retries.\nWhat are three possible ways to achieve this goal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Oid object identifier (contains a unique identifier for the user)",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Close the database connection and immediately report an error."
      },
      {
        id: "B",
        text: "Disable connection pooling and congure a second Azure Database for MySQL instance."
      },
      {
        id: "C",
        text: "Wait ve seconds before repeating the connection attempt to the database."
      },
      {
        id: "D",
        text: "Set a maximum number of connection attempts to 10 and report an error on subsequent connections."
      },
      {
        id: "E",
        text: "Increase connection repeat attempts exponentially up to 120 seconds."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 283,
    number: 35,
    topic: "Topic 6",
    prompt: "You are building a B2B web application that uses Azure B2B collaboration for authentication. Paying customers authenticate to Azure B2B using\nfederation.\nThe application allows users to sign up for trial accounts using any email address.\nWhen a user converts to a paying customer, the data associated with the trial should be kept, but the user must authenticate using federation.\nYou need to update the user in Azure Active Directory (Azure AD) when they convert to a paying customer.\nWhich Graph API parameter is used to change authentication from one-time passcodes to federation?",
    keySource: "source",
    explanation: "Source answer: Which value should you store in the Azure Function App configuration",
    type: "single",
    options: [
      {
        id: "A",
        text: "resetRedemption"
      },
      {
        id: "B",
        text: "Status"
      },
      {
        id: "C",
        text: "userFlowType"
      },
      {
        id: "D",
        text: "invitedUser"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 284,
    number: 36,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou develop an image upload service that is exposed using Azure API Management. Images are analyzed after upload for automatic tagging.\nImages over 500 KB are processed by a different backend that offers a lower tier of service that costs less money. The lower tier of service is\ndenoted by a header named x-large-request. Images over 500 KB must never be processed by backends for smaller images and must always be\ncharged the lower price.\nYou need to implement API Management policies to ensure that images are processed correctly.\nHow should you complete the API Management inbound policy? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: D. @Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/), Each application uses custom in-house identity providers as well as social identity providers.You need to implement single sign-on (SSO) for all the applications., Use Azure Active Directory B2C (Azure AD B2C) with custom policies.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "set-body base-url"
      },
      {
        id: "O2",
        text: "set-backend-service vary-by-header"
      },
      {
        id: "O3",
        text: "set-query-parameter publish-to-dapr"
      },
      {
        id: "O4",
        text: "imageSize"
      },
      {
        id: "O5",
        text: "x-large-request"
      },
      {
        id: "O6",
        text: "{{large-image-host}}"
      },
      {
        id: "O7",
        text: "< - ¥ | =\"{{large-image-host}}\"/>"
      },
      {
        id: "O8",
        text: "D. @Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)"
      },
      {
        id: "O9",
        text: "Each application uses custom in-house identity providers as well as social identity providers.You need to implement single sign-on (SSO) for all the applications."
      },
      {
        id: "O10",
        text: "Use Azure Active Directory B2C (Azure AD B2C) with custom policies."
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
    id: 285,
    number: 37,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou develop several Azure Functions app functions to process JSON documents from a third-party system. The third-party system publishes\nevents to Azure Event Grid to include hundreds of event types, such as billing, inventory, and shipping updates.\nEvents must be sent to a single endpoint for the Azure Functions app to process. The events must be ltered by event type before processing. You\nmust have authorization and authentication control to partition your tenants to receive the event data.\nYou need to congure Azure Event Grid.\nWhich conguration should you use? To answer, select the appropriate values in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: The application requires a secret value to be passed when the container is started. The value must only be accessed from within the container.You need to pass the secret value., A. Create an environment variable Set the secureValue property to the secret value., E. Mount a secret volume containing the secret value in a secrets file.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Functions app endpoint to handle >"
      },
      {
        id: "O2",
        text: "The application requires a secret value to be passed when the container is started. The value must only be accessed from within the container.You need to pass the secret value."
      },
      {
        id: "O3",
        text: "A. Create an environment variable Set the secureValue property to the secret value."
      },
      {
        id: "O4",
        text: "E. Mount a secret volume containing the secret value in a secrets file."
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
    id: 286,
    number: 38,
    topic: "Topic 6",
    prompt: "A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing\ntier, subscription, resource group, and location.\nYou need to complete the conguration.\nWhich Azure CLI or PowerShell command should you run?\nA.\nB.\nC.\nD.",
    keySource: "source",
    explanation: "Source answer: You must ensure that administrators have full control and consent over the data.",
    type: "single",
    options: [
      {
        id: "A",
        text: "You must ensure that administrators have full control and consent over the data."
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
    id: 287,
    number: 39,
    topic: "Topic 6",
    prompt: "A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing\ntier, subscription, resource group, and location.\nYou need to complete the conguration.\nWhich Azure CLI or PowerShell command should you run?\nA.\nB.\nC.\nD.",
    keySource: "source",
    explanation: "Source answer: A. Microsoft Graph data connect",
    type: "single",
    options: [
      {
        id: "A",
        text: "A. Microsoft Graph data connect"
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
    id: 288,
    number: 40,
    topic: "Topic 6",
    prompt: "A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing\ntier, subscription, resource group, and location.\nYou need to complete the conguration.\nWhich Azure CLI or PowerShell command should you run?\nA.\nB.\nC.\nD.",
    keySource: "source",
    explanation: "Source answer: Access to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used.You need to load configuration data from Azure App Configuration.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Access to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used.You need to load configuration data from Azure App Configuration."
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
    id: 289,
    number: 41,
    topic: "Topic 6",
    prompt: "DRAG DROP\n-\nYou develop and deploy several APIs to Azure API Management.\nYou create the following policy fragment named APICounts:\nThe policy fragment must be reused across various scopes and APIs. The policy fragment must be applied to all APIs and run when a calling\nsystem invokes any API.\nYou need to implement the policy fragment.",
    keySource: "source",
    explanation: "Source answer: AddAzureAppConfiguration, ManagedIdentityCredential, You need to ensure that the blob is encrypted",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "set-variable"
      },
      {
        id: "O2",
        text: "User ID"
      },
      {
        id: "O3",
        text: "Client IP"
      },
      {
        id: "O4",
        text: "custom-metrics"
      },
      {
        id: "O5",
        text: "include-fragment"
      },
      {
        id: "O6",
        text: "You create the following policy fragment named APICounts:"
      },
      {
        id: "O7",
        text: "«dimension name=\"Client IP\" value=\"@(context.Request.IpAddress)\" />"
      },
      {
        id: "O8",
        text: "AddAzureAppConfiguration"
      },
      {
        id: "O9",
        text: "ManagedIdentityCredential"
      },
      {
        id: "O10",
        text: "You need to ensure that the blob is encrypted"
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
    id: 290,
    number: 42,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou are developing a solution that uses several Azure Service Bus queues. You create an Azure Event Grid subscription for the Azure Service Bus\nnamespace. You use Azure Functions as subscribers to process the messages.\nYou need to emit events to Azure Event Grid from the queues. You must use the principal of least privilege and minimize costs.\nWhich Azure Service Bus values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CustomerProvidedKey(key), X.Encription == verify, CustomerProvidedKey",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium"
      },
      {
        id: "O2",
        text: "Standard"
      },
      {
        id: "O3",
        text: "Create and publish a product."
      },
      {
        id: "O4",
        text: "Contributor"
      },
      {
        id: "O5",
        text: "Basic"
      },
      {
        id: "O6",
        text: "CustomerProvidedKey(key)"
      },
      {
        id: "O7",
        text: "X.Encription == verify"
      },
      {
        id: "O8",
        text: "CustomerProvidedKey"
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
    id: 291,
    number: 43,
    topic: "Topic 6",
    prompt: "You are developing several Azure API Management (APIM) hosted APIs.\nThe APIs have the following requirements:\n• Require a subscription key to access all APIs.\n• Include terms of use that subscribers must accept to use the APIs.\n• Administrators must review and accept or reject subscription attempts.\n• Limit the count of multiple simultaneous subscriptions.\nYou need to implement the APIs.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: You are implementing various authentication and authorization flows for the web application.You need to validate the claims in the authentication token.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Congure and apply header-based versioning."
      },
      {
        id: "B",
        text: "Create and publish a product."
      },
      {
        id: "C",
        text: "Congure and apply query string-based versioning."
      },
      {
        id: "D",
        text: "Add a new revision to all APIs. Make the revisions current and add a change log entry."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 292,
    number: 44,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou are developing a solution by using the Azure Event Hubs SDK. You create a standard Azure Event Hub with 16 partitions. You implement eight\nevent processor clients.\nYou must balance the load dynamically when an event processor client fails. When an event processor client fails, another event processor must\ncontinue processing from the exact point at which the failure occurred. All events must be aggregate and upload to an Azure Blob storage\naccount.\nYou need to implement event processing recovery for the solution.\nWhich SDK features should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: ID, Access, Refresh",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Capture"
      },
      {
        id: "O2",
        text: "account."
      },
      {
        id: "O3",
        text: "Namespace"
      },
      {
        id: "O4",
        text: "Checkpoint"
      },
      {
        id: "O5",
        text: "Mark the event processor client position within a partition rv]"
      },
      {
        id: "O6",
        text: "ID"
      },
      {
        id: "O7",
        text: "Access"
      },
      {
        id: "O8",
        text: "Refresh"
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
    id: 293,
    number: 45,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou are developing a new API to be hosted by Azure API Management (APIM). The backend service that implements the API has not been\ncompleted. You are creating a test API and operation.\nYou must enable developers to continue with the implementation and testing of the APIM instance integrations while you complete the backend\nAPI development.\nYou need to congure a test API response.\nHow should you complete the conguration? To answer, select the appropriate options in the answer area.",
    keySource: "source",
    explanation: "Source answer: SAML, You need to configure the routing for the web app. Rule evaluation stops at the first match!!!!, /manuals/new.html",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "set-status"
      },
      {
        id: "O2",
        text: "inbound"
      },
      {
        id: "O3",
        text: "backend"
      },
      {
        id: "O4",
        text: "on-error"
      },
      {
        id: "O5",
        text: "outbound"
      },
      {
        id: "O6",
        text: "Policy CC"
      },
      {
        id: "O7",
        text: "mock-response"
      },
      {
        id: "O8",
        text: "forward-request"
      },
      {
        id: "O9",
        text: "Policy section I"
      },
      {
        id: "O10",
        text: "HTTP response code I"
      },
      {
        id: "O11",
        text: "proxy"
      },
      {
        id: "O12",
        text: "SAML"
      },
      {
        id: "O13",
        text: "You need to configure the routing for the web app. Rule evaluation stops at the first match!!!!"
      },
      {
        id: "O14",
        text: "/manuals/new.html"
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
    id: 294,
    number: 46,
    topic: "Topic 6",
    prompt: "You are developing several Azure API Management (APIM) hosted APIs.\nYou must inspect request processing of the APIs in APIM. Requests to APIM by using a REST client must also be included. The request inspection\nmust include the following information:\n• requests APIM sent to the API backend and the response it received\n• policies applied to the response before sending back to the caller\n• errors that occurred during the processing of the request and the policies applied to the errors\n• original request APIM received from the caller and the policies applied to the request\nYou need to inspect the APIs.\nWhich three actions should you do? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Contributors",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Enable the Allow tracing setting for the subscription used to inspect the API."
      },
      {
        id: "B",
        text: "Add the Ocp-Apim-Trace header value to the API call whit a value set to true."
      },
      {
        id: "C",
        text: "Add the Ocp-Apim-Subscription-Key header value to the key for a subscription that allows access to the API."
      },
      {
        id: "D",
        text: "Create and congure a custom policy. Apply the policy to the inbound policy section with a global scope."
      },
      {
        id: "E",
        text: "Create and congure a custom policy. Apply the policy to the outbound policy section with an API scope."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 295,
    number: 47,
    topic: "Topic 6",
    prompt: "A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing\ntier, subscription, resource group, and location.\nYou need to complete the conguration.\nWhich Azure CLI or PowerShell command should you run?\nA.\nB.\nC.\nD.",
    keySource: "source",
    explanation: "Source answer: /manuals",
    type: "single",
    options: [
      {
        id: "A",
        text: "/manuals"
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
    id: 296,
    number: 48,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou plan to implement an Azure Functions app.\nThe Azure Functions app has the following requirements:\n• Must be triggered by a message placed in an Azure Storage queue.\n• Must use the queue name set by an app setting named input_queue.\n• Must create an Azure Blob Storage named the same as the content of the message.\nYou need to identify how to reference the queue and blob name in the function.json le of the Azure Functions app.\nHow should you reference the names? To answer, select the appropriate values in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: authenticated, A REST API call must read the user’s calendar. The web application requires permission to send an email as the user., E. scope",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "input_gqueue"
      },
      {
        id: "O2",
        text: "You plan to implement an Azure Functions app."
      },
      {
        id: "O3",
        text: "authenticated"
      },
      {
        id: "O4",
        text: "A REST API call must read the user’s calendar. The web application requires permission to send an email as the user."
      },
      {
        id: "O5",
        text: "E. scope"
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
    id: 297,
    number: 49,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou have an Azure API Management instance named API1 that uses a managed gateway.\nYou plan to implement a policy that will apply at a product scope and will set the header of inbound requests to include information about the\nregion hosting the gateway of API1. The policy denition contains the following content:\nYou have the following requirements for the policy denition:\n• Ensure that the header contains the information about the region hosting the gateway of API1.\n• Ensure the policy applies only after any global level policies are processed rst.\nYou need to complete the policy denition.\nWhich values should you choose? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You must update the web app to display common user properties from Azure B2C to include the following information:, Microsoft Graph, Microsoft Authentication Library (MSAL)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "policy"
      },
      {
        id: "O2",
        text: "config"
      },
      {
        id: "O3",
        text: "TARGET1"
      },
      {
        id: "O4",
        text: "context"
      },
      {
        id: "O5",
        text: "override"
      },
      {
        id: "O6",
        text: "all"
      },
      {
        id: "O7",
        text: "You must update the web app to display common user properties from Azure B2C to include the following information:"
      },
      {
        id: "O8",
        text: "Microsoft Graph"
      },
      {
        id: "O9",
        text: "Microsoft Authentication Library (MSAL)"
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
    id: 298,
    number: 50,
    topic: "Topic 6",
    prompt: "You are developing several Azure API Management (APIM) hosted APIs.\nYou must make several minor and non-breaking changes to one of the APIs. The API changes include the following requirements:\n• Must not disrupt callers of the API.\n• Enable roll back if you nd issues.\n• Documented to enable developers to understand what is new.\n• Tested before publishing.\nYou need to update the API.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: You develop and deploy the following staticwebapp.config.json file to the app_location value specified in the workflow file of an Azure Static Web app:",
    type: "single",
    options: [
      {
        id: "A",
        text: "Congure and apply header-based versioning."
      },
      {
        id: "B",
        text: "Create and publish a product."
      },
      {
        id: "C",
        text: "Congure and apply a custom policy."
      },
      {
        id: "D",
        text: "Add a new revision to the API."
      },
      {
        id: "E",
        text: "Congure and apply query string-based versioning."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 299,
    number: 51,
    topic: "Topic 6",
    prompt: "HOTSPOT\n-\nYou are developing an application to store millions of images in Azure blob storage.\nThe application has the following requirements:\n• Store the Exif (exchangeable image le format) data from the image as blob metadata when the application uploads the image.\n• Retrieve the Exif data from the image while minimizing bandwidth and processing time.\n• Utilizes the REST API.\nYou need to use the image Exif data as blob metadata in the application.\nWhich HTTP verbs should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: NO, YES",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "enabled for the microservices."
      },
      {
        id: "O2",
        text: "CONNECT"
      },
      {
        id: "O3",
        text: "metadata"
      },
      {
        id: "O4",
        text: "metricType"
      },
      {
        id: "O5",
        text: "authenticationRef"
      },
      {
        id: "O6",
        text: "PUT"
      },
      {
        id: "O7",
        text: "POST"
      },
      {
        id: "O8",
        text: "HEAD"
      },
      {
        id: "O9",
        text: "type"
      },
      {
        id: "O10",
        text: "name"
      },
      {
        id: "O11",
        text: "NO"
      },
      {
        id: "O12",
        text: "YES"
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
    id: 300,
    number: 52,
    topic: "Topic 6",
    prompt: "You are developing several microservices to run on Azure Container Apps for a company. External TCP ingress trac from the internet has been\nenabled for the microservices.\nThe company requires that the microservices must scale based on an Azure Event Hub trigger.\nYou need to scale the microservices by using a custom scaling rule.\nWhich two Kubernetes Event-driven Autoscaling (KEDA) trigger elds should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "metadata"
      },
      {
        id: "B",
        text: "type"
      },
      {
        id: "C",
        text: "authenticationRef"
      },
      {
        id: "D",
        text: "name"
      },
      {
        id: "E",
        text: "metricType Topic 7 - Testlet 1"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 301,
    number: 1,
    topic: "Topic 7",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply\nchain operations and would like to leverage serverless computing where possible.\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workows:\nOcean Transport `\" This workow gathers and validates container information including container contents and arrival notices at various shipping\nports.\nInland Transport `\" This workow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure\nSite Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host\nBizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\nRequirements -\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a xed costing model.\nMaintain on-premises connectivity to support legacy applications and nal BizTalk migrations.\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\nIssues -\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must\nenable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource.\nOrigin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nHOTSPOT -\nYou need to congure Azure CDN for the Shipping web site.\nWhich conguration options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: NO, You need to grant App1 access to Vault1 and automatically rotate credentials. Credentials must not be stored in code., D. Assign a managed identity to App1",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "ports."
      },
      {
        id: "O2",
        text: "NO"
      },
      {
        id: "O3",
        text: "You need to grant App1 access to Vault1"
      },
      {
        id: "O4",
        text: "automatically rotate credentials. Credentials must not be stored in code."
      },
      {
        id: "O5",
        text: "D. Assign a managed identity to App1"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 302,
    number: 2,
    topic: "Topic 7",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply\nchain operations and would like to leverage serverless computing where possible.\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workows:\nOcean Transport `\" This workow gathers and validates container information including container contents and arrival notices at various shipping\nports.\nInland Transport `\" This workow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure\nSite Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host\nBizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\nRequirements -\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a xed costing model.\nMaintain on-premises connectivity to support legacy applications and nal BizTalk migrations.\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\nIssues -\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must\nenable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource.\nOrigin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nHOTSPOT -\nYou need to correct the VM issues.\nWhich tools should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 8 - Testlet 10",
    keySource: "source",
    explanation: "Source answer: You need to configure Always Encrypted to encrypt the sensitive data inside the application., B. Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance., You build a web page that shows all Azure AD groups that are not of the type 'Unified'. You need to build the Microsoft Graph query for the page.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "ports."
      },
      {
        id: "O2",
        text: "You need to configure Always Encrypted to encrypt the sensitive data inside the application."
      },
      {
        id: "O3",
        text: "B. Create a customer-managed key (CMK)"
      },
      {
        id: "O4",
        text: "store the key in a new Azure Key Vault instance."
      },
      {
        id: "O5",
        text: "You build a web page that shows all Azure AD groups that are not of the type 'Unified'. You need to build the Microsoft Graph query for the page."
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 303,
    number: 1,
    topic: "Topic 8",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nDRAG DROP -\nYou need to add code at line PC32 in Processing.cs to implement the GetCredentials method in the Processing class.\nHow should you complete the code? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: ~/groups?$ filter =NOT groupTypes/any(c:c eq 'Unified')&$count=true, You need to develop code to access a secret stored in Azure Key Vault, SecretClient",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Users table -"
      },
      {
        id: "O2",
        text: "Azure File upload, and instructions on how to configure the mounted folder."
      },
      {
        id: "O3",
        text: "reimbursement."
      },
      {
        id: "O4",
        text: "Data Storage -"
      },
      {
        id: "O5",
        text: "~/groups?$ filter =NOT groupTypes/any(c:c eq 'Unified')&$count=true"
      },
      {
        id: "O6",
        text: "You need to develop code to access a secret stored in Azure Key Vault"
      },
      {
        id: "O7",
        text: "SecretClient"
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
    id: 304,
    number: 2,
    topic: "Topic 8",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nDRAG DROP -\nYou need to ensure disaster recovery requirements are met.\nWhat code should you add at line PC16?\nTo answer, drag the appropriate code fragments to the correct locations. Each code fragment may be used once, more than once, or not at all. You\nmay need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\nTopic 9 - Testlet 11",
    keySource: "source",
    explanation: "Source answer: DefaultAzureCredential, Access to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used. You need to load configuration data from Azure App Configuration., DefaultAzureCredential",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Users table -"
      },
      {
        id: "O2",
        text: "Azure File upload, and instructions on how to configure the mounted folder."
      },
      {
        id: "O3",
        text: "reimbursement."
      },
      {
        id: "O4",
        text: "Data Storage -"
      },
      {
        id: "O5",
        text: "DefaultAzureCredential"
      },
      {
        id: "O6",
        text: "Access to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used. You need to load configuration data from Azure App Configuration."
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
      "t3:O5"
    ]
  },
  {
    id: 305,
    number: 1,
    topic: "Topic 9",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient\napplications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application\nconsists of ve modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to\nsupport label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service\n(AKS) cluster.\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted\non Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\nArchitecture -\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workow fails to run upon initial deployment to Azure.\nOrder.json -\nRelevant portions of the app les are shown below. Line numbers are included for reference only.\nThis JSON le contains a representation of the data for an order that includes a single item.\nOrder.json -\nQuestion\nHOTSPOT -\nYou need to congure Azure Cosmos DB.\nWhich settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: AddAzureAppConfiguration, DefaultAzureCredential, AddAzureAppConfiguration",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Storage of e-commerce application settings must be maintained in Azure Key Vault."
      },
      {
        id: "O2",
        text: "AddAzureAppConfiguration"
      },
      {
        id: "O3",
        text: "DefaultAzureCredential"
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
      "t3:O2"
    ]
  },
  {
    id: 306,
    number: 2,
    topic: "Topic 9",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient\napplications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application\nconsists of ve modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to\nsupport label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service\n(AKS) cluster.\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted\non Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\nArchitecture -\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workow fails to run upon initial deployment to Azure.\nOrder.json -\nRelevant portions of the app les are shown below. Line numbers are included for reference only.\nThis JSON le contains a representation of the data for an order that includes a single item.\nOrder.json -\nQuestion\nHOTSPOT -\nYou need to retrieve all order line items from Order.json and sort the data alphabetically by the city.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 10 - Testlet 12",
    keySource: "source",
    explanation: "Source answer: You need to configure key rotation and enable key expiry notifications., A. Create and configure a new Azure Event Grid instance., C. Create and assign an Azure Key Vault access policy",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Storage of e-commerce application settings must be maintained in Azure Key Vault."
      },
      {
        id: "O2",
        text: "You need to configure key rotation"
      },
      {
        id: "O3",
        text: "enable key expiry notifications."
      },
      {
        id: "O4",
        text: "A. Create"
      },
      {
        id: "O5",
        text: "configure a new Azure Event Grid instance."
      },
      {
        id: "O6",
        text: "C. Create"
      },
      {
        id: "O7",
        text: "assign an Azure Key Vault access policy"
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
      "t1:O2",
      "t2:O3",
      "t3:O4",
      "t4:O5",
      "t5:O6",
      "t6:O7"
    ]
  },
  {
    id: 307,
    number: 1,
    topic: "Topic 10",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement the Azure Function for delivery driver prole information.\nWhich congurations should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: The APIs require an access token from the Microsoft identity platform.You need to request a token., A. Redirect URI/URL, B. Application ID",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "verification."
      },
      {
        id: "O2",
        text: "Minimize costs for data storage and hosting."
      },
      {
        id: "O3",
        text: "Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using"
      },
      {
        id: "O4",
        text: "The APIs require an access token from the Microsoft identity platform.You need to request a token."
      },
      {
        id: "O5",
        text: "A. Redirect URI/URL"
      },
      {
        id: "O6",
        text: "B. Application ID"
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
    id: 308,
    number: 2,
    topic: "Topic 10",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nYou need to grant access to the retail store location data for the inventory service development effort.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: D. Application secret",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD access token"
      },
      {
        id: "B",
        text: "Azure RBAC role"
      },
      {
        id: "C",
        text: "Shared access signature (SAS) token"
      },
      {
        id: "D",
        text: "Azure AD ID token"
      },
      {
        id: "E",
        text: "Azure AD refresh token"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 309,
    number: 3,
    topic: "Topic 10",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to reliably identify the delivery driver prole information.\nHow should you congure the system? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You need to provide a script to rotate keys to the customer., key, Microsoft.KeyVault",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "verification."
      },
      {
        id: "O2",
        text: "Minimize costs for data storage and hosting."
      },
      {
        id: "O3",
        text: "storage account for three months to include read-only access to the data."
      },
      {
        id: "O4",
        text: "Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using"
      },
      {
        id: "O5",
        text: "You need to provide a script to rotate keys to the customer."
      },
      {
        id: "O6",
        text: "key"
      },
      {
        id: "O7",
        text: "Microsoft.KeyVault"
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
    id: 310,
    number: 4,
    topic: "Topic 10",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nYou need to secure the Azure Functions to meet the security requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You must transform the APIs to hide private backend information and obscure the technology stack used to implement the backend processing",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Store the RSA-HSM key in Azure Key Vault with soft-delete and purge-protection features enabled."
      },
      {
        id: "B",
        text: "Store the RSA-HSM key in Azure Blob storage with an immutability policy applied to the container."
      },
      {
        id: "C",
        text: "Create a free tier Azure App Conguration instance with a new Azure AD service principal."
      },
      {
        id: "D",
        text: "Create a standard tier Azure App Conguration instance with an assigned Azure AD managed identity."
      },
      {
        id: "E",
        text: "Store the RSA-HSM key in Azure Cosmos DB. Apply the built-in policies for customer-managed keys and allowed locations. Topic 11 - Testlet 13"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 311,
    number: 1,
    topic: "Topic 11",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nDRAG DROP -\nYou need to add markup at line AM04 to implement the ContentReview role.\nHow should you complete the markup? To answer, drag the appropriate json segments to the correct locations. Each json segment may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: C. Configure and apply a new outbound policy scoped to global., You develop a web app that uses the tier D1 app service plan by using the Web Apps feature of Microsoft Azure App Service., Configure the web app to the Standard App Service Tier",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "C. Configure"
      },
      {
        id: "O3",
        text: "apply a new outbound policy scoped to global."
      },
      {
        id: "O4",
        text: "You develop a web app that uses the tier D1 app service plan by using the Web Apps feature of Microsoft Azure App Service."
      },
      {
        id: "O5",
        text: "Configure the web app to the Standard App Service Tier"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 312,
    number: 2,
    topic: "Topic 11",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nHOTSPOT -\nYou need to add code at line AM09 to ensure that users can review content using ContentAnalysisService.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Enable autoscaling on the web app, Add a Scale condition, Add a scale rule",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "Enable autoscaling on the web app"
      },
      {
        id: "O3",
        text: "Add a Scale condition"
      },
      {
        id: "O4",
        text: "Add a scale rule"
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
    id: 313,
    number: 3,
    topic: "Topic 11",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nHOTSPOT -\nYou need to ensure that network security policies are met.\nHow should you congure network security? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Enable Application Request Routing (ARR)., NO, Deploy and configure an Azure Database for PostgreSQL. Update the web applications.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "Enable Application Request Routing (ARR)."
      },
      {
        id: "O3",
        text: "NO"
      },
      {
        id: "O4",
        text: "Deploy"
      },
      {
        id: "O5",
        text: "configure an Azure Database for PostgreSQL. Update the web applications."
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 314,
    number: 4,
    topic: "Topic 11",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nDRAG DROP -\nYou need to add YAML markup at line CS17 to ensure that the ContentUploadService can access Azure Storage access keys.\nHow should you complete the YAML markup? To answer, drag the appropriate YAML segments to the correct locations. Each YAML segment may\nbe used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: NO, You need to invalidate the cache when team data is changed., IDatabase cache = Connection.GetDatabase();",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "NO"
      },
      {
        id: "O3",
        text: "You need to invalidate the cache when team data is changed."
      },
      {
        id: "O4",
        text: "IDatabase cache = Connection.GetDatabase()"
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
    id: 315,
    number: 5,
    topic: "Topic 11",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nHOTSPOT -\nYou need to add code at line AM10 of the application manifest to ensure that the requirement for manually reviewing content can be met.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 12 - Testlet 14",
    keySource: "source",
    explanation: "Source answer: cache.KeyDelete(\"teams\"), A company has multiple warehouses. Each warehouse contains IoT temperature devices which deliver temperature data to an Azure Service Bus queue., Create blank logic app",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "cache.KeyDelete(\"teams\")"
      },
      {
        id: "O3",
        text: "A company has multiple warehouses. Each warehouse contains IoT temperature devices which deliver temperature data to an Azure Service Bus queue."
      },
      {
        id: "O4",
        text: "Create blank logic app"
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
    id: 316,
    number: 1,
    topic: "Topic 12",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply\nchain operations and would like to leverage serverless computing where possible.\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workows:\nOcean Transport `\" This workow gathers and validates container information including container contents and arrival notices at various shipping\nports.\nInland Transport `\" This workow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure\nSite Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host\nBizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\nRequirements -\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a xed costing model.\nMaintain on-premises connectivity to support legacy applications and nal BizTalk migrations.\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\nIssues -\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must\nenable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource.\nOrigin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nHOTSPOT -\nYou need to secure the Shipping Function app.\nHow should you congure the app? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Add logic app trigger when one or more messages arrive in the queue, Add an Action to read IoT Temp data, Compare upper and lower temp",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "ports."
      },
      {
        id: "O2",
        text: "Add logic app trigger when one or more messages arrive in the queue"
      },
      {
        id: "O3",
        text: "Add an Action to read IoT Temp data"
      },
      {
        id: "O4",
        text: "Compare upper"
      },
      {
        id: "O5",
        text: "lower temp"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 317,
    number: 2,
    topic: "Topic 12",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply\nchain operations and would like to leverage serverless computing where possible.\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workows:\nOcean Transport `\" This workow gathers and validates container information including container contents and arrival notices at various shipping\nports.\nInland Transport `\" This workow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure\nSite Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host\nBizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\nRequirements -\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a xed costing model.\nMaintain on-premises connectivity to support legacy applications and nal BizTalk migrations.\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\nIssues -\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must\nenable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource.\nOrigin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nYou need to secure the Shipping Logic App.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: Add an action that send emails",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure App Service Environment (ASE)"
      },
      {
        id: "B",
        text: "Integration Service Environment (ISE)"
      },
      {
        id: "C",
        text: "VNet service endpoint"
      },
      {
        id: "D",
        text: "Azure AD B2B integration Topic 13 - Testlet 15"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 318,
    number: 1,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to retrieve the database connection string.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Which Azure Application Insights Usage Analysis features should you use?, Funnels, Impact",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "! Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "Which Azure Application Insights Usage Analysis features should you use?"
      },
      {
        id: "O7",
        text: "Funnels"
      },
      {
        id: "O8",
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
      "t1:O6",
      "t2:O7",
      "t3:O8"
    ]
  },
  {
    id: 319,
    number: 2,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nDRAG DROP -\nYou need to correct the corporate website error.\nWhich four actions should you recommend be performed in sequence? To answer, move the appropriate actions from the list of actions to the\nanswer area and arrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Retention, User Flows, You need to ensure that you can access the news API by using an Azure API Management service instance., A. Import-AzureRmApiManagementApi -Context $ApiMgmtContext -SpecificationFormat \"Swagger\" -SpecificationPath $SwaggerPath -Path $Path",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "Retention"
      },
      {
        id: "O7",
        text: "User Flows"
      },
      {
        id: "O8",
        text: "You need to ensure that you can access the news API by using an Azure API Management service instance."
      },
      {
        id: "O9",
        text: "A. Import-AzureRmApiManagementApi -Context $ApiMgmtContext -SpecificationFormat \"Swagger\" -SpecificationPath $SwaggerPath -Path $Path"
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
    id: 320,
    number: 3,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to congure API Management for authentication.\nWhich policy values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You need to implement a reply trail auditing solution., A. Assign the value of the hazard message SessionID property to the ReplyToSessionId property., D. Assign the value of the hazard message MessageId property to the CorrelationId property.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "You need to implement a reply trail auditing solution."
      },
      {
        id: "O7",
        text: "A. Assign the value of the hazard message SessionID property to the ReplyToSessionId property."
      },
      {
        id: "O8",
        text: "D. Assign the value of the hazard message MessageId property to the CorrelationId property."
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
    id: 321,
    number: 4,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nYou need to authenticate the user to the corporate website as indicated by the architectural diagram.\nWhich two values should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You are developing an Azure function that connects to an Azure SQL Database instance. The function is triggered by an Azure Storage queue.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "ID token signature"
      },
      {
        id: "B",
        text: "ID token claims"
      },
      {
        id: "C",
        text: "HTTP response code"
      },
      {
        id: "D",
        text: "Azure AD endpoint URI"
      },
      {
        id: "E",
        text: "Azure AD tenant ID"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 322,
    number: 5,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to correct the Azure Logic app error message.\nWhich conguration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You need to prevent the exception. In the host.json file, decrease the value of the batchSize option, You need to store the information.Proposed Solution: Deploy and configure Azure Cache for Redis. Update the web applications.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "You need to prevent the exception. In the host.json file"
      },
      {
        id: "O7",
        text: "decrease the value of the batchSize option"
      },
      {
        id: "O8",
        text: "You need to store the information.Proposed Solution: Deploy"
      },
      {
        id: "O9",
        text: "configure Azure Cache for Redis. Update the web applications."
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
    id: 323,
    number: 6,
    topic: "Topic 13",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to congure Azure Service Bus to Event Grid integration.\nWhich Azure Service Bus settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 14 - Testlet 16",
    keySource: "source",
    explanation: "Source answer: YES, You are debugging an application that is running on Azure Kubernetes cluster named cluster1 You need to determine on which virtual machines (VMs) the errors are occurring.How should you complete the Azure Monitor query?, ago(1)",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "YES"
      },
      {
        id: "O7",
        text: "You are debugging an application that is running on Azure Kubernetes cluster named cluster1 You need to determine on which virtual machines (VMs) the errors are occurring.How should you complete the Azure Monitor query?"
      },
      {
        id: "O8",
        text: "ago(1)"
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
    id: 324,
    number: 1,
    topic: "Topic 14",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nHOTSPOT -\nYou need to add code at line PC26 of Processing.cs to ensure that security policies are met.\nHow should you complete the code that you will add at line PC26? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: distinct ContainerID, where ContainerID in (ContainerIDs), summarize count() by Computer",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Users table -"
      },
      {
        id: "O2",
        text: "Azure File upload, and instructions on how to configure the mounted folder."
      },
      {
        id: "O3",
        text: "reimbursement."
      },
      {
        id: "O4",
        text: "Data Storage -"
      },
      {
        id: "O5",
        text: "distinct ContainerID"
      },
      {
        id: "O6",
        text: "where ContainerID in (ContainerIDs)"
      },
      {
        id: "O7",
        text: "summarize count() by Computer"
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
    id: 325,
    number: 2,
    topic: "Topic 14",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nYou need to ensure the security policies are met.\nWhat code do you add at line CS07 of CongureSSE.ps1?",
    keySource: "source",
    explanation: "Source answer: You plan to deploy a web app to App Service on Linux. You create an App Service plan. You create and push a custom Docker image that contains the web app to Azure Container Registry.You need to access the console logs generated from inside the container in real-time.",
    type: "single",
    options: [
      {
        id: "A",
        text: "ג€\"PermissionsToKeys create, encrypt, decrypt"
      },
      {
        id: "B",
        text: "ג€\"PermissionsToCerticates create, encrypt, decrypt"
      },
      {
        id: "C",
        text: "ג€\"PermissionsToCerticates wrapkey, unwrapkey, get"
      },
      {
        id: "D",
        text: "ג€\"PermissionsToKeys wrapkey, unwrapkey, get Topic 15 - Testlet 17"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 326,
    number: 1,
    topic: "Topic 15",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nYou need to reduce read latency for the retail store solution.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: config",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a new composite index for the store location data queries in Azure Cosmos DB. Modify the queries to support parameterized SQL and update the Azure Function app to call the new queries."
      },
      {
        id: "B",
        text: "Provision an Azure Cosmos DB dedicated gateway. Update the Azure Function app connection string to use the new dedicated gateway endpoint."
      },
      {
        id: "C",
        text: "Congure Azure Cosmos DB consistency to session consistency. Cache session tokens in a new Azure Redis cache instance after every write. Update reads to use the session token stored in Azure Redis."
      },
      {
        id: "D",
        text: "Provision an Azure Cosmos DB dedicated gateway. Update blob storage to use the new dedicated gateway endpoint."
      },
      {
        id: "E",
        text: "Congure Azure Cosmos DB consistency to strong consistency. Increase the RUs for the container supporting store location data."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 327,
    number: 2,
    topic: "Topic 15",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nYou need to audit the retail store sales transactions.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: docker-container-logging",
    type: "single",
    options: [
      {
        id: "A",
        text: "Update the retail store location data upload process to include blob index tags. Create an Azure Function to process the blob index tags and lter by store location."
      },
      {
        id: "B",
        text: "Process the change feed logs of the Azure Blob storage account by using an Azure Function. Specify a time range for the change feed data."
      },
      {
        id: "C",
        text: "Enable blob versioning for the storage account. Use an Azure Function to process a list of the blob versions per day."
      },
      {
        id: "D",
        text: "Process an Azure Storage blob inventory report by using an Azure Function. Create rule lters on the blob inventory report."
      },
      {
        id: "E",
        text: "Subscribe to blob storage events by using an Azure Function and Azure Event Grid. Filter the events by store location. Topic 16 - Testlet 18"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 328,
    number: 1,
    topic: "Topic 16",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nYou need to monitor ContentUploadService according to the requirements.\nWhich command should you use?",
    keySource: "source",
    explanation: "Source answer: webapp",
    type: "single",
    options: [
      {
        id: "A",
        text: "az monitor metrics alert create ג€\"n alert ג€\"g ג€¦ - -scopes ג€¦ - -condition \"avg Percentage CPU > 8\""
      },
      {
        id: "B",
        text: "az monitor metrics alert create ג€\"n alert ג€\"g ג€¦ - -scopes ג€¦ - -condition \"avg Percentage CPU > 800\""
      },
      {
        id: "C",
        text: "az monitor metrics alert create ג€\"n alert ג€\"g ג€¦ - -scopes ג€¦ - -condition \"CPU Usage > 800\""
      },
      {
        id: "D",
        text: "az monitor metrics alert create ג€\"n alert ג€\"g ג€¦ - -scopes ג€¦ - -condition \"CPU Usage > 8\""
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 329,
    number: 2,
    topic: "Topic 16",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nYou need to investigate the http server log output to resolve the issue with the ContentUploadService.\nWhich command should you use rst?",
    keySource: "source",
    explanation: "Source answer: tail",
    type: "single",
    options: [
      {
        id: "A",
        text: "az webapp log"
      },
      {
        id: "B",
        text: "az ams live-output"
      },
      {
        id: "C",
        text: "az monitor activity-log"
      },
      {
        id: "D",
        text: "az container attach Topic 17 - Testlet 19"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 330,
    number: 1,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nYou need to investigate the Azure Function app error message in the development environment.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: If the app is not responding, you must send an alert to support staff.You need to configure a test for the web app.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Connect Live Metrics Stream from Application Insights to the Azure Function app and lter the metrics."
      },
      {
        id: "B",
        text: "Create a new Azure Log Analytics workspace and instrument the Azure Function app with Application Insights."
      },
      {
        id: "C",
        text: "Update the Azure Function app with extension methods from Microsoft.Extensions.Logging to log events by using the log instance."
      },
      {
        id: "D",
        text: "Add a new diagnostic setting to the Azure Function app to send logs to Log Analytics."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 331,
    number: 2,
    topic: "Topic 17",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to congure security and compliance for the corporate website les.\nWhich Azure Blob storage settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 18 - Testlet 2",
    keySource: "source",
    explanation: "Source answer: B. multi-step web, C. URL ping, Customers must not be able to view cached data for other customers.You need to configure API Management policies for caching.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "B. multi-step web"
      },
      {
        id: "O7",
        text: "C. URL ping"
      },
      {
        id: "O8",
        text: "Customers must not be able to view cached data for other customers.You need to configure API Management policies for caching."
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
    id: 332,
    number: 1,
    topic: "Topic 18",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nYou need to correct the RequestUserApproval Function app error.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: External",
    type: "single",
    options: [
      {
        id: "A",
        text: "Update line RA13 to use the async keyword and return an HttpRequest object value."
      },
      {
        id: "B",
        text: "Congure the Function app to use an App Service hosting plan. Enable the Always On setting of the hosting plan."
      },
      {
        id: "C",
        text: "Update the function to be stateful by using Durable Functions to process the request payload."
      },
      {
        id: "D",
        text: "Update the functionTimeout property of the host.json project le to 15 minutes. Topic 19 - Testlet 20"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 333,
    number: 1,
    topic: "Topic 19",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nDRAG DROP -\nYou need to implement the Log policy.\nHow should you complete the Azure Event Grid subscription? To answer, drag the appropriate JSON segments to the correct locations. Each JSON\nsegment may be used once, more than once, or not at all. You may need to drag the split bar between panes to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Private, Authorization, You need to implement this process with the least amount of effort.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Log policy -"
      },
      {
        id: "O2",
        text: "Policy service -"
      },
      {
        id: "O3",
        text: "Private"
      },
      {
        id: "O4",
        text: "Authorization"
      },
      {
        id: "O5",
        text: "You need to implement this process with the least amount of effort."
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
    id: 334,
    number: 2,
    topic: "Topic 19",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nYou need to ensure that the solution can meet the scaling requirements for Policy Service.\nWhich Azure Application Insights data model should you use?",
    keySource: "source",
    explanation: "Source answer: B. Set up a URL ping test to query the home page.",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Application Insights dependency"
      },
      {
        id: "B",
        text: "an Application Insights event"
      },
      {
        id: "C",
        text: "an Application Insights trace"
      },
      {
        id: "D",
        text: "an Application Insights metric"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 335,
    number: 3,
    topic: "Topic 19",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nDRAG DROP -\nYou need to implement telemetry for non-user actions.\nHow should you complete the Filter class? To answer, drag the appropriate code segments to the correct locations. Each code segment may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: You must send an alert when any of the function endpoints are unavailable or responding too slowly.You need to monitor the availability and responsiveness of the functions., B -  Create a timer triggered function that calls TrackAvailability() and send the results to Application Insights, You are developing an application to retrieve user profile information. The application will use the Microsoft Graph SDK.The app must retrieve user profile information by using a Microsoft Graph API call.You need to call the Microsoft Graph API from the application.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Log policy -"
      },
      {
        id: "O2",
        text: "Policy service -"
      },
      {
        id: "O3",
        text: "You must send an alert when any of the function endpoints are unavailable or responding too slowly.You need to monitor the availability"
      },
      {
        id: "O4",
        text: "responsiveness of the functions."
      },
      {
        id: "O5",
        text: "Create a timer triggered function that calls TrackAvailability()"
      },
      {
        id: "O6",
        text: "send the results to Application Insights"
      },
      {
        id: "O7",
        text: "You are developing an application to retrieve user profile information. The application will use the Microsoft Graph SDK.The app must retrieve user profile information by using a Microsoft Graph API call.You need to call the Microsoft Graph API from the application."
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
      "t1:O3",
      "t2:O4",
      "t3:O5",
      "t4:O6",
      "t5:O7"
    ]
  },
  {
    id: 336,
    number: 4,
    topic: "Topic 19",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nDRAG DROP -\nYou need to ensure that PolicyLib requirements are met.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct locations. Each code segment may be\nused once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\nTopic 20 - Testlet 21",
    keySource: "source",
    explanation: "Source answer: Register the app, Build a client, Create an authentication provider",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Log policy -"
      },
      {
        id: "O2",
        text: "Policy service -"
      },
      {
        id: "O3",
        text: "Register the app"
      },
      {
        id: "O4",
        text: "Build a client"
      },
      {
        id: "O5",
        text: "Create an authentication provider"
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
    id: 337,
    number: 1,
    topic: "Topic 20",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nYou need to ensure receipt processing occurs correctly.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Create a new instance",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use blob properties to prevent concurrency problems"
      },
      {
        id: "B",
        text: "Use blob SnapshotTime to prevent concurrency problems"
      },
      {
        id: "C",
        text: "Use blob metadata to prevent concurrency problems"
      },
      {
        id: "D",
        text: "Use blob leases to prevent concurrency problems"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 338,
    number: 2,
    topic: "Topic 20",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nYou need to resolve the capacity issue.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Invoke the request",
    type: "single",
    options: [
      {
        id: "A",
        text: "Convert the trigger on the Azure Function to an Azure Blob storage trigger"
      },
      {
        id: "B",
        text: "Ensure that the consumption plan is congured correctly to allow scaling"
      },
      {
        id: "C",
        text: "Move the Azure Function to a dedicated App Service Plan"
      },
      {
        id: "D",
        text: "Update the loop starting on line PC09 to process items in parallel"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 339,
    number: 3,
    topic: "Topic 20",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an\nASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details\nthe processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for\nreimbursement.\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\nDocumentation -\nEmployees are provided with a getting started document when they rst use the solution. The documentation includes details on supported\noperating systems for\nAzure File upload, and instructions on how to congure the mounted folder.\nSolution details -\nUsers table -\nWeb Application -\nYou enable MSI for the Web App and congure the Web App to use the security principal name WebAppIdentity.\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored\nin Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must\nremain valid if the email is forwarded to another user.\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter\nlogging enabled.\nApplication Insights must always contain all log messages.\nRequirements -\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that\ndata in the DR region is up to date.\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is\nthe only system that should have access to SecurityPins.\nAll certicates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the\nlast segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\nIssues -\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the\nAzure File\nShare, the receipt does not appear in their prole. When this occurs, they delete the le in the le share and use the web application, which returns\na 500 Internal\nServer error page.\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\nApplication code -\nProcessing.cs -\nDatabase.cs -\nReceiptUploader.cs -\nCongureSSE.ps1 -\nQuestion\nYou need to resolve the log capacity issue.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: The Logic App must use Azure Monitor logs to record and store information about runtime data and events. The logs must be stored in the Azure Blob storage account.You need to set up Azure Monitor logs and collect diagnostics data for the Azure Logic App.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an Application Insights Telemetry Filter"
      },
      {
        id: "B",
        text: "Change the minimum log level in the host.json le for the function"
      },
      {
        id: "C",
        text: "Implement Application Insights Sampling"
      },
      {
        id: "D",
        text: "Set a LogCategoryFilter during startup Topic 21 - Testlet 22"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 340,
    number: 1,
    topic: "Topic 21",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement event routing for retail store location data.\nWhich congurations should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 22 - Testlet 23",
    keySource: "source",
    explanation: "Source answer: Create a log Analytics workspace, Install the Logic Apps Management solution, Add a diagnostic setting to the Azure Logic App",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "verification."
      },
      {
        id: "O2",
        text: "Minimize costs for data storage and hosting."
      },
      {
        id: "O3",
        text: "Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using"
      },
      {
        id: "O4",
        text: "Create a log Analytics workspace"
      },
      {
        id: "O5",
        text: "Install the Logic Apps Management solution"
      },
      {
        id: "O6",
        text: "Add a diagnostic setting to the Azure Logic App"
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
    id: 341,
    number: 1,
    topic: "Topic 22",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient\napplications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application\nconsists of ve modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to\nsupport label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service\n(AKS) cluster.\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted\non Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\nArchitecture -\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workow fails to run upon initial deployment to Azure.\nOrder.json -\nRelevant portions of the app les are shown below. Line numbers are included for reference only.\nThis JSON le contains a representation of the data for an order that includes a single item.\nQuestion\nYou need to troubleshoot the order workow.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: You develop an application. You plan to host the application on a set of virtual machines (VMs) in Azure.You need to configure Azure Monitor to collect logs from the application.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Review the API connections."
      },
      {
        id: "B",
        text: "Review the activity log."
      },
      {
        id: "C",
        text: "Review the run history."
      },
      {
        id: "D",
        text: "Review the trigger history."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 342,
    number: 2,
    topic: "Topic 22",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient\napplications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application\nconsists of ve modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to\nsupport label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service\n(AKS) cluster.\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted\non Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\nArchitecture -\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workow fails to run upon initial deployment to Azure.\nOrder.json -\nRelevant portions of the app les are shown below. Line numbers are included for reference only.\nThis JSON le contains a representation of the data for an order that includes a single item.\nQuestion\nHOTSPOT -\nYou need to update the order workow to address the issue when calling the Printer API App.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 23 - Testlet 24",
    keySource: "source",
    explanation: "Source answer: Create a Log Analytics workspace, Add a VMInsights solution, Install agents on the VM and VM scale",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Storage of e-commerce application settings must be maintained in Azure Key Vault."
      },
      {
        id: "O2",
        text: "Create a Log Analytics workspace"
      },
      {
        id: "O3",
        text: "Add a VMInsights solution"
      },
      {
        id: "O4",
        text: "Install agents on the VM"
      },
      {
        id: "O5",
        text: "VM scale"
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 343,
    number: 1,
    topic: "Topic 23",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply\nchain operations and would like to leverage serverless computing where possible.\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workows:\nOcean Transport `\" This workow gathers and validates container information including container contents and arrival notices at various shipping\nports.\nInland Transport `\" This workow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure\nSite Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host\nBizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\nRequirements -\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a xed costing model.\nMaintain on-premises connectivity to support legacy applications and nal BizTalk migrations.\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\nIssues -\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must\nenable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource.\nOrigin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nDRAG DROP -\nYou need to support the message processing for the ocean transport workow.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Create an Application Insights resource, You develop and deploy an Azure App Service web app. The app is deployed to multiple regions and uses Azure Traffic Manager. Application Insights is enabled for the app.You need to analyze app uptime for each month.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "ports."
      },
      {
        id: "O2",
        text: "Create an Application Insights resource"
      },
      {
        id: "O3",
        text: "You develop"
      },
      {
        id: "O4",
        text: "deploy an Azure App Service web app. The app is deployed to multiple regions"
      },
      {
        id: "O5",
        text: "uses Azure Traffic Manager. Application Insights is enabled for the app.You need to analyze app uptime for each month."
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
      "t2:O3",
      "t3:O4",
      "t4:O5"
    ]
  },
  {
    id: 344,
    number: 2,
    topic: "Topic 23",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply\nchain operations and would like to leverage serverless computing where possible.\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workows:\nOcean Transport `\" This workow gathers and validates container information including container contents and arrival notices at various shipping\nports.\nInland Transport `\" This workow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure\nSite Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host\nBizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\nRequirements -\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a xed costing model.\nMaintain on-premises connectivity to support legacy applications and nal BizTalk migrations.\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\nIssues -\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must\nenable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource.\nOrigin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nYou need to support the requirements for the Shipping Logic App.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: Azure Monitor logs",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Active Directory Application Proxy"
      },
      {
        id: "B",
        text: "Site-to-Site (S2S) VPN connection"
      },
      {
        id: "C",
        text: "On-premises Data Gateway"
      },
      {
        id: "D",
        text: "Point-to-Site (P2S) VPN connection Topic 24 - Testlet 25"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 345,
    number: 1,
    topic: "Topic 24",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to congure the integration for Azure Service Bus and Azure Event Grid.\nHow should you complete the CLI statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Azure Monitor metrics, Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content., Set",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "! Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "Azure Monitor metrics"
      },
      {
        id: "O7",
        text: "Each feature may be used once"
      },
      {
        id: "O8",
        text: "more than once"
      },
      {
        id: "O9",
        text: "or not at all. You may need to drag the split bar between panes or scroll to view content."
      },
      {
        id: "O10",
        text: "Set"
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
      "t1:O6",
      "t2:O7",
      "t3:O8",
      "t4:O9",
      "t5:O10"
    ]
  },
  {
    id: 346,
    number: 2,
    topic: "Topic 24",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nYou need to ensure that all messages from Azure Event Grid are processed.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: List",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Event Grid topic"
      },
      {
        id: "B",
        text: "Azure Service Bus topic"
      },
      {
        id: "C",
        text: "Azure Service Bus queue"
      },
      {
        id: "D",
        text: "Azure Storage queue"
      },
      {
        id: "E",
        text: "Azure Logic App custom connector Topic 25 - Testlet 26"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 347,
    number: 1,
    topic: "Topic 25",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nDRAG DROP -\nYou need to add code at line EG15 in EventGridController.cs to ensure that the Log policy applies to all services.\nHow should you complete the code? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: Channel, You need to ensure that dependency tracking works for calls to the third-party database.Which two dependency telemetry properties should you use?, Telemetry.Id",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Log policy -"
      },
      {
        id: "O2",
        text: "Policy service -"
      },
      {
        id: "O3",
        text: "Channel"
      },
      {
        id: "O4",
        text: "You need to ensure that dependency tracking works for calls to the third-party database.Which two dependency telemetry properties should you use?"
      },
      {
        id: "O5",
        text: "Telemetry.Id"
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
    id: 348,
    number: 2,
    topic: "Topic 25",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nHOTSPOT -\nYou need to insert code at line LE03 of LoginEvent.cs to ensure that all authentication events are processed correctly.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Telemetry.Context.Operation.Id, The files are 9 megabytes (MB) in size.You need to determine the root cause for the issue.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Log policy -"
      },
      {
        id: "O2",
        text: "Policy service -"
      },
      {
        id: "O3",
        text: "Telemetry.Context.Operation.Id"
      },
      {
        id: "O4",
        text: "The files are 9 megabytes (MB) in size.You need to determine the root cause for the issue."
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
    id: 349,
    number: 3,
    topic: "Topic 25",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nHOTSPOT -\nYou need to implement the Log policy.\nHow should you complete the EnsureLogging method in EventGridController.cs? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 26 - Testlet 3",
    keySource: "source",
    explanation: "Source answer: YES, No",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Log policy -"
      },
      {
        id: "O2",
        text: "Policy service -"
      },
      {
        id: "O3",
        text: "YES"
      },
      {
        id: "O4",
        text: "No"
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
    id: 350,
    number: 1,
    topic: "Topic 26",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal\nservices, external services, and applications. The application will also provide a shared library for common functionality.\nRequirements -\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application\nreacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID eld in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\nPolicies -\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log les should be saved to a container named logdrop. Logs must\nremain in the container for 15 days.\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign\nouts must be processed as quickly as possible.\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib\nlibrary must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\nOther -\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The\nmodel is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\nIssues -\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\nNotication latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\nApp code -\nEventGridController.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nLoginEvent.cs -\nRelevant portions of the app les are shown below. Line numbers are included for reference only and include a two-character prex that denotes\nthe specic le to which they belong.\nQuestion\nYou need to resolve a notication latency issue.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: YES",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Set Always On to true."
      },
      {
        id: "B",
        text: "Ensure that the Azure Function is using an App Service plan."
      },
      {
        id: "C",
        text: "Set Always On to false."
      },
      {
        id: "D",
        text: "Ensure that the Azure Function is set to use a consumption plan. Topic 27 - Testlet 4"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 351,
    number: 1,
    topic: "Topic 27",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\nMessages are sent to ContentUploadService.\nContent is processed by ContentAnalysisService.\nAfter processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nHOTSPOT -\nYou need to ensure that validation testing is triggered per the requirements.\nHow should you complete the code segment? To answer, select the appropriate values in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Customer videos with varying quality must be delivered to the closest regional point of presence(POP) node.You need to configure Azure CDN caching rules., Override, 1 hour",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "Customer videos with varying quality must be delivered to the closest regional point of presence(POP) node.You need to configure Azure CDN caching rules."
      },
      {
        id: "O3",
        text: "Override"
      },
      {
        id: "O4",
        text: "1 hour"
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
    id: 352,
    number: 2,
    topic: "Topic 27",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\nMessages are sent to ContentUploadService.\nContent is processed by ContentAnalysisService.\nAfter processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nYou need to deploy the CheckUserContent Azure Function. The solution must meet the security and cost requirements.\nWhich hosting model should you use?",
    keySource: "source",
    explanation: "Source answer: Cache every unique URL",
    type: "single",
    options: [
      {
        id: "A",
        text: "Premium plan"
      },
      {
        id: "B",
        text: "App Service plan"
      },
      {
        id: "C",
        text: "Consumption plan Topic 28 - Testlet 5"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 353,
    number: 1,
    topic: "Topic 28",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient\napplications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application\nconsists of ve modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to\nsupport label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service\n(AKS) cluster.\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted\non Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\nArchitecture -\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workow fails to run upon initial deployment to Azure.\nOrder.json -\nRelevant portions of the app les are shown below. Line numbers are included for reference only.\nThis JSON le contains a representation of the data for an order that includes a single item.\nOrder.json -\nQuestion\nDRAG DROP -\nYou need to deploy a new version of the LabelMaker application to ACR.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.\nSelect and Place:",
    keySource: "source",
    explanation: "Source answer: You must minimize false-positive alerts.How should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area., DynamicThresholdCriterion",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Storage of e-commerce application settings must be maintained in Azure Key Vault."
      },
      {
        id: "O2",
        text: "You must minimize false-positive alerts.How should you complete the Azure Resource Manager template? To answer"
      },
      {
        id: "O3",
        text: "select the appropriate options in the answer area."
      },
      {
        id: "O4",
        text: "DynamicThresholdCriterion"
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
    id: 354,
    number: 2,
    topic: "Topic 28",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient\napplications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application\nconsists of ve modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to\nsupport label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service\n(AKS) cluster.\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted\non Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\nArchitecture -\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workow fails to run upon initial deployment to Azure.\nOrder.json -\nRelevant portions of the app les are shown below. Line numbers are included for reference only.\nThis JSON le contains a representation of the data for an order that includes a single item.\nOrder.json -\nQuestion\nYou need to access data from the user claim object in the e-commerce web app.\nWhat should you do rst?",
    keySource: "source",
    explanation: "Source answer: Http5XX",
    type: "single",
    options: [
      {
        id: "A",
        text: "Write custom code to make a Microsoft Graph API call from the e-commerce web app."
      },
      {
        id: "B",
        text: "Assign the Contributor RBAC role to the e-commerce web app by using the Resource Manager create role assignment API."
      },
      {
        id: "C",
        text: "Update the e-commerce web app to read the HTTP request header values."
      },
      {
        id: "D",
        text: "Using the Azure CLI, enable Cross-origin resource sharing (CORS) from the e-commerce checkout API to the e-commerce web app. Topic 29 - Testlet 6"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 355,
    number: 1,
    topic: "Topic 29",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement the retail store location Azure Function.\nHow should you congure the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: Low, You need to configure the Azure Cache for Redis to optimize performance for the predicted usage pattern.Which two eviction policies will achieve the goal?, Allkeys-Iru",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "verification."
      },
      {
        id: "O2",
        text: "Minimize costs for data storage and hosting."
      },
      {
        id: "O3",
        text: "Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using"
      },
      {
        id: "O4",
        text: "Low"
      },
      {
        id: "O5",
        text: "You need to configure the Azure Cache for Redis to optimize performance for the predicted usage pattern.Which two eviction policies will achieve the goal?"
      },
      {
        id: "O6",
        text: "Allkeys-Iru"
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
    id: 356,
    number: 2,
    topic: "Topic 29",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement the corporate website.\nHow should you congure the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\nTopic 30 - Testlet 7",
    keySource: "source",
    explanation: "Source answer: Volatile-Iru, The organization wants to track events and telemetry data in the web apps by using Application Insights.You need to configure the web apps for Application Insights.Which three actions should you perform in sequence?, Create an Application Insights resource",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "verification."
      },
      {
        id: "O2",
        text: "Minimize costs for data storage and hosting."
      },
      {
        id: "O3",
        text: "storage account for three months to include read-only access to the data."
      },
      {
        id: "O4",
        text: "Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using"
      },
      {
        id: "O5",
        text: "Volatile-Iru"
      },
      {
        id: "O6",
        text: "The organization wants to track events"
      },
      {
        id: "O7",
        text: "telemetry data in the web apps by using Application Insights.You need to configure the web apps for Application Insights.Which three actions should you perform in sequence?"
      },
      {
        id: "O8",
        text: "Create an Application Insights resource"
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
    id: 357,
    number: 1,
    topic: "Topic 30",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nVanArsdel, Ltd. is a global oce supply company. The company is based in Canada and has retail store locations across the world. The company\nis developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\nCurrent environment -\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML,\nCSS, image assets, and several APIs hosted in Azure Functions.\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support\ninventory, purchasing and delivery services. Each record includes a location identier and sales transaction information.\nRequirements -\nThe application components must meet the following requirements:\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certicate validity and custom header value\nverication.\nThe website must have 99.95 percent uptime.\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using\nnative SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales nancials, and reconcile inventory.\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate,\nvehicle package capacity, and current vehicle location coordinates.\nStore delivery driver prole information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specic blob within the retail store\nstorage account for three months to include read-only access to the data.\nSecurity -\nAll Azure Functions must centralize management and distribution of conguration data for different environments and geographies, encrypted by\nusing a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\nIssues -\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high\npoint read latency for large items as the function app is scaling.\nQuestion\nYou need to implement a solution to resolve the retail store location data issue.\nWhich three Azure Blob features should you enable? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Copy the instrumentation key",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Soft delete"
      },
      {
        id: "B",
        text: "Change feed"
      },
      {
        id: "C",
        text: "Snapshots"
      },
      {
        id: "D",
        text: "Versioning"
      },
      {
        id: "E",
        text: "Object replication"
      },
      {
        id: "F",
        text: "Immutability Topic 31 - Testlet 8"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 358,
    number: 1,
    topic: "Topic 31",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nYou need to store the user agreements.\nWhere should you store the agreement after it is completed?",
    keySource: "source",
    explanation: "Source answer: Install the SDK in your app",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Storage queue"
      },
      {
        id: "B",
        text: "Azure Event Hub"
      },
      {
        id: "C",
        text: "Azure Service Bus topic"
      },
      {
        id: "D",
        text: "Azure Event Grid topic"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 359,
    number: 2,
    topic: "Topic 31",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nHOTSPOT -\nYou need to implement the bindings for the CheckUserContent function.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You discover that configuration changes were made to some of the web apps.You need to identify the configuration changes., AppServiceEnvironmentPlatformlogs, You deploy a code update and receive multiple failed requests and exceptions in the web app.You need to validate the performance and failure counts of the web app in near real time.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Active Directory -"
      },
      {
        id: "O2",
        text: "You discover that configuration changes were made to some of the web apps.You need to identify the configuration changes."
      },
      {
        id: "O3",
        text: "AppServiceEnvironmentPlatformlogs"
      },
      {
        id: "O4",
        text: "You deploy a code update"
      },
      {
        id: "O5",
        text: "receive multiple failed requests"
      },
      {
        id: "O6",
        text: "exceptions in the web app.You need to validate the performance"
      },
      {
        id: "O7",
        text: "failure counts of the web app in near real time."
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
      "t1:O2",
      "t2:O3",
      "t3:O4",
      "t4:O5",
      "t5:O6",
      "t6:O7"
    ]
  },
  {
    id: 360,
    number: 3,
    topic: "Topic 31",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The\nmain web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by\nusing the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\nRequirements -\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for\ninappropriate content. Any values over a specic threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\nCosts -\nYou must minimize costs for all Azure services.\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website\nis built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All\ncompleted reviews must include the reviewer's email address for auditing purposes.\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certicate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound trac restrictions.\nAll service calls must be authenticated by using Azure AD.\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store\ncookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is\nexpected to be in the millions per hour.\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to\nverify that the new version does not signicantly deviate from the old version.\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specic pages.\nCode -\nContentUploadService -\nApplicationManifest -\nQuestion\nYou need to congure the ContentUploadService deployment.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Live Metrics Stream",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Add the following markup to line CS23: type: Private"
      },
      {
        id: "B",
        text: "Add the following markup to line CS24: osType: Windows"
      },
      {
        id: "C",
        text: "Add the following markup to line CS24: osType: Linux"
      },
      {
        id: "D",
        text: "Add the following markup to line CS23: type: Public Topic 32 - Testlet 9"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 361,
    number: 1,
    topic: "Topic 32",
    prompt: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the rst question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. When you are ready to answer a question, click the Question button to return to the question.\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions\nto Azure.\nCurrent environment -\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on\nLinux. The website uses les stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is\nused to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data\nprocessing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where\npossible. The overall architecture is shown below.\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud')\nclaim in the access token.\n6. The back-end API validates the access token.\nRequirements -\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\nSecurity -\nAll SSL certicates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\nCompliance -\nAuditing of the le updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The le updates must be\nread-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance\nreasons.\nIssues -\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot nd the le specied.\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\nCode -\nCorporate website -\nSecurity.cs:\nFunction app -\nRequestUserApproval.cs:\nQuestion\nHOTSPOT -\nYou need to congure the Account Kind, Replication, and Access tier options for the corporate website's Azure Storage account.\nHow should you complete the conguration? To answer, select the appropriate options in the dialog box in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:",
    keySource: "source",
    explanation: "Source answer: You deploy an ASP.NET web app to Azure App Service.You must monitor the web app by using Application Insights.You need to configure Application Insights to meet the requirements., Smart Detection, Snapshot Debugger",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure CDN Azure Storage"
      },
      {
        id: "O2",
        text: "User authentication -"
      },
      {
        id: "O3",
        text: "Azure Active Bell Bell"
      },
      {
        id: "O4",
        text: "User C - <&> w"
      },
      {
        id: "O5",
        text: "! Web Site API Function Azure Database for"
      },
      {
        id: "O6",
        text: "You deploy an ASP.NET web app to Azure App Service.You must monitor the web app by using Application Insights.You need to configure Application Insights to meet the requirements."
      },
      {
        id: "O7",
        text: "Smart Detection"
      },
      {
        id: "O8",
        text: "Snapshot Debugger"
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
  }
];
