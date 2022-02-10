import React, { Component } from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
