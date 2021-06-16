import React from 'react'
import {TableComponent} from './style'
const Table: React.FC = () => {
    return (
        <>
            <TableComponent>
                <tr className="thead">
                    <th>ID</th>
                    <th>E-mail</th>
                    <th>Data de cadastro</th>
                    <th>Data de alteração</th>
                </tr>
                <tr className="tbody">
                    <td>1</td>
                    <td>matheus1995pini@hotmail.com</td>
                    <td>20/05/2021</td>
                    <td>16/06/2021</td>
                </tr>
                <tr className="tbody">
                    <td>1</td>
                    <td>matheus1995pini@hotmail.com</td>
                    <td>20/05/2021</td>
                    <td>16/06/2021</td>
                </tr>
                <tr className="tbody">
                    <td>1</td>
                    <td>matheus1995pini@hotmail.com</td>
                    <td>20/05/2021</td>
                    <td>16/06/2021</td>
                </tr>
                <tr className="tbody">
                    <td>1</td>
                    <td>matheus1995pini@hotmail.com</td>
                    <td>20/05/2021</td>
                    <td>16/06/2021</td>
                </tr>
            </TableComponent>
        </>
    )
}
export default Table