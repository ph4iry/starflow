document.querySelectorAll('.template-content').forEach(input => {
  console.log('added');
  input.addEventListener('change', () => {
    document.getElementById(`template-${input.id}`).innerHTML = input.value;
  });
});