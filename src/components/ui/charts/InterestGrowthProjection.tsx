"use client";

import React, { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
} from "chart.js";

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler
);

interface Props {
    years: number[];
    propertyValues: number[];
}

export default function GrowthProjectionChart({
    years,
    propertyValues,
}: Props) {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const chart = new Chart(ref.current, {
            type: "line",
            data: {
                labels: years,
                datasets: [
                    {
                        label: "Property Value",
                        data: propertyValues,
                        borderColor: "#FDBA74",
                        backgroundColor: "rgba(253,186,116,0.45)",
                        fill: true,
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: true,
                interaction: {
                    mode: "index",
                    intersect: false,
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: "#111",
                        callbacks: {
                            label: (ctx) =>
                                `$${Number(ctx.raw).toLocaleString()}`,
                        },
                    },
                },
                scales: {
                    x: {
                        title: { display: true, text: "Year" },
                    },
                    y: {
                        title: { display: true, text: "Value" },
                        ticks: {
                            callback: (v) => `$${Number(v).toLocaleString()}`,
                        },
                    },
                },
            },
        });

        return () => chart.destroy();
    }, [years, propertyValues]);

    return <canvas ref={ref} />;
}
