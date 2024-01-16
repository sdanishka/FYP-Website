import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

interface AlgorithmSelectorProps {}

const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = () => {
  const [selectedTask, setSelectedTask] = useState<string>("");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>("");
  const [nextStepClicked, setNextStepClicked] = useState<boolean>(false);

  const taskAlgorithmMapping = {
    "Face Recognition and Detection": [
      "Deep Neural Networks (DNN)",
      "Eigenfaces",
      "YOLO Faces",
      "Haar Cascade Classifier",
      "Convolutional Neural Networks (CNN)"
    ],
    "Object Detection and Recognition": [
      "YOLO (You Only Look Once)",
      "Region-based Convolutional Neural Networks (R-CNN)",
      "Faster R-CNN (Region-based Convolutional Neural Network)",
      "Deep Neural Networks (DNN)",
      "Convolutional Neural Networks (CNN)"
    ],
    "OCR": [
        "Tesseract", 
        "OCRopus", 
        "Google Cloud Vision OCR",
        "Recurrent Neural Networks (RNNs)",
        "Convolutional Neural Networks (CNNs)",
    ],
    "Facial Landmark Detection": [
      "Convolutive Neural Networks (CNNs)",
      "MTCNN (Multi-task Cascaded Convolutional Networks)",
      "Deep Convolutional Neural Networks (DCNNs)",
      "Face Alignment Networks",
      "One-shot Learning and Siamese Networks"
    ],
    "Motion Analysis": [
        "DeepSORT (Simple Online and Realtime Tracking)", 
        "TLD (Tracking-Learning-Detection)", 
        "MOSSE (Minimum Output Sum of Squared Error)",
        "FlowNet",
        "Dynamic Time Warping (DTW)"
    ],
    "Human Pose Estimation": [
      "OpenPose",
      "HRNet (High-Resolution Network)",
      "PoseNet",
      "AlphaPose",
      "DeepPose"
    ],
  };

  const handleTaskChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedTask = event.target.value;
    setSelectedTask(selectedTask);
    setSelectedAlgorithm("");
  };

  const handleAlgorithmChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleNextStepClick = () => {
    setNextStepClicked(true);
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-8 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container mx-auto px-4">
        <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
          <label htmlFor="task" className="mb-3 block text-sm text-dark dark:text-white">
            Select a Task:
          </label>
          <select
            id="task"
            name="task"
            value={selectedTask}
            onChange={handleTaskChange}
            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          >
            <option value="">Select...</option>
            {Object.keys(taskAlgorithmMapping).map((task) => (
              <option key={task} value={task}>
                {task}
              </option>
            ))}
          </select>

          {selectedTask && (
            <div className="mt-6">
              <label htmlFor="algorithm" className="mb-3 block text-sm text-dark dark:text-white">
                Select an Algorithm:
              </label>
              <select
                id="algorithm"
                name="algorithm"
                value={selectedAlgorithm}
                onChange={handleAlgorithmChange}
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              >
                <option value="">Select...</option>
                {taskAlgorithmMapping[selectedTask].map((algorithm) => (
                  <option key={algorithm} value={algorithm}>
                    {algorithm}
                  </option>
                ))}
              </select>
            </div>
          )}

{selectedAlgorithm && (
  <div className="mt-6">
    <p className="text-base font-medium text-body-color">
      You have selected: {selectedTask} - {selectedAlgorithm}
    </p>
    <div className="flex mt-4 space-x-4">
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/train"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Proceed to Train your CV Model
          </Link>
        </div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSelector;
