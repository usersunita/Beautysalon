import product from "../assets/products.jpg";
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.avif";
import product1 from "../assets/product1.jpg";
import shampoo from "../assets/shampoo.jpg";
import serum from "../assets/Serum.png";
import Treatment from "../assets/Treatment.jpg";
import Haircream from "../assets/Haircream.jpg";
import haircareset from "../assets/haircareset.webp";
import Foundation1 from "../assets/Foundation1.png";
import Foundation from "../assets/Foundation.png";
import Cream from "../assets/Cream.jpg";
import Lotion from "../assets/Lotion.jpg";
import lipstick from "../assets/lipstick.avif";
import Facewash from "../assets/Facewash.jpg";
import Facewash1 from "../assets/Facewash1.jpg";
import makeupbag from "../assets/makeupbag.avif";
import style1 from "../assets/style1.webp";
import style2 from "../assets/style2.jpg";
import style3 from "../assets/style3.jpg";
import style4 from "../assets/style4.jpg";
const ProductData = [
  {
    id: 1,
    title: "Natural Green Lotion",
    imageSrc: product,
  },
  {
    id: 2,
    title: "3 in 1 Novage Lotion's",
    imageSrc: offer1,
  },
  {
    id: 3,
    title: "Gold FaceWash & Perfume",
    imageSrc: offer2,
  },
];

export default ProductData;

export const service = {
  categories: [
    {
      id: 1,
      name: "Hair Care",
      services: [
        {
          id: 101,
          name: "Hair Cut",
          img: style3,
          price: 20,
          description:
            "A professional haircut to suit your style and personality.",
        },
        {
          id: 102,
          name: "Hair Coloring",
          img: style2,
          price: 50,
          description:
            "Enhance your look with our expert hair coloring services.",
        },
        {
          id: 103,
          name: "Hair Spa",
          img: style3,
          price: 30,
          description:
            "Deep conditioning treatment to nourish and revitalize your hair.",
        },
        {
          id: 104,
          name: "Keratin Treatment",
          img: style4,
          price: 100,
          description:
            "Smooth and strengthen your hair with a keratin-infused treatment.",
        },
        {
          id: 105,
          name: "Hair Straightening",
          img: product,
          price: 80,
          description:
            "Get sleek, straight hair with our professional straightening service.",
        },
      ],
    },
    {
      id: 2,
      name: "Nail Care",
      services: [
        {
          id: 201,
          name: "Manicure",
          img: product,
          price: 25,
          description: "Pamper your hands with our relaxing manicure service.",
        },
        {
          id: 202,
          name: "Pedicure",
          img: product,
          price: 30,
          description:
            "Keep your feet looking fresh and healthy with a pedicure.",
        },
        {
          id: 203,
          name: "Nail Art",
          img: product,
          price: 40,
          description: "Customize your nails with stunning artistic designs.",
        },
        {
          id: 204,
          name: "Gel Nails",
          img: product,
          price: 50,
          description:
            "Durable and glossy gel nail polish for a long-lasting finish.",
        },
        {
          id: 205,
          name: "Acrylic Nails",
          img: product,
          price: 60,
          description:
            "Enhance your nails with strong and stylish acrylic extensions.",
        },
      ],
    },
    {
      id: 3,
      name: "Facial Treatments",
      services: [
        {
          id: 301,
          name: "Hydrating Facial",
          img: product,
          price: 45,
          description: "Deeply moisturizes and refreshes your skin.",
        },
        {
          id: 302,
          name: "Anti-Aging Facial",
          img: product,
          price: 55,
          description: "Reduces wrinkles and promotes youthful skin.",
        },
        {
          id: 303,
          name: "Deep Cleansing Facial",
          img: product,
          price: 50,
          description: "Purifies pores and removes excess oil for clear skin.",
        },
        {
          id: 304,
          name: "Brightening Facial",
          img: product,
          price: 60,
          description: "Gives your skin a radiant and even complexion.",
        },
        {
          id: 305,
          name: "Acne Treatment Facial",
          img: product,
          price: 65,
          description: "Targets acne and blemishes for a smoother skin tone.",
        },
      ],
    },
    {
      id: 4,
      name: "Waxing",
      services: [
        {
          id: 401,
          name: "Full Body Waxing",
          img: product,
          price: 90,
          description: "Smooth and hair-free skin with a full-body wax.",
        },
        {
          id: 402,
          name: "Bikini Waxing",
          img: product,
          price: 50,
          description: "Expert bikini waxing for a clean and comfortable feel.",
        },
        {
          id: 403,
          name: "Eyebrow Waxing",
          img: product,
          price: 20,
          description: "Perfectly shaped eyebrows for a polished look.",
        },
        {
          id: 404,
          name: "Leg Waxing",
          img: product,
          price: 40,
          description: "Silky smooth legs with professional waxing.",
        },
        {
          id: 405,
          name: "Underarm Waxing",
          img: product,
          price: 25,
          description: "Stay fresh and confident with underarm waxing.",
        },
      ],
    },
    {
      id: 5,
      name: "Lashes Extension",
      services: [
        {
          id: 501,
          name: "Classic Lashes",
          img: product,
          price: 70,
          description:
            "Enhance your natural lashes with a simple, elegant look.",
        },
        {
          id: 502,
          name: "Volume Lashes",
          img: product,
          price: 85,
          description:
            "Get fuller, more dramatic lashes with volume extensions.",
        },
        {
          id: 503,
          name: "Hybrid Lashes",
          img: product,
          price: 80,
          description:
            "A mix of classic and volume lashes for a balanced look.",
        },
        {
          id: 504,
          name: "Mega Volume Lashes",
          img: product,
          price: 100,
          description: "Bold and dramatic lashes for a high-impact effect.",
        },
        {
          id: 505,
          name: "Lash Lift",
          img: product,
          price: 60,
          description:
            "A natural-looking lift to enhance your eyelashes without extensions.",
        },
      ],
    },
    {
      id: 6,
      name: "Makeup",
      services: [
        {
          id: 601,
          name: "Bridal Makeup",
          img: product,
          price: 150,
          description:
            "Look stunning on your big day with our bridal makeup service.",
        },
        {
          id: 602,
          name: "Party Makeup",
          img: product,
          price: 100,
          description: "Glamorous makeup for any special event or party.",
        },
        {
          id: 603,
          name: "Natural Makeup",
          img: product,
          price: 80,
          description: "Soft and subtle makeup for a fresh, everyday look.",
        },
        {
          id: 604,
          name: "Glam Makeup",
          img: product,
          price: 120,
          description:
            "Bold and striking makeup for a red carpet-ready appearance.",
        },
        {
          id: 605,
          name: "Editorial Makeup",
          img: product,
          price: 130,
          description:
            "Creative and artistic makeup for photo shoots and fashion shows.",
        },
      ],
    },
  ],
};

export const productData = [
  {
    id: 1,
    category: "skin",
    image: Facewash1,
    title: " FaceWash For Women",
    price: 300,
    description: "A refreshing facewash that cleanses your skin deeply.",
    productName: "FaceWash For Women",
  },
  {
    id: 4,
    category: "makeup",
    image: Foundation,
    title: "Foundation",
    price: 1500,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Foundation",
  },

  {
    id: 5,
    category: "hair",
    image: Treatment,
    title: "Hair Treatment Cream",
    price: 2500,
    description: "A vibrant red lipstick for bold looks.",
    productName: "HairTreatment",
  },
  {
    id: 2,
    category: "hair",
    image: shampoo,
    title: "Shampoo For Men",
    price: 250,
    description: "A revitalizing shampoo for healthy hair.",
    productName: "Shampoo For Men",
  },
  {
    id: 13,
    category: "makeup",
    image: makeupbag,
    title: "Makeupbag",
    price: 450,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Makeupbag",
  },

  {
    id: 3,
    category: "makeup",
    image: lipstick,
    title: "Lipstick",
    price: 1050,
    description: "A vibrant red lipstick for bold looks.",
    productName: "LipStick",
  },

  {
    id: 6,
    category: "skin",
    image: Lotion,
    title: "Body Lotion",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Body Lotion",
  },
  {
    id: 7,
    category: "makeup",
    image: Foundation1,
    title: "Foundation",
    price: 1000,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Foundation",
  },
  {
    id: 8,
    category: "hair",
    image: Haircream,
    title: "Haircream",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "HairCream",
  },
  // {
  //   id: 9,
  //   category: "skin",
  //   image: serum,
  //   title: "Face Serum",
  //   price: 1500,
  //   description: "A vibrant red lipstick for bold looks.",
  //   productName: "Face Serum",
  // },
  {
    id: 10,
    category: "hair",
    image: Treatment,
    title: "Treatment Cream",
    price: 850,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Treatment cream",
  },
  {
    id: 11,
    category: "makeup",
    image: lipstick,
    title: "FaceWash For Women",
    price: 300,
    description: "A refreshing facewash that cleanses your skin deeply.",
    productName: "FaceWash For Women",
  },
  {
    id: 12,
    category: "hair",
    image: product1,
    title: "Shampoo For Men",
    price: 250,
    description: "A revitalizing shampoo for healthy hair.",
    productName: "Shampoo For Men",
  },
];
