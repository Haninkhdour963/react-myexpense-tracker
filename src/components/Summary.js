import React from 'react';

const Summary = ({ expenses }) => {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="summary">
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Summary;
