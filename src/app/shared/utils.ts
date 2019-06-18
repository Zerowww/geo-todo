import Swal from 'sweetalert2/dist/sweetalert2.js';

export const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});
