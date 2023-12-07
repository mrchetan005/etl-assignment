import { formatDate } from "./utilityFunctions";

export const progressBar = [
    { step: 1, title: 'Form Selection' },
    { step: 2, title: 'Set up' },
    { step: 3, title: 'Form Creation' },
    { step: 4, title: 'Form Review' }
];

export const formTemplates = [
    { id: 1, title: "Details Collection", description: "Collect information from Candidates on their education, experience, contact no,etc" },
    { id: 2, title: "Document Collection", description: "Save time and efforts: Explore this template to find a set of questions required for document collection" },
    { id: 3, title: "Statement of Purpose", description: "Start creating a new form with the wide options of fields available" },
    { id: 4, title: "Interview Availability", description: "Start creating a new form with the wide options of fields available" }
];

export const formTemplatesData = {
    'details-collection': [
        { id: 'name', name: 'name', type: 'text', label: "1. Name", required: true, placeholder: 'Enter a Valid Salary in numbers e.g 50,000/-', tag: 'input' },
        { id: 'email', name: 'email', type: 'email', label: "2. Email", required: true, placeholder: 'Example - userid@gmail.com', tag: 'input' },
        { id: 'dob', name: 'dob', type: 'date', label: "3. Date of Birth", required: false, placeholder: 'Example - userid@gmail.com', tag: 'input', max: formatDate(new Date()) },
        { id: 'contactNo', name: 'contactNo', type: 'text', label: "4. Contact no", required: false, placeholder: 'Enter your 10 digit contact no', tag: 'input' }
    ],
    'document-collection': [
        { id: 'marksheet10th', name: 'marksheet10th', type: 'file', 'data-size-limit': 1048576, label: "1. 10th Marksheet", required: true, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'marksheet12th', name: 'marksheet12th', type: 'file', 'data-size-limit': 1048576, label: "2. 12th Marksheet", required: true, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'marksheetGraduation', name: 'marksheetGraduation', type: 'file', 'data-size-limit': 1048576, label: "3. Graduation Marksheet", required: true, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'marksheetPostGraduation', name: 'marksheetPostGraduation', type: 'file', 'data-size-limit': 1048576, label: "4. Post Graduation Marksheet", required: false, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'offerLater', name: 'offerLater', type: 'file', 'data-size-limit': 1048576, label: "5. Offer Later", required: true, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'salarySlips', name: 'salarySlips', type: 'file', 'data-size-limit': 1048576, label: "6. Salary Slips", required: true, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'bankStatement', name: 'bankStatement', type: 'file', 'data-size-limit': 1048576, label: "7. Bank Statement", required: true, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'incrementLetter', name: 'incrementLetter', type: 'file', 'data-size-limit': 1048576, label: "8. Increment Letter (if any)", required: false, placeholder: 'Attach file upto 1Mb', tag: 'input' },
        { id: 'other', name: 'other', type: 'file', 'data-size-limit': 1048576, label: "9. Other (if any)", required: false, placeholder: 'Attach file upto 1Mb', tag: 'input' }
    ],
    'statement-of-purpose': [
        { id: 'que1', name: 'que1', type: 'text', label: "1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?", required: true, placeholder: 'Enter description from the long answer', max: 300, tag: 'textarea' },
        { id: 'que2', name: 'que2', type: 'text', label: "2. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?", required: true, placeholder: 'Enter description from the long answer', max: 300, tag: 'textarea' },
        { id: 'que3', name: 'que3', type: 'text', label: "3. What are the three things that are most important to you in a job?", required: true, placeholder: 'Enter description from the long answer', max: 300, tag: 'textarea' }
    ],
    'interview-availability': [
        { id: 'email', name: 'email', type: 'email', label: "1. Email", required: true, placeholder: 'Example - userid@gmail.com', tag: 'input' },
        { id: 'location', name: 'location', type: 'text', label: "2. Location", required: true, placeholder: 'Search or enter your location', tag: 'input' },
        { id: 'interviewDate', name: 'interviewDate', type: 'date', label: "3. Interview Date", required: true, placeholder: '', tag: 'input', min: formatDate(new Date()) },
        { id: 'interviewTime', name: 'interviewTime', type: 'time', label: "4. Interview Time", required: true, placeholder: '', tag: 'input' },
        { id: 'timeZone', name: 'timeZone', type: '', options: Intl.supportedValuesOf('timeZone'), label: "5. Time Zone", required: true, placeholder: 'Search or Select a time zone from below', tag: 'select' },
        { id: 'interviewMedium', name: 'interviewMedium', type: '', options: [], label: "6. Interview Medium", required: true, placeholder: 'Search or Select a time zone from below', tag: 'select' }
    ]
};

export const defaultFormTemplate = { title: "New Form", description: "Start creating a new form with the wide options of fields available" };