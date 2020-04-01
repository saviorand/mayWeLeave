import PropTypes from "prop-types"
import React from "react"
import { Card } from "."

export const Cards = props => {
  const { nodes } = props

  return (
    <div className="container pt-6 overflow-hidden">
      <div className="-mx-4 xl:-mx-6">
        {nodes.map((item, i) => (
          <div
            className="py-1"
            key={`card_${item.data.slug}`}
          >
            <Card
              {...item.data}
              navigation={{
                current: i,
                items: nodes.map(item => `/${item.data.slug}`),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Cards.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
