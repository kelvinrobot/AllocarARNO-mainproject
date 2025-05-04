import React from 'react'
import Container from '../../components/container/Container'
import Navbar from '../../components/navbar/Navbar'
import Heroscetion from '../../components/heroSection/Heroscetion'
import Features from '../../components/features/Features'
import FAQ from '../../components/Faq/Faq'

const Home = () => {
    return (
        <div className="app-body">
            <Container>
                <Navbar />
                <Heroscetion />
            </Container>
            <Features />
            <FAQ />
        </div>
    )
}

export default Home