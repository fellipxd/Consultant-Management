import React from "react";
import { Bar } from "react-chartjs-2";
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

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    animation: {
    easing: "easeOutBack",
    duration: 2000,
  },
  },
};

const VerticalBar = () => (
  <Container>
    <div className="col-md-10 col-12 uk-animation-fade ">
      <div className="canvas-container">
        {/* <Title>Task Status</Title> */}
        <Bar data={data} options={options} />
      </div>
    </div>
  </Container>
);

export default VerticalBar;
