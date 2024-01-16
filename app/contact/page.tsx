import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  // description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="For any inquiries, feedback, or collaboration opportunities, please don't hesitate to reach out to us. We value your input greatly!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
