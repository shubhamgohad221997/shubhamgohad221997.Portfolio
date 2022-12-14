import React, { Component } from "react";
import ColorContainer from "./ColorContainer/ColorContainer";
import HeaderContainer from "./HeaderContainer/HeaderContainer";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import SkillContainer from "./SkillContainer/SkillContainer";
import AboutContainer from "./AboutContainer/AboutContainer";
import ResumeContainer from "./ResumeContainer/ResumeContainer";
import ContactContainer from "./ContactContainer/ContactContainer";
import FooterContainer from "./FooterContainer/FooterContainer";
import CopyrightContainer from "./CopyrightContainer/CopyrightContainer";
import HeaderInfoContainer from "./HeaderInfoContainer/HeaderInfoContainer";

export default class Main extends Component {
  render() {
    return (
      <>
        <ColorContainer />
        <HeaderContainer />
       
        <main>
        <HeaderInfoContainer />
          <AboutContainer />
          <SkillContainer />
          <PortfolioContainer />
          <ResumeContainer />
          <ContactContainer />
        </main>
        <FooterContainer />
        <CopyrightContainer />
      </>
    );
  }
}
