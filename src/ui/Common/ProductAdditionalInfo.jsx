import React, { useState } from "react";
import { useParams } from "react-router";
import UseFetch from "../../hooks/UseFetch.jsx";

const ProductAdditionalInfo = () => {
  const { id } = useParams();
  const { data, isLoading } = UseFetch(
    `${import.meta.env.VITE_REACT_APP_API_URL}/products/${id}`
  );

  const tabs = ["Additional Info", "Questions", "Reviews"];
  const [activeTab, setActiveTab] = useState("Additional Info");

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!data) return <p className="text-center">Product not found.</p>;

  const { additionalInfo } = data;

  return (
    <div className="max-w-[1120px] mx-auto mt-10 px-4 sm:px-8 pb-9">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium text-left ${
              activeTab === tab
                ? "border-b-2 sm:border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 text-gray-700">
        {activeTab === "Additional Info" && (
          <ul className="ml-5 space-y-1 list-disc">
            {additionalInfo?.map((info, index) => (
              <li key={index} className="text-md">
                {info}
              </li>
            ))}
          </ul>
        )}

        {activeTab === "Questions" && (
          <div>
            <p className="mb-2 font-semibold">Customer Questions</p>
            <ul className="space-y-2">
              <li>
                <strong>Q:</strong> Is the sofa cover removable? <br />
                <strong>A:</strong> Yes, it is.
              </li>
              <li>
                <strong>Q:</strong> What tools are required for assembly? <br />
                <strong>A:</strong> Just a screwdriver.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div>
            <p className="mb-2 font-semibold">Customer Reviews</p>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Jane D.</p>
                <p>— Great product, very comfortable!</p>
              </div>
              <div>
                <p className="font-medium">Mark S.</p>
                <p>— Looks nice but took time to assemble.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
