export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];



export const LinePrimaryXAxis = {
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  intervalType: 'Years',
  title: 'Leta',
  interval:2,
  valueType: 'DateTime',
  labelFormat: 'y',
};

export const LinePrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 125,
  interval: 25,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "Indeks, 1990=100",
  labelFormat: '{value}',
};

export const LineOVEYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 30,
  interval: 5,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "%",
  labelFormat: '{value}',
};

export const lineChartData = [
  [
    { x: '2020', y: 85.1},
    { x: '2019.', y: 92.0 },
    { x: '2018', y: 94.7 },
    { x: '2017', y: 95.5 },
    { x: '2016', y: 95.0 },
    { x: '2015.', y: 90.5 },
    { x: '2014', y: 89.5 },
    { x: '2013', y: 98.3 },
    { x: '2012', y: 101.9 },
    { x: '2011.', y: 105.3 },
    { x: '2010', y: 105.7 },
    { x: '2009', y: 104.5 },
    { x: '2008', y: 116.2 },
    { x: '2007', y: 112.3 },
    { x: '2006', y: 111.2 },
    { x: '2005', y: 110.1 },
    { x: '2004', y: 108.6 },
    { x: '2003', y: 106.6 },
    { x: '2002', y: 108.4 },
    { x: '2001', y: 106.9 },
    { x: '2000', y: 100.0 },
    { x: '1999', y: 101.2 },
    { x: '1998', y: 104.4 },
    { x: '1997', y: 106.6 },
    { x: '1996', y: 103.7 },
    { x: '1995', y:100.5},
    { x: '1994', y:96.3},
    { x: '1993', y:94.0},
    { x: '1992', y:92.6},
    { x: '1991', y:92.6},
    { x: '1990', y:100.0},
  ],
  [
    { x: '2021', y1: 15048.057 },
    { x: '2020', y1: 16289.674 },
    { x: '2019.', y1: 15224.353 },
    { x: '2018', y1: 15441.970 },
    { x: '2017', y1: 15396.875 },
    { x: '2016', y1: 15546 },
    { x: '2015.', y1: 14187 },
    { x: '2014', y1: 16486 },
    { x: '2013', y1: 15117 },
    { x: '2012', y1: 14705 },
    { x: '2011.', y1: 15001 },
    { x: '2010', y1: 15410 },
    { x: '2009', y1: 15375 },
    { x: '2008', y1: 15357 },
    { x: '2007', y1: 14043 },
    { x: '2006', y1: 14117 },
    { x: '2005', y1: 14150 },
    { x: '2004', y1: 14309 },
    { x: '2003', y1: 12895 },
    { x: '2002', y1: 13693 },
    { x: '2001', y1: 13592 },
    { x: '2000', y1: 12795 },
    { x: '1999', y1: 12456 },
    { x: '1998', y1: 12855 },
    { x: '1997', y1: 12349 },
    { x: '1996', y1: 11972 },
  ],
  [
    { x: '2021', y2: 4080 },
    { x: '2020', y2: 3923 },
    { x: '2019.', y2: 3831 },
    { x: '2018', y2: 3796 },
    { x: '2017', y2: 3616 },
    { x: '2016', y2: 3535 },
    { x: '2015.', y2: 3357 },
    { x: '2014', y2: 3452 },
    { x: '2013', y2: 3432 },
    { x: '2012', y2: 3353 },
    { x: '2011.', y2: 3268 },
    { x: '2010', y2: 3192 },
    { x: '2009', y2: 3050 },
    { x: '2008', y2: 2989 },
    { x: '2007', y2: 3035 },
    { x: '2006', y2: 3038 },
    { x: '2005', y2: 2992 },
    { x: '2004', y2: 2965 },
    { x: '2003', y2: 2968 },
    { x: '2002', y2: 2943 },
    { x: '2001', y2: 2899 },
    { x: '2000', y2: 2631 },
    { x: '1999', y2: 2583 },
    { x: '1998', y2: 2483 },
    { x: '1997', y2: 2484 },
    { x: '1996', y2: 2492 },
  ],
];

export const lineChartDataOVE = [
  [
    { x: '2020', y: 25.000},
    { x: '2019.', y: 21.968 },
    { x: '2018', y: 21.378 },
    { x: '2017', y: 21.658 },
    { x: '2016', y: 21.975 },
    { x: '2015.', y: 22.879 },
    { x: '2014', y: 22.459 },
    { x: '2013', y: 23.161 },
    { x: '2012', y: 21.551},
    { x: '2011.', y: 20.937 },
    { x: '2010', y: 21.081 },
    { x: '2009', y: 20.765 },
    { x: '2008', y: 18.646 },
    { x: '2007', y: 19.676 },
    { x: '2006', y: 18.416 },
    { x: '2005', y: 19.809 },
    { x: '2004', y: 18.397 },
  ],
  [
    { x: '2021', y1: 15048.057 },
    { x: '2020', y1: 16289.674 },
    { x: '2019.', y1: 15224.353 },
    { x: '2018', y1: 15441.970 },
    { x: '2017', y1: 15396.875 },
    { x: '2016', y1: 15546 },
    { x: '2015.', y1: 14187 },
    { x: '2014', y1: 16486 },
    { x: '2013', y1: 15117 },
    { x: '2012', y1: 14705 },
    { x: '2011.', y1: 15001 },
    { x: '2010', y1: 15410 },
    { x: '2009', y1: 15375 },
    { x: '2008', y1: 15357 },
    { x: '2007', y1: 14043 },
    { x: '2006', y1: 14117 },
    { x: '2005', y1: 14150 },
    { x: '2004', y1: 14309 },
  ],
  [
    { x: '2021', y2: 4080 },
    { x: '2020', y2: 3923 },
    { x: '2019.', y2: 3831 },
    { x: '2018', y2: 3796 },
    { x: '2017', y2: 3616 },
    { x: '2016', y2: 3535 },
    { x: '2015.', y2: 3357 },
    { x: '2014', y2: 3452 },
    { x: '2013', y2: 3432 },
    { x: '2012', y2: 3353 },
    { x: '2011.', y2: 3268 },
    { x: '2010', y2: 3192 },
    { x: '2009', y2: 3050 },
    { x: '2008', y2: 2989 },
    { x: '2007', y2: 3035 },
    { x: '2006', y2: 3038 },
    { x: '2005', y2: 2992 },
    { x: '2004', y2: 2965 },

  ],
];

export const dropdownData = [
  {
    Id: '1',
    Time: '2021',
  },
  {
    Id: '2',
    Time: '2020',
  }, {
    Id: '3',
    Time: '2019',
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

//Cena dobavljene el. e. za gospodinjskega odjemalca
export const cenaDobData = [
  [
    { x: '2022', y: 0.2424 },
    { x: '2021', y: 0.3479 },
    { x: '2020', y: 0.2382 },
    { x: '2019.', y: 0.3358 },
    { x: '2018', y: 0.3071 },
    { x: '2017', y: 0.2535 },
    { x: '2016', y: 0.1863 },
    { x: '2015.', y: 0.2223 },
    { x: '2014', y: 0.2129 },
    { x: '2013', y: 0.2551 },
    { x: '2012', y: 0.2212 },
    { x: '2011.', y: 0.2300 },
    { x: '2010', y: 0.2610 },
    { x: '2009', y: 0.2828 },
    { x: '2008', y: 0.1932 },
    { x: '2007', y: 0.2288 },
  ],
  [
    { x: '2022', y1: 0.1690 },
    { x: '2021', y1: 0.2115 },
    { x: '2020', y1: 0.1666 },
    { x: '2019.', y1: 0.2043 },
    { x: '2018', y1: 0.1998 },
    { x: '2017', y1: 0.1942 },
    { x: '2016', y1: 0.1984 },
    { x: '2015.', y1: 0.1900 },
    { x: '2014', y1: 0.1950 },
    { x: '2013', y1: 0.1885 },
    { x: '2012', y1: 0.1749 },
    { x: '2011.', y1: 0.1673 },
    { x: '2010', y1: 0.1672 },
    { x: '2009', y1: 0.1595 },
    { x: '2008', y1: 0.1296 },
    { x: '2007', y1: 0.1310 },
  ],
  [
    { x: '2022', y2: 0.1390 },
    { x: '2021', y2: 0.1662 },
    { x: '2020', y2: 0.1448 },
    { x: '2019.', y2: 0.1666 },
    { x: '2018', y2: 0.1613 },
    { x: '2017', y2: 0.1610 },
    { x: '2016', y2: 0.1629 },
    { x: '2015.', y2: 0.1589 },
    { x: '2014', y2: 0.1630 },
    { x: '2013', y2: 0.1657 },
    { x: '2012', y2: 0.1542 },
    { x: '2011.', y2: 0.1441 },
    { x: '2010', y2: 0.1401 },
    { x: '2009', y2: 0.1346 },
    { x: '2008', y2: 0.1156 },
    { x: '2007', y2: 0.1116 },
  ],
  [
    { x: '2022', y3: 0.1215 },
    { x: '2021', y3: 0.1469 },
    { x: '2020', y3: 0.1312 },
    { x: '2019.', y3: 0.1453 },
    { x: '2018', y3: 0.1424 },
    { x: '2017', y3: 0.1399 },
    { x: '2016', y3: 0.1419 },
    { x: '2015.', y3: 0.1397 },
    { x: '2014', y3: 0.1453 },
    { x: '2013', y3: 0.1473 },
    { x: '2012', y3: 0.1405 },
    { x: '2011.', y3: 0.1332 },
    { x: '2010', y3: 0.1302 },
    { x: '2009', y3: 0.1231 },
    { x: '2008', y3: 0.1092 },
    { x: '2007', y3: 0.1021 },
  ],
  [
    { x: '2022', y4: 0.1156 },
    { x: '2021', y4: 0.1254 },
    { x: '2020', y4: 0.1313 },
    { x: '2019.', y4: 0.1226 },
    { x: '2018', y4: 0.1279 },
    { x: '2017', y4: 0.1239 },
    { x: '2016', y4: 0.1266 },
    { x: '2015.', y4: 0.1272 },
    { x: '2014', y4: 0.1298 },
    { x: '2013', y4: 0.1279 },
    { x: '2012', y4: 0.1259 },
    { x: '2011.', y4: 0.1233 },
    { x: '2010', y4: 0.1209 },
    { x: '2009', y4: 0.1176 },
    { x: '2008', y4: 0.1076 },
    { x: '2007', y4: 0.0958 },
  ],
  [
    { x: '2022', y5: 0.1333 },
    { x: '2021', y5: 0.1583 },
    { x: '2020', y5: 0.1650 },
    { x: '2019.', y5: 0.1393 },
    { x: '2018', y5: 0.1606 },
    { x: '2017', y5: 0.1576 },
    { x: '2016', y5: 0.1609 },
    { x: '2015.', y5: 0.1568 },
    { x: '2014', y5: 0.1604 },
    { x: '2013', y5: 0.1629 },
    { x: '2012', y5: 0.1521 },
    { x: '2011.', y5: 0.1474 },
    { x: '2010', y5: 0.1423 },
    { x: '2009', y5: 0.1363 },
    { x: '2008', y5: 0.1159 },
    { x: '2007', y5: 0.1107 },
  ],

];
export const cenaDob = [
  { dataSource: cenaDobData[0],
    xName: 'x',
    yName: 'y',
    name: 'DA (<1000 KWh)',
    width: '2',
    marker: { visible: true, width: 5, height: 5 },
    type: 'Column' },
  { dataSource: cenaDobData[1],
    xName: 'x',
    yName: 'y1',
    name: 'DB (1000 do <2500 KWh)	',
    width: '2',
    marker: { visible: true, width: 5, height: 5 },
    type: 'Column' },

  { dataSource: cenaDobData[2],
    xName: 'x',
    yName: 'y2',
    name: 'DC (2500 do <5000 KWh)	',
    width: '2',
    marker: { visible: true, width: 5, height: 5 },
    type: 'Column' 
  },

  { dataSource: cenaDobData[3],
    xName: 'x',
    yName: 'y3',
    name: 'DD (5000 do <15000 KWh)	',
    width: '2',
    marker: { visible: true, width: 5, height: 5 },
    type: 'Column' 
  },

  { dataSource: cenaDobData[4],
    xName: 'x',
    yName: 'y4',
    name: 'DE ( >= 15000 KWh)	',
    width: '2',
    marker: { visible: true, width: 5, height: 5 },
    type: 'Column' 
  },

  { dataSource: cenaDobData[5],
    xName: 'x',
    yName: 'y5',
    name: 'Slovenija',
    width: '2',
    marker: { visible: true, width: 5, height: 5 },
    type: 'Column' 
  },
 
      

];
export const cenaDobX = {
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  intervalType: 'Years',
  interval:1,
  edgeLabelPlacement: 'Shift',
  valueType: 'Category',
  labelFormat: 'y',
};
export const cenaDobY = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 0.40,
  interval: 0.05,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "EUR/kWh",
  labelFormat: '{value}',
};
//////////////////////////////////////////////////////

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Slovenija',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y1',
    name: 'EU',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y2',
    name: 'Nemčija',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y3',
    name: 'Španija',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y4',
    name: 'Slovaška',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y5',
    name: 'Madžarska',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },
      

];

//Line grafikon za Delež obnovljive energije

export const lineOVESeries = [
  { 
    dataSource: lineChartDataOVE[0],
    xName: 'x',
    yName: 'y',
    name: 'Slovenija',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { 
    dataSource: lineChartDataOVE[1],
    xName: 'x',
    yName: 'y1',
    name: 'EU',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { 
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y2',
    name: 'Nemčija',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { 
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y3',
    name: 'Španija',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { 
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y4',
    name: 'Slovaška',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },

  { 
    dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y5',
    name: 'Madžarska',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'StackingLine' 
  },
      
];


// Podatki za energetsko bilanco

//2021..1992 X
export const vsaX = {
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  intervalType: 'Months',
  title: '',
  interval: 1,
  valueType: 'Category',
  labelFormat: 'y',
  edgeLabelPlacement: 'Shift',
};
//2021..1992 Y
export const vsaY = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 1400,
  interval: 200,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "Proizvodnja električne energije [GWh]",
  labelFormat: '{value}',
};
//Podatki
//2021
export const bil2021pod = [
  [
    { x: 'jan.', y: 517},
    { x: 'feb.', y: 467 },
    { x: 'mar.', y: 515 },
    { x: 'apr.', y: 0 },
    { x: 'maj.', y: 416 },
    { x: 'jun.', y: 491 },
    { x: 'jul.', y: 502 },
    { x: 'avg.', y: 502 },
    { x: 'sep.', y: 486 },
    { x: 'okt.', y: 507 },
    { x: 'nov.', y: 498 },
    { x: 'dec.', y: 515 },
  ],
  [
    { x: 'jan.', y1: 370},
    { x: 'feb.', y1: 303 },
    { x: 'mar.', y1: 367 },
    { x: 'apr.', y1: 308 },
    { x: 'maj.', y1: 165 },
    { x: 'jun.', y1: 122 },
    { x: 'jul.', y1: 144 },
    { x: 'avg.', y1: 354 },
    { x: 'sep.', y1: 269 },
    { x: 'okt.', y1: 314 },
    { x: 'nov.', y1: 357 },
    { x: 'dec.', y1: 356 },
  ],
  [
    { x: 'jan.', y2: 422},
    { x: 'feb.', y2: 411 },
    { x: 'mar.', y2: 319 },
    { x: 'apr.', y2: 333 },
    { x: 'maj.', y2: 649 },
    { x: 'jun.', y2: 546 },
    { x: 'jul.', y2: 423 },
    { x: 'avg.', y2: 377 },
    { x: 'sep.', y2: 213 },
    { x: 'okt.', y2: 238 },
    { x: 'nov.', y2: 303 },
    { x: 'dec.', y2: 271 },
  ],

];
//2021
export const bil2021 = [

  { dataSource: bil2021pod[0],
    xName: 'x',
    yName: 'y',
    name: 'NE',
    type: 'StackingColumn',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: bil2021pod[1],
    xName: 'x',
    yName: 'y1',
    name: 'TE',
    type: 'StackingColumn',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: bil2021pod[2],
    xName: 'x',
    yName: 'y2',
    name: 'HE',
    type: 'StackingColumn',
    background: 'purple',
    opacity:0.9,

  },

];
///////////////////////////////////////////////
//Podatki
//2021
           
export const bil2020pod = [
  [
    { x: 'jan.', y: 518},
    { x: 'feb.', y: 483 },
    { x: 'mar.', y: 518 },
    { x: 'apr.', y: 497 },
    { x: 'maj.', y: 514 },
    { x: 'jun.', y: 496 },
    { x: 'jul.', y: 509 },
    { x: 'avg.', y: 506 },
    { x: 'sep.', y: 494 },
    { x: 'okt.', y: 517 },
    { x: 'nov.', y: 501 },
    { x: 'dec.', y: 488 },
  ],
  [
    { x: 'jan.', y1: 299},
    { x: 'feb.', y1:  289},
    { x: 'mar.', y1: 228 },
    { x: 'apr.', y1:  200},
    { x: 'maj.', y1: 181 },
    { x: 'jun.', y1: 315 },
    { x: 'jul.', y1: 412 },
    { x: 'avg.', y1: 347 },
    { x: 'sep.', y1: 365 },
    { x: 'okt.', y1: 482 },
    { x: 'nov.', y1: 445 },
    { x: 'dec.', y1: 394 },
  ],
  [
    { x: 'jan.', y2: 422},
    { x: 'feb.', y2: 411 },
    { x: 'mar.', y2: 319 },
    { x: 'apr.', y2: 333 },
    { x: 'maj.', y2: 649 },
    { x: 'jun.', y2: 546 },
    { x: 'jul.', y2: 423 },
    { x: 'avg.', y2: 377 },
    { x: 'sep.', y2: 213 },
    { x: 'okt.', y2: 238 },
    { x: 'nov.', y2: 303 },
    { x: 'dec.', y2: 271 },
  ],

];
//2020
export const bil2020 = [

  { dataSource: bil2020pod[0],
    xName: 'x',
    yName: 'y',
    name: 'NE',
    type: 'StackingColumn',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: bil2020pod[1],
    xName: 'x',
    yName: 'y1',
    name: 'TE',
    type: 'StackingColumn',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: bil2020pod[2],
    xName: 'x',
    yName: 'y2',
    name: 'HE',
    type: 'StackingColumn',
    background: 'purple',
    opacity:0.9,

  },

];
///////////////////////////////////////////////
// StackedColumn grafikoni za energetsko bilanco
export const ColorMappingPrimaryXAxis = {
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  intervalType: 'Years',
  title: 'Leta',
  interval: 1,
  valueType: 'DateTime',
  labelFormat: 'y',
  edgeLabelPlacement: 'Shift',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 400000,
  interval: 50000,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "TJ",
  labelFormat: '{value}',
};

// vsa
export const pieChartData = [
  { x: 'Izvoz', y: 18, text: '18%' },
  { x: 'Uvoz', y: 8, text: '8%' },
  { x: 'Domača proizvodnja', y: 15, text: '15%' },
  { x: 'Končna poraba', y: 11, text: '11%' },
];

// 2021
export const pie2021 = [
  { x: 'Izvoz', y: 15, text: '30%' },
  { x: 'Uvoz', y: 6, text: '46%' },
  { x: 'Domača proizvodnja', y: 20, text: '24%' },
];

// 2020
export const pie2020 = [
  { x: 'Izvoz', y: 15, text: '30%' },
  { x: 'Uvoz', y: 6, text: '46%' },
  { x: 'Domača proizvodnja', y: 20, text: '24%' },
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: '2021', y: 103715},
    { x: '2020', y: 97263 },
    { x: '2019.', y: 110421 },
    { x: '2018', y: 115393 },
    { x: '2017', y: 111953 },
    { x: '2016', y: 113321 },
    { x: '2015.', y: 106211 },
    { x: '2014', y: 125142 },
    { x: '2013', y: 112120 },
    { x: '2012', y: 116638 },
    { x: '2011.', y: 117597 },
    { x: '2010', y: 119087 },
  ],
  [
    { x: '2021', y1: 39261},
    { x: '2020', y1: 42699 },
    { x: '2019.', y1: 44616 },
    { x: '2018', y1: 47379 },
    { x: '2017', y1: 47757 },
    { x: '2016', y1: 48050 },
    { x: '2015.', y1: 44735 },
    { x: '2014', y1: 43957 },
    { x: '2013', y1: 56756},
    { x: '2012', y1: 58386 },
    { x: '2011.', y1: 61539 },
    { x: '2010', y1: 60927 },
  ],
  [
    { x: '2021', y2: 32450 },
    { x: '2020', y2: 30790 },
    { x: '2019.', y2: 30735 },
    { x: '2018', y2: 30338 },
    { x: '2017', y2: 30921 },
    { x: '2016', y2: 29490 },
    { x: '2015.', y2: 27809 },
    { x: '2014', y2: 26197 },
    { x: '2013', y2: 28965 },
    { x: '2012', y2: 29716 },
    { x: '2011.', y2: 30894 },
    { x: '2010', y2: 36105 },
  ],
  [
    { x: '2021', y3: 83252 },
    { x: '2020', y3: 84130 },
    { x: '2019.', y3: 82320 },
    { x: '2018', y3: 81722 },
    { x: '2017', y3: 84265 },
    { x: '2016', y3: 77699 },
    { x: '2015.', y3: 78326 },
    { x: '2014', y3: 84469 },
    { x: '2013', y3: 72540 },
    { x: '2012', y3: 72926 },
    { x: '2011.', y3: 77545 },
    { x: '2010', y3: 71911 },
  ],
];

export const stackedLineData = [
  [
    { x: '2021', y: 15876.922 },
    { x: '2020', y: 17190.698 },
    { x: '2019.', y: 16099.564 },
    { x: '2018', y: 16326.935 },
    { x: '2017', y: 16326.225 },
    { x: '2016', y: 16500 },
    { x: '2015.', y: 15100 },
    { x: '2014', y: 17438 },
    { x: '2013', y: 16103 },
    { x: '2012', y: 15736 },
    { x: '2011.', y: 16059 },
    { x: '2010', y: 16440 },
    { x: '2009', y: 16403 },
    { x: '2008', y: 16398 },
    { x: '2007', y: 15043 },
    { x: '2006', y: 15115 },
    { x: '2005', y: 15117 },
    { x: '2004', y: 15272 },
    { x: '2003', y: 13820 },
    { x: '2002', y: 14599 },
    { x: '2001', y: 14467 },
    { x: '2000', y: 13624 },
    { x: '1999', y: 13261 },
    { x: '1998', y: 13705 },
    { x: '1997', y: 13178 },
    { x: '1996', y: 12737 },
  ],
  [
    { x: '2021', y1: 15048.057 },
    { x: '2020', y1: 16289.674 },
    { x: '2019.', y1: 15224.353 },
    { x: '2018', y1: 15441.970 },
    { x: '2017', y1: 15396.875 },
    { x: '2016', y1: 15546 },
    { x: '2015.', y1: 14187 },
    { x: '2014', y1: 16486 },
    { x: '2013', y1: 15117 },
    { x: '2012', y1: 14705 },
    { x: '2011.', y1: 15001 },
    { x: '2010', y1: 15410 },
    { x: '2009', y1: 15375 },
    { x: '2008', y1: 15357 },
    { x: '2007', y1: 14043 },
    { x: '2006', y1: 14117 },
    { x: '2005', y1: 14150 },
    { x: '2004', y1: 14309 },
    { x: '2003', y1: 12895 },
    { x: '2002', y1: 13693 },
    { x: '2001', y1: 13592 },
    { x: '2000', y1: 12795 },
    { x: '1999', y1: 12456 },
    { x: '1998', y1: 12855 },
    { x: '1997', y1: 12349 },
    { x: '1996', y1: 11972 },
  ],
  [
    { x: '2021', y2: 4080.426 },
    { x: '2020', y2: 3923.955 },
    { x: '2019.', y2: 3831.968 },
    { x: '2018', y2: 3796.175 },
    { x: '2017', y2: 3616.782 },
    { x: '2016', y2: 3535 },
    { x: '2015.', y2: 3357 },
    { x: '2014', y2: 3452 },
    { x: '2013', y2: 3432 },
    { x: '2012', y2: 3353 },
    { x: '2011.', y2: 3268 },
    { x: '2010', y2: 3192 },
    { x: '2009', y2: 3050 },
    { x: '2008', y2: 2989 },
    { x: '2007', y2: 3035 },
    { x: '2006', y2: 3038 },
    { x: '2005', y2: 2992 },
    { x: '2004', y2: 2965 },
    { x: '2003', y2: 2968 },
    { x: '2002', y2: 2943 },
    { x: '2001', y2: 2899 },
    { x: '2000', y2: 2631 },
    { x: '1999', y2: 2583 },
    { x: '1998', y2: 2483 },
    { x: '1997', y2: 2484 },
    { x: '1996', y2: 2492 },
  ],

];

export const stackedLine = [

  { dataSource: stackedLineData[0],
    xName: 'x',
    yName: 'y',
    name: 'Vodna',
    type: 'StackingLine',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: stackedLineData[1],
    xName: 'x',
    yName: 'y1',
    name: 'Trdne snovi',
    type: 'StackingLine',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: stackedLineData[2],
    xName: 'x',
    yName: 'y2',
    name: 'Plini',
    type: 'StackingLine',
    background: 'purple',
    opacity:0.9,

  },
];


// Podatki za energetsko bilanco

// vsa
export const stackedColorData = [
  [
    { x: '2021', y: 103715},
    { x: '2020', y: 97263 },
    { x: '2019.', y: 110421 },
    { x: '2018', y: 115393 },
    { x: '2017', y: 111953 },
    { x: '2016', y: 113321 },
    { x: '2015.', y: 106211 },
    { x: '2014', y: 125142 },
    { x: '2013', y: 112120 },
    { x: '2012', y: 116638 },
    { x: '2011.', y: 117597 },
    { x: '2010', y: 119087 },
  ],
  [
    { x: '2021', y1: 39261},
    { x: '2020', y1: 42699 },
    { x: '2019.', y1: 44616 },
    { x: '2018', y1: 47379 },
    { x: '2017', y1: 47757 },
    { x: '2016', y1: 48050 },
    { x: '2015.', y1: 44735 },
    { x: '2014', y1: 43957 },
    { x: '2013', y1: 56756},
    { x: '2012', y1: 58386 },
    { x: '2011.', y1: 61539 },
    { x: '2010', y1: 60927 },
  ],
  [
    { x: '2021', y2: 32450 },
    { x: '2020', y2: 30790 },
    { x: '2019.', y2: 30735 },
    { x: '2018', y2: 30338 },
    { x: '2017', y2: 30921 },
    { x: '2016', y2: 29490 },
    { x: '2015.', y2: 27809 },
    { x: '2014', y2: 26197 },
    { x: '2013', y2: 28965 },
    { x: '2012', y2: 29716 },
    { x: '2011.', y2: 30894 },
    { x: '2010', y2: 36105 },
  ],
  [
    { x: '2021', y3: 83252 },
    { x: '2020', y3: 84130 },
    { x: '2019.', y3: 82320 },
    { x: '2018', y3: 81722 },
    { x: '2017', y3: 84265 },
    { x: '2016', y3: 77699 },
    { x: '2015.', y3: 78326 },
    { x: '2014', y3: 84469 },
    { x: '2013', y3: 72540 },
    { x: '2012', y3: 72926 },
    { x: '2011.', y3: 77545 },
    { x: '2010', y3: 71911 },
  ],
];

// 2021
export const stackedData2021 = [
  [
    { x: '2021', y: 10315},
    { x: '2020', y: 9763 },
    { x: '2019.', y: 10421 },
    { x: '2018', y: 11593 },
    { x: '2017', y: 111953 },
    { x: '2016', y: 11321 },
    { x: '2015.', y: 106211 },
    { x: '2014', y: 125142 },
    { x: '2013', y: 11220 },
    { x: '2012', y: 116638 },
    { x: '2011.', y: 117597 },
    { x: '2010', y: 119087 },
  ],
  [
    { x: '2021', y1: 39261},
    { x: '2020', y1: 42699 },
    { x: '2019.', y1: 4616 },
    { x: '2018', y1: 47379 },
    { x: '2017', y1: 47757 },
    { x: '2016', y1: 48050 },
    { x: '2015.', y1: 4435 },
    { x: '2014', y1: 43957 },
    { x: '2013', y1: 5676},
    { x: '2012', y1: 5836 },
    { x: '2011.', y1: 61539 },
    { x: '2010', y1: 60927 },
  ],
  [
    { x: '2021', y2: 32450 },
    { x: '2020', y2: 30790 },
    { x: '2019.', y2: 3035 },
    { x: '2018', y2: 30338 },
    { x: '2017', y2: 30921 },
    { x: '2016', y2: 2940 },
    { x: '2015.', y2: 2709 },
    { x: '2014', y2: 26197 },
    { x: '2013', y2: 289 },
    { x: '2012', y2: 29716 },
    { x: '2011.', y2: 3094 },
    { x: '2010', y2: 36105 },
  ],
  [
    { x: '2021', y3: 8252 },
    { x: '2020', y3: 8430 },
    { x: '2019.', y3: 8230 },
    { x: '2018', y3: 8172 },
    { x: '2017', y3: 84265 },
    { x: '2016', y3: 77699 },
    { x: '2015.', y3: 78326 },
    { x: '2014', y3: 8469 },
    { x: '2013', y3: 72540 },
    { x: '2012', y3: 72926 },
    { x: '2011.', y3: 77545 },
    { x: '2010', y3: 71911 },
  ],
];


// Modal za Skupna poraba

// Osi X
export const skupnaX = {
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  intervalType: 'Years',
  valueType: 'Category',
  labelFormat: 'y',
  edgeLabelPlacement: 'Shift',
};
// Y
export const skupnaY = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 16000,
  interval: 2000,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "Poraba električne energije [GWh]",
  labelFormat: '{value}',
};
// Podatki
export const skupnaData = [
  [
    { x: '2021', y: 134},
    { x: '2020', y: 94 },
    { x: '2019.', y: 160 },
    { x: '2018', y: 208 },
    { x: '2017', y: 182 },
  ],
  [
    { x: '2021', y1: 1350},
    { x: '2020', y1: 1435 },
    { x: '2019.', y1: 1732 },
    { x: '2018', y1: 1902 },
    { x: '2017', y1: 1947 },
  ],
  [
    { x: '2021', y2: 7803 },
    { x: '2020', y2: 7418 },
    { x: '2019.', y2: 8014 },
    { x: '2018', y2: 8006 },
    { x: '2017', y2: 7843 },
  ],
  [
    { x: '2021', y3: 3665 },
    { x: '2020', y3: 3559 },
    { x: '2019.', y3: 3386 },
    { x: '2018', y3: 3368 },
    { x: '2017', y3: 3327 },
  ],
  [
    { x: '2021', y4: 384 },
    { x: '2020', y4: 391 },
    { x: '2019.', y4: 272 },
    { x: '2018', y4: 252 },
    { x: '2017', y4: 365 },
  ],
  [
    { x: '2021', y5: 837 },
    { x: '2020', y5: 849 },
    { x: '2019.', y5: 859 },
    { x: '2018', y5: 880 },
    { x: '2017', y5: 893 },
  ],
];
// Inicializacija Podatkov
export const skupnaPoraba = [

  { dataSource: skupnaData[0],
    xName: 'x',
    yName: 'y',
    name: 'Poslovni odjem na prenosnem sistemu',
    type: 'StackingColumn',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: skupnaData[1],
    xName: 'x',
    yName: 'y1',
    name: 'Poslovni odjem na zaprtih distribucijskih sistemih',
    type: 'StackingColumn',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: skupnaData[2],
    xName: 'x',
    yName: 'y2',
    name: 'Poslovni odjem na distribucijskem sistemu',
    type: 'StackingColumn',
    background: 'purple',
    opacity:0.9,

  },

  { dataSource: skupnaData[3],
    xName: 'x',
    yName: 'y3',
    name: 'Gospodinjski odjem',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

  { dataSource: skupnaData[4],
    xName: 'x',
    yName: 'y4',
    name: 'Poraba ČHE Avče ',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

  { dataSource: skupnaData[5],
    xName: 'x',
    yName: 'y5',
    name: 'Izgube na sistemu',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

];


// X/Y za energetsko bilanco

// vsa
export const colorMappingSeries = [

  { dataSource: stackedColorData[0],
    xName: 'x',
    yName: 'y',
    name: 'Vodna',
    type: 'StackingColumn',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: stackedColorData[1],
    xName: 'x',
    yName: 'y1',
    name: 'Trdne snovi',
    type: 'StackingColumn',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: stackedColorData[2],
    xName: 'x',
    yName: 'y2',
    name: 'Plini',
    type: 'StackingColumn',
    background: 'purple',
    opacity:0.9,

  },

  { dataSource: stackedColorData[3],
    xName: 'x',
    yName: 'y3',
    name: 'Električna',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

];
//2021
export const stacked2021 = [

  { dataSource: stackedData2021[0],
    xName: 'x',
    yName: 'y',
    name: 'Vodna',
    type: 'StackingColumn',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: stackedData2021[1],
    xName: 'x',
    yName: 'y1',
    name: 'Trdne snovi',
    type: 'StackingColumn',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: stackedData2021[2],
    xName: 'x',
    yName: 'y2',
    name: 'Plini',
    type: 'StackingColumn',
    background: 'purple',
    opacity:0.9,

  },

  { dataSource: stackedData2021[3],
    xName: 'x',
    yName: 'y3',
    name: 'Električna',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

];
//
export const stackedCustomSeries = [

  { dataSource: stackedLineData[0],
    xName: 'x',
    yName: 'y',
    name: 'Proizvodnja na generatorju',
    type: 'StackingArea',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: stackedLineData[1],
    xName: 'x',
    yName: 'y1',
    name: 'Proizvodnja na generatorju',
    type: 'StackingArea',
    background: 'black',
    fill:'#00758f',
    opacity:0.9,
  },

  { dataSource: stackedLineData[2],
    xName: 'x',
    yName: 'y2',
    name: 'Lastna raba',
    type: 'StackingArea',
    background: 'purple',
    opacity:0.9,
    fill:'#0b4b5b'
  },


];
//
export const stackedPrimaryXAxis = {
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  majorTickLines: { width: 1 },
  minorTickLines: { width: 1 },
  intervalType: 'Years',
  title: 'Leta',
  valueType: 'DateTime',
  labelFormat: 'y',
  edgeLabelPlacement: 'Shift',
};
//
export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 50000,
  interval: 5000,
  majorTickLines: { width: 1 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 1 },
  title: "Porabljena količina v GWh",
  labelFormat: '{value}',
};
//
export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];
