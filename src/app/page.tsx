'use client'
import Image from 'next/image'
import { HomeContainer, Product } from './style'

import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={img1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={img2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
