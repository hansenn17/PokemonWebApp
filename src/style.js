import styled from '@emotion/styled';
import logo from './asset/pokeball-color.png'

export const AppWrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    font-family: 'Quicksand', sans-serif;
    background-color: papayawhip;
    h4{
        font-family: 'Quicksand', sans-serif;
        font-weight: bolder;
    }
    font-weight: bold;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    background-color: lightseagreen;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const CatchButton = styled.button`
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    text-align: center;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 50px;
    border-radius: 30px;
    background-color: lightgreen;
    border: 0px;
    &:hover{
        cursor: pointer;
        background-color: lawngreen;
        color: white;
    }
`

export const Badge = styled.div`
    width: 135px;
    height: 30px;
    border: 0px solid;
    border-radius: 30px;
    text-align: center;
    display: inline-block;
    padding-top: 5px;
    h5{
        display: inline;
    }
    img{
        margin-top: 2px;
        margin-left: 15px;
        float: left;
    }
`

export const ImageDetail = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 250px;
    height: 250px;
`

export const StatsDetail = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: 10px;
`