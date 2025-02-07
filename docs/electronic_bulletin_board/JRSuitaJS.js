const timetable = [
  { "A普通-京都-05:09": { type: "A普通", destination: "京都", departureTime: "05", departureMinute: "09" } },
  { "A普通-京都-05:23": { type: "A普通", destination: "京都", departureTime: "05", departureMinute: "23" } },
  { "A普通-京都-05:48": { type: "A普通", destination: "京都", departureTime: "05", departureMinute: "48" } },
  { "A普通-京都-06:09": { type: "A普通", destination: "京都", departureTime: "06", departureMinute: "09" } },
  { "A普通-京都-06:17": { type: "A普通", destination: "京都", departureTime: "06", departureMinute: "17" } },
  { "A普通-高槻-06:30": { type: "A普通", destination: "高槻", departureTime: "06", departureMinute: "30" } },
  { "A普通-京都-06:36": { type: "A普通", destination: "京都", departureTime: "06", departureMinute: "36" } },
  { "A普通-高槻-06:44": { type: "A普通", destination: "高槻", departureTime: "06", departureMinute: "44" } },
  { "A普通-京都-06:50": { type: "A普通", destination: "京都", departureTime: "06", departureMinute: "50" } },
  { "A普通-京都-06:57": { type: "A普通", destination: "京都", departureTime: "06", departureMinute: "57" } },
  { "A普通-高槻-07:03": { type: "A普通", destination: "高槻", departureTime: "07", departureMinute: "03" } },
  { "A普通-京都-07:10": { type: "A普通", destination: "京都", departureTime: "07", departureMinute: "10" } },
  { "A普通-京都-07:19": { type: "A普通", destination: "京都", departureTime: "07", departureMinute: "19" } },
  { "A普通-高槻-07:28": { type: "A普通", destination: "高槻", departureTime: "07", departureMinute: "28" } },
  { "A普通-草津-07:34": { type: "A普通", destination: "草津", departureTime: "07", departureMinute: "34" } },
  { "A普通-京都-07:40": { type: "A普通", destination: "京都", departureTime: "07", departureMinute: "40" } },
  { "A普通-高槻-07:46": { type: "A普通", destination: "高槻", departureTime: "07", departureMinute: "46" } },
  { "A普通-京都-07:52": { type: "A普通", destination: "京都", departureTime: "07", departureMinute: "52" } },
  { "A普通-高槻-08:01": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "01" } },
  { "A普通-京都-08:06": { type: "A普通", destination: "京都", departureTime: "08", departureMinute: "06" } },
  { "A普通-高槻-08:11": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "11" } },
  { "A普通-高槻-08:15": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "15" } },
  { "A普通-京都-08:20": { type: "A普通", destination: "京都", departureTime: "08", departureMinute: "20" } },
  { "A普通-京都-08:26": { type: "A普通", destination: "京都", departureTime: "08", departureMinute: "26" } },
  { "A普通-高槻-08:31": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "31" } },
  { "A普通-高槻-08:37": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "37" } },
  { "A普通-高槻-08:42": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "42" } },
  { "A普通-京都-08:46": { type: "A普通", destination: "京都", departureTime: "08", departureMinute: "46" } },
  { "A普通-高槻-08:50": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "50" } },
  { "A普通-高槻-08:54": { type: "A普通", destination: "高槻", departureTime: "08", departureMinute: "54" } },
  { "A普通-京都-08:58": { type: "A普通", destination: "京都", departureTime: "08", departureMinute: "58" } },
  { "A普通-高槻-09:06": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "06" } },
  { "A普通-高槻-09:12": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "12" } },
  { "A普通-京都-09:17": { type: "A普通", destination: "京都", departureTime: "09", departureMinute: "17" } },
  { "A普通-高槻-09:21": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "21" } },
  { "A普通-高槻-09:26": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "26" } },
  { "A普通-高槻-09:37": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "37" } },
  { "A普通-高槻-09:41": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "41" } },
  { "A普通-高槻-09:51": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "51" } },
  { "A普通-高槻-09:56": { type: "A普通", destination: "高槻", departureTime: "09", departureMinute: "56" } },
  { "A普通-高槻-10:06": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "06" } },
  { "A普通-高槻-10:11": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "11" } },
  { "A普通-高槻-10:20": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "20" } },
  { "A普通-高槻-10:26": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "26" } },
  { "A普通-高槻-10:35": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "35" } },
  { "A普通-高槻-10:41": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "41" } },
  { "A普通-高槻-10:50": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "50" } },
  { "A普通-高槻-10:56": { type: "A普通", destination: "高槻", departureTime: "10", departureMinute: "56" } },
  { "A普通-高槻-11:05": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "05" } },
  { "A普通-高槻-11:11": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "11" } },
  { "A普通-高槻-11:20": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "20" } },
  { "A普通-高槻-11:26": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "26" } },
  { "A普通-高槻-11:35": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "35" } },
  { "A普通-高槻-11:35": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "35" } },
  { "A普通-高槻-11:41": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "41" } },
  { "A普通-高槻-11:50": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "50" } },
  { "A普通-高槻-11:56": { type: "A普通", destination: "高槻", departureTime: "11", departureMinute: "56" } },
  { "A普通-高槻-12:05": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "05" } },
  { "A普通-高槻-12:11": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "11" } },
  { "A普通-高槻-12:20": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "20" } },
  { "A普通-高槻-12:26": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "26" } },
  { "A普通-高槻-12:35": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "35" } },
  { "A普通-高槻-12:41": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "41" } },
  { "A普通-高槻-12:50": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "50" } },
  { "A普通-高槻-12:56": { type: "A普通", destination: "高槻", departureTime: "12", departureMinute: "56" } },
  { "A普通-高槻-13:05": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "05" } },
  { "A普通-高槻-13:11": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "11" } },
  { "A普通-高槻-13:20": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "20" } },
  { "A普通-高槻-13:26": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "26" } },
  { "A普通-高槻-13:35": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "35" } },
  { "A普通-高槻-13:41": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "41" } },
  { "A普通-高槻-13:50": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "50" } },
  { "A普通-高槻-13:56": { type: "A普通", destination: "高槻", departureTime: "13", departureMinute: "56" } },
  { "A普通-高槻-14:05": { type: "A普通", destination: "高槻", departureTime: "14", departureMinute: "05" } },
  { "A普通-高槻-14:11": { type: "A普通", destination: "高槻", departureTime: "14", departureMinute: "11" } },
  { "A普通-高槻-14:20": { type: "A普通", destination: "高槻", departureTime: "14", departureMinute: "20" } },
  { "A普通-高槻-14:26": { type: "A普通", destination: "高槻", departureTime: "14", departureMinute: "26" } },
  { "A普通-京都-14:35": { type: "A普通", destination: "京都", departureTime: "14", departureMinute: "35" } },
  { "A普通-高槻-14:41": { type: "A普通", destination: "高槻", departureTime: "14", departureMinute: "41" } },
  { "A普通-京都-14:50": { type: "A普通", destination: "京都", departureTime: "14", departureMinute: "50" } },
  { "A普通-高槻-14:56": { type: "A普通", destination: "高槻", departureTime: "14", departureMinute: "56" } },
  { "A普通-京都-15:05": { type: "A普通", destination: "京都", departureTime: "15", departureMinute: "05" } },
  { "A普通-高槻-15:11": { type: "A普通", destination: "高槻", departureTime: "15", departureMinute: "11" } },
  { "A普通-京都-15:20": { type: "A普通", destination: "京都", departureTime: "15", departureMinute: "20" } },
  { "A普通-高槻-15:26": { type: "A普通", destination: "高槻", departureTime: "15", departureMinute: "26" } },
  { "A普通-京都-15:35": { type: "A普通", destination: "京都", departureTime: "15", departureMinute: "35" } },
  { "A普通-高槻-15:41": { type: "A普通", destination: "高槻", departureTime: "15", departureMinute: "41" } },
  { "A普通-京都-15:50": { type: "A普通", destination: "京都", departureTime: "15", departureMinute: "50" } },
  { "A普通-高槻-15:56": { type: "A普通", destination: "高槻", departureTime: "15", departureMinute: "56" } },
  { "A普通-京都-16:05": { type: "A普通", destination: "京都", departureTime: "16", departureMinute: "05" } },
  { "A普通-高槻-16:11": { type: "A普通", destination: "高槻", departureTime: "16", departureMinute: "11" } },
  { "A普通-京都-16:20": { type: "A普通", destination: "京都", departureTime: "16", departureMinute: "20" } },
  { "A普通-高槻-16:26": { type: "A普通", destination: "高槻", departureTime: "16", departureMinute: "26" } },
  { "A普通-京都-16:35": { type: "A普通", destination: "京都", departureTime: "16", departureMinute: "35" } },
  { "A普通-高槻-16:41": { type: "A普通", destination: "高槻", departureTime: "16", departureMinute: "41" } },
  { "A普通-京都-16:50": { type: "A普通", destination: "京都", departureTime: "16", departureMinute: "50" } },
  { "A普通-高槻-16:56": { type: "A普通", destination: "高槻", departureTime: "16", departureMinute: "56" } },
  { "A普通-京都-17:05": { type: "A普通", destination: "京都", departureTime: "17", departureMinute: "05" } },
  { "A普通-高槻-17:11": { type: "A普通", destination: "高槻", departureTime: "17", departureMinute: "11" } },
  { "A普通-京都-17:20": { type: "A普通", destination: "京都", departureTime: "17", departureMinute: "20" } },
  { "A普通-高槻-17:26": { type: "A普通", destination: "高槻", departureTime: "17", departureMinute: "26" } },
  { "A普通-京都-17:35": { type: "A普通", destination: "京都", departureTime: "17", departureMinute: "35" } },
  { "A普通-高槻-17:41": { type: "A普通", destination: "高槻", departureTime: "17", departureMinute: "41" } },
  { "A普通-京都-17:50": { type: "A普通", destination: "京都", departureTime: "17", departureMinute: "50" } },
  { "A普通-高槻-17:56": { type: "A普通", destination: "高槻", departureTime: "17", departureMinute: "56" } },
  { "A普通-京都-18:05": { type: "A普通", destination: "京都", departureTime: "18", departureMinute: "05" } },
  { "A普通-高槻-18:11": { type: "A普通", destination: "高槻", departureTime: "18", departureMinute: "11" } },
  { "A普通-京都-18:20": { type: "A普通", destination: "京都", departureTime: "18", departureMinute: "20" } },
  { "A普通-高槻-18:26": { type: "A普通", destination: "高槻", departureTime: "18", departureMinute: "26" } },
  { "A普通-京都-18:35": { type: "A普通", destination: "京都", departureTime: "18", departureMinute: "35" } },
  { "A普通-高槻-18:41": { type: "A普通", destination: "高槻", departureTime: "18", departureMinute: "41" } },
  { "A普通-京都-18:50": { type: "A普通", destination: "京都", departureTime: "18", departureMinute: "50" } },
  { "A普通-高槻-18:56": { type: "A普通", destination: "高槻", departureTime: "18", departureMinute: "56" } },
  { "A普通-京都-19:05": { type: "A普通", destination: "京都", departureTime: "19", departureMinute: "05" } },
  { "A普通-高槻-19:11": { type: "A普通", destination: "高槻", departureTime: "19", departureMinute: "11" } },
  { "A普通-京都-19:20": { type: "A普通", destination: "京都", departureTime: "19", departureMinute: "20" } },
  { "A普通-高槻-19:26": { type: "A普通", destination: "高槻", departureTime: "19", departureMinute: "26" } },
  { "A普通-京都-19:35": { type: "A普通", destination: "京都", departureTime: "19", departureMinute: "35" } },
  { "A普通-高槻-19:41": { type: "A普通", destination: "高槻", departureTime: "19", departureMinute: "41" } },
  { "A普通-京都-19:50": { type: "A普通", destination: "京都", departureTime: "19", departureMinute: "50" } },
  { "A普通-高槻-19:56": { type: "A普通", destination: "高槻", departureTime: "19", departureMinute: "56" } },
  { "A普通-京都-20:05": { type: "A普通", destination: "京都", departureTime: "20", departureMinute: "05" } },
  { "A普通-高槻-20:11": { type: "A普通", destination: "高槻", departureTime: "20", departureMinute: "11" } },
  { "A普通-京都-20:20": { type: "A普通", destination: "京都", departureTime: "20", departureMinute: "20" } },
  { "A普通-高槻-20:26": { type: "A普通", destination: "高槻", departureTime: "20", departureMinute: "26" } },
  { "A普通-京都-20:35": { type: "A普通", destination: "京都", departureTime: "20", departureMinute: "35" } },
  { "A普通-高槻-20:41": { type: "A普通", destination: "高槻", departureTime: "20", departureMinute: "41" } },
  { "A普通-京都-20:50": { type: "A普通", destination: "京都", departureTime: "20", departureMinute: "50" } },
  { "A普通-高槻-20:56": { type: "A普通", destination: "高槻", departureTime: "20", departureMinute: "56" } },
  { "A普通-京都-21:05": { type: "A普通", destination: "京都", departureTime: "21", departureMinute: "05" } },
  { "A普通-高槻-21:11": { type: "A普通", destination: "高槻", departureTime: "21", departureMinute: "11" } },
  { "A普通-京都-21:20": { type: "A普通", destination: "京都", departureTime: "21", departureMinute: "20" } },
  { "A普通-高槻-21:26": { type: "A普通", destination: "高槻", departureTime: "21", departureMinute: "26" } },
  { "A普通-京都-21:35": { type: "A普通", destination: "京都", departureTime: "21", departureMinute: "35" } },
  { "A普通-高槻-21:41": { type: "A普通", destination: "高槻", departureTime: "21", departureMinute: "41" } },
  { "A普通-京都-21:50": { type: "A普通", destination: "京都", departureTime: "21", departureMinute: "50" } },
  { "A普通-高槻-21:56": { type: "A普通", destination: "高槻", departureTime: "21", departureMinute: "56" } },
  { "A普通-京都-22:05": { type: "A普通", destination: "京都", departureTime: "22", departureMinute: "05" } },
  { "A普通-高槻-22:12": { type: "A普通", destination: "高槻", departureTime: "22", departureMinute: "12" } },
  { "A普通-京都-22:22": { type: "A普通", destination: "京都", departureTime: "22", departureMinute: "22" } },
  { "A普通-高槻-22:32": { type: "A普通", destination: "高槻", departureTime: "22", departureMinute: "32" } },
  { "A普通-高槻-22:32": { type: "A普通", destination: "高槻", departureTime: "22", departureMinute: "32" } },
  { "A普通-京都-22:42": { type: "A普通", destination: "京都", departureTime: "22", departureMinute: "42" } },
  { "A普通-高槻-22:52": { type: "A普通", destination: "高槻", departureTime: "22", departureMinute: "52" } },
  { "A普通-京都-23:02": { type: "A普通", destination: "京都", departureTime: "23", departureMinute: "02" } },
  { "A普通-高槻-23:12": { type: "A普通", destination: "高槻", departureTime: "23", departureMinute: "12" } },
  { "A普通-京都-23:23": { type: "A普通", destination: "京都", departureTime: "23", departureMinute: "23" } },
  { "A普通-高槻-23:33": { type: "A普通", destination: "高槻", departureTime: "23", departureMinute: "33" } },
  { "A普通-高槻-23:45": { type: "A普通", destination: "高槻", departureTime: "23", departureMinute: "45" } },
  { "A普通-高槻-23:54": { type: "A普通", destination: "高槻", departureTime: "23", departureMinute: "54" } },
  { "A普通-京都-24:04": { type: "A普通", destination: "京都", departureTime: "24", departureMinute: "04" } },
  { "A普通-高槻-24:20": { type: "A普通", destination: "高槻", departureTime: "24", departureMinute: "20" } }
]

function getNextTrains(timetable, currentHour, currentMinute, n = 3) {
  let nextTrains = [];
  let diffs = [];

  for (const trainData of timetable) {
    const key = Object.keys(trainData)[0];
    const train = trainData[key];

    const departureHour = parseInt(train.departureTime);
    const departureMinute = parseInt(train.departureMinute);

    const diff = (departureHour - currentHour) * 60 + (departureMinute - currentMinute);

    if (diff > 0) {
      diffs.push({ diff, train });
    }
  }

  diffs.sort((a, b) => a.diff - b.diff);

  for (let i = 0; i < Math.min(n, diffs.length); i++) {
    nextTrains.push(diffs[i].train);
  }

  return nextTrains;
}

function conslog(){
  const now = new Date();
  const currentTimeHour = now.getHours();
  const currentTimeMinute = now.getMinutes();

  const nextTrains = getNextTrains(timetable, currentTimeHour, currentTimeMinute);
  //console.log(nextTrains);
  const type1 = nextTrains[0].type;
  document.getElementById("type1").innerHTML = type1;
  const dest1 = nextTrains[0].destination;
  document.getElementById("dest1").innerHTML = dest1;
  const time1 = nextTrains[0].departureTime + ":" + nextTrains[0].departureMinute;
  document.getElementById("time1").innerHTML = time1;
  const remain1 = (nextTrains[0].departureTime - currentTimeHour) * 60 + (nextTrains[0].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain1").innerHTML = remain1;

  const type2 = nextTrains[1].type;
  document.getElementById("type2").innerHTML = type2;
  const dest2 = nextTrains[1].destination;
  document.getElementById("dest2").innerHTML = dest2;
  const time2 = nextTrains[1].departureTime + ":" + nextTrains[1].departureMinute;
  document.getElementById("time2").innerHTML = time2;
  const remain2 = (nextTrains[1].departureTime - currentTimeHour) * 60 + (nextTrains[1].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain2").innerHTML = remain2;
  
  const type3 = nextTrains[2].type;
  document.getElementById("type3").innerHTML = type3;
  const dest3 = nextTrains[2].destination;
  document.getElementById("dest3").innerHTML = dest3;
  const time3 = nextTrains[2].departureTime + ":" + nextTrains[2].departureMinute;
  document.getElementById("time3").innerHTML = time3;
  const remain3 = (nextTrains[2].departureTime - currentTimeHour) * 60 + (nextTrains[2].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain3").innerHTML = remain3;
}
setInterval(conslog, 1000)