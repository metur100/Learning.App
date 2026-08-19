import type { Question } from "../../types";

export const az305Questions: Question[] = [
  {
    id: 1,
    number: 1,
    topic: "Topic 1",
    prompt: "You have an Azure subscription that contains a custom application named Application. Application1 was developed by an external company\nnamed Fabrikam,\nLtd. Developers at Fabrikam were assigned role-based access control (RBAC) permissions to the Application components. All users are licensed\nfor the\nMicrosoft 365 E5 plan.\nYou need to recommend a solution to verify whether the Fabrikam developers still require permissions to Application. The solution must meet\nthe following requirements:\n= To the manager of the developers, send a monthly email message that lists the access permissions to Application]\nco If the manager does not verify an access permission, automatically revoke that permission.\n©» Minimize development effort.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "In Azure Active Directory (Azure AD), create an access review of Application."
      },
      {
        id: "B",
        text: "Create an Azure Automation runbook that runs the Get-AzRoleAssignment cmdlet."
      },
      {
        id: "C",
        text: "In Azure Active Directory (Azure AD) Privileged Identity Management, create a custom role assignment for the Application? resources."
      },
      {
        id: "D",
        text: "Create an Azure Automation runbook that runs the Get-AzureADUserAppRoleAssignment cmdlet."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 2,
    number: 2,
    topic: "Topic 1",
    prompt: "You have an Azure subscription. The subscription has a blob container that contains multiple blobs.\nTen users in the finance department of your company plan to access the blobs during the month of April.\nYou need to recommend a solution to enable access to the blobs during the month of April only.\nWhich security solution should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "shared access signatures (SAS) (ost voted)"
      },
      {
        id: "B",
        text: "Conditional Access policies"
      },
      {
        id: "C",
        text: "certificates"
      },
      {
        id: "D",
        text: "access keys"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 3,
    number: 3,
    topic: "Topic 1",
    prompt: "You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.\nYou have an internal web app named WebApp1 that is hosted on-premises. WebApp1 uses Integrated Windows authentication.\nSome users work remotely and do NOT have VPN access to the on-premises network.\nYou need to provide the remote users with single sign-on (SSO) access to WebApp1\nWhich two features should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Azure AD Application Proxy"
      },
      {
        id: "B",
        text: "Azure AD Privileged Identity Management (PIM)"
      },
      {
        id: "C",
        text: "Conditional Access policies"
      },
      {
        id: "D",
        text: "Azure Arc"
      },
      {
        id: "E",
        text: "Azure AD enterprise applications"
      },
      {
        id: "F",
        text: "Azure Application Gateway"
      },
    ],
    correct: [
      "A",
      "E",
    ]
  },
  {
    id: 4,
    number: 4,
    topic: "Topic 1",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com that has a security group named Group1. Group is configured for\nassigned membership. Group1 has 50 members, including 20 guest users.\nYou need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:\n© The evaluation must be repeated automatically every three months.\n= Every member must be able to report whether they need to be in Group1.\n=» Users who report that they do not need to be in Group must be removed from Group automatically.\n=» Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Implement Azure AD Identity Protection."
      },
      {
        id: "B",
        text: "Change the Membership type of Group1 to Dynamic User."
      },
      {
        id: "C",
        text: "Create an access review."
      },
      {
        id: "D",
        text: "Implement Azure AD Privileged Identity Management (PIM)."
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 5,
    number: 5,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou plan to deploy Azure Databricks to support a machine learning application. Data engineers will mount an Azure Data Lake Storage account to\nthe Databricks file system. Permissions to folders are granted directly to the data engineers.\nYou need to recommend a design for the planned Databrick deployment. The solution must meet the following requirements:\nc= Ensure that the data engineers can only access folders to which they have permissions.\nco Minimize development effort.\n© Minimize costs.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Databricks SKU = Premium; Cluster configuration = Credential passthrough.",
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
        text: "Credential passthrough"
      },
      {
        id: "O4",
        text: "Managed identities"
      },
      {
        id: "O5",
        text: "MLflow"
      },
      {
        id: "O6",
        text: "A runtime that contains Photon"
      },
      {
        id: "O7",
        text: "Secret scope"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Databricks SKU"
      },
      {
        id: "t2",
        text: "Cluster configuration"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O3",
    ]
  },
  {
    id: 6,
    number: 6,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou plan to deploy an Azure web app named App1 that will use Azure Active Directory (Azure AD) authentication.\nApp1 will be accessed from the internet by the users at your company. All the users have computers that run Windows 10 and are joined to Azure\nAD.\nYou need to recommend a solution to ensure that the users can connect to App1 without being prompted for authentication and can access App1\nonly from company-owned computers.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: The users can connect to App1 without being prompted for authentication = An Azure AD app registration; The users can access App1 only from company-owned computers = A Conditional Access policy.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "An Azure AD app registration"
      },
      {
        id: "O2",
        text: "An Azure AD managed identity"
      },
      {
        id: "O3",
        text: "Azure AD Application Proxy"
      },
      {
        id: "O4",
        text: "A Conditional Access policy"
      },
      {
        id: "O5",
        text: "An Azure AD administrative unit"
      },
      {
        id: "O6",
        text: "Azure Application Gateway"
      },
      {
        id: "O7",
        text: "Azure Blueprints"
      },
      {
        id: "O8",
        text: "Azure Policy"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "The users can connect to App1 without being prompted for authentication"
      },
      {
        id: "t2",
        text: "The users can access App1 only from company-owned computers"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O4",
    ]
  },
  {
    id: 7,
    number: 7,
    topic: "Topic 1",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\nconnectivity.\nSeveral virtual machines exhibit network connectivity issues.\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\nSolution: Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No (Hest ote)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 8,
    number: 8,
    topic: "Topic 1",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute i deployed and configured for on-premises to Azure\nconnectivity.\nSeveral virtual machines exhibit network connectivity issues.\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\nSolution: Use Azure Advisor to analyze the network traffic.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes B Nome)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 9,
    number: 9,
    topic: "Topic 1",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\nconnectivity.\nSeveral virtual machines exhibit network connectivity issues.\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\nSolution: Use Azure Network Watcher to run IP flow verify to analyze the network traffic.\nDoes this meet the goal?\nA Yes (va)",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "B",
        text: "No"
      },
    ],
    correct: [
      "B",
    ]
  },
  {
    id: 10,
    number: 10,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou have an Azure subscription. The subscription contains Azure virtual machines that run Windows Server 2016 and Linux.\nYou need to use Azure Monitor to design an alerting strategy for security-related events.\nWhich Azure Monitor Logs tables should you query? To answer, drag the appropriate tables to the correct log types. Each table may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Events from Windows event logs = Event; Events from Linux system logging = Syslog.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "AzureActivity"
      },
      {
        id: "O2",
        text: "AzureDiagnostics"
      },
      {
        id: "O3",
        text: "Event"
      },
      {
        id: "O4",
        text: "Syslog"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Events from Windows event logs"
      },
      {
        id: "t2",
        text: "Events from Linux system logging"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O4",
    ]
  },
  {
    id: 11,
    number: 11,
    topic: "Topic 1",
    prompt: "You are designing a large Azure environment that will contain many subscriptions.\nYou plan to use Azure Policy as part of a governance solution.\nTo which three scopes can you assign Azure Policy definitions? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CEF",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Active Directory (Azure AD) administrative units"
      },
      {
        id: "B",
        text: "Azure Active Directory (Azure AD) tenants"
      },
      {
        id: "C",
        text: "subscriptions (Most voted)"
      },
      {
        id: "D",
        text: "compute resources"
      },
      {
        id: "E",
        text: "resource groups"
      },
      {
        id: "F",
        text: "management groups (ost voted)"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 12,
    number: 12,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYour on-premises network contains a server named Server? that runs an ASPNET application named App1.\nYou have a hybrid deployment of Azure Active Directory (Azure AD).\nYou need to recommend a solution to ensure that users sign in by using their Azure AD account and Azure Multi-Factor Authentication (MFA) when\nthey connect to App1 from the internet.\nWhich three features should you recommend be deployed and configured in sequence? To answer, move the appropriate features from the list of\nfeatures to the answer area and arrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Step 1 = Azure AD Application Proxy; Step 2 = an Azure AD enterprise application; Step 3 = a Conditional Access policy.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "a public Azure Load Balancer"
      },
      {
        id: "O2",
        text: "a managed identity"
      },
      {
        id: "O3",
        text: "an internal Azure Load Balancer"
      },
      {
        id: "O4",
        text: "a Conditional Access policy"
      },
      {
        id: "O5",
        text: "an Azure App Service plan"
      },
      {
        id: "O6",
        text: "Azure AD Application Proxy"
      },
      {
        id: "O7",
        text: "an Azure AD enterprise application"
      },
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
      },
    ],
    correct: [
      "t1:O6",
      "t2:O7",
      "t3:O4",
    ]
  },
  {
    id: 13,
    number: 13,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Activity Log"
      },
      {
        id: "B",
        text: "Azure Advisor"
      },
      {
        id: "C",
        text: "Azure Analysis Services"
      },
      {
        id: "D",
        text: "Azure Monitor action groups"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 14,
    number: 14,
    topic: "Topic 1",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\nconnectivity.\nSeveral virtual machines exhibit network connectivity issues.\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\nSolution: Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure\nMonitor to analyze the network traffic.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes 8 Noe)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 15,
    number: 15,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou need to design an architecture to capture the creation of users and the assignment of roles. The captured data must be stored in Azure\nCosmos DB.\nWhich services should you include in the design? To answer, drag the appropriate services to the correct targets. Each service may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Service that captures the Azure AD audit log events = Azure Event Hubs; Service that writes the events to Azure Cosmos DB = Azure Functions.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Event Grid"
      },
      {
        id: "O2",
        text: "Azure Event Hubs"
      },
      {
        id: "O3",
        text: "Azure Functions"
      },
      {
        id: "O4",
        text: "Azure Monitor Logs"
      },
      {
        id: "O5",
        text: "Azure Notification Hubs"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Service that captures the Azure AD audit log events"
      },
      {
        id: "t2",
        text: "Service that writes the events to Azure Cosmos DB"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O3",
    ]
  },
  {
    id: 16,
    number: 16,
    topic: "Topic 1",
    prompt: "Your company, named Contoso, Ltd., implements several Azure logic apps that have HTTP triggers. The logic apps provide access to an on-\npremises web service.\nContoso establishes a partnership with another company named Fabrikam, Inc.\nFabrikam does not have an existing Azure Active Directory (Azure AD) tenant and uses third-party OAuth 2.0 identity management to authenticate\nits users.\nDevelopers at Fabrikam plan to use a subset of the logic apps to build applications that will integrate with the on-premises web service of\nContoso.\nYou need to design a solution to provide the Fabrikam developers with access to the logic apps. The solution must meet the following\nrequirements:\n=» Requests to the logic apps from the developers must be limited to lower rates than the requests from the users at Contoso,\n= The developers must be able to rely on their existing OAuth 2.0 provider to gain access to the logic apps.\nc= The solution must NOT require changes to the logic apps.\n== The solution must NOT use Azure AD guest accounts.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Front Door"
      },
      {
        id: "B",
        text: "Azure AD Application Proxy"
      },
      {
        id: "C",
        text: "Azure AD business-to-business (B28)"
      },
      {
        id: "D",
        text: "Azure API Management (ost Voted )"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 17,
    number: 17,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains 300 virtual machines that run Windows Server 2019.\nYou need to centrally monitor all warning events in the System logs of the virtual machines.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Resource to create in Azure = A Log Analytics workspace; Configuration to perform on the virtual machines = Install the Azure Monitor agent.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "An event hub"
      },
      {
        id: "O2",
        text: "A Log Analytics workspace"
      },
      {
        id: "O3",
        text: "A search service"
      },
      {
        id: "O4",
        text: "A storage account"
      },
      {
        id: "O5",
        text: "Create event subscriptions"
      },
      {
        id: "O6",
        text: "Configure Continuous delivery"
      },
      {
        id: "O7",
        text: "Install the Azure Monitor agent"
      },
      {
        id: "O8",
        text: "Modify the membership of the Event Log Readers group"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Resource to create in Azure"
      },
      {
        id: "t2",
        text: "Configuration to perform on the virtual machines"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O7",
    ]
  },
  {
    id: 18,
    number: 18,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have several Azure App Service web apps that use Azure Key Vault to store data encryption keys.\nSeveral departments have the following requests to support the web app:\nSecurity * Review the membership of administrative roles and require\nusers to provide a justification for continued membership.\n* Get alerts about changes in administrator assignments.\no See a history of administrator activation, including which\nchanges administrators made to Azure resources.\nDevelopment * Enable the applications to access Key Vault and retrieve\nkeys for use in code.\nQuality Assurance * Receive temporary administrator access to create and\nconfigure additional web apps in the test environment.\nWhich service should you recommend for each department's request? To answer, configure the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: Security = Azure AD Privileged Identity Management; Development = Azure Managed Identity; Quality Assurance = Azure AD Privileged Identity Management.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure AD Privileged Identity Management"
      },
      {
        id: "O2",
        text: "Azure Managed Identity"
      },
      {
        id: "O3",
        text: "Azure AD Connect"
      },
      {
        id: "O4",
        text: "Azure AD Identity Protection"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Security"
      },
      {
        id: "t2",
        text: "Development"
      },
      {
        id: "t3",
        text: "Quality Assurance"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
      "t3:O1",
    ]
  },
  {
    id: 19,
    number: 19,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYour company has the divisions shown in the following table.\n[Division | Azure subscription | Azure Active Directory (Azure AD) tenant\nEast Sub1, Sub2 East.contoso.com\nWest Sub3, Subd West.contoso.com\nYou plan to deploy a custom application to each subscription. The application will contain the following:\n= A resource group\n= An Azure web app\n= Custom role assignments\n== An Azure Cosmos DB account\nYou need to use Azure Blueprints to deploy the application to each subscription\nWhat is the minimum number of objects required to deploy the application? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Management groups = 2; Blueprint definitions = 2; Blueprint assignments = 2.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "1"
      },
      {
        id: "O2",
        text: "2"
      },
      {
        id: "O3",
        text: "3"
      },
      {
        id: "O4",
        text: "4"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Management groups"
      },
      {
        id: "t2",
        text: "Blueprint definitions"
      },
      {
        id: "t3",
        text: "Blueprint assignments"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O2",
      "t3:O2",
    ]
  },
  {
    id: 20,
    number: 20,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou need to design an Azure policy that will implement the following functionality:\n=> For new resources, assign tags and values that match the tags and values of the resource group to which the resources are deployed.\n= For existing resources, identify whether the tags and values match the tags and values of the resource group that contains the resources.\nc For any non-compliant resources, trigger auto-generated remediation tasks to create missing tags and values.\nThe solution must use the principle of least privilege.\nWhat should you include in the design? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Azure Policy effect to use = Modify; Azure AD object and RBAC role to use for the remediation tasks = A managed identity with the Contributor role.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Append"
      },
      {
        id: "O2",
        text: "EnforceOPAConstraint"
      },
      {
        id: "O3",
        text: "EnforceRegoPolicy"
      },
      {
        id: "O4",
        text: "Modify"
      },
      {
        id: "O5",
        text: "A managed identity with the Contributor role"
      },
      {
        id: "O6",
        text: "A managed identity with the User Access Administrator role"
      },
      {
        id: "O7",
        text: "A service principal with the Contributor role"
      },
      {
        id: "O8",
        text: "A service principal with the User Access Administrator role"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Azure Policy effect to use"
      },
      {
        id: "t2",
        text: "Azure AD object and RBAC role to use for the remediation tasks"
      },
    ],
    correct: [
      "t1:O4",
      "t2:O5",
    ]
  },
  {
    id: 21,
    number: 22,
    topic: "Topic 1",
    prompt: "You plan to deploy an Azure SQL database that will store Personally Identifiable Information (PI).\nYou need to ensure that only privileged users can view the PII.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "dynamic data masking (ost voted)"
      },
      {
        id: "B",
        text: "role-based access control (RBAC)"
      },
      {
        id: "C",
        text: "Data Discovery & Classification"
      },
      {
        id: "D",
        text: "Transparent Data Encryption (TDE)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 22,
    number: 23,
    topic: "Topic 1",
    prompt: "You plan to deploy an app that will use an Azure Storage account.\nYou need to deploy the storage account. The storage account must meet the following requirements:\n= Store the data for multiple users.\n> Encrypt each user's data by using a separate key.\nc= Encrypt all the data in the storage account by using customer-managed keys.\nWhat should you deploy?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "files in a premium file share storage account"
      },
      {
        id: "B",
        text: "blobs in a general purpose v2 storage account (Vast Voted)"
      },
      {
        id: "C",
        text: "blobs in an Azure Data Lake Storage Gen2 account"
      },
      {
        id: "D",
        text: "files in a general purpose v2 storage account"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 23,
    number: 24,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure App Service web app that uses a system-assigned managed identity.\nYou need to recommend a solution to store the settings of the web app as secrets in an Azure key vault. The solution must meet the following\nrequirements:\n== Minimize changes to the app code.\n> Use the principle of least privilege.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Key Vault integration method = Key Vault references in Application settings; Key Vault permissions for the managed identity = Secrets: Get.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Key Vault references in Application settings"
      },
      {
        id: "O2",
        text: "Key Vault references in Appsettings.json"
      },
      {
        id: "O3",
        text: "Key Vault references in Web.config"
      },
      {
        id: "O4",
        text: "Key Vault SDK"
      },
      {
        id: "O5",
        text: "Keys: Get"
      },
      {
        id: "O6",
        text: "Keys: List and Get"
      },
      {
        id: "O7",
        text: "Secrets: Get"
      },
      {
        id: "O8",
        text: "Secrets: List and Get"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Key Vault integration method"
      },
      {
        id: "t2",
        text: "Key Vault permissions for the managed identity"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O7",
    ]
  },
  {
    id: 24,
    number: 25,
    topic: "Topic 1",
    prompt: "You plan to deploy an application named App that will run on five Azure virtual machines. Additional virtual machines will be deployed later to run\nAppl.\nYou need to recommend a solution to meet the following requirements for the virtual machines that will run App1:\n=> Ensure that the virtual machines can authenticate to Azure Active Directory (Azure AD) to gain access to an Azure key vault, Azure Logic Apps\ninstances, and an Azure SQL database.\n> Avoid assigning new roles and permissions for Azure services when you deploy additional virtual machines.\n== Avoid storing secrets and certificates on the virtual machines.\n= Minimize administrative effort for managing identities.\nWhich type of identity should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "a system-assigned managed identity"
      },
      {
        id: "B",
        text: "a service principal that is configured to use a certificate"
      },
      {
        id: "C",
        text: "a service principal that is configured to use a client secret"
      },
      {
        id: "D",
        text: "a user-assigned managed identity (Most Voted)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 25,
    number: 26,
    topic: "Topic 1",
    prompt: "You have the resources shown in the following table:\n[Name [Type]\nAzure Synapse Analytics instance\nCDB1 Azure Cosmos DB SQL API account\nCDBT hosts a container that stores continuously updated operational data.\nYou are designing a solution that will use AS1 to analyze the operational data daily.\nYou need to recommend a solution to analyze the data without affecting the performance of the operational data store.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Cosmos DB change feed"
      },
      {
        id: "B",
        text: "Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors"
      },
      {
        id: "C",
        text: "Azure Synapse Link for Azure Cosmos DB"
      },
      {
        id: "D",
        text: "Azure Synapse Analytics with PolyBase data loading"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 26,
    number: 27,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou deploy several Azure SQL Database instances.\nYou plan to configure the Diagnostics settings on the databases as shown in the following exhibit.\nDiagnostics setting\nEl sve X piscard [ Delete © Provide feedback\nA diagnostic setting specifies a list of categories of platform logs and/or metrics that you want to collect from a resource, and one or more\nGestinations that you would stream them to. Normal usage charges for the destination wil occur. Learn more about the different log\ncategories and contents of those logs.\nDiagnostic setting name Diagnostic\nCategory details. Destination details\nlog IB send to Log Analytics\nRetention (days)\n[8 saunsights Subscription\nRetent\n8 AutomaticTuning lL]\nLog Analytics workspace\nRetention (3:\n[LT —— — [soma (easesy\n[0] Quenystorewaitstatistics — IB Acchive to a storage account\nRetention (days)\n[J res o (©) Shins srg sors hig csc rege scouts\nRetention (d\n(0) oatabasewaitstatstics — Location\nRetention (days) Fests\ny etention (days)\n[0 Timeouts 0 I Subscription\nAzure Pass - Sponsorship v\nJ whoas on (days) i\nCEN | SPR\nJ osadiods Retention (days) contoso20 ~\n1\nfretrk [0] stream to an event hub\n0 se Bo Gays)\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: The amount of time SQLInsights data will be stored in blob storage = 90 days; The maximum amount of time SQLInsights data can be stored in Azure Log Analytics = 730 days.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "30 days"
      },
      {
        id: "O2",
        text: "90 days"
      },
      {
        id: "O3",
        text: "730 days"
      },
      {
        id: "O4",
        text: "indefinite"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "The amount of time SQLInsights data will be stored in blob storage"
      },
      {
        id: "t2",
        text: "The maximum amount of time SQLInsights data can be stored in Azure Log Analytics"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O3",
    ]
  },
  {
    id: 27,
    number: 28,
    topic: "Topic 1",
    prompt: "You have an application that is used by 6,000 users to validate their vacation requests. The application manages its own credential store.\nUsers must enter a username and password to access the application. The application does NOT support identity providers.\nYou plan to upgrade the application to use single sign-on (S50) authentication by using an Azure Active Directory (Azure AD) application\nregistration.\nWhich SSO method should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "header-based"
      },
      {
        id: "B",
        text: "SAML"
      },
      {
        id: "C",
        text: "password-based"
      },
      {
        id: "D",
        text: "OpenlD Connect"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 28,
    number: 29,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains a virtual network named VNET1 and 10 virtual machines. The virtual machines are connected to\nVNET1.\nYou need to design a solution to manage the virtual machines from the internet. The solution must meet the following requirements:\nc& Incoming connections to the virtual machines must be authenticated by using Azure Multi-Factor Authentication (MFA) before network\nconnectivity is allowed.\n= Incoming connections must use TLS and connect to TCP port 443.\n= The solution must support RDP and SSH.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: To provide access to virtual machines on VNET1, use = Azure Bastion; To enforce Azure MFA, use = A Conditional Access policy that has the Cloud apps assignment set to Azure Windows VM Sign-in.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Bastion"
      },
      {
        id: "O2",
        text: "Just-in-time (JIT) VM access"
      },
      {
        id: "O3",
        text: "Azure Web Application Firewall (WAF) in Azure Front Door"
      },
      {
        id: "O4",
        text: "An Azure Identity Governance access package"
      },
      {
        id: "O5",
        text: "A Conditional Access policy that has the Cloud apps assignment set to Azure Windows VM Sign-in"
      },
      {
        id: "O6",
        text: "A Conditional Access policy that has the Cloud apps assignment set to Microsoft Azure Management"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "To provide access to virtual machines on VNET1, use"
      },
      {
        id: "t2",
        text: "To enforce Azure MFA, use"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O5",
    ]
  },
  {
    id: 29,
    number: 30,
    topic: "Topic 1",
    prompt: "You are designing an Azure governance solution.\nAll Azure resources must be easily identifiable based on the following operational information: environment, owner, department and cost center.\nYou need to ensure that you can use the operational information when you generate reports for the Azure resources.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure data catalog that uses the Azure REST API as a data source"
      },
      {
        id: "B",
        text: "an Azure management group that uses parent groups to create a hierarchy"
      },
      {
        id: "C",
        text: "an Azure policy that enforces tagging rules (Ios voir)"
      },
      {
        id: "D",
        text: "Azure Active Directory (Azure AD) administrative units"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 30,
    number: 31,
    topic: "Topic 1",
    prompt: "A company named Contoso, Ltd. has an Azure Active Directory (Azure AD) tenant that is integrated with Microsoft 365 and an Azure subscription.\nContoso has an on-premises identity infrastructure. The infrastructure includes servers that run Active Directory Domain Services (AD DS) and\nAzure AD Connect.\nContoso has a partnership with a company named Fabrikam. Inc. Fabrikam has an Active Directory forest and a Microsoft 365 tenant. Fabrikam\nhas the same on- premises identity infrastructure components as Contoso.\nA team of 10 developers from Fabrikam will work on an Azure solution that will be hosted in the Azure subscription of Contoso. The developers\nmust be added to the Contributor role for a resource group in the Contoso subscription\nYou need to recommend a solution to ensure that Contoso can assign the role to the 10 Fabrikam developers. The solution must ensure that the\nFabrikam developers use their existing credentials to access resources\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "In the Azure AD tenant of Contoso. create cloud-only user accounts for the Fabrikam developers."
      },
      {
        id: "B",
        text: "Configure a forest trust between the on-premises Active Directory forests of Contoso and Fabrikam."
      },
      {
        id: "C",
        text: "Configure an organization relationship between the Microsoft 365 tenants of Fabrikam and Contoso."
      },
      {
        id: "D",
        text: "In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 31,
    number: 32,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\n[East [Subt | Contosocom\n[West [Sub2 | Fabrikam.com\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the Azure AD provisioning service."
      },
      {
        id: "B",
        text: "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        id: "C",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "D",
        text: "Configure Azure AD join."
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 32,
    number: 33,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYour company has 20 web APIs that were developed in-house.\nThe company is developing 10 web apps that will use the web APIs. The web apps and the APIs are registered in the company s Azure Active\nDirectory (Azure\nAD) tenant. The web APIs are published by using Azure API Management.\nYou need to recommend a solution to block unauthorized requests originating from the web apps from reaching the web APIs. The solution must\nmeet the following requirements:\n= Use Azure AD-generated claims.\nMinimize configuration and management effort.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Grant permissions to allow the web apps to access the web APIs by using = Azure AD; Configure a JSON Web Token (JWT) validation policy by using = Azure API Management.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure AD"
      },
      {
        id: "O2",
        text: "Azure API Management"
      },
      {
        id: "O3",
        text: "The web APIs"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Grant permissions to allow the web apps to access the web APIs by using"
      },
      {
        id: "t2",
        text: "Configure a JSON Web Token (JWT) validation policy by using"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  },
  {
    id: 33,
    number: 34,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Log Analytics (ost voted)"
      },
      {
        id: "B",
        text: "Azure Arc"
      },
      {
        id: "C",
        text: "Azure Analysis Services"
      },
      {
        id: "D",
        text: "Application Insights"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 34,
    number: 35,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\n[East |Subt | Contoso.com\n[West [Sub2 | Fabrikam.com\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the Azure AD provisioning service."
      },
      {
        id: "B",
        text: "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
      {
        id: "C",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "D",
        text: "Configure Azure AD Identity Protection."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 35,
    number: 36,
    topic: "Topic 1",
    prompt: "You are developing an app that will read activity logs for an Azure subscription by using Azure Functions.\nYou need to recommend an authentication solution for Azure Functions. The solution must minimize administrative effort.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "an enterprise application in Azure AD"
      },
      {
        id: "B",
        text: "system-assigned managed identities"
      },
      {
        id: "C",
        text: "shared access signatures (SAS)"
      },
      {
        id: "D",
        text: "application registration in Azure AD"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 36,
    number: 37,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nContoso.com\nSub contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure Azure AD join."
      },
      {
        id: "B",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "C",
        text: "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        id: "D",
        text: "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 37,
    number: 38,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nEE Azure Azure AD tenant\nsubscription\n[East [subt |Contosocom\nSub contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure Azure AD join."
      },
      {
        id: "B",
        text: "Configure Azure AD Identity Protection."
      },
      {
        id: "C",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "D",
        text: "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 38,
    number: 39,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Activity Log"
      },
      {
        id: "B",
        text: "Azure Arc"
      },
      {
        id: "C",
        text: "Azure Analysis Services"
      },
      {
        id: "D",
        text: "Azure Monitor metrics"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 39,
    number: 40,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains an Azure key vault named KV1 and a virtual machine named VM1. VM1 runs Windows Server 2022:\nAzure Edition.\nYou plan to deploy an ASP.Net Core-based application named App1 to VM1\nYou need to configure App1 to use a system-assigned managed identity to retrieve secrets from KV1. The solution must minimize development\neffort.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Configure App1 to use OAuth 2.0 = Client credentials grant flows; Configure App1 to use a REST API call to retrieve an authentication token from the = Azure Instance Metadata Service (IMDS) endpoint.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Authorization code grant flows"
      },
      {
        id: "O2",
        text: "Client credentials grant flows"
      },
      {
        id: "O3",
        text: "Implicit grant flows"
      },
      {
        id: "O4",
        text: "Azure Instance Metadata Service (IMDS) endpoint"
      },
      {
        id: "O5",
        text: "OAuth 2.0 access token endpoint of Azure AD"
      },
      {
        id: "O6",
        text: "OAuth 2.0 access token endpoint of Microsoft Identity Platform"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Configure App1 to use OAuth 2.0"
      },
      {
        id: "t2",
        text: "Configure App1 to use a REST API call to retrieve an authentication token from the"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 40,
    number: 41,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nEE Azure Azure AD tenant\nsubscription\n[East [subt |Contosocom\nSub contains an Azure App Service web app named App1. Appl uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure Azure AD join."
      },
      {
        id: "B",
        text: "Configure Azure AD Identity Protection."
      },
      {
        id: "C",
        text: "Configure a Conditional Access policy."
      },
      {
        id: "D",
        text: "Configure Supported account types in the application registration and update the sign-in endpoint."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 41,
    number: 42,
    topic: "Topic 1",
    prompt: "You have an Azure AD tenant named contoso.com that has a security group named Group1. Group is configured for assigned memberships.\nGroup1 has 50 members, including 20 guest users.\nYou need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:\n+ The evaluation must be repeated automatically every three months.\n+ Every member must be able to report whether they need to be in Group1.\n+ Users who report that they do not need to be in Group1 must be removed from Group! automatically.\n«Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Implement Azure AD Identity Protection."
      },
      {
        id: "B",
        text: "Change the Membership type of Group to Dynamic User."
      },
      {
        id: "C",
        text: "Create an access review."
      },
      {
        id: "D",
        text: "Implement Azure AD Privileged Identity Management (PIM)."
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 42,
    number: 43,
    topic: "Topic 1",
    prompt: "HOTSPOT\nYou have an Azure subscription named Sub1 that is linked to an Azure AD tenant named contoso.com.\nYou plan to implement two ASPNET Core apps named App1 and App2 that will be deployed to 100 virtual machines in Sub. Users will sign in to\nApp1 and App2 by using their contoso.com credentials.\nApp1 requires read permissions to access the calendar of the signed-in user. App2 requires write permissions to access the calendar of the\nsigned-in user.\nYou need to recommend an authentication and authorization solution for the apps. The solution must meet the following requirements:\n+ Use the principle of least privilege.\n+ Minimize administrative effort.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: Authentication = Application registration in Azure AD; Authorization = Delegated permissions.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Application registration in Azure AD"
      },
      {
        id: "O2",
        text: "A system-assigned managed identity"
      },
      {
        id: "O3",
        text: "A user-assigned managed identity"
      },
      {
        id: "O4",
        text: "Application permissions"
      },
      {
        id: "O5",
        text: "Azure role-based access control (Azure RBAC)"
      },
      {
        id: "O6",
        text: "Delegated permissions"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Authentication"
      },
      {
        id: "t2",
        text: "Authorization"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O6",
    ]
  },
  {
    id: 43,
    number: 44,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nEE Azure Azure AD tenant\nsubscription\n[East [subt  [Conosocom |\nSub contains an Azure App Service web app named App1. Appl uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        id: "B",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "C",
        text: "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
      {
        id: "D",
        text: "Configure Azure AD Identity Protection."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 44,
    number: 45,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nEE Azure Azure AD tenant\nsubscription\n[East [subt  [Conosocom |\nSub contains an Azure App Service web app named Appl. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the Azure AD provisioning service."
      },
      {
        id: "B",
        text: "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        id: "C",
        text: "Configure Supported account types in the application registration and update the sign-in endpoint."
      },
      {
        id: "D",
        text: "Configure Azure AD join."
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 45,
    number: 46,
    topic: "Topic 1",
    prompt: "HOTSPOT\nYou have an Azure AD tenant that contains a management group named MG1\nYou have the Azure subscriptions shown in the following table.\n[Fa | Wersementowss\nTenant Root Group\nThe subscriptions contain the resource groups shown in the following table.\n[Name sbseion\nThe subscription contains the Azure AD security groups shown in the following table.\nThe subscription contains the user accounts shown in the following table.\nMame [vember]\nGroup1, Group2\nYou perform the following actions:\nAssign User3 the Contributor role for Sub.\nAssign Group1 the Virtual Machine Contributor role for MG1.\nAssign Group3 the Contributor role for the Tenant Root Group.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nAnswer Area\nStatements Yes No\nUser can create a new virtual machine inRG1. © ©\nUser2 can grant permissions to Group2. o o\nUser3 can create a storage account in RG2. oo\nAnswer Area\nStatements Yes No\nUser1 can create a new virtual machine in RG1. 0 o",
    keySource: "source",
    explanation: "Source answer: User2 can grant permissions to Group2. El = |",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 46,
    number: 47,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nContoso.com\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure Azure AD Identity Protection."
      },
      {
        id: "B",
        text: "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
      {
        id: "C",
        text: "Configure Supported account types in the application registration and update the sign-in endpoint."
      },
      {
        id: "D",
        text: "Configure a Conditional Access policy."
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 47,
    number: 48,
    topic: "Topic 1",
    prompt: "Your company has the divisions shown in the following table.\nEE Azure Azure AD tenant\nsubscription\n[East [subt |Contosocom\nSub contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "B",
        text: "Enable Azure AD pass-through authentication and update the sign-in endpoint."
      },
      {
        id: "C",
        text: "Configure a Conditional Access policy."
      },
      {
        id: "D",
        text: "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 48,
    number: 49,
    topic: "Topic 1",
    prompt: "You have an Azure subscription that contains 1,000 resources.\nYou need to generate compliance reports for the subscription. The solution must ensure that the resources can be grouped by department.\nWhat should you use to organize the resources?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "application groups and quotas"
      },
      {
        id: "B",
        text: "Azure Policy and tags"
      },
      {
        id: "C",
        text: "administrative units and Azure Lighthouse"
      },
      {
        id: "D",
        text: "resource groups and role assignments"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 49,
    number: 50,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Arc"
      },
      {
        id: "B",
        text: "Azure Monitor metrics"
      },
      {
        id: "C",
        text: "Azure Advisor"
      },
      {
        id: "D",
        text: "Azure Log Analytics"
      },
    ],
    correct: [
      "D",
    ]
  },
  {
    id: 50,
    number: 51,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Monitor action groups"
      },
      {
        id: "B",
        text: "Azure Arc"
      },
      {
        id: "C",
        text: "Azure Monitor metrics"
      },
      {
        id: "D",
        text: "Azure Activity Log"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 51,
    number: 52,
    topic: "Topic 1",
    prompt: "DRAG DROP\nYou have an Azure AD tenant that contains an administrative unit named MarketingAU. MarketingAU contains 100 users.\nYou create two users named User1 and User2.\nYou need to ensure that the users can perform the following actions in MarketingAU:\n+ User! must be able to create user accounts.\n+ User2 must be able to reset user passwords.\nWhich role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: User1 = User Administrator for MarketingAU; User2 = Helpdesk Administrator for MarketingAU.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Helpdesk Administrator for MarketingAU"
      },
      {
        id: "O2",
        text: "Helpdesk Administrator for the tenant"
      },
      {
        id: "O3",
        text: "User Administrator for MarketingAU"
      },
      {
        id: "O4",
        text: "User Administrator for the tenant"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "User1"
      },
      {
        id: "t2",
        text: "User2"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O1",
    ]
  },
  {
    id: 52,
    number: 53,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Arc"
      },
      {
        id: "B",
        text: "Azure Log Analytics"
      },
      {
        id: "C",
        text: "Application insights"
      },
      {
        id: "D",
        text: "Azure Monitor action groups"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 53,
    number: 54,
    topic: "Topic 1",
    prompt: "HOTSPOT\nYou are designing an app that will be hosted on Azure virtual machines that run Ubuntu. The app will use a third-party email service to send email\nmessages to users. The third-party email service requires that the app authenticate by using an API key.\nYou need to recommend an Azure Key Vault solution for storing and accessing the API key. The solution must minimize administrative effort\nWhat should you recommend using to store and access the key? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage = Secret; Access = A managed service identity (MSI).",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Certificate"
      },
      {
        id: "O2",
        text: "Key"
      },
      {
        id: "O3",
        text: "Secret"
      },
      {
        id: "O4",
        text: "An API token"
      },
      {
        id: "O5",
        text: "A managed service identity (MSI)"
      },
      {
        id: "O6",
        text: "A service principal"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage"
      },
      {
        id: "t2",
        text: "Access"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O5",
    ]
  },
  {
    id: 54,
    number: 55,
    topic: "Topic 1",
    prompt: "DRAG DROP -\nYou have two app registrations named App1 and App in Azure AD. App1 supports role-based access control (RBAC) and includes a role named\nWriter.\nYou need to ensure that when App2 authenticates to access App, the tokens issued by Azure AD include the Writer role claim.\nWhich blade should you use to modify each app registration? To answer, drag the appropriate blades to the correct app registrations. Each blade\nmay be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: App1 = App roles; App2 = API permissions.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "App roles"
      },
      {
        id: "O2",
        text: "API permissions"
      },
      {
        id: "O3",
        text: "Certificates & secrets"
      },
      {
        id: "O4",
        text: "Expose an API"
      },
      {
        id: "O5",
        text: "Authentication"
      },
      {
        id: "O6",
        text: "Token configuration"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "App1"
      },
      {
        id: "t2",
        text: "App2"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  },
  {
    id: 55,
    number: 56,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Application Insights"
      },
      {
        id: "B",
        text: "Azure Arc"
      },
      {
        id: "C",
        text: "Azure Log Analytics"
      },
      {
        id: "D",
        text: "Azure Monitor metrics"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 56,
    number: 57,
    topic: "Topic 1",
    prompt: "You have an Azure subscription.\nYou plan to deploy a monitoring solution that will include the following:\n+ Azure Monitor Network Insights\n« Application Insights\n* Microsoft Sentinel\n« VM insights\nThe monitoring solution will be managed by a single team.\nWhat is the minimum number of Azure Monitor workspaces required?\nAT\nB.2\nc.3\nD.4",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "A"
      },
      {
        id: "B",
        text: "Other / unsure"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 57,
    number: 58,
    topic: "Topic 1",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Application Insights"
      },
      {
        id: "B",
        text: "Azure Analysis Services"
      },
      {
        id: "C",
        text: "Azure Advisor"
      },
      {
        id: "D",
        text: "Azure Activity Log (Most Voted)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 58,
    number: 59,
    topic: "Topic 1",
    prompt: "HOTSPOT\nCase Study\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAtthe end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\nin Amsterdam, Berlin, and Rome.\nExisting Environment: Active Directory Environment\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\nforests.\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\nresources only.\nExisting Environment: Network Infrastructure\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\nthe rd fabrikam.com forest.\nAll the offices have a high-speed connection to the internet.\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\nExisting Environment: Problem Statements\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\nRequirements: Planned Changes\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\nDirectory for authentication,\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\nAll R&D operations will remain on-premises.\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\nRequirements: Technical Requirements\nFabrikam identifies the following technical requirements:\n+ Website content must be easily updated from a single point.\n+ User input must be minimized when provisioning new web app instances.\n« Whenever possible, existing on-premises licenses must be used to reduce cost.\n+ Users must always authenticate by using their corp.fabrikam.com UPN identity.\n+ Any new deployments to Azure must be redundant in case an Azure region fails.\n+ Whenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n+ An email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n«In the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\nActive Directory.\n- Directory synchronization between Azure Active Directory (Azure AD) and corp. fabrikam.com must not be affected by a link failure between\nAzure and the on-premises network.\nRequirements: Database Requirements\nFabrikam identifies the following database requirements:\n- Database metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\nperformance settings.\n+ To avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n- Database backups must be retained for a minimum of seven years to meet compliance requirements.\nRequirements: Security Requirements\nFabrikam identifies the following security requirements:\n+ Company information including policies, templates, and data must be inaccessible to anyone outside the company.\n« Users on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n+ Administrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n+ All administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n- The testing of WebApp1 updates must not be visible to anyone outside the company.\nTo meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the\nanswer area\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Minimum number of Azure AD tenants = 1; Minimum number of conditional access policies to create = 2.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "0"
      },
      {
        id: "O2",
        text: "1"
      },
      {
        id: "O3",
        text: "2"
      },
      {
        id: "O4",
        text: "3"
      },
      {
        id: "O5",
        text: "4"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Minimum number of Azure AD tenants"
      },
      {
        id: "t2",
        text: "Minimum number of conditional access policies to create"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O3",
    ]
  },
  {
    id: 59,
    number: 60,
    topic: "Topic 1",
    prompt: "You have an Azure subscription that contains 10 web apps. The apps are integrated with Azure AD and are accessed by users on different project\nteams.\nThe users frequently move between projects.\nYou need to recommend an access management solution for the web apps. The solution must meet the following requirements:\n« The users must only have access to the app of the project to which they are assigned currently.\n+ Project managers must verify which users have access to their project's app and remove users that are no longer assigned to their project.\n+ Once every 30 days, the project managers must be prompted automatically to verify which users are assigned to their projects.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD Identity Protection"
      },
      {
        id: "B",
        text: "Microsoft Defender for Identity"
      },
      {
        id: "C",
        text: "Microsoft Entra Permissions Management"
      },
      {
        id: "D",
        text: "Azure AD Identity Governance"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 60,
    number: 61,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains 50 Azure SQL databases.\nYou create an Azure Resource Manager (ARM) template named Template1 that enables Transparent Data Encryption (TDE).\nYou need to create an Azure Policy definition named Policy1 that will use Template to enable TDE for any noncompliant Azure SQL databases.\nHow should you configure Policy1? To answer, select the appropriate options in the answer area\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Set available effects to = DeployIfNotExists; Include in the definition = The role-based access control (RBAC) roles required to perform the remediation task.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "DeployIfNotExists"
      },
      {
        id: "O2",
        text: "EnforceRegoPolicy"
      },
      {
        id: "O3",
        text: "Modify"
      },
      {
        id: "O4",
        text: "The identity required to perform the remediation task"
      },
      {
        id: "O5",
        text: "The scopes of the policy assignments"
      },
      {
        id: "O6",
        text: "The role-based access control (RBAC) roles required to perform the remediation task"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Set available effects to"
      },
      {
        id: "t2",
        text: "Include in the definition"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O6",
    ]
  },
  {
    id: 61,
    number: 62,
    topic: "Topic 1",
    prompt: "You have an Azure subscription. The subscription contains a tiered app named App1 that is distributed across multiple containers hosted in Azure\nContainer Instances.\nYou need to deploy an Azure Monitor monitoring solution for App. The solution must meet the following requirements:\n+ Support using synthetic transaction monitoring to monitor traffic between the App1 components.\n+ Minimize development effort\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Network insights"
      },
      {
        id: "B",
        text: "Application Insights (Tez vor)"
      },
      {
        id: "C",
        text: "Container insights"
      },
      {
        id: "D",
        text: "Log Analytics Workspace insights"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 62,
    number: 64,
    topic: "Topic 1",
    prompt: "You have 12 Azure subscriptions and three projects. Each project uses resources across multiple subscriptions.\nYou need to use Microsoft Cost Management to monitor costs on a per project basis. The solution must minimize administrative effort.\nWhich two components should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AB",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "budgets"
      },
      {
        id: "B",
        text: "resource tags (Most voted)"
      },
      {
        id: "C",
        text: "custom role-based access control (RBAC) roles"
      },
      {
        id: "D",
        text: "management groups"
      },
      {
        id: "E",
        text: "Azure boards"
      },
    ],
    correct: [
      "A",
      "B",
    ]
  },
  {
    id: 63,
    number: 65,
    topic: "Topic 1",
    prompt: "HOTSPOT\nYou have an Azure subscription that contains multiple storage accounts.\nYou assign Azure Policy definitions to the storage accounts.\nYou need to recommend a solution to meet the following requirements:\n+ Trigger on-demand Azure Policy compliance scans.\n+ Raise Azure Monitor non-compliance alerts by querying logs collected by Log Analytics.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: To trigger the compliance scans, use = The Azure Command-Line Interface (CLI); To generate the non-compliance alerts, configure diagnostic settings for the = Azure activity logs.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "An Azure template"
      },
      {
        id: "O2",
        text: "The Azure Command-Line Interface (CLI)"
      },
      {
        id: "O3",
        text: "The Azure portal"
      },
      {
        id: "O4",
        text: "Azure activity logs"
      },
      {
        id: "O5",
        text: "Log Analytics workspace"
      },
      {
        id: "O6",
        text: "Storage accounts"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "To trigger the compliance scans, use"
      },
      {
        id: "t2",
        text: "To generate the non-compliance alerts, configure diagnostic settings for the"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 64,
    number: 66,
    topic: "Topic 1",
    prompt: "HOTSPOT -\nYou have an Azure subscription\nYou plan to deploy five storage accounts that will store block blobs and five storage accounts that will host file shares. The file shares will be\naccessed by using the SMB protocol.\nYou need to recommend an access authorization solution for the storage accounts. The solution must meet the following requirements:\n* Maximize security.\n+ Prevent the use of shared keys.\n- Whenever possible, support time-limited access.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: For the blobs = A user delegation shared access signature (SAS) only; For the file shares = Azure AD credentials.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A user delegation shared access signature (SAS) only"
      },
      {
        id: "O2",
        text: "A shared access signature (SAS) and a stored access policy"
      },
      {
        id: "O3",
        text: "A user delegation shared access signature (SAS) and a stored access policy"
      },
      {
        id: "O4",
        text: "Azure AD credentials"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "For the blobs"
      },
      {
        id: "t2",
        text: "For the file shares"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O4",
    ]
  },
  {
    id: 65,
    number: 67,
    topic: "Topic 1",
    prompt: "HOTSPOT\nYou have an Azure subscription. The subscription contains 100 virtual machines that run Windows Server 2022 and have the Azure Monitor Agent\ninstalled.\nYou need to recommend a solution that meets the following requirements:\n+ Forwards JSON-formatted logs from the virtual machines to a Log Analytics workspace\n« Transforms the logs and stores the data in a table in the Log Analytics workspace\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: To forward the logs = An Azure Monitor data collection endpoint; To transform the logs and store the data = A KQL query.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A linked storage account for the Log Analytics workspace"
      },
      {
        id: "O2",
        text: "An Azure Monitor data collection endpoint"
      },
      {
        id: "O3",
        text: "A service endpoint"
      },
      {
        id: "O4",
        text: "A KQL query"
      },
      {
        id: "O5",
        text: "A WQL query"
      },
      {
        id: "O6",
        text: "An XPath query"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "To forward the logs"
      },
      {
        id: "t2",
        text: "To transform the logs and store the data"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 66,
    number: 1,
    topic: "Topic 2",
    prompt: "You have 100 servers that run Windows Server 2012 R2 and host Microsoft SQL Server 2014 instances. The instances host databases that have\nthe following characteristics:\nco Stored procedures are implemented by using CLR.\n© The largest database is currently 3 TB. None of the databases will ever exceed 4 TB.\nYou plan to move all the data from SQL Server to Azure.\nYou need to recommend a service to host the databases. The solution must meet the following requirements:\n== Whenever possible, minimize management overhead for the migrated databases.\n= Ensure that users can authenticate by using Azure Active Directory (Azure AD) credentials.\n= Minimize the number of database changes required to facilitate the migration.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database elastic pools"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance"
      },
      {
        id: "C",
        text: "Azure SQL Database single databases"
      },
      {
        id: "D",
        text: "SQL Server 2016 on Azure virtual machines"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 67,
    number: 2,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains an Azure Blob Storage account named store.\nYou have an on-premises file server named Server1 that runs Windows Server 2016. Server stores 500 GB of company files.\nYou need to store a copy of the company files from Server in store\nWhich two possible Azure services achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: 5C",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Logic Apps integration account"
      },
      {
        id: "B",
        text: "an Azure Import/Export job (Fost voted)"
      },
      {
        id: "C",
        text: "Azure Data Factory (Wiest voted)"
      },
      {
        id: "D",
        text: "an Azure Analysis services On-premises data gateway"
      },
      {
        id: "E",
        text: "an Azure Batch account"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 68,
    number: 3,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains two applications named App1 and App2. App is a sales processing application. When a transaction\nin App1 requires shipping, a message is added to an Azure Storage account queue, and then App2 listens to the queue for relevant transactions.\nIn the future, additional applications will be added that will process some of the shipping requests based on the specific details of the\ntransactions.\nYou need to recommend a replacement for the storage account queue to ensure that each additional application will be able to read the relevant\ntransactions.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "one Azure Data Factory pipeline"
      },
      {
        id: "B",
        text: "multiple storage account queues"
      },
      {
        id: "C",
        text: "one Azure Service Bus queue"
      },
      {
        id: "D",
        text: "one Azure Service Bus topic"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 69,
    number: 4,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou need to design a storage solution for an app that will store large amounts of frequently used data. The solution must meet the following\nrequirements:\n=> Maximize data throughput.\n= Prevent the modification of data for one year.\n> Minimize latency for read and write operations.\nWhich Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage account type = BlockBlobStorage; Storage service = Blob.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "BlobStorage"
      },
      {
        id: "O2",
        text: "BlockBlobStorage"
      },
      {
        id: "O3",
        text: "FileStorage"
      },
      {
        id: "O4",
        text: "StorageV2 with Premium performance"
      },
      {
        id: "O5",
        text: "StorageV2 with Standard performance"
      },
      {
        id: "O6",
        text: "Blob"
      },
      {
        id: "O7",
        text: "File"
      },
      {
        id: "O8",
        text: "Table"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage account type"
      },
      {
        id: "t2",
        text: "Storage service"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O6",
    ]
  },
  {
    id: 70,
    number: 5,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains the storage accounts shown in the following table.\newe [we] reo |\nStorageV2 Standard\nYou plan to implement two new apps that have the requirements shown in the following table.\nAppl Use lifecycle management to migrate app data between\nstorage tiers\nApp2 Store app data in an Azure file share\nWhich storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: App1 (lifecycle management between storage tiers) = Storage1 and storage3 only; App2 (Azure file share) = Storage1 and storage4 only.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Storage1 and storage2 only"
      },
      {
        id: "O2",
        text: "Storage1 and storage3 only"
      },
      {
        id: "O3",
        text: "Storage1, storage2, and storage3 only"
      },
      {
        id: "O4",
        text: "Storage1, storage2, storage3, and storage4"
      },
      {
        id: "O5",
        text: "Storage4 only"
      },
      {
        id: "O6",
        text: "Storage1 and storage4 only"
      },
      {
        id: "O7",
        text: "Storage1, storage2, and storage4 only"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "App1 (lifecycle management between storage tiers)"
      },
      {
        id: "t2",
        text: "App2 (Azure file share)"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O6",
    ]
  },
  {
    id: 71,
    number: 6,
    topic: "Topic 2",
    prompt: "You are designing an application that will be hosted in Azure.\nThe application will host video files that range from 50 MB to 12 GB. The application will use certificate-based authentication and will be available\nto users on the internet.\nYou need to recommend a storage option for the video files. The solution must provide the fastest read performance and must minimize storage\ncosts.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Files"
      },
      {
        id: "B",
        text: "Azure Data Lake Storage Gen2"
      },
      {
        id: "C",
        text: "Azure Blob Storage"
      },
      {
        id: "D",
        text: "Azure SQL Database"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 72,
    number: 7,
    topic: "Topic 2",
    prompt: "You are designing a SQL database solution. The solution will include 20 databases that will be 20 GB each and have varying usage patterns.\nYou need to recommend a database platform to host the databases. The solution must meet the following requirements:\n5 The solution must meet a Service Level Agreement (SLA) of 99.99% uptime.\n> The compute resources allocated to the databases must scale dynamically.\n= The solution must have reserved capacity.\nCompute charges must be minimized.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "an elastic pool that contains 20 Azure SQL databases"
      },
      {
        id: "B",
        text: "20 databases on a Microsoft SQL server that runs on an Azure virtual machine in an availability set"
      },
      {
        id: "C",
        text: "20 databases on a Microsoft SQL server that runs on an Azure virtual machine"
      },
      {
        id: "D",
        text: "20 instances of Azure SQL Database serverless"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 73,
    number: 8,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an on-premises database that you plan to migrate to Azure.\nYou need to design the database architecture to meet the following requirements:\n<> Support scaling up and down.\n=> Support geo-redundant backups.\nc= Support a database of up to 75 TB.\n== Be optimized for online transaction processing (OLTP).\nWhat should you include in the design? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Service = Azure SQL Database; Service tier = Hyperscale.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure SQL Database"
      },
      {
        id: "O2",
        text: "Azure SQL Managed Instance"
      },
      {
        id: "O3",
        text: "Azure Synapse Analytics"
      },
      {
        id: "O4",
        text: "SQL Server on Azure Virtual Machines"
      },
      {
        id: "O5",
        text: "Basic"
      },
      {
        id: "O6",
        text: "Business Critical"
      },
      {
        id: "O7",
        text: "General Purpose"
      },
      {
        id: "O8",
        text: "Hyperscale"
      },
      {
        id: "O9",
        text: "Premium"
      },
      {
        id: "O10",
        text: "Standard"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Service"
      },
      {
        id: "t2",
        text: "Service tier"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O8",
    ]
  },
  {
    id: 74,
    number: 9,
    topic: "Topic 2",
    prompt: "You are planning an Azure IoT Hub solution that will include 50,000 oT devices.\nEach device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data\nwill be visualized in near real time.\nYou need to recommend a service to store and query the data.\nWhich two services can you recommend? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CD",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Table Storage"
      },
      {
        id: "B",
        text: "Azure Event Grid"
      },
      {
        id: "C",
        text: "Azure Cosmos DB SQL API"
      },
      {
        id: "D",
        text: "Azure Time Series Insights"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 75,
    number: 10,
    topic: "Topic 2",
    prompt: "You are designing an application that will aggregate content for users.\nYou need to recommend a database solution for the application. The solution must meet the following requirements:\n=o Support SQL commands.\n©» Support multi-master writes.\nc= Guarantee low latency read operations.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Cosmos DB SQL API"
      },
      {
        id: "B",
        text: "Azure SQL Database that uses active geo-replication"
      },
      {
        id: "C",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "D",
        text: "Azure Database for PostgreSQL"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 76,
    number: 11,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an Azure subscription that contains the SQL servers on Azure shown in the following table.\n[ame [esowgow [iocwion |\nThe subscription contains the storage accounts shown in the following table.\n[Name | Resour group [oation | Account nd\nstoragel RG1 East US StorageV2 (general\npurposev2)\nstorage Central US BlobStorage\nYou create the Azure SQL databases shown in the following table.\n[Meme [Resouceqo [seer [orentir |\nsaLdb1 saLsvrl Standard\nsQLdb2 sQLsvrl Standard\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\nAnswer Area\nStatements Yes No\nWhen you enable auditing for SQLdb1, you can store the audit information to storagel.\nWhen you enable auditing for SQLdb2, you can store the audit information to storage2.\nWhen you enable auditing for SQLdb3, you can store the audit information to storage2.",
    keySource: "source",
    explanation: "Source answer: Answer Area",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 77,
    number: 12,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou plan to import data from your on-premises environment to Azure. The data is shown in the following table.\nOn-premises source Azure target\nA Microsoft SQL Server 2012 database | An Azure SQL database\nA table in a Microsoft SQL Server 2014 | An Azure Cosmos DB account that\ndatabase uses the SQL API\nWhat should you recommend using to migrate the data? To answer, drag the appropriate tools to the correct data sources. Each tool may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: From the SQL Server 2012 database = Data Migration Assistant; From the table in the SQL Server 2014 database = Azure Cosmos DB Data Migration Tool.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "AzCopy"
      },
      {
        id: "O2",
        text: "Azure Cosmos DB Data Migration Tool"
      },
      {
        id: "O3",
        text: "Data Management Gateway"
      },
      {
        id: "O4",
        text: "Data Migration Assistant"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "From the SQL Server 2012 database"
      },
      {
        id: "t2",
        text: "From the table in the SQL Server 2014 database"
      },
    ],
    correct: [
      "t1:O4",
      "t2:O2",
    ]
  },
  {
    id: 78,
    number: 13,
    topic: "Topic 2",
    prompt: "You store web access logs data in Azure Blob Storage.\nYou plan to generate monthly reports from the access logs.\nYou need to recommend an automated process to upload the data to Azure SQL Database every month.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Microsoft SQL Server Migration Assistant (SSMA)"
      },
      {
        id: "B",
        text: "Data Migration Assistant (DMA)"
      },
      {
        id: "C",
        text: "AzCopy"
      },
      {
        id: "D",
        text: "Azure Data Factory"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 79,
    number: 14,
    topic: "Topic 2",
    prompt: "You have an Azure subscription.\nYour on-premises network contains a file server named Server1. Server1 stores 5 1¢1' of company files that are accessed rarely.\nYou plan to copy the files to Azure Storage.\nYou need to implement a storage solution for the files that meets the following requirements:\n== The files must be available within 24 hours of being requested.\nco Storage costs must be minimized.\nWhich two possible storage solutions achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: AD",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier."
      },
      {
        id: "B",
        text: "Create a general-purpose v1 storage account. Create a blob container and copy the files to the blob container."
      },
      {
        id: "C",
        text: "Create a general-purpose v2 storage account that is configured for the Cool default access tier. Create a file share in the storage account and copy the files to the file share."
      },
      {
        id: "D",
        text: "Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier."
      },
      {
        id: "E",
        text: "Create a general-purpose v1 storage account. Create a fie share in the storage account and copy the files to the file share."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 80,
    number: 15,
    topic: "Topic 2",
    prompt: "You have an app named App1 that uses two on-premises Microsoft SQL Server databases named DB1 and DB2.\nYou plan to migrate DB1 and DB2 to Azure\nYou need to recommend an Azure solution to host DB1 and DB2. The solution must meet the following requirements:\n= Support server-side transactions across DB1 and DB2.\n> Minimize administrative effort to update the solution.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "two Azure SQL databases in an elastic pool"
      },
      {
        id: "B",
        text: "two databases on the same Azure SQL managed instance"
      },
      {
        id: "C",
        text: "two databases on the same SQL Server instance on an Azure virtual machine"
      },
      {
        id: "D",
        text: "two Azure SQL databases on different Azure SQL Database servers"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 81,
    number: 16,
    topic: "Topic 2",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n= Failover between replicas of the database must occur without any data loss.\n=> The database must remain available in the event of a zone outage.\n=» Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "B",
        text: "Azure SQL Database Premium (Most voted)"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance General Purpose"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 82,
    number: 17,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.\nYou need to recommend a storage solution that meets the following requirements:\nco All the data written to storage must be retained for five years.\nc= Once the data is written, the data can only be read. Modifications and deletion must be prevented.\n> After five years, the data can be deleted, but never modified.\n= Data access charges must be minimized\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage account type = General purpose v2 with Hot access tier for blobs; Configuration to prevent modifications and deletions = Container access policy.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "General purpose v2 with Archive access tier for blobs"
      },
      {
        id: "O2",
        text: "General purpose v2 with Cool access tier for blobs"
      },
      {
        id: "O3",
        text: "General purpose v2 with Hot access tier for blobs"
      },
      {
        id: "O4",
        text: "Container access level"
      },
      {
        id: "O5",
        text: "Container access policy"
      },
      {
        id: "O6",
        text: "Storage account resource lock"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage account type"
      },
      {
        id: "t2",
        text: "Configuration to prevent modifications and deletions"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O5",
    ]
  },
  {
    id: 83,
    number: 18,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are designing a data storage solution to support reporting.\nThe solution will ingest high volumes of data in the JSON format by using Azure Event Hubs. As the data arrives, Event Hubs will write the data to\nstorage. The solution must meet the following requirements:\n5 Organize data in directories by date and time.\n=» Allow stored data to be queried directly, transformed into summarized tables, and then stored in a data warehouse.\n=> Ensure that the data warehouse can store 50 TB of relational data and support between 200 and 300 concurrent read operations.\nWhich service should you recommend for each type of data store? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Data store for the ingested data = Azure Data Lake Storage Gen2; Data store for the data warehouse = Azure SQL Database Hyperscale.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Blob Storage"
      },
      {
        id: "O2",
        text: "Azure Data Lake Storage Gen2"
      },
      {
        id: "O3",
        text: "Azure Files"
      },
      {
        id: "O4",
        text: "Azure Cosmos DB Cassandra API"
      },
      {
        id: "O5",
        text: "Azure Cosmos DB SQL API"
      },
      {
        id: "O6",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "O7",
        text: "Azure Synapse Analytics dedicated SQL pools"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Data store for the ingested data"
      },
      {
        id: "t2",
        text: "Data store for the data warehouse"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O6",
    ]
  },
  {
    id: 84,
    number: 19,
    topic: "Topic 2",
    prompt: "You have an app named App that uses an on-premises Microsoft SQL Server database named DB1.\nYou plan to migrate DB1 to an Azure SQL managed instance.\nYou need to enable customer managed Transparent Data Encryption (TDE) for the instance. The solution must maximize encryption strength.\nWhich type of encryption algorithm and key length should you use for the TE protector?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "RSA 3072 (1st voted)"
      },
      {
        id: "B",
        text: "AES 256"
      },
      {
        id: "C",
        text: "RSA 4096"
      },
      {
        id: "D",
        text: "RSA 2048"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 85,
    number: 20,
    topic: "Topic 2",
    prompt: "You are planning an Azure loT Hub solution that will include 50,000 loT devices.\nEach device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data\nwill be visualized in near real time.\nYou need to recommend a service to store and query the data\nWhich two services can you recommend? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CD",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Table Storage"
      },
      {
        id: "B",
        text: "Azure Event Grid"
      },
      {
        id: "C",
        text: "Azure Cosmos DB for NoSQL"
      },
      {
        id: "D",
        text: "Azure Time Series Insights"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 86,
    number: 21,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.\nYou need to recommend a storage solution that meets the following requirements:\n+ All the data written to storage must be retained for five years.\n« Once the data is written, the data can only be read. Modifications and deletion must be prevented.\n« After five years, the data can be deleted, but never modified.\n+ Data access charges must be minimized.\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage account type = General purpose v2 with Hot access tier for blobs; Configuration to prevent modifications and deletions = Container access policy.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium block blobs"
      },
      {
        id: "O2",
        text: "General purpose v2 with Cool access tier for blobs"
      },
      {
        id: "O3",
        text: "General purpose v2 with Hot access tier for blobs"
      },
      {
        id: "O4",
        text: "Container access level"
      },
      {
        id: "O5",
        text: "Container access policy"
      },
      {
        id: "O6",
        text: "Storage account resource lock"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage account type"
      },
      {
        id: "t2",
        text: "Configuration to prevent modifications and deletions"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O5",
    ]
  },
  {
    id: 87,
    number: 22,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are designing a data analytics solution that will use Azure Synapse and Azure Data Lake Storage Gen2.\nYou need to recommend Azure Synapse pools to meet the following requirements:\n~ Ingest data from Data Lake Storage into hash-distributed tables.\n« Implement query, and update data in Delta Lake.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Ingest data from Data Lake Storage into hash-distributed tables = A dedicated SQL pool; Implement, query, and update data in Delta Lake = A serverless Apache Spark pool.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A dedicated SQL pool"
      },
      {
        id: "O2",
        text: "A serverless Apache Spark pool"
      },
      {
        id: "O3",
        text: "A serverless SQL pool"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Ingest data from Data Lake Storage into hash-distributed tables"
      },
      {
        id: "t2",
        text: "Implement, query, and update data in Delta Lake"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  },
  {
    id: 88,
    number: 23,
    topic: "Topic 2",
    prompt: "You have an on-premises storage solution.\nYou need to migrate the solution to Azure. The solution must support Hadoop Distributed File System (HDFS).\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Data Lake Storage Gen2"
      },
      {
        id: "B",
        text: "Azure NetApp Files"
      },
      {
        id: "C",
        text: "Azure Data Share"
      },
      {
        id: "D",
        text: "Azure Table storage"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 89,
    number: 24,
    topic: "Topic 2",
    prompt: "DRAG DROP\nYou have an on-premises app named App1.\nCustomers use App1 to manage digital images.\nYou plan to migrate AppT to Azure.\nYou need to recommend a data storage solution for App1. The solution must meet the following image storage requirements:\n- Encrypt images at rest.\n« Allow files up to 50 MB.\n+ Manage access to the images by using Azure Web Application Firewall (WAF) on Azure Front Door.\nThe solution must meet the following customer account requirements:\n+ Support automatic scale out of the storage.\n+ Maintain the availability of App1 if a datacenter fails.\n« Support reading and writing data from multiple Azure regions.\nWhich service should you include in the recommendation for each type of data? To answer, drag the appropriate services to the correct type of\ndata. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct answer is worth one point.",
    keySource: "source",
    explanation: "Source answer: Image storage = Azure Blob storage; Customer account data = Azure Cosmos DB.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Blob storage"
      },
      {
        id: "O2",
        text: "Azure Table storage"
      },
      {
        id: "O3",
        text: "Azure Cosmos DB"
      },
      {
        id: "O4",
        text: "Azure Files"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Image storage"
      },
      {
        id: "t2",
        text: "Customer account data"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O3",
    ]
  },
  {
    id: 90,
    number: 25,
    topic: "Topic 2",
    prompt: "You are designing an application that will aggregate content for users.\nYou need to recommend a database solution for the application. The solution must meet the following requirements:\n* Support SQL commands.\n+ Support multi-master writes.\n+ Guarantee low latency read operations.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Cosmos DB for NoSQL"
      },
      {
        id: "B",
        text: "Azure SQL Database that uses active geo-replication"
      },
      {
        id: "C",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "D",
        text: "Azure Cosmos DB for PostgreSQL"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 91,
    number: 26,
    topic: "Topic 2",
    prompt: "You plan to migrate on-premises MySQL databases to Azure Database for MySQL Flexible Server.\nYou need to recommend a solution for the Azure Database for MySQL Flexible Server configuration. The solution must meet the following\nrequirements:\n« The databases must be accessible if a datacenter fails.\n+ Costs must be minimized.\nWhich compute tier should you recommend?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Burstable"
      },
      {
        id: "B",
        text: "General Purpose (Most Voted)"
      },
      {
        id: "C",
        text: "Memory Optimized"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 92,
    number: 27,
    topic: "Topic 2",
    prompt: "You are designing an app that will use Azure Cosmos DB to collate sales from multiple countries.\nYou need to recommend an API for the app. The solution must meet the following requirements:\n* Support SQL queries.\n* Support geo-replication.\n+ Store and access data relationally.\nWhich API should you recommend?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Apache Cassandra"
      },
      {
        id: "B",
        text: "PostgreSQL (ost Voted)"
      },
      {
        id: "C",
        text: "MongoDB"
      },
      {
        id: "D",
        text: "NoSQL"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 93,
    number: 28,
    topic: "Topic 2",
    prompt: "HOTSPOT\nYou have an app that generates 50,000 events daily.\nYou plan to stream the events to an Azure event hub and use Event Hubs Capture to implement cold path processing of the events. The output of\nEvent Hubs Capture will be consumed by a reporting system.\nYou need to identify which type of Azure storage must be provisioned to support Event Hubs Capture, and which inbound data format the reporting\nsystem must support.\nWhat should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage type = Azure Data Lake Storage Gen2; Data format = Avro.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Data Lake Storage Gen2"
      },
      {
        id: "O2",
        text: "Premium block blobs"
      },
      {
        id: "O3",
        text: "Premium file shares"
      },
      {
        id: "O4",
        text: "Apache Parquet"
      },
      {
        id: "O5",
        text: "Avro"
      },
      {
        id: "O6",
        text: "JSON"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage type"
      },
      {
        id: "t2",
        text: "Data format"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O5",
    ]
  },
  {
    id: 94,
    number: 29,
    topic: "Topic 2",
    prompt: "You have the resources shown in the following table.\nCDBT hosts a container that stores continuously updated operational data.\nYou are designing a solution that will use AST to analyze the operational data daily.\nYou need to recommend a solution to analyze the data without affecting the performance of the operational data store.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors"
      },
      {
        id: "B",
        text: "Azure Synapse Analytics with PolyBase data loading"
      },
      {
        id: "C",
        text: "Azure Synapse Link for Azure Cosmos DB"
      },
      {
        id: "D",
        text: "Azure Cosmos DB change feed"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 95,
    number: 30,
    topic: "Topic 2",
    prompt: "HOTSPOT\nYou have an Azure subscription. The subscription contains an Azure SQL managed instance that stores employee details, including social security\nnumbers and phone numbers.\nYou need to configure the managed instance to meet the following requirements:\n+ The helpdesk team must see only the last four digits of an employee's phone number.\n+ Cloud administrators must be prevented from seeing the employees social security numbers.\nWhat should you enable for each column in the managed instance? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Phone numbers = Dynamic data masking; Social security numbers = Always Encrypted.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Always Encrypted"
      },
      {
        id: "O2",
        text: "Column encryption"
      },
      {
        id: "O3",
        text: "Dynamic data masking"
      },
      {
        id: "O4",
        text: "Transparent Data Encryption (TDE)"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Phone numbers"
      },
      {
        id: "t2",
        text: "Social security numbers"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O1",
    ]
  },
  {
    id: 96,
    number: 31,
    topic: "Topic 2",
    prompt: "You plan to use an Azure Storage account to store data assets.\nYou need to recommend a solution that meets the following requirements:\n+ Supports immutable storage\n+ Disables anonymous access to the storage account\n+ Supports access control list (ACL)-based Azure AD permissions\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Files"
      },
      {
        id: "B",
        text: "Azure Data Lake Storage (Most voted)"
      },
      {
        id: "C",
        text: "Azure NetApp Files"
      },
      {
        id: "D",
        text: "Azure Blob Storage"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 97,
    number: 32,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou are designing a storage solution that will ingest, store, and analyze petabytes (PBs) of structured, semi-structured, and unstructured text data.\nThe analyzed data will be offloaded to Azure Data Lake Storage Gen? for long-term retention.\nYou need to recommend a storage and analytics solution that meets the following requirements:\n« Stores the processed data\n+ Provides interactive analytics\n+ Supports manual scaling, built-in autoscaling, and custom autoscaling\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: For storage and interactive analytics = Azure Data Explorer; Query language = KQL.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Data Explorer"
      },
      {
        id: "O2",
        text: "Azure Data Lake Analytics"
      },
      {
        id: "O3",
        text: "Log Analytics"
      },
      {
        id: "O4",
        text: "KQL"
      },
      {
        id: "O5",
        text: "Transact-SQL"
      },
      {
        id: "O6",
        text: "U-SQL"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "For storage and interactive analytics"
      },
      {
        id: "t2",
        text: "Query language"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O4",
    ]
  },
  {
    id: 98,
    number: 34,
    topic: "Topic 2",
    prompt: "HOTSPOT\nYou have an Azure subscription.\nYou need to deploy a solution that will provide point-n-time restore for blobs in storage accounts that have blob versioning and blob soft delete\nenabled.\nWhich type of blob should you create, and what should you enable for the accounts? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: Blob type = Block; Enable = The change feed.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Append"
      },
      {
        id: "O2",
        text: "Block"
      },
      {
        id: "O3",
        text: "Page"
      },
      {
        id: "O4",
        text: "A stored access policy"
      },
      {
        id: "O5",
        text: "Immutable blob storage"
      },
      {
        id: "O6",
        text: "Object replication"
      },
      {
        id: "O7",
        text: "The change feed"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Blob type"
      },
      {
        id: "t2",
        text: "Enable"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O7",
    ]
  },
  {
    id: 99,
    number: 35,
    topic: "Topic 2",
    prompt: "HOTSPOT\nYour company, named Contoso, Ltd., has an Azure subscription that contains the following resources:\n+ An Azure Synapse Analytics workspace named contosoworkspacel\n+ An Azure Data Lake Storage account named contosolake1\n+ An Azure SQL database named contososqlt\nThe product data of Contoso is copied from contososql1 to contosolake1\nContoso has a partner company named Fabrikam Inc. Fabrikam has an Azure subscription that contains the following resources:\n+ Avirtual machine named FabrikamVM1 that runs Microsoft SQL Server 2019\n+ An Azure Storage account named fabrikamsa1l\nContoso plans to upload the research data on FabrikamVM1 to contosolake1. During the upload, the research data must be transformed to the\ndata formats used by Contoso\nThe data in contosolake1 will be analyzed by using contosoworkspace1\nYou need to recommend a solution that meets the following requirements:\n* Upload and transform the FabrikamVM1 research data.\n+ Provide Fabrikam with restricted access to snapshots of the data in contosoworkspace1.\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Upload and transform the data = Azure Synapse pipelines; Provide restricted access = Azure Data Share.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Data Box Gateway"
      },
      {
        id: "O2",
        text: "Azure Data Share"
      },
      {
        id: "O3",
        text: "Azure Synapse pipelines"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Upload and transform the data"
      },
      {
        id: "t2",
        text: "Provide restricted access"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O2",
    ]
  },
  {
    id: 100,
    number: 36,
    topic: "Topic 2",
    prompt: "HOTSPOT\nYou are designing a data pipeline that will integrate large amounts of data from multiple on-premises Microsoft SQL Server databases into an\nanalytics platform in Azure. The pipeline will include the following actions:\n+ Database updates will be exported periodically into a staging area in Azure Blob storage.\n+ Data from the blob storage will be cleansed and transformed by using a highly parallelized load process.\n« The transformed data will be loaded to a data warehouse.\n« Each batch of updates will be used to refresh an online analytical processing (OLAP) model in a managed serving layer.\n+ The managed serving layer will be used by thousands of end users.\nYou need to implement the data warehouse and serving layers.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Source answer: To implement the data warehouse = An Azure Synapse Analytics dedicated SQL pool; To implement the serving layer = Azure Analysis Services.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "An Apache Spark pool in Azure Synapse Analytics"
      },
      {
        id: "O2",
        text: "An Azure Synapse Analytics dedicated SQL pool"
      },
      {
        id: "O3",
        text: "Azure Data Lake Analytics"
      },
      {
        id: "O4",
        text: "Azure Analysis Services"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "To implement the data warehouse"
      },
      {
        id: "t2",
        text: "To implement the serving layer"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 101,
    number: 38,
    topic: "Topic 2",
    prompt: "You have an app named App1 that uses an Azure Blob Storage container named app1data.\nApp uploads a cumulative transaction log file named File1.txt to a block blob in app1data once every hour. File1.txt only stores transaction data\nfrom the current day.\nYou need to ensure that you can restore the last uploaded version of File1.txt from any day for up to 30 days after the file was overwritten. The\nsolution must minimize storage space.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "container soft delete"
      },
      {
        id: "B",
        text: "blob snapshots"
      },
      {
        id: "C",
        text: "blob soft delete"
      },
      {
        id: "D",
        text: "blob versioning"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 102,
    number: 39,
    topic: "Topic 2",
    prompt: "You have 12 on-premises data sources that contain customer information and consist of Microsoft SQL Server, MySQL, and Oracle databases.\nYou have an Azure subscription.\nYou plan to create an Azure Data Lake Storage account that will consolidate the customer information for analysis and reporting.\nYou need to recommend a solution to automatically copy new information from the data sources to the Data Lake Storage account by using\nextract, transform and load (ETL). The solution must minimize administrative effort.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Data Factory"
      },
      {
        id: "B",
        text: "Azure Data Explorer"
      },
      {
        id: "C",
        text: "Azure Data Share"
      },
      {
        id: "D",
        text: "Azure Data Studio"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 103,
    number: 1,
    topic: "Topic 3",
    prompt: "You have SQL Server on an Azure virtual machine. The databases are written to nightly as part of a batch process.\nYou need to recommend a disaster recovery solution for the data. The solution must meet the following requirements:\nc® Provide the ability to recover in the event of a regional outage.\nc= Support a recovery time objective (RTO) of 15 minutes.\n5 Support a recovery point objective (RPO) of 24 hours.\nc= Support automated recovery.\n=> Minimize costs.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure virtual machine availability sets"
      },
      {
        id: "B",
        text: "Azure Disk Backup"
      },
      {
        id: "C",
        text: "an Always On availability group"
      },
      {
        id: "D",
        text: "Azure Site Recovery"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 104,
    number: 2,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou plan to deploy the backup policy shown in the following exhibit.\nPolicy 1\nEE Associated items [lJ Delete [| Save ¢ Discard\nBackup schedule\n*Frequency *Time *Timezone\n6:00PM v| [ (UTC) Coordinated Univer...\nInstant Restore @\nRetain instant recovery snapshot(s) for\nDay(s) @\nRetention range\n4 Retention of daily backup point.\n*At For\n6:00PM Vv Day(s)\n[2 Retention of weekly backup point.\n*on *At For\nSoom v Weekis\nv Retention of monthly backup point.\n*on *Day *At For\nETRY worth\n[C]  Retentionof yearly backup point.\nNot Configured\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Maximum recovery period for VMs backed up by this policy = 36 months; Minimum recovery point objective (RPO) for VMs backed up by this policy = 1 day.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "90 days"
      },
      {
        id: "O2",
        text: "26 weeks"
      },
      {
        id: "O3",
        text: "36 months"
      },
      {
        id: "O4",
        text: "45 months"
      },
      {
        id: "O5",
        text: "1 day"
      },
      {
        id: "O6",
        text: "1 week"
      },
      {
        id: "O7",
        text: "1 month"
      },
      {
        id: "O8",
        text: "1 year"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Maximum recovery period for VMs backed up by this policy"
      },
      {
        id: "t2",
        text: "Minimum recovery point objective (RPO) for VMs backed up by this policy"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O5",
    ]
  },
  {
    id: 105,
    number: 3,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n=o Provide access to the full .NET framework.\nProvide redundancy if an Azure region fails.\n= Grant administrators access to the operating system to install custom application dependencies\nSolution: You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile.\nDoes this meet the goal?\nA Yes (va)",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "B",
        text: "No"
      },
    ],
    correct: [
      "B",
    ]
  },
  {
    id: 106,
    number: 4,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n=» Provide access to the full .NET framework.\nc= Provide redundancy if an Azure region fails.\n= Grant administrators access to the operating system to install custom application dependencies.\nSolution: You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes 6 Nom)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 107,
    number: 5,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou plan to create an Azure Storage account that will host file shares. The shares will be accessed from on-premises applications that are\ntransaction intensive.\nYou need to recommend a solution to minimize latency when accessing the file shares. The solution must provide the highest-level of resiliency\nfor the selected storage tier.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage tier = Premium; Redundancy = Zone-redundant storage (ZRS).",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Hot"
      },
      {
        id: "O2",
        text: "Premium"
      },
      {
        id: "O3",
        text: "Transaction optimized"
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
    ],
    targets: [
      {
        id: "t1",
        text: "Storage tier"
      },
      {
        id: "t2",
        text: "Redundancy"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O5",
    ]
  },
  {
    id: 108,
    number: 6,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n> Provide access to the full .NET framework.\n<> Provide redundancy if an Azure region fails.\n=> Grant administrators access to the operating system to install custom application dependencies.\nSolution: You deploy an Azure virtual machine scale set that uses autoscaling.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes 8 No)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 109,
    number: 7,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou need to recommend an Azure Storage account configuration for two applications named Application and Application2. The configuration\nmust meet the following requirements:\n= Storage for Application1 must provide the highest possible transaction rates and the lowest possible latency.\n<> Storage for Application2 must provide the lowest possible storage costs per GB.\n= Storage for both applications must be available in an event of datacenter failure.\n==> Storage for both applications must be optimized for uploads and downloads.\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area;",
    keySource: "domain",
    explanation: "Source answer: Application1 = BlockBlobStorage with Premium performance and Zone-redundant storage (ZRS) replication; Application2 = General purpose v2 with Standard performance, Cool access tier, and Read-access geo-redundant storage (RA-GRS) replication.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "BlobStorage with Standard performance, Hot access tier, and Read-access geo-redundant storage (RA-GRS) replication"
      },
      {
        id: "O2",
        text: "BlockBlobStorage with Premium performance and Zone-redundant storage (ZRS) replication"
      },
      {
        id: "O3",
        text: "General purpose v1 with Premium performance and Locally-redundant storage (LRS) replication"
      },
      {
        id: "O4",
        text: "General purpose v2 with Standard performance, Hot access tier, and Locally-redundant storage (LRS) replication"
      },
      {
        id: "O5",
        text: "BlobStorage with Standard performance, Cool access tier, and Geo-redundant storage (GRS) replication"
      },
      {
        id: "O6",
        text: "General purpose v1 with Standard performance and Read-access geo-redundant storage (RA-GRS) replication"
      },
      {
        id: "O7",
        text: "General purpose v2 with Standard performance, Cool access tier, and Read-access geo-redundant storage (RA-GRS) replication"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Application1"
      },
      {
        id: "t2",
        text: "Application2"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O7",
    ]
  },
  {
    id: 110,
    number: 8,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou plan to develop a new app that will store business critical data. The app must meet the following requirements:\n© Prevent new data from being modified for one year.\nco Maximize data resiliency.\n=» Minimize read latency.\nWhat storage solution should you recommend for the app? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage Account type = Premium block blobs; Redundancy = Zone-redundant storage (ZRS).",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium block blobs"
      },
      {
        id: "O2",
        text: "Standard general-purpose v1"
      },
      {
        id: "O3",
        text: "Standard general-purpose v2"
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
        text: "Read-access geo-redundant storage (RA-GRS)"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage Account type"
      },
      {
        id: "t2",
        text: "Redundancy"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O5",
    ]
  },
  {
    id: 111,
    number: 9,
    topic: "Topic 3",
    prompt: "You plan to deploy 10 applications to Azure. The applications will be deployed to two Azure Kubernetes Service (AKS) clusters. Each cluster will\nbe deployed to a separate Azure region.\nThe application deployment must meet the following requirements:\n> Ensure that the applications remain available if a single AKS cluster fails.\nco Ensure that the connection traffic over the internet is encrypted by using SSL without having to configure SSL on each container.\nWhich service should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Front Door (Most Voted)"
      },
      {
        id: "B",
        text: "Azure Traffic Manager"
      },
      {
        id: "C",
        text: "AKS ingress controller"
      },
      {
        id: "D",
        text: "Azure Load Balancer"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 112,
    number: 10,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou have an on-premises file server that stores 2 TB of data files.\nYou plan to move the data files to Azure Blob Storage in the West Europe Azure region.\nYou need to recommend a storage account type to store the data files and a replication solution for the storage account. The solution must meet\nthe following requirements:\nco Be available if a single Azure datacenter fails\n©» Support storage tiers.\n> Minimize cost.\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage Account type = Standard general-purpose v2; Redundancy = Zone-redundant storage (ZRS).",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium block blobs"
      },
      {
        id: "O2",
        text: "Standard general-purpose v1"
      },
      {
        id: "O3",
        text: "Standard general-purpose v2"
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
        text: "Read-access geo-redundant storage (RA-GRS)"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage Account type"
      },
      {
        id: "t2",
        text: "Redundancy"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O5",
    ]
  },
  {
    id: 113,
    number: 11,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou have an Azure web app named App1 and an Azure key vault named KV1.\nApp stores database connection strings in KV1\nApp1 performs the following types of requests to KV1:\nco Get\n© List\n> Wrap\n* Delete\nUnwrap -\nc= Backup\nco Decrypt\n=» Encrypt\nYou are evaluating the continuity of service for App1.\nYou need to identify the following if the Azure region that hosts KV1 becomes unavailable:\n=# To where will KV1 fail over?\nco During the failover, which request type will be unavailable?\nWhat should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: To where will KV1 fail over? = A server in the paired region; During the failover, which request type will be unavailable? = Delete.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A server in the same availability set"
      },
      {
        id: "O2",
        text: "A server in the same fault domain"
      },
      {
        id: "O3",
        text: "A server in the paired region"
      },
      {
        id: "O4",
        text: "A virtual machine in a scale set"
      },
      {
        id: "O5",
        text: "Get"
      },
      {
        id: "O6",
        text: "List"
      },
      {
        id: "O7",
        text: "Wrap"
      },
      {
        id: "O8",
        text: "Delete"
      },
      {
        id: "O9",
        text: "Unwrap"
      },
      {
        id: "O10",
        text: "Backup"
      },
      {
        id: "O11",
        text: "Decrypt"
      },
      {
        id: "O12",
        text: "Encrypt"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "To where will KV1 fail over?"
      },
      {
        id: "t2",
        text: "During the failover, which request type will be unavailable?"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O8",
    ]
  },
  {
    id: 114,
    number: 12,
    topic: "Topic 3",
    prompt: "DRAG DROP -\nYour company identifies the following business continuity and disaster recovery objectives for virtual machines that host sales, finance, and\nreporting applications in the company's on-premises data center:\nco The sales application must be able to fail over to a second on-premises data center.\n> The reporting application must be able to recover point-in-time data at a daily granularity. The RTO is eight hours.\nco The finance application requires that data be retained for seven years. In the event of a disaster, the application must be able to run from\nAzure. The recovery time objective (RTO) is 10 minutes.\nYou need to recommend which services meet the business continuity and disaster recovery objectives. The solution must minimize costs.\nWhat should you recommend for each application? To answer, drag the appropriate services to the correct applications. Each service may be used\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Sales = Azure Site Recovery only; Finance = Azure Site Recovery and Azure Backup; Reporting = Azure Backup only.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Azure Backup only"
      },
      {
        id: "O2",
        text: "Azure Site Recovery and Azure Backup"
      },
      {
        id: "O3",
        text: "Azure Site Recovery only"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Sales"
      },
      {
        id: "t2",
        text: "Finance"
      },
      {
        id: "t3",
        text: "Reporting"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O2",
      "t3:O1",
    ]
  },
  {
    id: 115,
    number: 13,
    topic: "Topic 3",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n> Failover between replicas of the database must occur without any data loss.\n== The database must remain available in the event of a zone outage.\nce Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Managed Instance Business Critical"
      },
      {
        id: "B",
        text: "Azure SQL Database Premium (Most Voted)"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance General Purpose"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 116,
    number: 14,
    topic: "Topic 3",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n= Failover between replicas of the database must occur without any data loss.\n=» The database must remain available in the event of a zone outage.\n=> Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Managed Instance Business Critical"
      },
      {
        id: "B",
        text: "Azure SQL Database Premium (vost voted)"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Database Hyperscale"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 117,
    number: 15,
    topic: "Topic 3",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n© Provide access to the full .NET framework.\n= Provide redundancy if an Azure region fails.\n= Grant administrators access to the operating system to install custom application dependencies.\nSolution: You deploy a web app in an Isolated App Service plan.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes B.No (Tm)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 118,
    number: 16,
    topic: "Topic 3",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n> Failover between replicas of the database must occur without any data loss.\n=» The database must remain available in the event of a zone outage.\nc+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Serverless"
      },
      {
        id: "B",
        text: "Azure SQL Database Business Critical (ost Voted)"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Database Standard"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 119,
    number: 18,
    topic: "Topic 3",
    prompt: "HOTSPOT\nYou have two on-premises Microsoft SQL Server 2017 instances that host an Always On availability group named AG1. AG1 contains a single\ndatabase named DBT.\nYou have an Azure subscription that contains a virtual machine named VM1. VM1 runs Linux and contains a SQL Server 2019 instance.\nYou need to migrate DB1 to VM1. The solution must minimize downtime on DB1.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nPrepare for the migration by: >\nAdding a secondary replica to AG1\nCreating an Always On availability group on VM1\nUpgrading the on-premises SQL Server instances\nPerform the migration by using: -\nA distributed availability group\nAzure Migrate\nLog shipping\nPrepare for the migration by: ~\nCreating an Always On availability group on VM1\nUpGTaaiTg Me OTT=Premmses Sr Server Stance",
    keySource: "source",
    explanation: "Source answer: Prepare for the migration by = Creating an Always On availability group on VM1; Perform the migration by using = Azure Migrate.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Adding a secondary replica to AG1"
      },
      {
        id: "O2",
        text: "Creating an Always On availability group on VM1"
      },
      {
        id: "O3",
        text: "Upgrading the on-premises SQL Server instances"
      },
      {
        id: "O4",
        text: "A distributed availability group"
      },
      {
        id: "O5",
        text: "Azure Migrate"
      },
      {
        id: "O6",
        text: "Log shipping"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Prepare for the migration by"
      },
      {
        id: "t2",
        text: "Perform the migration by using"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O5",
    ]
  },
  {
    id: 120,
    number: 19,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou are building an Azure web app that will store the Personally Identifiable Information (PII) of employees.\nYou need to recommend an Azure SQL. Database solution for the web app. The solution must meet the following requirements:\n+ Maintain availability in the event of a single datacenter outage.\n* Support the encryption of specific columns that contain PII\n+ Automatically scale up during payroll operations.\n* Minimize costs.\nWhat should you include in the recommendations? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Service tier and compute tier = General Purpose service tier and Serverless compute tier; Encryption method = Always Encrypted.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Business Critical service tier and Serverless compute tier"
      },
      {
        id: "O2",
        text: "General Purpose service tier and Serverless compute tier"
      },
      {
        id: "O3",
        text: "Hyperscale service tier and Provisioned compute tier"
      },
      {
        id: "O4",
        text: "Always Encrypted"
      },
      {
        id: "O5",
        text: "Microsoft SQL Server and database encryption keys"
      },
      {
        id: "O6",
        text: "Transparent Data Encryption (TDE)"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Service tier and compute tier"
      },
      {
        id: "t2",
        text: "Encryption method"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 121,
    number: 20,
    topic: "Topic 3",
    prompt: "You plan to deploy an Azure Database for MySQL flexible server named Server to the East US Azure region.\nYou need to implement a business continuity solution for Server1. The solution must minimize downtime in the event of a failover to a paired\nregion.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a read replica."
      },
      {
        id: "B",
        text: "Store the database files in Azure premium file shares."
      },
      {
        id: "C",
        text: "Implement Geo-redundant backup."
      },
      {
        id: "D",
        text: "Configure native MySQL replication."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 122,
    number: 21,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\nVfl Virtual Network\nPublicload balancer Includes a backend pool name BP1\nVMSST | Azure Virtual Machine Scale Sets | Included in BP1\nConnectedto VNet1\nNVA1 Network Virtual Appliance (NVA) Connected to VNet1\nPerforms security filtering of traffic for\nVMSS1\nNVA2 Network Virtual Appliance (NVA) Connected to VNet1\nPerforms security filtering of traffic for\nVMSS1\nYou need to recommend a load balancing solution that will distribute incoming traffic for VMSS1 across NVA1 and NVA2. The solution must\nminimize administrative effort.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Gateway Load Balancer"
      },
      {
        id: "B",
        text: "Azure Front Door"
      },
      {
        id: "C",
        text: "Azure Application Gateway"
      },
      {
        id: "D",
        text: "Azure Traffic Manager"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 123,
    number: 22,
    topic: "Topic 3",
    prompt: "HOTSPOT\nYou have the Azure subscriptions shown in the following table.\n| Name [ Location | Azure AD tenant\nEas Us\nEast US contoso-recovery.onmicrosoft.com\nContoso.onmicrosft.com contains a user named User1.\nYou need to deploy a solution to protect against ransomware attacks. The solution must meet the following requirements:\n+ Ensure that all the resources in Sub are backed up by using Azure Backup.\n+ Require that User1 first be assigned a role for Sub2 before the user can make major changes to the backup configuration.\nWhat should you create in each subscription? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Sub1 = A Recovery Services vault; Sub2 = A Resource Guard.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A Recovery Services vault"
      },
      {
        id: "O2",
        text: "A Resource Guard"
      },
      {
        id: "O3",
        text: "An Azure Site Recovery job"
      },
      {
        id: "O4",
        text: "Microsoft Azure Backup Server (MABS)"
      },
      {
        id: "O5",
        text: "The Microsoft Azure Recovery Services (MARS) agent"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Sub1"
      },
      {
        id: "t2",
        text: "Sub2"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  },
  {
    id: 124,
    number: 24,
    topic: "Topic 3",
    prompt: "HOTSPOT\nYou plan to deploy a containerized web-app that will be hosted in five Azure Kubernetes Service (AKS) clusters. Each cluster will be hosted in a\ndifferent Azure region.\nYou need to provide access to the app from the internet. The solution must meet the following requirements:\n+ Incoming HTTPS requests must be routed to the cluster that has the lowest network latency.\n« HTTPS traffic to individual pods must be routed via an ingress controller.\n+ In the event of an AKS cluster outage, failover time must be minimized.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: For global load balancing = Azure Front Door; As the ingress controller = Azure Application Gateway.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Front Door"
      },
      {
        id: "O2",
        text: "Azure Traffic Manager"
      },
      {
        id: "O3",
        text: "Cross-region load balancing in Azure"
      },
      {
        id: "O4",
        text: "Standard Load Balancer"
      },
      {
        id: "O5",
        text: "Azure Application Gateway"
      },
      {
        id: "O6",
        text: "Azure Standard Load Balancer"
      },
      {
        id: "O7",
        text: "Basic Azure Load Balancer"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "For global load balancing"
      },
      {
        id: "t2",
        text: "As the ingress controller"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O5",
    ]
  },
  {
    id: 125,
    number: 25,
    topic: "Topic 3",
    prompt: "HOTSPOT -\nYou have an Azure subscription.\nYou create a storage account that will store documents.\nYou need to configure the storage account to meet the following requirements:\n- Ensure that retention policies are standardized across the subscription.\n« Ensure that data can be purged if the data is copied to an unauthorized location.\nWhich two settings should you enable? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nRecovery\nv\n[Onin omar |\ngp [= Enable soft delete for blobs oo\nE\n~\nTracking\n~ [emerge |\n[CT bli range es |\nAccess control\n~ [J enable version-leve! immutability support\nRecovery\nMerry\n[Teubner comres|\n[bits rns |",
    keySource: "source",
    explanation: "Source answer: First setting to enable = Enable operational backup with Azure Backup; Second setting to enable = Enable permanent delete for soft deleted items.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Enable operational backup with Azure Backup"
      },
      {
        id: "O2",
        text: "Enable permanent delete for soft deleted items"
      },
      {
        id: "O3",
        text: "Enable soft delete for blobs"
      },
      {
        id: "O4",
        text: "Enable soft delete for containers"
      },
      {
        id: "O5",
        text: "Enable version-level immutability support"
      },
      {
        id: "O6",
        text: "Enable point-in-time restore for containers"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "First setting to enable"
      },
      {
        id: "t2",
        text: "Second setting to enable"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  },
  {
    id: 126,
    number: 26,
    topic: "Topic 3",
    prompt: "HOTSPOT\nYou have an Azure subscription.\nYou are designing a solution for containerized apps. The solution must meet the following requirements:\n+ Automatically scale the apps by creating additional instances.\n* Minimize administrative effort to maintain nodes and clusters.\n« Ensure that containerized apps are highly available across multiple availability zones.\n+ Provide a central location for the lifecycle management and storage of container images.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: To run the containerized apps = Azure Container Apps; For the lifecycle management and storage of container images = Azure Container Registry.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure Container Apps"
      },
      {
        id: "O2",
        text: "Azure Container Instances"
      },
      {
        id: "O3",
        text: "Azure Container Registry"
      },
      {
        id: "O4",
        text: "Azure Kubernetes Service (AKS)"
      },
      {
        id: "O5",
        text: "Azure Service Fabric"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "To run the containerized apps"
      },
      {
        id: "t2",
        text: "For the lifecycle management and storage of container images"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O3",
    ]
  },
  {
    id: 127,
    number: 27,
    topic: "Topic 3",
    prompt: "DRAG DROP\nYou plan to use Azure Storage to store data assets.\nYou need to identify the procedure to fail over a general-purpose v2 account as part of a disaster recovery plan. The solution must meet the\nfollowing requirements:\n- Apps must be able to access the storage account after a failover.\n« You must be able to fail back the storage account to the original location.\n* Downtime must be minimized.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.",
    keySource: "source",
    explanation: "Source answer: Step 1 = Before a failover, configure geo-redundant storage (GRS) replication for the storage account; Step 2 = Initiate a failover; Step 3 = After a failover, configure geo-redundant storage (GRS) replication for the storage account.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "After a failover, configure geo-redundant storage (GRS) replication for the storage account"
      },
      {
        id: "O2",
        text: "Initiate a failover"
      },
      {
        id: "O3",
        text: "Before a failover, configure zone-redundant storage (ZRS) replication for the storage account"
      },
      {
        id: "O4",
        text: "Before a failover, configure geo-redundant storage (GRS) replication for the storage account"
      },
      {
        id: "O5",
        text: "After a failover, configure zone-redundant storage (ZRS) replication for the storage account"
      },
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
      },
    ],
    correct: [
      "t1:O4",
      "t2:O2",
      "t3:O1",
    ]
  },
  {
    id: 128,
    number: 1,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a Basic Azure virtual WAN named VirtualWAN1 and the virtual hubs shown in the following table.\nfa Juswes\nYou have an ExpressRoute circuit in the US East Azure region.\nYou need to create an ExpressRoute association to Virtua WAN1.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Upgrade Virtual WANT to Standard."
      },
      {
        id: "B",
        text: "Create a gateway on Hub."
      },
      {
        id: "C",
        text: "Enable the ExpressRoute premium add-on."
      },
      {
        id: "D",
        text: "Create a hub virtual network in US East."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 129,
    number: 2,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a storage account.\nAn application sometimes writes duplicate files to the storage account.\nYou have a PowerShell script that identifies and deletes duplicate files in the storage account. Currently, the script is run manually after approval\nfrom the operations manager.\nYou need to recommend a serverless solution that performs the following actions:\nc= Runs the script once an hour to identify whether duplicate files exist\n== Sends an email notification to the operations manager requesting approval to delete the duplicate files\n> Processes an email response from the operations manager specifying whether the deletion was approved\nco Runs the script if the deletion was approved\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Logic Apps and Azure Event Grid"
      },
      {
        id: "B",
        text: "Azure Logic Apps and Azure Functions (Voz vored)"
      },
      {
        id: "C",
        text: "Azure Pipelines and Azure Service Fabric"
      },
      {
        id: "D",
        text: "Azure Functions and Azure Batch"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 130,
    number: 3,
    topic: "Topic 4",
    prompt: "Your company has the infrastructure shown in the following table.\nLocation | Resource\n* Azure subscription named Subscription1\n* 20 Azure web apps\nOn-premises datacenter | + Active Directory domain\n«Server running Azure AD Connect\n+ Linux computer named Serverl\nThe on-premises Active Directory domain syncs with Azure Active Directory (Azure AD).\nServer1 runs an application named App1 that uses LDAP queries to verify user identities in the on-premises Active Directory domain.\nYou plan to migrate ServerT to a virtual machine in Subscription.\nA company security policy states that the virtual machines and services deployed to Subscription] must be prevented from accessing the on-\npremises network.\nYou need to recommend a solution to ensure that App1 continues to function after the migration. The solution must meet the security policy.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD Application Proxy"
      },
      {
        id: "B",
        text: "the Active Directory Domain Services role on a virtual machine"
      },
      {
        id: "C",
        text: "an Azure VPN gateway"
      },
      {
        id: "D",
        text: "Azure AD Domain Services (Azure AD DS)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 131,
    number: 4,
    topic: "Topic 4",
    prompt: "You need to design a solution that will execute custom C# code in response to an event routed to Azure Event Grid. The solution must meet the\nfollowing requirements:\n=> The executed code must be able to access the private IP address of a Microsoft SQL Server instance that runs on an Azure virtual machine.\n* Costs must be minimized.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Logic Apps in the Consumption plan"
      },
      {
        id: "B",
        text: "Azure Functions in the Premium plan"
      },
      {
        id: "C",
        text: "Azure Functions in the Consumption plan"
      },
      {
        id: "D",
        text: "Azure Logic Apps in the integrated service environment"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 132,
    number: 5,
    topic: "Topic 4",
    prompt: "You have an on-premises network and an Azure subscription. The on-premises network has several branch offices.\nA branch office in Toronto contains a virtual machine named VM1 that is configured as a file server. Users access the shared files on VM1 from all\nthe offices.\nYou need to recommend a solution to ensure that the users can access the shared files as quickly as possible if the Toronto branch office is\ninaccessible.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "a Recovery Services vault and Windows Server Backup 8. Azure blob containers and Azure File Sync"
      },
      {
        id: "C",
        text: "a Recovery Services vault and Azure Backup"
      },
      {
        id: "D",
        text: "an Azure file share and Azure File Sync"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 133,
    number: 6,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have an Azure subscription named Subscription? that is linked to a hybrid Azure Active Directory (Azure AD) tenant\nYou have an on-premises datacenter that does NOT have a VPN connection to Subscription. The datacenter contains a computer named Server1\nthat has\nMicrosoft SQL Server 2016 installed. Server is prevented from accessing the internet.\nAn Azure logic app resource named LogicApp1 requires write access to a database on Server\nYou need to recommend a solution to provide LogicApp1 with the ability to access Server1.\nWhat should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: On-premises = An On-premises data gateway; Azure = A connection gateway resource.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A Web Application Proxy for Windows Server"
      },
      {
        id: "O2",
        text: "An Azure AD Application Proxy connector"
      },
      {
        id: "O3",
        text: "An On-premises data gateway"
      },
      {
        id: "O4",
        text: "Hybrid Connection Manager"
      },
      {
        id: "O5",
        text: "A connection gateway resource"
      },
      {
        id: "O6",
        text: "An Azure Application Gateway"
      },
      {
        id: "O7",
        text: "An Azure Event Grid domain"
      },
      {
        id: "O8",
        text: "An enterprise application"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "On-premises"
      },
      {
        id: "t2",
        text: "Azure"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O5",
    ]
  },
  {
    id: 134,
    number: 7,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYour company develops a web service that is deployed to an Azure virtual machine named VM1. The web service allows an API to access real\ntime data from\nVMI.\nThe current virtual machine deployment is shown in the Deployment exhibit.\nVM1 VM2\nSubnet 1 ProdSubnet\nCoo >\nVNetl\nThe chief technology officer (CTO) sends you the following email message: \"Our developers have deployed the web service to a virtual machine\nnamed VM1.\nTesting has shown that the API is accessible from VM1 and VM2. Our partners must be able to connect to the API over the Internet. Partners will\nuse this data in applications that they develop.”\nYou deploy an Azure API Management (APIM) service. The relevant API Management configuration is shown in the API exhibit.\nVirtual network Off Internal\nLocation Virtual network Subnet\nWest Europe VNetl ProdSubnet\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\nAnswer Area\nStatements Yes No\nThe API is available to partners over the internet.\nThe APIM instance can access real-time data from VM1.\nA VPN gateway is required for partner access.\nAnswer Area\nStatements Yes No",
    keySource: "source",
    explanation: "Source answer: 1p. API is available to partners over the internet. |o |",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "No"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 135,
    number: 8,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYour company has an existing web app that runs on Azure virtual machines.\nYou need to ensure that the app is protected from SQL injection attempts and uses a layer-7 load balancer. The solution must minimize\ndisruptions to the code of the app.\nWhat should you recommend? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or\nnot at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Azure service = Azure Application Gateway; Feature = Web Application Firewall (WAF).",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Web Application Firewall (WAF)"
      },
      {
        id: "O2",
        text: "Azure Application Gateway"
      },
      {
        id: "O3",
        text: "Azure Load Balancer"
      },
      {
        id: "O4",
        text: "Azure Traffic Manager"
      },
      {
        id: "O5",
        text: "SSL offloading"
      },
      {
        id: "O6",
        text: "URL-based content routing"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Azure service"
      },
      {
        id: "t2",
        text: "Feature"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O1",
    ]
  },
  {
    id: 136,
    number: 9,
    topic: "Topic 4",
    prompt: "You are designing a microservices architecture that will be hosted in an Azure Kuberetes Service (AKS) cluster. Apps that will consume the\nmicroservices will be hosted on Azure virtual machines. The virtual machines and the AKS cluster will reside on the same virtual network.\nYou need to design a solution to expose the microservices to the consumer apps. The solution must meet the following requirements:\n<> Ingress access to the microservices must be restricted to a single private IP address and protected by using mutual TLS authentication.\n=o The number of incoming microservice calls must be rate-limited.\n=> Costs must be minimized.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure App Gateway with Azure Web Application Firewall (WAF)"
      },
      {
        id: "B",
        text: "Azure API Management Standard tier with a service endpoint"
      },
      {
        id: "C",
        text: "Azure Front Door with Azure Web Application Firewall (WAF)"
      },
      {
        id: "D",
        text: "Azure API Management Premium tier with virtual network connection"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 137,
    number: 10,
    topic: "Topic 4",
    prompt: "You have a .NET web service named Service1 that performs the following tasks:\n5 Reads and writes temporary files to the local file system.\n=> Writes to the Application event log.\nYou need to recommend a solution to host Service in Azure. The solution must meet the following requirements:\n=» Minimize maintenance overhead.\n=> Minimize costs.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure App Service web app (ost Voted)"
      },
      {
        id: "B",
        text: "an Azure virtual machine scale set"
      },
      {
        id: "C",
        text: "an App Service Environment (ASE)"
      },
      {
        id: "D",
        text: "an Azure Functions app"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 138,
    number: 11,
    topic: "Topic 4",
    prompt: "You have the Azure resources shown in the following table.\n| mame [we | toaton |\nUS-Central-Firewall-policy | Azure Firewall policy Central US\nUS-East-Firewall-policy Azure Firewall policy East US\nEU-Firewall-policy Azure Firewall policy West Europe\nUSEastfirewall Azure Firewall Central US\nUSWestfirewall Azure Firewall East US\nEUFirewall Azure Firewall ‘West Europe\nYou need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be\nconfigured as a parent policy for the existing policies.\nWhat is the minimum number of additional Azure Firewall policies you should create?\nA0\nB.1\nc.2\n0.3 (mm) —",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "D"
      },
      {
        id: "B",
        text: "Other / unsure"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 139,
    number: 12,
    topic: "Topic 4",
    prompt: "Your company has an app named App1 that uses data from the on-premises Microsoft SQL Server databases shown in the following table.\nApp1 and the data are used on the first day of the month only. The data is not expected to grow more than 3 percent each year.\nThe company is rewriting App1 as an Azure web app and plans to migrate all the data to Azure.\nYou need to migrate the data to Azure SQL Database and ensure that the database is only available on the first day of each month\nWhich service tier should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "vCore-based General Purpose (fost Voted)"
      },
      {
        id: "B",
        text: "DTU-based Standard"
      },
      {
        id: "C",
        text: "vCore-based Business Critical"
      },
      {
        id: "D",
        text: "DTU-based Basic"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 140,
    number: 13,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Fabric"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Service Bus (ost Voted)"
      },
      {
        id: "D",
        text: "Azure Traffic Manager"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 141,
    number: 14,
    topic: "Topic 4",
    prompt: "Your company has 300 virtual machines hosted in a VMware environment. The virtual machines vary in size and have various utilization levels.\nYou plan to move all the virtual machines to Azure.\nYou need to recommend how many and what size Azure virtual machines will be required to move the current workloads to Azure. The solution\nmust minimize administrative effort.\nWhat should you use to make the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Pricing calculator"
      },
      {
        id: "B",
        text: "Azure Advisor"
      },
      {
        id: "C",
        text: "Azure Migrate"
      },
      {
        id: "D",
        text: "Azure Cost Management"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 142,
    number: 15,
    topic: "Topic 4",
    prompt: "You plan to provision a High Performance Computing (HPC) cluster in Azure that will use a third-party scheduler.\nYou need to recommend a solution to provision and manage the HPC cluster node\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Automation"
      },
      {
        id: "B",
        text: "Azure CycleCloud"
      },
      {
        id: "C",
        text: "Azure Purview"
      },
      {
        id: "D",
        text: "Azure Lighthouse"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 143,
    number: 16,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are designing an Azure App Service web app.\nYou plan to deploy the web app to the North Europe Azure region and the West Europe Azure region.\nYou need to recommend a solution for the web app. The solution must meet the following requirements:\n©» Users must always access the web app from the North Europe region, unless the region fails.\n> The web app must be available to users if an Azure region is unavailable.\n= Deployment costs must be minimized.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Request routing method = A Traffic Manager profile; Request routing configuration = Priority traffic routing.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A Traffic Manager profile"
      },
      {
        id: "O2",
        text: "Azure Application Gateway"
      },
      {
        id: "O3",
        text: "Azure Load Balancer"
      },
      {
        id: "O4",
        text: "Cookie-based session affinity"
      },
      {
        id: "O5",
        text: "Performance traffic routing"
      },
      {
        id: "O6",
        text: "Priority traffic routing"
      },
      {
        id: "O7",
        text: "Weighted traffic routing"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Request routing method"
      },
      {
        id: "t2",
        text: "Request routing configuration"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O6",
    ]
  },
  {
    id: 144,
    number: 17,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n= Support rate limiting.\nc= Balance requests between all instances.\n= Ensure that users can access the app in the event of a regional outage.\nSolution: You use Azure Traffic Manager to provide access to the app.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes Bo"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 145,
    number: 18,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\nYou need to design an access solution for the app. The solution must meet the following replication requirements\n= Support rate limiting.\nc= Balance requests between all instances.\n== Ensure that users can access the app in the event of a regional outage.\nSolution: You use Azure Load Balancer to provide access to the app.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes Bo"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 146,
    number: 19,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n=> Support rate limiting.\n> Balance requests between all instances.\n= Ensure that users can access the app in the event of a regional outage.\nSolution: You use Azure Application Gateway to provide access to the app.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes B.No (vor)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 147,
    number: 20,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYour company has two on-premises sites in New York and Los Angeles and Azure virtual networks in the East US Azure region and the West US\nAzure region.\nEach on-premises site has ExpressRoute Global Reach circuits to both regions.\nYou need to recommend a solution that meets the following requirements:\n=» Outbound traffic to the internet from workloads hosted on the virtual networks must be routed through the closest available on-premises site.\n== If an on-premises site fails, traffic from the workloads on the virtual networks to the internet must reroute automatically to the other site.\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Routing from the virtual networks to the on-premises locations must be configured by using = Border Gateway Protocol (BGP); The automatic routing configuration following a failover must be handled by using = Border Gateway Protocol (BGP).",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure default routes"
      },
      {
        id: "O2",
        text: "Border Gateway Protocol (BGP)"
      },
      {
        id: "O3",
        text: "User-defined routes"
      },
      {
        id: "O4",
        text: "Hot Standby Routing Protocol (HSRP)"
      },
      {
        id: "O5",
        text: "Virtual Router Redundancy Protocol (VRRP)"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Routing from the virtual networks to the on-premises locations must be configured by using"
      },
      {
        id: "t2",
        text: "The automatic routing configuration following a failover must be handled by using"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O2",
    ]
  },
  {
    id: 148,
    number: 21,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are designing an application that will use Azure Linux virtual machines to analyze video files. The files will be uploaded from corporate offices\nthat connect to\nAzure by using ExpressRoute.\nYou plan to provision an Azure Storage account to host the files.\nYou need to ensure that the storage account meets the following requirements:\n= Supports video files of upto 7 TB\nco Provides the highest availability possible\n= Ensures that storage is optimized for the large video files\n> Ensures that files from the on-premises network are uploaded by using ExpressRoute\nHow should you configure the storage account? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Storage account type = Standard general-purpose v2; Data redundancy = Geo-redundant storage (GRS); Networking = A private endpoint.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Premium files shares"
      },
      {
        id: "O2",
        text: "Premium page blobs"
      },
      {
        id: "O3",
        text: "Standard general-purpose v2"
      },
      {
        id: "O4",
        text: "Zone-redundant storage (ZRS)"
      },
      {
        id: "O5",
        text: "Locally-redundant storage (LRS)"
      },
      {
        id: "O6",
        text: "Geo-redundant storage (GRS)"
      },
      {
        id: "O7",
        text: "Azure Route Server"
      },
      {
        id: "O8",
        text: "A private endpoint"
      },
      {
        id: "O9",
        text: "A service endpoint"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Storage account type"
      },
      {
        id: "t2",
        text: "Data redundancy"
      },
      {
        id: "t3",
        text: "Networking"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O6",
      "t3:O8",
    ]
  },
  {
    id: 149,
    number: 22,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nA company plans to implement an HTTP-based API to support a web app. The web app allows customers to check the status of their orders.\nThe API must meet the following requirements:\n=> Implement Azure Functions.\n=» Provide public read-only operations.\nco Prevent write operations.\nYou need to recommend which HTTP methods and authorization level to configure.\nWhat should you recommend? To answer, configure the appropriate options in the dialog box in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: HTTP methods = GET only; Authorization level = Anonymous.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "GET only"
      },
      {
        id: "O2",
        text: "GET and POST only"
      },
      {
        id: "O3",
        text: "GET, POST, and OPTIONS only"
      },
      {
        id: "O4",
        text: "Function"
      },
      {
        id: "O5",
        text: "Anonymous"
      },
      {
        id: "O6",
        text: "Admin"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "HTTP methods"
      },
      {
        id: "t2",
        text: "Authorization level"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O5",
    ]
  },
  {
    id: 150,
    number: 23,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\nYou need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the\nfollowing requirements:\n<> Only allow the creation of the virtual machines in specific regions.\n5 Only allow the creation of specific sizes of virtual machines.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Resource Manager (ARM) templates"
      },
      {
        id: "B",
        text: "Azure Policy (Most Voted)"
      },
      {
        id: "C",
        text: "Conditional Access policies"
      },
      {
        id: "D",
        text: "role-based access control (RBAC)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 151,
    number: 24,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have an on-premises network that uses an IP address space of 172.16.0.0/16.\nYou plan to deploy 30 virtual machines to a new Azure subscription.\nYou identify the following technical requirements:\n=» All Azure virtual machines must be placed on the same subnet named Subnet1.\nc= All the Azure virtual machines must be able to communicate with all on-premises servers.\n5 The servers must be able to communicate between the on-premises network and Azure by using a site-to-site VPN.\nYou need to recommend a subnet design that meets the technical requirements.\nWhat should you include in the recommendation? To answer, drag the appropriate network addresses to the correct subnets. Each network\naddress may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Subnet1 = 192.168.0.0/24; Gateway subnet = 192.168.1.0/27.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "172.16.0.0/16"
      },
      {
        id: "O2",
        text: "172.16.1.0/27"
      },
      {
        id: "O3",
        text: "192.168.0.0/24"
      },
      {
        id: "O4",
        text: "192.168.1.0/27"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Subnet1"
      },
      {
        id: "t2",
        text: "Gateway subnet"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O4",
    ]
  },
  {
    id: 152,
    number: 25,
    topic: "Topic 4",
    prompt: "You have data files in Azure Blob Storage.\nYou plan to transform the files and move them to Azure Data Lake Storage.\nYou need to transform the data by using mapping data flow.\nWhich service should you use?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Databricks"
      },
      {
        id: "B",
        text: "Azure Storage Sync"
      },
      {
        id: "C",
        text: "Azure Data Factory"
      },
      {
        id: "D",
        text: "Azure Data Box Gateway"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 153,
    number: 26,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\nYou need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following\nrequirements:\nc= Minimize the time it takes to provision compute resources during scale-out operations.\n== Support autoscaling of Windows Server containers.\nWhich scaling option should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Kubernetes version 1.20.2 or newer"
      },
      {
        id: "B",
        text: "Virtual nodes with Virtual Kubelet ACI"
      },
      {
        id: "C",
        text: "cluster autoscaler (Jost voted)"
      },
      {
        id: "D",
        text: "horizontal pod autoscaler"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 154,
    number: 27,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYour on-premises network contains a file server named Server? that stores 500 GB of data.\nYou need to use Azure Data Factory to copy the data from Server to Azure Storage.\nYou add a new data factory.\nWhat should you do next? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: From Server1 = Install a self-hosted integration runtime; From the data factory = Create a pipeline.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Install an Azure File Sync agent"
      },
      {
        id: "O2",
        text: "Install a self-hosted integration runtime"
      },
      {
        id: "O3",
        text: "Install the File Server Resource Manager role service"
      },
      {
        id: "O4",
        text: "Create a pipeline"
      },
      {
        id: "O5",
        text: "Create an Azure Import/Export job"
      },
      {
        id: "O6",
        text: "Provision an Azure-SSIS integration runtime"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "From Server1"
      },
      {
        id: "t2",
        text: "From the data factory"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 155,
    number: 28,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\nYou need to recommend an Azure Kubernetes Service (AKS) solution that will use Linux nodes. The solution must meet the following\nrequirements:\n<5 Minimize the time it takes to provision compute resources during scale-out operations.\n© Support autoscaling of Linux containers.\n=> Minimize administrative effort.\nWhich scaling option should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "horizontal pod autoscaler"
      },
      {
        id: "B",
        text: "cluster autoscaler"
      },
      {
        id: "C",
        text: "virtual nodes (Vost Voted)"
      },
      {
        id: "D",
        text: "Virtual Kubelet"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 156,
    number: 29,
    topic: "Topic 4",
    prompt: "You are designing an order processing system in Azure that will contain the Azure resources shown in the following table.\nApp Service web app| Processes customer orders\nFunction1 | Function Checks product availability at vendor 1\nFunction2 | Function Checks product availability at vendor 2\nstorage2 Storage account Stores order processing logs\nThe order processing system will have the following transaction flow:\n© A customer will place an order by using App1.\n> When the order is received, App1 will generate a message to check for product availability at vendor 1 and vendor 2.\nco An integration component will process the message, and then trigger either Function or Function? depending on the type of order.\n=> Once a vendor confirms the product availability, a status message for App1 will be generated by Function1 or Function2.\n=o All the steps of the transaction will be logged to storage.\nWhich type of resource should you recommend for the integration component?",
    keySource: "source",
    explanation: "Source answer: an Azure Service Bus queue",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Service Bus queue"
      },
      {
        id: "B",
        text: "an Azure Data Factory pipeline"
      },
      {
        id: "C",
        text: "an Azure Event Grid domain"
      },
      {
        id: "D",
        text: "an Azure Event Hubs capture"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 157,
    number: 30,
    topic: "Topic 4",
    prompt: "You have 100 Microsoft SQL Server Integration Services (SSIS) packages that are configured to use 10 on-premises SQL Server databases as their\ndestinations.\nYou plan to migrate the 10 on-premises databases to Azure SQL Database.\nYou need to recommend a solution to create Azure-SQL Server Integration Services (SSIS) packages. The solution must ensure that the packages\ncan target the\nSQL Database instances as their destinations.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Data Migration Assistant (DMA)"
      },
      {
        id: "B",
        text: "Azure Data Factory (Most Voted)"
      },
      {
        id: "C",
        text: "Azure Data Catalog"
      },
      {
        id: "D",
        text: "SQL Server Migration Assistant (SSMA)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 158,
    number: 31,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2019 and contains 500 GB of data files.\nYou are designing a solution that will use Azure Data Factory to transform the data files, and then load the files to Azure Data Lake Storage.\nWhat should you deploy on VM1 to support the design?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "the On-premises data gateway"
      },
      {
        id: "B",
        text: "the Azure Pipelines agent"
      },
      {
        id: "C",
        text: "the self-hosted integration runtime"
      },
      {
        id: "D",
        text: "the Azure File Sync agent"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 159,
    number: 32,
    topic: "Topic 4",
    prompt: "You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.\nYour company has a line-of-business (LOB) application that was developed internally.\nYou need to implement SAML single sign-on (S50) and enforce multi-factor authentication (MFA) when users attempt to access the application\nfrom an unknown location.\nWhich two features should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Azure AD Privileged Identity Management (PIM)"
      },
      {
        id: "B",
        text: "Azure Application Gateway"
      },
      {
        id: "C",
        text: "Azure AD enterprise applications (Most Voted)"
      },
      {
        id: "D",
        text: "Azure AD Identity Protection"
      },
      {
        id: "E",
        text: "Conditional Access policies (ios Voied)"
      },
    ],
    correct: [
      "C",
      "E",
    ]
  },
  {
    id: 160,
    number: 33,
    topic: "Topic 4",
    prompt: "You plan to automata the deployment of resources to Azure subscriptions.\nWhat is a difference between using Azure Blueprints and Azure Resource Manager (ARM) templates?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "ARM templates remain connected to the deployed resources."
      },
      {
        id: "B",
        text: "Only blueprints can contain policy definitions."
      },
      {
        id: "C",
        text: "Only ARM templates can contain policy definitions."
      },
      {
        id: "D",
        text: "Blueprints remain connected to the deployed resources."
      },
    ],
    correct: [
      "D",
    ]
  },
  {
    id: 161,
    number: 35,
    topic: "Topic 4",
    prompt: "You plan to deploy an Azure App Service web app that will have multiple instances across multiple Azure regions.\nYou need to recommend a load balancing service for the planned deployment The solution must meet the following requirements:\n> Maintain access to the app in the event of a regional outage\n©» Support Azure Web Application Firewall (WAF).\n© Support cookie-based affinity.\n= Support URL routing.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Front Door (Most Voted)"
      },
      {
        id: "B",
        text: "Azure Traffic Manager"
      },
      {
        id: "C",
        text: "Azure Application Gateway"
      },
      {
        id: "D",
        text: "Azure Load Balancer"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 162,
    number: 36,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou have the Azure resources shown in the following table.\n[Name | Type | Description |\nVNET1 Virtual network Connected to an on-premises network by using\nExpressRoute\nVirtual machine Configured as a DNS server\nSQLDB1 Azure SQL Single instance\nDatabase\n[PET [Private endpoint Provides connectivity to SQLDB1\ncontoso.com | Private DNS zone | Linked to VNET1 and contains an A record for\nPE1\nPublic DNS zone | Contains a C NAME record for SQLDB1\nYou need to design a solution that provides on-premises network connectivity to SQLDB1 through PE1\nHow should you configure name resolution? To answer select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Azure configuration = Configure VM1 to forward contoso.com to the Azure-provided DNS at 168.63.129.16; On-premises DNS configuration = Forward contoso.com to VM1.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Configure VM1 to forward contoso.com to the public DNS zone"
      },
      {
        id: "O2",
        text: "Configure VM1 to forward contoso.com to the Azure-provided DNS at 168.63.129.16"
      },
      {
        id: "O3",
        text: "In VNet1, configure a custom DNS server set to the Azure-provided DNS at 168.63.129.16"
      },
      {
        id: "O4",
        text: "Forward contoso.com to VM1"
      },
      {
        id: "O5",
        text: "Forward contoso.com to the public DNS zone"
      },
      {
        id: "O6",
        text: "Forward contoso.com to the Azure-provisioned DNS at 168.63.129.16"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Azure configuration"
      },
      {
        id: "t2",
        text: "On-premises DNS configuration"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O4",
    ]
  },
  {
    id: 163,
    number: 37,
    topic: "Topic 4",
    prompt: "You are designing a microservices architecture that will support a web application.\nThe solution must meet the following requirements:\nc= Deploy the solution on-premises and to Azure.\nSupport low-latency and hyper-scale operations.\n> Allow independent upgrades to each microservice.\n= Set policies for performing automatic repairs to the microservices.\nYou need to recommend a technology.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Container Instance"
      },
      {
        id: "B",
        text: "Azure Logic App"
      },
      {
        id: "C",
        text: "Azure Service Fabric (Most Voted)"
      },
      {
        id: "D",
        text: "Azure virtual machine scale set"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 164,
    number: 38,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n> Support rate limiting.\n= Balance requests between all instances.\n= Ensure that users can access the app in the event of a regional outage.\nSolution: You use Azure Front Door to provide access to the app.\nDoes this meet the goal?\nA Yes (Tm)",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "B",
        text: "No"
      },
    ],
    correct: [
      "B",
    ]
  },
  {
    id: 165,
    number: 39,
    topic: "Topic 4",
    prompt: "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\nAzure subscription.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Activity Log"
      },
      {
        id: "B",
        text: "Azure Arc"
      },
      {
        id: "C",
        text: "Azure Analysis Services"
      },
      {
        id: "D",
        text: "Azure Monitor action groups"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 166,
    number: 40,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\nYou need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the\nfollowing requirements:\n== Only allow the creation of the virtual machines in specific regions.\n== Only allow the creation of specific sizes of virtual machines.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Attribute-based access control (ABAC)"
      },
      {
        id: "B",
        text: "Azure Policy (Most Voted)"
      },
      {
        id: "C",
        text: "Conditional Access policies"
      },
      {
        id: "D",
        text: "role-based access control (RBAC)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 167,
    number: 41,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Service Bus (ost Voted)"
      },
      {
        id: "D",
        text: "Azure Blob Storage"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 168,
    number: 42,
    topic: "Topic 4",
    prompt: "You have 100 devices that write performance data to Azure Blob Storage.\nYou plan to store and analyze the performance data in an Azure SQL database.\nYou need to recommend a solution to continually copy the performance data to the Azure SQL database.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Data Factory"
      },
      {
        id: "B",
        text: "Data Migration Assistant (DMA)"
      },
      {
        id: "C",
        text: "Azure Data Box"
      },
      {
        id: "D",
        text: "Azure Database Migration Service"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 169,
    number: 43,
    topic: "Topic 4",
    prompt: "You need to recommend a storage solution for the records of a mission critical application. The solution must provide a Service Level Agreement\n(SLA) for the latency of write operations and the throughput.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Data Lake Storage Gen2"
      },
      {
        id: "B",
        text: "Azure Blob Storage"
      },
      {
        id: "C",
        text: "Azure SQL"
      },
      {
        id: "D",
        text: "Azure Cosmos DB"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 170,
    number: 44,
    topic: "Topic 4",
    prompt: "You are planning a storage solution. The solution must meet the following requirements:\n> Support at least 500 requests per second.\n=> Support a large image, video, and audio streams.\nWhich type of Azure Storage account should you provision?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "standard general-purpose v2"
      },
      {
        id: "B",
        text: "premium block blobs"
      },
      {
        id: "C",
        text: "premium page blobs"
      },
      {
        id: "D",
        text: "premium file shares"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 171,
    number: 45,
    topic: "Topic 4",
    prompt: "You need to recommend a data storage solution that meets the following requirements:\n= Ensures that applications can access the data by using a REST connection\n=> Hosts 20 independent tables of varying sizes and usage patterns.\n> Automatically replicates the data to a second Azure region\n=> Minimizes costs\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure SQL Database elastic pool that uses active geo-replication"
      },
      {
        id: "B",
        text: "tables in an Azure Storage account that use geo-redundant storage (GRS)"
      },
      {
        id: "C",
        text: "tables in an Azure Storage account that use read-access geo-redundant storage (RA-GRS)"
      },
      {
        id: "D",
        text: "an Azure SQL database that uses active geo-replication"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 172,
    number: 46,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are designing a software as a service (SaaS) application that will enable Azure Active Directory (Azure AD) users to create and publish online\nsurveys. The\nSaas application will have a front-end web app and a back-end web API. The web app will rely on the web API to handle updates to customer\nsurveys.\nYou need to design an authorization flow for the Saa$ application. The solution must meet the following requirements:\n=> To access the back-end web API, the web app must authenticate by using OAuth 2 bearer tokens.\nco The web app must authenticate by using the identities of individual users.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point",
    keySource: "source",
    explanation: "Source answer: The access tokens will be generated by = Azure AD; Authorization decisions will be performed by = A web API.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure AD"
      },
      {
        id: "O2",
        text: "A web app"
      },
      {
        id: "O3",
        text: "A web API"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "The access tokens will be generated by"
      },
      {
        id: "t2",
        text: "Authorization decisions will be performed by"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O3",
    ]
  },
  {
    id: 173,
    number: 47,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou plan to create an Azure environment that will contain a root management group and 10 child management groups. Each child management\ngroup will contain five Azure subscriptions. You plan to have between 10 and 30 resource groups in each subscription.\nYou need to design an Azure governance solution. The solution must meet the following requirements:\n=> Use Azure Blueprints to control governance across all the subscriptions and resource groups.\n=> Ensure that Blueprints-based configurations are consistent across all the subscriptions and resource groups.\n== Minimize the number of blueprint definitions and assignments.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Level at which to define the blueprints = The root management group; Level at which to create the blueprint assignments = The subscriptions.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "The child management groups"
      },
      {
        id: "O2",
        text: "The root management group"
      },
      {
        id: "O3",
        text: "The subscriptions"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Level at which to define the blueprints"
      },
      {
        id: "t2",
        text: "Level at which to create the blueprint assignments"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O3",
    ]
  },
  {
    id: 174,
    number: 48,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou are designing a virtual machine that will run Microsoft SQL Server and contain two data disks. The first data disk will store log files, and the\nsecond data disk will store data. Both disks are P40 managed disks.\nYou need to recommend a host caching method for each disk. The method must provide the best overall performance for the virtual machine\n‘while preserving the integrity of the SQL data and logs.\nWhich host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method\nmay be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Log disk = None; Data disk = ReadOnly.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "None"
      },
      {
        id: "O2",
        text: "ReadOnly"
      },
      {
        id: "O3",
        text: "ReadWrite"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Log disk"
      },
      {
        id: "t2",
        text: "Data disk"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  },
  {
    id: 175,
    number: 49,
    topic: "Topic 4",
    prompt: "You are designing a solution that calculates 3D geometry from height-map data.\nYou need to recommend a solution that meets the following requirements:\n= Performs calculations in Azure.\n<5 Ensures that each node can communicate data to every other node.\n©» Maximizes the number of nodes to calculate multiple scenes as fast as possible.\nMinimizes the amount of effort to implement the solution.\nWhich two actions should you include in the recommendation? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: DE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Enable parallel file systems on Azure."
      },
      {
        id: "B",
        text: "Create a render farm that uses virtual machines."
      },
      {
        id: "C",
        text: "Create a render farm that uses virtual machine scale sets."
      },
      {
        id: "D",
        text: "Create a render farm that uses Azure Batch."
      },
      {
        id: "E",
        text: "Enable parallel task execution on compute nodes."
      },
    ],
    correct: [
      "D",
      "E",
    ]
  },
  {
    id: 176,
    number: 50,
    topic: "Topic 4",
    prompt: "You have an on-premises application that consumes data from multiple databases. The application code references database tables by using a\ncombination of the server, database, and table name.\nYou need to migrate the application data to Azure.\nTo which two services can you migrate the application data to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: BD",
    type: "single",
    options: [
      {
        id: "A",
        text: "SQL Server Stretch Database"
      },
      {
        id: "B",
        text: "SQL Server on an Azure virtual machine"
      },
      {
        id: "C",
        text: "Azure SQL Database"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance"
      },
    ],
    correct: [
      "B",
    ]
  },
  {
    id: 177,
    number: 51,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou plan to migrate on-premises Microsoft SQL Server databases to Azure.\nYou need to recommend a deployment and resiliency solution that meets the following requirements:\nc= Supports user-initiated backups\n> Supports multiple automatically replicated instances across Azure regions\n=» Minimizes administrative effort to implement and maintain business continuity\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Deployment solution = Azure SQL Managed Instance; Resiliency solution = Auto-failover group.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Azure SQL Managed Instance"
      },
      {
        id: "O2",
        text: "SQL Server on Azure Virtual Machines"
      },
      {
        id: "O3",
        text: "An Azure SQL Database single database"
      },
      {
        id: "O4",
        text: "Auto-failover group"
      },
      {
        id: "O5",
        text: "Active geo-replication"
      },
      {
        id: "O6",
        text: "Zone-redundant deployment"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Deployment solution"
      },
      {
        id: "t2",
        text: "Resiliency solution"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O4",
    ]
  },
  {
    id: 178,
    number: 52,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\nc= Failover between replicas of the database must occur without any data loss.\n> The database must remain available in the event of a zone outage.\n=» Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Managed Instance Business Critical"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "C",
        text: "Azure SQL Database Business Critical"
      },
      {
        id: "D",
        text: "Azure SQL Database Serverless"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 179,
    number: 53,
    topic: "Topic 4",
    prompt: "You have an Azure web app that uses an Azure key vault named KeyVault1 in the West US Azure region.\nYou are designing a disaster recovery plan for KeyVault1.\nYou plan to back up the keys in KeyVault1.\nYou need to identify to where you can restore the backup.\nWhat should you identify?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "any region worldwide"
      },
      {
        id: "B",
        text: "the same region only"
      },
      {
        id: "C",
        text: "KeyVault1 only"
      },
      {
        id: "D",
        text: "the same geography only (ost voted)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 180,
    number: 54,
    topic: "Topic 4",
    prompt: "You have an on-premises line-of-business (LOB) application that uses a Microsoft SQL Server instance as the backend.\nYou plan to migrate the on-premises SQL Server instance to Azure virtual machines.\nYou need to recommend a highly available SQL Server deployment that meets the following requirements:\n=» Minimizes costs\nMinimizes failover time if a single server fails\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Always On availability group that has premium storage disks and a virtual network name (VNN)"
      },
      {
        id: "B",
        text: "an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share"
      },
      {
        id: "C",
        text: "an Always On availability group that has premium storage disks and a distributed network name (DNN)"
      },
      {
        id: "D",
        text: "an Always On Failover Cluster Instance that has a virtual network name (VNN) and a premium file share"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 181,
    number: 55,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\nat the same time as the Azure SQL databases.\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\ninstances must reside in the same region.\nYou need to recommend a solution to meet the regulatory requirement.\nSolution: You recommend creating resource groups based on locations and implementing resource locks on the resource groups.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes 8. No (Tm)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 182,
    number: 56,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\nat the same time as the Azure SQL databases.\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\ninstances must reside in the same region.\nYou need to recommend a solution to meet the regulatory requirement.\nSolution: You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes 8. No (Tm)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 183,
    number: 57,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\nat the same time as the Azure SQL databases:\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\ninstances must reside in the same region.\nYou need to recommend a solution to meet the regulatory requirement.\nSolution: You recommend using an Azure Policy initiative to enforce the location.\nDoes this meet the goal?\nA Yes (vam)\nB.No",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "A"
      },
      {
        id: "B",
        text: "Other / unsure"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 184,
    number: 58,
    topic: "Topic 4",
    prompt: "You plan to move a web app named App1 from an on-premises datacenter to Azure.\nApp1 depends on a custom COM component that is installed on the host server.\nYou need to recommend a solution to host App1 in Azure. The solution must meet the following requirements:\nco App1 must be available to users if an Azure datacenter becomes unavailable.\n> Costs must be minimized.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "In two Azure regions, deploy a load balancer and a web app."
      },
      {
        id: "B",
        text: "In two Azure regions, deploy a load balancer and a virtual machine scale set."
      },
      {
        id: "C",
        text: "Deploy a load balancer and a virtual machine scale set across two availability zones. (oxi vored)"
      },
      {
        id: "D",
        text: "In two Azure regions, deploy an Azure Traffic Manager profile and a web app."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 185,
    number: 59,
    topic: "Topic 4",
    prompt: "You plan to deploy an application named App1 that will run in containers on Azure Kubernetes Service (AKS) clusters. The AKS clusters will be\ndistributed across four Azure regions.\nYou need to recommend a storage solution to ensure that updated container images are replicated automatically to all the Azure regions hosting\nthe AKS clusters.\nWhich storage solution should you recommend?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "geo-redundant storage (GRS) accounts"
      },
      {
        id: "B",
        text: "Premium SKU Azure Container Registry (oxi vores)"
      },
      {
        id: "C",
        text: "Azure Content Delivery Network (CON)"
      },
      {
        id: "D",
        text: "Azure Cache for Redis"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 186,
    number: 60,
    topic: "Topic 4",
    prompt: "You have an Azure Active Directory (Azure AD) tenant.\nYou plan to deploy Azure Cosmos DB databases that will use the SQL API.\nYou need to recommend a solution to provide specific Azure AD user accounts with read access to the Cosmos DB databases.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "shared access signatures (SAS) and Conditional Access policies"
      },
      {
        id: "B",
        text: "certificates and Azure Key Vault"
      },
      {
        id: "C",
        text: "master keys and Azure Information Protection policies"
      },
      {
        id: "D",
        text: "a resource token and an Access control (IAM) role assignment"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 187,
    number: 61,
    topic: "Topic 4",
    prompt: "You need to recommend an Azure Storage solution that meets the following requirements:\n= The storage must support 1 PB of data.\n=» The data must be stored in blob storage.\n== The storage must support three levels of subfolders.\nc= The storage must support access control lists (ACLs).\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "a premium storage account that is configured for block blobs"
      },
      {
        id: "B",
        text: "a general purpose v2 storage account that has hierarchical namespace enabled (ost voted)"
      },
      {
        id: "C",
        text: "a premium storage account that is configured for page blobs"
      },
      {
        id: "D",
        text: "a premium storage account that is configured for file shares and supports large file shares"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 188,
    number: 62,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou manage a database environment for a Microsoft Volume Licensing customer named Contoso, Ltd. Contoso uses License Mobility through\nSoftware\nAssurance.\nYou need to deploy 50 databases. The solution must meet the following requirements:\n= Support automatic scaling.\n=> Minimize Microsoft SQL Server licensing costs.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Purchase model = vCore; Deployment option = An Azure SQL Database elastic pool.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "DTU"
      },
      {
        id: "O2",
        text: "vCore"
      },
      {
        id: "O3",
        text: "Azure reserved virtual machine instances"
      },
      {
        id: "O4",
        text: "An Azure SQL managed instance"
      },
      {
        id: "O5",
        text: "An Azure SQL Database elastic pool"
      },
      {
        id: "O6",
        text: "A SQL Server Always On availability group"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Purchase model"
      },
      {
        id: "t2",
        text: "Deployment option"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O5",
    ]
  },
  {
    id: 189,
    number: 63,
    topic: "Topic 4",
    prompt: "You have an on-premises application named App that uses an Oracle database.\nYou plan to use Azure Databricks to transform and load data from App1 to an Azure Synapse Analytics instance.\nYou need to ensure that the App1 data is available to Databricks.\nWhich two Azure services should you include in the solution? Each correct answer presents part of the solution\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: CE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Azure Data Box Gateway"
      },
      {
        id: "B",
        text: "Azure Import/Export service"
      },
      {
        id: "C",
        text: "Azure Data Lake Storage"
      },
      {
        id: "D",
        text: "Azure Data Box Edge"
      },
      {
        id: "E",
        text: "Azure Data Factory (Host voted)"
      },
    ],
    correct: [
      "C",
      "E",
    ]
  },
  {
    id: 190,
    number: 64,
    topic: "Topic 4",
    prompt: "HOTSPOT -\nYou are designing a cost-optimized solution that uses Azure Batch to run two types of jobs on Linux nodes. The first job type will consist of short-\nrunning tasks for a development environment. The second job type will consist of long-running Message Passing Interface (MPI) applications for\na production environment that requires timely job completion.\nYou need to recommend the pool type and node type for each job type. The solution must minimize compute charges and leverage Azure Hybrid\nBenefit whenever possible.\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: First job (short-running, development) = User subscription and low-priority virtual machines; Second job (long-running MPI, production) = Batch service and dedicated virtual machines.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Batch service and dedicated virtual machines"
      },
      {
        id: "O2",
        text: "User subscription and dedicated virtual machines"
      },
      {
        id: "O3",
        text: "User subscription and low-priority virtual machines"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "First job (short-running, development)"
      },
      {
        id: "t2",
        text: "Second job (long-running MPI, production)"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O1",
    ]
  },
  {
    id: 191,
    number: 65,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs"
      },
      {
        id: "B",
        text: "Azure Service Fabric"
      },
      {
        id: "C",
        text: "Azure Queue Storage"
      },
      {
        id: "D",
        text: "Azure Data Lake"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 192,
    number: 66,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs"
      },
      {
        id: "B",
        text: "Azure Service Fabric"
      },
      {
        id: "C",
        text: "Azure Queue Storage"
      },
      {
        id: "D",
        text: "Azure Application Gateway"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 193,
    number: 67,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "B",
        text: "Azure SQL Database Premium (Most voted)"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Database Standard"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 194,
    number: 68,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Bus (Most Voted)"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Traffic Manager"
      },
      {
        id: "D",
        text: "Azure Blob Storage"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 195,
    number: 69,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Basic"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "C",
        text: "Azure SQL Database Business Critical"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance Business Critical"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 196,
    number: 70,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\nYou need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following\nrequirements:\n« Minimize the time it takes to provision compute resources during scale-out operations\n+ Support autoscaling of Windows Server containers.\nWhich scaling option should you recommend?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "horizontal pod autoscaler"
      },
      {
        id: "B",
        text: "Virtual nodes"
      },
      {
        id: "C",
        text: "Kubernetes version 1.20.2 or newer"
      },
      {
        id: "D",
        text: "cluster autoscaler (ost Voted)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 197,
    number: 71,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Fabric"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Service Bus (ost voted)"
      },
      {
        id: "D",
        text: "Azure Application Gateway"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 198,
    number: 72,
    topic: "Topic 4",
    prompt: "Your company has offices in North America and Europe.\nYou plan to migrate to Azure.\nYou need to recommend a networking solution for the new Azure infrastructure. The solution must meet the following requirements:\n« The Point-to-Site (P2S) VPN connections of mobile users must connect automatically to the closest Azure region.\n« The offices in each region must connect to their local Azure region by using an ExpressRoute circuit.\n+ Transitive routing between virtual networks and on-premises networks must be supported.\n« The network traffic between virtual networks must be filtered by using FQDNs.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Virtual WAN with a secured virtual hub"
      },
      {
        id: "B",
        text: "virtual network peering and application security groups"
      },
      {
        id: "C",
        text: "virtual network gateways and network security groups (NSGs)"
      },
      {
        id: "D",
        text: "Azure Route Server and Azure Network Function Manager"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 199,
    number: 73,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Business Critical"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance Business Critical"
      },
      {
        id: "C",
        text: "Azure SQL Database Standard"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance General Purpose"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 200,
    number: 74,
    topic: "Topic 4",
    prompt: "You are designing a point of sale (POS) solution that will be deployed across multiple locations and will use an Azure Databricks workspace in the\nStandard tier. The solution will include multiple apps deployed to the on-premises network of each location.\nYou need to configure the authentication method that will be used by the app to access the workspace. The solution must minimize the\nadministrative effort associated with staff turnover and credential management.\nWhat should you configure?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "a managed identity"
      },
      {
        id: "B",
        text: "a service principal"
      },
      {
        id: "C",
        text: "a personal access token"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 201,
    number: 75,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYou have two Azure AD tenants named contoso.com and fabrikam.com. Each tenant is linked to 50 Azure subscriptions. Contoso.com contains\ntwo users named User and User2.\nYou need to meet the following requirements:\n+ Ensure that User1 can change the Azure AD tenant linked to specific Azure subscriptions.\n« If an Azure subscription is liked to a new Azure AD tenant, and no available Azure AD accounts have full subscription-level permissions to the\nsubscription, elevate the access of User? to the subscription.\nThe solution must use the principle of least privilege.\nWhich role should you assign to each user? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: User1 = Owner; User2 = Owner.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Co-administrator"
      },
      {
        id: "O2",
        text: "Owner"
      },
      {
        id: "O3",
        text: "Service administrator"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "User1"
      },
      {
        id: "t2",
        text: "User2"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O2",
    ]
  },
  {
    id: 202,
    number: 76,
    topic: "Topic 4",
    prompt: "Your company has the divisions shown in the following table.\nEE Azure Azure AD tenant\nsubscription\n[East [subt  [Conosocom |\nSub contains an Azure App Service web app named App1. App uses Azure AD for single-tenant user authentication. Users from contoso.com\ncan authenticate to App1.\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\nWhat should you recommend?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure a Conditional Access policy."
      },
      {
        id: "B",
        text: "Use Azure AD entitlement management to govern external users."
      },
      {
        id: "C",
        text: "Configure the Azure AD provisioning service."
      },
      {
        id: "D",
        text: "Configure Azure AD Identity Protection."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 203,
    number: 77,
    topic: "Topic 4",
    prompt: "You have a multi-tier app named App1 and an Azure SQL database named SQL1. The backend service of App writes data to SQL1. Users use the\nApp1 client to read the data from SQL1.\nDuring periods of high utilization, the users experience delays retrieving the data.\nYou need to minimize how long it takes for data requests.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Cache for Reds (ost voted)"
      },
      {
        id: "B",
        text: "Azure Content Delivery Network (CDN)"
      },
      {
        id: "C",
        text: "Azure Data Factory"
      },
      {
        id: "D",
        text: "Azure Synapse Analytics"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 204,
    number: 78,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\nVirtual machine | Frontend componentin the Central US Azure region\nVirtual machine | Backend componentin the East US Azure region\nVirtual machine | Backend componentin the West US 2 Azure region\nVNetl Virtual network | Hosts VM1\nVitualnetwork | Foss We |\nVNet3 Virtual network | Hosts VM3\nYou create peering between VNet1 and VNet2 and between VNet1 and VNet3\nThe virtual machines host an HTTPS-based client/server application and are accessible only via the private IP address of each virtual machine.\nYou need to implement a load balancing solution for VM2 and VM3. The solution must ensure that if VM2 fails, requests will be routed\nautomatically to VM3, and if VM3 fails, requests will be routed automatically to VM2.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Firewall Premium"
      },
      {
        id: "B",
        text: "Azure Application Gateway v2"
      },
      {
        id: "C",
        text: "a cross-region load balancer"
      },
      {
        id: "D",
        text: "Azure Front Door Premium"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 205,
    number: 79,
    topic: "Topic 4",
    prompt: "You are designing an app that will include two components. The components will communicate by sending messages via a queue.\nYou need to recommend a solution to process the messages by using a First in, First out (FIFO) pattern.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage queues with a custom metadata setting"
      },
      {
        id: "B",
        text: "Azure Service Bus queues with partitioning enabled"
      },
      {
        id: "C",
        text: "Azure Service Bus queues with sessions enabled (ost voted)"
      },
      {
        id: "D",
        text: "storage queues with a stored access policy"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 206,
    number: 80,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYou need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet the following requirements:\n+ Support 15,000 disk I0PS.\n+ Support SR-0V.\n* Minimize costs.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Virtual machine series = DSv2-series; Disk type = Premium SSD.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "DSv2-series"
      },
      {
        id: "O2",
        text: "Lsv2-series"
      },
      {
        id: "O3",
        text: "Mv2-series"
      },
      {
        id: "O4",
        text: "Standard SSD"
      },
      {
        id: "O5",
        text: "Premium SSD"
      },
      {
        id: "O6",
        text: "Ultra Disk"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Virtual machine series"
      },
      {
        id: "t2",
        text: "Disk type"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O5",
    ]
  },
  {
    id: 207,
    number: 81,
    topic: "Topic 4",
    prompt: "You are developing an app that will use Azure Functions to process Azure Event Hubs events. Request processing is estimated to take between\nfive and 20 minutes.\nYou need to recommend a hosting solution that meets the following requirements:\n+ Supports estimates of request processing runtimes\n+ Supports event-driven autoscaling for the app\nWhich hosting plan should you recommend?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Dedicated"
      },
      {
        id: "B",
        text: "Consumption"
      },
      {
        id: "C",
        text: "App Service"
      },
      {
        id: "D",
        text: "Premium"
      },
    ],
    correct: [
      "D",
    ]
  },
  {
    id: 208,
    number: 82,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs"
      },
      {
        id: "B",
        text: "Azure Application Gateway"
      },
      {
        id: "C",
        text: "Azure Service Bus (Most Voted)"
      },
      {
        id: "D",
        text: "Azure Traffic Manager"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 209,
    number: 83,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs 8. Azure Application Gateway"
      },
      {
        id: "C",
        text: "Azure Queue Storage"
      },
      {
        id: "D",
        text: "Azure Traffic Manager"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 210,
    number: 84,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\nFailover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Basic"
      },
      {
        id: "B",
        text: "Azure SQL Database Business Critical (io vores)"
      },
      {
        id: "C",
        text: "Azure SQL Database Standard"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance General Purpose"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 211,
    number: 85,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "B",
        text: "Azure SQL Database Premium"
      },
      {
        id: "C",
        text: "Azure SQL Database Standard"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance General Purpose"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 212,
    number: 86,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYou company has offices in New York City, Sydney, Paris, and Johannesburg.\nThe company has an Azure subscription.\nYou plan to deploy a new Azure networking solution that meets the following requirements:\n+ Connects to ExpressRoute circuits in the Azure regions of East US, Southeast Asia, North Europe, and South Africa\n+ Minimizes latency by supporting connection in three regions\n- Supports Site-to-site VPN connections\n« Minimizes costs\nYou need to identify the minimum number of Azure Virtual WAN hubs that you must deploy, and which virtual WAN SKU to use.\nWhat should you identify? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Number of Virtual WAN hubs = 3; Virtual WAN SKU = Standard.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "1"
      },
      {
        id: "O2",
        text: "2"
      },
      {
        id: "O3",
        text: "3"
      },
      {
        id: "O4",
        text: "4"
      },
      {
        id: "O5",
        text: "Basic"
      },
      {
        id: "O6",
        text: "Standard"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Number of Virtual WAN hubs"
      },
      {
        id: "t2",
        text: "Virtual WAN SKU"
      },
    ],
    correct: [
      "t1:O3",
      "t2:O6",
    ]
  },
  {
    id: 213,
    number: 87,
    topic: "Topic 4",
    prompt: "You have an Azure Functions microservice app named App1 that iis hosted in the Consumption plan. App1 uses an Azure Queue Storage trigger.\nYou plan to migrate App1 to an Azure Kubernetes Service (AKS) cluster.\nYou need to prepare the AKS cluster to support App1. The solution must meet the following requirements:\n+ Use the same scaling mechanism as the current deployment.\n+ Support kubenet and Azure Container Networking Interface (CNI) networking.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct answer is worth one point.",
    keySource: "source",
    explanation: "Source answer: AE",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Configure the horizontal pod autoscaler."
      },
      {
        id: "B",
        text: "Install Virtual Kubelet."
      },
      {
        id: "C",
        text: "Configure the AKS cluster autoscaler."
      },
      {
        id: "D",
        text: "Configure the virtual node add-on."
      },
      {
        id: "E",
        text: "Install Kubernetes-based Event Driven Autoscaling (KEDA). (Most voted)"
      },
    ],
    correct: [
      "A",
      "E",
    ]
  },
  {
    id: 214,
    number: 88,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Application Gateway"
      },
      {
        id: "B",
        text: "Azure Queue Storage"
      },
      {
        id: "C",
        text: "Azure Data Lake"
      },
      {
        id: "D",
        text: "Azure Traffic Manager"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 215,
    number: 89,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "B",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "C",
        text: "Azure SQL Database Premium"
      },
      {
        id: "D",
        text: "Azure SQL Managed Instance Business Critical"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 216,
    number: 90,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "B",
        text: "Azure SQL Database Premium (Most voted)"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Database Serverless"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 217,
    number: 91,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs"
      },
      {
        id: "B",
        text: "Azure Service Bus"
      },
      {
        id: "C",
        text: "Azure Blob Storage"
      },
      {
        id: "D",
        text: "Azure Service Fabric"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 218,
    number: 92,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Fabric"
      },
      {
        id: "B",
        text: "Azure Traffic Manager"
      },
      {
        id: "C",
        text: "Azure Queue Storage"
      },
      {
        id: "D",
        text: "Azure Notification Hubs"
      },
    ],
    correct: [
      "C",
    ]
  },
  {
    id: 219,
    number: 93,
    topic: "Topic 4",
    prompt: "You have an on-premises Microsoft SQL Server 2008 instance that hosts a 50-GB database.\nYou need to migrate the database to an Azure SQL managed instance. The solution must minimize downtime.\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: Azure Data Studio",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Migrate"
      },
      {
        id: "B",
        text: "Azure Data Studio"
      },
      {
        id: "C",
        text: "WANdisco LiveData Platform for Azure"
      },
      {
        id: "D",
        text: "SQL Server Management Studio (SSMS)"
      },
    ],
    correct: [
      "B",
    ]
  },
  {
    id: 220,
    number: 94,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Managed Instance Business Critical"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "C",
        text: "Azure SQL Database Standard"
      },
      {
        id: "D",
        text: "Azure SQL Database Premium"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 221,
    number: 95,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Business Critical (Most Voted)"
      },
      {
        id: "B",
        text: "Azure SQL Database Basic"
      },
      {
        id: "C",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "D",
        text: "Azure SQL Database Hyperscale"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 222,
    number: 96,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 5",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Fabric"
      },
      {
        id: "B",
        text: "Azure Queue Storage"
      },
      {
        id: "C",
        text: "Azure Traffic Manager"
      },
      {
        id: "D",
        text: "Azure Application Gateway"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 223,
    number: 97,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Application Gateway"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Queue Storage"
      },
      {
        id: "D",
        text: "Azure Blob Storage"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 224,
    number: 98,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Blob Storage"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Queue Storage"
      },
      {
        id: "D",
        text: "Azure Service Fabric"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 225,
    number: 99,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n- Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Serverless"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "C",
        text: "Azure SQL Database Basic"
      },
      {
        id: "D",
        text: "Azure SQL Database Business Critical"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 226,
    number: 100,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n« Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n+ Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: 0",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Standard"
      },
      {
        id: "B",
        text: "Azure SQL Managed Instance General Purpose"
      },
      {
        id: "C",
        text: "Azure SQL Database Serverless"
      },
      {
        id: "D",
        text: "Azure SQL Database Premium"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 227,
    number: 101,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Notification Hubs"
      },
      {
        id: "B",
        text: "Azure Queue Storage"
      },
      {
        id: "C",
        text: "Azure Blob Storage"
      },
      {
        id: "D",
        text: "Azure Application Gateway"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 228,
    number: 102,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYou are developing a multi-tier app named App1 that will be hosted on Azure virtual machines. The peak utilization periods for App1 will be from 8\nAM to 9 AM and 4 PM to 5 PM on weekdays.\nYou need to deploy the infrastructure for App1. The solution must meet the following requirements:\n- Support virtual machines deployed to four availability zones across two Azure regions.\n+ Minimize costs by accumulating CPU credits during periods of low utilization\nWhat is the minimum number of virtual networks you should deploy, and which virtual machine size should you use? To answer, select the\nappropriate options in the answer area.",
    keySource: "source",
    explanation: "Source answer: Number of virtual networks = 2; Virtual machine size = B-Series.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "1"
      },
      {
        id: "O2",
        text: "2"
      },
      {
        id: "O3",
        text: "3"
      },
      {
        id: "O4",
        text: "4"
      },
      {
        id: "O5",
        text: "A-Series"
      },
      {
        id: "O6",
        text: "B-Series"
      },
      {
        id: "O7",
        text: "D-Series"
      },
      {
        id: "O8",
        text: "M-Series"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Number of virtual networks"
      },
      {
        id: "t2",
        text: "Virtual machine size"
      },
    ],
    correct: [
      "t1:O2",
      "t2:O6",
    ]
  },
  {
    id: 229,
    number: 103,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Bus"
      },
      {
        id: "B",
        text: "Azure Blob Storage"
      },
      {
        id: "C",
        text: "Azure Notification Hubs"
      },
      {
        id: "D",
        text: "Azure Application Gateway"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 230,
    number: 104,
    topic: "Topic 4",
    prompt: "You have an on-premises Microsoft SQL server named SQL1 that hosts 50 databases.\nYou plan to migrate SQL1 to Azure SQL Managed Instance.\nYou need to perform an offline migration of SQL1. The solution must minimize administrative effort.\nWhat should you include in the solution?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Migrate"
      },
      {
        id: "B",
        text: "Azure Database Migration Service (Tos Voied)"
      },
      {
        id: "C",
        text: "SQL Server Migration Assistant (SMA)"
      },
      {
        id: "D",
        text: "Data Migration Assistant (DMA)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 231,
    number: 105,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Bus (ost Voted)"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Traffic Manager"
      },
      {
        id: "D",
        text: "Azure Notification Hubs"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 232,
    number: 106,
    topic: "Topic 4",
    prompt: "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\ncloud services will process customer orders, billing, payment, inventory, and shipping.\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Bus (Most Voted)"
      },
      {
        id: "B",
        text: "Azure Data Lake"
      },
      {
        id: "C",
        text: "Azure Application Gateway"
      },
      {
        id: "D",
        text: "Azure Notification Hubs"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 233,
    number: 107,
    topic: "Topic 4",
    prompt: "You need to design a highly available Azure SQL database that meets the following requirements:\n- Failover between replicas of the database must occur without any data loss.\n« The database must remain available in the event of a zone outage.\n« Costs must be minimized.\nWhich deployment option should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure SQL Database Business Critical"
      },
      {
        id: "B",
        text: "Azure SQL Database Hyperscale"
      },
      {
        id: "C",
        text: "Azure SQL Managed Instance Business Critical"
      },
      {
        id: "D",
        text: "Azure SQL Database Standard"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 234,
    number: 108,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou plan to deploy an infrastructure solution that will contain the following configurations:\n- External users will access the infrastructure by using Azure Front Door.\n« External user access to the backend APIs hosted in Azure Kubernetes Service (AKS) will be controlled by using Azure API Management.\n+ External users will be authenticated by an Azure AD B2C tenant that uses OpenlD Connect-based federation with a third-party identity provider.\nWhich function does each service provide? To answer, drag the appropriate functions to the correct services. Each function may be used once,\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Azure Front Door = Protection against Open Web Application Security Project (OWASP) vulnerabilities; Azure API Management = Validation of Azure B2C JSON Web Tokens (JWTs).",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "Protection against Open Web Application Security Project (OWASP) vulnerabilities"
      },
      {
        id: "O2",
        text: "IP filtering on a per-API level"
      },
      {
        id: "O3",
        text: "Validation of Azure B2C JSON Web Tokens (JWTs)"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Azure Front Door"
      },
      {
        id: "t2",
        text: "Azure API Management"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O3",
    ]
  },
  {
    id: 235,
    number: 109,
    topic: "Topic 4",
    prompt: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\nat the same time as the Azure SQL databases.\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\ninstances must reside in the same region.\nYou need to recommend a solution to meet the regulatory requirement.\nSolution: You recommend using an Azure Policy initiative to enforce the location of resource groups.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes 8 Nom)"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 236,
    number: 110,
    topic: "Topic 4",
    prompt: "Your on-premises datacenter contains a server that runs Linux and hosts a Java app named App1. App has the following characteristics:\n+ App is an interactive app that users access by using HTTPS connections.\n+ The number of connections to App1 changes significantly throughout the day.\n+ App1 runs multiple concurrent instances.\n+ App1 requires major changes to run in a container.\nYou plan to migrate App1 to Azure.\nYou need to recommend a compute solution for App1. The solution must meet the following requirements:\n+ The solution must run multiple instances of App1.\n- The number of instances must be managed automatically depending on the load.\n+ Administrative effort must be minimized.\nWhat should you include in the recommendation?",
    keySource: "source",
    explanation: "Source answer: 8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Batch"
      },
      {
        id: "B",
        text: "Azure App Service"
      },
      {
        id: "C",
        text: "Azure Kubernetes Service (AKS)"
      },
      {
        id: "D",
        text: "Azure Virtual Machine Scale Sets"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 237,
    number: 111,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYou have an Azure App Service web app named Webapp1 that connects to an Azure SQL database named DB1. Webapp1 and DB are deployed to\nthe East US Azure region.\nYou need to ensure that all the traffic between Webapp1 and DB1 is sent via a private connection.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Create a virtual network that contains at least = 1 subnet; From the virtual network, configure name resolution to use = A private DNS zone.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "1 subnet"
      },
      {
        id: "O2",
        text: "2 subnets"
      },
      {
        id: "O3",
        text: "3 subnets"
      },
      {
        id: "O4",
        text: "A private DNS zone"
      },
      {
        id: "O5",
        text: "A public DNS zone"
      },
      {
        id: "O6",
        text: "The Azure DNS Private Resolver"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Create a virtual network that contains at least"
      },
      {
        id: "t2",
        text: "From the virtual network, configure name resolution to use"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O4",
    ]
  },
  {
    id: 238,
    number: 112,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYour on-premises network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1. Serverl\ncontains an app named App1 that uses AD DS authentication. Remote users access App1 by using a VPN connection to the on-premises network.\nYou have an Azure AD tenant that syncs with the AD DS domain by using Azure AD Connect.\nYou need to ensure that the remote users can access App1 without using a VPN. The solution must meet the following requirements:\n+ Ensure that the users authenticate by using Azure Multi-Factor Authentication (MFA)\n+ Minimize administrative effort.\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: In Azure AD = An enterprise application; On-premises = A server that runs Windows Server and has the Azure AD Application Proxy connector installed.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "A managed identity"
      },
      {
        id: "O2",
        text: "An access package"
      },
      {
        id: "O3",
        text: "An app registration"
      },
      {
        id: "O4",
        text: "An enterprise application"
      },
      {
        id: "O5",
        text: "A server that runs Windows Server and has the Azure AD Application Proxy connector installed"
      },
      {
        id: "O6",
        text: "A server that runs Windows Server and has the on-premises data gateway (standard mode) installed"
      },
      {
        id: "O7",
        text: "A server that runs Windows Server and has the Web Application Proxy role service installed"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "In Azure AD"
      },
      {
        id: "t2",
        text: "On-premises"
      },
    ],
    correct: [
      "t1:O4",
      "t2:O5",
    ]
  },
  {
    id: 239,
    number: 113,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains an Azure Kubernetes Service (AKS) instance named AKS1. AKS1 hosts microservice-based APIs that\nare configured to listen on non-default HTTP ports.\nYou plan to deploy a Standard tier Azure API Management instance named APIM1 that will make the APIs available to external users.\nYou need to ensure that the AKS1 APIs are accessible to APIM1. The solution must meet the following requirements:\n+ Implement MTLS authentication between APIM1 and AKS1\n+ Minimize development effort\n* Minimize costs.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: Community vote distribution",
    type: "single",
    options: [
      {
        id: "A",
        text: "Implement an external load balancer on AKS1 8. Redeploy APIM1 to the virtual network that contains AKST."
      },
      {
        id: "C",
        text: "Implement an ExternalName service on AKST"
      },
      {
        id: "D",
        text: "Deploy an ingress controller to AKS1."
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 240,
    number: 114,
    topic: "Topic 4",
    prompt: "HOTSPOT\nYou need to recommend a solution to integrate Azure Cosmos DB and Azure Synapse. The solution must meet the following requirements:\n+ Traffic from an Azure Synapse workspace to the Azure Cosmos DB account must be sent via the Microsoft backbone network.\n« Traffic from the Azure Synapse workspace to the Azure Cosmos DB account must NOT be routed over the internet.\n+ Implementation effort must be minimized\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: When provisioning the Azure Synapse workspace = Configure a dedicated managed virtual network; When configuring the Azure Cosmos DB account, enable = Managed private endpoints.",
    type: "hotspot-dropdown",
    options: [
      {
        id: "O1",
        text: "Configure a dedicated managed virtual network"
      },
      {
        id: "O2",
        text: "Disable public network access to the workspace endpoints"
      },
      {
        id: "O3",
        text: "Enable the use of Azure AD authentication"
      },
      {
        id: "O4",
        text: "Managed private endpoints"
      },
      {
        id: "O5",
        text: "Server-level firewall rules"
      },
      {
        id: "O6",
        text: "Service endpoint policies"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "When provisioning the Azure Synapse workspace"
      },
      {
        id: "t2",
        text: "When configuring the Azure Cosmos DB account, enable"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O4",
    ]
  },
  {
    id: 241,
    number: 115,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains an Azure Cosmos DB for NoSQL account named account] and an Azure Synapse Analytics\nworkspace named Workspace. The account] account contains a container named Contained that has the analytical store enabled.\nYou need to recommend a solution that will process the data stored in Contained in near-real-time (NRT) and output the results to a data\nwarehouse in Workspace1 by using a runtime engine in the workspace. The solution must minimize data movement.\nWhich pool in Workspace should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Apache Spark"
      },
      {
        id: "B",
        text: "serverless SQL"
      },
      {
        id: "C",
        text: "dedicated SQL"
      },
      {
        id: "D",
        text: "Data Explorer"
      },
    ],
    correct: [
      "A",
    ]
  },
  {
    id: 242,
    number: 116,
    topic: "Topic 4",
    prompt: "DRAG DROP -\nYou have an on-premises datacenter named Site. Site1 contains a VMware vSphere cluster named Cluster? that hosts 100 virtual machines.\nCluster is managed by using VMware vCenter.\nYou have an Azure subscription named Sub1.\nYou plan to migrate the virtual machines from Cluster to Sub\nYou need to identify which resources are required to run the virtual machines in Azure. The solution must minimize administrative effort.\nWhat should you configure? To answer, drag the appropriate resources to the correct targets. Each resource may be used once, more than once, or\nnot at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source answer: Resource 1 = An Azure Migrate project; Resource 2 = An Azure Migrate appliance.",
    type: "drag-drop",
    options: [
      {
        id: "O1",
        text: "An Azure Migrate project"
      },
      {
        id: "O2",
        text: "An Azure Migrate appliance"
      },
      {
        id: "O3",
        text: "An Azure VMware Solution private cloud"
      },
      {
        id: "O4",
        text: "An Azure VMware Solution host"
      },
    ],
    targets: [
      {
        id: "t1",
        text: "Resource 1"
      },
      {
        id: "t2",
        text: "Resource 2"
      },
    ],
    correct: [
      "t1:O1",
      "t2:O2",
    ]
  }
];
