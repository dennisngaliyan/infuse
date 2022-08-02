import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Bar2({ title }) {
  const stackContainer = useRef(null);

  useEffect(() => {
    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create(stackContainer.current, am4charts.XYChart3D);

      chart.colors.list = [am4core.color("#1363DF")];

      // Add data
      chart.data = [
        {
          country: "Tabungan",
          year2017: 98,
          year2018: 98,
        },
        {
          country: "Giro",
          year2017: 97,
          year2018: 99.7,
        },
        {
          country: "Depostito",
          year2017: 106,
          year2018: 108.2,
        },
        {
          country: "Total",
          year2017: 100,
          year2018: 102,
        },
      ];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.fontWeight = 600;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      // valueAxis.title.text = `Overall Performance (${title})`;
      valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text + "%";
      });

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueY = "year2017";
      series.dataFields.categoryX = "country";
      series.name = "Year 2017";
      series.clustered = false;
      series.columns.template.tooltipText = "GDP grow in {category} (2021): [bold]{valueY}%[/]";
      series.columns.template.fillOpacity = 0.9;

      //   var series2 = chart.series.push(new am4charts.ColumnSeries3D());
      //   series2.dataFields.valueY = "year2018";
      //   series2.dataFields.categoryX = "country";
      //   series2.name = "Year 2018";
      //   series2.clustered = false;
      //   series2.columns.template.tooltipText = "GDP grow in {category} (2022): [bold]{valueY}%[/]";
    }); // end am4core.ready()
  }, [title]);
  return <div className="w-full h-full" ref={stackContainer}></div>;
}

export default Bar2;
