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
        <div className='error'>
        <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADL0lEQVRoge2azW8OQRzHPz/Eo0HjperAQeJd4iQ9VdsDoY0TEfEWRxIiFX+Bs0iExMGRuAkXbyEuTRFvFw4qigNtghDSkqg2vg7zbI3t8zx0d3a3TXySTWbnmWfm+93ZnZn9zcJ/JhYWqiJJc4E2oBlYAywFGoGZ5SLfgPfAa+AZcAfoMrMvoTQkRlJJ0h5JNyWNaPyMSLohabekUhEG6iQdldSfQHw1+iQdkTQjLxMdkl4GNBCnV9LmLA2UJJ3K0ECc85LqQptYKOlxjiYiHkpqDGViiVx3F8ULSUv+prPm8CtpAdANrAxyVZLzClhvZu+qFahqRG70uAOsy0BYEh4BLWY2VOnHKTX+eJKJYwKgCThR7ceKPSKpA7ielaKUbDazW/HMMUbkZtinwIo8VCXgJbDWzL77mZVurUOEM3EO2FE+rgSqcxlwoGYJuUmvL+DQud+r+1jAet8qtjaL98h2YFGgK5cli4FtfkbcyL78tKRmr38yakTufWJD7nKSs0lSfXTi90gbMDV/PYmZBrRGJ76R9flrSU1FI6sLEJKWVVHCN7K8ACFpGZ3vfCPzCxCSlnlRwjcyqwAhaak4ak1qfCNfC1ORnIEo4Rv5WICQtHyKEtO8zF7CL93bJUXp1loFE9IbJXwjPcCWwA1tLR9Z0RMl/FvrboYNZkV3lBh9Q5Q0B/ecTJb11jDQYGYD4PVIOSp+O3Bj/hvi+cB134pMwNh5JHRj98zsopldJPyte8E/iRu5BPQHbjAL+oDLfoY/amFmQ5JO4GJaIWiW9DlKB6oT4LiZ/fAzqoWDnlB8mLQavbhw0B8RxzFrrXKBzrxUjRMBByuFTSsuGs3sJnAma1UJOG1mFUfWWkHsEm7CacpK1Th5ALTGn42Iv20rNOAi8kU/L6+AZjN7X61AzfcRM/sItOMtzgrgBbChlol/RlKj3DZY3tyX22wKh35vhv7MycRZZbn3LmmT3L5eVjyXtDEzAzEzJUmdclHxULyRdFgFfQFRkrRL0jVJwwnED0u6KmmnpOlptIT8qKYeFz9uwUUtlwELgNnlIoPAB9yOUw9ujuoys8FQGv4zkfgFDTyrdJvc11YAAAAASUVORK5CYII=" alt="error icon"/>
        <p>No data available. Please search something else</p>
        </div>
    }
    </div>
  )
}



