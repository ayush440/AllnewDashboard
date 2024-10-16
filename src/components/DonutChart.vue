<template>
  <div class="donut-chart">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const chartRef = ref(null);
let chart = null;

const createChart = () => {
  const ctx = chartRef.value.getContext('2d');
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Strategy 1', 'Strategy 2', 'Strategy 3', 'Strategy 4'],
      datasets: [{
        data: [55, 25, 10, 5],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }

          // Create a gradient for Strategy 1 (#FF0000 to white)
          const gradientRed = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradientRed.addColorStop(0, '#FF0000');
          gradientRed.addColorStop(1, '#ffffff');

          // Create a gradient for Strategy 2 (#5D5FEF to white)
          const gradientBlue = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradientBlue.addColorStop(0, '#5D5FEF');
          gradientBlue.addColorStop(1, '#ffffff');

          return [
            gradientRed,   // Linear gradient for Strategy 1 
            gradientBlue,  // Linear gradient for Strategy 2
            '#A1E3CB',     // Strategy 3 
            '#A8C5DA'      // Strategy 4 
          ];
        },
        borderWidth: 0,
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            padding: 20,
            font: {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12
            },
            generateLabels: (chart) => {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => {
                  let fillStyle;
                  if (i === 0) {
                    fillStyle = '#FF0000'; // Red for Strategy 1
                  } else if (i === 1) {
                    fillStyle = '#5D5FEF'; // Blue for Strategy 2
                  } else if (i === 2) {
                    fillStyle = '#A1E3CB'; // Green for Strategy 3
                  } else if (i === 3) {
                    fillStyle = '#A8C5DA'; // Light blue for Strategy 4
                  }
                  return {
                    text: `${label} ${data.datasets[0].data[i]}%`,
                    fillStyle: fillStyle,
                    hidden: isNaN(data.datasets[0].data[i]),
                    index: i
                  };
                });
              }
              return [];
            }
          }
        },
        tooltip: {
          enabled: true
        }
      },
      cutout: '50%', // Reduced the inner size for a smaller donut
      spacing: 5
    }
  });
}

onMounted(() => {
  createChart();
});
</script>

<style scoped>
.donut-chart {
  height: 350px; /* Reduced height for a smaller chart */
  width: 100%;
  max-width: 500px; /* Reduced max-width to make the chart smaller */
  margin: 0 auto;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
}

.chart-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
}
</style>
