// // Get modal element
// var modal = document.querySelector('#simpleModal');
// console.log(modal)
// // Get open modal button
// var modalBtn = document.getElementById('modalBtn');
// // Get close button
// var closeBtn = document.getElementsByClassName('closeBtn')[0];

// // Listen for open click
// if(modalBtn){
//   modalBtn.addEventListener('click', function openModal(){
//     modal.style.display = 'block';
//   });
// }
// // Listen for close click
// closeBtn.addEventListener('click', closeModal);
// // Listen for outside click
// window.addEventListener('click', function outsideClick(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//   }
// });

// // Open modal


// // Close modal
// function closeModal(){
//   modal.style.display = 'none';
// }

// // Click outside and close
// open modal by id
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
  document.querySelector('.jw-modal.open').classList.remove('open');
  document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
  // close modals on background click
  document.addEventListener('click', event => {
      if (event.target.classList.contains('jw-modal')) {
          closeModal();
      }
  });
});