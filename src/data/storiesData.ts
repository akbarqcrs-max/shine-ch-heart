import storiesHopeImg from "@/assets/stories-hope.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  cancerType: string;
  location: string;
  age: number;
  quote: string;
  paragraphs: string[];
  milestones: { year: string; event: string }[];
}

export const stories: Story[] = [
  {
    slug: "huda-journey",
    title: "Huda's Journey: From Diagnosis to Victory",
    excerpt:
      "Huda Karam's inspiring journey through her cancer treatment shows the power of community support.",
    image: story1,
    date: "December 14, 2024",
    author: "CH Center Team",
    cancerType: "Breast Cancer",
    location: "Thrissur, Kerala",
    age: 38,
    quote:
      "CH Center didn't just help me survive cancer — they helped me find my purpose.",
    paragraphs: [
      "When Huda Karam was diagnosed with breast cancer in 2022, she felt her world crumbling around her. As a mother of two young children, the diagnosis was not just about her own health — it was about her family's future.",
      "\"The day I received my diagnosis, I couldn't stop thinking about my children,\" Huda recalls. \"Would I be there for their graduations? Their weddings? Those thoughts kept me up at night.\"",
      "That's when Huda discovered CH Center. Through our patient support programs, she found a community that understood her fears and provided practical help during her treatment journey — from transportation to chemotherapy sessions to childcare during long hospital stays.",
      "Today, Huda is cancer-free and has become a volunteer at CH Center, helping other patients navigate their own journeys with hope and courage. She leads a weekly support group and mentors newly diagnosed patients.",
    ],
    milestones: [
      { year: "2022", event: "Diagnosed with stage II breast cancer" },
      { year: "2022", event: "Joined CH Center support programs" },
      { year: "2023", event: "Completed treatment — declared cancer-free" },
      { year: "2024", event: "Became a CH Center volunteer and mentor" },
    ],
  },
  {
    slug: "maryam",
    title: "Little Maryam Rings the Victory Bell",
    excerpt:
      "After 18 months of treatment, 6-year-old Maryam rang the victory bell at the hospital.",
    image: story2,
    date: "November 28, 2024",
    author: "CH Center Team",
    cancerType: "Leukemia",
    location: "Kochi, Kerala",
    age: 6,
    quote:
      "Maryam's smile reminded everyone in that hospital why we keep fighting.",
    paragraphs: [
      "At just four years old, Maryam was diagnosed with acute lymphoblastic leukemia. What followed was 18 months of intensive chemotherapy, countless hospital stays, and unimaginable courage from a child who should have been worrying about nothing more than crayons and cartoons.",
      "Her parents, overwhelmed by medical bills and the emotional toll, reached out to CH Center. Our team coordinated financial assistance, arranged accommodation near the hospital, and connected the family with other parents facing similar journeys.",
      "On a bright morning in November 2024, surrounded by the nurses and doctors who became her second family, Maryam rang the victory bell — the hospital tradition that marks the end of treatment. Not a single eye in the room was dry.",
      "Today Maryam is back in school, drawing pictures of rainbows and dreaming of being a doctor herself one day.",
    ],
    milestones: [
      { year: "2022", event: "Diagnosed with leukemia at age 4" },
      { year: "2022", event: "Family connected with CH Center support" },
      { year: "2024", event: "Rang the victory bell — treatment complete" },
      { year: "2024", event: "Returned to school full-time" },
    ],
  },
  {
    slug: "fatima",
    title: "A Grandmother's Strength: Fatima's Story",
    excerpt:
      "At 68, Fatima was diagnosed with colorectal cancer and fought back with her family.",
    image: story3,
    date: "October 15, 2024",
    author: "CH Center Team",
    cancerType: "Colorectal Cancer",
    location: "Calicut, Kerala",
    age: 68,
    quote: "I have grandchildren to spoil. Cancer was not going to stop me.",
    paragraphs: [
      "Fatima had spent decades caring for her family. When the colorectal cancer diagnosis came at age 68, the matriarch suddenly found herself on the receiving end of care — a role she had never quite imagined.",
      "Her grandchildren, ranging from 4 to 19, took turns visiting her during treatment. CH Center provided home-care nursing, nutritional support, and a counselor who helped Fatima process the emotional weight of her diagnosis.",
      "\"They treated me like family,\" she says of the CH Center team. \"They listened when I needed to talk, and they were quiet when I needed peace.\"",
      "A year later, Fatima is in remission and back to hosting Sunday lunches for her growing family. She now hosts a monthly tea for older patients beginning their own treatment journeys.",
    ],
    milestones: [
      { year: "2023", event: "Diagnosed with colorectal cancer" },
      { year: "2023", event: "Surgery and chemotherapy completed" },
      { year: "2024", event: "Achieved remission" },
      { year: "2024", event: "Started peer-mentoring tea sessions" },
    ],
  },
  {
    slug: "ahmed",
    title: "From Patient to Marathon Runner",
    excerpt:
      "Ahmed completed his first marathon two years after finishing cancer treatment.",
    image: story4,
    date: "September 22, 2024",
    author: "CH Center Team",
    cancerType: "Testicular Cancer",
    location: "Dubai, UAE",
    age: 32,
    quote: "Every kilometer was a thank you to the people who saved my life.",
    paragraphs: [
      "Ahmed was 28, fit, and ambitious when a routine check-up revealed testicular cancer. Treatment was aggressive — surgery followed by chemotherapy that left him weak, exhausted, and questioning whether he'd ever feel like himself again.",
      "CH Center's rehabilitation program helped him rebuild, slowly. First walking, then jogging, then setting a goal that seemed impossible: a full marathon.",
      "In September 2024, Ahmed crossed the finish line of the Dubai Marathon. He ran in a CH Center jersey, and his finishing time wasn't fast — but it was the most meaningful run of his life.",
      "He has since raised over AED 200,000 for CH Center through sponsored runs.",
    ],
    milestones: [
      { year: "2021", event: "Diagnosed at age 28" },
      { year: "2022", event: "Completed treatment, began rehabilitation" },
      { year: "2024", event: "Finished first marathon" },
      { year: "2024", event: "Raised AED 200,000 for CH Center" },
    ],
  },
  {
    slug: "sarah",
    title: "The Power of Community: Sarah's Network",
    excerpt:
      "Sarah found strength in the support group at CH Center and now leads it.",
    image: storiesHopeImg,
    date: "August 10, 2024",
    author: "CH Center Team",
    cancerType: "Ovarian Cancer",
    location: "Sharjah, UAE",
    age: 45,
    quote: "Alone we are fragile. Together we are unstoppable.",
    paragraphs: [
      "Sarah's ovarian cancer diagnosis came as a shock. Living far from her extended family, she felt isolated — until a friend suggested she visit a CH Center support group.",
      "What she found was a room full of women who understood. They shared treatment tips, recommended doctors, cried together, and laughed even more.",
      "Today, three years post-treatment, Sarah leads that very same group. She has welcomed dozens of newly diagnosed women into the circle that once held her up.",
    ],
    milestones: [
      { year: "2021", event: "Diagnosed with ovarian cancer" },
      { year: "2021", event: "Joined CH Center support group" },
      { year: "2023", event: "Completed treatment" },
      { year: "2024", event: "Became support group leader" },
    ],
  },
  {
    slug: "omar",
    title: "Young Survivor Becomes Cancer Researcher",
    excerpt:
      "Diagnosed with lymphoma at 15, Omar dedicated his life to cancer research.",
    image: story1,
    date: "July 5, 2024",
    author: "CH Center Team",
    cancerType: "Lymphoma",
    location: "Boston, USA",
    age: 24,
    quote: "I want to be the reason someone hears 'you're going to be okay.'",
    paragraphs: [
      "Omar was a teenager when he heard the words \"you have lymphoma.\" The next two years were a blur of treatments, missed school, and a quiet promise he made to himself: if he survived, he would dedicate his life to making sure others had a better chance.",
      "He kept that promise. After undergraduate studies in biology, Omar is now a PhD candidate working on novel immunotherapy approaches for blood cancers.",
      "CH Center supported his family through the hardest years and continues to support his research today.",
    ],
    milestones: [
      { year: "2015", event: "Diagnosed with lymphoma at 15" },
      { year: "2017", event: "Achieved remission" },
      { year: "2022", event: "Graduated with biology degree" },
      { year: "2024", event: "Began PhD in cancer immunotherapy" },
    ],
  },
  {
    slug: "layla",
    title: "Mother and Daughter: Fighting Together",
    excerpt:
      "Layla and her daughter were diagnosed with breast cancer within months of each other.",
    image: story2,
    date: "June 18, 2024",
    author: "CH Center Team",
    cancerType: "Breast Cancer",
    location: "Thrissur, Kerala",
    age: 52,
    quote:
      "We held each other's hands through every chemo session. We wouldn't let go.",
    paragraphs: [
      "When Layla was diagnosed with breast cancer, the family was devastated. Three months later, her 28-year-old daughter Aisha received the same diagnosis. The genetic component was clear — and so was their resolve.",
      "Mother and daughter coordinated treatments, attended each other's appointments, and turned their hospital visits into shared rituals of strength.",
      "CH Center provided coordinated care planning, genetic counseling for the wider family, and emotional support through it all. Both women are now in remission.",
    ],
    milestones: [
      { year: "2022", event: "Layla diagnosed with breast cancer" },
      { year: "2022", event: "Aisha diagnosed three months later" },
      { year: "2023", event: "Both completed treatment" },
      { year: "2024", event: "Both in full remission" },
    ],
  },
];

export const getStoryBySlug = (slug: string) =>
  stories.find((s) => s.slug === slug);