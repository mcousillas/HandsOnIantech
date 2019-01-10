import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICompetidor } from '../competidor';
import { CompetidoresService } from '../../services/competidores.service';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-competidor-form',
  templateUrl: './competidor-form.component.html',
  styleUrls: ['./competidor-form.component.css']
})


export class CompetidorFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private competidorService: CompetidoresService,
    private router: Router,
    private _dialogRef: MatDialogRef<CompetidorFormComponent>
    ) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
                  id: '',
                  codigo: '',
                  nombre: '',
                  direccion: '',
                  lat: '',
                  long: '',
                  nombreCoorporativo: '',
                  marcador: '',
                  observar: '',
                  marca: '',
                  zonaPrecios: ''

    });

  }

  saveCompetidor() {

    let competidor: ICompetidor = Object.assign({}, this.formGroup.value);
    console.table(competidor);
    
    this.competidorService.createCompetidor(competidor)
      .subscribe(competidor => this.onSaveOK(),
        error => console.error(error));

  }

  onSaveOK() {
    
    this.router.navigate(['/competidores']);
    this._dialogRef.close();
    
  }

  onClose() {

    this._dialogRef.close();
    
  }

}
