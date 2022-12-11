function login() {
    // get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // check if the username and password are valid
    // check if the username and password are correct
  if (username == "admin" && password == "password") {
// if the username and password are correct, redirect the user to the dashboard page
window.location.replace("dash.html");
  } else {
// if the username and password are incorrect, show an error message
alert("Invalid username or password. Please try again.");
  }
  }


  //lahi sadni

  // Use JavaScript to add interactivity to the table

// Add a sort function to the table header cells
const headerCells = document.querySelectorAll('th');
headerCells.forEach(headerCell => {
  headerCell.addEventListener('click', () => {
    // Get the table body and the rows within it
    const tableBody = headerCell.closest('table').querySelector('tbody');
    const rows = tableBody.querySelectorAll('tr');

    // Sort the rows based on the content of the clicked header cell
    const sortedRows = [...rows].sort((a, b) => {
      const aValue = a.querySelector(`td:nth-child(${headerCell.cellIndex + 1})`).textContent;
      const bValue = b.querySelector(`td:nth-child(${headerCell.cellIndex + 1})`).textContent;
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });

    // Replace the current rows in the table body with the sorted rows
    sortedRows.forEach(row => tableBody.appendChild(row));
  });
});

// Add a hover effect to the table rows
const rows = document.querySelectorAll('tr');
rows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    row.style.backgroundColor = 'lightgray';
  });
  row.addEventListener('mouseleave', () => {
    row.style.backgroundColor = '';
  });
});