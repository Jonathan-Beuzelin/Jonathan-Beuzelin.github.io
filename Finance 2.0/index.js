let days = []

var ctx = document.getElementById('yearlyChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Funds beginning of each month',
            data: [1200, 1900, 300, 500, 2000, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
        display: true,
        text: "Funds over the year."
      },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('monthlyChart');
var newChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [12, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      title: {
        display: true,
        text: "Funds over the month."
      },
      maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
          }]
        }
      }
 });




function addLabelDates() {
  var date = new Date()
  x = date.getMonth()
  n = date.getYear()
  console.log(n)
  console.log(date.getMonth())
  if (x == 0 || x == 2 || x == 4 || x == 6 || x == 7 || x == 9 || x == 11) {
    for (var i = 1; i < 32; i++) {
      days.push(i.toString())
    }
  } else if (x == 3 || x == 5 || x == 8 || x == 10) {
    for (var i = 1; i < 31; i++) {
      days.push(i.toString())
    }
  } else if (x == 1 && n == 2024 || n == 2028 || n == 2032 || n == 2036 || n == 2040 || n == 2044 || n == 2048 ) {
    for (var i = 1; i < 30; i++) {
      days.push(i.toString())
    }
  } else if (x == 1) {
    for (var i = 1; i < 28; i++) {
      days.push(i.toString())
    }
  }
}

function addData(chart, label, data) {
  for (var i = 0; i < days.length; i++) {
    chart.data.labels.push(label[i]);
  }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

addLabelDates()
addData(newChart2, days, 12)
