import { getCarbs, setCarb } from "./database.js"

const carbs = getCarbs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "carb") {
            setCarb(parseInt(event.target.value))
        }
    }
)

export const carbHtml = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        (style) => {
            return `<li>
            <input type="radio" name="carb" value="${carbs.id}" /> ${carbs.name}`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}