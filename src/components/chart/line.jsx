import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Line() {
  const lineContainer = useRef(null);

  useEffect(() => {
    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create(lineContainer.current, am4charts.XYChart);

      var data = [];

      chart.data = [
        {
          year: "Jan",
          income: 150000000,
          expenses: 21.1,
          lineColor: chart.colors.next(),
        },
        {
          year: "Feb",
          income: 125000000,
          expenses: 30.5,
        },
        {
          year: "Mar",
          income: 145000000,
          expenses: 34.9,
        },
        {
          year: "April",
          income: 140000000,
          expenses: 23.1,
        },
        {
          year: "Mei",
          income: 150000000,
          expenses: 28.2,
          lineColor: chart.colors.next(),
        },
        {
          year: "Jun",
          income: 125000000,
          expenses: 31.9,
        },
      ];

      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.ticks.template.disabled = true;
      categoryAxis.renderer.line.opacity = 0;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.dataFields.category = "year";
      categoryAxis.startLocation = 0.4;
      categoryAxis.endLocation = 0.6;
      categoryAxis.renderer.fontWeight = 600;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.line.opacity = 0;
      valueAxis.renderer.ticks.template.disabled = true;
      valueAxis.min = 0;

      var lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.categoryX = "year";
      lineSeries.dataFields.valueY = "income";
      lineSeries.tooltipText = "income: {valueY.value}";
      lineSeries.fillOpacity = 0.5;
      lineSeries.strokeWidth = 3;
      lineSeries.propertyFields.stroke = "lineColor";
      lineSeries.propertyFields.fill = "lineColor";

      var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      bullet.circle.radius = 6;
      bullet.circle.fill = am4core.color("#fff");
      bullet.circle.strokeWidth = 3;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panX";
      chart.cursor.lineX.opacity = 0;
      chart.cursor.lineY.opacity = 0;

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.parent = chart.bottomAxesContainer;
    }); // end am4core.ready()
  }, []);
  return <div className="w-full h-full" ref={lineContainer}></div>;
}

export default Line;
