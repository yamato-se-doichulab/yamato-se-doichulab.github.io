const timetable = [
  { "": { type: "2", destination: "桃山台駅", departureTime: "06", departureMinute: "30" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "06", departureMinute: "36" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "06", departureMinute: "42" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "06", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "06", departureMinute: "47" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "06", departureMinute: "55" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "07", departureMinute: "06" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "07", departureMinute: "12" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "07", departureMinute: "17" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "07", departureMinute: "25" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "07", departureMinute: "33" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "07", departureMinute: "35" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "07", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "07", departureMinute: "55" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "08", departureMinute: "05" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "08", departureMinute: "12" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "08", departureMinute: "29" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "08", departureMinute: "31" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "08", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "08", departureMinute: "53" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "09", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "09", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "09", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "09", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "09", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "10", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "10", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "10", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "10", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "10", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "11", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "11", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "11", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "11", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "11", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "12", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "12", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "12", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "12", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "12", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "13", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "13", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "13", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "13", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "13", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "14", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "14", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "14", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "14", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "14", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "15", departureMinute: "16" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "15", departureMinute: "26" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "15", departureMinute: "34" } },
  { "": { type: "4", destination: "千里中央", departureTime: "15", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "15", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "16", departureMinute: "08" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "16", departureMinute: "23" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "16", departureMinute: "26" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "16", departureMinute: "36" } },
  { "": { type: "4", destination: "千里中央", departureTime: "16", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "16", departureMinute: "51" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "17", departureMinute: "05" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "17", departureMinute: "17" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "17", departureMinute: "23" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "17", departureMinute: "29" } },
  { "": { type: "19", destination: "片山町三丁目 方面", departureTime: "17", departureMinute: "41" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "17", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "17", departureMinute: "53" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "18", departureMinute: "05" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "18", departureMinute: "12" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "18", departureMinute: "17" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "18", departureMinute: "29" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "18", departureMinute: "41" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "18", departureMinute: "44" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "18", departureMinute: "53" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "19", departureMinute: "00" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "19", departureMinute: "05" } },
  { "": { type: "19", destination: "片山町三丁目 方面", departureTime: "19", departureMinute: "17" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "19", departureMinute: "29" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "19", departureMinute: "41" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "19", departureMinute: "44" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "19", departureMinute: "47" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "19", departureMinute: "53" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "20", departureMinute: "05" } },
  { "": { type: "19", destination: "片山町三丁目 方面", departureTime: "20", departureMinute: "17" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "20", departureMinute: "29" } },
  { "": { type: "6", destination: "阪急千里山駅", departureTime: "20", departureMinute: "36" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "20", departureMinute: "41" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "20", departureMinute: "44" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "20", departureMinute: "53" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "21", departureMinute: "09" } },
  { "": { type: "19", destination: "片山町三丁目 方面", departureTime: "21", departureMinute: "17" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "21", departureMinute: "22" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "21", departureMinute: "39" } },
  { "": { type: "5", destination: "桃山台駅", departureTime: "21", departureMinute: "44" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "21", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅", departureTime: "22", departureMinute: "14" } },
  { "": { type: "13", destination: "原町二丁目 方面", departureTime: "22", departureMinute: "34" } },
  { "": { type: "20", destination: "五月が丘西 方面", departureTime: "22", departureMinute: "52" } },
  { "": { type: "2", destination: "桃山台駅★", departureTime: "23", departureMinute: "15" } },
  { "": { type: "13", destination: "原町二丁目 方面★", departureTime: "23", departureMinute: "32" } },
  { "": { type: "2", destination: "桃山台駅★", departureTime: "24", departureMinute: "00" } },
]

const timetable2 = [
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "06", departureMinute: "14" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "06", departureMinute: "25" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "06", departureMinute: "26" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "06", departureMinute: "35" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "06", departureMinute: "43" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "06", departureMinute: "50" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "06", departureMinute: "58" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "07", departureMinute: "04" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "08" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "10" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "07", departureMinute: "14" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "23" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "07", departureMinute: "30" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "34" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "37" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "41" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "46" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "07", departureMinute: "51" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "57" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "07", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "01" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "04" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "07" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "08", departureMinute: "11" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "17" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "23" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "27" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "35" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "08", departureMinute: "37" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "47" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "08", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "08", departureMinute: "57" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "09", departureMinute: "05" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "09", departureMinute: "07" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "09", departureMinute: "13" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "09", departureMinute: "23" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "09", departureMinute: "26" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "09", departureMinute: "37" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "09", departureMinute: "43" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "09", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "09", departureMinute: "57" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "10", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "10", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "10", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "10", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "10", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "11", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "11", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "11", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "11", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "11", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "12", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "12", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "12", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "12", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "12", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "13", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "13", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "13", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "13", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "13", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "14", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "14", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "14", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "14", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "14", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "15", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "15", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "15", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "15", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "15", departureMinute: "59" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "16", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "16", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "16", departureMinute: "42" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "16", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "17", departureMinute: "01" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "17", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "17", departureMinute: "18" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "17", departureMinute: "48" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "17", departureMinute: "55" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "17", departureMinute: "58" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "18", departureMinute: "09" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "18", departureMinute: "15" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "18", departureMinute: "28" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "18", departureMinute: "29" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "18", departureMinute: "43" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "18", departureMinute: "44" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "18", departureMinute: "50" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "19", departureMinute: "04" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "19", departureMinute: "06" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "19", departureMinute: "17" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "19", departureMinute: "31" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "19", departureMinute: "34" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "19", departureMinute: "45" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "19", departureMinute: "52" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "20", departureMinute: "02" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "20", departureMinute: "14" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "20", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "20", departureMinute: "22" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "20", departureMinute: "32" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "20", departureMinute: "50" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "20", departureMinute: "52" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "21", departureMinute: "09" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "21", departureMinute: "11" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "21", departureMinute: "16" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "21", departureMinute: "28" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "21", departureMinute: "43" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "22", departureMinute: "06" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "22", departureMinute: "07" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "22", departureMinute: "14" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "22", departureMinute: "26" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "22", departureMinute: "49" } },
  { "": { type: "", destination: "JR吹田駅(南口)", departureTime: "22", departureMinute: "56" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止", departureTime: "23", departureMinute: "14" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止★", departureTime: "23", departureMinute: "36" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止★", departureTime: "23", departureMinute: "47" } },
  { "": { type: "", destination: "JR吹田駅(北口) 止★", departureTime: "23", departureMinute: "56" } },
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
setInterval(show, 1000)

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