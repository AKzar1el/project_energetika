import React from 'react';
import { LineSeries, ChartComponent, SeriesCollectionDirective, SeriesDirective, DateTime, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const StackedColumn = ({ width, height, data, id, x, y, title }) => {
  const { currentMode } = useStateContext();
  const marker = { visible: true, width: 10, height: 10,dataLabel: { visible: true, position:'Top' }, border: { width: 2, color: '#F8AB1D' } };
  return (
    <ChartComponent
      id={id}
      title={title}
      primaryXAxis={x}
      primaryYAxis={y}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white', position: 'Bottom', alignment: 'Center' }}
    >
      <Inject services={[StackingColumnSeries, LineSeries, Legend, Tooltip, DateTime, DataLabel, Category]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {data.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedColumn;