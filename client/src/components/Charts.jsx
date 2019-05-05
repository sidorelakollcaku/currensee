import React, { useState } from "react";
import moment from "moment";
import { Chart } from "primereact/chart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "../containers/Main.css";
import "./Charts.css";

const Charts = ({
  monthLabels,
  trueIncome,
  falseIncome,
  pieChart,
  arrayForCatByCurrentMonth,
  arrayForBudgetTable,
  topCategory,
  topCatChart
}) => {
  const [chartChoice, setChart] = useState("pie");
  const [timeChartChoice, setTimeChart] = useState("bar");

  const month = moment().format("MMMM");
  const year = moment().format("YYYY");

  const pieData = {
    responsive: true,
    maintainAspectRatio: false,
    labels: [
      "Health & Fitness",
      "Home",
      "Other",
      "Savings",
      "Shopping",
      "Travel",
      "Utilities"
    ],
    datasets: [
      {
        data: pieChart,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#003366",
          "#336D2B",
          "#7FFFD4",
          "#f48642"
        ],
        hoverBackgroundColor: [
          "#ff3a64",
          "#0291f2",
          "#ffb80c",
          "#001123",
          "#38772F",
          "#38ffbc",
          "#fc7019"
        ]
      }
    ]
  };

  const doughnutForCurrentMonth = {
    responsive: true,
    maintainAspectRatio: false,
    labels: [
      "Health & Fitness",
      "Home",
      "Other",
      "Savings",
      "Shopping",
      "Travel",
      "Utilities"
    ],
    datasets: [
      {
        data: arrayForCatByCurrentMonth,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#003366",
          "#336D2B",
          "#7FFFD4",
          "#f48642"
        ],
        hoverBackgroundColor: [
          "#ff3a64",
          "#0291f2",
          "#ffb80c",
          "#001123",
          "#38772F",
          "#38ffbc",
          "#fc7019"
        ]
      }
    ]
  };

  const barData = {
    responsive: true,
    labels: monthLabels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "rgb(4, 244, 12, 0.8)",
        data: trueIncome
      },
      {
        label: "Expense",
        backgroundColor: "rgb(255, 0, 0, 0.8)",
        data: falseIncome
      }
    ]
  };

  const topCatData = {
    responsive: true,
    labels: monthLabels,
    datasets: [
      {
        label: "Total Spending",
        backgroundColor: "#6320EE",
        data: topCatChart
      }
    ]
  };

  const lineData = {
    responsive: true,
    labels: monthLabels,
    datasets: [
      {
        label: "Income",
        data: trueIncome,
        fill: false,
        borderColor: "#42A5F5",
        borderWidth: 3
      },
      {
        label: "Expenses",
        data: falseIncome,
        fill: true,
        borderColor: "#ff3059",
        borderWidth: 3
      }
    ]
  };

  const comboData = {
    labels: monthLabels,
    datasets: [
      {
        type: "line",
        label: "Income",
        borderColor: "#2196F3",
        borderWidth: 3,
        fill: false,
        data: trueIncome
      },
      {
        type: "line",
        label: "Expenses",
        borderColor: "#ff3059",
        borderWidth: 3,
        fill: true,
        data: falseIncome
      },
      {
        type: "bar",
        label: "Income",
        backgroundColor: "#00272B",
        data: trueIncome,
        borderColor: "white"
      },
      {
        type: "bar",
        label: "Expenses",
        backgroundColor: "#E0FF4F",
        data: falseIncome
      }
    ]
  };

  const comboDataTopCat = {
    labels: monthLabels,
    datasets: [
      {
        type: "bar",
        label: "Income",
        backgroundColor: "#2196F3",
        data: trueIncome
      },
      {
        type: "bar",
        label: "Expenses",
        backgroundColor: "#ff3059",
        data: falseIncome
      },
      {
        type: "line",
        label: `Spending for ${topCategory}`,
        borderWidth: 3,
        borderColor: "#00272B",
        fill: false,
        data: topCatChart
      }
    ]
  };

  const options = {
    responsive: true,
    title: {
      display: false,
      text: "Combo Bar Line Chart"
    },
    tooltips: {
      mode: "index",
      intersect: true
    }
  };

  const radarData = {
    responsive: true,
    labels: [
      "Health & Fitness",
      "Home",
      "Other",
      "Savings",
      "Shopping",
      "Travel",
      "Utilities"
    ],
    datasets: [
      {
        label: "Amount in $",
        backgroundColor: "rgba(7,16,19, 0.4)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(7,16,19, 0.4)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: pieChart
      }
    ]
  };

  return (
    <div>
      <div className="row justify-content-center">
        {/* START TIME CHARTS */}
        <div className="col-12">
          <Grid container justify="center">
            <Card className="chartCard">
              <div className="row justify-content-start">
                <div className="col-md-4 col-sm-8 col-8">
                  {/* <Card className="pickerCard"> */}
                  <div className="dropWrapper">
                    <FormControl
                      color="secondary"
                      className="chartDrop p-3 border border-pink"
                    >
                      <InputLabel className="m-2" htmlFor="time-chart-helper">
                        Choose Chart Type
                      </InputLabel>
                      <Select
                        value={timeChartChoice}
                        onChange={e => setTimeChart(e.target.value)}
                        input={
                          <Input
                            name="timeChartChoice"
                            id="time-chart-helper"
                          />
                        }
                      >
                        <MenuItem value={"bar"}>Bar Chart</MenuItem>
                        <MenuItem value={"line"}>Line Chart</MenuItem>
                        <MenuItem value={"combo"}>Combo Chart</MenuItem>
                        <MenuItem value={"comboTopCat"}>
                          Income vs Expense vs Top Category
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {/* </Card> */}
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                  <h3 className="text-center catChartHeader chartHeading">
                    {timeChartChoice === "comboTopCat"
                      ? `Income vs Expense vs Spending for ${topCategory} By Month (${year})`
                      : `Income vs Expense By Month (${year})`}
                  </h3>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8 col-12">
                  <div className="explainer px-5">
                    <h6 className="text-center">
                      This chart tracks your income and expenses for 2 months
                      trailing and 3 months forward. You can switch to a line,
                      bar or combo chart or use this chart to view your income
                      and expenses vs your most active category in the dropdown
                      menu.
                    </h6>
                  </div>
                </div>
              </div>
              <CardContent className="chartCardContent">
                <div className="content-section implementation">
                  {timeChartChoice === "bar" ? (
                    <Chart className="chart" type="bar" data={barData} />
                  ) : timeChartChoice === "line" ? (
                    <Chart className="chart" type="line" data={lineData} />
                  ) : timeChartChoice === "combo" ? (
                    <Chart
                      className="chart"
                      type="bar"
                      data={comboData}
                      options={options}
                    />
                  ) : timeChartChoice === "comboTopCat" ? (
                    <Chart
                      className="chart"
                      type="bar"
                      // options={options}
                      data={comboDataTopCat}
                    />
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </div>
        {/* START TOTAL CAT CHART */}
        <div className="col-12">
          <Grid container justify="center">
            <Card className="chartCard">
              <div className="row justify-content-start">
                <div className="col-md-4 col-sm-8 col-8">
                  <div className="dropWrapper">
                    <FormControl
                      color="secondary"
                      className="chartDrop p-3 border border-pink"
                    >
                      <InputLabel className="m-2" htmlFor="chart-helper">
                        Choose Chart Type
                      </InputLabel>
                      <Select
                        value={chartChoice}
                        onChange={e => setChart(e.target.value)}
                        input={<Input name="chartChoice" id="chart-helper" />}
                      >
                        <MenuItem value={"pie"}>Pie Chart</MenuItem>
                        <MenuItem value={"radar"}>Radar Chart</MenuItem>
                        <MenuItem value={"polar"}>Polar Chart</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                  <h3 className="text-center catChartHeader chartHeading">
                    Total Spending by Category
                  </h3>
                  <h6 className="text-center">
                    This chart is a breakdown of your total spending for each
                    category. You can switch chart types with the dropdown menu.
                  </h6>
                </div>
              </div>
              <CardContent className="chartCardContent">
                <div className="content-section implementation">
                  {chartChoice === "pie" ? (
                    <Chart className="chart" type="pie" data={pieData} />
                  ) : chartChoice === "radar" ? (
                    <Chart className="chart" type="radar" data={radarData} />
                  ) : chartChoice === "polar" ? (
                    <Chart className="chart" type="polarArea" data={pieData} />
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </div>
        {/* START CATEGORIES FOR CURRENT MONTH */}
        <div className="col-12">
          <Grid container justify="center">
            <Card className="chartCard">
              <CardContent className="chartCardContent">
                <div className="content-section implementation">
                  <h3 className="text-center chartHeading">
                    Spending by Category for {month}, {year}
                  </h3>
                  <h6 className="text-center">
                    This chart is a breakdown of your total spending for each
                    category for the current month and year.
                  </h6>
                  <Chart
                    className="chart"
                    type="doughnut"
                    data={doughnutForCurrentMonth}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </div>
        {/* START TOP CATEGORY OVER TIME */}
        <div className="col-12">
          <Grid container justify="center">
            <Card className="chartCard">
              <CardContent className="chartCardContent">
                <div className="content-section implementation">
                  <h3 className="text-center chartHeading">
                    Spending for {topCategory} Over Time
                  </h3>
                  <h6 className="text-center">
                    This chart tracks your category with the highest total
                    spending and gives you a breakdown of your spending for 2
                    months trailing and 3 months forward.
                  </h6>
                  <Chart className="chart" type="bar" data={topCatData} />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Charts;
