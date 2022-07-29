import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Stacked({ title }) {
  const stackContainer = useRef(null);

  useEffect(() => {
    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create(stackContainer.current, am4charts.XYChart3D);

      chart.colors.list = [am4core.color("#FC5185"), am4core.color("#FF0063")];

      // Add data
      chart.data = [
        {
          country: "KC A",
          year2017: 35,
          year2018: 42,
        },
        {
          country: "KC B",
          year2017: 70,
          year2018: 82,
        },
        {
          country: "KC C",
          year2017: 50,
          year2018: 42,
        },
        {
          country: "KC D",
          year2017: 75,
          year2018: 78,
        },
        {
          country: "KC E",
          year2017: 60,
          year2018: 65,
        },
        {
          country: "KC F",
          year2017: 55,
          year2018: 49,
        },
        {
          country: "KC G",
          year2017: 63,
          year2018: 60,
        },
        // {
        //   country: "India",
        //   year2017: 8,
        //   year2018: 7.1,
        // },
        // {
        //   country: "China",
        //   year2017: 9.9,
        //   year2018: 10.1,
        // },
      ];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = `Overall Performance (${title})`;
      valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text + "%";
      });

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueY = "year2017";
      series.dataFields.categoryX = "country";
      series.name = "Year 2017";
      series.clustered = false;
      series.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}%[/]";
      series.columns.template.fillOpacity = 0.9;

      var series2 = chart.series.push(new am4charts.ColumnSeries3D());
      series2.dataFields.valueY = "year2018";
      series2.dataFields.categoryX = "country";
      series2.name = "Year 2018";
      series2.clustered = false;
      series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}%[/]";
    }); // end am4core.ready()
  }, [title]);
  return <div className="w-full h-[30rem]" ref={stackContainer}></div>;
}

export default Stacked;