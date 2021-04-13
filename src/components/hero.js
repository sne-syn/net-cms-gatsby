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
      <div className="h-96"></div>
      <h2 class="w-3/4 sm:w-auto my-auto text-white text-center text-5xl">The really empty space: do you need actors to make theatre?</h2>
      <p class="w-3/4 sm:w-auto my-auto text-white text-center text-3xl">Theatre is often framed in terms of presence – the liveness of a performance – so its omission can feel glaringly apparent. So much so that the absence itself can have a presence.</p>
      <div className="h-96"></div>
      
    </BackgroundImage>
  )
}

export default Hero;
