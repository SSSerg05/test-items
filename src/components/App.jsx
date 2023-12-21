import { createPortal } from "react-dom";
import { Container, ListBox, Wind } from "./App.styled";
import { Box } from "./Box";
import { useState } from "react";

export const App = () => {
  const [box, setBox] = useState(null);
  const [isView, setIsView] = useState(false);


  const arr = ['red', 'blue', 'green'];


  return (
    <Container>
    <ListBox onClick={(e) => {
            if (box === e.target) {
              setIsView(false)
              setBox(null);
              return
            }
            setBox(e.target);
            setIsView(true);
          }}>

      { arr.map( (item, index) => 
          <Box 
            key={index} 
            color={item} 
          />
      )}
    </ListBox>
    { 
      isView && createPortal(
        <Wind />
      , box
    )}
    </Container>
  );
};
