import React from "react";
import { MenuComponent, HeaderMenuComponent, Content } from './style'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import menu from "../../Utils/menu.json"
const Menu: React.FC = () => {
    return (
        <>
            <MenuComponent>
                <HeaderMenuComponent>
                    <Content>
                        <img src="https://arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg" alt="" />
                        <h3>Matheus</h3>
                    </Content>
                </HeaderMenuComponent>
                <ul>
                    <li><button id="buttonMenu">Menu compresso <FaBars /></button></li>
                    {menu.map((item) => {
                        return (
                            <li className="menu">
                                <h3><Link to={item.route}>{item.name}</Link></h3>
                            </li>
                        )
                    })}
                </ul>
            </MenuComponent>
        </>
    );
};
export default Menu
