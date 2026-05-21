export interface ChatStep {
  agent: string;
  suggestions?: string[];
}

export const unauthFlow: ChatStep[] = [
  {
    agent: "Hi there! I'm your ADA Help Assistant. I can help you find diabetes resources, answer questions, or connect you with support. What brings you here today?",
    suggestions: ['I was recently diagnosed', 'Looking for nutrition info', 'I want to donate'],
  },
  {
    agent: "I'd love to help with that. To give you the best personalized experience, could you tell me a bit about yourself? Are you a patient, a caregiver, a donor, or a volunteer?",
    suggestions: ['I have diabetes', "I'm a caregiver", "I'd like to support ADA"],
  },
  {
    agent: "Thank you for sharing. I can point you to some great resources. Would you like to create a free account? It lets me save your preferences and give you tailored recommendations each time you visit.",
    suggestions: ['Yes, sign me up', 'Just browsing for now', 'What info do you collect?'],
  },
  {
    agent: "No problem at all! Here are some popular starting points:\n\n• Understanding Your Diagnosis\n• Healthy Eating with Diabetes\n• Blood Sugar Monitoring Basics\n• Finding Local Support Groups\n\nFeel free to ask me anything — I'm here to help!",
    suggestions: ['Tell me about blood sugar', 'Nutrition tips', 'Find support near me'],
  },
  {
    agent: "That's a great question. Managing blood sugar is one of the most important parts of diabetes care. I'd recommend starting with our 'Blood Sugar Monitoring Basics' guide. Would you like me to find more specific information?",
    suggestions: ['What are normal levels?', 'How often should I test?', 'Thanks, that helps!'],
  },
];

export const authFlow: ChatStep[] = [
  {
    agent: "Welcome back! I've been keeping track of your preferences. Based on your recent activity, I have some personalized suggestions. What can I help with today?",
    suggestions: ['Check my health summary', 'New recipes this week', 'Upcoming events'],
  },
  {
    agent: "Here's your quick health summary:\n\n📊 Last blood sugar: 127 mg/dL (in range)\n🎯 A1C trend: improving (6.8%)\n💊 Medications: on track\n\nEverything looks good! Would you like more details on anything?",
    suggestions: ['Log a new reading', 'Show my weekly trend', 'Medication reminders'],
  },
  {
    agent: "I can help you log that. What was your blood sugar reading, and when did you take it? You can also log it directly from your dashboard if you prefer.",
    suggestions: ['Go to dashboard', '130 mg/dL just now', 'Set up reminders'],
  },
  {
    agent: "Got it — 130 mg/dL is right in your target range. Keep up the great work! Your 7-day average is 125 mg/dL which shows really consistent management.\n\nIs there anything else I can help with?",
    suggestions: ['Nutrition suggestions', 'Find a specialist', "That's all, thanks!"],
  },
  {
    agent: "You're doing great! Remember, I'm always here if you need help finding resources, tracking your health, or connecting with the ADA community. Have a wonderful day! 💪",
    suggestions: ['Start over', 'Go to dashboard', 'Browse resources'],
  },
];
