import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const DoughnutChart = () => {
  useEffect(() => {
    const doughnutChart = echarts.init(document.getElementById('doughnutChart'));
    const options = {
      legend: {
        orient: 'vertical',
        x: 'right',
        data: [
            {
              icon: 'circle',
              value: 100,
              name: 'The Corporates 100% '
            },
            {
              icon: 'circle',
              value: 92,
              name: 'The Micro Techs 92.95% '
            },
            {
              icon: 'circle',
              value: 85,
              name: 'The Loyalists 85.76% '
            },
            {
              icon: 'circle',
              value: 57,
              name: 'Agric Clients 57.39% '
            },
            {
              icon: 'circle',
              value: 38,
              name: 'The Retail Techs 38.03% '
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
          radius: ['40%', '70%'],
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
              value: 100,
              name: 'The Corporates 100% '
            },
            {
              icon: 'circle',
              value: 92,
              name: 'The Micro Techs 92.95% '
            },
            {
              icon: 'circle',
              value: 85,
              name: 'The Loyalists 85.76% '
            },
            {
              icon: 'circle',
              value: 57,
              name: 'Agric Clients 57.39% '
            },
            {
              icon: 'circle',
              value: 38,
              name: 'The Retail Techs 38.03% '
            }
        ],
        }
      ]
    };
    doughnutChart.setOption(options);

    return () => {
      doughnutChart.dispose(); 
    };
  }, []);

  return (
    <div className='pr-[30%] xl:-ml-[20%] lg:ml-[0%] md:-ml-[20%] -ml-[5%] z-0'>
      <div id="doughnutChart" className='md:w-[620px] ' style={{ height: '330px' }}></div>
    </div>
  );
}

export default DoughnutChart;
