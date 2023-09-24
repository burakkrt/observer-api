import { Container } from '../../../app/global/utilities.styled.ts'
import ImagesGallery from '../../components/images-gallery'

export default function Home() {
  return (
    <Container>
      <h1 className="container-title">Observer API</h1>
      <ImagesGallery />
    </Container>
  )
}