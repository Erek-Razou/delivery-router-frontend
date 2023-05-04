import React from "react";
import dynamic from "next/dynamic";
import BarChart from "../components/charts/barChart";
import LineChart from "../components/charts/lineChart";
import Data from "@/components/data";

// For Charts Doc : https://upmostly.com/tutorials/how-to-use-chart-js-with-react

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map"), {
    ssr: false
  });



  return (
      <main>
        <div id="map">
          <MapWithNoSSR />
        </div>
        <div id={"charts"} >
            <BarChart />
            <LineChart/>
        </div>
      </main>
  );
}