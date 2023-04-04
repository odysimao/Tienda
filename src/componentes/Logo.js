import React from "react"
import './css/Logo.css'
import logo1 from '../imagenes/harmony-house-logo.png'
import logo2 from '../imagenes/harmony-house.png'

function Logo ({ id }) {
  return (
      <img
      className={(id == 'logo-1') ? "logo-harmony" : 'word-harmony'}
      src={(id == "logo-1") ? logo1 : logo2 }
      />
  )
}

export default Logo;