import React from "react";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  margin-right: 10px;
  align-items: center;
  padding: 10px;
  justify-content: center;
  background-color: #fff;
  @media screen and (max-width: 978px) {
    margin-right: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  }
`;

const Title = styled.h2``;

const data = {
  labels: ["Completed", "Pending", "Cancelled"],
  datasets: [
    {
      label: "",
      data: [56, 31, 18],
      backgroundColor: [
        "rgba(38, 195, 73, 1)",
        "rgba(152, 161, 179, 1)",
        "rgba(255, 10, 10, 1)",
      ],
      borderColor: [
        "rgba(38, 195, 73, 1)",
        "rgba(152, 161, 179, 1)",
        "rgba(255, 10, 10, 1)",
      ],
      borderWidth: 3,
    },
  ],
};
const options = {
  legend: {
    display: true,
    position: "bottom",
    align: "end",

    labels: {
      fontColor: "#002c85",
      fontSize: 26,
      fontFamily: "Raleway",
      fontWeight: "bold",
      position: "bottom",
    },
  },

  animation: {
    easing: "easeOutBack",
    duration: 2000,
  },
  title: {
    display: true,
    text: "Task Status",
    position: "bottom",
    fontColor: "#002c85",
    fontFamily: "Raleway",
  },

  tooltips: {
    titleFontFamily: "Raleway",
    mode: "point",
    bodyFontFamily: "Raleway",
  },

  maintainAspectRatio: true,
};

const PieChart = () => (
  <Container>
    <div className="col-md-8 col-12 uk-animation-fade ">
      <Title>Task Status</Title>
      <Pie data={data} options={options} />
    </div>
  </Container>
);

export default PieChart;
