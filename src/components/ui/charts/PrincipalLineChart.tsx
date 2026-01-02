"use client";

import React, { useEffect, useRef } from "react";
import {
    // Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

Chart.register(
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
    interest: number[];
    totalPerformance: number[];
}

export default function PrincipalLineChart({
    years,
    beforeTax,
    afterTax,
    interest,
    totalPerformance,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const chart = new Chart(canvasRef.current, {
            type: "line",
            data: {
                labels: years.map((y) => `Year ${y}`),
                datasets: [
                    {
                        label: "Before Tax Cash Flow",
                        data: beforeTax,
                        borderColor: "#F97316",
                        backgroundColor: "rgba(249, 115, 22, 0.35)",
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "After Tax Cash Flow",
                        data: afterTax,
                        borderColor: "#10B981",
                        backgroundColor: "rgba(16, 185, 129, 0.35)",
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "Interest Repayment",
                        data: interest,
                        borderColor: "#22C55E",
                        backgroundColor: "rgba(34, 197, 94, 0.35)",
                        fill: true,
                        tension: 0.4,
                    },
                    {
                        label: "Total Performance (Growth + Before Tax)",
                        data: totalPerformance,
                        borderColor: "#8B5CF6",
                        backgroundColor: "rgba(139, 92, 246, 0.35)",
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
                    legend: {
                        position: "top",
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: "rgba(0,0,0,0.85)",
                        padding: 12,
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
                        title: {
                            display: true,
                            text: "Year",
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: "Value",
                        },
                        ticks: {
                            callback: (value) => `$${Number(value).toLocaleString()}`,
                        },
                    },
                },
            },
        });

        return () => chart.destroy();
    }, [years, beforeTax, afterTax, interest, totalPerformance]);

    return <canvas ref={canvasRef} />;
}


