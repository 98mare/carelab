import React from 'react'
import styled from 'styled-components'
import LandingPage from '../../common/LandingPage';
import NavigationBar from '../../common/NavigationBar';
import Footer from '../../common/Footer';
import VideoConsultOffers from './VideoConsultOffers';
import DoctorsCarousel from '../DoctorsCarousel';
import HowItWorksNew from '../../common/HowItWorksNew';


const data=  {
    title: 'Consult with best Doctors of Nepal',
    subTitle: 'Safe, Secure and Reliable',
    btnTitle: 'Consult Now',
    var1: 'Verified Docotors',
    var2: 'Digital Medication',
    img: './images/doc3.webp',
    pathName: 'http://lunivacare.ddns.net:8080/mHealth/Member/viewDocList'
  };
  const howData = [
    {
      title: 'Register',
      dis: 'Register an account using your phone number',
      img: './images/app.png'
    },
    {
      title: 'Choose Your Doctor',
      dis: 'Select best doctors',
      img: './images/mobDoc2.png'
    },
    {
      title: 'Get your Medication',
      dis: 'Delivered from trusted pharmacies and clinics',
      img: './images/app.png'
    },
    
  ]
const VideoConsultComponent = () => {
  return (
    <>
    <NavigationBar></NavigationBar>
    <MainContainer>
      <LandingPage data= {data}></LandingPage>
      <HowItWorksNew data= {howData} />
      <VideoConsultOffers></VideoConsultOffers>
      <DoctorsCarousel/>
    </MainContainer>
    <script src='http://localhost:90/carelabinventory/index_bundle.js'></script>
    <Footer></Footer>
    </>
  )
}

export default VideoConsultComponent

const MainContainer = styled.div`
  
  padding: 30px 0px 0px 0px;
  @media(max-width: 768px){
    padding: 90px 0px 0px 0px;
  }
  @media(max-width: 500px){
    padding: 70px 0px 0px 0px;
  }
`