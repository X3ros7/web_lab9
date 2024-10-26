import React from "react";
import styles from "./Hystogram.module.css";

interface dataPoint {
  label: string;
  value: number;
  maxValue: number;
}

interface HystogramProps {
  dataPoints: dataPoint[];
}

const Hystogram = ({ dataPoints }: HystogramProps) => {
  return (
    <div className={styles.chart}>
      {dataPoints.map((dataPoint) => {
        const barFillHeight =
          dataPoint.maxValue > 0
            ? `${(dataPoint.value / dataPoint.maxValue) * 100}px`
            : "0px";

        return (
          <div key={dataPoint.label} className={styles.chart_bar}>
            <div className={styles.chart_bar__inner}>
              <div
                className={styles.chart_bar__fill}
                style={{ height: barFillHeight }}
              ></div>
            </div>
            <div className={styles.chart_bar__label}>{dataPoint.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Hystogram;
