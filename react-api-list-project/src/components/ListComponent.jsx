import React from 'react';

const ListComponent = ({ items, renderItem, emptyMessage = "No items to display." }) => {
  if (!items || items.length === 0) {
    return <p>{emptyMessage}</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;