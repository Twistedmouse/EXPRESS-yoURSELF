import React, {Component} from "react";
import "../darkGrayTheme.css";
import {Bubble, Pie} from 'react-chartjs-2';

class Chart extends Component{
    // we get our data stored as a state in our constructor
    constructor(props){
      super(props);
      this.state = {
        chartData:{
            datasets:[
              {
                label:'Happy',
                data:[
                  {
                    x: 1.5, y:90, r:20 
                },
                {
                    x: 10, y:62, r: 12
                }
                ],
                backgroundColor:[
                  '	rgb(255, 255, 229,0.8)',
                ],
                borderColor: [
                  'orange',
              ],
              borderWidth: 1,
          clip: {left: false, top: false, right: false, bottom: false}
      
              },

            ]
          }
      }
    }
  
    static defaultProps = {
      displayTitle:true,
      displayLegend: true,
      legendPosition:'right',
      location:'City'
    }
  
    render(){
      return (
          
        <div className="chart">
          <Bubble
            type={Chart.ChartType}
            data={this.state.chartData}
            width={5}
	          height={5}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            
            }}
          />

  
          <Pie
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
      )
    }
  }
  
  export default Chart;
