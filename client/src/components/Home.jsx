import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { Item } from "./Item";
import styled from "styled-components";
import Navbar from "./Navbar";



const Box = styled.div`
  .subNav {
    padding: 20px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 8px solid grey;
  }
  .high {
    width: 110px;
  }
  .img {
    margin: 25px 0 0 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;


const Home = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      <div className="subNav">
        <div>BMX</div>
        <div>Mountain</div>
        <div>Road</div>
        <div>Track</div>
      </div>
      <div className="high">
        <p
          className="inHigh"
          style={{
            color: "white",
            borderBottom: "2px solid grey",
            margin: "10px 0 0 10px",
            fontSize: "22px",
          }}
        >
          Highlights
        </p>
      </div>

      <div
        className="img">
        {data.map((e) => {
          return <Item key={e.id} {...e} />;
        })}
      </div>
    </Box>
  );
};

export default Home;