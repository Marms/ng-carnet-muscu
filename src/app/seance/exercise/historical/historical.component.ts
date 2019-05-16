import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';
import {SeanceService} from '../../seance.service';
import {Seance} from '../../seance.model';
import {Exercise} from '../exercise.model';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {Serie} from '../serie.model';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  name: string;
  id: number;
  exercices: Exercise[];

  // DATA Chart
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  constructor(private seanceSvc: SeanceService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getAllExercise();
    //init graphique
    const merged = this.exercices.map(e => this.getSum(e.series));
    const labels = this.exercices.map(e => this.getDate(e.date));
    this.lineChartData = [{data: merged.reverse(), label: 'Total KG'}];
    this.lineChartLabels = labels.reverse();
  }

  getSum(serie: Serie[]): number {
    let sum = 0;
    for (let i = 0; i < serie.length; i++) {
      sum += (serie[i].weight * serie[i].repetition);
    }
    return sum;
  }

  getDate(timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(timestamp); // Hours part from the timestamp
    console.log(date);
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

  }

  getAllExercise() {

    const seances: Seance[] = this.seanceSvc.getSeances();

    this.exercices = seances.map(s => this.getExerciseOfSeance(s));
    this.exercices = this.exercices.filter(e => e !== undefined);
  }

  getExerciseOfSeance(s: Seance) {
    const exos: Exercise[] = s.exercises.filter(e => e.template.name === this.name);
    return null !== exos ? exos[0] : null;
  }
}
