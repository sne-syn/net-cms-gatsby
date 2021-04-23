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
    className="headline bg-cover py-5"
    fluid={imageData}
    backgroundColor={`#040e18`}
    >
      <div className="h-10 md:h-32"></div>
      <h2 className="hero-heading w-3/4 lg:w-2/4 mx-auto text-white text-center opacity-80">The really empty space: do you need actors to make theatre?</h2>
      <div className="h-64 md:h-96"></div>
      <div className="md:h-32"></div>
    </BackgroundImage>
  )
}

export default Hero;
