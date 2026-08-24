import type { Question } from "../../types";

export const ai901NewQuestions: Question[] = [
  {
    id: 50041,
    number: 41,
    topic: "AI-901",
    prompt: "HOTSPOT -\nSelect the answer that correctly completes the sentence.",
    keySource: "domain",
    explanation: "Source did not expose the answer key in this capture.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Insufficient data in imported page capture"
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
    id: 50042,
    number: 42,
    topic: "Content Understanding",
    prompt: "You are developing an application that extracts fields from PDFs by using Azure Content Understanding in Foundry Tools.\nYou need to use the Python SDK to submit a PDF for analysis and retrieve the extraction results.\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Call analyze() to return the extracted fields synchronously in the same request."
      },
      {
        id: "B",
        text: "Submit the PDF to an analyzer and read the results from the request headers."
      },
      {
        id: "C",
        text: "Call begin_analyze(), and then call poller.result() to retrieve the results."
      },
      {
        id: "D",
        text: "Use optical character recognition (OCR) to extract text from the PDF and map the fields in the code."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50043,
    number: 43,
    topic: "Generative AI",
    prompt: "HOTSPOT -\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Supported base models can be deployed from the model catalog, the playground is primarily for testing, and deployed models can be prompted in playground.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "You can deploy a supported base model directly from the model catalog.",
        answer: true
      },
      {
        id: "s2",
        text: "The playground is used to create the model deployment before the model can be tested.",
        answer: false
      },
      {
        id: "s3",
        text: "After deploying a model, you can use the playground in the Microsoft Foundry portal to send prompts and review responses.",
        answer: true
      }
    ]
  },
  {
    id: 50044,
    number: 44,
    topic: "Generative AI",
    prompt: "You have a Microsoft Foundry project that contains a vision-enabled model deployment.\nYou use the Azure OpenAI Responses API to send a prompt to the model.\nYou need to provide an image for analysis.\nWhich content item should you include in the request?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "image_generation"
      },
      {
        id: "B",
        text: "output_image"
      },
      {
        id: "C",
        text: "input_image"
      },
      {
        id: "D",
        text: "image_base64"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50045,
    number: 45,
    topic: "Speech",
    prompt: "DRAG DROP -\nYou are developing an application that extracts structured information from different types of content by using Azure Content Understanding in Foundry Tools.\nYou need to extract scanned invoices in the PDF format and voicemail recordings in the WAV format.\nWhich type of analyzer should you use for each content type? To answer, drag the appropriate analyzer types to the correct content types. Each analyzer type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Question structure recovered from source page, but full drag/drop values require screenshot transcription.",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Option 1 (from screenshot)"
      },
      {
        id: "B",
        text: "Option 2 (from screenshot)"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Target 1 (from screenshot)"
      }
    ],
    correct: [
      "t1:A"
    ]
  },
  {
    id: 50046,
    number: 46,
    topic: "Speech",
    prompt: "You have an Azure subscription.\nYou need to use Azure Content Understanding in Foundry Tools to extract structured data from invoices.\nWhat should you provision?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "A Microsoft Foundry project"
      },
      {
        id: "B",
        text: "an Azure OpenAI resource"
      },
      {
        id: "C",
        text: "a Microsoft Foundry resource"
      },
      {
        id: "D",
        text: "an Azure AI Search service"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50047,
    number: 47,
    topic: "Generative AI",
    prompt: "You have a Microsoft Foundry project that contains a vision-enabled chat model deployment.\nYou are developing a Python application that sends a request containing a user prompt and a local JPEG image.\nYou need to include the image as binary data in the request.\nTo what should you set the image_url.ur1 field?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "data:image/jpeg;base64,<binary_image_data>"
      },
      {
        id: "B",
        text: "file:///C:/images/photo.jpg"
      },
      {
        id: "C",
        text: "C:\\images\\photo.jpg"
      },
      {
        id: "D",
        text: "https://<your-storage-account>.blob.core.windows.net/<container>/<file>.jpg"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50048,
    number: 48,
    topic: "Speech",
    prompt: "You need to convert written customer notifications into natural-sounding spoken audio that can be played over a phone system.\nWhich Azure Speech in Foundry Tools capability should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "speech recognition"
      },
      {
        id: "B",
        text: "speech synthesis"
      },
      {
        id: "C",
        text: "speaker recognition"
      },
      {
        id: "D",
        text: "speech translation"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50049,
    number: 49,
    topic: "Generative AI",
    prompt: "DRAG DROP -\nYou have a Microsoft Foundry project named project1 that contains an Azure OpenAI resource named Resource1.\nTo Resource1, you deploy a gpt-4.1-mini model by using a model deployment named my-mini-gpt.\nYou need to connect to my-mini-gpt from an application.\n\nHow should you complete the Python code? To answer, drag the appropriate values to the correct targets.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "The Azure OpenAI base URL uses the resource name, and the model parameter uses the deployment name.",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "gpt-4.1-mini"
      },
      {
        id: "B",
        text: "my-mini-gpt"
      },
      {
        id: "C",
        text: "project1"
      },
      {
        id: "D",
        text: "Resource1"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "base_url placeholder"
      },
      {
        id: "t2",
        text: "model placeholder"
      }
    ],
    correct: [
      "t1:D",
      "t2:B"
    ]
  },
  {
    id: 50050,
    number: 50,
    topic: "AI-901",
    prompt: "HOTSPOT -\nSelect the answer that correctly completes the sentence.",
    keySource: "domain",
    explanation: "Source did not expose the answer key in this capture.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Insufficient data in imported page capture"
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
    id: 50051,
    number: 51,
    topic: "Speech",
    prompt: "Your company has thousands of recorded customer support calls in multiple languages stored as audio files in Azure Storage.\nYou need to generate text transcripts of all the recordings.\nWhich Azure Speech in Foundry Tools capability should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "speech to text batch transcription"
      },
      {
        id: "B",
        text: "speech to text real-time transcription"
      },
      {
        id: "C",
        text: "text to speech"
      },
      {
        id: "D",
        text: "speech translation"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50052,
    number: 52,
    topic: "Language",
    prompt: "You need to compare the costs of large language models (LLMs) for a generative AI solution.\nWhat should you use in the Microsoft Foundry portal?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "Compliance"
      },
      {
        id: "B",
        text: "Evaluator catalog"
      },
      {
        id: "C",
        text: "Tools"
      },
      {
        id: "D",
        text: "Model leaderboard"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50053,
    number: 53,
    topic: "Responsible AI",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nThe Microsoft responsible AI principle of reliability and safety requires AI systems to ___.",
    keySource: "domain",
    explanation: "Reliability and safety means AI systems should operate consistently and safely under expected conditions.",
    type: "single",
    options: [
      {
        id: "A",
        text: "enable human oversight"
      },
      {
        id: "B",
        text: "ensure equitable outcomes"
      },
      {
        id: "C",
        text: "perform consistently under expected conditions"
      },
      {
        id: "D",
        text: "provide clear explanations"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50054,
    number: 54,
    topic: "Vision",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Image analysis supports OCR and captioning/tagging, but image generation from text is a generative AI workload.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Image analysis capabilities in Microsoft Foundry Tools can perform optical character recognition (OCR).",
        answer: true
      },
      {
        id: "s2",
        text: "Image analysis capabilities in Microsoft Foundry Tools can generate captions and descriptive tags for images.",
        answer: true
      },
      {
        id: "s3",
        text: "Image analysis capabilities in Microsoft Foundry Tools are designed primarily to create new images from text prompts.",
        answer: false
      }
    ]
  },
  {
    id: 50055,
    number: 55,
    topic: "Speech",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Batch transcription does not require live microphone input, object detection is not part of Speech, and speech translation is not limited to spoken output only.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Using Azure Speech in Foundry Tools for batch transcription requires live audio input from a microphone.",
        answer: false
      },
      {
        id: "s2",
        text: "Azure Speech in Foundry Tools can analyze video frames to detect and label objects while transcribing audio.",
        answer: false
      },
      {
        id: "s3",
        text: "Speech translation in Azure Speech in Foundry Tools only supports translating speech into spoken output in another language.",
        answer: false
      }
    ]
  },
  {
    id: 50056,
    number: 56,
    topic: "Content Understanding",
    prompt: "You are developing a web app that processes invoices to calculate expenses.\n\nYou need to extract structured fields, including nested values, from the invoices by using a defined schema.\n\nWhat should you use?",
    keySource: "source",
    explanation: "A Content Understanding analyzer extracts structured data according to a defined schema.",
    type: "single",
    options: [
      {
        id: "A",
        text: "an optical character recognition (OCR)-only document processing pipeline"
      },
      {
        id: "B",
        text: "a transcription workflow in Azure Speech in Foundry Tools"
      },
      {
        id: "C",
        text: "an analyzer in Azure Content Understanding in Foundry Tools"
      },
      {
        id: "D",
        text: "an Azure AI Search service"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50057,
    number: 57,
    topic: "Speech",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nAzure Content Understanding in Foundry Tools uses ___ to convert speech to text from audio and video.",
    keySource: "domain",
    explanation: "Transcription converts speech to text.",
    type: "single",
    options: [
      {
        id: "A",
        text: "diarization"
      },
      {
        id: "B",
        text: "key phrase extraction"
      },
      {
        id: "C",
        text: "synthesis"
      },
      {
        id: "D",
        text: "transcription"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50058,
    number: 58,
    topic: "Vision",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\n___ can be used to extract text from images.",
    keySource: "domain",
    explanation: "OCR is part of computer vision/image analysis workloads.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Computer vision"
      },
      {
        id: "B",
        text: "Generative AI"
      },
      {
        id: "C",
        text: "Natural language processing"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50059,
    number: 59,
    topic: "Generative AI",
    prompt: "You are developing a simple application that uses the Microsoft Foundry SDK to send chat prompts to a model.\n\nWhich three elements should you provide in the code to run the application? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "source",
    explanation: "Screenshot-confirmed key: A, D, E.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "the model deployment name"
      },
      {
        id: "B",
        text: "the task type"
      },
      {
        id: "C",
        text: "the Foundry project display name"
      },
      {
        id: "D",
        text: "Microsoft Entra ID credentials"
      },
      {
        id: "E",
        text: "the endpoint URL"
      }
    ],
    correct: [
      "A",
      "D",
      "E"
    ]
  },
  {
    id: 50060,
    number: 60,
    topic: "AI-901",
    prompt: "What are two types of generative AI models? Each correct answer presents a complete solution.\n\nNOTE: Each correct answer is worth one point",
    keySource: "source",
    explanation: "Screenshot-confirmed key: B, C.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "computer vision"
      },
      {
        id: "B",
        text: "GPT"
      },
      {
        id: "C",
        text: "DALL-E"
      },
      {
        id: "D",
        text: "transformer"
      },
      {
        id: "E",
        text: "natural language processing"
      }
    ],
    correct: [
      "B",
      "C"
    ]
  },
  {
    id: 50061,
    number: 61,
    topic: "Language",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nTo enable an agent in Microsoft Foundry to call Azure Language in Foundry Tools text analysis, you must configure ___.",
    keySource: "domain",
    explanation: "Agents call Azure Language via the Azure Language MCP server configuration.",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Azure AI Search index"
      },
      {
        id: "B",
        text: "a Foundry model deployment"
      },
      {
        id: "C",
        text: "the Azure Language MCP server"
      },
      {
        id: "D",
        text: "an Azure Speech in Foundry Tools service endpoint"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50062,
    number: 62,
    topic: "Generative AI",
    prompt: "You are developing an application named App1 that analyzes customer feedback.\n\nApp1 will call Azure Language in Foundry Tools from a generative AI agent in Microsoft Foundry.\n\nYou need to ensure that the agent can access Azure Language text analysis.\n\nWhat should you configure?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "a Foundry model deployment"
      },
      {
        id: "B",
        text: "the Azure Language MCP server"
      },
      {
        id: "C",
        text: "an Azure Speech in Foundry Tools service endpoint"
      },
      {
        id: "D",
        text: "the Azure AI Search index"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50063,
    number: 63,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Multimodal models are required for image prompts, playground supports local upload/URL, and multiple images can be provided in one prompt.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "To process prompts that contain images, you must deploy a multimodal generative AI model.",
        answer: true
      },
      {
        id: "s2",
        text: "In the Foundry playground, you can provide an image by uploading a local file or by specifying a publicly accessible URL.",
        answer: true
      },
      {
        id: "s3",
        text: "A multimodal model can interpret multiple images included in a single prompt.",
        answer: true
      }
    ]
  },
  {
    id: 50064,
    number: 64,
    topic: "Responsible AI",
    prompt: "You have an AI-based loan approval system.\n\nDuring testing, you discover that the system has a gender bias.\n\nWhich responsible AI principle does this violate?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "reliability and safety"
      },
      {
        id: "B",
        text: "transparency"
      },
      {
        id: "C",
        text: "accountability"
      },
      {
        id: "D",
        text: "fairness"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50065,
    number: 65,
    topic: "Responsible AI",
    prompt: "You deploy an AI system to assist with hiring decisions.\n\nCompany policy requires that human reviewers oversee AI-generated recommendations and remain responsible for final hiring decisions.\n\nWhich Microsoft responsible AI principle is this an example of?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "reliability and safety"
      },
      {
        id: "B",
        text: "fairness"
      },
      {
        id: "C",
        text: "transparency"
      },
      {
        id: "D",
        text: "accountability"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50066,
    number: 66,
    topic: "Content Understanding",
    prompt: "HOTSPOT\n -\n\nYou are developing an application that analyzes invoices by using Azure Content Understanding in Foundry Tools.\n\nYou have a custom analyzer named invoiceAnalyzer.\n\nYou need to use the analyzer to process invoice files.\n\nHow should you complete the Python code? To answer, select the appropriate option in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Use analyzer_id to specify the custom analyzer name (invoiceAnalyzer) in begin_analyze.",
    type: "single",
    options: [
      {
        id: "A",
        text: "analyzer_id"
      },
      {
        id: "B",
        text: "extraction_type"
      },
      {
        id: "C",
        text: "model_name"
      },
      {
        id: "D",
        text: "schema_id"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50067,
    number: 67,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Speech synthesis is text-to-speech (not speech-to-text), speech recognition transcribes speech, and translation is not plain text-to-speech.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Speech synthesis converts spoken audio into written text.",
        answer: false
      },
      {
        id: "s2",
        text: "Speech recognition can detect and transcribe spoken input.",
        answer: true
      },
      {
        id: "s3",
        text: "Text to speech in Azure Speech in Foundry Tools can translate text input into audible speech in a different language.",
        answer: false
      }
    ]
  },
  {
    id: 50068,
    number: 68,
    topic: "Speech",
    prompt: "You have a Python application that extracts fields from invoices by using Azure Content Understanding in Foundry Tools.\n\nYou submit a PDF for analysis.\n\nWhat should the application do to retrieve the results?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Repeatedly call begin_analyze() with the same inputs to force a synchronous response."
      },
      {
        id: "B",
        text: "Send a GET request to the Microsoft Foundry endpoint to download the analyzer schema."
      },
      {
        id: "C",
        text: "Poll the operation results until the asynchronous analysis job succeeds."
      },
      {
        id: "D",
        text: "Use optical character recognition (OCR) to parse the text from the PDF and map the fields in the code."
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50069,
    number: 69,
    topic: "Generative AI",
    prompt: "You have a Microsoft Foundry project that contains a vision-enabled GPT model deployment.\n\nYou need to develop an application that sends an image and a text question to the model in a single request.\n\nWhat should you use?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "the Azure OpenAI Images API endpoint only"
      },
      {
        id: "B",
        text: "the Speech to text REST API"
      },
      {
        id: "C",
        text: "the Image Analysis REST API"
      },
      {
        id: "D",
        text: "the Azure OpenAI Responses API"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50070,
    number: 70,
    topic: "Generative AI",
    prompt: "You plan to create an AI application that will use Azure OpenAI in Foundry Models. The solution requires that a specific amount of throughput be allocated. Which type of deployment should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "provisioned"
      },
      {
        id: "B",
        text: "standard"
      },
      {
        id: "C",
        text: "global batch"
      },
      {
        id: "D",
        text: "data zone standard"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50071,
    number: 71,
    topic: "Responsible AI",
    prompt: "DRAG DROP -\nYou are reviewing best practices for using AI at your company.\n\nWhich Microsoft responsible AI principle is each task an example of? To answer, drag the appropriate principles to the correct tasks.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Fairness covers non-discrimination, transparency covers explainability, and privacy/security covers protected access to personal data.",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Fairness"
      },
      {
        id: "B",
        text: "Transparency"
      },
      {
        id: "C",
        text: "Privacy and security"
      },
      {
        id: "D",
        text: "Reliability and safety"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Ensure hiring recommendations do not vary by gender or race."
      },
      {
        id: "t2",
        text: "Provide users with a clear explanation of how the model reached a decision."
      },
      {
        id: "t3",
        text: "Restrict access to personal customer data to approved users only."
      }
    ],
    correct: [
      "t1:A",
      "t2:B",
      "t3:C"
    ]
  },
  {
    id: 50072,
    number: 72,
    topic: "Speech",
    prompt: "DRAG DROP\n -\n\nMatch the description to the corresponding Microsoft Foundry tools.\n\nTo answer, drag the appropriate description from the column on the left to its tool on the right. Each description may be used once, more than once, or not at all.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Speech recognition transcribes spoken input, while speech synthesis generates spoken output.",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Transcribes spoken input"
      },
      {
        id: "B",
        text: "Generates spoken output"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "Speech recognition"
      },
      {
        id: "t2",
        text: "Speech synthesis"
      }
    ],
    correct: [
      "t1:A",
      "t2:B"
    ]
  },
  {
    id: 50073,
    number: 73,
    topic: "Responsible AI",
    prompt: "What are three Microsoft guiding principles for responsible AI? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Responsible AI principles here are fairness, reliability and safety, and inclusiveness.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "opinionatedness"
      },
      {
        id: "B",
        text: "decisiveness"
      },
      {
        id: "C",
        text: "fairness"
      },
      {
        id: "D",
        text: "reliability and safety"
      },
      {
        id: "E",
        text: "inclusiveness"
      },
      {
        id: "F",
        text: "knowledgeability"
      }
    ],
    correct: [
      "C",
      "D",
      "E"
    ]
  },
  {
    id: 50074,
    number: 74,
    topic: "Generative AI",
    prompt: "You have a Microsoft Foundry project that contains a vision-enabled chat model deployment.\n\nYou are developing a Python application that uses the responses API. The application sends a request that includes a user prompt and a local JPEG image.\n\nYou need to include the local image in the request.\n\nWhich value should you use for the image input?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "data:image/jpeg;base64,"
      },
      {
        id: "B",
        text: "C:\\images\\photo.jpg"
      },
      {
        id: "C",
        text: "file:///C:/images/photo.jpg"
      },
      {
        id: "D",
        text: "https://.blob.core.windows.net//.jpg"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50075,
    number: 75,
    topic: "Generative AI",
    prompt: "You are deploying a generative AI model to a Microsoft Foundry project.\n\nYou assign a higher tokens per minute (TPM) allocation to the model.\n\nWhat is the result of this change?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "The Azure region availability of the model changes."
      },
      {
        id: "B",
        text: "The model generates longer responses."
      },
      {
        id: "C",
        text: "The model generates shorter responses and additional source citations."
      },
      {
        id: "D",
        text: "The speed and scale at which the model deployment can process inputs changes."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50076,
    number: 76,
    topic: "AI-901",
    prompt: "You have 100 instructional videos that do NOT contain any audio. Each instructional video has a script.\n\nYou need to generate a narration audio file for each video based on the script.\n\nWhich type of workload should you use?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "translation"
      },
      {
        id: "B",
        text: "speech recognition"
      },
      {
        id: "C",
        text: "language modeling"
      },
      {
        id: "D",
        text: "speech synthesis"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50077,
    number: 77,
    topic: "Speech",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\n___ converts spoken audio into text.",
    keySource: "domain",
    explanation: "Speech-to-text transcription is provided by Azure Speech in Foundry Tools.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Language in Foundry Tools"
      },
      {
        id: "B",
        text: "Azure Speech in Foundry Tools"
      },
      {
        id: "C",
        text: "Azure Vision in Foundry Tools"
      },
      {
        id: "D",
        text: "Azure OpenAI in Foundry Models"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50078,
    number: 78,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Whisper does speech-to-text, embeddings convert text to vectors, and GPT-4.1 is not an image generation model.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Whisper models in Azure OpenAI are used to convert speech to text.",
        answer: true
      },
      {
        id: "s2",
        text: "Embedding models in Azure OpenAI are used to convert text into numeric vectors.",
        answer: true
      },
      {
        id: "s3",
        text: "GPT-4.1 models in Azure OpenAI are used to generate images based on natural language prompts.",
        answer: false
      }
    ]
  },
  {
    id: 50079,
    number: 79,
    topic: "Generative AI",
    prompt: "You have a Microsoft Foundry project that contains a vision-enabled model deployment.\n\nYou need to create a prompt that ensures the model produces a relevant and useful response.\n\nWhat should you include in the prompt?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "the version number of the model"
      },
      {
        id: "B",
        text: "a description of the task"
      },
      {
        id: "C",
        text: "the deployment name of the model"
      },
      {
        id: "D",
        text: "a dataset ID for the image"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50080,
    number: 80,
    topic: "Generative AI",
    prompt: "You are developing a lightweight application that will call an agent programmatically by using the Microsoft Foundry SDK.\n\nYou need to identify the agent ID.\n\nWhat should you do?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "In the model catalog, open the model card and copy the model family name."
      },
      {
        id: "B",
        text: "the Foundry portal, copy the project name."
      },
      {
        id: "C",
        text: "In the Foundry tool catalog, copy the tool name used by the agent."
      },
      {
        id: "D",
        text: "In the Foundry playground, select Code, and view the .env variables."
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50081,
    number: 81,
    topic: "Vision",
    prompt: "Which action can be performed by using the Azure Vision in Foundry Tools service?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "creating thumbnails for training videos"
      },
      {
        id: "B",
        text: "extracting key phrases from documents"
      },
      {
        id: "C",
        text: "identifying breeds of animals in live video streams"
      },
      {
        id: "D",
        text: "extracting data from handwritten letters"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50082,
    number: 82,
    topic: "Generative AI",
    prompt: "In the Microsoft Foundry portal, you create an agent named Agent1, and then deploy the agent.\n\nYou open the Foundry playground to test Agent1.\n\nWhat does the playground use to ensure that the tests reflect production behavior?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "a default configuration generated by the playground"
      },
      {
        id: "B",
        text: "the model’s base behavior without any agent instructions or tools"
      },
      {
        id: "C",
        text: "the configuration of Agent1"
      },
      {
        id: "D",
        text: "the last saved configuration draft that was NOT deployed"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50083,
    number: 83,
    topic: "Vision",
    prompt: "Capturing text from images is an example of which type of AI capability?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "object detection"
      },
      {
        id: "B",
        text: "text analysis"
      },
      {
        id: "C",
        text: "optical character recognition (OCR)"
      },
      {
        id: "D",
        text: "image description"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50084,
    number: 84,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.",
    keySource: "domain",
    explanation: "Source did not expose the answer key in this capture.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Insufficient data in imported page capture"
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
    id: 50085,
    number: 85,
    topic: "Language",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nThe interactive answering of questions entered by a user as part of an application is an example of ___.",
    keySource: "domain",
    explanation: "Interactive question answering is a natural language processing workload.",
    type: "single",
    options: [
      {
        id: "A",
        text: "computer vision"
      },
      {
        id: "B",
        text: "natural language processing"
      },
      {
        id: "C",
        text: "forecasting"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50086,
    number: 86,
    topic: "Speech",
    prompt: "You are developing an application that records a user’s voice and sends the recorded audio to a deployed multimodal model in Microsoft Foundry.\n\nYou need to send the user’s request to the model.\n\nWhat should you include in the request?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "an image of the audio frames"
      },
      {
        id: "B",
        text: "a text transcript of the voice"
      },
      {
        id: "C",
        text: "an audio input prompt"
      },
      {
        id: "D",
        text: "a text embedding vector"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50087,
    number: 87,
    topic: "Responsible AI",
    prompt: "Stating the source of the data used to train a model is an example of which responsible AI principle?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "privacy and security"
      },
      {
        id: "B",
        text: "reliability and safety"
      },
      {
        id: "C",
        text: "fairness"
      },
      {
        id: "D",
        text: "transparency"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50088,
    number: 88,
    topic: "Content Understanding",
    prompt: "HOTSPOT -\nYou are developing an application that analyze invoices by using Azure Content Understanding in Foundry Tools.\n\nYou need to ensure that the application retrieves the analysis results after processing completes.\n\nHow should you complete the Python code? To answer, select the appropriate option in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "After begin_analyze, call poller.result() to wait for completion and retrieve results.",
    type: "single",
    options: [
      {
        id: "A",
        text: "get_results"
      },
      {
        id: "B",
        text: "result"
      },
      {
        id: "C",
        text: "status"
      },
      {
        id: "D",
        text: "wait"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50089,
    number: 89,
    topic: "Responsible AI",
    prompt: "Your company provides users with clear information about an AI system’s purpose, functionality, and limitations.\n\nWhich Microsoft responsible AI principle is this an example of?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "transparency"
      },
      {
        id: "B",
        text: "accountability"
      },
      {
        id: "C",
        text: "fairness"
      },
      {
        id: "D",
        text: "reliability and safety"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50090,
    number: 90,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Not all AI models handle images; multimodal models can interpret image input and mixed text+image prompts.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "All AI models can analyze and generate images.",
        answer: false
      },
      {
        id: "s2",
        text: "A multimodal generative AI model can interpret image input in a prompt.",
        answer: true
      },
      {
        id: "s3",
        text: "A multimodal model can process prompts that include both text and images.",
        answer: true
      }
    ]
  },
  {
    id: 50091,
    number: 91,
    topic: "Vision",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nCounting the number of animals in an area based on a video feed is an example of ___.",
    keySource: "domain",
    explanation: "Counting objects in video is a computer vision task.",
    type: "single",
    options: [
      {
        id: "A",
        text: "forecasting"
      },
      {
        id: "B",
        text: "computer vision"
      },
      {
        id: "C",
        text: "knowledge mining"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50092,
    number: 92,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Transparency is about explainability and user understanding, not throughput optimization.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Transparency focuses on increasing system performance and throughput.",
        answer: false
      },
      {
        id: "s2",
        text: "Transparency is supported when users are informed about an AI system's purpose and limitations.",
        answer: true
      },
      {
        id: "s3",
        text: "Providing meaningful explanations of how an AI system generates its results supports transparency.",
        answer: true
      }
    ]
  },
  {
    id: 50093,
    number: 93,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.",
    keySource: "domain",
    explanation: "Source did not expose the answer key in this capture.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Insufficient data in imported page capture"
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
    id: 50094,
    number: 94,
    topic: "Language",
    prompt: "You are developing an application that uses the Azure Language SDK and a Microsoft Foundry resource.\n\nYou need to return a list of important topics from unstructured text.\n\nWhich Python method should you use?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "client.begin_extract_summary()"
      },
      {
        id: "B",
        text: "client.extract_key_phrases()"
      },
      {
        id: "C",
        text: "client.recognize_linked_entities()"
      },
      {
        id: "D",
        text: "client.recognize_entities()"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50095,
    number: 95,
    topic: "Generative AI",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nTo process prompts that contain images, you must deploy ___ model in Microsoft Foundry.",
    keySource: "domain",
    explanation: "Image-containing prompts require a multimodal model.",
    type: "single",
    options: [
      {
        id: "A",
        text: "an embedding"
      },
      {
        id: "B",
        text: "a multimodal"
      },
      {
        id: "C",
        text: "a speech-to-text"
      },
      {
        id: "D",
        text: "a text-only"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50096,
    number: 96,
    topic: "Responsible AI",
    prompt: "What is an example of the Microsoft responsible AI principle of transparency?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "ensuring that developers are accountable for the solutions they create"
      },
      {
        id: "B",
        text: "ensuring that opportunities are allocated equally to all applicants"
      },
      {
        id: "C",
        text: "helping users understand the decisions made by an AI system"
      },
      {
        id: "D",
        text: "ensuring that the privileged data of users is stored in a secure manner"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50097,
    number: 97,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Access controls and data protection support privacy/security; sharing personal user data is not a responsible AI practice.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Limiting access to AI systems and data reduces the risk of unauthorized data exposure.",
        answer: true
      },
      {
        id: "s2",
        text: "Sharing personal user data improves collaboration and supports responsible AI practices.",
        answer: false
      },
      {
        id: "s3",
        text: "Protecting personal data and complying with data regulations are key considerations in responsible AI.",
        answer: true
      }
    ]
  },
  {
    id: 50098,
    number: 98,
    topic: "Language",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\n___ is used to extract dates, quantities, and locations from text.",
    keySource: "domain",
    explanation: "Named Entity Recognition extracts typed entities like dates, quantities, locations, and people/organizations.",
    type: "single",
    options: [
      {
        id: "A",
        text: "Key phrase extraction"
      },
      {
        id: "B",
        text: "Language detection"
      },
      {
        id: "C",
        text: "Named Entity Recognition (NER)"
      },
      {
        id: "D",
        text: "Sentiment analysis"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50099,
    number: 99,
    topic: "Generative AI",
    prompt: "HOTSPOT\n -\n\nYou deploy a model named gpt-image-1 in Microsoft Foundry.\n\nYou need to ensure that an application can generate an image from a user prompt by using the OpenAI Images API.\n\nHow should you complete the Python code? To answer, select the appropriate option in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "For image generation with gpt-image-1, use the OpenAI Images API generate method.",
    type: "single",
    options: [
      {
        id: "A",
        text: "chat.completions.create"
      },
      {
        id: "B",
        text: "images.create"
      },
      {
        id: "C",
        text: "images.generate"
      },
      {
        id: "D",
        text: "responses.create"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50100,
    number: 100,
    topic: "Speech",
    prompt: "In which two scenarios can you use speech recognition? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Speech recognition is used for transcription and captioning scenarios.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "creating a transcript of a telephone call or meeting"
      },
      {
        id: "B",
        text: "an in-car system that reads text messages aloud"
      },
      {
        id: "C",
        text: "creating an automated public address system for a train station"
      },
      {
        id: "D",
        text: "providing closed captions for recorded or live videos"
      }
    ],
    correct: [
      "A",
      "D"
    ]
  },
  {
    id: 50101,
    number: 101,
    topic: "Responsible AI",
    prompt: "Verifying that machine learning models do NOT show racial or gender bias is an example of which Microsoft responsible AI principle?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "safety"
      },
      {
        id: "B",
        text: "reliability"
      },
      {
        id: "C",
        text: "fairness"
      },
      {
        id: "D",
        text: "privacy and security"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50102,
    number: 102,
    topic: "Content Understanding",
    prompt: "You are developing an application that analyzes uploaded video files by using Azure Content Understanding in Foundry Tools.\n\nYou need to ensure that the application extracts structured information from the videos.\n\nWhat should the application call?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "Azure Language in Foundry Tools sentiment analysis"
      },
      {
        id: "B",
        text: "the Analyze API in Content Understanding"
      },
      {
        id: "C",
        text: "the Image Analysis API in Azure Vision in Foundry Tools"
      },
      {
        id: "D",
        text: "Azure OpenAI"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50103,
    number: 103,
    topic: "Language",
    prompt: "Which two scenarios are examples of a natural language processing workload? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "NLP examples include conversational smart assistants and knowledge-backed question answering agents.",
    type: "multiple",
    options: [
      {
        id: "A",
        text: "monitoring the temperature of machinery to turn on a fan when the temperature reaches a specific threshold"
      },
      {
        id: "B",
        text: "assembly line machinery that autonomously inserts headlamps into cars"
      },
      {
        id: "C",
        text: "a smart device in the home that responds to questions such as, “What will the weather be like today?”"
      },
      {
        id: "D",
        text: "an agent on a website that uses a knowledge base to interactively respond to users’ questions"
      }
    ],
    correct: [
      "C",
      "D"
    ]
  },
  {
    id: 50104,
    number: 104,
    topic: "Generative AI",
    prompt: "HOTSPOT\n -\n\nYou have a Microsoft Foundry project that contains a vision-enabled model deployment.\n\nYou need to develop an application that uses the Azure OpenAI client library to send prompts to the model.\n\nHow should you complete the Python code? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "The SDK call pattern is client.responses.create(...).",
    type: "single",
    options: [
      {
        id: "A",
        text: "completions"
      },
      {
        id: "B",
        text: "embeddings"
      },
      {
        id: "C",
        text: "images"
      },
      {
        id: "D",
        text: "responses"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50105,
    number: 105,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Generative models predict next tokens, system prompts steer behavior, and higher temperature makes outputs less deterministic.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "Generative AI models predict the next token in a sequence based on patterns learned during training.",
        answer: true
      },
      {
        id: "s2",
        text: "A system prompt can be used to influence the behavior and tone of generated responses.",
        answer: true
      },
      {
        id: "s3",
        text: "Increasing the Temperature parameter makes responses generated by generative AI models more deterministic and consistent.",
        answer: false
      }
    ]
  },
  {
    id: 50106,
    number: 106,
    topic: "Speech",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nA virtual assistant that converts spoken customer requests into written text relies on a ___ workload.",
    keySource: "domain",
    explanation: "Speech workloads handle conversion of spoken language into text.",
    type: "single",
    options: [
      {
        id: "A",
        text: "key phrase extraction"
      },
      {
        id: "B",
        text: "Natural Language Understanding (NLU)"
      },
      {
        id: "C",
        text: "speech"
      },
      {
        id: "D",
        text: "text analysis"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50107,
    number: 107,
    topic: "Responsible AI",
    prompt: "You are building an AI-based loan approval app.\n\nYou need to ensure that the app documents why a loan is approved or rejected and makes the report available to the applicant.\n\nThis is an example of which Microsoft responsible AI principle?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "transparency"
      },
      {
        id: "B",
        text: "accountability"
      },
      {
        id: "C",
        text: "fairness"
      },
      {
        id: "D",
        text: "inclusiveness"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50108,
    number: 108,
    topic: "Language",
    prompt: "You are developing an application that summarizes customer comments by using Azure Language in Foundry Tools.\n\nYou need to install the Azure Language SDK.\n\nWhich Python package should you install?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "azure-ai-translation-text"
      },
      {
        id: "B",
        text: "azure-ai-textanalytics"
      },
      {
        id: "C",
        text: "azure-search-documents"
      },
      {
        id: "D",
        text: "langchain"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50109,
    number: 109,
    topic: "Generative AI",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nAfter a generative AI model is deployed, applications ___ of the model.",
    keySource: "domain",
    explanation: "Applications call the deployed model through its API endpoint.",
    type: "single",
    options: [
      {
        id: "A",
        text: "send requests to the model by calling the API endpoint"
      },
      {
        id: "B",
        text: "embedding vector"
      },
      {
        id: "C",
        text: "training dataset"
      },
      {
        id: "D",
        text: "URL parameter"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50110,
    number: 110,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Not all AI models support image analysis/generation; multimodal/vision-enabled models can process image inputs.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "All AI models can analyze and generate images.",
        answer: false
      },
      {
        id: "s2",
        text: "A vision-enabled generative AI model can extract text from images.",
        answer: true
      },
      {
        id: "s3",
        text: "A multimodal model can process prompts that include both text and images.",
        answer: true
      }
    ]
  },
  {
    id: 50111,
    number: 111,
    topic: "Language",
    prompt: "Which natural language processing feature can be used to identify the main talking points in customer feedback surveys?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "translation"
      },
      {
        id: "B",
        text: "language detection"
      },
      {
        id: "C",
        text: "entity recognition"
      },
      {
        id: "D",
        text: "key phrase extraction"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50112,
    number: 112,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Inclusive design supports diverse user needs and preferences; single-input approaches are not inclusive by design.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "A single method of user input for an AI system provides an inclusive experience.",
        answer: false
      },
      {
        id: "s2",
        text: "Increasing the overall number of users that use an AI system supports an inclusive experience.",
        answer: false
      },
      {
        id: "s3",
        text: "Designing an AI system that accommodates users that have different language preferences supports an inclusive experience.",
        answer: true
      }
    ]
  },
  {
    id: 50113,
    number: 113,
    topic: "Generative AI",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nA multimodal model ___.",
    keySource: "domain",
    explanation: "Multimodal generative models can create new visual content from text prompts.",
    type: "single",
    options: [
      {
        id: "A",
        text: "analyzes images to detect objects"
      },
      {
        id: "B",
        text: "creates new visual content based on text prompts"
      },
      {
        id: "C",
        text: "organizes structured numerical data into predictive categories"
      },
      {
        id: "D",
        text: "uses pattern matching to retrieve similar images from a fixed database"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50114,
    number: 114,
    topic: "Generative AI",
    prompt: "You have a Microsoft Foundry project that contains a deployed generative AI model.\n\nYou need to develop an application by using the Microsoft Foundry SDK to send chat prompts to the deployed model.\n\nWhich information must the application include?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "Model training dataset, exported playground session history, and Foundry project display name"
      },
      {
        id: "B",
        text: "Exported playground session history, endpoint URL and task type"
      },
      {
        id: "C",
        text: "Credentials, endpoint URL, and model deployment name"
      },
      {
        id: "D",
        text: "Foundry project display name, model training dataset, and task type"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50115,
    number: 115,
    topic: "AI-901",
    prompt: "You plan to deploy a generative AI model to a Microsoft Foundry project in the East US Azure region.\n\nWhat should you check first?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Model availability"
      },
      {
        id: "B",
        text: "the token limit"
      },
      {
        id: "C",
        text: "REST API support"
      },
      {
        id: "D",
        text: "the authentication method"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50116,
    number: 116,
    topic: "AI-901",
    prompt: "Which type of Azure AI workload should you use to create illustrations based on the text of an article?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "generative AI"
      },
      {
        id: "B",
        text: "Azure Document Intelligence in Foundry Tools"
      },
      {
        id: "C",
        text: "computer vision"
      },
      {
        id: "D",
        text: "natural language processing"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50117,
    number: 117,
    topic: "Generative AI",
    prompt: "HOTSPOT\n -\n\nSelect the answer that correctly completes the sentence.\n\nWhen developing a lightweight chat application by using the Microsoft Foundry SDK, use the ___ class to access deployments, agents, and indexes.",
    keySource: "domain",
    explanation: "AIProjectClient is the Foundry SDK entry point for working with project resources.",
    type: "single",
    options: [
      {
        id: "A",
        text: "AIProjectClient"
      },
      {
        id: "B",
        text: "ChatCompletionsClient"
      },
      {
        id: "C",
        text: "FoundryLocalManager"
      },
      {
        id: "D",
        text: "ModelCatalogClient"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50118,
    number: 118,
    topic: "Generative AI",
    prompt: "You need to build an AI solution that produces new product images based on written descriptions provided by users.\n\nWhich AI workload should you use?",
    keySource: "source",
    explanation: "Image generation creates new images from text prompts.",
    type: "single",
    options: [
      {
        id: "A",
        text: "image analysis"
      },
      {
        id: "B",
        text: "image generation"
      },
      {
        id: "C",
        text: "object detection"
      },
      {
        id: "D",
        text: "optical character recognition (OCR)"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50119,
    number: 119,
    topic: "AI-901",
    prompt: "You have the process shown in the following exhibit.\n\nWhich type of AI solution is shown in the diagram?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "a sentiment analysis solution"
      },
      {
        id: "B",
        text: "a computer vision application"
      },
      {
        id: "C",
        text: "an agent"
      },
      {
        id: "D",
        text: "a machine learning model"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50120,
    number: 120,
    topic: "Generative AI",
    prompt: "You have the following REST API request.\n\nWhich Azure OpenAI model should you use to process the request?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "DALL-E"
      },
      {
        id: "B",
        text: "Codex"
      },
      {
        id: "C",
        text: "GPT-4.1"
      },
      {
        id: "D",
        text: "Whisper"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50121,
    number: 121,
    topic: "Language",
    prompt: "You are building a chatbot that will use natural language processing (NLP) to perform the following actions based on the text input of a user:\n\n•\tAccept customer orders.\n•\tRetrieve support documents.\n•\tRetrieve order status updates.\n\nWhich type of NLP should you use?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "sentiment analysis"
      },
      {
        id: "B",
        text: "named entity recognition"
      },
      {
        id: "C",
        text: "translation"
      },
      {
        id: "D",
        text: "language understanding"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50122,
    number: 122,
    topic: "AI-901",
    prompt: "You need to build an AI solution that responds to user queries with detailed written explanations.\n\nWhich type of AI model should you use?",
    keySource: "source",
    explanation: "Source answer: C",
    type: "single",
    options: [
      {
        id: "A",
        text: "an image generation model"
      },
      {
        id: "B",
        text: "a speech recognition model"
      },
      {
        id: "C",
        text: "a text generation model"
      },
      {
        id: "D",
        text: "an embedding model"
      }
    ],
    correct: [
      "C"
    ]
  },
  {
    id: 50123,
    number: 123,
    topic: "Responsible AI",
    prompt: "You are designing an AI system that empowers everyone, including people who have hearing, visual, and other impairments.\n\nThis is an example of which Microsoft guiding principle for responsible AI?",
    keySource: "source",
    explanation: "Source answer: D",
    type: "single",
    options: [
      {
        id: "A",
        text: "accountability"
      },
      {
        id: "B",
        text: "reliability and safety"
      },
      {
        id: "C",
        text: "fairness"
      },
      {
        id: "D",
        text: "inclusiveness"
      }
    ],
    correct: [
      "D"
    ]
  },
  {
    id: 50124,
    number: 124,
    topic: "Speech",
    prompt: "You are developing an application that continuously transcribes speech from a default microphone by using Azure Speech in Microsoft Foundry Tools.\n\nYou need to perform speech-to-text transcription from the microphone.\n\nWhich Python class should you use?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "SpeechRecognizer"
      },
      {
        id: "B",
        text: "SpeechSynthesizer"
      },
      {
        id: "C",
        text: "SpeechConfig"
      },
      {
        id: "D",
        text: "AudioOutputConfig"
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50125,
    number: 125,
    topic: "Responsible AI",
    prompt: "You are building an AI solution that processes customer information.\n\nWhich task is an example of the Microsoft responsible AI principle of privacy and security?",
    keySource: "source",
    explanation: "Source answer: A",
    type: "single",
    options: [
      {
        id: "A",
        text: "Encrypt stored customer data and restrict system access by using role-based controls."
      },
      {
        id: "B",
        text: "Provide explanations about how the system generates predictions."
      },
      {
        id: "C",
        text: "Test the system under unexpected conditions to prevent harmful failures."
      },
      {
        id: "D",
        text: "Evaluate model outputs across demographic groups to reduce bias."
      }
    ],
    correct: [
      "A"
    ]
  },
  {
    id: 50126,
    number: 126,
    topic: "AI-901",
    prompt: "You need to deploy a generative AI model to a Microsoft Foundry project.\n\nWhich factor should you use to identify which type of model can be deployed to the project?",
    keySource: "source",
    explanation: "Source answer: B",
    type: "single",
    options: [
      {
        id: "A",
        text: "the token size"
      },
      {
        id: "B",
        text: "Azure region availability"
      },
      {
        id: "C",
        text: "the authentication method"
      },
      {
        id: "D",
        text: "REST API support"
      }
    ],
    correct: [
      "B"
    ]
  },
  {
    id: 50127,
    number: 127,
    topic: "Responsible AI",
    prompt: "DRAG DROP\n -\n\nMatch the principles of responsible AI to appropriate requirements.\n\nTo answer, drag the appropriate principles from the column on the left to its requirement on the right. Each principle may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Fairness addresses non-discrimination, privacy and security protects personal data access, and transparency supports explainable/traceable decisions.",
    type: "drag-drop",
    options: [
      {
        id: "A",
        text: "Fairness"
      },
      {
        id: "B",
        text: "Privacy and security"
      },
      {
        id: "C",
        text: "Reliability and safety"
      },
      {
        id: "D",
        text: "Transparency"
      }
    ],
    targets: [
      {
        id: "t1",
        text: "The system must not discriminate based on gender, race, or age."
      },
      {
        id: "t2",
        text: "Personal data must only be visible to approved users."
      },
      {
        id: "t3",
        text: "Automated decision-making processes must be recorded so approved users can identify why a decision was made."
      }
    ],
    correct: [
      "t1:A",
      "t2:B",
      "t3:D"
    ]
  },
  {
    id: 50128,
    number: 128,
    topic: "AI-901",
    prompt: "HOTSPOT\n -\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    keySource: "domain",
    explanation: "Summarization does not transcribe speech, chat completion models are not embedding models, and embedding models produce vector representations.",
    type: "hotspot-boolean",
    statements: [
      {
        id: "s1",
        text: "A summarization model is used to transcribe spoken audio into written text.",
        answer: false
      },
      {
        id: "s2",
        text: "A chat completion model can generate vector embeddings for semantic tasks.",
        answer: false
      },
      {
        id: "s3",
        text: "An embedding model can generate vector representations of the provided input.",
        answer: true
      }
    ]
  }
];
