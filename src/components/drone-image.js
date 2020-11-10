import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const DroneImage = () => {
  const data = useStaticQuery(graphql`
    query {
      drone: file(relativePath: { eq: "drone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 250, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.drone.childImageSharp.fluid}
      imgStyle={{ borderRadius: "20%" }}
    />
  );
};

export default DroneImage;
