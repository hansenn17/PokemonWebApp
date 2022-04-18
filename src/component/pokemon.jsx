/** @jsxImportSource @emotion/react */
import { useImage } from '../context/pokemonContext';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react'
import logo from '../asset/pokeball.png'
import logoText from '../asset/logo.png'

const Pokemon = ({props}) => {
    const imageState = useImage()
    const navigate = useNavigate()
    const style = css({
        width: '100px',
        height: '100px',
        paddingTop: '5px'
    })
    
    return (
        <button onClick={() => {
            window.localStorage.setItem('img', props.artwork)
            imageState.getImage(props.artwork)
            navigate(`/detail/${props.name}`)
        }} css={
            css`
                width: 90%;
                height: 150px;
                background-color: gold;
                background-image: url(${logo}), url(${props.artwork}), url(${logoText});
                background-repeat: no-repeat;
                background-size: 200px, 90px, 180px;
                background-position-x: 135%, 0, 50%;
                background-position-y: 195%, 130%, 10%;
                margin-left: 5%;
                margin-top: 10px;
                margin-bottom: 10px;
                border-radius: 30px;
                border: 0px;
                box-shadow: 15px 15px 0px -5px rgb(110 108 108 / 50%);
                &:hover{
                    cursor: pointer;
                    background-color: orange;
                }
            `
        }>
            <span><img src={props.dreamworld} alt="image" css={style} /></span>
            <h4>{props.name.toUpperCase()}</h4>
        </button>
    )
};
 
export default Pokemon;