// This file holds all of the static data which is loaded into 
// droplists etc. throughout the program.

const sm01Examples = [
    "Is confident of own ability to accomplish goals",
    "Presents self crisply and impressively",
    "Is willing to speak up to the right person or group at the right time, when he/she disagrees with a decision or strategy",
    "Approaches challenging tasks with a “can-do” attitude",
];

const sm02Examples = [
    "Remains calm under stress.",
    "Can effectively handle several problems or tasks at once.",
    "Controls his/her response when criticized, attacked or provoked.",
    "Maintains a sense of humor under difficult circumstances.",
    "Manages own behavior to prevent or reduce feelings of stress.",
];

const sm03Examples = [
    "Does what he/she commits to doing.",
    "Respects the confidentiality of information or concerns shared by others.",
    "Is honest and forthright with people.",
    "Carries his/her fair share of the workload.",
    "Takes responsibility for own mistakes; does not blame others.",
    "Conveys a command of the relevant facts and information.",
];

const sm04Examples = [
    "Is able to see the merits of perspectives other than his/her own.",
    "Demonstrates openness to new organizational structures, procedures, and technology.",
    "Switches to a different strategy when an initially selected one is unsuccessful.",
    "Demonstrates willingness to modify a strongly held position in the face of contrary evidence.",
];

const selfManagementCompetencies = [
    // ## template follows ##
    // new Competency({value:"sm-00",text:"",description:"",examples:fake0}),
    new Competency({value:"sm-01",text:"Self confidence",description:"Faith in one’s own ideas and capability to be successful; willingness to take an independent position in the face of opposition.",examples:sm01Examples}),
    new Competency({value:"sm-02",text:"Stress management",description:"The ability to keep functioning effectively when under pressure and maintain self control in the face of hostility or provocation.",examples:sm02Examples}),
    new Competency({value:"sm-03",text:"Personal credibility",description:"Demonstrated concern that one be perceived as responsible, reliable, and trustworthy.",examples:sm03Examples}),
    new Competency({value:"sm-04",text:"Flexibility",description:"Openness to different and new ways of doing things; willingness to modify one’s preferred way of doing things.",examples:sm04Examples})
];


const do01Examples = [
    "Acts to align own unit’s goals with the strategic direction of the business.",
    "Ensures that people in the unit understand how their work relates to the business’ mission.",
    "Ensures that everyone understands and identifies with the unit’s mission.",
    "Ensures that the unit develops goals and a plan to help fulfill the business’ mission.",
];

const do02Examples = [
];

const do03Examples = [
];

const do04Examples = [
];

const do05Examples = [
];

const do06Examples = [
];

const dealingWithOthersCompetencies = [
    // ## template follows ##
    // new Competency({value:"do-00",text:"",description:"",examples:fake0}),
    new Competency({value:"do-01",text:"Establishing focus",description:"The ability to develop and communicate goals in support of the company's mission.",examples:do01Examples}),
    new Competency({value:"do-02",text:"Providing emotional support",description:"The ability to enhance other people's commitment to their work."}),
    new Competency({value:"do-03",text:"Fostering teamwork",description:"As a team member, the ability and desire to work cooperatively with others on a team; as a team leader, the ability to demonstrate interest, skill, and success in getting groups to learn to work together."}),
    new Competency({value:"do-04",text:"Empowering others",description:"The ability to convey confidence in employees’ ability to be successful, especially at challenging new tasks; delegating significant responsibility and authority; allowing employees freedom to decide how they will accomplish their goals and resolve issues."}),
    new Competency({value:"do-05",text:"Managing change",description:"The ability to demonstrate support for innovation and for organizational changes needed to improve the organization’s effectiveness; initiating, sponsoring, and implementing organizational change; helping others to successfully manage organizational change."}),
    new Competency({value:"do-06",text:"Developing others",description:"The ability to delegate responsibility and to work with others and coach them to develop their capabilities."}),
    new Competency({value:"do-07",text:"Managing performance",description:"The ability to take responsibility for one’s own or one’s employees’ performance, by setting clear goals and expectations, tracking progress against the goals, ensuring feedback, and addressing performance problems and issues promptly."}),
    new Competency({value:"do-08",text:"Attention to communication",description:"The ability to ensure that information is passed on to others who should be kept informed."}),
    new Competency({value:"do-09",text:"Oral communication",description:"The ability to express oneself clearly in conversations and interactions with others."}),
    new Competency({value:"do-10",text:"Written communication",description:"The ability to express oneself clearly in business writing."}),
    new Competency({value:"do-11",text:"Persuasive commuication",description:"The ability to plan and deliver oral and written communications that make an impact and persuade their intended audiences."}),
    new Competency({value:"do-12",text:"Interpersonal awareness",description:"The ability to notice, interpret, and anticipate others’ concerns and feelings, and to communicate this awareness empathetically to others."}),
    new Competency({value:"do-13",text:"Influencing others",description:"The ability to gain others’ support for ideas, proposals, projects, and solutions."}),
    new Competency({value:"do-14",text:"Building collarborative relationships",description:"The ability to develop, maintain, and strengthen partnerships with others inside or outside the organization who can provide information, assistance, and support."}),
    new Competency({value:"do-15",text:"Customer orientation",description:"The ability to demonstrate concern for satisfying one’s external and/or internal customers."}),
];

const db01Examples = [

    "Identifies the specific information needed to clarify a situation or to make a decision.",
    "Gets more complete and accurate information by checking multiple sources.",
    "Probes skillfully to get at the facts, when others are reluctant to provide full, detailed information.",
    "Routinely walks around to see how people are doing and to hear about any problems they are encountering.",
    "Questions others to assess whether they have thought through a plan of action.",
    "Questions others to assess their confidence in solving a problem or tackling a situation.",
    "Asks questions to clarify a situation.",
    "Seeks the perspective of everyone involved in a situation.",
    "Seeks out knowledgeable people to obtain information or clarify a problem.",
];

const db02Examples = [
    "Makes a systematic comparison of two or more alternatives.",
    "Notices discrepancies and inconsistencies in available information.",
    "Identifies a set of features, parameters, or considerations to take into account, in analyzing a situation or making a decision.",
    "Approaches a complex task or problem by breaking it down into its component parts and considering each part in detail.",
    "Weighs the costs, benefits, risks, and chances for success, in making a decision.",
    "Identifies many possible causes for a problem.",
    "Carefully weighs the priority of things to be done.",
];

const db03Examples = [
    "Anticipates possible problems and develops contingency plans in advance.",
    "Notices trends in the industry or marketplace and develops plans to prepare for opportunities or problems.",
    "Anticipates the consequences of situations and plans accordingly.",
    "Anticipates how individuals and groups will react to situations and information and plans accordingly.",
];

const db04Examples = [
    "Notices similarities between different and apparently unrelated situations.",
    "Quickly identifies the central or underlying issues in a complex situation.",
    "Creates a graphic diagram showing a systems view of a situation.",
    "Develops analogies or metaphors to explain a situation.",
    "Applies a theoretical framework to understand a specific situation.",
];

const db05Examples = [
    "Understands the organization’s strengths and weaknesses as compared to competitors.",
    "Understands industry and market trends affecting the organization’s competitiveness.",
    "Has an in-depth understanding of competitive products and services within the marketplace.",
    "Develops and proposes a long-term (3-5 year) strategy for the organization based on an analysis of the industry and marketplace and the organization’s current and potential capabilities as compared to competitors.",
];

const db06Examples = [
    "Effectively applies technical knowledge to solve a range of problems.",
    "Possesses an in-depth knowledge and skill in a technical area.",
    "Develops technical solutions to new or highly complex problems that cannot be solved using existing methods or approaches.",
    "Is sought out as an expert to provide advice or solutions in his/her technical area.",
    "Keeps informed about cutting-edge technology in his/her technical area.",
];

const db07Examples = [
    "Identifying what needs to be done and takes action before being asked or the situation requires it.",
    "Does more than what is normally required in a situation.",
    "Seeks out others involved in a situation to learn their perspectives.",
    "Takes independent action to change the direction of events.",
];

const db08Examples = [
    "Notices and seizes profitable business opportunities.",
    "Stays abreast of business, industry, and market information that may reveal business opportunities.",
    "Demonstrates willingness to take calculated risks to achieve business goals.",
    "Proposes innovative business deals to potential customers, suppliers, and business partners.",
    "Encourages and supports entrepreneurial behavior in others.",
];

const db09Examples = [
    "Personally develops a new product or service.",
    "Personally develops a new method or approach.",
    "Sponsors the development of new products, services, methods, or procedures.",
    "Proposes new approaches, methods, or technologies.",
    "Develops better, faster, or less expensive ways to do things.",
    "Works cooperatively with others to produce innovative solutions.",
];

const db10Examples = [
    "Develops challenging but achievable goals.",
    "Develops clear goals for meetings and projects.",
    "Maintains commitment to goals in the face of obstacles and frustrations.",
    "Finds or creates ways to measure performance against goals.",
    "Exerts unusual effort over time to achieve a goal.",
    "Has a strong sense of urgency about solving problems and getting work done.",
];

const db11Examples = [
    "Sets up procedures to ensure high quality of work (e.g., review meetings).",
    "Monitors the quality of work.",
    "Verifies information.",
    "Checks the accuracy of own and others’ work.",
    "Develops and uses systems to organize and keep track of information or work progress.",
    "Carefully prepares for meetings and presentations.",
    "Organizes information or materials for others.",
    "Carefully reviews and checks the accuracy of information in work reports (e.g., production, sales, financial performance) provided by management, management information systems, or other individuals and groups.",
];

const db12Examples = [
    "Is willing to make decisions in difficult or ambiguous situations, when time is critical.",
    "Takes charge of a group when it is necessary to facilitate change, overcome an impasse, face issues, or ensure that decisions are made.",
    "Makes tough decisions (e.g., closing a facility, reducing staff, accepting or rejecting a high-stakes deal).",
];


const dealingWithBusinessCompetencies = [
    // ## template follows ##
    // new Competency({value:"db-00",text:"",description:"",examples:fake0}),
    new Competency({value:"db-01",text:"Diagnostic Information Gathering",description:"The ability to identify the information needed to clarify a situation, seek that information from appropriate sources, and use skillful questioning to draw out the information, when others are reluctant to disclose it",examples:db01Examples}),
    new Competency({value:"db-02",text:"Analytical Thinking",description:"The ability to tackle a problem by using a logical, systematic, sequential approach.",examples:db02Examples}),
    new Competency({value:"db-03",text:"Forward Thinking",description:"The ability to anticipate the implications and consequences of situations and take appropriate action to be prepared for possible contingencies",examples:db03Examples}),
    new Competency({value:"db-04",text:"Conceptual Thinking",description:"The ability to find effective solutions by taking a holistic, abstract, or theoretical perspective.",examples:db04Examples}),
    new Competency({value:"db-05",text:"Strategic Thinking",description:"The ability to analyze the organization’s competitive position by considering market and industry trends, existing and potential customers (internal and external), and strengths and weaknesses as compared to competitors.",examples:db05Examples}),
    new Competency({value:"db-06",text:" Technical Expertise",description:"The ability to demonstrate depth of knowledge and skill in a technical area.",examples:db06Examples}),
    new Competency({value:"db-07",text:"Initiative",description:"Identifying what needs to be done and doing it before being asked or before the situation requires it.",examples:db07Examples}),
    new Competency({value:"db-08",text:" Entrepreneurial Orientation",description:"The ability to look for and seize profitable business opportunities; willingness to take calculated risks to achieve business goals.",examples:db08Examples}),
    new Competency({value:"db-09",text:" Fostering Innovation",description:"The ability to develop, sponsor, or support the introduction of new and improved method, products, procedures, or technologies.",examples:db09Examples}),
    new Competency({value:"db-10",text:"Results Orientation",description:"The ability to focus on the desired result of one’s own or one’s unit’s work, setting challenging goals, focusing effort on the goals, and meeting or exceeding them.",examples:db10Examples}),
    new Competency({value:"db-11",text:"Thoroughness",description:"Ensuring that one’s own and others’ work and information are complete and accurate; carefully preparing for meetings and presentations; following up with others to ensure that agreements and commitments have been fulfilled.",examples:db11Examples}),
    new Competency({value:"db-12",text:"Decisiveness",description:"The ability to make difficult decisions in a timely manner.",examples:db12Examples}),
];