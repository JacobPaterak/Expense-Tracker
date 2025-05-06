function Card(props) {
  return (
    <div className="Expense_Card">
      <h2>
        <p>Item: {props.Item}</p>
      </h2>
      <h2>
        <p>Category: {props.category}</p>
      </h2>
      <h2>
        <p>Cost: {props.cost}</p>
      </h2>
      <h2>
        <p>Date: {props.Date.toDateString()}</p>
      </h2>
    </div>
  );
}

export default Card;
