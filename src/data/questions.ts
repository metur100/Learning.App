import type { Question } from '../types';

/**
 * AI-901 (Azure AI Fundamentals) practice questions.
 * All 52 questions transcribed from the source practice set.
 *
 * `keySource: 'source'`  -> the correct answer was provided in the source material.
 * `keySource: 'domain'`  -> the source withheld the key; the answer is supplied
 *                           from Azure AI domain knowledge so the question is usable.
 */
export const questions: Question[] = [
  {
    id: 1,
    number: 1,
    type: 'single',
    topic: 'Speech',
    prompt:
      'You are using the Azure Speech SDK to develop a Python application that supports real-time spoken conversations.\n\nWhich Azure Speech class should you use to configure the connection to the Azure Speech service?',
    options: [
      { id: 'A', text: 'AudioOutputConfig' },
      { id: 'B', text: 'SpeechSynthesizer' },
      { id: 'C', text: 'AudioConfig' },
      { id: 'D', text: 'SpeechConfig' },
    ],
    correct: ['D'],
    keySource: 'source',
    explanation:
      'SpeechConfig holds the subscription key and region and is used to configure the connection to the Azure Speech service.',
  },
  {
    id: 2,
    number: 2,
    type: 'hotspot-select',
    topic: 'Generative AI',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nWhen using the OpenAI Responses API and a vision-enabled model, you can include an image in a request by providing the image as ___.',
    options: [
      { id: 'A', text: 'a base64-encoded image data' },
      { id: 'B', text: 'a CSV file attachment' },
      { id: 'C', text: 'an MP4 video stream' },
      { id: 'D', text: 'a shared access signature (SAS) token' },
    ],
    correct: ['A'],
    keySource: 'domain',
    explanation:
      'Vision-enabled models accept images as a base64-encoded data string or a publicly accessible URL. Of the options shown, base64-encoded image data is correct.',
  },
  {
    id: 3,
    number: 3,
    type: 'single',
    topic: 'Agents',
    prompt:
      'You need to create an AI agent in Microsoft Foundry that follows a specific role and behavior when responding to users.\n\nWhat should you configure?',
    options: [
      { id: 'A', text: 'system instructions' },
      { id: 'B', text: 'temperature' },
      { id: 'C', text: 'tokens per minute (TPM)' },
      { id: 'D', text: 'max completion tokens' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation:
      'System instructions (the system prompt) define the role and behavior an agent follows when responding.',
  },
  {
    id: 4,
    number: 4,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'System prompts can be used to authorize users.', answer: false },
      { id: 's2', text: 'A system prompt is used to reduce tokens per minute (TPM).', answer: false },
      { id: 's3', text: 'A system prompt guides the behavior of a generative AI model.', answer: true },
    ],
    keySource: 'domain',
    explanation:
      'A system prompt guides model behavior. It does not authorize users and is unrelated to TPM limits.',
  },
  {
    id: 5,
    number: 5,
    type: 'single',
    topic: 'Content Understanding',
    prompt:
      'You are developing a web app that processes invoices to calculate expenses.\n\nYou need to extract structured fields, including nested values, from the invoices by using a defined schema.\n\nWhat should you use?',
    options: [
      { id: 'A', text: 'an optical character recognition (OCR)-only document processing pipeline' },
      { id: 'B', text: 'a transcription workflow in Azure Speech in Foundry Tools' },
      { id: 'C', text: 'an analyzer in Azure Content Understanding in Foundry Tools' },
      { id: 'D', text: 'an Azure AI Search service' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation:
      'A Content Understanding analyzer extracts structured fields (including nested values) using a defined schema.',
  },
  {
    id: 6,
    number: 6,
    type: 'hotspot-boolean',
    topic: 'Speech',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'Voice Live returns only transcribed text.', answer: false },
      { id: 's2', text: 'Voice Live requires you to separately implement speech to text and text to speech services.', answer: false },
      { id: 's3', text: 'Voice Live combines speech to text, reasoning, and text to speech into a single conversational experience.', answer: true },
    ],
    keySource: 'domain',
    explanation:
      'Voice Live is a single integrated conversational experience combining speech to text, reasoning, and text to speech.',
  },
  {
    id: 7,
    number: 7,
    type: 'hotspot-select',
    topic: 'Speech',
    prompt:
      'You are developing a voice application that listens for spoken commands and converts them into text.\n\nSelect the method that completes the code so the recognizer performs a single, one-shot recognition.',
    codeContext:
      'import azure.cognitiveservices.speech as speechsdk\nspeech_config = speechsdk.SpeechConfig(subscription=key, region=region)\nrecognizer = speechsdk.SpeechRecognizer(speech_config=speech_config)\nresult = recognizer.___',
    options: [
      { id: 'A', text: 'recognizer.recognize_once()' },
      { id: 'B', text: 'recognizer.speak_text_async("Ready")' },
      { id: 'C', text: 'recognizer.start_continuous_recognition()' },
      { id: 'D', text: 'recognizer.start_keyword_recognition()' },
    ],
    correct: ['A'],
    keySource: 'domain',
    explanation:
      'recognize_once() performs a single, blocking recognition of one utterance and returns the result.',
  },
  {
    id: 8,
    number: 8,
    type: 'multiple',
    topic: 'Generative AI',
    prompt:
      'What are two purposes of instructions when prompting a generative AI model? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    options: [
      { id: 'A', text: 'defines the agent\'s role and behavior' },
      { id: 'B', text: 'selects which model to use' },
      { id: 'C', text: 'defines the Azure region where inference occurs' },
      { id: 'D', text: 'defines the tokens per minute (TPM) allocation for the model' },
      { id: 'E', text: 'defines constraints on the model\'s responses' },
    ],
    correct: ['A', 'E'],
    keySource: 'source',
    explanation:
      'Instructions are used to define the agent behavior and to set response constraints. Model, region, and TPM are deployment or service configuration concerns.',
  },
  {
    id: 9,
    number: 9,
    type: 'hotspot-select',
    topic: 'Speech',
    prompt:
      'You are developing an application that converts text into spoken audio and saves the synthesized audio to a file by using Azure Speech in Foundry Tools.\n\nHow should you complete the Python code? To answer, select the appropriate option in the answer area.\n\nNOTE: Each correct selection is worth one point.',
    codeContext:
      'import azure.cognitiveservices.speech as speechsdk\n...\nspeech_config = speechsdk.SpeechConfig(subscription=key, region=region)\naudio_config = speechsdk.audio.___\n\nsynthesizer = speechsdk.SpeechSynthesizer(\n    speech_config=speech_config,\n    audio_config=audio_config\n)\n...',
    options: [
      { id: 'A', text: 'AudioOutputConfig(filename="output.wav")' },
      { id: 'B', text: 'AudioOutputConfig(stream)' },
      { id: 'C', text: 'AudioStreamFormat(wave_stream_format=AudioStreamWaveFormat.PCM)' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation:
      'To write synthesized speech directly to output.wav, create the audio config with AudioOutputConfig(filename="output.wav").',
  },
  {
    id: 10,
    number: 10,
    type: 'hotspot-select',
    topic: 'Agents',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nTo define an agent\'s role and behaviors, you must configure a ___ for the agent.',
    options: [
      { id: 'A', text: 'deployment slot' },
      { id: 'B', text: 'embedding index' },
      { id: 'C', text: 'fine-tuning job' },
      { id: 'D', text: 'system prompt' },
    ],
    correct: ['D'],
    keySource: 'source',
    explanation: 'A system prompt defines an agent\'s role and expected behavior.',
  },
  {
    id: 11,
    number: 11,
    type: 'hotspot-select',
    topic: 'Content Understanding',
    prompt:
      'You are developing an application that analyze invoices by using Azure Content Understanding in Foundry Tools.\n\nYou need to ensure that the application retrieves the analysis results after processing completes.\n\nHow should you complete the Python code? To answer, select the appropriate option in the answer area.\n\nNOTE: Each correct selection is worth one point.',
    codeContext: 'poller = client.begin_analyze(\n    analyzer_id="invoice",\n    input_url=url\n)\nresult = poller.___()',
    options: [
      { id: 'A', text: 'get_results' },
      { id: 'B', text: 'result' },
      { id: 'C', text: 'status' },
      { id: 'D', text: 'wait' },
    ],
    correct: ['B'],
    keySource: 'source',
    explanation: 'poller.result() blocks until analysis completes and returns the extracted results.',
  },
  {
    id: 12,
    number: 12,
    type: 'drag-drop',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project named project1 that contains an Azure OpenAI resource named resource1.\nTo resource1, you deploy a gpt-4.1-mini model by using a model deployment named my-mini-gpt.\nYou need to connect to my-mini-gpt from an application.\n\nHow should you complete the Python code? To answer, select the values that complete the placeholders.\n\nNOTE: Each correct selection is worth one point.',
    codeContext:
      'client = OpenAI(api_key="...",\n    base_url="https://<___>.openai.azure.com/openai/v1/",\n)\nresponse = client.responses.create(\n    model="<___>",\n    ...\n)',
    options: [
      { id: 'gpt-4.1-mini', text: 'gpt-4.1-mini' },
      { id: 'my-mini-gpt', text: 'my-mini-gpt' },
      { id: 'project1', text: 'project1' },
      { id: 'resource1', text: 'resource1' },
    ],
    targets: [
      { id: 'base_url', text: 'base_url placeholder' },
      { id: 'model', text: 'model placeholder' },
    ],
    correct: ['base_url:resource1', 'model:my-mini-gpt'],
    keySource: 'source',
    explanation:
      'The base URL uses the Azure OpenAI resource name (resource1), and the model field uses the deployment name (my-mini-gpt).',
  },
  {
    id: 13,
    number: 13,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'An AI generative model is retrained before performing each user request.', answer: false },
      { id: 's2', text: 'An AI agent responds by copying and pasting answers stored in a database.', answer: false },
      { id: 's3', text: 'An AI agent uses a generative AI model to establish actions based on user input.', answer: true },
    ],
    keySource: 'source',
    explanation:
      'Agents use a generative model to decide actions from user input; they are not retrained per request and do not simply copy database answers.',
  },
  {
    id: 14,
    number: 14,
    type: 'drag-drop',
    topic: 'Responsible AI',
    prompt:
      'You are reviewing best practices for using AI at your company.\n\nWhich Microsoft responsible AI principle is each task an example of? Select the principles used by the tasks shown.\n\nNOTE: Each correct selection is worth one point.',
    options: [
      { id: 'accountability', text: 'Accountability' },
      { id: 'fairness', text: 'Fairness' },
      { id: 'inclusiveness', text: 'Inclusiveness' },
      { id: 'privacy', text: 'Privacy and security' },
      { id: 'reliability', text: 'Reliability and safety' },
      { id: 'transparency', text: 'Transparency' },
    ],
    targets: [
      { id: 't1', text: 'Evaluating model outputs to ensure that decisions are NOT biased against specific demographic groups' },
      { id: 't2', text: 'Encrypting sensitive customer data and restricting system access to authorized personnel' },
      { id: 't3', text: 'Informing users when they are interacting with an AI system and explaining the system\'s capabilities and limitations' },
      { id: 't4', text: 'Testing AI systems under different conditions to reduce unexpected failures' },
    ],
    correct: ['t1:fairness', 't2:privacy', 't3:transparency', 't4:reliability'],
    keySource: 'source',
    explanation:
      'The tasks map to: Fairness (reduce demographic bias), Privacy and security (protect sensitive data and access), Transparency (inform users and explain system limits), and Reliability and safety (test under varied conditions to reduce failures).',
  },
  {
    id: 15,
    number: 15,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'Generating a response to a user prompt occurs during the inference stage.', answer: true },
      { id: 's2', text: 'A generative AI model generates responses by copying stored documents directly from the model\'s training data.', answer: false },
      { id: 's3', text: 'A generative AI model produces output by predicting the next token based on patterns learned from the model\'s training data.', answer: true },
    ],
    keySource: 'source',
    explanation:
      'Response generation happens at inference; models predict the next token from learned patterns rather than copying training documents.',
  },
  {
    id: 16,
    number: 16,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You need to build an AI solution that produces new product images based on written descriptions provided by users.\n\nWhich AI workload should you use?',
    options: [
      { id: 'A', text: 'image analysis' },
      { id: 'B', text: 'image generation' },
      { id: 'C', text: 'object detection' },
      { id: 'D', text: 'optical character recognition (OCR)' },
    ],
    correct: ['B'],
    keySource: 'source',
    explanation: 'Generating new images from text descriptions is an image generation workload.',
  },
  {
    id: 17,
    number: 17,
    type: 'hotspot-select',
    topic: 'Computer Vision',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nInformation extraction solutions that detect and read text in scanned documents and images rely on ___.',
    options: [
      { id: 'A', text: 'computer vision' },
      { id: 'B', text: 'image generation' },
      { id: 'C', text: 'sentiment analysis' },
      { id: 'D', text: 'speech synthesis' },
    ],
    correct: ['A'],
    keySource: 'domain',
    explanation: 'Reading text in scanned documents and images (OCR) is a computer vision capability.',
  },
  {
    id: 18,
    number: 18,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that has a generative AI model deployment.\n\nYou need to ensure that responses generated by the model minimize costs and remain within a defined length.\n\nWhich parameter should you configure?',
    options: [
      { id: 'A', text: 'Top P' },
      { id: 'B', text: 'Temperature' },
      { id: 'C', text: 'Max Completion Tokens' },
      { id: 'D', text: 'Model version settings' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'Max Completion Tokens caps output length, controlling both cost and response size.',
  },
  {
    id: 19,
    number: 19,
    type: 'hotspot-boolean',
    topic: 'Responsible AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'Human-in-the-loop practices provide accountability for AI-generated decisions.', answer: true },
      { id: 's2', text: 'Deploying an AI system to a production environment eliminates the need for ongoing monitoring.', answer: false },
      { id: 's3', text: 'Disclosing the team that designed and deployed an AI system provides accountability for the system\'s output.', answer: true },
    ],
    keySource: 'source',
    explanation:
      'Human oversight and disclosure support accountability; deployment never removes the need for monitoring.',
  },
  {
    id: 20,
    number: 20,
    type: 'single',
    topic: 'Language',
    prompt:
      'Your company processes customer support emails.\n\nYou need to implement an AI solution that automatically identifies mentions of people, organizations, and locations in the emails.\n\nWhich text analysis technique should you use?',
    options: [
      { id: 'A', text: 'Named Entity Recognition (NER)' },
      { id: 'B', text: 'key phrase extraction' },
      { id: 'C', text: 'sentiment analysis' },
      { id: 'D', text: 'summarization' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Named Entity Recognition detects entities such as people, organizations, and locations.',
  },
  {
    id: 21,
    number: 21,
    type: 'hotspot-select',
    topic: 'Responsible AI',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nEnsuring that human reviewers oversee AI-generated decisions and remain responsible for the final output is an example of the Microsoft responsible AI principle of ___.',
    options: [
      { id: 'A', text: 'accountability' },
      { id: 'B', text: 'fairness' },
      { id: 'C', text: 'privacy and security' },
      { id: 'D', text: 'transparency' },
    ],
    correct: ['A'],
    keySource: 'domain',
    explanation: 'Human oversight and responsibility for final output is the accountability principle.',
  },
  {
    id: 22,
    number: 22,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You need to build an AI solution that generates marketing email drafts based on a short description of a product and its target audience.\n\nWhich AI workload should you use?',
    options: [
      { id: 'A', text: 'speech recognition' },
      { id: 'B', text: 'text classification' },
      { id: 'C', text: 'generative AI' },
      { id: 'D', text: 'computer vision' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'Producing new email drafts from a prompt is a generative AI workload.',
  },
  {
    id: 23,
    number: 23,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'The Temperature parameter can be set before deploying a model.', answer: false },
      { id: 's2', text: 'During inference, the model name is used to route requests to a specific deployment.', answer: true },
      { id: 's3', text: 'After a model is deployed, both code and testing tools can be used to interact with the model.', answer: true },
    ],
    keySource: 'source',
    explanation:
      'Temperature is a request-time parameter, not a deployment-time setting. Deployment/model naming routes requests, and deployed models are usable from both code and testing tools.',
  },
  {
    id: 24,
    number: 24,
    type: 'hotspot-select',
    topic: 'Responsible AI',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nEvaluating model outcomes across demographic groups to reduce bias is an example of the Microsoft responsible AI principle of ___.',
    options: [
      { id: 'A', text: 'fairness' },
      { id: 'B', text: 'accountability' },
      { id: 'C', text: 'transparency' },
      { id: 'D', text: 'privacy and security' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Reducing bias across demographic groups is the fairness principle.',
  },
  {
    id: 25,
    number: 25,
    type: 'hotspot-select',
    topic: 'Responsible AI',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nThe Microsoft responsible AI principle of transparency requires that AI systems ___.',
    options: [
      { id: 'A', text: 'be explainable to users' },
      { id: 'B', text: 'encrypt all stored data' },
      { id: 'C', text: 'operate without human oversight' },
      { id: 'D', text: 'maximize model accuracy' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Transparency requires that AI systems be understandable and explainable to the people who use them.',
  },
  {
    id: 26,
    number: 26,
    type: 'single',
    topic: 'Responsible AI',
    prompt:
      'You are developing an AI-powered customer support application.\n\nWhich task is an example of the Microsoft responsible AI principle of inclusiveness?',
    options: [
      { id: 'A', text: 'Encrypt stored customer data and restrict access by using role-based controls.' },
      { id: 'B', text: 'Evaluate model outputs across demographic groups to reduce bias.' },
      { id: 'C', text: 'Design the interface to support multiple languages and screen readers.' },
      { id: 'D', text: 'Provide explanations about how predictions are generated.' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'Inclusiveness means designing so everyone can use the product, e.g. multiple languages and screen-reader support.',
  },
  {
    id: 27,
    number: 27,
    type: 'hotspot-select',
    topic: 'AI Workloads',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nAn AI workload that produces new content based on user input is an example of ___.',
    options: [
      { id: 'A', text: 'content understanding' },
      { id: 'B', text: 'generative AI' },
      { id: 'C', text: 'information extraction' },
      { id: 'D', text: 'text analysis' },
    ],
    correct: ['B'],
    keySource: 'source',
    explanation: 'Producing new content from user input is the defining trait of generative AI.',
  },
  {
    id: 28,
    number: 28,
    type: 'hotspot-boolean',
    topic: 'Responsible AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.',
    statements: [
      { id: 's1', text: 'Fairness can be achieved by focusing solely on improving the overall accuracy of an AI model.', answer: false },
      { id: 's2', text: 'Evaluating AI system outputs to identify and reduce bias across demographic groups supports fairness.', answer: true },
      { id: 's3', text: 'Ensuring fairness for an AI system means that all users always receive the same output from the system.', answer: false },
    ],
    keySource: 'source',
    explanation: 'Fairness requires active bias evaluation and mitigation across groups; overall accuracy alone and identical output for all users do not guarantee fairness.',
  },
  {
    id: 29,
    number: 29,
    type: 'hotspot-select',
    topic: 'Content Understanding',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nWhen content is submitted to Azure Content Understanding in Foundry Tools, the analysis is ___.',
    options: [
      { id: 'A', text: 'asynchronous' },
      { id: 'B', text: 'synchronous' },
      { id: 'C', text: 'returned only as unstructured plain text' },
      { id: 'D', text: 'limited to optical character recognition (OCR)-only processing' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Content Understanding analysis runs as an asynchronous, long-running operation you poll for results.',
  },
  {
    id: 30,
    number: 30,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that contains a generative AI model deployment.\nYou test the model by using the Foundry playground.\nYou need to develop an application that sends requests to the deployed model.\n\nWhich information must the application include to call the model?',
    options: [
      { id: 'A', text: 'The exported playground session history' },
      { id: 'B', text: 'The model training dataset' },
      { id: 'C', text: 'The Foundry project display name' },
      { id: 'D', text: 'The model endpoint and authentication credentials' },
    ],
    correct: ['D'],
    keySource: 'source',
    explanation: 'To call a deployed model an application needs the endpoint URL and authentication credentials (key or token).',
  },
  {
    id: 31,
    number: 31,
    type: 'hotspot-boolean',
    topic: 'Content Understanding',
    prompt:
      'For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.',
    statements: [
      { id: 's1', text: 'Azure Content Understanding in Foundry Tools can analyze only PDF documents.', answer: false },
      { id: 's2', text: 'Azure Content Understanding in Foundry Tools results are returned in the JSON format.', answer: true },
      { id: 's3', text: 'Azure Content Understanding in Foundry Tools can extract structured fields from documents and forms by using optical character recognition (OCR) to read text.', answer: true },
    ],
    keySource: 'source',
    explanation: 'Content Understanding is not limited to PDFs, returns structured JSON results, and can use OCR to read text for structured field extraction.',
  },
  {
    id: 32,
    number: 32,
    type: 'hotspot-boolean',
    topic: 'Agents',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'In Microsoft Foundry Agent Service, setting tool_choice to auto for an agent enables the agent to decide whether to call a tool.', answer: true },
      { id: 's2', text: 'In Microsoft Foundry Agent Service, setting tool_choice to none for an agent means that the model decides whether to call a tool.', answer: false },
      { id: 's3', text: 'In Microsoft Foundry Agent Service, setting tool_choice to required for an agent ensures that the agent must call one or more tools during each run.', answer: true },
    ],
    keySource: 'source',
    explanation: 'auto lets the model decide, none disables tool calls, and required forces one or more tool calls.',
  },
  {
    id: 33,
    number: 33,
    type: 'single',
    topic: 'Agents',
    prompt:
      'You have a Microsoft Foundry project that contains an agent named Agent1.\n\nYou need to ensure that Agent1 always calls an Azure function when the agent responds to user input.\n\nTo what should you set tool_choice for Agent1?',
    options: [
      { id: 'A', text: 'required' },
      { id: 'B', text: 'auto' },
      { id: 'C', text: 'none' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Setting tool_choice to "required" forces the model to call a tool (the Azure function) on every response.',
  },
  {
    id: 34,
    number: 34,
    type: 'hotspot-select',
    topic: 'Content Understanding',
    prompt:
      'Select the answer that correctly completes the sentence.\n\n___ defines which fields to extract when analyzing content by using Azure Content Understanding in Foundry Tools.',
    options: [
      { id: 'A', text: 'A keyword list' },
      { id: 'B', text: 'Optical character recognition (OCR)-only processing' },
      { id: 'C', text: 'A schema' },
      { id: 'D', text: 'A synchronous API call' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'In Content Understanding, a schema defines which structured fields to extract from the content.',
  },
  {
    id: 35,
    number: 35,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that contains a vision-enabled model deployment.\n\nYou need to develop an application that sends a message containing text and an image URL. The solution must ensure the quickest response time.\n\nWhich message structure should you include in the request?',
    options: [
      { id: 'A', text: 'a system message that includes both a text item and an image item in the content array' },
      { id: 'B', text: 'a system message that includes only a text item and sends an image item in a separate request' },
      { id: 'C', text: 'a user message that includes only a text item and sends an image item in a separate request' },
      { id: 'D', text: 'a user message that includes both a text item and an image item in the content array' },
    ],
    correct: ['D'],
    keySource: 'source',
    explanation: 'Sending a single user message whose content array holds both the text and image items is the fastest, correct structure.',
  },
  {
    id: 36,
    number: 36,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'In the Foundry playground, you can upload a local image and include text in the same message when prompting a multimodal model.', answer: true },
      { id: 's2', text: 'When using the OpenAI Responses API and a vision-enabled model, images can be provided only as base64-encoded image data.', answer: false },
      { id: 's3', text: 'Prompts that include images require deploying a text-only model because multimodal capabilities are handled by the application layer.', answer: false },
    ],
    keySource: 'source',
    explanation: 'Multimodal prompts can mix text and a local image. Images may be supplied as base64 or a URL, and multimodal handling requires a vision-enabled model.',
  },
  {
    id: 37,
    number: 37,
    type: 'single',
    topic: 'Content Understanding',
    prompt:
      'You are developing an application that processes voicemail recordings by using Azure Content Understanding in Foundry Tools.\n\nWhich feature does Azure Content Understanding use to convert audio to text?',
    options: [
      { id: 'A', text: 'key phrase extraction' },
      { id: 'B', text: 'transcription' },
      { id: 'C', text: 'Voice Live' },
      { id: 'D', text: 'optical character recognition (OCR)' },
    ],
    correct: ['B'],
    keySource: 'source',
    explanation: 'Transcription converts spoken audio into text within Content Understanding.',
  },
  {
    id: 38,
    number: 38,
    type: 'drag-drop',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that contains a model deployment. You are developing an application that sends an image and a user question to the model.\nYou need to send both text and image content in the same request so the model can return an answer.\n\nHow should you complete the Python code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.',
    codeContext:
      'response = client.responses.create(\n    model=os.getenv("MODEL"),\n    input=[\n        {\n            "role": "user",\n            "content": [\n                {"type": "<___>", "text": "What is in this image? Provide 3 bullet points."},\n                {"type": "<___>", "image_url": image_url}\n            ]\n        }\n    ]\n)',
    options: [
      { id: 'input_image', text: 'input_image' },
      { id: 'input_text', text: 'input_text' },
      { id: 'input_url', text: 'input_url' },
      { id: 'output_image', text: 'output_image' },
      { id: 'output_text', text: 'output_text' },
    ],
    targets: [
      { id: 'blank1', text: 'First blank (text item type)' },
      { id: 'blank2', text: 'Second blank (image item type)' },
    ],
    correct: ['blank1:input_text', 'blank2:input_image'],
    keySource: 'source',
    explanation: 'In a multimodal request content array, text items use type input_text and image items use type input_image.',
  },
  {
    id: 39,
    number: 39,
    type: 'single',
    topic: 'Content Understanding',
    prompt:
      'You are developing an application that analyzes voicemail recordings by using Azure Content Understanding in Foundry Tools.\n\nYou need to extract a transcript and structured information from the recordings.\n\nWhich type of analyzer should you use?',
    options: [
      { id: 'A', text: 'document analyzer' },
      { id: 'B', text: 'video analyzer' },
      { id: 'C', text: 'audio analyzer' },
      { id: 'D', text: 'image analyzer' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'An audio analyzer transcribes recordings and extracts structured fields from them.',
  },
  {
    id: 40,
    number: 40,
    type: 'multiple',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that contains a vision-enabled model deployment. You are developing an application that sends images to the model.\n\nIn which two formats can you provide the images? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    options: [
      { id: 'A', text: 'a base64-encoded image data string' },
      { id: 'B', text: 'a JSON document that describes the image content' },
      { id: 'C', text: 'a UTF-8 encoded text description of the image' },
      { id: 'D', text: 'a publicly accessible URL of the image' },
    ],
    correct: ['A', 'D'],
    keySource: 'source',
    explanation: 'Images may be provided as a base64-encoded data string or as a publicly accessible URL.',
  },
  {
    id: 41,
    number: 41,
    type: 'hotspot-select',
    topic: 'Generative AI',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nAfter deploying a vision-enabled GPT model in Microsoft Foundry, you can configure an application to send requests to the ___.',
    options: [
      { id: 'A', text: 'endpoint of the model' },
      { id: 'B', text: 'evaluation pipeline of the model' },
      { id: 'C', text: 'Foundry playground' },
      { id: 'D', text: 'training dataset of the model' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Applications send requests to the deployed model\'s endpoint.',
  },
  {
    id: 42,
    number: 42,
    type: 'single',
    topic: 'Content Understanding',
    prompt:
      'You are developing an application that extracts fields from PDFs by using Azure Content Understanding in Foundry Tools.\n\nYou need to use the Python SDK to submit a PDF for analysis and retrieve the extraction results.\n\nWhat should you do?',
    options: [
      { id: 'A', text: 'Call analyze() to return the extracted fields synchronously in the same request.' },
      { id: 'B', text: 'Submit the PDF to an analyzer and read the results from the request headers.' },
      { id: 'C', text: 'Call begin_analyze(), and then call poller.result() to retrieve the results.' },
      { id: 'D', text: 'Use optical character recognition (OCR) to extract text from the PDF and map the fields in the code.' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'Analysis is a long-running operation: call begin_analyze() then poller.result() to get the results.',
  },
  {
    id: 43,
    number: 43,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'In the new Microsoft Foundry portal, you must fine-tune a model before you can deploy the model.', answer: false },
      { id: 's2', text: 'In the new Microsoft Foundry portal, you can test a model from the model catalog only after you deploy the model.', answer: false },
      { id: 's3', text: 'In the new Microsoft Foundry portal, you can deploy a model from the model catalog only after retraining the model.', answer: false },
    ],
    keySource: 'domain',
    explanation: 'Fine-tuning and retraining are not prerequisites for deployment, and catalog models can be tried without first deploying them.',
  },
  {
    id: 44,
    number: 44,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that contains a vision-enabled model deployment. You use the Azure OpenAI Responses API to send a prompt to the model.\n\nYou need to provide an image for analysis. Which content item should you include in the request?',
    options: [
      { id: 'A', text: 'image_generation' },
      { id: 'B', text: 'output_image' },
      { id: 'C', text: 'input_image' },
      { id: 'D', text: 'image_base64' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'The Responses API uses an input_image content item to supply an image for analysis.',
  },
  {
    id: 45,
    number: 45,
    type: 'drag-drop',
    topic: 'Content Understanding',
    prompt:
      'You are developing an application that extracts structured information from different types of content by using Azure Content Understanding in Foundry Tools.\nYou need to extract scanned invoices in PDF format and voicemail recordings in WAV format.\n\nWhich type of analyzer should you use for each content type? To answer, drag the appropriate analyzer types to the correct content types.',
    options: [
      { id: 'audio', text: 'audio analyzer' },
      { id: 'document', text: 'document analyzer' },
      { id: 'image', text: 'image analyzer' },
      { id: 'video', text: 'video analyzer' },
    ],
    targets: [
      { id: 'invoices', text: 'Scanned invoices' },
      { id: 'voicemail', text: 'Voicemail recordings' },
    ],
    correct: ['invoices:document', 'voicemail:audio'],
    keySource: 'source',
    explanation: 'PDF invoices should use a document analyzer, and WAV voicemail recordings should use an audio analyzer.',
  },
  {
    id: 46,
    number: 46,
    type: 'single',
    topic: 'Content Understanding',
    prompt:
      'You have an Azure subscription.\n\nYou need to use Azure Content Understanding in Foundry Tools to extract structured data from invoices.\n\nWhat should you provision?',
    options: [
      { id: 'A', text: 'a Microsoft Foundry project' },
      { id: 'B', text: 'an Azure OpenAI resource' },
      { id: 'C', text: 'a Microsoft Foundry resource' },
      { id: 'D', text: 'an Azure AI Search service' },
    ],
    correct: ['C'],
    keySource: 'source',
    explanation: 'Content Understanding requires a Microsoft Foundry resource to be provisioned.',
  },
  {
    id: 47,
    number: 47,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You have a Microsoft Foundry project that contains a vision-enabled chat model deployment. You are developing a Python application that sends a request containing a user prompt and a local JPEG image.\n\nYou need to include the image as binary data in the request. To what should you set the image_url.url field?',
    options: [
      { id: 'A', text: 'data:image/jpeg;base64,<binary_image_data>' },
      { id: 'B', text: 'file:///C:/images/photo.jpg' },
      { id: 'C', text: 'C:\\images\\photo.jpg' },
      { id: 'D', text: 'https://<your-storage-account>.blob.core.windows.net/<container>/<file>.jpg' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'A local image is sent inline as a base64 data URI: data:image/jpeg;base64,<binary_image_data>.',
  },
  {
    id: 48,
    number: 48,
    type: 'single',
    topic: 'Speech',
    prompt:
      'You need to convert written customer notifications into natural-sounding spoken audio that can be played over a phone system.\n\nWhich Azure Speech in Foundry Tools capability should you use?',
    options: [
      { id: 'A', text: 'speech recognition' },
      { id: 'B', text: 'speech synthesis' },
      { id: 'C', text: 'speaker recognition' },
      { id: 'D', text: 'speech translation' },
    ],
    correct: ['B'],
    keySource: 'source',
    explanation: 'Speech synthesis converts written text into natural-sounding spoken audio.',
  },
  {
    id: 49,
    number: 49,
    type: 'hotspot-boolean',
    topic: 'Generative AI',
    prompt: 'For each of the following statements, select Yes if the statement is true. Otherwise, select No.',
    statements: [
      { id: 's1', text: 'Evaluators in Microsoft Foundry replace the need for configuring token limits.', answer: false },
      { id: 's2', text: 'Evaluators in Microsoft Foundry can assess the quality and safety of responses generated by a generative AI model.', answer: true },
      { id: 's3', text: 'Evaluators in Microsoft Foundry can retrain a deployed generative AI model automatically when quality issues are detected.', answer: false },
    ],
    keySource: 'domain',
    explanation: 'Evaluators assess response quality and safety; they do not set token limits or retrain models.',
  },
  {
    id: 50,
    number: 50,
    type: 'hotspot-select',
    topic: 'Generative AI',
    prompt:
      'Select the answer that correctly completes the sentence.\n\nThe ___ is used for comparing and deploying a wide range of models for generative AI development in Microsoft Foundry.',
    options: [
      { id: 'A', text: 'Model catalog' },
      { id: 'B', text: 'Monitor page' },
      { id: 'C', text: 'Service endpoints page' },
      { id: 'D', text: 'Solution templates page' },
    ],
    correct: ['A'],
    keySource: 'domain',
    explanation: 'The Model catalog is where you compare and deploy a wide range of models in Microsoft Foundry.',
  },
  {
    id: 51,
    number: 51,
    type: 'single',
    topic: 'Speech',
    prompt:
      'Your company has thousands of recorded customer support calls in multiple languages stored as audio files in Azure Storage.\n\nYou need to generate text transcripts of all the recordings.\n\nWhich Azure Speech in Foundry Tools capability should you use?',
    options: [
      { id: 'A', text: 'speech to text batch transcription' },
      { id: 'B', text: 'speech to text real-time transcription' },
      { id: 'C', text: 'text to speech' },
      { id: 'D', text: 'speech translation' },
    ],
    correct: ['A'],
    keySource: 'source',
    explanation: 'Batch transcription is designed to transcribe large volumes of stored audio files asynchronously.',
  },
  {
    id: 52,
    number: 52,
    type: 'single',
    topic: 'Generative AI',
    prompt:
      'You need to compare the costs of large language models (LLMs) for a generative AI solution.\n\nWhat should you use in the Microsoft Foundry portal?',
    options: [
      { id: 'A', text: 'Compliance' },
      { id: 'B', text: 'Evaluator catalog' },
      { id: 'C', text: 'Tools' },
      { id: 'D', text: 'Model leaderboard' },
    ],
    correct: ['D'],
    keySource: 'source',
    explanation: 'The Model leaderboard compares models, including cost, quality, and performance, to inform selection.',
  },
];

export default questions;
