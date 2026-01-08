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
