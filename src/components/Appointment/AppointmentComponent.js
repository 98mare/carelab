import React from 'react'
import styled from 'styled-components'
import LandingPage from '../../common/LandingPage'
import NavigationBar from '../../common/NavigationBar'
import Footer from '../../common/Footer'
import ClinicAppointment from './ClinicAppointment'
import DoctorsAppointment from './DoctorsAppointment'
import HowItWorks from '../../common/HowItWorks'
import DoctorsCarousel from '../DoctorsCarousel'
import HowItWorksNew from '../../common/HowItWorksNew'
import NavBar from '../../common/NavBar'

const data=  {
  title: 'You can book your appointment Online',
  subTitle: 'We will try to get you perfect appointment schedule',
  btnTitle: 'book Now',
  var1: 'Certified Doctors and Clinics',
  var2: 'Online Reports',
  img: './images/user.png',
  pathName: 'http://lunivacare.ddns.net:8080/mHealth/Member/viewDocList'
};
const howData = [
  {
    title: 'Register',
    dis: 'Register an account using your phone number',
    img: './images/app.png'
  },
  {
    title: 'Book an appointment',
    dis: 'Lets make your appointment with doctors and clinics',
    img: './images/mobDoc2.png'
  },
  {
    title: 'Reports',
    dis: 'Repots can be Obtained via Online',
    img: './images/app.png'
  },
]



const AppointmentComponent = () => {
  return (
    <>
      {/* <NavBar /> */}
      <NavigationBar></NavigationBar>
      <Container>
        <LandingPage data={data}></LandingPage>
        {/* <HowItWorks></HowItWorks> */}
        <HowItWorksNew data={howData}></HowItWorksNew>
        <DoctorsAppointment></DoctorsAppointment>
        <ClinicAppointment></ClinicAppointment>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default AppointmentComponent

const Container = styled.div`
  padding: 20px 0px 0px 0px;
  @media(max-width: 768px){
    padding: 100px 40px;
  }
  @media(max-width: 500px){
    padding: 120px 20px;
  }
`