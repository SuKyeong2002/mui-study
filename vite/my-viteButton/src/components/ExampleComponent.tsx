import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const ExampleComponent: React.FC = () => (
  <Container>
    <h1>Hello, Vite + React + TypeScript!</h1>
    <Button variant="contained" color="primary">
      MUI Button
    </Button>
  </Container>
);

export default ExampleComponent;
