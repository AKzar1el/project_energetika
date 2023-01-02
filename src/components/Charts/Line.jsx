import * as React from "react";
import { ColumnSeries, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';


const Line = ({ width, height, data, id, x, y, title }) => {

return (
<ChartComponent id={id} primaryXAxis={x} primaryYAxis={y} tooltip={{ enable: true }}>
<Inject services={[LineSeries, ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
<SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {data.map((item, index) => <SeriesDirective key={index} {...item} />)}
</SeriesCollectionDirective>
</ChartComponent>
);
}

export default Line;