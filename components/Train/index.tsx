import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

interface ModelTrainingProps {
  selectedTask: string;
  selectedAlgorithm: string;
}

const ModelTraining: React.FC<ModelTrainingProps> = ({ selectedTask, selectedAlgorithm }) => {
  const [selectedDatasetOption, setSelectedDatasetOption] = useState<string>("");
  const [uploadMethod, setUploadMethod] = useState<string>("");
  const [modelParameters, setModelParameters] = useState<string>("");
  const [trainClicked, setTrainClicked] = useState<boolean>(false);

  // Function to handle dataset option change
  const handleDatasetOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDatasetOption(event.target.value);
  };

  // Function to handle upload method change
  const handleUploadMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUploadMethod(event.target.value);
  };

  // Function to handle model parameters change
  const handleModelParametersChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setModelParameters(event.target.value);
  };

  // Function to handle train button click
  const handleTrainClick = () => {
    // Perform actions for training the model (e.g., API calls, etc.)
    setTrainClicked(true);
  };

  // Function to handle test and save button click
  const handleTestAndSaveClick = () => {
    // Perform actions for testing and saving the model (e.g., API calls, etc.)
  };

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-8 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container mx-auto px-4">
        <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
          {/* Point 1: Select Dataset and Upload Method */}
          <div>
            <label htmlFor="dataset" className="mb-3 block text-sm text-dark dark:text-white">
              Select a Dataset or Upload Method:
            </label>
            <select
              id="dataset"
              name="dataset"
              value={selectedDatasetOption}
              onChange={handleDatasetOptionChange}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
            >
              <option value="">Select...</option>
              {/* Add recommended dataset options here based on the selected algorithm */}
              <option value="recommended">Recommended Datasets</option>
              <option value="upload">Upload Dataset</option>
            </select>

            {selectedDatasetOption === "upload" && (
              <div className="mt-4">
                <label htmlFor="uploadMethod" className="mb-3 block text-sm text-dark dark:text-white">
                  Select Upload Method:
                </label>
                <select
                  id="uploadMethod"
                  name="uploadMethod"
                  value={uploadMethod}
                  onChange={handleUploadMethodChange}
                  className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                >
                  <option value="">Select...</option>
                  <option value="camera">Camera</option>
                  <option value="images">Upload Images</option>
                </select>
              </div>
            )}
          </div>

          {/* Point 2: Set Model Parameters */}
          <div className="mt-6">
            <label htmlFor="modelParameters" className="mb-3 block text-sm text-dark dark:text-white">
              Set Model Parameters:
            </label>
            <textarea
              id="modelParameters"
              name="modelParameters"
              value={modelParameters}
              onChange={handleModelParametersChange}
              className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
              rows={4}
            />
          </div>

          {/* Train and Test/Save Buttons */}
          <div className="mt-6">
            <div className="flex space-x-4">
              <button
                onClick={handleTrainClick}
                className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Train Model
              </button>
              <button
                onClick={handleTestAndSaveClick}
                className="rounded-sm bg-secondary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-secondary/80"
              >
                Test and Save Model
              </button>
            </div>
          </div>

          {/* Display confirmation after train button click */}
          {trainClicked && (
            <div className="mt-6">
              <p className="text-base font-medium text-body-color">
                Model training in progress. Check the training status in your dashboard.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModelTraining;
