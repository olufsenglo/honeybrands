import React from "react"
import { Banner } from "./banner/Banner"
import { Card } from "./Hero/Card"
import { Hero } from "./Hero/Hero"
import { Product } from "./product/Product"
import { TopProduct } from "./top/TopProduct"

export const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />

    </>
  )
}
