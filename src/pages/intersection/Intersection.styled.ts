import styled from 'styled-components'

export const HalfImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin: 40px 0;

  .img-container {
    width: 40%;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    transform: translateX(-150px);
    opacity: 0;
    transition: 500ms ease-in-out;
  }

  .infos {
    width: 40%;
    padding: 10px;

    h1 {
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 14px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(100%);
    transition: 500ms ease-in-out;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }

  .left-image {
    order: 0;
  }

  .right-image {
    order: 1;
  }

  .animation-right {
    transform: translateX(0px);
    opacity: 1;
  }
`

export const ImageFullContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(100%);
    transition: 500ms ease-in-out;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
`