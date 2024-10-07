let address = createAddress('marvel', 'wankanda', '420');
let newAddress = new Address('marvel', 'wankanda', '420');

console.log(address, newAddress);

// factory function
function createAddress(street, city, pincode) {
  return {
    street,
    city,
    pincode
  }
}
// Contructor function
function Address(street, city, pincode) {
  this.street = street;
  this.city = city;
  this.pincode = pincode;
}
