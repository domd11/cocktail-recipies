import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {Image} from 'semantic-ui-react'
const Drink = () => {
    const router = useRouter()
    const { id } = router.query
    const [drinks, setDrinks] = useState([])

    const fetchData = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((repsonse) => {
            return repsonse.json()
        }).then((data) => {
            setDrinks(data.drinks)
            console.log(data.drinks)
        })
    }

    useEffect(() => {
        fetchData(); 
    }, []); 

    return (
        <div>
        {drinks.map((drink) => {
            return (
                <div key={drink.idDrink}>
                    <h1>{drink.strDrink} - {drink.strAlcoholic}</h1>
                   <Image style={{ height:'300px', borderRadius: '30px', border: '1px solid white' }} src={drink.strDrinkThumb} alt={drink.strDrink}/>
                   <p>Glass: {drink.strGlass}</p>
                   <p>Category: {drink.strCategory}</p>
                   <h3>Instructions: </h3>
                   <p>{drink.strInstructions}</p>
                    <ul>
                        {drink.strIngredient1 !== null ? <li>{drink.strIngredient1}: {drink.strMeasure1}</li>: ""}
                        {drink.strIngredient2 !== null ? <li>{drink.strIngredient2}: {drink.strMeasure2}</li>: ""}
                        {drink.strIngredient3 !== null ? <li>{drink.strIngredient3}: {drink.strMeasure3}</li>: ""}
                        {drink.strIngredient4 !== null ? <li>{drink.strIngredient4}: {drink.strMeasure4}</li>: ""}
                        {drink.strIngredient5 !== null ? <li>{drink.strIngredient5}: {drink.strMeasure5}</li> : ""}
                        {drink.strIngredient6 !== null ? <li>{drink.strIngredient6}: {drink.strMeasure6}</li>: ""}
                        {drink.strIngredient7 !== null ? <li>{drink.strIngredient7}: {drink.strMeasure7}</li>: ""}
                        {drink.strIngredient8 !== null ? <li>{drink.strIngredient8}: {drink.strMeasure8}</li>: ""}
                        {drink.strIngredient9 !== null ? <li>{drink.strIngredient9}: {drink.strMeasure9}</li>: ""}
                        {drink.strIngredient10 !== null ? <li>{drink.strIngredient10}: {drink.strMeasure10}</li>: ""}
                        {drink.strIngredient11 !== null ? <li>{drink.strIngredient11}: {drink.strMeasure11}</li>: ""}
                        {drink.strIngredient12 !== null ?<li>{drink.strIngredient12}: {drink.strMeasure12}</li>: ""}
                        {drink.strIngredient13 !== null ? <li>{drink.strIngredient13}: {drink.strMeasure13}</li>: ""}
                        {drink.strIngredient14 !== null ? <li>{drink.strIngredient14}: {drink.strMeasure14}</li>: ""}
                        {drink.strIngredient15 !== null ? <li>{drink.strIngredient15}: {drink.strMeasure15}</li>: ""}
                      </ul>
                </div>
            )
        })}
        </div>
    )

}

export default Drink