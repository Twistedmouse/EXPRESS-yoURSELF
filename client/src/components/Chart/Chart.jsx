import React, {Component} from "react";
import "../darkGrayTheme.css";
import Chart from 'chart.js/auto';
import {Bubble} from 'react-chartjs-2';



        //setup block
        const data = {
          datasets: [{
              label: 'Happy' ,
              data: [
                  {
                      x: 1.5, y:90, r:20 
                  },
                  {
                      x: 10, y:62, r: 12
                  }
              ],
              backgroundColor: [
                  '	rgb(255, 255, 229,0.8)',
              ],
              borderColor: [
                  'orange',
              ],
              borderWidth: 1,
              clip: {left: false, top: false, right: false, bottom: false}
          },
          {
              label: 'Sad' ,
              data: [
                  {
                      x: 3, y:50, r:10, 
                  },
                  {
                      x: 10, y:84, r: 15,
                  }
              ],
              backgroundColor: [
                      'rgb(230, 255, 255,0.8)'
              ],
              borderColor: [
                  'blue'
              ],
              borderWidth: 1,
              clip: {left: false, top: false, right: false, bottom: false}
          }
          
      ]}; 

    

        // config block
        const config = {
          type: 'bubble',
          data,
          options: {
              layout:{
                  
                  padding: { right: 20}
              },
              scales: {
                  x:{
                     title: {
                         display: true, 
                         text: 'time in seconds'
                      },
                      min: 1, 
                      max: 30,

                           // look into type time in future leave like this for now for demo so dont have to change data types for now
                     
                      // type: 'time',
                      // time: {      
                      //     unit: 'second'
                      // }

                  },
                  y: {
                  
                      title: {
                         display: true, 
                         text: '% of emotion'
                      },
                      min: 10, 
                      max: 100,
                     
                  }
              }
          }
      };


        //  render block
        const renderChart = () => (
          <>
    
    <div class="chartContainer">
        <canvas id="myChart"></canvas>
        <Bubble data={data} options={config} />
    </div>
  </>
        )


export default renderChart;