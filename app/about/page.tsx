import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Auto Vision",
  // description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About AutoVision"
        description="AutoVision is a computer vision website that allows users to interact
        with various computer vision algorithms through an intuitive graphical user interface 
        (GUI). It is built using ReactJS for the frontend and Python for the backend."
      />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
