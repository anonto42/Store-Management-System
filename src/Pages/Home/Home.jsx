import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Serchber from './../../Components/SerchBar/Serchber';
import Herosection from '../../Components/HerroSection/Herosection';
import HeroDown from '../../Components/Downer of the hero/HeroDown';

const Home = () => {

  return (
    <Layout>
      <Serchber/>
      <Herosection/>
      <HeroDown/>
    </Layout>
  )
}

export default Home