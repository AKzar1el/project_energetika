import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, StackingLineSeries,LineSeries,Crosshair, DataLabel, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = ({width, height, primaryX, primaryY, data}) => {
  const { currentMode } = useStateContext();
  const crosshair = { enable: true, lineType: 'Vertical' };
  const marker = { visible: true };
  const tooltip = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };

  return (
    <ChartComponent
      id="line-chart"
      height={height}
      width={width}
      crosshair={crosshair} 
      tooltip={tooltip} 
      primaryXAxis={primaryX}
      primaryYAxis={primaryY}
      chartArea={{ border: { width: 0 } }}
      //tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingLineSeries,LineSeries, Category, DateTime, Legend, Tooltip,Crosshair]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {data.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;