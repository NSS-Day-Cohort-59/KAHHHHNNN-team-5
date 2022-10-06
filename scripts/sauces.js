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

export const Sauces = () => {
    let html = "<ul>"

    for (const sauce of sauces) {
        html += `<li>
        <input type="radio" name="sauce" value="${sauce.id}" /> ${sauce.name}
        </li>`


    }
    html += "</ul>"
    return html
}