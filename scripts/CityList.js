import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const cityTarget = clickEvent.target

        if (cityTarget.dataset.type === "city") {
            window.alert(`${cityTarget.dataset.walkername} is servicing this city`)
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

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        const walkerCity = findCity(walker)
        citiesHTML += `<li 
            data-type="city" 
            data-walkername="${walker.name}"
            >${walkerCity.city}
            </li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

