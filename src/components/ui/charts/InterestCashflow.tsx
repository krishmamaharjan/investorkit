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
    Legend,
    Filler,
} from "chart.js";

Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    Filler
);

interface Props {
    years: number[];
    beforeTax: number[];
    afterTax: number[];
}

export default function CashflowProjectionChart({
    years,
    beforeTax,
    afterTax,
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
                        label: "Before Tax Cash Flow",
                        data: beforeTax,
                        borderColor: "#FB923C",
                        backgroundColor: "rgba(251,146,60,0.45)",
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "After Tax Cash Flow",
                        data: afterTax,
                        borderColor: "#FDBA74",
                        backgroundColor: "rgba(253,186,116,0.35)",
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
                                `${ctx.dataset.label}: $${Number(
                                    ctx.raw
                                ).toLocaleString()}`,
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
    }, [years, beforeTax, afterTax]);

    return <canvas ref={ref} />;
}
