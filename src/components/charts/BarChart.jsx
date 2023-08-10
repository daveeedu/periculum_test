import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const BarChart = ({ id }) => {
  useEffect(() => {
    const myBarChart = echarts.init(document.getElementById(id));
    const options = {
            xAxis: {
              data: ['SP', 'F&A', 'EE', 'E + E', 'Education']
            },
            yAxis: {},
            series: [
              {
                type: 'bar',
                data: [
                  {
                    value: 18000,
                    itemStyle: {
                      color: '#FFBC73'
                    }
                  },
                  {
                    value: 17000,
                    itemStyle: {
                      color: '#407BFF'
                    }
                  },
                  {
                    value: 13000,
                    itemStyle: {
                      color: '#FF725E'
                    }
                  },
                  {
                    value: 12000,
                    itemStyle: {
                      color: '#2A38A4'
                    }
                  },
                  {
                    value: 11000,
                    itemStyle: {
                      color: '#4CAF50'
                    }
                  }
                ],
                barWidth: '20%',
                itemStyle: {
                  barBorderRadius: 3,
                }
              }
            ]
    };
    myBarChart.setOption(options);

    return () => {
        myBarChart.dispose(); 
    };
  }, [id]);

  return (
    <div className=' w-100'>
      <div id={id} style={{ width: '100%', height: '330px' }}></div>
    </div>
  );
}

export default BarChart;
