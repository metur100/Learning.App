# AZ-305 Extracted Questions and Answers

- Questions extracted: 242
- DOCX answers extracted: 282
- Paired entries: 242

## Q1 (Topic 1, Original #1)

You have an Azure subscription that contains a custom application named Application. Application1 was developed by an external company
named Fabrikam,
Ltd. Developers at Fabrikam were assigned role-based access control (RBAC) permissions to the Application components. All users are licensed
for the
Microsoft 365 E5 plan.
You need to recommend a solution to verify whether the Fabrikam developers still require permissions to Application. The solution must meet
the following requirements:
= To the manager of the developers, send a monthly email message that lists the access permissions to Application]
co If the manager does not verify an access permission, automatically revoke that permission.
©» Minimize development effort.
What should you recommend?
A. In Azure Active Directory (Azure AD), create an access review of Application.
B. Create an Azure Automation runbook that runs the Get-AzRoleAssignment cmdlet.
C. In Azure Active Directory (Azure AD) Privileged Identity Management, create a custom role assignment for the Application? resources.
D. Create an Azure Automation runbook that runs the Get-AzureADUserAppRoleAssignment cmdlet.

- PDF answer: A
- DOCX answer: A. In Azure Active Directory (Azure AD), create an access review of Application1
- Final answer: A

## Q2 (Topic 1, Original #2)

You have an Azure subscription. The subscription has a blob container that contains multiple blobs.
Ten users in the finance department of your company plan to access the blobs during the month of April.
You need to recommend a solution to enable access to the blobs during the month of April only.
Which security solution should you include in the recommendation?
A. shared access signatures (SAS) (ost voted)
B. Conditional Access policies
C. certificates
D. access keys

- PDF answer: A
- DOCX answer: shared access signatures (SAS)
- Final answer: A

## Q3 (Topic 1, Original #3)

You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.
You have an internal web app named WebApp1 that is hosted on-premises. WebApp1 uses Integrated Windows authentication.
Some users work remotely and do NOT have VPN access to the on-premises network.
You need to provide the remote users with single sign-on (SSO) access to WebApp1
Which two features should you include in the solution? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
A. Azure AD Application Proxy
B. Azure AD Privileged Identity Management (PIM)
C. Conditional Access policies
D. Azure Arc
E. Azure AD enterprise applications
F. Azure Application Gateway

- PDF answer: AE
- DOCX answer: A. Azure AD Application Proxy, E. Azure AD enterprise applications
- Final answer: AE

## Q4 (Topic 1, Original #4)

You have an Azure Active Directory (Azure AD) tenant named contoso.com that has a security group named Group1. Group is configured for
assigned membership. Group1 has 50 members, including 20 guest users.
You need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:
© The evaluation must be repeated automatically every three months.
= Every member must be able to report whether they need to be in Group1.
=» Users who report that they do not need to be in Group must be removed from Group automatically.
=» Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.
What should you include in the recommendation?
A. Implement Azure AD Identity Protection.
B. Change the Membership type of Group1 to Dynamic User.
C. Create an access review.
D. Implement Azure AD Privileged Identity Management (PIM).

- PDF answer: C
- DOCX answer: Create an access review
- Final answer: C

## Q5 (Topic 1, Original #5)

HOTSPOT -
You plan to deploy Azure Databricks to support a machine learning application. Data engineers will mount an Azure Data Lake Storage account to
the Databricks file system. Permissions to folders are granted directly to the data engineers.
You need to recommend a design for the planned Databrick deployment. The solution must meet the following requirements:
c= Ensure that the data engineers can only access folders to which they have permissions.
co Minimize development effort.
© Minimize costs.
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Databrickssku: [~~ [+]
Premium
Standard
Cluster configuration: [ [+]
Credential passthrough
Managed identities
MLflow
A runtime that contains Photon
Secret scope
Answer Area
Databrickssku: [~~ [+]
Premium
Standard

- PDF answer: Premium -, Credential passthrough -
- DOCX answer: Premium, Credential passthrough
- Final answer: Premium -, Credential passthrough -

## Q6 (Topic 1, Original #6)

HOTSPOT -
You plan to deploy an Azure web app named App1 that will use Azure Active Directory (Azure AD) authentication.
App1 will be accessed from the internet by the users at your company. All the users have computers that run Windows 10 and are joined to Azure
AD.
You need to recommend a solution to ensure that the users can connect to App1 without being prompted for authentication and can access App1
only from company-owned computers.
What should you recommend for each requirement? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Hot Area:
Answer Area
The users can connect to App1 without being I ed
prompted for authentication: AnAzure AD app registration
An Azure AD managed identity
Azure AD Application Proxy
The users can access App1 only from
company-owned computers: [|]
A Conditional Access policy
An Azure AD administrative unit
Azure Application Gateway
Azure Blueprints
Azure Policy

- PDF answer: Answer Area
- DOCX answer: An Azure AD app registration, A conditional Access policy
- Final answer: Answer Area

## Q7 (Topic 1, Original #7)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure
connectivity.
Several virtual machines exhibit network connectivity issues.
You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.
Solution: Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic.
Does this meet the goal?
A. Yes
B. No (Hest ote)

- PDF answer: 5
- DOCX answer: NO
- Final answer: 5

## Q8 (Topic 1, Original #8)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen
Your company deploys several virtual machines on-premises and to Azure. ExpressRoute i deployed and configured for on-premises to Azure
connectivity.
Several virtual machines exhibit network connectivity issues.
You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.
Solution: Use Azure Advisor to analyze the network traffic.
Does this meet the goal?
A. Yes
B Nome)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q9 (Topic 1, Original #9)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure
connectivity.
Several virtual machines exhibit network connectivity issues.
You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.
Solution: Use Azure Network Watcher to run IP flow verify to analyze the network traffic.
Does this meet the goal?
A Yes (va)
B. No

- PDF answer: A
- DOCX answer: YES
- Final answer: A

## Q10 (Topic 1, Original #10)

DRAG DROP -
You have an Azure subscription. The subscription contains Azure virtual machines that run Windows Server 2016 and Linux.
You need to use Azure Monitor to design an alerting strategy for security-related events.
Which Azure Monitor Logs tables should you query? To answer, drag the appropriate tables to the correct log types. Each table may be used once,
more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Tables Answer Area
AzureActivity Events from Windows event logs:
AzureDiagnostics Events from Linux system logging:
Event
Syslog
Tables Answer Area
AzureActivity Events from Windows event logs: | Event
AzureDiagnostics Events from Linux system logging:

- PDF answer: 8 wel cia Syslog
- DOCX answer: Event, Syslog
- Final answer: 8 wel cia Syslog

## Q11 (Topic 1, Original #11)

You are designing a large Azure environment that will contain many subscriptions.
You plan to use Azure Policy as part of a governance solution.
To which three scopes can you assign Azure Policy definitions? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Azure Active Directory (Azure AD) administrative units
B. Azure Active Directory (Azure AD) tenants
C. subscriptions (Most voted)
D. compute resources
E. resource groups
F. management groups (ost voted)

- PDF answer: CEF
- DOCX answer: subscriptions, resource groups, management groups
- Final answer: CEF

## Q12 (Topic 1, Original #12)

DRAG DROP -
Your on-premises network contains a server named Server? that runs an ASPNET application named App1.
You have a hybrid deployment of Azure Active Directory (Azure AD).
You need to recommend a solution to ensure that users sign in by using their Azure AD account and Azure Multi-Factor Authentication (MFA) when
they connect to App1 from the internet.
Which three features should you recommend be deployed and configured in sequence? To answer, move the appropriate features from the list of
features to the answer area and arrange them in the correct order.
Select and Place:
Features Answer Area
a public Azure Load Balancer
a managed identity
an internal Azure Load Balancer
a Conditional Access policy 8
an Azure App Service plan
Azure AD Application Proxy
an Azure AD enterprise application

- PDF answer: Features Answer Area
- DOCX answer: Azure AD Application Proxy, an Azure AD enterprise application, a Conditional Access policy
- Final answer: Features Answer Area

## Q13 (Topic 1, Original #13)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Activity Log
B. Azure Advisor
C. Azure Analysis Services
D. Azure Monitor action groups

- PDF answer: A
- DOCX answer: Azure Activity Log
- Final answer: A

## Q14 (Topic 1, Original #14)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure
connectivity.
Several virtual machines exhibit network connectivity issues.
You need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.
Solution: Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure
Monitor to analyze the network traffic.
Does this meet the goal?
A. Yes
8 Noe)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q15 (Topic 1, Original #15)

DRAG DROP -
You need to design an architecture to capture the creation of users and the assignment of roles. The captured data must be stored in Azure
Cosmos DB.
Which services should you include in the design? To answer, drag the appropriate services to the correct targets. Each service may be used once,
more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Azure Services Answer Area
Azure Event Grid
Azure Event Hubs
Azure Functions
Azure Monitor Logs , Azure
Active Directory
Azure Notification Hubs audit log
Er Aotrs voragten.,
i T i
ee Ta]
&
Cosmos DB

- PDF answer: Azure Services Answer Area
- DOCX answer: Azure Event Hubs, Azure Functions
- Final answer: Azure Services Answer Area

## Q16 (Topic 1, Original #16)

Your company, named Contoso, Ltd., implements several Azure logic apps that have HTTP triggers. The logic apps provide access to an on-
premises web service.
Contoso establishes a partnership with another company named Fabrikam, Inc.
Fabrikam does not have an existing Azure Active Directory (Azure AD) tenant and uses third-party OAuth 2.0 identity management to authenticate
its users.
Developers at Fabrikam plan to use a subset of the logic apps to build applications that will integrate with the on-premises web service of
Contoso.
You need to design a solution to provide the Fabrikam developers with access to the logic apps. The solution must meet the following
requirements:
=» Requests to the logic apps from the developers must be limited to lower rates than the requests from the users at Contoso,
= The developers must be able to rely on their existing OAuth 2.0 provider to gain access to the logic apps.
c= The solution must NOT require changes to the logic apps.
== The solution must NOT use Azure AD guest accounts.
What should you include in the solution?
A. Azure Front Door
B. Azure AD Application Proxy
C. Azure AD business-to-business (B28)
D. Azure API Management (ost Voted )

- PDF answer: 0
- DOCX answer: Azure API Management
- Final answer: 0

## Q17 (Topic 1, Original #17)

HOTSPOT -
You have an Azure subscription that contains 300 virtual machines that run Windows Server 2019.
You need to centrally monitor all warning events in the System logs of the virtual machines.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Resource to create in Azure: v
Aneventhub
A Log Analytics workspace
A search service
A storage account
Configuration to perform on the virtual machines: v
Create event subscriptions
Configure Continuous delivery
Install the Azure Monitor agent
Modify the membership of the Event Log Readers group

- PDF answer: Answer Area
- DOCX answer: A Log Analytics workspace, Install the Azure Monitor agent
- Final answer: Answer Area

## Q18 (Topic 1, Original #18)

HOTSPOT -
You have several Azure App Service web apps that use Azure Key Vault to store data encryption keys.
Several departments have the following requests to support the web app:
Security * Review the membership of administrative roles and require
users to provide a justification for continued membership.
* Get alerts about changes in administrator assignments.
o See a history of administrator activation, including which
changes administrators made to Azure resources.
Development * Enable the applications to access Key Vault and retrieve
keys for use in code.
Quality Assurance * Receive temporary administrator access to create and
configure additional web apps in the test environment.
Which service should you recommend for each department's request? To answer, configure the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Hot Area:
Answer Area
Security: v
| Azure AD Privileged Identity Management
| Azure Managed Identity
| Azure AD Connect
|Azure AD Identity Protection
Development: v
Azure AD Privileged Identity Management
| Azure Managed Identity
| Azure AD Connect
| Azure AD Identity Protection
Quality Assurance: v
Azure AD Privileged Identity Management
[Azure Managed Identity
Azure AD Connect
Azure AD Identity Protection
Answer Area
Security: v
[Azure AD Privileged Identity Management |
| Azure Managed Identity
| Azure AD Connect
|Azure AD Identity Protection
Development: v

- PDF answer: Azure AD Privileged Identity Management
- DOCX answer: Azure AD Privileged Identity Management, Azure Managed Identity, Azure AD Privileged Identity Management
- Final answer: Azure AD Privileged Identity Management

## Q19 (Topic 1, Original #19)

HOTSPOT -
Your company has the divisions shown in the following table.
[Division | Azure subscription | Azure Active Directory (Azure AD) tenant
East Sub1, Sub2 East.contoso.com
West Sub3, Subd West.contoso.com
You plan to deploy a custom application to each subscription. The application will contain the following:
= A resource group
= An Azure web app
= Custom role assignments
== An Azure Cosmos DB account
You need to use Azure Blueprints to deploy the application to each subscription
What is the minimum number of objects required to deploy the application? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Management groups: v
1
2
3
4
Blueprint definitions: v
1
2
3
4
Blueprint assignments: v
1 |
2
3 |
4
Answer Area
Management groups: v
1
3
4
Blueprint definitions: v

- PDF answer: 3
- DOCX answer: 2,2,2
- Final answer: 3

## Q20 (Topic 1, Original #20)

HOTSPOT -
You need to design an Azure policy that will implement the following functionality:
=> For new resources, assign tags and values that match the tags and values of the resource group to which the resources are deployed.
= For existing resources, identify whether the tags and values match the tags and values of the resource group that contains the resources.
c For any non-compliant resources, trigger auto-generated remediation tasks to create missing tags and values.
The solution must use the principle of least privilege.
What should you include in the design? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Azure Policy effect to use: ”
Append
EnforceOPAConstraint
EnforceRegoPolicy
Modify
Azure Active Directory (Azure AD) object and role-based
access control (RBAC) role to use for the remediation tasks: v
‘A managed identity with the Contributor role
A managed identity with the User Access Administrator role
A service principal with the Contributor role
A service principal with the User Access Administrator role

- PDF answer: Answer Area
- DOCX answer: Modify, A managed identity with the Contributor role
- Final answer: Answer Area

## Q21 (Topic 1, Original #22)

You plan to deploy an Azure SQL database that will store Personally Identifiable Information (PI).
You need to ensure that only privileged users can view the PII.
What should you include in the solution?
A. dynamic data masking (ost voted)
B. role-based access control (RBAC)
C. Data Discovery & Classification
D. Transparent Data Encryption (TDE)

- PDF answer: A
- DOCX answer: dynamic data masking
- Final answer: A

## Q22 (Topic 1, Original #23)

You plan to deploy an app that will use an Azure Storage account.
You need to deploy the storage account. The storage account must meet the following requirements:
= Store the data for multiple users.
> Encrypt each user's data by using a separate key.
c= Encrypt all the data in the storage account by using customer-managed keys.
What should you deploy?
A. files in a premium file share storage account
B. blobs in a general purpose v2 storage account (Vast Voted)
C. blobs in an Azure Data Lake Storage Gen2 account
D. files in a general purpose v2 storage account

- PDF answer: 5
- DOCX answer: blobs in a general purpose v2 storage account
- Final answer: 5

## Q23 (Topic 1, Original #24)

HOTSPOT -
You have an Azure App Service web app that uses a system-assigned managed identity.
You need to recommend a solution to store the settings of the web app as secrets in an Azure key vault. The solution must meet the following
requirements:
== Minimize changes to the app code.
> Use the principle of least privilege.
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Key Vault integration method: v
Key Vault references in Application settings
Key Vault references in Appsettings.json
Key Vault references in Web.config
Key Vault SDK
Key Vault permissions for the managed identity: v
Keys: Gey
ReysTseandGet 1]
Secrets: Get
Secrets: List and Get

- PDF answer: Answer Area
- DOCX answer: Key Vault references in Application settings, Secrets: Get
- Final answer: Answer Area

## Q24 (Topic 1, Original #25)

You plan to deploy an application named App that will run on five Azure virtual machines. Additional virtual machines will be deployed later to run
Appl.
You need to recommend a solution to meet the following requirements for the virtual machines that will run App1:
=> Ensure that the virtual machines can authenticate to Azure Active Directory (Azure AD) to gain access to an Azure key vault, Azure Logic Apps
instances, and an Azure SQL database.
> Avoid assigning new roles and permissions for Azure services when you deploy additional virtual machines.
== Avoid storing secrets and certificates on the virtual machines.
= Minimize administrative effort for managing identities.
Which type of identity should you include in the recommendation?
A. a system-assigned managed identity
B. a service principal that is configured to use a certificate
C. a service principal that is configured to use a client secret
D. a user-assigned managed identity (Most Voted)

- PDF answer: 0
- DOCX answer: a user-assigned managed identity
- Final answer: 0

## Q25 (Topic 1, Original #26)

You have the resources shown in the following table:
[Name [Type]
Azure Synapse Analytics instance
CDB1 Azure Cosmos DB SQL API account
CDBT hosts a container that stores continuously updated operational data.
You are designing a solution that will use AS1 to analyze the operational data daily.
You need to recommend a solution to analyze the data without affecting the performance of the operational data store.
What should you include in the recommendation?
A. Azure Cosmos DB change feed
B. Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors
C. Azure Synapse Link for Azure Cosmos DB
D. Azure Synapse Analytics with PolyBase data loading

- PDF answer: C
- DOCX answer: Azure Synapse Link for Azure Cosmos DB
- Final answer: C

## Q26 (Topic 1, Original #27)

HOTSPOT -
You deploy several Azure SQL Database instances.
You plan to configure the Diagnostics settings on the databases as shown in the following exhibit.
Diagnostics setting
El sve X piscard [ Delete © Provide feedback
A diagnostic setting specifies a list of categories of platform logs and/or metrics that you want to collect from a resource, and one or more
Gestinations that you would stream them to. Normal usage charges for the destination wil occur. Learn more about the different log
categories and contents of those logs.
Diagnostic setting name Diagnostic
Category details. Destination details
log IB send to Log Analytics
Retention (days)
[8 saunsights Subscription
Retent
8 AutomaticTuning lL]
Log Analytics workspace
Retention (3:
[LT —— — [soma (easesy
[0] Quenystorewaitstatistics — IB Acchive to a storage account
Retention (days)
[J res o (©) Shins srg sors hig csc rege scouts
Retention (d
(0) oatabasewaitstatstics — Location
Retention (days) Fests
y etention (days)
[0 Timeouts 0 I Subscription
Azure Pass - Sponsorship v
J whoas on (days) i
CEN | SPR
J osadiods Retention (days) contoso20 ~
1
fretrk [0] stream to an event hub
0 se Bo Gays)
Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
The amount of time that SQLInsights data will be stored in v
blob storage is [answer choice]. 30 days
[0days |
(730days
indefinite
The maximum amount of time that SQLInsights data can be v
stored in Azure Log Analytics is [answer choice]. 30 days
190 days
730 days
indefinite
Answer Area
The amount of time that SQLInsights data will be stored in v
blob storage is [answer choice]. 30 days
[90days |
730 days

- PDF answer: fndesmite
- DOCX answer: 90 Days, 730 days
- Final answer: fndesmite

## Q27 (Topic 1, Original #28)

You have an application that is used by 6,000 users to validate their vacation requests. The application manages its own credential store.
Users must enter a username and password to access the application. The application does NOT support identity providers.
You plan to upgrade the application to use single sign-on (S50) authentication by using an Azure Active Directory (Azure AD) application
registration.
Which SSO method should you use?
A. header-based
B. SAML
C. password-based
D. OpenlD Connect

- PDF answer: C
- DOCX answer: password-based
- Final answer: C

## Q28 (Topic 1, Original #29)

HOTSPOT -
You have an Azure subscription that contains a virtual network named VNET1 and 10 virtual machines. The virtual machines are connected to
VNET1.
You need to design a solution to manage the virtual machines from the internet. The solution must meet the following requirements:
c& Incoming connections to the virtual machines must be authenticated by using Azure Multi-Factor Authentication (MFA) before network
connectivity is allowed.
= Incoming connections must use TLS and connect to TCP port 443.
= The solution must support RDP and SSH.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
To provide access to virtual machines on VNET1, use: v
Azure Bastion
Just-in-time (JIT) VM access
Azure Web Application Firewall (WAF) in Azure Front Door
To enforce Azure MFA, use: v
An Azure Identity Governance access package
AA Conditional Access policy that has the Cloud apps
assignment set to Azure Windows VM Sign-in
AA Conditional Access policy that has the Cloud apps
assignment set to Microsoft Azure Management

- PDF answer: Answer Area
- DOCX answer: Azure Bastion, A Conditional Access policy that has the Cloud apps assignment set to Azure Windows VM Sign-in
- Final answer: Answer Area

## Q29 (Topic 1, Original #30)

You are designing an Azure governance solution.
All Azure resources must be easily identifiable based on the following operational information: environment, owner, department and cost center.
You need to ensure that you can use the operational information when you generate reports for the Azure resources.
What should you include in the solution?
A. an Azure data catalog that uses the Azure REST API as a data source
B. an Azure management group that uses parent groups to create a hierarchy
C. an Azure policy that enforces tagging rules (Ios voir)
D. Azure Active Directory (Azure AD) administrative units

- PDF answer: C
- DOCX answer: an Azure policy that enforces tagging rules
- Final answer: C

## Q30 (Topic 1, Original #31)

A company named Contoso, Ltd. has an Azure Active Directory (Azure AD) tenant that is integrated with Microsoft 365 and an Azure subscription.
Contoso has an on-premises identity infrastructure. The infrastructure includes servers that run Active Directory Domain Services (AD DS) and
Azure AD Connect.
Contoso has a partnership with a company named Fabrikam. Inc. Fabrikam has an Active Directory forest and a Microsoft 365 tenant. Fabrikam
has the same on- premises identity infrastructure components as Contoso.
A team of 10 developers from Fabrikam will work on an Azure solution that will be hosted in the Azure subscription of Contoso. The developers
must be added to the Contributor role for a resource group in the Contoso subscription
You need to recommend a solution to ensure that Contoso can assign the role to the 10 Fabrikam developers. The solution must ensure that the
Fabrikam developers use their existing credentials to access resources
What should you recommend?
A. In the Azure AD tenant of Contoso. create cloud-only user accounts for the Fabrikam developers.
B. Configure a forest trust between the on-premises Active Directory forests of Contoso and Fabrikam.
C. Configure an organization relationship between the Microsoft 365 tenants of Fabrikam and Contoso.
D. In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers.

- PDF answer: Community vote distribution
- DOCX answer: In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers.
- Final answer: Community vote distribution

## Q31 (Topic 1, Original #32)

Your company has the divisions shown in the following table.
[East [Subt | Contosocom
[West [Sub2 | Fabrikam.com
Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Configure the Azure AD provisioning service.
B. Enable Azure AD pass-through authentication and update the sign-in endpoint.
C. Use Azure AD entitlement management to govern external users.
D. Configure Azure AD join.

- PDF answer: C
- DOCX answer: Use Azure AD entitlement management to govern external users.
- Final answer: C

## Q32 (Topic 1, Original #33)

HOTSPOT -
Your company has 20 web APIs that were developed in-house.
The company is developing 10 web apps that will use the web APIs. The web apps and the APIs are registered in the company s Azure Active
Directory (Azure
AD) tenant. The web APIs are published by using Azure API Management.
You need to recommend a solution to block unauthorized requests originating from the web apps from reaching the web APIs. The solution must
meet the following requirements:
= Use Azure AD-generated claims.
Minimize configuration and management effort.
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Grant permissions to allow the web apps to access the web APIs by using: 2
Azure AD _
Azure AP| Management
The web APIs
Configure a JSON Web Token (JWT) validation policy by using: hd
Azure AD
Azure AP| Management
The web APIs

- PDF answer: Answer Area
- DOCX answer: Azure AD, Azure API Managment
- Final answer: Answer Area

## Q33 (Topic 1, Original #34)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Log Analytics (ost voted)
B. Azure Arc
C. Azure Analysis Services
D. Application Insights

- PDF answer: A
- DOCX answer: Azure Log Analytics
- Final answer: A

## Q34 (Topic 1, Original #35)

Your company has the divisions shown in the following table.
[East |Subt | Contoso.com
[West [Sub2 | Fabrikam.com
Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1
What should you recommend?
A. Configure the Azure AD provisioning service.
B. Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).
C. Use Azure AD entitlement management to govern external users.
D. Configure Azure AD Identity Protection.

- PDF answer: Community vote distribution
- DOCX answer: Use Azure AD entitlement management to govern external users.
- Final answer: Community vote distribution

## Q35 (Topic 1, Original #36)

You are developing an app that will read activity logs for an Azure subscription by using Azure Functions.
You need to recommend an authentication solution for Azure Functions. The solution must minimize administrative effort.
What should you include in the recommendation?
A. an enterprise application in Azure AD
B. system-assigned managed identities
C. shared access signatures (SAS)
D. application registration in Azure AD

- PDF answer: 8
- DOCX answer: system-assigned managed identities
- Final answer: 8

## Q36 (Topic 1, Original #37)

Your company has the divisions shown in the following table.
Contoso.com
Sub contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App.
What should you recommend?
A. Configure Azure AD join.
B. Use Azure AD entitlement management to govern external users.
C. Enable Azure AD pass-through authentication and update the sign-in endpoint.
D. Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).

- PDF answer: 8
- DOCX answer: Use Azure AD entitlement management to govern external users.
- Final answer: 8

## Q37 (Topic 1, Original #38)

Your company has the divisions shown in the following table.
EE Azure Azure AD tenant
subscription
[East [subt |Contosocom
Sub contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Configure Azure AD join.
B. Configure Azure AD Identity Protection.
C. Use Azure AD entitlement management to govern external users.
D. Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).

- PDF answer: C
- DOCX answer: Use Azure AD entitlement management to govern external users
- Final answer: C

## Q38 (Topic 1, Original #39)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Activity Log
B. Azure Arc
C. Azure Analysis Services
D. Azure Monitor metrics

- PDF answer: A
- DOCX answer: Azure Activity Log
- Final answer: A

## Q39 (Topic 1, Original #40)

HOTSPOT -
You have an Azure subscription that contains an Azure key vault named KV1 and a virtual machine named VM1. VM1 runs Windows Server 2022:
Azure Edition.
You plan to deploy an ASP.Net Core-based application named App1 to VM1
You need to configure App1 to use a system-assigned managed identity to retrieve secrets from KV1. The solution must minimize development
effort.
What should you do? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Configure App1 to use OAuth 2.0: v
Authorization code grant flows
Client credentials grant flows
Implicit grant flows
Configure App1 to use a REST API call v
to retrieve an authentication token from the: [Azure Instance Metadata Service (MDS) endpoint
(OAuth 2.0 access token endpoint of Azure AD
(OAuth 2.0 access token endpoint of Microsoft Identity Platform
Answer Area
Configure App1 to use OAuth 2.0: v
|Authorization code grant flows
Client credentials grant flows

- PDF answer: LS CL —
- DOCX answer: Client credentials grant flows, Azure Instance Metadata Service (MDS) endpoint
- Final answer: LS CL —

## Q40 (Topic 1, Original #41)

Your company has the divisions shown in the following table.
EE Azure Azure AD tenant
subscription
[East [subt |Contosocom
Sub contains an Azure App Service web app named App1. Appl uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Configure Azure AD join.
B. Configure Azure AD Identity Protection.
C. Configure a Conditional Access policy.
D. Configure Supported account types in the application registration and update the sign-in endpoint.

- PDF answer: 0
- DOCX answer: Configure Supported account types in the application registration and update the sign-in endpoint.
- Final answer: 0

## Q41 (Topic 1, Original #42)

You have an Azure AD tenant named contoso.com that has a security group named Group1. Group is configured for assigned memberships.
Group1 has 50 members, including 20 guest users.
You need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:
+ The evaluation must be repeated automatically every three months.
+ Every member must be able to report whether they need to be in Group1.
+ Users who report that they do not need to be in Group1 must be removed from Group! automatically.
«Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.
What should you include in the recommendation?
A. Implement Azure AD Identity Protection.
B. Change the Membership type of Group to Dynamic User.
C. Create an access review.
D. Implement Azure AD Privileged Identity Management (PIM).

- PDF answer: C
- DOCX answer: Create an access review
- Final answer: C

## Q42 (Topic 1, Original #43)

HOTSPOT
You have an Azure subscription named Sub1 that is linked to an Azure AD tenant named contoso.com.
You plan to implement two ASPNET Core apps named App1 and App2 that will be deployed to 100 virtual machines in Sub. Users will sign in to
App1 and App2 by using their contoso.com credentials.
App1 requires read permissions to access the calendar of the signed-in user. App2 requires write permissions to access the calendar of the
signed-in user.
You need to recommend an authentication and authorization solution for the apps. The solution must meet the following requirements:
+ Use the principle of least privilege.
+ Minimize administrative effort.
What should you include in the recommendation? To answer, select the appropriate options in the answer area
NOTE: Each correct selection is worth one point
Answer Area
Authentication: v
Application registration in Azure AD
A system-assigned managed identity
A user-assigned managed identity
Authorization: v
Application permissions
Azure role-based access control (Azure RBAC)
Delegated permissions
Answer Area
Authentication:
Application registration in Azure AD,

- PDF answer: A system-assigned managed identity
- DOCX answer: Application registration in Azure AD, Delegated permissions
- Final answer: A system-assigned managed identity

## Q43 (Topic 1, Original #44)

Your company has the divisions shown in the following table.
EE Azure Azure AD tenant
subscription
[East [subt  [Conosocom |
Sub contains an Azure App Service web app named App1. Appl uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Enable Azure AD pass-through authentication and update the sign-in endpoint.
B. Use Azure AD entitlement management to govern external users.
C. Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).
D. Configure Azure AD Identity Protection.

- PDF answer: 8
- DOCX answer: Use Azure AD entitlement management to govern external users.
- Final answer: 8

## Q44 (Topic 1, Original #45)

Your company has the divisions shown in the following table.
EE Azure Azure AD tenant
subscription
[East [subt  [Conosocom |
Sub contains an Azure App Service web app named Appl. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Configure the Azure AD provisioning service.
B. Enable Azure AD pass-through authentication and update the sign-in endpoint.
C. Configure Supported account types in the application registration and update the sign-in endpoint.
D. Configure Azure AD join.

- PDF answer: C
- DOCX answer: Configure Supported account types in the application registration and update the sign-in endpoint.
- Final answer: C

## Q45 (Topic 1, Original #46)

HOTSPOT
You have an Azure AD tenant that contains a management group named MG1
You have the Azure subscriptions shown in the following table.
[Fa | Wersementowss
Tenant Root Group
The subscriptions contain the resource groups shown in the following table.
[Name sbseion
The subscription contains the Azure AD security groups shown in the following table.
The subscription contains the user accounts shown in the following table.
Mame [vember]
Group1, Group2
You perform the following actions:
Assign User3 the Contributor role for Sub.
Assign Group1 the Virtual Machine Contributor role for MG1.
Assign Group3 the Contributor role for the Tenant Root Group.
For each of the following statements, select Yes if the statement is true. Otherwise, select No.
NOTE: Each correct selection is worth one point.
Answer Area
Statements Yes No
User can create a new virtual machine inRG1. © ©
User2 can grant permissions to Group2. o o
User3 can create a storage account in RG2. oo
Answer Area
Statements Yes No
User1 can create a new virtual machine in RG1. 0 o

- PDF answer: User2 can grant permissions to Group2. El = |
- DOCX answer: YES,NO,YES
- Final answer: User2 can grant permissions to Group2. El = |

## Q46 (Topic 1, Original #47)

Your company has the divisions shown in the following table.
Contoso.com
Sub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App.
What should you recommend?
A. Configure Azure AD Identity Protection.
B. Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).
C. Configure Supported account types in the application registration and update the sign-in endpoint.
D. Configure a Conditional Access policy.

- PDF answer: C
- DOCX answer: Configure Supported account types in the application registration and update the sign-in endpoint.
- Final answer: C

## Q47 (Topic 1, Original #48)

Your company has the divisions shown in the following table.
EE Azure Azure AD tenant
subscription
[East [subt |Contosocom
Sub contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Use Azure AD entitlement management to govern external users.
B. Enable Azure AD pass-through authentication and update the sign-in endpoint.
C. Configure a Conditional Access policy.
D. Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).

- PDF answer: A
- DOCX answer: Use Azure AD entitlement management to govern external users.
- Final answer: A

## Q48 (Topic 1, Original #49)

You have an Azure subscription that contains 1,000 resources.
You need to generate compliance reports for the subscription. The solution must ensure that the resources can be grouped by department.
What should you use to organize the resources?
A. application groups and quotas
B. Azure Policy and tags
C. administrative units and Azure Lighthouse
D. resource groups and role assignments

- PDF answer: 8
- DOCX answer: Azure Policy and tags
- Final answer: 8

## Q49 (Topic 1, Original #50)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Arc
B. Azure Monitor metrics
C. Azure Advisor
D. Azure Log Analytics

- PDF answer: D
- DOCX answer: Azure Log Analytics
- Final answer: D

## Q50 (Topic 1, Original #51)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Monitor action groups
B. Azure Arc
C. Azure Monitor metrics
D. Azure Activity Log

- PDF answer: 0
- DOCX answer: Azure Activity Log
- Final answer: 0

## Q51 (Topic 1, Original #52)

DRAG DROP
You have an Azure AD tenant that contains an administrative unit named MarketingAU. MarketingAU contains 100 users.
You create two users named User1 and User2.
You need to ensure that the users can perform the following actions in MarketingAU:
+ User! must be able to create user accounts.
+ User2 must be able to reset user passwords.
Which role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than
once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Roles Answer Area
Helpdesk Administrator for MarketingAU User1: Role
Helpdesk Administrator for the tenant User2: Role
User Administrator for MarketingAU
User Administrator for the tenant
Answer Area

- PDF answer: User1 | user Administrator for MarketingAU
- DOCX answer: User Administrator for MarketingAU, Helpdesk Administrator for Marketing
- Final answer: User1 | user Administrator for MarketingAU

## Q52 (Topic 1, Original #53)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Arc
B. Azure Log Analytics
C. Application insights
D. Azure Monitor action groups

- PDF answer: 8
- DOCX answer: Azure Log Analytics
- Final answer: 8

## Q53 (Topic 1, Original #54)

HOTSPOT
You are designing an app that will be hosted on Azure virtual machines that run Ubuntu. The app will use a third-party email service to send email
messages to users. The third-party email service requires that the app authenticate by using an API key.
You need to recommend an Azure Key Vault solution for storing and accessing the API key. The solution must minimize administrative effort
What should you recommend using to store and access the key? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Storage: v
Certificate
Key
Secret
Access: v
‘An API token
A managed service identity (MSI)
A service principal
Answer Area
Storage: v
Certificate
Key

- PDF answer: ect
- DOCX answer: Secret, A managed service identity (MSI)
- Final answer: ect

## Q54 (Topic 1, Original #55)

DRAG DROP -
You have two app registrations named App1 and App in Azure AD. App1 supports role-based access control (RBAC) and includes a role named
Writer.
You need to ensure that when App2 authenticates to access App, the tokens issued by Azure AD include the Writer role claim.
Which blade should you use to modify each app registration? To answer, drag the appropriate blades to the correct app registrations. Each blade
may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Blades Answer Area
Appl: Blade i
App2 Blade |
Blades Answer Area

- PDF answer: ot
- DOCX answer: App roles, API permissions
- Final answer: ot

## Q55 (Topic 1, Original #56)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Application Insights
B. Azure Arc
C. Azure Log Analytics
D. Azure Monitor metrics

- PDF answer: C
- DOCX answer: Azure Log Analytics
- Final answer: C

## Q56 (Topic 1, Original #57)

You have an Azure subscription.
You plan to deploy a monitoring solution that will include the following:
+ Azure Monitor Network Insights
« Application Insights
* Microsoft Sentinel
« VM insights
The monitoring solution will be managed by a single team.
What is the minimum number of Azure Monitor workspaces required?
AT
B.2
c.3
D.4

- PDF answer: A
- DOCX answer: 1
- Final answer: A

## Q57 (Topic 1, Original #58)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Application Insights
B. Azure Analysis Services
C. Azure Advisor
D. Azure Activity Log (Most Voted)

- PDF answer: Community vote distribution
- DOCX answer: Azure Activity Log
- Final answer: Community vote distribution

## Q58 (Topic 1, Original #59)

HOTSPOT
Case Study
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,
there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions
included on this exam in the time provided.
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might
contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is
independent of the other questions in this case study.
Atthe end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to
the next section of the exam. After you begin a new section, you cannot return to this section.
To start the case study
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study
before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem
statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the
subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.
Overview
Fabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices
in Amsterdam, Berlin, and Rome.
Existing Environment: Active Directory Environment
The network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the
forests.
Corp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.
Rd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises
resources only.
Existing Environment: Network Infrastructure
Each office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for
the rd fabrikam.com forest.
All the offices have a high-speed connection to the internet.
An existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track
orders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.
The web tier and the database tier are deployed to virtual machines that run on Hyper-V.
The IT department currently uses a separate Hyper-V environment to test updates to WebApp1.
Fabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.
Existing Environment: Problem Statements
The use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.
Requirements: Planned Changes
Fabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active
Directory for authentication,
As one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.
All R&D operations will remain on-premises.
Fabrikam plans to migrate the production and test instances of WebApp1 to Azure.
Requirements: Technical Requirements
Fabrikam identifies the following technical requirements:
+ Website content must be easily updated from a single point.
+ User input must be minimized when provisioning new web app instances.
« Whenever possible, existing on-premises licenses must be used to reduce cost.
+ Users must always authenticate by using their corp.fabrikam.com UPN identity.
+ Any new deployments to Azure must be redundant in case an Azure region fails.
+ Whenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.
+ An email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.
«In the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to
Active Directory.
- Directory synchronization between Azure Active Directory (Azure AD) and corp. fabrikam.com must not be affected by a link failure between
Azure and the on-premises network.
Requirements: Database Requirements
Fabrikam identifies the following database requirements:
- Database metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the
performance settings.
+ To avoid disrupting customer access, database downtime must be minimized when databases are migrated.
- Database backups must be retained for a minimum of seven years to meet compliance requirements.
Requirements: Security Requirements
Fabrikam identifies the following security requirements:
+ Company information including policies, templates, and data must be inaccessible to anyone outside the company.
« Users on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.
+ Administrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.
+ All administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).
- The testing of WebApp1 updates must not be visible to anyone outside the company.
To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the
answer area
NOTE: Each correct selection is worth one point.
Answer Area
Minimum number of Azure AD tenants: v
0
1
2
3
2
Minimum number of conditional access policies to create: v
0
1
2
3
4
Answer Area
Minimum number of Azure AD tenants: V
2
Minimum number of conditional access policies to create: v

- PDF answer: 2)
- DOCX answer: 1, 2
- Final answer: 2)

## Q59 (Topic 1, Original #60)

You have an Azure subscription that contains 10 web apps. The apps are integrated with Azure AD and are accessed by users on different project
teams.
The users frequently move between projects.
You need to recommend an access management solution for the web apps. The solution must meet the following requirements:
« The users must only have access to the app of the project to which they are assigned currently.
+ Project managers must verify which users have access to their project's app and remove users that are no longer assigned to their project.
+ Once every 30 days, the project managers must be prompted automatically to verify which users are assigned to their projects.
What should you include in the recommendation?
A. Azure AD Identity Protection
B. Microsoft Defender for Identity
C. Microsoft Entra Permissions Management
D. Azure AD Identity Governance

- PDF answer: 0
- DOCX answer: Azure AD Identity Governance
- Final answer: 0

## Q60 (Topic 1, Original #61)

HOTSPOT -
You have an Azure subscription that contains 50 Azure SQL databases.
You create an Azure Resource Manager (ARM) template named Template1 that enables Transparent Data Encryption (TDE).
You need to create an Azure Policy definition named Policy1 that will use Template to enable TDE for any noncompliant Azure SQL databases.
How should you configure Policy1? To answer, select the appropriate options in the answer area
NOTE: Each correct selection is worth one point.
Answer Area
Set available effects to: v
DepoylfNotExists
EnforceRegoPolicy
Modify
Include in the definition: v
[The identity required to perform the remediation task
The scopes of the policy assignments
The role-based access control (RBAC) roles required to perform the remediation task
Answer Area
Set available effects to:
DepoyliNotExists
| ForceRegoPolicy
Include in the definition: wv
[The identity required to perform the remediation task
[The scopes of the policy assignments
The role-based access control (RBAC) roles required to perform the remediation task

- PDF answer: (missing)
- DOCX answer: DepoyIfNotExists, The role-based access control (RBAC) roles required to perform the remediation task.
- Final answer: DepoyIfNotExists, The role-based access control (RBAC) roles required to perform the remediation task.

## Q61 (Topic 1, Original #62)

You have an Azure subscription. The subscription contains a tiered app named App1 that is distributed across multiple containers hosted in Azure
Container Instances.
You need to deploy an Azure Monitor monitoring solution for App. The solution must meet the following requirements:
+ Support using synthetic transaction monitoring to monitor traffic between the App1 components.
+ Minimize development effort
What should you include in the solution?
A. Network insights
B. Application Insights (Tez vor)
C. Container insights
D. Log Analytics Workspace insights

- PDF answer: 8
- DOCX answer: Application Insights
- Final answer: 8

## Q62 (Topic 1, Original #64)

You have 12 Azure subscriptions and three projects. Each project uses resources across multiple subscriptions.
You need to use Microsoft Cost Management to monitor costs on a per project basis. The solution must minimize administrative effort.
Which two components should you include in the solution? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
A. budgets
B. resource tags (Most voted)
C. custom role-based access control (RBAC) roles
D. management groups
E. Azure boards

- PDF answer: AB
- DOCX answer: budgets, resource tags
- Final answer: AB

## Q63 (Topic 1, Original #65)

HOTSPOT
You have an Azure subscription that contains multiple storage accounts.
You assign Azure Policy definitions to the storage accounts.
You need to recommend a solution to meet the following requirements:
+ Trigger on-demand Azure Policy compliance scans.
+ Raise Azure Monitor non-compliance alerts by querying logs collected by Log Analytics.
What should you recommend for each requirement? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
To trigger the compliance scans, use: v
An Azure template
The Azure Command-Line Interface (CLI)
The Azure portal
To generate the non-compliance alerts, configure diagnostic settings for the: hd
Azure activity logs
Log Analytics workspace
Storage ancaiints
Answer Area
To trigger the compliance scans, use: =

- PDF answer: ETOP
- DOCX answer: The Azure Command-Line interface (CLI), Azure acticvity logs
- Final answer: ETOP

## Q64 (Topic 1, Original #66)

HOTSPOT -
You have an Azure subscription
You plan to deploy five storage accounts that will store block blobs and five storage accounts that will host file shares. The file shares will be
accessed by using the SMB protocol.
You need to recommend an access authorization solution for the storage accounts. The solution must meet the following requirements:
* Maximize security.
+ Prevent the use of shared keys.
- Whenever possible, support time-limited access.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Answer Area
For the blobs: 7
A user delegation shared access signature (SAS) only
A shared access signature (SAS) and a stored access policy
A user delegation shared access signature (SAS) and a stored access policy |
For the file shares: -
Azure AD credentials
A user delegation shared access signature (SAS) only
A user delegation shared access signature (SAS) and a stored access policy

- PDF answer: Answer Area
- DOCX answer: A user delegation shared access signature (SAS) only, Azure AD credentials
- Final answer: Answer Area

## Q65 (Topic 1, Original #67)

HOTSPOT
You have an Azure subscription. The subscription contains 100 virtual machines that run Windows Server 2022 and have the Azure Monitor Agent
installed.
You need to recommend a solution that meets the following requirements:
+ Forwards JSON-formatted logs from the virtual machines to a Log Analytics workspace
« Transforms the logs and stores the data in a table in the Log Analytics workspace
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
To forward the logs: x.
A linked storage account for the Log Analytics workspace
An Azure Monitor data collection endpoint
A service endpoint
To transform the logs and store the data: =
AKQL query
AWQL query
An XPAth query
Answer Area
To forward the logs: -
| Alinked storage account for the Log Analytics workspace

- PDF answer: TET
- DOCX answer: An Azure Monitor data collection endpoint, A KQL query
- Final answer: TET

## Q66 (Topic 2, Original #1)

You have 100 servers that run Windows Server 2012 R2 and host Microsoft SQL Server 2014 instances. The instances host databases that have
the following characteristics:
co Stored procedures are implemented by using CLR.
© The largest database is currently 3 TB. None of the databases will ever exceed 4 TB.
You plan to move all the data from SQL Server to Azure.
You need to recommend a service to host the databases. The solution must meet the following requirements:
== Whenever possible, minimize management overhead for the migrated databases.
= Ensure that users can authenticate by using Azure Active Directory (Azure AD) credentials.
= Minimize the number of database changes required to facilitate the migration.
What should you include in the recommendation?
A. Azure SQL Database elastic pools
B. Azure SQL Managed Instance
C. Azure SQL Database single databases
D. SQL Server 2016 on Azure virtual machines

- PDF answer: 5
- DOCX answer: Azure SQL Managed Instance
- Final answer: 5

## Q67 (Topic 2, Original #2)

You have an Azure subscription that contains an Azure Blob Storage account named store.
You have an on-premises file server named Server1 that runs Windows Server 2016. Server stores 500 GB of company files.
You need to store a copy of the company files from Server in store
Which two possible Azure services achieve this goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. an Azure Logic Apps integration account
B. an Azure Import/Export job (Fost voted)
C. Azure Data Factory (Wiest voted)
D. an Azure Analysis services On-premises data gateway
E. an Azure Batch account

- PDF answer: 5C
- DOCX answer: an Azure Import/Export job, Azure Data Factory
- Final answer: 5C

## Q68 (Topic 2, Original #3)

You have an Azure subscription that contains two applications named App1 and App2. App is a sales processing application. When a transaction
in App1 requires shipping, a message is added to an Azure Storage account queue, and then App2 listens to the queue for relevant transactions.
In the future, additional applications will be added that will process some of the shipping requests based on the specific details of the
transactions.
You need to recommend a replacement for the storage account queue to ensure that each additional application will be able to read the relevant
transactions.
What should you recommend?
A. one Azure Data Factory pipeline
B. multiple storage account queues
C. one Azure Service Bus queue
D. one Azure Service Bus topic

- PDF answer: 0
- DOCX answer: one Azure Service Bus topic
- Final answer: 0

## Q69 (Topic 2, Original #4)

HOTSPOT -
You need to design a storage solution for an app that will store large amounts of frequently used data. The solution must meet the following
requirements:
=> Maximize data throughput.
= Prevent the modification of data for one year.
> Minimize latency for read and write operations.
Which Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Storage account type: [ [+]
BlobStorage
BlockBlobStorage
FileStorage
StorageV2 with Premium performance
StorageV2 with Standard performance
Storageservice: [00000000 [Ww]
Blob
File
Table

- PDF answer: Answer Area
- DOCX answer: BlockBlobStorage, Blob
- Final answer: Answer Area

## Q70 (Topic 2, Original #5)

HOTSPOT -
You have an Azure subscription that contains the storage accounts shown in the following table.
ewe [we] reo |
StorageV2 Standard
You plan to implement two new apps that have the requirements shown in the following table.
Appl Use lifecycle management to migrate app data between
storage tiers
App2 Store app data in an Azure file share
Which storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Hot Area:
Answer Area
app: [|]
Storage1 and storage2 only
Storage1 and storage3 only
Storage1, storage2, and storage3 only
Storagel, storage2, storage3, and storage4
app [+]
Storage4 only
Storage1 and storage4 only
Storage1, storage2, and storage4 only
Storage1, storage2, storage3, and storage4
Answer Area
appr: [|]
Storagel and storage2 only
‘Storage1 and storage3 only
Storage1, storage2, and storage3 only

- PDF answer: Storage1, storage2, storage3, and storage4
- DOCX answer: Storage1,and storage3 only, Storage1 and storage4 only
- Final answer: Storage1, storage2, storage3, and storage4

## Q71 (Topic 2, Original #6)

You are designing an application that will be hosted in Azure.
The application will host video files that range from 50 MB to 12 GB. The application will use certificate-based authentication and will be available
to users on the internet.
You need to recommend a storage option for the video files. The solution must provide the fastest read performance and must minimize storage
costs.
What should you recommend?
A. Azure Files
B. Azure Data Lake Storage Gen2
C. Azure Blob Storage
D. Azure SQL Database

- PDF answer: Community vote distribution
- DOCX answer: Azure Blob Storage
- Final answer: Community vote distribution

## Q72 (Topic 2, Original #7)

You are designing a SQL database solution. The solution will include 20 databases that will be 20 GB each and have varying usage patterns.
You need to recommend a database platform to host the databases. The solution must meet the following requirements:
5 The solution must meet a Service Level Agreement (SLA) of 99.99% uptime.
> The compute resources allocated to the databases must scale dynamically.
= The solution must have reserved capacity.
Compute charges must be minimized.
What should you include in the recommendation?
A. an elastic pool that contains 20 Azure SQL databases
B. 20 databases on a Microsoft SQL server that runs on an Azure virtual machine in an availability set
C. 20 databases on a Microsoft SQL server that runs on an Azure virtual machine
D. 20 instances of Azure SQL Database serverless

- PDF answer: A
- DOCX answer: an elastic pool that contains 20 Azure SQL databases
- Final answer: A

## Q73 (Topic 2, Original #8)

HOTSPOT -
You have an on-premises database that you plan to migrate to Azure.
You need to design the database architecture to meet the following requirements:
<> Support scaling up and down.
=> Support geo-redundant backups.
c= Support a database of up to 75 TB.
== Be optimized for online transaction processing (OLTP).
What should you include in the design? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
sevice: [+]
Azure SQL Database
Azure Synapse Analytics
SQL Server on Azure Virtual Machines
sevicetien [ [+]
Basic
Business Critical
General Purpose
Hyperscale
Premium
Standard
Answer Area
service: [ [+¥]
Azure SQL Database
Azure SQL Managed Instance
Azure Synapse Analytics
SQL Server on Azure Virtual Machines

- PDF answer: servicetien [ [+]
- DOCX answer: Azure SQL Database, Hyperscale
- Final answer: servicetien [ [+]

## Q74 (Topic 2, Original #9)

You are planning an Azure IoT Hub solution that will include 50,000 oT devices.
Each device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data
will be visualized in near real time.
You need to recommend a service to store and query the data.
Which two services can you recommend? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Azure Table Storage
B. Azure Event Grid
C. Azure Cosmos DB SQL API
D. Azure Time Series Insights

- PDF answer: CD
- DOCX answer: Azure Cosmos DB SQL API, Azure Time Series Insights
- Final answer: CD

## Q75 (Topic 2, Original #10)

You are designing an application that will aggregate content for users.
You need to recommend a database solution for the application. The solution must meet the following requirements:
=o Support SQL commands.
©» Support multi-master writes.
c= Guarantee low latency read operations.
What should you include in the recommendation?
A. Azure Cosmos DB SQL API
B. Azure SQL Database that uses active geo-replication
C. Azure SQL Database Hyperscale
D. Azure Database for PostgreSQL

- PDF answer: A
- DOCX answer: Azure Cosmos DB SQL API
- Final answer: A

## Q76 (Topic 2, Original #11)

HOTSPOT -
You have an Azure subscription that contains the SQL servers on Azure shown in the following table.
[ame [esowgow [iocwion |
The subscription contains the storage accounts shown in the following table.
[Name | Resour group [oation | Account nd
storagel RG1 East US StorageV2 (general
purposev2)
storage Central US BlobStorage
You create the Azure SQL databases shown in the following table.
[Meme [Resouceqo [seer [orentir |
saLdb1 saLsvrl Standard
sQLdb2 sQLsvrl Standard
For each of the following statements, select Yes if the statement is true. Otherwise, select No.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Statements Yes No
When you enable auditing for SQLdb1, you can store the audit information to storagel.
When you enable auditing for SQLdb2, you can store the audit information to storage2.
When you enable auditing for SQLdb3, you can store the audit information to storage2.

- PDF answer: Answer Area
- DOCX answer: YES,NO, NO
- Final answer: Answer Area

## Q77 (Topic 2, Original #12)

DRAG DROP -
You plan to import data from your on-premises environment to Azure. The data is shown in the following table.
On-premises source Azure target
A Microsoft SQL Server 2012 database | An Azure SQL database
A table in a Microsoft SQL Server 2014 | An Azure Cosmos DB account that
database uses the SQL API
What should you recommend using to migrate the data? To answer, drag the appropriate tools to the correct data sources. Each tool may be used
once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Tools | Answer Area
‘AzCopy
/Azure Cosmos DB Data Migration Tool Fa]
From the SQL Server 2012 database: | |
Data Management Gateway J —————————————
— - From the table in the SQL Server 2014 database: | ]
Data Migration Assistant Less 5 .

- PDF answer: Tools Answer Area
- DOCX answer: Data Migration Assistant, Azure Cosmos DB Data Migration Tool
- Final answer: Tools Answer Area

## Q78 (Topic 2, Original #13)

You store web access logs data in Azure Blob Storage.
You plan to generate monthly reports from the access logs.
You need to recommend an automated process to upload the data to Azure SQL Database every month.
What should you include in the recommendation?
A. Microsoft SQL Server Migration Assistant (SSMA)
B. Data Migration Assistant (DMA)
C. AzCopy
D. Azure Data Factory

- PDF answer: Community vote distribution
- DOCX answer: (missing)
- Final answer: Community vote distribution

## Q79 (Topic 2, Original #14)

You have an Azure subscription.
Your on-premises network contains a file server named Server1. Server1 stores 5 1¢1' of company files that are accessed rarely.
You plan to copy the files to Azure Storage.
You need to implement a storage solution for the files that meets the following requirements:
== The files must be available within 24 hours of being requested.
co Storage costs must be minimized.
Which two possible storage solutions achieve this goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob
container, and set each file to the Archive access tier.
B. Create a general-purpose v1 storage account. Create a blob container and copy the files to the blob container.
C. Create a general-purpose v2 storage account that is configured for the Cool default access tier. Create a file share in the storage account
and copy the files to the file share.
D. Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the
blob container, and set each file to the Archive access tier.
E. Create a general-purpose v1 storage account. Create a fie share in the storage account and copy the files to the file share.

- PDF answer: AD
- DOCX answer: Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier,Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.
- Final answer: AD

## Q80 (Topic 2, Original #15)

You have an app named App1 that uses two on-premises Microsoft SQL Server databases named DB1 and DB2.
You plan to migrate DB1 and DB2 to Azure
You need to recommend an Azure solution to host DB1 and DB2. The solution must meet the following requirements:
= Support server-side transactions across DB1 and DB2.
> Minimize administrative effort to update the solution.
What should you recommend?
A. two Azure SQL databases in an elastic pool
B. two databases on the same Azure SQL managed instance
C. two databases on the same SQL Server instance on an Azure virtual machine
D. two Azure SQL databases on different Azure SQL Database servers

- PDF answer: 5
- DOCX answer: two databases on the same Azure SQL managed instance
- Final answer: 5

## Q81 (Topic 2, Original #16)

You need to design a highly available Azure SQL database that meets the following requirements:
= Failover between replicas of the database must occur without any data loss.
=> The database must remain available in the event of a zone outage.
=» Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Hyperscale
B. Azure SQL Database Premium (Most voted)
C. Azure SQL Database Basic
D. Azure SQL Managed Instance General Purpose

- PDF answer: 5
- DOCX answer: Azure SQL Database Premium
- Final answer: 5

## Q82 (Topic 2, Original #17)

HOTSPOT -
You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.
You need to recommend a storage solution that meets the following requirements:
co All the data written to storage must be retained for five years.
c= Once the data is written, the data can only be read. Modifications and deletion must be prevented.
> After five years, the data can be deleted, but never modified.
= Data access charges must be minimized
What should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Storage account type: v
General purpose v2 with Archive access tier for blobs
(General purpose v2 with Cool access tier for blobs
General purpose v2 with Hot access tier for blobs
Configuration to prevent modifications and deletions: ¥
Container access level
Container access policy on
Storage account resource lock

- PDF answer: Answer Area
- DOCX answer: General purpose v2 with Hot access tier for blobs, Container access policy
- Final answer: Answer Area

## Q83 (Topic 2, Original #18)

HOTSPOT -
You are designing a data storage solution to support reporting.
The solution will ingest high volumes of data in the JSON format by using Azure Event Hubs. As the data arrives, Event Hubs will write the data to
storage. The solution must meet the following requirements:
5 Organize data in directories by date and time.
=» Allow stored data to be queried directly, transformed into summarized tables, and then stored in a data warehouse.
=> Ensure that the data warehouse can store 50 TB of relational data and support between 200 and 300 concurrent read operations.
Which service should you recommend for each type of data store? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Data store for the ingested data: ud
Azure Blob Storage
Azure Data Lake Storage Gen2
Azure Files
Azure App Files
Data store for the data warehouse: v
Azure Cosmos DB Cassandra API
Azure Cosmos DB SQL API
Azure SQL Database Hyperscale
Azure Synapse Analytics dedicated SQL pools

- PDF answer: Answer Area
- DOCX answer: Azure Data Lake Storage Gen2, Azure SQL Database Hyperscale
- Final answer: Answer Area

## Q84 (Topic 2, Original #19)

You have an app named App that uses an on-premises Microsoft SQL Server database named DB1.
You plan to migrate DB1 to an Azure SQL managed instance.
You need to enable customer managed Transparent Data Encryption (TDE) for the instance. The solution must maximize encryption strength.
Which type of encryption algorithm and key length should you use for the TE protector?
A. RSA 3072 (1st voted)
B. AES 256
C. RSA 4096
D. RSA 2048

- PDF answer: A
- DOCX answer: RSA 3072
- Final answer: A

## Q85 (Topic 2, Original #20)

You are planning an Azure loT Hub solution that will include 50,000 loT devices.
Each device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data
will be visualized in near real time.
You need to recommend a service to store and query the data
Which two services can you recommend? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. Azure Table Storage
B. Azure Event Grid
C. Azure Cosmos DB for NoSQL
D. Azure Time Series Insights

- PDF answer: CD
- DOCX answer: Azure Cosmos DB for NoSQL, Azure Time Series Insights
- Final answer: CD

## Q86 (Topic 2, Original #21)

HOTSPOT -
You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.
You need to recommend a storage solution that meets the following requirements:
+ All the data written to storage must be retained for five years.
« Once the data is written, the data can only be read. Modifications and deletion must be prevented.
« After five years, the data can be deleted, but never modified.
+ Data access charges must be minimized.
What should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Storage account type: v
[Premium block blobs
(General purpose v2 with Cool access tier for blobs
|General purpose v2 with Hot access tier for blobs
Configuration to prevent modifications | v
and deletions: [Container access level
[Container access policy
[Storage account resource lock
Answer Area
Storage account type: v
[Premium block blobs

- PDF answer: eneral purpose v2 with Cool acce: er for blob:
- DOCX answer: General purpose v2 with Hot access tier for blobs, Container access policy
- Final answer: eneral purpose v2 with Cool acce: er for blob:

## Q87 (Topic 2, Original #22)

HOTSPOT -
You are designing a data analytics solution that will use Azure Synapse and Azure Data Lake Storage Gen2.
You need to recommend Azure Synapse pools to meet the following requirements:
~ Ingest data from Data Lake Storage into hash-distributed tables.
« Implement query, and update data in Delta Lake.
What should you recommend for each requirement? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Ingest data from Data Lake Storage v
into hash-distributed tables: [A dedicated SQL pool
A serverless Apache Spark pool
A serverless SQL pool
Implement, query, and update data v
in Delta Lake: [A dedicated SQL pool
A serverless Apache Spark pool
|A serverless SQL pool
Answer Area
Ingest data from Data Lake Storage
into hash-distributed tables: A dedicated SQL pool

- PDF answer: A serveriess Apache Spark pool
- DOCX answer: A dedicated SQL pool, A serverless Apache Spark pool
- Final answer: A serveriess Apache Spark pool

## Q88 (Topic 2, Original #23)

You have an on-premises storage solution.
You need to migrate the solution to Azure. The solution must support Hadoop Distributed File System (HDFS).
What should you use?
A. Azure Data Lake Storage Gen2
B. Azure NetApp Files
C. Azure Data Share
D. Azure Table storage

- PDF answer: A
- DOCX answer: Azure Data Lake Storage Gen2
- Final answer: A

## Q89 (Topic 2, Original #24)

DRAG DROP
You have an on-premises app named App1.
Customers use App1 to manage digital images.
You plan to migrate AppT to Azure.
You need to recommend a data storage solution for App1. The solution must meet the following image storage requirements:
- Encrypt images at rest.
« Allow files up to 50 MB.
+ Manage access to the images by using Azure Web Application Firewall (WAF) on Azure Front Door.
The solution must meet the following customer account requirements:
+ Support automatic scale out of the storage.
+ Maintain the availability of App1 if a datacenter fails.
« Support reading and writing data from multiple Azure regions.
Which service should you include in the recommendation for each type of data? To answer, drag the appropriate services to the correct type of
data. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct answer is worth one point.
Services Answer Area
Azure Blob storage
= a EE—
“Azure Table storage
Answer Area

- PDF answer: Image storage:
- DOCX answer: Azure Blob Storage, Azure Cosmos DB
- Final answer: Image storage:

## Q90 (Topic 2, Original #25)

You are designing an application that will aggregate content for users.
You need to recommend a database solution for the application. The solution must meet the following requirements:
* Support SQL commands.
+ Support multi-master writes.
+ Guarantee low latency read operations.
What should you include in the recommendation?
A. Azure Cosmos DB for NoSQL
B. Azure SQL Database that uses active geo-replication
C. Azure SQL Database Hyperscale
D. Azure Cosmos DB for PostgreSQL

- PDF answer: A
- DOCX answer: Azure Cosmos DB for NoSQL
- Final answer: A

## Q91 (Topic 2, Original #26)

You plan to migrate on-premises MySQL databases to Azure Database for MySQL Flexible Server.
You need to recommend a solution for the Azure Database for MySQL Flexible Server configuration. The solution must meet the following
requirements:
« The databases must be accessible if a datacenter fails.
+ Costs must be minimized.
Which compute tier should you recommend?
A. Burstable
B. General Purpose (Most Voted)
C. Memory Optimized

- PDF answer: 8
- DOCX answer: General Purpose
- Final answer: 8

## Q92 (Topic 2, Original #27)

You are designing an app that will use Azure Cosmos DB to collate sales from multiple countries.
You need to recommend an API for the app. The solution must meet the following requirements:
* Support SQL queries.
* Support geo-replication.
+ Store and access data relationally.
Which API should you recommend?
A. Apache Cassandra
B. PostgreSQL (ost Voted)
C. MongoDB
D. NoSQL

- PDF answer: 8
- DOCX answer: PostgreSQL
- Final answer: 8

## Q93 (Topic 2, Original #28)

HOTSPOT
You have an app that generates 50,000 events daily.
You plan to stream the events to an Azure event hub and use Event Hubs Capture to implement cold path processing of the events. The output of
Event Hubs Capture will be consumed by a reporting system.
You need to identify which type of Azure storage must be provisioned to support Event Hubs Capture, and which inbound data format the reporting
system must support.
What should you identify? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Storage type: hd
Azure Data Lake Storage Gen2
Premium block blobs
Premium file shares
Data format: -
[Apache Parquet
Avro
JSON
Answer Area
Storage type: v
[Azure Data Lake Storage Gen2

- PDF answer: Premium block blobs
- DOCX answer: Azure Data Lake Storage Gen2, Avro
- Final answer: Premium block blobs

## Q94 (Topic 2, Original #29)

You have the resources shown in the following table.
CDBT hosts a container that stores continuously updated operational data.
You are designing a solution that will use AST to analyze the operational data daily.
You need to recommend a solution to analyze the data without affecting the performance of the operational data store.
What should you include in the recommendation?
A. Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors
B. Azure Synapse Analytics with PolyBase data loading
C. Azure Synapse Link for Azure Cosmos DB
D. Azure Cosmos DB change feed

- PDF answer: C
- DOCX answer: Azure Synapse Link for Azure Cosmos DB
- Final answer: C

## Q95 (Topic 2, Original #30)

HOTSPOT
You have an Azure subscription. The subscription contains an Azure SQL managed instance that stores employee details, including social security
numbers and phone numbers.
You need to configure the managed instance to meet the following requirements:
+ The helpdesk team must see only the last four digits of an employee's phone number.
+ Cloud administrators must be prevented from seeing the employees social security numbers.
What should you enable for each column in the managed instance? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Phone numbers: ‘wv
Always Encrypted
Column encryption
Dynamic data masking
Transparent Data Encryption (TDE)
Social security numbers: v
Always Encrypted
Column encryption
Dynamic data masking
Transparent Data Encryption (TDE)
Answer Area
Phone numbers: ‘wv
Always Encrypted
Qlumn encrvotion

- PDF answer: " wer Transparent Data encryption (TDE)
- DOCX answer: Dynamic data masking, Always Encrypted
- Final answer: " wer Transparent Data encryption (TDE)

## Q96 (Topic 2, Original #31)

You plan to use an Azure Storage account to store data assets.
You need to recommend a solution that meets the following requirements:
+ Supports immutable storage
+ Disables anonymous access to the storage account
+ Supports access control list (ACL)-based Azure AD permissions
What should you include in the recommendation?
A. Azure Files
B. Azure Data Lake Storage (Most voted)
C. Azure NetApp Files
D. Azure Blob Storage

- PDF answer: 8
- DOCX answer: Azure Data Lake Storage
- Final answer: 8

## Q97 (Topic 2, Original #32)

HOTSPOT -
You are designing a storage solution that will ingest, store, and analyze petabytes (PBs) of structured, semi-structured, and unstructured text data.
The analyzed data will be offloaded to Azure Data Lake Storage Gen? for long-term retention.
You need to recommend a storage and analytics solution that meets the following requirements:
« Stores the processed data
+ Provides interactive analytics
+ Supports manual scaling, built-in autoscaling, and custom autoscaling
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
For storage and interactive analytics: 4
\Azure Data Explorer
|Azure Data Lake Analytics
Log Analytics
Query language: Vi
KQL
Transact-SQL
uU-saL
Answer Area
For storage and interactive analytics:
Azure Data Explorer

- PDF answer: ue tla 2 RCS
- DOCX answer: Azure Data Explorer, KQL
- Final answer: ue tla 2 RCS

## Q98 (Topic 2, Original #34)

HOTSPOT
You have an Azure subscription.
You need to deploy a solution that will provide point-n-time restore for blobs in storage accounts that have blob versioning and blob soft delete
enabled.
Which type of blob should you create, and what should you enable for the accounts? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Answer Area
Blob type: v
Append
Block
Page
Enable: >
A stored access policy
Immutable blob storage
Object replication
The change feed
Answer Area
Blob type: v
Append

- PDF answer: Page
- DOCX answer: Block, The change feed
- Final answer: Page

## Q99 (Topic 2, Original #35)

HOTSPOT
Your company, named Contoso, Ltd., has an Azure subscription that contains the following resources:
+ An Azure Synapse Analytics workspace named contosoworkspacel
+ An Azure Data Lake Storage account named contosolake1
+ An Azure SQL database named contososqlt
The product data of Contoso is copied from contososql1 to contosolake1
Contoso has a partner company named Fabrikam Inc. Fabrikam has an Azure subscription that contains the following resources:
+ Avirtual machine named FabrikamVM1 that runs Microsoft SQL Server 2019
+ An Azure Storage account named fabrikamsa1l
Contoso plans to upload the research data on FabrikamVM1 to contosolake1. During the upload, the research data must be transformed to the
data formats used by Contoso
The data in contosolake1 will be analyzed by using contosoworkspace1
You need to recommend a solution that meets the following requirements:
* Upload and transform the FabrikamVM1 research data.
+ Provide Fabrikam with restricted access to snapshots of the data in contosoworkspace1.
What should you recommend for each requirement? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Upload and transform the data: Y
Azure Data Box Gateway
Azure Data Share
Azure Synapse pipelines
Provide restricted access: 3
Azure Data Box Gateway
Azure Data Share
Azure Synapse pipelines
Answer Area
Upload and transform the data: Y
Azure Data Box Gateway
Azure Data Share

- PDF answer: Provide restricted access: =
- DOCX answer: Azure Synpase pipelines, Azure Data Share
- Final answer: Provide restricted access: =

## Q100 (Topic 2, Original #36)

HOTSPOT
You are designing a data pipeline that will integrate large amounts of data from multiple on-premises Microsoft SQL Server databases into an
analytics platform in Azure. The pipeline will include the following actions:
+ Database updates will be exported periodically into a staging area in Azure Blob storage.
+ Data from the blob storage will be cleansed and transformed by using a highly parallelized load process.
« The transformed data will be loaded to a data warehouse.
« Each batch of updates will be used to refresh an online analytical processing (OLAP) model in a managed serving layer.
+ The managed serving layer will be used by thousands of end users.
You need to implement the data warehouse and serving layers.
What should you use? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
To implement the data warehouse: x
NT TT TT TE TE
| An Apache Spark pool in Azure Synapse Analytics
| An Azure Synapse Analytics dedicated SQL pool
Azure Data Lake Analytics
To implement the serving layer: £7
Azure Analysis Services
An Apache Spark pool Azure Synapse Analytics
An Azure Synapse Analytics dedicated SQL pool
Answer Area
To implement the data warehouse: ~
An Apache Spark pool in Azure Synapse Analytics
An Azure Synapse Analytics dedicated SQL pool

- PDF answer: mr ——
- DOCX answer: An Azure Synpase Analytics dedicated SQL pool
- Final answer: mr ——

## Q101 (Topic 2, Original #38)

You have an app named App1 that uses an Azure Blob Storage container named app1data.
App uploads a cumulative transaction log file named File1.txt to a block blob in app1data once every hour. File1.txt only stores transaction data
from the current day.
You need to ensure that you can restore the last uploaded version of File1.txt from any day for up to 30 days after the file was overwritten. The
solution must minimize storage space.
What should you include in the solution?
A. container soft delete
B. blob snapshots
C. blob soft delete
D. blob versioning

- PDF answer: 0
- DOCX answer: blob versioning
- Final answer: 0

## Q102 (Topic 2, Original #39)

You have 12 on-premises data sources that contain customer information and consist of Microsoft SQL Server, MySQL, and Oracle databases.
You have an Azure subscription.
You plan to create an Azure Data Lake Storage account that will consolidate the customer information for analysis and reporting.
You need to recommend a solution to automatically copy new information from the data sources to the Data Lake Storage account by using
extract, transform and load (ETL). The solution must minimize administrative effort.
What should you include in the recommendation?
A. Azure Data Factory
B. Azure Data Explorer
C. Azure Data Share
D. Azure Data Studio

- PDF answer: A
- DOCX answer: Azure Data Factory
- Final answer: A

## Q103 (Topic 3, Original #1)

You have SQL Server on an Azure virtual machine. The databases are written to nightly as part of a batch process.
You need to recommend a disaster recovery solution for the data. The solution must meet the following requirements:
c® Provide the ability to recover in the event of a regional outage.
c= Support a recovery time objective (RTO) of 15 minutes.
5 Support a recovery point objective (RPO) of 24 hours.
c= Support automated recovery.
=> Minimize costs.
What should you include in the recommendation?
A. Azure virtual machine availability sets
B. Azure Disk Backup
C. an Always On availability group
D. Azure Site Recovery

- PDF answer: 0
- DOCX answer: Azure Site Recovery
- Final answer: 0

## Q104 (Topic 3, Original #2)

HOTSPOT -
You plan to deploy the backup policy shown in the following exhibit.
Policy 1
EE Associated items [lJ Delete [| Save ¢ Discard
Backup schedule
*Frequency *Time *Timezone
6:00PM v| [ (UTC) Coordinated Univer...
Instant Restore @
Retain instant recovery snapshot(s) for
Day(s) @
Retention range
4 Retention of daily backup point.
*At For
6:00PM Vv Day(s)
[2 Retention of weekly backup point.
*on *At For
Soom v Weekis
v Retention of monthly backup point.
*on *Day *At For
ETRY worth
[C]  Retentionof yearly backup point.
Not Configured
Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Virtual machines that are backed up by using the I
policy can be recovered for up to a maximum of | 90 days
[answer choice]: | 26 weeks
36 months
45 months
The minimum recovery point objective (RPO) for [ [wr]
virtual machines that are backed up by using the [~~
policy is [answer choice]: day
1 week
1 month
1year
Answer Area
Virtual machines that are backed up by using the Tw]
policy can be recovered for up to a maximum of | 90 days
[answer choice]: | 26 weeks
36 months i
45 months

- PDF answer: The minimum recovery point objective (RPO) for [Tw]
- DOCX answer: 36 months, 1 day
- Final answer: The minimum recovery point objective (RPO) for [Tw]

## Q105 (Topic 3, Original #3)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen
You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:
=o Provide access to the full .NET framework.
Provide redundancy if an Azure region fails.
= Grant administrators access to the operating system to install custom application dependencies
Solution: You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile.
Does this meet the goal?
A Yes (va)
B. No

- PDF answer: A
- DOCX answer: YES
- Final answer: A

## Q106 (Topic 3, Original #4)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:
=» Provide access to the full .NET framework.
c= Provide redundancy if an Azure region fails.
= Grant administrators access to the operating system to install custom application dependencies.
Solution: You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway.
Does this meet the goal?
A. Yes
6 Nom)

- PDF answer: 5
- DOCX answer: NO
- Final answer: 5

## Q107 (Topic 3, Original #5)

HOTSPOT -
You plan to create an Azure Storage account that will host file shares. The shares will be accessed from on-premises applications that are
transaction intensive.
You need to recommend a solution to minimize latency when accessing the file shares. The solution must provide the highest-level of resiliency
for the selected storage tier.
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Storagetierr: [ [+]
Hot |
Premium
Transaction optimized
Redundancy: [|
Geo-redundant storage (GRS)
Zone-redundant storage (ZRS)
Locally-redundant storage (LRS)
Answer Area
storagetie: | [+]
Hot
Premium

- PDF answer: Redundancy: []¥|
- DOCX answer: Premium, Zone-redundant storage (ZRS)
- Final answer: Redundancy: []¥|

## Q108 (Topic 3, Original #6)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:
> Provide access to the full .NET framework.
<> Provide redundancy if an Azure region fails.
=> Grant administrators access to the operating system to install custom application dependencies.
Solution: You deploy an Azure virtual machine scale set that uses autoscaling.
Does this meet the goal?
A. Yes
8 No)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q109 (Topic 3, Original #7)

HOTSPOT -
You need to recommend an Azure Storage account configuration for two applications named Application and Application2. The configuration
must meet the following requirements:
= Storage for Application1 must provide the highest possible transaction rates and the lowest possible latency.
<> Storage for Application2 must provide the lowest possible storage costs per GB.
= Storage for both applications must be available in an event of datacenter failure.
==> Storage for both applications must be optimized for uploads and downloads.
What should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area;
Answer Area
Application1: v
BlobStorage with Standard performance, Hot access tier, and Read-
access geo-redundant storage (RA-GRS) replication
BlockBlobStorage with Premium performance and Zone-redundant
storage (ZRS) replication
General purpose v1 with Premium performance and Locally-
redundant storage (LRS) replication
General purpose v2 with Standard performance, Hot access tier, and
Locally-redundant storage (LRS) replication
Application2: v
BlobStorage with Standard performance, Cool access tier, and Geo-
redundant storage (GRS) replication .
BlockBlobStorage with Premium performance and Zone-redundant
storage (ZRS) replication
General purpose v1 with Standard performance and Read-access
geo-redundant storage (RA-GRS) replication
General purpose v2 with Standard performance, Cool access tier,
and Read-access geo-redundant storage (RA-GRS) replication

- PDF answer: Answer Area
- DOCX answer: BlockBlobStorage with Premium performance and Zone-redundant storage (ZRS) replication
- Final answer: Answer Area

## Q110 (Topic 3, Original #8)

HOTSPOT -
You plan to develop a new app that will store business critical data. The app must meet the following requirements:
© Prevent new data from being modified for one year.
co Maximize data resiliency.
=» Minimize read latency.
What storage solution should you recommend for the app? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Storage Account type: v
Premium block blobs
‘Standard general-purpose v1 i
Standard general-purpose v2
Redundancy: v
Zone-redundant storage (ZRS)
Locally-redundant storage (LRS)

- PDF answer: Answer Area
- DOCX answer: Premium block blobs, Zone-redundant storage (ZRS)
- Final answer: Answer Area

## Q111 (Topic 3, Original #9)

You plan to deploy 10 applications to Azure. The applications will be deployed to two Azure Kubernetes Service (AKS) clusters. Each cluster will
be deployed to a separate Azure region.
The application deployment must meet the following requirements:
> Ensure that the applications remain available if a single AKS cluster fails.
co Ensure that the connection traffic over the internet is encrypted by using SSL without having to configure SSL on each container.
Which service should you include in the recommendation?
A. Azure Front Door (Most Voted)
B. Azure Traffic Manager
C. AKS ingress controller
D. Azure Load Balancer

- PDF answer: A
- DOCX answer: Azure Front Door
- Final answer: A

## Q112 (Topic 3, Original #10)

HOTSPOT -
You have an on-premises file server that stores 2 TB of data files.
You plan to move the data files to Azure Blob Storage in the West Europe Azure region.
You need to recommend a storage account type to store the data files and a replication solution for the storage account. The solution must meet
the following requirements:
co Be available if a single Azure datacenter fails
©» Support storage tiers.
> Minimize cost.
What should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Storage Account type: v
Premium block blobs
Standard general-purpose v1
Standard general-purpose v2
Redundancy: v
Geo-redundant storage (GRS)
Zone-redundant storage (ZRS)
Locally-redundant storage (LRS)
Read-access geo-redundant storage (RA-GRS)

- PDF answer: Answer Area
- DOCX answer: Standard general-pupose v2, Zone-redudant stprage (ZRS)
- Final answer: Answer Area

## Q113 (Topic 3, Original #11)

HOTSPOT -
You have an Azure web app named App1 and an Azure key vault named KV1.
App stores database connection strings in KV1
App1 performs the following types of requests to KV1:
co Get
© List
> Wrap
* Delete
Unwrap -
c= Backup
co Decrypt
=» Encrypt
You are evaluating the continuity of service for App1.
You need to identify the following if the Azure region that hosts KV1 becomes unavailable:
=# To where will KV1 fail over?
co During the failover, which request type will be unavailable?
What should you identify? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Hot Area:
Answer Area
To where will KV1 fail over? v
A server in the same availability set
A server in the same fault domain
/Aserver in the paired region
A virtual machine in a scale set
During the failover, which request type will be unavailable? v
Get
List
Wrap
‘Delete
‘Unwrap
Backup
Decrypt
Encrypt

- PDF answer: Answer Area
- DOCX answer: A server in the paired region, Delete
- Final answer: Answer Area

## Q114 (Topic 3, Original #12)

DRAG DROP -
Your company identifies the following business continuity and disaster recovery objectives for virtual machines that host sales, finance, and
reporting applications in the company's on-premises data center:
co The sales application must be able to fail over to a second on-premises data center.
> The reporting application must be able to recover point-in-time data at a daily granularity. The RTO is eight hours.
co The finance application requires that data be retained for seven years. In the event of a disaster, the application must be able to run from
Azure. The recovery time objective (RTO) is 10 minutes.
You need to recommend which services meet the business continuity and disaster recovery objectives. The solution must minimize costs.
What should you recommend for each application? To answer, drag the appropriate services to the correct applications. Each service may be used
once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Services Answer Area
Azure Backup only | Sales: Service or Services
| Azure Site Recovery and Azure Backup - -— ~
— — EE —— Finance: Service or Services |
Azure Site Recovery only
Reporting: Service or Services |

- PDF answer: Services Answer Area
- DOCX answer: Azure Site Recovery only, Azure Site Recovery and Azure Backup, Azure Backup only
- Final answer: Services Answer Area

## Q115 (Topic 3, Original #13)

You need to design a highly available Azure SQL database that meets the following requirements:
> Failover between replicas of the database must occur without any data loss.
== The database must remain available in the event of a zone outage.
ce Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Managed Instance Business Critical
B. Azure SQL Database Premium (Most Voted)
C. Azure SQL Database Basic
D. Azure SQL Managed Instance General Purpose

- PDF answer: 5
- DOCX answer: (missing)
- Final answer: 5

## Q116 (Topic 3, Original #14)

You need to design a highly available Azure SQL database that meets the following requirements:
= Failover between replicas of the database must occur without any data loss.
=» The database must remain available in the event of a zone outage.
=> Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Managed Instance Business Critical
B. Azure SQL Database Premium (vost voted)
C. Azure SQL Database Basic
D. Azure SQL Database Hyperscale

- PDF answer: 5
- DOCX answer: Azure SQL Database Premium
- Final answer: 5

## Q117 (Topic 3, Original #15)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:
© Provide access to the full .NET framework.
= Provide redundancy if an Azure region fails.
= Grant administrators access to the operating system to install custom application dependencies.
Solution: You deploy a web app in an Isolated App Service plan.
Does this meet the goal?
A. Yes
B.No (Tm)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q118 (Topic 3, Original #16)

You need to design a highly available Azure SQL database that meets the following requirements:
> Failover between replicas of the database must occur without any data loss.
=» The database must remain available in the event of a zone outage.
c+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Serverless
B. Azure SQL Database Business Critical (ost Voted)
C. Azure SQL Database Basic
D. Azure SQL Database Standard

- PDF answer: 5
- DOCX answer: Azure SQL Database Business Critical
- Final answer: 5

## Q119 (Topic 3, Original #18)

HOTSPOT
You have two on-premises Microsoft SQL Server 2017 instances that host an Always On availability group named AG1. AG1 contains a single
database named DBT.
You have an Azure subscription that contains a virtual machine named VM1. VM1 runs Linux and contains a SQL Server 2019 instance.
You need to migrate DB1 to VM1. The solution must minimize downtime on DB1.
What should you do? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Prepare for the migration by: >
Adding a secondary replica to AG1
Creating an Always On availability group on VM1
Upgrading the on-premises SQL Server instances
Perform the migration by using: -
A distributed availability group
Azure Migrate
Log shipping
Prepare for the migration by: ~
Creating an Always On availability group on VM1
UpGTaaiTg Me OTT=Premmses Sr Server Stance

- PDF answer: Perform the migration by using: >
- DOCX answer: Creating an Always On availability group on VM1, Azure Migrate
- Final answer: Perform the migration by using: >

## Q120 (Topic 3, Original #19)

HOTSPOT -
You are building an Azure web app that will store the Personally Identifiable Information (PII) of employees.
You need to recommend an Azure SQL. Database solution for the web app. The solution must meet the following requirements:
+ Maintain availability in the event of a single datacenter outage.
* Support the encryption of specific columns that contain PII
+ Automatically scale up during payroll operations.
* Minimize costs.
What should you include in the recommendations? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Service tier and computer tier: v
Business Critical service tier and Serverless computer tier
General Purpose service tier and Serverless computer tier
Hyperscale service tier and Provisioned compute tier
Encryption method: v
[Always Encrypted
Microsoft SQL Server and database encryption keys
[Transparent Data Encryption (TDE)
Answer Area
Service tier and computer tier: v
Business Critical service tier and Serverless computer fier

- PDF answer: |General Purpose service tier and Serverless computer fier |
- DOCX answer: General Purpose service tier and Serverless computer tier, Always Encrypted
- Final answer: |General Purpose service tier and Serverless computer fier |

## Q121 (Topic 3, Original #20)

You plan to deploy an Azure Database for MySQL flexible server named Server to the East US Azure region.
You need to implement a business continuity solution for Server1. The solution must minimize downtime in the event of a failover to a paired
region.
What should you do?
A. Create a read replica.
B. Store the database files in Azure premium file shares.
C. Implement Geo-redundant backup.
D. Configure native MySQL replication.

- PDF answer: Community vote distribution
- DOCX answer: Implement Geo-redundant backup
- Final answer: Community vote distribution

## Q122 (Topic 3, Original #21)

You have an Azure subscription that contains the resources shown in the following table.
Vfl Virtual Network
Publicload balancer Includes a backend pool name BP1
VMSST | Azure Virtual Machine Scale Sets | Included in BP1
Connectedto VNet1
NVA1 Network Virtual Appliance (NVA) Connected to VNet1
Performs security filtering of traffic for
VMSS1
NVA2 Network Virtual Appliance (NVA) Connected to VNet1
Performs security filtering of traffic for
VMSS1
You need to recommend a load balancing solution that will distribute incoming traffic for VMSS1 across NVA1 and NVA2. The solution must
minimize administrative effort.
What should you include in the recommendation?
A. Gateway Load Balancer
B. Azure Front Door
C. Azure Application Gateway
D. Azure Traffic Manager

- PDF answer: A
- DOCX answer: Gateway Load Balancer
- Final answer: A

## Q123 (Topic 3, Original #22)

HOTSPOT
You have the Azure subscriptions shown in the following table.
| Name [ Location | Azure AD tenant
Eas Us
East US contoso-recovery.onmicrosoft.com
Contoso.onmicrosft.com contains a user named User1.
You need to deploy a solution to protect against ransomware attacks. The solution must meet the following requirements:
+ Ensure that all the resources in Sub are backed up by using Azure Backup.
+ Require that User1 first be assigned a role for Sub2 before the user can make major changes to the backup configuration.
What should you create in each subscription? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Sub1: 53
A Recovery Services vault
A Resource Guard
An Azure Site Recovery job
Microsoft Azure Backup Server (MABS)
The Microsoft Azure Recovery Services (MARS) agent
Sub2: he
A Recovery Services vault
A Resource Guard
An Azure Site Recovery job
Microsoft Azure Backup Server (MABS)
The Microsoft Azure Recovery Services (MARS) agent
Answer Area
SUD: — x
A Recovery Services vault
A Resource Guard
An Azure Site Recovery job
Microsoft Azure Backup Server (MABS)

- PDF answer: The Microsoft Azure Recovery Services (MARS) agent
- DOCX answer: A Recovery Service vault, A Resource Guard
- Final answer: The Microsoft Azure Recovery Services (MARS) agent

## Q124 (Topic 3, Original #24)

HOTSPOT
You plan to deploy a containerized web-app that will be hosted in five Azure Kubernetes Service (AKS) clusters. Each cluster will be hosted in a
different Azure region.
You need to provide access to the app from the internet. The solution must meet the following requirements:
+ Incoming HTTPS requests must be routed to the cluster that has the lowest network latency.
« HTTPS traffic to individual pods must be routed via an ingress controller.
+ In the event of an AKS cluster outage, failover time must be minimized.
What should you include in the solution? To answer, select the appropriate options in the answer area
NOTE: Each correct selection is worth one point.
Answer Area
For global load balancing: ~
Azure Front Door
Azure Traffic Manager
Cross-region load balancing in Azure
Standard Load Balancer
As the ingress controller: -
Azure Application Gateway
Azure Standard Load Balancer
Basic Azure Load Balancer
Answer Area
For global load balancing: hd
Azure Front Door,
Azure Traffic Manager

- PDF answer: Cross-region load balancing in Azure
- DOCX answer: Azure Front Door, Azure Application Gateway
- Final answer: Cross-region load balancing in Azure

## Q125 (Topic 3, Original #25)

HOTSPOT -
You have an Azure subscription.
You create a storage account that will store documents.
You need to configure the storage account to meet the following requirements:
- Ensure that retention policies are standardized across the subscription.
« Ensure that data can be purged if the data is copied to an unauthorized location.
Which two settings should you enable? To answer, select the appropriate settings in the answer area.
NOTE: Each correct selection is worth one point.
Recovery
v
[Onin omar |
gp [= Enable soft delete for blobs oo
E
~
Tracking
~ [emerge |
[CT bli range es |
Access control
~ [J enable version-leve! immutability support
Recovery
Merry
[Teubner comres|
[bits rns |

- PDF answer: id
- DOCX answer: Enable operational backup with Azure Backup, Enable permanent delete for soft deleted items.
- Final answer: id

## Q126 (Topic 3, Original #26)

HOTSPOT
You have an Azure subscription.
You are designing a solution for containerized apps. The solution must meet the following requirements:
+ Automatically scale the apps by creating additional instances.
* Minimize administrative effort to maintain nodes and clusters.
« Ensure that containerized apps are highly available across multiple availability zones.
+ Provide a central location for the lifecycle management and storage of container images.
What should you include in the solution? To answer, select the appropriate options in the answer area
NOTE: Each correct selection is worth one point.
Answer Area
Torun the containerized apps: [ [v]
Azure Container Apps
Azure Container Instances
Azure Container Registry
Azure Kubernetes Service (AKS)
For the lifecycle management and storage of container images: rT]
Azure Container Apps
Azure Container Instances
Azure Container Registry
Azure Service Fabric
Answer Area
To run the containerized apps: iM
ATure Contamner Instances
Azure Container Registry

- PDF answer: Azure Kubernetes Service (AKS)
- DOCX answer: Azure Container Apps, Azure Container Registry
- Final answer: Azure Kubernetes Service (AKS)

## Q127 (Topic 3, Original #27)

DRAG DROP
You plan to use Azure Storage to store data assets.
You need to identify the procedure to fail over a general-purpose v2 account as part of a disaster recovery plan. The solution must meet the
following requirements:
- Apps must be able to access the storage account after a failover.
« You must be able to fail back the storage account to the original location.
* Downtime must be minimized.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and
arrange them in the correct order.
Actions Answer Area
After a failover, configure geo-redundant storage (GRS)
replication for the storage account.
Initiate a failover.
Before a failover, configure zone-redundant storage ® ®»
(ZRS) replication for the storage account. © ©
Before a failover, configure geo-redundant storage
(GRS) replication for the storage account.
After a failover, configure zone-redundant storage
(ZRS) replication for the storage account.
Answer Area
Before  tadove, configure geo redundant storage.
(GRS)repicaton for th storage account.

- PDF answer: Aft a failover, configure geo- redundant storage (GRS)
- DOCX answer: - Before a failover, configure geo-redudant storage(GRS) replicantion for the storage account,- Initate a failover,- After a failover, configure geo redundant storage (GRS) replication for the storage account.
- Final answer: Aft a failover, configure geo- redundant storage (GRS)

## Q128 (Topic 4, Original #1)

You have an Azure subscription that contains a Basic Azure virtual WAN named VirtualWAN1 and the virtual hubs shown in the following table.
fa Juswes
You have an ExpressRoute circuit in the US East Azure region.
You need to create an ExpressRoute association to Virtua WAN1.
What should you do first?
A. Upgrade Virtual WANT to Standard.
B. Create a gateway on Hub.
C. Enable the ExpressRoute premium add-on.
D. Create a hub virtual network in US East.

- PDF answer: A
- DOCX answer: YES,YES,NO
- Final answer: A

## Q129 (Topic 4, Original #2)

You have an Azure subscription that contains a storage account.
An application sometimes writes duplicate files to the storage account.
You have a PowerShell script that identifies and deletes duplicate files in the storage account. Currently, the script is run manually after approval
from the operations manager.
You need to recommend a serverless solution that performs the following actions:
c= Runs the script once an hour to identify whether duplicate files exist
== Sends an email notification to the operations manager requesting approval to delete the duplicate files
> Processes an email response from the operations manager specifying whether the deletion was approved
co Runs the script if the deletion was approved
What should you include in the recommendation?
A. Azure Logic Apps and Azure Event Grid
B. Azure Logic Apps and Azure Functions (Voz vored)
C. Azure Pipelines and Azure Service Fabric
D. Azure Functions and Azure Batch

- PDF answer: 8
- DOCX answer: an Azure Cosmos DB that uses multi-region writes
- Final answer: 8

## Q130 (Topic 4, Original #3)

Your company has the infrastructure shown in the following table.
Location | Resource
* Azure subscription named Subscription1
* 20 Azure web apps
On-premises datacenter | + Active Directory domain
«Server running Azure AD Connect
+ Linux computer named Serverl
The on-premises Active Directory domain syncs with Azure Active Directory (Azure AD).
Server1 runs an application named App1 that uses LDAP queries to verify user identities in the on-premises Active Directory domain.
You plan to migrate ServerT to a virtual machine in Subscription.
A company security policy states that the virtual machines and services deployed to Subscription] must be prevented from accessing the on-
premises network.
You need to recommend a solution to ensure that App1 continues to function after the migration. The solution must meet the security policy.
What should you include in the recommendation?
A. Azure AD Application Proxy
B. the Active Directory Domain Services role on a virtual machine
C. an Azure VPN gateway
D. Azure AD Domain Services (Azure AD DS)

- PDF answer: 0
- DOCX answer: a private endpoint
- Final answer: 0

## Q131 (Topic 4, Original #4)

You need to design a solution that will execute custom C# code in response to an event routed to Azure Event Grid. The solution must meet the
following requirements:
=> The executed code must be able to access the private IP address of a Microsoft SQL Server instance that runs on an Azure virtual machine.
* Costs must be minimized.
What should you include in the solution?
A. Azure Logic Apps in the Consumption plan
B. Azure Functions in the Premium plan
C. Azure Functions in the Consumption plan
D. Azure Logic Apps in the integrated service environment

- PDF answer: 8
- DOCX answer: Create an Azure policy definition that uses the deployIfNotExists effect, Create an Azure policy assignment, Invoke a remediation task.
- Final answer: 8

## Q132 (Topic 4, Original #5)

You have an on-premises network and an Azure subscription. The on-premises network has several branch offices.
A branch office in Toronto contains a virtual machine named VM1 that is configured as a file server. Users access the shared files on VM1 from all
the offices.
You need to recommend a solution to ensure that the users can access the shared files as quickly as possible if the Toronto branch office is
inaccessible.
What should you include in the recommendation?
A. a Recovery Services vault and Windows Server Backup
8. Azure blob containers and Azure File Sync
C. a Recovery Services vault and Azure Backup
D. an Azure file share and Azure File Sync

- PDF answer: 0
- DOCX answer: an Azure file share and Azure File Sync
- Final answer: 0

## Q133 (Topic 4, Original #6)

HOTSPOT -
You have an Azure subscription named Subscription? that is linked to a hybrid Azure Active Directory (Azure AD) tenant
You have an on-premises datacenter that does NOT have a VPN connection to Subscription. The datacenter contains a computer named Server1
that has
Microsoft SQL Server 2016 installed. Server is prevented from accessing the internet.
An Azure logic app resource named LogicApp1 requires write access to a database on Server
You need to recommend a solution to provide LogicApp1 with the ability to access Server1.
What should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
onpremises: | [+]
A Web Application Proxy for Windows Server
An Azure AD Application Proxy connector
An On-premises data gateway
Hybrid Connection Manager
Aare: [TT
A connection gateway resource
An Azure Application Gateway
An Azure Event Grid domain
An enterprise application
Answer Area
onpremises: | [+]
A Web Application Proxy for Windows Server
An Azure AD Application Proxy connector
‘An On-premises data gateway
Hybrid Connection Manager

- PDF answer: id =
- DOCX answer: An On premises data gateway, A connection gateway resource
- Final answer: id =

## Q134 (Topic 4, Original #7)

HOTSPOT -
Your company develops a web service that is deployed to an Azure virtual machine named VM1. The web service allows an API to access real
time data from
VMI.
The current virtual machine deployment is shown in the Deployment exhibit.
VM1 VM2
Subnet 1 ProdSubnet
Coo >
VNetl
The chief technology officer (CTO) sends you the following email message: "Our developers have deployed the web service to a virtual machine
named VM1.
Testing has shown that the API is accessible from VM1 and VM2. Our partners must be able to connect to the API over the Internet. Partners will
use this data in applications that they develop.”
You deploy an Azure API Management (APIM) service. The relevant API Management configuration is shown in the API exhibit.
Virtual network Off Internal
Location Virtual network Subnet
West Europe VNetl ProdSubnet
For each of the following statements, select Yes if the statement is true. Otherwise, select No.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Statements Yes No
The API is available to partners over the internet.
The APIM instance can access real-time data from VM1.
A VPN gateway is required for partner access.
Answer Area
Statements Yes No

- PDF answer: 1p. API is available to partners over the internet. |o |
- DOCX answer: YES, YES, NO
- Final answer: 1p. API is available to partners over the internet. |o |

## Q135 (Topic 4, Original #8)

DRAG DROP -
Your company has an existing web app that runs on Azure virtual machines.
You need to ensure that the app is protected from SQL injection attempts and uses a layer-7 load balancer. The solution must minimize
disruptions to the code of the app.
What should you recommend? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or
not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Services Answer Area
Web Application Firewall (WAF) Azure service:
Azure Application Gateway Feature:
Azure Load Balancer
Azure Traffic Manager
SSL offloading
URL-based content routing

- PDF answer: Services Answer Area
- DOCX answer: Azure Application gateway, Web Application Firewall (WAF)
- Final answer: Services Answer Area

## Q136 (Topic 4, Original #9)

You are designing a microservices architecture that will be hosted in an Azure Kuberetes Service (AKS) cluster. Apps that will consume the
microservices will be hosted on Azure virtual machines. The virtual machines and the AKS cluster will reside on the same virtual network.
You need to design a solution to expose the microservices to the consumer apps. The solution must meet the following requirements:
<> Ingress access to the microservices must be restricted to a single private IP address and protected by using mutual TLS authentication.
=o The number of incoming microservice calls must be rate-limited.
=> Costs must be minimized.
What should you include in the solution?
A. Azure App Gateway with Azure Web Application Firewall (WAF)
B. Azure API Management Standard tier with a service endpoint
C. Azure Front Door with Azure Web Application Firewall (WAF)
D. Azure API Management Premium tier with virtual network connection

- PDF answer: 0
- DOCX answer: Azure API Management Premium tier with virtual network connection
- Final answer: 0

## Q137 (Topic 4, Original #10)

You have a .NET web service named Service1 that performs the following tasks:
5 Reads and writes temporary files to the local file system.
=> Writes to the Application event log.
You need to recommend a solution to host Service in Azure. The solution must meet the following requirements:
=» Minimize maintenance overhead.
=> Minimize costs.
What should you include in the recommendation?
A. an Azure App Service web app (ost Voted)
B. an Azure virtual machine scale set
C. an App Service Environment (ASE)
D. an Azure Functions app

- PDF answer: A
- DOCX answer: an Azure App Service web app
- Final answer: A

## Q138 (Topic 4, Original #11)

You have the Azure resources shown in the following table.
| mame [we | toaton |
US-Central-Firewall-policy | Azure Firewall policy Central US
US-East-Firewall-policy Azure Firewall policy East US
EU-Firewall-policy Azure Firewall policy West Europe
USEastfirewall Azure Firewall Central US
USWestfirewall Azure Firewall East US
EUFirewall Azure Firewall ‘West Europe
You need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be
configured as a parent policy for the existing policies.
What is the minimum number of additional Azure Firewall policies you should create?
A0
B.1
c.2
0.3 (mm) —

- PDF answer: D
- DOCX answer: 3
- Final answer: D

## Q139 (Topic 4, Original #12)

Your company has an app named App1 that uses data from the on-premises Microsoft SQL Server databases shown in the following table.
App1 and the data are used on the first day of the month only. The data is not expected to grow more than 3 percent each year.
The company is rewriting App1 as an Azure web app and plans to migrate all the data to Azure.
You need to migrate the data to Azure SQL Database and ensure that the database is only available on the first day of each month
Which service tier should you use?
A. vCore-based General Purpose (fost Voted)
B. DTU-based Standard
C. vCore-based Business Critical
D. DTU-based Basic

- PDF answer: A
- DOCX answer: vCore-based General Purpose
- Final answer: A

## Q140 (Topic 4, Original #13)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Fabric
B. Azure Data Lake
C. Azure Service Bus (ost Voted)
D. Azure Traffic Manager

- PDF answer: C
- DOCX answer: (missing)
- Final answer: C

## Q141 (Topic 4, Original #14)

Your company has 300 virtual machines hosted in a VMware environment. The virtual machines vary in size and have various utilization levels.
You plan to move all the virtual machines to Azure.
You need to recommend how many and what size Azure virtual machines will be required to move the current workloads to Azure. The solution
must minimize administrative effort.
What should you use to make the recommendation?
A. Azure Pricing calculator
B. Azure Advisor
C. Azure Migrate
D. Azure Cost Management

- PDF answer: C
- DOCX answer: Azure Migrate
- Final answer: C

## Q142 (Topic 4, Original #15)

You plan to provision a High Performance Computing (HPC) cluster in Azure that will use a third-party scheduler.
You need to recommend a solution to provision and manage the HPC cluster node
What should you include in the recommendation?
A. Azure Automation
B. Azure CycleCloud
C. Azure Purview
D. Azure Lighthouse

- PDF answer: 8
- DOCX answer: Azure CycleCloud
- Final answer: 8

## Q143 (Topic 4, Original #16)

HOTSPOT -
You are designing an Azure App Service web app.
You plan to deploy the web app to the North Europe Azure region and the West Europe Azure region.
You need to recommend a solution for the web app. The solution must meet the following requirements:
©» Users must always access the web app from the North Europe region, unless the region fails.
> The web app must be available to users if an Azure region is unavailable.
= Deployment costs must be minimized.
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Request routing method: [Tv |
A Traffic Manager profile
Azure Application Gateway
Azure Load Balancer
Request routing configuration: [~~ [+]
Cookie-based session affinity
Performance traffic routing
Priority traffic routing
Weighted traffic routing
Answer Area
Request routing method: [+
A Traffic Manager profile
Azure Application Gateway
Azure Load Balancer

- PDF answer: Request routing configuration: [~~ [+]
- DOCX answer: A Traffic Manager profile, Priority traffic routing
- Final answer: Request routing configuration: [~~ [+]

## Q144 (Topic 4, Original #17)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen
You plan to deploy multiple instances of an Azure web app across several Azure regions.
You need to design an access solution for the app. The solution must meet the following replication requirements:
= Support rate limiting.
c= Balance requests between all instances.
= Ensure that users can access the app in the event of a regional outage.
Solution: You use Azure Traffic Manager to provide access to the app.
Does this meet the goal?
A. Yes
Bo

- PDF answer: 5
- DOCX answer: NO
- Final answer: 5

## Q145 (Topic 4, Original #18)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You plan to deploy multiple instances of an Azure web app across several Azure regions.
You need to design an access solution for the app. The solution must meet the following replication requirements
= Support rate limiting.
c= Balance requests between all instances.
== Ensure that users can access the app in the event of a regional outage.
Solution: You use Azure Load Balancer to provide access to the app.
Does this meet the goal?
A. Yes
Bo

- PDF answer: 5
- DOCX answer: NO
- Final answer: 5

## Q146 (Topic 4, Original #19)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You plan to deploy multiple instances of an Azure web app across several Azure regions.
You need to design an access solution for the app. The solution must meet the following replication requirements:
=> Support rate limiting.
> Balance requests between all instances.
= Ensure that users can access the app in the event of a regional outage.
Solution: You use Azure Application Gateway to provide access to the app.
Does this meet the goal?
A. Yes
B.No (vor)

- PDF answer: 5
- DOCX answer: NO
- Final answer: 5

## Q147 (Topic 4, Original #20)

HOTSPOT -
Your company has two on-premises sites in New York and Los Angeles and Azure virtual networks in the East US Azure region and the West US
Azure region.
Each on-premises site has ExpressRoute Global Reach circuits to both regions.
You need to recommend a solution that meets the following requirements:
=» Outbound traffic to the internet from workloads hosted on the virtual networks must be routed through the closest available on-premises site.
== If an on-premises site fails, traffic from the workloads on the virtual networks to the internet must reroute automatically to the other site.
What should you include in the recommendation? To answer, select the appropriate options in the answer area
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Routing from the virtual networks to the on-premises
locations must be configured by using: v
|Azure default routes
|Border Gateway Protocol (BGP)
|User-defined routes
The automatic routing configuration following a
failover must be handled by using: v
Border Gateway Protocol BGP) |
Hot Standby Routing Protocol (HSRP)
Virtual Router Redundancy Protocol (VRRP)

- PDF answer: Answer Area
- DOCX answer: Border Gateway Protocol (BGP), Border Gateway Protocol (BGP)
- Final answer: Answer Area

## Q148 (Topic 4, Original #21)

HOTSPOT -
You are designing an application that will use Azure Linux virtual machines to analyze video files. The files will be uploaded from corporate offices
that connect to
Azure by using ExpressRoute.
You plan to provision an Azure Storage account to host the files.
You need to ensure that the storage account meets the following requirements:
= Supports video files of upto 7 TB
co Provides the highest availability possible
= Ensures that storage is optimized for the large video files
> Ensures that files from the on-premises network are uploaded by using ExpressRoute
How should you configure the storage account? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Storage account type: v
|Premium files shares
Premium page blobs
|Standard general-purpose v2
Data redundancy: “
Zone-redundant storage (ZRS)
Locally-redundant storage (LRS)
Geo-redundant storage (GRS)
Networking: v
(Azure Route Server
| A private endpoint
|A service endpoint
Answer Area
Storage account type: v
|Premium files shares
‘Premium page blobs
Standard general-purpose v2
Data redundancy: v

- PDF answer: Zone-redundant storage (ZRS)
- DOCX answer: Standard general-purpose v2. Geo redundant storage (GRS), a private endpoint
- Final answer: Zone-redundant storage (ZRS)

## Q149 (Topic 4, Original #22)

HOTSPOT -
A company plans to implement an HTTP-based API to support a web app. The web app allows customers to check the status of their orders.
The API must meet the following requirements:
=> Implement Azure Functions.
=» Provide public read-only operations.
co Prevent write operations.
You need to recommend which HTTP methods and authorization level to configure.
What should you recommend? To answer, configure the appropriate options in the dialog box in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
HTTP methods: v
API methods
GETonly
GET and POST only
GET, POST, and OPTIONS only
Authorization level: v
Function
Anonymous
Admin
Answer Area
HTTP methods: v
API methods
(GETenly

- PDF answer: GET and POST only
- DOCX answer: GET only, Anonymous
- Final answer: GET and POST only

## Q150 (Topic 4, Original #23)

You have an Azure subscription.
You need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the
following requirements:
<> Only allow the creation of the virtual machines in specific regions.
5 Only allow the creation of specific sizes of virtual machines.
What should you include in the recommendation?
A. Azure Resource Manager (ARM) templates
B. Azure Policy (Most Voted)
C. Conditional Access policies
D. role-based access control (RBAC)

- PDF answer: 5
- DOCX answer: Azure Policy
- Final answer: 5

## Q151 (Topic 4, Original #24)

DRAG DROP -
You have an on-premises network that uses an IP address space of 172.16.0.0/16.
You plan to deploy 30 virtual machines to a new Azure subscription.
You identify the following technical requirements:
=» All Azure virtual machines must be placed on the same subnet named Subnet1.
c= All the Azure virtual machines must be able to communicate with all on-premises servers.
5 The servers must be able to communicate between the on-premises network and Azure by using a site-to-site VPN.
You need to recommend a subnet design that meets the technical requirements.
What should you include in the recommendation? To answer, drag the appropriate network addresses to the correct subnets. Each network
address may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Network Addresses | Answer Area
172.16.0.0/16 ee
Subnet: | i
172.16.1.0/27 ad
192.168.0.0/24 Gateway subnet: | i
192.168.1.0/27

- PDF answer: Network Addresses | Answer Area
- DOCX answer: 192.168.0.0/24, 192.168.1.0/27
- Final answer: Network Addresses | Answer Area

## Q152 (Topic 4, Original #25)

You have data files in Azure Blob Storage.
You plan to transform the files and move them to Azure Data Lake Storage.
You need to transform the data by using mapping data flow.
Which service should you use?
A. Azure Databricks
B. Azure Storage Sync
C. Azure Data Factory
D. Azure Data Box Gateway

- PDF answer: Community vote distribution
- DOCX answer: Azure Data Factory
- Final answer: Community vote distribution

## Q153 (Topic 4, Original #26)

You have an Azure subscription.
You need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following
requirements:
c= Minimize the time it takes to provision compute resources during scale-out operations.
== Support autoscaling of Windows Server containers.
Which scaling option should you recommend?
A. Kubernetes version 1.20.2 or newer
B. Virtual nodes with Virtual Kubelet ACI
C. cluster autoscaler (Jost voted)
D. horizontal pod autoscaler

- PDF answer: C
- DOCX answer: cluster autoscaler
- Final answer: C

## Q154 (Topic 4, Original #27)

HOTSPOT -
Your on-premises network contains a file server named Server? that stores 500 GB of data.
You need to use Azure Data Factory to copy the data from Server to Azure Storage.
You add a new data factory.
What should you do next? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Hot Area:
Answer Area
From Server1: v
Install an Azure File Sync agent.
Install a self-hosted integration runtime.
Install the File Server Resource Manager role service.
From the data factory: v
Create apipeline.
Create an Azure Import/Export job.
Provision an Azure-SQL Server Integration Services (SSIS) integration runtime.

- PDF answer: Answer Area
- DOCX answer: Install a self-hosted integration runtime, Create a pipeline
- Final answer: Answer Area

## Q155 (Topic 4, Original #28)

You have an Azure subscription.
You need to recommend an Azure Kubernetes Service (AKS) solution that will use Linux nodes. The solution must meet the following
requirements:
<5 Minimize the time it takes to provision compute resources during scale-out operations.
© Support autoscaling of Linux containers.
=> Minimize administrative effort.
Which scaling option should you recommend?
A. horizontal pod autoscaler
B. cluster autoscaler
C. virtual nodes (Vost Voted)
D. Virtual Kubelet

- PDF answer: C
- DOCX answer: virtual nodes
- Final answer: C

## Q156 (Topic 4, Original #29)

You are designing an order processing system in Azure that will contain the Azure resources shown in the following table.
App Service web app| Processes customer orders
Function1 | Function Checks product availability at vendor 1
Function2 | Function Checks product availability at vendor 2
storage2 Storage account Stores order processing logs
The order processing system will have the following transaction flow:
© A customer will place an order by using App1.
> When the order is received, App1 will generate a message to check for product availability at vendor 1 and vendor 2.
co An integration component will process the message, and then trigger either Function or Function? depending on the type of order.
=> Once a vendor confirms the product availability, a status message for App1 will be generated by Function1 or Function2.
=o All the steps of the transaction will be logged to storage.
Which type of resource should you recommend for the integration component?
A. an Azure Service Bus queue
B. an Azure Data Factory pipeline
C. an Azure Event Grid domain
D. an Azure Event Hubs capture

- PDF answer: (missing)
- DOCX answer: an Azure Service Bus queue
- Final answer: an Azure Service Bus queue

## Q157 (Topic 4, Original #30)

You have 100 Microsoft SQL Server Integration Services (SSIS) packages that are configured to use 10 on-premises SQL Server databases as their
destinations.
You plan to migrate the 10 on-premises databases to Azure SQL Database.
You need to recommend a solution to create Azure-SQL Server Integration Services (SSIS) packages. The solution must ensure that the packages
can target the
SQL Database instances as their destinations.
What should you include in the recommendation?
A. Data Migration Assistant (DMA)
B. Azure Data Factory (Most Voted)
C. Azure Data Catalog
D. SQL Server Migration Assistant (SSMA)

- PDF answer: 8
- DOCX answer: Azure Data Factory
- Final answer: 8

## Q158 (Topic 4, Original #31)

You have an Azure virtual machine named VM1 that runs Windows Server 2019 and contains 500 GB of data files.
You are designing a solution that will use Azure Data Factory to transform the data files, and then load the files to Azure Data Lake Storage.
What should you deploy on VM1 to support the design?
A. the On-premises data gateway
B. the Azure Pipelines agent
C. the self-hosted integration runtime
D. the Azure File Sync agent

- PDF answer: C
- DOCX answer: the self-hosted integration runtime
- Final answer: C

## Q159 (Topic 4, Original #32)

You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.
Your company has a line-of-business (LOB) application that was developed internally.
You need to implement SAML single sign-on (S50) and enforce multi-factor authentication (MFA) when users attempt to access the application
from an unknown location.
Which two features should you include in the solution? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
A. Azure AD Privileged Identity Management (PIM)
B. Azure Application Gateway
C. Azure AD enterprise applications (Most Voted)
D. Azure AD Identity Protection
E. Conditional Access policies (ios Voied)

- PDF answer: CE
- DOCX answer: Azure AD enterprise applications, Conditional Access policies
- Final answer: CE

## Q160 (Topic 4, Original #33)

You plan to automata the deployment of resources to Azure subscriptions.
What is a difference between using Azure Blueprints and Azure Resource Manager (ARM) templates?
A. ARM templates remain connected to the deployed resources.
B. Only blueprints can contain policy definitions.
C. Only ARM templates can contain policy definitions.
D. Blueprints remain connected to the deployed resources.

- PDF answer: D
- DOCX answer: Blueprints remain connected to the deployed resources.
- Final answer: D

## Q161 (Topic 4, Original #35)

You plan to deploy an Azure App Service web app that will have multiple instances across multiple Azure regions.
You need to recommend a load balancing service for the planned deployment The solution must meet the following requirements:
> Maintain access to the app in the event of a regional outage
©» Support Azure Web Application Firewall (WAF).
© Support cookie-based affinity.
= Support URL routing.
What should you include in the recommendation?
A. Azure Front Door (Most Voted)
B. Azure Traffic Manager
C. Azure Application Gateway
D. Azure Load Balancer

- PDF answer: A
- DOCX answer: Azure Front Door
- Final answer: A

## Q162 (Topic 4, Original #36)

HOTSPOT -
You have the Azure resources shown in the following table.
[Name | Type | Description |
VNET1 Virtual network Connected to an on-premises network by using
ExpressRoute
Virtual machine Configured as a DNS server
SQLDB1 Azure SQL Single instance
Database
[PET [Private endpoint Provides connectivity to SQLDB1
contoso.com | Private DNS zone | Linked to VNET1 and contains an A record for
PE1
Public DNS zone | Contains a C NAME record for SQLDB1
You need to design a solution that provides on-premises network connectivity to SQLDB1 through PE1
How should you configure name resolution? To answer select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Azure configuration - 71]
Configure VM1 to forward contoso.com to the public DNS zone
Configure VM1 to forward contoso.com to the Azure-provided DNS at 168.63.129.16
In VNet1, configure a custom DNS server set to the Azure provided DNS at 168.63.129.16
On-premises DNS configuration [—— v|
Forward contoso.com to VM1
Forward contoso.com to the public DNS zone
Forward contoso.com to the Azure-provisioned DNS at 168.63.129.16

- PDF answer: Answer Area
- DOCX answer: Configure VM1 to forward contoso.com to the Azure-provided DNS at 168.63.129.16, Forward contoso.com to VM1
- Final answer: Answer Area

## Q163 (Topic 4, Original #37)

You are designing a microservices architecture that will support a web application.
The solution must meet the following requirements:
c= Deploy the solution on-premises and to Azure.
Support low-latency and hyper-scale operations.
> Allow independent upgrades to each microservice.
= Set policies for performing automatic repairs to the microservices.
You need to recommend a technology.
What should you recommend?
A. Azure Container Instance
B. Azure Logic App
C. Azure Service Fabric (Most Voted)
D. Azure virtual machine scale set

- PDF answer: C
- DOCX answer: Azure Service Fabric
- Final answer: C

## Q164 (Topic 4, Original #38)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
You plan to deploy multiple instances of an Azure web app across several Azure regions.
You need to design an access solution for the app. The solution must meet the following replication requirements:
> Support rate limiting.
= Balance requests between all instances.
= Ensure that users can access the app in the event of a regional outage.
Solution: You use Azure Front Door to provide access to the app.
Does this meet the goal?
A Yes (Tm)
B. No

- PDF answer: A
- DOCX answer: YES
- Final answer: A

## Q165 (Topic 4, Original #39)

You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your
Azure subscription.
What should you include in the recommendation?
A. Azure Activity Log
B. Azure Arc
C. Azure Analysis Services
D. Azure Monitor action groups

- PDF answer: A
- DOCX answer: Azure Activity Log
- Final answer: A

## Q166 (Topic 4, Original #40)

You have an Azure subscription.
You need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the
following requirements:
== Only allow the creation of the virtual machines in specific regions.
== Only allow the creation of specific sizes of virtual machines.
What should you include in the recommendation?
A. Attribute-based access control (ABAC)
B. Azure Policy (Most Voted)
C. Conditional Access policies
D. role-based access control (RBAC)

- PDF answer: 8
- DOCX answer: Azure Policy
- Final answer: 8

## Q167 (Topic 4, Original #41)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
B. Azure Data Lake
C. Azure Service Bus (ost Voted)
D. Azure Blob Storage

- PDF answer: Community vote distribution
- DOCX answer: Azure Service Bus
- Final answer: Community vote distribution

## Q168 (Topic 4, Original #42)

You have 100 devices that write performance data to Azure Blob Storage.
You plan to store and analyze the performance data in an Azure SQL database.
You need to recommend a solution to continually copy the performance data to the Azure SQL database.
What should you include in the recommendation?
A. Azure Data Factory
B. Data Migration Assistant (DMA)
C. Azure Data Box
D. Azure Database Migration Service

- PDF answer: A
- DOCX answer: Azure Data Factory
- Final answer: A

## Q169 (Topic 4, Original #43)

You need to recommend a storage solution for the records of a mission critical application. The solution must provide a Service Level Agreement
(SLA) for the latency of write operations and the throughput.
What should you include in the recommendation?
A. Azure Data Lake Storage Gen2
B. Azure Blob Storage
C. Azure SQL
D. Azure Cosmos DB

- PDF answer: 0
- DOCX answer: Azure Cosmos DB
- Final answer: 0

## Q170 (Topic 4, Original #44)

You are planning a storage solution. The solution must meet the following requirements:
> Support at least 500 requests per second.
=> Support a large image, video, and audio streams.
Which type of Azure Storage account should you provision?
A. standard general-purpose v2
B. premium block blobs
C. premium page blobs
D. premium file shares

- PDF answer: 5
- DOCX answer: premium block blobs
- Final answer: 5

## Q171 (Topic 4, Original #45)

You need to recommend a data storage solution that meets the following requirements:
= Ensures that applications can access the data by using a REST connection
=> Hosts 20 independent tables of varying sizes and usage patterns.
> Automatically replicates the data to a second Azure region
=> Minimizes costs
What should you recommend?
A. an Azure SQL Database elastic pool that uses active geo-replication
B. tables in an Azure Storage account that use geo-redundant storage (GRS)
C. tables in an Azure Storage account that use read-access geo-redundant storage (RA-GRS)
D. an Azure SQL database that uses active geo-replication

- PDF answer: 8
- DOCX answer: tables in an Azure Storage account that use geo-redundant storage (GRS)
- Final answer: 8

## Q172 (Topic 4, Original #46)

HOTSPOT -
You are designing a software as a service (SaaS) application that will enable Azure Active Directory (Azure AD) users to create and publish online
surveys. The
Saas application will have a front-end web app and a back-end web API. The web app will rely on the web API to handle updates to customer
surveys.
You need to design an authorization flow for the Saa$ application. The solution must meet the following requirements:
=> To access the back-end web API, the web app must authenticate by using OAuth 2 bearer tokens.
co The web app must authenticate by using the identities of individual users.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point
Hot Area:
Answer Area
The access tokens will be generated by: ¥.
Azure AD
A web app
A web API
Authorization decisions will be performed by: v
Azure AD
Awebapp
A web API
Answer Area
The access tokens will be generated by: ¥.
Zur D
A web app
A |

- PDF answer: web AP!
- DOCX answer: Azure AD, A web API
- Final answer: web AP!

## Q173 (Topic 4, Original #47)

HOTSPOT -
You plan to create an Azure environment that will contain a root management group and 10 child management groups. Each child management
group will contain five Azure subscriptions. You plan to have between 10 and 30 resource groups in each subscription.
You need to design an Azure governance solution. The solution must meet the following requirements:
=> Use Azure Blueprints to control governance across all the subscriptions and resource groups.
=> Ensure that Blueprints-based configurations are consistent across all the subscriptions and resource groups.
== Minimize the number of blueprint definitions and assignments.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Level at which to define the blueprints: -
The child management groups
The root management group
The subscriptions
Level at which to create the blueprint assignments: 2
The child management groups
The root management group
The subscriptions

- PDF answer: Answer Area
- DOCX answer: The root management group, The subscription
- Final answer: Answer Area

## Q174 (Topic 4, Original #48)

DRAG DROP -
You are designing a virtual machine that will run Microsoft SQL Server and contain two data disks. The first data disk will store log files, and the
second data disk will store data. Both disks are P40 managed disks.
You need to recommend a host caching method for each disk. The method must provide the best overall performance for the virtual machine
‘while preserving the integrity of the SQL data and logs.
Which host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method
may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Select and Place:
Methods Answer Area
None log: | Method
|
Data: Method
ReadWrite

- PDF answer: Methods Answer Area
- DOCX answer: None, ReadOnly
- Final answer: Methods Answer Area

## Q175 (Topic 4, Original #49)

You are designing a solution that calculates 3D geometry from height-map data.
You need to recommend a solution that meets the following requirements:
= Performs calculations in Azure.
<5 Ensures that each node can communicate data to every other node.
©» Maximizes the number of nodes to calculate multiple scenes as fast as possible.
Minimizes the amount of effort to implement the solution.
Which two actions should you include in the recommendation? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
A. Enable parallel file systems on Azure.
B. Create a render farm that uses virtual machines.
C. Create a render farm that uses virtual machine scale sets.
D. Create a render farm that uses Azure Batch.
E. Enable parallel task execution on compute nodes.

- PDF answer: DE
- DOCX answer: Create a render farm that uses Azure Batch., Enable parallel task execution on compute nodes
- Final answer: DE

## Q176 (Topic 4, Original #50)

You have an on-premises application that consumes data from multiple databases. The application code references database tables by using a
combination of the server, database, and table name.
You need to migrate the application data to Azure.
To which two services can you migrate the application data to achieve the goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
A. SQL Server Stretch Database
B. SQL Server on an Azure virtual machine
C. Azure SQL Database
D. Azure SQL Managed Instance

- PDF answer: BD
- DOCX answer: SQL Server on an Azure virtual machine, Azure SQL Managed Instance
- Final answer: BD

## Q177 (Topic 4, Original #51)

HOTSPOT -
You plan to migrate on-premises Microsoft SQL Server databases to Azure.
You need to recommend a deployment and resiliency solution that meets the following requirements:
c= Supports user-initiated backups
> Supports multiple automatically replicated instances across Azure regions
=» Minimizes administrative effort to implement and maintain business continuity
What should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Deployment solution: hd
Azure SQL Managed Instance
SQL Server on Azure Virtual Machines
An Azure SQL Database single database
Resiliency solution: v
Auto-failover group
Active geo-replication
Zone-redundant deployment
Answer Area
Deployment solution: w
Azure SQL Managed Instance
SQL Server on Azure Virtual Machines
An Azure SQL Database single database

- PDF answer: Resiliency solution: v
- DOCX answer: Azure SQL MAnaged Instance, Auto-failover-group
- Final answer: Resiliency solution: v

## Q178 (Topic 4, Original #52)

You need to design a highly available Azure SQL database that meets the following requirements:
c= Failover between replicas of the database must occur without any data loss.
> The database must remain available in the event of a zone outage.
=» Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Managed Instance Business Critical
B. Azure SQL Managed Instance General Purpose
C. Azure SQL Database Business Critical
D. Azure SQL Database Serverless

- PDF answer: 0
- DOCX answer: Azure SQL Database Business Critical
- Final answer: 0

## Q179 (Topic 4, Original #53)

You have an Azure web app that uses an Azure key vault named KeyVault1 in the West US Azure region.
You are designing a disaster recovery plan for KeyVault1.
You plan to back up the keys in KeyVault1.
You need to identify to where you can restore the backup.
What should you identify?
A. any region worldwide
B. the same region only
C. KeyVault1 only
D. the same geography only (ost voted)

- PDF answer: 0
- DOCX answer: the same geography only
- Final answer: 0

## Q180 (Topic 4, Original #54)

You have an on-premises line-of-business (LOB) application that uses a Microsoft SQL Server instance as the backend.
You plan to migrate the on-premises SQL Server instance to Azure virtual machines.
You need to recommend a highly available SQL Server deployment that meets the following requirements:
=» Minimizes costs
Minimizes failover time if a single server fails
What should you include in the recommendation?
A. an Always On availability group that has premium storage disks and a virtual network name (VNN)
B. an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share
C. an Always On availability group that has premium storage disks and a distributed network name (DNN)
D. an Always On Failover Cluster Instance that has a virtual network name (VNN) and a premium file share

- PDF answer: C
- DOCX answer: an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share
- Final answer: C

## Q181 (Topic 4, Original #55)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed
at the same time as the Azure SQL databases.
The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service
instances must reside in the same region.
You need to recommend a solution to meet the regulatory requirement.
Solution: You recommend creating resource groups based on locations and implementing resource locks on the resource groups.
Does this meet the goal?
A. Yes
8. No (Tm)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q182 (Topic 4, Original #56)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed
at the same time as the Azure SQL databases.
The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service
instances must reside in the same region.
You need to recommend a solution to meet the regulatory requirement.
Solution: You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud.
Does this meet the goal?
A. Yes
8. No (Tm)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q183 (Topic 4, Original #57)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed
at the same time as the Azure SQL databases:
The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service
instances must reside in the same region.
You need to recommend a solution to meet the regulatory requirement.
Solution: You recommend using an Azure Policy initiative to enforce the location.
Does this meet the goal?
A Yes (vam)
B.No

- PDF answer: A
- DOCX answer: YES
- Final answer: A

## Q184 (Topic 4, Original #58)

You plan to move a web app named App1 from an on-premises datacenter to Azure.
App1 depends on a custom COM component that is installed on the host server.
You need to recommend a solution to host App1 in Azure. The solution must meet the following requirements:
co App1 must be available to users if an Azure datacenter becomes unavailable.
> Costs must be minimized.
What should you include in the recommendation?
A. In two Azure regions, deploy a load balancer and a web app.
B. In two Azure regions, deploy a load balancer and a virtual machine scale set.
C. Deploy a load balancer and a virtual machine scale set across two availability zones. (oxi vored)
D. In two Azure regions, deploy an Azure Traffic Manager profile and a web app.

- PDF answer: Community vote distribution
- DOCX answer: Deploy a load balancer and a virtual machine scale set across two availability zones
- Final answer: Community vote distribution

## Q185 (Topic 4, Original #59)

You plan to deploy an application named App1 that will run in containers on Azure Kubernetes Service (AKS) clusters. The AKS clusters will be
distributed across four Azure regions.
You need to recommend a storage solution to ensure that updated container images are replicated automatically to all the Azure regions hosting
the AKS clusters.
Which storage solution should you recommend?
A. geo-redundant storage (GRS) accounts
B. Premium SKU Azure Container Registry (oxi vores)
C. Azure Content Delivery Network (CON)
D. Azure Cache for Redis

- PDF answer: 8
- DOCX answer: Premium SKU Azure Container Registry
- Final answer: 8

## Q186 (Topic 4, Original #60)

You have an Azure Active Directory (Azure AD) tenant.
You plan to deploy Azure Cosmos DB databases that will use the SQL API.
You need to recommend a solution to provide specific Azure AD user accounts with read access to the Cosmos DB databases.
What should you include in the recommendation?
A. shared access signatures (SAS) and Conditional Access policies
B. certificates and Azure Key Vault
C. master keys and Azure Information Protection policies
D. a resource token and an Access control (IAM) role assignment

- PDF answer: Community vote distribution
- DOCX answer: a resource token and an Access control (IAM) role assignment
- Final answer: Community vote distribution

## Q187 (Topic 4, Original #61)

You need to recommend an Azure Storage solution that meets the following requirements:
= The storage must support 1 PB of data.
=» The data must be stored in blob storage.
== The storage must support three levels of subfolders.
c= The storage must support access control lists (ACLs).
What should you include in the recommendation?
A. a premium storage account that is configured for block blobs
B. a general purpose v2 storage account that has hierarchical namespace enabled (ost voted)
C. a premium storage account that is configured for page blobs
D. a premium storage account that is configured for file shares and supports large file shares

- PDF answer: 8
- DOCX answer: a general purpose v2 storage account that has hierarchical namespace enabled
- Final answer: 8

## Q188 (Topic 4, Original #62)

HOTSPOT -
You manage a database environment for a Microsoft Volume Licensing customer named Contoso, Ltd. Contoso uses License Mobility through
Software
Assurance.
You need to deploy 50 databases. The solution must meet the following requirements:
= Support automatic scaling.
=> Minimize Microsoft SQL Server licensing costs.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
Purchase model:
DTU
vCore
Azure reserved virtual machine instances
Deployment option:
An Azure SQL managed instance
An Azure SQL Database elastic pool
A SQL Server Always On availability group
Answer Area
Purchase model:

- PDF answer: Azure reserved virtual machine instances
- DOCX answer: vCore, An Azure SQL Database elastic pool
- Final answer: Azure reserved virtual machine instances

## Q189 (Topic 4, Original #63)

You have an on-premises application named App that uses an Oracle database.
You plan to use Azure Databricks to transform and load data from App1 to an Azure Synapse Analytics instance.
You need to ensure that the App1 data is available to Databricks.
Which two Azure services should you include in the solution? Each correct answer presents part of the solution
NOTE: Each correct selection is worth one point.
A. Azure Data Box Gateway
B. Azure Import/Export service
C. Azure Data Lake Storage
D. Azure Data Box Edge
E. Azure Data Factory (Host voted)

- PDF answer: CE
- DOCX answer: Azure Data Lake Storage, Azure Data Factory
- Final answer: CE

## Q190 (Topic 4, Original #64)

HOTSPOT -
You are designing a cost-optimized solution that uses Azure Batch to run two types of jobs on Linux nodes. The first job type will consist of short-
running tasks for a development environment. The second job type will consist of long-running Message Passing Interface (MPI) applications for
a production environment that requires timely job completion.
You need to recommend the pool type and node type for each job type. The solution must minimize compute charges and leverage Azure Hybrid
Benefit whenever possible.
What should you recommend? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:
Answer Area
First job: v
Batch service and dedicated virtual machines
User subscription and dedicated virtual machines
User subscription and low-priority virtual machines
Second job: 2
Batch service and dedicated virtual machines
User subscription and dedicated virtual machines
User subscription and low-priority virtual machines
Answer Area
First job: D2
Batch service and dedicated virtual machines
User subscription and dedicated virtual machines

- PDF answer: [User subscription and low-priority virtual machines |
- DOCX answer: User subsription and low-priority virtual machines, Batch service and dedicated virtual machines
- Final answer: [User subscription and low-priority virtual machines |

## Q191 (Topic 4, Original #65)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
B. Azure Service Fabric
C. Azure Queue Storage
D. Azure Data Lake

- PDF answer: C
- DOCX answer: Azure Queue Storage
- Final answer: C

## Q192 (Topic 4, Original #66)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
B. Azure Service Fabric
C. Azure Queue Storage
D. Azure Application Gateway

- PDF answer: Community vote distribution
- DOCX answer: Azure Queue Storage
- Final answer: Community vote distribution

## Q193 (Topic 4, Original #67)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Hyperscale
B. Azure SQL Database Premium (Most voted)
C. Azure SQL Database Basic
D. Azure SQL Database Standard

- PDF answer: 8
- DOCX answer: Azure SQL Database Premium
- Final answer: 8

## Q194 (Topic 4, Original #68)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages
What should you include in the recommendation?
A. Azure Service Bus (Most Voted)
B. Azure Data Lake
C. Azure Traffic Manager
D. Azure Blob Storage

- PDF answer: A
- DOCX answer: Azure Service Bus
- Final answer: A

## Q195 (Topic 4, Original #69)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Basic
B. Azure SQL Managed Instance General Purpose
C. Azure SQL Database Business Critical
D. Azure SQL Managed Instance Business Critical

- PDF answer: C
- DOCX answer: Azure SQL Database Business Critical
- Final answer: C

## Q196 (Topic 4, Original #70)

You have an Azure subscription.
You need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following
requirements:
« Minimize the time it takes to provision compute resources during scale-out operations
+ Support autoscaling of Windows Server containers.
Which scaling option should you recommend?
A. horizontal pod autoscaler
B. Virtual nodes
C. Kubernetes version 1.20.2 or newer
D. cluster autoscaler (ost Voted)

- PDF answer: Community vote distribution
- DOCX answer: cluster autoscaler
- Final answer: Community vote distribution

## Q197 (Topic 4, Original #71)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Fabric
B. Azure Data Lake
C. Azure Service Bus (ost voted)
D. Azure Application Gateway

- PDF answer: Community vote distribution
- DOCX answer: Azure Service Bus
- Final answer: Community vote distribution

## Q198 (Topic 4, Original #72)

Your company has offices in North America and Europe.
You plan to migrate to Azure.
You need to recommend a networking solution for the new Azure infrastructure. The solution must meet the following requirements:
« The Point-to-Site (P2S) VPN connections of mobile users must connect automatically to the closest Azure region.
« The offices in each region must connect to their local Azure region by using an ExpressRoute circuit.
+ Transitive routing between virtual networks and on-premises networks must be supported.
« The network traffic between virtual networks must be filtered by using FQDNs.
What should you include in the recommendation?
A. Azure Virtual WAN with a secured virtual hub
B. virtual network peering and application security groups
C. virtual network gateways and network security groups (NSGs)
D. Azure Route Server and Azure Network Function Manager

- PDF answer: A
- DOCX answer: Azure Virtual WAN with a secured virtual hub
- Final answer: A

## Q199 (Topic 4, Original #73)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Business Critical
B. Azure SQL Managed Instance Business Critical
C. Azure SQL Database Standard
D. Azure SQL Managed Instance General Purpose

- PDF answer: A
- DOCX answer: Azure SQL Database Business Critical
- Final answer: A

## Q200 (Topic 4, Original #74)

You are designing a point of sale (POS) solution that will be deployed across multiple locations and will use an Azure Databricks workspace in the
Standard tier. The solution will include multiple apps deployed to the on-premises network of each location.
You need to configure the authentication method that will be used by the app to access the workspace. The solution must minimize the
administrative effort associated with staff turnover and credential management.
What should you configure?
A. a managed identity
B. a service principal
C. a personal access token

- PDF answer: 5
- DOCX answer: a service principal
- Final answer: 5

## Q201 (Topic 4, Original #75)

HOTSPOT
You have two Azure AD tenants named contoso.com and fabrikam.com. Each tenant is linked to 50 Azure subscriptions. Contoso.com contains
two users named User and User2.
You need to meet the following requirements:
+ Ensure that User1 can change the Azure AD tenant linked to specific Azure subscriptions.
« If an Azure subscription is liked to a new Azure AD tenant, and no available Azure AD accounts have full subscription-level permissions to the
subscription, elevate the access of User? to the subscription.
The solution must use the principle of least privilege.
Which role should you assign to each user? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
User1: v
Co-administrator
Owner
Service administrator
User2 v
Co-adminisrator
Owner
Service administrator
Answer Area
User: v
| Co-administrator

- PDF answer: [Owner ]
- DOCX answer: Owner, Owner
- Final answer: [Owner ]

## Q202 (Topic 4, Original #76)

Your company has the divisions shown in the following table.
EE Azure Azure AD tenant
subscription
[East [subt  [Conosocom |
Sub contains an Azure App Service web app named App1. App uses Azure AD for single-tenant user authentication. Users from contoso.com
can authenticate to App1.
You need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.
What should you recommend?
A. Configure a Conditional Access policy.
B. Use Azure AD entitlement management to govern external users.
C. Configure the Azure AD provisioning service.
D. Configure Azure AD Identity Protection.

- PDF answer: 5
- DOCX answer: Use Azure AD entitlement management to govern external users.
- Final answer: 5

## Q203 (Topic 4, Original #77)

You have a multi-tier app named App1 and an Azure SQL database named SQL1. The backend service of App writes data to SQL1. Users use the
App1 client to read the data from SQL1.
During periods of high utilization, the users experience delays retrieving the data.
You need to minimize how long it takes for data requests.
What should you include in the solution?
A. Azure Cache for Reds (ost voted)
B. Azure Content Delivery Network (CDN)
C. Azure Data Factory
D. Azure Synapse Analytics

- PDF answer: A
- DOCX answer: Azure Cache for Redis
- Final answer: A

## Q204 (Topic 4, Original #78)

You have an Azure subscription that contains the resources shown in the following table.
Virtual machine | Frontend componentin the Central US Azure region
Virtual machine | Backend componentin the East US Azure region
Virtual machine | Backend componentin the West US 2 Azure region
VNetl Virtual network | Hosts VM1
Vitualnetwork | Foss We |
VNet3 Virtual network | Hosts VM3
You create peering between VNet1 and VNet2 and between VNet1 and VNet3
The virtual machines host an HTTPS-based client/server application and are accessible only via the private IP address of each virtual machine.
You need to implement a load balancing solution for VM2 and VM3. The solution must ensure that if VM2 fails, requests will be routed
automatically to VM3, and if VM3 fails, requests will be routed automatically to VM2.
What should you include in the solution?
A. Azure Firewall Premium
B. Azure Application Gateway v2
C. a cross-region load balancer
D. Azure Front Door Premium

- PDF answer: Community vote distribution
- DOCX answer: Azure Front Door Premium
- Final answer: Community vote distribution

## Q205 (Topic 4, Original #79)

You are designing an app that will include two components. The components will communicate by sending messages via a queue.
You need to recommend a solution to process the messages by using a First in, First out (FIFO) pattern.
What should you include in the recommendation?
A. storage queues with a custom metadata setting
B. Azure Service Bus queues with partitioning enabled
C. Azure Service Bus queues with sessions enabled (ost voted)
D. storage queues with a stored access policy

- PDF answer: Community vote distribution
- DOCX answer: Azure Service Bus queues with sessions enabled
- Final answer: Community vote distribution

## Q206 (Topic 4, Original #80)

HOTSPOT
You need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet the following requirements:
+ Support 15,000 disk I0PS.
+ Support SR-0V.
* Minimize costs.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Virtual machine series: v
DS
INC
INV.
Disk type: v
Standard SSD
Premium SSD
Uttra Disk
Answer Area
Virtual machine series: v

- PDF answer: Disk type: v
- DOCX answer: DS, Premium SSD
- Final answer: Disk type: v

## Q207 (Topic 4, Original #81)

You are developing an app that will use Azure Functions to process Azure Event Hubs events. Request processing is estimated to take between
five and 20 minutes.
You need to recommend a hosting solution that meets the following requirements:
+ Supports estimates of request processing runtimes
+ Supports event-driven autoscaling for the app
Which hosting plan should you recommend?
A. Dedicated
B. Consumption
C. App Service
D. Premium

- PDF answer: D
- DOCX answer: Premium
- Final answer: D

## Q208 (Topic 4, Original #82)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
B. Azure Application Gateway
C. Azure Service Bus (Most Voted)
D. Azure Traffic Manager

- PDF answer: C
- DOCX answer: Azure Service Bus
- Final answer: C

## Q209 (Topic 4, Original #83)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
8. Azure Application Gateway
C. Azure Queue Storage
D. Azure Traffic Manager

- PDF answer: Community vote distribution
- DOCX answer: Azure Queue Storage
- Final answer: Community vote distribution

## Q210 (Topic 4, Original #84)

You need to design a highly available Azure SQL database that meets the following requirements:
Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Basic
B. Azure SQL Database Business Critical (io vores)
C. Azure SQL Database Standard
D. Azure SQL Managed Instance General Purpose

- PDF answer: 8
- DOCX answer: Azure SQL Database Business Critical
- Final answer: 8

## Q211 (Topic 4, Original #85)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Hyperscale
B. Azure SQL Database Premium
C. Azure SQL Database Standard
D. Azure SQL Managed Instance General Purpose

- PDF answer: 8
- DOCX answer: Azure SQL Database Premium
- Final answer: 8

## Q212 (Topic 4, Original #86)

HOTSPOT
You company has offices in New York City, Sydney, Paris, and Johannesburg.
The company has an Azure subscription.
You plan to deploy a new Azure networking solution that meets the following requirements:
+ Connects to ExpressRoute circuits in the Azure regions of East US, Southeast Asia, North Europe, and South Africa
+ Minimizes latency by supporting connection in three regions
- Supports Site-to-site VPN connections
« Minimizes costs
You need to identify the minimum number of Azure Virtual WAN hubs that you must deploy, and which virtual WAN SKU to use.
What should you identify? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Number of Virtual WAN hubs: hd
1
2
3
4
Virtual WAN SKU: x
Basic
Standard
Answer Area
Number of Virtual WAN hubs: £2
1

- PDF answer: =
- DOCX answer: 3, Standard
- Final answer: =

## Q213 (Topic 4, Original #87)

You have an Azure Functions microservice app named App1 that iis hosted in the Consumption plan. App1 uses an Azure Queue Storage trigger.
You plan to migrate App1 to an Azure Kubernetes Service (AKS) cluster.
You need to prepare the AKS cluster to support App1. The solution must meet the following requirements:
+ Use the same scaling mechanism as the current deployment.
+ Support kubenet and Azure Container Networking Interface (CNI) networking.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct answer is worth one point.
A. Configure the horizontal pod autoscaler.
B. Install Virtual Kubelet.
C. Configure the AKS cluster autoscaler.
D. Configure the virtual node add-on.
E. Install Kubernetes-based Event Driven Autoscaling (KEDA). (Most voted)

- PDF answer: AE
- DOCX answer: Configure the horizontal pod autoscaler, Install Kubernetes-based Event Driven Autoscaling (KEDA).
- Final answer: AE

## Q214 (Topic 4, Original #88)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Application Gateway
B. Azure Queue Storage
C. Azure Data Lake
D. Azure Traffic Manager

- PDF answer: 8
- DOCX answer: Azure Queue Storage
- Final answer: 8

## Q215 (Topic 4, Original #89)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Managed Instance General Purpose
B. Azure SQL Database Hyperscale
C. Azure SQL Database Premium
D. Azure SQL Managed Instance Business Critical

- PDF answer: C
- DOCX answer: Azure SQL Database Premium
- Final answer: C

## Q216 (Topic 4, Original #90)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Hyperscale
B. Azure SQL Database Premium (Most voted)
C. Azure SQL Database Basic
D. Azure SQL Database Serverless

- PDF answer: 5
- DOCX answer: Azure SQL Database Premium
- Final answer: 5

## Q217 (Topic 4, Original #91)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
B. Azure Service Bus
C. Azure Blob Storage
D. Azure Service Fabric

- PDF answer: 5
- DOCX answer: Azure Service Bus
- Final answer: 5

## Q218 (Topic 4, Original #92)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Fabric
B. Azure Traffic Manager
C. Azure Queue Storage
D. Azure Notification Hubs

- PDF answer: C
- DOCX answer: Azure Queue Storage
- Final answer: C

## Q219 (Topic 4, Original #93)

You have an on-premises Microsoft SQL Server 2008 instance that hosts a 50-GB database.
You need to migrate the database to an Azure SQL managed instance. The solution must minimize downtime.
What should you use?
A. Azure Migrate
B. Azure Data Studio
C. WANdisco LiveData Platform for Azure
D. SQL Server Management Studio (SSMS)

- PDF answer: (missing)
- DOCX answer: Azure Data Studio
- Final answer: Azure Data Studio

## Q220 (Topic 4, Original #94)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Managed Instance Business Critical
B. Azure SQL Managed Instance General Purpose
C. Azure SQL Database Standard
D. Azure SQL Database Premium

- PDF answer: 0
- DOCX answer: Azure SQL Database Premium
- Final answer: 0

## Q221 (Topic 4, Original #95)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Business Critical (Most Voted)
B. Azure SQL Database Basic
C. Azure SQL Managed Instance General Purpose
D. Azure SQL Database Hyperscale

- PDF answer: A
- DOCX answer: Azure SQL Database Business Critical
- Final answer: A

## Q222 (Topic 4, Original #96)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Fabric
B. Azure Queue Storage
C. Azure Traffic Manager
D. Azure Application Gateway

- PDF answer: 5
- DOCX answer: Azure Queue Storage
- Final answer: 5

## Q223 (Topic 4, Original #97)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Application Gateway
B. Azure Data Lake
C. Azure Queue Storage
D. Azure Blob Storage

- PDF answer: Community vote distribution
- DOCX answer: Azure Queue Storage
- Final answer: Community vote distribution

## Q224 (Topic 4, Original #98)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Blob Storage
B. Azure Data Lake
C. Azure Queue Storage
D. Azure Service Fabric

- PDF answer: Community vote distribution
- DOCX answer: Azure Queue Storage
- Final answer: Community vote distribution

## Q225 (Topic 4, Original #99)

You need to design a highly available Azure SQL database that meets the following requirements:
- Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Serverless
B. Azure SQL Managed Instance General Purpose
C. Azure SQL Database Basic
D. Azure SQL Database Business Critical

- PDF answer: A
- DOCX answer: Azure SQL Database Business Critical
- Final answer: A

## Q226 (Topic 4, Original #100)

You need to design a highly available Azure SQL database that meets the following requirements:
« Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
+ Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Standard
B. Azure SQL Managed Instance General Purpose
C. Azure SQL Database Serverless
D. Azure SQL Database Premium

- PDF answer: 0
- DOCX answer: Azure SQL Database Premium
- Final answer: 0

## Q227 (Topic 4, Original #101)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Notification Hubs
B. Azure Queue Storage
C. Azure Blob Storage
D. Azure Application Gateway

- PDF answer: 8
- DOCX answer: Azure Queue Storage
- Final answer: 8

## Q228 (Topic 4, Original #102)

HOTSPOT
You are developing a multi-tier app named App1 that will be hosted on Azure virtual machines. The peak utilization periods for App1 will be from 8
AM to 9 AM and 4 PM to 5 PM on weekdays.
You need to deploy the infrastructure for App1. The solution must meet the following requirements:
- Support virtual machines deployed to four availability zones across two Azure regions.
+ Minimize costs by accumulating CPU credits during periods of low utilization
What is the minimum number of virtual networks you should deploy, and which virtual machine size should you use? To answer, select the
appropriate options in the answer area.
Answer Area
Number of virtual networks: | v
1
2
3
4
Virtual machine size: v
A-Series
B-Series
D-Series
M-Series
Answer Area
Number of virtual networks: | v
Po
3

- PDF answer: 4
- DOCX answer: 2, B-Series
- Final answer: 4

## Q229 (Topic 4, Original #103)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Bus
B. Azure Blob Storage
C. Azure Notification Hubs
D. Azure Application Gateway

- PDF answer: A
- DOCX answer: Azure Service Bus
- Final answer: A

## Q230 (Topic 4, Original #104)

You have an on-premises Microsoft SQL server named SQL1 that hosts 50 databases.
You plan to migrate SQL1 to Azure SQL Managed Instance.
You need to perform an offline migration of SQL1. The solution must minimize administrative effort.
What should you include in the solution?
A. Azure Migrate
B. Azure Database Migration Service (Tos Voied)
C. SQL Server Migration Assistant (SMA)
D. Data Migration Assistant (DMA)

- PDF answer: 8
- DOCX answer: Azure Database Migration Service
- Final answer: 8

## Q231 (Topic 4, Original #105)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Bus (ost Voted)
B. Azure Data Lake
C. Azure Traffic Manager
D. Azure Notification Hubs

- PDF answer: A
- DOCX answer: Azure Service Bus
- Final answer: A

## Q232 (Topic 4, Original #106)

You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different
cloud services will process customer orders, billing, payment, inventory, and shipping.
You need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.
What should you include in the recommendation?
A. Azure Service Bus (Most Voted)
B. Azure Data Lake
C. Azure Application Gateway
D. Azure Notification Hubs

- PDF answer: A
- DOCX answer: Azure Service Bus
- Final answer: A

## Q233 (Topic 4, Original #107)

You need to design a highly available Azure SQL database that meets the following requirements:
- Failover between replicas of the database must occur without any data loss.
« The database must remain available in the event of a zone outage.
« Costs must be minimized.
Which deployment option should you use?
A. Azure SQL Database Business Critical
B. Azure SQL Database Hyperscale
C. Azure SQL Managed Instance Business Critical
D. Azure SQL Database Standard

- PDF answer: A
- DOCX answer: Azure SQL Database Business Critical
- Final answer: A

## Q234 (Topic 4, Original #108)

DRAG DROP -
You plan to deploy an infrastructure solution that will contain the following configurations:
- External users will access the infrastructure by using Azure Front Door.
« External user access to the backend APIs hosted in Azure Kubernetes Service (AKS) will be controlled by using Azure API Management.
+ External users will be authenticated by an Azure AD B2C tenant that uses OpenlD Connect-based federation with a third-party identity provider.
Which function does each service provide? To answer, drag the appropriate functions to the correct services. Each function may be used once,
more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Functions Answer Area
Protection against Open Web Application
ey 1]
IP filtering on a per-AP! level
Validation of Azure B2C JSON Web
Tokens (JWTs)
Functions Answer Area
Protection against Open Web Application
Security Project (OWASP) vulnerabilities Era Boos Protection against Open Web Application
c . B Security Project (OWASP) vulnerabilities
orrect Answer:
IP filtering on a per-API level
API Management: A rvond Soke il B2C JSON Web
Validation of Azure B2C JSON Web
Tokens (JWTs)

- PDF answer: (missing)
- DOCX answer: Protection against Open Web Application Security Project (OWASP) vulnerablilties
- Final answer: Protection against Open Web Application Security Project (OWASP) vulnerablilties

## Q235 (Topic 4, Original #109)

Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that
might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.
After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
Your company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed
at the same time as the Azure SQL databases.
The company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service
instances must reside in the same region.
You need to recommend a solution to meet the regulatory requirement.
Solution: You recommend using an Azure Policy initiative to enforce the location of resource groups.
Does this meet the goal?
A. Yes
8 Nom)

- PDF answer: 8
- DOCX answer: NO
- Final answer: 8

## Q236 (Topic 4, Original #110)

Your on-premises datacenter contains a server that runs Linux and hosts a Java app named App1. App has the following characteristics:
+ App is an interactive app that users access by using HTTPS connections.
+ The number of connections to App1 changes significantly throughout the day.
+ App1 runs multiple concurrent instances.
+ App1 requires major changes to run in a container.
You plan to migrate App1 to Azure.
You need to recommend a compute solution for App1. The solution must meet the following requirements:
+ The solution must run multiple instances of App1.
- The number of instances must be managed automatically depending on the load.
+ Administrative effort must be minimized.
What should you include in the recommendation?
A. Azure Batch
B. Azure App Service
C. Azure Kubernetes Service (AKS)
D. Azure Virtual Machine Scale Sets

- PDF answer: 8
- DOCX answer: Azure App Service
- Final answer: 8

## Q237 (Topic 4, Original #111)

HOTSPOT
You have an Azure App Service web app named Webapp1 that connects to an Azure SQL database named DB1. Webapp1 and DB are deployed to
the East US Azure region.
You need to ensure that all the traffic between Webapp1 and DB1 is sent via a private connection.
What should you do? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
Create a virtual network that contains at least: i
1 subnet
2 subnets
3 subnets
From the virtual network, configure name resolution to use: -
A private DNS zone
A public DNS zone
The Azure DNS Private Resolver
Answer Area
Create a virtual network that contains at least: ~
2 subnets

- PDF answer: 3 sublets
- DOCX answer: 1 subnet, A private DNS zone
- Final answer: 3 sublets

## Q238 (Topic 4, Original #112)

HOTSPOT
Your on-premises network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1. Serverl
contains an app named App1 that uses AD DS authentication. Remote users access App1 by using a VPN connection to the on-premises network.
You have an Azure AD tenant that syncs with the AD DS domain by using Azure AD Connect.
You need to ensure that the remote users can access App1 without using a VPN. The solution must meet the following requirements:
+ Ensure that the users authenticate by using Azure Multi-Factor Authentication (MFA)
+ Minimize administrative effort.
What should you include in the solution? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
In Azure AD: or
A managed identity
| An access package
An app registration
An enterprise application
On-premises: v
A server that runs Windows Server and has the Azure AD Application Proxy connector installed
A server that runs Windows Server and has the on-premises data gateway (standard mode) installed
| A server that runs Windows Server and has the Web Application Proxy role service installed
Answer Area
In Azure AD: — =
‘A managed identity
An access package

- PDF answer: Ap 200 registration
- DOCX answer: An enterprise application, A server that runs Windows Server and has the Azure AD Application Proxy connector installed
- Final answer: Ap 200 registration

## Q239 (Topic 4, Original #113)

You have an Azure subscription that contains an Azure Kubernetes Service (AKS) instance named AKS1. AKS1 hosts microservice-based APIs that
are configured to listen on non-default HTTP ports.
You plan to deploy a Standard tier Azure API Management instance named APIM1 that will make the APIs available to external users.
You need to ensure that the AKS1 APIs are accessible to APIM1. The solution must meet the following requirements:
+ Implement MTLS authentication between APIM1 and AKS1
+ Minimize development effort
* Minimize costs.
What should you do?
A. Implement an external load balancer on AKS1
8. Redeploy APIM1 to the virtual network that contains AKST.
C. Implement an ExternalName service on AKST
D. Deploy an ingress controller to AKS1.

- PDF answer: Community vote distribution
- DOCX answer: Deploy an ingress controller to AKS1.
- Final answer: Community vote distribution

## Q240 (Topic 4, Original #114)

HOTSPOT
You need to recommend a solution to integrate Azure Cosmos DB and Azure Synapse. The solution must meet the following requirements:
+ Traffic from an Azure Synapse workspace to the Azure Cosmos DB account must be sent via the Microsoft backbone network.
« Traffic from the Azure Synapse workspace to the Azure Cosmos DB account must NOT be routed over the internet.
+ Implementation effort must be minimized
What should you include in the recommendation? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Answer Area
When provisioning the Azure Synapse workspace: -
Configure a dedicated managed virtual network.
Disable public network access to the workspace endpoints.
Enable the use of the Azure AD authentication.
When configuring the Azure Cosmos DB account, enable: =
Managed private endpoints
Server-level firewall rules
Service endpoint policies
Answer Area
When provisioning the Azure Synapse workspace: ER
| DISSle PUDTC REMOTE Cees To The WOTRSpace endpoints.

- PDF answer: Enable the use of the Azure AD authentication.
- DOCX answer: Configure a dedicated managemd virtual network, Managed private endpoints.
- Final answer: Enable the use of the Azure AD authentication.

## Q241 (Topic 4, Original #115)

You have an Azure subscription that contains an Azure Cosmos DB for NoSQL account named account] and an Azure Synapse Analytics
workspace named Workspace. The account] account contains a container named Contained that has the analytical store enabled.
You need to recommend a solution that will process the data stored in Contained in near-real-time (NRT) and output the results to a data
warehouse in Workspace1 by using a runtime engine in the workspace. The solution must minimize data movement.
Which pool in Workspace should you use?
A. Apache Spark
B. serverless SQL
C. dedicated SQL
D. Data Explorer

- PDF answer: A
- DOCX answer: Apache Spark
- Final answer: A

## Q242 (Topic 4, Original #116)

DRAG DROP -
You have an on-premises datacenter named Site. Site1 contains a VMware vSphere cluster named Cluster? that hosts 100 virtual machines.
Cluster is managed by using VMware vCenter.
You have an Azure subscription named Sub1.
You plan to migrate the virtual machines from Cluster to Sub
You need to identify which resources are required to run the virtual machines in Azure. The solution must minimize administrative effort.
What should you configure? To answer, drag the appropriate resources to the correct targets. Each resource may be used once, more than once, or
not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
Resources Answer Area
An Azure Migrate project
An Azure VMware Solution private cloud
An Azure VMware Solution host

- PDF answer: Resources Answer Area
- DOCX answer: An Azure MIgrate project, An Azure Migrate appliance
- Final answer: Resources Answer Area

