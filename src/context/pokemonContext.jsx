import React, { createContext, useState, useEffect, useContext } from 'react';
import {useLazyQuery, useQuery} from '@apollo/client'
import {GET_ALL_POKEMONS} from '../graphql/query'

const PokemonContext = createContext()
const ImageContext = createContext()

export function usePokemons(){
    return useContext(PokemonContext)
}

export function useImage(){
    return useContext(ImageContext)
}

export const PokemonsProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [image, setImage] = useState("")
    const [myPokemons, setMyPokemons] = useState([])
    let page = window.localStorage.getItem('currPage')

    const {data} = useQuery(GET_ALL_POKEMONS, {variables: {
        limit: 10,
        offset: page * 10
    }})

    const [changePage, {data: currPokemons}] = useLazyQuery(GET_ALL_POKEMONS, {variables: {
        limit: 10,
        offset: page * 10
    }})

    useEffect(() => {
        if(currPokemons){
            setPokemons(currPokemons.pokemons.results)
        }
    }, [currPokemons])

    useEffect(() => {
        if(data){
            setPokemons(data.pokemons.results)
        }
    }, [data])

    useEffect(() => {
        setMyPokemons(JSON.parse(window.localStorage.getItem('myPokemon')))
    }, [])

    const getImage = (img) => {
        setImage(img)
    }

    const catchPokemon = (name, isCatched) => {
        const random = Math.round(Math.random())
        if(random < 0.5 && isCatched === false){
            alert('the pokemon run away')
        } else {
            const nickName = prompt("Enter nickname for your pokemon", name)
            if(myPokemons && myPokemons.some(e => e.nickName === nickName)) {
                alert('you must give a different nickname for each pokemon')
                catchPokemon(name, true)
            } else if(nickName != null) {
                setMyPokemons(prev => {
                    let arr = prev ? [...prev] : []
                    arr.push({
                        name: name,
                        nickName: nickName,
                        image: image
                    })

                    window.localStorage.setItem('myPokemon', JSON.stringify(arr))

                    return arr
                })
            }
        }
    }

    return (
        <PokemonContext.Provider value={{pokemons, myPokemons, catchPokemon, setMyPokemons, setPokemons, changePage}}>
            <ImageContext.Provider value={{image, getImage}}>
                {children}
            </ImageContext.Provider>
        </PokemonContext.Provider>
    )
};