import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Documentation",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Face Recognition and Detection",
        path: "/face",
        newTab: false,
      },
      {
        id: 42,
        title: "Object Recognition and Detection",
        path: "/object",
        newTab: false,
      },
      {
        id: 43,
        title: "OCR (Optical Character Recognition)",
        path: "/ocr",
        newTab: false,
      },
      {
        id: 44,
        title: "Facial Landmark Detection",
        path: "/landmark",
        newTab: false,
      },
      {
        id: 45,
        title: "Human Pose Estimation",
        path: "/pose",
        newTab: false,
      },
      {
        id: 46,
        title: "Motion Analysis",
        path: "/motion",
        newTab: false,
      },
      
    ],
  
  },
  // {
  //   id: 5,
  //   title: "Support",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 48,
  //   title: "Error Page",
  //   path: "/error",
  //   newTab: false,
  // },
];
export default menuData;
