import React from 'react'

import PropTypes from 'prop-types'

import './stats.css'

const Stats = (props) => {
  return (
    <div className="stats-stats">
      <div className="stats-stat">
        <svg viewBox="0 0 1152 1024" className="stats-icon">
          <path d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
          <path d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"></path>
        </svg>
        <span className="stats-text">{props.text}</span>
        <span className="stats-text1">{props.text1}</span>
        <h1 className="stats-text2">{props.heading}</h1>
      </div>
      <div className="stats-stat1">
        <svg viewBox="0 0 1024 1024" className="stats-icon3">
          <path d="M598 512h234l-234-234v234zM640 214l256 256v426q0 34-26 60t-60 26h-470q-34 0-59-26t-25-60v-598q0-34 26-59t60-25h298zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
        </svg>
        <span className="stats-text3">{props.text2}</span>
        <span className="stats-text4">{props.text3}</span>
        <h1 className="stats-text5">{props.heading1}</h1>
      </div>
      <div className="stats-stat2">
        <svg viewBox="0 0 1024 1024" className="stats-icon5">
          <path d="M810 640v-86h-84v86h84zM810 810v-84h-84v84h84zM554 298v-84h-84v84h84zM554 470v-86h-84v86h84zM554 640v-86h-84v86h84zM554 810v-84h-84v84h84zM298 470v-86h-84v86h84zM298 640v-86h-84v86h84zM298 810v-84h-84v84h84zM640 470h256v426h-768v-598h256v-84l128-128 128 128v256z"></path>
        </svg>
        <span className="stats-text6">{props.text4}</span>
        <span className="stats-text7">{props.text5}</span>
        <h1 className="stats-text8">{props.heading2}</h1>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  heading1: '258+',
  text4: 'Cities',
  text2: 'Projects',
  text5: '_____',
  heading2: '20+',
  text1: '_____',
  text3: '_____',
  text: 'Clients',
  heading: '50+',
}

Stats.propTypes = {
  heading1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  heading2: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Stats
