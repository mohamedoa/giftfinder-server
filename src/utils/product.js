const mapProductFieldsForClient = (product) => {
  const { is_active, is_captain, ...rest } = product;

  const productData = {
    ...rest,
    isActive: typeof is_active === "undefined" || !!is_active,
    isCaptain: !!is_captain,
  };

  return productData;
};

const mapProductFieldsForDatabase = (product) => {
  const { isActive, isCaptain, ...rest } = product;

  const productData = {
    ...rest,
    is_active: typeof isActive === "undefined" || !!isActive,
  };

  productData.is_captain = !!isCaptain;

  return productData;
};

export { mapProductFieldsForClient, mapProductFieldsForDatabase };
