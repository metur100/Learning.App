# AZ-104 Extracted Questions and Answers

- Notes read: 558
- Unique paired entries: 558

## Q1 (Topic 1, Original #1)

Your company has serval departments. Each department has a number of virtual machines (VMs).
 The company has an Azure subscription that contains a resource group named RG1.
 All VMs are located in RG1.
 You want to associate each VM with its respective department.
 What should you do?

- [ ] A. Create Azure Management Groups for each department.
- [ ] B. Create a resource group for each department
- [x] C. Assign tags to the virtual machines.
- [ ] D. Modify the settings of the virtual machines.

## Q2 (Topic 1, Original #2)

Your company has an Azure Active Directory (Azure AD) subscription.
 You want to implement an Azure AD conditional access policy.
 The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.
 Solution: You access the multi-factor authentication page to alter the user settings.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q3 (Topic 1, Original #3)

Your company has an Azure Active Directory (Azure AD) subscription.
 You want to implement an Azure AD conditional access policy.
 The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.
 Solution: You access the Azure portal to alter the session control of the Azure AD conditional access policy.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q4 (Topic 1, Original #4)

Your company has an Azure Active Directory (Azure AD) subscription.
 You want to implement an Azure AD conditional access policy.
 The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.
 Solution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy.
 Does the solution meet the goal?

- [x] A. Yes
- [ ] B. No

## Q5 (Topic 1, Original #5)

You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription.
 You are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA).
 Which of the following should you use to create the virtual machine?

- [ ] A. The New-AzureRmVm cmdlet.
- [ ] B. The New-AzVM cmdlet
- [ ] C. The Create-AzVM cmdlet
- [x] D. The az vm create command

## Q6 (Topic 1, Original #6)

Your company makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.
 After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.
 To achieve this, the Per Enabled User setting must be set for the usage model.
 Solution: You reconfigure the existing usage model via the Azure portal.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q7 (Topic 1, Original #7)

Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.
 After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.
 To achieve this, the Per Enabled User setting must be set for the usage model.
 Solution: You reconfigure the existing usage model via the Azure CLI.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q8 (Topic 1, Original #8)

Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.
 After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.
 To achieve this, the Per Enabled User setting must be set for the usage model.
 Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q9 (Topic 1, Original #9)

Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active
 Directory domain.
 You have a server named DirSync1 that is configured as a DirSync server.
 You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.
 Solution: You run the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q10 (Topic 1, Original #10)

Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active
 Directory domain.
 You have a server named DirSync1 that is configured as a DirSync server.
 You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.
 Solution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q11 (Topic 1, Original #11)

Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active
 Directory domain.
 You have a server named DirSync1 that is configured as a DirSync server.
 You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.
 Solution: You restart the NetLogon service on a domain controller.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q12 (Topic 1, Original #12)

Your company has a Microsoft Azure subscription.
 The company has datacenters in Los Angeles and New York.
 You are configuring the two datacenters as geo-clustered sites for site resiliency.
 You need to recommend an Azure storage redundancy option.
 You have the following data storage requirements:
 ✑ Data must be stored on multiple nodes.
 ✑ Data must be stored on nodes in separate geographic locations.
 ✑ Data can be read from the secondary location as well as from the primary location.
 Which of the following Azure stored redundancy options should you recommend?

- [ ] A. Geo-redundant storage
- [x] B. Read-only geo-redundant storage
- [ ] C. Zone-redundant storage
- [ ] D. Locally redundant storage

## Q13 (Topic 1, Original #13)

Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.
 A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.
 You want to review the ARM template that was used by Jon Ross.
 Solution: You access the Virtual Machine blade.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q14 (Topic 1, Original #14)

Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.
 A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.
 You want to review the ARM template that was used by Jon Ross.
 Solution: You access the Resource Group blade.
 Does the solution meet the goal?

- [x] A. Yes
- [ ] B. No

## Q15 (Topic 1, Original #15)

Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.
 A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.
 You want to review the ARM template that was used by Jon Ross.
 Solution: You access the Container blade.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q16 (Topic 1, Original #16)

Your company has three virtual machines (VMs) that are included in an availability set.
 You try to resize one of the VMs, which returns an allocation failure message.
 It is imperative that the VM is resized.
 Which of the following actions should you take?

- [ ] A. You should only stop one of the VMs.
- [ ] B. You should stop two of the VMs.
- [x] C. You should stop all three VMs
- [ ] D. You should remove the necessary VM from the availability set.

## Q17 (Topic 1, Original #17)

You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM.
 You need to make sure that your strategy allows for the virtual machines to be offline for the least amount of time possible.
 Which of the following is the action you should take FIRST?

- [ ] A. Stop the VM that includes the data disk.
- [ ] B. Stop the VM that the data disk must be attached to.
- [x] C. Detach the data disk.
- [ ] D. Delete the VM that includes the data disk.

## Q18 (Topic 1, Original #18)

Your company has an Azure subscription.
 You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set.
 You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance.
 Which of the following is the value that you should configure for the platformFaultDomainCount property?

- [ ] A. 10
- [ ] B. 30
- [ ] C. Min Value
- [x] D. Max Value

## Q19 (Topic 1, Original #19)

Your company has an Azure subscription.
 You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set.
 You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance.
 Which of the following is the value that you should configure for the platformUpdateDomainCount property?

- [ ] A. 10
- [x] B. 20
- [ ] C. 30
- [ ] D. 40

## Q20 (Topic 1, Original #20)

DRAG DROP -
  You have downloaded an Azure Resource Manager (ARM) template to deploy numerous virtual machines (VMs). The ARM template is based on a current VM, but must be adapted to reference an administrative password.
 You need to make sure that the password cannot be stored in plain text.
 You are preparing to create the necessary components to achieve your goal.
 Which of the following should you create to achieve your goal? Answer by dragging the correct option from the list to the answer area.

- [x] A. An Azure Key Vault
- [ ] B. An Azure Storage account
- [ ] C. Entra ID Identity Protection
- [x] D. An access policy
- [ ] E. An Azure policy

## Q21 (Topic 1, Original #21)

Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain.
 The on-premise virtual environment consists of virtual machines (VMs) running on Windows Server 2012 R2 Hyper-V host servers.
 You have created some PowerShell scripts to automate the configuration of newly created VMs. You plan to create several new VMs.
 You need a solution that ensures the scripts are run on the new VMs.
 Which of the following is the best solution?

- [x] A. Configure a SetupComplete.cmd batch file in the %windir%\setup\scripts directory.
- [ ] B. Configure a Group Policy Object (GPO) to run the scripts as logon scripts.
- [ ] C. Configure a Group Policy Object (GPO) to run the scripts as startup scripts.
- [ ] D. Place the scripts in a new virtual hard disk (VHD).

## Q22 (Topic 1, Original #22)

Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain.
 You plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software requirements.
 You configure a reference VM in the on-premise virtual environment. You then generalize the VM to create an image.
 You need to upload the image to Azure to ensure that it is available for selection when you create the new Azure VMs.
 Which PowerShell cmdlets should you use?

- [ ] A. Add-AzVM
- [x] B. Add-AzVhd
- [ ] C. Add-AzImage
- [ ] D. Add-AzImageDataDisk

## Q23 (Topic 1, Original #23)

DRAG DROP -   Your company has an Azure subscription that includes a number of Azure virtual machines (VMs), which are all part of the same virtual network.   Your company also has an on-premises Hyper-V server that hosts a VM, named VM1, which must be replicated to Azure.   Which of the following objects that must be created to achieve this goal? Answer by dragging the correct option from the list to the answer area.   Select and Place:
{{img:https://www.examtopics.com/assets/media/exam-media/04223/0002200001.png}}

- [x] A. Hyper-V site
- [ ] B. Storage acount
- [x] C. Azure Recovery Service Vault
- [ ] D. Azure Traffic Manager Instance
- [x] E. Replication policy

## Q24 (Topic 1, Original #24)

Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.
 VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.
 You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between
 VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.
 You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.
 Solution: You choose the Allow gateway transit setting on VirtualNetworkA.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q25 (Topic 1, Original #25)

Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.
 VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.
 You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between
 VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.
 You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.
 Solution: You choose the Allow gateway transit setting on VirtualNetworkB.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q26 (Topic 1, Original #26)

Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.
 VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.
 You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between
 VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.
 You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.
 Solution: You download and re-install the VPN client configuration package on the Windows 10 workstation.
 Does the solution meet the goal?

- [x] A. Yes
- [ ] B. No

## Q27 (Topic 1, Original #27)

Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1.
 The company has users that work remotely. The remote workers require access to the VMs on VNet1.
 You need to provide access for the remote workers.
 What should you do?

- [ ] A. Configure a Site-to-Site (S2S) VPN.
- [ ] B. Configure a VNet-toVNet VPN.
- [x] C. Configure a Point-to-Site (P2S) VPN.
- [ ] D. Configure DirectAccess on a Windows Server 2012 server VM.
- [ ] E. Configure a Multi-Site VPN

## Q28 (Topic 1, Original #28)

Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).
 You need to configure an Azure internal load balancer as a listener for the availability group.
 Solution: You create an HTTP health probe on port 1433.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q29 (Topic 1, Original #29)

Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).
 You need to configure an Azure internal load balancer as a listener for the availability group.
 Solution: You set Session persistence to Client IP.
 Does the solution meet the goal?

- [ ] A. Yes
- [x] B. No

## Q30 (Topic 1, Original #30)

Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).
 You need to configure an Azure internal load balancer as a listener for the availability group.
 Solution: You enable Floating IP.
 Does the solution meet the goal?

- [x] A. Yes
- [ ] B. No

## Q31 (Topic 1, Original #31)

Your company has two on-premises servers named SRV01 and SRV02. Developers have created an application that runs on SRV01. The application calls a service on SRV02 by IP address.
 You plan to migrate the application on Azure virtual machines (VMs). You have configured two VMs on a single subnet in an Azure virtual network.
 You need to configure the two VMs with static internal IP addresses.
 What should you do?

- [ ] A. Run the New-AzureRMVMConfig PowerShell cmdlet.
- [ ] B. Run the Set-AzureSubnet PowerShell cmdlet.
- [x] C. Modify the VM properties in the Azure Management Portal.
- [ ] D. Modify the IP properties in Windows Network and Sharing Center.
- [ ] E. Run the Set-AzureStaticVNetIP PowerShell cmdlet.

## Q32 (Topic 1, Original #32)

Your company has an Azure Active Directory (Azure AD) subscription.
 You need to deploy five virtual machines (VMs) to your company's virtual network subnet.
 The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical.
 Which of the following is the least amount of network interfaces needed for this configuration?

- [x] A. 5
- [ ] B. 10
- [ ] C. 20
- [ ] D. 40

## Q33 (Topic 1, Original #33)

Your company has an Azure Active Directory (Azure AD) subscription.
 You need to deploy five virtual machines (VMs) to your company's virtual network subnet.
 The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical.
 Which of the following is the least amount of security groups needed for this configuration?

- [ ] A. 4
- [ ] B. 3
- [ ] C. 2
- [x] D. 1

## Q34 (Topic 1, Original #34)

Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.
 One of the VMs is backed up every day using Azure Backup Instant Restore.
 When the VM becomes infected with data encrypting ransomware, you decide to recover the VM's files.
 Which of the following is TRUE in this scenario?

- [ ] A. You can only recover the files to the infected VM.
- [x] B. You can recover the files to any VM within the company's subscription.
- [ ] C. You can only recover the files to a new VM.
- [ ] D. You will not be able to recover the files.

## Q35 (Topic 1, Original #35)

Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.
 One of the VMs is backed up every day using Azure Backup Instant Restore.
 When the VM becomes infected with data encrypting ransomware, you are required to restore the VM.
 Which of the following actions should you take?

- [ ] A. You should restore the VM after deleting the infected VM.
- [ ] B. You should restore the VM to any VM within the company's subscription.
- [x] C. You should restore the VM to a new Azure VM.
- [ ] D. You should restore the VM to an on-premise Windows device.

## Q36 (Topic 1, Original #36)

You administer a solution in Azure that is currently having performance issues.
 You need to find the cause of the performance issues pertaining to metrics on the Azure infrastructure.
 Which of the following is the tool you should use?

- [ ] A. Azure Traffic Analytics
- [x] B. Azure Monitor
- [ ] C. Azure Activity Log
- [ ] D. Azure Advisor

## Q37 (Topic 1, Original #37)

Your company has an Azure subscription that includes a Recovery Services vault.
 You want to use Azure Backup to schedule a backup of your company's virtual machines (VMs) to the Recovery Services vault.
 Which of the following VMs can you back up? Choose all that apply.

- [x] A. VMs that run Windows 10.
- [x] B. VMs that run Windows Server 2012 or higher.
- [x] C. VMs that have NOT been shut down.
- [x] D. VMs that run Debian 8.2+.
- [x] E. VMs that have been shut down.

## Q38 (Topic 1, Original #38)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.
 You have a CSV file that contains the names and email addresses of 500 external users.
 You need to create a guest user account in contoso.com for each of the 500 external users.
 Solution: You create a PowerShell script that runs the New-AzureADUser cmdlet for each user.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q39 (Topic 1, Original #39)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.
 You have a CSV file that contains the names and email addresses of 500 external users.
 You need to create a guest user account in contoso.com for each of the 500 external users.
 Solution: From Azure AD in the Azure portal, you use the Bulk create user operation.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q40 (Topic 1, Original #40)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.
 You have a CSV file that contains the names and email addresses of 500 external users.
 You need to create a guest user account in contoso.com for each of the 500 external users.
 Solution: You create a PowerShell script that runs the New-AzureADMSInvitation cmdlet for each external user.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q41 (Topic 2, Original #1)

HOTSPOT -
You have an Azure subscription named Subscription1 that contains a resource group named RG1.
In RG1, you create an internal load balancer named LB1 and a public load balancer named LB2.
You need to ensure that an administrator named Admin1 can manage LB1 and LB2. The solution must follow the principle of least privilege.
Which role should you assign to Admin1 for each task? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:

{{img:/exam-media/az-104/T2/0003600001.jpg}}

- [ ] A. Contributor on LB1
- [x] B. Network contributor on LB1
- [ ] C. Owner on LB1
- [ ] D. Owner on LB2
- [x] E. Network Contributor on LB2

## Q42 (Topic 2, Original #2)

You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com and an Azure Kubernetes Service (AKS) cluster named AKS1.
 An administrator reports that she is unable to grant access to AKS1 to the users in contoso.com.
 You need to ensure that access to AKS1 can be granted to the contoso.com users.
 What should you do first?

- [ ] A. From contoso.com, modify the Organization relationships settings.
- [x] B. From contoso.com, create an OAuth 2.0 authorization endpoint.
- [ ] C. Recreate AKS1.
- [ ] D. From AKS1, create a namespace.

## Q43 (Topic 2, Original #3)

You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com.
 You plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1.
 You need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days.
 Which two groups should you create? Each correct answer presents a complete solution.
 NOTE: Each correct selection is worth one point.

- [x] A. a Microsoft 365 group that uses the Assigned membership type
- [ ] B. a Security group that uses the Assigned membership type
- [x] C. a Microsoft 365 group that uses the Dynamic User membership type
- [ ] D. a Security group that uses the Dynamic User membership type
- [ ] E. a Security group that uses the Dynamic Device membership type

## Q44 (Topic 2, Original #4)

You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table:

{{img:/exam-media/az-104/T2/0003900001.png}}

 User3 is the owner of Group1.
 Group2 is a member of Group1.
 You configure an access review named Review1 as shown in the following exhibit:

{{img:/exam-media/az-104/T2/0004000001-e122a8a0d4d3523af02ba45380ee892bd89f341e.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. User3 can perform an access review of User1
- [ ] B. User3 can perform an access review of UserA
- [ ] C. User3 can perform an access review of UserB

## Q45 (Topic 2, Original #5)

HOTSPOT -
 You have the Azure management groups shown in the following table:

{{img:/exam-media/az-104/T2/0004200001.png}}

 You add Azure subscriptions to the management groups as shown in the following table:

{{img:/exam-media/az-104/T2/0004200002.png}}

 You create the Azure policies shown in the following table:

{{img:/exam-media/az-104/T2/0004200003.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. You can create a virtual network in Subscription1
- [ ] B. You can create a virtual machine in Subscription2
- [ ] C. You can add Subscription1 to ManagementGroup11

## Q46 (Topic 2, Original #6)

You have an Azure policy as shown in the following exhibit:

{{img:/exam-media/az-104/T2/0004500001-4a3a2705483aaab78f28ec59a529ea8c5dfcf34b.png}}

 What is the effect of the policy?

- [ ] A. You are prevented from creating Azure SQL servers anywhere in Subscription 1.
- [x] B. You can create Azure SQL servers in ContosoRG1 only.
- [ ] C. You are prevented from creating Azure SQL Servers in ContosoRG1 only.
- [ ] D. You can create Azure SQL servers in any resource group within Subscription 1.

## Q47 (Topic 2, Original #7)

HOTSPOT -
 You have an Azure subscription that contains the resources shown in the following table:

{{img:/exam-media/az-104/T2/0004600001-2928bf7554bb2115aa77e1efcb1e244078cbc4fd.png}}

 You assign a policy to RG6 as shown in the following table:
 o RG6, you apply the tag: RGroup: RG6.
 You deploy a virtual network named VNET2 to RG6.
 Which tags apply to VNET1 and VNET2? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0004700001.png}}

- [ ] A. VNET1: None
- [x] B. VNET1: Department: D1 only
- [ ] C. VNET1: D1, and Label:Value1 only
- [ ] D. VNET2: None
- [x] E. VNET2: Label:Value1 only

## Q48 (Topic 2, Original #8)

You have an Azure subscription named AZPT1 that contains the resources shown in the following table:

{{img:/exam-media/az-104/T2/0004900001.png}}

 You create a new Azure subscription named AZPT2.
 You need to identify which resources can be moved to AZPT2.
 Which resources should you identify?

- [x] A. VM1, storage1, VNET1, and VM1Managed only
- [ ] B. VM1 and VM1Managed only
- [ ] C. VM1, storage1, VNET1, VM1Managed, and RVAULT1
- [ ] D. RVAULT1 only

## Q49 (Topic 2, Original #9)

You recently created a new Azure subscription that contains a user named Admin1.
 Admin1 attempts to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by using Azure
 PowerShell and receives the following error message: `User failed validation to purchase resources. Error message: `Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.`
 You need to ensure that Admin1 can deploy the Marketplace resource successfully.
 What should you do?

- [ ] A. From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet
- [ ] B. From the Azure portal, register the Microsoft.Marketplace resource provider
- [x] C. From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet
- [ ] D. From the Azure portal, assign the Billing administrator role to Admin1

## Q50 (Topic 2, Original #10)

You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.
 You create a new user account named AdminUser1.
 You need to assign the User administrator administrative role to AdminUser1.
 What should you do from the user account properties?

- [ ] A. From the Licenses blade, assign a new license
- [x] B. From the Directory role blade, modify the directory role
- [ ] C. From the Groups blade, invite the user account to a new group

## Q51 (Topic 2, Original #11)

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains 100 user accounts.
 You purchase 10 Azure AD Premium P2 licenses for the tenant.
 You need to ensure that 10 users can use all the Azure AD Premium features.
 What should you do?

- [x] A. From the Licenses blade of Azure AD, assign a license
- [ ] B. From the Groups blade of each user, invite the users to a group
- [ ] C. From the Azure AD domain, add an enterprise application
- [ ] D. From the Directory role blade of each user, modify the directory role

## Q52 (Topic 2, Original #12)

You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager.
 Subscription1 contains a virtual machine named VM1.
 You need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent.
 What should you do first?

- [ ] A. Create an automation runbook
- [ ] B. Deploy a function app
- [x] C. Deploy the IT Service Management Connector (ITSM)
- [ ] D. Create a notification

## Q53 (Topic 2, Original #13)

You sign up for Azure Active Directory (Azure AD) Premium P2.
 You need to add a user named   admin1@contoso.com   as an administrator on all the computers that will be joined to the Azure AD domain.
 What should you configure in Azure AD?

- [x] A. Device settings from the Devices blade
- [ ] B. Providers from the MFA Server blade
- [ ] C. User settings from the Users blade
- [ ] D. General settings from the Groups blade

## Q54 (Topic 2, Original #14)

You have Azure Active Directory tenant named Contoso.com that includes following users:

{{img:/exam-media/az-104/T2/0005300004.png}}

 Contoso.com includes following Windows 10 devices:

{{img:/exam-media/az-104/T2/0005300005.png}}

 You create following security groups in Contoso.com:

{{img:/exam-media/az-104/T2/0005400001-c06b6be2e9cac3290a6ef3fe22a40955065c232e.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. User1 can add Device2 to Group1
- [x] B. User2 can add Device1 to Group1
- [ ] C. User2 can add Device2 to Group2

## Q55 (Topic 2, Original #15)

You have an Azure subscription that contains a resource group named RG26.
 RG26 is set to the West Europe location and is used to create temporary resources for a project. RG26 contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/0005600001.jpg}}

 SQLDB01 is backed up to RGV1.
 When the project is complete, you attempt to delete RG26 from the Azure portal. The deletion fails.
 You need to delete RG26.
 What should you do first?

- [ ] A. Delete VM1
- [ ] B. Stop VM1
- [x] C. Stop the backup of SQLDB01
- [ ] D. Delete sa001

## Q56 (Topic 2, Original #16)

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.
 Subscription1 has a user named User1. User1 has the following roles:
 ✑ Reader
 ✑ Security Admin
 ✑ Security Reader
 You need to ensure that User1 can assign the Reader role for VNet1 to other users.
 What should you do?

- [ ] A. Remove User1 from the Security Reader and Reader roles for Subscription1.
- [x] B. Assign User1 the User Access Administrator role for VNet1.
- [ ] C. Assign User1 the Network Contributor role for VNet1.
- [ ] D. Assign User1 the Network Contributor role for RG1.

## Q57 (Topic 2, Original #17)

You have an Azure Active Directory (Azure AD) tenant named contosocloud.onmicrosoft.com.
 Your company has a public DNS zone for contoso.com.
 You add contoso.com as a custom domain name to Azure AD.
 You need to ensure that Azure can verify the domain name.
 Which type of DNS record should you create?

- [x] A. MX
- [ ] B. NSEC
- [ ] C. PTR
- [ ] D. RRSIG

## Q58 (Topic 2, Original #18)

You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.
 Subscription1 contains a resource group named Dev.
 You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
 Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q59 (Topic 2, Original #19)

You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.
 Subscription1 contains a resource group named Dev.
 You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
 Solution: On Subscription1, you assign the Logic App Operator role to the Developers group.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q60 (Topic 2, Original #20)

You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.
 Subscription1 contains a resource group named Dev.
 You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
 Solution: On Dev, you assign the Contributor role to the Developers group.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q61 (Topic 2, Original #21)

DRAG DROP -
You have an Azure subscription that is used by four departments in your company. The subscription contains 10 resource groups. Each department uses resources in several resource groups.
You need to send a report to the finance department. The report must detail the costs for each department.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
Select and Place:

{{img:/exam-media/az-104/T2/0006100001-113fdc6717317bfd6fbdf8e4352a87b2f0e83933.png}}

- [x] A. Assign a tag to each resource
- [x] B. From the Cost analysis blade, filter the view by tag
- [x] C. Download the usage report
- [ ] D. Assin a tag to each resource group
- [ ] E. Open the Resource costs blade of each resource group

## Q62 (Topic 2, Original #22)

You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.
 You need to view the error events from a table named Event.
 Which query should you run in Workspace1?

- [ ] A. Get-Event Event | where {$_.EventType == "error"}
- [x] B. search in (Event) "error"
- [ ] C. select * from Event where EventType == "error"
- [ ] D. search in (Event) * | where EventType -eq "error"

## Q63 (Topic 2, Original #23)

You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. A network interface named VM1-NI is connected to
 VNET1.
 You successfully deploy the following Azure Resource Manager template.

{{img:/exam-media/az-104/T2/0006500001.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. VM1 and VM2 can connect to VNET1
- [x] B. If an Azure datacenter becomes unavailable, VM1 or VM2 will be available
- [ ] C. If the East Us 2 region becomes unavailable, VM1 or VM2 will be available

## Q64 (Topic 2, Original #24)

You have an Azure subscription named Subscription1. Subscription1 contains the resource groups in the following table.

{{img:/exam-media/az-104/T2/0006700001-f0320ccb703b4fba923c55ea94156fcd73a6696e.png}}

 RG1 has a web app named WebApp1. WebApp1 is located in West Europe.
 You move WebApp1 to RG2.
 What is the effect of the move?

- [x] A. The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1.
- [ ] B. The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1.
- [ ] C. The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1.
- [ ] D. The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1.

## Q65 (Topic 2, Original #25)

You have an Azure subscription named Subscription1 that has a subscription ID of c276fc76-9cd4-44c9-99a7-4fd71546436e.
You need to create a custom RBAC role named CR1 that meets the following requirements:
✑ Can be assigned only to the resource groups in Subscription1
✑ Prevents the management of the access permissions for the resource groups
✑ Allows the viewing, creating, modifying, and deleting of resources within the resource groups
What should you specify in the assignable scopes and the permission elements of the definition of CR1? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:

{{img:/exam-media/az-104/T2/0006900001.jpg}}

- [ ] A. "/"
- [x] B. /subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546435e
- [x] C. Microsoft.Authorization/
- [ ] D. Microsoft.Resources/
- [ ] E. Microsoft.Security/

## Q66 (Topic 2, Original #26)

Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to access the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs.
 You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016.
 You need to ensure that the connections to App1 are spread across all the virtual machines.
 What are two possible Azure services that you can use? Each correct answer presents a complete solution.
 NOTE: Each correct selection is worth one point.

- [x] A. an internal load balancer
- [ ] B. a public load balancer
- [ ] C. an Azure Content Delivery Network (CDN)
- [ ] D. Traffic Manager
- [x] E. an Azure Application Gateway

## Q67 (Topic 2, Original #26)

You have an Azure subscription.
 You have 100 Azure virtual machines.
 You need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering.
 Which blade should you use?

- [ ] A. Monitor
- [x] B. Advisor
- [ ] C. Metrics
- [ ] D. Customer Insights

## Q68 (Topic 2, Original #28)

HOTSPOT -
You have an Azure Active Directory (Azure AD) tenant.
You need to create a conditional access policy that requires all users to use multi-factor authentication when they access the Azure portal.
Which three settings should you configure? To answer, select the appropriate settings in the answer area.
NOTE: Each correct selection is worth one point.
Hot Area:

{{img:/exam-media/az-104/T2/0007300001.png}}

- [x] A. Users and Group
- [x] B. Cloud Apps
- [ ] C. Conditions
- [x] D. Grant
- [ ] E. Session

## Q69 (Topic 2, Original #29)

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.
 The User administrator role is assigned to a user named Admin1.
 An external partner has a Microsoft account that uses the   user1@outlook.com   sign in.
 Admin1 attempts to invite the external partner to sign in to the Azure AD tenant and receives the following error message: `Unable to invite user   user1@outlook.com   `" Generic authorization exception.`
 You need to ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant.
 What should you do?

- [x] A. From the Users settings blade, modify the External collaboration settings.
- [ ] B. From the Custom domain names blade, add a custom domain.
- [ ] C. From the Organizational relationships blade, add an identity provider.
- [ ] D. From the Roles and administrators blade, assign the Security administrator role to Admin1.

## Q70 (Topic 2, Original #30)

You have an Azure subscription linked to an Azure Active Directory tenant. The tenant includes a user account named User1.
 You need to ensure that User1 can assign a policy to the tenant root management group.
 What should you do?

- [ ] A. Assign the Owner role for the Azure Subscription to User1, and then modify the default conditional access policies.
- [ ] B. Assign the Owner role for the Azure subscription to User1, and then instruct User1 to configure access management for Azure resources.
- [x] C. Assign the Global administrator role to User1, and then instruct User1 to configure access management for Azure resources.
- [ ] D. Create a new management group and delegate User1 as the owner of the new management group.

## Q71 (Topic 2, Original #31)

HOTSPOT -
 You have an Azure Active Directory (Azure AD) tenant named adatum.com. Adatum.com contains the groups in the following table.

{{img:/exam-media/az-104/T2/0007800001.jpg}}

 You create two user accounts that are configured as shown in the following table.

{{img:/exam-media/az-104/T2/0007800002.png}}

 Of which groups are User1 and User2 members? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0007900001-5ca3cb8b53698a9e7d9013327a1396f5a8961bfe.png}}

- [x] A. User1: Group1 only
- [x] B. User2: Group1 and Group2 only
- [ ] C. User1: Group2 only
- [ ] D. User1: Group3 only
- [ ] E. User2: Group2 and Group3 only

## Q72 (Topic 2, Original #32)

You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table.

{{img:/exam-media/az-104/T2/0008100001.png}}

 You need to modify the JobTitle and UsageLocation attributes for the users.
 For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0008200001.png}}

- [ ] A. JobTitle: User1 only
- [x] B. UsageLocation: User1 and User2 only
- [ ] C. JobTitle: User1 and User3 only
- [x] D. UsageLocation: User1, User2, and User3
- [ ] E. UsageLocation: User1 and User3 only

## Q73 (Topic 2, Original #33)

You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.
 Solution: You assign the Network Contributor role at the subscription level to Admin1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q74 (Topic 2, Original #34)

You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.
 Solution: You assign the Owner role at the subscription level to Admin1.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q75 (Topic 2, Original #35)

You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.
 Solution: You assign the Reader role at the subscription level to Admin1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q76 (Topic 2, Original #36)

You have an Azure subscription that contains a user named User1.
 You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.
 Which role-based access control (RBAC) role should you assign to User1?

- [ ] A. Owner
- [ ] B. Virtual Machine Contributor
- [x] C. Contributor
- [ ] D. Virtual Machine Administrator Login

## Q77 (Topic 2, Original #37)

You have an Azure Active Directory (Azure AD) tenant that contains three global administrators named Admin1, Admin2, and Admin3.
 The tenant is associated to an Azure subscription. Access control for the subscription is configured as shown in the Access control exhibit. (Click the Access
 Control tab.)

{{img:/exam-media/az-104/T2/0008700001.jpg}}

 You sign in to the Azure portal as Admin1 and configure the tenant as shown in the Tenant exhibit. (Click the Tenant tab.)

{{img:/exam-media/az-104/T2/0008800001.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. Admin1 can add Admin2 as an owner of the subscription
- [x] B. Admin3 can add Admin2 as an owner of the subscription
- [ ] C. Admin2 can create a resourge group in the subscription

## Q78 (Topic 2, Original #38)

You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named RG1.
 VM1 runs services that will be used to deploy resources to RG1.
 You need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1.
 What should you do first?

- [x] A. From the Azure portal, modify the Managed Identity settings of VM1
- [ ] B. From the Azure portal, modify the Access control (IAM) settings of RG1
- [ ] C. From the Azure portal, modify the Access control (IAM) settings of VM1
- [ ] D. From the Azure portal, modify the Policies settings of RG1

## Q79 (Topic 2, Original #39)

You have an Azure subscription that contains a resource group named TestRG.
 You use TestRG to validate an Azure deployment.
 TestRG contains the following resources:

{{img:/exam-media/az-104/T2/0009100001.png}}

 You need to delete TestRG.
 What should you do first?

- [ ] A. Modify the backup configurations of VM1 and modify the resource lock type of VNET1
- [x] B. Remove the resource lock from VNET1 and delete all data in Vault1
- [ ] C. Turn off VM1 and remove the resource lock from VNET1
- [ ] D. Turn off VM1 and delete all data in Vault1

## Q80 (Topic 2, Original #40)

You have an Azure DNS zone named adatum.com.
 You need to delegate a subdomain named research.adatum.com to a different DNS server in Azure.
 What should you do?

- [x] A. Create an NS record named research in the adatum.com zone.
- [ ] B. Create a PTR record named research in the adatum.com zone.
- [ ] C. Modify the SOA record of adatum.com.
- [ ] D. Create an A record named *.research in the adatum.com zone.

## Q81 (Topic 2, Original #41)

DRAG DROP -
 You have an Azure Active Directory (Azure AD) tenant that has the contoso.onmicrosoft.com domain name.
 You have a domain name of contoso.com registered at a third-party registrar.
 You need to ensure that you can create Azure AD users that have names containing a suffix of @contoso.com.
 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T2/0009300001.jpg}}

- [x] A. Add a custom name
- [x] B. Add a record to the public contoso.com DNS zone
- [x] C. verifiy the domain
- [ ] D. Add an Entra ID tenant
- [ ] E. Create an Azure DNS zone

## Q82 (Topic 2, Original #43)

You have a registered DNS domain named contoso.com.
 You create a public Azure DNS zone named contoso.com.
 You need to ensure that records created in the contoso.com zone are resolvable from the internet.
 What should you do?

- [ ] A. Create NS records in contoso.com.
- [ ] B. Modify the SOA record in the DNS domain registrar.
- [ ] C. Create the SOA record in contoso.com.
- [x] D. Modify the NS records in the DNS domain registrar.

## Q83 (Topic 2, Original #44)

You have an Azure subscription that contains a storage account named storage1. The subscription is linked to an Azure Active Directory (Azure AD) tenant named contoso.com that syncs to an on-premises Active Directory domain.
 The domain contains the security principals shown in the following table.

{{img:/exam-media/az-104/T2/0009600001.png}}

 In Azure AD, you create a user named User2.
 The storage1 account contains a file share named share1 and has the following configurations.

{{img:/exam-media/az-104/T2/0009600002.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. You can assign the Storage Fila Data SMB Share Contributor role to User1 for share1
- [ ] B. You can assign the Storage Fila Data SMB Share Reader rolte to Computer1 for share1
- [x] C. You can assign the Storage Fila Data SMB Share Elevated Contributor role to User2 for share1

## Q84 (Topic 2, Original #45)

You have an Azure subscription named Subscription1 that contains a virtual network VNet1.
 You add the users in the following table.

{{img:/exam-media/az-104/T2/0009700003.png}}

 Which user can perform each configuration? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0009800001.jpg}}

- [x] A. Add a subnet to VNet1: User1 and User3 only
- [ ] B. Add a subnet to VNet1: User1 only
- [x] C. Assign a user the Reader role to VNet1: User1 only
- [ ] D. Assign a user the Reader role to VNet1: User2 and User3 only
- [ ] E. Assign a user the Reader role to VNet1: User3 only

## Q85 (Topic 2, Original #46)

You have the Azure resources shown on the following exhibit.

{{img:/exam-media/az-104/T2/0010000001.jpg}}

 You plan to track resource usage and prevent the deletion of resources.
 To which resources can you apply locks and tags? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0010100001.png}}

- [x] A. Locks: Sub1,RG1, and Vm1 only
- [ ] B. Locks: Rg1 and Vm1 only
- [x] C. Tags: Sub1, Rg1, and Vm1 only
- [ ] D. Tags: Tenant Root Group, Mg1, Sub1, Rg1, and VM1
- [ ] E. Tags: Sub1 and RG1 only

## Q86 (Topic 2, Original #47)

You have an Azure Active Directory (Azure AD) tenant.
 You plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center.
 You need to create and upload a file for the bulk delete.
 Which user attributes should you include in the file?

- [ ] A. The user principal name and usage location of each user only
- [x] B. The user principal name of each user only
- [ ] C. The display name of each user only
- [ ] D. The display name and usage location of each user only
- [ ] E. The display name and user principal name of each user only

## Q87 (Topic 2, Original #48)

You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.

{{img:/exam-media/az-104/T2/0010400001-86c2938f5b408bb8ed5e17225e4f910989158b34.png}}

 You assign an Azure policy that has the following settings:
 ✑ Scope: Sub1
 ✑ Exclusions: Sub1/RG1/VNET1
 ✑ Policy definition: Append a tag and its value to resources
 ✑ Policy enforcement: Enabled
 ✑ Tag name: Tag4
 ✑ Tag value: value4
 You assign tags to the resources as shown in the following table.

{{img:/exam-media/az-104/T2/0010400008.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. Rg1 has the Tag2:IT tag assigned only
- [ ] B. Storage1 has the Tag1:subscription,Tag2:IT,Tag3:value1, and Tag4:value4 tags assigned
- [ ] C. VNET1 has the Tag2:IT and Tag3:value1 tags assigned only

## Q88 (Topic 2, Original #49)

You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.
 Solution: You assign the Traffic Manager Contributor role at the subscription level to Admin1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q89 (Topic 2, Original #50)

You have three offices and an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.
 You need to grant user management permissions to a local administrator in each office.
 What should you use?

- [ ] A. Azure AD roles
- [x] B. administrative units
- [ ] C. access packages in Azure AD entitlement management
- [ ] D. Azure roles

## Q90 (Topic 2, Original #51)

You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.
 Subscription1 contains a resource group named Dev.
 You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.
 Solution: On Dev, you assign the Logic App Contributor role to the Developers group.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q91 (Topic 2, Original #52)

You have an Azure Load Balancer named LB1.
 You assign a user named User1 the roles shown in the following exhibit.

{{img:/exam-media/az-104/T2/0010800001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0010900001.jpg}}

- [ ] A. User1 can DELETE LB1
- [ ] B. User1 can create a NAT rule for LB1
- [x] C. User1 can assign access to other users fo LB1
- [x] D. User1 can delete a virtual machine from the resource group
- [ ] E. User1 can modify the load balancing rules in the resource group

## Q92 (Topic 2, Original #54)

HOTSPOT -
 You configure the custom role shown in the following exhibit.

{{img:/exam-media/az-104/T2/0011200001.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0011300001.png}}

- [ ] A. #1: actions
- [ ] B. #1: roletype
- [ ] C. #2: notActions
- [x] D. #1: dataActions
- [x] E. #2: assignableScopes

## Q93 (Topic 2, Original #55)

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a file share named share1.
 The subscription is linked to a hybrid Azure Active Directory (Azure AD) tenant that contains a security group named Group1.
 You need to grant Group1 the Storage File Data SMB Share Elevated Contributor role for share1.
 What should you do first?

- [x] A. Enable Active Directory Domain Service (AD DS) authentication for storage1.
- [ ] B. Grant share-level permissions by using File Explorer.
- [ ] C. Mount share1 by using File Explorer.
- [ ] D. Create a private endpoint.

## Q94 (Topic 2, Original #56)

You have 15 Azure subscriptions.
 You have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1.
 You plan to purchase additional Azure subscription.
 You need to ensure that Group1 can manage role assignments for the existing subscriptions and the planned subscriptions. The solution must meet the following requirements:
 ✑ Use the principle of least privilege.
 ✑ Minimize administrative effort.
 What should you do?

- [ ] A. Assign Group1 the Owner role for the root management group.
- [x] B. Assign Group1 the User Access Administrator role for the root management group.
- [ ] C. Create a new management group and assign Group1 the User Access Administrator role for the group.
- [ ] D. Create a new management group and assign Group1 the Owner role for the group

## Q95 (Topic 2, Original #57)

HOTSPOT -
 You have an Azure subscription that contains the hierarchy shown in the following exhibit.

{{img:/exam-media/az-104/T2/0011800001-af958f9523f284c1fe71f23a61eca16a25579b0d.png}}

 You create an Azure Policy definition named Policy1.
 To which Azure resources can you assign Policy1 and which Azure resources can you specify as exclusions from Policy1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T2/0011900001.png}}

- [ ] A. You can assign Policy1 to: Subscription1 and RG1 only
- [x] B. You can assign Policy1 to: Tenant Root Group, ManagementGroup1, Subscription1 and RG1 only
- [ ] C. You can assign Policy1 to: Tenant Root Group, ManagementGroup1, Subscription1, RG1 and VM1
- [x] D. You can exclude Policy1 from: ManagementGroup1, Subscription1, RG1 and VM1 only
- [ ] E. You can exclude Policy1 from: Rg1 and VM1 only

## Q96 (Topic 2, Original #58)

You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:

{{img:/exam-media/az-104/T2/0012100001-0e7a6c953f065195fcc0d5360891c7835b7b6e8e.png}}

 User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.
 You need to create new user accounts in external.contoso.onmicrosoft.com.
 Solution: You instruct User2 to create the user accounts.
 Does that meet the goal?

- [ ] A. Yes
- [x] B. No

## Q97 (Topic 2, Original #59)

You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:

{{img:/exam-media/az-104/T2/0012200001.png}}

 User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.
 You need to create new user accounts in external.contoso.onmicrosoft.com.
 Solution: You instruct User4 to create the user accounts.
 Does that meet the goal?

- [ ] A. Yes
- [x] B. No

## Q98 (Topic 2, Original #60)

You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:

{{img:/exam-media/az-104/T2/0012300001-0e7a6c953f065195fcc0d5360891c7835b7b6e8e.png}}

 User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.
 You need to create new user accounts in external.contoso.onmicrosoft.com.
 Solution: You instruct User3 to create the user accounts.
 Does that meet the goal?

- [ ] A. Yes
- [x] B. No

## Q99 (Topic 2, Original #61)

You have two Azure subscriptions named Sub1 and Sub2.
 An administrator creates a custom role that has an assignable scope to a resource group named RG1 in Sub1.
 You need to ensure that you can apply the custom role to any resource group in Sub1 and Sub2. The solution must minimize administrative effort.
 What should you do?

- [x] A. Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes.
- [ ] B. Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1.
- [ ] C. Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1.
- [ ] D. Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for Sub2.

## Q100 (Topic 2, Original #62)

You have an Azure Subscription that contains a storage account named storageacct1234 and two users named User1 and User2.
 You assign User1 the roles shown in the following exhibit.

{{img:/exam-media/az-104/T2/0012500001.jpg}}

 Which two actions can User1 perform? Each correct answer presents a complete solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. Assign roles to User2 for storageacct1234.
- [x] B. Upload blob data to storageacct1234.
- [ ] C. Modify the firewall of storageacct1234.
- [ ] D. View file shares in storageacct1234.
- [x] E. View blob data in storageacct1234.

## Q101 (Topic 2, Original #64)

You have an Azure App Services web app named App1.

 You plan to deploy App1 by using Web Deploy.

 You need to ensure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must use the principle of least privilege.

 What should you do?

- [ ] A. Assign the Owner role to the developers
- [ ] B. Configure app-level credentials for FTPS
- [x] C. Assign the Website Contributor role to the developers
- [ ] D. Configure user-level credentials for FTPS

## Q102 (Topic 2, Original #65)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.

 You have a CSV file that contains the names and email addresses of 500 external users.

 You need to create a guest user account in contoso.com for each of the 500 external users.

 Solution: From Azure AD in the Azure portal, you use the Bulk invite users operation.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q103 (Topic 2, Original #66)

HOTSPOT -

 You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains the custom role-based access control (RBAC) roles shown in the following table.

{{img:/exam-media/az-104/T2/image567.png}}

 From the Azure portal, you need to create two custom roles named Role3 and Role4. Role3 will be an Azure subscription role. Role4 will be an Azure AD role.

 Which roles can you clone to create the new roles? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T2/image568.png}}

- [ ] A. Role3: Role1 only
- [ ] B. Role4: Built-in Azure subscription roles only
- [ ] C. Role3: Role1 and built-in Azure subscription roles only
- [x] D. Role4: Role1, Role2, built-in Azure subscription roles, and built-in Azure Entra ID roles
- [x] E. Role3: Role1, Role2, built-in Azure subscription roles, and built-in Azure Entra ID roles

## Q104 (Topic 2, Original #68)

You have an Azure subscription named Sub1 that contains two users named User1 and User2.

 You need to assign role-based access control (RBAC) roles to User1 and User2. The users must be able to perform the following tasks in Sub1:

 • User1 must view the data in any storage account.
 • User2 must assign users the Contributor role for storage accounts.

 The solution must use the principle of least privilege.

 Which RBAC role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.

- [x] A. Owner
- [ ] B. Contributor
- [x] C. Reader and Data Access
- [ ] D. Storage Account Contributor

## Q105 (Topic 2, Original #68)

You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All the resources are deployed to the East US Azure region.

 The virtual machines are protected by using NSG1. NSG1 is configured to block all outbound traffic to the internet.

 You need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative effort

 What should you configure as the destination of the outbound security rule for NSG1?

- [ ] A. an application security group
- [x] B. a service tag
- [ ] C. an IP address range

## Q106 (Topic 2, Original #69)

You have an Azure AD tenant named adatum.com that contains the groups shown in the following table.

{{img:/exam-media/az-104/T2/image572.png}}

 Adatum.com contains the users shown in the following table.

{{img:/exam-media/az-104/T2/image573.png}}

 You assign the Azure Active Directory Premium Plan 2 license to Group1 and User4.

 Which users are assigned the Azure Active Directory Premium Plan 2 license?

- [ ] A. User4 only
- [x] B. User1 and User4 only
- [ ] C. User1, User2, and User4 only
- [ ] D. User1, User2, User3, and User4

## Q107 (Topic 2, Original #70)

You have an Azure AD tenant named contoso.com.

 You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization.

 You create an access package as shown in the Access package exhibit. (Click the Access package tab.)

{{img:/exam-media/az-104/T2/image574.png}}

 You configure the external user lifecycle settings as shown in the Lifecycle exhibit. (Click the Lifecycle tab.)

{{img:/exam-media/az-104/T2/image575.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- [ ] A. Litwareinc.com users can be assigned to package1
- [x] B. After 365 days, fabrikam.com users will be removed from Group1
- [x] C. After 365 days, fabrikam.com users wil be removed from the contoso.com tenant

## Q108 (Topic 2, Original #71)

You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.

 Subscription1 has a user named User1. User1 has the following roles:

 • Reader
 • Security Admin
 • Security Reader

 You need to ensure that User1 can assign the Reader role for VNet1 to other users.

 What should you do?

- [ ] A. Assign User1 the Network Contributor role for VNet1.
- [ ] B. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- [x] C. Assign User1 the Owner role for VNet1.
- [ ] D. Assign User1 the Network Contributor role for RG1.

## Q109 (Topic 2, Original #72)

You have an Azure subscription that contains the users shown in the following table.

{{img:/exam-media/az-104/T2/image627.png}}

 The groups are configured as shown in the following table.

{{img:/exam-media/az-104/T2/image628.png}}

 You have a resource group named RG1 as shown in the following exhibit.

{{img:/exam-media/az-104/T2/image629.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- [ ] A. You can assign User2 the Owner role for RG1 by adding Group2 as amember of Group1.
- [ ] B. You can assign User3 the Owner role for RG1 by adding Group3 as amember of Group1.
- [x] C. You can assign User3 the Owner role for RG1 by assigning the Owner role to Group3 for

## Q110 (Topic 2, Original #74)

Your on-premises network contains a VPN gateway.

 You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image646.png}}

 You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network.

 What should you configure?

- [ ] A. Azure Application Gateway
- [x] B. private endpoints
- [ ] C. a network security group (NSG)
- [ ] D. Azure Virtual WAN

## Q111 (Topic 2, Original #75)

HOTSPOT
 -

 You have an Azure subscription that contains a user named User1 and the resources shown in the following table.

{{img:/exam-media/az-104/T2/image647.png}}

 NSG1 is associated to networkinterface1.

 User1 has role assignments for NSG1 as shown in the following table.

{{img:/exam-media/az-104/T2/image648.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- [x] A. User1 can create a storage account in RG1
- [ ] B. User1 can modify the DNS setting of networkinterface1
- [x] C. User1 can create an inbound security rule to filter inbound traffic to networkinterface1

## Q112 (Topic 2, Original #77)

HOTSPOT
 -

 You have three Azure subscriptions named Sub1, Sub2, and Sub3 that are linked to an Azure AD tenant.

 The tenant contains a user named User1, a security group named Group1, and a management group named MG1. User is a member of Group1.

 Sub1 and Sub2 are members of MG1. Sub1 contains a resource group named RG1. RG1 contains five Azure functions.

 You create the following role assignments for MG1:

 • Group1: Reader
 • User1: User Access Administrator

 You assign User the Virtual Machine Contributor role for Sub1 and Sub2.

- [x] A. The Group1 members can view the configurations of the Azure functions
- [x] B. User1 can assign the Owner role for RG1
- [ ] C. User1 can create a new resource froup and deploy a virtual machine to the new group

## Q113 (Topic 2, Original #78)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image657.png}}

 You need to assign User1 the Storage File Data SMB Share Contributor role for share1.

 What should you do first?

- [x] A. Enable identity-based data access for the file shares in storage1.
- [ ] B. Modify the security profile for the file shares in storage1.
- [ ] C. Select Default to Azure Active Directory authorization in the Azure portal for storage1.
- [ ] D. Configure Access control (IAM) for share1

## Q114 (Topic 2, Original #80)

You have an Azure AD tenant named adatum.com that contains the groups shown in the following table.

{{img:/exam-media/az-104/T2/image666.png}}

 Adatum.com contains the users shown in the following table.

{{img:/exam-media/az-104/T2/image667.png}}

 You assign an Azure Active Directory Premium P2 license to Group1 as shown in the following exhibit.

{{img:/exam-media/az-104/T2/image668.png}}

 Group2 is NOT directly assigned a license.

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- [x] A. You can assign User1 the Microsoft Defendr for Cloud Apps Discovery license
- [ ] B. You can remove the Azure Active Directory Premium P2 license from user1
- [ ] C. User2 is assigned the Azure Active Directory Premium P2

## Q115 (Topic 2, Original #81)

HOTSPOT
 -

 You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table.

{{img:/exam-media/az-104/T2/image683.png}}

 You need to modify the JobTitle and UsageLocation attributes for the users.

 For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T2/image684.png}}

- [ ] A. JobTitle: User1 only
- [ ] B. JobTitle: User1 and User2 only
- [x] C. JobTitle: User1 and User3 only
- [ ] D. UsageLocation: User1 and User3 only
- [x] E. UsageLocation: User1 and User2, and User3

## Q116 (Topic 2, Original #82)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.

 You have a CSV file that contains the names and email addresses of 500 external users.

 You need to create a guest user account in contoso.com for each of the 500 external users.

 Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each external user.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q117 (Topic 2, Original #83)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.

 You have a CSV file that contains the names and email addresses of 500 external users.

 You need to create a guest user account in contoso.com for each of the 500 external users.

 Solution: You create a PowerShell script that runs the New-MgInvitation cmdlet for each external user.

 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q118 (Topic 2, Original #84)

A user named User1 has the following roles for Subscription1:

 • Reader
 • Security Admin
 • Security Reader

 You need to ensure that User1 can assign the Reader role for VNet1 to other users.

 What should you do?

- [ ] A. Assign User1 the Contributor role for VNet1.
- [ ] B. Assign User1 the Network Contributor role for VNet1.
- [x] C. Assign User1 the User Access Administrator role for VNet1.
- [ ] D. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.

## Q119 (Topic 2, Original #85)

You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.

 User named User1 has the following roles for Subscription1:

 • Reader
 • Security Admin
 • Security Reader

 You need to ensure that User1 can assign the Reader role for VNet1 to other users.
 What should you do?

- [ ] A. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- [ ] B. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.
- [ ] C. Assign User1 the Network Contributor role for VNet1.
- [x] D. Assign User1 the User Access Administrator role for VNet1.

## Q120 (Topic 2, Original #86)

You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage.

 You need to use AzCopy to copy data to the blob storage and file storage in storage1.

 Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T2/image691.png}}

- [ ] A. Blob storage: Entra ID only
- [ ] B. Blob storage: Shared access signatures (SAS) only
- [x] C. File storage: Shared access signatures (SAS) only
- [x] D. Blob storage: Entra ID and shared access signatures (SAS)
- [ ] E. File storage: Entra ID and shared access signatures (SAS)

## Q121 (Topic 2, Original #87)

You have an Azure AD tenant that contains a user named External User.

 External User authenticates to the tenant by using   external195@gmail.com  .

 You need to ensure that External User authenticates to the tenant by using   contractor@gmail.com  .

 Which two settings should you configure from the Overview blade? To answer, select the appropriate settings in the answer area.

 NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T2/image693.png}}

- [x] A. identities
- [x] B. B2B collaboration

## Q122 (Topic 2, Original #88)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image695.png}}

 You need to assign Workspace1 a role to allow read, write, and delete operations for the data stored in the containers of storage1.

 Which role should you assign?

- [ ] A. Storage Account Contributor
- [ ] B. Contributor
- [x] C. Storage Blob Data Contributor
- [ ] D. Reader and Data Access

## Q123 (Topic 2, Original #89)

You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.

 A user named User1 has the following roles for Subscription1:

 • Reader
 • Security Admin
 • Security Reader

 You need to ensure that User1 can assign the Reader role for VNet1 to other users.

 What should you do?

- [ ] A. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.
- [ ] B. Assign User1 the Contributor role for VNet1.
- [x] C. Assign User1 the Owner role for VNet1.
- [ ] D. Assign User1 the Network Contributor role for RG1.

## Q124 (Topic 2, Original #90)

You have an Azure AD tenant that contains the groups shown in the following table.

{{img:/exam-media/az-104/T2/image696.png}}

 You purchase Azure Active Directory Premium P2 licenses.

 To which groups can you assign a license?

- [ ] A. Group1 only
- [x] B. Group1 and Group3 only
- [ ] C. Group3 and Group4 only
- [ ] D. Group1, Group2, and Group3 only
- [ ] E. Group1, Group2, Group3, and Group4

## Q125 (Topic 2, Original #91)

You have an Azure AD tenant.

You need to create a Microsoft 365 group that contains only members of a marketing department in France.

How should you complete the dynamic membership rule? To answer, select the appropriate options in the answer area.

NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T2/image697.png}}

- [x] A. user.department
- [x] B. and
- [x] C. -eq
- [ ] D. user.usageLocation
- [ ] E. or

## Q126 (Topic 2, Original #93)

You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.

{{img:/exam-media/az-104/T2/image701.png}}

 Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.

 You have a condition named Condition1 as shown in the following exhibit.

{{img:/exam-media/az-104/T2/image702.png}}

 You have a condition named Condition2 as shown in the following exhibit.

{{img:/exam-media/az-104/T2/image703.png}}

 You assign roles to User1 and User2 as shown in the following table.

{{img:/exam-media/az-104/T2/image704.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. User1 can read blob2
- [ ] B. User1 can read blob3
- [x] C. User2 can read blob1

## Q127 (Topic 2, Original #94)

You have an Azure Active Directory (Azure AD) tenant named contoso.com.

 You have a CSV file that contains the names and email addresses of 500 external users.

 You need to create a guest user account in contoso.com for each of the 500 external users.

 Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each user.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q128 (Topic 2, Original #95)

You purchase a new Azure subscription.

 You create an Azure Resource Manager (ARM) template named deploy.json as shown in the following exhibit.

{{img:/exam-media/az-104/T2/image764.png}}

 You connect to the subscription and run the following command.

 New-AzDeployment –Location westus –TemplateFile “deploy.json”

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. Three resource groups are created when you run the script
- [ ] B. A resource group named RGroup5 is created
- [x] C. All the resource group are created in the East US Azure region

## Q129 (Topic 2, Original #96)

Your on-premises network contains a VPN gateway.

 You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image768.png}}

 You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network.

 What should you configure?

- [ ] A. Azure AD Application Proxy
- [x] B. private endpoints
- [ ] C. a network security group (NSG)
- [ ] D. Azure Peering Service

## Q130 (Topic 2, Original #99)

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image769.png}}

 You create a user named Admin1.

 To what can you add Admin1 as a co-administrator?

- [ ] A. RG1
- [ ] B. MG1
- [x] C. Sub1
- [ ] D. VM1

## Q131 (Topic 2, Original #102)

You have a Microsoft Entra tenant that is linked to the subscriptions shown in the following table.

{{img:/exam-media/az-104/T2/image818.png}}

 You have the resource groups shown in the following table.

{{img:/exam-media/az-104/T2/image819.png}}

 You assign roles to users as shown in the following table.

{{img:/exam-media/az-104/T2/image820.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. User1 can resize VM1
- [ ] B. User2 can crrate a new storage account in RG1
- [x] C. User3 can assign User1 the Owner role for RG3

## Q132 (Topic 2, Original #104)

You have a Microsoft Entra tenant.

 You plan to perform a bulk import of users.

 You need to ensure that imported user objects are added automatically as the members of a specific group based on each user's department. The solution must minimize administrative effort.

 Which two actions should you perform? Each correct answer presents part of the solution.

 NOTE: Each correct selection is worth one point.

- [ ] A. Create groups that use the Assigned membership type.
- [ ] B. Create an Azure Resource Manager (ARM) template.
- [x] C. Create groups that use the Dynamic User membership type.
- [ ] D. Create an XML file that contains user information and the appropriate attributes.
- [x] E. Create a CSV file that contains user information and the appropriate attributes.

## Q133 (Topic 2, Original #105)

You have an Azure subscription that contains a storage account named storage1.

 You need to ensure that the access keys for storage1 rotate automatically.

 What should you configure?

- [ ] A. a backup vault
- [ ] B. redundancy for storage1
- [ ] C. lifecycle management for storage1
- [x] D. an Azure key vault
- [ ] E. a Recovery Services vault

## Q134 (Topic 2, Original #106)

You have an Azure subscription that contains the Microsoft Entra identities shown in the following table.

{{img:/exam-media/az-104/T2/image835.png}}

 You need to enable self-service password reset (SSPR).

 For which identities can you enable SSPR in the Azure portal?

- [ ] A. User1 only
- [ ] B. Group1 only
- [ ] C. User1 and Group1 only
- [x] D. Group1 and Group2 only
- [ ] E. User1, Group1, and Group2

## Q135 (Topic 2, Original #107)

You have a Microsoft Entra tenant.

You need to ensure that when a new Microsoft 365 group is created, the group name is automatically formatted as follows:

{{img:/exam-media/az-104/T2/image851.png}}

Which three actions should you perform in sequence in the Microsoft Entra admin center? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

{{img:/exam-media/az-104/T2/image849.png}}

- [ ] A. Set Add suffix to Attribute
- [x] B. Create a group naming policy
- [x] C. Set Select type to Department
- [ ] D. Set Add suffix to String
- [x] E. Set Add prefix to Attribute

## Q136 (Topic 2, Original #108)

You have a Microsoft Entra tenant that contains the users shown in the following table.

{{img:/exam-media/az-104/T2/image858.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T2/image859.png}}

 Which users and groups can be deleted? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

- [x] A. Users: User1, User2, and User4
- [ ] B. Users: User4 only
- [x] C. Groups: Group1 and Group3 only
- [ ] D. Groups: Groups4 only
- [ ] E. Groups: Group1, Group2, Group3, and Group4

## Q137 (Topic 2, Original #109)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image862.png}}

 You plan to use an Azure key vault to provide a secret to app1.

 What should you create for app1 to access the key vault, and from which key vault can the secret be used? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

- [x] A. Create a: Managed Identity
- [ ] B. Create a: Private endpoint
- [ ] C. User secret from: Vault1 only
- [x] D. User secret from: Vault1, Vault2, or Vault3
- [ ] E. Create a: Service principal

## Q138 (Topic 2, Original #110)

You have a Microsoft Entra tenant named contoso.com.

 You collaborate with an external partner named fabrikam.com.

 You plan to invite users in fabrikam.com to the contoso.com tenant.

 You need to ensure that invitations can be sent only to fabrikam.com users.

 What should you do in the Microsoft Entra admin center?

- [ ] A. From Cross-tenant access settings, configure the Tenant restrictions settings.
- [ ] B. From Cross-tenant access settings, configure the Microsoft cloud settings.
- [ ] C. From External collaboration settings, configure the Guest user access restrictions settings
- [x] D. From External collaboration settings, configure the Collaboration restrictions settings.

## Q139 (Topic 2, Original #111)

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blob data.

 You need to assign a role to a user named User1 to ensure that the user can access the blob data in storage1. The role assignment must support conditions.

 Which two roles can you assign to User1? Each correct answer presents a complete solution.

 NOTE: Each correct selection is worth one point.

- [ ] A. Owner
- [ ] B. Storage Account Contributor
- [ ] C. Storage Account Backup Contributor
- [x] D. Storage Blob Data Contributor
- [x] E. Storage Blob Data Owner

## Q140 (Topic 2, Original #112)

Case study -

 This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.

 To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

 At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

 To start the case study -
 To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

 Overview -

 ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

 Existing Environment -

 Azure Environment -

 ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T2/image865.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T2/image866.png}}

 The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T2/image867.png}}

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T2/image868.png}}

 Azure Key Vault -

 The subscription contains an Azure key vault named Vault1.

 Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T2/image869.png}}

 Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T2/image870.png}}

 Microsoft Entra Environment -

 ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T2/image871.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T2/image872.png}}

 The adatum.com tenant has a custom security attribute named Attribute1.

 Planned Changes -

 ADatum plans to implement the following changes:

 • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
 • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
 • Whenever possible, use directories to organize storage account content.
 • Grant User1 the permissions required to link Zone1 to VNet1.
 • Assign Attribute1 to supported adatum.com resources.
 • In storage2, create an encryption scope named Scope1.
 • Deploy new containers by using Image1 or Image2.

 Technical Requirements -

 ADatum must meet the following technical requirements:

 • Use TLS for WebApp1.
 • Follow the principle of least privilege.
 • Grant permissions at the required scope only.
 • Ensure that Scope1 is used to encrypt storage services.
 • Use Azure Backup to back up cont1 and share1 as frequently as possible.
 • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

 You need to implement the planned change for Attribute1.

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. Admin1 can assign Attribute1 to Group1
- [ ] B. Admin2 can assign Attribute1 to User1
- [ ] C. Admin3 can assign Attribute1 to Group2

## Q141 (Topic 2, Original #113)

You have a Microsoft Entra tenant configured as shown in the following exhibit.

{{img:/exam-media/az-104/T2/image875.png}}

 The tenant contains the identities shown in the following table.

{{img:/exam-media/az-104/T2/image876.png}}

 You purchase a Microsoft Fabric license.

 To which identities can you assign the license?

- [x] A. User1 only
- [ ] B. User1 and Group1 only
- [ ] C. User1 and Group2 only
- [ ] D. User1, Group1, and Group2

## Q142 (Topic 2, Original #114)

You have an Azure subscription that contains a storage account named storage. The storage account contains a blob that stores images.

 Client access to storage1 is granted by using a shared access signature (SAS).

 You need to ensure that users receive a warning message when they generate a SAS that exceeds a seven-day time period.

 What should you do for storage?

- [ ] A. Enable a read-only lock.
- [ ] B. Configure an alert rule.
- [ ] C. Add a lifecycle management rule.
- [x] D. Set Allow recommended upper limit for shared access signature (SAS) expiry interval to Enabled.

## Q143 (Topic 3, Original #1)

You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table:

{{img:/exam-media/az-104/T3/0014000001.png}}

 You plan to use the Azure Import/Export service to export data from Subscription1.
 You need to identify which storage account can be used to export the data.
 What should you identify?

- [ ] A. storage1
- [ ] B. storage2
- [ ] C. storage3
- [x] D. storage4

## Q144 (Topic 3, Original #2)

You have Azure Storage accounts as shown in the following exhibit.

{{img:/exam-media/az-104/T3/0014100001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0014200001.jpg}}

- [ ] A. Table Storage: storageaccount1 only
- [ ] B. Table Storage: storageaccount2 only
- [x] C. Table Storage: storageaccount1 and  storageaccount2 only
- [ ] D. Blob Storage: storageaccount2 and  storageaccount3 only
- [x] E. Blob Storage:all the storage accounts

## Q145 (Topic 3, Original #3)

You have Azure subscription that includes data in following locations:

{{img:/exam-media/az-104/T3/0014300004.png}}

 You plan to export data by using Azure import/export job named Export1.
 You need to identify the data that can be exported by using Export1.
 Which data should you identify?

- [ ] A. DB1
- [x] B. container1
- [ ] C. share1
- [ ] D. Table1

## Q146 (Topic 3, Original #4)

HOTSPOT -
 You have an Azure Storage account named storage1.
 You have an Azure App Service app named App1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity.
 You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements:
 ✑ Minimize the number of secrets used.
 ✑ Ensure that App2 can only read from storage1 for the next 30 days.
 What should you configure in storage1 for each app? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0014500001.jpg}}

- [ ] A. App1: Access keys
- [x] B. App1: Access control (IAM)
- [ ] C. App2: Access control (IAM)
- [ ] D. App1: Shared access signatures(SAS)
- [x] E. App2: Shared access signatures(SAS)

## Q147 (Topic 3, Original #5)

HOTSPOT -
 You need to create an Azure Storage account that meets the following requirements:
 ✑ Minimizes costs
 ✑ Supports hot, cool, and archive blob tiers
 ✑ Provides fault tolerance if a disaster affects the Azure region where the account resides
 How should you complete the command? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0014700004.jpg}}

- [ ] A. FileStorage
- [ ] B. Storage
- [x] C. StorageV2
- [x] D. Standard_GRS
- [ ] E. Standard_LRS

## Q148 (Topic 3, Original #6)

You have an Azure subscription that contains the resources in the following table.

{{img:/exam-media/az-104/T3/0014900001.png}}

 Store1 contains a file share named data. Data contains 5,000 files.
 You need to synchronize the files in the file share named data to an on-premises server named Server1.
 Which three actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. Create a container instance
- [x] B. Register Server1
- [x] C. Install the Azure File Sync agent on Server1
- [ ] D. Download an automation script
- [x] E. Create a sync group

## Q149 (Topic 3, Original #7)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T3/0015000001-6ee844567e04b7fd707dc665c82e86724df35f2d.png}}

 The status of VM1 is Running.
 You assign an Azure policy as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T3/0015100001.jpg}}

 You assign the policy by using the following parameters:
 Microsoft.ClassicNetwork/virtualNetworks
 Microsoft.Network/virtualNetworks
 Microsoft.Compute/virtualMachines
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. An administrator can move VNET1 to RG2
- [ ] B. The state of VM1 changed to deallocated
- [ ] C. An administrator can modify the address space of VNET2

## Q150 (Topic 3, Original #8)

You have an Azure subscription that contains a storage account.
 You have an on-premises server named Server1 that runs Windows Server 2016. Server1 has 2 TB of data.
 You need to transfer the data to the storage account by using the Azure Import/Export service.
 In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.
 NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.
 Select and Place:

{{img:/exam-media/az-104/T3/0015300001.jpg}}

- [x] A. 1. Attach
- [x] B. 2. From the Azure portal, create an import job
- [x] C. 3. Detach
- [x] D. 4. From the Azure portal, update the import job

## Q151 (Topic 3, Original #9)

You have Azure subscription that includes following Azure file shares:

{{img:/exam-media/az-104/T3/0015500001.png}}

 You have the following on-premises servers:

{{img:/exam-media/az-104/T3/0015500002.png}}

 You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint.
 You register Server1 and Server2 in Sync1. You add D:\Folder1 on Server1 as a server endpoint of Group1.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. share2 can be added as a cloud endpoint for Group1
- [ ] B. E:\Folder2 on Server1 can be added as a server endpoint for Group1
- [x] C. D:\Data on Server2 can be added as a server endpoint for Group1

## Q152 (Topic 3, Original #11)

You have an Azure subscription that contains an Azure Storage account.
 You plan to copy an on-premises virtual machine image to a container named vmimages.
 You need to create the container for the planned image.
 Which command should you run? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0016000001-492139605c77e25b53d016922267838fade591f6.png}}

- [x] A. make
- [ ] B. sync
- [ ] C. queue
- [x] D. blob
- [ ] E. dfs

## Q153 (Topic 3, Original #10)

You have an Azure subscription named Subscription1.
 You create an Azure Storage account named contosostorage, and then you create a file share named data.
 Which UNC path should you include in a script that references files from the data file share? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.
 NOTE: Each correct selection is worth one point.
 Select and Place:

{{img:/exam-media/az-104/T3/0015700001.jpg}}

- [x] A. contosostorage
- [x] B. file.core.windows.net
- [x] C. data
- [ ] D. portal.azure.com
- [ ] E. blob.core.windows.net

## Q154 (Topic 3, Original #12)

You have an Azure File sync group that has the endpoints shown in the following table.

{{img:/exam-media/az-104/T3/0016100002.png}}

 Cloud tiering is enabled for Endpoint3.
 You add a file named File1 to Endpoint1 and a file named File2 to Endpoint2.
 On which endpoints will File1 and File2 be available within 24 hours of adding the files? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0016200001.jpg}}

- [x] A. File1: Endpoint1 only
- [ ] B. File1: Endpoint3 only
- [x] C. File2: Endpoint1, Endpoint2, and Endpoint3
- [ ] D. File2: Endpoint2 and Endpoint3 only
- [ ] E. File2: Endpoint1 only

## Q155 (Topic 3, Original #13)

You have several Azure virtual machines on a virtual network named VNet1.
 You configure an Azure Storage account as shown in the following exhibit.

{{img:/exam-media/az-104/T3/0016400001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0016500001.jpg}}

- [ ] A. 1. always
- [ ] B. 1. during a backup
- [x] C. 1. never
- [ ] D. 2. always
- [x] E. 2. never

## Q156 (Topic 3, Original #14)

You have a sync group named Sync1 that has a cloud endpoint. The cloud endpoint includes a file named File1.txt.
 Your on-premises network contains servers that run Windows Server 2016. The servers are configured as shown in the following table.

{{img:/exam-media/az-104/T3/0016700001.png}}

 You add Share1 as an endpoint for Sync1. One hour later, you add Share2 as an endpoint for Sync1.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. On the cloud endpoint, File1.txt is overwritten by File1.txt from Share1
- [ ] B. On Server, File1.txt is overwritten by File1.txt from the cloud endpoint
- [x] C. File1.txt from Share1 replicates to Share2

## Q157 (Topic 3, Original #15)

You have an Azure subscription that contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/0016900001.png}}

 You need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration from Azure support.
 What should you identify?

- [ ] A. storage1
- [x] B. storage2
- [ ] C. storage3
- [ ] D. storage4

## Q158 (Topic 3, Original #16)

You have an Azure subscription that contains a storage account named account1.
 You plan to upload the disk files of a virtual machine to account1 from your on-premises network. The on-premises network uses a public IP address space of
 131.107.1.0/24.
 You plan to use the disk files to provision an Azure virtual machine named VM1. VM1 will be attached to a virtual network named VNet1. VNet1 uses an IP address space of 192.168.0.0/24.
 You need to configure account1 to meet the following requirements:
 ✑ Ensure that you can upload the disk files to account1.
 ✑ Ensure that you can attach the disks to VM1.
 ✑ Prevent all other access to account1.
 Which two actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [x] A. From the Networking blade of account1, select Selected networks.
- [ ] B. From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account.
- [x] C. From the Networking blade of account1, add the 131.107.1.0/24 IP address range.
- [ ] D. From the Networking blade of account1, add VNet1.
- [ ] E. From the Service endpoints blade of VNet1, add a service endpoint.

## Q159 (Topic 3, Original #17)

You have an on-premises file server named Server1 that runs Windows Server 2016.
 You have an Azure subscription that contains an Azure file share.
 You deploy an Azure File Sync Storage Sync Service, and you create a sync group.
 You need to synchronize files from Server1 to Azure.
 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T3/0017200001-f6086e5bbbac3bf4f89388681fd829f015590c59.png}}

- [x] A. Install the Azure File Sync agent on Server1
- [x] B. Register Server1
- [x] C. Add a server endpoint
- [ ] D. Create a Recovery Services vault
- [ ] E. Install the DFS Replication server role on Server1

## Q160 (Topic 3, Original #18)

You plan to create an Azure Storage account in the Azure region of East US 2.
 You need to create a storage account that meets the following requirements:
 ✑ Replicates synchronously.
 ✑ Remains available if a single data center in the region fails.
 How should you configure the storage account? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0017400003.png}}

- [x] A. Replication: Zone-redundant storage (ZRS)
- [ ] B. Replication: Geo-redundant storage (GRS)
- [ ] C. Replication:: Locally-redundant storage (LRS)
- [ ] D. Account type: Blob storage
- [x] E. Account type: Storage V2 (general purpose V2)

## Q161 (Topic 3, Original #19)

You plan to use the Azure Import/Export service to copy files to a storage account.
 Which two files should you create before you prepare the drives for the import job? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. an XML manifest file
- [x] B. a dataset CSV file
- [ ] C. a JSON configuration file
- [ ] D. a PowerShell PS1 file
- [x] E. a driveset CSV file

## Q162 (Topic 3, Original #20)

You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines.
 You need to delete the Recovery Services vault.
 What should you do first?

- [ ] A. From the Recovery Service vault, delete the backup data.
- [ ] B. Modify the disaster recovery properties of each virtual machine.
- [ ] C. Modify the locks of each virtual machine.
- [x] D. From the Recovery Service vault, stop the backup of each backup item.

## Q163 (Topic 3, Original #21)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T3/0017800001-9fc8266bbb9872b6161ebf88266862d000652da5.png}}

 In storage1, you create a blob container named blob1 and a file share named share1.
 Which resources can be backed up to Vault1 and Vault2? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0017900001.png}}

- [x] A. Vault1 for backups:VM1 only
- [ ] B. Vault1 for backups:Vm1 and share1 only
- [ ] C. Vault1 for backups:Vm1 and SQL1 only
- [x] D. Vault2 for backups: share1 only
- [ ] E. Vault2 for backups: storage1 only

## Q164 (Topic 3, Original #22)

You have an Azure subscription named Subscription1.
 You have 5 TB of data that you need to transfer to Subscription1.
 You plan to use an Azure Import/Export job.
 What can you use as the destination of the imported data?

- [ ] A. a virtual machine
- [ ] B. an Azure Cosmos DB database
- [x] C. Azure File Storage
- [ ] D. the Azure File Sync Storage Sync Service

## Q165 (Topic 3, Original #23)

You have an Azure subscription.
You create the Azure Storage account shown in the following exhibit.

{{img:/exam-media/az-104/T3/0018300001-323f8d2c5f68541eaa0614db7767ad8460e411f8.jpg}}

Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
NOTE: Each correct selection is worth one point.
Hot Area:

{{img:/exam-media/az-104/T3/0018400001.png}}

- [ ] A. 1
- [ ] B. 2
- [x] C. 3
- [x] D. Access tier (default)
- [ ] E. Performance

## Q166 (Topic 3, Original #24)

You have an Azure Storage account named storage1.
 You plan to use AzCopy to copy data to storage1.
 You need to identify the storage services in storage1 to which you can copy the data.
 Which storage services should you identify?

- [ ] A. blob, file, table, and queue
- [x] B. blob and file only
- [ ] C. file and table only
- [ ] D. file only
- [ ] E. blob, table, and queue only

## Q167 (Topic 3, Original #25)

You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage.
 You need to use AzCopy to copy data to the blob storage and file storage in storage1.
 Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0018700001-6b649140730bf6b815ca58350334cae7c537460b.png}}

- [ ] A. Blob storage: Entra ID only
- [ ] B. Blob storage: Access keys and shared access signatures(SAS) only
- [x] C. Blob storage: Entra ID ans shared access signatures(SAS9 only
- [x] D. File storage: shared access signatures(SAS) only
- [ ] E. File storage: Entra ID only

## Q168 (Topic 3, Original #26)

You have an Azure subscription that contains an Azure Storage account.
 You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage.
 You need to configure a storage service for Container1.
 What should you use?

- [x] A. Azure Files
- [ ] B. Azure Blob storage
- [ ] C. Azure Queue storage
- [ ] D. Azure Table storage

## Q169 (Topic 3, Original #27)

You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2.
 You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the hardware hosting
 VM1 and VM2.
 What should you include in the Availability Set?

- [ ] A. one update domain
- [ ] B. two fault domains
- [ ] C. one fault domain
- [x] D. two update domains

## Q170 (Topic 3, Original #28)

You have an Azure subscription named Subscription1.
 You have 5 TB of data that you need to transfer to Subscription1.
 You plan to use an Azure Import/Export job.
 What can you use as the destination of the imported data?

- [ ] A. an Azure Cosmos DB database
- [x] B. Azure Blob storage
- [ ] C. Azure Data Lake Store
- [ ] D. the Azure File Sync Storage Sync Service

## Q171 (Topic 3, Original #29)

You have an Azure subscription that contains an Azure file share.
 You have an on-premises server named Server1 that runs Windows Server 2016.
 You plan to set up Azure File Sync between Server1 and the Azure file share.
 You need to prepare the subscription for the planned Azure File Sync.
 Which two actions should you perform in the Azure subscription? To answer, drag the appropriate actions to the correct targets. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
 NOTE: Each correct selection is worth one point.
  Select and Place:

{{img:/exam-media/az-104/T3/0019100001-b3fdbdebc5808328dde74c024e5587630bda147a.png}}

- [x] A. Create a Storage Sync Service
- [ ] B. Install the Azure File Sync agent
- [x] C. Create a sync group
- [ ] D. Run Server Registration

## Q172 (Topic 3, Original #30)

You have an Azure subscription that contains the file shares shown in the following table.

{{img:/exam-media/az-104/T3/0019200001-dd9193449a06ae18350bc4d1f93a8581ce87466b.png}}

 You have the on-premises file shares shown in the following table.

{{img:/exam-media/az-104/T3/0019200002.png}}

 You create an Azure file sync group named Sync1 and perform the following actions:
 ✑ Add share1 as the cloud endpoint for Sync1.
 ✑ Add data1 as a server endpoint for Sync1.
 ✑ Register Server1 and Server2 to Sync1.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.
 Hot Area:

- [ ] A. You can add share3 as an additional cloud endpoint for Sync1
- [x] B. You can add data2 as an additional server endpoint for Sync1
- [ ] C. You can add data3 as an additional server endpoint for Sync1

## Q173 (Topic 3, Original #31)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table:

{{img:/exam-media/az-104/T3/0019400001.png}}

 You plan to configure Azure Backup reports for Vault1.
 You are configuring the Diagnostics settings for the AzureBackupReports log.
 Which storage accounts and which Log Analytics workspaces can you use for the Azure Backup reports of Vault1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0019500001.jpg}}

- [ ] A. Storage accounts: storage1 only
- [ ] B. Storage accounts: storage2 only
- [x] C. Storage accounts: storage1, storage2, and storage2 only
- [x] D. Log Analytics workspaces: Analytics3 only
- [ ] E. Log Analytics workspaces: Analytics2 only

## Q174 (Topic 3, Original #32)

You have an Azure subscription that contains the storage accounts shown in the following exhibit.

{{img:/exam-media/az-104/T3/0019600001-b7796552adde91f1b87b7143253dd16a2f370674.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0019700001.png}}

- [ ] A. premium file share in: contoso101 only
- [x] B. premium file share in: contoso104 only
- [x] C. Archive access tier in: contoso101 or contoso103 only
- [ ] D. Archive access tier in: contoso101 only
- [ ] E. Archive access tier in: contoso101 , contoso102, contoso103, and contoso104

## Q175 (Topic 3, Original #33)

You have an Azure subscription named Subscription1.
 In Subscription1, you create an Azure file share named share1.
 You create a shared access signature (SAS) named SAS1 as shown in the following exhibit:

{{img:/exam-media/az-104/T3/0019900001.png}}

 To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0020000001-9128caf767abb271e148a1df28b154861a6ffeb8.jpg}}

- [ ] A. 1. will be prompted for credentials
- [x] B. 1. will have no access
- [ ] C. 1. will have read, write, and list access
- [ ] D. 2. will have read-only access
- [x] E. 2. will have no access

## Q176 (Topic 3, Original #34)

You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2.
VM2 is backed up to RSV1.
You need to back up VM2 to RSV2.
What should you do first?

- [x] A. From the RSV1 blade, click Backup items and stop the VM2 backup
- [ ] B. From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup
- [ ] C. From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault
- [ ] D. From the RSV1 blade, click Backup Jobs and export the VM2 job

## Q177 (Topic 3, Original #35)

You have a general-purpose v1 Azure Storage account named storage1 that uses locally-redundant storage (LRS).
 You need to ensure that the data in the storage account is protected if a zone fails. The solution must minimize costs and administrative effort.
 What should you do first?

- [ ] A. Create a new storage account.
- [ ] B. Configure object replication rules.
- [x] C. Upgrade the account to general-purpose v2.
- [ ] D. Modify the Replication setting of storage1.

## Q178 (Topic 3, Original #36)

You have an Azure subscription that contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/0020200001.png}}

 You plan to manage the data stored in the accounts by using lifecycle management rules.
 To which storage accounts can you apply lifecycle management rules?

- [ ] A. storage1 only
- [ ] B. storage1 and storage2 only
- [ ] C. storage3 and storage4 only
- [x] D. storage1, storage2, and storage3 only
- [ ] E. storage1, storage2, storage3, and storage4

## Q179 (Topic 3, Original #37)

You create an Azure Storage account named contosostorage.
 You plan to create a file share named data.
 Users need to map a drive to the data file share from home computers that run Windows 10.
 Which outbound port should you open between the home computers and the data file share?

- [ ] A. 443
- [ ] B. 445
- [x] C. 3389

## Q180 (Topic 3, Original #39)

You have an Azure subscription that contains an Azure Storage account named storageaccount1.
 You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections.

{{img:/exam-media/az-104/T3/0020500001.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point
 Hot Area:

- [x] A. A server that has a public IP address pf 131.107.103.10 can access storageaccount1
- [x] B. Individual blobs in storageaccount1 can be set to use the archive tier
- [ ] C. Global administrations in Entra ID can access a file share hosted in storageaccount1 by using their Entra ID credentials

## Q181 (Topic 3, Original #40)

You have an Azure subscription that contains a storage account named storage1.
 You have the devices shown in the following table.

{{img:/exam-media/az-104/T3/0020700001.png}}

 From which devices can you use AzCopy to copy data to storage1?

- [ ] A. Device 1 only
- [x] B. Device1, Device2 and Device3
- [ ] C. Device1 and Device2 only
- [ ] D. Device1 and Device3 only

## Q182 (Topic 3, Original #41)

You have an Azure Storage account named storage1 that contains a blob container named container1.
 You need to prevent new content added to container1 from being modified for one year.
 What should you configure?

- [ ] A. the access tier
- [x] B. an access policy
- [ ] C. the Access control (IAM) settings
- [ ] D. the access level

## Q183 (Topic 3, Original #42)

You have an Azure Storage account named storage1 that contains a blob container. The blob container has a default access tier of Hot. Storage1 contains a container named conainer1.
 You create lifecycle management rules in storage1 as shown in the following table.

{{img:/exam-media/az-104/T3/0020800001.png}}

 You perform the actions shown in the following table.

{{img:/exam-media/az-104/T3/0020900001.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.
 Hot Area:

- [ ] A. On October 10, you can read Dep1File1.docx
- [x] B. On October 10, you can read File2.docx
- [x] C. On October 10, you can read File3.docx

## Q184 (Topic 3, Original #43)

You are configuring Azure Active Directory (Azure AD) authentication for an Azure Storage account named storage1.
 You need to ensure that the members of a group named Group1 can upload files by using the Azure portal. The solution must use the principle of least privilege.
 Which two roles should you configure for storage1? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. Storage Account Contributor
- [x] B. Storage Blob Data Contributor
- [x] C. Reader
- [ ] D. Contributor
- [ ] E. Storage Blob Data Reader

## Q185 (Topic 3, Original #44)

You have an Azure Storage account named storage1 that stores images.
 You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.
 How should you configure the new account? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T3/0021100001.jpg}}

- [x] A. StorageV2 or BlobStorage only
- [ ] B. StorageV2 or FileStorage only
- [ ] C. StorageV2 only
- [x] D. Container
- [ ] E. File share

## Q186 (Topic 3, Original #45)

You have an on-premises server that contains a folder named D:\Folder1.
 You need to copy the contents of D:\Folder1 to the public container in an Azure Storage account named contosodata.
 Which command should you run?

- [ ] A. https://contosodata.blob.core.windows.net/public
- [ ] B. azcopy sync D:\folder1 https://contosodata.blob.core.windows.net/public --snapshot
- [x] C. azcopy copy D:\folder1 https://contosodata.blob.core.windows.net/public --recursive
- [ ] D. az storage blob copy start-batch D:\Folder1 https://contosodata.blob.core.windows.net/public

## Q187 (Topic 3, Original #46)

You have an Azure subscription.
 In the Azure portal, you plan to create a storage account named storage1 that will have the following settings:
 ✑ Performance: Standard
 ✑ Replication: Zone-redundant storage (ZRS)
 ✑ Access tier (default): Cool
 ✑ Hierarchical namespace: Disabled
 You need to ensure that you can set Account kind for storage1 to BlockBlobStorage.
 Which setting should you modify first?

- [x] A. Performance
- [ ] B. Replication
- [ ] C. Access tier(default)
- [ ] D. Hierarchical namespace

## Q188 (Topic 3, Original #47)

You have an Azure subscription that contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/0021400001.png}}

 You plan to use AzCopy to copy a blob from container1 directly to share1.
 You need to identify which authentication method to use when you use AzCopy.
 What should you identify for each account? To answer, drag the appropriate authentication methods to the correct accounts. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
 NOTE: Each correct selection is worth one point.
 Select and Place:

{{img:/exam-media/az-104/T3/0021500001.jpg}}

- [ ] A. storage1: OAuth
- [ ] B. storage2: A storage account access key
- [ ] C. storage1: A storage account access key
- [x] D. storage1: A shared access signature (SAS) token
- [x] E. storage2: A shared access signature (SAS) token

## Q189 (Topic 3, Original #48)

You create an Azure Storage account.
 You plan to add 10 blob containers to the storage account.
 For one of the containers, you need to use a different key to encrypt data at rest.
 What should you do before you create the container?

- [ ] A. Generate a shared access signature (SAS).
- [ ] B. Modify the minimum TLS version.
- [ ] C. Rotate the access keys.
- [x] D. Create an encryption scope.

## Q190 (Topic 3, Original #49)

You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.

{{img:/exam-media/az-104/T3/image578.png}}

 On June 1, you store two blobs in storage1 as shown in the following table.

{{img:/exam-media/az-104/T3/image579.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. On June 6, File1 will be stored in the Cool access tier
- [ ] B. On June 1, File2 will be stored in the Cool access tier
- [ ] C. On June 16, File2 will be stored in the Archive access tier

## Q191 (Topic 3, Original #50)

HOTSPOT
 -

 You have an Azure subscription.

 You plan to deploy a storage account named storage1 by using the following Azure Resource Manager (ARM) template.

{{img:/exam-media/az-104/T3/image582.png}}

 For each of the following statements, select Yes if the statement is hue. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. Changes made to the data in storage1 can be rolled back after seven days
- [ ] B. Only users located in the East US Azure region can connect to storage1
- [x] C. Three copies of storage1 will be maintained in the East Us Azure region

## Q192 (Topic 3, Original #52)

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.

 You need to create a lifecycle management rule for storage1 that will automatically move the blobs in container1 to the lowest-cost tier after 90 days.

 How should you complete the rule? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T3/image585.png}}

- [ ] A. enableAutoTierToHotFromCool
- [x] B. tierToAchrive
- [ ] C. tierToCool
- [ ] D. blobIndexMatch
- [x] E. prefixMatch

## Q193 (Topic 3, Original #53)

You have an Azure subscription that contains a virtual machine named VM1.

You need to back up VM1. The solution must ensure that backups are stored across three availability zones in the primary region.

Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

{{img:/exam-media/az-104/T3/image587.png}}

- [x] A. Create Recovery Services Vault
- [x] B. Set Replication Policy to Zone-redundant storage (ZRS)
- [x] C. For VM1, create a backup policy and configure the backup
- [ ] D. Configure a replication policy
- [ ] E. Set Replication Policy to locally-redundant storage (LRS)

## Q194 (Topic 3, Original #55)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T3/image589.png}}

 You need to perform the tasks shown in the following table.

{{img:/exam-media/az-104/T3/image590.png}}

 Which tasks can you perform by using Azure Storage Explorer?

- [ ] A. Task1 and Task3 only
- [ ] B. Task1, Task2, and Task3 only
- [ ] C. Task1, Task3, and Task4 only
- [x] D. Task2, Task3, and Task4 only
- [ ] E. Task1, Task2, Task3, and Task4

## Q195 (Topic 3, Original #57)

You have an Azure subscription that contains a storage account named storage1.

 You plan to create a blob container named container1.

 You need to use customer-managed key encryption for container1.

 Which key should you use?

- [ ] A. an EC key that uses the P-384 curve only
- [ ] B. an EC key that uses the P-521 curve only
- [ ] C. an EC key that uses the P-384 curve or P-521 curve only
- [ ] D. an RSA key with a key size of 4096 only
- [x] E. an RSA key type with a key size of 2048, 3072, or 4096 only

## Q196 (Topic 3, Original #61)

You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.

{{img:/exam-media/az-104/T3/image639.png}}

 On June 1, you store a blob named File1 in the Hot access tier of storage1.

 What is the state of File1 on June 7?

- [ ] A. stored in the Cool access tier
- [ ] B. stored in the Archive access tier
- [ ] C. stored in the Hot access tier
- [x] D. deleted

## Q197 (Topic 3, Original #64)

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.

 You create a blob lifecycle rule named rule1.

 You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from contained to the Cool access tier.

 How should you complete the rule? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T3/image651.png}}

- [ ] A. daysAfterCreationGreateThan
- [ ] B. dayAfterLAsAccessTimeGreaterThan
- [x] C. daysAfterModificationGreaterThan
- [ ] D. AppendBlob
- [x] E. Blockblob

## Q198 (Topic 3, Original #66)

You plan to create an Azure Storage account named storage1 that will contain a file share named share1.

 You need to ensure that share1 can support SMB Multichannel. The solution must minimize costs.

 How should you configure storage?

- [x] A. Premium performance with locally-redundant storage (LRS)
- [ ] B. Standard performance with zone-redundant storage (ZRS)
- [ ] C. Premium performance with geo-redundant storage (GRS)
- [ ] D. Standard performance with locally-redundant storage (LRS)

## Q199 (Topic 3, Original #68)

You have an Azure subscription that contains a storage account named storage1.

 You plan to use conditions when assigning role-based access control (RBAC) roles to storage1.

 Which storage1 services support conditions when assigning roles?

- [ ] A. containers only
- [ ] B. file shares only
- [ ] C. tables only
- [ ] D. queues only
- [x] E. containers and queues only

## Q200 (Topic 3, Original #69)

You have an Azure subscription that contains the resource groups shown in the following table.

{{img:/exam-media/az-104/T3/image658.png}}

 The subscription contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T3/image659.png}}

 You plan to deploy the Azure Kubernetes Service (AKS) clusters shown in the following table.

{{img:/exam-media/az-104/T3/image660.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. You can deploy AKS2 to VNet2
- [x] B. You can deploy AKS2 to VNet1
- [x] C. You can depliy AKS3 to VNet3

## Q201 (Topic 3, Original #70)

You have an Azure Storage account named storage1.

 You need to enable a user named User1 to list and regenerate storage account keys for storage1.

 Solution: You assign the Storage Account Encryption Scope Contributor Role to User1.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q202 (Topic 3, Original #71)

You have an Azure subscription that has offices in the East US and West US Azure regions.

 You plan to create the storage account shown in the following exhibit.

{{img:/exam-media/az-104/T3/image671.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T3/image672.png}}

- [ ] A. Default routing tier
- [ ] B. Endpoint type
- [ ] C. Performance
- [ ] D. Enable infrastructure encryption
- [ ] E. Encryption type

## Q203 (Topic 3, Original #72)

You have an Azure subscription.

 You plan to deploy a new storage account.

 You need to configure encryption for the account. The solution must meet the following requirements:

 • Use a customer-managed key stored in a key vault.
 • Use the maximum supported bit length.

 Which type of key and which bit length should you use? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

- [ ] A. AES
- [ ] B. 3DES
- [x] C. RSA
- [ ] D. 2048
- [x] E. 4096

## Q204 (Topic 3, Original #73)

You have an Azure Storage account that contains 5,000 blobs accessed by multiple users.

 You need to ensure that the users can view only specific blobs based on blob index tags.

 What should you include in the solution?

- [x] A. a role assignment condition
- [ ] B. a stored access policy
- [ ] C. just-in-time (JIT) VM access
- [ ] D. a shared access signature (SAS)

## Q205 (Topic 3, Original #74)

You have an Azure Storage account named storage1.

 For storage1, you create an encryption scope named Scope1.

 Which storage types can you encrypt by using Scope?

- [ ] A. file shares only
- [x] B. containers only
- [ ] C. file shares and containers only
- [ ] D. containers and tables only
- [ ] E. file shares, containers, and tables only

## Q206 (Topic 3, Original #78)

You have an Azure virtual machine named VM1 and an Azure key vault named Vault1.

 On VM1, you plan to configure Azure Disk Encryption to use a key encryption key (KEK).

 You need to prepare Vault1 for Azure Disk Encryption.

 Which two actions should you perform on Vault1? Each correct answer presents part of the solution.

- [ ] A. Select Azure Virtual machines for deployment.
- [x] B. Create a new key.
- [ ] C. Create a new secret.
- [ ] D. Configure a key rotation policy.
- [x] E. Select Azure Disk Encryption for volume encryption.

## Q207 (Topic 3, Original #79)

You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1.

 You need to configure encryption for VM1. The solution must meet the following requirements:

 • Store and use the encryption key in KV1.
 • Maintain encryption if VM1 is downloaded from Azure.
 • Encrypt both the operating system disk and the data disks.

 Which encryption method should you use?

- [ ] A. customer-managed keys
- [ ] B. Confidential disk encryption
- [x] C. Azure Disk Encryption
- [ ] D. encryption at host

## Q208 (Topic 3, Original #81)

You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.

 You need to configure access to container1. The solution must meet the following requirements:
 • Only allow read access.
 • Allow both HTTP and HTTPS protocols.
 • Apply access permissions to all the content in the container.

 What should you use?

- [ ] A. an access policy
- [x] B. a shared access signature (SAS)
- [ ] C. Azure Content Delivery Network (CDN)
- [ ] D. access keys

## Q209 (Topic 3, Original #82)

You need to create an Azure Storage account named storage1. The solution must meet the following requirements:

 • Support Azure Data Lake Storage.
 • Minimize costs for infrequently accessed data.
 • Automatically replicate data to a secondary Azure region.

 Which three options should you configure for storage1? Each correct answer presents part of the solution.

 NOTE: Each correct answer is worth one point.

- [ ] A. zone-redundant storage (ZRS)
- [x] B. the Cool access tire
- [x] C. geo-redundant storage (GRS)
- [ ] D. the Hot access tier
- [x] E. hierarchical namespace

## Q210 (Topic 3, Original #83)

You have an Azure Storage account named storage1 that contains two containers named container1 and container2. Blob versioning is enabled for both containers.

 You periodically take blob snapshots of critical blobs.

 You create the following lifecycle management policy.

{{img:/exam-media/az-104/T3/image770.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. A blob snapshot automatically moves to the Cool access tier after 15 days
- [ ] B. A blob version in container2 automatically moves to the Archive access tier after 30 days
- [ ] C. A rehydrated version automatically moves to the Archive access tier after 30 days

## Q211 (Topic 3, Original #84)

You have an Azure subscription that contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/image773.png}}

 Which storage account can be converted to zone-redundant storage (ZRS) replication?

- [ ] A. storage1
- [x] B. storage2
- [ ] C. storage3
- [ ] D. storage4

## Q212 (Topic 3, Original #86)

You have an Azure Storage account named storage1.

 You need to enable a user named User1 to list and regenerate storage account keys for storage1.

 Solution: You assign the Storage Account Key Operator Service Role to User1.

 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q213 (Topic 3, Original #94)

You have an Azure Storage account named storage1.

 You need to enable a user named User1 to list and regenerate storage account keys for storage1.

 Solution: You assign the Reader and Data Access role to User1.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q214 (Topic 3, Original #95)

You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1.

 You need to ensure that ContReg1 supports geo-replication.

 What should you do first for ContReg1?

- [ ] A. Enable Admin user.
- [ ] B. Add a scope map.
- [ ] C. Add an automation task.
- [ ] D. Create a cache rule.
- [x] E. Upgrade the SKU.

## Q215 (Topic 3, Original #96)

Case study -

 This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.

 To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

 At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

 To start the case study -
 To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

 Overview -

 ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

 Existing Environment -

 Azure Environment -

 ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/image865.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T3/image866.png}}

 The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T3/image867.png}}

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T3/image868.png}}

 Azure Key Vault -

 The subscription contains an Azure key vault named Vault1.

 Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T3/image869.png}}

 Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T3/image870.png}}

 Microsoft Entra Environment -

 ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T3/image871.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T3/image872.png}}

 The adatum.com tenant has a custom security attribute named Attribute1.

 Planned Changes -

 ADatum plans to implement the following changes:

 • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
 • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
 • Whenever possible, use directories to organize storage account content.
 • Grant User1 the permissions required to link Zone1 to VNet1.
 • Assign Attribute1 to supported adatum.com resources.
 • In storage2, create an encryption scope named Scope1.
 • Deploy new containers by using Image1 or Image2.

 Technical Requirements -

 ADatum must meet the following technical requirements:

 • Use TLS for WebApp1.
 • Follow the principle of least privilege.
 • Grant permissions at the required scope only.
 • Ensure that Scope1 is used to encrypt storage services.
 • Use Azure Backup to back up cont1 and share1 as frequently as possible.
 • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

 You implement the planned changes for cont2.

 What is the maximum number of additional access policies you can create for cont2? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T3/image877.png}}

- [ ] A. Stored access policies: 0
- [ ] B. Stored access policies: 1
- [x] C. Stored access policies: 2
- [ ] D. Immutable blob storage policies: 0
- [x] E. Immutable blob storage policies: 1

## Q216 (Topic 3, Original #97)

Case study -

 This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.

 To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

 At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

 To start the case study -
 To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

 Overview -

 ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

 Existing Environment -

 Azure Environment -

 ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/image865.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T3/image866.png}}

 The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T3/image867.png}}

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T3/image868.png}}

 Azure Key Vault -

 The subscription contains an Azure key vault named Vault1.

 Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T3/image869.png}}

 Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T3/image870.png}}

 Microsoft Entra Environment -

 ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T3/image871.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T3/image872.png}}

 The adatum.com tenant has a custom security attribute named Attribute1.

 Planned Changes -

 ADatum plans to implement the following changes:

 • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
 • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
 • Whenever possible, use directories to organize storage account content.
 • Grant User1 the permissions required to link Zone1 to VNet1.
 • Assign Attribute1 to supported adatum.com resources.
 • In storage2, create an encryption scope named Scope1.
 • Deploy new containers by using Image1 or Image2.

 Technical Requirements -

 ADatum must meet the following technical requirements:

 • Use TLS for WebApp1.
 • Follow the principle of least privilege.
 • Grant permissions at the required scope only.
 • Ensure that Scope1 is used to encrypt storage services.
 • Use Azure Backup to back up cont1 and share1 as frequently as possible.
 • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

 You need to configure encryption for the virtual machines. The solution must meet the technical requirements.

 Which virtual machines can you encrypt?

- [ ] A. VM1 and VM3
- [ ] B. VM4 and VM5
- [x] C. VM2 and VM3
- [ ] D. VM2 and VM4

## Q217 (Topic 3, Original #98)

Case study -

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.

To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

To start the case study -
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

Overview -

ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

Existing Environment -

Azure Environment -

ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/image865.png}}

The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T3/image866.png}}

The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T3/image867.png}}

The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T3/image868.png}}

Azure Key Vault -

The subscription contains an Azure key vault named Vault1.

Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T3/image869.png}}

Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T3/image870.png}}

Microsoft Entra Environment -

ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T3/image871.png}}

The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T3/image872.png}}

The adatum.com tenant has a custom security attribute named Attribute1.

Planned Changes -

ADatum plans to implement the following changes:

• Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
• In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
• Whenever possible, use directories to organize storage account content.
• Grant User1 the permissions required to link Zone1 to VNet1.
• Assign Attribute1 to supported adatum.com resources.
• In storage2, create an encryption scope named Scope1.
• Deploy new containers by using Image1 or Image2.

Technical Requirements -

ADatum must meet the following technical requirements:

• Use TLS for WebApp1.
• Follow the principle of least privilege.
• Grant permissions at the required scope only.
• Ensure that Scope1 is used to encrypt storage services.
• Use Azure Backup to back up cont1 and share1 as frequently as possible.
• Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

You need to implement the planned changes for the storage account content.

Which containers and file shares can you use to organize the content?

- [ ] A. share1 only
- [ ] B. cont1 and share1 only
- [ ] C. share1 and share2 only
- [x] D. cont1, share1, and share2 only
- [ ] E. cont1, cont2, share1, and share2

## Q218 (Topic 3, Original #85)

You have an Azure subscription that contains the devices shown in the following table.

{{img:/exam-media/az-104/T3/image774.png}}

 On which devices can you install Azure Storage Explorer?

- [ ] A. Device1 only
- [ ] B. Device1 and Device2 only
- [x] C. Device1, Device2, and Device3 only
- [ ] D. Device1, Device3, and Device4 only
- [ ] E. Device1 and Device3 only

## Q219 (Topic 3, Original #89)

You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.

{{img:/exam-media/az-104/T3/image782.png}}

 On June 1, you store two blobs in storage1 as shown in the following table.

{{img:/exam-media/az-104/T3/image783.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. On june 6, File 1 will be stored in the Cool access tier.
- [x] B. On June 7, File2 will be stored in the Cool access tier.
- [ ] C. On june 16, File 2 will be storde in the Archive access tier.

## Q220 (Topic 3, Original #91)

You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T3/image824.png}}

 You create the Azure Files shares shown in the following table.

{{img:/exam-media/az-104/T3/image825.png}}

 You configure identity-based access for contoso2024 as shown in the following exhibit.

{{img:/exam-media/az-104/T3/image826.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. User1 can access the content in share1.
- [x] B. User2 can acsess the content in share2.
- [ ] C. User2 can acsess the content in share3.

## Q221 (Topic 3, Original #92)

Your network contains an on-premises Active Directory Domain Services (AD DS) domain.

 The domain contains the identities shown in the following table.

{{img:/exam-media/az-104/T3/image836.png}}

 You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.

 You create an Azure Files share named share1 that has the roles shown in the following table.

{{img:/exam-media/az-104/T3/image837.png}}

 You have a Microsoft Entra tenant that contains a cloud-only user named User3.

 You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. User1 can access conten in share1.
- [x] B. User2 can access conten in share1.
- [ ] C. User3 can access conten in share1.

## Q222 (Topic 3, Original #93)

You have an Azure subscription that contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T3/image852.png}}

 Which storage account can be converted to zone-redundant storage (ZRS) replication?

- [x] A. storage1 only
- [ ] B. storage2 only
- [ ] C. storage3 only
- [ ] D. storage2 and storage3
- [ ] E. storage1, storage2, and storage3

## Q223 (Topic 4, Original #1)

You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.
 You need to deploy a YAML file to AKS1.
 Solution: From Azure CLI, you run az aks.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q224 (Topic 4, Original #2)

You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.
 You need to deploy a YAML file to AKS1.
 Solution: From Azure CLI, you run the kubectl client.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q225 (Topic 4, Original #3)

You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.
 You need to deploy a YAML file to AKS1.
 Solution: From Azure CLI, you run azcopy.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q226 (Topic 4, Original #4)

You have an Azure virtual machine named VM1 that runs Windows Server 2016.
 You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.
 Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source.
 Does that meet the goal?

- [ ] A. Yes
- [x] B. No

## Q227 (Topic 4, Original #5)

You have an Azure subscription named Subscription1. Subscription1 contains the resources in the following table.

{{img:/exam-media/az-104/T4/0023300001.png}}

 VNet1 is in RG1. VNet2 is in RG2. There is no connectivity between VNet1 and VNet2.
 An administrator named Admin1 creates an Azure virtual machine named VM1 in RG1. VM1 uses a disk named Disk1 and connects to VNet1. Admin1 then installs a custom application in VM1.
 You need to move the custom application to VNet2. The solution must minimize administrative effort.
 Which two actions should you perform? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0023400001.png}}

- [ ] A. First action:Create a network interface in RG2
- [x] B. First action: Delete Vm1
- [ ] C. Second action: Attach a network interface
- [x] D. Second action: Create a new virtual machine
- [ ] E. Second action: Move Vm1 to RG2

## Q228 (Topic 4, Original #6)

You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines.
 You need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text.
 What should you create to store the password?

- [x] A. an Azure Key Vault and an access policy
- [ ] B. an Azure Storage account and an access policy
- [ ] C. a Recovery Services vault and a backup policy
- [ ] D. Azure Active Directory (AD) Identity Protection and an Azure policy

## Q229 (Topic 4, Original #7)

You have the App Service plans shown in the following table.

{{img:/exam-media/az-104/T4/0023600001.png}}

 You plan to create the Azure web apps shown in the following table.

{{img:/exam-media/az-104/T4/0023700001.png}}

 You need to identify which App Service plans can be used for the web apps.
 What should you identify? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0023700002.png}}

- [ ] A. Webapp1: ASP1 only
- [ ] B. Webapp1: ASP3 only
- [x] C. Webapp1: ASP1 and ASP3  only
- [x] D. Webap2: ASP1 only
- [ ] E. Webap2: ASP1 and ASP2 only

## Q230 (Topic 4, Original #8)

You create a virtual machine scale set named Scale1. Scale1 is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T4/0024000001.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0024100001-de6659b19931a8f924691f68fee262efd39c8998.jpg}}

- [ ] A. 1. 2 virtual machine
- [ ] B. 1. 10 virtual machine
- [x] C. 1. 6 virtual machine
- [x] D. 2. 2 virtual machine
- [ ] E. 2. 4 virtual machine

## Q231 (Topic 4, Original #9)

You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.
 You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.
 Which two actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [x] A. Upload a configuration script
- [ ] B. Create an automation account
- [ ] C. Create an Azure policy
- [x] D. Modify the extensionProfile section of the Azure Resource Manager template
- [ ] E. Create a new virtual machine scale set in the Azure portal

## Q232 (Topic 4, Original #10)

You have an Azure Kubernetes Service (AKS) cluster named AKS1 and a computer named Computer1 that runs Windows 10. Computer1 that has the Azure CLI installed.
 You need to install the kubectl client on Computer1.
 Which command should you run? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0024400001.jpg}}

- [x] A. az
- [ ] B. docker
- [x] C. aks
- [ ] D. /package
- [ ] E. pull

## Q233 (Topic 4, Original #11)

You onboard 10 Azure virtual machines to Azure Automation State Configuration.
 You need to use Azure Automation State Configuration to manage the ongoing consistency of the virtual machine configurations.
 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.
 Select and Place:

{{img:/exam-media/az-104/T4/0024500001.jpg}}

- [x] A. Upload a configuration to Azure Automation State Configuration
- [x] B. Compile a configuration into node configuration
- [x] C. Check the compliance status of the node
- [ ] D. Assign tags to the virtual machines
- [ ] E. Create a management group

## Q234 (Topic 4, Original #12)

You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine.
 Template1 contains the following text:

{{img:/exam-media/az-104/T4/0024700001.png}}

 The variables section in Template1 contains the following text:
 "location": "westeurope"
 The resources section in Template1 contains the following text:

{{img:/exam-media/az-104/T4/0024700002.png}}

 You need to deploy the virtual machine to the West US location by using Template1.
 What should you do?

- [x] A. Modify the location in the resources section to westus
- [ ] B. Select West US during the deployment
- [ ] C. Modify the location in the variables section to westus

## Q235 (Topic 4, Original #13)

You create an App Service plan named Plan1 and an Azure web app named webapp1.
 You discover that the option to create a staging slot is unavailable.
 You need to create a staging slot for Plan1.
 What should you do first?

- [x] A. From Plan1, scale up the App Service plan
- [ ] B. From webapp1, modify the Application settings
- [ ] C. From webapp1, add a custom domain
- [ ] D. From Plan1, scale out the App Service plan

## Q236 (Topic 4, Original #14)

You plan to move a distributed on-premises app named App1 to an Azure subscription.
 After the planned move, App1 will be hosted on several Azure virtual machines.
 You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance.
 What should you create?

- [x] A. one virtual machine scale set that has 10 virtual machines instances
- [ ] B. one Availability Set that has three fault domains and one update domain
- [ ] C. one Availability Set that has 10 update domains and one fault domain
- [ ] D. one virtual machine scale set that has 12 virtual machines instances

## Q237 (Topic 4, Original #15)

You have an Azure virtual machine named VM1 that runs Windows Server 2016.
 You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.
 Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q238 (Topic 4, Original #16)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.
 You receive a notification that VM1 will be affected by maintenance.
 You need to move VM1 to a different host immediately.
 Solution: From the Overview blade, you move the virtual machine to a different subscription.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q239 (Topic 4, Original #17)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.
 You receive a notification that VM1 will be affected by maintenance.
 You need to move VM1 to a different host immediately.
 Solution: From the Redeploy blade, you click Redeploy.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q240 (Topic 4, Original #18)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.
 You receive a notification that VM1 will be affected by maintenance.
 You need to move VM1 to a different host immediately.
 Solution: From the Update management blade, you click Enable.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. no

## Q241 (Topic 4, Original #19)

You have an Azure subscription that contains a web app named webapp1.
 You need to add a custom domain named www.contoso.com to webapp1.
 What should you do first?

- [x] A. Create a DNS record
- [ ] B. Add a connection string
- [ ] C. Upload a certificate.
- [ ] D. Stop webapp1.

## Q242 (Topic 4, Original #20)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0025300001.png}}

 VM1 connects to VNET1.
 You need to connect VM1 to VNET2.
 Solution: You move VM1 to RG2, and then you add a new network interface to VM1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q243 (Topic 4, Original #21)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0025400001.png}}

VM1 connects to VNET1.
You need to connect VM1 to VNET2.
Solution: You delete VM1. You recreate VM1, and then you create a new network interface for VM1 and connect it to VNET2.
Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q244 (Topic 4, Original #22)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0025600001.png}}

 VM1 connects to VNET1.
 You need to connect VM1 to VNET2.
 Solution: You turn off VM1, and then you add a new network interface to VM1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q245 (Topic 4, Original #23)

You have an Azure subscription named Subscription1 that contains the quotas shown in the following table.

{{img:/exam-media/az-104/T4/0025700001.png}}

 You deploy virtual machines to Subscription1 as shown in the following table.

{{img:/exam-media/az-104/T4/0025700002.png}}

 You plan to deploy the virtual machines shown in the following table.

{{img:/exam-media/az-104/T4/0025700003.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.
 Hot Area:

- [x] A. You can deploy VM3 to West US
- [ ] B. You can deploy VM4 to West US
- [ ] C. You can deploy VM5 to West US

## Q246 (Topic 4, Original #24)

You have an Azure subscription that contains an Azure Availability Set named WEBPROD-AS-USE2 as shown in the following exhibit.

{{img:/exam-media/az-104/T4/0025900001.png}}

 You add 14 virtual machines to WEBPROD-AS-USE2.
 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0026000001.png}}

- [x] A. 1. 2
- [ ] B. 1. 7
- [ ] C. 2. 2
- [x] D. 2. 7
- [ ] E. 2. 10

## Q247 (Topic 4, Original #25)

You deploy an Azure Kubernetes Service (AKS) cluster named Cluster1 that uses the IP addresses shown in the following table.

{{img:/exam-media/az-104/T4/0026200001.png}}

 You need to provide internet users with access to the applications that run in Cluster1.
 Which IP address should you include in the DNS record for Cluster1?

- [x] A. 131.107.2.1
- [ ] B. 10.0.10.11
- [ ] C. 172.17.7.1
- [ ] D. 192.168.10.2

## Q248 (Topic 4, Original #26)

You have a deployment template named Template1 that is used to deploy 10 Azure web apps.
 You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs.
 What should you identify?

- [ ] A. five Azure Application Gateways
- [x] B. one App Service plan
- [ ] C. 10 App Service plans
- [ ] D. one Azure Traffic Manager
- [ ] E. one Azure Application Gateway

## Q249 (Topic 4, Original #27)

You plan to deploy an Azure container instance by using the following Azure Resource Manager template.

{{img:/exam-media/az-104/T4/0026400001.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the template.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0026500001.jpg}}

- [x] A. 1. can connect to the container from any device
- [ ] B. 1. cannot connect to the container
- [ ] C. 1. can only connect to the container from devices that run Windows
- [x] D. 2. the container will restart automatically
- [ ] E. 2. the container must be redeployed

## Q250 (Topic 4, Original #28)

You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of-business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size.
 You plan to make the following changes to VM1:
 ✑ Change the size to D8s v3.
 ✑ Add a 500-GB managed disk.
 ✑ Add the Puppet Agent extension.
 ✑ Enable Desired State Configuration Management.
 Which change will cause downtime for VM1?

- [ ] A. Enable Desired State Configuration Management
- [ ] B. Add a 500-GB managed disk
- [x] C. Change the size to D8s v3
- [ ] D. Add the Puppet Agent extension

## Q251 (Topic 4, Original #29)

You have an app named App1 that runs on an Azure web app named webapp1.
 The developers at your company upload an update of App1 to a Git repository named Git1.
 Webapp1 has the deployment slots shown in the following table.

{{img:/exam-media/az-104/T4/0026700001.png}}

 You need to ensure that the App1 update is tested before the update is made available to users.
 Which two actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [x] A. Swap the slots
- [ ] B. Deploy the App1 update to webapp1-prod, and then test the update
- [ ] C. Stop webapp1-prod
- [x] D. Deploy the App1 update to webapp1-test, and then test the update
- [ ] E. Stop webapp1-test

## Q252 (Topic 4, Original #30)

You have an Azure subscription named Subscription1 that has the following providers registered:
 ✑ Authorization
 ✑ Automation
 ✑ Resources
 ✑ Compute
 ✑ KeyVault
 ✑ Network
 ✑ Storage
 ✑ Billing
 ✑ Web
 Subscription1 contains an Azure virtual machine named VM1 that has the following configurations:
 ✑ Private IP address: 10.0.0.4 (dynamic)
 ✑ Network security group (NSG): NSG1
 ✑ Public IP address: None
 ✑ Availability set: AVSet
 ✑ Subnet: 10.0.0.0/24
 ✑ Managed disks: No
 ✑ Location: East US
 You need to record all the successful and failed connection attempts to VM1.
 Which three actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. Enable Azure Network Watcher in the East US Azure region.
- [ ] B. Add an Azure Network Watcher connection monitor.
- [x] C. Enable Azure Network Watcher flow logs.
- [x] D. Create an Azure Storage account.
- [x] E. Register the Microsoft.Insights resource provider.

## Q253 (Topic 4, Original #31)

You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible.
 What should you do?

- [ ] A. Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine.
- [ ] B. Deploy five virtual machines. Modify the Size setting for each virtual machine.
- [ ] C. Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode.
- [x] D. Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode.

## Q254 (Topic 4, Original #32)

You plan to create the Azure web apps shown in the following table.

{{img:/exam-media/az-104/T4/0026900001.jpg}}

 What is the minimum number of App Service plans you should create for the web apps?

- [ ] A. 1
- [x] B. 2
- [ ] C. 3
- [ ] D. 4

## Q255 (Topic 4, Original #33)

You have a pay-as-you-go Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T4/0027000001-59aaa678ae41664cb64237dce47ee48ed144c013.png}}

 You create the budget shown in the following exhibit.

{{img:/exam-media/az-104/T4/0027100001.jpg}}

 The AG1 action group contains a user named   admin@contoso.com   only.
 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 Hot Area:

{{img:/exam-media/az-104/T4/0027200001.jpg}}

- [ ] A. VM1 and VM2 are turned off
- [x] B. VM1 and VM2 continue to run
- [ ] C. VM1 is turned off, and VM2 continues to run
- [ ] D. no email notifications will be sent each month
- [x] E. one email notifications will be sent each month

## Q256 (Topic 4, Original #34)

You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.
 You need to view the date and time when the resources were created in RG1.
 Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q257 (Topic 4, Original #35)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0027400001.png}}

 VM1 connects to VNET1.
 You need to connect VM1 to VNET2.
 Solution: You create a new network interface, and then you add the network interface to VM1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q258 (Topic 4, Original #36)

You have an Azure Active Directory (Azure AD) tenant named adatum.com that contains the users shown in the following table.

{{img:/exam-media/az-104/T4/0027500001.png}}

 Adatum.com has the following configurations:
 ✑ Users may join devices to Azure AD is set to User1.
 ✑ Additional local administrators on Azure AD joined devices is set to None.
 You deploy Windows 10 to a computer named Computer1. User1 joins Computer1 to adatum.com.
 You need to identify the local Administrator group membership on Computer1.
 Which users are members of the local Administrators group?

- [ ] A. User1 only
- [ ] B. User2 only
- [x] C. User1 and User2 only
- [ ] D. User1, User2, and User3 only
- [ ] E. User1, User2, User3, and User4

## Q259 (Topic 4, Original #37)

You have Azure subscriptions named Subscription1 and Subscription2.
 Subscription1 has following resource groups:

{{img:/exam-media/az-104/T4/0027600001.png}}

 RG1 includes a web app named App1 in the West Europe location.
 Subscription2 contains the following resource groups:

{{img:/exam-media/az-104/T4/0027600002.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.
 Hot Area:

- [x] A. App1 can be moved to RG2
- [x] B. App1 can be moved to RG3
- [x] C. App1 can be moved to RG4

## Q260 (Topic 4, Original #38)

You have an Azure subscription named Subscription1 that contains the following resource group:
 ✑ Name: RG1
 ✑ Region: West US
 ✑ Tag: `tag1`: `value1`
 You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:
 ✑ Exclusions: None
 ✑ Policy definition: Append a tag and its value to resources
 ✑ Assignment name: Policy1
 ✑ Parameters:
 ✑ Tag name: tag2

 Tag value: value2 -

{{img:/exam-media/az-104/T4/0027800009.png}}

 After Policy1 is assigned, you create a storage account that has the following configuration:
 ✑ Name: storage1
 ✑ Location: West US
 ✑ Resource group: RG1
 ✑ Tags: `tag3`: `value3`
 You need to identify which tags are assigned to each resource.
 What should you identify? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0027900005.jpg}}

- [x] A. Tags assigned to RG1: "tag1":"value1" only
- [ ] B. Tags assigned to RG1: "tag1":"value2" only
- [ ] C. Tags assigned to storage: "tag3":"value3" only
- [ ] D. Tags assigned to storage: "tag1":"value1" and "tag3":"value3" only
- [x] E. Tags assigned to storage: "tag2":"value2" and "tag3":"value3" only

## Q261 (Topic 4, Original #39)

You have an Azure subscription named Subscription1.
In Subscription1, you create an alert rule named Alert1.
The Alert1 action group is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T4/0028100001.jpg}}

Alert1 alert criteria triggered every minute.
Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
NOTE: Each correct selection is worth one point.
Hot Area:

{{img:/exam-media/az-104/T4/0028200001.png}}

- [ ] A. Alert1: 0
- [ ] B. Alert1: 4
- [x] C. Alert1: 60
- [ ] D. Alert2: 0
- [x] E. Alert2: 12

## Q262 (Topic 4, Original #40)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0028300005.png}}

 You create virtual machines in Subscription1 as shown in the following table.

{{img:/exam-media/az-104/T4/0028400001.png}}

 You plan to use Vault1 for the backup of as many virtual machines as possible.
 Which virtual machines can be backed up to Vault1?

- [ ] A. VM1 only
- [ ] B. VM3 and VMC only
- [ ] C. VM1, VM2, VM3, VMA, VMB, and VMC
- [x] D. VM1, VM3, VMA, and VMC only
- [ ] E. VM1 and VM3 only

## Q263 (Topic 4, Original #41)

You have an Azure Kubernetes Service (AKS) cluster named AKS1.
 You need to configure cluster autoscaler for AKS1.
 Which two tools should you use? Each correct answer presents a complete solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. the kubectl command
- [x] B. the az aks command
- [ ] C. the Set-AzVm cmdlet
- [x] D. the Azure portal
- [ ] E. the Set-AzAks cmdlet

## Q264 (Topic 4, Original #42)

You create the following resources in an Azure subscription:
 ✑ An Azure Container Registry instance named Registry1
 ✑ An Azure Kubernetes Service (AKS) cluster named Cluster1
 You create a container image named App1 on your administrative workstation.
 You need to deploy App1 to Cluster1.
 What should you do first?

- [x] A. Run the docker push command.
- [ ] B. Create an App Service plan.
- [ ] C. Run the az acr build command.
- [ ] D. Run the az aks create command.

## Q265 (Topic 4, Original #43)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0028600001.png}}

 You need to configure a proximity placement group for VMSS1.
 Which proximity placement groups should you use?

- [x] A. Proximity2 only
- [ ] B. Proximity1, Proximity2, and Proximity3
- [ ] C. Proximity1 only
- [ ] D. Proximity1 and Proximity3 only

## Q266 (Topic 4, Original #44)

You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.
 You need to view the date and time when the resources were created in RG1.
 Solution: From the Subscriptions blade, you select the subscription, and then click Resource providers.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q267 (Topic 4, Original #45)

You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.
 You need to view the date and time when the resources were created in RG1.
 Solution: From the RG1 blade, you click Automation script.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q268 (Topic 4, Original #46)

You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.
 You need to view the date and time when the resources were created in RG1.
 Solution: From the RG1 blade, you click Deployments.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q269 (Topic 4, Original #47)

You have an Azure subscription named Subscription1.
 You deploy a Linux virtual machine named VM1 to Subscription1.
 You need to monitor the metrics and the logs of VM1.
 What should you use?

- [ ] A. Azure HDInsight
- [x] B. Linux Diagnostic Extension (LAD) 3.0
- [ ] C. the AzurePerformanceDiagnostics extension
- [ ] D. Azure Analysis Services

## Q270 (Topic 4, Original #48)

You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.
 You install and configure a web server and a DNS server on VM1.
 VM1 has the effective network security rules shown in the following exhibit:

{{img:/exam-media/az-104/T4/0029000001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0029100001.png}}

- [ ] A. 1. can connect to only the DNS server VM1
- [x] B. 1. can connect to only the web server on VM1
- [ ] C. 1. can connect to the web server and the DNS server on VM1
- [x] D. 2. can connect to the web server and the DNS server on VM1
- [ ] E. 2. can connect to only the web server on VM1

## Q271 (Topic 4, Original #49)

You plan to deploy three Azure virtual machines named VM1, VM2, and VM3. The virtual machines will host a web app named App1.
 You need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable.
 What should you deploy?

- [ ] A. all three virtual machines in a single Availability Zone
- [ ] B. all virtual machines in a single Availability Set
- [x] C. each virtual machine in a separate Availability Zone
- [ ] D. each virtual machine in a separate Availability Set

## Q272 (Topic 4, Original #50)

You have an Azure virtual machine named VM1 that runs Windows Server 2019.
 You save VM1 as a template named Template1 to the Azure Resource Manager library.
 You plan to deploy a virtual machine named VM2 from Template1.
 What can you configure during the deployment of VM2?

- [ ] A. operating system
- [ ] B. administrator username
- [ ] C. virtual machine size
- [x] D. resource group

## Q273 (Topic 4, Original #51)

You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances.
 At the end of each month, CPU usage for VM1 peaks when App1 runs.
 You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month.
 What task should you include in the runbook?

- [ ] A. Add the Azure Performance Diagnostics agent to VM1.
- [x] B. Modify the VM size property of VM1.
- [ ] C. Add VM1 to a scale set.
- [ ] D. Increase the vCPU quota for the subscription.
- [ ] E. Add a Desired State Configuration (DSC) extension to VM1.

## Q274 (Topic 4, Original #52)

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.
 You need to ensure that NGINX is available on all the virtual machines after they are deployed.
 What should you use?

- [ ] A. Deployment Center in Azure App Service
- [x] B. A Desired State Configuration (DSC) extension
- [ ] C. the New-AzConfigurationAssignment cmdlet
- [ ] D. a Microsoft Intune device configuration profile

## Q275 (Topic 4, Original #53)

You deploy an Azure Kubernetes Service (AKS) cluster that has the network profile shown in the following exhibit.

{{img:/exam-media/az-104/T4/0029500003.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0029600001.jpg}}

- [x] A. 1. 10.224.0.0/16
- [ ] B. 2. 10.224.0.0/16
- [ ] C. 1. 10.0.0.0/16
- [x] D. 2. 10.0.0.0/16
- [ ] E. 2. 172.17.0.1/16

## Q276 (Topic 4, Original #55)

You have an Azure virtual machine named VM1 that runs Windows Server 2019. The VM was deployed using default drive settings.
 You sign in to VM1 as a user named User1 and perform the following actions:
 ✑ Create files on drive C.
 ✑ Create files on drive D.
 ✑ Modify the screen saver timeout.
 ✑ Change the desktop background.
 You plan to redeploy VM1.
 Which changes will be lost after you redeploy VM1?

- [ ] A. the modified screen saver timeout
- [ ] B. the new desktop background
- [x] C. the new files on drive D
- [ ] D. the new files on drive C

## Q277 (Topic 4, Original #56)

You have an Azure subscription.
 You have an on-premises virtual machine named VM1. The settings for VM1 are shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T4/0030300001.png}}

 You need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines.
 What should you modify on VM1?

- [ ] A. the memory
- [ ] B. the network adapters
- [x] C. the hard drive
- [ ] D. the processor
- [ ] E. Integration Services

## Q278 (Topic 4, Original #58)

You have an Azure subscription named Subscription1 that is used by several departments at your company. Subscription1 contains the resources in the following table:

{{img:/exam-media/az-104/T4/0030700001.png}}

 Another administrator deploys a virtual machine named VM1 and an Azure Storage account named storage2 by using a single Azure Resource Manager template.
 You need to view the template used for the deployment.
 From which blade can you view the template that was used for the deployment?

- [ ] A. VM1
- [x] B. RG1
- [ ] C. storage2
- [ ] D. container1

## Q279 (Topic 4, Original #59)

You have an Azure web app named App1. App1 has the deployment slots shown in the following table:

{{img:/exam-media/az-104/T4/0030900002.png}}

 In webapp1-test, you test several changes to App1.
 You back up App1.
 You swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues.
 You need to revert to the previous version of App1 as quickly as possible.
 What should you do?

- [ ] A. Redeploy App1
- [x] B. Swap the slots
- [ ] C. Clone App1
- [ ] D. Restore the backup of App1

## Q280 (Topic 4, Original #60)

You have an Azure subscription named Subscription1. Subscription1 contains two Azure virtual machines VM1 and VM2. VM1 and VM2 run Windows Server
 2016.
 VM1 is backed up daily by Azure Backup without using the Azure Backup agent.
 VM1 is affected by ransomware that encrypts data.
 You need to restore the latest backup of VM1.
 To which location can you restore the backup? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0031100001.jpg}}

- [ ] A. file recovery of VM1 to: VM1 only
- [ ] B. file recovery of VM1 to: A new Azure virtual machine only
- [x] C. file recovery of VM1 to: Any Windows computer that has Internet connectivity
- [x] D. restore VM1 to: VM1 or a new Azure vitual machine only
- [ ] E. restore VM1 to: Any Windows computer that has Internet connectivity

## Q281 (Topic 4, Original #61)

You plan to back up an Azure virtual machine named VM1.
 You discover that the Backup Pre-Check status displays a status of Warning.
 What is a possible cause of the Warning status?

- [ ] A. VM1 is stopped.
- [x] B. VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed.
- [ ] C. VM1 has an unmanaged disk.
- [ ] D. A Recovery Services vault is unavailable.

## Q282 (Topic 4, Original #62)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.
 You receive a notification that VM1 will be affected by maintenance.
 You need to move VM1 to a different host immediately.
 Solution: From the Overview blade, you move the virtual machine to a different resource group.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q283 (Topic 4, Original #63)

You have an Azure subscription.
 You plan to use Azure Resource Manager templates to deploy 50 Azure virtual machines that will be part of the same availability set.
 You need to ensure that as many virtual machines as possible are available if the fabric fails or during servicing.
 How should you configure the template? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0031400001.png}}

- [ ] A. platformFaultDomainCount: 0
- [ ] B. platformFaultDomainCount: 2
- [x] C. platformFaultDomainCount: 3
- [x] D. platformUpdateDomainCount: 20
- [ ] E. platformUpdateDomainCount: 10

## Q284 (Topic 4, Original #64)

You have an Azure virtual machine named VM1 that runs Windows Server 2016.
 You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.
 Solution: You create an Azure Log Analytics workspace and configure the Agent configuration settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q285 (Topic 4, Original #65)

You have an Azure subscription.
 You deploy a virtual machine scale set that is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T4/0031800001.png}}

 Use the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0031900001.png}}

- [ ] A. 9:00 AM : 2
- [x] B. 9:00 AM : 3
- [ ] C. 9:00 AM : 5
- [ ] D. 10:00 AM : 3
- [x] E. 10:00 AM : 1

## Q286 (Topic 4, Original #66)

You have web apps in the West US, Central US and East US Azure regions.
 You have the App Service plans shown in the following table.

{{img:/exam-media/az-104/T4/0032100001.png}}

 You plan to create an additional App Service plan named ASP5 that will use the Linux operating system.
 You need to identify in which of the currently used locations you can deploy ASP5.
 What should you recommend?

- [x] A. West US, Central US, or East US
- [ ] B. Central US only
- [ ] C. East US only
- [ ] D. West US only

## Q287 (Topic 4, Original #67)

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.
 You need to ensure that NGINX is available on all the virtual machines after they are deployed.
 What should you use?

- [ ] A. the New-AzConfigurationAssignment cmdlet
- [x] B. a Desired State Configuration (DSC) extension
- [ ] C. Azure Active Directory (Azure AD) Application Proxy
- [ ] D. Azure Application Insights

## Q288 (Topic 4, Original #69)

You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.
 You need to deploy a YAML file to AKS1.
 Solution: From Azure Cloud Shell, you run az aks.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q289 (Topic 4, Original #70)

You have an Azure virtual machine named VM1 that runs Windows Server 2016.
 You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.
 Solution: You create an Azure Log Analytics workspace and configure the data settings. You add the Microsoft Monitoring Agent VM extension to VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q290 (Topic 4, Original #71)

You have an Azure virtual machine named VM1 that runs Windows Server 2016.
 You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.
 Solution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in
 Azure Monitor and specify the Log Analytics workspace as the source.
 Does this meet the goal

- [x] A. Yes
- [ ] B. No

## Q291 (Topic 4, Original #72)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0032600001.png}}

 All virtual machines run Windows Server 2016.
 On VM1, you back up a folder named Folder1 as shown in the following exhibit.

{{img:/exam-media/az-104/T4/0032600002.jpg}}

 You plan to restore the backup to a different virtual machine.
 You need to restore the backup to VM2.
 What should you do first?

- [ ] A. From VM1, install the Windows Server Backup feature.
- [x] B. From VM2, install the Microsoft Azure Recovery Services Agent.
- [ ] C. From VM1, install the Microsoft Azure Recovery Services Agent.
- [ ] D. From VM2, install the Windows Server Backup feature.

## Q292 (Topic 4, Original #73)

You have an Azure subscription.
 You need to use an Azure Resource Manager (ARM) template to create a virtual machine that will have multiple data disks.
 How should you complete the template? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0032800001.png}}

- [x] A. storageProfile: copy
- [ ] B. storageProfile:: copyIndex
- [ ] C. lun: copy
- [x] D. lun: copyIndex
- [ ] E. lun: dependsOn

## Q293 (Topic 4, Original #74)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0033000001.png}}

 Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.
 You need to create a new network interface named NIC2 for VM1.
 Solution: You create NIC2 in RG1 and West US.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q294 (Topic 4, Original #75)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0033100001.png}}

 Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.
 You need to create a new network interface named NIC2 for VM1.
 Solution: You create NIC2 in RG2 and Central US.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q295 (Topic 4, Original #76)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/0033200001.png}}

 Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.
 You need to create a new network interface named NIC2 for VM1.
 Solution: You create NIC2 in RG2 and West US.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q296 (Topic 4, Original #77)

You develop the following Azure Resource Manager (ARM) template to create a resource group and deploy an Azure Storage account to the resource group.

{{img:/exam-media/az-104/T4/0033400001.jpg}}

 Which cmdlet should you run to deploy the template?

- [ ] A. New-AzResourc
- [ ] B. New-AzResourceGroupDeployment
- [ ] C. New-AzTenantDeployment
- [x] D. New-AzDeployment

## Q297 (Topic 4, Original #78)

You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2.
 You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup.
 What should you create first, and what should you use to exclude Folder2? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0033600001.jpg}}

- [x] A. First create: An Azure storage account
- [ ] B. First create: A Bakup vault
- [ ] C. First create: A Revocery Services vault
- [x] D. To exclude Folder2, use: a_backup.filter file
- [ ] E. To exclude Folder2, use: a backup policy

## Q298 (Topic 4, Original #79)

You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.
 You need to ensure that NGINX is available on all the virtual machines after they are deployed.
 What should you use?

- [ ] A. the Publish-AzVMDscConfiguration cmdlet
- [ ] B. Azure Application Insights
- [x] C. Azure Custom Script Extension
- [ ] D. a Microsoft Endpoint Manager device configuration profile

## Q299 (Topic 4, Original #80)

You have an Azure subscription. The subscription contains a virtual machine that runs Windows 10.
 You need to join the virtual machine to an Active Directory domain.
 How should you complete the Azure Resource Manager (ARM) template? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T4/0034000001.jpg}}

- [ ] A. "type": "Extensions"
- [ ] B. "type": "Microsoft.Computer/VirtualMachines"
- [x] C. "type": "Microsoft.Computer/VirtualMachines/extensions"
- [x] D. "ProtectedSettings":{
- [ ] E. "Settings":{

## Q300 (Topic 4, Original #81)

You have an Azure subscription that contains three virtual machines named VM1, VM2, and VM3. All the virtual machines are in an availability set named AVSet1.

 You need to scale up VM1 to a new virtual machine size, but the intended size is unavailable.

 What should you do first?

- [ ] A. Create a proximity placement group.
- [x] B. Deallocate VM1.
- [ ] C. Convert AvSet1 into a managed availability set.
- [ ] D. Shut down VM3 and VM3.

## Q301 (Topic 4, Original #82)

You are creating an Azure Kubernetes Services (AKS) cluster as shown in the following exhibit.

{{img:/exam-media/az-104/T4/image593.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T4/image594.png}}

- [ ] A. create windows container in AKS1: enable virtual nodes
- [ ] B. create windows container in AKS1: modify the Kubernetes verison setting
- [x] C. create windows container in AKS1: modify the Network configuration setting
- [x] D. integrate AKS with azure container: AKS-managed Entra ID
- [ ] E. integrate AKS with azure container: authentication method

## Q302 (Topic 4, Original #83)

You have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named Cluster1. Cluster1 hosts a node pool named Pool1 that has four nodes.

 You need to perform a coordinated upgrade of Cluster1. The solution must meet the following requirements:

 • Deploy two new nodes to perform the upgrade.
 • Minimize costs.

 How should you complete the command? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T4/image596.png}}

- [ ] A. add
- [ ] B. get-update
- [x] C. updates
- [ ] D. --max-count 2
- [x] E. --max-surge 2

## Q303 (Topic 4, Original #84)

You have an Azure subscription.

 You create the following file named Deploy.json.

{{img:/exam-media/az-104/T4/image598.png}}

 You connect to the subscription and run the following commands.

{{img:/exam-media/az-104/T4/image599.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. The commands will create four new resources
- [ ] B. The commands will create storage accounts int the West US Azure region
- [x] C. The first storace account that is created will have a prefix of 0

## Q304 (Topic 4, Original #85)

You have an Azure container registry named Registry1 that contains an image named image1.

 You receive an error message when you attempt to deploy a container instance by using image1.

 You need to be able to deploy a container instance by using image1.

 Solution: You set Admin user to Enable for Registry1.

 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q305 (Topic 4, Original #86)

You have an Azure subscription that contains a resource group named RG1.

 You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements:

 • Deploy new resources to RG1.
 • Remove all the existing resources from RG1 before deploying the new resources.

 How should you complete the command? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T4/image602.png}}

- [ ] A. params.json: -QueryString
- [x] B. params.json: -ResourceGroupName
- [ ] C. params.json: -Tag
- [x] D. -Mode Complete
- [ ] E. -Mode Incremental

## Q306 (Topic 4, Original #87)

You have an Azure App Service web app named app1.

 You configure autoscaling as shown in following exhibit.

{{img:/exam-media/az-104/T4/image604.png}}

 You configure the autoscale rule criteria as shown in the following exhibit.

{{img:/exam-media/az-104/T4/image605.png}}

 Use the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T4/image606.png}}

- [ ] A. 1 instance
- [x] B. 2 instances
- [ ] C. 1 minute
- [ ] D. 5 minutes
- [x] E. 15 minutes

## Q307 (Topic 4, Original #88)

You have an Azure subscription.

 You plan to deploy the Azure container instances shown in the following table.

{{img:/exam-media/az-104/T4/image643.png}}

 Which instances can you deploy to a container group?

- [ ] A. Instance1 only
- [ ] B. Instance2 only
- [ ] C. Instance1 and Instance2 only
- [x] D. Instance3 and Instance4 only

## Q308 (Topic 4, Original #90)

You have an Azure subscription that has the public IP addresses shown in the following table.

{{img:/exam-media/az-104/T4/image653.png}}

 You plan to deploy an Instance of Azure Firewall Premium named FW1.

 Which IP addresses can you use?

- [ ] A. IP2 only
- [x] B. IP1 and IP2 only
- [ ] C. IP1, IP2, and IP5 only
- [ ] D. IP1, IP2, IP4, and IP5 only

## Q309 (Topic 4, Original #91)

You have an Azure subscription.

 You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template.

 How should you complete the template? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T4/image676.png}}

- [ ] A. dependsOn: reference
- [x] B. dependsOn: resourceId
- [ ] C. storageProfile: Array
- [ ] D. storageProfile: Image
- [x] E. storageProfile: ImageReference

## Q310 (Topic 4, Original #92)

You need to configure a new Azure App Service app named WebApp1. The solution must meet the following requirements:

 • WebApp1 must be able to verify a custom domain name of app.contoso.com.
 • WebApp1 must be able to automatically scale up to eight instances.
 • Costs and administrative effort must be minimized.

 Which pricing plan should you choose, and which type of record should you use to verify the domain? To answer, select the appropriate options in the answer area.

 NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T4/image686.png}}

- [ ] A. Basic
- [ ] B. Shared
- [x] C. Standard
- [ ] D. AAAA
- [x] E. TXT

## Q311 (Topic 4, Original #93)

You have an Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T4/image713.png}}

 You create an Azure Compute Gallery named ComputeGallery1 as shown in the Azure Compute Gallery exhibit. (Click the Azure Compute Gallery tab.)

{{img:/exam-media/az-104/T4/image714.png}}

 In ComputeGallery1, you create a virtual machine image definition named Image1 as shown in the image definition exhibit. (Click the Image Definition tab.)

{{img:/exam-media/az-104/T4/image715.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No,

 NOTE: Each correct selection is worth one point.

- [x] A. The operating system disk of VM1 can be used as a source for a version of Image1
- [x] B. The operating system disk of VM2 can be used as a source for a version of Image1
- [x] C. The operating system disk of VM3 can be used as a source for a version of Image1

## Q312 (Topic 4, Original #94)

You plan to create the Azure web apps shown in the following table.

{{img:/exam-media/az-104/T4/image718.png}}

 What is the minimum number of App Service plans you should create for the web apps?

- [ ] A. 1
- [x] B. 2
- [ ] C. 3
- [ ] D. 4

## Q313 (Topic 4, Original #85)

You have an Azure subscription that contains the resource groups shown in the following table.

{{img:/exam-media/az-104/T4/image719.png}}

 You create the following Azure Resource Manager (ARM) template named deploy.json.

{{img:/exam-media/az-104/T4/image720.png}}

 You deploy the template by running the following cmdlet.

{{img:/exam-media/az-104/T4/image721.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. The template creates a resource named RG0 in the East US Azure region
- [ ] B. The template creates four new resource groups
- [ ] C. The template creates a resource named RG3 in the East US Azure region

## Q314 (Topic 4, Original #96)

You have an Azure App Service app named App1 that contains two running instances.

 You have an autoscale rule configured as shown in the following exhibit.

{{img:/exam-media/az-104/T4/image724.png}}

 For the Instance limits scale condition setting, you set Maximum to 5.

 During a 30-minute period, App1 uses 80 percent of the available memory.

 What is the maximum number of instances for App1 during the 30-minute period?

- [ ] A. 2
- [ ] B. 3
- [ ] C. 4
- [x] D. 5

## Q315 (Topic 4, Original #97)

You have an Azure subscription that contains the container images shown in the following table.

{{img:/exam-media/az-104/T4/image725.png}}

 You plan to use the following services:

 • Azure Container Instances
 • Azure Container Apps
 • Azure App Service

 In which services can you run the images? To answer, select the options in the answer area.

 NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T4/image726.png}}

- [ ] A. Image1: Azure Container Instances only
- [ ] B. Image2: Azure Container Instances only
- [x] C. Image1: Azure Container Instances and App Services only
- [ ] D. Image2: Azure Container Instances and App Services only
- [x] E. Image2: Azure Container Instances, Azure Container Apps, and App Services only

## Q316 (Topic 4, Original #98)

You have an Azure AD tenant named contoso.com.

 You have an Azure subscription that contains an Azure App Service web app named App1 and an Azure key vault named KV1. KV1 contains a wildcard certificate for contoso.com.

 You have a user named   user1@contoso.com   that is assigned the Owner role for App1 and KV1.

 You need to configure App1 to use the wildcard certificate of KV1.

 What should you do first?

- [ ] A. Create an access policy for KV1 and assign the Microsoft Azure App Service principal to the policy.
- [x] B. Assign a managed user identity to App1.
- [ ] C. Configure KV1 to use the role-based access control (RBAC) authorization system.
- [ ] D. Create an access policy for KV1 and assign the policy to User1.

## Q317 (Topic 4, Original #99)

You have an Azure subscription.

 You plan to deploy the resources shown in the following table.

{{img:/exam-media/az-104/T4/image767.png}}

 You need to create a single Azure Resource Manager (ARM) template that will be used to deploy the resources.

 Which resource should be added to the dependsOn section for VM1?

- [ ] A. VNET1
- [x] B. NIC1
- [ ] C. IP1
- [ ] D. NSG1

## Q318 (Topic 4, Original #100)

You have an Azure subscription.

 You create the following Azure Resource Manager (ARM) template named Template.json.

{{img:/exam-media/az-104/T4/image786.png}}

 You need to deploy Template.json.

 Which PowerShell cmdlet should you run from Azure Cloud Shell?

- [x] A. New-AzSubscriptionDeployment
- [ ] B. New-AzManagementGroupDeployment
- [ ] C. New-AzResourceGroupDeployment
- [ ] D. New-AzTenantDeployment

## Q319 (Topic 4, Original #101)

You have an Azure subscription that contains a resource group named RG1.

 You plan to create a storage account named storage1.

 You have a Bicep file named File1.

 You need to modify File1 so that it can be used to automate the deployment of storage1 to RG1.

 Which property should you modify?

- [ ] A. kind
- [x] B. scope
- [ ] C. sku
- [ ] D. location

## Q320 (Topic 4, Original #102)

Your company purchases a new Azure subscription.

 You create a file named Deploy.json as shown in the following exhibit.

{{img:/exam-media/az-104/T4/image787.png}}

 You connect to the subscription and run the following cmdlet.

 New-AzDeployment -Location westus -TemplateFile “deploy.json”

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. You can deploy a virtual machine to RG1
- [ ] B. You can deploy a virtual machine to RG2
- [x] C. You can manually create a resource group named RG3

## Q321 (Topic 4, Original #103)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/image790.png}}

 You need to configure a proximity placement group for VMSS1.

 Which proximity placement groups should you use?

- [ ] A. Proximity2 only
- [ ] B. Proximity1, Proximity2, and Proximity3
- [x] C. Proximity1 only
- [ ] D. Proximity1 and Proximity3 only

## Q322 (Topic 4, Original #104)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T4/image809.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T4/image810.png}}

 The subscription contains the Azure App Service web apps shown in the following table.

{{img:/exam-media/az-104/T4/image811.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. WebApp1 can communicate with VM2
- [ ] B. NSG1 controls inbound traffic to WebApp1
- [ ] C. WebApp2 can communicate with VM1

## Q323 (Topic 4, Original #105)

You have an Azure subscription named Subscription1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/image814.png}}

 You create virtual machines in Subscription1 as shown in the following table.

{{img:/exam-media/az-104/T4/image815.png}}

 You plan to use Vault1 for the backup of as many virtual machines as possible.

 Which virtual machines can be backed up to Vault1?

- [ ] A. VM1 only
- [ ] B. VM3 and VMC only
- [ ] C. VM1, VM2, VM3, VMA, VMB, and VMC
- [x] D. VM1, VM3, VMA, and VMC only
- [ ] E. VM1 and VM3 only

## Q324 (Topic 4, Original #106)

You have an Azure subscription that contains an Azure container registry named ContReg1.

 You enable the Admin user for ContReg1.

 Which username can you use to sign in to ContReg1?

- [ ] A. admin
- [ ] B. administratir
- [ ] C. ContReg1

## Q325 (Topic 4, Original #107)

You have an Azure subscription.

 You plan to create an Azure container registry named ContReg1.

 You need to ensure that you can push and pull signed images for ContReg1.

 What should you do for ContReg1?

- [ ] A. Enable encryption by using a customer-managed key.
- [ ] B. Create a connected registry.
- [ ] C. Add a token.
- [x] D. Enable content trust.

## Q326 (Topic 4, Original #108)

You have an Azure subscription that has the Azure container registries shown in the following table.

{{img:/exam-media/az-104/T4/image829.png}}

 You plan to use ACR Tasks and configure private endpoint connections.

 Which container registries support ACR Tasks and private endpoints? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T4/image830.png}}

- [ ] A. ACR Task: ContReg1 only
- [x] B. Private endpoints: ContReg1 only
- [ ] C. ACR Task: ContReg1and ContReg2 only
- [x] D. ACR Task: ContReg1, ContReg2, and ContReg3
- [ ] E. Private endpoints: ContReg1, ContReg2, and ContReg3

## Q327 (Topic 4, Original #109)

You plan to deploy several Azure virtual machines that will run Windows Server 2022 in a virtual machine scale set by using an Azure Resource Manager template.

 You need to ensure that NGINX is available on all the virtual machines after they are deployed.

 What should you use?

- [x] A. Azure Custom Script Extension
- [ ] B. Deployment Center in Azure App Service
- [ ] C. Microsoft Entra Application Proxy
- [ ] D. the Publish-AzVMDscConfiguration cmdlet

## Q328 (Topic 4, Original #110)

You have an Azure subscription that contains a container group named Group1. Group1 contains two Azure container instances as shown in the following table.

{{img:/exam-media/az-104/T4/image832.png}}

 You need to ensure that container2 can use CPU resources without negatively affecting container1.

 What should you do?

- [ ] A. Increase the resource limit of container1 to three CPUs.
- [ ] B. Increase the resource limit of container2 to six CPUs.
- [x] C. Remove the resource limit for both containers.
- [ ] D. Decrease the resource limit of container2 to two CPUs.

## Q329 (Topic 4, Original #111)

You have an Azure subscription.

 You plan to deploy a container.

 You need to recommend which Azure services can scale the container automatically.

 What should you recommend?

- [ ] A. Azure Container Apps only
- [ ] B. Azure Container Instances only
- [x] C. Azure Container Apps or Azure App Service only
- [ ] D. Azure Container Instances or Azure App Service only
- [ ] E. Azure Container Apps, Azure Container Instances, or Azure App Service

## Q330 (Topic 4, Original #112)

You have an Azure subscription that uses Azure Container Instances.

 You have a computer that has Azure Command-Line Interface (CLI) and Docker installed.

 You create a container image named image1.

 You need to provision a new Azure container registry and add image1 to the registry.

 Which command should you run for each requirement? To answer, select the options in the answer area.

 NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T4/image833.png}}

- [ ] A. container registry: az acr build
- [x] B. container registry: az acr create
- [ ] C. container registry: az container create
- [ ] D. image1 to the registry: docker pull
- [x] E. image1 to the registry: docker push

## Q331 (Topic 4, Original #113)

You have an Azure container registry named Registry1 that contains an image named image1.

 You receive an error message when you attempt to deploy a container instance by using image1.

 You need to be able to deploy a container instance by using image1.

 Solution: You assign the AcrPull role to ACR-Tasks-Network for Registry1.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q332 (Topic 4, Original #114)

You have an Azure container registry named Registry1 that contains an image named image1.

 You receive an error message when you attempt to deploy a container instance by using image1.

 You need to be able to deploy a container instance by using image1.

 Solution: You select Use dedicated data endpoint for Registry1.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q333 (Topic 4, Original #115)

You have an Azure container registry named Registry1 that contains an image named image1.

 You receive an error message when you attempt to deploy a container instance by using image1.

 You need to be able to deploy a container instance by using image1.

 Solution: You create a private endpoint connection for Registry1.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q334 (Topic 4, Original #116)

You have a Standard Azure App Service plan named Plan1.

 You need to ensure that Plan1 will scale automatically when the CPU usage of the web app exceeds 80 percent.

 What should you select for Plan1?

- [ ] A. Automatic in the Scale out method settings
- [x] B. Rules Based in the Scale out method settings
- [ ] C. Premium P1 in the Scale up (App Service plan) settings
- [ ] D. Standard S1 in the Scale up (App Service plan) settings
- [ ] E. Manual in the Scale out method settings

## Q335 (Topic 4, Original #?)

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.

 To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

 At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

 To start the case study -
 To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

 Overview -

 ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

 Existing Environment -

 Azure Environment -

 ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T4/image865.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T4/image866.png}}

 The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T4/image867.png}}

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/image868.png}}

 Azure Key Vault -

 The subscription contains an Azure key vault named Vault1.

 Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T4/image869.png}}

 Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T4/image870.png}}

 Microsoft Entra Environment -

 ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T4/image871.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T4/image872.png}}

 The adatum.com tenant has a custom security attribute named Attribute1.

 Planned Changes -

 ADatum plans to implement the following changes:

 • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
 • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
 • Whenever possible, use directories to organize storage account content.
 • Grant User1 the permissions required to link Zone1 to VNet1.
 • Assign Attribute1 to supported adatum.com resources.
 • In storage2, create an encryption scope named Scope1.
 • Deploy new containers by using Image1 or Image2.

 Technical Requirements -

 ADatum must meet the following technical requirements:

 • Use TLS for WebApp1.
 • Follow the principle of least privilege.
 • Grant permissions at the required scope only.
 • Ensure that Scope1 is used to encrypt storage services.
 • Use Azure Backup to back up cont1 and share1 as frequently as possible.
 • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

 You need to configure WebApp1 to meet the technical requirements.

 Which certificate can you use from Vault1?

- [ ] A. Cert1 only
- [x] B. Cert1 or Cert2 only
- [ ] C. Cert1 or Cert3 only
- [ ] D. Cert3 or Cert4 only
- [ ] E. Cert1, Cert2 Cert3, or Cert4

## Q336 (Topic 4, Original #118)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.

 You receive a notification that VM1 will be affected by maintenance.

 You need to move VM1 to a different host immediately.

 Solution: From the resource group blade, move VM1 to another subscription.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q337 (Topic 4, Original #119)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.

 You receive a notification that VM1 will be affected by maintenance.

 You need to move VM1 to a different host immediately.

 Solution: From the VM1 Redeploy + reapply blade, you select Redeploy.

 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q338 (Topic 4, Original #120)

You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.

 You receive a notification that VM1 will be affected by maintenance.

 You need to move VM1 to a different host immediately.

 Solution: From the VM1 Updates blade, select One-time update.

 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q339 (Topic 4, Original #121)

This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.

 To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.

 At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.

 To start the case study -
 To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.

 Overview -

 ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

 Existing Environment -

 Azure Environment -

 ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T4/image865.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T4/image866.png}}

 The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T4/image867.png}}

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T4/image868.png}}

 Azure Key Vault -

 The subscription contains an Azure key vault named Vault1.

 Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T4/image869.png}}

 Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T4/image870.png}}

 Microsoft Entra Environment -

 ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T4/image871.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T4/image872.png}}

 The adatum.com tenant has a custom security attribute named Attribute1.

 Planned Changes -

 ADatum plans to implement the following changes:

 • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
 • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
 • Whenever possible, use directories to organize storage account content.
 • Grant User1 the permissions required to link Zone1 to VNet1.
 • Assign Attribute1 to supported adatum.com resources.
 • In storage2, create an encryption scope named Scope1.
 • Deploy new containers by using Image1 or Image2.

 Technical Requirements -

 ADatum must meet the following technical requirements:

 • Use TLS for WebApp1.
 • Follow the principle of least privilege.
 • Grant permissions at the required scope only.
 • Ensure that Scope1 is used to encrypt storage services.
 • Use Azure Backup to back up cont1 and share1 as frequently as possible.
 • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

 You need to meet the technical requirements for the KEK.

 Which PowerShell cmdlet and key should you use?

- [ ] A. Set-AzVMDiskEncryptionExtension and Key2.
- [ ] B. Set-AzDiskEncryptionKey and Key2.
- [ ] C. Set-AzDiskDiskEncryptionKey and Key1
- [x] D. Set-AzVMDiskEncryptionExtension and Key1.

## Q340 (Topic 5, Original #1)

You have an Azure subscription named Sub1.
 You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.

{{img:/exam-media/az-104/T5/0034700001.png}}

 You need to recommend a networking solution to meet the following requirements:
 ✑ Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.
 ✑ Protect the web servers from SQL injection attacks.
 Which Azure resource should you recommend for each requirement? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T5/0034800001.jpg}}

- [x] A. 1. An internal load balancer
- [x] B. 2. an application gateway that uses the WAF tier
- [ ] C. 1.  an application gateway that uses the WAF tier
- [ ] D. 2. a network security group (NSG)
- [ ] E. 1. a public load balancer

## Q341 (Topic 5, Original #2)

Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter.
 You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered.
 You need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters.
 What should you create?

- [ ] A. three Azure Application Gateways and one On-premises data gateway
- [x] B. three virtual hubs and one virtual WAN
- [ ] C. three virtual WANs and one virtual hub
- [ ] D. three On-premises data gateways and one Azure Application Gateway

## Q342 (Topic 5, Original #3)

You plan to deploy five virtual machines to a virtual network subnet.
 Each virtual machine will have a public IP address and a private IP address.
 Each virtual machine requires the same inbound and outbound security rules.
 What is the minimum number of network interfaces and network security groups that you require? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0035000001.jpg}}

- [x] A. Minimum number of network interfaces: 5
- [ ] B. Minimum number of network interfaces: 10
- [x] C. Minimum number of NSG: 1
- [ ] D. Minimum number of NSG: 5
- [ ] E. Minimum number of NSG: 10

## Q343 (Topic 5, Original #4)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0035200001.png}}

 LB1 is configured as shown in the following table.

{{img:/exam-media/az-104/T5/0035200002.png}}

 You plan to create new inbound NAT rules that meet the following requirements:
 ✑ Provide Remote Desktop access to VM1 from the internet by using port 3389.
 ✑ Provide Remote Desktop access to VM2 from the internet by using port 3389.
 What should you create on LB1 before you can create the new inbound NAT rules?

- [x] A. a frontend IP address
- [ ] B. a load balancing rule
- [ ] C. a health probe
- [ ] D. a backend pool

## Q344 (Topic 5, Original #5)

You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table.

{{img:/exam-media/az-104/T5/0035300001.png}}

 You create a private Azure DNS zone named adatum.com. You configure the adatum.com zone to allow auto registration from VNET1.
 Which A records will be added to the adatum.com zone for each virtual machine? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0035400001.jpg}}

- [ ] A. VM1: None
- [x] B. VM1: Private IP address only
- [x] C. VM2: Private IP address only
- [ ] D. VM2: Public IP address only
- [ ] E. VM2: Private and public IP address only

## Q345 (Topic 5, Original #6)

You have an Azure virtual network named VNet1 that connects to your on-premises network by using a site-to-site VPN. VNet1 contains one subnet named
 Sunet1.
 Subnet1 is associated to a network security group (NSG) named NSG1. Subnet1 contains a basic internal load balancer named ILB1. ILB1 has three Azure virtual machines in the backend pool.
 You need to collect data about the IP addresses that connects to ILB1. You must be able to run interactive queries from the Azure portal against the collected data.
 What should you do? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0035600001.png}}

- [ ] A. Resource to create: An Azure Event Grid
- [x] B. Resource to create: An Azure Log analytics workspace
- [ ] C. Resource on which to enable diagnostics: ILB1
- [x] D. Resource on which to enable diagnostics: NSG1
- [ ] E. Resource to create: An AzureStorage account

## Q346 (Topic 5, Original #7)

You have the Azure virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/0035700001.png}}

 To which virtual networks can you establish a peering connection from VNet1?

- [ ] A. VNet2 andVNet3 only
- [ ] B. VNet2 only
- [x] C. VNet3 and VNet4 only
- [ ] D. VNet2, VNet3, and VNet4

## Q347 (Topic 5, Original #8)

You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Production.
 The NVA subnet contains two network virtual appliances (NVAs) that will perform network traffic inspection between the Perimeter subnet and the Production subnet.
 You need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements:
 ✑ The NVAs must run in an active-active configuration that uses automatic failover.
 ✑ The load balancer must load balance traffic to two services on the Production subnet. The services have different IP addresses.
 Which three actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [x] A. Deploy a standard load balancer
- [x] B. Add two load balancing rules that have HA Ports and Floating IP enabled
- [x] C. Add a frontend IP configuration, two backend pools, and a health probe
- [ ] D. Add two load balancing rules that have HA Ports enabled and Floating IP disabled
- [ ] E. Deploy a basic load balancer

## Q348 (Topic 5, Original #9)

You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named
 VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1.
 On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1.
 You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2.
 You need to ensure that you can connect Client1 to VNet2.
 What should you do?

- [x] A. Download and re-install the VPN client configuration package on Client1.
- [ ] B. Select Allow gateway transit on VNet1.
- [ ] C. Select Allow gateway transit on VNet2.
- [ ] D. Enable BGP on VPNGW1

## Q349 (Topic 5, Original #10)

You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table.

{{img:/exam-media/az-104/T5/0036000001.png}}

 You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.
 You create a virtual network link for contoso.com as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0036100001.jpg}}

- [x] A. When VM1 starts, a record for VM1 is added to the contoso.com DNS zone.
- [x] B. When VM2 starts, a record for VM2 is added to the contoso.com DNS zone.
- [ ] C. When VM3 starts, a record for VM3 is added to the contoso.com DNS zone.

## Q350 (Topic 5, Original #11)

You have an Azure subscription that contains the resources in the following table.

{{img:/exam-media/az-104/T5/0036300001.png}}

 To which subnets can you apply NSG1?

- [ ] A. the subnets on VNet1 only
- [ ] B. the subnets on VNet2 and VNet3 only
- [ ] C. the subnets on VNet2 only
- [x] D. the subnets on VNet3 only
- [ ] E. the subnets on VNet1, VNet2, and VNet3

## Q351 (Topic 5, Original #12)

You have an Azure subscription that contains two virtual networks named VNet1 and VNet2. Virtual machines connect to the virtual networks.
 The virtual networks have the address spaces and the subnets configured as shown in the following table.

{{img:/exam-media/az-104/T5/0036300002.png}}

 You need to add the address space of 10.33.0.0/16 to VNet1. The solution must ensure that the hosts on VNet1 and VNet2 can communicate.
 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T5/0036400001.png}}

- [x] A. Remove peering between VNet1 and VNet2
- [x] B. Add the 10.33.0.0/16 address space to VNet1
- [x] C. Recreate peering between VNet1 and VNet2
- [ ] D. On the peering connection in VNET2, allow gateway transit
- [ ] E. Remove VNet1

## Q352 (Topic 5, Original #13)

You have an Azure subscription that contains the resource groups shown in the following table.

{{img:/exam-media/az-104/T5/0036600001.png}}

 RG1 contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0036600002.png}}

 VM1 is running and connects to NIC1 and Disk1. NIC1 connects to VNET1.
 RG2 contains a public IP address named IP2 that is in the East US location. IP2 is not assigned to a virtual machine.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. You can move storage1 to RG2
- [x] B. You can move NIC1 to RG2
- [ ] C. If you move to IP2 to RG1, the location of IP2 will change

## Q353 (Topic 5, Original #14)

You have an Azure web app named webapp1.
 You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1.
 You need to ensure that webapp1 can access the data hosted on VM1.
 What should you do?

- [ ] A. Deploy an internal load balancer
- [ ] B. Peer VNET1 to another virtual network
- [x] C. Connect webapp1 to VNET1
- [ ] D. Deploy an Azure Application Gateway

## Q354 (Topic 5, Original #15)

You create an Azure VM named VM1 that runs Windows Server 2019.
 VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0036900001.jpg}}

 You need to enable Desired State Configuration for VM1.
 What should you do first?

- [ ] A. Connect to VM1.
- [x] B. Start VM1.
- [ ] C. Capture a snapshot of VM1.
- [ ] D. Configure a DNS name for VM1.

## Q355 (Topic 5, Original #16)

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.
 You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.
 You need to ensure that visitors are serviced by the same web server for each request.
 What should you configure?

- [ ] A. Floating IP (direct server return) to Disabled
- [ ] B. Session persistence to None
- [ ] C. Floating IP (direct server return) to Enabled
- [x] D. Session persistence to Client IP

## Q356 (Topic 5, Original #17)

You have an Azure subscription that contains the following resources:
 ✑ A virtual network that has a subnet named Subnet1
 ✑ Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1
 ✑ A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections
 NSG-Subnet1 has the default inbound security rules only.
 NSG-VM1 has the default inbound security rules and the following custom inbound security rule:
 ✑ Priority: 100
 ✑ Source: Any
 ✑ Source port range: *
 ✑ Destination: *
 ✑ Destination port range: 3389
 ✑ Protocol: UDP
 ✑ Action: Allow
 VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1.
 You need to be able to establish Remote Desktop connections from the internet to VM1.
 Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the Any source to the *destination for port range 3389 and uses the TCP protocol. You remove NSG-VM1 from the network interface of VM1.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q357 (Topic 5, Original #18)

You have an Azure subscription that contains the following resources:
 ✑ A virtual network that has a subnet named Subnet1
 ✑ Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1
 ✑ A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections
 NSG-Subnet1 has the default inbound security rules only.
 NSG-VM1 has the default inbound security rules and the following custom inbound security rule:
 ✑ Priority: 100
 ✑ Source: Any
 ✑ Source port range: *
 ✑ Destination: *
 ✑ Destination port range: 3389

 Protocol: UDP -

{{img:/exam-media/az-104/T5/0037200009.png}}

 ✑ Action: Allow
 VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1.
 You need to be able to establish Remote Desktop connections from the internet to VM1.
 Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the UDP protocol.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q358 (Topic 5, Original #19)

You have an Azure subscription that contains the following resources:
 ✑ A virtual network that has a subnet named Subnet1
 ✑ Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1
 ✑ A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections
 NSG-Subnet1 has the default inbound security rules only.
 NSG-VM1 has the default inbound security rules and the following custom inbound security rule:
 ✑ Priority: 100
 ✑ Source: Any
 ✑ Source port range: *
 ✑ Destination: *
 ✑ Destination port range: 3389
 ✑ Protocol: UDP
 ✑ Action: Allow
 VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1.
 You need to be able to establish Remote Desktop connections from the internet to VM1.
 Solution: You add an inbound security rule to NSG-Subnet1 and NSG-VM1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the TCP protocol.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q359 (Topic 5, Original #20)

You have a virtual network named VNet1 that has the configuration shown in the following exhibit.

{{img:/exam-media/az-104/T5/0037500001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0037600001.png}}

- [ ] A. 192.168.1.0/24: add a network interface
- [x] B. 10.2.1.0/24: add a subnet
- [x] C. 192.168.1.0/24: add an address space
- [ ] D. 10.2.1.0/24: add an address space
- [ ] E. 192.168.1.0/24: add a subnet

## Q360 (Topic 5, Original #21)

You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains the subnets shown in the following table.

{{img:/exam-media/az-104/T5/0037800001.png}}

 Each virtual machine uses a static IP address.
 You need to create network security groups (NSGs) to meet following requirements:
 ✑ Allow web requests from the internet to VM3, VM4, VM5, and VM6.
 ✑ Allow all connections between VM1 and VM2.
 ✑ Allow Remote Desktop connections to VM1.
 ✑ Prevent all other network traffic to VNET1.
 What is the minimum number of NSGs you should create?

- [x] A. 1
- [ ] B. 3
- [ ] C. 4
- [ ] D. 12

## Q361 (Topic 5, Original #22)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0037900001.png}}

 The Not allowed resource types Azure policy that has policy enforcement enabled is assigned to RG1 and uses the following parameters:
 Microsoft.Network/virtualNetworks
 Microsoft.Compute/virtualMachines
 In RG1, you need to create a new virtual machine named VM2, and then connect VM2 to VNET1.
 What should you do first?

- [x] A. Remove Microsoft.Compute/virtualMachines from the policy.
- [ ] B. Create an Azure Resource Manager template
- [ ] C. Add a subnet to VNET1.
- [ ] D. Remove Microsoft.Network/virtualNetworks from the policy.

## Q362 (Topic 5, Original #23)

Your company has an Azure subscription named Subscription1.
 The company also has two on-premises servers named Server1 and Server2 that run Windows Server 2016. Server1 is configured as a DNS server that has a primary DNS zone named adatum.com. Adatum.com contains 1,000 DNS records.
 You manage Server1 and Subscription1 from Server2. Server2 has the following tools installed:
 ✑ The DNS Manager console
 ✑ Azure PowerShell
 ✑ Azure CLI 2.0
 You need to move the adatum.com zone to an Azure DNS zone in Subscription1. The solution must minimize administrative effort.
 What should you use?

- [x] A. Azure CLI
- [ ] B. Azure PowerShell
- [ ] C. the Azure portal
- [ ] D. the DNS Manager console

## Q363 (Topic 5, Original #24)

You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3.
 You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only.
 What should you configure?

- [x] A. an inbound NAT rule
- [ ] B. a new public load balancer for VM3
- [ ] C. a frontend IP configuration
- [ ] D. a load balancing rule

## Q364 (Topic 5, Original #25)

You have an Azure subscription named Subscription1 that contains the virtual networks in the following table.

{{img:/exam-media/az-104/T5/0038100001.png}}

 Subscription1 contains the virtual machines in the following table.

{{img:/exam-media/az-104/T5/0038200001.png}}

 In Subscription1, you create a load balancer that has the following configurations:
 ✑ Name: LB1
 ✑ SKU: Basic
 ✑ Type: Internal
 ✑ Subnet: Subnet12
 ✑ Virtual network: VNET1

- [x] A. LB1 can balance the traffic between VM1 and VM2
- [ ] B. LB1 can balance the traffic between VM3 and VM4
- [ ] C. LB1 can balance the traffic between VM5 and VM6

## Q365 (Topic 5, Original #26)

You have an Azure virtual machine that runs Windows Server 2019 and has the following configurations:
 ✑ Name: VM1
 ✑ Location: West US
 ✑ Connected to: VNET1
 ✑ Private IP address: 10.1.0.4
 ✑ Public IP addresses: 52.186.85.63
 ✑ DNS suffix in Windows Server: Adatum.com
 You create the Azure DNS zones shown in the following table.

{{img:/exam-media/az-104/T5/0038400001.png}}

 You need to identify which DNS zones you can link to VNET1 and the DNS zones to which VM1 can automatically register.
 Which zones should you identify? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0038400002.png}}

- [x] A. VNET1: The private zones only
- [x] B. DNS to VM: The private zones only
- [ ] C. VNET1: The public zones only
- [ ] D. VNET1: Adatum.com only
- [ ] E. DNS to VM: Adatum.pri and adatum.com only

## Q366 (Topic 5, Original #27)

You have an on-premises network that you plan to connect to Azure by using a site-so-site VPN.
 In Azure, you have an Azure virtual network named VNet1 that uses an address space of 10.0.0.0/16 VNet1 contains a subnet named Subnet1 that uses an address space of 10.0.0.0/24.
 You need to create a site-to-site VPN to Azure.
 Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 NOTE: More than one order of answer choice is correct. You will receive credit for any of the correct orders you select.
 Select and Place:

{{img:/exam-media/az-104/T5/0038600001.png}}

- [x] A. Create a gateway subnet
- [x] B. Create a VPN gateway
- [x] C. Create a local gateway
- [x] D. Create a VPN connection
- [ ] E. Create a Custom DNS server

## Q367 (Topic 5, Original #28)

You have an Azure subscription that contains the resources in the following table.

{{img:/exam-media/az-104/T5/0038700002.png}}

 VM1 and VM2 are deployed from the same template and host line-of-business applications.
 You configure the network security group (NSG) shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0038800001.jpg}}

 You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.
 What should you do?

- [ ] A. Disassociate the NSG from a network interface
- [ ] B. Change the Port_80 inbound security rule.
- [x] C. Associate the NSG to Subnet1.
- [ ] D. Change the DenyWebSites outbound security rule.

## Q368 (Topic 5, Original #29)

You have two subscriptions named Subscription1 and Subscription2. Each subscription is associated to a different Azure AD tenant.
 Subscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of 10.0.0.0/16.
 Subscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of 10.10.0.0/24.
 You need to connect VNet1 to VNet2.
 What should you do first?

- [ ] A. Move VM1 to Subscription2
- [ ] B. Move VNet1 to Subscription2.
- [ ] C. Modify the IP address space of VNet2.
- [x] D. Provision virtual network gateways.

## Q369 (Topic 5, Original #30)

You plan to create an Azure virtual machine named VM1 that will be configured as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0039100001.png}}

 The planned disk configurations for VM1 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/0039200001.jpg}}

 You need to ensure that VM1 can be created in an Availability Zone.
 Which two settings should you modify? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [x] A. Use managed disks
- [ ] B. OS disk type
- [x] C. Availability options
- [ ] D. Size
- [ ] E. Image

## Q370 (Topic 5, Original #31)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0039500001-5181da4aa8bce365ee9e8002cdfb2ec1e19ff7d3.png}}

 VMSS1 is set to VM (virtual machines) orchestration mode.
 You need to deploy a new Azure virtual machine named VM1, and then add VM1 to VMSS1.
 Which resource group and location should you use to deploy VM1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0039500002.png}}

- [ ] A. Resource Group: RG1 only
- [ ] B. Resource Group: RG1 or RG2 only
- [x] C. Resource Group: RG1, RG2, RG3
- [x] D. Location: West US only
- [ ] E. Location: Central US only

## Q371 (Topic 5, Original #32)

You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.
 Peering for VNET1 is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0039700001.png}}

 Peering for VNET2 is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0039700002.png}}

 Peering for VNET3 is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0039800001.png}}

 How can packets be routed between the virtual networks? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0039800002.png}}

- [ ] A. VNET1: VNET2 only
- [ ] B. VNET1: VNET3 only
- [x] C. VNET2: VNET1 only
- [ ] D. VNET2: VNET3 only
- [x] E. VNET1: VNET1 and VNET3

## Q372 (Topic 5, Original #33)

You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.
 From Azure, you download and install the VPN client configuration package on a computer named Computer2.
 You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.
 Solution: You modify the Azure Active Directory (Azure AD) authentication policies.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q373 (Topic 5, Original #64)

You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.
 From Azure, you download and install the VPN client configuration package on a computer named Computer2.
 You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.
 Solution: You join Computer2 to Azure Active Directory (Azure AD).
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q374 (Topic 5, Original #35)

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.
 Another administrator plans to create several network security groups (NSGs) in the subscription.
 You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.
 Solution: You create a resource lock, and then you assign the lock to the subscription.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q375 (Topic 5, Original #36)

You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.
 You have a computer named Computer1 that runs Windows 10. Computer1 is connected to the Internet.
 You add a network interface named vm1173 to VM1 as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0040200001.png}}

 From Computer1, you attempt to connect to VM1 by using Remote Desktop, but the connection fails.
 You need to establish a Remote Desktop connection to VM1.
 What should you do first?

- [ ] A. Change the priority of the RDP rule
- [ ] B. Attach a network interface
- [ ] C. Delete the DenyAllInBound rule
- [x] D. Start VM1

## Q376 (Topic 5, Original #37)

You have the Azure virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0040300001.png}}

 A DNS service is installed on VM1.
 You configure the DNS servers settings for each virtual network as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0040400001.png}}

 You need to ensure that all the virtual machines can resolve DNS names by using the DNS service on VM1.
 What should you do?

- [ ] A. Configure a conditional forwarder on VM1
- [ ] B. Add service endpoints on VNET1
- [ ] C. Add service endpoints on VNET2 and VNET3
- [x] D. Configure peering between VNET1, VNET2, and VNET3

## Q377 (Topic 5, Original #38)

You have an Azure subscription that contains the Azure virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0040500001.png}}

 You add inbound security rules to a network security group (NSG) named NSG1 as shown in the following table.

{{img:/exam-media/az-104/T5/0040500002.png}}

 You run Azure Network Watcher as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0040600001.jpg}}

 You run Network Watcher again as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0040800001.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. NSG1 limits VM1 traffic
- [x] B. NSG1 applies to VM2
- [x] C. VM1 and VM2 connect to the same virtual network

## Q378 (Topic 5, Original #39)

You have the Azure virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. Each virtual machine has a public IP address.
 The virtual machines host several applications that are accessible over port 443 to users on the Internet.
 Your on-premises network has a site-to-site VPN connection to VNet1.
 You discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises network.
 You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all the applications can still be accessed by the Internet users.
 What should you do?

- [ ] A. Modify the address space of the local network gateway
- [x] B. Create a deny rule in a network security group (NSG) that is linked to Subnet1
- [ ] C. Remove the public IP addresses from the virtual machines
- [ ] D. Modify the address space of Subnet1

## Q379 (Topic 5, Original #40)

You have an Azure subscription that contains the resources in the following table.

{{img:/exam-media/az-104/T5/0041100001.png}}

 Subnet1 is associated to VNet1. NIC1 attaches VM1 to Subnet1.
 You need to apply ASG1 to VM1.
 What should you do?

- [x] A. Associate NIC1 to ASG1
- [ ] B. Modify the properties of ASG1
- [ ] C. Modify the properties of NSG1

## Q380 (Topic 5, Original #41)

You have an Azure subscription named Subscription1 that contains an Azure virtual network named VNet1. VNet1 connects to your on-premises network by using
 Azure ExpressRoute.
 You plan to prepare the environment for automatic failover in case of ExpressRoute failure.
 You need to connect VNet1 to the on-premises network by using a site-to-site VPN. The solution must minimize cost.
 Which three actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [x] A. Create a connection
- [x] B. Create a local site VPN gateway
- [x] C. Create a VPN gateway that uses the VpnGw1 SKU
- [ ] D. Create a gateway subnet
- [ ] E. Create a VPN gateway that uses the Basic SKU

## Q381 (Topic 5, Original #42)

You have peering configured as shown in the following exhibit.

{{img:/exam-media/az-104/T5/0041300001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0041300002.jpg}}

- [x] A. Box1: vNET6 only
- [ ] B. Box1: vNET6 and vNET1 only
- [x] C. Box2: delete peering
- [ ] D. Box2: add a subnet
- [ ] E. Box2: modify the address space

## Q382 (Topic 5, Original #43)

You have an Azure subscription that contains the resources in the following table.

{{img:/exam-media/az-104/T5/0041500001.png}}

 You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.
 LB1 is configured as shown in the LB1 exhibit. (Click the LB1 tab.)

{{img:/exam-media/az-104/T5/0041500002.png}}

 Rule1 is configured as shown in the Rule1 exhibit. (Click the Rule1 tab.)

{{img:/exam-media/az-104/T5/0041600001.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- [x] A. VM1 is in the same availability set as VM2
- [x] B. If Probe1.htm is present on VM1 and Vm2, LB1 will balance TCP port 80 between VM1 and Vm2
- [ ] C. If you delete Rule1, Lb1 will balance all the requests between Vm1 and Vm2 for all the ports

## Q383 (Topic 5, Original #44)

You have an Azure virtual machine named VM1 that connects to a virtual network named VNet1. VM1 has the following configurations:
 ✑ Subnet: 10.0.0.0/24
 ✑ Availability set: AVSet
 ✑ Network security group (NSG): None
 ✑ Private IP address: 10.0.0.4 (dynamic)
 ✑ Public IP address: 40.90.219.6 (dynamic)
 You deploy a standard, Internet-facing load balancer named slb1.
 You need to configure slb1 to allow connectivity to VM1.
 Which changes should you apply to VM1 as you configure slb1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0041900001.jpg}}

- [x] A. Box1: Remove the public IP address from VM1
- [x] B. Box2: Create and configure an NSG
- [ ] C. Box2: Remove the public IP address from VM1
- [ ] D. Box1: Create and configure an NSG
- [ ] E. Box2: Change the private IP address of VM1 to static

## Q384 (Topic 5, Original #45)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0042000001.png}}

 You need to create a network interface named NIC1.
 In which location can you create NIC1?

- [ ] A. East US and North Europe only
- [x] B. East US only
- [ ] C. East US, West Europe, and North Europe
- [ ] D. East US and West Europe only

## Q385 (Topic 5, Original #46)

You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table.

{{img:/exam-media/az-104/T5/0042100001.png}}

 You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.
 For controso.com, you create a virtual network link named link1 as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0042200001.jpg}}

 You discover that VM1 can resolve names in contoso.com but cannot resolve names in adatum.com. VM1 can resolve other hosts on the Internet.
 You need to ensure that VM1 can resolve host names in adatum.com.
 What should you do?

- [ ] A. Update the DNS suffix on VM1 to be adatum.com
- [x] B. Configure the name servers for adatum.com at the domain registrar
- [ ] C. Create an SRV record in the contoso.com zone
- [ ] D. Modify the Access control (IAM) settings for link1

## Q386 (Topic 5, Original #47)

You plan to use Azure Network Watcher to perform the following tasks:
 ✑ Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine.
 ✑ Task2: Validate outbound connectivity from an Azure virtual machine to an external host.
 Which feature should you use for each task? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0042400001.jpg}}

- [x] A. Task1: IP flow verify
- [x] B. Task2: Connection troubleshoot
- [ ] C. Task1: Next hop
- [ ] D. Task1: packet capture
- [ ] E. Task2: NSG flow logs

## Q387 (Topic 5, Original #48)

You have an Azure subscription that contains the Azure virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0042600001.png}}

 You configure the network interfaces of the virtual machines to use the settings shown in the following table.

{{img:/exam-media/az-104/T5/0042600002.png}}

 From the settings of VNET1 you configure the DNS servers shown in the following exhibit.

{{img:/exam-media/az-104/T5/0042700001.png}}

 The virtual machines can successfully connect to the DNS server that has an IP address of 192.168.10.15 and the DNS server that has an IP address of
 193.77.134.10.

- [x] A. Vm1 connects to 193.77.134.10 for DNS queries
- [ ] B. Vm2 connects to 193.77.134.10 for DNS queries
- [x] C. Vm3 connects to 192.168.10.15 for DNS queries

## Q388 (Topic 5, Original #49)

You have an Azure subscription that contains the resource groups shown in the following table.

{{img:/exam-media/az-104/T5/0042900001.png}}

 RG1 contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0042900002.png}}

 You need to identify which resources you can move from RG1 to RG2, and which resources you can move from RG2 to RG1.
 Which resources should you identify? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0043000001.jpg}}

- [x] A. RG1 to RG2: IP1, VNEt2, an storage1
- [x] B. RG2 to RG1: IP2, VNEt2, an storage2
- [ ] C. RG1 to RG2: None
- [ ] D. RG1 to RG2: Ip1 and VNET1 only
- [ ] E. RG2 to RG1:IP2 and storage2

## Q389 (Topic 5, Original #50)

You have an Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0043200001.png}}

 You deploy a load balancer that has the following configurations:
 ✑ Name: LB1
 ✑ Type: Internal
 ✑ SKU: Standard
 ✑ Virtual network: VNET1
 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.
 Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q390 (Topic 5, Original #51)

You have an Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0043300002.png}}

 You deploy a load balancer that has the following configurations:
 ✑ Name: LB1
 ✑ Type: Internal
 ✑ SKU: Standard
 ✑ Virtual network: VNET1
 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.
 Solution: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q391 (Topic 5, Original #52)

You have an Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0043400002.png}}

 You deploy a load balancer that has the following configurations:
 ✑ Name: LB1
 ✑ Type: Internal
 ✑ SKU: Standard
 ✑ Virtual network: VNET1
 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.
 Solution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q392 (Topic 5, Original #53)

You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.
 From Azure, you download and install the VPN client configuration package on a computer named Computer2.
 You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.
 Solution: You export the client certificate from Computer1 and install the certificate on Computer2.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q393 (Topic 5, Original #54)

You have an Azure virtual machine named VM1.
 The network interface for VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0043700001.jpg}}

 You deploy a web server on VM1, and then create a secure website that is accessible by using the HTTPS protocol. VM1 is used as a web server only.
 You need to ensure that users can connect to the website from the Internet.
 What should you do?

- [ ] A. Modify the protocol of Rule4
- [ ] B. Delete Rule1
- [x] C. For Rule5, change the Action to Allow and change the priority to 401
- [ ] D. Create a new inbound rule that allows TCP protocol 443 and configure the rule to have a priority of 501.

## Q394 (Topic 5, Original #55)

Another administrator plans to create several network security groups (NSGs) in the subscription.
 You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.
 Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q395 (Topic 5, Original #56)

You manage two Azure subscriptions named Subscription1 and Subscription2.
 Subscription1 has following virtual networks:

{{img:/exam-media/az-104/T5/0043900001.png}}

 The virtual networks contain the following subnets:

{{img:/exam-media/az-104/T5/0044000001.png}}

 Subscription2 contains the following virtual network:
 ✑ Name: VNETA
 ✑ Address space: 10.10.128.0/17
 ✑ Location: Canada Central
 VNETA contains the following subnets:

{{img:/exam-media/az-104/T5/0044000005.png}}

- [ ] A. A Site-to-Site connection can be established between VNET1 and VNET2
- [x] B. VNET1 and VNET2 can be peered
- [x] C. VNET1 and VNETA can be peered

## Q396 (Topic 5, Original #57)

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load
 Balancer.
 The effective network security configurations for VM2 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/0044300001.jpg}}

 You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.
 You verify that the Load Balancer rules are configured correctly.
 You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.
 Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q397 (Topic 5, Original #58)

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load
 Balancer.
 The effective network security configurations for VM2 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/0044400001.jpg}}

 You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.
 You verify that the Load Balancer rules are configured correctly.
 You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.
 Solution: You delete the BlockAllOther443 inbound security rule.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q398 (Topic 5, Original #59)

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load
 Balancer.
 The effective network security configurations for VM2 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/0044500001.jpg}}

 You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.
 You verify that the Load Balancer rules are configured correctly.
 You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.
 Solution: You modify the priority of the Allow_131.107.100.50 inbound security rule.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q399 (Topic 5, Original #60)

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.
 Another administrator plans to create several network security groups (NSGs) in the subscription.
 You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.
 Solution: You assign a built-in policy definition to the subscription.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q400 (Topic 5, Original #61)

You have an Azure subscription.
 You plan to deploy an Azure Kubernetes Service (AKS) cluster to support an app named App1. On-premises clients connect to App1 by using the IP address of the pod.
 For the AKS cluster, you need to choose a network type that will support App1.
 What should you choose?

- [ ] A. kubenet
- [x] B. Azure Container Networking Interface (CNI)
- [ ] C. Hybrid Connection endpoints
- [ ] D. Azure Private Link

## Q401 (Topic 5, Original #62)

You have an Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0044800001.png}}

 You deploy a load balancer that has the following configurations:
 ✑ Name: LB1
 ✑ Type: Internal
 ✑ SKU: Standard
 ✑ Virtual network: VNET1
 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.
 Solution: You disassociate the public IP address from the network interface of VM2.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q402 (Topic 5, Original #63)

You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.
 Another administrator plans to create several network security groups (NSGs) in the subscription.
 You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.
 Solution: You configure a custom policy definition, and then you assign the policy to the subscription.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q403 (Topic 5, Original #64)

You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.
 VM1 hosts a frontend application that connects to VM2 to retrieve data.
 Users report that the frontend application is slower than usual.
 You need to view the average round-trip time (RTT) of the packets from VM1 to VM2.
 Which Azure Network Watcher feature should you use?

- [ ] A. IP flow verify
- [ ] B. Connection troubleshoot
- [x] C. Connection monitor
- [ ] D. NSG flow logs

## Q404 (Topic 5, Original #65)

You have an Azure subscription that contains the public load balancers shown in the following table.

{{img:/exam-media/az-104/T5/0045000001.png}}

 You plan to create six virtual machines and to load balance requests to the virtual machines. Each load balancer will load balance three virtual machines.
 You need to create the virtual machines for the planned solution.
 How should you create the virtual machines? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0045100001.jpg}}

- [x] A. LB1: be created in the same availability set or vortial machine scale set
- [x] B. LB2: be connected to the same virtual network
- [ ] C. LB1: be connected to the same virtual network
- [ ] D. LB2: be created in the same availability set or vortial machine scale set
- [ ] E. LB2: be created in the same resource group

## Q405 (Topic 5, Original #66)

You have an on-premises data center and an Azure subscription. The data center contains two VPN devices. The subscription contains an Azure virtual network named VNet1. VNet1 contains a gateway subnet.
 You need to create a site-to-site VPN. The solution must ensure that if a single instance of an Azure VPN gateway fails, or a single on-premises VPN device fails, the failure will not cause an interruption that is longer than two minutes.
 What is the minimum number of public IP addresses, virtual network gateways, and local network gateways required in Azure? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0045300001.jpg}}

- [x] A. Public Ip addresses: 2
- [x] B. Virtual network gateways: 1
- [x] C. Local network gateways: 1
- [ ] D. Local network gateways: 2
- [ ] E. Public Ip addresses: 1

## Q406 (Topic 5, Original #67)

You have an Azure subscription that contains two virtual machines as shown in the following table.

{{img:/exam-media/az-104/T5/0045500002.png}}

 You perform a reverse DNS lookup for 10.0.0.4 from VM2.
 Which FQDN will be returned?

- [ ] A. vm1.core.windows.net
- [ ] B. vm1.azure.com
- [ ] C. vm1.westeurope.cloudapp.azure.com
- [x] D. vm1.internal.cloudapp.net

## Q407 (Topic 5, Original #68)

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load
 Balancer.
 The effective network security configurations for VM2 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/0045600001.jpg}}

 You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.
 You verify that the Load Balancer rules are configured correctly.
 You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.
 Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a cost of 150.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q408 (Topic 5, Original #69)

You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1.
 You need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1.
 Which two actions should you perform? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. Add a service endpoint to VNet1
- [ ] B. Reset GW1
- [x] C. Create a route-based virtual network gateway
- [ ] D. Add a connection to GW1
- [x] E. Delete GW1

## Q409 (Topic 5, Original #70)

You have an Azure subscription that contains the resources in the following table:

{{img:/exam-media/az-104/T5/0045800001.png}}

 In Azure, you create a private DNS zone named adatum.com. You set the registration virtual network to VNet2. The adatum.com zone is configured as shown in the following exhibit:

{{img:/exam-media/az-104/T5/0045900001.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.
 Hot Area:

- [ ] A. The A record for VM5 will be registered automatically in the adatum.com zone
- [ ] B. VM5 can resolve VM9.adatum.com
- [x] C. VM6 can resolve VM9.adatum.com

## Q410 (Topic 5, Original #71)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/0046100001.png}}

 The subscription contains the private DNS zones shown in the following table.

{{img:/exam-media/az-104/T5/0046100002.png}}

 You add virtual network links to the private DNS zones as shown in the following table.

{{img:/exam-media/az-104/T5/0046200001.png}}

- [x] A. You can enable auto registration for Link2.
- [x] B. You can add a virtual network link for VNET1 to Zone3.com
- [x] C. You can add a virtual network link for VNET2 to Zone1.com and enable auto registration

## Q411 (Topic 5, Original #72)

You have an Azure subscription.
 You plan to use an Azure Resource Manager template to deploy a virtual network named VNET1 that will use Azure Bastion.
 How should you complete the template? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0046400001.png}}

- [x] A. name: AzureBastionSubnet
- [ ] B. name: AzureFirewallSubnet
- [x] C. adressPrefix: 10.10.10.0/27
- [ ] D. adressPrefix: 10.10.10.0/29
- [ ] E. adressPrefix: 10.10.10.0/30

## Q412 (Topic 5, Original #73)

You manage a virtual network named VNet1 that is hosted in the West US Azure region.
 VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.
 You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.
 Solution: From Azure Network Watcher, you create a packet capture.
 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q413 (Topic 5, Original #74)

You manage a virtual network named VNet1 that is hosted in the West US Azure region.
 VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.
 You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.
 Solution: From Azure Network Watcher, you create a connection monitor.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q414 (Topic 5, Original #75)

You manage a virtual network named VNet1 that is hosted in the West US Azure region.
 VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.
 You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.
 Solution: From Performance Monitor, you create a Data Collector Set (DCS).
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q415 (Topic 5, Original #76)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0046800001.png}}

 You need to load balance HTTPS connections to vm1 and vm2 by using lb1.
 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T5/0046900001.jpg}}

- [x] A. Remove the public IP addresses from vm1 and vm2
- [x] B. Create a health probe and backend pool on lb1
- [x] C. Create a load balancing rule on lb1
- [ ] D. Remove nsg1
- [ ] E. Create an availability set

## Q416 (Topic 5, Original #77)

You manage a virtual network named VNet1 that is hosted in the West US Azure region.
 VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.
 You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.
 Solution: From Azure Monitor, you create a metric on Network In and Network Out.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q417 (Topic 5, Original #78)

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load
 Balancer.
 The effective network security configurations for VM2 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/0047200001.jpg}}

 You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.
 You verify that the Load Balancer rules are configured correctly.
 You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.
 Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a priority of 64999.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q418 (Topic 5, Original #79)

You have an Azure subscription that contains two on-premises locations named site1 and site2.
 You need to connect site1 and site2 by using an Azure Virtual WAN.
 Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T5/0047300001.jpg}}

- [x] A. Create a virtual hub
- [x] B. Create VPN sites
- [ ] C. Connect the virtual networks to the hub
- [x] D. Create a Virtual WAN resource
- [x] E. Connect the VPN sites to the hub

## Q419 (Topic 5, Original #80)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/0047400001.png}}

 You have the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0047400002.png}}

 You have the virtual network interfaces shown in the following table.

{{img:/exam-media/az-104/T5/0047400003.png}}

 Server1 is a DNS server that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/0047400004.png}}

 You have an Azure private DNS zone named contoso.com that has a virtual network link to VNET2 and the records shown in the following table.

{{img:/exam-media/az-104/T5/0047500001.png}}

- [ ] A. Server2 resolves host2.contoso.com to 131.107.50.50
- [x] B. Server2 resolves host1.contoso.com to 131.107.10.15
- [ ] C. Server3 resolves host2.contoso.com to 131.107.50.50

## Q420 (Topic 5, Original #81)

You have a virtual network named VNet1 as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0047600001.png}}

 No devices are connected to VNet1.
 You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.
 You need to create the peering.
 What should you do first?

- [x] A. Modify the address space of VNet1.
- [ ] B. Add a gateway subnet to VNet1.
- [ ] C. Create a subnet on VNet1 and VNet2.
- [ ] D. Configure a service endpoint on VNet2.

## Q421 (Topic 5, Original #82)

You have the Azure virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0047700001.png}}

 VNET1 is linked to a private DNS zone named contoso.com that contains the records shown in the following table.

{{img:/exam-media/az-104/T5/0047700002.png}}

 You need to ping VM2 from VM1.
 Which DNS names can you use to ping VM2?

- [ ] A. comp2.contoso.com and comp4.contoso.com only
- [ ] B. comp1.contoso.com, comp2.contoso.com, comp3.contoso.com, and comp4.contoso.com
- [x] C. comp2.contoso.com only
- [ ] D. comp1.contoso.com and comp2.contoso.com only
- [ ] E. comp1.contoso.com, comp2.contoso.com, and comp4.contoso.com only

## Q422 (Topic 5, Original #83)

You have a network security group (NSG) named NSG1 that has the rules defined in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/0047900001.jpg}}

 NSG1 is associated to a subnet named Subnet1. Subnet1 contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/0047900002.png}}

 You need to add a rule to NSG1 to ensure that VM1 can ping VM2. The solution must use the principle of least privilege.
 How should you configure the rule? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0048000001.jpg}}

- [ ] A. Direction: Inbound
- [x] B. Source: 10.0.0.10
- [x] C. Direction: Outbound
- [x] D. Destination: 10.1.0.11
- [x] E. Priority: 110

## Q423 (Topic 5, Original #84)

You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.
 From Azure, you download and install the VPN client configuration package on a computer named Computer2.
 You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.
 Solution: On Computer2, you set the Startup type for the IPSec Policy Agent service to Automatic.
 Does this meet the goal?

- [ ] A. Yes
- [x] B. No

## Q424 (Topic 5, Original #86)

You have an Azure subscription that uses the public IP addresses shown in the following table.

{{img:/exam-media/az-104/T5/0048300001.png}}

 You need to create a public Azure Standard Load Balancer.
 Which public IP addresses can you use?

- [ ] A. IP1, IP2, and IP3
- [ ] B. IP2 only
- [x] C. IP3 only
- [ ] D. IP1 and IP3 only

## Q425 (Topic 5, Original #87)

You have an Azure subscription.
 You are deploying an Azure Kubernetes Service (AKS) cluster that will contain multiple pods. The pods will use kubernet networking.
 You need to restrict network traffic between the pods.
 What should you configure on the AKS cluster?

- [ ] A. the Azure network policy
- [x] B. the Calico network policy
- [ ] C. pod security policies
- [ ] D. an application security group

## Q426 (Topic 5, Original #88)

You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the VPN Gateway and subnets in the following table:

{{img:/exam-media/az-104/T5/0048500001.png}}

 Subnet1 contains a virtual appliance named VM1 that operates as a router.
 You create a routing table named RT1.
 You need to route all inbound traffic from the VPN gateway to VNet1 through VM1.
 How should you configure RT1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T5/0048600001.jpg}}

- [x] A. Address prefix: 10.0.0.0/16
- [x] B. Next hop type: Virtual appliance
- [x] C. Assignet to: GatewaySubnet
- [ ] D. Address prefix: 10.0.1.0/24
- [ ] E. Next hop type: Virtual network

## Q427 (Topic 5, Original #90)

You have an Azure subscription that contains the virtual machines shown in the following table:

{{img:/exam-media/az-104/T5/0048900001.png}}

 VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections.
 Subnet1 and Subnet2 are in a virtual network named VNET1.
 The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules.
 NSG2 uses the default rules and the following custom incoming rule:
 ✑ Priority: 100
 ✑ Name: Rule1
 ✑ Port: 3389
 ✑ Protocol: TCP
 ✑ Source: Any
 ✑ Destination: Any
 ✑ Action: Allow
 NSG1 is associated to Subnet1. NSG2 is associated to the network interface of VM2.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. From the Internet, you can connect to VM1 using Remote Desktop
- [x] B. From the Internet, you can connect to VM2 using Remote Desktop
- [x] C. From VM1, you can connect to VM2 using Remote Desktop

## Q428 (Topic 5, Original #91)

You have an Azure subscription that contains two virtual machines named VM1 and VM2.
 You create an Azure load balancer.
 You plan to create a load balancing rule that will load balance HTTPS traffic between VM1 and VM2.
 Which two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part of the solution.
 NOTE: Each correct selection is worth one point.

- [ ] A. a frontend IP address
- [ ] B. an inbound NAT rule
- [ ] C. a virtual network
- [x] D. a backend pool
- [x] E. a health probe

## Q429 (Topic 5, Original #92)

You have an on-premises network that contains a database server named dbserver1.
 You have an Azure subscription.
 You plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone.
 You need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to dbserver1.
 Which type of public IP address SKU and assignment should you use for the gateway?

- [ ] A. a basic SKU and a static IP address assignment
- [x] B. a standard SKU and a static IP address assignment
- [ ] C. a basic SKU and a dynamic IP address assignment

## Q430 (Topic 5, Original #93)

You have an Azure subscription that contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/image854.png}}

 The subscription contains a storage account named contoso2024 as shown in the following exhibit.

{{img:/exam-media/az-104/T5/image855.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

- [x] A. VM1 can connect to contoso2024 by using 131.107.10.10
- [x] B. VM2 can connect to contoso2024 by using 150.120.10.10
- [ ] C. VM3 must use its pricate IP address to connect to contoso2024

## Q431 (Topic 5, Original #94)

You have two Azure virtual machines as shown in the following table.

{{img:/exam-media/az-104/T5/0049500001.png}}

 You create the Azure DNS zones shown in the following table.

{{img:/exam-media/az-104/T5/0049500002.jpg}}

 You perform the following actions:
 ✑ ׀¢׀¾ fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.
 ✑ For contoso.com, you assign vm1 and vm2 the Owner role.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20
- [x] B. The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.4
- [x] C. The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.5

## Q432 (Topic 5, Original #95)

You have an on-premises datacenter and an Azure subscription.
 You plan to connect the datacenter to Azure by using ExpressRoute.
 You need to deploy an ExpressRoute gateway. The solution must meet the following requirements:
 ✑ Support up to 10 Gbps of traffic.
 ✑ Support availability zones.
 ✑ Support FastPath.
 ✑ Minimize costs.
 Which SKU should you deploy?

- [ ] A. ERGw1AZ
- [ ] B. ERGw2
- [ ] C. ErGw3
- [x] D. ErGw3AZ

## Q433 (Topic 5, Original #96)

You have a virtual network named VNET1 that contains the subnets shown in the following table:

{{img:/exam-media/az-104/T5/0049800002.png}}

 You have Azure virtual machines that have the network configurations shown in the following table:

{{img:/exam-media/az-104/T5/0049900001.png}}

 For NSG1, you create the inbound security rule shown in the following table:

{{img:/exam-media/az-104/T5/0049900002.png}}

 For NSG2, you create the inbound security rule shown in the following table:

{{img:/exam-media/az-104/T5/0049900003.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. VM2 can connect to the TCP port 1433 services on VM1
- [x] B. VM1 can connect to the TCP port 1433 services on VM2
- [x] C. VM2 can connect to the TCP port 1433 services on VM3

## Q434 (Topic 5, Original #97)

You have an Azure subscription named Subscription1.
 Subscription1 contains the virtual machines in the following table:

{{img:/exam-media/az-104/T5/0050100001-1e04ef19fb5b001859443c40ed9e5d9b33b5a5f1.png}}

 Subscription1 contains a virtual network named VNet1 that has the subnets in the following table:

{{img:/exam-media/az-104/T5/0050100002.png}}

 VM3 has multiple network adapters, including a network adapter named NIC3. IP forwarding is enabled on NIC3. Routing is enabled on VM3.
 You create a route table named RT1 that contains the routes in the following table:

{{img:/exam-media/az-104/T5/0050100003.png}}

 You apply RT1 to Subnet1 and Subnet2.

- [x] A. VM3 can establish a network connection to VM1
- [ ] B. If VM3 is turned off, VM2 can establish a network connection to VM1
- [x] C. Vm1 can establish a network connection to VM2

## Q435 (Topic 5, Original #98)

Your on-premises network contains an SMB share named Share1.
 You have an Azure subscription that contains the following resources:
 ✑ A web app named webapp1
 ✑ A virtual network named VNET1
 You need to ensure that webapp1 can connect to Share1.
 What should you deploy?

- [ ] A. an Azure Application Gateway
- [ ] B. an Azure Active Directory (Azure AD) Application Proxy
- [x] C. an Azure Virtual Network Gateway

## Q436 (Topic 5, Original #99)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/image853.png}}

 You create a public IP address named IP1.

 Which two resources can you associate to IP1? Each correct answer presents a complete solution.

- [ ] A. VM1
- [x] B. LB1
- [x] C. NIC1
- [ ] D. VPN1
- [ ] E. VNet1

## Q437 (Topic 5, Original #100)

You have an Azure subscription that contains a storage account named storage1.

 You need to allow access to storage1 from selected networks and your home office. The solution must minimize administrative effort.

 What should you do first for storage1?

- [ ] A. Add a private endpoint.
- [x] B. Modify the Public network access settings
- [ ] C. Select Internet routing.
- [ ] D. Modify the Access Control (IAM) settings.

## Q438 (Topic 5, Original #101)

You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network.
 Which tunneling protocol should you use?

- [ ] A. IKEv1
- [ ] B. PPTP
- [x] C. IKEv2
- [ ] D. L2TP

## Q439 (Topic 5, Original #102)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/image608.png}}

 You configure Azure Site Recovery to replicate VM1 between the US East and West US regions.

 You perform a test failover of VM1 and specify VNET2 as the target virtual network.

 When the test version of VM1 is created, to which subnet will the virtual machine be connected?

- [ ] A. TestSubnet1
- [x] B. DemoSubnet1
- [ ] C. RecoverySubnetA
- [ ] D. RecoverySubnetB

## Q440 (Topic 5, Original #104)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image845.png}}

 You have the peering options shown in the following exhibit.

{{img:/exam-media/az-104/T5/image846.png}}

 You need to design a communication strategy for the resources on the virtual networks.

- [ ] A. Peering 1-2 is a possible configuration
- [ ] B. Peering 1-3 is a possible configuration
- [ ] C. Peering 3-2 is a possible configuration

## Q441 (Topic 5, Original #105)

You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.

 You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.

 You need to ensure that visitors are serviced by the same web server for each request.

 What should you configure?

- [ ] A. Floating IP (direct server return) to Disabled
- [x] B. Session persistence to Client IP
- [ ] C. Protocol to UDP
- [ ] D. Idle Time-out (minutes) to 20

## Q442 (Topic 5, Original #106)

You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named VNET1 and VNET2 that are peered.

 You plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1.

 You need to configure NSG1 to allow inbound access to the virtual machines via Bastion1.

 Which port should you configure for the inbound security rule?

- [ ] A. 22
- [x] B. 443
- [ ] C. 389
- [ ] D. 8080

## Q443 (Topic 5, Original #107)

Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.

{{img:/exam-media/az-104/T5/image609.png}}

 You plan to migrate contoso.com to Azure.

 You create an Azure virtual network named VNET1 that has the following settings:

 • Address space: 10.0.0.0/16
 • Subnet:
 o Name: Subnet1
 o IPv4: 10.0.1.0/24

 You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.

 How should you configure DC1? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T5/image610.png}}

- [ ] A. IP address: Obtain an IP address automatically
- [x] B. IP address: Use 10.0.1.3
- [ ] C. IP address: Use 10.0.2.1
- [x] D. Name resolution: Create an Azure Private DNS zone named contoso.com
- [ ] E. Name resolution: Create an Azure public DNS zone named contoso.com

## Q444 (Topic 5, Original #109)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image612.png}}

 You need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region.

 To which virtual networks can you deploy AF1?

- [ ] A. VNET1, VNET2, VNET3, and VNET4
- [ ] B. VNET1 and VNET2 only
- [x] C. VNET1 only
- [ ] D. VNET1, VNET2, and VNET4 only
- [ ] E. VNET1 and VNET4 only

## Q445 (Topic 5, Original #110)

You have an on-premises network.

 You have an Azure subscription that contains three virtual networks named VNET1. VNET2. and VNET3. The virtual networks are peered and connected to the on-premises network. The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/image613.png}}

 You need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor.

 What is the minimum number of connection monitors you should deploy?

- [ ] A. 1
- [x] B. 2
- [ ] C. 3
- [ ] D. 4

## Q446 (Topic 5, Original #111)

HOTSPOT -

 You plan to deploy the following Azure Resource Manager (ARM) template.

{{img:/exam-media/az-104/T5/image614.png}}

- [ ] A. LB1 will be connected to a subnet named VNET1/netname
- [ ] B. LB1 can be deployed only to the resource group that contains VNET1
- [ ] C. The value of the sku variable an be provided as a parameter when the template is deployed from a command prompt

## Q447 (Topic 5, Original #112)

You have an Azure subscription that contains a storage account. The account stores website data.

 You need to ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user's location.

 What should you configure?

- [ ] A. private endpoints
- [ ] B. Azure Firewall rules
- [x] C. Routing preference
- [ ] D. load balancing

## Q448 (Topic 5, Original #113)

You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1. Subnet1 is in a virtual network named VNet1.

 You need to prevent VM1 from accessing VM2 on port 3389.

 What should you do?

- [x] A. Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network interface of VM1.
- [ ] B. Configure Azure Bastion in VNet1.
- [ ] C. Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1.
- [ ] D. Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1.

## Q449 (Topic 5, Original #114)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/image617.png}}

 You need to manage outbound traffic from VNET1 by using Firewall1.

 What should you do first?

- [ ] A. Configure the Hybrid Connection Manager.
- [ ] B. Upgrade ASP1 to the Premium SKU.
- [x] C. Create a route table.
- [ ] D. Create an Azure Network Watcher.

## Q450 (Topic 5, Original #115)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/image645.png}}

 All the resources connect to a virtual network named VNet1.

 You plan to deploy an Azure Bastion host named Bastion1 to VNet1.

 Which resources can be protected by using Bastion1?

- [x] A. VM1 only
- [ ] B. contoso.com only
- [ ] C. App1 and contoso.com only
- [ ] D. VM1 and contoso.com only
- [ ] E. VM1, App1, and contoso.com

## Q451 (Topic 5, Original #118)

You have an Azure subscription that contains 10 virtual machines and the resources shown in the following table.

{{img:/exam-media/az-104/T5/image654.png}}

 You need to ensure that Bastion1 can support 100 concurrent SSH users. The solution must minimize administrative effort.

 What should you do first?

- [ ] A. Resize the subnet of Bastion1
- [ ] B. Configure host scaling.
- [ ] C. Create a network security group (NSG)
- [x] D. Upgrade Bastion1 to the Standard SKU

## Q452 (Topic 5, Original #120)

You have a Windows 11 device named Device and an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/image663.png}}

 Device1 has Azure PowerShell and Azure Command-Line Interface (CLI) installed.

 From Device1, you need to establish a Remote Desktop connection to VM1.

 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.

{{img:/exam-media/az-104/T5/image664.png}}

- [x] A. Upgrade Bastion1 to the Standard SKU
- [ ] B. From Bastion1, enable Kerberos authentication
- [x] C. From Azure CLI on Device1, run az network bastion rdp
- [x] D. From Bastion1, select Native Client Support.
- [ ] E. On Device1, run mstsc.exe.

## Q453 (Topic 5, Original #122)

You have an Azure subscription that has the public IP addresses shown in the following table.

{{img:/exam-media/az-104/T5/image678.png}}

 You plan to deploy an Azure Bastion Basic SKU host named Bastion1.

 Which IP addresses can you use?

- [x] A. IP1 only
- [ ] B. IP1 and IP2 only
- [ ] C. IP3, IP4, and IP5 only
- [ ] D. IP1, IP2, IP4, and IP5 only
- [ ] E. IP1, IP2, IP3, IP4, and IP5

## Q454 (Topic 5, Original #125)

You have two Azure subscriptions named Sub1 and Sub2.

 Sub1 contains a virtual machine named VM1 and a storage account named storage1.

 VM1 is associated to the resources shown in the following table.

{{img:/exam-media/az-104/T5/image679.png}}

 You need to move VM1 to Sub2.

 Which resources should you move to Sub2?

- [ ] A. VM1, Disk1, and NetInt1 only
- [ ] B. VM1, Disk1, and VNet1 only
- [ ] C. VM1, Disk1, and storage1 only
- [x] D. VM1, Disk1, NetInt1, and VNet1

## Q455 (Topic 5, Original #129)

You have an Azure subscription.

 You create a routing table named RT1.

 You need to add a route to RT1 that specifies the next hop IP address.

 Which next hop type should you select?

- [ ] A. Internet
- [ ] B. Virtual network gateway
- [ ] C. Virtual network
- [x] D. Virtual appliance

## Q456 (Topic 5, Original #130)

You have two Azure subscriptions named Sub1 and Sub2 that are linked to separate Microsoft Entra tenants.

{{img:/exam-media/az-104/T5/image844.png}}

 You have the virtual networks shown in the following table.

 Which virtual networks can you peer with VNet1?

- [ ] A. VNet2 only
- [ ] B. VNet2 and VNet3 only
- [ ] C. VNet2 and VNet4 only
- [ ] D. VNet2, VNet3, and VNet4 only
- [x] E. VNet2, VNet3, VNet4, and VNet5

## Q457 (Topic 5, Original #131)

You have an Azure subscription that contains a Recovery Services vault named Vault1.

 You need to enable multi-user authorization (MAU) for Vault1.

 Which resource should you create first?

- [ ] A. an administrative unit
- [ ] B. a managed identity
- [x] C. a resource guard
- [ ] D. a custom Azure role

## Q458 (Topic 5, Original #132)

You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.

 The effective network security configurations for VM2 are shown in the following exhibit.

{{img:/exam-media/az-104/T5/image688.png}}

 You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.

 You verify that the Load Balancer rules are configured correctly.

 You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.

 Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a priority of 150.

 Does this meet the goal?

- [x] A. Yes
- [ ] B. No

## Q459 (Topic 5, Original #133)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T5/image843.png}}

 You create a route table named RT1 in the East US Azure region.

 To which resources can you associate RT1?

- [ ] A. VNet1 only
- [x] B. Subnet1 only
- [ ] C. VNet1 and NIC1 only
- [ ] D. Subnet1 and NIC1 only
- [ ] E. VNet1, Subnet1, and NIC1

## Q460 (Topic 5, Original #134)

You create an Azure VM named VM1 that runs Windows Server 2019.

 VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T5/image690.png}}

 You need to enable Desired State Configuration for VM1.

 What should you do first?

- [ ] A. Connect to VM1.
- [x] B. Start VM1.
- [ ] C. Capture a snapshot of VM1.
- [ ] D. Configure a DNS name for VM1.

## Q461 (Topic 5, Original #135)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image728.png}}

 The subnets have the IP address spaces shown in the following table.

{{img:/exam-media/az-104/T5/image729.png}}

 You plan to create a container app named contapp1 in the East US Azure region.

 You need to create a container app environment named con-env1 that meets the following requirements:

 • Uses its own virtual network.
 • Uses its own subnet.
 • Is connected to the smallest possible subnet.

 To which virtual networks can you connect con-env1, and which subnet mask should you use? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T5/image730.png}}

- [ ] A. VNET2 only
- [x] B. VNET3 only
- [ ] C. VNET1 or VNET3 only
- [x] D. /23
- [ ] E. /26

## Q462 (Topic 5, Original #136)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image732.png}}

 All the virtual networks are peered. Each virtual network contains nine virtual machines.

 You need to configure secure RDP connections to the virtual machines by using Azure Bastion.

 What is the minimum number of Bastion hosts required?

- [x] A. 1
- [ ] B. 3
- [ ] C. 9
- [ ] D. 10

## Q463 (Topic 5, Original #137)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image733.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/image734.png}}

 Each virtual machine contains only a private IP address.

 You create an Azure bastion for VNet1 as shown in the following exhibit.

{{img:/exam-media/az-104/T5/image735.png}}

- [ ] A. The Remote Desktop Connection client (mstc.exe) can be used to connect to VM1 through to VM1 through Bastion1
- [x] B. The Azure Portal can use SSH to connect to VM2 through Bastion1
- [ ] C. The Azure Portal can be used to connect to VM3 through Bastion1

## Q464 (Topic 5, Original #138)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image738.png}}

 The subscription contains the subnets shown in the following table.

{{img:/exam-media/az-104/T5/image739.png}}

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T5/image740.png}}

 You create a service endpoint policy named Policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription.

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T5/image741.png}}

- [x] A. Policy1 can be applied to Subnet3
- [ ] B. Only storage1 and storage2 can be accessed from VNet2
- [ ] C. Only storage2 can be accessed from VNet3

## Q465 (Topic 5, Original #139)

You have an Azure virtual network named VNet1 that contains the following settings:

 • IPv4 address space: 172.16.10.0/24
 • Subnet name: Subnet1
 • Subnet address range: 172.16.10.0/25

 What is the maximum number of virtual machines that can connect to Subnet1?

- [ ] A. 24
- [ ] B. 25
- [x] C. 123
- [ ] D. 128
- [ ] E. 251

## Q466 (Topic 5, Original #140)

You have an Azure subscription that contains a resource group named RG1 and a virtual network named VNet1.

 You plan to create an Azure container instance named container1.

 You need to be able to configure DNS name label scope reuse for container1.

 What should you configure for container1?

- [ ] A. the private networking type
- [x] B. the public networking type
- [ ] C. a new subnet on VNet1
- [ ] D. a confidential SKU

## Q467 (Topic 5, Original #141)

You have the Azure virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/image743.png}}

 VNET1, VNET2, and VNET3 are peered.

 VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table.

{{img:/exam-media/az-104/T5/image744.png}}

 The virtual networks are configured to use the DNS servers shown in the following table.

{{img:/exam-media/az-104/T5/image745.png}}

- [ ] A. From VM1, server1.contoso.com resolves to 131.107.3.3
- [x] B. From VM2, server1.contoso.com resolves to 131.107.3.3
- [ ] C. From VM3, server2.contoso.com resolves to 131.107.2.4

## Q468 (Topic 5, Original #142)

You have an Azure subscription that contains a resource group named RG1.

 You plan to create an Azure Resource Manager (ARM) template to deploy a new virtual machine named VM1. VM1 must support the capture of performance data.

 You need to specify resource dependencies for the ARM template.

 In which order should you deploy the resources? To answer, move all resources from the list of resources to the answer area and arrange them in the correct order.

{{img:/exam-media/az-104/T5/image748.png}}

- [x] A. virtual network
- [x] B. network interface
- [x] C. virtual machine
- [x] D. Azure Monitor extension

## Q469 (Topic 5, Original #143)

You have an Azure subscription.

 You are creating a new Azure container instance that will have the following settings:

 • Container name: cont1
 • SKU: Standard
 • OS type: Windows
 • Networking type: Public
 • Memory (GiB): 2.5
 • Number of CPU cores: 2

 You discover that the Private setting for Networking type is unavailable.

 You need to ensure that cont1 can be configured to use private networking.

 Which setting should you change?

- [ ] A. Memory (GiB)
- [x] B. Networking type
- [ ] C. Number of CPU cores
- [ ] D. OS type
- [ ] E. SKU

## Q470 (Topic 5, Original #144)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image750.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T5/image751.png}}

 All the virtual machines have only private IP addresses.

 You deploy an Azure Bastion host named Bastion1 to VNet1.

 To which virtual machines can you connect through Bastion1?

- [ ] A. VM1 only
- [x] B. VM1 and VM2 only
- [ ] C. VM1 and VM3 only
- [ ] D. VM1, VM2, and VM3

## Q471 (Topic 5, Original #145)

You have the Azure virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image817.png}}

 Which virtual networks can you peer with VNet1?

- [ ] A. VNet2, VNet3, and VNet4
- [ ] B. VNet2 only
- [x] C. VNet3 and VNet4 only
- [ ] D. VNet2 and VNet3 only

## Q472 (Topic 5, Original #146)

You have an Azure subscription.

 You plan to migrate 50 virtual machines from VMware vSphere to the subscription.

 You create a Recovery Services vault.

 What should you do next?

- [ ] A. Configure an extended network.
- [ ] B. Create a recovery plan.
- [ ] C. Deploy an Open Virtualization Application (OVA) template to vSphere.
- [x] D. Configure a virtual network.

## Q473 (Topic 5, Original #147)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image791.png}}

 Each virtual network has 50 connected virtual machines.

 You need to implement Azure Bastion. The solution must meet the fallowing requirements:

 • Support host scaling.
 • Support uploading and downloading files.
 • Support the virtual machines on both VNet1 and VNet2.
 • Minimize the number of addresses on the Azure Bastion subnet.

 How should you configure Azure Bastion? To answer, select the options in the answer area.

 NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T5/image792.png}}

- [ ] A. /24
- [x] B. /26
- [x] C. Standard SKU with a static allocation
- [ ] D. Basic SKU with a static allocation
- [ ] E. Basic SKU with a dynamic allocation

## Q474 (Topic 5, Original #148)

You have an Azure subscription that contains the virtual networks shown in the following table.

{{img:/exam-media/az-104/T5/image816.png}}

 You need to ensure that all the traffic between VNet1 and VNet2 traverses the Microsoft backbone network.

 What should you configure?

- [ ] A. a private endpoint
- [x] B. peering
- [ ] C. Express Route
- [ ] D. a route table

## Q475 (Topic 5, Original #149)

You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. VNet1 has a VPN gateway that uses static routing,

 The on-premises network has a VPN connection that uses the VPN gateway of VNet1.

 You need to configure access for users on the on-premises network to connect to a virtual machine on VNet2. The solution must minimize costs.

 Which type of connectivity should you use?

- [ ] A. Azure Firewall with a private IP address
- [x] B. service chaining and user-defined routes (UDRs)
- [ ] C. Azure Application Gateway
- [ ] D. ExpressRoute circuits to VNet2

## Q476 (Topic 5, Original #150)

You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2.

 You have a Network Virtual Appliance (NVA) named NetVA1.

 You need to ensure that the traffic from VNet1 to VNet2 is inspected by using NetVA1.

 What should you use?

- [ ] A. a local network gateway
- [x] B. a route table that has custom routes
- [ ] C. a service endpoint
- [ ] D. IP address reservations

## Q477 (Topic 6, Original #1)

You have an Azure subscription that has a Recovery Services vault named Vault1. The subscription contains the virtual machines shown in the following table:

{{img:/exam-media/az-104/T6/0052600001.png}}

 You plan to schedule backups to occur every night at 23:00.
 Which virtual machines can you back up by using Azure Backup?

- [ ] A. VM1 and VM3 only
- [x] B. VM1, VM2, VM3 and VM4
- [ ] C. VM1 and VM2 only
- [ ] D. VM1 only

## Q478 (Topic 6, Original #2)

You have an Azure subscription that contains a virtual machine named VM1.

 You plan to deploy an Azure Monitor alert rule that will trigger an alert when CPU usage on VM1 exceeds 80 percent.

 You need to ensure that the alert rule sends an email message to two users named User1 and User2.

 What should you create for Azure Monitor?

- [x] A. an action group
- [ ] B. a mail-enabled security group
- [ ] C. a distribution group
- [ ] D. a Microsoft 365 group

## Q479 (Topic 6, Original #3)

You have the Azure virtual machines shown in the following table:

{{img:/exam-media/az-104/T6/0053100001.png}}

 You have a Recovery Services vault that protects VM1 and VM2.
 You need to protect VM3 and VM4 by using Recovery Services.
 What should you do first?

- [x] A. Create a new Recovery Services vault
- [ ] B. Create a storage account
- [ ] C. Configure the extensions for VM3 and VM4
- [ ] D. Create a new backup policy

## Q480 (Topic 6, Original #4)

You have an Azure subscription that contains an Azure Storage account named storage1 and the users shown in the following table.

{{img:/exam-media/az-104/T6/0053200001.png}}

 You plan to monitor storage1 and to configure email notifications for the signals shown in the following table.

{{img:/exam-media/az-104/T6/0053200002.png}}

 You need to identify the minimum number of alert rules and action groups required for the planned monitoring.
 How many alert rules and action groups should you identify? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0053300001.jpg}}

- [ ] A. Alert rules: 3
- [x] B. Alert rules: 4
- [ ] C. Action groups: 2
- [x] D. Action groups: 3
- [ ] E. Action groups: 4

## Q481 (Topic 6, Original #5)

You have an Azure subscription that contains the identities shown in the following table.

{{img:/exam-media/az-104/T6/0053500001.png}}

 User1, Principal1, and Group1 are assigned the Monitoring Reader role.
 An action group named AG1 has the Email Azure Resource Manager Role notification type and is configured to email the Monitoring Reader role.
 You create an alert rule named Alert1 that uses AG1.
 You need to identity who will receive an email notification when Alert1 is triggered.
 Who should you identify?

- [ ] A. User1 and Principal1 only
- [ ] B. User1, User2, Principal1, and Principal2
- [ ] C. User1 only
- [x] D. User1 and User2 only

## Q482 (Topic 6, Original #6)

You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1.
 You create a backup policy named Policy1 as shown in the exhibit. (Click the Exhibit tab.)

{{img:/exam-media/az-104/T6/0053600001.jpg}}

 You configure the backup of VM1 to use Policy1 on Thursday, January 1 at 1:00 AM.
 You need to identify the number of available recovery points for VM1.
 How many recovery points are available on January 8 and January 15? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0053700001.jpg}}

- [x] A. Jan 8: 6
- [ ] B. Jan 8: 9
- [x] C. Jan 15: 8
- [ ] D. Jan 15: 17
- [ ] E. Jan 15: 5

## Q483 (Topic 6, Original #7)

You have the web apps shown in the following table.

{{img:/exam-media/az-104/T6/0053900001.png}}

 You need to monitor the performance and usage of the apps by using Azure Application Insights. The solution must minimize modifications to the application code.
 What should you do on each app? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0054000001.png}}

- [x] A. App1: Install the Application Insights Agent
- [x] B. App2: Install the Application Insights Agent
- [ ] C. App1: Install the Azure Monitor agent
- [ ] D. App2: Install the Application Insights SDK
- [ ] E. App1: Install the Application Insights SDK

## Q484 (Topic 6, Original #8)

You have an Azure virtual machine named VM1.
 You use Azure Backup to create a backup of VM1 named Backup1.
 After creating Backup1, you perform the following changes to VM1:
 ✑ Modify the size of VM1.
 ✑ Copy a file named Budget.xls to a folder named Data.
 ✑ Reset the password for the built-in administrator account.
 ✑ Add a data disk to VM1.
 An administrator uses the Replace existing option to restore VM1 from Backup1.
 You need to ensure that all the changes to VM1 are restored.
 Which change should you perform again?

- [ ] A. Modify the size of VM1.
- [ ] B. Reset the password for the built-in administrator account.
- [ ] C. Add a data disk.
- [x] D. Copy Budget.xls to Data.

## Q485 (Topic 6, Original #9)

You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains the users shown in the following table.

{{img:/exam-media/az-104/T6/0054300001.png}}

 You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit. (Click the Password Reset tab.)

{{img:/exam-media/az-104/T6/0054300002.png}}

 You configure the authentication methods for password reset as shown in the Authentication Methods exhibit. (Click the Authentication Methods tab.)

{{img:/exam-media/az-104/T6/0054400001.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. After User2 answers three security questions correctly, he can reset his password immediately
- [ ] B. If User1 forgets her passweord, she can reset the password by using the mobile phone app.
- [ ] C. User3 can add security questions to the passweord reset process

## Q486 (Topic 6, Original #10)

Your company has a main office in London that contains 100 client computers.
 Three years ago, you migrated to Azure Active Directory (Azure AD).
 The company's security policy states that all personal devices and corporate-owned devices must be registered or joined to Azure AD.
 A remote user named User1 is unable to join a personal device to Azure AD from a home network.
 You verify that User1 was able to join devices to Azure AD in the past.
 You need to ensure that User1 can join the device to Azure AD.
 What should you do?

- [ ] A. Assign the User administrator role to User1.
- [x] B. From the Device settings blade, modify the Maximum number of devices per user setting.
- [ ] C. Create a point-to-site VPN from the home network of User1 to Azure.
- [ ] D. From the Device settings blade, modify the Users may join devices to Azure AD setting.

## Q487 (Topic 6, Original #11)

You have two Azure App Service app named App1 and App2. Each app has a production deployment slot and a test deployment slot.
 The Backup Configuration settings for the production slots are shown in the following table.

{{img:/exam-media/az-104/T6/0054700001.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.
 Hot Area:

- [ ] A. On January 15, 2021, App1 will have only one backup in storage
- [ ] B. On February 6, 2021, you can access the backup of the App2 test slot from January 15, 2021
- [x] C. On January 15,2021, you can restore the App2 production slot backop from January 6 to the App2 test slot

## Q488 (Topic 6, Original #12)

You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant is synced to the on-premises Active
 Directory domain. The domain contains the users shown in the following table.

{{img:/exam-media/az-104/T6/0054900001.png}}

 You enable self-service password reset (SSPR) for all users and configure SSPR to have the following authentication methods:
 ✑ Number of methods required to reset: 2
 ✑ Methods available to users: Mobile phone, Security questions
 ✑ Number of questions required to register: 3
 ✑ Number of questions required to reset: 3
 You select the following security questions:
 ✑ What is your favorite food?
 ✑ In what city was your first job?
 ✑ What was the name of your first pet?

- [ ] A. SecAdmin1 must answer the following question during the self-service password reset: In what city was your first job?
- [ ] B. BillAdmin1 must answer the following question during the self-service password reset: What is you favorite food?
- [x] C. User1 must answer the following question during the self-service password reset: What was the name of your first pet?

## Q489 (Topic 6, Original #13)

You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:

{{img:/exam-media/az-104/T6/0055100001.png}}

 User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.
 You need to create new user accounts in external.contoso.onmicrosoft.com.
 Solution: You instruct User1 to create the user accounts.
 Does that meet the goal?

- [x] A. Yes
- [ ] B. No

## Q490 (Topic 6, Original #14)

You have an existing Azure subscription that contains 10 virtual machines.
 You need to monitor the latency between your on-premises network and the virtual machines.
 What should you use?

- [ ] A. Service Map
- [ ] B. Connection troubleshoot
- [x] C. Network Performance Monitor
- [ ] D. Effective routes

## Q491 (Topic 6, Original #15)

You have an Azure App Service plan named ASP1.
 CPU usage for ASP1 is shown in the following exhibit.

{{img:/exam-media/az-104/T6/0055300001.jpg}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0055400001.png}}

- [ ] A. once
- [x] B. four times
- [ ] C. six times
- [x] D. scaled up
- [ ] E. scaled down

## Q492 (Topic 6, Original #16)

You have an Azure Linux virtual machine that is protected by Azure Backup.
 One week ago, two files were deleted from the virtual machine.
 You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible.
 Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T6/0055700001.png}}

- [x] A. From the Azure Portal, click File Recovery
- [x] B. Select a restore point that contains the deleted files
- [x] C. Download and run the script to mount a drive on the local computer
- [x] D. Copy the files by using File Explorer
- [ ] E. From Azure portal, click Restore VM from the vault

## Q493 (Topic 6, Original #17)

You purchase a new Azure subscription named Subscription1.
 You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup.
 You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days.
 What should you do? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0056200001.jpg}}

- [x] A. Box1: A Recovery Service vault
- [x] B. Box2: a backup policy
- [ ] C. Box1: a file share
- [ ] D. Box1 a blob container
- [ ] E. Box2: batch job

## Q494 (Topic 6, Original #18)

You have an Azure virtual machine named VM1.
 Azure collects events from VM1.
 You are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1.
 Which target resource should you monitor in the alert rule?

- [ ] A. virtual machine extension
- [ ] B. virtual machine
- [ ] C. metric alert
- [x] D. Azure Log Analytics workspace

## Q495 (Topic 6, Original #19)

You have an Azure subscription that contains 100 virtual machines.
 You regularly create and delete virtual machines.
 You need to identify unattached disks that can be deleted.
 What should you do?

- [ ] A. From Azure Cost Management, view Cost Analysis
- [ ] B. From Azure Advisor, modify the Advisor configuration
- [ ] C. From Microsoft Azure Storage Explorer, view the Account Management properties
- [x] D. From Azure Cost Management, view Advisor Recommendations

## Q496 (Topic 6, Original #20)

You have an Azure web app named webapp1.
 Users report that they often experience HTTP 500 errors when they connect to webapp1.
 You need to provide the developers of webapp1 with real-time access to the connection errors. The solution must provide all the connection error details.
 What should you do first?

- [ ] A. From webapp1, enable Web server logging
- [ ] B. From Azure Monitor, create a workbook
- [ ] C. From Azure Monitor, create a Service Health alert
- [x] D. From webapp1, turn on Application Logging

## Q497 (Topic 6, Original #21)

You have an Azure web app named App1.
 You need to monitor the availability of App1 by using a multi-step web test.
 What should you use in Azure Monitor?

- [ ] A. Azure Service Health
- [x] B. Azure Application Insights
- [ ] C. the Diagnostic settings
- [ ] D. metrics

## Q498 (Topic 6, Original #22)

You have an Azure subscription that has diagnostic logging enabled and is configured to send logs to a Log Analytics workspace.
 You are investigating a service outage.
 You need to view the event time, the event name, and the affected resources.
 How should you complete the query? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0056700001.jpg}}

- [x] A. AzureActivity
- [ ] B. NetworkMonitoring
- [ ] C. | extend
- [x] D. | project
- [ ] E. | join

## Q499 (Topic 6, Original #23)

You have a Recovery Services vault named RSV1. RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days.
 RSV1 performs daily backups of VM1. VM1 hosts a static website that was updated eight days ago.
 You need to recover VM1 to a point eight days ago. The solution must minimize downtime.
 What should you do first?

- [ ] A. Deallocate VM1.
- [ ] B. Restore VM1 by using the Replace existing restore configuration option.
- [ ] C. Delete VM1.
- [x] D. Restore VM1 by using the Create new restore configuration option.

## Q500 (Topic 6, Original #24)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T6/0057000001.png}}

 You plan to create a data collection rule named DCR1 in Azure Monitor.
 Which resources can you set as data sources in DCR1, and which resources can you set as destinations in DCR1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0057100001.jpg}}

- [x] A. Data sources: VM1 only
- [x] B. Destinations: Workspace1 only
- [ ] C. Data sources: VM1 and storage1 only
- [ ] D. Data sources: VM1, storage1 and DB1 only
- [ ] E. Destinations: Workspace1 and storage1 only

## Q501 (Topic 6, Original #25)

You have the role assignment file shown in the following exhibit.

{{img:/exam-media/az-104/T6/0057300001.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T6/0057400001.png}}

- [x] A. Box1: User1 and User3 are
- [ ] B. Box1: User3 and User4 are
- [x] C. Box2: User1 and User4
- [ ] D. Box2: User1, User2 and USer4
- [ ] E. Box2: User1,User2, User3 and User4

## Q502 (Topic 6, Original #26)

You have the following custom role-based access control (RBAC) role.

{{img:/exam-media/az-104/T6/0057600001.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [ ] A. Users that are assigned Rile1 can assign Role1 to users
- [x] B. Users that are assigned Tole1 can deploy new virtual machines
- [x] C. Users that are assigned Role1 can set a static IP address on a virtual machine

## Q503 (Topic 6, Original #27)

You have an Azure subscription that contains the resources shown in the following table.

{{img:/exam-media/az-104/T6/0057800001.png}}

 NSG1 is configured as shown in the following exhibit.

{{img:/exam-media/az-104/T6/0057800002.jpg}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. VM1 can access storage1
- [x] B. VM2 can access VM1 by using the HTTPS protocol
- [ ] C. The securit rules for NSG1 apply to any virtual machine on VNET1

## Q504 (Topic 6, Original #28)

You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named
 VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1.
 On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1.
 You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2.
 You need to ensure that you can connect Client1 to VNet2.
 What should you do?

- [ ] A. Select Use the remote virtual network's gateway or Route Server on VNet1 to VNet2 peering.
- [ ] B. Select Use the remote virtual network s gateway or Route Server on VNet2 to VNet1 peering.
- [x] C. Download and re-install the VPN client configuration package on Client1.
- [ ] D. Enable BGP on VPNGW1.

## Q505 (Topic 6, Original #29)

You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.
 You have the resource groups shown in the following table.

{{img:/exam-media/az-104/T6/0058000001.png}}

 You have the virtual machines shown in the following table.

{{img:/exam-media/az-104/T6/0058100001.png}}

 You assign roles to users as shown in the following table.

{{img:/exam-media/az-104/T6/0058100002.png}}

- [ ] A. User1 can sign in to VM1
- [ ] B. User2 can manage disks and disk snapshots of VM1
- [ ] C. User2 can manage disks and disk Snapshots of VM3

## Q506 (Topic 6, Original #30)

You have an Azure Active Directory (Azure AD) tenant that is linked to 10 Azure subscriptions.
 You need to centrally monitor user activity across all the subscriptions.
 What should you use?

- [ ] A. Azure Application Insights Profiler
- [ ] B. access reviews
- [ ] C. Activity log filters
- [x] D. a Log Analytics workspace

## Q507 (Topic 6, Original #31)

You have an Azure subscription that contains a virtual machine name VM1.
 VM1 has an operating system disk named Disk1 and a data disk named Disk2.
 You need to back up Disk2 by using Azure Backup.
 Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T6/0058400001.jpg}}

- [x] A. Create an Azure Backup vault
- [x] B. Create a backup policy and configure the backup
- [x] C. Configure a managed identity
- [ ] D. Create a Recovery Services vault
- [ ] E. Delegate permissions for the vault

## Q508 (Topic 6, Original #32)

You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1. NSG1 only contains the default rules.
 You need to create a rule in NSG1 to prevent the hosts on Subnet1 form connecting to the Azure portal. The hosts must be able to connect to other internet hosts.
 To what should you set Destination in the rule?

- [ ] A. Any
- [ ] B. IP Addresses
- [x] C. Service Tag
- [ ] D. Application security group

## Q509 (Topic 6, Original #34)

You have an Azure App Service web app named App1.
 You need to collect performance traces for App1.
 What should you use?

- [x] A. Azure Application Insights Profiler
- [ ] B. the Activity log
- [ ] C. the Deployment center
- [ ] D. the Diagnose and solve problems settings

## Q510 (Topic 6, Original #35)

You have an Azure subscription that contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T6/image618.png}}

 You deploy a web app named App1 to the West US Azure region.

 You need to back up App1. The solution must minimize costs.

 Which storage account should you use as the target for the backup?

- [ ] A. storage1
- [x] B. storage2
- [ ] C. storage3
- [ ] D. storage4

## Q511 (Topic 6, Original #36)

You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains two users named User1 and User2.

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T6/image619.png}}

 The subscription contains the alert rules shown in the following table.

{{img:/exam-media/az-104/T6/image620.png}}

 The users perform the following action:

 • User1 creates a new virtual disk and attaches the disk to VM1
 • User2 creates a new resource tag and assigns the tag to RG1 and VM1

 Which alert rules are triggered by each user? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T6/image621.png}}

- [ ] A. User1: No alert is triggered
- [ ] B. User1: Only Alert1 is triggered
- [ ] C. User2: Only Alert2 is triggered
- [x] D. User1: Alert1 and Alert2 are triggered
- [x] E. User2: Alert1 and Alert2 are triggered

## Q512 (Topic 6, Original #37)

You have an Azure subscription that contains multiple virtual machines in the West US Azure region.

 You need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine traffic.

 Which two resources should you create? Each correct answer presents part of the solution.

- [x] A. a Log Analytics workspace
- [ ] B. an Azure Monitor workbook
- [ ] C. a storage account
- [ ] D. a Microsoft Sentinel workspace
- [x] E. a Data Collection Rule (DCR) in Azure Monitor

## Q513 (Topic 6, Original #38)

You have an Azure subscription that contains eight virtual machines and the resources shown in the following table.

{{img:/exam-media/az-104/T6/image623.png}}

 You need to configure access for VNET1. The solution must meet the following requirements:

 • The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft backbone.
 • The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone.

 What is the minimum number of service endpoints you should add to VNET1?

- [ ] A. 1
- [x] B. 2
- [ ] C. 3
- [ ] D. 5

## Q514 (Topic 6, Original #39)

You need to configure an Azure web app named contoso.azurewebsites.net to host www.contoso.com.

 What should you do first?

- [ ] A. Create A records named www.contoso.com and asuid.contoso.com.
- [x] B. Create a TXT record named asuid that contains the domain verification ID.
- [ ] C. Create a CNAME record named asuid that contains the domain verification ID.
- [ ] D. Create a TXT record named www.contoso.com that has a value of contoso.azurewebsites.net.

## Q515 (Topic 6, Original #40)

You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named Workspace1. Each NSG is connected to a virtual machine.

 You need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected.

 What should you do first?

- [ ] A. Deploy Connection Monitor.
- [ ] B. Configure data collection endpoints.
- [ ] C. Configure a private link.
- [x] D. Configure NSG flow logs.

## Q516 (Topic 6, Original #41)

You have an Azure subscription named Sub1 that contains the resources shown in the following table.

{{img:/exam-media/az-104/T6/image624.png}}

 Sub1 contains the following alert rule:

 • Name: Alert1
 • Scope: All resource groups in Sub1
 o Include all future resources
 • Condition: All administrative operations
 • Actions: Action1

 Sub1 contains the following alert processing rule:

 • Name: Rule1
 • Scope: Sub1
 • Rule type: Suppress notifications
 • Apply the rule: On a specific time
 o Start: August 10, 2022
 o End: August 13, 2022

- [x] A. If you create a resource group in Sub1 on August 11, 2022, Alert1 is listed in the Azure portal
- [ ] B. If you create a resource group in Sub1 on August 12, 2022, an email is sent to admin1@contoso.com
- [x] C. If you add a tag to RG1 on August 15, 2022, an email is sent to admin1@contoso.com

## Q517 (Topic 6, Original #42)

You have an Azure subscription that contains a storage account named storage1 in the North Europe Azure region.

 You need to ensure that when blob data is added to storage1, a secondary copy is created in the East US region. The solution must minimize administrative effort.

 What should you configure?

- [ ] A. operational backup
- [x] B. object replication
- [ ] C. geo-redundant storage (GRS)
- [ ] D. a lifecycle management rule

## Q518 (Topic 6, Original #43)

You have an Azure subscription that contains two Log Analytics workspaces named Workspace1 and Workspace2 and 100 virtual machines that run Windows Server.

 You need to collect performance data and events from the virtual machines. The solution must meet the following requirements:

 • Logs must be sent to Workspace1 and Workspace 2.
 • All Windows events must be captured.
 • All security events must be captured.

 What should you install and configure on each virtual machine?

- [x] A. the Azure Monitor agent
- [ ] B. the Windows Azure diagnostics extension (WAD)
- [ ] C. the Windows VM agent

## Q519 (Topic 6, Original #44)

You have an Azure subscription that contains a virtual machine named VM1 and an Azure function named App1.

 You need to create an alert rule that will run App1 if VM1 stops.

 What should you create for the alert rule?

- [ ] A. an application security group
- [ ] B. a security group that has dynamic device membership
- [x] C. an action group
- [ ] D. an application group

## Q520 (Topic 6, Original #45)

You have an Azure subscription that contains a virtual network named VNet1.

 VNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters.

 You need to create a dashboard to display detailed metrics and a visual representation of the network topology.

 What should you use?

- [x] A. Azure Monitor Network Insights
- [ ] B. a Data Collection Rule (DCR)
- [ ] C. Azure Virtual Network Watcher
- [ ] D. Log Analytics

## Q521 (Topic 6, Original #46)

You deploy Azure virtual machines to three Azure regions

 Each region contains a virtual network. Each virtual network contains multiple subnets peered in a full mesh topology.

 Each subnet contains a network security group (NSG) that has defined rules.

 A user reports that he cannot use port 33000 to connect from a virtual machine in one region to a virtual machine in another region.

 Which two options can you use to diagnose the issue? Each correct answer presents a complete solution.

 NOTE: Each correct selection is worth one point.

- [ ] A. Azure Virtual Network Manager
- [x] B. IP flow verify
- [ ] C. Azure Monitor Network Insights
- [x] D. Connection troubleshoot
- [ ] E. elective security rules

## Q522 (Topic 6, Original #47)

You have an Azure subscription.

 You need to receive an email alert when a resource lock is removed from any resource in the subscription.

 What should you use to create an activity log alert in Azure Monitor?

- [x] A. a resource, a condition, and an action group
- [ ] B. a resource, a condition, and a Microsoft 365 group
- [ ] C. a Log Analytics workspace, a resource, and an action group
- [ ] D. a data collection endpoint, an application security group, and a resource group

## Q523 (Topic 6, Original #48)

You have an Azure subscription that contains the alerts shown in the following exhibit.

{{img:/exam-media/az-104/T6/image680.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T6/image681.png}}

- [ ] A. Alert1: cannot be changed
- [ ] B. Alert2: cannot be changed
- [x] C. Alert1: can be changed to New or Acknowledged
- [x] D. Alert2: can be changed to New or Acknowledged
- [ ] E. Alert1: can be changed to New only

## Q524 (Topic 6, Original #49)

You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit:

{{img:/exam-media/az-104/T6/image752.png}}

 Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T6/image753.png}}

- [ ] A. March1: 30days
- [ ] B. November1: 30days
- [ ] C. March1: 36months
- [x] D. March1: 10years
- [x] E. November1: 36 months

## Q525 (Topic 6, Original #50)

You have an Azure subscription that contains the vaults shown in the following table.

{{img:/exam-media/az-104/T6/image755.png}}

 You deploy the virtual machines shown in the following table.

{{img:/exam-media/az-104/T6/image756.png}}

 You have the backup policies shown in the following table.

{{img:/exam-media/az-104/T6/image757.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [x] A. VM1 can be backed up by using Policy1
- [ ] B. VM2 can be backed up by using Policy3
- [x] C. VM2 can be backed up by using Policy2

## Q526 (Topic 6, Original #51)

You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1.

 You plan to configure Azure Monitor for VM Insights.

 You need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1.

 What should you create first?

- [ ] A. a data collection rule (DCR)
- [ ] B. a Log Analytics workspace
- [x] C. an Azure Monitor Private Link Scope (AMPLS)
- [ ] D. a private endpoint

## Q527 (Topic 6, Original #52)

You have an Azure subscription that contains the vaults shown in the following table.

{{img:/exam-media/az-104/T6/image760.png}}

 You create a storage account that contains the resources shown in the following table.

{{img:/exam-media/az-104/T6/image761.png}}

 To which vault can you back up cont1 and share1? To answer, select the appropriate options in the answer area.

 NOTE: Each correct answer is worth one point.

{{img:/exam-media/az-104/T6/image762.png}}

- [x] A. cont1: Backup only
- [ ] B. share1: Backup only
- [x] C. share1: Recovery only
- [ ] D. cont1: Recovery only
- [ ] E. cont1: Cannot be backed up to Backup1 or Recovery1

## Q528 (Topic 6, Original #53)

You have an Azure subscription that contains an Azure Stream Analytics job named Job1.

 You need to monitor input events for Job1 to identify the number of events that were NOT processed.

 Which metric should you use?

- [ ] A. Out-of-Order Events
- [ ] B. Output Events
- [ ] C. Late Input Events
- [x] D. Backlogged Input Events

## Q529 (Topic 6, Original #54)

You have an Azure subscription that contains an Azure SQL database named DB1.

 You plan to use Azure Monitor to monitor the performance of DB1. You must be able to run queries to analyze log data.

 Which destination should you configure in the Diagnostic settings of DB1?

- [x] A. Send to a Log Analytics workspace.
- [ ] B. Archive to a storage account.
- [ ] C. Stream to an Azure event hub.

## Q530 (Topic 6, Original #55)

You have an Azure subscription. The subscription contains virtual machines that run Windows Server.

 You have a data collection rule (DCR) named Rule1.

 You plan to use the Azure Monitor Agent to collect events from Windows System event logs.

 You only need to collect system events that have an ID of 1001.

 Which type of query should you use for the data source in Rule1?

- [ ] A. SQL
- [x] B. XPath
- [ ] C. KQL

## Q531 (Topic 6, Original #56)

You have an Azure subscription that contains a virtual machine named VM1.

 You have an on-premises datacenter that contains a domain controller named DC1. ExpressRoute is used to connect the on-premises datacenter to Azure.

 You need to use Connection Monitor to identify network latency between VM1 and DC1.

 What should you install on DC1?

- [ ] A. the Azure Connected Machine agent for Azure Arc-enabled servers
- [ ] B. the Azure Network Watcher Agent virtual machine extension
- [ ] C. the Log Analytics agent
- [x] D. an Azure Monitor agent extension

## Q532 (Topic 6, Original #57)

You have an Azure subscription that has Traffic Analytics configured.

 You deploy a new virtual machine named VM1 that has the following settings:

 • Region: East US
 • Virtual network: VNet1
 • NIC network security group: NSG1

 You need to monitor VM1 traffic by using Traffic Analytics.

 Which settings should you configure?

- [ ] A. Diagnostic settings for VM1
- [x] B. NSG flow logs for NSG1
- [ ] C. Diagnostic settings for NSG1
- [ ] D. Insights for VM1

## Q533 (Topic 6, Original #58)

You have an Azure subscription. The subscription contains 10 virtual machines that run Windows Server. Each virtual machine hosts a website in IIS and has the Azure Monitor Agent installed.

 You need to collect the IIS logs from each virtual machine and store them in a Log Analytics workspace.

 What should you configure first?

- [x] A. a data collection endpoint
- [ ] B. an Azure Monitor Private Link Scope (AMPLS)
- [ ] C. Diagnostic settings
- [ ] D. VM insights
- [ ] E. a private endpoint

## Q534 (Topic 6, Original #59)

You have an Azure subscription that contains two storage accounts named contoso101 and contoso102.

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T6/image794.png}}

 VNet1 has service endpoints configured as shown in the Service endpoints exhibit. (Click the Service endpoints tab.)

{{img:/exam-media/az-104/T6/image795.png}}

 The Microsoft.Storage service endpoint has the service endpoint policy shown in the Microsoft.Storage exhibit. (Click the Microsoft.Storage tab.)

{{img:/exam-media/az-104/T6/image796.png}}

 For each of the following statements, select Yes if the statement is true. Otherwise, select No.

 NOTE: Each correct selection is worth one point.

- [ ] A. VM1 can access contoso 102
- [ ] B. VM2 can access contoso101
- [x] C. VM2 uses a private IP address to access Azure AD

## Q535 (Topic 6, Original #60)

You have an Azure subscription that contains an Azure Backup vault named Backup1, a Recovery Services vault named Recovery1, and the resources shown in the following table.

{{img:/exam-media/az-104/T6/image879.png}}

 You plan to back up the resources.

 Which resource can be backed up to Backup1, and which resource can be backed up to Recovery1? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T6/image880.png}}

- [ ] A. Backup1: App1
- [x] B. Backup1: Disk1
- [ ] C. Backup1: DB1
- [ ] D. Recovery1: DB1
- [x] E. Recovery1: VM1

## Q536 (Topic 6, Original #61)

ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.

 Existing Environment -

 Azure Environment -

 ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.

 The subscription contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T6/image865.png}}

 The subscription contains the virtual machines shown in the following table.

{{img:/exam-media/az-104/T6/image866.png}}

 The subscription has an Azure container registry that contains the images shown in the following table.

{{img:/exam-media/az-104/T6/image867.png}}

 The subscription contains the resources shown in the following table.

{{img:/exam-media/az-104/T6/image868.png}}

 Azure Key Vault -

 The subscription contains an Azure key vault named Vault1.

 Vault1 contains the certificates shown in the following table.

{{img:/exam-media/az-104/T6/image869.png}}

 Vault1 contains the keys shown in the following table.

{{img:/exam-media/az-104/T6/image870.png}}

 Microsoft Entra Environment -

 ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.

{{img:/exam-media/az-104/T6/image871.png}}

 The tenant contains the groups shown in the following table.

{{img:/exam-media/az-104/T6/image872.png}}

 The adatum.com tenant has a custom security attribute named Attribute1.

 Planned Changes -

 ADatum plans to implement the following changes:

 • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.
 • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage
 • Whenever possible, use directories to organize storage account content.
 • Grant User1 the permissions required to link Zone1 to VNet1.
 • Assign Attribute1 to supported adatum.com resources.
 • In storage2, create an encryption scope named Scope1.
 • Deploy new containers by using Image1 or Image2.

 Technical Requirements -

 ADatum must meet the following technical requirements:

 • Use TLS for WebApp1.
 • Follow the principle of least privilege.
 • Grant permissions at the required scope only.
 • Ensure that Scope1 is used to encrypt storage services.
 • Use Azure Backup to back up cont1 and share1 as frequently as possible.
 • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.

 You need to configure Azure Backup to meet the technical requirements for cont1 and share1.

 To what should you set the backup frequency for each resource? To answer, select the appropriate options in the answer area.

 NOTE: Each correct selection is worth one point.

{{img:/exam-media/az-104/T6/image882.png}}

- [x] A. cont1: Daily
- [x] B. share1: Every 4 hours
- [ ] C. cont1: every 6 hours
- [ ] D. cont1: every 12 hours
- [ ] E. share1: every hour

## Q537 (Topic 7-16, Original #?)

Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0012700006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  HOTSPOT -
 You need to configure the Device settings to meet the technical requirements and the user requirements.
 Which two settings should you modify? To answer, select the appropriate settings in the answer area.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0013000001.png}}

- [ ] A. Users may join devices to Azue AD: All
- [x] B. Users may join devices to Azue AD: Selected
- [ ] C. Users may join devices to Azue AD: None
- [x] D. Require Mulit-Factor Auth to join devices: Yes
- [ ] E. Require Mulit-Factor Auth to join devices: No

## Q538 (Topic 7-16, Original #?)

Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0012700006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You need to meet the user requirement for Admin1.
 What should you do?

- [ ] A. From the Azure Active Directory blade, modify the Groups
- [ ] B. From the Azure Active Directory blade, modify the Properties
- [x] C. From the Subscriptions blade, select the subscription, and then modify the Access control (IAM) settings
- [ ] D. From the Subscriptions blade, select the subscription, and then modify the Properties

## Q539 (Topic 7-16, Original #?)

General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059200001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059200002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0059200003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059300001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059300005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059300007.png}}

{{img:/exam-media/az-104/T7-T16/0059400001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -
 You need to configure Azure Backup to back up the file shares and virtual machines.
 What is the minimum number of Recovery Services vaults and backup policies you should create? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0059500001.png}}

- [ ] A. Recovery Services vaults: 4
- [ ] B. Recovery Services vaults: 7
- [ ] C. Backup policies: 5
- [x] D. Recovery Services vaults: 3
- [x] E. Backup policies: 6

## Q540 (Topic 7-16, Original #?)

Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059200001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059200002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0059200003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059300001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059300005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0059300007.png}}

{{img:/exam-media/az-104/T7-T16/0059400001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  DRAG DROP -
 You need to configure the alerts for VM1 and VM2 to meet the technical requirements.
 Which three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.
 Select and Place:

{{img:/exam-media/az-104/T7-T16/0059800001.jpg}}

- [x] A. Create a Log Analytics workspace
- [x] B. Collect Windows performance counters from the Log Analytics agents
- [x] C. Create an alert rule
- [ ] D. Configure the Diagnostics settings
- [ ] E. Create an Azure SQL database

## Q541 (Topic 7-16, Original #?)

Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013400001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013400002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0013400003-4fc5b1c920e47c737559fef1f0b8cdfc1b918ff9.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013500001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013500005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013500007.png}}

{{img:/exam-media/az-104/T7-T16/0013600001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -
 You need to ensure that User1 can create initiative definitions, and User4 can assign initiatives to RG2. The solution must meet the technical requirements.
 Which role should you assign to each user? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0013700001-939169390dd1165667d5505db90210d7ceb6ccde.png}}

- [ ] A. User1: Contributor for RG1
- [ ] B. User1: Contributor for Sub1
- [x] C. User1: Resource Policy Contributor for Sub1
- [x] D. User4: Resource Policy Contributor for RG2
- [ ] E. User4: Security Admin for Sub1

## Q542 (Topic 7-16, Original #?)

General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013400001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013400002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0013400003-4fc5b1c920e47c737559fef1f0b8cdfc1b918ff9.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013500001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013500005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0013500007.png}}

{{img:/exam-media/az-104/T7-T16/0013600001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  You need to ensure that you can grant Group4 Azure RBAC read only permissions to all the Azure file shares.
 What should you do?

- [x] A. On storage2, enable identity-based access for the file shares.
- [ ] B. Recreate storage2 and set Hierarchical namespace to Enabled.
- [ ] C. On storage1 and storage4, change the Account kind type to StorageV2 (general purpose v2).
- [ ] D. Create a shared access signature (SAS) for storage1, storage2, and storage4.

## Q543 (Topic 7-16, Original #?)

Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0021700006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You need to implement a backup solution for App1 after the application is moved.
 What should you create first?

- [ ] A. a recovery plan
- [ ] B. an Azure Backup Server
- [ ] C. a backup policy
- [x] D. a Recovery Services vault

## Q544 (Topic 7-16, Original #?)

Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0021700006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You need to move the blueprint files to Azure.
 What should you do?

- [ ] A. Generate an access key. Map a drive, and then copy the files by using File Explorer.
- [x] B. Use Azure Storage Explorer to copy the files.
- [ ] C. Use the Azure Import/Export service.
- [ ] D. Generate a shared access signature (SAS). Map a drive, and then copy the files by using File Explorer.

## Q545 (Topic 7-16, Original #?)

Overview -
 Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0021700006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  HOTSPOT -
 You need to identify the storage requirements for Contoso.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. Contoso requires a storage account that supports Blob storage
- [ ] B. Contoso requires a storage account that supports Azure Table storage
- [ ] C. Contoso requires a storage account that supports Azure File storage

## Q546 (Topic 7-16, Original #?)

Overview -

 General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022300001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022300002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0022300003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400007.png}}

{{img:/exam-media/az-104/T7-T16/0022500001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -
 You need to create container1 and share1.
 Which storage accounts should you use for each resource? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0022600001.jpg}}

- [x] A. Container1: storage2 and storage3 only
- [x] B. share1: storage2 only
- [ ] C. share1: storage4 only
- [ ] D. Container1: storage1, storage2 and storage3 only
- [ ] E. Container1: storage2, storage3 and storage4 only

## Q547 (Topic 7-16, Original #?)

General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022300001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022300002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0022300003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400007.png}}

{{img:/exam-media/az-104/T7-T16/0022500001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -
 You need to create storage5. The solution must support the planned changes.
 Which type of storage account should you use, and which account should you configure as the destination storage account? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0022800001.jpg}}

- [x] A. Account kind: StorageV2 (general purpose v2)
- [x] B. Destination: Storage2
- [ ] C. Destination: Storage3
- [ ] D. Destination: Storage1
- [ ] E. Account kind: BlockBlobStorage

## Q548 (Topic 7-16, Original #?)

General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022300001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022300002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0022300003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0022400007.png}}

{{img:/exam-media/az-104/T7-T16/0022500001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  You need to identify which storage account to use for the flow logging of IP traffic from VM5. The solution must meet the retention requirements.
 Which storage account should you identify?

- [ ] A. storage1
- [x] B. storage2
- [ ] C. storage3
- [ ] D. storage4

## Q549 (Topic 7-16, Original #?)

Overview -
 Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.
 The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.
 All the resources used by Litware are hosted on-premises.
 Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the
 Premium P1 pricing tier.

 Existing Environment -
 The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.
 Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.
 Litware.com contains a user named User1.
 All the offices connect by using private connections.
 Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.
 All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.

{{img:/exam-media/az-104/T7-T16/0034500001.png}}

 Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.
 The Azure subscription contains the resources in the following table.

{{img:/exam-media/az-104/T7-T16/0034500002.png}}

 The network security team implements several network security groups (NSGs)

 Requirements -

 Planned Changes -
 Litware plans to implement the following changes:
 Deploy Azure ExpressRoute to the Montreal office.
 Migrate the virtual machines hosted on Server1 and Server2 to Azure.
 Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).
 Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.

 Technical Requirements -
 Litware must meet the following technical requirements:
 Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.

{{img:/exam-media/az-104/T7-T16/0034500007.png}}

 Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.
 Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.
 Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.
 Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.
 Connect the New York office to VNet1 over the Internet by using an encrypted connection.
 Create a workflow to send an email message when the settings of VM4 are modified.
 Create a custom Azure role named Role1 that is based on the Reader role.
 Minimize costs whenever possible.  Question  You discover that VM3 does NOT meet the technical requirements.
 You need to verify whether the issue relates to the NSGs.
 What should you use?

- [ ] A. Diagram in VNet1
- [ ] B. Diagnostic settings in Azure Monitor
- [ ] C. Diagnose and solve problems in Traffic Manager profiles
- [ ] D. The security recommendations in Azure Advisor
- [x] E. IP flow verify in Azure Network Watcher

## Q550 (Topic 7-16, Original #?)

Overview -
 Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.
 The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.
 All the resources used by Litware are hosted on-premises.
 Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the
 Premium P1 pricing tier.

 Existing Environment -
 The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.
 Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.
 Litware.com contains a user named User1.
 All the offices connect by using private connections.
 Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.
 All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.

{{img:/exam-media/az-104/T7-T16/0050800001.png}}

 Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.
 The Azure subscription contains the resources in the following table.

{{img:/exam-media/az-104/T7-T16/0050800002.png}}

 The network security team implements several network security groups (NSGs)

 Requirements -

 Planned Changes -
 Litware plans to implement the following changes:
 Deploy Azure ExpressRoute to the Montreal office.
 Migrate the virtual machines hosted on Server1 and Server2 to Azure.
 Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).
 Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.

 Technical Requirements -
 Litware must meet the following technical requirements:
 Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.

{{img:/exam-media/az-104/T7-T16/0050800007.png}}

 Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.
 Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.
 Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.
 Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.
 Connect the New York office to VNet1 over the Internet by using an encrypted connection.
 Create a workflow to send an email message when the settings of VM4 are modified.
 Create a custom Azure role named Role1 that is based on the Reader role.
 Minimize costs whenever possible.  Question  You need to ensure that VM1 can communicate with VM4. The solution must minimize the administrative effort.
 What should you do?

- [ ] A. Create an NSG and associate the NSG to VM1 and VM4.
- [x] B. Establish peering between VNET1 and VNET3.
- [ ] C. Assign VM4 an IP address of 10.0.1.5/24.
- [ ] D. Create a user-defined route from VNET1 to VNET3.

## Q551 (Topic 7-16, Original #?)

Overview -
 Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.
 The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.
 All the resources used by Litware are hosted on-premises.
 Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the
 Premium P1 pricing tier.

 Existing Environment -
 The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.
 Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.
 Litware.com contains a user named User1.
 All the offices connect by using private connections.
 Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.
 All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.

{{img:/exam-media/az-104/T7-T16/0050800001.png}}

 Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.
 The Azure subscription contains the resources in the following table.

{{img:/exam-media/az-104/T7-T16/0050800002.png}}

 The network security team implements several network security groups (NSGs)

 Requirements -

 Planned Changes -
 Litware plans to implement the following changes:
 Deploy Azure ExpressRoute to the Montreal office.
 Migrate the virtual machines hosted on Server1 and Server2 to Azure.
 Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).
 Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.

 Technical Requirements -
 Litware must meet the following technical requirements:
 Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.

{{img:/exam-media/az-104/T7-T16/0050800007.png}}

 Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.
 Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.
 Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.
 Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.
 Connect the New York office to VNet1 over the Internet by using an encrypted connection.
 Create a workflow to send an email message when the settings of VM4 are modified.
 Create a custom Azure role named Role1 that is based on the Reader role.
 Minimize costs whenever possible.  Question  HOTSPOT -
 You need to meet the connection requirements for the New York office.
 What should you do? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0051000001.png}}

- [x] A. Box1: Create a virtual network gateway and a local network gateway
- [ ] B. Box1: Create a ExpressRoute circuit only
- [x] C. Box2: Configure a site-to-site VPN connection
- [ ] D. Box2: Deploy ExpressRoute
- [ ] E. Box2: Deploy a DirectAccess server

## Q552 (Topic 7-16, Original #?)

Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0051300006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  HOTSPOT -
 You need to recommend a solution for App1. The solution must meet the technical requirements.
 What should you include in the recommendation? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0051500001.jpg}}

- [x] A. Number of virtual networks: 1
- [x] B. Number of subnets per virtual network: 3
- [ ] C. Number of virtual networks: 2
- [ ] D. Number of subnets per virtual network: 2
- [ ] E. Number of subnets per virtual network: 1

## Q553 (Topic 7-16, Original #?)

Overview -
 Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.
 Contoso products are manufactured by using blueprint files that the company authors and maintains.

 Existing Environment -
 Currently, Contoso uses multiple types of servers for business operations, including the following:
 File servers
 Domain controllers
 Microsoft SQL Server servers
 Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.
 You have a public-facing application named App1. App1 is comprised of the following three tiers:
 A SQL database
 A web front end

 A processing middle tier -

{{img:/exam-media/az-104/T7-T16/0051300006.png}}

 Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes to the infrastructure:
 Move all the tiers of App1 to Azure.
 Move the existing product blueprint files to Azure Blob storage.
 Create a hybrid directory to support an upcoming Microsoft 365 migration project.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Move all the virtual machines for App1 to Azure.
 Minimize the number of open ports between the App1 tiers.
 Ensure that all the virtual machines for App1 are protected by backups.
 Copy the blueprint files to Azure over the Internet.
 Ensure that the blueprint files are stored in the archive storage tier.
 Ensure that partner access to the blueprint files is secured and temporary.
 Prevent user passwords or hashes of passwords from being stored in Azure.
 Use unmanaged standard storage for the hard disks of the virtual machines.
 Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.
 Minimize administrative effort whenever possible.

 User Requirements -
 Contoso identifies the following requirements for users:
 Ensure that only users who are part of a group named Pilot can join devices to Azure AD.
 Designate a new user named Admin1 as the service admin for the Azure subscription.
 Admin1 must receive email alerts regarding service outages.
 Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You are planning the move of App1 to Azure.
 You create a network security group (NSG).
 You need to recommend a solution to provide users with access to App1.
 What should you recommend?

- [x] A. Create an incoming security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers.
- [ ] B. Create an outgoing security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers.
- [ ] C. Create an incoming security rule for port 443 from the Internet. Associate the NSG to all the subnets.
- [ ] D. Create an outgoing security rule for port 443 from the Internet. Associate the NSG to all the subnets.

## Q554 (Topic 7-16, Original #?)

Overview -

 General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052000001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052000002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0052000003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052100001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052100005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052100007.png}}

{{img:/exam-media/az-104/T7-T16/0052200001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -
 You implement the planned changes for NSG1 and NSG2.
 For each of the following statements, select Yes if the statement is true. Otherwise, select No.
 NOTE: Each correct selection is worth one point.

- [x] A. From VM1, you can establish a Remote Desktop session to VM2
- [ ] B. From VM2, you can establish a Remote Desktop session to VM3
- [x] C. From VM2, you can ping VM3

## Q555 (Topic 7-16, Original #?)

Overview -

 General Overview -
 Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.

 Environment -

 Existing Environment -
 Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active
 Directory domain that syncs to the Azure AD tenant.
 The Azure AD tenant contains the users shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052000001.png}}

 Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052000002.png}}

 User1 manages the resources in RG1. User4 manages the resources in RG2.
 Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table

{{img:/exam-media/az-104/T7-T16/0052000003.png}}

 No network security groups (NSGs) are associated to the network interfaces or the subnets.
 Sub1 contains the storage accounts shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052100001.png}}

 Requirements -

 Planned Changes -
 Contoso plans to implement the following changes:
 Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.
 Create a storage account named storage5 and configure storage replication for the Blob service.
 Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052100005.png}}

 Associate NSG1 to the network interface of VM1.
 Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.

{{img:/exam-media/az-104/T7-T16/0052100007.png}}

{{img:/exam-media/az-104/T7-T16/0052200001.png}}

 Associate NSG2 to VNET1/Subnet2.

 Technical Requirements -
 Contoso must meet the following technical requirements:
 Create container1 and share1.
 Use the principle of least privilege.
 Create an Azure AD security group named Group4.
 Back up the Azure file shares and virtual machines by using Azure Backup.
 Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.
 Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.
 Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1
 Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.
 Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  You need to add VM1 and VM2 to the backend pool of LB1.
 What should you do first?

- [ ] A. Connect VM2 to VNET1/Subnet1.
- [ ] B. Redeploy VM1 and VM2 to the same availability zone.
- [x] C. Redeploy VM1 and VM2 to the same availability set.
- [ ] D. Create a new NSG and associate the NSG to VNET1/Subnet1.

## Q556 (Topic 7-16, Original #?)

You need to ensure that VM1 can communicate with VM4. The solution must minimize administrative effort.

 What should you do?

- [ ] A. Create a user-defined route from VNET1 to VNET3.
- [ ] B. Create an NSG and associate the NSG to VM1 and VM4.
- [ ] C. Assign VM4 an IP address of 10.0.1.5/24.
- [x] D. Establish peering between VNET1 and VNET3.

## Q557 (Topic 7-16, Original #?)

Overview -
 Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.
 The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.
 All the resources used by Litware are hosted on-premises.
 Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the
 Premium P1 pricing tier.

 Existing Environment -
 The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.
 Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.
 Litware.com contains a user named User1.
 All the offices connect by using private connections.
 Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.
 All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.

{{img:/exam-media/az-104/T7-T16/0058800001.png}}

 Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.
 The Azure subscription contains the resources in the following table.

{{img:/exam-media/az-104/T7-T16/0058800002.png}}

 The network security team implements several network security groups (NSGs)

 Requirements -

 Planned Changes -
 Litware plans to implement the following changes:
 Deploy Azure ExpressRoute to the Montreal office.
 Migrate the virtual machines hosted on Server1 and Server2 to Azure.
 Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).
 Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.

 Technical Requirements -
 Litware must meet the following technical requirements:
 Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.

{{img:/exam-media/az-104/T7-T16/0058800007.png}}

 Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.
 Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.
 Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.
 Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.
 Connect the New York office to VNet1 over the Internet by using an encrypted connection.
 Create a workflow to send an email message when the settings of VM4 are modified.
 Create a custom Azure role named Role1 that is based on the Reader role.
 Minimize costs whenever possible.
  Question
  HOTSPOT -

 You need to implement Role1.
 Which command should you run before you create Role1? To answer, select the appropriate options in the answer area.
 NOTE: Each correct selection is worth one point.
 Hot Area:

{{img:/exam-media/az-104/T7-T16/0058900009.png}}

- [x] A. Box1: Get-AzRoleDefinition
- [x] B. Box2: ConvertTo-Json
- [ ] C. Box1: Get-AzResourceProvider
- [ ] D. Box2: ConvertTo-Xml
- [ ] E. Box2: ConvertFrom-Json

## Q558 (Topic 7-16, Original #?)

Overview -
 Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.
 The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.
 All the resources used by Litware are hosted on-premises.
 Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the
 Premium P1 pricing tier.

 Existing Environment -
 The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.
 Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.
 Litware.com contains a user named User1.
 All the offices connect by using private connections.
 Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.
 All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.

{{img:/exam-media/az-104/T7-T16/0058800001.png}}

 Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.
 The Azure subscription contains the resources in the following table.

{{img:/exam-media/az-104/T7-T16/0058800002.png}}

 The network security team implements several network security groups (NSGs)

 Requirements -

 Planned Changes -
 Litware plans to implement the following changes:
 Deploy Azure ExpressRoute to the Montreal office.
 Migrate the virtual machines hosted on Server1 and Server2 to Azure.
 Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).
 Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.

 Technical Requirements -
 Litware must meet the following technical requirements:
 Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.

{{img:/exam-media/az-104/T7-T16/0058800007.png}}

 Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.
 Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.
 Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.
 Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.
 Connect the New York office to VNet1 over the Internet by using an encrypted connection.
 Create a workflow to send an email message when the settings of VM4 are modified.
 Create a custom Azure role named Role1 that is based on the Reader role.
 Minimize costs whenever possible.  Question  You need to recommend a solution to automate the configuration for the finance department users. The solution must meet the technical requirements.
 What should you include in the recommendation?

- [ ] A. Azure AD B2C
- [x] B. dynamic groups and conditional access policies
- [ ] C. Azure AD Identity Protection
- [ ] D. an Azure logic app and the Microsoft Identity Management (MIM) client

