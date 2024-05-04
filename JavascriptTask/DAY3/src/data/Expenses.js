
import { generateUniqueId } from "./utils/generateUniqueId.js";

class Expense {
    constructor(amount, description, category, date) {
        this.id = generateUniqueId({ prefix: "exp" });
        this.amount = amount;
        this.description = description;
        this.category = category;
        this.date = date;
    }
}
  
export default Expenses;  
