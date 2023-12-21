import styled from "@emotion/styled";

export const ColorBox = styled.div`
  width: 200px;
  height: 200px;
  outline: 4px solid ${props => props.color};
  position: relative;
`