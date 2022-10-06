import { getSauces, setSauce } from "./database";

const sauces = getSauces()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "sauce") {
            setSauce(parseInt(event.target.value))
        }
    }
)