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

const do01Examples = [
    "Acts to align own unit’s goals with the strategic direction of the business.",
    "Ensures that people in the unit understand how their work relates to the business’ mission.",
    "Ensures that everyone understands and identifies with the unit’s mission.",
    "Ensures that the unit develops goals and a plan to help fulfill the business’ mission.",
];

const selfManagementCompetencies = [
    new Competency({value:"sm-01",text:"Self confidence",description:"Faith in one’s own ideas and capability to be successful; willingness to take an independent position in the face of opposition.",examples:sm01Examples}),
    new Competency({value:"sm-02",text:"Stress management",description:"The ability to keep functioning effectively when under pressure and maintain self control in the face of hostility or provocation.",examples:sm02Examples}),
    new Competency({value:"sm-03",text:"Personal credibility",description:"Demonstrated concern that one be perceived as responsible, reliable, and trustworthy."}),
    new Competency({value:"sm-04",text:"Flexibility",description:"Openness to different and new ways of doing things; willingness to modify one’s preferred way of doing things."})
    // new Competency("sm-01","Self confidence","Faith in one’s own ideas and capability to be successful; willingness to take an independent position in the face of opposition."),
    // new Competency("sm-02","Stress management","he ability to keep functioning effectively when under pressure and maintain self control in the face of hostility or provocation."),
    // new Competency("sm-03","Personal credibility","Demonstrated concern that one be perceived as responsible, reliable, and trustworthy."),
    // new Competency("sm-04","Flexibility","Openness to different and new ways of doing things; willingness to modify one’s preferred way of doing things.")
];

const dealingWithOthersCompetencies = [
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
    // new Competency({value:"do-16",text:"",description:""}),
    // new Competency({value:"do-17",text:"",description:""}),
    // new Competency({value:"do-18",text:"",description:""}),
]