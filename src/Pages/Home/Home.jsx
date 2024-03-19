import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Serchber from './../../Components/SerchBar/Serchber';
import Herosection from '../../Components/HerroSection/Herosection';
import TorSellers from '../../Components/TopsellersCart/TorSellers';

const Home = () => {

  return (
    <Layout>
      <Serchber/>
      <Herosection/>
      <TorSellers/>
    </Layout>
  )
}

export default Home