import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function Pie({ title }) {
  const pieContainer = useRef(null);

  useEffect(() => {
    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create(pieContainer.current, am4charts.PieChart);

      // Add data
      chart.data = [
        {
          country: "Tabungan",
          litres: 33,
        },
        {
          country: "Giro",
          litres: 34,
        },
        {
          country: "Deposito",
          litres: 33,
        },
      ];

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.innerRadius = am4core.percent(50);
      pieSeries.ticks.template.disabled = true;
      pieSeries.labels.template.disabled = true;

      var rgm = new am4core.RadialGradientModifier();
      rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, -0.5);
      pieSeries.slices.template.fillModifier = rgm;
      pieSeries.slices.template.strokeModifier = rgm;
      pieSeries.slices.template.strokeOpacity = 0.4;
      pieSeries.slices.template.strokeWidth = 0;

      chart.legend = new am4charts.Legend();
      chart.legend.position = "right";
    }); // end am4core.ready()
  }, [title]);
  return <div className="w-full h-full" ref={pieContainer}></div>;
}

export default Pie;
