"use strict";

/* eslint-disable object-shorthand */

/* global Chart, CustomTooltips, getStyle, hexToRgba */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.1.15): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.tooltips.mode = 'index';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.global.tooltips.custom = CustomTooltips;
Chart.defaults.global.tooltips.intersect = true;

Chart.defaults.global.tooltips.callbacks.labelColor = function (tooltipItem, chart) {
  return {
    backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
  };
}; // eslint-disable-next-line no-unused-vars

// random Numbers
var random = function random() {
  return Math.round((Math.random() + 1) * 1000000);
}; // eslint-disable-next-line no-unused-vars
// random Numbers
var random1 = function random1() {
  return Math.round((Math.random() + 2) * 1000000);
}; // eslint-disable-next-line no-unused-vars

var mainChart = new Chart($('#main-chart'), {
  type: 'line',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
    datasets: [{
      label: 'Pemasukan',
      backgroundColor: hexToRgba(getStyle('--success'), 10),
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [random1(), random1(), random1(), random1(), random1(), random1(), random1()]
    }, {
      label: 'Pengeluaran',
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [random(), random(), random(), random(), random(), random(), random()]
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            if (parseInt(value) >= 1000) {
              return 'Rp' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            } else {
              return 'Rp' + value;
            }
          }
        }
      }]
    }
  }
}); // eslint-disable-next-line no-unused-vars
//# sourceMappingURL=main.js.map