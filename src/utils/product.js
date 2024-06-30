const mapProductFieldsForClient = (product) => {
  const { is_active, ...rest } = product;

  const productData = {
    ...rest,
    isActive: typeof is_active === "undefined" || !!is_active,
  };

  return productData;
};

const mapProductFieldsForDatabase = (product) => {
  const { isActive, ...rest } = product;

  const productData = {
    ...rest,
    is_active: typeof isActive === "undefined" || !!isActive,
  };

  return productData;
};

export { mapProductFieldsForClient, mapProductFieldsForDatabase };
