import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, AxesDirective, AxisDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';

const MultiplePanes = () => {
const data = [
{ x: '2017', y: 12001, y1:14468, y2: 82.9 }, { x: '2018', y: 12262, y1: 14501, y2: 84.6 }, { x: '2019', y: 11978, y1:14341, y2: 83.5 },
{ x: '2020', y: 12727, y1:13744, y2: 92.6 }, { x: '2021', y: 11717, y1:14142, y2: 82.9 }
];
const primaryxAxis = { valueType: 'Category', interval: 1 };
const primaryyAxis = {
title: 'Proizvodnja/poraba električne energije [GWh]', minimum: 0, maximum: 18000, interval: 2000,
lineStyle: { width: 0 }, labelFormat: '{value}'
};
const lines = { width: 0 };
const marker = { visible: true, width: 10, height: 10,dataLabel: { visible: true, position:'Top' }, border: { width: 2, color: '#F8AB1D' } };
const palette = ["#51BFDA", "#8C8C8C",];
return (
  <ChartComponent id='multiplePanes' primaryXAxis={primaryxAxis} palettes={palette} primaryYAxis={primaryyAxis} selectionMode='Series' tooltip={{ enable: true }}>
      <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <AxesDirective>
          <AxisDirective rowIndex={1} name='yAxis1' opposedPosition={true} title='Pokritost porabe z domačo proizvodnjo [%]' labelFormat='{value}%' minimum={0} maximum={100} interval={10} majorGridLines={lines} lineStyle={lines}>
          </AxisDirective>
      </AxesDirective>
      <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='x' yName='y' name='Proizvodnja iz domačih virov' type='Column' marker={marker}>
          </SeriesDirective>
          <SeriesDirective dataSource={data} xName='x' yName='y1' name='Poraba električne energije' type='Column' marker={marker}>
          </SeriesDirective>
          <SeriesDirective dataSource={data} xName='x' yName='y2' name='Pokritost porabe z domačo proizvodnjo' type='Line' width={3} dashArray='7' marker={marker} yAxisName='yAxis1'>
          </SeriesDirective>
          
      </SeriesCollectionDirective>
  </ChartComponent>
)
};

export default MultiplePanes;