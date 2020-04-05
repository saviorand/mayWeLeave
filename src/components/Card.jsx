import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
// import { Feature } from "."
import DataPoint from "./DataPoint.jsx"
import DataConditional from "./DataConditional.jsx"

export const Card = props => {
  const {
    country,
    image: {
      localFiles: [cover],
    },
    name,
    navigation,
    slug,
    summary,
  } = props



  return (
    <div className="h-12 md:h-24 rounded-md p-1">

      <Link to={`/${slug}`} state={{ navigation }} asModal className="">

        <div className="flex w-full h-12 md:h-24 overflow-hidden items-center shadow-sm hover:bg-blue-100">
        <div className="flex justify-start items-center w-2/5 md:w-1/5  rounded-l-md  border-solid border-gray-300 border-t-2 border-b-2 border-l-2 h-full">
          <div className="w-8 mx-4">
          <Img fluid={cover.childImageSharp.fluid} alt={name} />
          </div>

          <h1 className="text-sm md:text-md lg:text-lg text-blue-500 font-bold leading-snug">
            {name}
          </h1>
          </div>

          <div className="flex h-full w-full">
          
        <DataPoint text={summary}/>
        <DataConditional text={country}/>

        </div>

        </div>

      </Link>

    </div>
  )
}

Card.propTypes = {
  country: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFiles: PropTypes.array,
  }).isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    current: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

Card.defaultProps = {
  navigation: {},
}

export const query = graphql`
  fragment CardImageFragment on AirtableField {
    localFiles {
      childImageSharp {
        fluid(maxWidth: 150, maxHeight: 150) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
