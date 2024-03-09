import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Serchber from './../../Components/SerchBar/Serchber';
import Herosection from '../../Components/HerroSection/Herosection';

const Home = () => {
  return (
    <Layout>
      <Serchber/>
      <Herosection/>

    </Layout>
  )
}

export default Home