import { Component } from '@angular/core';
export interface SelectModel {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umrechner';
  public lengthMeasurements: SelectModel[] = [
    {value: 6, viewValue: 'km'},
    {value: 5, viewValue: 'm'},
    {value: 4, viewValue: 'cm'},
    {value: 3, viewValue: 'mm'},
    {value: 2, viewValue: 'µm'},
    {value: 1, viewValue: 'nm'}
  ];
  public volumeMeasurements: SelectModel[] = [
    {value: 1, viewValue: 'm³'},
    {value: 2, viewValue: 'cm³'},
    {value: 3, viewValue: 'dm³'},
    {value: 4, viewValue: 'm³'}
    ];
  public umrechnen(model1: SelectModel, model2: SelectModel, value: number): number {
    if (model1.value < model2.value) {
      return value * 10 ^ (model2.value - model1.value);
    } else if (model1.value > model2.value){
      return value * 10 ^ (model2.value - model1.value);
    } else {
      return value;
    }
  }
}
