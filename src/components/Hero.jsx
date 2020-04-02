import { graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import heroVideo from "../images/pexelshero.mp4"

export const Hero = props => {
  const { description, image, tag, title } = props

  return (
    <div className="w-full -mt-1 rounded-md h-full overflow-hidden">
      <div className="flex relative bg-blue-400">
        {/*<Img
          alt={title}
          className="grayscale-1 blend-multiply"
          fadeIn={false}
          fixed={[
            { ...image.childImageSharp.desktop, media: `(min-width: 768px)` },
            { ...image.childImageSharp.mobile, media: `(max-width: 767px)` },
          ]}
        />*/}
        <video autoPlay loop>
        <source src={heroVideo} type="video/mp4" />
        </video>
        <span className="absolute bottom-0 right-0 bg-blue-700 text-sm text-white font-medium px-3 py-1 rounded-lg m-8 tracking-wide">
          {tag}
        </span>

        <div className="absolute mt-12 lg:mt-24 p-5 lg:p-6 text-white">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <h3 className="text-2xl font-medium md:w-2/3">{description}</h3>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    childImageSharp: PropTypes.shape({
      desktop: PropTypes.object.isRequired,
      mobile: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment HeroImageFragment on File {
    url: publicURL
    childImageSharp {
      mobile: fixed(width: 768, height: 240, quality: 80, cropFocus: CENTER) {
        ...GatsbyImageSharpFixed_withWebp
      }
      desktop: fixed(width: 1248, height: 280, quality: 85, cropFocus: SOUTH) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`
