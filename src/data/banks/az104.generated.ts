import type { Question } from "../../types";

export const az104Questions: Question[] = [
  {
    id: 1,
    number: 1,
    topic: "Topic 1",
    prompt: "Your company has serval departments. Each department has a number of virtual machines (VMs).\n The company has an Azure subscription that contains a resource group named RG1.\n All VMs are located in RG1.\n You want to associate each VM with its respective department.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #1",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create Azure Management Groups for each department."
      },
      {
        id: "B",
        text: "Create a resource group for each department"
      },
      {
        id: "C",
        text: "Assign tags to the virtual machines."
      },
      {
        id: "D",
        text: "Modify the settings of the virtual machines."
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
    prompt: "Your company has an Azure Active Directory (Azure AD) subscription.\n You want to implement an Azure AD conditional access policy.\n The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.\n Solution: You access the multi-factor authentication page to alter the user settings.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #2",
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
    id: 3,
    number: 3,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) subscription.\n You want to implement an Azure AD conditional access policy.\n The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.\n Solution: You access the Azure portal to alter the session control of the Azure AD conditional access policy.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #3",
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
    id: 4,
    number: 4,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) subscription.\n You want to implement an Azure AD conditional access policy.\n The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.\n Solution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #4",
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
    prompt: "You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription.\n You are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA).\n Which of the following should you use to create the virtual machine?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #5",
    type: "single",
    options: [
      {
        id: "A",
        text: "The New-AzureRmVm cmdlet."
      },
      {
        id: "B",
        text: "The New-AzVM cmdlet"
      },
      {
        id: "C",
        text: "The Create-AzVM cmdlet"
      },
      {
        id: "D",
        text: "The az vm create command"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 6,
    number: 6,
    topic: "Topic 1",
    prompt: "Your company makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.\n After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.\n To achieve this, the Per Enabled User setting must be set for the usage model.\n Solution: You reconfigure the existing usage model via the Azure portal.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #6",
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
    id: 7,
    number: 7,
    topic: "Topic 1",
    prompt: "Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.\n After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.\n To achieve this, the Per Enabled User setting must be set for the usage model.\n Solution: You reconfigure the existing usage model via the Azure CLI.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #7",
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
    id: 8,
    number: 8,
    topic: "Topic 1",
    prompt: "Your company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured as the usage model.\n After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and adding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor Authentication.\n To achieve this, the Per Enabled User setting must be set for the usage model.\n Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #8",
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
    prompt: "Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active\n Directory domain.\n You have a server named DirSync1 that is configured as a DirSync server.\n You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.\n Solution: You run the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #9",
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
    id: 10,
    number: 10,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active\n Directory domain.\n You have a server named DirSync1 that is configured as a DirSync server.\n You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.\n Solution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #10",
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
    id: 11,
    number: 11,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-premises Active\n Directory domain.\n You have a server named DirSync1 that is configured as a DirSync server.\n You create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.\n Solution: You restart the NetLogon service on a domain controller.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #11",
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
    id: 12,
    number: 12,
    topic: "Topic 1",
    prompt: "Your company has a Microsoft Azure subscription.\n The company has datacenters in Los Angeles and New York.\n You are configuring the two datacenters as geo-clustered sites for site resiliency.\n You need to recommend an Azure storage redundancy option.\n You have the following data storage requirements:\n ✑ Data must be stored on multiple nodes.\n ✑ Data must be stored on nodes in separate geographic locations.\n ✑ Data can be read from the secondary location as well as from the primary location.\n Which of the following Azure stored redundancy options should you recommend?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #12",
    type: "single",
    options: [
      {
        id: "A",
        text: "Geo-redundant storage"
      },
      {
        id: "B",
        text: "Read-only geo-redundant storage"
      },
      {
        id: "C",
        text: "Zone-redundant storage"
      },
      {
        id: "D",
        text: "Locally redundant storage"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 13,
    number: 13,
    topic: "Topic 1",
    prompt: "Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.\n A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.\n You want to review the ARM template that was used by Jon Ross.\n Solution: You access the Virtual Machine blade.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #13",
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
    id: 14,
    number: 14,
    topic: "Topic 1",
    prompt: "Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.\n A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.\n You want to review the ARM template that was used by Jon Ross.\n Solution: You access the Resource Group blade.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #14",
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
    id: 15,
    number: 15,
    topic: "Topic 1",
    prompt: "Your company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.\n A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.\n You want to review the ARM template that was used by Jon Ross.\n Solution: You access the Container blade.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #15",
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
    id: 16,
    number: 16,
    topic: "Topic 1",
    prompt: "Your company has three virtual machines (VMs) that are included in an availability set.\n You try to resize one of the VMs, which returns an allocation failure message.\n It is imperative that the VM is resized.\n Which of the following actions should you take?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #16",
    type: "single",
    options: [
      {
        id: "A",
        text: "You should only stop one of the VMs."
      },
      {
        id: "B",
        text: "You should stop two of the VMs."
      },
      {
        id: "C",
        text: "You should stop all three VMs"
      },
      {
        id: "D",
        text: "You should remove the necessary VM from the availability set."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 17,
    number: 17,
    topic: "Topic 1",
    prompt: "You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM.\n You need to make sure that your strategy allows for the virtual machines to be offline for the least amount of time possible.\n Which of the following is the action you should take FIRST?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #17",
    type: "single",
    options: [
      {
        id: "A",
        text: "Stop the VM that includes the data disk."
      },
      {
        id: "B",
        text: "Stop the VM that the data disk must be attached to."
      },
      {
        id: "C",
        text: "Detach the data disk."
      },
      {
        id: "D",
        text: "Delete the VM that includes the data disk."
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
    prompt: "Your company has an Azure subscription.\n You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set.\n You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance.\n Which of the following is the value that you should configure for the platformFaultDomainCount property?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #18",
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
      "D"
    ]
  },
  {
    id: 19,
    number: 19,
    topic: "Topic 1",
    prompt: "Your company has an Azure subscription.\n You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability set.\n You are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric failure or maintenance.\n Which of the following is the value that you should configure for the platformUpdateDomainCount property?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #19",
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
    id: 20,
    number: 20,
    topic: "Topic 1",
    prompt: "DRAG DROP -\n  You have downloaded an Azure Resource Manager (ARM) template to deploy numerous virtual machines (VMs). The ARM template is based on a current VM, but must be adapted to reference an administrative password.\n You need to make sure that the password cannot be stored in plain text.\n You are preparing to create the necessary components to achieve your goal.\n Which of the following should you create to achieve your goal? Answer by dragging the correct option from the list to the answer area.",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #20",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "An Azure Key Vault"
      },
      {
        id: "B",
        text: "An Azure Storage account"
      },
      {
        id: "C",
        text: "Entra ID Identity Protection"
      },
      {
        id: "D",
        text: "An access policy"
      },
      {
        id: "E",
        text: "An Azure policy"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 21,
    number: 21,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain.\n The on-premise virtual environment consists of virtual machines (VMs) running on Windows Server 2012 R2 Hyper-V host servers.\n You have created some PowerShell scripts to automate the configuration of newly created VMs. You plan to create several new VMs.\n You need a solution that ensures the scripts are run on the new VMs.\n Which of the following is the best solution?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #21",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure a SetupComplete.cmd batch file in the %windir%\\setup\\scripts directory."
      },
      {
        id: "B",
        text: "Configure a Group Policy Object (GPO) to run the scripts as logon scripts."
      },
      {
        id: "C",
        text: "Configure a Group Policy Object (GPO) to run the scripts as startup scripts."
      },
      {
        id: "D",
        text: "Place the scripts in a new virtual hard disk (VHD)."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 22,
    number: 22,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory domain.\n You plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software requirements.\n You configure a reference VM in the on-premise virtual environment. You then generalize the VM to create an image.\n You need to upload the image to Azure to ensure that it is available for selection when you create the new Azure VMs.\n Which PowerShell cmdlets should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #22",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add-AzVM"
      },
      {
        id: "B",
        text: "Add-AzVhd"
      },
      {
        id: "C",
        text: "Add-AzImage"
      },
      {
        id: "D",
        text: "Add-AzImageDataDisk"
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
    prompt: "DRAG DROP -   Your company has an Azure subscription that includes a number of Azure virtual machines (VMs), which are all part of the same virtual network.   Your company also has an on-premises Hyper-V server that hosts a VM, named VM1, which must be replicated to Azure.   Which of the following objects that must be created to achieve this goal? Answer by dragging the correct option from the list to the answer area.   Select and Place:\n{{img:https://www.examtopics.com/assets/media/exam-media/04223/0002200001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T1/0002300001.png}}\nSource: Az-104 T1.apkg #23",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Hyper-V site"
      },
      {
        id: "B",
        text: "Storage acount"
      },
      {
        id: "C",
        text: "Azure Recovery Service Vault"
      },
      {
        id: "D",
        text: "Azure Traffic Manager Instance"
      },
      {
        id: "E",
        text: "Replication policy"
      }
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
      "t1:A",
      "t2:C",
      "t3:E"
    ]
  },
  {
    id: 24,
    number: 24,
    topic: "Topic 1",
    prompt: "Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.\n VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.\n You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between\n VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.\n You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.\n Solution: You choose the Allow gateway transit setting on VirtualNetworkA.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #24",
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
    prompt: "Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.\n VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.\n You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between\n VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.\n You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.\n Solution: You choose the Allow gateway transit setting on VirtualNetworkB.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #25",
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
    id: 26,
    number: 26,
    topic: "Topic 1",
    prompt: "Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.\n VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your company's on- premises network and VirtualNetworkA.\n You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network peering between\n VirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network. However, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.\n You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.\n Solution: You download and re-install the VPN client configuration package on the Windows 10 workstation.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #26",
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
    id: 27,
    number: 27,
    topic: "Topic 1",
    prompt: "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1.\n The company has users that work remotely. The remote workers require access to the VMs on VNet1.\n You need to provide access for the remote workers.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #27",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure a Site-to-Site (S2S) VPN."
      },
      {
        id: "B",
        text: "Configure a VNet-toVNet VPN."
      },
      {
        id: "C",
        text: "Configure a Point-to-Site (P2S) VPN."
      },
      {
        id: "D",
        text: "Configure DirectAccess on a Windows Server 2012 server VM."
      },
      {
        id: "E",
        text: "Configure a Multi-Site VPN"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 28,
    number: 28,
    topic: "Topic 1",
    prompt: "Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).\n You need to configure an Azure internal load balancer as a listener for the availability group.\n Solution: You create an HTTP health probe on port 1433.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #28",
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
    id: 29,
    number: 29,
    topic: "Topic 1",
    prompt: "Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).\n You need to configure an Azure internal load balancer as a listener for the availability group.\n Solution: You set Session persistence to Client IP.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #29",
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
    prompt: "Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).\n You need to configure an Azure internal load balancer as a listener for the availability group.\n Solution: You enable Floating IP.\n Does the solution meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #30",
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
    id: 31,
    number: 31,
    topic: "Topic 1",
    prompt: "Your company has two on-premises servers named SRV01 and SRV02. Developers have created an application that runs on SRV01. The application calls a service on SRV02 by IP address.\n You plan to migrate the application on Azure virtual machines (VMs). You have configured two VMs on a single subnet in an Azure virtual network.\n You need to configure the two VMs with static internal IP addresses.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #31",
    type: "single",
    options: [
      {
        id: "A",
        text: "Run the New-AzureRMVMConfig PowerShell cmdlet."
      },
      {
        id: "B",
        text: "Run the Set-AzureSubnet PowerShell cmdlet."
      },
      {
        id: "C",
        text: "Modify the VM properties in the Azure Management Portal."
      },
      {
        id: "D",
        text: "Modify the IP properties in Windows Network and Sharing Center."
      },
      {
        id: "E",
        text: "Run the Set-AzureStaticVNetIP PowerShell cmdlet."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 32,
    number: 32,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) subscription.\n You need to deploy five virtual machines (VMs) to your company's virtual network subnet.\n The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical.\n Which of the following is the least amount of network interfaces needed for this configuration?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #32",
    type: "single",
    options: [
      {
        id: "A",
        text: "5"
      },
      {
        id: "B",
        text: "10"
      },
      {
        id: "C",
        text: "20"
      },
      {
        id: "D",
        text: "40"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 33,
    number: 33,
    topic: "Topic 1",
    prompt: "Your company has an Azure Active Directory (Azure AD) subscription.\n You need to deploy five virtual machines (VMs) to your company's virtual network subnet.\n The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical.\n Which of the following is the least amount of security groups needed for this configuration?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #33",
    type: "single",
    options: [
      {
        id: "A",
        text: "4"
      },
      {
        id: "B",
        text: "3"
      },
      {
        id: "C",
        text: "2"
      },
      {
        id: "D",
        text: "1"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 34,
    number: 34,
    topic: "Topic 1",
    prompt: "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.\n One of the VMs is backed up every day using Azure Backup Instant Restore.\n When the VM becomes infected with data encrypting ransomware, you decide to recover the VM's files.\n Which of the following is TRUE in this scenario?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #34",
    type: "single",
    options: [
      {
        id: "A",
        text: "You can only recover the files to the infected VM."
      },
      {
        id: "B",
        text: "You can recover the files to any VM within the company's subscription."
      },
      {
        id: "C",
        text: "You can only recover the files to a new VM."
      },
      {
        id: "D",
        text: "You will not be able to recover the files."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 35,
    number: 35,
    topic: "Topic 1",
    prompt: "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.\n One of the VMs is backed up every day using Azure Backup Instant Restore.\n When the VM becomes infected with data encrypting ransomware, you are required to restore the VM.\n Which of the following actions should you take?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #35",
    type: "single",
    options: [
      {
        id: "A",
        text: "You should restore the VM after deleting the infected VM."
      },
      {
        id: "B",
        text: "You should restore the VM to any VM within the company's subscription."
      },
      {
        id: "C",
        text: "You should restore the VM to a new Azure VM."
      },
      {
        id: "D",
        text: "You should restore the VM to an on-premise Windows device."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 36,
    number: 36,
    topic: "Topic 1",
    prompt: "You administer a solution in Azure that is currently having performance issues.\n You need to find the cause of the performance issues pertaining to metrics on the Azure infrastructure.\n Which of the following is the tool you should use?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #36",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Traffic Analytics"
      },
      {
        id: "B",
        text: "Azure Monitor"
      },
      {
        id: "C",
        text: "Azure Activity Log"
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
    id: 37,
    number: 37,
    topic: "Topic 1",
    prompt: "Your company has an Azure subscription that includes a Recovery Services vault.\n You want to use Azure Backup to schedule a backup of your company's virtual machines (VMs) to the Recovery Services vault.\n Which of the following VMs can you back up? Choose all that apply.",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #37",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "VMs that run Windows 10."
      },
      {
        id: "B",
        text: "VMs that run Windows Server 2012 or higher."
      },
      {
        id: "C",
        text: "VMs that have NOT been shut down."
      },
      {
        id: "D",
        text: "VMs that run Debian 8.2+."
      },
      {
        id: "E",
        text: "VMs that have been shut down."
      }
    ],
    correct: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ]
  },
  {
    id: 38,
    number: 38,
    topic: "Topic 1",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n You have a CSV file that contains the names and email addresses of 500 external users.\n You need to create a guest user account in contoso.com for each of the 500 external users.\n Solution: You create a PowerShell script that runs the New-AzureADUser cmdlet for each user.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #38",
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
    id: 39,
    number: 39,
    topic: "Topic 1",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n You have a CSV file that contains the names and email addresses of 500 external users.\n You need to create a guest user account in contoso.com for each of the 500 external users.\n Solution: From Azure AD in the Azure portal, you use the Bulk create user operation.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #39",
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
    id: 40,
    number: 40,
    topic: "Topic 1",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n You have a CSV file that contains the names and email addresses of 500 external users.\n You need to create a guest user account in contoso.com for each of the 500 external users.\n Solution: You create a PowerShell script that runs the New-AzureADMSInvitation cmdlet for each external user.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T1.apkg #40",
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
    id: 41,
    number: 1,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an Azure subscription named Subscription1 that contains a resource group named RG1.\nIn RG1, you create an internal load balancer named LB1 and a public load balancer named LB2.\nYou need to ensure that an administrator named Admin1 can manage LB1 and LB2. The solution must follow the principle of least privilege.\nWhich role should you assign to Admin1 for each task? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n{{img:/exam-media/az-104/T2/0003600001.jpg}}",
    keySource: "source",
    explanation: "Reference: https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles\nSource: Az-104 T2.apkg #1",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Contributor on LB1"
      },
      {
        id: "B",
        text: "Network contributor on LB1"
      },
      {
        id: "C",
        text: "Owner on LB1"
      },
      {
        id: "D",
        text: "Owner on LB2"
      },
      {
        id: "E",
        text: "Network Contributor on LB2"
      }
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
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 42,
    number: 2,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com and an Azure Kubernetes Service (AKS) cluster named AKS1.\n An administrator reports that she is unable to grant access to AKS1 to the users in contoso.com.\n You need to ensure that access to AKS1 can be granted to the contoso.com users.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #2",
    type: "single",
    options: [
      {
        id: "A",
        text: "From contoso.com, modify the Organization relationships settings."
      },
      {
        id: "B",
        text: "From contoso.com, create an OAuth 2.0 authorization endpoint."
      },
      {
        id: "C",
        text: "Recreate AKS1."
      },
      {
        id: "D",
        text: "From AKS1, create a namespace."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 43,
    number: 3,
    topic: "Topic 2",
    prompt: "You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com.\n You plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1.\n You need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days.\n Which two groups should you create? Each correct answer presents a complete solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #3",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "a Microsoft 365 group that uses the Assigned membership type"
      },
      {
        id: "B",
        text: "a Security group that uses the Assigned membership type"
      },
      {
        id: "C",
        text: "a Microsoft 365 group that uses the Dynamic User membership type"
      },
      {
        id: "D",
        text: "a Security group that uses the Dynamic User membership type"
      },
      {
        id: "E",
        text: "a Security group that uses the Dynamic Device membership type"
      }
    ],
    correct: [
      "A",
      "C"
    ]
  },
  {
    id: 44,
    number: 4,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains the users shown in the following table:\n\n{{img:/exam-media/az-104/T2/0003900001.png}}\n\n User3 is the owner of Group1.\n Group2 is a member of Group1.\n You configure an access review named Review1 as shown in the following exhibit:\n\n{{img:/exam-media/az-104/T2/0004000001-e122a8a0d4d3523af02ba45380ee892bd89f341e.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #4",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User3 can perform an access review of User1",
        answer: false
      },
      {
        id: "s2",
        text: "User3 can perform an access review of UserA",
        answer: false
      },
      {
        id: "s3",
        text: "User3 can perform an access review of UserB",
        answer: false
      }
    ]
  },
  {
    id: 45,
    number: 5,
    topic: "Topic 2",
    prompt: "HOTSPOT -\n You have the Azure management groups shown in the following table:\n\n{{img:/exam-media/az-104/T2/0004200001.png}}\n\n You add Azure subscriptions to the management groups as shown in the following table:\n\n{{img:/exam-media/az-104/T2/0004200002.png}}\n\n You create the Azure policies shown in the following table:\n\n{{img:/exam-media/az-104/T2/0004200003.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #5",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can create a virtual network in Subscription1",
        answer: false
      },
      {
        id: "s2",
        text: "You can create a virtual machine in Subscription2",
        answer: false
      },
      {
        id: "s3",
        text: "You can add Subscription1 to ManagementGroup11",
        answer: false
      }
    ]
  },
  {
    id: 46,
    number: 6,
    topic: "Topic 2",
    prompt: "You have an Azure policy as shown in the following exhibit:\n\n{{img:/exam-media/az-104/T2/0004500001-4a3a2705483aaab78f28ec59a529ea8c5dfcf34b.png}}\n\n What is the effect of the policy?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #6",
    type: "single",
    options: [
      {
        id: "A",
        text: "You are prevented from creating Azure SQL servers anywhere in Subscription 1."
      },
      {
        id: "B",
        text: "You can create Azure SQL servers in ContosoRG1 only."
      },
      {
        id: "C",
        text: "You are prevented from creating Azure SQL Servers in ContosoRG1 only."
      },
      {
        id: "D",
        text: "You can create Azure SQL servers in any resource group within Subscription 1."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 47,
    number: 7,
    topic: "Topic 2",
    prompt: "HOTSPOT -\n You have an Azure subscription that contains the resources shown in the following table:\n\n{{img:/exam-media/az-104/T2/0004600001-2928bf7554bb2115aa77e1efcb1e244078cbc4fd.png}}\n\n You assign a policy to RG6 as shown in the following table:\n o RG6, you apply the tag: RGroup: RG6.\n You deploy a virtual network named VNET2 to RG6.\n Which tags apply to VNET1 and VNET2? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0004700001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #7",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "None"
      },
      {
        id: "B",
        text: "Department: D1 only"
      },
      {
        id: "C",
        text: "D1, and Label:Value1 only"
      },
      {
        id: "D",
        text: "None"
      },
      {
        id: "E",
        text: "Label:Value1 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "VNET1"
      },
      {
        id: "t2",
        text: "VNET2"
      }
    ],
    correct: [
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 48,
    number: 8,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named AZPT1 that contains the resources shown in the following table:\n\n{{img:/exam-media/az-104/T2/0004900001.png}}\n\n You create a new Azure subscription named AZPT2.\n You need to identify which resources can be moved to AZPT2.\n Which resources should you identify?",
    keySource: "source",
    explanation: "Recovery Services vault (RVAULT1)  → ❌ cannot be moved across subscriptions.\nSource: Az-104 T2.apkg #8",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1, storage1, VNET1, and VM1Managed only"
      },
      {
        id: "B",
        text: "VM1 and VM1Managed only"
      },
      {
        id: "C",
        text: "VM1, storage1, VNET1, VM1Managed, and RVAULT1"
      },
      {
        id: "D",
        text: "RVAULT1 only"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 49,
    number: 9,
    topic: "Topic 2",
    prompt: "You recently created a new Azure subscription that contains a user named Admin1.\n Admin1 attempts to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by using Azure\n PowerShell and receives the following error message: `User failed validation to purchase resources. Error message: `Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873) and configure programmatic deployment for the Marketplace item or create it there for the first time.`\n You need to ensure that Admin1 can deploy the Marketplace resource successfully.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #9",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet"
      },
      {
        id: "B",
        text: "From the Azure portal, register the Microsoft.Marketplace resource provider"
      },
      {
        id: "C",
        text: "From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet"
      },
      {
        id: "D",
        text: "From the Azure portal, assign the Billing administrator role to Admin1"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50,
    number: 10,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.\n You create a new user account named AdminUser1.\n You need to assign the User administrator administrative role to AdminUser1.\n What should you do from the user account properties?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #10",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Licenses blade, assign a new license"
      },
      {
        id: "B",
        text: "From the Directory role blade, modify the directory role"
      },
      {
        id: "C",
        text: "From the Groups blade, invite the user account to a new group"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 51,
    number: 11,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains 100 user accounts.\n You purchase 10 Azure AD Premium P2 licenses for the tenant.\n You need to ensure that 10 users can use all the Azure AD Premium features.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #11",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Licenses blade of Azure AD, assign a license"
      },
      {
        id: "B",
        text: "From the Groups blade of each user, invite the users to a group"
      },
      {
        id: "C",
        text: "From the Azure AD domain, add an enterprise application"
      },
      {
        id: "D",
        text: "From the Directory role blade of each user, modify the directory role"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 52,
    number: 12,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager.\n Subscription1 contains a virtual machine named VM1.\n You need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #12",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an automation runbook"
      },
      {
        id: "B",
        text: "Deploy a function app"
      },
      {
        id: "C",
        text: "Deploy the IT Service Management Connector (ITSM)"
      },
      {
        id: "D",
        text: "Create a notification"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 53,
    number: 13,
    topic: "Topic 2",
    prompt: "You sign up for Azure Active Directory (Azure AD) Premium P2.\n You need to add a user named   admin1@contoso.com   as an administrator on all the computers that will be joined to the Azure AD domain.\n What should you configure in Azure AD?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #13",
    type: "single",
    options: [
      {
        id: "A",
        text: "Device settings from the Devices blade"
      },
      {
        id: "B",
        text: "Providers from the MFA Server blade"
      },
      {
        id: "C",
        text: "User settings from the Users blade"
      },
      {
        id: "D",
        text: "General settings from the Groups blade"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 54,
    number: 14,
    topic: "Topic 2",
    prompt: "You have Azure Active Directory tenant named Contoso.com that includes following users:\n\n{{img:/exam-media/az-104/T2/0005300004.png}}\n\n Contoso.com includes following Windows 10 devices:\n\n{{img:/exam-media/az-104/T2/0005300005.png}}\n\n You create following security groups in Contoso.com:\n\n{{img:/exam-media/az-104/T2/0005400001-c06b6be2e9cac3290a6ef3fe22a40955065c232e.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #14",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can add Device2 to Group1",
        answer: false
      },
      {
        id: "s2",
        text: "User2 can add Device1 to Group1",
        answer: true
      },
      {
        id: "s3",
        text: "User2 can add Device2 to Group2",
        answer: false
      }
    ]
  },
  {
    id: 55,
    number: 15,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a resource group named RG26.\n RG26 is set to the West Europe location and is used to create temporary resources for a project. RG26 contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/0005600001.jpg}}\n\n SQLDB01 is backed up to RGV1.\n When the project is complete, you attempt to delete RG26 from the Azure portal. The deletion fails.\n You need to delete RG26.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #15",
    type: "single",
    options: [
      {
        id: "A",
        text: "Delete VM1"
      },
      {
        id: "B",
        text: "Stop VM1"
      },
      {
        id: "C",
        text: "Stop the backup of SQLDB01"
      },
      {
        id: "D",
        text: "Delete sa001"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 56,
    number: 16,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\n Subscription1 has a user named User1. User1 has the following roles:\n ✑ Reader\n ✑ Security Admin\n ✑ Security Reader\n You need to ensure that User1 can assign the Reader role for VNet1 to other users.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #16",
    type: "single",
    options: [
      {
        id: "A",
        text: "Remove User1 from the Security Reader and Reader roles for Subscription1."
      },
      {
        id: "B",
        text: "Assign User1 the User Access Administrator role for VNet1."
      },
      {
        id: "C",
        text: "Assign User1 the Network Contributor role for VNet1."
      },
      {
        id: "D",
        text: "Assign User1 the Network Contributor role for RG1."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 57,
    number: 17,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contosocloud.onmicrosoft.com.\n Your company has a public DNS zone for contoso.com.\n You add contoso.com as a custom domain name to Azure AD.\n You need to ensure that Azure can verify the domain name.\n Which type of DNS record should you create?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #17",
    type: "single",
    options: [
      {
        id: "A",
        text: "MX"
      },
      {
        id: "B",
        text: "NSEC"
      },
      {
        id: "C",
        text: "PTR"
      },
      {
        id: "D",
        text: "RRSIG"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 58,
    number: 18,
    topic: "Topic 2",
    prompt: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.\n Subscription1 contains a resource group named Dev.\n You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\n Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #18",
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
    id: 59,
    number: 19,
    topic: "Topic 2",
    prompt: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.\n Subscription1 contains a resource group named Dev.\n You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\n Solution: On Subscription1, you assign the Logic App Operator role to the Developers group.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #19",
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
    id: 60,
    number: 20,
    topic: "Topic 2",
    prompt: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.\n Subscription1 contains a resource group named Dev.\n You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\n Solution: On Dev, you assign the Contributor role to the Developers group.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #20",
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
    id: 61,
    number: 21,
    topic: "Topic 2",
    prompt: "DRAG DROP -\nYou have an Azure subscription that is used by four departments in your company. The subscription contains 10 resource groups. Each department uses resources in several resource groups.\nYou need to send a report to the finance department. The report must detail the costs for each department.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n{{img:/exam-media/az-104/T2/0006100001-113fdc6717317bfd6fbdf8e4352a87b2f0e83933.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #21",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Assign a tag to each resource"
      },
      {
        id: "B",
        text: "From the Cost analysis blade, filter the view by tag"
      },
      {
        id: "C",
        text: "Download the usage report"
      },
      {
        id: "D",
        text: "Assin a tag to each resource group"
      },
      {
        id: "E",
        text: "Open the Resource costs blade of each resource group"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 62,
    number: 22,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.\n You need to view the error events from a table named Event.\n Which query should you run in Workspace1?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #22",
    type: "single",
    options: [
      {
        id: "A",
        text: "Get-Event Event | where {$_.EventType == \"error\"}"
      },
      {
        id: "B",
        text: "search in (Event) \"error\""
      },
      {
        id: "C",
        text: "select * from Event where EventType == \"error\""
      },
      {
        id: "D",
        text: "search in (Event) * | where EventType -eq \"error\""
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 63,
    number: 23,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a virtual network named VNET1 in the East US 2 region. A network interface named VM1-NI is connected to\n VNET1.\n You successfully deploy the following Azure Resource Manager template.\n\n{{img:/exam-media/az-104/T2/0006500001.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #23",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM1 and VM2 can connect to VNET1",
        answer: true
      },
      {
        id: "s2",
        text: "If an Azure datacenter becomes unavailable, VM1 or VM2 will be available",
        answer: true
      },
      {
        id: "s3",
        text: "If the East Us 2 region becomes unavailable, VM1 or VM2 will be available",
        answer: false
      }
    ]
  },
  {
    id: 64,
    number: 24,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains the resource groups in the following table.\n\n{{img:/exam-media/az-104/T2/0006700001-f0320ccb703b4fba923c55ea94156fcd73a6696e.png}}\n\n RG1 has a web app named WebApp1. WebApp1 is located in West Europe.\n You move WebApp1 to RG2.\n What is the effect of the move?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #24",
    type: "single",
    options: [
      {
        id: "A",
        text: "The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1."
      },
      {
        id: "B",
        text: "The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1."
      },
      {
        id: "C",
        text: "The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1."
      },
      {
        id: "D",
        text: "The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 65,
    number: 25,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that has a subscription ID of c276fc76-9cd4-44c9-99a7-4fd71546436e.\nYou need to create a custom RBAC role named CR1 that meets the following requirements:\n✑ Can be assigned only to the resource groups in Subscription1\n✑ Prevents the management of the access permissions for the resource groups\n✑ Allows the viewing, creating, modifying, and deleting of resources within the resource groups\nWhat should you specify in the assignable scopes and the permission elements of the definition of CR1? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n{{img:/exam-media/az-104/T2/0006900001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image889.png}}\nSource: Az-104 T2.apkg #25",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "\"/\""
      },
      {
        id: "B",
        text: "/subscriptions/c276fc76-9cd4-44c9-99a7-4fd71546435e"
      },
      {
        id: "C",
        text: "Microsoft.Authorization/"
      },
      {
        id: "D",
        text: "Microsoft.Resources/"
      },
      {
        id: "E",
        text: "Microsoft.Security/"
      }
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
      "t1:B",
      "t2:C"
    ]
  },
  {
    id: 66,
    number: 26,
    topic: "Topic 2",
    prompt: "Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to access the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs.\n You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016.\n You need to ensure that the connections to App1 are spread across all the virtual machines.\n What are two possible Azure services that you can use? Each correct answer presents a complete solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #26",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "an internal load balancer"
      },
      {
        id: "B",
        text: "a public load balancer"
      },
      {
        id: "C",
        text: "an Azure Content Delivery Network (CDN)"
      },
      {
        id: "D",
        text: "Traffic Manager"
      },
      {
        id: "E",
        text: "an Azure Application Gateway"
      }
    ],
    correct: [
      "A",
      "E"
    ]
  },
  {
    id: 67,
    number: 26,
    topic: "Topic 2",
    prompt: "You have an Azure subscription.\n You have 100 Azure virtual machines.\n You need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering.\n Which blade should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #26",
    type: "single",
    options: [
      {
        id: "A",
        text: "Monitor"
      },
      {
        id: "B",
        text: "Advisor"
      },
      {
        id: "C",
        text: "Metrics"
      },
      {
        id: "D",
        text: "Customer Insights"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 68,
    number: 28,
    topic: "Topic 2",
    prompt: "HOTSPOT -\nYou have an Azure Active Directory (Azure AD) tenant.\nYou need to create a conditional access policy that requires all users to use multi-factor authentication when they access the Azure portal.\nWhich three settings should you configure? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n{{img:/exam-media/az-104/T2/0007300001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/0007500001.png}}\n  The Answer is correct .\n- Select Users & Groups : Where you have to choose all users.\n- Select Cloud apps or actions: to specify the Azure portal\n- Grant: to grant the MFA.\nThose are the minimum requirements to create MFA policy. No conditions are required in the question.\nReference: https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/app-based-mfa\nSource: Az-104 T2.apkg #28",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Users and Group",
        answer: true
      },
      {
        id: "s2",
        text: "Cloud Apps",
        answer: true
      },
      {
        id: "s3",
        text: "Conditions",
        answer: false
      },
      {
        id: "s4",
        text: "Grant",
        answer: true
      },
      {
        id: "s5",
        text: "Session",
        answer: false
      }
    ]
  },
  {
    id: 69,
    number: 29,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.\n The User administrator role is assigned to a user named Admin1.\n An external partner has a Microsoft account that uses the   user1@outlook.com   sign in.\n Admin1 attempts to invite the external partner to sign in to the Azure AD tenant and receives the following error message: `Unable to invite user   user1@outlook.com   `\" Generic authorization exception.`\n You need to ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #29",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Users settings blade, modify the External collaboration settings."
      },
      {
        id: "B",
        text: "From the Custom domain names blade, add a custom domain."
      },
      {
        id: "C",
        text: "From the Organizational relationships blade, add an identity provider."
      },
      {
        id: "D",
        text: "From the Roles and administrators blade, assign the Security administrator role to Admin1."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 70,
    number: 30,
    topic: "Topic 2",
    prompt: "You have an Azure subscription linked to an Azure Active Directory tenant. The tenant includes a user account named User1.\n You need to ensure that User1 can assign a policy to the tenant root management group.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #30",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign the Owner role for the Azure Subscription to User1, and then modify the default conditional access policies."
      },
      {
        id: "B",
        text: "Assign the Owner role for the Azure subscription to User1, and then instruct User1 to configure access management for Azure resources."
      },
      {
        id: "C",
        text: "Assign the Global administrator role to User1, and then instruct User1 to configure access management for Azure resources."
      },
      {
        id: "D",
        text: "Create a new management group and delegate User1 as the owner of the new management group."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 71,
    number: 31,
    topic: "Topic 2",
    prompt: "HOTSPOT -\n You have an Azure Active Directory (Azure AD) tenant named adatum.com. Adatum.com contains the groups in the following table.\n\n{{img:/exam-media/az-104/T2/0007800001.jpg}}\n\n You create two user accounts that are configured as shown in the following table.\n\n{{img:/exam-media/az-104/T2/0007800002.png}}\n\n Of which groups are User1 and User2 members? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0007900001-5ca3cb8b53698a9e7d9013327a1396f5a8961bfe.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/0008000001.png}}\nReference: https://docs.microsoft.com/en-us/sccm/core/clients/manage/collections/create-collections\nSource: Az-104 T2.apkg #31",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Group1 only"
      },
      {
        id: "B",
        text: "Group1 and Group2 only"
      },
      {
        id: "C",
        text: "Group2 only"
      },
      {
        id: "D",
        text: "Group3 only"
      },
      {
        id: "E",
        text: "Group2 and Group3 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "User1"
      },
      {
        id: "t2",
        text: "User2"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 72,
    number: 32,
    topic: "Topic 2",
    prompt: "You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/0008100001.png}}\n\n You need to modify the JobTitle and UsageLocation attributes for the users.\n For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0008200001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/0008300001.png}}\nReference: https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-users-profile-azure-portal\nSource: Az-104 T2.apkg #32",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "JobTitle: User1 only",
        answer: false
      },
      {
        id: "s2",
        text: "UsageLocation: User1 and User2 only",
        answer: true
      },
      {
        id: "s3",
        text: "JobTitle: User1 and User3 only",
        answer: false
      },
      {
        id: "s4",
        text: "UsageLocation: User1, User2, and User3",
        answer: true
      },
      {
        id: "s5",
        text: "UsageLocation: User1 and User3 only",
        answer: false
      }
    ]
  },
  {
    id: 73,
    number: 33,
    topic: "Topic 2",
    prompt: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.\n Solution: You assign the Network Contributor role at the subscription level to Admin1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #33",
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
    id: 74,
    number: 34,
    topic: "Topic 2",
    prompt: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.\n Solution: You assign the Owner role at the subscription level to Admin1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #34",
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
    id: 75,
    number: 35,
    topic: "Topic 2",
    prompt: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.\n Solution: You assign the Reader role at the subscription level to Admin1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #35",
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
    id: 76,
    number: 36,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a user named User1.\n You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.\n Which role-based access control (RBAC) role should you assign to User1?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #36",
    type: "single",
    options: [
      {
        id: "A",
        text: "Owner"
      },
      {
        id: "B",
        text: "Virtual Machine Contributor"
      },
      {
        id: "C",
        text: "Contributor"
      },
      {
        id: "D",
        text: "Virtual Machine Administrator Login"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 77,
    number: 37,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant that contains three global administrators named Admin1, Admin2, and Admin3.\n The tenant is associated to an Azure subscription. Access control for the subscription is configured as shown in the Access control exhibit. (Click the Access\n Control tab.)\n\n{{img:/exam-media/az-104/T2/0008700001.jpg}}\n\n You sign in to the Azure portal as Admin1 and configure the tenant as shown in the Tenant exhibit. (Click the Tenant tab.)\n\n{{img:/exam-media/az-104/T2/0008800001.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #37",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Admin1 can add Admin2 as an owner of the subscription",
        answer: true
      },
      {
        id: "s2",
        text: "Admin3 can add Admin2 as an owner of the subscription",
        answer: true
      },
      {
        id: "s3",
        text: "Admin2 can create a resourge group in the subscription",
        answer: false
      }
    ]
  },
  {
    id: 78,
    number: 38,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named RG1.\n VM1 runs services that will be used to deploy resources to RG1.\n You need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #38",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Azure portal, modify the Managed Identity settings of VM1"
      },
      {
        id: "B",
        text: "From the Azure portal, modify the Access control (IAM) settings of RG1"
      },
      {
        id: "C",
        text: "From the Azure portal, modify the Access control (IAM) settings of VM1"
      },
      {
        id: "D",
        text: "From the Azure portal, modify the Policies settings of RG1"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 79,
    number: 39,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a resource group named TestRG.\n You use TestRG to validate an Azure deployment.\n TestRG contains the following resources:\n\n{{img:/exam-media/az-104/T2/0009100001.png}}\n\n You need to delete TestRG.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #39",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the backup configurations of VM1 and modify the resource lock type of VNET1"
      },
      {
        id: "B",
        text: "Remove the resource lock from VNET1 and delete all data in Vault1"
      },
      {
        id: "C",
        text: "Turn off VM1 and remove the resource lock from VNET1"
      },
      {
        id: "D",
        text: "Turn off VM1 and delete all data in Vault1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 80,
    number: 40,
    topic: "Topic 2",
    prompt: "You have an Azure DNS zone named adatum.com.\n You need to delegate a subdomain named research.adatum.com to a different DNS server in Azure.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #40",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an NS record named research in the adatum.com zone."
      },
      {
        id: "B",
        text: "Create a PTR record named research in the adatum.com zone."
      },
      {
        id: "C",
        text: "Modify the SOA record of adatum.com."
      },
      {
        id: "D",
        text: "Create an A record named *.research in the adatum.com zone."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 81,
    number: 41,
    topic: "Topic 2",
    prompt: "DRAG DROP -\n You have an Azure Active Directory (Azure AD) tenant that has the contoso.onmicrosoft.com domain name.\n You have a domain name of contoso.com registered at a third-party registrar.\n You need to ensure that you can create Azure AD users that have names containing a suffix of @contoso.com.\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T2/0009300001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/0009300002.jpg}}\n = Correct order\nSource: Az-104 T2.apkg #41",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Add a custom name"
      },
      {
        id: "B",
        text: "Add a record to the public contoso.com DNS zone"
      },
      {
        id: "C",
        text: "verifiy the domain"
      },
      {
        id: "D",
        text: "Add an Entra ID tenant"
      },
      {
        id: "E",
        text: "Create an Azure DNS zone"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 82,
    number: 43,
    topic: "Topic 2",
    prompt: "You have a registered DNS domain named contoso.com.\n You create a public Azure DNS zone named contoso.com.\n You need to ensure that records created in the contoso.com zone are resolvable from the internet.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #43",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create NS records in contoso.com."
      },
      {
        id: "B",
        text: "Modify the SOA record in the DNS domain registrar."
      },
      {
        id: "C",
        text: "Create the SOA record in contoso.com."
      },
      {
        id: "D",
        text: "Modify the NS records in the DNS domain registrar."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 83,
    number: 44,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a storage account named storage1. The subscription is linked to an Azure Active Directory (Azure AD) tenant named contoso.com that syncs to an on-premises Active Directory domain.\n The domain contains the security principals shown in the following table.\n\n{{img:/exam-media/az-104/T2/0009600001.png}}\n\n In Azure AD, you create a user named User2.\n The storage1 account contains a file share named share1 and has the following configurations.\n\n{{img:/exam-media/az-104/T2/0009600002.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #44",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can assign the Storage Fila Data SMB Share Contributor role to User1 for share1",
        answer: true
      },
      {
        id: "s2",
        text: "You can assign the Storage Fila Data SMB Share Reader rolte to Computer1 for share1",
        answer: false
      },
      {
        id: "s3",
        text: "You can assign the Storage Fila Data SMB Share Elevated Contributor role to User2 for share1",
        answer: true
      }
    ]
  },
  {
    id: 84,
    number: 45,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains a virtual network VNet1.\n You add the users in the following table.\n\n{{img:/exam-media/az-104/T2/0009700003.png}}\n\n Which user can perform each configuration? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0009800001.jpg}}",
    keySource: "source",
    explanation: "Box 1: User1 and User3 only.\n User1: The Owner Role lets you manage everything, including access to resources.\n User3: The Network Contributor role lets you manage networks, including creating subnets.\n Box 2: User1 only.\n The Security Admin role: In Security Center only: Can view security policies, view security states, edit security policies, view alerts and recommendations, dismiss alerts and recommendations.\n\n{{img:/exam-media/az-104/T2/0009900001-fb8dcf3086c091d20063d5214989f134780869ac.jpg}}\nSource: Az-104 T2.apkg #45",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Add a subnet to VNet1: User1 and User3 only"
      },
      {
        id: "B",
        text: "Add a subnet to VNet1: User1 only"
      },
      {
        id: "C",
        text: "Assign a user the Reader role to VNet1: User1 only"
      },
      {
        id: "D",
        text: "Assign a user the Reader role to VNet1: User2 and User3 only"
      },
      {
        id: "E",
        text: "Assign a user the Reader role to VNet1: User3 only"
      }
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
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 85,
    number: 46,
    topic: "Topic 2",
    prompt: "You have the Azure resources shown on the following exhibit.\n\n{{img:/exam-media/az-104/T2/0010000001.jpg}}\n\n You plan to track resource usage and prevent the deletion of resources.\n To which resources can you apply locks and tags? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0010100001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #46",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Sub1,RG1, and Vm1 only"
      },
      {
        id: "B",
        text: "Rg1 and Vm1 only"
      },
      {
        id: "C",
        text: "Sub1, Rg1, and Vm1 only"
      },
      {
        id: "D",
        text: "Tenant Root Group, Mg1, Sub1, Rg1, and VM1"
      },
      {
        id: "E",
        text: "Sub1 and RG1 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Locks"
      },
      {
        id: "t2",
        text: "Tags"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 86,
    number: 47,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant.\n You plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center.\n You need to create and upload a file for the bulk delete.\n Which user attributes should you include in the file?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #47",
    type: "single",
    options: [
      {
        id: "A",
        text: "The user principal name and usage location of each user only"
      },
      {
        id: "B",
        text: "The user principal name of each user only"
      },
      {
        id: "C",
        text: "The display name of each user only"
      },
      {
        id: "D",
        text: "The display name and usage location of each user only"
      },
      {
        id: "E",
        text: "The display name and user principal name of each user only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 87,
    number: 48,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/0010400001-86c2938f5b408bb8ed5e17225e4f910989158b34.png}}\n\n You assign an Azure policy that has the following settings:\n ✑ Scope: Sub1\n ✑ Exclusions: Sub1/RG1/VNET1\n ✑ Policy definition: Append a tag and its value to resources\n ✑ Policy enforcement: Enabled\n ✑ Tag name: Tag4\n ✑ Tag value: value4\n You assign tags to the resources as shown in the following table.\n\n{{img:/exam-media/az-104/T2/0010400008.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Box 1: No -\n The Azure Policy will add Tag4 to RG1.\n\n Box 2: No -\n Tags applied to the resource group or subscription aren't inherited by the resources although you can enable inheritance with Azure Policy. Storage1 has Tag3:\n Value1 and the Azure Policy will add Tag4.\n\n Box 3: No -\n Tags applied to the resource group or subscription aren't inherited by the resources so VNET1 does not have Tag2.\n VNET1 has Tag3:value2. VNET1 is excluded from the Azure Policy so Tag4 will not be added to VNET1.\nReference: https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources?tabs=json\nSource: Az-104 T2.apkg #48",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Rg1 has the Tag2:IT tag assigned only",
        answer: false
      },
      {
        id: "s2",
        text: "Storage1 has the Tag1:subscription,Tag2:IT,Tag3:value1, and Tag4:value4 tags assigned",
        answer: false
      },
      {
        id: "s3",
        text: "VNET1 has the Tag2:IT and Tag3:value1 tags assigned only",
        answer: false
      }
    ]
  },
  {
    id: 88,
    number: 49,
    topic: "Topic 2",
    prompt: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription.\n Solution: You assign the Traffic Manager Contributor role at the subscription level to Admin1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #49",
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
    id: 89,
    number: 50,
    topic: "Topic 2",
    prompt: "You have three offices and an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.\n You need to grant user management permissions to a local administrator in each office.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #50",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD roles"
      },
      {
        id: "B",
        text: "administrative units"
      },
      {
        id: "C",
        text: "access packages in Azure AD entitlement management"
      },
      {
        id: "D",
        text: "Azure roles"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 90,
    number: 51,
    topic: "Topic 2",
    prompt: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.\n Subscription1 contains a resource group named Dev.\n You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\n Solution: On Dev, you assign the Logic App Contributor role to the Developers group.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #51",
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
    id: 91,
    number: 52,
    topic: "Topic 2",
    prompt: "You have an Azure Load Balancer named LB1.\n You assign a user named User1 the roles shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/0010800001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0010900001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/0010900002.jpg}}\nReference: https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles ,   https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#virtual-machine-contributor\nSource: Az-104 T2.apkg #52",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "User1 can DELETE LB1"
      },
      {
        id: "B",
        text: "User1 can create a NAT rule for LB1"
      },
      {
        id: "C",
        text: "User1 can assign access to other users fo LB1"
      },
      {
        id: "D",
        text: "User1 can delete a virtual machine from the resource group"
      },
      {
        id: "E",
        text: "User1 can modify the load balancing rules in the resource group"
      }
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
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 92,
    number: 54,
    topic: "Topic 2",
    prompt: "HOTSPOT -\n You configure the custom role shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/0011200001.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0011300001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image891.png}}\nSource: Az-104 T2.apkg #54",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "actions"
      },
      {
        id: "B",
        text: "roletype"
      },
      {
        id: "C",
        text: "notActions"
      },
      {
        id: "D",
        text: "dataActions"
      },
      {
        id: "E",
        text: "assignableScopes"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "#1"
      },
      {
        id: "t2",
        text: "#2"
      }
    ],
    correct: [
      "t1:D",
      "t2:E"
    ]
  },
  {
    id: 93,
    number: 55,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a file share named share1.\n The subscription is linked to a hybrid Azure Active Directory (Azure AD) tenant that contains a security group named Group1.\n You need to grant Group1 the Storage File Data SMB Share Elevated Contributor role for share1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #55",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable Active Directory Domain Service (AD DS) authentication for storage1."
      },
      {
        id: "B",
        text: "Grant share-level permissions by using File Explorer."
      },
      {
        id: "C",
        text: "Mount share1 by using File Explorer."
      },
      {
        id: "D",
        text: "Create a private endpoint."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 94,
    number: 56,
    topic: "Topic 2",
    prompt: "You have 15 Azure subscriptions.\n You have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1.\n You plan to purchase additional Azure subscription.\n You need to ensure that Group1 can manage role assignments for the existing subscriptions and the planned subscriptions. The solution must meet the following requirements:\n ✑ Use the principle of least privilege.\n ✑ Minimize administrative effort.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #56",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign Group1 the Owner role for the root management group."
      },
      {
        id: "B",
        text: "Assign Group1 the User Access Administrator role for the root management group."
      },
      {
        id: "C",
        text: "Create a new management group and assign Group1 the User Access Administrator role for the group."
      },
      {
        id: "D",
        text: "Create a new management group and assign Group1 the Owner role for the group"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 95,
    number: 57,
    topic: "Topic 2",
    prompt: "HOTSPOT -\n You have an Azure subscription that contains the hierarchy shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/0011800001-af958f9523f284c1fe71f23a61eca16a25579b0d.png}}\n\n You create an Azure Policy definition named Policy1.\n To which Azure resources can you assign Policy1 and which Azure resources can you specify as exclusions from Policy1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T2/0011900001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image892.png}}\nSource: Az-104 T2.apkg #57",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Subscription1 and RG1 only"
      },
      {
        id: "B",
        text: "Tenant Root Group, ManagementGroup1, Subscription1 and RG1 only"
      },
      {
        id: "C",
        text: "Tenant Root Group, ManagementGroup1, Subscription1, RG1 and VM1"
      },
      {
        id: "D",
        text: "ManagementGroup1, Subscription1, RG1 and VM1 only"
      },
      {
        id: "E",
        text: "Rg1 and VM1 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "You can assign Policy1 to"
      },
      {
        id: "t2",
        text: "You can exclude Policy1 from"
      }
    ],
    correct: [
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 96,
    number: 58,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\n\n{{img:/exam-media/az-104/T2/0012100001-0e7a6c953f065195fcc0d5360891c7835b7b6e8e.png}}\n\n User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\n You need to create new user accounts in external.contoso.onmicrosoft.com.\n Solution: You instruct User2 to create the user accounts.\n Does that meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #58",
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
    number: 59,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\n\n{{img:/exam-media/az-104/T2/0012200001.png}}\n\n User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\n You need to create new user accounts in external.contoso.onmicrosoft.com.\n Solution: You instruct User4 to create the user accounts.\n Does that meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #59",
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
    id: 98,
    number: 60,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\n\n{{img:/exam-media/az-104/T2/0012300001-0e7a6c953f065195fcc0d5360891c7835b7b6e8e.png}}\n\n User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\n You need to create new user accounts in external.contoso.onmicrosoft.com.\n Solution: You instruct User3 to create the user accounts.\n Does that meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #60",
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
    id: 99,
    number: 61,
    topic: "Topic 2",
    prompt: "You have two Azure subscriptions named Sub1 and Sub2.\n An administrator creates a custom role that has an assignable scope to a resource group named RG1 in Sub1.\n You need to ensure that you can apply the custom role to any resource group in Sub1 and Sub2. The solution must minimize administrative effort.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #61",
    type: "single",
    options: [
      {
        id: "A",
        text: "Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes."
      },
      {
        id: "B",
        text: "Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1."
      },
      {
        id: "C",
        text: "Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1."
      },
      {
        id: "D",
        text: "Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for Sub2."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 100,
    number: 62,
    topic: "Topic 2",
    prompt: "You have an Azure Subscription that contains a storage account named storageacct1234 and two users named User1 and User2.\n You assign User1 the roles shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/0012500001.jpg}}\n\n Which two actions can User1 perform? Each correct answer presents a complete solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #62",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Assign roles to User2 for storageacct1234."
      },
      {
        id: "B",
        text: "Upload blob data to storageacct1234."
      },
      {
        id: "C",
        text: "Modify the firewall of storageacct1234."
      },
      {
        id: "D",
        text: "View file shares in storageacct1234."
      },
      {
        id: "E",
        text: "View blob data in storageacct1234."
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 101,
    number: 64,
    topic: "Topic 2",
    prompt: "You have an Azure App Services web app named App1.\n\n You plan to deploy App1 by using Web Deploy.\n\n You need to ensure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must use the principle of least privilege.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #64",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign the Owner role to the developers"
      },
      {
        id: "B",
        text: "Configure app-level credentials for FTPS"
      },
      {
        id: "C",
        text: "Assign the Website Contributor role to the developers"
      },
      {
        id: "D",
        text: "Configure user-level credentials for FTPS"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 102,
    number: 65,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n\n You have a CSV file that contains the names and email addresses of 500 external users.\n\n You need to create a guest user account in contoso.com for each of the 500 external users.\n\n Solution: From Azure AD in the Azure portal, you use the Bulk invite users operation.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #65",
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
    id: 103,
    number: 66,
    topic: "Topic 2",
    prompt: "HOTSPOT -\n\n You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains the custom role-based access control (RBAC) roles shown in the following table.\n\n{{img:/exam-media/az-104/T2/image567.png}}\n\n From the Azure portal, you need to create two custom roles named Role3 and Role4. Role3 will be an Azure subscription role. Role4 will be an Azure AD role.\n\n Which roles can you clone to create the new roles? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T2/image568.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #66",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Role1 only"
      },
      {
        id: "B",
        text: "Built-in Azure subscription roles only"
      },
      {
        id: "C",
        text: "Role1 and built-in Azure subscription roles only"
      },
      {
        id: "D",
        text: "Role1, Role2, built-in Azure subscription roles, and built-in Azure Entra ID roles"
      },
      {
        id: "E",
        text: "Role1, Role2, built-in Azure subscription roles, and built-in Azure Entra ID roles"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Role3"
      },
      {
        id: "t2",
        text: "Role4"
      }
    ],
    correct: [
      "t1:E",
      "t2:D"
    ]
  },
  {
    id: 104,
    number: 68,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Sub1 that contains two users named User1 and User2.\n\n You need to assign role-based access control (RBAC) roles to User1 and User2. The users must be able to perform the following tasks in Sub1:\n\n • User1 must view the data in any storage account.\n • User2 must assign users the Contributor role for storage accounts.\n\n The solution must use the principle of least privilege.\n\n Which RBAC role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.",
    keySource: "source",
    explanation: "User1: Reader and Data Acess\nUSer2: Owner\nSource: Az-104 T2.apkg #68",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Owner"
      },
      {
        id: "B",
        text: "Contributor"
      },
      {
        id: "C",
        text: "Reader and Data Access"
      },
      {
        id: "D",
        text: "Storage Account Contributor"
      }
    ],
    correct: [
      "A",
      "C"
    ]
  },
  {
    id: 105,
    number: 68,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All the resources are deployed to the East US Azure region.\n\n The virtual machines are protected by using NSG1. NSG1 is configured to block all outbound traffic to the internet.\n\n You need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative effort\n\n What should you configure as the destination of the outbound security rule for NSG1?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #68",
    type: "single",
    options: [
      {
        id: "A",
        text: "an application security group"
      },
      {
        id: "B",
        text: "a service tag"
      },
      {
        id: "C",
        text: "an IP address range"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 106,
    number: 69,
    topic: "Topic 2",
    prompt: "You have an Azure AD tenant named adatum.com that contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T2/image572.png}}\n\n Adatum.com contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/image573.png}}\n\n You assign the Azure Active Directory Premium Plan 2 license to Group1 and User4.\n\n Which users are assigned the Azure Active Directory Premium Plan 2 license?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #69",
    type: "single",
    options: [
      {
        id: "A",
        text: "User4 only"
      },
      {
        id: "B",
        text: "User1 and User4 only"
      },
      {
        id: "C",
        text: "User1, User2, and User4 only"
      },
      {
        id: "D",
        text: "User1, User2, User3, and User4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 107,
    number: 70,
    topic: "Topic 2",
    prompt: "You have an Azure AD tenant named contoso.com.\n\n You have two external partner organizations named fabrikam.com and litwareinc.com. Fabrikam.com is configured as a connected organization.\n\n You create an access package as shown in the Access package exhibit. (Click the Access package tab.)\n\n{{img:/exam-media/az-104/T2/image574.png}}\n\n You configure the external user lifecycle settings as shown in the Lifecycle exhibit. (Click the Lifecycle tab.)\n\n{{img:/exam-media/az-104/T2/image575.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #70",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Litwareinc.com users can be assigned to package1",
        answer: false
      },
      {
        id: "s2",
        text: "After 365 days, fabrikam.com users will be removed from Group1",
        answer: true
      },
      {
        id: "s3",
        text: "After 365 days, fabrikam.com users wil be removed from the contoso.com tenant",
        answer: true
      }
    ]
  },
  {
    id: 108,
    number: 71,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\n\n Subscription1 has a user named User1. User1 has the following roles:\n\n • Reader\n • Security Admin\n • Security Reader\n\n You need to ensure that User1 can assign the Reader role for VNet1 to other users.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #71",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign User1 the Network Contributor role for VNet1."
      },
      {
        id: "B",
        text: "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        id: "C",
        text: "Assign User1 the Owner role for VNet1."
      },
      {
        id: "D",
        text: "Assign User1 the Network Contributor role for RG1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 109,
    number: 72,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/image627.png}}\n\n The groups are configured as shown in the following table.\n\n{{img:/exam-media/az-104/T2/image628.png}}\n\n You have a resource group named RG1 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/image629.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #72",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can assign User2 the Owner role for RG1 by adding Group2 as amember of Group1.",
        answer: false
      },
      {
        id: "s2",
        text: "You can assign User3 the Owner role for RG1 by adding Group3 as amember of Group1.",
        answer: false
      },
      {
        id: "s3",
        text: "You can assign User3 the Owner role for RG1 by assigning the Owner role to Group3 for",
        answer: true
      }
    ]
  },
  {
    id: 110,
    number: 74,
    topic: "Topic 2",
    prompt: "Your on-premises network contains a VPN gateway.\n\n You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image646.png}}\n\n You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #74",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Application Gateway"
      },
      {
        id: "B",
        text: "private endpoints"
      },
      {
        id: "C",
        text: "a network security group (NSG)"
      },
      {
        id: "D",
        text: "Azure Virtual WAN"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 111,
    number: 75,
    topic: "Topic 2",
    prompt: "HOTSPOT\n -\n\n You have an Azure subscription that contains a user named User1 and the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image647.png}}\n\n NSG1 is associated to networkinterface1.\n\n User1 has role assignments for NSG1 as shown in the following table.\n\n{{img:/exam-media/az-104/T2/image648.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #75",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can create a storage account in RG1",
        answer: true
      },
      {
        id: "s2",
        text: "User1 can modify the DNS setting of networkinterface1",
        answer: false
      },
      {
        id: "s3",
        text: "User1 can create an inbound security rule to filter inbound traffic to networkinterface1",
        answer: true
      }
    ]
  },
  {
    id: 112,
    number: 77,
    topic: "Topic 2",
    prompt: "HOTSPOT\n -\n\n You have three Azure subscriptions named Sub1, Sub2, and Sub3 that are linked to an Azure AD tenant.\n\n The tenant contains a user named User1, a security group named Group1, and a management group named MG1. User is a member of Group1.\n\n Sub1 and Sub2 are members of MG1. Sub1 contains a resource group named RG1. RG1 contains five Azure functions.\n\n You create the following role assignments for MG1:\n\n • Group1: Reader\n • User1: User Access Administrator\n\n You assign User the Virtual Machine Contributor role for Sub1 and Sub2.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #77",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "The Group1 members can view the configurations of the Azure functions",
        answer: true
      },
      {
        id: "s2",
        text: "User1 can assign the Owner role for RG1",
        answer: true
      },
      {
        id: "s3",
        text: "User1 can create a new resource froup and deploy a virtual machine to the new group",
        answer: false
      }
    ]
  },
  {
    id: 113,
    number: 78,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image657.png}}\n\n You need to assign User1 the Storage File Data SMB Share Contributor role for share1.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #78",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable identity-based data access for the file shares in storage1."
      },
      {
        id: "B",
        text: "Modify the security profile for the file shares in storage1."
      },
      {
        id: "C",
        text: "Select Default to Azure Active Directory authorization in the Azure portal for storage1."
      },
      {
        id: "D",
        text: "Configure Access control (IAM) for share1"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 114,
    number: 80,
    topic: "Topic 2",
    prompt: "You have an Azure AD tenant named adatum.com that contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T2/image666.png}}\n\n Adatum.com contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/image667.png}}\n\n You assign an Azure Active Directory Premium P2 license to Group1 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/image668.png}}\n\n Group2 is NOT directly assigned a license.\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #80",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can assign User1 the Microsoft Defendr for Cloud Apps Discovery license",
        answer: true
      },
      {
        id: "s2",
        text: "You can remove the Azure Active Directory Premium P2 license from user1",
        answer: false
      },
      {
        id: "s3",
        text: "User2 is assigned the Azure Active Directory Premium P2",
        answer: false
      }
    ]
  },
  {
    id: 115,
    number: 81,
    topic: "Topic 2",
    prompt: "HOTSPOT\n -\n\n You have a hybrid deployment of Azure Active Directory (Azure AD) that contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/image683.png}}\n\n You need to modify the JobTitle and UsageLocation attributes for the users.\n\n For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T2/image684.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image685.png}}\nSource: Az-104 T2.apkg #81",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "User1 only"
      },
      {
        id: "B",
        text: "User1 and User2 only"
      },
      {
        id: "C",
        text: "User1 and User3 only"
      },
      {
        id: "D",
        text: "User1 and User3 only"
      },
      {
        id: "E",
        text: "User1 and User2, and User3"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "JobTitle"
      },
      {
        id: "t2",
        text: "UsageLocation"
      }
    ],
    correct: [
      "t1:C",
      "t2:E"
    ]
  },
  {
    id: 116,
    number: 82,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n\n You have a CSV file that contains the names and email addresses of 500 external users.\n\n You need to create a guest user account in contoso.com for each of the 500 external users.\n\n Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each external user.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #82",
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
    id: 117,
    number: 83,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n\n You have a CSV file that contains the names and email addresses of 500 external users.\n\n You need to create a guest user account in contoso.com for each of the 500 external users.\n\n Solution: You create a PowerShell script that runs the New-MgInvitation cmdlet for each external user.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #83",
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
    id: 118,
    number: 84,
    topic: "Topic 2",
    prompt: "A user named User1 has the following roles for Subscription1:\n\n • Reader\n • Security Admin\n • Security Reader\n\n You need to ensure that User1 can assign the Reader role for VNet1 to other users.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #84",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign User1 the Contributor role for VNet1."
      },
      {
        id: "B",
        text: "Assign User1 the Network Contributor role for VNet1."
      },
      {
        id: "C",
        text: "Assign User1 the User Access Administrator role for VNet1."
      },
      {
        id: "D",
        text: "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 119,
    number: 85,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.\n\n User named User1 has the following roles for Subscription1:\n\n • Reader\n • Security Admin\n • Security Reader\n\n You need to ensure that User1 can assign the Reader role for VNet1 to other users.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #85",
    type: "single",
    options: [
      {
        id: "A",
        text: "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      },
      {
        id: "B",
        text: "Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1."
      },
      {
        id: "C",
        text: "Assign User1 the Network Contributor role for VNet1."
      },
      {
        id: "D",
        text: "Assign User1 the User Access Administrator role for VNet1."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 120,
    number: 86,
    topic: "Topic 2",
    prompt: "You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage.\n\n You need to use AzCopy to copy data to the blob storage and file storage in storage1.\n\n Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T2/image691.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #86",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Blob storage: Entra ID only"
      },
      {
        id: "B",
        text: "Blob storage: Shared access signatures (SAS) only"
      },
      {
        id: "C",
        text: "File storage: Shared access signatures (SAS) only"
      },
      {
        id: "D",
        text: "Blob storage: Entra ID and shared access signatures (SAS)"
      },
      {
        id: "E",
        text: "File storage: Entra ID and shared access signatures (SAS)"
      }
    ],
    correct: [
      "C",
      "D"
    ]
  },
  {
    id: 121,
    number: 87,
    topic: "Topic 2",
    prompt: "You have an Azure AD tenant that contains a user named External User.\n\n External User authenticates to the tenant by using   external195@gmail.com  .\n\n You need to ensure that External User authenticates to the tenant by using   contractor@gmail.com  .\n\n Which two settings should you configure from the Overview blade? To answer, select the appropriate settings in the answer area.\n\n NOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T2/image693.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image694.png}}\nSource: Az-104 T2.apkg #87",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "identities"
      },
      {
        id: "B",
        text: "B2B collaboration"
      }
    ],
    correct: [
      "A",
      "B"
    ]
  },
  {
    id: 122,
    number: 88,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image695.png}}\n\n You need to assign Workspace1 a role to allow read, write, and delete operations for the data stored in the containers of storage1.\n\n Which role should you assign?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #88",
    type: "single",
    options: [
      {
        id: "A",
        text: "Storage Account Contributor"
      },
      {
        id: "B",
        text: "Contributor"
      },
      {
        id: "C",
        text: "Storage Blob Data Contributor"
      },
      {
        id: "D",
        text: "Reader and Data Access"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 123,
    number: 89,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.\n\n A user named User1 has the following roles for Subscription1:\n\n • Reader\n • Security Admin\n • Security Reader\n\n You need to ensure that User1 can assign the Reader role for VNet1 to other users.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #89",
    type: "single",
    options: [
      {
        id: "A",
        text: "Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
      },
      {
        id: "B",
        text: "Assign User1 the Contributor role for VNet1."
      },
      {
        id: "C",
        text: "Assign User1 the Owner role for VNet1."
      },
      {
        id: "D",
        text: "Assign User1 the Network Contributor role for RG1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 124,
    number: 90,
    topic: "Topic 2",
    prompt: "You have an Azure AD tenant that contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T2/image696.png}}\n\n You purchase Azure Active Directory Premium P2 licenses.\n\n To which groups can you assign a license?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #90",
    type: "single",
    options: [
      {
        id: "A",
        text: "Group1 only"
      },
      {
        id: "B",
        text: "Group1 and Group3 only"
      },
      {
        id: "C",
        text: "Group3 and Group4 only"
      },
      {
        id: "D",
        text: "Group1, Group2, and Group3 only"
      },
      {
        id: "E",
        text: "Group1, Group2, Group3, and Group4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 125,
    number: 91,
    topic: "Topic 2",
    prompt: "You have an Azure AD tenant.\n\nYou need to create a Microsoft 365 group that contains only members of a marketing department in France.\n\nHow should you complete the dynamic membership rule? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T2/image697.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image698.png}}\nSource: Az-104 T2.apkg #91",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "user.department"
      },
      {
        id: "B",
        text: "and"
      },
      {
        id: "C",
        text: "-eq"
      },
      {
        id: "D",
        text: "user.usageLocation"
      },
      {
        id: "E",
        text: "or"
      }
    ],
    correct: [
      "A",
      "B",
      "C"
    ]
  },
  {
    id: 126,
    number: 93,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Sub1 that contains the blob containers shown in the following table.\n\n{{img:/exam-media/az-104/T2/image701.png}}\n\n Sub1 contains two users named User1 and User2. Both users are assigned the Reader role at the Sub1 scope.\n\n You have a condition named Condition1 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/image702.png}}\n\n You have a condition named Condition2 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/image703.png}}\n\n You assign roles to User1 and User2 as shown in the following table.\n\n{{img:/exam-media/az-104/T2/image704.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #93",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can read blob2",
        answer: false
      },
      {
        id: "s2",
        text: "User1 can read blob3",
        answer: false
      },
      {
        id: "s3",
        text: "User2 can read blob1",
        answer: true
      }
    ]
  },
  {
    id: 127,
    number: 94,
    topic: "Topic 2",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.com.\n\n You have a CSV file that contains the names and email addresses of 500 external users.\n\n You need to create a guest user account in contoso.com for each of the 500 external users.\n\n Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each user.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #94",
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
    id: 128,
    number: 95,
    topic: "Topic 2",
    prompt: "You purchase a new Azure subscription.\n\n You create an Azure Resource Manager (ARM) template named deploy.json as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/image764.png}}\n\n You connect to the subscription and run the following command.\n\n New-AzDeployment –Location westus –TemplateFile “deploy.json”\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #95",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Three resource groups are created when you run the script",
        answer: false
      },
      {
        id: "s2",
        text: "A resource group named RGroup5 is created",
        answer: false
      },
      {
        id: "s3",
        text: "All the resource group are created in the East US Azure region",
        answer: true
      }
    ]
  },
  {
    id: 129,
    number: 96,
    topic: "Topic 2",
    prompt: "Your on-premises network contains a VPN gateway.\n\n You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image768.png}}\n\n You need to ensure that all the traffic from VM1 to storage1 travels across the Microsoft backbone network.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #96",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD Application Proxy"
      },
      {
        id: "B",
        text: "private endpoints"
      },
      {
        id: "C",
        text: "a network security group (NSG)"
      },
      {
        id: "D",
        text: "Azure Peering Service"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 130,
    number: 99,
    topic: "Topic 2",
    prompt: "You have an Azure subscription named Sub1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image769.png}}\n\n You create a user named Admin1.\n\n To what can you add Admin1 as a co-administrator?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #99",
    type: "single",
    options: [
      {
        id: "A",
        text: "RG1"
      },
      {
        id: "B",
        text: "MG1"
      },
      {
        id: "C",
        text: "Sub1"
      },
      {
        id: "D",
        text: "VM1"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 131,
    number: 102,
    topic: "Topic 2",
    prompt: "You have a Microsoft Entra tenant that is linked to the subscriptions shown in the following table.\n\n{{img:/exam-media/az-104/T2/image818.png}}\n\n You have the resource groups shown in the following table.\n\n{{img:/exam-media/az-104/T2/image819.png}}\n\n You assign roles to users as shown in the following table.\n\n{{img:/exam-media/az-104/T2/image820.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #102",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can resize VM1",
        answer: true
      },
      {
        id: "s2",
        text: "User2 can crrate a new storage account in RG1",
        answer: false
      },
      {
        id: "s3",
        text: "User3 can assign User1 the Owner role for RG3",
        answer: true
      }
    ]
  },
  {
    id: 132,
    number: 104,
    topic: "Topic 2",
    prompt: "You have a Microsoft Entra tenant.\n\n You plan to perform a bulk import of users.\n\n You need to ensure that imported user objects are added automatically as the members of a specific group based on each user's department. The solution must minimize administrative effort.\n\n Which two actions should you perform? Each correct answer presents part of the solution.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #104",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create groups that use the Assigned membership type."
      },
      {
        id: "B",
        text: "Create an Azure Resource Manager (ARM) template."
      },
      {
        id: "C",
        text: "Create groups that use the Dynamic User membership type."
      },
      {
        id: "D",
        text: "Create an XML file that contains user information and the appropriate attributes."
      },
      {
        id: "E",
        text: "Create a CSV file that contains user information and the appropriate attributes."
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 133,
    number: 105,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a storage account named storage1.\n\n You need to ensure that the access keys for storage1 rotate automatically.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #105",
    type: "single",
    options: [
      {
        id: "A",
        text: "a backup vault"
      },
      {
        id: "B",
        text: "redundancy for storage1"
      },
      {
        id: "C",
        text: "lifecycle management for storage1"
      },
      {
        id: "D",
        text: "an Azure key vault"
      },
      {
        id: "E",
        text: "a Recovery Services vault"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 134,
    number: 106,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the Microsoft Entra identities shown in the following table.\n\n{{img:/exam-media/az-104/T2/image835.png}}\n\n You need to enable self-service password reset (SSPR).\n\n For which identities can you enable SSPR in the Azure portal?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #106",
    type: "single",
    options: [
      {
        id: "A",
        text: "User1 only"
      },
      {
        id: "B",
        text: "Group1 only"
      },
      {
        id: "C",
        text: "User1 and Group1 only"
      },
      {
        id: "D",
        text: "Group1 and Group2 only"
      },
      {
        id: "E",
        text: "User1, Group1, and Group2"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 135,
    number: 107,
    topic: "Topic 2",
    prompt: "You have a Microsoft Entra tenant.\n\nYou need to ensure that when a new Microsoft 365 group is created, the group name is automatically formatted as follows:\n\n{{img:/exam-media/az-104/T2/image851.png}}\n\nWhich three actions should you perform in sequence in the Microsoft Entra admin center? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n\n{{img:/exam-media/az-104/T2/image849.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image850.png}}\nSource: Az-104 T2.apkg #107",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Set Add suffix to Attribute"
      },
      {
        id: "B",
        text: "Create a group naming policy"
      },
      {
        id: "C",
        text: "Set Select type to Department"
      },
      {
        id: "D",
        text: "Set Add suffix to String"
      },
      {
        id: "E",
        text: "Set Add prefix to Attribute"
      }
    ],
    correct: [
      "B",
      "C",
      "E"
    ]
  },
  {
    id: 136,
    number: 108,
    topic: "Topic 2",
    prompt: "You have a Microsoft Entra tenant that contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/image858.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T2/image859.png}}\n\n Which users and groups can be deleted? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T2/image861.png}}\nSource: Az-104 T2.apkg #108",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Users: User1, User2, and User4"
      },
      {
        id: "B",
        text: "Users: User4 only"
      },
      {
        id: "C",
        text: "Groups: Group1 and Group3 only"
      },
      {
        id: "D",
        text: "Groups: Groups4 only"
      },
      {
        id: "E",
        text: "Groups: Group1, Group2, Group3, and Group4"
      }
    ],
    correct: [
      "A",
      "C"
    ]
  },
  {
    id: 137,
    number: 109,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image862.png}}\n\n You plan to use an Azure key vault to provide a secret to app1.\n\n What should you create for app1 to access the key vault, and from which key vault can the secret be used? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #109",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create a: Managed Identity"
      },
      {
        id: "B",
        text: "Create a: Private endpoint"
      },
      {
        id: "C",
        text: "User secret from: Vault1 only"
      },
      {
        id: "D",
        text: "User secret from: Vault1, Vault2, or Vault3"
      },
      {
        id: "E",
        text: "Create a: Service principal"
      }
    ],
    correct: [
      "A",
      "D"
    ]
  },
  {
    id: 138,
    number: 110,
    topic: "Topic 2",
    prompt: "You have a Microsoft Entra tenant named contoso.com.\n\n You collaborate with an external partner named fabrikam.com.\n\n You plan to invite users in fabrikam.com to the contoso.com tenant.\n\n You need to ensure that invitations can be sent only to fabrikam.com users.\n\n What should you do in the Microsoft Entra admin center?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #110",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Cross-tenant access settings, configure the Tenant restrictions settings."
      },
      {
        id: "B",
        text: "From Cross-tenant access settings, configure the Microsoft cloud settings."
      },
      {
        id: "C",
        text: "From External collaboration settings, configure the Guest user access restrictions settings"
      },
      {
        id: "D",
        text: "From External collaboration settings, configure the Collaboration restrictions settings."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 139,
    number: 111,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains blob data.\n\n You need to assign a role to a user named User1 to ensure that the user can access the blob data in storage1. The role assignment must support conditions.\n\n Which two roles can you assign to User1? Each correct answer presents a complete solution.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #111",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Owner"
      },
      {
        id: "B",
        text: "Storage Account Contributor"
      },
      {
        id: "C",
        text: "Storage Account Backup Contributor"
      },
      {
        id: "D",
        text: "Storage Blob Data Contributor"
      },
      {
        id: "E",
        text: "Storage Blob Data Owner"
      }
    ],
    correct: [
      "D",
      "E"
    ]
  },
  {
    id: 140,
    number: 112,
    topic: "Topic 2",
    prompt: "Case study -\n\n This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\n To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\n At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n To start the case study -\n To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\n Overview -\n\n ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\n Existing Environment -\n\n Azure Environment -\n\n ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T2/image865.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T2/image866.png}}\n\n The subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T2/image867.png}}\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T2/image868.png}}\n\n Azure Key Vault -\n\n The subscription contains an Azure key vault named Vault1.\n\n Vault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T2/image869.png}}\n\n Vault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T2/image870.png}}\n\n Microsoft Entra Environment -\n\n ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T2/image871.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T2/image872.png}}\n\n The adatum.com tenant has a custom security attribute named Attribute1.\n\n Planned Changes -\n\n ADatum plans to implement the following changes:\n\n • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n • Whenever possible, use directories to organize storage account content.\n • Grant User1 the permissions required to link Zone1 to VNet1.\n • Assign Attribute1 to supported adatum.com resources.\n • In storage2, create an encryption scope named Scope1.\n • Deploy new containers by using Image1 or Image2.\n\n Technical Requirements -\n\n ADatum must meet the following technical requirements:\n\n • Use TLS for WebApp1.\n • Follow the principle of least privilege.\n • Grant permissions at the required scope only.\n • Ensure that Scope1 is used to encrypt storage services.\n • Use Azure Backup to back up cont1 and share1 as frequently as possible.\n • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\n You need to implement the planned change for Attribute1.\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #112",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Admin1 can assign Attribute1 to Group1",
        answer: false
      },
      {
        id: "s2",
        text: "Admin2 can assign Attribute1 to User1",
        answer: false
      },
      {
        id: "s3",
        text: "Admin3 can assign Attribute1 to Group2",
        answer: false
      }
    ]
  },
  {
    id: 141,
    number: 113,
    topic: "Topic 2",
    prompt: "You have a Microsoft Entra tenant configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T2/image875.png}}\n\n The tenant contains the identities shown in the following table.\n\n{{img:/exam-media/az-104/T2/image876.png}}\n\n You purchase a Microsoft Fabric license.\n\n To which identities can you assign the license?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #113",
    type: "single",
    options: [
      {
        id: "A",
        text: "User1 only"
      },
      {
        id: "B",
        text: "User1 and Group1 only"
      },
      {
        id: "C",
        text: "User1 and Group2 only"
      },
      {
        id: "D",
        text: "User1, Group1, and Group2"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 142,
    number: 114,
    topic: "Topic 2",
    prompt: "You have an Azure subscription that contains a storage account named storage. The storage account contains a blob that stores images.\n\n Client access to storage1 is granted by using a shared access signature (SAS).\n\n You need to ensure that users receive a warning message when they generate a SAS that exceeds a seven-day time period.\n\n What should you do for storage?",
    keySource: "source",
    explanation: "Source: Az-104 T2.apkg #114",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable a read-only lock."
      },
      {
        id: "B",
        text: "Configure an alert rule."
      },
      {
        id: "C",
        text: "Add a lifecycle management rule."
      },
      {
        id: "D",
        text: "Set Allow recommended upper limit for shared access signature (SAS) expiry interval to Enabled."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 143,
    number: 1,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table:\n\n{{img:/exam-media/az-104/T3/0014000001.png}}\n\n You plan to use the Azure Import/Export service to export data from Subscription1.\n You need to identify which storage account can be used to export the data.\n What should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #1",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1"
      },
      {
        id: "B",
        text: "storage2"
      },
      {
        id: "C",
        text: "storage3"
      },
      {
        id: "D",
        text: "storage4"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 144,
    number: 2,
    topic: "Topic 3",
    prompt: "You have Azure Storage accounts as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T3/0014100001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0014200001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #2",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "storageaccount1 only"
      },
      {
        id: "B",
        text: "storageaccount2 only"
      },
      {
        id: "C",
        text: "storageaccount1 and  storageaccount2 only"
      },
      {
        id: "D",
        text: "storageaccount2 and  storageaccount3 only"
      },
      {
        id: "E",
        text: "all the storage accounts"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Table Storage"
      },
      {
        id: "t2",
        text: "Blob Storage"
      }
    ],
    correct: [
      "t1:C",
      "t2:E"
    ]
  },
  {
    id: 145,
    number: 3,
    topic: "Topic 3",
    prompt: "You have Azure subscription that includes data in following locations:\n\n{{img:/exam-media/az-104/T3/0014300004.png}}\n\n You plan to export data by using Azure import/export job named Export1.\n You need to identify the data that can be exported by using Export1.\n Which data should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #3",
    type: "single",
    options: [
      {
        id: "A",
        text: "DB1"
      },
      {
        id: "B",
        text: "container1"
      },
      {
        id: "C",
        text: "share1"
      },
      {
        id: "D",
        text: "Table1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 146,
    number: 4,
    topic: "Topic 3",
    prompt: "HOTSPOT -\n You have an Azure Storage account named storage1.\n You have an Azure App Service app named App1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity.\n You need to ensure that App1 and App2 can read blobs from storage1. The solution must meet the following requirements:\n ✑ Minimize the number of secrets used.\n ✑ Ensure that App2 can only read from storage1 for the next 30 days.\n What should you configure in storage1 for each app? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0014500001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image901.png}}\nSource: Az-104 T3.apkg #4",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Access keys"
      },
      {
        id: "B",
        text: "Access control (IAM)"
      },
      {
        id: "C",
        text: "Access control (IAM)"
      },
      {
        id: "D",
        text: "Shared access signatures(SAS)"
      },
      {
        id: "E",
        text: "Shared access signatures(SAS)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "App1"
      },
      {
        id: "t2",
        text: "App2"
      }
    ],
    correct: [
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 147,
    number: 5,
    topic: "Topic 3",
    prompt: "HOTSPOT -\n You need to create an Azure Storage account that meets the following requirements:\n ✑ Minimizes costs\n ✑ Supports hot, cool, and archive blob tiers\n ✑ Provides fault tolerance if a disaster affects the Azure region where the account resides\n How should you complete the command? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0014700004.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #5",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "FileStorage"
      },
      {
        id: "B",
        text: "Storage"
      },
      {
        id: "C",
        text: "StorageV2"
      },
      {
        id: "D",
        text: "Standard_GRS"
      },
      {
        id: "E",
        text: "Standard_LRS"
      }
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
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 148,
    number: 6,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the resources in the following table.\n\n{{img:/exam-media/az-104/T3/0014900001.png}}\n\n Store1 contains a file share named data. Data contains 5,000 files.\n You need to synchronize the files in the file share named data to an on-premises server named Server1.\n Which three actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #6",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create a container instance"
      },
      {
        id: "B",
        text: "Register Server1"
      },
      {
        id: "C",
        text: "Install the Azure File Sync agent on Server1"
      },
      {
        id: "D",
        text: "Download an automation script"
      },
      {
        id: "E",
        text: "Create a sync group"
      }
    ],
    correct: [
      "B",
      "C",
      "E"
    ]
  },
  {
    id: 149,
    number: 7,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T3/0015000001-6ee844567e04b7fd707dc665c82e86724df35f2d.png}}\n\n The status of VM1 is Running.\n You assign an Azure policy as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T3/0015100001.jpg}}\n\n You assign the policy by using the following parameters:\n Microsoft.ClassicNetwork/virtualNetworks\n Microsoft.Network/virtualNetworks\n Microsoft.Compute/virtualMachines\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #7",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "An administrator can move VNET1 to RG2",
        answer: true
      },
      {
        id: "s2",
        text: "The state of VM1 changed to deallocated",
        answer: false
      },
      {
        id: "s3",
        text: "An administrator can modify the address space of VNET2",
        answer: false
      }
    ]
  },
  {
    id: 150,
    number: 8,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account.\n You have an on-premises server named Server1 that runs Windows Server 2016. Server1 has 2 TB of data.\n You need to transfer the data to the storage account by using the Azure Import/Export service.\n In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\n NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\n Select and Place:\n\n{{img:/exam-media/az-104/T3/0015300001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0015400001.jpg}}\nSource: Az-104 T3.apkg #8",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "1. Attach"
      },
      {
        id: "B",
        text: "2. From the Azure portal, create an import job"
      },
      {
        id: "C",
        text: "3. Detach"
      },
      {
        id: "D",
        text: "4. From the Azure portal, update the import job"
      }
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
      "t1:A",
      "t2:B",
      "t3:C",
      "t4:D"
    ]
  },
  {
    id: 151,
    number: 9,
    topic: "Topic 3",
    prompt: "You have Azure subscription that includes following Azure file shares:\n\n{{img:/exam-media/az-104/T3/0015500001.png}}\n\n You have the following on-premises servers:\n\n{{img:/exam-media/az-104/T3/0015500002.png}}\n\n You create a Storage Sync Service named Sync1 and an Azure File Sync group named Group1. Group1 uses share1 as a cloud endpoint.\n You register Server1 and Server2 in Sync1. You add D:\\Folder1 on Server1 as a server endpoint of Group1.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #9",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "share2 can be added as a cloud endpoint for Group1",
        answer: false
      },
      {
        id: "s2",
        text: "E:\\Folder2 on Server1 can be added as a server endpoint for Group1",
        answer: false
      },
      {
        id: "s3",
        text: "D:\\Data on Server2 can be added as a server endpoint for Group1",
        answer: true
      }
    ]
  },
  {
    id: 152,
    number: 11,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains an Azure Storage account.\n You plan to copy an on-premises virtual machine image to a container named vmimages.\n You need to create the container for the planned image.\n Which command should you run? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0016000001-492139605c77e25b53d016922267838fade591f6.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #11",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "make"
      },
      {
        id: "B",
        text: "sync"
      },
      {
        id: "C",
        text: "queue"
      },
      {
        id: "D",
        text: "blob"
      },
      {
        id: "E",
        text: "dfs"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 153,
    number: 10,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1.\n You create an Azure Storage account named contosostorage, and then you create a file share named data.\n Which UNC path should you include in a script that references files from the data file share? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.\n NOTE: Each correct selection is worth one point.\n Select and Place:\n\n{{img:/exam-media/az-104/T3/0015700001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0015800001.jpg}}\nSource: Az-104 T3.apkg #10",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "contosostorage"
      },
      {
        id: "B",
        text: "file.core.windows.net"
      },
      {
        id: "C",
        text: "data"
      },
      {
        id: "D",
        text: "portal.azure.com"
      },
      {
        id: "E",
        text: "blob.core.windows.net"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 154,
    number: 12,
    topic: "Topic 3",
    prompt: "You have an Azure File sync group that has the endpoints shown in the following table.\n\n{{img:/exam-media/az-104/T3/0016100002.png}}\n\n Cloud tiering is enabled for Endpoint3.\n You add a file named File1 to Endpoint1 and a file named File2 to Endpoint2.\n On which endpoints will File1 and File2 be available within 24 hours of adding the files? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0016200001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #12",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Endpoint1 only"
      },
      {
        id: "B",
        text: "Endpoint3 only"
      },
      {
        id: "C",
        text: "Endpoint1, Endpoint2, and Endpoint3"
      },
      {
        id: "D",
        text: "Endpoint2 and Endpoint3 only"
      },
      {
        id: "E",
        text: "Endpoint1 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "File1"
      },
      {
        id: "t2",
        text: "File2"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 155,
    number: 13,
    topic: "Topic 3",
    prompt: "You have several Azure virtual machines on a virtual network named VNet1.\n You configure an Azure Storage account as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T3/0016400001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0016500001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #13",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. always"
      },
      {
        id: "B",
        text: "1. during a backup"
      },
      {
        id: "C",
        text: "1. never"
      },
      {
        id: "D",
        text: "2. always"
      },
      {
        id: "E",
        text: "2. never"
      }
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
      "t1:C",
      "t2:E"
    ]
  },
  {
    id: 156,
    number: 14,
    topic: "Topic 3",
    prompt: "You have a sync group named Sync1 that has a cloud endpoint. The cloud endpoint includes a file named File1.txt.\n Your on-premises network contains servers that run Windows Server 2016. The servers are configured as shown in the following table.\n\n{{img:/exam-media/az-104/T3/0016700001.png}}\n\n You add Share1 as an endpoint for Sync1. One hour later, you add Share2 as an endpoint for Sync1.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #14",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "On the cloud endpoint, File1.txt is overwritten by File1.txt from Share1",
        answer: false
      },
      {
        id: "s2",
        text: "On Server, File1.txt is overwritten by File1.txt from the cloud endpoint",
        answer: false
      },
      {
        id: "s3",
        text: "File1.txt from Share1 replicates to Share2",
        answer: true
      }
    ]
  },
  {
    id: 157,
    number: 15,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/0016900001.png}}\n\n You need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration from Azure support.\n What should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #15",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1"
      },
      {
        id: "B",
        text: "storage2"
      },
      {
        id: "C",
        text: "storage3"
      },
      {
        id: "D",
        text: "storage4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 158,
    number: 16,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named account1.\n You plan to upload the disk files of a virtual machine to account1 from your on-premises network. The on-premises network uses a public IP address space of\n 131.107.1.0/24.\n You plan to use the disk files to provision an Azure virtual machine named VM1. VM1 will be attached to a virtual network named VNet1. VNet1 uses an IP address space of 192.168.0.0/24.\n You need to configure account1 to meet the following requirements:\n ✑ Ensure that you can upload the disk files to account1.\n ✑ Ensure that you can attach the disks to VM1.\n ✑ Prevent all other access to account1.\n Which two actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #16",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "From the Networking blade of account1, select Selected networks."
      },
      {
        id: "B",
        text: "From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account."
      },
      {
        id: "C",
        text: "From the Networking blade of account1, add the 131.107.1.0/24 IP address range."
      },
      {
        id: "D",
        text: "From the Networking blade of account1, add VNet1."
      },
      {
        id: "E",
        text: "From the Service endpoints blade of VNet1, add a service endpoint."
      }
    ],
    correct: [
      "A",
      "C"
    ]
  },
  {
    id: 159,
    number: 17,
    topic: "Topic 3",
    prompt: "You have an on-premises file server named Server1 that runs Windows Server 2016.\n You have an Azure subscription that contains an Azure file share.\n You deploy an Azure File Sync Storage Sync Service, and you create a sync group.\n You need to synchronize files from Server1 to Azure.\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T3/0017200001-f6086e5bbbac3bf4f89388681fd829f015590c59.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0017300001-e562da642ac14ed7fb1e62aa6f9c8edc68f6c0de.png}}\nSource: Az-104 T3.apkg #17",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Install the Azure File Sync agent on Server1"
      },
      {
        id: "B",
        text: "Register Server1"
      },
      {
        id: "C",
        text: "Add a server endpoint"
      },
      {
        id: "D",
        text: "Create a Recovery Services vault"
      },
      {
        id: "E",
        text: "Install the DFS Replication server role on Server1"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 160,
    number: 18,
    topic: "Topic 3",
    prompt: "You plan to create an Azure Storage account in the Azure region of East US 2.\n You need to create a storage account that meets the following requirements:\n ✑ Replicates synchronously.\n ✑ Remains available if a single data center in the region fails.\n How should you configure the storage account? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0017400003.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0017500001.png}}\nSource: Az-104 T3.apkg #18",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Zone-redundant storage (ZRS)"
      },
      {
        id: "B",
        text: "Geo-redundant storage (GRS)"
      },
      {
        id: "C",
        text: ": Locally-redundant storage (LRS)"
      },
      {
        id: "D",
        text: "Blob storage"
      },
      {
        id: "E",
        text: "Storage V2 (general purpose V2)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Replication"
      },
      {
        id: "t2",
        text: "Account type"
      }
    ],
    correct: [
      "t1:A",
      "t2:E"
    ]
  },
  {
    id: 161,
    number: 19,
    topic: "Topic 3",
    prompt: "You plan to use the Azure Import/Export service to copy files to a storage account.\n Which two files should you create before you prepare the drives for the import job? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #19",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "an XML manifest file"
      },
      {
        id: "B",
        text: "a dataset CSV file"
      },
      {
        id: "C",
        text: "a JSON configuration file"
      },
      {
        id: "D",
        text: "a PowerShell PS1 file"
      },
      {
        id: "E",
        text: "a driveset CSV file"
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 162,
    number: 20,
    topic: "Topic 3",
    prompt: "You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines.\n You need to delete the Recovery Services vault.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #20",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Recovery Service vault, delete the backup data."
      },
      {
        id: "B",
        text: "Modify the disaster recovery properties of each virtual machine."
      },
      {
        id: "C",
        text: "Modify the locks of each virtual machine."
      },
      {
        id: "D",
        text: "From the Recovery Service vault, stop the backup of each backup item."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 163,
    number: 21,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T3/0017800001-9fc8266bbb9872b6161ebf88266862d000652da5.png}}\n\n In storage1, you create a blob container named blob1 and a file share named share1.\n Which resources can be backed up to Vault1 and Vault2? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0017900001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0018000001-c4e7966082ef0c5c28ab1b3756f516c189041c04.png}}\nSource: Az-104 T3.apkg #21",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "Vm1 and share1 only"
      },
      {
        id: "C",
        text: "Vm1 and SQL1 only"
      },
      {
        id: "D",
        text: "share1 only"
      },
      {
        id: "E",
        text: "storage1 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Vault1 for backups"
      },
      {
        id: "t2",
        text: "Vault2 for backups"
      }
    ],
    correct: [
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 164,
    number: 22,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1.\n You have 5 TB of data that you need to transfer to Subscription1.\n You plan to use an Azure Import/Export job.\n What can you use as the destination of the imported data?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #22",
    type: "single",
    options: [
      {
        id: "A",
        text: "a virtual machine"
      },
      {
        id: "B",
        text: "an Azure Cosmos DB database"
      },
      {
        id: "C",
        text: "Azure File Storage"
      },
      {
        id: "D",
        text: "the Azure File Sync Storage Sync Service"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 165,
    number: 23,
    topic: "Topic 3",
    prompt: "You have an Azure subscription.\nYou create the Azure Storage account shown in the following exhibit.\n\n{{img:/exam-media/az-104/T3/0018300001-323f8d2c5f68541eaa0614db7767ad8460e411f8.jpg}}\n\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n{{img:/exam-media/az-104/T3/0018400001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0018400002.png}}\nSource: Az-104 T3.apkg #23",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "2"
      },
      {
        id: "C",
        text: "3"
      },
      {
        id: "D",
        text: "Access tier (default)"
      },
      {
        id: "E",
        text: "Performance"
      }
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
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 166,
    number: 24,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1.\n You plan to use AzCopy to copy data to storage1.\n You need to identify the storage services in storage1 to which you can copy the data.\n Which storage services should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #24",
    type: "single",
    options: [
      {
        id: "A",
        text: "blob, file, table, and queue"
      },
      {
        id: "B",
        text: "blob and file only"
      },
      {
        id: "C",
        text: "file and table only"
      },
      {
        id: "D",
        text: "file only"
      },
      {
        id: "E",
        text: "blob, table, and queue only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 167,
    number: 25,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage.\n You need to use AzCopy to copy data to the blob storage and file storage in storage1.\n Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0018700001-6b649140730bf6b815ca58350334cae7c537460b.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0018700002.png}}\nSource: Az-104 T3.apkg #25",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Entra ID only"
      },
      {
        id: "B",
        text: "Access keys and shared access signatures(SAS) only"
      },
      {
        id: "C",
        text: "Entra ID ans shared access signatures(SAS9 only"
      },
      {
        id: "D",
        text: "shared access signatures(SAS) only"
      },
      {
        id: "E",
        text: "Entra ID only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blob storage"
      },
      {
        id: "t2",
        text: "File storage"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 168,
    number: 26,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains an Azure Storage account.\n You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage.\n You need to configure a storage service for Container1.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #26",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Files"
      },
      {
        id: "B",
        text: "Azure Blob storage"
      },
      {
        id: "C",
        text: "Azure Queue storage"
      },
      {
        id: "D",
        text: "Azure Table storage"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 169,
    number: 27,
    topic: "Topic 3",
    prompt: "You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2.\n You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the hardware hosting\n VM1 and VM2.\n What should you include in the Availability Set?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #27",
    type: "single",
    options: [
      {
        id: "A",
        text: "one update domain"
      },
      {
        id: "B",
        text: "two fault domains"
      },
      {
        id: "C",
        text: "one fault domain"
      },
      {
        id: "D",
        text: "two update domains"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 170,
    number: 28,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1.\n You have 5 TB of data that you need to transfer to Subscription1.\n You plan to use an Azure Import/Export job.\n What can you use as the destination of the imported data?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #28",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Cosmos DB database"
      },
      {
        id: "B",
        text: "Azure Blob storage"
      },
      {
        id: "C",
        text: "Azure Data Lake Store"
      },
      {
        id: "D",
        text: "the Azure File Sync Storage Sync Service"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 171,
    number: 29,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains an Azure file share.\n You have an on-premises server named Server1 that runs Windows Server 2016.\n You plan to set up Azure File Sync between Server1 and the Azure file share.\n You need to prepare the subscription for the planned Azure File Sync.\n Which two actions should you perform in the Azure subscription? To answer, drag the appropriate actions to the correct targets. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n NOTE: Each correct selection is worth one point.\n  Select and Place:\n\n{{img:/exam-media/az-104/T3/0019100001-b3fdbdebc5808328dde74c024e5587630bda147a.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image906.png}}\nSource: Az-104 T3.apkg #29",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Create a Storage Sync Service"
      },
      {
        id: "B",
        text: "Install the Azure File Sync agent"
      },
      {
        id: "C",
        text: "Create a sync group"
      },
      {
        id: "D",
        text: "Run Server Registration"
      }
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
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 172,
    number: 30,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the file shares shown in the following table.\n\n{{img:/exam-media/az-104/T3/0019200001-dd9193449a06ae18350bc4d1f93a8581ce87466b.png}}\n\n You have the on-premises file shares shown in the following table.\n\n{{img:/exam-media/az-104/T3/0019200002.png}}\n\n You create an Azure file sync group named Sync1 and perform the following actions:\n ✑ Add share1 as the cloud endpoint for Sync1.\n ✑ Add data1 as a server endpoint for Sync1.\n ✑ Register Server1 and Server2 to Sync1.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #30",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can add share3 as an additional cloud endpoint for Sync1",
        answer: false
      },
      {
        id: "s2",
        text: "You can add data2 as an additional server endpoint for Sync1",
        answer: true
      },
      {
        id: "s3",
        text: "You can add data3 as an additional server endpoint for Sync1",
        answer: false
      }
    ]
  },
  {
    id: 173,
    number: 31,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table:\n\n{{img:/exam-media/az-104/T3/0019400001.png}}\n\n You plan to configure Azure Backup reports for Vault1.\n You are configuring the Diagnostics settings for the AzureBackupReports log.\n Which storage accounts and which Log Analytics workspaces can you use for the Azure Backup reports of Vault1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0019500001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #31",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "storage1 only"
      },
      {
        id: "B",
        text: "storage2 only"
      },
      {
        id: "C",
        text: "storage1, storage2, and storage2 only"
      },
      {
        id: "D",
        text: "Analytics3 only"
      },
      {
        id: "E",
        text: "Analytics2 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Storage accounts"
      },
      {
        id: "t2",
        text: "Log Analytics workspaces"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 174,
    number: 32,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following exhibit.\n\n{{img:/exam-media/az-104/T3/0019600001-b7796552adde91f1b87b7143253dd16a2f370674.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0019700001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image907.png}}\nSource: Az-104 T3.apkg #32",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "contoso101 only"
      },
      {
        id: "B",
        text: "contoso104 only"
      },
      {
        id: "C",
        text: "contoso101 or contoso103 only"
      },
      {
        id: "D",
        text: "contoso101 only"
      },
      {
        id: "E",
        text: "contoso101 , contoso102, contoso103, and contoso104"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "premium file share in"
      },
      {
        id: "t2",
        text: "Archive access tier in"
      }
    ],
    correct: [
      "t1:B",
      "t2:C"
    ]
  },
  {
    id: 175,
    number: 33,
    topic: "Topic 3",
    prompt: "You have an Azure subscription named Subscription1.\n In Subscription1, you create an Azure file share named share1.\n You create a shared access signature (SAS) named SAS1 as shown in the following exhibit:\n\n{{img:/exam-media/az-104/T3/0019900001.png}}\n\n To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0020000001-9128caf767abb271e148a1df28b154861a6ffeb8.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image908.png}}\nSource: Az-104 T3.apkg #33",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. will be prompted for credentials"
      },
      {
        id: "B",
        text: "1. will have no access"
      },
      {
        id: "C",
        text: "1. will have read, write, and list access"
      },
      {
        id: "D",
        text: "2. will have read-only access"
      },
      {
        id: "E",
        text: "2. will have no access"
      }
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
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 176,
    number: 34,
    topic: "Topic 3",
    prompt: "You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2.\nVM2 is backed up to RSV1.\nYou need to back up VM2 to RSV2.\nWhat should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #34",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the RSV1 blade, click Backup items and stop the VM2 backup"
      },
      {
        id: "B",
        text: "From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup"
      },
      {
        id: "C",
        text: "From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault"
      },
      {
        id: "D",
        text: "From the RSV1 blade, click Backup Jobs and export the VM2 job"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 177,
    number: 35,
    topic: "Topic 3",
    prompt: "You have a general-purpose v1 Azure Storage account named storage1 that uses locally-redundant storage (LRS).\n You need to ensure that the data in the storage account is protected if a zone fails. The solution must minimize costs and administrative effort.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #35",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a new storage account."
      },
      {
        id: "B",
        text: "Configure object replication rules."
      },
      {
        id: "C",
        text: "Upgrade the account to general-purpose v2."
      },
      {
        id: "D",
        text: "Modify the Replication setting of storage1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 178,
    number: 36,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/0020200001.png}}\n\n You plan to manage the data stored in the accounts by using lifecycle management rules.\n To which storage accounts can you apply lifecycle management rules?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #36",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1 only"
      },
      {
        id: "B",
        text: "storage1 and storage2 only"
      },
      {
        id: "C",
        text: "storage3 and storage4 only"
      },
      {
        id: "D",
        text: "storage1, storage2, and storage3 only"
      },
      {
        id: "E",
        text: "storage1, storage2, storage3, and storage4"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 179,
    number: 37,
    topic: "Topic 3",
    prompt: "You create an Azure Storage account named contosostorage.\n You plan to create a file share named data.\n Users need to map a drive to the data file share from home computers that run Windows 10.\n Which outbound port should you open between the home computers and the data file share?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #37",
    type: "single",
    options: [
      {
        id: "A",
        text: "443"
      },
      {
        id: "B",
        text: "445"
      },
      {
        id: "C",
        text: "3389"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 180,
    number: 39,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains an Azure Storage account named storageaccount1.\n You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections.\n\n{{img:/exam-media/az-104/T3/0020500001.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #39",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "A server that has a public IP address pf 131.107.103.10 can access storageaccount1",
        answer: true
      },
      {
        id: "s2",
        text: "Individual blobs in storageaccount1 can be set to use the archive tier",
        answer: true
      },
      {
        id: "s3",
        text: "Global administrations in Entra ID can access a file share hosted in storageaccount1 by using their Entra ID credentials",
        answer: false
      }
    ]
  },
  {
    id: 181,
    number: 40,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named storage1.\n You have the devices shown in the following table.\n\n{{img:/exam-media/az-104/T3/0020700001.png}}\n\n From which devices can you use AzCopy to copy data to storage1?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #40",
    type: "single",
    options: [
      {
        id: "A",
        text: "Device 1 only"
      },
      {
        id: "B",
        text: "Device1, Device2 and Device3"
      },
      {
        id: "C",
        text: "Device1 and Device2 only"
      },
      {
        id: "D",
        text: "Device1 and Device3 only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 182,
    number: 41,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1 that contains a blob container named container1.\n You need to prevent new content added to container1 from being modified for one year.\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #41",
    type: "single",
    options: [
      {
        id: "A",
        text: "the access tier"
      },
      {
        id: "B",
        text: "an access policy"
      },
      {
        id: "C",
        text: "the Access control (IAM) settings"
      },
      {
        id: "D",
        text: "the access level"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 183,
    number: 42,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1 that contains a blob container. The blob container has a default access tier of Hot. Storage1 contains a container named conainer1.\n You create lifecycle management rules in storage1 as shown in the following table.\n\n{{img:/exam-media/az-104/T3/0020800001.png}}\n\n You perform the actions shown in the following table.\n\n{{img:/exam-media/az-104/T3/0020900001.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #42",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "On October 10, you can read Dep1File1.docx",
        answer: false
      },
      {
        id: "s2",
        text: "On October 10, you can read File2.docx",
        answer: true
      },
      {
        id: "s3",
        text: "On October 10, you can read File3.docx",
        answer: true
      }
    ]
  },
  {
    id: 184,
    number: 43,
    topic: "Topic 3",
    prompt: "You are configuring Azure Active Directory (Azure AD) authentication for an Azure Storage account named storage1.\n You need to ensure that the members of a group named Group1 can upload files by using the Azure portal. The solution must use the principle of least privilege.\n Which two roles should you configure for storage1? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #43",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Storage Account Contributor"
      },
      {
        id: "B",
        text: "Storage Blob Data Contributor"
      },
      {
        id: "C",
        text: "Reader"
      },
      {
        id: "D",
        text: "Contributor"
      },
      {
        id: "E",
        text: "Storage Blob Data Reader"
      }
    ],
    correct: [
      "B",
      "C"
    ]
  },
  {
    id: 185,
    number: 44,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1 that stores images.\n You need to create a new storage account and replicate the images in storage1 to the new account by using object replication.\n How should you configure the new account? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T3/0021100001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/0021200001.jpg}}\nSource: Az-104 T3.apkg #44",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "StorageV2 or BlobStorage only"
      },
      {
        id: "B",
        text: "StorageV2 or FileStorage only"
      },
      {
        id: "C",
        text: "StorageV2 only"
      },
      {
        id: "D",
        text: "Container"
      },
      {
        id: "E",
        text: "File share"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 186,
    number: 45,
    topic: "Topic 3",
    prompt: "You have an on-premises server that contains a folder named D:\\Folder1.\n You need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata.\n Which command should you run?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #45",
    type: "single",
    options: [
      {
        id: "A",
        text: "https://contosodata.blob.core.windows.net/public"
      },
      {
        id: "B",
        text: "azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot"
      },
      {
        id: "C",
        text: "azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive"
      },
      {
        id: "D",
        text: "az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 187,
    number: 46,
    topic: "Topic 3",
    prompt: "You have an Azure subscription.\n In the Azure portal, you plan to create a storage account named storage1 that will have the following settings:\n ✑ Performance: Standard\n ✑ Replication: Zone-redundant storage (ZRS)\n ✑ Access tier (default): Cool\n ✑ Hierarchical namespace: Disabled\n You need to ensure that you can set Account kind for storage1 to BlockBlobStorage.\n Which setting should you modify first?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #46",
    type: "single",
    options: [
      {
        id: "A",
        text: "Performance"
      },
      {
        id: "B",
        text: "Replication"
      },
      {
        id: "C",
        text: "Access tier(default)"
      },
      {
        id: "D",
        text: "Hierarchical namespace"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 188,
    number: 47,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/0021400001.png}}\n\n You plan to use AzCopy to copy a blob from container1 directly to share1.\n You need to identify which authentication method to use when you use AzCopy.\n What should you identify for each account? To answer, drag the appropriate authentication methods to the correct accounts. Each method may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n NOTE: Each correct selection is worth one point.\n Select and Place:\n\n{{img:/exam-media/az-104/T3/0021500001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #47",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "OAuth"
      },
      {
        id: "B",
        text: "A storage account access key"
      },
      {
        id: "C",
        text: "A storage account access key"
      },
      {
        id: "D",
        text: "A shared access signature (SAS) token"
      },
      {
        id: "E",
        text: "A shared access signature (SAS) token"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "storage1"
      },
      {
        id: "t2",
        text: "storage2"
      }
    ],
    correct: [
      "t1:D",
      "t2:E"
    ]
  },
  {
    id: 189,
    number: 48,
    topic: "Topic 3",
    prompt: "You create an Azure Storage account.\n You plan to add 10 blob containers to the storage account.\n For one of the containers, you need to use a different key to encrypt data at rest.\n What should you do before you create the container?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #48",
    type: "single",
    options: [
      {
        id: "A",
        text: "Generate a shared access signature (SAS)."
      },
      {
        id: "B",
        text: "Modify the minimum TLS version."
      },
      {
        id: "C",
        text: "Rotate the access keys."
      },
      {
        id: "D",
        text: "Create an encryption scope."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 190,
    number: 49,
    topic: "Topic 3",
    prompt: "You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.\n\n{{img:/exam-media/az-104/T3/image578.png}}\n\n On June 1, you store two blobs in storage1 as shown in the following table.\n\n{{img:/exam-media/az-104/T3/image579.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #49",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "On June 6, File1 will be stored in the Cool access tier",
        answer: false
      },
      {
        id: "s2",
        text: "On June 1, File2 will be stored in the Cool access tier",
        answer: false
      },
      {
        id: "s3",
        text: "On June 16, File2 will be stored in the Archive access tier",
        answer: false
      }
    ]
  },
  {
    id: 191,
    number: 50,
    topic: "Topic 3",
    prompt: "HOTSPOT\n -\n\n You have an Azure subscription.\n\n You plan to deploy a storage account named storage1 by using the following Azure Resource Manager (ARM) template.\n\n{{img:/exam-media/az-104/T3/image582.png}}\n\n For each of the following statements, select Yes if the statement is hue. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #50",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Changes made to the data in storage1 can be rolled back after seven days",
        answer: false
      },
      {
        id: "s2",
        text: "Only users located in the East US Azure region can connect to storage1",
        answer: false
      },
      {
        id: "s3",
        text: "Three copies of storage1 will be maintained in the East Us Azure region",
        answer: true
      }
    ]
  },
  {
    id: 192,
    number: 52,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.\n\n You need to create a lifecycle management rule for storage1 that will automatically move the blobs in container1 to the lowest-cost tier after 90 days.\n\n How should you complete the rule? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T3/image585.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #52",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "enableAutoTierToHotFromCool"
      },
      {
        id: "B",
        text: "tierToAchrive"
      },
      {
        id: "C",
        text: "tierToCool"
      },
      {
        id: "D",
        text: "blobIndexMatch"
      },
      {
        id: "E",
        text: "prefixMatch"
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 193,
    number: 53,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a virtual machine named VM1.\n\nYou need to back up VM1. The solution must ensure that backups are stored across three availability zones in the primary region.\n\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n\n{{img:/exam-media/az-104/T3/image587.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image588.png}}\nSource: Az-104 T3.apkg #53",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create Recovery Services Vault"
      },
      {
        id: "B",
        text: "Set Replication Policy to Zone-redundant storage (ZRS)"
      },
      {
        id: "C",
        text: "For VM1, create a backup policy and configure the backup"
      },
      {
        id: "D",
        text: "Configure a replication policy"
      },
      {
        id: "E",
        text: "Set Replication Policy to locally-redundant storage (LRS)"
      }
    ],
    correct: [
      "A",
      "B",
      "C"
    ]
  },
  {
    id: 194,
    number: 55,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T3/image589.png}}\n\n You need to perform the tasks shown in the following table.\n\n{{img:/exam-media/az-104/T3/image590.png}}\n\n Which tasks can you perform by using Azure Storage Explorer?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #55",
    type: "single",
    options: [
      {
        id: "A",
        text: "Task1 and Task3 only"
      },
      {
        id: "B",
        text: "Task1, Task2, and Task3 only"
      },
      {
        id: "C",
        text: "Task1, Task3, and Task4 only"
      },
      {
        id: "D",
        text: "Task2, Task3, and Task4 only"
      },
      {
        id: "E",
        text: "Task1, Task2, Task3, and Task4"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 195,
    number: 57,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named storage1.\n\n You plan to create a blob container named container1.\n\n You need to use customer-managed key encryption for container1.\n\n Which key should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #57",
    type: "single",
    options: [
      {
        id: "A",
        text: "an EC key that uses the P-384 curve only"
      },
      {
        id: "B",
        text: "an EC key that uses the P-521 curve only"
      },
      {
        id: "C",
        text: "an EC key that uses the P-384 curve or P-521 curve only"
      },
      {
        id: "D",
        text: "an RSA key with a key size of 4096 only"
      },
      {
        id: "E",
        text: "an RSA key type with a key size of 2048, 3072, or 4096 only"
      }
    ],
    correct: [
      "E"
    ]
  },
  {
    id: 196,
    number: 61,
    topic: "Topic 3",
    prompt: "You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.\n\n{{img:/exam-media/az-104/T3/image639.png}}\n\n On June 1, you store a blob named File1 in the Hot access tier of storage1.\n\n What is the state of File1 on June 7?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #61",
    type: "single",
    options: [
      {
        id: "A",
        text: "stored in the Cool access tier"
      },
      {
        id: "B",
        text: "stored in the Archive access tier"
      },
      {
        id: "C",
        text: "stored in the Hot access tier"
      },
      {
        id: "D",
        text: "deleted"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 197,
    number: 64,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.\n\n You create a blob lifecycle rule named rule1.\n\n You need to configure rule1 to automatically move blobs that were NOT updated for 45 days from contained to the Cool access tier.\n\n How should you complete the rule? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T3/image651.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image652.png}}\nSource: Az-104 T3.apkg #64",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "daysAfterCreationGreateThan"
      },
      {
        id: "B",
        text: "dayAfterLAsAccessTimeGreaterThan"
      },
      {
        id: "C",
        text: "daysAfterModificationGreaterThan"
      },
      {
        id: "D",
        text: "AppendBlob"
      },
      {
        id: "E",
        text: "Blockblob"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 198,
    number: 66,
    topic: "Topic 3",
    prompt: "You plan to create an Azure Storage account named storage1 that will contain a file share named share1.\n\n You need to ensure that share1 can support SMB Multichannel. The solution must minimize costs.\n\n How should you configure storage?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #66",
    type: "single",
    options: [
      {
        id: "A",
        text: "Premium performance with locally-redundant storage (LRS)"
      },
      {
        id: "B",
        text: "Standard performance with zone-redundant storage (ZRS)"
      },
      {
        id: "C",
        text: "Premium performance with geo-redundant storage (GRS)"
      },
      {
        id: "D",
        text: "Standard performance with locally-redundant storage (LRS)"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 199,
    number: 68,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named storage1.\n\n You plan to use conditions when assigning role-based access control (RBAC) roles to storage1.\n\n Which storage1 services support conditions when assigning roles?",
    keySource: "source",
    explanation: "f.     files shares and tables only\nSource: Az-104 T3.apkg #68",
    type: "single",
    options: [
      {
        id: "A",
        text: "containers only"
      },
      {
        id: "B",
        text: "file shares only"
      },
      {
        id: "C",
        text: "tables only"
      },
      {
        id: "D",
        text: "queues only"
      },
      {
        id: "E",
        text: "containers and queues only"
      }
    ],
    correct: [
      "E"
    ]
  },
  {
    id: 200,
    number: 69,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the resource groups shown in the following table.\n\n{{img:/exam-media/az-104/T3/image658.png}}\n\n The subscription contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T3/image659.png}}\n\n You plan to deploy the Azure Kubernetes Service (AKS) clusters shown in the following table.\n\n{{img:/exam-media/az-104/T3/image660.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #69",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can deploy AKS2 to VNet2",
        answer: false
      },
      {
        id: "s2",
        text: "You can deploy AKS2 to VNet1",
        answer: true
      },
      {
        id: "s3",
        text: "You can depliy AKS3 to VNet3",
        answer: true
      }
    ]
  },
  {
    id: 201,
    number: 70,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1.\n\n You need to enable a user named User1 to list and regenerate storage account keys for storage1.\n\n Solution: You assign the Storage Account Encryption Scope Contributor Role to User1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #70",
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
    id: 202,
    number: 71,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that has offices in the East US and West US Azure regions.\n\n You plan to create the storage account shown in the following exhibit.\n\n{{img:/exam-media/az-104/T3/image671.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T3/image672.png}}",
    keySource: "domain",
    explanation: "{{img:/exam-media/az-104/T3/image911.png}}\nSource: Az-104 T3.apkg #71",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Default routing tier"
      },
      {
        id: "B",
        text: "Endpoint type"
      },
      {
        id: "C",
        text: "Performance"
      },
      {
        id: "D",
        text: "Enable infrastructure encryption"
      },
      {
        id: "E",
        text: "Encryption type"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Blank 1"
      }
    ],
    correct: [
      "t1:A"
    ]
  },
  {
    id: 203,
    number: 72,
    topic: "Topic 3",
    prompt: "You have an Azure subscription.\n\n You plan to deploy a new storage account.\n\n You need to configure encryption for the account. The solution must meet the following requirements:\n\n • Use a customer-managed key stored in a key vault.\n • Use the maximum supported bit length.\n\n Which type of key and which bit length should you use? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T3/image675.png}}\nSource: Az-104 T3.apkg #72",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "AES"
      },
      {
        id: "B",
        text: "3DES"
      },
      {
        id: "C",
        text: "RSA"
      },
      {
        id: "D",
        text: "2048"
      },
      {
        id: "E",
        text: "4096"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 204,
    number: 73,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account that contains 5,000 blobs accessed by multiple users.\n\n You need to ensure that the users can view only specific blobs based on blob index tags.\n\n What should you include in the solution?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #73",
    type: "single",
    options: [
      {
        id: "A",
        text: "a role assignment condition"
      },
      {
        id: "B",
        text: "a stored access policy"
      },
      {
        id: "C",
        text: "just-in-time (JIT) VM access"
      },
      {
        id: "D",
        text: "a shared access signature (SAS)"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 205,
    number: 74,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1.\n\n For storage1, you create an encryption scope named Scope1.\n\n Which storage types can you encrypt by using Scope?",
    keySource: "source",
    explanation: "f.  file shares, containers, tables, and queues\nSource: Az-104 T3.apkg #74",
    type: "single",
    options: [
      {
        id: "A",
        text: "file shares only"
      },
      {
        id: "B",
        text: "containers only"
      },
      {
        id: "C",
        text: "file shares and containers only"
      },
      {
        id: "D",
        text: "containers and tables only"
      },
      {
        id: "E",
        text: "file shares, containers, and tables only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 206,
    number: 78,
    topic: "Topic 3",
    prompt: "You have an Azure virtual machine named VM1 and an Azure key vault named Vault1.\n\n On VM1, you plan to configure Azure Disk Encryption to use a key encryption key (KEK).\n\n You need to prepare Vault1 for Azure Disk Encryption.\n\n Which two actions should you perform on Vault1? Each correct answer presents part of the solution.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #78",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Select Azure Virtual machines for deployment."
      },
      {
        id: "B",
        text: "Create a new key."
      },
      {
        id: "C",
        text: "Create a new secret."
      },
      {
        id: "D",
        text: "Configure a key rotation policy."
      },
      {
        id: "E",
        text: "Select Azure Disk Encryption for volume encryption."
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 207,
    number: 79,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1.\n\n You need to configure encryption for VM1. The solution must meet the following requirements:\n\n • Store and use the encryption key in KV1.\n • Maintain encryption if VM1 is downloaded from Azure.\n • Encrypt both the operating system disk and the data disks.\n\n Which encryption method should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #79",
    type: "single",
    options: [
      {
        id: "A",
        text: "customer-managed keys"
      },
      {
        id: "B",
        text: "Confidential disk encryption"
      },
      {
        id: "C",
        text: "Azure Disk Encryption"
      },
      {
        id: "D",
        text: "encryption at host"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 208,
    number: 81,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.\n\n You need to configure access to container1. The solution must meet the following requirements:\n • Only allow read access.\n • Allow both HTTP and HTTPS protocols.\n • Apply access permissions to all the content in the container.\n\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #81",
    type: "single",
    options: [
      {
        id: "A",
        text: "an access policy"
      },
      {
        id: "B",
        text: "a shared access signature (SAS)"
      },
      {
        id: "C",
        text: "Azure Content Delivery Network (CDN)"
      },
      {
        id: "D",
        text: "access keys"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 209,
    number: 82,
    topic: "Topic 3",
    prompt: "You need to create an Azure Storage account named storage1. The solution must meet the following requirements:\n\n • Support Azure Data Lake Storage.\n • Minimize costs for infrequently accessed data.\n • Automatically replicate data to a secondary Azure region.\n\n Which three options should you configure for storage1? Each correct answer presents part of the solution.\n\n NOTE: Each correct answer is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #82",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "zone-redundant storage (ZRS)"
      },
      {
        id: "B",
        text: "the Cool access tire"
      },
      {
        id: "C",
        text: "geo-redundant storage (GRS)"
      },
      {
        id: "D",
        text: "the Hot access tier"
      },
      {
        id: "E",
        text: "hierarchical namespace"
      }
    ],
    correct: [
      "B",
      "C",
      "E"
    ]
  },
  {
    id: 210,
    number: 83,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1 that contains two containers named container1 and container2. Blob versioning is enabled for both containers.\n\n You periodically take blob snapshots of critical blobs.\n\n You create the following lifecycle management policy.\n\n{{img:/exam-media/az-104/T3/image770.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #83",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "A blob snapshot automatically moves to the Cool access tier after 15 days",
        answer: true
      },
      {
        id: "s2",
        text: "A blob version in container2 automatically moves to the Archive access tier after 30 days",
        answer: false
      },
      {
        id: "s3",
        text: "A rehydrated version automatically moves to the Archive access tier after 30 days",
        answer: false
      }
    ]
  },
  {
    id: 211,
    number: 84,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/image773.png}}\n\n Which storage account can be converted to zone-redundant storage (ZRS) replication?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #84",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1"
      },
      {
        id: "B",
        text: "storage2"
      },
      {
        id: "C",
        text: "storage3"
      },
      {
        id: "D",
        text: "storage4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 212,
    number: 86,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1.\n\n You need to enable a user named User1 to list and regenerate storage account keys for storage1.\n\n Solution: You assign the Storage Account Key Operator Service Role to User1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #86",
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
    id: 213,
    number: 94,
    topic: "Topic 3",
    prompt: "You have an Azure Storage account named storage1.\n\n You need to enable a user named User1 to list and regenerate storage account keys for storage1.\n\n Solution: You assign the Reader and Data Access role to User1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #94",
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
    id: 214,
    number: 95,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains a Standard SKU Azure container registry named ContReg1.\n\n You need to ensure that ContReg1 supports geo-replication.\n\n What should you do first for ContReg1?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #95",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable Admin user."
      },
      {
        id: "B",
        text: "Add a scope map."
      },
      {
        id: "C",
        text: "Add an automation task."
      },
      {
        id: "D",
        text: "Create a cache rule."
      },
      {
        id: "E",
        text: "Upgrade the SKU."
      }
    ],
    correct: [
      "E"
    ]
  },
  {
    id: 215,
    number: 96,
    topic: "Topic 3",
    prompt: "Case study -\n\n This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\n To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\n At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n To start the case study -\n To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\n Overview -\n\n ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\n Existing Environment -\n\n Azure Environment -\n\n ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/image865.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T3/image866.png}}\n\n The subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T3/image867.png}}\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T3/image868.png}}\n\n Azure Key Vault -\n\n The subscription contains an Azure key vault named Vault1.\n\n Vault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T3/image869.png}}\n\n Vault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T3/image870.png}}\n\n Microsoft Entra Environment -\n\n ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T3/image871.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T3/image872.png}}\n\n The adatum.com tenant has a custom security attribute named Attribute1.\n\n Planned Changes -\n\n ADatum plans to implement the following changes:\n\n • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n • Whenever possible, use directories to organize storage account content.\n • Grant User1 the permissions required to link Zone1 to VNet1.\n • Assign Attribute1 to supported adatum.com resources.\n • In storage2, create an encryption scope named Scope1.\n • Deploy new containers by using Image1 or Image2.\n\n Technical Requirements -\n\n ADatum must meet the following technical requirements:\n\n • Use TLS for WebApp1.\n • Follow the principle of least privilege.\n • Grant permissions at the required scope only.\n • Ensure that Scope1 is used to encrypt storage services.\n • Use Azure Backup to back up cont1 and share1 as frequently as possible.\n • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\n You implement the planned changes for cont2.\n\n What is the maximum number of additional access policies you can create for cont2? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T3/image877.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #96",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Stored access policies: 0"
      },
      {
        id: "B",
        text: "Stored access policies: 1"
      },
      {
        id: "C",
        text: "Stored access policies: 2"
      },
      {
        id: "D",
        text: "Immutable blob storage policies: 0"
      },
      {
        id: "E",
        text: "Immutable blob storage policies: 1"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 216,
    number: 97,
    topic: "Topic 3",
    prompt: "Case study -\n\n This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\n To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\n At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n To start the case study -\n To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\n Overview -\n\n ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\n Existing Environment -\n\n Azure Environment -\n\n ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/image865.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T3/image866.png}}\n\n The subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T3/image867.png}}\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T3/image868.png}}\n\n Azure Key Vault -\n\n The subscription contains an Azure key vault named Vault1.\n\n Vault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T3/image869.png}}\n\n Vault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T3/image870.png}}\n\n Microsoft Entra Environment -\n\n ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T3/image871.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T3/image872.png}}\n\n The adatum.com tenant has a custom security attribute named Attribute1.\n\n Planned Changes -\n\n ADatum plans to implement the following changes:\n\n • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n • Whenever possible, use directories to organize storage account content.\n • Grant User1 the permissions required to link Zone1 to VNet1.\n • Assign Attribute1 to supported adatum.com resources.\n • In storage2, create an encryption scope named Scope1.\n • Deploy new containers by using Image1 or Image2.\n\n Technical Requirements -\n\n ADatum must meet the following technical requirements:\n\n • Use TLS for WebApp1.\n • Follow the principle of least privilege.\n • Grant permissions at the required scope only.\n • Ensure that Scope1 is used to encrypt storage services.\n • Use Azure Backup to back up cont1 and share1 as frequently as possible.\n • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\n You need to configure encryption for the virtual machines. The solution must meet the technical requirements.\n\n Which virtual machines can you encrypt?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #97",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 and VM3"
      },
      {
        id: "B",
        text: "VM4 and VM5"
      },
      {
        id: "C",
        text: "VM2 and VM3"
      },
      {
        id: "D",
        text: "VM2 and VM4"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 217,
    number: 98,
    topic: "Topic 3",
    prompt: "Case study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\nExisting Environment -\n\nAzure Environment -\n\nADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\nThe subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/image865.png}}\n\nThe subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T3/image866.png}}\n\nThe subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T3/image867.png}}\n\nThe subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T3/image868.png}}\n\nAzure Key Vault -\n\nThe subscription contains an Azure key vault named Vault1.\n\nVault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T3/image869.png}}\n\nVault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T3/image870.png}}\n\nMicrosoft Entra Environment -\n\nADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T3/image871.png}}\n\nThe tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T3/image872.png}}\n\nThe adatum.com tenant has a custom security attribute named Attribute1.\n\nPlanned Changes -\n\nADatum plans to implement the following changes:\n\n• Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n• In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n• Whenever possible, use directories to organize storage account content.\n• Grant User1 the permissions required to link Zone1 to VNet1.\n• Assign Attribute1 to supported adatum.com resources.\n• In storage2, create an encryption scope named Scope1.\n• Deploy new containers by using Image1 or Image2.\n\nTechnical Requirements -\n\nADatum must meet the following technical requirements:\n\n• Use TLS for WebApp1.\n• Follow the principle of least privilege.\n• Grant permissions at the required scope only.\n• Ensure that Scope1 is used to encrypt storage services.\n• Use Azure Backup to back up cont1 and share1 as frequently as possible.\n• Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\nYou need to implement the planned changes for the storage account content.\n\nWhich containers and file shares can you use to organize the content?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #98",
    type: "single",
    options: [
      {
        id: "A",
        text: "share1 only"
      },
      {
        id: "B",
        text: "cont1 and share1 only"
      },
      {
        id: "C",
        text: "share1 and share2 only"
      },
      {
        id: "D",
        text: "cont1, share1, and share2 only"
      },
      {
        id: "E",
        text: "cont1, cont2, share1, and share2"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 218,
    number: 85,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the devices shown in the following table.\n\n{{img:/exam-media/az-104/T3/image774.png}}\n\n On which devices can you install Azure Storage Explorer?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #85",
    type: "single",
    options: [
      {
        id: "A",
        text: "Device1 only"
      },
      {
        id: "B",
        text: "Device1 and Device2 only"
      },
      {
        id: "C",
        text: "Device1, Device2, and Device3 only"
      },
      {
        id: "D",
        text: "Device1, Device3, and Device4 only"
      },
      {
        id: "E",
        text: "Device1 and Device3 only"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 219,
    number: 89,
    topic: "Topic 3",
    prompt: "You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table.\n\n{{img:/exam-media/az-104/T3/image782.png}}\n\n On June 1, you store two blobs in storage1 as shown in the following table.\n\n{{img:/exam-media/az-104/T3/image783.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #89",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "On june 6, File 1 will be stored in the Cool access tier.",
        answer: false
      },
      {
        id: "s2",
        text: "On June 7, File2 will be stored in the Cool access tier.",
        answer: true
      },
      {
        id: "s3",
        text: "On june 16, File 2 will be storde in the Archive access tier.",
        answer: false
      }
    ]
  },
  {
    id: 220,
    number: 91,
    topic: "Topic 3",
    prompt: "You have an Azure subscription linked to a hybrid Microsoft Entra tenant. The tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T3/image824.png}}\n\n You create the Azure Files shares shown in the following table.\n\n{{img:/exam-media/az-104/T3/image825.png}}\n\n You configure identity-based access for contoso2024 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T3/image826.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #91",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can access the content in share1.",
        answer: false
      },
      {
        id: "s2",
        text: "User2 can acsess the content in share2.",
        answer: true
      },
      {
        id: "s3",
        text: "User2 can acsess the content in share3.",
        answer: false
      }
    ]
  },
  {
    id: 221,
    number: 92,
    topic: "Topic 3",
    prompt: "Your network contains an on-premises Active Directory Domain Services (AD DS) domain.\n\n The domain contains the identities shown in the following table.\n\n{{img:/exam-media/az-104/T3/image836.png}}\n\n You have an Azure subscription that contains a storage account named storage1. The file shares in storage1 have an identity source of AD DS and Default share-level permissions set to Enable permissions for all authenticated users and groups.\n\n You create an Azure Files share named share1 that has the roles shown in the following table.\n\n{{img:/exam-media/az-104/T3/image837.png}}\n\n You have a Microsoft Entra tenant that contains a cloud-only user named User3.\n\n You use Microsoft Entra Connect to sync OU1 from the AD DS domain to the Microsoft Entra tenant.\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #92",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can access conten in share1.",
        answer: false
      },
      {
        id: "s2",
        text: "User2 can access conten in share1.",
        answer: true
      },
      {
        id: "s3",
        text: "User3 can access conten in share1.",
        answer: false
      }
    ]
  },
  {
    id: 222,
    number: 93,
    topic: "Topic 3",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T3/image852.png}}\n\n Which storage account can be converted to zone-redundant storage (ZRS) replication?",
    keySource: "source",
    explanation: "Source: Az-104 T3.apkg #93",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1 only"
      },
      {
        id: "B",
        text: "storage2 only"
      },
      {
        id: "C",
        text: "storage3 only"
      },
      {
        id: "D",
        text: "storage2 and storage3"
      },
      {
        id: "E",
        text: "storage1, storage2, and storage3"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 223,
    number: 1,
    topic: "Topic 4",
    prompt: "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\n You need to deploy a YAML file to AKS1.\n Solution: From Azure CLI, you run az aks.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #1",
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
    id: 224,
    number: 2,
    topic: "Topic 4",
    prompt: "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\n You need to deploy a YAML file to AKS1.\n Solution: From Azure CLI, you run the kubectl client.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #2",
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
    id: 225,
    number: 3,
    topic: "Topic 4",
    prompt: "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\n You need to deploy a YAML file to AKS1.\n Solution: From Azure CLI, you run azcopy.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #3",
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
    id: 226,
    number: 4,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2016.\n You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\n Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source.\n Does that meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #4",
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
    id: 227,
    number: 5,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains the resources in the following table.\n\n{{img:/exam-media/az-104/T4/0023300001.png}}\n\n VNet1 is in RG1. VNet2 is in RG2. There is no connectivity between VNet1 and VNet2.\n An administrator named Admin1 creates an Azure virtual machine named VM1 in RG1. VM1 uses a disk named Disk1 and connects to VNet1. Admin1 then installs a custom application in VM1.\n You need to move the custom application to VNet2. The solution must minimize administrative effort.\n Which two actions should you perform? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0023400001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0023500001.png}}\nSource: Az-104 T4.apkg #5",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Create a network interface in RG2"
      },
      {
        id: "B",
        text: "Delete Vm1"
      },
      {
        id: "C",
        text: "Attach a network interface"
      },
      {
        id: "D",
        text: "Create a new virtual machine"
      },
      {
        id: "E",
        text: "Move Vm1 to RG2"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "First action"
      },
      {
        id: "t2",
        text: "Second action"
      }
    ],
    correct: [
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 228,
    number: 6,
    topic: "Topic 4",
    prompt: "You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines.\n You need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text.\n What should you create to store the password?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #6",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Key Vault and an access policy"
      },
      {
        id: "B",
        text: "an Azure Storage account and an access policy"
      },
      {
        id: "C",
        text: "a Recovery Services vault and a backup policy"
      },
      {
        id: "D",
        text: "Azure Active Directory (AD) Identity Protection and an Azure policy"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 229,
    number: 7,
    topic: "Topic 4",
    prompt: "You have the App Service plans shown in the following table.\n\n{{img:/exam-media/az-104/T4/0023600001.png}}\n\n You plan to create the Azure web apps shown in the following table.\n\n{{img:/exam-media/az-104/T4/0023700001.png}}\n\n You need to identify which App Service plans can be used for the web apps.\n What should you identify? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0023700002.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0023800001.png}}\nSource: Az-104 T4.apkg #7",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "ASP1 only"
      },
      {
        id: "B",
        text: "ASP3 only"
      },
      {
        id: "C",
        text: "ASP1 and ASP3  only"
      },
      {
        id: "D",
        text: "ASP1 only"
      },
      {
        id: "E",
        text: "ASP1 and ASP2 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Webapp1"
      },
      {
        id: "t2",
        text: "Webap2"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 230,
    number: 8,
    topic: "Topic 4",
    prompt: "You create a virtual machine scale set named Scale1. Scale1 is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0024000001.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0024100001-de6659b19931a8f924691f68fee262efd39c8998.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0024200001.jpg}}\nSource: Az-104 T4.apkg #8",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. 2 virtual machine"
      },
      {
        id: "B",
        text: "1. 10 virtual machine"
      },
      {
        id: "C",
        text: "1. 6 virtual machine"
      },
      {
        id: "D",
        text: "2. 2 virtual machine"
      },
      {
        id: "E",
        text: "2. 4 virtual machine"
      }
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
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 231,
    number: 9,
    topic: "Topic 4",
    prompt: "You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.\n You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.\n Which two actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #9",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Upload a configuration script"
      },
      {
        id: "B",
        text: "Create an automation account"
      },
      {
        id: "C",
        text: "Create an Azure policy"
      },
      {
        id: "D",
        text: "Modify the extensionProfile section of the Azure Resource Manager template"
      },
      {
        id: "E",
        text: "Create a new virtual machine scale set in the Azure portal"
      }
    ],
    correct: [
      "A",
      "D"
    ]
  },
  {
    id: 232,
    number: 10,
    topic: "Topic 4",
    prompt: "You have an Azure Kubernetes Service (AKS) cluster named AKS1 and a computer named Computer1 that runs Windows 10. Computer1 that has the Azure CLI installed.\n You need to install the kubectl client on Computer1.\n Which command should you run? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0024400001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0024400002.jpg}}\nSource: Az-104 T4.apkg #10",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "az"
      },
      {
        id: "B",
        text: "docker"
      },
      {
        id: "C",
        text: "aks"
      },
      {
        id: "D",
        text: "/package"
      },
      {
        id: "E",
        text: "pull"
      }
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
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 233,
    number: 11,
    topic: "Topic 4",
    prompt: "You onboard 10 Azure virtual machines to Azure Automation State Configuration.\n You need to use Azure Automation State Configuration to manage the ongoing consistency of the virtual machine configurations.\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\n Select and Place:\n\n{{img:/exam-media/az-104/T4/0024500001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image916.png}}\nSource: Az-104 T4.apkg #11",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Upload a configuration to Azure Automation State Configuration"
      },
      {
        id: "B",
        text: "Compile a configuration into node configuration"
      },
      {
        id: "C",
        text: "Check the compliance status of the node"
      },
      {
        id: "D",
        text: "Assign tags to the virtual machines"
      },
      {
        id: "E",
        text: "Create a management group"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 234,
    number: 12,
    topic: "Topic 4",
    prompt: "You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine.\n Template1 contains the following text:\n\n{{img:/exam-media/az-104/T4/0024700001.png}}\n\n The variables section in Template1 contains the following text:\n \"location\": \"westeurope\"\n The resources section in Template1 contains the following text:\n\n{{img:/exam-media/az-104/T4/0024700002.png}}\n\n You need to deploy the virtual machine to the West US location by using Template1.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #12",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the location in the resources section to westus"
      },
      {
        id: "B",
        text: "Select West US during the deployment"
      },
      {
        id: "C",
        text: "Modify the location in the variables section to westus"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 235,
    number: 13,
    topic: "Topic 4",
    prompt: "You create an App Service plan named Plan1 and an Azure web app named webapp1.\n You discover that the option to create a staging slot is unavailable.\n You need to create a staging slot for Plan1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #13",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Plan1, scale up the App Service plan"
      },
      {
        id: "B",
        text: "From webapp1, modify the Application settings"
      },
      {
        id: "C",
        text: "From webapp1, add a custom domain"
      },
      {
        id: "D",
        text: "From Plan1, scale out the App Service plan"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 236,
    number: 14,
    topic: "Topic 4",
    prompt: "You plan to move a distributed on-premises app named App1 to an Azure subscription.\n After the planned move, App1 will be hosted on several Azure virtual machines.\n You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance.\n What should you create?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #14",
    type: "single",
    options: [
      {
        id: "A",
        text: "one virtual machine scale set that has 10 virtual machines instances"
      },
      {
        id: "B",
        text: "one Availability Set that has three fault domains and one update domain"
      },
      {
        id: "C",
        text: "one Availability Set that has 10 update domains and one fault domain"
      },
      {
        id: "D",
        text: "one virtual machine scale set that has 12 virtual machines instances"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 237,
    number: 15,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2016.\n You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\n Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #15",
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
    number: 16,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n You receive a notification that VM1 will be affected by maintenance.\n You need to move VM1 to a different host immediately.\n Solution: From the Overview blade, you move the virtual machine to a different subscription.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #16",
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
    id: 239,
    number: 17,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n You receive a notification that VM1 will be affected by maintenance.\n You need to move VM1 to a different host immediately.\n Solution: From the Redeploy blade, you click Redeploy.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #17",
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
    id: 240,
    number: 18,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n You receive a notification that VM1 will be affected by maintenance.\n You need to move VM1 to a different host immediately.\n Solution: From the Update management blade, you click Enable.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #18",
    type: "single",
    options: [
      {
        id: "A",
        text: "Yes"
      },
      {
        id: "B",
        text: "no"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 241,
    number: 19,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a web app named webapp1.\n You need to add a custom domain named www.contoso.com to webapp1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #19",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a DNS record"
      },
      {
        id: "B",
        text: "Add a connection string"
      },
      {
        id: "C",
        text: "Upload a certificate."
      },
      {
        id: "D",
        text: "Stop webapp1."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 242,
    number: 20,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0025300001.png}}\n\n VM1 connects to VNET1.\n You need to connect VM1 to VNET2.\n Solution: You move VM1 to RG2, and then you add a new network interface to VM1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #20",
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
    id: 243,
    number: 21,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0025400001.png}}\n\nVM1 connects to VNET1.\nYou need to connect VM1 to VNET2.\nSolution: You delete VM1. You recreate VM1, and then you create a new network interface for VM1 and connect it to VNET2.\nDoes this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #21",
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
    id: 244,
    number: 22,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0025600001.png}}\n\n VM1 connects to VNET1.\n You need to connect VM1 to VNET2.\n Solution: You turn off VM1, and then you add a new network interface to VM1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #22",
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
    id: 245,
    number: 23,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the quotas shown in the following table.\n\n{{img:/exam-media/az-104/T4/0025700001.png}}\n\n You deploy virtual machines to Subscription1 as shown in the following table.\n\n{{img:/exam-media/az-104/T4/0025700002.png}}\n\n You plan to deploy the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T4/0025700003.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #23",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can deploy VM3 to West US",
        answer: true
      },
      {
        id: "s2",
        text: "You can deploy VM4 to West US",
        answer: false
      },
      {
        id: "s3",
        text: "You can deploy VM5 to West US",
        answer: false
      }
    ]
  },
  {
    id: 246,
    number: 24,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains an Azure Availability Set named WEBPROD-AS-USE2 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0025900001.png}}\n\n You add 14 virtual machines to WEBPROD-AS-USE2.\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0026000001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0026100001.png}}\nSource: Az-104 T4.apkg #24",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. 2"
      },
      {
        id: "B",
        text: "1. 7"
      },
      {
        id: "C",
        text: "2. 2"
      },
      {
        id: "D",
        text: "2. 7"
      },
      {
        id: "E",
        text: "2. 10"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 247,
    number: 25,
    topic: "Topic 4",
    prompt: "You deploy an Azure Kubernetes Service (AKS) cluster named Cluster1 that uses the IP addresses shown in the following table.\n\n{{img:/exam-media/az-104/T4/0026200001.png}}\n\n You need to provide internet users with access to the applications that run in Cluster1.\n Which IP address should you include in the DNS record for Cluster1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #25",
    type: "single",
    options: [
      {
        id: "A",
        text: "131.107.2.1"
      },
      {
        id: "B",
        text: "10.0.10.11"
      },
      {
        id: "C",
        text: "172.17.7.1"
      },
      {
        id: "D",
        text: "192.168.10.2"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 248,
    number: 26,
    topic: "Topic 4",
    prompt: "You have a deployment template named Template1 that is used to deploy 10 Azure web apps.\n You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs.\n What should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #26",
    type: "single",
    options: [
      {
        id: "A",
        text: "five Azure Application Gateways"
      },
      {
        id: "B",
        text: "one App Service plan"
      },
      {
        id: "C",
        text: "10 App Service plans"
      },
      {
        id: "D",
        text: "one Azure Traffic Manager"
      },
      {
        id: "E",
        text: "one Azure Application Gateway"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 249,
    number: 27,
    topic: "Topic 4",
    prompt: "You plan to deploy an Azure container instance by using the following Azure Resource Manager template.\n\n{{img:/exam-media/az-104/T4/0026400001.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the template.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0026500001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0026500002.jpg}}\nSource: Az-104 T4.apkg #27",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. can connect to the container from any device"
      },
      {
        id: "B",
        text: "1. cannot connect to the container"
      },
      {
        id: "C",
        text: "1. can only connect to the container from devices that run Windows"
      },
      {
        id: "D",
        text: "2. the container will restart automatically"
      },
      {
        id: "E",
        text: "2. the container must be redeployed"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 250,
    number: 28,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of-business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size.\n You plan to make the following changes to VM1:\n ✑ Change the size to D8s v3.\n ✑ Add a 500-GB managed disk.\n ✑ Add the Puppet Agent extension.\n ✑ Enable Desired State Configuration Management.\n Which change will cause downtime for VM1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #28",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable Desired State Configuration Management"
      },
      {
        id: "B",
        text: "Add a 500-GB managed disk"
      },
      {
        id: "C",
        text: "Change the size to D8s v3"
      },
      {
        id: "D",
        text: "Add the Puppet Agent extension"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 251,
    number: 29,
    topic: "Topic 4",
    prompt: "You have an app named App1 that runs on an Azure web app named webapp1.\n The developers at your company upload an update of App1 to a Git repository named Git1.\n Webapp1 has the deployment slots shown in the following table.\n\n{{img:/exam-media/az-104/T4/0026700001.png}}\n\n You need to ensure that the App1 update is tested before the update is made available to users.\n Which two actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #29",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Swap the slots"
      },
      {
        id: "B",
        text: "Deploy the App1 update to webapp1-prod, and then test the update"
      },
      {
        id: "C",
        text: "Stop webapp1-prod"
      },
      {
        id: "D",
        text: "Deploy the App1 update to webapp1-test, and then test the update"
      },
      {
        id: "E",
        text: "Stop webapp1-test"
      }
    ],
    correct: [
      "A",
      "D"
    ]
  },
  {
    id: 252,
    number: 30,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that has the following providers registered:\n ✑ Authorization\n ✑ Automation\n ✑ Resources\n ✑ Compute\n ✑ KeyVault\n ✑ Network\n ✑ Storage\n ✑ Billing\n ✑ Web\n Subscription1 contains an Azure virtual machine named VM1 that has the following configurations:\n ✑ Private IP address: 10.0.0.4 (dynamic)\n ✑ Network security group (NSG): NSG1\n ✑ Public IP address: None\n ✑ Availability set: AVSet\n ✑ Subnet: 10.0.0.0/24\n ✑ Managed disks: No\n ✑ Location: East US\n You need to record all the successful and failed connection attempts to VM1.\n Which three actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "D. Register the MicrosoftLogAnalytics provider.\nSource: Az-104 T4.apkg #30",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Enable Azure Network Watcher in the East US Azure region."
      },
      {
        id: "B",
        text: "Add an Azure Network Watcher connection monitor."
      },
      {
        id: "C",
        text: "Enable Azure Network Watcher flow logs."
      },
      {
        id: "D",
        text: "Create an Azure Storage account."
      },
      {
        id: "E",
        text: "Register the Microsoft.Insights resource provider."
      }
    ],
    correct: [
      "C",
      "D",
      "E"
    ]
  },
  {
    id: 253,
    number: 31,
    topic: "Topic 4",
    prompt: "You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #31",
    type: "single",
    options: [
      {
        id: "A",
        text: "Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine."
      },
      {
        id: "B",
        text: "Deploy five virtual machines. Modify the Size setting for each virtual machine."
      },
      {
        id: "C",
        text: "Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode."
      },
      {
        id: "D",
        text: "Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 254,
    number: 32,
    topic: "Topic 4",
    prompt: "You plan to create the Azure web apps shown in the following table.\n\n{{img:/exam-media/az-104/T4/0026900001.jpg}}\n\n What is the minimum number of App Service plans you should create for the web apps?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #32",
    type: "single",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "2"
      },
      {
        id: "C",
        text: "3"
      },
      {
        id: "D",
        text: "4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 255,
    number: 33,
    topic: "Topic 4",
    prompt: "You have a pay-as-you-go Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T4/0027000001-59aaa678ae41664cb64237dce47ee48ed144c013.png}}\n\n You create the budget shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0027100001.jpg}}\n\n The AG1 action group contains a user named   admin@contoso.com   only.\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0027200001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #33",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "VM1 and VM2 are turned off"
      },
      {
        id: "B",
        text: "VM1 and VM2 continue to run"
      },
      {
        id: "C",
        text: "VM1 is turned off, and VM2 continues to run"
      },
      {
        id: "D",
        text: "no email notifications will be sent each month"
      },
      {
        id: "E",
        text: "one email notifications will be sent each month"
      }
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
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 256,
    number: 34,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.\n You need to view the date and time when the resources were created in RG1.\n Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #34",
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
    id: 257,
    number: 35,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0027400001.png}}\n\n VM1 connects to VNET1.\n You need to connect VM1 to VNET2.\n Solution: You create a new network interface, and then you add the network interface to VM1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #35",
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
    id: 258,
    number: 36,
    topic: "Topic 4",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named adatum.com that contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T4/0027500001.png}}\n\n Adatum.com has the following configurations:\n ✑ Users may join devices to Azure AD is set to User1.\n ✑ Additional local administrators on Azure AD joined devices is set to None.\n You deploy Windows 10 to a computer named Computer1. User1 joins Computer1 to adatum.com.\n You need to identify the local Administrator group membership on Computer1.\n Which users are members of the local Administrators group?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #36",
    type: "single",
    options: [
      {
        id: "A",
        text: "User1 only"
      },
      {
        id: "B",
        text: "User2 only"
      },
      {
        id: "C",
        text: "User1 and User2 only"
      },
      {
        id: "D",
        text: "User1, User2, and User3 only"
      },
      {
        id: "E",
        text: "User1, User2, User3, and User4"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 259,
    number: 37,
    topic: "Topic 4",
    prompt: "You have Azure subscriptions named Subscription1 and Subscription2.\n Subscription1 has following resource groups:\n\n{{img:/exam-media/az-104/T4/0027600001.png}}\n\n RG1 includes a web app named App1 in the West Europe location.\n Subscription2 contains the following resource groups:\n\n{{img:/exam-media/az-104/T4/0027600002.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #37",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "App1 can be moved to RG2",
        answer: true
      },
      {
        id: "s2",
        text: "App1 can be moved to RG3",
        answer: true
      },
      {
        id: "s3",
        text: "App1 can be moved to RG4",
        answer: true
      }
    ]
  },
  {
    id: 260,
    number: 38,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the following resource group:\n ✑ Name: RG1\n ✑ Region: West US\n ✑ Tag: `tag1`: `value1`\n You assign an Azure policy named Policy1 to Subscription1 by using the following configurations:\n ✑ Exclusions: None\n ✑ Policy definition: Append a tag and its value to resources\n ✑ Assignment name: Policy1\n ✑ Parameters:\n ✑ Tag name: tag2\n\n Tag value: value2 -\n\n{{img:/exam-media/az-104/T4/0027800009.png}}\n\n After Policy1 is assigned, you create a storage account that has the following configuration:\n ✑ Name: storage1\n ✑ Location: West US\n ✑ Resource group: RG1\n ✑ Tags: `tag3`: `value3`\n You need to identify which tags are assigned to each resource.\n What should you identify? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0027900005.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0028000001.jpg}}\nSource: Az-104 T4.apkg #38",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "\"tag1\":\"value1\" only"
      },
      {
        id: "B",
        text: "\"tag1\":\"value2\" only"
      },
      {
        id: "C",
        text: "\"tag3\":\"value3\" only"
      },
      {
        id: "D",
        text: "\"tag1\":\"value1\" and \"tag3\":\"value3\" only"
      },
      {
        id: "E",
        text: "\"tag2\":\"value2\" and \"tag3\":\"value3\" only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Tags assigned to RG1"
      },
      {
        id: "t2",
        text: "Tags assigned to storage"
      }
    ],
    correct: [
      "t1:A",
      "t2:E"
    ]
  },
  {
    id: 261,
    number: 39,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1.\nIn Subscription1, you create an alert rule named Alert1.\nThe Alert1 action group is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0028100001.jpg}}\n\nAlert1 alert criteria triggered every minute.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n{{img:/exam-media/az-104/T4/0028200001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0028200002.png}}\nSource: Az-104 T4.apkg #39",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "0"
      },
      {
        id: "B",
        text: "4"
      },
      {
        id: "C",
        text: "60"
      },
      {
        id: "D",
        text: "0"
      },
      {
        id: "E",
        text: "12"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Alert1"
      },
      {
        id: "t2",
        text: "Alert2"
      }
    ],
    correct: [
      "t1:C",
      "t2:E"
    ]
  },
  {
    id: 262,
    number: 40,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0028300005.png}}\n\n You create virtual machines in Subscription1 as shown in the following table.\n\n{{img:/exam-media/az-104/T4/0028400001.png}}\n\n You plan to use Vault1 for the backup of as many virtual machines as possible.\n Which virtual machines can be backed up to Vault1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #40",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "VM3 and VMC only"
      },
      {
        id: "C",
        text: "VM1, VM2, VM3, VMA, VMB, and VMC"
      },
      {
        id: "D",
        text: "VM1, VM3, VMA, and VMC only"
      },
      {
        id: "E",
        text: "VM1 and VM3 only"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 263,
    number: 41,
    topic: "Topic 4",
    prompt: "You have an Azure Kubernetes Service (AKS) cluster named AKS1.\n You need to configure cluster autoscaler for AKS1.\n Which two tools should you use? Each correct answer presents a complete solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #41",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "the kubectl command"
      },
      {
        id: "B",
        text: "the az aks command"
      },
      {
        id: "C",
        text: "the Set-AzVm cmdlet"
      },
      {
        id: "D",
        text: "the Azure portal"
      },
      {
        id: "E",
        text: "the Set-AzAks cmdlet"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 264,
    number: 42,
    topic: "Topic 4",
    prompt: "You create the following resources in an Azure subscription:\n ✑ An Azure Container Registry instance named Registry1\n ✑ An Azure Kubernetes Service (AKS) cluster named Cluster1\n You create a container image named App1 on your administrative workstation.\n You need to deploy App1 to Cluster1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #42",
    type: "single",
    options: [
      {
        id: "A",
        text: "Run the docker push command."
      },
      {
        id: "B",
        text: "Create an App Service plan."
      },
      {
        id: "C",
        text: "Run the az acr build command."
      },
      {
        id: "D",
        text: "Run the az aks create command."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 265,
    number: 43,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0028600001.png}}\n\n You need to configure a proximity placement group for VMSS1.\n Which proximity placement groups should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #43",
    type: "single",
    options: [
      {
        id: "A",
        text: "Proximity2 only"
      },
      {
        id: "B",
        text: "Proximity1, Proximity2, and Proximity3"
      },
      {
        id: "C",
        text: "Proximity1 only"
      },
      {
        id: "D",
        text: "Proximity1 and Proximity3 only"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 266,
    number: 44,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.\n You need to view the date and time when the resources were created in RG1.\n Solution: From the Subscriptions blade, you select the subscription, and then click Resource providers.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #44",
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
    id: 267,
    number: 45,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.\n You need to view the date and time when the resources were created in RG1.\n Solution: From the RG1 blade, you click Automation script.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #45",
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
    id: 268,
    number: 46,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates.\n You need to view the date and time when the resources were created in RG1.\n Solution: From the RG1 blade, you click Deployments.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #46",
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
    number: 47,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1.\n You deploy a Linux virtual machine named VM1 to Subscription1.\n You need to monitor the metrics and the logs of VM1.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #47",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure HDInsight"
      },
      {
        id: "B",
        text: "Linux Diagnostic Extension (LAD) 3.0"
      },
      {
        id: "C",
        text: "the AzurePerformanceDiagnostics extension"
      },
      {
        id: "D",
        text: "Azure Analysis Services"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 270,
    number: 48,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.\n You install and configure a web server and a DNS server on VM1.\n VM1 has the effective network security rules shown in the following exhibit:\n\n{{img:/exam-media/az-104/T4/0029000001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0029100001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #48",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. can connect to only the DNS server VM1"
      },
      {
        id: "B",
        text: "1. can connect to only the web server on VM1"
      },
      {
        id: "C",
        text: "1. can connect to the web server and the DNS server on VM1"
      },
      {
        id: "D",
        text: "2. can connect to the web server and the DNS server on VM1"
      },
      {
        id: "E",
        text: "2. can connect to only the web server on VM1"
      }
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
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 271,
    number: 49,
    topic: "Topic 4",
    prompt: "You plan to deploy three Azure virtual machines named VM1, VM2, and VM3. The virtual machines will host a web app named App1.\n You need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable.\n What should you deploy?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #49",
    type: "single",
    options: [
      {
        id: "A",
        text: "all three virtual machines in a single Availability Zone"
      },
      {
        id: "B",
        text: "all virtual machines in a single Availability Set"
      },
      {
        id: "C",
        text: "each virtual machine in a separate Availability Zone"
      },
      {
        id: "D",
        text: "each virtual machine in a separate Availability Set"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 272,
    number: 50,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2019.\n You save VM1 as a template named Template1 to the Azure Resource Manager library.\n You plan to deploy a virtual machine named VM2 from Template1.\n What can you configure during the deployment of VM2?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #50",
    type: "single",
    options: [
      {
        id: "A",
        text: "operating system"
      },
      {
        id: "B",
        text: "administrator username"
      },
      {
        id: "C",
        text: "virtual machine size"
      },
      {
        id: "D",
        text: "resource group"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 273,
    number: 51,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances.\n At the end of each month, CPU usage for VM1 peaks when App1 runs.\n You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month.\n What task should you include in the runbook?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #51",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add the Azure Performance Diagnostics agent to VM1."
      },
      {
        id: "B",
        text: "Modify the VM size property of VM1."
      },
      {
        id: "C",
        text: "Add VM1 to a scale set."
      },
      {
        id: "D",
        text: "Increase the vCPU quota for the subscription."
      },
      {
        id: "E",
        text: "Add a Desired State Configuration (DSC) extension to VM1."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 274,
    number: 52,
    topic: "Topic 4",
    prompt: "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.\n You need to ensure that NGINX is available on all the virtual machines after they are deployed.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #52",
    type: "single",
    options: [
      {
        id: "A",
        text: "Deployment Center in Azure App Service"
      },
      {
        id: "B",
        text: "A Desired State Configuration (DSC) extension"
      },
      {
        id: "C",
        text: "the New-AzConfigurationAssignment cmdlet"
      },
      {
        id: "D",
        text: "a Microsoft Intune device configuration profile"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 275,
    number: 53,
    topic: "Topic 4",
    prompt: "You deploy an Azure Kubernetes Service (AKS) cluster that has the network profile shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0029500003.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0029600001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #53",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1. 10.224.0.0/16"
      },
      {
        id: "B",
        text: "2. 10.224.0.0/16"
      },
      {
        id: "C",
        text: "1. 10.0.0.0/16"
      },
      {
        id: "D",
        text: "2. 10.0.0.0/16"
      },
      {
        id: "E",
        text: "2. 172.17.0.1/16"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 276,
    number: 55,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2019. The VM was deployed using default drive settings.\n You sign in to VM1 as a user named User1 and perform the following actions:\n ✑ Create files on drive C.\n ✑ Create files on drive D.\n ✑ Modify the screen saver timeout.\n ✑ Change the desktop background.\n You plan to redeploy VM1.\n Which changes will be lost after you redeploy VM1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #55",
    type: "single",
    options: [
      {
        id: "A",
        text: "the modified screen saver timeout"
      },
      {
        id: "B",
        text: "the new desktop background"
      },
      {
        id: "C",
        text: "the new files on drive D"
      },
      {
        id: "D",
        text: "the new files on drive C"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 277,
    number: 56,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n You have an on-premises virtual machine named VM1. The settings for VM1 are shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T4/0030300001.png}}\n\n You need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines.\n What should you modify on VM1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #56",
    type: "single",
    options: [
      {
        id: "A",
        text: "the memory"
      },
      {
        id: "B",
        text: "the network adapters"
      },
      {
        id: "C",
        text: "the hard drive"
      },
      {
        id: "D",
        text: "the processor"
      },
      {
        id: "E",
        text: "Integration Services"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 278,
    number: 58,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that is used by several departments at your company. Subscription1 contains the resources in the following table:\n\n{{img:/exam-media/az-104/T4/0030700001.png}}\n\n Another administrator deploys a virtual machine named VM1 and an Azure Storage account named storage2 by using a single Azure Resource Manager template.\n You need to view the template used for the deployment.\n From which blade can you view the template that was used for the deployment?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #58",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1"
      },
      {
        id: "B",
        text: "RG1"
      },
      {
        id: "C",
        text: "storage2"
      },
      {
        id: "D",
        text: "container1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 279,
    number: 59,
    topic: "Topic 4",
    prompt: "You have an Azure web app named App1. App1 has the deployment slots shown in the following table:\n\n{{img:/exam-media/az-104/T4/0030900002.png}}\n\n In webapp1-test, you test several changes to App1.\n You back up App1.\n You swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues.\n You need to revert to the previous version of App1 as quickly as possible.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #59",
    type: "single",
    options: [
      {
        id: "A",
        text: "Redeploy App1"
      },
      {
        id: "B",
        text: "Swap the slots"
      },
      {
        id: "C",
        text: "Clone App1"
      },
      {
        id: "D",
        text: "Restore the backup of App1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 280,
    number: 60,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains two Azure virtual machines VM1 and VM2. VM1 and VM2 run Windows Server\n 2016.\n VM1 is backed up daily by Azure Backup without using the Azure Backup agent.\n VM1 is affected by ransomware that encrypts data.\n You need to restore the latest backup of VM1.\n To which location can you restore the backup? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0031100001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image919.png}}\nSource: Az-104 T4.apkg #60",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "A new Azure virtual machine only"
      },
      {
        id: "C",
        text: "Any Windows computer that has Internet connectivity"
      },
      {
        id: "D",
        text: "VM1 or a new Azure vitual machine only"
      },
      {
        id: "E",
        text: "Any Windows computer that has Internet connectivity"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "file recovery of VM1 to"
      },
      {
        id: "t2",
        text: "restore VM1 to"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 281,
    number: 61,
    topic: "Topic 4",
    prompt: "You plan to back up an Azure virtual machine named VM1.\n You discover that the Backup Pre-Check status displays a status of Warning.\n What is a possible cause of the Warning status?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #61",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 is stopped."
      },
      {
        id: "B",
        text: "VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed."
      },
      {
        id: "C",
        text: "VM1 has an unmanaged disk."
      },
      {
        id: "D",
        text: "A Recovery Services vault is unavailable."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 282,
    number: 62,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n You receive a notification that VM1 will be affected by maintenance.\n You need to move VM1 to a different host immediately.\n Solution: From the Overview blade, you move the virtual machine to a different resource group.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #62",
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
    number: 63,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n You plan to use Azure Resource Manager templates to deploy 50 Azure virtual machines that will be part of the same availability set.\n You need to ensure that as many virtual machines as possible are available if the fabric fails or during servicing.\n How should you configure the template? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0031400001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image920.png}}\nSource: Az-104 T4.apkg #63",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "0"
      },
      {
        id: "B",
        text: "2"
      },
      {
        id: "C",
        text: "3"
      },
      {
        id: "D",
        text: "20"
      },
      {
        id: "E",
        text: "10"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "platformFaultDomainCount"
      },
      {
        id: "t2",
        text: "platformUpdateDomainCount"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 284,
    number: 64,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2016.\n You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\n Solution: You create an Azure Log Analytics workspace and configure the Agent configuration settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #64",
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
    id: 285,
    number: 65,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n You deploy a virtual machine scale set that is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0031800001.png}}\n\n Use the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0031900001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0032000001.jpg}}\nSource: Az-104 T4.apkg #65",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "00 AM : 2"
      },
      {
        id: "B",
        text: "00 AM : 3"
      },
      {
        id: "C",
        text: "00 AM : 5"
      },
      {
        id: "D",
        text: "00 AM : 3"
      },
      {
        id: "E",
        text: "00 AM : 1"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "9"
      },
      {
        id: "t2",
        text: "10"
      }
    ],
    correct: [
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 286,
    number: 66,
    topic: "Topic 4",
    prompt: "You have web apps in the West US, Central US and East US Azure regions.\n You have the App Service plans shown in the following table.\n\n{{img:/exam-media/az-104/T4/0032100001.png}}\n\n You plan to create an additional App Service plan named ASP5 that will use the Linux operating system.\n You need to identify in which of the currently used locations you can deploy ASP5.\n What should you recommend?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #66",
    type: "single",
    options: [
      {
        id: "A",
        text: "West US, Central US, or East US"
      },
      {
        id: "B",
        text: "Central US only"
      },
      {
        id: "C",
        text: "East US only"
      },
      {
        id: "D",
        text: "West US only"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 287,
    number: 67,
    topic: "Topic 4",
    prompt: "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.\n You need to ensure that NGINX is available on all the virtual machines after they are deployed.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #67",
    type: "single",
    options: [
      {
        id: "A",
        text: "the New-AzConfigurationAssignment cmdlet"
      },
      {
        id: "B",
        text: "a Desired State Configuration (DSC) extension"
      },
      {
        id: "C",
        text: "Azure Active Directory (Azure AD) Application Proxy"
      },
      {
        id: "D",
        text: "Azure Application Insights"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 288,
    number: 69,
    topic: "Topic 4",
    prompt: "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\n You need to deploy a YAML file to AKS1.\n Solution: From Azure Cloud Shell, you run az aks.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #69",
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
    id: 289,
    number: 70,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2016.\n You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\n Solution: You create an Azure Log Analytics workspace and configure the data settings. You add the Microsoft Monitoring Agent VM extension to VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #70",
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
    id: 290,
    number: 71,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1 that runs Windows Server 2016.\n You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\n Solution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in\n Azure Monitor and specify the Log Analytics workspace as the source.\n Does this meet the goal",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #71",
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
    id: 291,
    number: 72,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0032600001.png}}\n\n All virtual machines run Windows Server 2016.\n On VM1, you back up a folder named Folder1 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/0032600002.jpg}}\n\n You plan to restore the backup to a different virtual machine.\n You need to restore the backup to VM2.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #72",
    type: "single",
    options: [
      {
        id: "A",
        text: "From VM1, install the Windows Server Backup feature."
      },
      {
        id: "B",
        text: "From VM2, install the Microsoft Azure Recovery Services Agent."
      },
      {
        id: "C",
        text: "From VM1, install the Microsoft Azure Recovery Services Agent."
      },
      {
        id: "D",
        text: "From VM2, install the Windows Server Backup feature."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 292,
    number: 73,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n You need to use an Azure Resource Manager (ARM) template to create a virtual machine that will have multiple data disks.\n How should you complete the template? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0032800001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0032900001.png}}\nSource: Az-104 T4.apkg #73",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "copy"
      },
      {
        id: "B",
        text: ": copyIndex"
      },
      {
        id: "C",
        text: "copy"
      },
      {
        id: "D",
        text: "copyIndex"
      },
      {
        id: "E",
        text: "dependsOn"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "storageProfile"
      },
      {
        id: "t2",
        text: "lun"
      }
    ],
    correct: [
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 293,
    number: 74,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0033000001.png}}\n\n Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.\n You need to create a new network interface named NIC2 for VM1.\n Solution: You create NIC2 in RG1 and West US.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #74",
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
    id: 294,
    number: 75,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0033100001.png}}\n\n Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.\n You need to create a new network interface named NIC2 for VM1.\n Solution: You create NIC2 in RG2 and Central US.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #75",
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
    id: 295,
    number: 76,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/0033200001.png}}\n\n Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface named NIC1.\n You need to create a new network interface named NIC2 for VM1.\n Solution: You create NIC2 in RG2 and West US.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #76",
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
    id: 296,
    number: 77,
    topic: "Topic 4",
    prompt: "You develop the following Azure Resource Manager (ARM) template to create a resource group and deploy an Azure Storage account to the resource group.\n\n{{img:/exam-media/az-104/T4/0033400001.jpg}}\n\n Which cmdlet should you run to deploy the template?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #77",
    type: "single",
    options: [
      {
        id: "A",
        text: "New-AzResourc"
      },
      {
        id: "B",
        text: "New-AzResourceGroupDeployment"
      },
      {
        id: "C",
        text: "New-AzTenantDeployment"
      },
      {
        id: "D",
        text: "New-AzDeployment"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 297,
    number: 78,
    topic: "Topic 4",
    prompt: "You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2.\n You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup.\n What should you create first, and what should you use to exclude Folder2? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0033600001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0033700001.jpg}}\nSource: Az-104 T4.apkg #78",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "An Azure storage account"
      },
      {
        id: "B",
        text: "A Bakup vault"
      },
      {
        id: "C",
        text: "A Revocery Services vault"
      },
      {
        id: "D",
        text: "a_backup.filter file"
      },
      {
        id: "E",
        text: "a backup policy"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "First create"
      },
      {
        id: "t2",
        text: "To exclude Folder2, use"
      }
    ],
    correct: [
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 298,
    number: 79,
    topic: "Topic 4",
    prompt: "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template.\n You need to ensure that NGINX is available on all the virtual machines after they are deployed.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #79",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Publish-AzVMDscConfiguration cmdlet"
      },
      {
        id: "B",
        text: "Azure Application Insights"
      },
      {
        id: "C",
        text: "Azure Custom Script Extension"
      },
      {
        id: "D",
        text: "a Microsoft Endpoint Manager device configuration profile"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 299,
    number: 80,
    topic: "Topic 4",
    prompt: "You have an Azure subscription. The subscription contains a virtual machine that runs Windows 10.\n You need to join the virtual machine to an Active Directory domain.\n How should you complete the Azure Resource Manager (ARM) template? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T4/0034000001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/0034100001.jpg}}\nSource: Az-104 T4.apkg #80",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "\"type\": \"Extensions\""
      },
      {
        id: "B",
        text: "\"type\": \"Microsoft.Computer/VirtualMachines\""
      },
      {
        id: "C",
        text: "\"type\": \"Microsoft.Computer/VirtualMachines/extensions\""
      },
      {
        id: "D",
        text: "\"ProtectedSettings\":{"
      },
      {
        id: "E",
        text: "\"Settings\":{"
      }
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
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 300,
    number: 81,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains three virtual machines named VM1, VM2, and VM3. All the virtual machines are in an availability set named AVSet1.\n\n You need to scale up VM1 to a new virtual machine size, but the intended size is unavailable.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #81",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a proximity placement group."
      },
      {
        id: "B",
        text: "Deallocate VM1."
      },
      {
        id: "C",
        text: "Convert AvSet1 into a managed availability set."
      },
      {
        id: "D",
        text: "Shut down VM3 and VM3."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 301,
    number: 82,
    topic: "Topic 4",
    prompt: "You are creating an Azure Kubernetes Services (AKS) cluster as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/image593.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T4/image594.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image595.png}}\nSource: Az-104 T4.apkg #82",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "create windows container in AKS1: enable virtual nodes"
      },
      {
        id: "B",
        text: "create windows container in AKS1: modify the Kubernetes verison setting"
      },
      {
        id: "C",
        text: "create windows container in AKS1: modify the Network configuration setting"
      },
      {
        id: "D",
        text: "integrate AKS with azure container: AKS-managed Entra ID"
      },
      {
        id: "E",
        text: "integrate AKS with azure container: authentication method"
      }
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
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 302,
    number: 83,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains an Azure Kubernetes Service (AKS) cluster named Cluster1. Cluster1 hosts a node pool named Pool1 that has four nodes.\n\n You need to perform a coordinated upgrade of Cluster1. The solution must meet the following requirements:\n\n • Deploy two new nodes to perform the upgrade.\n • Minimize costs.\n\n How should you complete the command? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T4/image596.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image921.png}}\nSource: Az-104 T4.apkg #83",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "add"
      },
      {
        id: "B",
        text: "get-update"
      },
      {
        id: "C",
        text: "updates"
      },
      {
        id: "D",
        text: "--max-count 2"
      },
      {
        id: "E",
        text: "--max-surge 2"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 303,
    number: 84,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You create the following file named Deploy.json.\n\n{{img:/exam-media/az-104/T4/image598.png}}\n\n You connect to the subscription and run the following commands.\n\n{{img:/exam-media/az-104/T4/image599.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #84",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "The commands will create four new resources",
        answer: true
      },
      {
        id: "s2",
        text: "The commands will create storage accounts int the West US Azure region",
        answer: false
      },
      {
        id: "s3",
        text: "The first storace account that is created will have a prefix of 0",
        answer: true
      }
    ]
  },
  {
    id: 304,
    number: 85,
    topic: "Topic 4",
    prompt: "You have an Azure container registry named Registry1 that contains an image named image1.\n\n You receive an error message when you attempt to deploy a container instance by using image1.\n\n You need to be able to deploy a container instance by using image1.\n\n Solution: You set Admin user to Enable for Registry1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #85",
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
    id: 305,
    number: 86,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a resource group named RG1.\n\n You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements:\n\n • Deploy new resources to RG1.\n • Remove all the existing resources from RG1 before deploying the new resources.\n\n How should you complete the command? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T4/image602.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image603.png}}\nSource: Az-104 T4.apkg #86",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "params.json: -QueryString"
      },
      {
        id: "B",
        text: "params.json: -ResourceGroupName"
      },
      {
        id: "C",
        text: "params.json: -Tag"
      },
      {
        id: "D",
        text: "-Mode Complete"
      },
      {
        id: "E",
        text: "-Mode Incremental"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 306,
    number: 87,
    topic: "Topic 4",
    prompt: "You have an Azure App Service web app named app1.\n\n You configure autoscaling as shown in following exhibit.\n\n{{img:/exam-media/az-104/T4/image604.png}}\n\n You configure the autoscale rule criteria as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/image605.png}}\n\n Use the drop-down menus to select the answer choice that answers each question based on the information presented in the graphic.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T4/image606.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image607.png}}\nSource: Az-104 T4.apkg #87",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "1 instance"
      },
      {
        id: "B",
        text: "2 instances"
      },
      {
        id: "C",
        text: "1 minute"
      },
      {
        id: "D",
        text: "5 minutes"
      },
      {
        id: "E",
        text: "15 minutes"
      }
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
      "t1:B",
      "t2:E"
    ]
  },
  {
    id: 307,
    number: 88,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You plan to deploy the Azure container instances shown in the following table.\n\n{{img:/exam-media/az-104/T4/image643.png}}\n\n Which instances can you deploy to a container group?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #88",
    type: "single",
    options: [
      {
        id: "A",
        text: "Instance1 only"
      },
      {
        id: "B",
        text: "Instance2 only"
      },
      {
        id: "C",
        text: "Instance1 and Instance2 only"
      },
      {
        id: "D",
        text: "Instance3 and Instance4 only"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 308,
    number: 90,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that has the public IP addresses shown in the following table.\n\n{{img:/exam-media/az-104/T4/image653.png}}\n\n You plan to deploy an Instance of Azure Firewall Premium named FW1.\n\n Which IP addresses can you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #90",
    type: "single",
    options: [
      {
        id: "A",
        text: "IP2 only"
      },
      {
        id: "B",
        text: "IP1 and IP2 only"
      },
      {
        id: "C",
        text: "IP1, IP2, and IP5 only"
      },
      {
        id: "D",
        text: "IP1, IP2, IP4, and IP5 only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 309,
    number: 91,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template.\n\n How should you complete the template? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T4/image676.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image677.png}}\nSource: Az-104 T4.apkg #91",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "dependsOn: reference"
      },
      {
        id: "B",
        text: "dependsOn: resourceId"
      },
      {
        id: "C",
        text: "storageProfile: Array"
      },
      {
        id: "D",
        text: "storageProfile: Image"
      },
      {
        id: "E",
        text: "storageProfile: ImageReference"
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 310,
    number: 92,
    topic: "Topic 4",
    prompt: "You need to configure a new Azure App Service app named WebApp1. The solution must meet the following requirements:\n\n • WebApp1 must be able to verify a custom domain name of app.contoso.com.\n • WebApp1 must be able to automatically scale up to eight instances.\n • Costs and administrative effort must be minimized.\n\n Which pricing plan should you choose, and which type of record should you use to verify the domain? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T4/image686.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image687.png}}\nSource: Az-104 T4.apkg #92",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Basic"
      },
      {
        id: "B",
        text: "Shared"
      },
      {
        id: "C",
        text: "Standard"
      },
      {
        id: "D",
        text: "AAAA"
      },
      {
        id: "E",
        text: "TXT"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 311,
    number: 93,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T4/image713.png}}\n\n You create an Azure Compute Gallery named ComputeGallery1 as shown in the Azure Compute Gallery exhibit. (Click the Azure Compute Gallery tab.)\n\n{{img:/exam-media/az-104/T4/image714.png}}\n\n In ComputeGallery1, you create a virtual machine image definition named Image1 as shown in the image definition exhibit. (Click the Image Definition tab.)\n\n{{img:/exam-media/az-104/T4/image715.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No,\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #93",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "The operating system disk of VM1 can be used as a source for a version of Image1",
        answer: true
      },
      {
        id: "s2",
        text: "The operating system disk of VM2 can be used as a source for a version of Image1",
        answer: true
      },
      {
        id: "s3",
        text: "The operating system disk of VM3 can be used as a source for a version of Image1",
        answer: true
      }
    ]
  },
  {
    id: 312,
    number: 94,
    topic: "Topic 4",
    prompt: "You plan to create the Azure web apps shown in the following table.\n\n{{img:/exam-media/az-104/T4/image718.png}}\n\n What is the minimum number of App Service plans you should create for the web apps?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #94",
    type: "single",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "2"
      },
      {
        id: "C",
        text: "3"
      },
      {
        id: "D",
        text: "4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 313,
    number: 85,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resource groups shown in the following table.\n\n{{img:/exam-media/az-104/T4/image719.png}}\n\n You create the following Azure Resource Manager (ARM) template named deploy.json.\n\n{{img:/exam-media/az-104/T4/image720.png}}\n\n You deploy the template by running the following cmdlet.\n\n{{img:/exam-media/az-104/T4/image721.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #85",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "The template creates a resource named RG0 in the East US Azure region",
        answer: true
      },
      {
        id: "s2",
        text: "The template creates four new resource groups",
        answer: false
      },
      {
        id: "s3",
        text: "The template creates a resource named RG3 in the East US Azure region",
        answer: false
      }
    ]
  },
  {
    id: 314,
    number: 96,
    topic: "Topic 4",
    prompt: "You have an Azure App Service app named App1 that contains two running instances.\n\n You have an autoscale rule configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/image724.png}}\n\n For the Instance limits scale condition setting, you set Maximum to 5.\n\n During a 30-minute period, App1 uses 80 percent of the available memory.\n\n What is the maximum number of instances for App1 during the 30-minute period?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #96",
    type: "single",
    options: [
      {
        id: "A",
        text: "2"
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
        text: "5"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 315,
    number: 97,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the container images shown in the following table.\n\n{{img:/exam-media/az-104/T4/image725.png}}\n\n You plan to use the following services:\n\n • Azure Container Instances\n • Azure Container Apps\n • Azure App Service\n\n In which services can you run the images? To answer, select the options in the answer area.\n\n NOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T4/image726.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image727.png}}\nSource: Az-104 T4.apkg #97",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Image1: Azure Container Instances only"
      },
      {
        id: "B",
        text: "Image2: Azure Container Instances only"
      },
      {
        id: "C",
        text: "Image1: Azure Container Instances and App Services only"
      },
      {
        id: "D",
        text: "Image2: Azure Container Instances and App Services only"
      },
      {
        id: "E",
        text: "Image2: Azure Container Instances, Azure Container Apps, and App Services only"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 316,
    number: 98,
    topic: "Topic 4",
    prompt: "You have an Azure AD tenant named contoso.com.\n\n You have an Azure subscription that contains an Azure App Service web app named App1 and an Azure key vault named KV1. KV1 contains a wildcard certificate for contoso.com.\n\n You have a user named   user1@contoso.com   that is assigned the Owner role for App1 and KV1.\n\n You need to configure App1 to use the wildcard certificate of KV1.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #98",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an access policy for KV1 and assign the Microsoft Azure App Service principal to the policy."
      },
      {
        id: "B",
        text: "Assign a managed user identity to App1."
      },
      {
        id: "C",
        text: "Configure KV1 to use the role-based access control (RBAC) authorization system."
      },
      {
        id: "D",
        text: "Create an access policy for KV1 and assign the policy to User1."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 317,
    number: 99,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You plan to deploy the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/image767.png}}\n\n You need to create a single Azure Resource Manager (ARM) template that will be used to deploy the resources.\n\n Which resource should be added to the dependsOn section for VM1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #99",
    type: "single",
    options: [
      {
        id: "A",
        text: "VNET1"
      },
      {
        id: "B",
        text: "NIC1"
      },
      {
        id: "C",
        text: "IP1"
      },
      {
        id: "D",
        text: "NSG1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 318,
    number: 100,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You create the following Azure Resource Manager (ARM) template named Template.json.\n\n{{img:/exam-media/az-104/T4/image786.png}}\n\n You need to deploy Template.json.\n\n Which PowerShell cmdlet should you run from Azure Cloud Shell?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #100",
    type: "single",
    options: [
      {
        id: "A",
        text: "New-AzSubscriptionDeployment"
      },
      {
        id: "B",
        text: "New-AzManagementGroupDeployment"
      },
      {
        id: "C",
        text: "New-AzResourceGroupDeployment"
      },
      {
        id: "D",
        text: "New-AzTenantDeployment"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 319,
    number: 101,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a resource group named RG1.\n\n You plan to create a storage account named storage1.\n\n You have a Bicep file named File1.\n\n You need to modify File1 so that it can be used to automate the deployment of storage1 to RG1.\n\n Which property should you modify?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #101",
    type: "single",
    options: [
      {
        id: "A",
        text: "kind"
      },
      {
        id: "B",
        text: "scope"
      },
      {
        id: "C",
        text: "sku"
      },
      {
        id: "D",
        text: "location"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 320,
    number: 102,
    topic: "Topic 4",
    prompt: "Your company purchases a new Azure subscription.\n\n You create a file named Deploy.json as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T4/image787.png}}\n\n You connect to the subscription and run the following cmdlet.\n\n New-AzDeployment -Location westus -TemplateFile “deploy.json”\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #102",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can deploy a virtual machine to RG1",
        answer: true
      },
      {
        id: "s2",
        text: "You can deploy a virtual machine to RG2",
        answer: false
      },
      {
        id: "s3",
        text: "You can manually create a resource group named RG3",
        answer: true
      }
    ]
  },
  {
    id: 321,
    number: 103,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/image790.png}}\n\n You need to configure a proximity placement group for VMSS1.\n\n Which proximity placement groups should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #103",
    type: "single",
    options: [
      {
        id: "A",
        text: "Proximity2 only"
      },
      {
        id: "B",
        text: "Proximity1, Proximity2, and Proximity3"
      },
      {
        id: "C",
        text: "Proximity1 only"
      },
      {
        id: "D",
        text: "Proximity1 and Proximity3 only"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 322,
    number: 104,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T4/image809.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T4/image810.png}}\n\n The subscription contains the Azure App Service web apps shown in the following table.\n\n{{img:/exam-media/az-104/T4/image811.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #104",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "WebApp1 can communicate with VM2",
        answer: true
      },
      {
        id: "s2",
        text: "NSG1 controls inbound traffic to WebApp1",
        answer: false
      },
      {
        id: "s3",
        text: "WebApp2 can communicate with VM1",
        answer: false
      }
    ]
  },
  {
    id: 323,
    number: 105,
    topic: "Topic 4",
    prompt: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/image814.png}}\n\n You create virtual machines in Subscription1 as shown in the following table.\n\n{{img:/exam-media/az-104/T4/image815.png}}\n\n You plan to use Vault1 for the backup of as many virtual machines as possible.\n\n Which virtual machines can be backed up to Vault1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #105",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "VM3 and VMC only"
      },
      {
        id: "C",
        text: "VM1, VM2, VM3, VMA, VMB, and VMC"
      },
      {
        id: "D",
        text: "VM1, VM3, VMA, and VMC only"
      },
      {
        id: "E",
        text: "VM1 and VM3 only"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 324,
    number: 106,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains an Azure container registry named ContReg1.\n\n You enable the Admin user for ContReg1.\n\n Which username can you use to sign in to ContReg1?",
    keySource: "domain",
    explanation: "Source: Az-104 T4.apkg #106",
    type: "single",
    options: [
      {
        id: "A",
        text: "admin"
      },
      {
        id: "B",
        text: "administratir"
      },
      {
        id: "C",
        text: "ContReg1"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 325,
    number: 107,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You plan to create an Azure container registry named ContReg1.\n\n You need to ensure that you can push and pull signed images for ContReg1.\n\n What should you do for ContReg1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #107",
    type: "single",
    options: [
      {
        id: "A",
        text: "Enable encryption by using a customer-managed key."
      },
      {
        id: "B",
        text: "Create a connected registry."
      },
      {
        id: "C",
        text: "Add a token."
      },
      {
        id: "D",
        text: "Enable content trust."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 326,
    number: 108,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that has the Azure container registries shown in the following table.\n\n{{img:/exam-media/az-104/T4/image829.png}}\n\n You plan to use ACR Tasks and configure private endpoint connections.\n\n Which container registries support ACR Tasks and private endpoints? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T4/image830.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T4/image831.png}}\nSource: Az-104 T4.apkg #108",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "ACR Task: ContReg1 only"
      },
      {
        id: "B",
        text: "Private endpoints: ContReg1 only"
      },
      {
        id: "C",
        text: "ACR Task: ContReg1and ContReg2 only"
      },
      {
        id: "D",
        text: "ACR Task: ContReg1, ContReg2, and ContReg3"
      },
      {
        id: "E",
        text: "Private endpoints: ContReg1, ContReg2, and ContReg3"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 327,
    number: 109,
    topic: "Topic 4",
    prompt: "You plan to deploy several Azure virtual machines that will run Windows Server 2022 in a virtual machine scale set by using an Azure Resource Manager template.\n\n You need to ensure that NGINX is available on all the virtual machines after they are deployed.\n\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #109",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Custom Script Extension"
      },
      {
        id: "B",
        text: "Deployment Center in Azure App Service"
      },
      {
        id: "C",
        text: "Microsoft Entra Application Proxy"
      },
      {
        id: "D",
        text: "the Publish-AzVMDscConfiguration cmdlet"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 328,
    number: 110,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that contains a container group named Group1. Group1 contains two Azure container instances as shown in the following table.\n\n{{img:/exam-media/az-104/T4/image832.png}}\n\n You need to ensure that container2 can use CPU resources without negatively affecting container1.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #110",
    type: "single",
    options: [
      {
        id: "A",
        text: "Increase the resource limit of container1 to three CPUs."
      },
      {
        id: "B",
        text: "Increase the resource limit of container2 to six CPUs."
      },
      {
        id: "C",
        text: "Remove the resource limit for both containers."
      },
      {
        id: "D",
        text: "Decrease the resource limit of container2 to two CPUs."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 329,
    number: 111,
    topic: "Topic 4",
    prompt: "You have an Azure subscription.\n\n You plan to deploy a container.\n\n You need to recommend which Azure services can scale the container automatically.\n\n What should you recommend?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #111",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Container Apps only"
      },
      {
        id: "B",
        text: "Azure Container Instances only"
      },
      {
        id: "C",
        text: "Azure Container Apps or Azure App Service only"
      },
      {
        id: "D",
        text: "Azure Container Instances or Azure App Service only"
      },
      {
        id: "E",
        text: "Azure Container Apps, Azure Container Instances, or Azure App Service"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 330,
    number: 112,
    topic: "Topic 4",
    prompt: "You have an Azure subscription that uses Azure Container Instances.\n\n You have a computer that has Azure Command-Line Interface (CLI) and Docker installed.\n\n You create a container image named image1.\n\n You need to provision a new Azure container registry and add image1 to the registry.\n\n Which command should you run for each requirement? To answer, select the options in the answer area.\n\n NOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T4/image833.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #112",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "container registry: az acr build"
      },
      {
        id: "B",
        text: "container registry: az acr create"
      },
      {
        id: "C",
        text: "container registry: az container create"
      },
      {
        id: "D",
        text: "image1 to the registry: docker pull"
      },
      {
        id: "E",
        text: "image1 to the registry: docker push"
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 331,
    number: 113,
    topic: "Topic 4",
    prompt: "You have an Azure container registry named Registry1 that contains an image named image1.\n\n You receive an error message when you attempt to deploy a container instance by using image1.\n\n You need to be able to deploy a container instance by using image1.\n\n Solution: You assign the AcrPull role to ACR-Tasks-Network for Registry1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #113",
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
    id: 332,
    number: 114,
    topic: "Topic 4",
    prompt: "You have an Azure container registry named Registry1 that contains an image named image1.\n\n You receive an error message when you attempt to deploy a container instance by using image1.\n\n You need to be able to deploy a container instance by using image1.\n\n Solution: You select Use dedicated data endpoint for Registry1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #114",
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
    id: 333,
    number: 115,
    topic: "Topic 4",
    prompt: "You have an Azure container registry named Registry1 that contains an image named image1.\n\n You receive an error message when you attempt to deploy a container instance by using image1.\n\n You need to be able to deploy a container instance by using image1.\n\n Solution: You create a private endpoint connection for Registry1.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #115",
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
    id: 334,
    number: 116,
    topic: "Topic 4",
    prompt: "You have a Standard Azure App Service plan named Plan1.\n\n You need to ensure that Plan1 will scale automatically when the CPU usage of the web app exceeds 80 percent.\n\n What should you select for Plan1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #116",
    type: "single",
    options: [
      {
        id: "A",
        text: "Automatic in the Scale out method settings"
      },
      {
        id: "B",
        text: "Rules Based in the Scale out method settings"
      },
      {
        id: "C",
        text: "Premium P1 in the Scale up (App Service plan) settings"
      },
      {
        id: "D",
        text: "Standard S1 in the Scale up (App Service plan) settings"
      },
      {
        id: "E",
        text: "Manual in the Scale out method settings"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 335,
    number: 335,
    topic: "Topic 4",
    prompt: "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\n To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\n At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n To start the case study -\n To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\n Overview -\n\n ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\n Existing Environment -\n\n Azure Environment -\n\n ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T4/image865.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T4/image866.png}}\n\n The subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T4/image867.png}}\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/image868.png}}\n\n Azure Key Vault -\n\n The subscription contains an Azure key vault named Vault1.\n\n Vault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T4/image869.png}}\n\n Vault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T4/image870.png}}\n\n Microsoft Entra Environment -\n\n ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T4/image871.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T4/image872.png}}\n\n The adatum.com tenant has a custom security attribute named Attribute1.\n\n Planned Changes -\n\n ADatum plans to implement the following changes:\n\n • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n • Whenever possible, use directories to organize storage account content.\n • Grant User1 the permissions required to link Zone1 to VNet1.\n • Assign Attribute1 to supported adatum.com resources.\n • In storage2, create an encryption scope named Scope1.\n • Deploy new containers by using Image1 or Image2.\n\n Technical Requirements -\n\n ADatum must meet the following technical requirements:\n\n • Use TLS for WebApp1.\n • Follow the principle of least privilege.\n • Grant permissions at the required scope only.\n • Ensure that Scope1 is used to encrypt storage services.\n • Use Azure Backup to back up cont1 and share1 as frequently as possible.\n • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\n You need to configure WebApp1 to meet the technical requirements.\n\n Which certificate can you use from Vault1?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Cert1 only"
      },
      {
        id: "B",
        text: "Cert1 or Cert2 only"
      },
      {
        id: "C",
        text: "Cert1 or Cert3 only"
      },
      {
        id: "D",
        text: "Cert3 or Cert4 only"
      },
      {
        id: "E",
        text: "Cert1, Cert2 Cert3, or Cert4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 336,
    number: 118,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n\n You receive a notification that VM1 will be affected by maintenance.\n\n You need to move VM1 to a different host immediately.\n\n Solution: From the resource group blade, move VM1 to another subscription.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #118",
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
    id: 337,
    number: 119,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n\n You receive a notification that VM1 will be affected by maintenance.\n\n You need to move VM1 to a different host immediately.\n\n Solution: From the VM1 Redeploy + reapply blade, you select Redeploy.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #119",
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
    id: 338,
    number: 120,
    topic: "Topic 4",
    prompt: "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\n\n You receive a notification that VM1 will be affected by maintenance.\n\n You need to move VM1 to a different host immediately.\n\n Solution: From the VM1 Updates blade, select One-time update.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #120",
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
    number: 121,
    topic: "Topic 4",
    prompt: "This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\n To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\n At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n To start the case study -\n To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\n Overview -\n\n ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\n Existing Environment -\n\n Azure Environment -\n\n ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T4/image865.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T4/image866.png}}\n\n The subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T4/image867.png}}\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T4/image868.png}}\n\n Azure Key Vault -\n\n The subscription contains an Azure key vault named Vault1.\n\n Vault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T4/image869.png}}\n\n Vault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T4/image870.png}}\n\n Microsoft Entra Environment -\n\n ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T4/image871.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T4/image872.png}}\n\n The adatum.com tenant has a custom security attribute named Attribute1.\n\n Planned Changes -\n\n ADatum plans to implement the following changes:\n\n • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n • Whenever possible, use directories to organize storage account content.\n • Grant User1 the permissions required to link Zone1 to VNet1.\n • Assign Attribute1 to supported adatum.com resources.\n • In storage2, create an encryption scope named Scope1.\n • Deploy new containers by using Image1 or Image2.\n\n Technical Requirements -\n\n ADatum must meet the following technical requirements:\n\n • Use TLS for WebApp1.\n • Follow the principle of least privilege.\n • Grant permissions at the required scope only.\n • Ensure that Scope1 is used to encrypt storage services.\n • Use Azure Backup to back up cont1 and share1 as frequently as possible.\n • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\n You need to meet the technical requirements for the KEK.\n\n Which PowerShell cmdlet and key should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T4.apkg #121",
    type: "single",
    options: [
      {
        id: "A",
        text: "Set-AzVMDiskEncryptionExtension and Key2."
      },
      {
        id: "B",
        text: "Set-AzDiskEncryptionKey and Key2."
      },
      {
        id: "C",
        text: "Set-AzDiskDiskEncryptionKey and Key1"
      },
      {
        id: "D",
        text: "Set-AzVMDiskEncryptionExtension and Key1."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 340,
    number: 1,
    topic: "Topic 5",
    prompt: "You have an Azure subscription named Sub1.\n You plan to deploy a multi-tiered application that will contain the tiers shown in the following table.\n\n{{img:/exam-media/az-104/T5/0034700001.png}}\n\n You need to recommend a networking solution to meet the following requirements:\n ✑ Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines.\n ✑ Protect the web servers from SQL injection attacks.\n Which Azure resource should you recommend for each requirement? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T5/0034800001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #1",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "1. An internal load balancer"
      },
      {
        id: "B",
        text: "2. an application gateway that uses the WAF tier"
      },
      {
        id: "C",
        text: "1.  an application gateway that uses the WAF tier"
      },
      {
        id: "D",
        text: "2. a network security group (NSG)"
      },
      {
        id: "E",
        text: "1. a public load balancer"
      }
    ],
    correct: [
      "A",
      "B"
    ]
  },
  {
    id: 341,
    number: 2,
    topic: "Topic 5",
    prompt: "Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter.\n You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered.\n You need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters.\n What should you create?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #2",
    type: "single",
    options: [
      {
        id: "A",
        text: "three Azure Application Gateways and one On-premises data gateway"
      },
      {
        id: "B",
        text: "three virtual hubs and one virtual WAN"
      },
      {
        id: "C",
        text: "three virtual WANs and one virtual hub"
      },
      {
        id: "D",
        text: "three On-premises data gateways and one Azure Application Gateway"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 342,
    number: 3,
    topic: "Topic 5",
    prompt: "You plan to deploy five virtual machines to a virtual network subnet.\n Each virtual machine will have a public IP address and a private IP address.\n Each virtual machine requires the same inbound and outbound security rules.\n What is the minimum number of network interfaces and network security groups that you require? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0035000001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #3",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Minimum number of network interfaces: 5"
      },
      {
        id: "B",
        text: "Minimum number of network interfaces: 10"
      },
      {
        id: "C",
        text: "Minimum number of NSG: 1"
      },
      {
        id: "D",
        text: "Minimum number of NSG: 5"
      },
      {
        id: "E",
        text: "Minimum number of NSG: 10"
      }
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
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 343,
    number: 4,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0035200001.png}}\n\n LB1 is configured as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0035200002.png}}\n\n You plan to create new inbound NAT rules that meet the following requirements:\n ✑ Provide Remote Desktop access to VM1 from the internet by using port 3389.\n ✑ Provide Remote Desktop access to VM2 from the internet by using port 3389.\n What should you create on LB1 before you can create the new inbound NAT rules?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #4",
    type: "single",
    options: [
      {
        id: "A",
        text: "a frontend IP address"
      },
      {
        id: "B",
        text: "a load balancing rule"
      },
      {
        id: "C",
        text: "a health probe"
      },
      {
        id: "D",
        text: "a backend pool"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 344,
    number: 5,
    topic: "Topic 5",
    prompt: "You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0035300001.png}}\n\n You create a private Azure DNS zone named adatum.com. You configure the adatum.com zone to allow auto registration from VNET1.\n Which A records will be added to the adatum.com zone for each virtual machine? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0035400001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #5",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "None"
      },
      {
        id: "B",
        text: "Private IP address only"
      },
      {
        id: "C",
        text: "Private IP address only"
      },
      {
        id: "D",
        text: "Public IP address only"
      },
      {
        id: "E",
        text: "Private and public IP address only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "VM1"
      },
      {
        id: "t2",
        text: "VM2"
      }
    ],
    correct: [
      "t1:B",
      "t2:C"
    ]
  },
  {
    id: 345,
    number: 6,
    topic: "Topic 5",
    prompt: "You have an Azure virtual network named VNet1 that connects to your on-premises network by using a site-to-site VPN. VNet1 contains one subnet named\n Sunet1.\n Subnet1 is associated to a network security group (NSG) named NSG1. Subnet1 contains a basic internal load balancer named ILB1. ILB1 has three Azure virtual machines in the backend pool.\n You need to collect data about the IP addresses that connects to ILB1. You must be able to run interactive queries from the Azure portal against the collected data.\n What should you do? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0035600001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #6",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Resource to create: An Azure Event Grid"
      },
      {
        id: "B",
        text: "Resource to create: An Azure Log analytics workspace"
      },
      {
        id: "C",
        text: "Resource on which to enable diagnostics: ILB1"
      },
      {
        id: "D",
        text: "Resource on which to enable diagnostics: NSG1"
      },
      {
        id: "E",
        text: "Resource to create: An AzureStorage account"
      }
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
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 346,
    number: 7,
    topic: "Topic 5",
    prompt: "You have the Azure virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/0035700001.png}}\n\n To which virtual networks can you establish a peering connection from VNet1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #7",
    type: "single",
    options: [
      {
        id: "A",
        text: "VNet2 andVNet3 only"
      },
      {
        id: "B",
        text: "VNet2 only"
      },
      {
        id: "C",
        text: "VNet3 and VNet4 only"
      },
      {
        id: "D",
        text: "VNet2, VNet3, and VNet4"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 347,
    number: 8,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Production.\n The NVA subnet contains two network virtual appliances (NVAs) that will perform network traffic inspection between the Perimeter subnet and the Production subnet.\n You need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements:\n ✑ The NVAs must run in an active-active configuration that uses automatic failover.\n ✑ The load balancer must load balance traffic to two services on the Production subnet. The services have different IP addresses.\n Which three actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Add a frontend IP configuration, a backend pool, and a health probe (extra answer, wrong though)\nSource: Az-104 T5.apkg #8",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Deploy a standard load balancer"
      },
      {
        id: "B",
        text: "Add two load balancing rules that have HA Ports and Floating IP enabled"
      },
      {
        id: "C",
        text: "Add a frontend IP configuration, two backend pools, and a health probe"
      },
      {
        id: "D",
        text: "Add two load balancing rules that have HA Ports enabled and Floating IP disabled"
      },
      {
        id: "E",
        text: "Deploy a basic load balancer"
      }
    ],
    correct: [
      "A",
      "B",
      "C"
    ]
  },
  {
    id: 348,
    number: 9,
    topic: "Topic 5",
    prompt: "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named\n VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1.\n On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1.\n You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2.\n You need to ensure that you can connect Client1 to VNet2.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #9",
    type: "single",
    options: [
      {
        id: "A",
        text: "Download and re-install the VPN client configuration package on Client1."
      },
      {
        id: "B",
        text: "Select Allow gateway transit on VNet1."
      },
      {
        id: "C",
        text: "Select Allow gateway transit on VNet2."
      },
      {
        id: "D",
        text: "Enable BGP on VPNGW1"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 349,
    number: 10,
    topic: "Topic 5",
    prompt: "You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0036000001.png}}\n\n You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.\n You create a virtual network link for contoso.com as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0036100001.jpg}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #10",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "When VM1 starts, a record for VM1 is added to the contoso.com DNS zone.",
        answer: true
      },
      {
        id: "s2",
        text: "When VM2 starts, a record for VM2 is added to the contoso.com DNS zone.",
        answer: true
      },
      {
        id: "s3",
        text: "When VM3 starts, a record for VM3 is added to the contoso.com DNS zone.",
        answer: false
      }
    ]
  },
  {
    id: 350,
    number: 11,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources in the following table.\n\n{{img:/exam-media/az-104/T5/0036300001.png}}\n\n To which subnets can you apply NSG1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #11",
    type: "single",
    options: [
      {
        id: "A",
        text: "the subnets on VNet1 only"
      },
      {
        id: "B",
        text: "the subnets on VNet2 and VNet3 only"
      },
      {
        id: "C",
        text: "the subnets on VNet2 only"
      },
      {
        id: "D",
        text: "the subnets on VNet3 only"
      },
      {
        id: "E",
        text: "the subnets on VNet1, VNet2, and VNet3"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 351,
    number: 12,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains two virtual networks named VNet1 and VNet2. Virtual machines connect to the virtual networks.\n The virtual networks have the address spaces and the subnets configured as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0036300002.png}}\n\n You need to add the address space of 10.33.0.0/16 to VNet1. The solution must ensure that the hosts on VNet1 and VNet2 can communicate.\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T5/0036400001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0036500001.png}}\nSource: Az-104 T5.apkg #12",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Remove peering between VNet1 and VNet2"
      },
      {
        id: "B",
        text: "Add the 10.33.0.0/16 address space to VNet1"
      },
      {
        id: "C",
        text: "Recreate peering between VNet1 and VNet2"
      },
      {
        id: "D",
        text: "On the peering connection in VNET2, allow gateway transit"
      },
      {
        id: "E",
        text: "Remove VNet1"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 352,
    number: 13,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resource groups shown in the following table.\n\n{{img:/exam-media/az-104/T5/0036600001.png}}\n\n RG1 contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0036600002.png}}\n\n VM1 is running and connects to NIC1 and Disk1. NIC1 connects to VNET1.\n RG2 contains a public IP address named IP2 that is in the East US location. IP2 is not assigned to a virtual machine.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #13",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can move storage1 to RG2",
        answer: true
      },
      {
        id: "s2",
        text: "You can move NIC1 to RG2",
        answer: true
      },
      {
        id: "s3",
        text: "If you move to IP2 to RG1, the location of IP2 will change",
        answer: false
      }
    ]
  },
  {
    id: 353,
    number: 14,
    topic: "Topic 5",
    prompt: "You have an Azure web app named webapp1.\n You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1.\n You need to ensure that webapp1 can access the data hosted on VM1.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #14",
    type: "single",
    options: [
      {
        id: "A",
        text: "Deploy an internal load balancer"
      },
      {
        id: "B",
        text: "Peer VNET1 to another virtual network"
      },
      {
        id: "C",
        text: "Connect webapp1 to VNET1"
      },
      {
        id: "D",
        text: "Deploy an Azure Application Gateway"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 354,
    number: 15,
    topic: "Topic 5",
    prompt: "You create an Azure VM named VM1 that runs Windows Server 2019.\n VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0036900001.jpg}}\n\n You need to enable Desired State Configuration for VM1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #15",
    type: "single",
    options: [
      {
        id: "A",
        text: "Connect to VM1."
      },
      {
        id: "B",
        text: "Start VM1."
      },
      {
        id: "C",
        text: "Capture a snapshot of VM1."
      },
      {
        id: "D",
        text: "Configure a DNS name for VM1."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 355,
    number: 16,
    topic: "Topic 5",
    prompt: "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\n You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\n You need to ensure that visitors are serviced by the same web server for each request.\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #16",
    type: "single",
    options: [
      {
        id: "A",
        text: "Floating IP (direct server return) to Disabled"
      },
      {
        id: "B",
        text: "Session persistence to None"
      },
      {
        id: "C",
        text: "Floating IP (direct server return) to Enabled"
      },
      {
        id: "D",
        text: "Session persistence to Client IP"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 356,
    number: 17,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the following resources:\n ✑ A virtual network that has a subnet named Subnet1\n ✑ Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1\n ✑ A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections\n NSG-Subnet1 has the default inbound security rules only.\n NSG-VM1 has the default inbound security rules and the following custom inbound security rule:\n ✑ Priority: 100\n ✑ Source: Any\n ✑ Source port range: *\n ✑ Destination: *\n ✑ Destination port range: 3389\n ✑ Protocol: UDP\n ✑ Action: Allow\n VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1.\n You need to be able to establish Remote Desktop connections from the internet to VM1.\n Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the Any source to the *destination for port range 3389 and uses the TCP protocol. You remove NSG-VM1 from the network interface of VM1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #17",
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
    id: 357,
    number: 18,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the following resources:\n ✑ A virtual network that has a subnet named Subnet1\n ✑ Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1\n ✑ A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections\n NSG-Subnet1 has the default inbound security rules only.\n NSG-VM1 has the default inbound security rules and the following custom inbound security rule:\n ✑ Priority: 100\n ✑ Source: Any\n ✑ Source port range: *\n ✑ Destination: *\n ✑ Destination port range: 3389\n\n Protocol: UDP -\n\n{{img:/exam-media/az-104/T5/0037200009.png}}\n\n ✑ Action: Allow\n VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1.\n You need to be able to establish Remote Desktop connections from the internet to VM1.\n Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the UDP protocol.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #18",
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
    id: 358,
    number: 19,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the following resources:\n ✑ A virtual network that has a subnet named Subnet1\n ✑ Two network security groups (NSGs) named NSG-VM1 and NSG-Subnet1\n ✑ A virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections\n NSG-Subnet1 has the default inbound security rules only.\n NSG-VM1 has the default inbound security rules and the following custom inbound security rule:\n ✑ Priority: 100\n ✑ Source: Any\n ✑ Source port range: *\n ✑ Destination: *\n ✑ Destination port range: 3389\n ✑ Protocol: UDP\n ✑ Action: Allow\n VM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to Subnet1.\n You need to be able to establish Remote Desktop connections from the internet to VM1.\n Solution: You add an inbound security rule to NSG-Subnet1 and NSG-VM1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the TCP protocol.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #19",
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
    id: 359,
    number: 20,
    topic: "Topic 5",
    prompt: "You have a virtual network named VNet1 that has the configuration shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0037500001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0037600001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image926.png}}\nSource: Az-104 T5.apkg #20",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "add a network interface"
      },
      {
        id: "B",
        text: "add a subnet"
      },
      {
        id: "C",
        text: "add an address space"
      },
      {
        id: "D",
        text: "add an address space"
      },
      {
        id: "E",
        text: "add a subnet"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "192.168.1.0/24"
      },
      {
        id: "t2",
        text: "10.2.1.0/24"
      }
    ],
    correct: [
      "t1:C",
      "t2:B"
    ]
  },
  {
    id: 360,
    number: 21,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains the subnets shown in the following table.\n\n{{img:/exam-media/az-104/T5/0037800001.png}}\n\n Each virtual machine uses a static IP address.\n You need to create network security groups (NSGs) to meet following requirements:\n ✑ Allow web requests from the internet to VM3, VM4, VM5, and VM6.\n ✑ Allow all connections between VM1 and VM2.\n ✑ Allow Remote Desktop connections to VM1.\n ✑ Prevent all other network traffic to VNET1.\n What is the minimum number of NSGs you should create?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #21",
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
        text: "12"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 361,
    number: 22,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0037900001.png}}\n\n The Not allowed resource types Azure policy that has policy enforcement enabled is assigned to RG1 and uses the following parameters:\n Microsoft.Network/virtualNetworks\n Microsoft.Compute/virtualMachines\n In RG1, you need to create a new virtual machine named VM2, and then connect VM2 to VNET1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #22",
    type: "single",
    options: [
      {
        id: "A",
        text: "Remove Microsoft.Compute/virtualMachines from the policy."
      },
      {
        id: "B",
        text: "Create an Azure Resource Manager template"
      },
      {
        id: "C",
        text: "Add a subnet to VNET1."
      },
      {
        id: "D",
        text: "Remove Microsoft.Network/virtualNetworks from the policy."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 362,
    number: 23,
    topic: "Topic 5",
    prompt: "Your company has an Azure subscription named Subscription1.\n The company also has two on-premises servers named Server1 and Server2 that run Windows Server 2016. Server1 is configured as a DNS server that has a primary DNS zone named adatum.com. Adatum.com contains 1,000 DNS records.\n You manage Server1 and Subscription1 from Server2. Server2 has the following tools installed:\n ✑ The DNS Manager console\n ✑ Azure PowerShell\n ✑ Azure CLI 2.0\n You need to move the adatum.com zone to an Azure DNS zone in Subscription1. The solution must minimize administrative effort.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #23",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure CLI"
      },
      {
        id: "B",
        text: "Azure PowerShell"
      },
      {
        id: "C",
        text: "the Azure portal"
      },
      {
        id: "D",
        text: "the DNS Manager console"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 363,
    number: 24,
    topic: "Topic 5",
    prompt: "You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3.\n You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only.\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #24",
    type: "single",
    options: [
      {
        id: "A",
        text: "an inbound NAT rule"
      },
      {
        id: "B",
        text: "a new public load balancer for VM3"
      },
      {
        id: "C",
        text: "a frontend IP configuration"
      },
      {
        id: "D",
        text: "a load balancing rule"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 364,
    number: 25,
    topic: "Topic 5",
    prompt: "You have an Azure subscription named Subscription1 that contains the virtual networks in the following table.\n\n{{img:/exam-media/az-104/T5/0038100001.png}}\n\n Subscription1 contains the virtual machines in the following table.\n\n{{img:/exam-media/az-104/T5/0038200001.png}}\n\n In Subscription1, you create a load balancer that has the following configurations:\n ✑ Name: LB1\n ✑ SKU: Basic\n ✑ Type: Internal\n ✑ Subnet: Subnet12\n ✑ Virtual network: VNET1",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #25",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "LB1 can balance the traffic between VM1 and VM2",
        answer: true
      },
      {
        id: "s2",
        text: "LB1 can balance the traffic between VM3 and VM4",
        answer: false
      },
      {
        id: "s3",
        text: "LB1 can balance the traffic between VM5 and VM6",
        answer: false
      }
    ]
  },
  {
    id: 365,
    number: 26,
    topic: "Topic 5",
    prompt: "You have an Azure virtual machine that runs Windows Server 2019 and has the following configurations:\n ✑ Name: VM1\n ✑ Location: West US\n ✑ Connected to: VNET1\n ✑ Private IP address: 10.1.0.4\n ✑ Public IP addresses: 52.186.85.63\n ✑ DNS suffix in Windows Server: Adatum.com\n You create the Azure DNS zones shown in the following table.\n\n{{img:/exam-media/az-104/T5/0038400001.png}}\n\n You need to identify which DNS zones you can link to VNET1 and the DNS zones to which VM1 can automatically register.\n Which zones should you identify? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0038400002.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #26",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "The private zones only"
      },
      {
        id: "B",
        text: "The private zones only"
      },
      {
        id: "C",
        text: "The public zones only"
      },
      {
        id: "D",
        text: "Adatum.com only"
      },
      {
        id: "E",
        text: "Adatum.pri and adatum.com only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "VNET1"
      },
      {
        id: "t2",
        text: "DNS to VM"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 366,
    number: 27,
    topic: "Topic 5",
    prompt: "You have an on-premises network that you plan to connect to Azure by using a site-so-site VPN.\n In Azure, you have an Azure virtual network named VNet1 that uses an address space of 10.0.0.0/16 VNet1 contains a subnet named Subnet1 that uses an address space of 10.0.0.0/24.\n You need to create a site-to-site VPN to Azure.\n Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n NOTE: More than one order of answer choice is correct. You will receive credit for any of the correct orders you select.\n Select and Place:\n\n{{img:/exam-media/az-104/T5/0038600001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0038700001.png}}\nSource: Az-104 T5.apkg #27",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Create a gateway subnet"
      },
      {
        id: "B",
        text: "Create a VPN gateway"
      },
      {
        id: "C",
        text: "Create a local gateway"
      },
      {
        id: "D",
        text: "Create a VPN connection"
      },
      {
        id: "E",
        text: "Create a Custom DNS server"
      }
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
      "t1:A",
      "t2:B",
      "t3:C",
      "t4:D"
    ]
  },
  {
    id: 367,
    number: 28,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources in the following table.\n\n{{img:/exam-media/az-104/T5/0038700002.png}}\n\n VM1 and VM2 are deployed from the same template and host line-of-business applications.\n You configure the network security group (NSG) shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0038800001.jpg}}\n\n You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #28",
    type: "single",
    options: [
      {
        id: "A",
        text: "Disassociate the NSG from a network interface"
      },
      {
        id: "B",
        text: "Change the Port_80 inbound security rule."
      },
      {
        id: "C",
        text: "Associate the NSG to Subnet1."
      },
      {
        id: "D",
        text: "Change the DenyWebSites outbound security rule."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 368,
    number: 29,
    topic: "Topic 5",
    prompt: "You have two subscriptions named Subscription1 and Subscription2. Each subscription is associated to a different Azure AD tenant.\n Subscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of 10.0.0.0/16.\n Subscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of 10.10.0.0/24.\n You need to connect VNet1 to VNet2.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #29",
    type: "single",
    options: [
      {
        id: "A",
        text: "Move VM1 to Subscription2"
      },
      {
        id: "B",
        text: "Move VNet1 to Subscription2."
      },
      {
        id: "C",
        text: "Modify the IP address space of VNet2."
      },
      {
        id: "D",
        text: "Provision virtual network gateways."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 369,
    number: 30,
    topic: "Topic 5",
    prompt: "You plan to create an Azure virtual machine named VM1 that will be configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0039100001.png}}\n\n The planned disk configurations for VM1 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0039200001.jpg}}\n\n You need to ensure that VM1 can be created in an Availability Zone.\n Which two settings should you modify? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #30",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Use managed disks"
      },
      {
        id: "B",
        text: "OS disk type"
      },
      {
        id: "C",
        text: "Availability options"
      },
      {
        id: "D",
        text: "Size"
      },
      {
        id: "E",
        text: "Image"
      }
    ],
    correct: [
      "A",
      "C"
    ]
  },
  {
    id: 370,
    number: 31,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0039500001-5181da4aa8bce365ee9e8002cdfb2ec1e19ff7d3.png}}\n\n VMSS1 is set to VM (virtual machines) orchestration mode.\n You need to deploy a new Azure virtual machine named VM1, and then add VM1 to VMSS1.\n Which resource group and location should you use to deploy VM1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0039500002.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0039600001.png}}\nSource: Az-104 T5.apkg #31",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "RG1 only"
      },
      {
        id: "B",
        text: "RG1 or RG2 only"
      },
      {
        id: "C",
        text: "RG1, RG2, RG3"
      },
      {
        id: "D",
        text: "West US only"
      },
      {
        id: "E",
        text: "Central US only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Resource Group"
      },
      {
        id: "t2",
        text: "Location"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 371,
    number: 32,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains three virtual networks named VNET1, VNET2, and VNET3.\n Peering for VNET1 is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0039700001.png}}\n\n Peering for VNET2 is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0039700002.png}}\n\n Peering for VNET3 is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0039800001.png}}\n\n How can packets be routed between the virtual networks? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0039800002.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0039900001.png}}\nSource: Az-104 T5.apkg #32",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "VNET2 only"
      },
      {
        id: "B",
        text: "VNET3 only"
      },
      {
        id: "C",
        text: "VNET1 only"
      },
      {
        id: "D",
        text: "VNET3 only"
      },
      {
        id: "E",
        text: "VNET1 and VNET3"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "VNET1"
      },
      {
        id: "t2",
        text: "VNET2"
      }
    ],
    correct: [
      "t1:E",
      "t2:C"
    ]
  },
  {
    id: 372,
    number: 33,
    topic: "Topic 5",
    prompt: "You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.\n From Azure, you download and install the VPN client configuration package on a computer named Computer2.\n You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\n Solution: You modify the Azure Active Directory (Azure AD) authentication policies.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #33",
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
    id: 373,
    number: 64,
    topic: "Topic 5",
    prompt: "You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.\n From Azure, you download and install the VPN client configuration package on a computer named Computer2.\n You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\n Solution: You join Computer2 to Azure Active Directory (Azure AD).\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #64",
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
    id: 374,
    number: 35,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\n Another administrator plans to create several network security groups (NSGs) in the subscription.\n You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\n Solution: You create a resource lock, and then you assign the lock to the subscription.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #35",
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
    id: 375,
    number: 36,
    topic: "Topic 5",
    prompt: "You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.\n You have a computer named Computer1 that runs Windows 10. Computer1 is connected to the Internet.\n You add a network interface named vm1173 to VM1 as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0040200001.png}}\n\n From Computer1, you attempt to connect to VM1 by using Remote Desktop, but the connection fails.\n You need to establish a Remote Desktop connection to VM1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #36",
    type: "single",
    options: [
      {
        id: "A",
        text: "Change the priority of the RDP rule"
      },
      {
        id: "B",
        text: "Attach a network interface"
      },
      {
        id: "C",
        text: "Delete the DenyAllInBound rule"
      },
      {
        id: "D",
        text: "Start VM1"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 376,
    number: 37,
    topic: "Topic 5",
    prompt: "You have the Azure virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0040300001.png}}\n\n A DNS service is installed on VM1.\n You configure the DNS servers settings for each virtual network as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0040400001.png}}\n\n You need to ensure that all the virtual machines can resolve DNS names by using the DNS service on VM1.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #37",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure a conditional forwarder on VM1"
      },
      {
        id: "B",
        text: "Add service endpoints on VNET1"
      },
      {
        id: "C",
        text: "Add service endpoints on VNET2 and VNET3"
      },
      {
        id: "D",
        text: "Configure peering between VNET1, VNET2, and VNET3"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 377,
    number: 38,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the Azure virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0040500001.png}}\n\n You add inbound security rules to a network security group (NSG) named NSG1 as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0040500002.png}}\n\n You run Azure Network Watcher as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0040600001.jpg}}\n\n You run Network Watcher again as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0040800001.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image927.png}}\nSource: Az-104 T5.apkg #38",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "NSG1 limits VM1 traffic",
        answer: false
      },
      {
        id: "s2",
        text: "NSG1 applies to VM2",
        answer: true
      },
      {
        id: "s3",
        text: "VM1 and VM2 connect to the same virtual network",
        answer: true
      }
    ]
  },
  {
    id: 378,
    number: 39,
    topic: "Topic 5",
    prompt: "You have the Azure virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. Each virtual machine has a public IP address.\n The virtual machines host several applications that are accessible over port 443 to users on the Internet.\n Your on-premises network has a site-to-site VPN connection to VNet1.\n You discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises network.\n You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all the applications can still be accessed by the Internet users.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #39",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the address space of the local network gateway"
      },
      {
        id: "B",
        text: "Create a deny rule in a network security group (NSG) that is linked to Subnet1"
      },
      {
        id: "C",
        text: "Remove the public IP addresses from the virtual machines"
      },
      {
        id: "D",
        text: "Modify the address space of Subnet1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 379,
    number: 40,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources in the following table.\n\n{{img:/exam-media/az-104/T5/0041100001.png}}\n\n Subnet1 is associated to VNet1. NIC1 attaches VM1 to Subnet1.\n You need to apply ASG1 to VM1.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #40",
    type: "single",
    options: [
      {
        id: "A",
        text: "Associate NIC1 to ASG1"
      },
      {
        id: "B",
        text: "Modify the properties of ASG1"
      },
      {
        id: "C",
        text: "Modify the properties of NSG1"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 380,
    number: 41,
    topic: "Topic 5",
    prompt: "You have an Azure subscription named Subscription1 that contains an Azure virtual network named VNet1. VNet1 connects to your on-premises network by using\n Azure ExpressRoute.\n You plan to prepare the environment for automatic failover in case of ExpressRoute failure.\n You need to connect VNet1 to the on-premises network by using a site-to-site VPN. The solution must minimize cost.\n Which three actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #41",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Create a connection"
      },
      {
        id: "B",
        text: "Create a local site VPN gateway"
      },
      {
        id: "C",
        text: "Create a VPN gateway that uses the VpnGw1 SKU"
      },
      {
        id: "D",
        text: "Create a gateway subnet"
      },
      {
        id: "E",
        text: "Create a VPN gateway that uses the Basic SKU"
      }
    ],
    correct: [
      "A",
      "B",
      "C"
    ]
  },
  {
    id: 381,
    number: 42,
    topic: "Topic 5",
    prompt: "You have peering configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0041300001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0041300002.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0041400001.jpg}}\nSource: Az-104 T5.apkg #42",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "vNET6 only"
      },
      {
        id: "B",
        text: "vNET6 and vNET1 only"
      },
      {
        id: "C",
        text: "delete peering"
      },
      {
        id: "D",
        text: "add a subnet"
      },
      {
        id: "E",
        text: "modify the address space"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Box1"
      },
      {
        id: "t2",
        text: "Box2"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 382,
    number: 43,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources in the following table.\n\n{{img:/exam-media/az-104/T5/0041500001.png}}\n\n You install the Web Server server role (IIS) on VM1 and VM2, and then add VM1 and VM2 to LB1.\n LB1 is configured as shown in the LB1 exhibit. (Click the LB1 tab.)\n\n{{img:/exam-media/az-104/T5/0041500002.png}}\n\n Rule1 is configured as shown in the Rule1 exhibit. (Click the Rule1 tab.)\n\n{{img:/exam-media/az-104/T5/0041600001.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0041700002.jpg}}\nSource: Az-104 T5.apkg #43",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM1 is in the same availability set as VM2",
        answer: true
      },
      {
        id: "s2",
        text: "If Probe1.htm is present on VM1 and Vm2, LB1 will balance TCP port 80 between VM1 and Vm2",
        answer: true
      },
      {
        id: "s3",
        text: "If you delete Rule1, Lb1 will balance all the requests between Vm1 and Vm2 for all the ports",
        answer: false
      }
    ]
  },
  {
    id: 383,
    number: 44,
    topic: "Topic 5",
    prompt: "You have an Azure virtual machine named VM1 that connects to a virtual network named VNet1. VM1 has the following configurations:\n ✑ Subnet: 10.0.0.0/24\n ✑ Availability set: AVSet\n ✑ Network security group (NSG): None\n ✑ Private IP address: 10.0.0.4 (dynamic)\n ✑ Public IP address: 40.90.219.6 (dynamic)\n You deploy a standard, Internet-facing load balancer named slb1.\n You need to configure slb1 to allow connectivity to VM1.\n Which changes should you apply to VM1 as you configure slb1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0041900001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0041900002.jpg}}\nSource: Az-104 T5.apkg #44",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Remove the public IP address from VM1"
      },
      {
        id: "B",
        text: "Create and configure an NSG"
      },
      {
        id: "C",
        text: "Remove the public IP address from VM1"
      },
      {
        id: "D",
        text: "Create and configure an NSG"
      },
      {
        id: "E",
        text: "Change the private IP address of VM1 to static"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Box1"
      },
      {
        id: "t2",
        text: "Box2"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 384,
    number: 45,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0042000001.png}}\n\n You need to create a network interface named NIC1.\n In which location can you create NIC1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #45",
    type: "single",
    options: [
      {
        id: "A",
        text: "East US and North Europe only"
      },
      {
        id: "B",
        text: "East US only"
      },
      {
        id: "C",
        text: "East US, West Europe, and North Europe"
      },
      {
        id: "D",
        text: "East US and West Europe only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 385,
    number: 46,
    topic: "Topic 5",
    prompt: "You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0042100001.png}}\n\n You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.\n For controso.com, you create a virtual network link named link1 as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0042200001.jpg}}\n\n You discover that VM1 can resolve names in contoso.com but cannot resolve names in adatum.com. VM1 can resolve other hosts on the Internet.\n You need to ensure that VM1 can resolve host names in adatum.com.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #46",
    type: "single",
    options: [
      {
        id: "A",
        text: "Update the DNS suffix on VM1 to be adatum.com"
      },
      {
        id: "B",
        text: "Configure the name servers for adatum.com at the domain registrar"
      },
      {
        id: "C",
        text: "Create an SRV record in the contoso.com zone"
      },
      {
        id: "D",
        text: "Modify the Access control (IAM) settings for link1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 386,
    number: 47,
    topic: "Topic 5",
    prompt: "You plan to use Azure Network Watcher to perform the following tasks:\n ✑ Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine.\n ✑ Task2: Validate outbound connectivity from an Azure virtual machine to an external host.\n Which feature should you use for each task? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0042400001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0042500001.jpg}}\nSource: Az-104 T5.apkg #47",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "IP flow verify"
      },
      {
        id: "B",
        text: "Connection troubleshoot"
      },
      {
        id: "C",
        text: "Next hop"
      },
      {
        id: "D",
        text: "packet capture"
      },
      {
        id: "E",
        text: "NSG flow logs"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Task1"
      },
      {
        id: "t2",
        text: "Task2"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 387,
    number: 48,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the Azure virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0042600001.png}}\n\n You configure the network interfaces of the virtual machines to use the settings shown in the following table.\n\n{{img:/exam-media/az-104/T5/0042600002.png}}\n\n From the settings of VNET1 you configure the DNS servers shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0042700001.png}}\n\n The virtual machines can successfully connect to the DNS server that has an IP address of 192.168.10.15 and the DNS server that has an IP address of\n 193.77.134.10.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #48",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Vm1 connects to 193.77.134.10 for DNS queries",
        answer: true
      },
      {
        id: "s2",
        text: "Vm2 connects to 193.77.134.10 for DNS queries",
        answer: false
      },
      {
        id: "s3",
        text: "Vm3 connects to 192.168.10.15 for DNS queries",
        answer: true
      }
    ]
  },
  {
    id: 388,
    number: 49,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resource groups shown in the following table.\n\n{{img:/exam-media/az-104/T5/0042900001.png}}\n\n RG1 contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0042900002.png}}\n\n You need to identify which resources you can move from RG1 to RG2, and which resources you can move from RG2 to RG1.\n Which resources should you identify? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0043000001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image928.png}}\nSource: Az-104 T5.apkg #49",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "IP1, VNEt2, an storage1"
      },
      {
        id: "B",
        text: "IP2, VNEt2, an storage2"
      },
      {
        id: "C",
        text: "None"
      },
      {
        id: "D",
        text: "Ip1 and VNET1 only"
      },
      {
        id: "E",
        text: "IP2 and storage2"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "RG1 to RG2"
      },
      {
        id: "t2",
        text: "RG2 to RG1"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 389,
    number: 50,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0043200001.png}}\n\n You deploy a load balancer that has the following configurations:\n ✑ Name: LB1\n ✑ Type: Internal\n ✑ SKU: Standard\n ✑ Virtual network: VNET1\n You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\n Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #50",
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
    id: 390,
    number: 51,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0043300002.png}}\n\n You deploy a load balancer that has the following configurations:\n ✑ Name: LB1\n ✑ Type: Internal\n ✑ SKU: Standard\n ✑ Virtual network: VNET1\n You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\n Solution: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #51",
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
    id: 391,
    number: 52,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0043400002.png}}\n\n You deploy a load balancer that has the following configurations:\n ✑ Name: LB1\n ✑ Type: Internal\n ✑ SKU: Standard\n ✑ Virtual network: VNET1\n You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\n Solution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #52",
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
    id: 392,
    number: 53,
    topic: "Topic 5",
    prompt: "You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.\n From Azure, you download and install the VPN client configuration package on a computer named Computer2.\n You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\n Solution: You export the client certificate from Computer1 and install the certificate on Computer2.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #53",
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
    id: 393,
    number: 54,
    topic: "Topic 5",
    prompt: "You have an Azure virtual machine named VM1.\n The network interface for VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0043700001.jpg}}\n\n You deploy a web server on VM1, and then create a secure website that is accessible by using the HTTPS protocol. VM1 is used as a web server only.\n You need to ensure that users can connect to the website from the Internet.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #54",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the protocol of Rule4"
      },
      {
        id: "B",
        text: "Delete Rule1"
      },
      {
        id: "C",
        text: "For Rule5, change the Action to Allow and change the priority to 401"
      },
      {
        id: "D",
        text: "Create a new inbound rule that allows TCP protocol 443 and configure the rule to have a priority of 501."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 394,
    number: 55,
    topic: "Topic 5",
    prompt: "Another administrator plans to create several network security groups (NSGs) in the subscription.\n You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\n Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #55",
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
    id: 395,
    number: 56,
    topic: "Topic 5",
    prompt: "You manage two Azure subscriptions named Subscription1 and Subscription2.\n Subscription1 has following virtual networks:\n\n{{img:/exam-media/az-104/T5/0043900001.png}}\n\n The virtual networks contain the following subnets:\n\n{{img:/exam-media/az-104/T5/0044000001.png}}\n\n Subscription2 contains the following virtual network:\n ✑ Name: VNETA\n ✑ Address space: 10.10.128.0/17\n ✑ Location: Canada Central\n VNETA contains the following subnets:\n\n{{img:/exam-media/az-104/T5/0044000005.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #56",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "A Site-to-Site connection can be established between VNET1 and VNET2",
        answer: false
      },
      {
        id: "s2",
        text: "VNET1 and VNET2 can be peered",
        answer: true
      },
      {
        id: "s3",
        text: "VNET1 and VNETA can be peered",
        answer: true
      }
    ]
  },
  {
    id: 396,
    number: 57,
    topic: "Topic 5",
    prompt: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load\n Balancer.\n The effective network security configurations for VM2 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0044300001.jpg}}\n\n You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\n You verify that the Load Balancer rules are configured correctly.\n You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\n Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #57",
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
    id: 397,
    number: 58,
    topic: "Topic 5",
    prompt: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load\n Balancer.\n The effective network security configurations for VM2 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0044400001.jpg}}\n\n You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\n You verify that the Load Balancer rules are configured correctly.\n You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\n Solution: You delete the BlockAllOther443 inbound security rule.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #58",
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
    id: 398,
    number: 59,
    topic: "Topic 5",
    prompt: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load\n Balancer.\n The effective network security configurations for VM2 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0044500001.jpg}}\n\n You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\n You verify that the Load Balancer rules are configured correctly.\n You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\n Solution: You modify the priority of the Allow_131.107.100.50 inbound security rule.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #59",
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
    id: 399,
    number: 60,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\n Another administrator plans to create several network security groups (NSGs) in the subscription.\n You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\n Solution: You assign a built-in policy definition to the subscription.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #60",
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
    id: 400,
    number: 61,
    topic: "Topic 5",
    prompt: "You have an Azure subscription.\n You plan to deploy an Azure Kubernetes Service (AKS) cluster to support an app named App1. On-premises clients connect to App1 by using the IP address of the pod.\n For the AKS cluster, you need to choose a network type that will support App1.\n What should you choose?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #61",
    type: "single",
    options: [
      {
        id: "A",
        text: "kubenet"
      },
      {
        id: "B",
        text: "Azure Container Networking Interface (CNI)"
      },
      {
        id: "C",
        text: "Hybrid Connection endpoints"
      },
      {
        id: "D",
        text: "Azure Private Link"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 401,
    number: 62,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0044800001.png}}\n\n You deploy a load balancer that has the following configurations:\n ✑ Name: LB1\n ✑ Type: Internal\n ✑ SKU: Standard\n ✑ Virtual network: VNET1\n You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\n Solution: You disassociate the public IP address from the network interface of VM2.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #62",
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
    id: 402,
    number: 63,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\n Another administrator plans to create several network security groups (NSGs) in the subscription.\n You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\n Solution: You configure a custom policy definition, and then you assign the policy to the subscription.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #63",
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
    id: 403,
    number: 64,
    topic: "Topic 5",
    prompt: "You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2.\n VM1 hosts a frontend application that connects to VM2 to retrieve data.\n Users report that the frontend application is slower than usual.\n You need to view the average round-trip time (RTT) of the packets from VM1 to VM2.\n Which Azure Network Watcher feature should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #64",
    type: "single",
    options: [
      {
        id: "A",
        text: "IP flow verify"
      },
      {
        id: "B",
        text: "Connection troubleshoot"
      },
      {
        id: "C",
        text: "Connection monitor"
      },
      {
        id: "D",
        text: "NSG flow logs"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 404,
    number: 65,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the public load balancers shown in the following table.\n\n{{img:/exam-media/az-104/T5/0045000001.png}}\n\n You plan to create six virtual machines and to load balance requests to the virtual machines. Each load balancer will load balance three virtual machines.\n You need to create the virtual machines for the planned solution.\n How should you create the virtual machines? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0045100001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0045100002.jpg}}\nSource: Az-104 T5.apkg #65",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "be created in the same availability set or vortial machine scale set"
      },
      {
        id: "B",
        text: "be connected to the same virtual network"
      },
      {
        id: "C",
        text: "be connected to the same virtual network"
      },
      {
        id: "D",
        text: "be created in the same availability set or vortial machine scale set"
      },
      {
        id: "E",
        text: "be created in the same resource group"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "LB1"
      },
      {
        id: "t2",
        text: "LB2"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 405,
    number: 66,
    topic: "Topic 5",
    prompt: "You have an on-premises data center and an Azure subscription. The data center contains two VPN devices. The subscription contains an Azure virtual network named VNet1. VNet1 contains a gateway subnet.\n You need to create a site-to-site VPN. The solution must ensure that if a single instance of an Azure VPN gateway fails, or a single on-premises VPN device fails, the failure will not cause an interruption that is longer than two minutes.\n What is the minimum number of public IP addresses, virtual network gateways, and local network gateways required in Azure? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0045300001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image930.png}}\nSource: Az-104 T5.apkg #66",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "2"
      },
      {
        id: "B",
        text: "1"
      },
      {
        id: "C",
        text: "1"
      },
      {
        id: "D",
        text: "2"
      },
      {
        id: "E",
        text: "1"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Public Ip addresses"
      },
      {
        id: "t2",
        text: "Virtual network gateways"
      },
      {
        id: "t3",
        text: "Local network gateways"
      }
    ],
    correct: [
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 406,
    number: 67,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains two virtual machines as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0045500002.png}}\n\n You perform a reverse DNS lookup for 10.0.0.4 from VM2.\n Which FQDN will be returned?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #67",
    type: "single",
    options: [
      {
        id: "A",
        text: "vm1.core.windows.net"
      },
      {
        id: "B",
        text: "vm1.azure.com"
      },
      {
        id: "C",
        text: "vm1.westeurope.cloudapp.azure.com"
      },
      {
        id: "D",
        text: "vm1.internal.cloudapp.net"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 407,
    number: 68,
    topic: "Topic 5",
    prompt: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load\n Balancer.\n The effective network security configurations for VM2 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0045600001.jpg}}\n\n You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\n You verify that the Load Balancer rules are configured correctly.\n You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\n Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a cost of 150.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #68",
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
    id: 408,
    number: 69,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1.\n You need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1.\n Which two actions should you perform? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "F. Add a public IP address space to VNet1(wrong)\nSource: Az-104 T5.apkg #69",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Add a service endpoint to VNet1"
      },
      {
        id: "B",
        text: "Reset GW1"
      },
      {
        id: "C",
        text: "Create a route-based virtual network gateway"
      },
      {
        id: "D",
        text: "Add a connection to GW1"
      },
      {
        id: "E",
        text: "Delete GW1"
      }
    ],
    correct: [
      "C",
      "E"
    ]
  },
  {
    id: 409,
    number: 70,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources in the following table:\n\n{{img:/exam-media/az-104/T5/0045800001.png}}\n\n In Azure, you create a private DNS zone named adatum.com. You set the registration virtual network to VNet2. The adatum.com zone is configured as shown in the following exhibit:\n\n{{img:/exam-media/az-104/T5/0045900001.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #70",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "The A record for VM5 will be registered automatically in the adatum.com zone",
        answer: false
      },
      {
        id: "s2",
        text: "VM5 can resolve VM9.adatum.com",
        answer: false
      },
      {
        id: "s3",
        text: "VM6 can resolve VM9.adatum.com",
        answer: true
      }
    ]
  },
  {
    id: 410,
    number: 71,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/0046100001.png}}\n\n The subscription contains the private DNS zones shown in the following table.\n\n{{img:/exam-media/az-104/T5/0046100002.png}}\n\n You add virtual network links to the private DNS zones as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0046200001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #71",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can enable auto registration for Link2.",
        answer: true
      },
      {
        id: "s2",
        text: "You can add a virtual network link for VNET1 to Zone3.com",
        answer: true
      },
      {
        id: "s3",
        text: "You can add a virtual network link for VNET2 to Zone1.com and enable auto registration",
        answer: true
      }
    ]
  },
  {
    id: 411,
    number: 72,
    topic: "Topic 5",
    prompt: "You have an Azure subscription.\n You plan to use an Azure Resource Manager template to deploy a virtual network named VNET1 that will use Azure Bastion.\n How should you complete the template? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0046400001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0046500001.png}}\nSource: Az-104 T5.apkg #72",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "AzureBastionSubnet"
      },
      {
        id: "B",
        text: "AzureFirewallSubnet"
      },
      {
        id: "C",
        text: "10.10.10.0/27"
      },
      {
        id: "D",
        text: "10.10.10.0/29"
      },
      {
        id: "E",
        text: "10.10.10.0/30"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "name"
      },
      {
        id: "t2",
        text: "adressPrefix"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 412,
    number: 73,
    topic: "Topic 5",
    prompt: "You manage a virtual network named VNet1 that is hosted in the West US Azure region.\n VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\n You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.\n Solution: From Azure Network Watcher, you create a packet capture.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #73",
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
    id: 413,
    number: 74,
    topic: "Topic 5",
    prompt: "You manage a virtual network named VNet1 that is hosted in the West US Azure region.\n VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\n You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.\n Solution: From Azure Network Watcher, you create a connection monitor.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #74",
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
    id: 414,
    number: 75,
    topic: "Topic 5",
    prompt: "You manage a virtual network named VNet1 that is hosted in the West US Azure region.\n VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\n You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.\n Solution: From Performance Monitor, you create a Data Collector Set (DCS).\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #75",
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
    id: 415,
    number: 76,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0046800001.png}}\n\n You need to load balance HTTPS connections to vm1 and vm2 by using lb1.\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T5/0046900001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0047000001.jpg}}\nSource: Az-104 T5.apkg #76",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Remove the public IP addresses from vm1 and vm2"
      },
      {
        id: "B",
        text: "Create a health probe and backend pool on lb1"
      },
      {
        id: "C",
        text: "Create a load balancing rule on lb1"
      },
      {
        id: "D",
        text: "Remove nsg1"
      },
      {
        id: "E",
        text: "Create an availability set"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 416,
    number: 77,
    topic: "Topic 5",
    prompt: "You manage a virtual network named VNet1 that is hosted in the West US Azure region.\n VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\n You need to inspect all the network traffic from VM1 to VM2 for a period of three hours.\n Solution: From Azure Monitor, you create a metric on Network In and Network Out.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #77",
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
    id: 417,
    number: 78,
    topic: "Topic 5",
    prompt: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load\n Balancer.\n The effective network security configurations for VM2 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/0047200001.jpg}}\n\n You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\n You verify that the Load Balancer rules are configured correctly.\n You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\n Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a priority of 64999.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #78",
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
    id: 418,
    number: 79,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains two on-premises locations named site1 and site2.\n You need to connect site1 and site2 by using an Azure Virtual WAN.\n Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T5/0047300001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0047300002.jpg}}\nSource: Az-104 T5.apkg #79",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Create a virtual hub"
      },
      {
        id: "B",
        text: "Create VPN sites"
      },
      {
        id: "C",
        text: "Connect the virtual networks to the hub"
      },
      {
        id: "D",
        text: "Create a Virtual WAN resource"
      },
      {
        id: "E",
        text: "Connect the VPN sites to the hub"
      }
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
      "t1:D",
      "t2:A",
      "t3:B",
      "t4:E"
    ]
  },
  {
    id: 419,
    number: 80,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047400001.png}}\n\n You have the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047400002.png}}\n\n You have the virtual network interfaces shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047400003.png}}\n\n Server1 is a DNS server that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047400004.png}}\n\n You have an Azure private DNS zone named contoso.com that has a virtual network link to VNET2 and the records shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047500001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #80",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Server2 resolves host2.contoso.com to 131.107.50.50",
        answer: false
      },
      {
        id: "s2",
        text: "Server2 resolves host1.contoso.com to 131.107.10.15",
        answer: true
      },
      {
        id: "s3",
        text: "Server3 resolves host2.contoso.com to 131.107.50.50",
        answer: false
      }
    ]
  },
  {
    id: 420,
    number: 81,
    topic: "Topic 5",
    prompt: "You have a virtual network named VNet1 as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0047600001.png}}\n\n No devices are connected to VNet1.\n You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.\n You need to create the peering.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #81",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the address space of VNet1."
      },
      {
        id: "B",
        text: "Add a gateway subnet to VNet1."
      },
      {
        id: "C",
        text: "Create a subnet on VNet1 and VNet2."
      },
      {
        id: "D",
        text: "Configure a service endpoint on VNet2."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 421,
    number: 82,
    topic: "Topic 5",
    prompt: "You have the Azure virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047700001.png}}\n\n VNET1 is linked to a private DNS zone named contoso.com that contains the records shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047700002.png}}\n\n You need to ping VM2 from VM1.\n Which DNS names can you use to ping VM2?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #82",
    type: "single",
    options: [
      {
        id: "A",
        text: "comp2.contoso.com and comp4.contoso.com only"
      },
      {
        id: "B",
        text: "comp1.contoso.com, comp2.contoso.com, comp3.contoso.com, and comp4.contoso.com"
      },
      {
        id: "C",
        text: "comp2.contoso.com only"
      },
      {
        id: "D",
        text: "comp1.contoso.com and comp2.contoso.com only"
      },
      {
        id: "E",
        text: "comp1.contoso.com, comp2.contoso.com, and comp4.contoso.com only"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 422,
    number: 83,
    topic: "Topic 5",
    prompt: "You have a network security group (NSG) named NSG1 that has the rules defined in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/0047900001.jpg}}\n\n NSG1 is associated to a subnet named Subnet1. Subnet1 contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/0047900002.png}}\n\n You need to add a rule to NSG1 to ensure that VM1 can ping VM2. The solution must use the principle of least privilege.\n How should you configure the rule? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0048000001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image933.png}}\nSource: Az-104 T5.apkg #83",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Inbound"
      },
      {
        id: "B",
        text: "10.0.0.10"
      },
      {
        id: "C",
        text: "Outbound"
      },
      {
        id: "D",
        text: "10.1.0.11"
      },
      {
        id: "E",
        text: "110"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Direction"
      },
      {
        id: "t2",
        text: "Source"
      },
      {
        id: "t3",
        text: "Destination"
      },
      {
        id: "t4",
        text: "Priority"
      }
    ],
    correct: [
      "t1:C",
      "t2:B",
      "t3:D",
      "t4:E"
    ]
  },
  {
    id: 423,
    number: 84,
    topic: "Topic 5",
    prompt: "You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate.\n From Azure, you download and install the VPN client configuration package on a computer named Computer2.\n You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\n Solution: On Computer2, you set the Startup type for the IPSec Policy Agent service to Automatic.\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #84",
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
    id: 424,
    number: 86,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that uses the public IP addresses shown in the following table.\n\n{{img:/exam-media/az-104/T5/0048300001.png}}\n\n You need to create a public Azure Standard Load Balancer.\n Which public IP addresses can you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #86",
    type: "single",
    options: [
      {
        id: "A",
        text: "IP1, IP2, and IP3"
      },
      {
        id: "B",
        text: "IP2 only"
      },
      {
        id: "C",
        text: "IP3 only"
      },
      {
        id: "D",
        text: "IP1 and IP3 only"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 425,
    number: 87,
    topic: "Topic 5",
    prompt: "You have an Azure subscription.\n You are deploying an Azure Kubernetes Service (AKS) cluster that will contain multiple pods. The pods will use kubernet networking.\n You need to restrict network traffic between the pods.\n What should you configure on the AKS cluster?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #87",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Azure network policy"
      },
      {
        id: "B",
        text: "the Calico network policy"
      },
      {
        id: "C",
        text: "pod security policies"
      },
      {
        id: "D",
        text: "an application security group"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 426,
    number: 88,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the VPN Gateway and subnets in the following table:\n\n{{img:/exam-media/az-104/T5/0048500001.png}}\n\n Subnet1 contains a virtual appliance named VM1 that operates as a router.\n You create a routing table named RT1.\n You need to route all inbound traffic from the VPN gateway to VNet1 through VM1.\n How should you configure RT1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T5/0048600001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/0048700001.jpg}}\nSource: Az-104 T5.apkg #88",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "10.0.0.0/16"
      },
      {
        id: "B",
        text: "Virtual appliance"
      },
      {
        id: "C",
        text: "GatewaySubnet"
      },
      {
        id: "D",
        text: "10.0.1.0/24"
      },
      {
        id: "E",
        text: "Virtual network"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Address prefix"
      },
      {
        id: "t2",
        text: "Next hop type"
      },
      {
        id: "t3",
        text: "Assignet to"
      }
    ],
    correct: [
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 427,
    number: 90,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table:\n\n{{img:/exam-media/az-104/T5/0048900001.png}}\n\n VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections.\n Subnet1 and Subnet2 are in a virtual network named VNET1.\n The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules.\n NSG2 uses the default rules and the following custom incoming rule:\n ✑ Priority: 100\n ✑ Name: Rule1\n ✑ Port: 3389\n ✑ Protocol: TCP\n ✑ Source: Any\n ✑ Destination: Any\n ✑ Action: Allow\n NSG1 is associated to Subnet1. NSG2 is associated to the network interface of VM2.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #90",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "From the Internet, you can connect to VM1 using Remote Desktop",
        answer: false
      },
      {
        id: "s2",
        text: "From the Internet, you can connect to VM2 using Remote Desktop",
        answer: true
      },
      {
        id: "s3",
        text: "From VM1, you can connect to VM2 using Remote Desktop",
        answer: true
      }
    ]
  },
  {
    id: 428,
    number: 91,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains two virtual machines named VM1 and VM2.\n You create an Azure load balancer.\n You plan to create a load balancing rule that will load balance HTTPS traffic between VM1 and VM2.\n Which two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part of the solution.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #91",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "a frontend IP address"
      },
      {
        id: "B",
        text: "an inbound NAT rule"
      },
      {
        id: "C",
        text: "a virtual network"
      },
      {
        id: "D",
        text: "a backend pool"
      },
      {
        id: "E",
        text: "a health probe"
      }
    ],
    correct: [
      "D",
      "E"
    ]
  },
  {
    id: 429,
    number: 92,
    topic: "Topic 5",
    prompt: "You have an on-premises network that contains a database server named dbserver1.\n You have an Azure subscription.\n You plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone.\n You need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to dbserver1.\n Which type of public IP address SKU and assignment should you use for the gateway?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #92",
    type: "single",
    options: [
      {
        id: "A",
        text: "a basic SKU and a static IP address assignment"
      },
      {
        id: "B",
        text: "a standard SKU and a static IP address assignment"
      },
      {
        id: "C",
        text: "a basic SKU and a dynamic IP address assignment"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 430,
    number: 93,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/image854.png}}\n\n The subscription contains a storage account named contoso2024 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/image855.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #93",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM1 can connect to contoso2024 by using 131.107.10.10",
        answer: true
      },
      {
        id: "s2",
        text: "VM2 can connect to contoso2024 by using 150.120.10.10",
        answer: true
      },
      {
        id: "s3",
        text: "VM3 must use its pricate IP address to connect to contoso2024",
        answer: false
      }
    ]
  },
  {
    id: 431,
    number: 94,
    topic: "Topic 5",
    prompt: "You have two Azure virtual machines as shown in the following table.\n\n{{img:/exam-media/az-104/T5/0049500001.png}}\n\n You create the Azure DNS zones shown in the following table.\n\n{{img:/exam-media/az-104/T5/0049500002.jpg}}\n\n You perform the following actions:\n ✑ ׀¢׀¾ fabrikam.com, you add a virtual network link to vnet1 and enable auto registration.\n ✑ For contoso.com, you assign vm1 and vm2 the Owner role.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #94",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "The DNS A record for vm1 is added to contoso.com and has the IP address of 131.107.50.20"
      },
      {
        id: "B",
        text: "The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.4"
      },
      {
        id: "C",
        text: "The DNS A record for vm1 is added to fabrikam.com and has the IP address of 10.0.1.5"
      }
    ],
    correct: [
      "B",
      "C"
    ]
  },
  {
    id: 432,
    number: 95,
    topic: "Topic 5",
    prompt: "You have an on-premises datacenter and an Azure subscription.\n You plan to connect the datacenter to Azure by using ExpressRoute.\n You need to deploy an ExpressRoute gateway. The solution must meet the following requirements:\n ✑ Support up to 10 Gbps of traffic.\n ✑ Support availability zones.\n ✑ Support FastPath.\n ✑ Minimize costs.\n Which SKU should you deploy?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #95",
    type: "single",
    options: [
      {
        id: "A",
        text: "ERGw1AZ"
      },
      {
        id: "B",
        text: "ERGw2"
      },
      {
        id: "C",
        text: "ErGw3"
      },
      {
        id: "D",
        text: "ErGw3AZ"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 433,
    number: 96,
    topic: "Topic 5",
    prompt: "You have a virtual network named VNET1 that contains the subnets shown in the following table:\n\n{{img:/exam-media/az-104/T5/0049800002.png}}\n\n You have Azure virtual machines that have the network configurations shown in the following table:\n\n{{img:/exam-media/az-104/T5/0049900001.png}}\n\n For NSG1, you create the inbound security rule shown in the following table:\n\n{{img:/exam-media/az-104/T5/0049900002.png}}\n\n For NSG2, you create the inbound security rule shown in the following table:\n\n{{img:/exam-media/az-104/T5/0049900003.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #96",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM2 can connect to the TCP port 1433 services on VM1",
        answer: false
      },
      {
        id: "s2",
        text: "VM1 can connect to the TCP port 1433 services on VM2",
        answer: true
      },
      {
        id: "s3",
        text: "VM2 can connect to the TCP port 1433 services on VM3",
        answer: true
      }
    ]
  },
  {
    id: 434,
    number: 97,
    topic: "Topic 5",
    prompt: "You have an Azure subscription named Subscription1.\n Subscription1 contains the virtual machines in the following table:\n\n{{img:/exam-media/az-104/T5/0050100001-1e04ef19fb5b001859443c40ed9e5d9b33b5a5f1.png}}\n\n Subscription1 contains a virtual network named VNet1 that has the subnets in the following table:\n\n{{img:/exam-media/az-104/T5/0050100002.png}}\n\n VM3 has multiple network adapters, including a network adapter named NIC3. IP forwarding is enabled on NIC3. Routing is enabled on VM3.\n You create a route table named RT1 that contains the routes in the following table:\n\n{{img:/exam-media/az-104/T5/0050100003.png}}\n\n You apply RT1 to Subnet1 and Subnet2.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #97",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM3 can establish a network connection to VM1",
        answer: true
      },
      {
        id: "s2",
        text: "If VM3 is turned off, VM2 can establish a network connection to VM1",
        answer: false
      },
      {
        id: "s3",
        text: "Vm1 can establish a network connection to VM2",
        answer: true
      }
    ]
  },
  {
    id: 435,
    number: 98,
    topic: "Topic 5",
    prompt: "Your on-premises network contains an SMB share named Share1.\n You have an Azure subscription that contains the following resources:\n ✑ A web app named webapp1\n ✑ A virtual network named VNET1\n You need to ensure that webapp1 can connect to Share1.\n What should you deploy?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #98",
    type: "single",
    options: [
      {
        id: "A",
        text: "an Azure Application Gateway"
      },
      {
        id: "B",
        text: "an Azure Active Directory (Azure AD) Application Proxy"
      },
      {
        id: "C",
        text: "an Azure Virtual Network Gateway"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 436,
    number: 99,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image853.png}}\n\n You create a public IP address named IP1.\n\n Which two resources can you associate to IP1? Each correct answer presents a complete solution.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #99",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "VM1"
      },
      {
        id: "B",
        text: "LB1"
      },
      {
        id: "C",
        text: "NIC1"
      },
      {
        id: "D",
        text: "VPN1"
      },
      {
        id: "E",
        text: "VNet1"
      }
    ],
    correct: [
      "B",
      "C"
    ]
  },
  {
    id: 437,
    number: 100,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a storage account named storage1.\n\n You need to allow access to storage1 from selected networks and your home office. The solution must minimize administrative effort.\n\n What should you do first for storage1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #100",
    type: "single",
    options: [
      {
        id: "A",
        text: "Add a private endpoint."
      },
      {
        id: "B",
        text: "Modify the Public network access settings"
      },
      {
        id: "C",
        text: "Select Internet routing."
      },
      {
        id: "D",
        text: "Modify the Access Control (IAM) settings."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 438,
    number: 101,
    topic: "Topic 5",
    prompt: "You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network.\n Which tunneling protocol should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #101",
    type: "single",
    options: [
      {
        id: "A",
        text: "IKEv1"
      },
      {
        id: "B",
        text: "PPTP"
      },
      {
        id: "C",
        text: "IKEv2"
      },
      {
        id: "D",
        text: "L2TP"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 439,
    number: 102,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image608.png}}\n\n You configure Azure Site Recovery to replicate VM1 between the US East and West US regions.\n\n You perform a test failover of VM1 and specify VNET2 as the target virtual network.\n\n When the test version of VM1 is created, to which subnet will the virtual machine be connected?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #102",
    type: "single",
    options: [
      {
        id: "A",
        text: "TestSubnet1"
      },
      {
        id: "B",
        text: "DemoSubnet1"
      },
      {
        id: "C",
        text: "RecoverySubnetA"
      },
      {
        id: "D",
        text: "RecoverySubnetB"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 440,
    number: 104,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image845.png}}\n\n You have the peering options shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/image846.png}}\n\n You need to design a communication strategy for the resources on the virtual networks.",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #104",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Peering 1-2 is a possible configuration",
        answer: false
      },
      {
        id: "s2",
        text: "Peering 1-3 is a possible configuration",
        answer: false
      },
      {
        id: "s3",
        text: "Peering 3-2 is a possible configuration",
        answer: false
      }
    ]
  },
  {
    id: 441,
    number: 105,
    topic: "Topic 5",
    prompt: "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\n\n You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\n\n You need to ensure that visitors are serviced by the same web server for each request.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #105",
    type: "single",
    options: [
      {
        id: "A",
        text: "Floating IP (direct server return) to Disabled"
      },
      {
        id: "B",
        text: "Session persistence to Client IP"
      },
      {
        id: "C",
        text: "Protocol to UDP"
      },
      {
        id: "D",
        text: "Idle Time-out (minutes) to 20"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 442,
    number: 106,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named VNET1 and VNET2 that are peered.\n\n You plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1.\n\n You need to configure NSG1 to allow inbound access to the virtual machines via Bastion1.\n\n Which port should you configure for the inbound security rule?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #106",
    type: "single",
    options: [
      {
        id: "A",
        text: "22"
      },
      {
        id: "B",
        text: "443"
      },
      {
        id: "C",
        text: "389"
      },
      {
        id: "D",
        text: "8080"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 443,
    number: 107,
    topic: "Topic 5",
    prompt: "Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table.\n\n{{img:/exam-media/az-104/T5/image609.png}}\n\n You plan to migrate contoso.com to Azure.\n\n You create an Azure virtual network named VNET1 that has the following settings:\n\n • Address space: 10.0.0.0/16\n • Subnet:\n o Name: Subnet1\n o IPv4: 10.0.1.0/24\n\n You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names.\n\n How should you configure DC1? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T5/image610.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image611.png}}\nSource: Az-104 T5.apkg #107",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "IP address: Obtain an IP address automatically"
      },
      {
        id: "B",
        text: "IP address: Use 10.0.1.3"
      },
      {
        id: "C",
        text: "IP address: Use 10.0.2.1"
      },
      {
        id: "D",
        text: "Name resolution: Create an Azure Private DNS zone named contoso.com"
      },
      {
        id: "E",
        text: "Name resolution: Create an Azure public DNS zone named contoso.com"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 444,
    number: 109,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image612.png}}\n\n You need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region.\n\n To which virtual networks can you deploy AF1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #109",
    type: "single",
    options: [
      {
        id: "A",
        text: "VNET1, VNET2, VNET3, and VNET4"
      },
      {
        id: "B",
        text: "VNET1 and VNET2 only"
      },
      {
        id: "C",
        text: "VNET1 only"
      },
      {
        id: "D",
        text: "VNET1, VNET2, and VNET4 only"
      },
      {
        id: "E",
        text: "VNET1 and VNET4 only"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 445,
    number: 110,
    topic: "Topic 5",
    prompt: "You have an on-premises network.\n\n You have an Azure subscription that contains three virtual networks named VNET1. VNET2. and VNET3. The virtual networks are peered and connected to the on-premises network. The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/image613.png}}\n\n You need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor.\n\n What is the minimum number of connection monitors you should deploy?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #110",
    type: "single",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "2"
      },
      {
        id: "C",
        text: "3"
      },
      {
        id: "D",
        text: "4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 446,
    number: 111,
    topic: "Topic 5",
    prompt: "HOTSPOT -\n\n You plan to deploy the following Azure Resource Manager (ARM) template.\n\n{{img:/exam-media/az-104/T5/image614.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image938.png}}\nSource: Az-104 T5.apkg #111",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "LB1 will be connected to a subnet named VNET1/netname",
        answer: false
      },
      {
        id: "s2",
        text: "LB1 can be deployed only to the resource group that contains VNET1",
        answer: false
      },
      {
        id: "s3",
        text: "The value of the sku variable an be provided as a parameter when the template is deployed from a command prompt",
        answer: false
      }
    ]
  },
  {
    id: 447,
    number: 112,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a storage account. The account stores website data.\n\n You need to ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user's location.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #112",
    type: "single",
    options: [
      {
        id: "A",
        text: "private endpoints"
      },
      {
        id: "B",
        text: "Azure Firewall rules"
      },
      {
        id: "C",
        text: "Routing preference"
      },
      {
        id: "D",
        text: "load balancing"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 448,
    number: 113,
    topic: "Topic 5",
    prompt: "You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1. Subnet1 is in a virtual network named VNet1.\n\n You need to prevent VM1 from accessing VM2 on port 3389.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #113",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network interface of VM1."
      },
      {
        id: "B",
        text: "Configure Azure Bastion in VNet1."
      },
      {
        id: "C",
        text: "Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1."
      },
      {
        id: "D",
        text: "Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 449,
    number: 114,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image617.png}}\n\n You need to manage outbound traffic from VNET1 by using Firewall1.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #114",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure the Hybrid Connection Manager."
      },
      {
        id: "B",
        text: "Upgrade ASP1 to the Premium SKU."
      },
      {
        id: "C",
        text: "Create a route table."
      },
      {
        id: "D",
        text: "Create an Azure Network Watcher."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 450,
    number: 115,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image645.png}}\n\n All the resources connect to a virtual network named VNet1.\n\n You plan to deploy an Azure Bastion host named Bastion1 to VNet1.\n\n Which resources can be protected by using Bastion1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #115",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "contoso.com only"
      },
      {
        id: "C",
        text: "App1 and contoso.com only"
      },
      {
        id: "D",
        text: "VM1 and contoso.com only"
      },
      {
        id: "E",
        text: "VM1, App1, and contoso.com"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 451,
    number: 118,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains 10 virtual machines and the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image654.png}}\n\n You need to ensure that Bastion1 can support 100 concurrent SSH users. The solution must minimize administrative effort.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #118",
    type: "single",
    options: [
      {
        id: "A",
        text: "Resize the subnet of Bastion1"
      },
      {
        id: "B",
        text: "Configure host scaling."
      },
      {
        id: "C",
        text: "Create a network security group (NSG)"
      },
      {
        id: "D",
        text: "Upgrade Bastion1 to the Standard SKU"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 452,
    number: 120,
    topic: "Topic 5",
    prompt: "You have a Windows 11 device named Device and an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image663.png}}\n\n Device1 has Azure PowerShell and Azure Command-Line Interface (CLI) installed.\n\n From Device1, you need to establish a Remote Desktop connection to VM1.\n\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n\n{{img:/exam-media/az-104/T5/image664.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image665.png}}\nSource: Az-104 T5.apkg #120",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Upgrade Bastion1 to the Standard SKU"
      },
      {
        id: "B",
        text: "From Bastion1, enable Kerberos authentication"
      },
      {
        id: "C",
        text: "From Azure CLI on Device1, run az network bastion rdp"
      },
      {
        id: "D",
        text: "From Bastion1, select Native Client Support."
      },
      {
        id: "E",
        text: "On Device1, run mstsc.exe."
      }
    ],
    correct: [
      "A",
      "C",
      "D"
    ]
  },
  {
    id: 453,
    number: 122,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that has the public IP addresses shown in the following table.\n\n{{img:/exam-media/az-104/T5/image678.png}}\n\n You plan to deploy an Azure Bastion Basic SKU host named Bastion1.\n\n Which IP addresses can you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #122",
    type: "single",
    options: [
      {
        id: "A",
        text: "IP1 only"
      },
      {
        id: "B",
        text: "IP1 and IP2 only"
      },
      {
        id: "C",
        text: "IP3, IP4, and IP5 only"
      },
      {
        id: "D",
        text: "IP1, IP2, IP4, and IP5 only"
      },
      {
        id: "E",
        text: "IP1, IP2, IP3, IP4, and IP5"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 454,
    number: 125,
    topic: "Topic 5",
    prompt: "You have two Azure subscriptions named Sub1 and Sub2.\n\n Sub1 contains a virtual machine named VM1 and a storage account named storage1.\n\n VM1 is associated to the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image679.png}}\n\n You need to move VM1 to Sub2.\n\n Which resources should you move to Sub2?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #125",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1, Disk1, and NetInt1 only"
      },
      {
        id: "B",
        text: "VM1, Disk1, and VNet1 only"
      },
      {
        id: "C",
        text: "VM1, Disk1, and storage1 only"
      },
      {
        id: "D",
        text: "VM1, Disk1, NetInt1, and VNet1"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 455,
    number: 129,
    topic: "Topic 5",
    prompt: "You have an Azure subscription.\n\n You create a routing table named RT1.\n\n You need to add a route to RT1 that specifies the next hop IP address.\n\n Which next hop type should you select?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #129",
    type: "single",
    options: [
      {
        id: "A",
        text: "Internet"
      },
      {
        id: "B",
        text: "Virtual network gateway"
      },
      {
        id: "C",
        text: "Virtual network"
      },
      {
        id: "D",
        text: "Virtual appliance"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 456,
    number: 130,
    topic: "Topic 5",
    prompt: "You have two Azure subscriptions named Sub1 and Sub2 that are linked to separate Microsoft Entra tenants.\n\n{{img:/exam-media/az-104/T5/image844.png}}\n\n You have the virtual networks shown in the following table.\n\n Which virtual networks can you peer with VNet1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #130",
    type: "single",
    options: [
      {
        id: "A",
        text: "VNet2 only"
      },
      {
        id: "B",
        text: "VNet2 and VNet3 only"
      },
      {
        id: "C",
        text: "VNet2 and VNet4 only"
      },
      {
        id: "D",
        text: "VNet2, VNet3, and VNet4 only"
      },
      {
        id: "E",
        text: "VNet2, VNet3, VNet4, and VNet5"
      }
    ],
    correct: [
      "E"
    ]
  },
  {
    id: 457,
    number: 131,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a Recovery Services vault named Vault1.\n\n You need to enable multi-user authorization (MAU) for Vault1.\n\n Which resource should you create first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #131",
    type: "single",
    options: [
      {
        id: "A",
        text: "an administrative unit"
      },
      {
        id: "B",
        text: "a managed identity"
      },
      {
        id: "C",
        text: "a resource guard"
      },
      {
        id: "D",
        text: "a custom Azure role"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 458,
    number: 132,
    topic: "Topic 5",
    prompt: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer.\n\n The effective network security configurations for VM2 are shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/image688.png}}\n\n You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\n\n You verify that the Load Balancer rules are configured correctly.\n\n You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\n\n Solution: You create an inbound security rule that allows any traffic from the AzureLoadBalancer source and has a priority of 150.\n\n Does this meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #132",
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
    id: 459,
    number: 133,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T5/image843.png}}\n\n You create a route table named RT1 in the East US Azure region.\n\n To which resources can you associate RT1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #133",
    type: "single",
    options: [
      {
        id: "A",
        text: "VNet1 only"
      },
      {
        id: "B",
        text: "Subnet1 only"
      },
      {
        id: "C",
        text: "VNet1 and NIC1 only"
      },
      {
        id: "D",
        text: "Subnet1 and NIC1 only"
      },
      {
        id: "E",
        text: "VNet1, Subnet1, and NIC1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 460,
    number: 134,
    topic: "Topic 5",
    prompt: "You create an Azure VM named VM1 that runs Windows Server 2019.\n\n VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T5/image690.png}}\n\n You need to enable Desired State Configuration for VM1.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #134",
    type: "single",
    options: [
      {
        id: "A",
        text: "Connect to VM1."
      },
      {
        id: "B",
        text: "Start VM1."
      },
      {
        id: "C",
        text: "Capture a snapshot of VM1."
      },
      {
        id: "D",
        text: "Configure a DNS name for VM1."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 461,
    number: 135,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image728.png}}\n\n The subnets have the IP address spaces shown in the following table.\n\n{{img:/exam-media/az-104/T5/image729.png}}\n\n You plan to create a container app named contapp1 in the East US Azure region.\n\n You need to create a container app environment named con-env1 that meets the following requirements:\n\n • Uses its own virtual network.\n • Uses its own subnet.\n • Is connected to the smallest possible subnet.\n\n To which virtual networks can you connect con-env1, and which subnet mask should you use? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T5/image730.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image939.png}}\nSource: Az-104 T5.apkg #135",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "VNET2 only"
      },
      {
        id: "B",
        text: "VNET3 only"
      },
      {
        id: "C",
        text: "VNET1 or VNET3 only"
      },
      {
        id: "D",
        text: "/23"
      },
      {
        id: "E",
        text: "/26"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 462,
    number: 136,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image732.png}}\n\n All the virtual networks are peered. Each virtual network contains nine virtual machines.\n\n You need to configure secure RDP connections to the virtual machines by using Azure Bastion.\n\n What is the minimum number of Bastion hosts required?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #136",
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
        text: "9"
      },
      {
        id: "D",
        text: "10"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 463,
    number: 137,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image733.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/image734.png}}\n\n Each virtual machine contains only a private IP address.\n\n You create an Azure bastion for VNet1 as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T5/image735.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image940.png}}\nSource: Az-104 T5.apkg #137",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "The Remote Desktop Connection client (mstc.exe) can be used to connect to VM1 through to VM1 through Bastion1",
        answer: false
      },
      {
        id: "s2",
        text: "The Azure Portal can use SSH to connect to VM2 through Bastion1",
        answer: true
      },
      {
        id: "s3",
        text: "The Azure Portal can be used to connect to VM3 through Bastion1",
        answer: false
      }
    ]
  },
  {
    id: 464,
    number: 138,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image738.png}}\n\n The subscription contains the subnets shown in the following table.\n\n{{img:/exam-media/az-104/T5/image739.png}}\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T5/image740.png}}\n\n You create a service endpoint policy named Policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription.\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T5/image741.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image941.png}}\nSource: Az-104 T5.apkg #138",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Policy1 can be applied to Subnet3",
        answer: true
      },
      {
        id: "s2",
        text: "Only storage1 and storage2 can be accessed from VNet2",
        answer: false
      },
      {
        id: "s3",
        text: "Only storage2 can be accessed from VNet3",
        answer: false
      }
    ]
  },
  {
    id: 465,
    number: 139,
    topic: "Topic 5",
    prompt: "You have an Azure virtual network named VNet1 that contains the following settings:\n\n • IPv4 address space: 172.16.10.0/24\n • Subnet name: Subnet1\n • Subnet address range: 172.16.10.0/25\n\n What is the maximum number of virtual machines that can connect to Subnet1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #139",
    type: "single",
    options: [
      {
        id: "A",
        text: "24"
      },
      {
        id: "B",
        text: "25"
      },
      {
        id: "C",
        text: "123"
      },
      {
        id: "D",
        text: "128"
      },
      {
        id: "E",
        text: "251"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 466,
    number: 140,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a resource group named RG1 and a virtual network named VNet1.\n\n You plan to create an Azure container instance named container1.\n\n You need to be able to configure DNS name label scope reuse for container1.\n\n What should you configure for container1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #140",
    type: "single",
    options: [
      {
        id: "A",
        text: "the private networking type"
      },
      {
        id: "B",
        text: "the public networking type"
      },
      {
        id: "C",
        text: "a new subnet on VNet1"
      },
      {
        id: "D",
        text: "a confidential SKU"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 467,
    number: 141,
    topic: "Topic 5",
    prompt: "You have the Azure virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/image743.png}}\n\n VNET1, VNET2, and VNET3 are peered.\n\n VM4 has a DNS server that is authoritative for a zone named contoso.com and contains the records shown in the following table.\n\n{{img:/exam-media/az-104/T5/image744.png}}\n\n The virtual networks are configured to use the DNS servers shown in the following table.\n\n{{img:/exam-media/az-104/T5/image745.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #141",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "From VM1, server1.contoso.com resolves to 131.107.3.3",
        answer: false
      },
      {
        id: "s2",
        text: "From VM2, server1.contoso.com resolves to 131.107.3.3",
        answer: true
      },
      {
        id: "s3",
        text: "From VM3, server2.contoso.com resolves to 131.107.2.4",
        answer: false
      }
    ]
  },
  {
    id: 468,
    number: 142,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains a resource group named RG1.\n\n You plan to create an Azure Resource Manager (ARM) template to deploy a new virtual machine named VM1. VM1 must support the capture of performance data.\n\n You need to specify resource dependencies for the ARM template.\n\n In which order should you deploy the resources? To answer, move all resources from the list of resources to the answer area and arrange them in the correct order.\n\n{{img:/exam-media/az-104/T5/image748.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image749.png}}\nSource: Az-104 T5.apkg #142",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "virtual network"
      },
      {
        id: "B",
        text: "network interface"
      },
      {
        id: "C",
        text: "virtual machine"
      },
      {
        id: "D",
        text: "Azure Monitor extension"
      }
    ],
    correct: [
      "A",
      "B",
      "C",
      "D"
    ]
  },
  {
    id: 469,
    number: 143,
    topic: "Topic 5",
    prompt: "You have an Azure subscription.\n\n You are creating a new Azure container instance that will have the following settings:\n\n • Container name: cont1\n • SKU: Standard\n • OS type: Windows\n • Networking type: Public\n • Memory (GiB): 2.5\n • Number of CPU cores: 2\n\n You discover that the Private setting for Networking type is unavailable.\n\n You need to ensure that cont1 can be configured to use private networking.\n\n Which setting should you change?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #143",
    type: "single",
    options: [
      {
        id: "A",
        text: "Memory (GiB)"
      },
      {
        id: "B",
        text: "Networking type"
      },
      {
        id: "C",
        text: "Number of CPU cores"
      },
      {
        id: "D",
        text: "OS type"
      },
      {
        id: "E",
        text: "SKU"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 470,
    number: 144,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image750.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T5/image751.png}}\n\n All the virtual machines have only private IP addresses.\n\n You deploy an Azure Bastion host named Bastion1 to VNet1.\n\n To which virtual machines can you connect through Bastion1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #144",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "VM1 and VM2 only"
      },
      {
        id: "C",
        text: "VM1 and VM3 only"
      },
      {
        id: "D",
        text: "VM1, VM2, and VM3"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 471,
    number: 145,
    topic: "Topic 5",
    prompt: "You have the Azure virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image817.png}}\n\n Which virtual networks can you peer with VNet1?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #145",
    type: "single",
    options: [
      {
        id: "A",
        text: "VNet2, VNet3, and VNet4"
      },
      {
        id: "B",
        text: "VNet2 only"
      },
      {
        id: "C",
        text: "VNet3 and VNet4 only"
      },
      {
        id: "D",
        text: "VNet2 and VNet3 only"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 472,
    number: 146,
    topic: "Topic 5",
    prompt: "You have an Azure subscription.\n\n You plan to migrate 50 virtual machines from VMware vSphere to the subscription.\n\n You create a Recovery Services vault.\n\n What should you do next?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #146",
    type: "single",
    options: [
      {
        id: "A",
        text: "Configure an extended network."
      },
      {
        id: "B",
        text: "Create a recovery plan."
      },
      {
        id: "C",
        text: "Deploy an Open Virtualization Application (OVA) template to vSphere."
      },
      {
        id: "D",
        text: "Configure a virtual network."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 473,
    number: 147,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image791.png}}\n\n Each virtual network has 50 connected virtual machines.\n\n You need to implement Azure Bastion. The solution must meet the fallowing requirements:\n\n • Support host scaling.\n • Support uploading and downloading files.\n • Support the virtual machines on both VNet1 and VNet2.\n • Minimize the number of addresses on the Azure Bastion subnet.\n\n How should you configure Azure Bastion? To answer, select the options in the answer area.\n\n NOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T5/image792.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T5/image793.png}}\nSource: Az-104 T5.apkg #147",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "/24"
      },
      {
        id: "B",
        text: "/26"
      },
      {
        id: "C",
        text: "Standard SKU with a static allocation"
      },
      {
        id: "D",
        text: "Basic SKU with a static allocation"
      },
      {
        id: "E",
        text: "Basic SKU with a dynamic allocation"
      }
    ],
    correct: [
      "B",
      "C"
    ]
  },
  {
    id: 474,
    number: 148,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T5/image816.png}}\n\n You need to ensure that all the traffic between VNet1 and VNet2 traverses the Microsoft backbone network.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #148",
    type: "single",
    options: [
      {
        id: "A",
        text: "a private endpoint"
      },
      {
        id: "B",
        text: "peering"
      },
      {
        id: "C",
        text: "Express Route"
      },
      {
        id: "D",
        text: "a route table"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 475,
    number: 149,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2. VNet1 has a VPN gateway that uses static routing,\n\n The on-premises network has a VPN connection that uses the VPN gateway of VNet1.\n\n You need to configure access for users on the on-premises network to connect to a virtual machine on VNet2. The solution must minimize costs.\n\n Which type of connectivity should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #149",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Firewall with a private IP address"
      },
      {
        id: "B",
        text: "service chaining and user-defined routes (UDRs)"
      },
      {
        id: "C",
        text: "Azure Application Gateway"
      },
      {
        id: "D",
        text: "ExpressRoute circuits to VNet2"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 476,
    number: 150,
    topic: "Topic 5",
    prompt: "You have an Azure subscription that contains two peered virtual networks named VNet1 and VNet2.\n\n You have a Network Virtual Appliance (NVA) named NetVA1.\n\n You need to ensure that the traffic from VNet1 to VNet2 is inspected by using NetVA1.\n\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T5.apkg #150",
    type: "single",
    options: [
      {
        id: "A",
        text: "a local network gateway"
      },
      {
        id: "B",
        text: "a route table that has custom routes"
      },
      {
        id: "C",
        text: "a service endpoint"
      },
      {
        id: "D",
        text: "IP address reservations"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 477,
    number: 1,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that has a Recovery Services vault named Vault1. The subscription contains the virtual machines shown in the following table:\n\n{{img:/exam-media/az-104/T6/0052600001.png}}\n\n You plan to schedule backups to occur every night at 23:00.\n Which virtual machines can you back up by using Azure Backup?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #1",
    type: "single",
    options: [
      {
        id: "A",
        text: "VM1 and VM3 only"
      },
      {
        id: "B",
        text: "VM1, VM2, VM3 and VM4"
      },
      {
        id: "C",
        text: "VM1 and VM2 only"
      },
      {
        id: "D",
        text: "VM1 only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 478,
    number: 2,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a virtual machine named VM1.\n\n You plan to deploy an Azure Monitor alert rule that will trigger an alert when CPU usage on VM1 exceeds 80 percent.\n\n You need to ensure that the alert rule sends an email message to two users named User1 and User2.\n\n What should you create for Azure Monitor?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #2",
    type: "single",
    options: [
      {
        id: "A",
        text: "an action group"
      },
      {
        id: "B",
        text: "a mail-enabled security group"
      },
      {
        id: "C",
        text: "a distribution group"
      },
      {
        id: "D",
        text: "a Microsoft 365 group"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 479,
    number: 3,
    topic: "Topic 6",
    prompt: "You have the Azure virtual machines shown in the following table:\n\n{{img:/exam-media/az-104/T6/0053100001.png}}\n\n You have a Recovery Services vault that protects VM1 and VM2.\n You need to protect VM3 and VM4 by using Recovery Services.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #3",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a new Recovery Services vault"
      },
      {
        id: "B",
        text: "Create a storage account"
      },
      {
        id: "C",
        text: "Configure the extensions for VM3 and VM4"
      },
      {
        id: "D",
        text: "Create a new backup policy"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 480,
    number: 4,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure Storage account named storage1 and the users shown in the following table.\n\n{{img:/exam-media/az-104/T6/0053200001.png}}\n\n You plan to monitor storage1 and to configure email notifications for the signals shown in the following table.\n\n{{img:/exam-media/az-104/T6/0053200002.png}}\n\n You need to identify the minimum number of alert rules and action groups required for the planned monitoring.\n How many alert rules and action groups should you identify? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0053300001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0053400001.jpg}}\nSource: Az-104 T6.apkg #4",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "3"
      },
      {
        id: "B",
        text: "4"
      },
      {
        id: "C",
        text: "2"
      },
      {
        id: "D",
        text: "3"
      },
      {
        id: "E",
        text: "4"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Alert rules"
      },
      {
        id: "t2",
        text: "Action groups"
      }
    ],
    correct: [
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 481,
    number: 5,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the identities shown in the following table.\n\n{{img:/exam-media/az-104/T6/0053500001.png}}\n\n User1, Principal1, and Group1 are assigned the Monitoring Reader role.\n An action group named AG1 has the Email Azure Resource Manager Role notification type and is configured to email the Monitoring Reader role.\n You create an alert rule named Alert1 that uses AG1.\n You need to identity who will receive an email notification when Alert1 is triggered.\n Who should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #5",
    type: "single",
    options: [
      {
        id: "A",
        text: "User1 and Principal1 only"
      },
      {
        id: "B",
        text: "User1, User2, Principal1, and Principal2"
      },
      {
        id: "C",
        text: "User1 only"
      },
      {
        id: "D",
        text: "User1 and User2 only"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 482,
    number: 6,
    topic: "Topic 6",
    prompt: "You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1.\n You create a backup policy named Policy1 as shown in the exhibit. (Click the Exhibit tab.)\n\n{{img:/exam-media/az-104/T6/0053600001.jpg}}\n\n You configure the backup of VM1 to use Policy1 on Thursday, January 1 at 1:00 AM.\n You need to identify the number of available recovery points for VM1.\n How many recovery points are available on January 8 and January 15? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0053700001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0053800001.jpg}}\nSource: Az-104 T6.apkg #6",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "6"
      },
      {
        id: "B",
        text: "9"
      },
      {
        id: "C",
        text: "8"
      },
      {
        id: "D",
        text: "17"
      },
      {
        id: "E",
        text: "5"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Jan 8"
      },
      {
        id: "t2",
        text: "Jan 15"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 483,
    number: 7,
    topic: "Topic 6",
    prompt: "You have the web apps shown in the following table.\n\n{{img:/exam-media/az-104/T6/0053900001.png}}\n\n You need to monitor the performance and usage of the apps by using Azure Application Insights. The solution must minimize modifications to the application code.\n What should you do on each app? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0054000001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0054100001.png}}\nSource: Az-104 T6.apkg #7",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Install the Application Insights Agent"
      },
      {
        id: "B",
        text: "Install the Application Insights Agent"
      },
      {
        id: "C",
        text: "Install the Azure Monitor agent"
      },
      {
        id: "D",
        text: "Install the Application Insights SDK"
      },
      {
        id: "E",
        text: "Install the Application Insights SDK"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "App1"
      },
      {
        id: "t2",
        text: "App2"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 484,
    number: 8,
    topic: "Topic 6",
    prompt: "You have an Azure virtual machine named VM1.\n You use Azure Backup to create a backup of VM1 named Backup1.\n After creating Backup1, you perform the following changes to VM1:\n ✑ Modify the size of VM1.\n ✑ Copy a file named Budget.xls to a folder named Data.\n ✑ Reset the password for the built-in administrator account.\n ✑ Add a data disk to VM1.\n An administrator uses the Replace existing option to restore VM1 from Backup1.\n You need to ensure that all the changes to VM1 are restored.\n Which change should you perform again?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #8",
    type: "single",
    options: [
      {
        id: "A",
        text: "Modify the size of VM1."
      },
      {
        id: "B",
        text: "Reset the password for the built-in administrator account."
      },
      {
        id: "C",
        text: "Add a data disk."
      },
      {
        id: "D",
        text: "Copy Budget.xls to Data."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 485,
    number: 9,
    topic: "Topic 6",
    prompt: "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T6/0054300001.png}}\n\n You enable password reset for contoso.onmicrosoft.com as shown in the Password Reset exhibit. (Click the Password Reset tab.)\n\n{{img:/exam-media/az-104/T6/0054300002.png}}\n\n You configure the authentication methods for password reset as shown in the Authentication Methods exhibit. (Click the Authentication Methods tab.)\n\n{{img:/exam-media/az-104/T6/0054400001.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #9",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "After User2 answers three security questions correctly, he can reset his password immediately",
        answer: false
      },
      {
        id: "s2",
        text: "If User1 forgets her passweord, she can reset the password by using the mobile phone app.",
        answer: false
      },
      {
        id: "s3",
        text: "User3 can add security questions to the passweord reset process",
        answer: false
      }
    ]
  },
  {
    id: 486,
    number: 10,
    topic: "Topic 6",
    prompt: "Your company has a main office in London that contains 100 client computers.\n Three years ago, you migrated to Azure Active Directory (Azure AD).\n The company's security policy states that all personal devices and corporate-owned devices must be registered or joined to Azure AD.\n A remote user named User1 is unable to join a personal device to Azure AD from a home network.\n You verify that User1 was able to join devices to Azure AD in the past.\n You need to ensure that User1 can join the device to Azure AD.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #10",
    type: "single",
    options: [
      {
        id: "A",
        text: "Assign the User administrator role to User1."
      },
      {
        id: "B",
        text: "From the Device settings blade, modify the Maximum number of devices per user setting."
      },
      {
        id: "C",
        text: "Create a point-to-site VPN from the home network of User1 to Azure."
      },
      {
        id: "D",
        text: "From the Device settings blade, modify the Users may join devices to Azure AD setting."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 487,
    number: 11,
    topic: "Topic 6",
    prompt: "You have two Azure App Service app named App1 and App2. Each app has a production deployment slot and a test deployment slot.\n The Backup Configuration settings for the production slots are shown in the following table.\n\n{{img:/exam-media/az-104/T6/0054700001.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.\n Hot Area:",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #11",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "On January 15, 2021, App1 will have only one backup in storage",
        answer: false
      },
      {
        id: "s2",
        text: "On February 6, 2021, you can access the backup of the App2 test slot from January 15, 2021",
        answer: false
      },
      {
        id: "s3",
        text: "On January 15,2021, you can restore the App2 production slot backop from January 6 to the App2 test slot",
        answer: true
      }
    ]
  },
  {
    id: 488,
    number: 12,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com. The tenant is synced to the on-premises Active\n Directory domain. The domain contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T6/0054900001.png}}\n\n You enable self-service password reset (SSPR) for all users and configure SSPR to have the following authentication methods:\n ✑ Number of methods required to reset: 2\n ✑ Methods available to users: Mobile phone, Security questions\n ✑ Number of questions required to register: 3\n ✑ Number of questions required to reset: 3\n You select the following security questions:\n ✑ What is your favorite food?\n ✑ In what city was your first job?\n ✑ What was the name of your first pet?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #12",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "SecAdmin1 must answer the following question during the self-service password reset: In what city was your first job?",
        answer: false
      },
      {
        id: "s2",
        text: "BillAdmin1 must answer the following question during the self-service password reset: What is you favorite food?",
        answer: false
      },
      {
        id: "s3",
        text: "User1 must answer the following question during the self-service password reset: What was the name of your first pet?",
        answer: true
      }
    ]
  },
  {
    id: 489,
    number: 13,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\n\n{{img:/exam-media/az-104/T6/0055100001.png}}\n\n User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\n You need to create new user accounts in external.contoso.onmicrosoft.com.\n Solution: You instruct User1 to create the user accounts.\n Does that meet the goal?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #13",
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
    id: 490,
    number: 14,
    topic: "Topic 6",
    prompt: "You have an existing Azure subscription that contains 10 virtual machines.\n You need to monitor the latency between your on-premises network and the virtual machines.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #14",
    type: "single",
    options: [
      {
        id: "A",
        text: "Service Map"
      },
      {
        id: "B",
        text: "Connection troubleshoot"
      },
      {
        id: "C",
        text: "Network Performance Monitor"
      },
      {
        id: "D",
        text: "Effective routes"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 491,
    number: 15,
    topic: "Topic 6",
    prompt: "You have an Azure App Service plan named ASP1.\n CPU usage for ASP1 is shown in the following exhibit.\n\n{{img:/exam-media/az-104/T6/0055300001.jpg}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0055400001.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #15",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "once"
      },
      {
        id: "B",
        text: "four times"
      },
      {
        id: "C",
        text: "six times"
      },
      {
        id: "D",
        text: "scaled up"
      },
      {
        id: "E",
        text: "scaled down"
      }
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
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 492,
    number: 16,
    topic: "Topic 6",
    prompt: "You have an Azure Linux virtual machine that is protected by Azure Backup.\n One week ago, two files were deleted from the virtual machine.\n You need to restore the deleted files to an on-premises Windows Server 2016 computer as quickly as possible.\n Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T6/0055700001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0055800001.png}}\nSource: Az-104 T6.apkg #16",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "From the Azure Portal, click File Recovery"
      },
      {
        id: "B",
        text: "Select a restore point that contains the deleted files"
      },
      {
        id: "C",
        text: "Download and run the script to mount a drive on the local computer"
      },
      {
        id: "D",
        text: "Copy the files by using File Explorer"
      },
      {
        id: "E",
        text: "From Azure portal, click Restore VM from the vault"
      }
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
      "t1:A",
      "t2:B",
      "t3:C",
      "t4:D"
    ]
  },
  {
    id: 493,
    number: 17,
    topic: "Topic 6",
    prompt: "You purchase a new Azure subscription named Subscription1.\n You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup.\n You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days.\n What should you do? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0056200001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0056300001.jpg}}\nSource: Az-104 T6.apkg #17",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Box1: A Recovery Service vault"
      },
      {
        id: "B",
        text: "Box2: a backup policy"
      },
      {
        id: "C",
        text: "Box1: a file share"
      },
      {
        id: "D",
        text: "Box1 a blob container"
      },
      {
        id: "E",
        text: "Box2: batch job"
      }
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
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 494,
    number: 18,
    topic: "Topic 6",
    prompt: "You have an Azure virtual machine named VM1.\n Azure collects events from VM1.\n You are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1.\n Which target resource should you monitor in the alert rule?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #18",
    type: "single",
    options: [
      {
        id: "A",
        text: "virtual machine extension"
      },
      {
        id: "B",
        text: "virtual machine"
      },
      {
        id: "C",
        text: "metric alert"
      },
      {
        id: "D",
        text: "Azure Log Analytics workspace"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 495,
    number: 19,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains 100 virtual machines.\n You regularly create and delete virtual machines.\n You need to identify unattached disks that can be deleted.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #19",
    type: "single",
    options: [
      {
        id: "A",
        text: "From Azure Cost Management, view Cost Analysis"
      },
      {
        id: "B",
        text: "From Azure Advisor, modify the Advisor configuration"
      },
      {
        id: "C",
        text: "From Microsoft Azure Storage Explorer, view the Account Management properties"
      },
      {
        id: "D",
        text: "From Azure Cost Management, view Advisor Recommendations"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 496,
    number: 20,
    topic: "Topic 6",
    prompt: "You have an Azure web app named webapp1.\n Users report that they often experience HTTP 500 errors when they connect to webapp1.\n You need to provide the developers of webapp1 with real-time access to the connection errors. The solution must provide all the connection error details.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #20",
    type: "single",
    options: [
      {
        id: "A",
        text: "From webapp1, enable Web server logging"
      },
      {
        id: "B",
        text: "From Azure Monitor, create a workbook"
      },
      {
        id: "C",
        text: "From Azure Monitor, create a Service Health alert"
      },
      {
        id: "D",
        text: "From webapp1, turn on Application Logging"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 497,
    number: 21,
    topic: "Topic 6",
    prompt: "You have an Azure web app named App1.\n You need to monitor the availability of App1 by using a multi-step web test.\n What should you use in Azure Monitor?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #21",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Service Health"
      },
      {
        id: "B",
        text: "Azure Application Insights"
      },
      {
        id: "C",
        text: "the Diagnostic settings"
      },
      {
        id: "D",
        text: "metrics"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 498,
    number: 22,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that has diagnostic logging enabled and is configured to send logs to a Log Analytics workspace.\n You are investigating a service outage.\n You need to view the event time, the event name, and the affected resources.\n How should you complete the query? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0056700001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0056800001.jpg}}\nSource: Az-104 T6.apkg #22",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "AzureActivity"
      },
      {
        id: "B",
        text: "NetworkMonitoring"
      },
      {
        id: "C",
        text: "| extend"
      },
      {
        id: "D",
        text: "| project"
      },
      {
        id: "E",
        text: "| join"
      }
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
      "t1:A",
      "t2:D"
    ]
  },
  {
    id: 499,
    number: 23,
    topic: "Topic 6",
    prompt: "You have a Recovery Services vault named RSV1. RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days.\n RSV1 performs daily backups of VM1. VM1 hosts a static website that was updated eight days ago.\n You need to recover VM1 to a point eight days ago. The solution must minimize downtime.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #23",
    type: "single",
    options: [
      {
        id: "A",
        text: "Deallocate VM1."
      },
      {
        id: "B",
        text: "Restore VM1 by using the Replace existing restore configuration option."
      },
      {
        id: "C",
        text: "Delete VM1."
      },
      {
        id: "D",
        text: "Restore VM1 by using the Create new restore configuration option."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 500,
    number: 24,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/0057000001.png}}\n\n You plan to create a data collection rule named DCR1 in Azure Monitor.\n Which resources can you set as data sources in DCR1, and which resources can you set as destinations in DCR1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0057100001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0057200001.jpg}}\nSource: Az-104 T6.apkg #24",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "VM1 only"
      },
      {
        id: "B",
        text: "Workspace1 only"
      },
      {
        id: "C",
        text: "VM1 and storage1 only"
      },
      {
        id: "D",
        text: "VM1, storage1 and DB1 only"
      },
      {
        id: "E",
        text: "Workspace1 and storage1 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Data sources"
      },
      {
        id: "t2",
        text: "Destinations"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 501,
    number: 25,
    topic: "Topic 6",
    prompt: "You have the role assignment file shown in the following exhibit.\n\n{{img:/exam-media/az-104/T6/0057300001.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T6/0057400001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0057500001.jpg}}\nSource: Az-104 T6.apkg #25",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "User1 and User3 are"
      },
      {
        id: "B",
        text: "User3 and User4 are"
      },
      {
        id: "C",
        text: "User1 and User4"
      },
      {
        id: "D",
        text: "User1, User2 and USer4"
      },
      {
        id: "E",
        text: "User1,User2, User3 and User4"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Box1"
      },
      {
        id: "t2",
        text: "Box2"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 502,
    number: 26,
    topic: "Topic 6",
    prompt: "You have the following custom role-based access control (RBAC) role.\n\n{{img:/exam-media/az-104/T6/0057600001.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image946.png}}\nSource: Az-104 T6.apkg #26",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Users that are assigned Rile1 can assign Role1 to users",
        answer: false
      },
      {
        id: "s2",
        text: "Users that are assigned Tole1 can deploy new virtual machines",
        answer: true
      },
      {
        id: "s3",
        text: "Users that are assigned Role1 can set a static IP address on a virtual machine",
        answer: true
      }
    ]
  },
  {
    id: 503,
    number: 27,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/0057800001.png}}\n\n NSG1 is configured as shown in the following exhibit.\n\n{{img:/exam-media/az-104/T6/0057800002.jpg}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #27",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM1 can access storage1",
        answer: true
      },
      {
        id: "s2",
        text: "VM2 can access VM1 by using the HTTPS protocol",
        answer: true
      },
      {
        id: "s3",
        text: "The securit rules for NSG1 apply to any virtual machine on VNET1",
        answer: false
      }
    ]
  },
  {
    id: 504,
    number: 28,
    topic: "Topic 6",
    prompt: "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named\n VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1.\n On a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1.\n You configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2.\n You need to ensure that you can connect Client1 to VNet2.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #28",
    type: "single",
    options: [
      {
        id: "A",
        text: "Select Use the remote virtual network's gateway or Route Server on VNet1 to VNet2 peering."
      },
      {
        id: "B",
        text: "Select Use the remote virtual network s gateway or Route Server on VNet2 to VNet1 peering."
      },
      {
        id: "C",
        text: "Download and re-install the VPN client configuration package on Client1."
      },
      {
        id: "D",
        text: "Enable BGP on VPNGW1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 505,
    number: 29,
    topic: "Topic 6",
    prompt: "You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2.\n You have the resource groups shown in the following table.\n\n{{img:/exam-media/az-104/T6/0058000001.png}}\n\n You have the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T6/0058100001.png}}\n\n You assign roles to users as shown in the following table.\n\n{{img:/exam-media/az-104/T6/0058100002.png}}",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #29",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "User1 can sign in to VM1",
        answer: false
      },
      {
        id: "s2",
        text: "User2 can manage disks and disk snapshots of VM1",
        answer: false
      },
      {
        id: "s3",
        text: "User2 can manage disks and disk Snapshots of VM3",
        answer: false
      }
    ]
  },
  {
    id: 506,
    number: 30,
    topic: "Topic 6",
    prompt: "You have an Azure Active Directory (Azure AD) tenant that is linked to 10 Azure subscriptions.\n You need to centrally monitor user activity across all the subscriptions.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #30",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Application Insights Profiler"
      },
      {
        id: "B",
        text: "access reviews"
      },
      {
        id: "C",
        text: "Activity log filters"
      },
      {
        id: "D",
        text: "a Log Analytics workspace"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 507,
    number: 31,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a virtual machine name VM1.\n VM1 has an operating system disk named Disk1 and a data disk named Disk2.\n You need to back up Disk2 by using Azure Backup.\n Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T6/0058400001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/0058400002.jpg}}\nSource: Az-104 T6.apkg #31",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Create an Azure Backup vault"
      },
      {
        id: "B",
        text: "Create a backup policy and configure the backup"
      },
      {
        id: "C",
        text: "Configure a managed identity"
      },
      {
        id: "D",
        text: "Create a Recovery Services vault"
      },
      {
        id: "E",
        text: "Delegate permissions for the vault"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 508,
    number: 32,
    topic: "Topic 6",
    prompt: "You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1. NSG1 only contains the default rules.\n You need to create a rule in NSG1 to prevent the hosts on Subnet1 form connecting to the Azure portal. The hosts must be able to connect to other internet hosts.\n To what should you set Destination in the rule?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #32",
    type: "single",
    options: [
      {
        id: "A",
        text: "Any"
      },
      {
        id: "B",
        text: "IP Addresses"
      },
      {
        id: "C",
        text: "Service Tag"
      },
      {
        id: "D",
        text: "Application security group"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 509,
    number: 34,
    topic: "Topic 6",
    prompt: "You have an Azure App Service web app named App1.\n You need to collect performance traces for App1.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #34",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Application Insights Profiler"
      },
      {
        id: "B",
        text: "the Activity log"
      },
      {
        id: "C",
        text: "the Deployment center"
      },
      {
        id: "D",
        text: "the Diagnose and solve problems settings"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 510,
    number: 35,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T6/image618.png}}\n\n You deploy a web app named App1 to the West US Azure region.\n\n You need to back up App1. The solution must minimize costs.\n\n Which storage account should you use as the target for the backup?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #35",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1"
      },
      {
        id: "B",
        text: "storage2"
      },
      {
        id: "C",
        text: "storage3"
      },
      {
        id: "D",
        text: "storage4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 511,
    number: 36,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains two users named User1 and User2.\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/image619.png}}\n\n The subscription contains the alert rules shown in the following table.\n\n{{img:/exam-media/az-104/T6/image620.png}}\n\n The users perform the following action:\n\n • User1 creates a new virtual disk and attaches the disk to VM1\n • User2 creates a new resource tag and assigns the tag to RG1 and VM1\n\n Which alert rules are triggered by each user? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T6/image621.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image949.png}}\nSource: Az-104 T6.apkg #36",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "User1: No alert is triggered"
      },
      {
        id: "B",
        text: "User1: Only Alert1 is triggered"
      },
      {
        id: "C",
        text: "User2: Only Alert2 is triggered"
      },
      {
        id: "D",
        text: "User1: Alert1 and Alert2 are triggered"
      },
      {
        id: "E",
        text: "User2: Alert1 and Alert2 are triggered"
      }
    ],
    correct: [
      "D",
      "E"
    ]
  },
  {
    id: 512,
    number: 37,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains multiple virtual machines in the West US Azure region.\n\n You need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine traffic.\n\n Which two resources should you create? Each correct answer presents part of the solution.",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #37",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "a Log Analytics workspace"
      },
      {
        id: "B",
        text: "an Azure Monitor workbook"
      },
      {
        id: "C",
        text: "a storage account"
      },
      {
        id: "D",
        text: "a Microsoft Sentinel workspace"
      },
      {
        id: "E",
        text: "a Data Collection Rule (DCR) in Azure Monitor"
      }
    ],
    correct: [
      "A",
      "E"
    ]
  },
  {
    id: 513,
    number: 38,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains eight virtual machines and the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/image623.png}}\n\n You need to configure access for VNET1. The solution must meet the following requirements:\n\n • The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft backbone.\n • The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone.\n\n What is the minimum number of service endpoints you should add to VNET1?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #38",
    type: "single",
    options: [
      {
        id: "A",
        text: "1"
      },
      {
        id: "B",
        text: "2"
      },
      {
        id: "C",
        text: "3"
      },
      {
        id: "D",
        text: "5"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 514,
    number: 39,
    topic: "Topic 6",
    prompt: "You need to configure an Azure web app named contoso.azurewebsites.net to host www.contoso.com.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #39",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create A records named www.contoso.com and asuid.contoso.com."
      },
      {
        id: "B",
        text: "Create a TXT record named asuid that contains the domain verification ID."
      },
      {
        id: "C",
        text: "Create a CNAME record named asuid that contains the domain verification ID."
      },
      {
        id: "D",
        text: "Create a TXT record named www.contoso.com that has a value of contoso.azurewebsites.net."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 515,
    number: 40,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named Workspace1. Each NSG is connected to a virtual machine.\n\n You need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network traffic is detected.\n\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #40",
    type: "single",
    options: [
      {
        id: "A",
        text: "Deploy Connection Monitor."
      },
      {
        id: "B",
        text: "Configure data collection endpoints."
      },
      {
        id: "C",
        text: "Configure a private link."
      },
      {
        id: "D",
        text: "Configure NSG flow logs."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 516,
    number: 41,
    topic: "Topic 6",
    prompt: "You have an Azure subscription named Sub1 that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/image624.png}}\n\n Sub1 contains the following alert rule:\n\n • Name: Alert1\n • Scope: All resource groups in Sub1\n o Include all future resources\n • Condition: All administrative operations\n • Actions: Action1\n\n Sub1 contains the following alert processing rule:\n\n • Name: Rule1\n • Scope: Sub1\n • Rule type: Suppress notifications\n • Apply the rule: On a specific time\n o Start: August 10, 2022\n o End: August 13, 2022",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image626.png}}\nSource: Az-104 T6.apkg #41",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "If you create a resource group in Sub1 on August 11, 2022, Alert1 is listed in the Azure portal",
        answer: true
      },
      {
        id: "s2",
        text: "If you create a resource group in Sub1 on August 12, 2022, an email is sent to admin1@contoso.com",
        answer: false
      },
      {
        id: "s3",
        text: "If you add a tag to RG1 on August 15, 2022, an email is sent to admin1@contoso.com",
        answer: true
      }
    ]
  },
  {
    id: 517,
    number: 42,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a storage account named storage1 in the North Europe Azure region.\n\n You need to ensure that when blob data is added to storage1, a secondary copy is created in the East US region. The solution must minimize administrative effort.\n\n What should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #42",
    type: "single",
    options: [
      {
        id: "A",
        text: "operational backup"
      },
      {
        id: "B",
        text: "object replication"
      },
      {
        id: "C",
        text: "geo-redundant storage (GRS)"
      },
      {
        id: "D",
        text: "a lifecycle management rule"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 518,
    number: 43,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains two Log Analytics workspaces named Workspace1 and Workspace2 and 100 virtual machines that run Windows Server.\n\n You need to collect performance data and events from the virtual machines. The solution must meet the following requirements:\n\n • Logs must be sent to Workspace1 and Workspace 2.\n • All Windows events must be captured.\n • All security events must be captured.\n\n What should you install and configure on each virtual machine?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #43",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Azure Monitor agent"
      },
      {
        id: "B",
        text: "the Windows Azure diagnostics extension (WAD)"
      },
      {
        id: "C",
        text: "the Windows VM agent"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 519,
    number: 44,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a virtual machine named VM1 and an Azure function named App1.\n\n You need to create an alert rule that will run App1 if VM1 stops.\n\n What should you create for the alert rule?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #44",
    type: "single",
    options: [
      {
        id: "A",
        text: "an application security group"
      },
      {
        id: "B",
        text: "a security group that has dynamic device membership"
      },
      {
        id: "C",
        text: "an action group"
      },
      {
        id: "D",
        text: "an application group"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 520,
    number: 45,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a virtual network named VNet1.\n\n VNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters.\n\n You need to create a dashboard to display detailed metrics and a visual representation of the network topology.\n\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #45",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Monitor Network Insights"
      },
      {
        id: "B",
        text: "a Data Collection Rule (DCR)"
      },
      {
        id: "C",
        text: "Azure Virtual Network Watcher"
      },
      {
        id: "D",
        text: "Log Analytics"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 521,
    number: 46,
    topic: "Topic 6",
    prompt: "You deploy Azure virtual machines to three Azure regions\n\n Each region contains a virtual network. Each virtual network contains multiple subnets peered in a full mesh topology.\n\n Each subnet contains a network security group (NSG) that has defined rules.\n\n A user reports that he cannot use port 33000 to connect from a virtual machine in one region to a virtual machine in another region.\n\n Which two options can you use to diagnose the issue? Each correct answer presents a complete solution.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #46",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Azure Virtual Network Manager"
      },
      {
        id: "B",
        text: "IP flow verify"
      },
      {
        id: "C",
        text: "Azure Monitor Network Insights"
      },
      {
        id: "D",
        text: "Connection troubleshoot"
      },
      {
        id: "E",
        text: "elective security rules"
      }
    ],
    correct: [
      "B",
      "D"
    ]
  },
  {
    id: 522,
    number: 47,
    topic: "Topic 6",
    prompt: "You have an Azure subscription.\n\n You need to receive an email alert when a resource lock is removed from any resource in the subscription.\n\n What should you use to create an activity log alert in Azure Monitor?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #47",
    type: "single",
    options: [
      {
        id: "A",
        text: "a resource, a condition, and an action group"
      },
      {
        id: "B",
        text: "a resource, a condition, and a Microsoft 365 group"
      },
      {
        id: "C",
        text: "a Log Analytics workspace, a resource, and an action group"
      },
      {
        id: "D",
        text: "a data collection endpoint, an application security group, and a resource group"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 523,
    number: 48,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the alerts shown in the following exhibit.\n\n{{img:/exam-media/az-104/T6/image680.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T6/image681.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image950.png}}\nSource: Az-104 T6.apkg #48",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "cannot be changed"
      },
      {
        id: "B",
        text: "cannot be changed"
      },
      {
        id: "C",
        text: "can be changed to New or Acknowledged"
      },
      {
        id: "D",
        text: "can be changed to New or Acknowledged"
      },
      {
        id: "E",
        text: "can be changed to New only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Alert1"
      },
      {
        id: "t2",
        text: "Alert2"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 524,
    number: 49,
    topic: "Topic 6",
    prompt: "You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit:\n\n{{img:/exam-media/az-104/T6/image752.png}}\n\n Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T6/image753.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image754.png}}\nSource: Az-104 T6.apkg #49",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "30days"
      },
      {
        id: "B",
        text: "30days"
      },
      {
        id: "C",
        text: "36months"
      },
      {
        id: "D",
        text: "10years"
      },
      {
        id: "E",
        text: "36 months"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "March1"
      },
      {
        id: "t2",
        text: "November1"
      }
    ],
    correct: [
      "t1:D",
      "t2:E"
    ]
  },
  {
    id: 525,
    number: 50,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the vaults shown in the following table.\n\n{{img:/exam-media/az-104/T6/image755.png}}\n\n You deploy the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T6/image756.png}}\n\n You have the backup policies shown in the following table.\n\n{{img:/exam-media/az-104/T6/image757.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image759.png}}\nSource: Az-104 T6.apkg #50",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM1 can be backed up by using Policy1",
        answer: true
      },
      {
        id: "s2",
        text: "VM2 can be backed up by using Policy3",
        answer: false
      },
      {
        id: "s3",
        text: "VM2 can be backed up by using Policy2",
        answer: true
      }
    ]
  },
  {
    id: 526,
    number: 51,
    topic: "Topic 6",
    prompt: "You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1.\n\n You plan to configure Azure Monitor for VM Insights.\n\n You need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1.\n\n What should you create first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #51",
    type: "single",
    options: [
      {
        id: "A",
        text: "a data collection rule (DCR)"
      },
      {
        id: "B",
        text: "a Log Analytics workspace"
      },
      {
        id: "C",
        text: "an Azure Monitor Private Link Scope (AMPLS)"
      },
      {
        id: "D",
        text: "a private endpoint"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 527,
    number: 52,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains the vaults shown in the following table.\n\n{{img:/exam-media/az-104/T6/image760.png}}\n\n You create a storage account that contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/image761.png}}\n\n To which vault can you back up cont1 and share1? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct answer is worth one point.\n\n{{img:/exam-media/az-104/T6/image762.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image763.png}}\nSource: Az-104 T6.apkg #52",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "cont1: Backup only"
      },
      {
        id: "B",
        text: "share1: Backup only"
      },
      {
        id: "C",
        text: "share1: Recovery only"
      },
      {
        id: "D",
        text: "cont1: Recovery only"
      },
      {
        id: "E",
        text: "cont1: Cannot be backed up to Backup1 or Recovery1"
      }
    ],
    correct: [
      "A",
      "C"
    ]
  },
  {
    id: 528,
    number: 53,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure Stream Analytics job named Job1.\n\n You need to monitor input events for Job1 to identify the number of events that were NOT processed.\n\n Which metric should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #53",
    type: "single",
    options: [
      {
        id: "A",
        text: "Out-of-Order Events"
      },
      {
        id: "B",
        text: "Output Events"
      },
      {
        id: "C",
        text: "Late Input Events"
      },
      {
        id: "D",
        text: "Backlogged Input Events"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 529,
    number: 54,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure SQL database named DB1.\n\n You plan to use Azure Monitor to monitor the performance of DB1. You must be able to run queries to analyze log data.\n\n Which destination should you configure in the Diagnostic settings of DB1?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #54",
    type: "single",
    options: [
      {
        id: "A",
        text: "Send to a Log Analytics workspace."
      },
      {
        id: "B",
        text: "Archive to a storage account."
      },
      {
        id: "C",
        text: "Stream to an Azure event hub."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 530,
    number: 55,
    topic: "Topic 6",
    prompt: "You have an Azure subscription. The subscription contains virtual machines that run Windows Server.\n\n You have a data collection rule (DCR) named Rule1.\n\n You plan to use the Azure Monitor Agent to collect events from Windows System event logs.\n\n You only need to collect system events that have an ID of 1001.\n\n Which type of query should you use for the data source in Rule1?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #55",
    type: "single",
    options: [
      {
        id: "A",
        text: "SQL"
      },
      {
        id: "B",
        text: "XPath"
      },
      {
        id: "C",
        text: "KQL"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 531,
    number: 56,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains a virtual machine named VM1.\n\n You have an on-premises datacenter that contains a domain controller named DC1. ExpressRoute is used to connect the on-premises datacenter to Azure.\n\n You need to use Connection Monitor to identify network latency between VM1 and DC1.\n\n What should you install on DC1?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #56",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Azure Connected Machine agent for Azure Arc-enabled servers"
      },
      {
        id: "B",
        text: "the Azure Network Watcher Agent virtual machine extension"
      },
      {
        id: "C",
        text: "the Log Analytics agent"
      },
      {
        id: "D",
        text: "an Azure Monitor agent extension"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 532,
    number: 57,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that has Traffic Analytics configured.\n\n You deploy a new virtual machine named VM1 that has the following settings:\n\n • Region: East US\n • Virtual network: VNet1\n • NIC network security group: NSG1\n\n You need to monitor VM1 traffic by using Traffic Analytics.\n\n Which settings should you configure?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #57",
    type: "single",
    options: [
      {
        id: "A",
        text: "Diagnostic settings for VM1"
      },
      {
        id: "B",
        text: "NSG flow logs for NSG1"
      },
      {
        id: "C",
        text: "Diagnostic settings for NSG1"
      },
      {
        id: "D",
        text: "Insights for VM1"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 533,
    number: 58,
    topic: "Topic 6",
    prompt: "You have an Azure subscription. The subscription contains 10 virtual machines that run Windows Server. Each virtual machine hosts a website in IIS and has the Azure Monitor Agent installed.\n\n You need to collect the IIS logs from each virtual machine and store them in a Log Analytics workspace.\n\n What should you configure first?",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #58",
    type: "single",
    options: [
      {
        id: "A",
        text: "a data collection endpoint"
      },
      {
        id: "B",
        text: "an Azure Monitor Private Link Scope (AMPLS)"
      },
      {
        id: "C",
        text: "Diagnostic settings"
      },
      {
        id: "D",
        text: "VM insights"
      },
      {
        id: "E",
        text: "a private endpoint"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 534,
    number: 59,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains two storage accounts named contoso101 and contoso102.\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T6/image794.png}}\n\n VNet1 has service endpoints configured as shown in the Service endpoints exhibit. (Click the Service endpoints tab.)\n\n{{img:/exam-media/az-104/T6/image795.png}}\n\n The Microsoft.Storage service endpoint has the service endpoint policy shown in the Microsoft.Storage exhibit. (Click the Microsoft.Storage tab.)\n\n{{img:/exam-media/az-104/T6/image796.png}}\n\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Source: Az-104 T6.apkg #59",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "VM1 can access contoso 102",
        answer: false
      },
      {
        id: "s2",
        text: "VM2 can access contoso101",
        answer: false
      },
      {
        id: "s3",
        text: "VM2 uses a private IP address to access Azure AD",
        answer: true
      }
    ]
  },
  {
    id: 535,
    number: 60,
    topic: "Topic 6",
    prompt: "You have an Azure subscription that contains an Azure Backup vault named Backup1, a Recovery Services vault named Recovery1, and the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/image879.png}}\n\n You plan to back up the resources.\n\n Which resource can be backed up to Backup1, and which resource can be backed up to Recovery1? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T6/image880.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image881.png}}\nSource: Az-104 T6.apkg #60",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "Backup1: App1"
      },
      {
        id: "B",
        text: "Backup1: Disk1"
      },
      {
        id: "C",
        text: "Backup1: DB1"
      },
      {
        id: "D",
        text: "Recovery1: DB1"
      },
      {
        id: "E",
        text: "Recovery1: VM1"
      }
    ],
    correct: [
      "B",
      "E"
    ]
  },
  {
    id: 536,
    number: 61,
    topic: "Topic 6",
    prompt: "ADatum Corporation is consulting firm that has a main office in Montreal and branch offices in Seattle and New York.\n\n Existing Environment -\n\n Azure Environment -\n\n ADatum has an Azure subscription that contains three resource groups named RG1, RG2, and RG3.\n\n The subscription contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T6/image865.png}}\n\n The subscription contains the virtual machines shown in the following table.\n\n{{img:/exam-media/az-104/T6/image866.png}}\n\n The subscription has an Azure container registry that contains the images shown in the following table.\n\n{{img:/exam-media/az-104/T6/image867.png}}\n\n The subscription contains the resources shown in the following table.\n\n{{img:/exam-media/az-104/T6/image868.png}}\n\n Azure Key Vault -\n\n The subscription contains an Azure key vault named Vault1.\n\n Vault1 contains the certificates shown in the following table.\n\n{{img:/exam-media/az-104/T6/image869.png}}\n\n Vault1 contains the keys shown in the following table.\n\n{{img:/exam-media/az-104/T6/image870.png}}\n\n Microsoft Entra Environment -\n\n ADatum has a Microsoft Entra tenant named adatum.com that is linked to the Azure subscription and contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T6/image871.png}}\n\n The tenant contains the groups shown in the following table.\n\n{{img:/exam-media/az-104/T6/image872.png}}\n\n The adatum.com tenant has a custom security attribute named Attribute1.\n\n Planned Changes -\n\n ADatum plans to implement the following changes:\n\n • Configure a data collection rule (DCR) named DCR1 to collect only system events that have an event ID of 4648 from VM2 and VM4.\n • In storage1, create a new container named cont2 that has the following access policies: o Three stored access policies named Stored1, Stored2, and Stored3 o A legal hold for immutable blob storage\n • Whenever possible, use directories to organize storage account content.\n • Grant User1 the permissions required to link Zone1 to VNet1.\n • Assign Attribute1 to supported adatum.com resources.\n • In storage2, create an encryption scope named Scope1.\n • Deploy new containers by using Image1 or Image2.\n\n Technical Requirements -\n\n ADatum must meet the following technical requirements:\n\n • Use TLS for WebApp1.\n • Follow the principle of least privilege.\n • Grant permissions at the required scope only.\n • Ensure that Scope1 is used to encrypt storage services.\n • Use Azure Backup to back up cont1 and share1 as frequently as possible.\n • Whenever possible, use Azure Disk Encryption and a key encryption key (KEK) to encrypt the virtual machines.\n\n You need to configure Azure Backup to meet the technical requirements for cont1 and share1.\n\n To what should you set the backup frequency for each resource? To answer, select the appropriate options in the answer area.\n\n NOTE: Each correct selection is worth one point.\n\n{{img:/exam-media/az-104/T6/image882.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T6/image952.png}}\nSource: Az-104 T6.apkg #61",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "cont1: Daily"
      },
      {
        id: "B",
        text: "share1: Every 4 hours"
      },
      {
        id: "C",
        text: "cont1: every 6 hours"
      },
      {
        id: "D",
        text: "cont1: every 12 hours"
      },
      {
        id: "E",
        text: "share1: every hour"
      }
    ],
    correct: [
      "A",
      "B"
    ]
  },
  {
    id: 537,
    number: 537,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0012700006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  HOTSPOT -\n You need to configure the Device settings to meet the technical requirements and the user requirements.\n Which two settings should you modify? To answer, select the appropriate settings in the answer area.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0013000001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0013100001.png}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Users may join devices to Azue AD: All"
      },
      {
        id: "B",
        text: "Users may join devices to Azue AD: Selected"
      },
      {
        id: "C",
        text: "Users may join devices to Azue AD: None"
      },
      {
        id: "D",
        text: "Require Mulit-Factor Auth to join devices: Yes"
      },
      {
        id: "E",
        text: "Require Mulit-Factor Auth to join devices: No"
      }
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
      "t1:B",
      "t2:D"
    ]
  },
  {
    id: 538,
    number: 538,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0012700006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You need to meet the user requirement for Admin1.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "From the Azure Active Directory blade, modify the Groups"
      },
      {
        id: "B",
        text: "From the Azure Active Directory blade, modify the Properties"
      },
      {
        id: "C",
        text: "From the Subscriptions blade, select the subscription, and then modify the Access control (IAM) settings"
      },
      {
        id: "D",
        text: "From the Subscriptions blade, select the subscription, and then modify the Properties"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 539,
    number: 539,
    topic: "Topic 7-16",
    prompt: "General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059200001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059200002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0059200003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059300001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059300005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059300007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0059400001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -\n You need to configure Azure Backup to back up the file shares and virtual machines.\n What is the minimum number of Recovery Services vaults and backup policies you should create? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0059500001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0059600001.png}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "4"
      },
      {
        id: "B",
        text: "7"
      },
      {
        id: "C",
        text: "5"
      },
      {
        id: "D",
        text: "3"
      },
      {
        id: "E",
        text: "6"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Recovery Services vaults"
      },
      {
        id: "t2",
        text: "Backup policies"
      }
    ],
    correct: [
      "t1:D",
      "t2:E"
    ]
  },
  {
    id: 540,
    number: 540,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059200001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059200002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0059200003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059300001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059300005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0059300007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0059400001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  DRAG DROP -\n You need to configure the alerts for VM1 and VM2 to meet the technical requirements.\n Which three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\n Select and Place:\n\n{{img:/exam-media/az-104/T7-T16/0059800001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/image953.png}}\nSource: Az-104 T7-T16.apkg",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Create a Log Analytics workspace"
      },
      {
        id: "B",
        text: "Collect Windows performance counters from the Log Analytics agents"
      },
      {
        id: "C",
        text: "Create an alert rule"
      },
      {
        id: "D",
        text: "Configure the Diagnostics settings"
      },
      {
        id: "E",
        text: "Create an Azure SQL database"
      }
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
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 541,
    number: 541,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013400001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013400002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0013400003-4fc5b1c920e47c737559fef1f0b8cdfc1b918ff9.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013500001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013500005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013500007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0013600001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -\n You need to ensure that User1 can create initiative definitions, and User4 can assign initiatives to RG2. The solution must meet the technical requirements.\n Which role should you assign to each user? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0013700001-939169390dd1165667d5505db90210d7ceb6ccde.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0013800001.png}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Contributor for RG1"
      },
      {
        id: "B",
        text: "Contributor for Sub1"
      },
      {
        id: "C",
        text: "Resource Policy Contributor for Sub1"
      },
      {
        id: "D",
        text: "Resource Policy Contributor for RG2"
      },
      {
        id: "E",
        text: "Security Admin for Sub1"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "User1"
      },
      {
        id: "t2",
        text: "User4"
      }
    ],
    correct: [
      "t1:C",
      "t2:D"
    ]
  },
  {
    id: 542,
    number: 542,
    topic: "Topic 7-16",
    prompt: "General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013400001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013400002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0013400003-4fc5b1c920e47c737559fef1f0b8cdfc1b918ff9.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013500001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013500005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0013500007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0013600001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  You need to ensure that you can grant Group4 Azure RBAC read only permissions to all the Azure file shares.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "On storage2, enable identity-based access for the file shares."
      },
      {
        id: "B",
        text: "Recreate storage2 and set Hierarchical namespace to Enabled."
      },
      {
        id: "C",
        text: "On storage1 and storage4, change the Account kind type to StorageV2 (general purpose v2)."
      },
      {
        id: "D",
        text: "Create a shared access signature (SAS) for storage1, storage2, and storage4."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 543,
    number: 543,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0021700006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You need to implement a backup solution for App1 after the application is moved.\n What should you create first?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "a recovery plan"
      },
      {
        id: "B",
        text: "an Azure Backup Server"
      },
      {
        id: "C",
        text: "a backup policy"
      },
      {
        id: "D",
        text: "a Recovery Services vault"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 544,
    number: 544,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0021700006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You need to move the blueprint files to Azure.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Generate an access key. Map a drive, and then copy the files by using File Explorer."
      },
      {
        id: "B",
        text: "Use Azure Storage Explorer to copy the files."
      },
      {
        id: "C",
        text: "Use the Azure Import/Export service."
      },
      {
        id: "D",
        text: "Generate a shared access signature (SAS). Map a drive, and then copy the files by using File Explorer."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 545,
    number: 545,
    topic: "Topic 7-16",
    prompt: "Overview -\n Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0021700006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  HOTSPOT -\n You need to identify the storage requirements for Contoso.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0022100001-9c16d470049d77c9a3cb0c4ed7dc81156ba2c638.jpg}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Contoso requires a storage account that supports Blob storage",
        answer: true
      },
      {
        id: "s2",
        text: "Contoso requires a storage account that supports Azure Table storage",
        answer: false
      },
      {
        id: "s3",
        text: "Contoso requires a storage account that supports Azure File storage",
        answer: false
      }
    ]
  },
  {
    id: 546,
    number: 546,
    topic: "Topic 7-16",
    prompt: "Overview -\n\n General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022300001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022300002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0022300003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0022500001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -\n You need to create container1 and share1.\n Which storage accounts should you use for each resource? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0022600001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0022700001-fecc8db9cdae968c7bd1054e419464ce0bc48f50.jpg}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "storage2 and storage3 only"
      },
      {
        id: "B",
        text: "storage2 only"
      },
      {
        id: "C",
        text: "storage4 only"
      },
      {
        id: "D",
        text: "storage1, storage2 and storage3 only"
      },
      {
        id: "E",
        text: "storage2, storage3 and storage4 only"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Container1"
      },
      {
        id: "t2",
        text: "share1"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 547,
    number: 547,
    topic: "Topic 7-16",
    prompt: "General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022300001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022300002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0022300003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0022500001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -\n You need to create storage5. The solution must support the planned changes.\n Which type of storage account should you use, and which account should you configure as the destination storage account? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0022800001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0022900001.jpg}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "StorageV2 (general purpose v2)"
      },
      {
        id: "B",
        text: "Storage2"
      },
      {
        id: "C",
        text: "Storage3"
      },
      {
        id: "D",
        text: "Storage1"
      },
      {
        id: "E",
        text: "BlockBlobStorage"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Account kind"
      },
      {
        id: "t2",
        text: "Destination"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 548,
    number: 548,
    topic: "Topic 7-16",
    prompt: "General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022300001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022300002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0022300003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0022400007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0022500001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  You need to identify which storage account to use for the flow logging of IP traffic from VM5. The solution must meet the retention requirements.\n Which storage account should you identify?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "storage1"
      },
      {
        id: "B",
        text: "storage2"
      },
      {
        id: "C",
        text: "storage3"
      },
      {
        id: "D",
        text: "storage4"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 549,
    number: 549,
    topic: "Topic 7-16",
    prompt: "Overview -\n Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\n The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\n All the resources used by Litware are hosted on-premises.\n Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the\n Premium P1 pricing tier.\n\n Existing Environment -\n The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.\n Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.\n Litware.com contains a user named User1.\n All the offices connect by using private connections.\n Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\n All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0034500001.png}}\n\n Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\n The Azure subscription contains the resources in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0034500002.png}}\n\n The network security team implements several network security groups (NSGs)\n\n Requirements -\n\n Planned Changes -\n Litware plans to implement the following changes:\n Deploy Azure ExpressRoute to the Montreal office.\n Migrate the virtual machines hosted on Server1 and Server2 to Azure.\n Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\n\n Technical Requirements -\n Litware must meet the following technical requirements:\n Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\n\n{{img:/exam-media/az-104/T7-T16/0034500007.png}}\n\n Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\n Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\n Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\n Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\n Connect the New York office to VNet1 over the Internet by using an encrypted connection.\n Create a workflow to send an email message when the settings of VM4 are modified.\n Create a custom Azure role named Role1 that is based on the Reader role.\n Minimize costs whenever possible.  Question  You discover that VM3 does NOT meet the technical requirements.\n You need to verify whether the issue relates to the NSGs.\n What should you use?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Diagram in VNet1"
      },
      {
        id: "B",
        text: "Diagnostic settings in Azure Monitor"
      },
      {
        id: "C",
        text: "Diagnose and solve problems in Traffic Manager profiles"
      },
      {
        id: "D",
        text: "The security recommendations in Azure Advisor"
      },
      {
        id: "E",
        text: "IP flow verify in Azure Network Watcher"
      }
    ],
    correct: [
      "E"
    ]
  },
  {
    id: 550,
    number: 550,
    topic: "Topic 7-16",
    prompt: "Overview -\n Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\n The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\n All the resources used by Litware are hosted on-premises.\n Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the\n Premium P1 pricing tier.\n\n Existing Environment -\n The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.\n Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.\n Litware.com contains a user named User1.\n All the offices connect by using private connections.\n Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\n All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0050800001.png}}\n\n Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\n The Azure subscription contains the resources in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0050800002.png}}\n\n The network security team implements several network security groups (NSGs)\n\n Requirements -\n\n Planned Changes -\n Litware plans to implement the following changes:\n Deploy Azure ExpressRoute to the Montreal office.\n Migrate the virtual machines hosted on Server1 and Server2 to Azure.\n Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\n\n Technical Requirements -\n Litware must meet the following technical requirements:\n Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\n\n{{img:/exam-media/az-104/T7-T16/0050800007.png}}\n\n Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\n Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\n Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\n Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\n Connect the New York office to VNet1 over the Internet by using an encrypted connection.\n Create a workflow to send an email message when the settings of VM4 are modified.\n Create a custom Azure role named Role1 that is based on the Reader role.\n Minimize costs whenever possible.  Question  You need to ensure that VM1 can communicate with VM4. The solution must minimize the administrative effort.\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an NSG and associate the NSG to VM1 and VM4."
      },
      {
        id: "B",
        text: "Establish peering between VNET1 and VNET3."
      },
      {
        id: "C",
        text: "Assign VM4 an IP address of 10.0.1.5/24."
      },
      {
        id: "D",
        text: "Create a user-defined route from VNET1 to VNET3."
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 551,
    number: 551,
    topic: "Topic 7-16",
    prompt: "Overview -\n Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\n The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\n All the resources used by Litware are hosted on-premises.\n Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the\n Premium P1 pricing tier.\n\n Existing Environment -\n The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.\n Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.\n Litware.com contains a user named User1.\n All the offices connect by using private connections.\n Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\n All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0050800001.png}}\n\n Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\n The Azure subscription contains the resources in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0050800002.png}}\n\n The network security team implements several network security groups (NSGs)\n\n Requirements -\n\n Planned Changes -\n Litware plans to implement the following changes:\n Deploy Azure ExpressRoute to the Montreal office.\n Migrate the virtual machines hosted on Server1 and Server2 to Azure.\n Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\n\n Technical Requirements -\n Litware must meet the following technical requirements:\n Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\n\n{{img:/exam-media/az-104/T7-T16/0050800007.png}}\n\n Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\n Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\n Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\n Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\n Connect the New York office to VNet1 over the Internet by using an encrypted connection.\n Create a workflow to send an email message when the settings of VM4 are modified.\n Create a custom Azure role named Role1 that is based on the Reader role.\n Minimize costs whenever possible.  Question  HOTSPOT -\n You need to meet the connection requirements for the New York office.\n What should you do? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0051000001.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0051100001.png}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Create a virtual network gateway and a local network gateway"
      },
      {
        id: "B",
        text: "Create a ExpressRoute circuit only"
      },
      {
        id: "C",
        text: "Configure a site-to-site VPN connection"
      },
      {
        id: "D",
        text: "Deploy ExpressRoute"
      },
      {
        id: "E",
        text: "Deploy a DirectAccess server"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Box1"
      },
      {
        id: "t2",
        text: "Box2"
      }
    ],
    correct: [
      "t1:A",
      "t2:C"
    ]
  },
  {
    id: 552,
    number: 552,
    topic: "Topic 7-16",
    prompt: "Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0051300006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  HOTSPOT -\n You need to recommend a solution for App1. The solution must meet the technical requirements.\n What should you include in the recommendation? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0051500001.jpg}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0051600001.jpg}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Number of virtual networks: 1"
      },
      {
        id: "B",
        text: "Number of subnets per virtual network: 3"
      },
      {
        id: "C",
        text: "Number of virtual networks: 2"
      },
      {
        id: "D",
        text: "Number of subnets per virtual network: 2"
      },
      {
        id: "E",
        text: "Number of subnets per virtual network: 1"
      }
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
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 553,
    number: 553,
    topic: "Topic 7-16",
    prompt: "Overview -\n Contoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\n Contoso products are manufactured by using blueprint files that the company authors and maintains.\n\n Existing Environment -\n Currently, Contoso uses multiple types of servers for business operations, including the following:\n File servers\n Domain controllers\n Microsoft SQL Server servers\n Your network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\n You have a public-facing application named App1. App1 is comprised of the following three tiers:\n A SQL database\n A web front end\n\n A processing middle tier -\n\n{{img:/exam-media/az-104/T7-T16/0051300006.png}}\n\n Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes to the infrastructure:\n Move all the tiers of App1 to Azure.\n Move the existing product blueprint files to Azure Blob storage.\n Create a hybrid directory to support an upcoming Microsoft 365 migration project.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Move all the virtual machines for App1 to Azure.\n Minimize the number of open ports between the App1 tiers.\n Ensure that all the virtual machines for App1 are protected by backups.\n Copy the blueprint files to Azure over the Internet.\n Ensure that the blueprint files are stored in the archive storage tier.\n Ensure that partner access to the blueprint files is secured and temporary.\n Prevent user passwords or hashes of passwords from being stored in Azure.\n Use unmanaged standard storage for the hard disks of the virtual machines.\n Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\n Minimize administrative effort whenever possible.\n\n User Requirements -\n Contoso identifies the following requirements for users:\n Ensure that only users who are part of a group named Pilot can join devices to Azure AD.\n Designate a new user named Admin1 as the service admin for the Azure subscription.\n Admin1 must receive email alerts regarding service outages.\n Ensure that a new user named User3 can create network objects for the Azure subscription.  Question  You are planning the move of App1 to Azure.\n You create a network security group (NSG).\n You need to recommend a solution to provide users with access to App1.\n What should you recommend?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create an incoming security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers."
      },
      {
        id: "B",
        text: "Create an outgoing security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers."
      },
      {
        id: "C",
        text: "Create an incoming security rule for port 443 from the Internet. Associate the NSG to all the subnets."
      },
      {
        id: "D",
        text: "Create an outgoing security rule for port 443 from the Internet. Associate the NSG to all the subnets."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 554,
    number: 554,
    topic: "Topic 7-16",
    prompt: "Overview -\n\n General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052000001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052000002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0052000003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052100001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052100005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052100007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0052200001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  HOTSPOT -\n You implement the planned changes for NSG1 and NSG2.\n For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n NOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/image954.png}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "From VM1, you can establish a Remote Desktop session to VM2",
        answer: true
      },
      {
        id: "s2",
        text: "From VM2, you can establish a Remote Desktop session to VM3",
        answer: false
      },
      {
        id: "s3",
        text: "From VM2, you can ping VM3",
        answer: true
      }
    ]
  },
  {
    id: 555,
    number: 555,
    topic: "Topic 7-16",
    prompt: "Overview -\n\n General Overview -\n Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\n\n Environment -\n\n Existing Environment -\n Contoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-premises Active\n Directory domain that syncs to the Azure AD tenant.\n The Azure AD tenant contains the users shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052000001.png}}\n\n Sub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052000002.png}}\n\n User1 manages the resources in RG1. User4 manages the resources in RG2.\n Sub1 contains virtual machines that run Windows Server 2019 as shown in the following table\n\n{{img:/exam-media/az-104/T7-T16/0052000003.png}}\n\n No network security groups (NSGs) are associated to the network interfaces or the subnets.\n Sub1 contains the storage accounts shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052100001.png}}\n\n Requirements -\n\n Planned Changes -\n Contoso plans to implement the following changes:\n Create a blob container named container1 and a file share named share1 that will use the Cool storage tier.\n Create a storage account named storage5 and configure storage replication for the Blob service.\n Create an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052100005.png}}\n\n Associate NSG1 to the network interface of VM1.\n Create an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0052100007.png}}\n\n{{img:/exam-media/az-104/T7-T16/0052200001.png}}\n\n Associate NSG2 to VNET1/Subnet2.\n\n Technical Requirements -\n Contoso must meet the following technical requirements:\n Create container1 and share1.\n Use the principle of least privilege.\n Create an Azure AD security group named Group4.\n Back up the Azure file shares and virtual machines by using Azure Backup.\n Trigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\n Enable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\n Create an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\n Enable flow logging for IP traffic from VM5 and retain the flow logs for a period of eight months.\n Whenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.  Question  You need to add VM1 and VM2 to the backend pool of LB1.\n What should you do first?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Connect VM2 to VNET1/Subnet1."
      },
      {
        id: "B",
        text: "Redeploy VM1 and VM2 to the same availability zone."
      },
      {
        id: "C",
        text: "Redeploy VM1 and VM2 to the same availability set."
      },
      {
        id: "D",
        text: "Create a new NSG and associate the NSG to VNET1/Subnet1."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 556,
    number: 556,
    topic: "Topic 7-16",
    prompt: "You need to ensure that VM1 can communicate with VM4. The solution must minimize administrative effort.\n\n What should you do?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Create a user-defined route from VNET1 to VNET3."
      },
      {
        id: "B",
        text: "Create an NSG and associate the NSG to VM1 and VM4."
      },
      {
        id: "C",
        text: "Assign VM4 an IP address of 10.0.1.5/24."
      },
      {
        id: "D",
        text: "Establish peering between VNET1 and VNET3."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 557,
    number: 557,
    topic: "Topic 7-16",
    prompt: "Overview -\n Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\n The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\n All the resources used by Litware are hosted on-premises.\n Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the\n Premium P1 pricing tier.\n\n Existing Environment -\n The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.\n Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.\n Litware.com contains a user named User1.\n All the offices connect by using private connections.\n Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\n All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0058800001.png}}\n\n Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\n The Azure subscription contains the resources in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0058800002.png}}\n\n The network security team implements several network security groups (NSGs)\n\n Requirements -\n\n Planned Changes -\n Litware plans to implement the following changes:\n Deploy Azure ExpressRoute to the Montreal office.\n Migrate the virtual machines hosted on Server1 and Server2 to Azure.\n Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\n\n Technical Requirements -\n Litware must meet the following technical requirements:\n Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\n\n{{img:/exam-media/az-104/T7-T16/0058800007.png}}\n\n Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\n Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\n Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\n Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\n Connect the New York office to VNet1 over the Internet by using an encrypted connection.\n Create a workflow to send an email message when the settings of VM4 are modified.\n Create a custom Azure role named Role1 that is based on the Reader role.\n Minimize costs whenever possible.\n  Question\n  HOTSPOT -\n\n You need to implement Role1.\n Which command should you run before you create Role1? To answer, select the appropriate options in the answer area.\n NOTE: Each correct selection is worth one point.\n Hot Area:\n\n{{img:/exam-media/az-104/T7-T16/0058900009.png}}",
    keySource: "source",
    explanation: "{{img:/exam-media/az-104/T7-T16/0058900010.png}}\nSource: Az-104 T7-T16.apkg",
    type: "hotspot-dropdown",
    options: [
      {
        id: "A",
        text: "Get-AzRoleDefinition"
      },
      {
        id: "B",
        text: "ConvertTo-Json"
      },
      {
        id: "C",
        text: "Get-AzResourceProvider"
      },
      {
        id: "D",
        text: "ConvertTo-Xml"
      },
      {
        id: "E",
        text: "ConvertFrom-Json"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Box1"
      },
      {
        id: "t2",
        text: "Box2"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 558,
    number: 558,
    topic: "Topic 7-16",
    prompt: "Overview -\n Litware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\n The Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\n All the resources used by Litware are hosted on-premises.\n Litware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The tenant uses the\n Premium P1 pricing tier.\n\n Existing Environment -\n The network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the litware.com DNS zone.\n Litware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU) that contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective department. New users are added frequently.\n Litware.com contains a user named User1.\n All the offices connect by using private connections.\n Litware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\n All infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0058800001.png}}\n\n Litware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\n The Azure subscription contains the resources in the following table.\n\n{{img:/exam-media/az-104/T7-T16/0058800002.png}}\n\n The network security team implements several network security groups (NSGs)\n\n Requirements -\n\n Planned Changes -\n Litware plans to implement the following changes:\n Deploy Azure ExpressRoute to the Montreal office.\n Migrate the virtual machines hosted on Server1 and Server2 to Azure.\n Synchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n Migrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\n\n Technical Requirements -\n Litware must meet the following technical requirements:\n Ensure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\n\n{{img:/exam-media/az-104/T7-T16/0058800007.png}}\n\n Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\n Ensure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\n Enable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\n Ensure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\n Connect the New York office to VNet1 over the Internet by using an encrypted connection.\n Create a workflow to send an email message when the settings of VM4 are modified.\n Create a custom Azure role named Role1 that is based on the Reader role.\n Minimize costs whenever possible.  Question  You need to recommend a solution to automate the configuration for the finance department users. The solution must meet the technical requirements.\n What should you include in the recommendation?",
    keySource: "source",
    explanation: "Source: Az-104 T7-T16.apkg",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure AD B2C"
      },
      {
        id: "B",
        text: "dynamic groups and conditional access policies"
      },
      {
        id: "C",
        text: "Azure AD Identity Protection"
      },
      {
        id: "D",
        text: "an Azure logic app and the Microsoft Identity Management (MIM) client"
      }
    ],
    correct: [
      "B"
    ]
  }
];
