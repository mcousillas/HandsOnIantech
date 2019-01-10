import { Component, OnInit, ViewChild } from '@angular/core';
import { ICompetidor } from './competidor';
import { CompetidoresService } from '../services/competidores.service';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { CompetidorFormComponent } from './competidor-form/competidor-form.component';

@Component({
  selector: 'app-competidores',
  templateUrl: './competidores.component.html',
  styleUrls: ['./competidores.component.css']
})
export class CompetidoresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  competidores: ICompetidor[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'codigo', 'nombre', 'direccion', 'acciones'];
  constructor(private competidorService: CompetidoresService,
    private _dialogForm: MatDialog
  ) { }


  public dataSource = new MatTableDataSource<ICompetidor>();

  ngOnInit() {

   this.getAllCompetidores();
   
  }


  newCompetidor() {
    const dialogConfig = new MatDialogConfig;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';

    this._dialogForm.open(CompetidorFormComponent, dialogConfig);

    this._dialogForm.afterAllClosed.subscribe(res => {
      this.getAllCompetidores(); 
    })
    

  }

  getAllCompetidores() {

    this.competidorService.getCompetidor().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onCompetidorDelete(id: number) {
    if (confirm('Esta seguro de eliminar el registro?')) {
      this.competidorService.deleteCompetidor(id).then(res => {
       
        this.getAllCompetidores();
       
      });
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
