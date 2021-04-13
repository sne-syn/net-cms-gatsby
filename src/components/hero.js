import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
    Tag="section"
    className="headline bg-cover"
    fluid={imageData}
    backgroundColor={`#040e18`}
    >
      <h2 class="headline__header">We love… fashion fixes for the week ahead – in pictures</h2>
      <p class="headline__text">M&S team up with Ghost, Diane von Furstenberg launches homeware at H&M, plus bamboo undies and football strips</p>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </BackgroundImage>
  )
}

export default Hero;
