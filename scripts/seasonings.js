import { getSeasonings, setSeasonings } from "./database.js"

const seasonings= getSeasonings()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "seasoning") {
            setSeasonings(parseInt(event.target.value))
        }
    }
)

export const seasoningHtml = () => {
    let html = "<ul>"

    const listItemsArray = styles.map(
        (style) => {
            return `<li>
            <input type="radio" name="seasoning" value="${seasonings.id}" /> ${seasonings.name}`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}