import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Item = ({ img, alt }) => {
  return (
    <Box>
      <img src={img} alt={alt} />
    </Box>
  );
};
