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
    "Recognizes and rewards people for their achievements.",
    "Acknowledges and thanks people for their contributions.",
    "Expresses pride in the group and encourages people to feel good about their accomplishments.",
    "Finds creative ways to make people’s work rewarding.",
    "Signals own commitment to a process by being personally present and involved at key events.",
    "Identifies and promptly tackles morale problems.",
    "Gives talks or presentations that energize groups.",
];

const do03Examples = [
    "Listens and responds constructively to other team members’ ideas.",
    "Offers support for others’ ideas and proposals.",
    "Is open with other team members about his/her concerns.",
    "Expresses disagreement constructively (e.g., by emphasizing points of agreement, suggesting alternatives that may be acceptable to the group).",
    "Reinforces team members for their contributions.",
    "Gives honest and constructive feedback to other team members.",
    "Provides assistance to others when they need it.",
    "Works for solutions that all team members can support.",
    "Shares his/her expertise with others.",
    "Seeks opportunities to work on teams as a means to develop experience, and knowledge.",
    "Provides assistance, information, or other support to others, to build or maintain relationships with them.",
    
    "Leadership - Provides opportunities for people to learn to work together as a team.",
    "Leadership - Enlists the active participation of everyone.",
    "Leadership - Promotes cooperation with other work units.",
    "Leadership - Ensures that all team members are treated fairly.",
    "Leadership - Recognizes and encourages the behaviors that contribute to teamwork.",
];

const do04Examples = [
    "Gives people latitude to make decisions in their own sphere of work.",
    "Is able to let others make decisions and take charge.",
    "Encourages individuals and groups to set their own goals, consistent with business goals.",
    "Expresses confidence in the ability of others to be successful.",
    "Encourages groups to resolve problems on their own; avoids prescribing a solution.",
];

const do05Examples = [
    "Personally develops a new method or approach.",
    "Proposes new approaches, methods, or technologies.",
    "Develops better, faster, or less expensive ways to do things.",

    "Leadership - Works cooperatively with others to produce innovative solutions.",
    "Leadership - Takes the lead in setting new business directions, partnerships, policies or procedures.",
    "Leadership - Seizes opportunities to influence the future direction of an organizational unit or the overall business.",
    "Leadership - Helps employees to develop a clear understanding of what they will need to do differently, as a result of changes in the organization.",
    "Leadership - Implements or supports various change management activities (e.g., communications, education, team development, coaching).",
    "Leadership - Establishes structures and processes to plan and manage the orderly implementation of change.",
    "Leadership - Helps individuals and groups manage the anxiety associated with significant change.",
    "Leadership - Facilitates groups or teams through the problem-solving and creative-thinking processes leading to the development and implementation of new approaches, systems, structures, and methods.",
];

const do06Examples = [
    "Provides helpful, behaviorally specific feedback to others.",
    "Shares information, advice, and suggestions to help others to be more successful; provides effective coaching.",
    "Gives people assignments that will help develop their abilities.",
    "Regularly meets with employees to review their development progress.",
    "Recognizes and reinforces people’s developmental efforts and improvements.",
    "Expresses confidence in others’ ability to be successful.",
];

const do07Examples = [

    "With his/her manager, sets specific, measurable goals that are realistic but challenging, with dates for accomplishment.",
    "With his/her manager, clarifies expectations about what will be done and how.",
    "Enlists his/her manager’s support in obtaining the information, resources, and training needed to accomplish his/her work effectively.",
    "Promptly notifies his/her manager about any problems that affect his/her ability to accomplish planned goals.",
    "Seeks performance feedback from his/her manager and from others with whom he/she interacts on the job.",
    "Prepares a personal development plan with specific goals and a timeline for their accomplishment.",
    "Takes significant action to develop skills needed for effectiveness in current or future job.",


    "Leadership - Ensures that employees have clear goals and responsibilities.",
    "Leadership - Works with employees to set and communicate performance standards that are specific and measurable.",
    "Leadership - Supports employees in their efforts to achieve job goals (e.g., by providing resources, removing obstacles, acting as a buffer).",
    "Leadership - Stays informed about employees’ progress and performance through both formal methods (e.g., status reports) and informal methods (e.g., management by walking around).",
    "Leadership - Provides specific performance feedback, both positive and corrective, as soon as possible after an event.",
    "Leadership - Deals firmly and promptly with performance problems; lets people know what is expected of them and when.",

];

const do08Examples = [
    "Ensures that others involved in a project or effort are kept informed about developments and plans.",
    "Ensures that important information from his/her management is shared with his/her employees and others as appropriate.",
    "Shares ideas and information with others who might find them useful.",
    "Uses multiple channels or means to communicate important messages (e.g., memos, newsletters, meetings, electronic mail).",
    "Keeps his/her manager informed about progress and problems; avoids surprises.",
    "Ensures that regular, consistent communication takes place.",
];

const do09Examples = [
    "Speaks clearly and can be easily understood.",
    "Tailors the content of speech to the level and experience of the audience.",
    "Uses appropriate grammar and choice of words in oral speech.",
    "Organizes ideas clearly in oral speech.",
    "Expresses ideas concisely in oral speech.",
    "Maintains eye contact when speaking with others.",
    "Summarizes or paraphrases his/her understanding of what others have said to verify understanding and prevent miscommunication.",
];

const do10Examples = [
    "Expresses ideas clearly and concisely in writing.",
    "Organizes written ideas clearly and signals the organization to the reader (e.g., through an introductory paragraph or through use of headings).",
    "Tailors written communications to effectively reach an audience.",
    "Uses graphics and other aids to clarify complex or technical information.",
    "Spells correctly.",
    "Writes using concrete, specific language.",
    "Uses punctuation correctly.",
    "Writes grammatically.",
    "Uses an appropriate business writing style.",
];

const do11Examples = [
    "Identifies and presents information or data that will have a strong effect on others.",
    "Selects language and examples tailored to the level and experience of the audience.",
    "Selects stories, analogies, or examples to illustrate a point.",
    "Creates graphics, overheads, or slides that display information clearly and with high impact.",
    "Presents several different arguments in support of a position.",
];

const do12Examples = [
    "Understands the interests and important concerns of others.",
    "Notices and accurately interprets what others are feeling, based on their choice of words, tone of voice, expressions, and other nonverbal behavior.",
    "Anticipates how others will react to a situation.",
    "Listens attentively to people’s ideas and concerns.",
    "Understands both the strengths and weaknesses of others.",
    "Understands the unspoken meaning in a situation.",
    "Says or does things to address others’ concerns.",
    "Finds non-threatening ways to approach others about sensitive issues.",
    "Makes others feel comfortable by responding in ways that convey interest in what they have to say.",
];

const do13Examples = [
    "Presents arguments that address others’ most important concerns and issues and looks for win-win solutions.",
    "Involves others in a process or decision to ensure their support.",
    "Offers trade-offs or exchanges to gain commitment.",
    "Identifies and proposes solutions that benefit all parties involved in a situation.",
    "Enlists experts or third parties to influence others.",
    "Develops other indirect strategies to influence others.",
    "Knows when to escalate critical issues to own or others’ management, if own efforts to enlist support have not succeeded.",
    "Structures situations (e.g., the setting, persons present, sequence of events) to create a desired impact and to maximize the chances of a favorable outcome.",
    "Works to make a particular impression on others.",
    "Identifies and targets influence efforts at the real decision makers and those who can influence them.",
    "Seeks out and builds relationships with others who can provide information, intelligence, career support, potential business, and other forms of help.",
    "Takes a personal interest in others (e.g., by asking about their concerns, interests, family, friends, hobbies) to develop relationships.",
    "Accurately anticipates the implications of events or decisions for various stakeholders in the organization and plans strategy accordingly.",
];

const do14Examples = [
    "Asks about the other person’s personal experiences, interests, and family.",
    "Asks questions to identify shared interest, experiences, or other common ground.",
    "Shows an interest in what others have to say; acknowledges their perspectives and ideas.",
    "Recognizes the business concerns and perspectives of others.",
    "Expresses gratitude and appreciation to others who have provided information, assistance, or support.",
    "Takes time to get to know coworkers, to build rapport and establish a common bond.",
    "Tries to build relationships with people whose assistance, cooperation, and support may be needed.",
    "Provides assistance, information, and support to others to build a basis for future reciprocity.",
];

const do15Examples = [
    "Quickly and effectively solves customer problems.",
    "Talks to customers (internal or external) to find out what they want and how satisfied they are with what they are getting.",
    "Lets customers know he/she is willing to work with them to meet their needs.",
    "Finds ways to measure and track customer satisfaction.",
    "Presents a cheerful, positive manner with customers.",
];


const dealingWithOthersCompetencies = [
    // ## template follows ##
    // new Competency({value:"do-00",text:"",description:"",examples:fake0}),
    new Competency({value:"do-01",text:"Establishing focus",description:"The ability to develop and communicate goals in support of the company's mission.",examples:do01Examples}),
    new Competency({value:"do-02",text:"Providing motivational support",description:"The ability to enhance other people's commitment to their work.",examples:do02Examples}),
    new Competency({value:"do-03",text:"Fostering teamwork",description:"As a team member, the ability and desire to work cooperatively with others on a team; as a team leader, the ability to demonstrate interest, skill, and success in getting groups to learn to work together.",examples:do03Examples}),
    new Competency({value:"do-04",text:"Empowering others",description:"The ability to convey confidence in employees’ ability to be successful, especially at challenging new tasks; delegating significant responsibility and authority; allowing employees freedom to decide how they will accomplish their goals and resolve issues.",examples:do04Examples}),
    new Competency({value:"do-05",text:"Managing change",description:"The ability to demonstrate support for innovation and for organizational changes needed to improve the organization’s effectiveness; initiating, sponsoring, and implementing organizational change; helping others to successfully manage organizational change.",examples:do05Examples}),
    new Competency({value:"do-06",text:"Developing others",description:"The ability to delegate responsibility and to work with others and coach them to develop their capabilities.",examples:do06Examples}),
    new Competency({value:"do-07",text:"Managing performance",description:"The ability to take responsibility for one’s own or one’s employees’ performance, by setting clear goals and expectations, tracking progress against the goals, ensuring feedback, and addressing performance problems and issues promptly.",examples:do07Examples}),
    new Competency({value:"do-08",text:"Attention to communication",description:"The ability to ensure that information is passed on to others who should be kept informed.",examples:do08Examples}),
    new Competency({value:"do-09",text:"Oral communication",description:"The ability to express oneself clearly in conversations and interactions with others.",examples:do09Examples}),
    new Competency({value:"do-10",text:"Written communication",description:"The ability to express oneself clearly in business writing.",examples:do10Examples}),
    new Competency({value:"do-11",text:"Persuasive commuication",description:"The ability to plan and deliver oral and written communications that make an impact and persuade their intended audiences.",examples:do11Examples}),
    new Competency({value:"do-12",text:"Interpersonal awareness",description:"The ability to notice, interpret, and anticipate others’ concerns and feelings, and to communicate this awareness empathetically to others.",examples:do12Examples}),
    new Competency({value:"do-13",text:"Influencing others",description:"The ability to gain others’ support for ideas, proposals, projects, and solutions.",examples:do13Examples}),
    new Competency({value:"do-14",text:"Building collarborative relationships",description:"The ability to develop, maintain, and strengthen partnerships with others inside or outside the organization who can provide information, assistance, and support.",examples:do14Examples}),
    new Competency({value:"do-15",text:"Customer orientation",description:"The ability to demonstrate concern for satisfying one’s external and/or internal customers.",examples:do15Examples}),
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
    "Stays updated on business, industry, and market information that may reveal business opportunities.",
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