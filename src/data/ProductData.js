import product from "../assets/products.jpg";
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.avif";
import product1 from "../assets/product1.jpg";

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
          img: product,
          price: 20,
          description:
            "A professional haircut to suit your style and personality.",
        },
        {
          id: 102,
          name: "Hair Coloring",
          img: product,
          price: 50,
          description:
            "Enhance your look with our expert hair coloring services.",
        },
        {
          id: 103,
          name: "Hair Spa",
          img: product,
          price: 30,
          description:
            "Deep conditioning treatment to nourish and revitalize your hair.",
        },
        {
          id: 104,
          name: "Keratin Treatment",
          img: product,
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
    image: product1,
    title: "FaceWash For Women",
    price: 300,
    description: "A refreshing facewash that cleanses your skin deeply.",
    productName: "FaceWash For Women",
  },
  {
    id: 2,
    category: "hair",
    image: product1,
    title: "Shampoo For Men",
    price: 250,
    description: "A revitalizing shampoo for healthy hair.",
    productName: "Shampoo For Men",
  },
  {
    id: 3,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 4,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 5,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 6,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 7,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 8,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 9,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 10,
    category: "makeup",
    image: product1,
    title: "Lipstick Red",
    price: 150,
    description: "A vibrant red lipstick for bold looks.",
    productName: "Lipstick Red",
  },
  {
    id: 11,
    category: "skin",
    image: product1,
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
