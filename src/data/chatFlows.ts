export interface ConversationStep {
  user: string;
  agent: string;
  quickReplies?: string[];
}

export interface ConversationPath {
  starter: string;
  steps: ConversationStep[];
}

export const unauthPaths: ConversationPath[] = [
  {
    starter: "I think I might have diabetes",
    steps: [
      {
        user: "I've been experiencing some symptoms of frequent thirst and fatigue and think I might have diabetes. I have a doctor's appointment scheduled. What should I expect?",
        agent: "It's a good step to see your doctor. Your symptoms of frequent thirst and fatigue are common indicators of diabetes. To make a diagnosis, your doctor will likely order blood tests, which could include a fasting plasma glucose test, an HbA1c test, or an oral glucose tolerance test. I can also provide information on treatment goals and self-care planning. Would you like me to link you to the full content to learn more?",
        quickReplies: ["Learn more about diagnosis", "Treatment goals", "Self-care planning"],
      },
    ],
  },
  {
    starter: "I want to make a donation",
    steps: [
      {
        user: "I want to make a donation",
        agent: "Thank you so much for supporting the American Diabetes Association. Your generosity is vital and helps fund critical research, advocacy, and educational programs that work toward our mission to end diabetes.\n\nWe appreciate all forms of support. We noticed you're located near an upcoming ADA event. Would you be interested in volunteering your time? I can also provide information on the impact of your donation and other ways to get involved.",
        quickReplies: ["Make a donation", "Volunteer opportunities", "Learn about impact"],
      },
    ],
  },
  {
    starter: "I want to volunteer",
    steps: [
      {
        user: "I want to volunteer",
        agent: "Thank you so much for supporting the American Diabetes Association. Your generosity is vital and helps fund critical research, advocacy, and educational programs that work toward our mission to end diabetes.\n\nWe noticed you're located near an upcoming ADA event. Would you be interested in volunteering your time? I can provide information on local opportunities and how to get started.",
        quickReplies: ["Find events near me", "Sign up to volunteer", "Learn more"],
      },
    ],
  },
];

export const authPaths: ConversationPath[] = [
  {
    starter: "Where did my recent donation go?",
    steps: [
      {
        user: "Can you show me where my recent donation went?",
        agent: "Welcome back! Your most recent donation of $500 on May 15th was successfully allocated to the **'Cure: Type 1 Diabetes Research Fund.'** That specific contribution funded a **full week of educational camp for a child with Type 1 Diabetes**, providing them with crucial skills for disease management and a supportive community. Would you like a detailed transaction summary or the full impact report?",
        quickReplies: ["View transaction details", "View full impact report", "Schedule a recurring donation"],
      },
      {
        user: "How can I have more of an impact?",
        agent: "That's a fantastic question. We deeply appreciate your continued commitment to the ADA's mission. Based on your generous giving history, we've identified two immediate, high-impact opportunities:\n\n• **Increase Monthly Impact:** Increasing your recurring donation by just $50/month would enable us to sponsor one additional participant in our Diabetes Prevention Program in an underserved community.\n\n• **Volunteer with a Local Chapter:** We have a need for volunteers at a local 'Step Out: Walk to Stop Diabetes' fundraising event next month. I can check your calendar and sign you up with one click.",
        quickReplies: ["Increase recurring amount", "Check my calendar for volunteer options"],
      },
    ],
  },
  {
    starter: "How can I have more impact?",
    steps: [
      {
        user: "How can I have more of an impact?",
        agent: "We deeply appreciate your continued commitment to the ADA's mission. Based on your giving history and expressed interest in research and youth programs, we've identified two immediate, high-impact opportunities:\n\n• **Increase Monthly Impact:** Increasing your recurring donation by just $50/month would enable us to sponsor one additional participant in our Diabetes Prevention Program in an underserved community.\n\n• **Volunteer with a Local Chapter:** We have a need for volunteers at a local 'Step Out: Walk to Stop Diabetes' fundraising event next month.",
        quickReplies: ["Increase recurring amount", "Check my calendar for volunteer options"],
      },
    ],
  },
  {
    starter: "Check my health summary",
    steps: [
      {
        user: "Can you show me my health summary?",
        agent: "Here's your quick health summary:\n\n- **Last blood sugar:** 127 mg/dL (in range)\n- **A1C trend:** improving (6.8%)\n- **Medications:** on track\n\nEverything looks good. Your 7-day average is 125 mg/dL which shows really consistent management. Would you like to log a new reading or see your weekly trend?",
        quickReplies: ["Log a new reading", "Show my weekly trend", "Medication reminders"],
      },
    ],
  },
];
