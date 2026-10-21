import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductsPagination = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center -space-x-px text-base">
        <button className="flex items-center justify-center px-2 h-10 ms-0 leading-tight text-blue-600 bg-white border border-e-0 border-gray-300 rounded-s-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <ChevronLeft className="size-3" />
        </button>

        <button className="flex items-center justify-center px-3 h-10 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          1
        </button>

        <button className="flex items-center justify-center px-3 h-10 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          2
        </button>

        <button className="flex items-center justify-center px-3 h-10 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          3
        </button>

        <button className="flex items-center justify-center px-3 h-10 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          4
        </button>

        <button className="flex items-center justify-center px-3 h-10 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          5
        </button>

        <button className="flex items-center justify-center px-2 h-10 leading-tight text-blue-600 bg-white border border-gray-300 rounded-e-sm hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <ChevronRight className="size-3" />
        </button>
      </div>
    </div>
  );
};

export default ProductsPagination;
