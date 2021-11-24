import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({ name, description, price }) {
  const priceCurr = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h>{name}</h>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceCurr}</div>
      </div>
      <div>
          <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
