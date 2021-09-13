import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() {

  }

  sweetAdded() {
    Swal.fire({
      title: 'Added!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000
    })
  }
  sweetUpdated() {
    Swal.fire({
      title: 'Actualizado!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000
    })
  }

  async sweetQuestionDelete() {
    return Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => result.isConfirmed)
  }

  sweetDeleted() {
    Swal.fire({
      title: 'Deleted!',
      icon: 'success',
      showConfirmButton: false,
      timer: 1000
    })
  }

  sweetError() {
    Swal.fire({
      title: 'Error!',
      text: `Digite correctamente sus datos`,
      icon: 'error',
      showConfirmButton: false,
      timer: 2000
    })
  }

  exitsUser() {
    Swal.fire({
      title: 'YA EXISTE ESTE USUARIO!',
      text: `Usuario existente`,
      icon: 'warning',
      showConfirmButton: false,
    })
  }

  fillInFields() {
    Swal.fire({
      title: 'POR FAVOR LLENE LOS CAMPOS!',
      icon: 'warning',
      showConfirmButton: false,
    })
  }
}
