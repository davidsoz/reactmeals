import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm() {
  return (
    <form className={classes.form}>
      <Input
        label="Ampunt"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>add</button>
    </form>
  );
}

export default MealItemForm;
