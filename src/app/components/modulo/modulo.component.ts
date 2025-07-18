import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {
  datos: any = {};

  constructor(private sharedData: SharedDataService) {}

  ngOnInit() {
   
    this.GarantiaRetiroCons.getGarantias(this.general.ccmmmActual.idTramite, 3).subscribe(res => {
      if (!res.err) {
        this.garantiasAll = res.data;
        console.log('Respuesta:', res.data);


        if (res.data && res.data.length > 0) {
          const garantia = res.data[0];

          this.Validagart82.patchValue({
            idTramite: garantia.IDTramite,
            nrusuario: this.general.usuarioConectado.rut,
            Ngaratia: garantia.GLNRGarantia,
            Modocobro: garantia.CDTPIndicador,
            Montogarantia: garantia.NRMontoGarantia,
            FEmision: garantia.FCEmisionGarantia?.split('T')[0],
            FVenvimiento: garantia.FCVencimientoGarantia?.split('T')[0],
            Tipodoc: garantia.CDTPDocumento,
            Emtidadfin: garantia.IDPersonaBanco,
            EntiSeguro: garantia.IDPersonaAseguradora,
            GLNRGarantiaPrueba: 'Garantia Retiro Contruccion',
            CDTPGarantiaConstruccion: garantia.CDTPGarantiaConstruccion,
            CDTPGarantia: garantia.CDTPGarantia
          });

          this.Validagart82.disable();
          this.general.ccmmmActual.idgarantia = res.data[0].id
          this.muestraerror = false
        }
      } else {
        console.error('Error al obtener garantías:', res.message);
      }
    });
  }

  el otro
   if (this.general.getNumTramite() != 0) {

      this.getTramite(this.general.getNumTramite())
      this.servMovimiento.getTramite(this.general.getNumTramite()).subscribe({
        next: (res) => {
          console.log('el movimiento es :', this.general.getNumTramite());
          this.elmovimiento = res.data;
          console.log(this.elmovimiento)
          this.formmov.disable()
          // this.formmov.clearValidators()
        },
        error: (err) => {
          console.error('Error al obtener movimientos:', err);
        }
      });
      this.mostrarValidacion = false

    }

   getTramite(id: any) {

    this.servMovimiento.getTramite(id).subscribe(resp => {
      if (!resp.err) {
        console.log(resp.data)

        this.formmov.get('NrDecreto')?.setValue(resp.data[0].GLDecreto);
        this.formmov.get('NrResolucion')?.setValue(resp.data[0].GLResolucion);
        this.formmov.get('Tmovimientos')?.setValue(resp.data[0].CDTPTramite);
        this.formmov.get('movincluido1')?.setValue(+resp.data[0].CDTPIndicador);

        this.formmov.get('InsPagina')?.setValue(resp.data[0].GLPaginaLibro);
        this.formmov.get('inscolumna')?.setValue(resp.data[0].GLColumnaLibro);
        this.formmov.get('insLinea')?.setValue(resp.data[0].GLLineaLibro);
        this.formmov.get('cartashoa')?.setValue(resp.data[0].IDCarta);
        this.formmov.get('datum')?.setValue(resp.data[0].CDTPDatum);

        this.formmov.get('FcDecreto')?.setValue(this.formatDate(resp.data[0].FCDecreto));
        this.formmov.get('FcEscritura')?.setValue(this.formatDate(resp.data[0].FCEscritura));
        this.formmov.get('FcVigencia')?.setValue(this.formatDate(resp.data[0].FCVigencia));
        this.formmov.get('FcEntrega')?.setValue(this.formatDate(resp.data[0].FCActaEntrega));


      }
    });


  }
}
