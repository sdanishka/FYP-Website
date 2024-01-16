'use client'

import AlgorithmSelector from "@/components/Tasks";
import { Metadata } from "next";


// export const metadata: Metadata = {
//   title: "Face Recognition and Detection",
//   // description: "",
//   // other metadata
// };

const Task = () => {
  return (
    <>
      <AlgorithmSelector/>
    </>
  );
};

export default Task;
