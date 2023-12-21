import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1024;
  margin: 0 auto;
  padding: 40px 15px;
`

export const ListBox = styled.div`
  position: relative;;
  display: flex;
  gap: 20px;
`

export const Wind = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translateY(50%);
  width: 300px;
  height: 100px;
  background-color: gray;
  z-index: 20;
`