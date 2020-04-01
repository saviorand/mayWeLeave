import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
import { Feature } from "."
import DataPoint from "./DataPoint.jsx"

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
    <div className="shadow-sm rounded-md hover:bg-blue-100">

      <Link to={`/${slug}`} state={{ navigation }} asModal className="">

        <div className="flex flex-wrap w-full overflow-hidden items-center">
        <div className="flex flex-wrap w-1/5">
          <div className="w-8 mx-4">
          <Img fluid={cover.childImageSharp.fluid} alt={name} />
          </div>

          <h1 className="text-2xl text-blue-500 font-bold leading-snug">
            {name}
          </h1>
          </div>

          <div className="flex flex-wrap justify-between">

        <DataPoint text={country}/>
        <DataPoint text={summary}/>

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
