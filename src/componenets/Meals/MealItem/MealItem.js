import classes from "./MealItem.module.css";

function MealItem({ name, description, price }) {
  const priceCurr = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h>{name}</h>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceCurr}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
