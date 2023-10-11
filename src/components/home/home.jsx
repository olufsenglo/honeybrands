import React from "react"
import { Card } from "./Hero/Card"
import { Hero } from "./Hero/Hero"
import { Product } from "./product/Product"

export const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />

    </>
  )
}
