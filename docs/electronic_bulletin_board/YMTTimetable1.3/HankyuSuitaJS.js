const timetable = [
  { "": { type: "普通", destination: "北 千 里", departureTime: "04", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "05", departureMinute: "16" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "05", departureMinute: "38" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "05", departureMinute: "50" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "05", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "07" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "19" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "28" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "36" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "40" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "54" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "06", departureMinute: "58" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "01" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "07" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "11" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "19" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "25" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "32" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "36" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "41" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "47" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "07", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "01" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "06" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "13" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "20" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "24" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "31" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "42" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "49" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "08", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "01" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "06" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "11" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "18" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "38" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "09", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "08" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "14" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "49" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "10", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "11", departureMinute: "09" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "11", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "11", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "11", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "11", departureMinute: "49" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "11", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "12", departureMinute: "09" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "12", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "12", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "12", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "12", departureMinute: "49" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "12", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "13", departureMinute: "09" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "13", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "13", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "13", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "13", departureMinute: "49" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "13", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "14", departureMinute: "09" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "14", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "14", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "14", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "14", departureMinute: "49" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "14", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "09" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "29" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "44" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "15", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "09" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "14" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "17" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "24" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "31" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "37" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "16", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "05" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "12" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "20" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "26" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "34" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "40" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "17", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "02" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "08" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "14" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "20" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "28" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "35" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "40" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "18", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "00" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "08" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "15" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "20" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "28" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "35" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "40" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "19", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "05" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "08" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "15" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "22" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "30" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "35" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "41" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "20", departureMinute: "51" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "01" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "11" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "19" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "31" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "41" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "48" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "21", departureMinute: "57" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "22", departureMinute: "07" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "22", departureMinute: "18" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "22", departureMinute: "31" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "22", departureMinute: "43" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "22", departureMinute: "55" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "23", departureMinute: "07" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "23", departureMinute: "19" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "23", departureMinute: "30" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "23", departureMinute: "41" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "23", departureMinute: "56" } },
  { "": { type: "普通", destination: "北 千 里", departureTime: "24", departureMinute: "07" } }
]

const timetable2 = [
  { "": { type: "普通", destination: "天下茶屋", departureTime: "05", departureMinute: "07" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "05", departureMinute: "27" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "05", departureMinute: "46" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "06", departureMinute: "02" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "06", departureMinute: "13" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "06", departureMinute: "21" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "06", departureMinute: "30" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "06", departureMinute: "38" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "06", departureMinute: "46" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "06", departureMinute: "55" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "00" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "10" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "19" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "07", departureMinute: "26" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "32" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "38" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "07", departureMinute: "44" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "49" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "07", departureMinute: "55" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "08", departureMinute: "01" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "08", departureMinute: "08" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "08", departureMinute: "13" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "08", departureMinute: "20" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "08", departureMinute: "26" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "08", departureMinute: "30" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "08", departureMinute: "38" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "08", departureMinute: "42" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "08", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "08", departureMinute: "55" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "02" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "09", departureMinute: "09" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "12" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "09", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "22" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "29" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "36" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "09", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "46" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "09", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "09", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "10", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "10", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "10", departureMinute: "29" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "10", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "10", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "10", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "11", departureMinute: "05" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "11", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "11", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "11", departureMinute: "29" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "11", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "11", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "11", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "12", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "12", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "12", departureMinute: "29" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "12", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "12", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "12", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "13", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "13", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "13", departureMinute: "29" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "13", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "13", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "13", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "14", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "14", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "14", departureMinute: "29" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "14", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "14", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "14", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "15", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "15", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "15", departureMinute: "29" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "15", departureMinute: "39" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "15", departureMinute: "49" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "15", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "16", departureMinute: "09" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "16", departureMinute: "19" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "16", departureMinute: "25" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "16", departureMinute: "32" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "16", departureMinute: "38" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "16", departureMinute: "48" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "16", departureMinute: "55" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "16", departureMinute: "59" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "17", departureMinute: "03" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "17", departureMinute: "12" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "17", departureMinute: "18" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "17", departureMinute: "26" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "17", departureMinute: "31" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "17", departureMinute: "39" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "17", departureMinute: "45" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "17", departureMinute: "50" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "17", departureMinute: "57" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "18", departureMinute: "05" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "18", departureMinute: "12" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "18", departureMinute: "19" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "18", departureMinute: "25" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "18", departureMinute: "32" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "18", departureMinute: "39" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "18", departureMinute: "45" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "18", departureMinute: "52" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "18", departureMinute: "59" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "19", departureMinute: "05" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "19", departureMinute: "12" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "19", departureMinute: "19" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "19", departureMinute: "25" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "19", departureMinute: "32" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "19", departureMinute: "37" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "19", departureMinute: "45" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "19", departureMinute: "52" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "19", departureMinute: "57" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "20", departureMinute: "05" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "20", departureMinute: "15" } },
  { "": { type: "普通", destination: "淡　　路", departureTime: "20", departureMinute: "20" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "20", departureMinute: "26" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "20", departureMinute: "32" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "20", departureMinute: "39" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "20", departureMinute: "47" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "20", departureMinute: "56" } },
  { "": { type: "普通", destination: "淡　　路", departureTime: "21", departureMinute: "02" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "21", departureMinute: "10" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "21", departureMinute: "19" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "21", departureMinute: "30" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "21", departureMinute: "42" } },
  { "": { type: "普通", destination: "大阪梅田", departureTime: "21", departureMinute: "54" } },
  { "": { type: "普通", destination: "淡　　路", departureTime: "22", departureMinute: "05" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "22", departureMinute: "13" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "22", departureMinute: "24" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "22", departureMinute: "35" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "22", departureMinute: "46" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "22", departureMinute: "55" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "23", departureMinute: "08" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "23", departureMinute: "23" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "23", departureMinute: "38" } },
  { "": { type: "普通", destination: "天下茶屋", departureTime: "23", departureMinute: "54" } },
  { "": { type: "普通", destination: "天神橋筋六丁目", departureTime: "24", departureMinute: "13" } },
  { "": { type: "普通", destination: "淡　　路", departureTime: "24", departureMinute: "30" } }
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