export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  audience: ('patient' | 'donor' | 'volunteer' | 'all')[];
}

export const mockFAQs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is the difference between Type 1 and Type 2 diabetes?',
    answer: 'Type 1 diabetes is an autoimmune condition where the body doesn\'t produce insulin. It typically develops in childhood but can occur at any age. Type 2 diabetes is when the body doesn\'t use insulin properly (insulin resistance). It\'s more common and often develops later in life, though it\'s increasingly seen in younger people.',
    category: 'Understanding Diabetes',
    audience: ['patient', 'all'],
  },
  {
    id: 'faq-2',
    question: 'How do I know if my donation is tax-deductible?',
    answer: 'All donations to the American Diabetes Association are tax-deductible to the full extent allowed by law. ADA is a 501(c)(3) nonprofit organization (Tax ID: 13-1623888). You\'ll receive a receipt for your records that you can use when filing your taxes.',
    category: 'Donations',
    audience: ['donor'],
  },
  {
    id: 'faq-3',
    question: 'What is a normal blood sugar level?',
    answer: 'For people without diabetes, normal fasting blood sugar is less than 100 mg/dL. Before meals, it should be 70-130 mg/dL, and less than 180 mg/dL two hours after starting a meal. Your healthcare provider may set different targets based on your individual situation.',
    category: 'Blood Sugar Management',
    audience: ['patient'],
  },
  {
    id: 'faq-4',
    question: 'How can I get involved as a volunteer?',
    answer: 'There are many ways to volunteer with ADA! You can help at community events, participate in advocacy efforts, support fundraising campaigns, or join our youth programs. Visit our volunteer page or contact your local ADA office to explore opportunities that match your interests and availability.',
    category: 'Volunteering',
    audience: ['volunteer'],
  },
  {
    id: 'faq-5',
    question: 'Does diabetes run in families?',
    answer: 'Yes, both Type 1 and Type 2 diabetes have genetic components. Having a family member with diabetes increases your risk, but it doesn\'t mean you\'ll definitely develop it. Lifestyle factors also play a significant role, especially with Type 2 diabetes.',
    category: 'Understanding Diabetes',
    audience: ['patient', 'all'],
  },
  {
    id: 'faq-6',
    question: 'Can I specify where my donation goes?',
    answer: 'Yes! You can direct your donation to specific programs like research, advocacy, community education, or camp scholarships. You can indicate your preference when making your donation, or contact our donor services team for more information about designated giving.',
    category: 'Donations',
    audience: ['donor'],
  },
  {
    id: 'faq-7',
    question: 'What should I do if I experience symptoms of high blood sugar?',
    answer: 'Symptoms of high blood sugar (hyperglycemia) include increased thirst, frequent urination, fatigue, blurred vision, and headaches. Check your blood sugar immediately. If it\'s high, drink water, take your medication as prescribed, and monitor closely. Contact your healthcare provider if levels remain elevated or if you feel very ill.',
    category: 'Blood Sugar Management',
    audience: ['patient'],
  },
  {
    id: 'faq-8',
    question: 'Are there volunteer opportunities that can be done remotely?',
    answer: 'Absolutely! Many volunteer roles can be done from home, including phone banking, virtual event support, social media advocacy, peer mentoring through our online platforms, and helping with administrative tasks. These flexible options make it easy to contribute on your schedule.',
    category: 'Volunteering',
    audience: ['volunteer'],
  },
  {
    id: 'faq-9',
    question: 'What foods should I avoid with diabetes?',
    answer: 'Rather than completely avoiding foods, focus on portion control and balance. Limit sugary beverages, highly processed foods, and foods high in saturated fats. Work with a registered dietitian to create a meal plan that fits your lifestyle while helping you manage blood sugar levels effectively.',
    category: 'Nutrition',
    audience: ['patient'],
  },
  {
    id: 'faq-10',
    question: 'How is ADA funded?',
    answer: 'ADA is primarily funded through individual donations, corporate partnerships, special events, and grants. We rely on the generosity of our supporters to fund research, advocacy, education, and support programs. Your contributions directly impact our ability to fight diabetes and support those affected by it.',
    category: 'About ADA',
    audience: ['donor', 'all'],
  },
  {
    id: 'faq-11',
    question: 'Can people with diabetes eat fruit?',
    answer: 'Yes! Fruit is a healthy part of a diabetes meal plan. Whole fruits provide fiber, vitamins, and minerals. The key is portion control and counting the carbohydrates. Fresh, frozen, or canned (in water or juice) fruits are all good options. Work with your healthcare team to determine the right amounts for you.',
    category: 'Nutrition',
    audience: ['patient'],
  },
  {
    id: 'faq-12',
    question: 'Does ADA offer matching gift programs?',
    answer: 'Many employers will match charitable donations made by their employees. Check with your HR department to see if your company participates. If they do, your gift to ADA could be doubled or even tripled! We can provide any necessary documentation to facilitate the match.',
    category: 'Donations',
    audience: ['donor'],
  },
  {
    id: 'faq-13',
    question: 'How often should I check my blood sugar?',
    answer: 'How often you should check depends on your diabetes type, treatment plan, and how well controlled your blood sugar is. Your healthcare provider will recommend a testing schedule. Generally, people with Type 1 diabetes test multiple times daily, while those with Type 2 may test less frequently.',
    category: 'Blood Sugar Management',
    audience: ['patient'],
  },
  {
    id: 'faq-14',
    question: 'What training is provided for new volunteers?',
    answer: 'We provide comprehensive training for all volunteer roles. This includes orientation to ADA\'s mission and programs, role-specific training, and ongoing support. Training is available both in-person and online, depending on your role. You\'ll be well-prepared and supported throughout your volunteer experience.',
    category: 'Volunteering',
    audience: ['volunteer'],
  },
  {
    id: 'faq-15',
    question: 'Can diabetes be cured?',
    answer: 'Currently, there is no cure for diabetes, but it can be managed effectively. Research is ongoing, and ADA is at the forefront of funding studies aimed at prevention, better treatments, and ultimately a cure. With proper management, people with diabetes can live long, healthy lives.',
    category: 'Understanding Diabetes',
    audience: ['patient', 'all'],
  },
];
