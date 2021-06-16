import styled from 'styled-components'
export const TableComponent = styled.table`
width: 100%;
height: 100%;
.thead{
    width: 100%;
    height: auto;
    th{
        padding: 10px 10px;
    }
}
.tbody{
    width: 100%;
    height: auto;
    border: 1px solid black;
    transition: 0.4s;
    td{
        padding: 10px 10px;
    }
}
.tbody:hover{
    background-color: #efefef;
}
tr td{
    text-align: center;
}
`