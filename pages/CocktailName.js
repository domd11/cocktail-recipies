import React, { useRef, useEffect, useState } from 'react'
import {Image} from 'semantic-ui-react'
import Link from 'next/link'
export default function CocktailName ()  {
    const [drinks, setDrinks] = useState([])
    const [search, setSearch] = useState(''); 
    const data = useRef();


    const getData = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${data.current.value}`).then((response) => {
            return response.json()
        }).then((data) => {
            setDrinks(data.drinks)
        })
    }

    const handleClick = () => {
        getData(); 
        localStorage.setItem("searchValue", search)
        localStorage.getItem("searchValue")
    
    }


    useEffect(() => {
        const input = document.getElementById('input'); 
        getData(); 
        input.value = localStorage.getItem("searchValue")
    }, [])
  return (
    <div>
    <h1>Search Cocktails By Name</h1>
    <input id='input' ref={data} />
    <button onClick={handleClick}>Search</button>
    <br />
    <hr />
    <br />
    {
        drinks !== null ?
        drinks.map((drink) => {
            return (
                <div key={drink.idDrink} className="drink">

                <Image style={{ height: '100px', borderRadius: '10px' }} src={drink.strDrinkThumb} alt={drink.strDrink}/>
                
                <Link href={`/drink/${drink.idDrink}`} passHref><span>{drink.strDrink} - <strong>{drink.strAlcoholic}</strong></span></Link>
             
                <br />
            
                <br />
                </div>
            )
        })
        :
        <p>No data available. Search something else</p>
    }
    </div>
  )
}



