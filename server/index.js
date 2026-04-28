// const dayjs = require('dayjs');

// console.log(dayjs().format('YYYY-MM-DD'));        // 2024-01-15
// console.log(dayjs().format('DD/MM/YYYY'));        // 15/01/2024
// console.log(dayjs().format('hh:mm:ss'));          // 10:30:25

// // নির্দিষ্ট date বানাও
// console.log(dayjs('2024-01-15').format('DD MMM YYYY')); // 15 Jan 2024

// // আজকের দিন থেকে যোগ বিয়োগ
// console.log(dayjs().add(7, 'day').format('YYYY-MM-DD'));      // ৭ দিন পরে
// console.log(dayjs().subtract(1, 'month').format('YYYY-MM-DD')); // ১ মাস আগে




const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('হ্যালো বাংলাদেশ!');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
});