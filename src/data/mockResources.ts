export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  audience: ('patient' | 'donor' | 'volunteer')[];
  type: 'article' | 'guide' | 'video' | 'tool';
  readTime: string;
  content?: string;
  tags: string[];
}

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Your A1C Test Results',
    excerpt: 'Learn what your A1C numbers mean and how to use them to manage your diabetes effectively.',
    category: 'Managing Diabetes',
    audience: ['patient'],
    type: 'article',
    readTime: '5 min',
    tags: ['A1C', 'blood sugar', 'monitoring'],
    content: 'The A1C test measures your average blood sugar level over the past 2-3 months...'
  },
  {
    id: '2',
    title: 'Healthy Meal Planning for Type 2 Diabetes',
    excerpt: 'Create balanced meals that help control blood sugar while enjoying delicious food.',
    category: 'Nutrition',
    audience: ['patient'],
    type: 'guide',
    readTime: '10 min',
    tags: ['nutrition', 'meal planning', 'type 2'],
    content: 'Balanced nutrition is key to managing diabetes. Focus on whole grains, lean proteins...'
  },
  {
    id: '3',
    title: 'How Your Donation Makes an Impact',
    excerpt: 'See the real-world difference your contributions make in the fight against diabetes.',
    category: 'Impact Stories',
    audience: ['donor'],
    type: 'article',
    readTime: '4 min',
    tags: ['impact', 'donation', 'research'],
    content: 'Every dollar donated helps fund critical research and support programs...'
  },
  {
    id: '4',
    title: 'Getting Started with Insulin Therapy',
    excerpt: 'A comprehensive guide for people newly prescribed insulin treatment.',
    category: 'Treatment',
    audience: ['patient'],
    type: 'guide',
    readTime: '12 min',
    tags: ['insulin', 'medication', 'treatment'],
    content: 'Starting insulin can feel overwhelming, but with the right information...'
  },
  {
    id: '5',
    title: 'Volunteer Event Coordinator Guide',
    excerpt: 'Everything you need to know about organizing successful ADA community events.',
    category: 'Volunteer Resources',
    audience: ['volunteer'],
    type: 'guide',
    readTime: '8 min',
    tags: ['events', 'coordination', 'community'],
    content: 'As an event coordinator, you play a vital role in bringing our community together...'
  },
  {
    id: '6',
    title: 'Exercise and Blood Sugar Management',
    excerpt: 'Learn how physical activity affects your blood glucose and how to exercise safely.',
    category: 'Lifestyle',
    audience: ['patient'],
    type: 'article',
    readTime: '6 min',
    tags: ['exercise', 'fitness', 'blood sugar'],
    content: 'Regular physical activity is one of the best ways to manage diabetes...'
  },
  {
    id: '7',
    title: 'Tax Deduction Guide for Charitable Giving',
    excerpt: 'Maximize your charitable contributions and understand the tax benefits.',
    category: 'Donor Information',
    audience: ['donor'],
    type: 'article',
    readTime: '5 min',
    tags: ['tax', 'donation', 'finance'],
    content: 'Your donations to ADA are tax-deductible. Here\'s what you need to know...'
  },
  {
    id: '8',
    title: 'Preventing Type 2 Diabetes',
    excerpt: 'Evidence-based strategies to reduce your risk of developing type 2 diabetes.',
    category: 'Prevention',
    audience: ['patient'],
    type: 'article',
    readTime: '7 min',
    tags: ['prevention', 'prediabetes', 'lifestyle'],
    content: 'If you\'re at risk for type 2 diabetes, these lifestyle changes can help...'
  },
  {
    id: '9',
    title: 'Diabetes Technology: CGM and Insulin Pumps',
    excerpt: 'Explore the latest diabetes technology and how it can simplify your management.',
    category: 'Technology',
    audience: ['patient'],
    type: 'article',
    readTime: '9 min',
    tags: ['CGM', 'insulin pump', 'technology'],
    content: 'Modern diabetes technology has revolutionized how people manage their condition...'
  },
  {
    id: '10',
    title: 'Talking to Your Doctor About Diabetes',
    excerpt: 'Get the most out of your appointments with questions to ask and topics to discuss.',
    category: 'Healthcare',
    audience: ['patient'],
    type: 'guide',
    readTime: '6 min',
    tags: ['doctor', 'communication', 'healthcare'],
    content: 'Effective communication with your healthcare team is essential...'
  },
  {
    id: '11',
    title: 'Corporate Partnership Opportunities',
    excerpt: 'Learn how your company can partner with ADA to fight diabetes.',
    category: 'Corporate Giving',
    audience: ['donor'],
    type: 'guide',
    readTime: '8 min',
    tags: ['corporate', 'partnership', 'sponsorship'],
    content: 'Corporate partnerships help us expand our reach and impact...'
  },
  {
    id: '12',
    title: 'Youth Volunteer Program',
    excerpt: 'Empower young people to make a difference in the diabetes community.',
    category: 'Volunteer Programs',
    audience: ['volunteer'],
    type: 'article',
    readTime: '5 min',
    tags: ['youth', 'mentorship', 'community'],
    content: 'Our youth volunteer program engages the next generation...'
  },
  {
    id: '13',
    title: 'Managing Diabetes During Pregnancy',
    excerpt: 'Essential information for women with gestational diabetes or managing diabetes while pregnant.',
    category: 'Special Populations',
    audience: ['patient'],
    type: 'guide',
    readTime: '11 min',
    tags: ['pregnancy', 'gestational', 'women'],
    content: 'Pregnancy requires special attention to blood sugar management...'
  },
  {
    id: '14',
    title: 'Understanding Diabetes Research',
    excerpt: 'How ADA-funded research is advancing towards a cure and better treatments.',
    category: 'Research',
    audience: ['donor', 'patient'],
    type: 'article',
    readTime: '7 min',
    tags: ['research', 'science', 'cure'],
    content: 'Research funded by your donations is making real progress...'
  },
  {
    id: '15',
    title: 'Diabetes Distress and Mental Health',
    excerpt: 'Recognize and address the emotional challenges of living with diabetes.',
    category: 'Mental Health',
    audience: ['patient'],
    type: 'article',
    readTime: '8 min',
    tags: ['mental health', 'stress', 'support'],
    content: 'Living with diabetes can be emotionally challenging...'
  },
  {
    id: '16',
    title: 'Legacy Giving and Planned Gifts',
    excerpt: 'Create a lasting impact through your estate planning.',
    category: 'Donor Information',
    audience: ['donor'],
    type: 'guide',
    readTime: '9 min',
    tags: ['legacy', 'estate', 'planned giving'],
    content: 'Planned giving allows you to leave a legacy in the fight against diabetes...'
  },
  {
    id: '17',
    title: 'Diabetes and Heart Health',
    excerpt: 'Understanding the connection between diabetes and cardiovascular disease.',
    category: 'Complications',
    audience: ['patient'],
    type: 'article',
    readTime: '8 min',
    tags: ['heart', 'cardiovascular', 'complications'],
    content: 'People with diabetes face increased risk of heart disease...'
  },
  {
    id: '18',
    title: 'Hosting a Virtual Fundraiser',
    excerpt: 'Step-by-step guide to organizing successful online fundraising events.',
    category: 'Volunteer Resources',
    audience: ['volunteer', 'donor'],
    type: 'guide',
    readTime: '10 min',
    tags: ['fundraising', 'virtual', 'events'],
    content: 'Virtual fundraisers have become an powerful way to raise funds...'
  },
  {
    id: '19',
    title: 'Low Blood Sugar: Recognition and Treatment',
    excerpt: 'Learn to identify and quickly treat hypoglycemia to stay safe.',
    category: 'Emergency Care',
    audience: ['patient'],
    type: 'article',
    readTime: '6 min',
    tags: ['hypoglycemia', 'emergency', 'safety'],
    content: 'Recognizing and treating low blood sugar quickly is critical...'
  },
  {
    id: '20',
    title: 'Diabetes Advocacy: Make Your Voice Heard',
    excerpt: 'How to advocate for diabetes-friendly policies in your community.',
    category: 'Advocacy',
    audience: ['volunteer', 'patient'],
    type: 'guide',
    readTime: '7 min',
    tags: ['advocacy', 'policy', 'community'],
    content: 'Your voice matters in creating change for the diabetes community...'
  },
];
