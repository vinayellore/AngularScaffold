import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.drawBarChart();
    this.drawPieChart();
  }

  drawBarChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('barChart');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#4CAF50';
      const data = [150, 200, 250, 300, 350];
      data.forEach((value, index) => {
        ctx.fillRect(index * 50 + 20, 300 - value, 40, value); // draw bars
      });
    }
  }

  drawPieChart() {
    const canvas = <HTMLCanvasElement>document.getElementById('pieChart');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const data = [40, 60, 100];
      const colors = ['#4CAF50', '#FFC107', '#FF5722'];
      let total = data.reduce((a, b) => a + b, 0);
      let startAngle = 0;

      data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(150, 150); // move to center of pie chart
        ctx.arc(150, 150, 100, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();
        startAngle += sliceAngle;
      });
    }
  }
}
