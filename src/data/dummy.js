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

// StackedColumn grafikoni za energetsko bilanco
export const ColorMappingPrimaryXAxis = {
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
  { x: 'Izvoz', y: 15, text: '15%' },
  { x: 'Uvoz', y: 6, text: '6%' },
  { x: 'Domača proizvodnja', y: 20, text: '20%' },
  { x: 'Končna poraba', y: 30, text: '30%' },
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
  valueType: 'DateTime',
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
// Inicializacija Podatkov
export const skupnaPoraba = [

  { dataSource: stackedData2021[0],
    xName: 'x',
    yName: 'y',
    name: 'Poslovni odjem na prenosnem sistemu',
    type: 'StackingColumn',
    background: 'blue',
    opacity:0.9,
    fill:'#69D2E7',
    width:3,
  },

  { dataSource: stackedData2021[1],
    xName: 'x',
    yName: 'y1',
    name: 'Poslovni odjem na zaprtih distribucijskih sistemih',
    type: 'StackingColumn',
    background: 'red',
    opacity:0.9,
  },

  { dataSource: stackedData2021[2],
    xName: 'x',
    yName: 'y2',
    name: 'Poslovni odjem na distribucijskem sistemu',
    type: 'StackingColumn',
    background: 'purple',
    opacity:0.9,

  },

  { dataSource: stackedData2021[3],
    xName: 'x',
    yName: 'y3',
    name: 'Gospodinjski odjem',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

  { dataSource: stackedData2021[3],
    xName: 'x',
    yName: 'y3',
    name: 'Poraba ČHE Avče ',
    type: 'StackingColumn',
    background: 'black',
    opacity:0.9,
  },

];
// Podatki
export const skupnaData = [
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
