import { styled } from 'src/styles'

const Button = styled('button', {
  backgroundColor: '$green500',
})

export default function Home() {
  return (
    <div>
      <h1>Hello, world</h1>
      <Button>Oi</Button>
    </div>
  )
}
