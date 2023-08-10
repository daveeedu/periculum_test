import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const PieChart = () => {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('pieChart'));
    const options = {
      legend: {
        orient: 'vertical',
        x: 'right',
        data: [
            {
              icon: 'circle',
              value: 461261,
              name: 'The Retail Techs 461,261 '
            },
            {
              icon: 'circle',
              value: 336602,
              name: 'Agric Clients 336,602 '
            },
            {
              icon: 'circle',
              value: 291843,
              name: 'The Micro Techs 291,843 '
            },
            {
              icon: 'circle',
              value: 23326,
              name: 'The Loyalists 23,326 '
            },
            {
              icon: 'circle',
              value: 7,
              name: 'The Corporates 7 '
            }
        ],
        top: 105,
        left: 440,

        textStyle: {
          color: 'black',
          fontSize: 12,
          fontWeight: 'bold',
        },
        itemGap: 10 
      },
      series: [
        {
          type: 'pie',
          color: [
            '#C4A2FC',
            '#15CC93',
            '#4C3EDB',
            '#FFBC73',
            '#407BFF'
          ],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          itemStyle: {
            borderWidth: 2, 
            borderColor: '#fff',
          },
          data: [
            {
              icon: 'circle',
              value: 461261,
              name: 'The Retail Techs 461,261 '
            },
            {
              icon: 'circle',
              value: 336602,
              name: 'Agric Clients 336,602 '
            },
            {
              icon: 'circle',
              value: 291843,
              name: 'The Micro Techs 291,843 '
            },
            {
              icon: 'circle',
              value: 23326,
              name: 'The Loyalists 23,326 '
            },
            {
              icon: 'circle',
              value: 7,
              name: 'The Corporates 7 '
            }
        ],
        }
      ]
    };
    myChart.setOption(options);

    return () => {
      myChart.dispose(); 
    };
  }, []);

  return (
    <div className='pr-[30%] -ml-[20%]'>
      <div id="pieChart"  style={{ width: '620px', height: '330px' }}></div>
    </div>
  );
}

export default PieChart;
