import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Visual Intelligence Unleashed",
    paragraph:
      "AI in vision transforms industries, empowering machines with facial recognition, object detection, and autonomy. It revolutionizes perception, decision-making, and opens new frontiers in technology applications.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "ChatGPT",
      image: "/images/blog/author-01.png",
      designation: "Ai Tool",
    },
    tags: ["Analysis"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "YOLOv5: Empowering Efficient Object Detection",
    paragraph:
      "YOLOv5 is a state-of-the-art object detection model, renowned for its speed and accuracy, facilitating real-time applications across various domains by enhancing visual recognition tasks.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Chat GPT",
      image: "/images/blog/author-02.png",
      designation: "Ai Tool",
    },
    tags: ["computer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Empowering Insight through Computer Vision",
    paragraph:
      "Computer Vision enhances machines' ability to interpret visual data, enabling applications like facial recognition, object detection, and autonomous systems, transforming industries and daily experiences.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Chat GPT",
      image: "/images/blog/author-03.png",
      designation: "Ai Tool",
    },
    tags: ["Blog"],
    publishDate: "2024",
  },
];
export default blogData;
