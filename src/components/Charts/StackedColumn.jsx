import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, DateTime, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const StackedColumn = ({ width, height, data, id, x, y }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id={id}
      title="Trend čez 1990 - 2021"
      primaryXAxis={x}
      primaryYAxis={y}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DateTime, DataLabel, Category]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {data.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedColumn;