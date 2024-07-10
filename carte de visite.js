document.getElementById('toggleButton').addEventListener('click', function () {
   var details = document.getElementById('details');
   if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block';
      this.textContent = 'Voir moins';
   } else {
      details.style.display = 'none';
      this.textContent = 'Voir plus';
   }
});