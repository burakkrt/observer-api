import React from 'react'

export interface IProps {
  mode: React.Dispatch<React.SetStateAction<'dark' | 'light'>>
}