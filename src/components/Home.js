import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
           <Section
           title="Model S"
           description="Order Online for Touchless Delivery"
           backgroundImg="model-s.jpg"
           lBtn="CUSTOM ORDER"
           rBtn="EXISTING INVENTORY"
           />

<Section
           title="Model Y"
           description="Order Online for Touchless Delivery"
           backgroundImg="model-y.jpg"
           lBtn="CUSTOM ORDER"
           rBtn="EXISTING INVENTORY"
           />

<Section
           title="Model 3"
           description="Order Online for Touchless Delivery"
           backgroundImg="model-3.jpg"
           lBtn="CUSTOM ORDER"
           rBtn="EXISTING INVENTORY"
           />

<Section
           title="Model X"
           description="Order Online for Touchless Delivery"
           backgroundImg="model-x.jpg"
           lBtn="CUSTOM ORDER"
           rBtn="EXISTING INVENTORY"
           />

<Section
           title="Lowest Cost Solar Panels in America"
           description="Money-back guarantee"
           backgroundImg="solar-panel.jpg"
           lBtn="Order Now"
           rBtn="Learn More"
           />

           <Section
           title="Solar for New Roofs"
           description="Solar Roof Costs Less Than a New Roof"
           backgroundImg="solar-roof.jpg"
           lBtn="Order Now"
           rBtn="Learn More"
           />

<Section
           title="Accessories"
           description=""
           backgroundImg="accessories.jpg"
           lBtn="Shop Now"
           
           />
         
        </Container>
    )
}

export default Home

const Container = styled.div`
   height: 100vh;

`
