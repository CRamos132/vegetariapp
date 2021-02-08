import React from "react";
import Footer from "../components/layout/Footer/Footer";
import TopBar from "../components/layout/TopBar/TopBar";
import Card from '../components/layout/Card/Card'

const Receitas = () => {
  return (
    <>
      <TopBar title={"Teste"} content={["teste", "teste"]} />
      <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <Card />
        <Card style={{animationDelay: '0.8s'}}/>
        <Card style={{animationDelay: '1.6s'}}/>
        <Card style={{animationDelay: '2.4s'}}/>
      </div>
      <Footer />
    </>
  );
};

export default Receitas;
