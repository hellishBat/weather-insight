// convertTime
const convertTime = (unixTime: any) => {
  return new Date(unixTime * 1000).toLocaleTimeString('default', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
}

export default convertTime

// const unixTimestamp = 1664000732;

// const date = new Date(unixTimestamp * 1000);

// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// // 👇️ Format as hh:mm:ss
// const time = `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
//   seconds,
// )}`;

// console.log(time); // 👉️ 09:25:32

// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }
