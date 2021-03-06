import React from 'react'
import styled from 'styled-components'

const ClientImg = [
  {
    img:"./images/logo/nrl2.png"
  },
  {
    img:"./images/logo/crystalDi.png"
  },
  {
    img:"./images/logo/samjana.jpg"
  },
  {
    img:"./images/logo/LifeCareDi.png"
  },
]

const Client = () => {
  return (
    <ClientContainer>
    {
      ClientImg.map(e=>(
        <ClientCard>
        <img src={e.img} alt="" />
      </ClientCard>
      ))
    }
      
    </ClientContainer>
  )
}

export default Client


const ClientContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
 const ClientCard = styled.div`
    width: 25%;
    padding: 40px;
    img{
      width: 100%;
    }
 `

