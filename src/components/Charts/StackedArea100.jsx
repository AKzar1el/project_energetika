import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime,Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

const StackedArea100 = () => {
    const data = [
        { x: '2017', y: 4539 , y1: 5966 , y2: 4479 }, { x: '2018', y: 4260 , y1:5483, y2: 5117 }, { x: '2019', y: 4260 , y1:5526, y2: 4955 },
        { x: '2020', y: 4194 , y1:6040, y2: 5514 }, { x: '2021', y: 3720 , y1: 5411 , y2: 5292 }
        ];
    const primaryxAxis = {
    title: 'Years', valueType: 'Category', intervalType: 'Years', interval: 1,
    edgeLabelPlacement: 'Shift', labelFormat: 'y'
    };
    const primaryyAxis = { title: 'Prevzem električne energije [GWh]', labelFormat: '{value}', rangePadding: 'None', minimum: 0, maximum: 18000, interval: 2000,};

    return (
        <ChartComponent id='StackedArea100' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
            <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, DateTime,Category]}/>
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y' name='Fosilna goriva' type='StackingColumn'>
                </SeriesDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y1' name='Jedrsko gorivo' type='StackingColumn'>
                </SeriesDirective>
                <SeriesDirective dataSource={data} xName='x' yName='y2' name='Obnovljivi viri' type='StackingColumn'>
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default StackedArea100;