// import React from 'react'

const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:2,  // .00 point ke baad bus 2 zero chahiye

}).format(price/100) // this conversion is automaticaly done by js
}

export default FormatPrice  