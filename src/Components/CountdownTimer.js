import React, { useState, useEffect } from 'react';

function CountdownTimer({ timeInSeconds }) {
  const [secondsLeft, setSecondsLeft] = useState(timeInSeconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1);
      } else {
        clearInterval(countdownInterval);
        alert('Time is up!');
        window.location.href = '/'; 
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [secondsLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {formatTime(secondsLeft)}</p>
    </div>
  );
}

export default CountdownTimer;

// import React, { Component } from 'react';

// class CountdownTimer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: 0,
//       inputTime: '',
//       isRunning: false,
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ inputTime: e.target.value });
//   };

//   startTimer = () => {
//     const { inputTime } = this.state;
//     if (inputTime > 0) {
//       this.setState({ time: inputTime, isRunning: true }, () => {
//         this.timerInterval = setInterval(this.updateTimer, 1000);
//       });
//     }
//   };

//   updateTimer = () => {
//     let { time } = this.state;
//     time -= 1;
//     if (time >= 0) {
//       this.setState({ time });
//     } else {
//       clearInterval(this.timerInterval);
//       this.setState({ isRunning: false });
//       alert('Timer has ended!');
//       window.location.href = '/'; // Redirect to the home page
//     }
//   };

//   render() {
//     const { time, inputTime, isRunning } = this.state;

//     return (
//       <div>
//         <h1>Countdown Timer</h1>
//         <div>
//           <input
//             type="number"
//             placeholder="Enter time in seconds"
//             value={inputTime}
//             onChange={this.handleInputChange}
//             disabled={isRunning}
//           />
//           <button onClick={this.startTimer} disabled={isRunning}>
//             Start Timer
//           </button>
//         </div>
//         <div>
//           <p>Time Remaining: {time} seconds</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default CountdownTimer;

