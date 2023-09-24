import styled from 'styled-components'
import { Slider } from '@mui/material'

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
  border-radius: 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  .info-text {
    color: ${({ theme }) => theme.colors.info};
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    padding: 10px;
    color: ${({ theme }) => theme.colors.info};
  }
`

export const CustomSliderMUI = styled(Slider)`
  margin: 20px 0;
  .MuiSlider-markLabel {
    color: ${({ theme }) => theme.colors.main};
  }

  .MuiSlider-rail {
    color: ${({ theme }) => theme.sliders.rail};
  }

  .MuiSlider-track {
    color: ${({ theme }) => theme.sliders.track};
  }

  .MuiSlider-thumb {
    color: ${({ theme }) => theme.sliders.thumb};
  }

  .MuiSlider-mark {
    color: ${({ theme }) => theme.sliders.mark};
  }
`