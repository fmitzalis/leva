import styled, { css } from '@xstyled/styled-components'

export const RangeGrid = styled.div<{ hasRange: boolean }>`
  ${props =>
    props.hasRange &&
    css`
      position: relative;
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-column-gap: col-gap;
      align-items: center;
    `}
`

export const Range = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2px;
  border-radius: 1px;
  background-color: primary;
  margin: 0 input;
`

export const Scrubber = styled.div`
  position: absolute;
  width: scrubber-width;
  height: scrubber-height;
  border-radius: input;
  background-color: accent;
  cursor: pointer;
  &:hover {
    transform: scale(1.8, 1);
  }
`
