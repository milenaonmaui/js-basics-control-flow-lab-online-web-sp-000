// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result;
  
  if (distance <= 400) {
    result = 'Free sample';
  } else if (distance > 2500) {
    result = 'Ride is not allowed';
  } else if (distance > 2000) {
    result = '$30 charge'
  } 
  return result;
  
}