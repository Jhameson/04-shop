'use client'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from './style'
import 'keen-slider/keen-slider.min.css'

import { stripe } from 'src/lib/stripe'
import Stripe from 'stripe'
import { useEffect, useState } from 'react'

interface HomeProps {
  id: string
  name: string
  imageUrl: string
  price: number
}

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  const [products, setProducts] = useState<HomeProps[]>([])

  useEffect(() => {
    fetchAndUseProducts()
  }, [])

  async function fetchAndUseProducts() {
    try {
      const response = await fetchProducts()
      setProducts(response.products)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
    }
  }

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products?.map((product) => {
        return (
          <Product key={product.id} className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

const fetchProducts = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })
  return {
    products,
  }
}
