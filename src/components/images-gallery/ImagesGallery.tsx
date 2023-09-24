import * as Style from './ImagesGallery.styled.ts'
import { useEffect, useState } from 'react'
import { Box, Slider, Typography } from '@mui/material'

export default function ImagesGallery() {
  const [imageCount, setImageCount] = useState(1)
  const [imageSize, setImageSize] = useState(250)

  useEffect(() => {
    const galleryLayout = document.getElementById('hero-article') as HTMLElement
    const resizeObserver = new ResizeObserver(([entry]) => {
      document.querySelectorAll('#hero-article img').forEach((img, index) => {
        const imageElement = img as HTMLElement
        imageElement.style.width = `${imageSize}px`
        if (index < Math.floor(entry.contentRect.width / imageSize)) {
          imageElement.style.display = 'block'
        } else imageElement.style.display = 'none'
      })
      setImageCount(Math.floor(entry.contentRect.width / imageSize))
      console.log(Math.floor(entry.contentRect.width / imageSize))
    })

    resizeObserver.observe(galleryLayout)
  }, [imageSize])

  const marks = [
    {
      value: 100,
      label: '100px',
    },
    {
      value: 150,
      label: '150px',
    },
    {
      value: 200,
      label: '200px',
    },
    {
      value: 250,
      label: '250px',
    },
    {
      value: 300,
      label: '300px',
    },
    {
      value: 350,
      label: '350px',
    },
    {
      value: 400,
      label: '400px',
    },
  ]

  function valuetext(value: number) {
    return `${value}px`
  }

  const handleChangeImageSize = (e: any) => {
    setImageSize(e.target.value)
  }

  return (
    <>
      <Style.HeroArticle id="hero-article">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
          (nbr: number) => (
            <Style.GalleryImage key={nbr} />
          )
        )}
      </Style.HeroArticle>
      <Style.InfoContainer>
        <p>
          Şuanda ekrana sığan resim adeti : <strong>{imageCount}</strong>
        </p>
        <Typography gutterBottom>
          Resim Boyutu: <strong>{imageSize}px</strong>
        </Typography>
        <Box sx={{ width: 400 }}>
          <Slider
            aria-label="Always visible"
            value={imageSize}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            valueLabelDisplay="off"
            min={100}
            max={400}
            onChange={handleChangeImageSize}
          />
        </Box>
        <span className="info-text">
          İlgili alana belirli adet element sığdırmayı amaçlar. Sonuçları görmek
          için resim boyutlarını veya tarayıcı boyutunu küçültün & büyültün.
        </span>
      </Style.InfoContainer>
    </>
  )
}