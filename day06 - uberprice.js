//Uber Price Calculation

class uber {
  constructor(distance,bookingfees){
      this.distance = distance;
      this.bookingfees = bookingfees;
  }
}
class ubercal extends uber  {
  constructor(distance,bookingfees){
  super (distance,bookingfees)
  }
  price () {
      console.log(`kilometeris:${this.distance}.KM 
uberCharge:₹${this.distance*14} + bookingFess:₹${this.bookingfees}
TotalCost:₹${this.distance*14 + this.bookingfees}`)   
  } 
}
let uberPrice = new ubercal (87,187)
uberPrice.price();