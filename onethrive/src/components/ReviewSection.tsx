"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = {
  id: number;
  text: string;
  rating: number;
};

const candidateReviews: Review[] = [
  {
    id: 1,
    text: "Sed ut perspiciatis unde omnis error sit. Ut enim ad minima veniam, quis nostrum. Neque porro quisquam est, qui dolorem. Quis autem vel eum iure reprehenderit.",
    rating: 5,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
    rating: 4,
  },
  {
    id: 3,
    text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    rating: 5,
  },
];

const recruiterReviews: Review[] = [
  {
    id: 1,
    text: "Sed ut perspiciatis unde omnis error sit. Ut enim ad minima veniam, quis nostrum. Neque porro quisquam est, qui dolorem. Quis autem vel eum iure reprehenderit.",
    rating: 5,
  },
  {
    id: 2,
    text: "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.",
    rating: 4,
  },
  {
    id: 3,
    text: "Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
    rating: 5,
  },
];

const ReviewsSection: React.FC = () => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [recruiterIndex, setRecruiterIndex] = useState(0);

  const handleCandidatePrev = () =>
    setCandidateIndex((prev) =>
      prev === 0 ? candidateReviews.length - 1 : prev - 1
    );

  const handleCandidateNext = () =>
    setCandidateIndex((prev) =>
      prev === candidateReviews.length - 1 ? 0 : prev + 1
    );

  const handleRecruiterPrev = () =>
    setRecruiterIndex((prev) =>
      prev === 0 ? recruiterReviews.length - 1 : prev - 1
    );

  const handleRecruiterNext = () =>
    setRecruiterIndex((prev) =>
      prev === recruiterReviews.length - 1 ? 0 : prev + 1
    );

  const renderStars = (rating: number) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
          }`}
        />
      ));

  return (
    <div className="start sm:w-[65%] w-[85%] lg:w-[80%] max-w-6xl py-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative p-5 md:p-8 rounded-3xl bg-[#0a1025] backdrop-blur-sm z-10 overflow-hidden border border-[#00ffa3]/20">
          <div className="absolute -inset-[1px] bg-gradient-to-tr from-[#00ffa3] via-transparent to-[#00ffa3] opacity-30 blur-xl animate-pulse rounded-3xl z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl font-Exo text-white mb-6 text-center hover:text-[#00ffa3] transition-all ease-in duration-200 hover:translate-x-1">
              Company reviews
            </h2>
            <div className="flex items-center">
              <button
                onClick={handleCandidatePrev}
                className="p-2 text-[#4A9BD4] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex flex-col justify-between font-Exo">
                <p className="text-gray-300 mb-4 leading-relaxed text-center">
                  {candidateReviews[candidateIndex].text}
                </p>
                <div className="flex justify-center mt-4">
                  {renderStars(candidateReviews[candidateIndex].rating)}
                </div>
              </div>
              <button
                onClick={handleCandidateNext}
                className="p-2 text-[#4A9BD4] hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative p-5 md:p-8 rounded-3xl bg-[#0a1025] backdrop-blur-sm z-10 overflow-hidden border border-[#00ffa3]/20">
          <div className="absolute -inset-[1px] bg-gradient-to-tr from-[#00ffa3] via-transparent to-[#00ffa3] opacity-30 blur-xl animate-pulse rounded-3xl z-0" />
          <div className="relative z-10">
            <h2 className="text-3xl font-Exo text-white mb-6 text-center hover:text-[#00ffa3] transition-all ease-in duration-200 hover:translate-x-1">
              Employee reviews
            </h2>
            <div className="flex items-center">
              <button
                onClick={handleRecruiterPrev}
                className="p-2 text-[#a67bd4] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex-1 min-h-[200px]">
                <p className="text-gray-300 font-Exo mb-4 leading-relaxed text-center">
                  {recruiterReviews[recruiterIndex].text}
                </p>
                <div className="flex justify-center mt-4">
                  {renderStars(recruiterReviews[recruiterIndex].rating)}
                </div>
              </div>
              <button
                onClick={handleRecruiterNext}
                className="p-2 text-[#a67bd4] hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
