import React from 'react'
import styled from 'styled-components'
import SuperAdminPie from '../DashboardPie/SuperAdminPie'
import SuperAdminBars from '../DashboardBar/SuperAdminBars'



const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    .bar{
        flex: 1;
    }

    @media screen and (max-width:978px){
        flex-direction: column;
    }
`





const SuperAdminCharts = () => {
    return (
        <Wrapper>
            <SuperAdminPie/>
            <SuperAdminBars/>
            {/* <div className='bar'>
                iubibibiubiu
            </div> */}
        </Wrapper>
    )
}

export default SuperAdminCharts
