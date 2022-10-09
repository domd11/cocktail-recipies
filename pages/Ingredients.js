import { setConfig } from 'next/config';
import React, { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react';
import Link from 'next/link';


const Ingredients = () => {
    const [cocktails, setCocktails] = useState([]); 
    const [search, setSearch] = useState("Gin")


    const fetchData = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`).then((response) => {
            return response.json()
        }).then((data) => {
            setCocktails(data.drinks); 
            console.log("Data")
        })
    }

    useEffect(() => {
        fetchData(); 
    }, [])


  return (
    <div>
    <Link href="/"><p className='ingredient-link' style={{ width: '140px' }}>Search By Name</p></Link>

        <h1>Search Cocktail By Ingredient</h1>

        <input value={search} onChange={(e) => {setSearch(e.target.value)}} />
        <button onClick={fetchData}>search</button>
        <hr />
        {
            cocktails !== null ? 
            cocktails.map((drink) => {
                return (
                    <div key={drink.idDrink} className="drink">
                        <Link href={`/drink/${drink.idDrink}`} className="link"><span>{drink.strDrink}</span></Link>
                        <br />
                        <Image style={{ height: '100px', borderRadius: '10px', paddingTop: '10px'}} src={drink.strDrinkThumb} alt={drink.strDrink}/>
                        <br />
                    </div>
                )
            })
            : 
            <p>No data available</p>

        }
    </div>
  )
}

export default Ingredients