import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 200px;
`

export const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    padding: 5rem 7rem;
    font-size: 1.1rem;
`

export const NavButton = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 50%;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9),
                inset 0 --3em 3em rgba(3, 3, 3, 0.5);
    transform: translate(0, -200%);
    ${(props) => props.right === true ? css` right: 5%` : css` left: 5%` }
`
//    outline: var(--light-color) solid 2px;
// set outline property

export const DotContainer = styled.div`
    display: flex;
    gap: 1rem;
    position: absolute;
    top: 65%; 
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Dot = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    ${(props) => props.active === true ? css`background-color: var(--brand-dark-color)` : css `background-color: var(--brand-color)`}
`