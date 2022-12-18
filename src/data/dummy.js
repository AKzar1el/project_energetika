import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';


export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
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

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Pregled',
    links: [
      {
        name: 'Dashboard',
        description: 'Letni Pregled',
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: 'Grafikoni',
    links: [
      {
        name: 'line',
        description: 'uvoz/izvoz',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        description: 'končna raba - skupaj',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        description: 'proizvodnje',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        description: 'izgube',
        icon: <FiPieChart />,
      },
      {
        name: 'financial',
        description: 'razpoložljiva el',
        icon: <RiStockLine />,
      },
      {
        name: 'color-mapping',
        description: 'poraba za prečrpavanje',
        icon: <BsBarChart />,
      },
      {
        name: 'pyramid',
        description: 'pyramid',
        icon: <GiLouvrePyramid />,
      },
      {
        name: 'stacked',
        description: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '-$560',
    title: 'Top Sales',
    desc: 'Johnathan Doe',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '-$560',
    title: 'Best Seller',
    desc: 'MaterialPro Admin',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '+$560',
    title: 'Most Commented',
    desc: 'Ample Admin',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const ordersGrid = [
  {
    headerText: 'Image',
    template: gridOrderImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderItems',
    headerText: 'Item',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'TotalAmount',
    headerText: 'Total Amount',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'OrderID',
    headerText: 'Order ID',
    width: '120',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

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

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
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

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];

export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];
