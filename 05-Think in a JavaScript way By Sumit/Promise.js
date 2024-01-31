const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting is already schduled"));
  }
});
meeting.then((res) => {
  console.log(res);
});
meeting.catch((err) => {
  console.log(err.message);
});

const promise1 = Promise.resolve(`Promise 1 resolved`);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 2 resolved`);
  }, 2000);
});
Promise.all([promise1, promise2]).then((res) => {
  console.log(res);
});
Promise.race([promise1, promise2]).then((res) => {
  console.log(res);
});
