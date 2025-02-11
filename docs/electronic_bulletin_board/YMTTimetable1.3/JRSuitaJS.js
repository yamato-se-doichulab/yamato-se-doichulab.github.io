const timetable = [
  { "A普通-京都-05:09": { type: "A普通", destination: "京　都", departureTime: "05", departureMinute: "09" } },
  { "A普通-京都-05:23": { type: "A普通", destination: "京　都", departureTime: "05", departureMinute: "23" } },
  { "A普通-京都-05:48": { type: "A普通", destination: "京　都", departureTime: "05", departureMinute: "48" } },
  { "A普通-京都-06:09": { type: "A普通", destination: "京　都", departureTime: "06", departureMinute: "09" } },
  { "A普通-京都-06:17": { type: "A普通", destination: "京　都", departureTime: "06", departureMinute: "17" } },
  { "A普通-高槻-06:30": { type: "A普通", destination: "高　槻", departureTime: "06", departureMinute: "30" } },
  { "A普通-京都-06:36": { type: "A普通", destination: "京　都", departureTime: "06", departureMinute: "36" } },
  { "A普通-高槻-06:44": { type: "A普通", destination: "高　槻", departureTime: "06", departureMinute: "44" } },
  { "A普通-京都-06:50": { type: "A普通", destination: "京　都", departureTime: "06", departureMinute: "50" } },
  { "A普通-京都-06:57": { type: "A普通", destination: "京　都", departureTime: "06", departureMinute: "57" } },
  { "A普通-高槻-07:03": { type: "A普通", destination: "高　槻", departureTime: "07", departureMinute: "03" } },
  { "A普通-京都-07:10": { type: "A普通", destination: "京　都", departureTime: "07", departureMinute: "10" } },
  { "A普通-京都-07:19": { type: "A普通", destination: "京　都", departureTime: "07", departureMinute: "19" } },
  { "A普通-高槻-07:28": { type: "A普通", destination: "高　槻", departureTime: "07", departureMinute: "28" } },
  { "A普通-草津-07:34": { type: "A普通", destination: "草　津", departureTime: "07", departureMinute: "34" } },
  { "A普通-京都-07:40": { type: "A普通", destination: "京　都", departureTime: "07", departureMinute: "40" } },
  { "A普通-高槻-07:46": { type: "A普通", destination: "高　槻", departureTime: "07", departureMinute: "46" } },
  { "A普通-京都-07:52": { type: "A普通", destination: "京　都", departureTime: "07", departureMinute: "52" } },
  { "A普通-高槻-08:01": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "01" } },
  { "A普通-京都-08:06": { type: "A普通", destination: "京　都", departureTime: "08", departureMinute: "06" } },
  { "A普通-高槻-08:11": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "11" } },
  { "A普通-高槻-08:15": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "15" } },
  { "A普通-京都-08:20": { type: "A普通", destination: "京　都", departureTime: "08", departureMinute: "20" } },
  { "A普通-京都-08:26": { type: "A普通", destination: "京　都", departureTime: "08", departureMinute: "26" } },
  { "A普通-高槻-08:31": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "31" } },
  { "A普通-高槻-08:37": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "37" } },
  { "A普通-高槻-08:42": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "42" } },
  { "A普通-京都-08:46": { type: "A普通", destination: "京　都", departureTime: "08", departureMinute: "46" } },
  { "A普通-高槻-08:50": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "50" } },
  { "A普通-高槻-08:54": { type: "A普通", destination: "高　槻", departureTime: "08", departureMinute: "54" } },
  { "A普通-京都-08:58": { type: "A普通", destination: "京　都", departureTime: "08", departureMinute: "58" } },
  { "A普通-高槻-09:06": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "06" } },
  { "A普通-高槻-09:12": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "12" } },
  { "A普通-京都-09:17": { type: "A普通", destination: "京　都", departureTime: "09", departureMinute: "17" } },
  { "A普通-高槻-09:21": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "21" } },
  { "A普通-高槻-09:26": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "26" } },
  { "A普通-高槻-09:37": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "37" } },
  { "A普通-高槻-09:41": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "41" } },
  { "A普通-高槻-09:51": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "51" } },
  { "A普通-高槻-09:56": { type: "A普通", destination: "高　槻", departureTime: "09", departureMinute: "56" } },
  { "A普通-高槻-10:06": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "06" } },
  { "A普通-高槻-10:11": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "11" } },
  { "A普通-高槻-10:20": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "20" } },
  { "A普通-高槻-10:26": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "26" } },
  { "A普通-高槻-10:35": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "35" } },
  { "A普通-高槻-10:41": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "41" } },
  { "A普通-高槻-10:50": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "50" } },
  { "A普通-高槻-10:56": { type: "A普通", destination: "高　槻", departureTime: "10", departureMinute: "56" } },
  { "A普通-高槻-11:05": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "05" } },
  { "A普通-高槻-11:11": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "11" } },
  { "A普通-高槻-11:20": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "20" } },
  { "A普通-高槻-11:26": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "26" } },
  { "A普通-高槻-11:35": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "35" } },
  { "A普通-高槻-11:35": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "35" } },
  { "A普通-高槻-11:41": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "41" } },
  { "A普通-高槻-11:50": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "50" } },
  { "A普通-高槻-11:56": { type: "A普通", destination: "高　槻", departureTime: "11", departureMinute: "56" } },
  { "A普通-高槻-12:05": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "05" } },
  { "A普通-高槻-12:11": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "11" } },
  { "A普通-高槻-12:20": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "20" } },
  { "A普通-高槻-12:26": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "26" } },
  { "A普通-高槻-12:35": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "35" } },
  { "A普通-高槻-12:41": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "41" } },
  { "A普通-高槻-12:50": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "50" } },
  { "A普通-高槻-12:56": { type: "A普通", destination: "高　槻", departureTime: "12", departureMinute: "56" } },
  { "A普通-高槻-13:05": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "05" } },
  { "A普通-高槻-13:11": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "11" } },
  { "A普通-高槻-13:20": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "20" } },
  { "A普通-高槻-13:26": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "26" } },
  { "A普通-高槻-13:35": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "35" } },
  { "A普通-高槻-13:41": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "41" } },
  { "A普通-高槻-13:50": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "50" } },
  { "A普通-高槻-13:56": { type: "A普通", destination: "高　槻", departureTime: "13", departureMinute: "56" } },
  { "A普通-高槻-14:05": { type: "A普通", destination: "高　槻", departureTime: "14", departureMinute: "05" } },
  { "A普通-高槻-14:11": { type: "A普通", destination: "高　槻", departureTime: "14", departureMinute: "11" } },
  { "A普通-高槻-14:20": { type: "A普通", destination: "高　槻", departureTime: "14", departureMinute: "20" } },
  { "A普通-高槻-14:26": { type: "A普通", destination: "高　槻", departureTime: "14", departureMinute: "26" } },
  { "A普通-京都-14:35": { type: "A普通", destination: "京　都", departureTime: "14", departureMinute: "35" } },
  { "A普通-高槻-14:41": { type: "A普通", destination: "高　槻", departureTime: "14", departureMinute: "41" } },
  { "A普通-京都-14:50": { type: "A普通", destination: "京　都", departureTime: "14", departureMinute: "50" } },
  { "A普通-高槻-14:56": { type: "A普通", destination: "高　槻", departureTime: "14", departureMinute: "56" } },
  { "A普通-京都-15:05": { type: "A普通", destination: "京　都", departureTime: "15", departureMinute: "05" } },
  { "A普通-高槻-15:11": { type: "A普通", destination: "高　槻", departureTime: "15", departureMinute: "11" } },
  { "A普通-京都-15:20": { type: "A普通", destination: "京　都", departureTime: "15", departureMinute: "20" } },
  { "A普通-高槻-15:26": { type: "A普通", destination: "高　槻", departureTime: "15", departureMinute: "26" } },
  { "A普通-京都-15:35": { type: "A普通", destination: "京　都", departureTime: "15", departureMinute: "35" } },
  { "A普通-高槻-15:41": { type: "A普通", destination: "高　槻", departureTime: "15", departureMinute: "41" } },
  { "A普通-京都-15:50": { type: "A普通", destination: "京　都", departureTime: "15", departureMinute: "50" } },
  { "A普通-高槻-15:56": { type: "A普通", destination: "高　槻", departureTime: "15", departureMinute: "56" } },
  { "A普通-京都-16:05": { type: "A普通", destination: "京　都", departureTime: "16", departureMinute: "05" } },
  { "A普通-高槻-16:11": { type: "A普通", destination: "高　槻", departureTime: "16", departureMinute: "11" } },
  { "A普通-京都-16:20": { type: "A普通", destination: "京　都", departureTime: "16", departureMinute: "20" } },
  { "A普通-高槻-16:26": { type: "A普通", destination: "高　槻", departureTime: "16", departureMinute: "26" } },
  { "A普通-京都-16:35": { type: "A普通", destination: "京　都", departureTime: "16", departureMinute: "35" } },
  { "A普通-高槻-16:41": { type: "A普通", destination: "高　槻", departureTime: "16", departureMinute: "41" } },
  { "A普通-京都-16:50": { type: "A普通", destination: "京　都", departureTime: "16", departureMinute: "50" } },
  { "A普通-高槻-16:56": { type: "A普通", destination: "高　槻", departureTime: "16", departureMinute: "56" } },
  { "A普通-京都-17:05": { type: "A普通", destination: "京　都", departureTime: "17", departureMinute: "05" } },
  { "A普通-高槻-17:11": { type: "A普通", destination: "高　槻", departureTime: "17", departureMinute: "11" } },
  { "A普通-京都-17:20": { type: "A普通", destination: "京　都", departureTime: "17", departureMinute: "20" } },
  { "A普通-高槻-17:26": { type: "A普通", destination: "高　槻", departureTime: "17", departureMinute: "26" } },
  { "A普通-京都-17:35": { type: "A普通", destination: "京　都", departureTime: "17", departureMinute: "35" } },
  { "A普通-高槻-17:41": { type: "A普通", destination: "高　槻", departureTime: "17", departureMinute: "41" } },
  { "A普通-京都-17:50": { type: "A普通", destination: "京　都", departureTime: "17", departureMinute: "50" } },
  { "A普通-高槻-17:56": { type: "A普通", destination: "高　槻", departureTime: "17", departureMinute: "56" } },
  { "A普通-京都-18:05": { type: "A普通", destination: "京　都", departureTime: "18", departureMinute: "05" } },
  { "A普通-高槻-18:11": { type: "A普通", destination: "高　槻", departureTime: "18", departureMinute: "11" } },
  { "A普通-京都-18:20": { type: "A普通", destination: "京　都", departureTime: "18", departureMinute: "20" } },
  { "A普通-高槻-18:26": { type: "A普通", destination: "高　槻", departureTime: "18", departureMinute: "26" } },
  { "A普通-京都-18:35": { type: "A普通", destination: "京　都", departureTime: "18", departureMinute: "35" } },
  { "A普通-高槻-18:41": { type: "A普通", destination: "高　槻", departureTime: "18", departureMinute: "41" } },
  { "A普通-京都-18:50": { type: "A普通", destination: "京　都", departureTime: "18", departureMinute: "50" } },
  { "A普通-高槻-18:56": { type: "A普通", destination: "高　槻", departureTime: "18", departureMinute: "56" } },
  { "A普通-京都-19:05": { type: "A普通", destination: "京　都", departureTime: "19", departureMinute: "05" } },
  { "A普通-高槻-19:11": { type: "A普通", destination: "高　槻", departureTime: "19", departureMinute: "11" } },
  { "A普通-京都-19:20": { type: "A普通", destination: "京　都", departureTime: "19", departureMinute: "20" } },
  { "A普通-高槻-19:26": { type: "A普通", destination: "高　槻", departureTime: "19", departureMinute: "26" } },
  { "A普通-京都-19:35": { type: "A普通", destination: "京　都", departureTime: "19", departureMinute: "35" } },
  { "A普通-高槻-19:41": { type: "A普通", destination: "高　槻", departureTime: "19", departureMinute: "41" } },
  { "A普通-京都-19:50": { type: "A普通", destination: "京　都", departureTime: "19", departureMinute: "50" } },
  { "A普通-高槻-19:56": { type: "A普通", destination: "高　槻", departureTime: "19", departureMinute: "56" } },
  { "A普通-京都-20:05": { type: "A普通", destination: "京　都", departureTime: "20", departureMinute: "05" } },
  { "A普通-高槻-20:11": { type: "A普通", destination: "高　槻", departureTime: "20", departureMinute: "11" } },
  { "A普通-京都-20:20": { type: "A普通", destination: "京　都", departureTime: "20", departureMinute: "20" } },
  { "A普通-高槻-20:26": { type: "A普通", destination: "高　槻", departureTime: "20", departureMinute: "26" } },
  { "A普通-京都-20:35": { type: "A普通", destination: "京　都", departureTime: "20", departureMinute: "35" } },
  { "A普通-高槻-20:41": { type: "A普通", destination: "高　槻", departureTime: "20", departureMinute: "41" } },
  { "A普通-京都-20:50": { type: "A普通", destination: "京　都", departureTime: "20", departureMinute: "50" } },
  { "A普通-高槻-20:56": { type: "A普通", destination: "高　槻", departureTime: "20", departureMinute: "56" } },
  { "A普通-京都-21:05": { type: "A普通", destination: "京　都", departureTime: "21", departureMinute: "05" } },
  { "A普通-高槻-21:11": { type: "A普通", destination: "高　槻", departureTime: "21", departureMinute: "11" } },
  { "A普通-京都-21:20": { type: "A普通", destination: "京　都", departureTime: "21", departureMinute: "20" } },
  { "A普通-高槻-21:26": { type: "A普通", destination: "高　槻", departureTime: "21", departureMinute: "26" } },
  { "A普通-京都-21:35": { type: "A普通", destination: "京　都", departureTime: "21", departureMinute: "35" } },
  { "A普通-高槻-21:41": { type: "A普通", destination: "高　槻", departureTime: "21", departureMinute: "41" } },
  { "A普通-京都-21:50": { type: "A普通", destination: "京　都", departureTime: "21", departureMinute: "50" } },
  { "A普通-高槻-21:56": { type: "A普通", destination: "高　槻", departureTime: "21", departureMinute: "56" } },
  { "A普通-京都-22:05": { type: "A普通", destination: "京　都", departureTime: "22", departureMinute: "05" } },
  { "A普通-高槻-22:12": { type: "A普通", destination: "高　槻", departureTime: "22", departureMinute: "12" } },
  { "A普通-京都-22:22": { type: "A普通", destination: "京　都", departureTime: "22", departureMinute: "22" } },
  { "A普通-高槻-22:32": { type: "A普通", destination: "高　槻", departureTime: "22", departureMinute: "32" } },
  { "A普通-高槻-22:32": { type: "A普通", destination: "高　槻", departureTime: "22", departureMinute: "32" } },
  { "A普通-京都-22:42": { type: "A普通", destination: "京　都", departureTime: "22", departureMinute: "42" } },
  { "A普通-高槻-22:52": { type: "A普通", destination: "高　槻", departureTime: "22", departureMinute: "52" } },
  { "A普通-京都-23:02": { type: "A普通", destination: "京　都", departureTime: "23", departureMinute: "02" } },
  { "A普通-高槻-23:12": { type: "A普通", destination: "高　槻", departureTime: "23", departureMinute: "12" } },
  { "A普通-京都-23:23": { type: "A普通", destination: "京　都", departureTime: "23", departureMinute: "23" } },
  { "A普通-高槻-23:33": { type: "A普通", destination: "高　槻", departureTime: "23", departureMinute: "33" } },
  { "A普通-高槻-23:45": { type: "A普通", destination: "高　槻", departureTime: "23", departureMinute: "45" } },
  { "A普通-高槻-23:54": { type: "A普通", destination: "高　槻", departureTime: "23", departureMinute: "54" } },
  { "A普通-京都-24:04": { type: "A普通", destination: "京　都", departureTime: "24", departureMinute: "04" } },
  { "A普通-高槻-24:20": { type: "A普通", destination: "高　槻", departureTime: "24", departureMinute: "20" } }
]

const timetable2 = [
  { "1": { type: "A普通", destination: "加古川", departureTime: "05", departureMinute: "14" } },
  { "2": { type: "A普通", destination: "西明石", departureTime: "05", departureMinute: "24" } },
  { "3": { type: "A普通", destination: "加古川", departureTime: "05", departureMinute: "32" } },
  { "4": { type: "A普通", destination: "西明石", departureTime: "05", departureMinute: "40" } },
  { "5": { type: "A普通", destination: "西明石", departureTime: "05", departureMinute: "45" } },
  { "6": { type: "A普通", destination: "尼　崎", departureTime: "05", departureMinute: "55" } },
  { "7": { type: "A普通", destination: "神　戸", departureTime: "06", departureMinute: "03" } },
  { "8": { type: "A普通", destination: "西明石", departureTime: "06", departureMinute: "17" } },
  { "9": { type: "A普通", destination: "尼　崎", departureTime: "06", departureMinute: "22" } },
  { "10": { type: "A普通", destination: "西明石", departureTime: "06", departureMinute: "30" } },
  { "11": { type: "A普通", destination: "西明石", departureTime: "06", departureMinute: "41" } },
  { "12": { type: "A普通", destination: "尼　崎", departureTime: "06", departureMinute: "49" } },
  { "13": { type: "A普通", destination: "西明石", departureTime: "06", departureMinute: "57" } },
  { "14": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "05" } },
  { "15": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "11" } },
  { "16": { type: "A普通", destination: "尼　崎", departureTime: "07", departureMinute: "17" } },
  { "17": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "25" } },
  { "18": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "31" } },
  { "19": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "36" } },
  { "20": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "43" } },
  { "21": { type: "A普通", destination: "尼　崎", departureTime: "07", departureMinute: "48" } },
  { "22": { type: "A普通", destination: "西明石", departureTime: "07", departureMinute: "53" } },
  { "23": { type: "A普通", destination: "尼　崎", departureTime: "07", departureMinute: "58" } },
  { "24": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "03" } },
  { "25": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "08" } },
  { "26": { type: "A普通", destination: "尼　崎", departureTime: "08", departureMinute: "13" } },
  { "27": { type: "G普通", destination: "新三田", departureTime: "08", departureMinute: "18" } },
  { "28": { type: "A普通", destination: "尼　崎", departureTime: "08", departureMinute: "23" } },
  { "29": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "28" } },
  { "30": { type: "A普通", destination: "尼　崎", departureTime: "08", departureMinute: "34" } },
  { "31": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "40" } },
  { "32": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "49" } },
  { "33": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "55" } },
  { "34": { type: "A普通", destination: "西明石", departureTime: "08", departureMinute: "59" } },
  { "35": { type: "A普通", destination: "西明石", departureTime: "09", departureMinute: "07" } },
  { "36": { type: "A普通", destination: "甲子園口", departureTime: "09", departureMinute: "12" } },
  { "37": { type: "G普通", destination: "新三田", departureTime: "09", departureMinute: "20" } },
  { "38": { type: "A普通", destination: "須　磨", departureTime: "09", departureMinute: "24" } },
  { "39": { type: "G普通", destination: "新三田", departureTime: "09", departureMinute: "34" } },
  { "40": { type: "A普通", destination: "須　磨", departureTime: "09", departureMinute: "39" } },
  { "41": { type: "G普通", destination: "新三田", departureTime: "09", departureMinute: "48" } },
  { "42": { type: "A普通", destination: "須　磨", departureTime: "09", departureMinute: "54" } },
  { "43": { type: "G普通", destination: "宝　塚", departureTime: "10", departureMinute: "04" } },
  { "44": { type: "A普通", destination: "須　磨", departureTime: "10", departureMinute: "09" } },
  { "45": { type: "G普通", destination: "宝　塚", departureTime: "10", departureMinute: "18" } },
  { "46": { type: "A普通", destination: "須　磨", departureTime: "10", departureMinute: "24" } },
  { "47": { type: "G普通", destination: "宝　塚", departureTime: "10", departureMinute: "33" } },
  { "48": { type: "A普通", destination: "須　磨", departureTime: "10", departureMinute: "39" } },
  { "49": { type: "G普通", destination: "宝　塚", departureTime: "10", departureMinute: "48" } },
  { "50": { type: "A普通", destination: "須　磨", departureTime: "10", departureMinute: "54" } },
  { "51": { type: "G普通", destination: "宝　塚", departureTime: "11", departureMinute: "03" } },
  { "52": { type: "A普通", destination: "須　磨", departureTime: "11", departureMinute: "09" } },
  { "53": { type: "G普通", destination: "宝　塚", departureTime: "11", departureMinute: "18" } },
  { "54": { type: "A普通", destination: "須　磨", departureTime: "11", departureMinute: "24" } },
  { "55": { type: "G普通", destination: "宝　塚", departureTime: "11", departureMinute: "33" } },
  { "56": { type: "A普通", destination: "須　磨", departureTime: "11", departureMinute: "39" } },
  { "57": { type: "G普通", destination: "宝　塚", departureTime: "11", departureMinute: "48" } },
  { "58": { type: "A普通", destination: "須　磨", departureTime: "11", departureMinute: "54" } },
  { "59": { type: "G普通", destination: "宝　塚", departureTime: "12", departureMinute: "03" } },
  { "60": { type: "A普通", destination: "須　磨", departureTime: "12", departureMinute: "09" } },
  { "61": { type: "G普通", destination: "宝　塚", departureTime: "12", departureMinute: "18" } },
  { "62": { type: "A普通", destination: "須　磨", departureTime: "12", departureMinute: "24" } },
  { "63": { type: "G普通", destination: "宝　塚", departureTime: "12", departureMinute: "33" } },
  { "64": { type: "A普通", destination: "須　磨", departureTime: "12", departureMinute: "39" } },
  { "65": { type: "G普通", destination: "宝　塚", departureTime: "12", departureMinute: "48" } },
  { "66": { type: "A普通", destination: "須　磨", departureTime: "12", departureMinute: "54" } },
  { "67": { type: "G普通", destination: "宝　塚", departureTime: "13", departureMinute: "03" } },
  { "68": { type: "A普通", destination: "須　磨", departureTime: "13", departureMinute: "09" } },
  { "69": { type: "G普通", destination: "宝　塚", departureTime: "13", departureMinute: "18" } },
  { "70": { type: "A普通", destination: "須　磨", departureTime: "13", departureMinute: "24" } },
  { "71": { type: "G普通", destination: "宝　塚", departureTime: "13", departureMinute: "33" } },
  { "72": { type: "A普通", destination: "須　磨", departureTime: "13", departureMinute: "39" } },
  { "73": { type: "G普通", destination: "宝　塚", departureTime: "13", departureMinute: "48" } },
  { "74": { type: "A普通", destination: "須　磨", departureTime: "13", departureMinute: "54" } },
  { "75": { type: "G普通", destination: "宝　塚", departureTime: "14", departureMinute: "03" } },
  { "76": { type: "A普通", destination: "須　磨", departureTime: "14", departureMinute: "09" } },
  { "77": { type: "G普通", destination: "新三田", departureTime: "14", departureMinute: "18" } },
  { "78": { type: "A普通", destination: "須　磨", departureTime: "14", departureMinute: "24" } },
  { "79": { type: "G普通", destination: "新三田", departureTime: "14", departureMinute: "33" } },
  { "80": { type: "A普通", destination: "須　磨", departureTime: "14", departureMinute: "39" } },
  { "81": { type: "G普通", destination: "新三田", departureTime: "15", departureMinute: "03" } },
  { "82": { type: "A普通", destination: "西明石", departureTime: "15", departureMinute: "09" } },
  { "83": { type: "G普通", destination: "新三田", departureTime: "15", departureMinute: "18" } },
  { "84": { type: "A普通", destination: "西明石", departureTime: "15", departureMinute: "24" } },
  { "85": { type: "G普通", destination: "新三田", departureTime: "15", departureMinute: "33" } },
  { "86": { type: "A普通", destination: "西明石", departureTime: "15", departureMinute: "39" } },
  { "87": { type: "G普通", destination: "新三田", departureTime: "15", departureMinute: "48" } },
  { "88": { type: "A普通", destination: "西明石", departureTime: "15", departureMinute: "54" } },
  { "89": { type: "G普通", destination: "新三田", departureTime: "16", departureMinute: "03" } },
  { "90": { type: "A普通", destination: "西明石", departureTime: "16", departureMinute: "09" } },
  { "91": { type: "G普通", destination: "新三田", departureTime: "16", departureMinute: "18" } },
  { "92": { type: "A普通", destination: "西明石", departureTime: "16", departureMinute: "24" } },
  { "93": { type: "G普通", destination: "新三田", departureTime: "16", departureMinute: "33" } },
  { "94": { type: "A普通", destination: "西明石", departureTime: "16", departureMinute: "39" } },
  { "95": { type: "G普通", destination: "新三田", departureTime: "16", departureMinute: "48" } },
  { "96": { type: "A普通", destination: "西明石", departureTime: "16", departureMinute: "54" } },
  { "97": { type: "G普通", destination: "新三田", departureTime: "17", departureMinute: "03" } },
  { "98": { type: "A普通", destination: "西明石", departureTime: "17", departureMinute: "09" } },
  { "99": { type: "G普通", destination: "新三田", departureTime: "17", departureMinute: "18" } },
  { "100": { type: "A普通", destination: "西明石", departureTime: "17", departureMinute: "24" } },
  { "101": { type: "G普通", destination: "新三田", departureTime: "17", departureMinute: "33" } },
  { "102": { type: "A普通", destination: "西明石", departureTime: "17", departureMinute: "39" } },
  { "103": { type: "G普通", destination: "新三田", departureTime: "17", departureMinute: "48" } },
  { "104": { type: "A普通", destination: "西明石", departureTime: "17", departureMinute: "54" } },
  { "105": { type: "G普通", destination: "新三田", departureTime: "18", departureMinute: "03" } },
  { "106": { type: "A普通", destination: "西明石", departureTime: "18", departureMinute: "09" } },
  { "107": { type: "G普通", destination: "新三田", departureTime: "18", departureMinute: "18" } },
  { "108": { type: "A普通", destination: "西明石", departureTime: "18", departureMinute: "24" } },
  { "109": { type: "G普通", destination: "新三田", departureTime: "18", departureMinute: "33" } },
  { "110": { type: "A普通", destination: "西明石", departureTime: "18", departureMinute: "39" } },
  { "111": { type: "G普通", destination: "新三田", departureTime: "18", departureMinute: "48" } },
  { "112": { type: "A普通", destination: "西明石", departureTime: "18", departureMinute: "54" } },
  { "113": { type: "G普通", destination: "新三田", departureTime: "19", departureMinute: "03" } },
  { "114": { type: "A普通", destination: "西明石", departureTime: "19", departureMinute: "09" } },
  { "115": { type: "G普通", destination: "新三田", departureTime: "19", departureMinute: "18" } },
  { "116": { type: "A普通", destination: "西明石", departureTime: "19", departureMinute: "24" } },
  { "117": { type: "G普通", destination: "新三田", departureTime: "19", departureMinute: "33" } },
  { "118": { type: "A普通", destination: "西明石", departureTime: "19", departureMinute: "39" } },
  { "119": { type: "G普通", destination: "新三田", departureTime: "19", departureMinute: "48" } },
  { "120": { type: "A普通", destination: "西明石", departureTime: "19", departureMinute: "54" } },
  { "121": { type: "G普通", destination: "新三田", departureTime: "20", departureMinute: "03" } },
  { "122": { type: "A普通", destination: "西明石", departureTime: "20", departureMinute: "09" } },
  { "123": { type: "G普通", destination: "新三田", departureTime: "20", departureMinute: "18" } },
  { "124": { type: "A普通", destination: "西明石", departureTime: "20", departureMinute: "24" } },
  { "125": { type: "G普通", destination: "新三田", departureTime: "20", departureMinute: "33" } },
  { "126": { type: "A普通", destination: "西明石", departureTime: "20", departureMinute: "39" } },
  { "127": { type: "G普通", destination: "新三田", departureTime: "20", departureMinute: "48" } },
  { "128": { type: "A普通", destination: "西明石", departureTime: "20", departureMinute: "54" } },
  { "129": { type: "G普通", destination: "宝　塚", departureTime: "21", departureMinute: "03" } },
  { "130": { type: "A普通", destination: "西明石", departureTime: "21", departureMinute: "09" } },
  { "131": { type: "G普通", destination: "新三田", departureTime: "21", departureMinute: "18" } },
  { "132": { type: "A普通", destination: "神　戸", departureTime: "21", departureMinute: "24" } },
  { "133": { type: "G普通", destination: "新三田", departureTime: "21", departureMinute: "33" } },
  { "134": { type: "A普通", destination: "西明石", departureTime: "21", departureMinute: "39" } },
  { "135": { type: "G普通", destination: "新三田", departureTime: "21", departureMinute: "48" } },
  { "136": { type: "A普通", destination: "西明石", departureTime: "21", departureMinute: "55" } },
  { "137": { type: "G普通", destination: "新三田", departureTime: "22", departureMinute: "05" } },
  { "138": { type: "A普通", destination: "西明石", departureTime: "22", departureMinute: "15" } },
  { "139": { type: "G普通", destination: "新三田", departureTime: "22", departureMinute: "25" } },
  { "140": { type: "A普通", destination: "西明石", departureTime: "22", departureMinute: "35" } },
  { "141": { type: "G普通", destination: "新三田", departureTime: "22", departureMinute: "45" } },
  { "142": { type: "A普通", destination: "西明石", departureTime: "22", departureMinute: "55" } },
  { "143": { type: "G普通", destination: "新三田", departureTime: "23", departureMinute: "05" } },
  { "144": { type: "A普通", destination: "西明石", departureTime: "23", departureMinute: "13" } },
  { "145": { type: "G普通", destination: "宝　塚", departureTime: "23", departureMinute: "21" } },
  { "146": { type: "A普通", destination: "西明石", departureTime: "23", departureMinute: "33" } },
  { "147": { type: "A普通", destination: "西明石", departureTime: "23", departureMinute: "46" } },
  { "148": { type: "A普通", destination: "大　阪", departureTime: "24", departureMinute: "11" } },
  { "149": { type: "A普通", destination: "大　阪", departureTime: "24", departureMinute: "36" } }
]

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // 現在時刻を文字列で取得
  document.getElementById('clock').textContent = timeString;
}

updateClock(); // 初回表示
setInterval(updateClock, 1000); // 1秒ごとに更新

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

function getNextTrains2(timetable2, currentHour, currentMinute, n = 3) {
  let nextTrains2 = [];
  let diffs2 = [];

  for (const trainData2 of timetable2) {
    const key2 = Object.keys(trainData2)[0];
    const train2 = trainData2[key2];

    const departureHour2 = parseInt(train2.departureTime);
    const departureMinute2 = parseInt(train2.departureMinute);

    const diff2 = (departureHour2 - currentHour) * 60 + (departureMinute2 - currentMinute);

    if (diff2 > 0) {
      diffs2.push({ diff2, train2 });
    }
  }

  diffs2.sort((a2, b2) => a2.diff2 - b2.diff2);

  for (let i2 = 0; i2 < Math.min(n, diffs2.length); i2++) {
    nextTrains2.push(diffs2[i2].train2);
  }

  return nextTrains2;
}


function show(){
  const now = new Date();
  const currentTimeHour = now.getHours();
  const currentTimeMinute = now.getMinutes();

  const nextTrains = getNextTrains(timetable, currentTimeHour, currentTimeMinute);
  const type1 = nextTrains[0].type;
  document.getElementById("type1").innerHTML = type1;
  const dest1 = nextTrains[0].destination;
  document.getElementById("dest1").innerHTML = dest1;
  const time1 = nextTrains[0].departureTime + ":" + nextTrains[0].departureMinute;
  document.getElementById("time1").innerHTML = time1;
  const remain1 = (nextTrains[0].departureTime - currentTimeHour) * 60 + (nextTrains[0].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain1").innerHTML = remain1;
  if ((nextTrains[0].departureTime - currentTimeHour) * 60 + (nextTrains[0].departureMinute - currentTimeMinute) < 5) {
    var judge1 = "✕"
  } else if (5 <= (0 < nextTrains[0].departureTime - currentTimeHour) * 60 + (nextTrains[0].departureMinute - currentTimeMinute) && (0 < nextTrains[0].departureTime - currentTimeHour) * 60 + (nextTrains[0].departureMinute - currentTimeMinute) < 10) {
    var judge1 = "△"
  } else {
    var judge1 = "〇"
  }
  document.getElementById("judge1").innerHTML = judge1;

  const type2 = nextTrains[1].type;
  document.getElementById("type2").innerHTML = type2;
  const dest2 = nextTrains[1].destination;
  document.getElementById("dest2").innerHTML = dest2;
  const time2 = nextTrains[1].departureTime + ":" + nextTrains[1].departureMinute;
  document.getElementById("time2").innerHTML = time2;
  const remain2 = (nextTrains[1].departureTime - currentTimeHour) * 60 + (nextTrains[1].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain2").innerHTML = remain2;
  if ((nextTrains[1].departureTime - currentTimeHour) * 60 + (nextTrains[1].departureMinute - currentTimeMinute) < 5) {
    var judge2 = "✕"
  } else if (5 <= (0 < nextTrains[1].departureTime - currentTimeHour) * 60 + (nextTrains[1].departureMinute - currentTimeMinute) && (0 < nextTrains[1].departureTime - currentTimeHour) * 60 + (nextTrains[1].departureMinute - currentTimeMinute) < 10) {
    var judge2 = "△"
  } else {
    var judge2 = "〇"
  }
  document.getElementById("judge2").innerHTML = judge2;
  
  const type3 = nextTrains[2].type;
  document.getElementById("type3").innerHTML = type3;
  const dest3 = nextTrains[2].destination;
  document.getElementById("dest3").innerHTML = dest3;
  const time3 = nextTrains[2].departureTime + ":" + nextTrains[2].departureMinute;
  document.getElementById("time3").innerHTML = time3;
  const remain3 = (nextTrains[2].departureTime - currentTimeHour) * 60 + (nextTrains[2].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain3").innerHTML = remain3;
  if ((nextTrains[2].departureTime - currentTimeHour) * 60 + (nextTrains[2].departureMinute - currentTimeMinute) < 5) {
    var judge3 = "✕"
  } else if (5 <= (0 < nextTrains[2].departureTime - currentTimeHour) * 60 + (nextTrains[2].departureMinute - currentTimeMinute) && (0 < nextTrains[2].departureTime - currentTimeHour) * 60 + (nextTrains[2].departureMinute - currentTimeMinute) < 10) {
    var judge3 = "△"
  } else {
    var judge3 = "〇"
  }
  document.getElementById("judge3").innerHTML = judge3;

  const nextTrains2 = getNextTrains2(timetable2, currentTimeHour, currentTimeMinute);
  const type4 = nextTrains2[0].type;
  document.getElementById("type4").innerHTML = type4;
  const dest4 = nextTrains2[0].destination;
  document.getElementById("dest4").innerHTML = dest4;
  const time4 = nextTrains2[0].departureTime + ":" + nextTrains2[0].departureMinute;
  document.getElementById("time4").innerHTML = time4;
  const remain4 = (nextTrains2[0].departureTime - currentTimeHour) * 60 + (nextTrains2[0].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain4").innerHTML = remain4;
  if ((nextTrains2[0].departureTime - currentTimeHour) * 60 + (nextTrains2[0].departureMinute - currentTimeMinute) < 5) {
    var judge4 = "✕"
  } else if (5 <= (0 < nextTrains2[0].departureTime - currentTimeHour) * 60 + (nextTrains2[0].departureMinute - currentTimeMinute) && (0 < nextTrains2[0].departureTime - currentTimeHour) * 60 + (nextTrains2[0].departureMinute - currentTimeMinute) < 10) {
    var judge4 = "△"
  } else {
    var judge4 = "〇"
  }
  document.getElementById("judge4").innerHTML = judge4;

  const type5 = nextTrains2[1].type;
  document.getElementById("type5").innerHTML = type5;
  const dest5 = nextTrains2[1].destination;
  document.getElementById("dest5").innerHTML = dest5;
  const time5 = nextTrains2[1].departureTime + ":" + nextTrains2[1].departureMinute;
  document.getElementById("time5").innerHTML = time5;
  const remain5 = (nextTrains2[1].departureTime - currentTimeHour) * 60 + (nextTrains2[1].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain5").innerHTML = remain5;
  if ((nextTrains2[1].departureTime - currentTimeHour) * 60 + (nextTrains2[1].departureMinute - currentTimeMinute) < 5) {
    var judge5 = "✕"
  } else if (5 <= (0 < nextTrains2[1].departureTime - currentTimeHour) * 60 + (nextTrains2[1].departureMinute - currentTimeMinute) && (0 < nextTrains2[1].departureTime - currentTimeHour) * 60 + (nextTrains2[1].departureMinute - currentTimeMinute) < 10) {
    var judge5 = "△"
  } else {
    var judge5 = "〇"
  }
  document.getElementById("judge5").innerHTML = judge5;
  
  const type6 = nextTrains2[2].type;
  document.getElementById("type6").innerHTML = type6;
  const dest6 = nextTrains2[2].destination;
  document.getElementById("dest6").innerHTML = dest6;
  const time6 = nextTrains2[2].departureTime + ":" + nextTrains2[2].departureMinute;
  document.getElementById("time6").innerHTML = time6;
  const remain6 = (nextTrains2[2].departureTime - currentTimeHour) * 60 + (nextTrains2[2].departureMinute - currentTimeMinute) + "分";
  document.getElementById("remain6").innerHTML = remain6;
  if ((nextTrains2[2].departureTime - currentTimeHour) * 60 + (nextTrains2[2].departureMinute - currentTimeMinute) < 5) {
    var judge6 = "✕"
  } else if (5 <= (0 < nextTrains2[2].departureTime - currentTimeHour) * 60 + (nextTrains2[2].departureMinute - currentTimeMinute) && (0 < nextTrains2[2].departureTime - currentTimeHour) * 60 + (nextTrains2[2].departureMinute - currentTimeMinute) < 10) {
    var judge6 = "△"
  } else {
    var judge6 = "〇"
  }
  document.getElementById("judge6").innerHTML = judge6;
}
setInterval(show, 10)

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('fullscreenButton');
  const fullscreenElement = document.documentElement; // 全画面表示にする要素

  button.addEventListener('click', function() {
    openFullscreen();
    button.style.display = 'none'; // ボタンを非表示にする
  });

  function openFullscreen() {
    if (fullscreenElement.requestFullscreen) {
      fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.mozRequestFullScreen) { /* Firefox */
      fullscreenElement.mozRequestFullScreen();
    } else if (fullscreenElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen) { /* IE/Edge */
      fullscreenElement.msRequestFullscreen();
    }
  }

  // 全画面表示が解除されたときにボタンを再表示する場合
  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) { // 全画面表示が解除された場合
      button.style.display = 'block'; // ボタンを再表示する
    }
  });
});