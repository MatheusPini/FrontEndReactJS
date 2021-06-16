import React from 'react'
import Container from '../Container'
import Card from '../Card'
import * as echarts from 'echarts'
import bac from '../Grafics/Area/Basic-area-chart.json'
import bbc from '../Grafics/Bar/Basic-bar-chart.json'
import { useEffect } from 'react'
const Body: React.FC = () => {
    // useEffect(()=>{
    //   Axios.get('http://localhost:3002/api/get').then((response) =>{
    //     setUserList(response.data)
    //     // console.log(userList)
    //   })
    // }, [userList])
    useEffect(() => {
        let charDom = document.getElementById('idGrafics')
        let charDomBar = document.getElementById('idGraficsBar')

        let myChart = (charDom) ? echarts.init(charDom) : null
        let myChartBar = (charDomBar) ? echarts.init(charDomBar) : null

        let option = bac
        option && myChart?.setOption(option);
        let optionBar = bbc
        optionBar && myChartBar?.setOption(optionBar);
        // console.log(charDom)
    }, [])
    return (
        <Container>
            <Card getAltura={250} getLargura={100} typeAltura={"px"} typeLargura={"%"}>
                <h3>Dashboard</h3>
            </Card>
            <Card getAltura={450} getLargura={800} typeAltura={"px"} typeLargura={"px"}>
                <div id="idGrafics">
                    
                </div>
            </Card>
            <Card getAltura={400} getLargura={600} typeAltura={"px"} typeLargura={"px"}>
                <div id="idGraficsBar">

                </div>
            </Card>
        </Container>
    )
}
export default Body