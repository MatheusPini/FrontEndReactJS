import styled from 'styled-components'


export const MenuComponent = styled.nav`
    font-family: 'Roboto';
    background-color: #ffffff;
    box-shadow: 1px 1px 31px -22px black;
    z-index: 1;
    height: 100%;
    width: 15rem;
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    ul{
        width: 100%;
        height: auto;
        list-style: none;
    }
    ul li{
        padding: 0.4rem 0.4em;
    }
    ul li.menu{
        padding: 0px;
    }
    ul hr{
        padding: 0 0;
        color: #98989830;
        margin: 9px 18px;
    }
    ul li h3{
        padding: 10px 0;
        color: #989898;
        transition: 0.4s;
        padding-left: 0.4rem;
        font-size: 13px;
        
    }
    ul li h3 a{
        text-decoration: none;
        color: #989898;
    }
    
    ul li h3:hover{
        background-color: #efefef;
    }
    #buttonMenu{
        width: 100%;
        height: 100%;
        background-color: white;
        color: #989898;
        border: none;
        padding: 10px 0;
        transition: 0.4s;
        font-size: 13px;
    }
    #buttonMenu:hover{
        background-color: #dedbdb;
        color: white;
    }
`
export const HeaderMenuComponent = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    h3{
        margin-left: 1rem;
    }
`
export const Content = styled.div`
    flex-direction: row;
    display: flex;
    padding: 0 auto;
    flex-wrap: wrap;
    align-items: center;
`
