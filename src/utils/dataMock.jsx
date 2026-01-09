import mainproduct2nd1 from "../assets/mainproduct2nd1.webp";
import mainproduct2nd2 from "../assets/mainproduct2nd2.webp";
import mainproduct from "../assets/mainproduct.webp";
import bannerproduct from "../assets/bannerproduct.avif";
import mainproduct3nd1 from "../assets/mainproduct3nd1.webp";
import mainproduct3nd2 from "../assets/mainproduct3nd2.webp";
import mainproduct3nd3 from "../assets/mainproduct3nd3.webp";
import mainproduct4nd1 from "../assets/mainproduct4nd1.png";
import mainproduct4nd2 from "../assets/mainproduct4nd2.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.webp";
import feature3 from "../assets/feature3.webp";
import feature4 from "../assets/feature4.webp";
import feature5 from "../assets/feature5.png";
import feature6 from "../assets/feature6.webp";
import avt from "../assets/avtcomment.webp";
import star from "../assets/IconStar.png";
import bloadingcell1 from "../assets/bloatingcell1.webp";
import bloadingcell2 from "../assets/bloatingcell2.webp";
import bloadingcell3 from "../assets/bloatingcell3.webp";
import bloadingcell4 from "../assets/bloatingcell4.webp";
import bloadingcell5 from "../assets/bloatingcell5.webp";
import vogue from "../assets/vogue.webp";
import grazia from "../assets/grazia.webp";
import womenhealth from "../assets/womenhealth.webp";
import lymphatic from "../assets/lymphatic.webp";
import lymphatic2 from "../assets/lymphatic2.webp";
import whysection1 from "../assets/whysection1.jpg";
import whysection2 from "../assets/whysection2.webp";
import whysection3 from "../assets/whysection3.webp";
import systemretore1 from "../assets/systemstore1.avif";
import systemretore2 from "../assets/systemstore2.avif";
import systemretore3 from "../assets/systemstore3.avif";
import systemretore4 from "../assets/systemstore4.avif";
import systemretore5 from "../assets/systemstore5.avif";
import systemretore6 from "../assets/systemstore6.avif";
import systemretore7 from "../assets/systemstore7.avif";
import systemretore8 from "../assets/systemstore8.avif";
import freeship from "../assets/freeship.png";
import support from "../assets/support.png";
import natural from "../assets/natural.png";
import calender from "../assets/calender.png";

// mock data ví dụ api
export const product = {
  id: 1,
  productImages: mainproduct,
  bannerProducts: bannerproduct,
  productTitle:
    "New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™",
  star: 4.9,
  product2nd: [
    {
      id: 14343,
      urlImage: mainproduct2nd1,
      altImage: "main-product-2nd-1",
    },
    {
      id: 23443344,
      urlImage: mainproduct2nd2,
      altImage: "main-product-2nd-2",
    },
  ],
  product3nd: [
    {
      id: 134324,
      urlImage: mainproduct3nd1,
      altImage: "main-product-3nd-1",
    },
    {
      id: 2343,
      urlImage: mainproduct3nd2,
      altImage: "main-product-3nd-2",
    },
    {
      id: 33434,
      urlImage: mainproduct3nd3,
      altImage: "main-product-3nd-3",
    },
  ],
  product4nd: [
    {
      id: 3434,
      urlImage: mainproduct4nd1,
      altImage: "main-product-4nd-1",
    },
    {
      id: 2343467,
      urlImage: mainproduct4nd2,
      altImage: "main-product-4nd-2",
    },
  ],
  feature: [
    {
      id: 1745,
      image: feature1,
      content: "Join over 93 Thousand who say - it WORKS!",
    },
    {
      id: 24343,
      image: feature2,
      content: "Restores your body’s natural 24-hour lymphatic cycle",
    },
    {
      id: 39898,
      image: feature3,
      content:
        "Helps reduce fluid retention and the appearance of puffiness and bloating",
    },
    {
      id: 4867,
      image: feature4,
      content:
        "Helps fall asleep faster, stay asleep longer and wake up energized",
    },
    {
      id: 53334,
      image: feature5,
      content:
        "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
    },
    {
      id: 634343,
      image: feature6,
      content: "Boosts energy, mental clarity and emotional balance",
    },
  ],
  testimonial: {
    name: "Margaret Ellison | FL",
    avatar: avt,
    rating: star,
    title: "Even my husband noticed... the spark came back.",
    feedback:
      "After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I've been present. Even my marriage feels renewed, not just in how I look but in how I feel. It's hard to explain, but once you try it you'll get it. I'd recommend this to my closest friends without question.",
  },
};

export const PRICING_DATA = [
  {
    id: "bottle-1",
    title: "1 Bottle",
    quantityInfo: "1 bottle total",
    savings: "Save $27.99",
    currentPrice: 31.96,
    originalPrice: 59.95,
    badge: null,
    benefits: [{ id: "b1", text: "Free USA Shipping", type: "car" }],
  },
  {
    id: "bottle-3",
    title: "Buy 2 Get 1 Free",
    quantityInfo: "3 bottles total",
    savings: "Save $115.93",
    currentPrice: 63.92,
    originalPrice: 179.85,
    badge: "New Years Sale",
    benefits: [
      { id: "b1", text: "Free USA Shipping", type: "car" },
      {
        id: "b2",
        text: "Free Anti-Bloating Protocol E-book",
        type: "download",
      },
    ],
  },
  {
    id: "bottle-5",
    title: "Buy 3 Get 2 Free",
    quantityInfo: "5 bottles total",
    savings: "Save $203.87",
    currentPrice: 95.88,
    originalPrice: 299.75,
    badge: null,
    benefits: [
      { id: "b1", text: "Free USA Shipping", type: "car" },
      {
        id: "b2",
        text: "Free Anti-Bloating Protocol E-book",
        type: "download",
      },
      { id: "b3", text: "$20 Gift Card", type: "gift" },
    ],
  },
];

export const accordionData = [
  {
    id: 1,
    title: "Ingredients proven by science",
    content: `
      <strong>Sculptique Ingredients:</strong><br/><br/>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may support skin health.</li>
        <li><strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water retention.</li>
        <li><strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.</li>
        <li><strong>Cleavers Extract</strong> – Believed to support lymphatic drainage and detoxification.</li>
        <li><strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.</li>
        <li><strong>Bromelain Powder</strong> – An enzyme from pineapple that may reduce inflammation and support tissue repair.</li>
        <li><strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.</li>
        <li><strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin metabolism.</li>
      </ul><br/>
      These natural ingredients work together to reduce puffiness, bloating, fluid retention.
    `,
  },
  {
    id: 2,
    title: "How does it actually work?",
    content:
      "Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother.",
  },
  {
    id: 3,
    title: "Shipping and returns",
    content: `
      All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders.
      <br/><br/>
     We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can take advantage of our guarantee and ship back the product to us to get your return within 60 days of receiving your order.
    `,
  },
];

export const marqueeLogos = [
  vogue,
  grazia,
  womenhealth,
  vogue,
  grazia,
  womenhealth,
  vogue,
  grazia,
  womenhealth,
  vogue,
  grazia,
  womenhealth,
  vogue,
  grazia,
  womenhealth,
  vogue,
  grazia,
  womenhealth,
  vogue,
  grazia,
  womenhealth,
];

export const bloadingcell = [
  {
    id: "cell-1",
    urlImage: bloadingcell1,
    content:
      "Your stomach is flat in the morning, but by evening you look six months pregnant.",
  },
  {
    id: "cell-2",
    urlImage: bloadingcell2,
    content: "Your ankles disappear into `kankles` by the end of the day.",
  },
  {
    id: "cell-3",
    urlImage: bloadingcell3,
    content:
      "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
  },
  {
    id: "cell-4",
    urlImage: bloadingcell4,
    content: "You feel foggy and exhausted even after a full night's sleep.",
  },
  {
    id: "cell-5",
    urlImage: bloadingcell5,
    content: "You wake up stiff and achy, like your body aged overnight.",
  },
];

export const lymphaticContent = {
  section1: {
    title: "How Lymphatic System Fails After Age 35",
    benefits: [
      "Waste gets drained away",
      "Fluid stays balanced.",
      "Your body feels light and energized.",
    ],
    failures: [
      "Vessel pumping weakens.",
      "One-way valves fail.",
      "Protein clogs form.",
      "Vessel walls become leaky.",
    ],
    image: lymphatic,
  },
  section2: {
    textTop: "And it accumulates. Day after day. Week after week.",
    description:
      "That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.",
    symptoms: [
      "That's why you're bloated.",
      "That's why your ankles swell.",
      "That's why you see cellulite.",
      "That's why you feel exhausted and foggy.",
    ],
    image: lymphatic2,
  },
};

//
export const whyFailData = [
  {
    id: 1,
    image: whysection1,
    title: "You cut out gluten, dairy, sugar. You ate clean for months.",
    reason:
      "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
  },
  {
    id: 2,
    image: whysection2,
    title: "You tried viral lymphatic drops from TikTok.",
    reason:
      "They're just pricey water with trace herbs. The 'active ingredients' are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
  },
  {
    id: 3,
    image: whysection3,
    title: "You got lymphatic massage or bought compression socks.",
    reason:
      "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
  },
];

export const ingredientsData = [
  {
    id: 1,
    benefit: "Reactivate Lymphatic Pumps",
    name: "Cleavers Extract (100mg)",
    image: systemretore1,
    description:
      'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance. [Study: Enhanced NK cell activity in immunosuppressed models]',
  },
  {
    id: 2,
    benefit: "Flush Excess Fluid",
    name: "Dandelion Extract (250mg)",
    image: systemretore2,
    description:
      "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001). [Study: First human pilot study on diuretic effects]",
  },
  {
    id: 3,
    benefit: "Break Down Protein Clogs",
    name: "Bromelain Powder (100mg)",
    image: systemretore3,
    description:
      'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo. [Study: As effective as prescription NSAIDs for inflammation]',
  },
  {
    id: 4,
    benefit: "Strengthen Vessel Walls",
    name: "Rutin (100mg)",
    image: systemretore4,
    description:
      "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients. [Study: Systematic review of 1,643 participants]",
  },
  {
    id: 5,
    benefit: "Reduce Inflammation",
    name: "Burdock Root Powder (200mg)",
    image: systemretore5,
    description:
      "Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance. [Study: 42-day trial in osteoarthritis patients]",
  },
  {
    id: 6,
    benefit: "Boost Immune Clearance",
    name: "Echinacea Purpurea Extract (500mg)",
    image: systemretore6,
    description:
      "Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections. [Study: Increased NK cell cytotoxic activity]",
  },
  {
    id: 7,
    benefit: "Support Metabolism",
    name: "Kelp Extract (30mg)",
    image: systemretore7,
    description:
      "Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials. [Study: Dose-dependent increase in TSH levels]",
  },
  {
    id: 8,
    benefit: "Antioxidant Protection",
    name: "Lemon Powder (50mg)",
    image: systemretore8,
    description:
      "Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health. [Study: Triple-masked trial in 90 participants]",
  },
];

export const featuresData = [
  {
    id: 1,
    icon: freeship,
    title: "Free Shipping from USA",
    subtitle: "On all orders",
  },
  {
    id: 2,
    icon: support,
    title: "Naturally Supports Your Body",
    subtitle: "Promotes healthy immune cell functions",
  },
  {
    id: 3,
    icon: natural,
    title: "100% Natural Ingredients",
    subtitle: "8 active, natural ingredients",
  },
  {
    id: 4,
    icon: calender,
    title: "Try it Risk Free for 60 Days",
    subtitle: "60-day money-back guarantee",
  },
];

export const faqData = [
  {
    id: "x7k9p2m1",
    question: "How is this different from lymphatic drops I saw on TikTok?",
    answer:
      "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.\nSculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.",
  },
  {
    id: "b4v8n3q6",
    question: "Why didn't my diet changes work?",
    answer:
      "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there. That's why you could eat perfectly clean and still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.",
  },
  {
    id: "r1t5y9u2",
    question: "How long until I see results?",
    answer:
      "Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. But true restoration takes time—we recommend 90 days for complete results.",
  },
  {
    id: "a3s7d1f4",
    question: "Is this safe? Any side effects?",
    answer:
      "Sculptique contains 100% natural botanical ingredients used safely for centuries. The most common experience is increased urination in the first few days (expected—you're flushing excess fluid). Serious side effects are extremely rare. However, if you have pre-existing conditions or take prescription medications, consult your healthcare provider first.",
  },
  {
    id: "l9k2j5h8",
    question: "Can I take this with other supplements?",
    answer:
      "Yes. Sculptique works synergistically with most supplements. However, if you're taking blood thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare provider first.",
  },
  {
    id: "p0o4i3u7",
    question: "How do I use it?",
    answer:
      "Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food. Just be consistent.",
  },
  {
    id: "m6n1b8v3",
    question: "What if it doesn't work for me?",
    answer:
      "You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep Sculptique if it works for YOU.",
  },
  {
    id: "z2x9c5v1",
    question: "Where is this manufactured?",
    answer:
      "Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to ensure therapeutic doses with no contaminants.",
  },
  {
    id: "q8w3e7r2",
    question: "Why isn't this in stores?",
    answer:
      "Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price (retail markup would make it cost at least double). By selling direct, we maintain the highest quality while keeping the price affordable.",
  },
  {
    id: "t5y1u4i9",
    question: "Is this vegan/gluten-free?",
    answer:
      "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients.",
  },
];

export const Listvideo = [
  {
    id: "video1",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
  },
  {
    id: "video2",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
  },
  {
    id: "video3",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
  },
  {
    id: "video4",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
  },
  {
    id: "video5",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
  },
  {
    id: "video6",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
  },
  {
    id: "video7",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
  },
  {
    id: "video8",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
  },
  {
    id: "video9",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
  },
  {
    id: "video10",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
  },
  {
    id: "video11",
    urlVideo:
      "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
  },
];

export const ratingData = [
  { stars: 5, count: 84 },
  { stars: 4, count: 17 },
  { stars: 3, count: 8 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
];

export const allReviews = [
  {
    id: 1,
    name: "Allison",
    date: "08/21/2025",
    stars: 1,
    content:
      "Still taking them almost finished w bottle but have not seen any results.",
    verified: true,
    type: "Most Recent",
  },
  {
    id: 2,
    name: "John D.",
    date: "09/10/2025",
    stars: 5,
    content:
      "Amazing results! Highly recommend this product to everyone. I feel much more energetic and healthy.",
    verified: true,
    type: "Highest Rating",
  },
  {
    id: 3,
    name: "Sarah",
    date: "07/15/2025",
    stars: 4,
    content:
      "Good product, but shipping was slow. The packaging was neat and the capsules are easy to swallow.",
    verified: false,
    type: "Most Recent",
  },
  {
    id: 4,
    name: "Michael K.",
    date: "01/12/2026",
    stars: 5,
    content:
      "I've been using this for a month and the difference is huge! My skin looks clearer and I sleep better.",
    verified: true,
    type: "Highest Rating",
  },
  {
    id: 5,
    name: "Emma W.",
    date: "05/05/2025",
    stars: 2,
    content:
      "Not sure if it's working for me. Haven't noticed any significant changes after 2 weeks of use.",
    verified: true,
    type: "Most Recent",
  },
  {
    id: 6,
    name: "David L.",
    date: "11/20/2025",
    stars: 5,
    content:
      "Best supplement I have ever tried. The quality is top-notch and the price is very reasonable.",
    verified: true,
    type: "Highest Rating",
  },
  {
    id: 7,
    name: "Sophia R.",
    date: "10/02/2025",
    stars: 3,
    content:
      "It's okay, but I expected more based on the reviews. Maybe it takes longer to show results.",
    verified: false,
    type: "Most Recent",
  },
  {
    id: 8,
    name: "Chris B.",
    date: "12/15/2025",
    stars: 5,
    content:
      "Excellent customer service and even better product. Highly recommended for daily use!",
    verified: true,
    type: "Highest Rating",
  },
  {
    id: 9,
    name: "Linda M.",
    date: "06/30/2025",
    stars: 1,
    content:
      "Did not like the taste at all. Had to stop after three days. Disappointed.",
    verified: true,
    type: "Lowest Rating",
  },
  {
    id: 10,
    name: "James P.",
    date: "08/05/2025",
    stars: 4,
    content:
      "Good results so far. I feel more focused at work and less fatigued in the evenings.",
    verified: true,
    type: "Most Recent",
  },
  {
    id: 11,
    name: "Karen S.",
    date: "02/14/2026",
    stars: 5,
    content:
      "Absolutely love it! My whole family is now taking it and everyone feels the benefits.",
    verified: true,
    type: "Highest Rating",
  },
  {
    id: 12,
    name: "Robert T.",
    date: "03/22/2025",
    stars: 2,
    content:
      "Average product. I've tried similar things that worked faster for me.",
    verified: false,
    type: "Lowest Rating",
  },
  {
    id: 13,
    name: "Nancy G.",
    date: "09/25/2025",
    stars: 5,
    content:
      "Five stars! The results are exactly as described on the website. Fast shipping too.",
    verified: true,
    type: "Highest Rating",
  },
  {
    id: 14,
    name: "Paul H.",
    date: "04/18/2025",
    stars: 4,
    content:
      "Solid choice for a daily supplement. Doesn't upset my stomach like others do.",
    verified: true,
    type: "Most Recent",
  },
  {
    id: 15,
    name: "Jessica F.",
    date: "07/07/2025",
    stars: 3,
    content:
      "The product is fine, but the bottle was a bit hard to open. Good ingredients though.",
    verified: true,
    type: "Most Recent",
  },
];
