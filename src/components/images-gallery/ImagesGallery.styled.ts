import styled from 'styled-components'

export const HeroArticle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const GalleryImage = styled.img`
  width: 300px;
  height: 200px;
  flex-shrink: 1;
  object-position: center;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://picsum.photos/200/300?grayscale');
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .info-text {
  }
`