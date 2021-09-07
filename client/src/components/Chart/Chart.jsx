import React, { Component } from "react";
import "../darkGrayTheme.css";
import Chart from "chart.js/auto";
import { Bubble } from "react-chartjs-2";

//setup block
const data = {
  datasets: [
    {
      label: "Happy",
      data: [
        {
          x: 1.5,
          y: 90,
          r: 20,
        },
        {
          x: 10,
          y: 62,
          r: 12,
        },
      ],
      backgroundColor: ["	rgb(255, 255, 229,0.8)"],
      borderColor: ["orange"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
    {
      label: "Sad",
      data: [
        {
          x: 3,
          y: 50,
          r: 10,
        },
        {
          x: 10,
          y: 84,
          r: 15,
        },
      ],
      backgroundColor: ["rgb(230, 255, 255,0.9)"],
      borderColor: ["blue"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
    {
      label: "Angry",
      data: [
        {
          x: 14,
          y: 90,
          r: 20,
        },
        {
          x: 10,
          y: 62,
          r: 12,
        },
      ],
      backgroundColor: ["	rgb(255, 229, 229,0.8)"],
      borderColor: ["red"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
    {
      label: "Neutral",
      data: [
        {
          x: 1.5,
          y: 90,
          r: 20,
        },
        {
          x: 10,
          y: 62,
          r: 12,
        },
      ],
      backgroundColor: ["	rgb(255, 255, 255,0.8)"],
      borderColor: ["grey"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
    {
      label: "Surprise",
      data: [
        {
          x: 14,
          y: 60,
          r: 14,
        },
        {
          x: 10,
          y: 62,
          r: 12,
        },
      ],
      backgroundColor: ["	rgb(255, 229, 249,0.8)"],
      borderColor: ["pink"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
    {
      label: "Fear",
      data: [
        {
          x: 1.5,
          y: 90,
          r: 20,
        },
        {
          x: 10,
          y: 62,
          r: 12,
        },
      ],
      backgroundColor: ["	rgb(229, 229, 255,0.8)"],
      borderColor: ["purple"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
    {
      label: "Disgust",
      data: [
        {
          x: 1.5,
          y: 90,
          r: 20,
        },
        {
          x: 10,
          y: 62,
          r: 12,
        },
      ],
      backgroundColor: ["	rgb(229, 255, 236,0.8)"],
      borderColor: ["lime"],
      borderWidth: 1,
      clip: { left: false, top: false, right: false, bottom: false },
    },
  ],
};

const options = {
  legend: {
    labels: {
      // This more specific font property overrides the global property
      fontColor: "yellow",
    },
  },

  layout: {
    padding: { right: 20 },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "time in seconds",
      },
      min: 1,
      max: 30,

      // look into type time in future leave like this for now for demo so dont have to change data types for now you need an adapter for the api to read timestamps too
      // type: 'time',
      // time: {
      //     unit: 'second'
      // }
    },
    y: {
      title: {
        display: true,

        text: "% of emotion",
      },
      min: 10,
      max: 100,
    },
  },
};
// };

//  render block
const renderChart = () => (
  <>
    <div className="chartContainer">
      <Bubble data={data} options={options} />
    </div>
  </>
);

export default renderChart;
