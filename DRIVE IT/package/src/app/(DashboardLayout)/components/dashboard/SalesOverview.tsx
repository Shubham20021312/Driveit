import React from 'react';
import { useTheme } from '@mui/material/styles';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {

    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;

    // Dummy data for car names and their percentage changes
    const carData = [
        { name: 'Lamborghini Urus Performante | 2024', percentageChange: 5 },
        { name: 'Lamborghini Urus Performante | 2024', percentageChange: -2 },
        { name: 'Lamborghini Urus Performante | 2024', percentageChange: 7 },
        { name: 'Lamborghini Urus Performante | 2024', percentageChange: -3 },
        { name: 'Lamborghini Urus Performante | 2024', percentageChange: 4 },
    ];

    // chart options
    const optionsAreaChart = {
        chart: {
            type: 'area',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#adb0bb',
            toolbar: {
                show: true,
            },
            height: 370,
        },
        colors: [primary],
        stroke: {
            show: true,
            curve: 'smooth',
            width: 2,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            tickAmount: 4,
        },
        xaxis: {
            categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
        },
    };

    // chart data series
    const seriesAreaChart = [
        {
            name: 'Booking',
            data: [355, 390, 300, 350, 390, 180, 355, 390],
        },
    ];

    // calculate total bookings
    const totalBookings = seriesAreaChart[0].data.reduce((acc, curr) => acc + curr, 0);

    // Function to determine arrow icon and percentage color based on percentage change
    const getArrowIcon = (percentageChange) => {
        if (percentageChange > 0) {
            return (
                <span style={{ color: 'green' }}>
                    ▲ {percentageChange}%
                </span>
            );
        } else if (percentageChange < 0) {
            return (
                <span style={{ color: 'red' }}>
                    ▼ {Math.abs(percentageChange)}%
                </span>
            );
        } else {
            return (
                <span>
                    - {percentageChange}%
                </span>
            );
        }
    };

    return (
        <DashboardCard 
            title="Bookings" 
            action={<h1>{totalBookings}</h1>}
        >
            <Chart
                options={optionsAreaChart}
                series={seriesAreaChart}
                type="area"
                height={370}
                width={"100%"}
            />
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
                {carData.map((car, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <h3 style={{ marginRight: '10px' }}>{car.name}</h3>
                        {getArrowIcon(car.percentageChange)}
                        {/* Displaying the count after percentage */}
                        <h4 style={{ marginLeft: '10px' }}>{Math.round(totalBookings * (1 + car.percentageChange / 100))}</h4>
                    </div>
                ))}
            </div>
        </DashboardCard>
    );
};

export default SalesOverview;
