// import icons
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMdAddCircle,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.png";

import Chair1Img from "./assets/img/products/chairProduct1.png";
import Chair2Img from "./assets/img/products/chairProduct2.png";
import Chair3Img from "./assets/img/products/chairProduct3.png";
import Chair4Img from "./assets/img/products/chairProduct4.png";

import Avatar1 from "./assets/img/Avatar1.png";
import Avatar2 from "./assets/img/Avatar2.png";
import Avatar3 from "./assets/img/Avatar3.png";

import ReviewBackground1 from "./assets/img/review/Review1.png";
import ReviewBackground2 from "./assets/img/review/Review2.png";
import ReviewBackground3 from "./assets/img/review/Review3.png";
//
export const navigation = [
  {
    name: "Furniture",
    href: "furiture",
  },
  {
    name: "Shop",
    href: "shop",
  },
  {
    name: "About Us",
    href: "aboutUs",
  },
  {
    name: "Contact",
    href: "contact",
  },
];
//
export const hero = {
  title: "Make Your Interior More Minimalistic & Modern",
  subtitle:
    "Turn your room with panto into a lot more minimalist and modern with ease and speed",
  buttonSearch: "Search furniture",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];
//
export const features = {
  image: <Features1Img />,
  title: "EXPERIENCES",
  subtitle: "We Provide You The Best Experience",
  text: "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
  buttonText: "More info",
};

export const feature2 = {
  title2: "MATERIALS",
  subtitle2: "Very serious materials for making furniture",
  text2:
    "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
  buttonText2: "More info",
};

export const products = {
  title: "Best Selling Product",
  pages: {
    productList: [
      {
        image: <Chair1Img />,
        icon: <IoMdAddCircle />,
        name: "Sakarias Armchair",
        votes: 5,
        price: 392,
        type: "Chair",
      },
      {
        image: <Chair2Img />,
        icon: <IoMdAddCircle />,
        name: "Baltsar Chair",
        votes: 5,
        price: 392,
        type: "Chair",
      },
      {
        image: <Chair3Img />,
        icon: <IoMdAddCircle />,
        name: "Anjay Chair",
        votes: 4,
        price: 392,
        type: "Chair",
      },
      {
        image: <Chair4Img />,
        icon: <IoMdAddCircle />,
        name: "Nyantuy Chair",
        votes: 4,
        price: 392,
        type: "Chair",
      },
    ],
  },
};

export const reviews = {
  title: "TESTIMONIALS",
  subtitle: "Our Client Reviews",
  persons: [
    {
      background: <ReviewBackground1 />,
      avatar: <Avatar1 />,
      name: "Bang Upin",
      nickname: "Pedagang Asongan",
      comment:
        "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
      vote: 5,
    },
    {
      background: <ReviewBackground2 />,
      avatar: <Avatar2 />,
      name: "Ibuk Sukijan",
      nickname: "Ibu Rumah Tangga",
      comment:
        "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“",
      vote: 5,
    },
    {
      background: <ReviewBackground3 />,
      avatar: <Avatar3 />,
      name: "Mpok Ina",
      nickname: "Karyawan Swasta",
      comment:
        "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
      vote: 5,
    },
  ],
};

export const news = {
  titleNews: "Why choosing us",
  newsLetter: [
    {
      title: "Luxury facilities",
      subtitle:
        "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
      buttonText: "More info",
    },
    {
      title: "Affordable Price",
      subtitle:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
      buttonText: "More info",
    },
    {
      title: "Many Choices",
      subtitle:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
      buttonText: "More info",
    },
  ],
};
//
export const footer = {
  subtitle:
    "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  services: [
    { subtitle: "Email Marketing" },
    { subtitle: "Campaigns" },
    { subtitle: "Branding" },
  ],
  furniture: [{ subtitle: "Beds" }, { subtitle: "Chair" }, { subtitle: "All" }],
  social: [
    {
      icon: <IoLogoFacebook />,
      name: "Facebook",
      href: "#",
    },
    {
      icon: <IoLogoTwitter />,
      name: "Twitter",
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      name: "Instagram",
      href: "#",
    },
  ],
};
