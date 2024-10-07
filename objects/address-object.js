let address = {
  street: 'marvel',
  city: 'wakanda',
  zipcode: '420'
};

function showAddress(address) {
  for (const key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
