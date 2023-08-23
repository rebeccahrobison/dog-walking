import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClicked = clickEvent.target
        
        if (whatWasClicked.dataset.type === "walker") {
            window.alert(`This walker works in ${whatWasClicked.dataset.city}`)
        }
    }
)

const findCity = (walkerObject) => {
    let foundCity = null
    for (const city of cities) {
        if (walkerObject.cityId === city.id) {
            foundCity = city
        }
    }
    return foundCity
}

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        const walkerCity = findCity(walker)
        walkerHTML += `<li data-id="${walker.id}"
                           data-city="${walkerCity.city}"
                           data-type="walker"
                           >${walker.name}
                       </li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

