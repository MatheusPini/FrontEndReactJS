import styled, { css } from "styled-components";

interface InputValidation{
  validate: (value: any) => string
}
export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  box-shadow: 1px 1px 31px -22px black;
  width: 100%;
  margin: auto auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const ContainerLogin = styled.div`
    width: 411px;
    max-width: 411px;
    height: 550px;
    background: #ffffff;
    box-shadow: 0px 1px 5px #c5c5c5;
    @media only screen and (max-width: 425px) {
      width: 360px;
    }
    @media only screen and (max-width: 375px){
      width: 300px;
    }
    @media only screen and(max-width: 321px){
      width: 200px;
    }
`
export const BoxHeader = styled.div`
  width: 100%;
  height: auto;
  .titleHeader{
    text-align: center;
    padding: 2em 0px;
    font-size: 3em;
    font-family: 'Roboto';
  }
`
export const BoxBody = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: center;
  padding: 3em 0;
  form{
    display: grid;
  }
  span{
    text-align: center;
  }
  .input{
    width: 200px;
    height: 2.5em;
    margin: 0.25em 0;
    font-family: 'Roboto';
    background-color: #f7f7f7;
    text-align: center;
    color: #b9b9b9;
    border: none;
  }
  .input:focus-visible{
    border: #b9b9b9!important;
  }
  .buttonForm{
    width: 200px;
    height: 3.5em;
    margin: 0.25em 0;
    font-family: 'Roboto';
    background-color: #b9b9b9;
    color: #f7f7f7;
    text-align: center;
    border: none;
    transition: 0.4s;
  }
  .buttonForm:hover{
    background-color: #efefef;
    color: #989898;
  }
`