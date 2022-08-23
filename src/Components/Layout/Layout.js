import React from 'react'
import Container from '../../Container/Container'
import Header from './Header/Header';
import Products from './Products/Products';
import Footer from './Footer/Footer';
import Section from './Section/Section';

const Layout = () => {
  return (
    <Container>
        <Header/>
        <Products/>
        <Section/>
        <Footer/>
    </Container>
  )
}

export default Layout