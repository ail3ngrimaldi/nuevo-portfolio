import styled from 'styled-components';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '90%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
    `

export const CloseIcon = styled(AiOutlineClose)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #C084FC;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
`

export const Bars = styled(HiMenuAlt2)`
  display: none;
  color: #fff;
  @media screen and (max-width: 48rem) {
    display: block;
    position: absolute;
    top: 0;
    left: 10%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;