// Get modal element
var modal = document.querySelector('#simpleModal');
console.log(modal)
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
if(modalBtn){
  modalBtn.addEventListener('click', function openModal(){
    modal.style.display = 'block';
  });
}
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
});

// Open modal


// Close modal
function closeModal(){
  modal.style.display = 'none';
}

// Click outside and close
