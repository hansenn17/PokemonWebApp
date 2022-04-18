/** @jsxImportSource @emotion/react */
import { usePokemons } from '../context/pokemonContext';
import { css } from '@emotion/react'
import styled from '@emotion/styled';
import openPokeball from '../asset/open-pokeball.png'
import bgPokeball from '../asset/detail-background.png'
import { useNavigate } from 'react-router-dom';
import { useImage } from '../context/pokemonContext';

const MyPokemon = () => {
     const myPokemons = usePokemons()
     const navigate = useNavigate()
     const imageState = useImage()

     const release = (nickName) => {
        const arr = myPokemons.myPokemons.filter(pokemon => pokemon.nickName !== nickName )
        myPokemons.setMyPokemons(arr)
        window.localStorage.removeItem('myPokemon')
        window.localStorage.setItem('myPokemon', JSON.stringify(arr))
     }

     const Card = styled.div`
        background-color: gold;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 5%;
        border-radius: 30px;
        box-shadow: 15px 15px 0px -5px rgb(110 108 108 / 50%);
        background-image: url(${bgPokeball});
        background-size: 130px;
        background-repeat: no-repeat;
        background-position-x: 10%;
        background-position-y: 60%;
        img{
            width: 150px;
            height: 150px;
            margin-left: 5%;
            margin-top: 5px;
            &:hover{
                cursor: pointer;
            }
        }
     `

     const ReleaseButton = styled.button`
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 15px;
        width: 100%;
        background-color: crimson;
        background-image: url(${openPokeball});
        background-position-x: 8px;
        background-position-y: 5px;
        background-repeat: no-repeat;
        background-size: 25px;
        height: 40px;
        text-align: center;
        border-radius: 30px;
        border: 0px;
        &:hover{
            cursor: pointer;
            background-color: red;
            color: white;
        }
     `

     return (
        <>
            {
                myPokemons.myPokemons.length === 0 ? 
                    <div>
                        <img src={openPokeball} alt="no image" css={css`width: 250px; height: 300px; display: block; margin-right: auto; margin-left: auto;`} />
                        <h1 css={css`text-align: center;`}>You have no pokemon!</h1>
                    </div> :
                myPokemons.myPokemons ? 
                myPokemons.myPokemons.map(pokemon => (
                    <div css={css`display: block;`}>
                        <Card key={pokemon.nickName}>
                            <div css={css`display: inline;`}>
                                <img src={pokemon.image} alt={pokemon.name} onClick={() => {
                                    imageState.getImage(pokemon.image)
                                    navigate(`/detail/${pokemon.name}`)
                                }} title="go to pokemon detail" />
                            </div>
                            <div css={css`display: inline; float: right; padding-right: 15%`}>
                                <h4 css={css`margin-bottom: 0px;`}>Name: {pokemon.name}</h4>
                                <h4 css={css`margin-bottom: 0px;`}>Nickname: {pokemon.nickName}</h4>
                                <ReleaseButton onClick={() => release(pokemon.nickName)} css={css``}>Release</ReleaseButton>
                            </div>
                        </Card>
                    </div>
                )) : <div><h1>No Data</h1></div>
         }
         </>
     )
};

export default MyPokemon