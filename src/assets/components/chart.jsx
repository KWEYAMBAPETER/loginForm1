import { BarChart } from '@mantine/charts';


function Chart() {
    const data = [
  { month: 'Jan', Smartphones: 1200, Laptops: 500, Tablets: 800 },
  { month: 'Feb', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: 'Mar', Smartphones: 1800, Laptops: 1000, Tablets: 200 },
  { month: 'Apr', Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: 'May', Smartphones: 800, Laptops: 200, Tablets: 700 },
  { month: 'June', Smartphones: 800, Laptops: 500, Tablets: 800 },
  { month: 'July', Smartphones: 900, Laptops: 400, Tablets: 2030 },
  { month: 'Aug', Smartphones: 800, Laptops: 500, Tablets: 2600 },
  { month: 'Sept', Smartphones: 1000, Laptops: 1000, Tablets: 2300 },
  { month: 'Oct', Smartphones: 1300, Laptops: 860, Tablets: 2100 },
  { month: 'Nov', Smartphones: 1200, Laptops: 760, Tablets: 1300 },
  { month: 'Dec', Smartphones: 2100, Laptops: 860, Tablets: 1200 },
];

  return (
    <BarChart
      h={250}
      data={data}
      dataKey="month"
      series={[
        { name: 'Smartphones', color: 'orangered', stackId: 'a' },
        { name: 'Laptops', color: 'maroon', stackId: 'b' },
        { name: 'Tablets', color: 'yellow', stackId: 'd' },
      ]}
    />
  );
}

export default Chart