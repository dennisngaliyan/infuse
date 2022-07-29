import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Cylinder({ cabang }) {
  const chartContainer = useRef(null);
  useEffect(() => {
    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create(chartContainer.current, am4charts.XYChart3D);

      chart.colors.list = [am4core.color("#FC5185"), am4core.color("#FF0063"), am4core.color("#FF2E63")];
      chart.paddingBottom = 50;
      chart.angle = 35;

      // Add data
      chart.data = [
        {
          country: "Tabungan",
          visits: 20,
        },
        {
          country: "Giro",
          visits: 30,
        },
        {
          country: "Deposito",
          visits: 50,
        },
        //   {
        //     country: "Germany",
        //     visits: 1322,
        //   },
        //   {
        //     country: "UK",
        //     visits: 1122,
        //   },
        //   {
        //     country: "France",
        //     visits: 1114,
        //   },
        //   {
        //     country: "India",
        //     visits: 984,
        //   },
        //   {
        //     country: "Spain",
        //     visits: 711,
        //   },
        //   {
        //     country: "Netherlands",
        //     visits: 665,
        //   },
        //   {
        //     country: "Russia",
        //     visits: 580,
        //   },
        //   {
        //     country: "South Korea",
        //     visits: 443,
        //   },
        //   {
        //     country: "Canada",
        //     visits: 441,
        //   },
        //   {
        //     country: "Brazil",
        //     visits: 395,
        //   },
        //   {
        //     country: "Italy",
        //     visits: 386,
        //   },
        //   {
        //     country: "Taiwan",
        //     visits: 338,
        //   },
      ];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let labelTemplate = categoryAxis.renderer.labels.template;
      // labelTemplate.rotation = -90;
      labelTemplate.horizontalCenter = "middle";
      labelTemplate.verticalCenter = "left";
      labelTemplate.fill = "#fff";
      // labelTemplate.dy = 10; // moves it a bit down;
      labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.disabled = false;
      valueAxis.title.text = `Performance Cabang ${cabang}`;
      valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text + "%";
      });

      // Create series
      var series = chart.series.push(new am4charts.ConeSeries());
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";

      var columnTemplate = series.columns.template;
      columnTemplate.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      columnTemplate.adapter.add("stroke", function (stroke, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });
    }); // end am4core.ready()
  }, [cabang]);
  return <div ref={chartContainer} className="w-full h-[30rem]" id="chartdiv"></div>;
}

export default Cylinder;
