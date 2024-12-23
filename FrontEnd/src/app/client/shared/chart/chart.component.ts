import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {CommandeService} from "../../../service/commande.service";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit{
  chartOptions!: any;

  vendor!: any
  vendorStats!: any
  nombreVentes!: any
  produitsVendus!: any
  commandesAnnulees!: any

  test!: any

  constructor(private authService: AuthService, private commandeService: CommandeService, private userService: UserService) {
  }

  ngOnInit() {
    this.vendor = this.authService.getUser()
    this.getVendorCommandes()
  }

  setChartOptions(){
    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Ventes', 'Produits vendus', 'Commandes annulées']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Produits vendus',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          name: 'Commandes annulées',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: 'Ventes',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            }
          },
          data: this.nombreVentes
        },
        {
          name: 'Produits vendus',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value: any) {
              return value ;
            }
          },
          data: this.produitsVendus
        },
        {
          name: 'Commandes annulées',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value: any) {
              return value;
            }
          },
          data: this.commandesAnnulees
        }
      ]
    };
  }

  getVendorCommandes(){
    this.userService.vendorDashboardStats(this.vendor!.id).subscribe({
      next: response => {
        this.vendorStats = response
        this.vendorStatsProcess(this.vendorStats)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  vendorStatsProcess(stats: any){
    this.nombreVentes = Object.values(stats.nombreVentes)
    this.produitsVendus = Object.values(stats.produitsVendus)
    this.commandesAnnulees = Object.values(stats.commandesAnnulees)

    console.log(this.nombreVentes)
    console.log(this.produitsVendus)
    console.log(this.commandesAnnulees)

    this.setChartOptions()

  }
}
