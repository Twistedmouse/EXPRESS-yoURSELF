import React, {Component} from "react";
import "../darkGrayTheme.css";
import {Bubble, Pie} from 'react-chartjs-2';

class Chart extends Component{
    // we get our data stored as a state in our constructor
    constructor(props){
      super(props);
      this.state = {
        chartData:props.chartData
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

  
          {/* <Pie
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
          /> */}
        </div>
      )
    }
  }
  
  export default Chart;

