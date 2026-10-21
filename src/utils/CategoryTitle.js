 export  const getCategoryTitle = (categoryId, categories) => {
  console.log(categories?._id);
    const category = categories?.find(cat => cat?._id === categoryId);

    return category?.title || 'Uncategorized';
  };