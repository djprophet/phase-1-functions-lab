
let distanceFromHqInBlocks = streetNum => {
    return (streetNum < 42) ?  42 - streetNum : streetNum - 42;
}
console.log(distanceFromHqInBlocks(6))


  function distanceFromHqInFeet(streetNum) {
    return distanceFromHqInBlocks(streetNum) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
  }
  
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
      return 'cannot travel that far';
    } else if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else {
      return 25;
    }
  }
  