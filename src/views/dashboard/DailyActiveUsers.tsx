import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

const series = [
  {
    name: "active-user",
    data: [
      2518,
      4761,
      4666,
      5058,
      5088,
      3104,
      1550,
      2228,
      2589,
      2222,
      2369,
      2633,
      2636,
      3183,
      4625,
      4813,
      5417,
      5416,
      5236,
      4282,
      4613,
      5680,
      9261,
      8720,
      6961,]
  }
]

const DailyActiveUsers = () => {
  const options: ApexOptions = {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories: ["2023/07/31",
      "2023/08/01",
      "2023/08/02",
      "2023/08/03",
      "2023/08/04",
      "2023/08/05",
      "2023/08/06",
      "2023/08/07",
      "2023/08/08",
      "2023/08/09",
      "2023/08/10",
      "2023/08/11",
      "2023/08/12",
      "2023/08/13",
      "2023/08/14",
      "2023/08/15",
      "2023/08/16",
      "2023/08/17",
      "2023/08/18",
      "2023/08/19",
      "2023/08/20",
      "2023/08/21",
      "2023/08/22",
      "2023/08/23",
      "2023/08/24",]
    }
  }

  return (
    <Card>
      <CardHeader
        title='Daily Active Users Overview'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <ReactApexcharts type='line' height={400} options={options} series={series} />
    </Card>
  )
}

export default DailyActiveUsers;