import { ResponsiveLine } from '@nivo/line';

const AccountMonitoringLineChart = () => {
  const data = [
    {
      id: 'Created',
      color: 'hsl(348, 70%, 50%)',
      data: [
        { x: 'Monday', y: 5 },
        { x: 'Tuesday', y: 8 },
        { x: 'Wednesday', y: 3 },
        { x: 'Thursday', y: 7 },
        { x: 'Friday', y: 10 },
        { x: 'Saturday', y: 6 },
        { x: 'Sunday', y: 4 },
      ],
    },
    {
      id: 'Suspended',
      color: 'hsl(213, 70%, 50%)',
      data: [
        { x: 'Monday', y: 1 },
        { x: 'Tuesday', y: 2 },
        { x: 'Wednesday', y: 0 },
        { x: 'Thursday', y: 1 },
        { x: 'Friday', y: 3 },
        { x: 'Saturday', y: 2 },
        { x: 'Sunday', y: 1 },
      ],
    },
    {
      id: 'Online',
      color: 'hsl(141, 70%, 50%)',
      data: [
        { x: 'Monday', y: 50 },
        { x: 'Tuesday', y: 60 },
        { x: 'Wednesday', y: 45 },
        { x: 'Thursday', y: 70 },
        { x: 'Friday', y: 80 },
        { x: 'Saturday', y: 75 },
        { x: 'Sunday', y: 65 },
      ],
    },
    {
      id: 'Dead Accounts',
      color: 'hsl(30, 70%, 50%)',
      data: [
        { x: 'Monday', y: 10 },
        { x: 'Tuesday', y: 15 },
        { x: 'Wednesday', y: 20 },
        { x: 'Thursday', y: 18 },
        { x: 'Friday', y: 22 },
        { x: 'Saturday', y: 25 },
        { x: 'Sunday', y: 30 },
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
          legend: 'Days of the Week',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number of Accounts',
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

export default AccountMonitoringLineChart;