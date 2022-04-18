/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import logo from '../asset/logo.svg'
import { css } from '@emotion/react'
import styled from '@emotion/styled';

const Navbar = () => {
    const style = css({
        width: '150px',
        height: '50px',
        paddingTop: '5px',
        paddingLeft: '5px'
    })
    const ulStyle = css({
        listStyle: 'none',
        float: 'right',
        marginTop: '20px'
    })
    const Li = styled.li`
        display: inline;
        padding-right: 20px;
        a{
            text-decoration: none;
            color: #FFCB05;
            &:hover{
                color: lime;
                padding-bottom: 5px;
                border-bottom: 2.5px solid lime;
            }
        }
    `
    return (
        <div>
            <nav>
                <Link to="/"><img src={logo} alt="not found" css={style} /></Link>
                <ul css={ulStyle}>
                    <Li>
                        <Link to="/">POKEDEX</Link>
                    </Li>
                    <Li>
                        <Link to="/my-pokemon">MY POKEMON</Link>
                    </Li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar