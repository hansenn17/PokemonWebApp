/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../graphql/query';
import { useImage, usePokemons } from '../context/pokemonContext';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react'
import styled from '@emotion/styled';
import { Badge, ImageDetail, StatsDetail, CatchButton } from '../style';
import logo from '../asset/detail-background.png'

const PokemonDetail = () => {
    window.scroll(0, 0)

    const imageState = useImage()
    const pokemonsState = usePokemons()
    const { pokemon } = useParams()

    const [pokemonDetail, setPokemon] = useState({})
    const {data} = useQuery(GET_POKEMON_DETAIL, {variables: { name: pokemon }})
    useEffect(() => {
        if(data) {
            setPokemon(data.pokemon)
        }
    }, [data])
    
    const Layout = styled.div`
        margin-right: 10px;
        margin-left: 10px;
        background-image: url(${logo});
        background-size: 230px;
        background-repeat: no-repeat;
        background-position-x: 50%;
        background-position-y: 70%;
    `

    function getBgColor(){
        if(pokemonDetail.types){
            let type = pokemonDetail.types[0].type.name
            let color

            if(type === "poison"){
                color = "orchid"
            } else if(type === "grass"){
                color = "mediumaquamarine"
            } else if(type === "normal"){
                color = "darkgray"
            } else if(type === "fighting"){
                color = "lightcoral"
            } else if(type === "flying"){
                color = "aliceblue"
            } else if(type === "ground"){
                color = "burlywood"
            } else if(type === "rock"){
                color = "papayawhip"
            } else if(type === "bug"){
                color = "darkseagreen"
            } else if(type === "ghost"){
                color = "cornflowerblue"
            } else if(type === "steel"){
                color = "cadetblue"
            } else if(type === "fire"){
                color = "indianred"
            } else if(type === "water"){
                color = "lightblue"
            } else if(type === "electric"){
                color = "gold"
            } else if(type === "psychic"){
                color = "lightcoral"
            } else if(type === "ice"){
                color = "aquamarine"
            } else if(type === "dragon"){
                color = "dodgerblue"
            } else if(type === "dark"){
                color = "dimgray"
            } else if(type === "fairy"){
                color = "fuchsia"
            } else if(type === "unknown"){
                color = "gainsboro"
            } else if(type === "shadow"){
                color = "grey"
            }

            return color
        }
    }

    let bgColor = getBgColor()

    return (
        <>
            <div css={css`background-color: ${bgColor}`}>
                <Layout>
                    <div>
                        <h3 css={css`padding-top: 10px; margin-bottom: 0px; margin-top: 0px;`}>#{pokemonDetail.id}</h3>
                        <h1 css={css`margin-top: 0px;`}>{pokemonDetail.name}</h1>
                    </div>
                
                    <div>
                        {pokemonDetail.types && pokemonDetail.types.map(type => {
                            let icon, color
                            if(type.type.name === "poison"){
                                color = "#B667CF"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg"
                            } else if(type.type.name === "grass"){
                                color = "#35C04A"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg"
                            } else if(type.type.name === "normal"){
                                color = "#919AA2"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg"
                            } else if(type.type.name === "fighting"){
                                color = "#E0306A"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg"
                            } else if(type.type.name === "flying"){
                                color = "#89AAE3"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg"
                            } else if(type.type.name === "ground"){
                                color = "#E87236"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg"
                            } else if(type.type.name === "rock"){
                                color = "#C8B686"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg"
                            } else if(type.type.name === "bug"){
                                color = "#83C300"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg"
                            } else if(type.type.name === "ghost"){
                                color = "#4C6AB2"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg"
                            } else if(type.type.name === "steel"){
                                color = "#5A8EA2"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg"
                            } else if(type.type.name === "fire"){
                                color = "#FF9741"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg"
                            } else if(type.type.name === "water"){
                                color = "#3692DC"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg"
                            } else if(type.type.name === "electric"){
                                color = "#FBD100"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg"
                            } else if(type.type.name === "psychic"){
                                color = "#FF6675"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg"
                            } else if(type.type.name === "ice"){
                                color = "#4CD1C0"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg"
                            } else if(type.type.name === "dragon"){
                                color = "#006FC9"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg"
                            } else if(type.type.name === "dark"){
                                color = "#5B5466"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg"
                            } else if(type.type.name === "fairy"){
                                color = "#FB89EB"
                                bgColor = "#B667CF"
                                icon = "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg"
                            } else if(type.type.name === "unknown"){
                                color = "#546674"
                                bgColor = "#B667CF"
                                icon = "https://archives.bulbagarden.net/media/upload/7/77/201Unown.png"
                            } else if(type.type.name === "shadow"){
                                color = "#222222"
                                bgColor = "#B667CF"
                                icon = "https://cdn3.iconfinder.com/data/icons/pokemons/500/Pokemon_shadom_pokeball_games_-512.png"
                            }
                            return <Badge key={type.type.name} css={css`background-color: ${color}; width: 100px; color: ${color === "#222222" ? "white" : "black"}`}><img src={icon} css={css`width: 20px; height: 20px;`} alt="" /> <h5>{type.type.name}</h5></Badge>
                        })}
                    </div>
                    <ImageDetail src={imageState.image ? imageState.image : window.localStorage.getItem("img")} alt="no pic" />
                    <CatchButton onClick={() => pokemonsState.catchPokemon(data.pokemon.name, false)}>Catch</CatchButton>
                </Layout>
                <StatsDetail>
                    <div css={css`padding-top: 20px; padding-left: 20px; padding-right: 20px;`}>
                        <h2>Moves</h2>
                        <hr css={css`height: 4px; background-color: lightblue; border: 0px;`} />
                        {pokemonDetail.moves && pokemonDetail.moves.map(move => {
                            return <Badge key={move.move.name} css={css`background-color: mistyrose; margin-left: 8px; margin-top: 5px;`}><h5>{move.move.name}</h5></Badge>
                        })}
                    </div>
                </StatsDetail>
            </div>
        </>
    )
};

export default PokemonDetail