"use client";

const ManufacturingTagBar = ({
  tags: { title, _id },
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <div>
      <button
        className={`
              px-3 py-2 rounded-sm text-xs font-medium transition uppercase text-nowrap duration-200 cursor-pointer
              ${
                activeCategory === _id
                  ? "bg-blue-700 text-white"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }
            `}
        onClick={() => setActiveCategory(_id)}
      >
        {title}
      </button>
    </div>
  );
};

export default ManufacturingTagBar;
