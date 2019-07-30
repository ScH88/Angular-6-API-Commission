import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {
  @Input() _jsonArray = [];
  @Input() headVal;
  @Input() val1;
  @Input() val2;
  @Input() uniqueId;
  public jsonData;
  public padding;
  public chartArea;
  public theGraph;

  constructor() { }

  ngOnInit() {
    this.padding = {left: 50, right: 50, bottom: 50, top: 50};
    this.chartArea = {
        "width": parseInt(600 - this.padding.left - this.padding.right),
        "height": parseInt(400 - this.padding.top - this.padding.bottom)
    };
  }

  ngAfterContentInit() {
  }

  ngAfterViewChecked() {
    this.theGraph = d3.select('#'+this.uniqueId).attr('width', (this.chartArea.width + this.padding.left + this.padding.right) + "px")
    .attr('height', (this.chartArea.height + this.padding.top + this.padding.bottom) + "px")
    .style('background-color', '#FFF')
    .style('border', '1px #000 solid');
    var headName = this.headVal;
    var val1Name = this.val1;
    var val2Name = this.val2;
    var maxLead = d3.max(this._jsonArray, function(entry){
      return entry[headName];
    });
    var minLead = d3.min(this._jsonArray, function(entry){
      return entry[headName];
    });
    var maxVal1 = d3.max(this._jsonArray, function(entry){
      return entry[val1Name];
    });
    var minVal2 = d3.min(this._jsonArray, function(entry){
      return entry[val2Name];
    });

    var yScale = d3.scaleLinear().domain([minVal2, maxVal1]).range([this.chartArea.height, 0]);
    var xScale = d3.scaleTime().domain([maxLead, minLead]).range([0, this.chartArea.width]);
    //
    var xAxis = this.theGraph.append('g').classed('xAxis', true)
        .attr('transform', 'translate(' + this.padding.left + ',' + (this.chartArea.height + this.padding.top) + ')')
        .call(d3.axisBottom(xScale));
    var yAxisFn = d3.axisLeft(yScale);
    var yAxis = this.theGraph.append('g').classed('yAxis', true)
        .attr('transform', 'translate(' + this.padding.left + ',' + this.padding.top + ')');
    yAxisFn(yAxis);
    //
    var gridSvg = this.theGraph.append("g").attr("class", "grid")
        .attr('transform', 'translate(' + this.padding.left + ',' + this.padding.top + ')')
        .call(
                d3.axisLeft(yScale)
                .tickSize(-(this.chartArea.width))
                .tickFormat("")
                );
    //
    var chartGroup = this.theGraph.append('g').attr('transform', 'translate(50, 50)');

    var val1Line = d3.line().x(function(d) {
        return xScale(d[headName]);
    }).y(function(d) {
        return yScale(d[val1Name]);
    });
    var val2Line = d3.line().x(function(d) {
        return xScale(d[headName]);
    }).y(function(d) {
        return yScale(d[val2Name]);
    });
    chartGroup.append('path').datum(this._jsonArray)
     .attr("fill", "none")
     .attr("stroke", "green")
     .attr("stroke-linejoin", "round")
     .attr("stroke-linecap", "round")
     .attr("stroke-width", 1.5)
     .attr("d", val1Line);
     chartGroup.append('path').datum(this._jsonArray)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", val2Line);
    chartGroup.append('g').attr('class', 'x-axis')
    .attr('transform', 'translate(0 ,' + (this.chartArea.height) + ')');
    chartGroup.append('g').attr('class', 'y-axis');
  }

}
