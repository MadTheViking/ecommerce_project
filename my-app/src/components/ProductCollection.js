import "../stylesheets/productcollection.css"
import ReactDOM from "react-dom/client"
import React, { useCallback } from "react"
import bracket from "../images/bracket.jpg"
import smallhexhandle from "../images/smallhexhandle.jpg"
import combo1 from "../images/combo1.jpg"
export default function ProductCollection (){


    var Items = [
        {Name: "Roller",Price:"25$",Pic:smallhexhandle},
        {Name: "Combo1",Price: "30$",Pic: combo1},
        {Name: "Bracket",Price: "15$",Pic: bracket}
    ];


    
    return(
        <Main className="Items">
            render( )
            <div>

        </div>
        </Main>
 )
}


const ProductCollection = () => {
    const[isLoading, setIsloading] = useState(True);
    const[Items, setItems] = useState([]);
    
    const handleSearch = (e) => {
        e.preventDefault();
    
        let filiteredlist = Items.filter(({name}) => name == name.toLowercase().includes(searchName.toLowerCase()));

        setItems(filteredList);

    }

    if (isLoading) return <h1>Loading...</h1>
    return(
        <main>
          <input key={handleSearch}/>
          <button>Search</button>
        <h1>Pokedex{PokemonList.length}</h1>
        <ul>{PokemonList.map((pokemon)=> {
          return <li key={pokemon.id}>{pokemon.name}</li>;
        })}</ul>
        </main>
    );
};