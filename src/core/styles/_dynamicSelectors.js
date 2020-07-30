import styled, { css } from 'styled-components'

export const ImageDynamic = styled.img`
  ${({ width, pointer, inverted, rounded, square }) => css`
    ${width && css`width: ${width}px;`}
    ${square && css`height: ${width}px`}
    ${pointer && css`cursor: pointer;`}
    ${inverted && css`filter: invert(1)`}
    ${rounded && css`border-radius: 100%;`}
  `}
`
