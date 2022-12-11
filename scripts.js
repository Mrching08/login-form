function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

  if (username == "admin" && password == "password") {
window.location.replace("dash.html");
  } else {
alert("Invalid username or password. Please try again.");
  }
  }


  //lahi sadni



const headerCells = document.querySelectorAll('th');
headerCells.forEach(headerCell => {
  headerCell.addEventListener('click', () => {
    const tableBody = headerCell.closest('table').querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');


    const sortedRows = [...rows].sort((a, b) => {
      const aValue = a.querySelector(`td:nth-child(${headerCell.cellIndex + 1})`).textContent;
      const bValue = b.querySelector(`td:nth-child(${headerCell.cellIndex + 1})`).textContent;
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });

    
    sortedRows.forEach(row => tableBody.appendChild(row));
  });
});


const rows = document.querySelectorAll('tr');
rows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.backgroundColor = 'lightgray';
  });
  row.addEventListener('mouseleave', () => {
    row.style.backgroundColor = '';
  });
});
