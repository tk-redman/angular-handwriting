import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { fabric } from 'fabric';

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.scss']
})
export class CanvasPageComponent implements OnInit {
  private canvas: fabric.Canvas;

  brushColor: string = 'black';
  brushWidth: number = 5;


  constructor(private eventManager: EventManager) { }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
      isDrawingMode: true,
      selection: true,
      stateful: true
    });

    this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
    this.canvas.freeDrawingBrush.color = this.brushColor;
    this.canvas.freeDrawingBrush.width = this.brushWidth;
    this.canvas.freeDrawingBrush.shadowBlur = 0;
    this.canvas.hoverCursor = 'move';

  }

  clearCanvas(){
    this.canvas.clear();
  }

}