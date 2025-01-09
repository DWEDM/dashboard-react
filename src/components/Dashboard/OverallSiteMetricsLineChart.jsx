import { ResponsiveLine } from '@nivo/line';

const OverallSiteMetricsLineChart = () => {
  const data = [
    {
      id: 'Accounts',
      color: 'hsl(348, 70%, 50%)',
      data: [
        { x: '2019', y: 200 },
        { x: '2020', y: 800 },
        { x: '2021', y: 1500 },
        { x: '2022', y: 2500 },
        { x: '2023', y: 3200 },
        { x: '2024', y: 4000 },
      ],
    },
    {
      id: 'Posts',
      color: 'hsl(213, 70%, 50%)',
      data: [
        { x: '2019', y: 50 },
        { x: '2020', y: 500 },
        { x: '2021', y: 1200 },
        { x: '2022', y: 2200 },
        { x: '2023', y: 3500 },
        { x: '2024', y: 4500 },
      ],
    },
    {
      id: 'Reports',
      color: 'hsl(141, 70%, 50%)',
      data: [
        { x: '2019', y: 5 },
        { x: '2020', y: 50 },
        { x: '2021', y: 200 },
        { x: '2022', y: 500 },
        { x: '2023', y: 1200 },
        { x: '2024', y: 2000 },
      ],
    },
    {
      id: 'Active Accounts',
      color: 'hsl(30, 70%, 50%)',
      data: [
        { x: '2019', y: 100 },
        { x: '2020', y: 600 },
        { x: '2021', y: 1100 },
        { x: '2022', y: 2000 },
        { x: '2023', y: 2800 },
        { x: '2024', y: 3600 },
      ],
    },
  ];

  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Years',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default OverallSiteMetricsLineChart;