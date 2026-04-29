import aboutCancerImg from "@/assets/about-cancer.jpg";
import riskFactorsImg from "@/assets/risk-factors.jpg";

export interface CancerDetail {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  overview: string;
  symptoms: string[];
  riskFactors: string[];
  prevention: string[];
  screening: string[];
  treatment: string[];
  stats: { label: string; value: string }[];
}

export const cancerDetails: CancerDetail[] = [
  {
    slug: "breast-cancer",
    name: "Breast Cancer",
    tagline: "Most common cancer in women — early detection saves lives",
    image: aboutCancerImg,
    overview:
      "Breast cancer occurs when cells in the breast grow uncontrollably. It is the most common cancer in women worldwide, but with early detection and modern treatment, survival rates are higher than ever.",
    symptoms: [
      "A new lump or thickening in the breast or underarm",
      "Change in size, shape, or appearance of the breast",
      "Dimpling, redness, or pitting of the breast skin",
      "Nipple discharge or inversion",
      "Persistent breast or nipple pain",
    ],
    riskFactors: [
      "Being female and increasing age",
      "Family history of breast or ovarian cancer",
      "Inherited gene mutations (BRCA1, BRCA2)",
      "Early menstruation or late menopause",
      "Obesity and lack of physical activity",
    ],
    prevention: [
      "Maintain a healthy weight and stay active",
      "Limit alcohol consumption",
      "Breastfeed if possible",
      "Avoid long-term hormone therapy",
      "Schedule regular self-exams and mammograms",
    ],
    screening: [
      "Monthly breast self-examination from age 20",
      "Clinical breast exam every 3 years (20s–30s)",
      "Annual mammogram from age 40",
      "MRI screening for high-risk individuals",
    ],
    treatment: [
      "Surgery (lumpectomy or mastectomy)",
      "Radiation therapy",
      "Chemotherapy",
      "Hormone therapy",
      "Targeted drug therapy and immunotherapy",
    ],
    stats: [
      { label: "5-year survival (early stage)", value: "99%" },
      { label: "Annual cases globally", value: "2.3M+" },
      { label: "Detected via screening", value: "60%" },
    ],
  },
  {
    slug: "lung-cancer",
    name: "Lung Cancer",
    tagline: "Leading cause of cancer deaths — prevention is powerful",
    image: riskFactorsImg,
    overview:
      "Lung cancer begins in the lungs and is the leading cause of cancer-related deaths worldwide. While smoking is the primary cause, non-smokers can also develop it through exposure to secondhand smoke, radon, and other carcinogens.",
    symptoms: [
      "A persistent cough that worsens over time",
      "Coughing up blood, even small amounts",
      "Shortness of breath and wheezing",
      "Chest pain that worsens with deep breathing",
      "Unexplained weight loss and fatigue",
    ],
    riskFactors: [
      "Smoking (active and passive)",
      "Exposure to radon gas",
      "Asbestos and other workplace carcinogens",
      "Air pollution",
      "Family history of lung cancer",
    ],
    prevention: [
      "Don't smoke and avoid secondhand smoke",
      "Test your home for radon",
      "Avoid carcinogens at work",
      "Eat a diet rich in fruits and vegetables",
      "Exercise regularly",
    ],
    screening: [
      "Low-dose CT scan for high-risk adults aged 50–80",
      "Annual screening for current and former smokers",
    ],
    treatment: [
      "Surgery to remove tumors",
      "Radiation therapy",
      "Chemotherapy",
      "Targeted drug therapy",
      "Immunotherapy",
    ],
    stats: [
      { label: "5-year survival (localized)", value: "63%" },
      { label: "Linked to smoking", value: "85%" },
      { label: "Annual cases globally", value: "2.2M+" },
    ],
  },
  {
    slug: "prostate-cancer",
    name: "Prostate Cancer",
    tagline: "Most common cancer in men — highly treatable when found early",
    image: aboutCancerImg,
    overview:
      "Prostate cancer is the most common cancer among men. It typically grows slowly and is often confined to the prostate gland, where it may not cause serious harm. With early detection, treatment outcomes are excellent.",
    symptoms: [
      "Difficulty urinating or weak urine flow",
      "Blood in urine or semen",
      "Pelvic discomfort",
      "Bone pain (in advanced cases)",
      "Erectile dysfunction",
    ],
    riskFactors: [
      "Age over 50",
      "Family history of prostate cancer",
      "African ancestry",
      "Obesity",
      "Diet high in red meat and dairy",
    ],
    prevention: [
      "Eat a diet rich in fruits and vegetables",
      "Maintain a healthy weight",
      "Exercise regularly",
      "Talk to your doctor about screening risks",
    ],
    screening: [
      "PSA blood test starting at age 50",
      "Earlier screening for high-risk men",
      "Digital rectal exam (DRE)",
    ],
    treatment: [
      "Active surveillance for low-risk cases",
      "Surgery (prostatectomy)",
      "Radiation therapy",
      "Hormone therapy",
      "Chemotherapy for advanced stages",
    ],
    stats: [
      { label: "5-year survival (localized)", value: "99%" },
      { label: "Men diagnosed in lifetime", value: "1 in 8" },
      { label: "Annual cases globally", value: "1.4M+" },
    ],
  },
  {
    slug: "colorectal-cancer",
    name: "Colorectal Cancer",
    tagline: "Highly preventable through screening and lifestyle",
    image: riskFactorsImg,
    overview:
      "Colorectal cancer affects the colon or rectum and is one of the most preventable cancers. Regular screening can detect precancerous polyps before they become cancer, dramatically reducing the risk.",
    symptoms: [
      "Persistent change in bowel habits",
      "Blood in stool",
      "Abdominal discomfort or cramping",
      "Unexplained weight loss",
      "Fatigue and weakness",
    ],
    riskFactors: [
      "Age over 50",
      "Family history",
      "Inflammatory bowel disease",
      "Low-fiber, high-fat diet",
      "Sedentary lifestyle",
    ],
    prevention: [
      "Get regular colorectal cancer screenings",
      "Eat a high-fiber diet rich in vegetables",
      "Limit red and processed meat",
      "Maintain a healthy weight",
      "Don't smoke and limit alcohol",
    ],
    screening: [
      "Colonoscopy every 10 years from age 45",
      "Stool-based tests annually",
      "CT colonography every 5 years",
    ],
    treatment: [
      "Polyp removal during colonoscopy",
      "Surgery to remove cancerous tissue",
      "Chemotherapy",
      "Radiation therapy",
      "Targeted therapy",
    ],
    stats: [
      { label: "Preventable through screening", value: "90%" },
      { label: "5-year survival (early stage)", value: "91%" },
      { label: "Annual cases globally", value: "1.9M+" },
    ],
  },
  {
    slug: "skin-cancer",
    name: "Skin Cancer",
    tagline: "The most common — and most preventable — cancer",
    image: aboutCancerImg,
    overview:
      "Skin cancer is the abnormal growth of skin cells, most often developing on skin exposed to the sun. It is the most common form of cancer but also one of the most preventable through sun protection.",
    symptoms: [
      "New growths or sores that don't heal",
      "Changes in existing moles (size, shape, color)",
      "Itchy, painful, or bleeding spots",
      "Scaly red patches",
      "Pearly or waxy bumps",
    ],
    riskFactors: [
      "Excessive sun exposure",
      "Use of tanning beds",
      "Fair skin and light eyes",
      "Family or personal history",
      "Weakened immune system",
    ],
    prevention: [
      "Use broad-spectrum sunscreen (SPF 30+)",
      "Avoid peak sun hours (10 AM – 4 PM)",
      "Wear protective clothing and hats",
      "Avoid tanning beds",
      "Examine your skin monthly",
    ],
    screening: [
      "Monthly skin self-examination",
      "Annual skin check by a dermatologist",
      "Earlier checks for high-risk individuals",
    ],
    treatment: [
      "Surgical excision",
      "Mohs surgery",
      "Cryotherapy",
      "Radiation therapy",
      "Immunotherapy and targeted therapy",
    ],
    stats: [
      { label: "5-year survival (melanoma, early)", value: "99%" },
      { label: "Cases preventable", value: "90%" },
      { label: "New US cases yearly", value: "5M+" },
    ],
  },
];

export const getCancerBySlug = (slug: string) =>
  cancerDetails.find((c) => c.slug === slug);