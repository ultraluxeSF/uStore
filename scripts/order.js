var orderProduct = document.getElementById('confirm');
// var printTaskBtn = document.getElementById('print-tasks');

var tasks = [];

orderProduct.onclick = (event) => {
    event.preventDefault();

    // get variables by getting the value from HTML IDs'
    var name = document.getElementById('name').value;
    var num = document.getElementById('num').value;
    var loc = document.getElementById('loc').value;
    var zip = document.getElementById('zip').value;
    var card = document.getElementById('card').value;
    var cvv = document.getElementById('cvv').value;
    var price = document.getElementById('price').textContent;
    var title = document.getElementById('title').textContent;


// Validation whether the following variable fields contain something
    if (name !== '' &&  num !== '' && loc !== '' && zip !== '' && card !== '' && cvv !== '') {

        alert(name + ', ' + 'Thank you for choosing Ultraluxe Store!' + '\n' + '\n' + 'Product: ' + title + '\n' + 'Payment amount: ' + price + '\n' + 'Shipment address: ' + loc + ', ' + zip);
          // if(confirm("my text here")) document.location = 'http://stackoverflow.com/';
          if (window.confirm('Press OK to purchase the product'))
  {
      alert('Thank you for purchasing our product!')// User clicked Yes
  }
  else
  {
      // User clicked no
  }

        order.push({
        });

    } else {

        alert('Please fill all the required fields!');
    }

}
