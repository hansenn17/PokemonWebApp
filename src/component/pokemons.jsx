/** @jsxImportSource @emotion/react */
import Pokemon from './pokemon';
import { usePokemons } from '../context/pokemonContext';
import { css } from '@emotion/react'
import styled from '@emotion/styled';

const Pokemons = () => {
    const pokemonsState = usePokemons()
    let page = window.localStorage.getItem('currPage') ? window.localStorage.getItem('currPage') : 0

    function setPage(isNext){
        if(isNext){
            page = parseInt(page) + 1
        } else {
            if(parseInt(window.localStorage.getItem('currPage')) !== 0){
                page = parseInt(page) - 1
            }
        }
        window.localStorage.setItem('currPage', page)
    }

    const NavButton = styled.button`
        width: 50px;
        height: 30px;
        border-radius: 20px;
        border: 0;
        color: white;
        &:hover{
            cursor: pointer;
        }
    `

    return (
        <>
            {console.log(pokemonsState)}
            <h5 css={css`margin-left: 6%; color: tomato`}>You have {pokemonsState.myPokemons == null ? 0 : pokemonsState.myPokemons.length} {pokemonsState.myPokemons != null ? pokemonsState.myPokemons.length <= 1 ? "pokemon" : "pokemons" : "pokemon"} </h5>
            {pokemonsState && pokemonsState.pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} props={pokemon} />
            ))}
            <div css={css`margin-left: 5%; margin-top: 5px;`}>
                <NavButton css={css`background-color: #8D6F79`} onClick={() => {setPage(false); pokemonsState.changePage(); }}>Prev</NavButton>
                <NavButton css={css`background-color: #4B8DC7`} onClick={() => {setPage(true); pokemonsState.changePage(); }}>Next</NavButton>
            </div>
            
        </>
    )
};

export default Pokemons