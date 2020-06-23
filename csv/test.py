#import matplotlib.pyplot as plt
import csv
import sys
from datetime import datetime
from datetime import timedelta

import numpy as np
import matplotlib.pyplot as plt

formatStr = '%m/%d/%Y %I:%M %p'
TOTAL = 100
filename = "100.csv"
firstdate = datetime.strptime("1/12/2019",'%m/%d/%Y')
DAYSINSEM = 112

inputdT = []
fullLocs = []
usage = []
balances = []
dates = []
times = []
locations = []
dateTimes = []
refDates = []
refBal = []
fallSemester = datetime.strptime('01/12/2019 12:00 AM', formatStr)
fallSemesterEnd = datetime.strptime('05/12/2019 12:00 PM', formatStr)


for i in range(0, DAYSINSEM):
	temp = fallSemester + timedelta(days=i)  
	refDates.append(temp)

tempTot = 0
divisor = TOTAL / DAYSINSEM
for i in range(0, DAYSINSEM):
	tempTot = tempTot + divisor
	refBal.append(TOTAL - tempTot)

print(refDates)
print(refBal)

with open(filename,'r') as csvfile:
	plots = csv.reader(csvfile, delimiter=',')
	for row in plots:
		if row[0] != "Date":
			inputdT.append(row[0])
			fullLocs.append(row[1])
			usage.append(int(row[2]))
			balances.append(int(row[3]))

for d in inputdT:
	date, time = d.split(" ")
	dates.append(date)
	times.append(time)
	print(d)
	newD = d[:len(d) - 2] + " " + d[len(d) -2 :]
	print(newD)
	#print(datetime.strptime(d, formatStr))
	dateTimes.append(datetime.strptime(newD, formatStr))

for l in fullLocs:
	fullLoc = l.split(" ")
	locations.append(fullLoc[0])


allDates = []
for dateTime in dateTimes:
	allDates.append(dateTime)

allBalances = []
for balance in balances:
	allBalances.append(balance)



toPrintADates = []
toPrintABal = []
toPrintRDates = []
toPrintRBal = []

for i in range(0,len(allDates)):
	if allDates[i] > firstdate:
		toPrintADates.append(allDates[i])
		toPrintABal.append(allBalances[i])

for i in range(0,len(refDates)):
	if refDates[i] > firstdate:
		toPrintRDates.append(refDates[i])
		toPrintRBal.append(refBal[i])

print()
print(toPrintADates)

plt.plot(toPrintADates,toPrintABal, label='Actual')
plt.plot(toPrintRDates, toPrintRBal, label='Reference')
#plt.plot(newDates,returns, label='Projection')
plt.xlabel('date')
plt.ylabel('balance')
plt.title('Your ' + str(TOTAL) + ' Meal Plan Usage')
plt.legend()
plt.show()
# values = []
# labels = toPrintABal


# # for v in toPrintADates:
# # 	values.append(v.strftime("%B %d, %Y"))

# for i in range(0,len(toPrintADates)):
# 	values.append(122 - i)	




# #import matplotlib.pyplot as plt
# import csv
# import sys
# from datetime import datetime
# from datetime import timedelta

# import numpy as np
# import matplotlib.pyplot as plt

# from flask import Flask
# from flask import Markup
# from flask import Flask
# from flask import render_template
# app = Flask(__name__)
 
# @app.route("/")
# def chart():
# 	# labels = ["January","February","March","April","May","June","July","August"]
# 	# values = [10,9,8,7,6,4,7,8]

# 	formatStr = '%m/%d/%Y %I:%M %p'
# 	TOTAL = 160
# 	filename = "160.csv"
# 	firstdate = datetime.strptime("9/1/2018",'%m/%d/%Y')
# 	DAYSINSEM = 112

# 	inputdT = []
# 	fullLocs = []
# 	usage = []
# 	balances = []
# 	dates = []
# 	times = []
# 	locations = []
# 	dateTimes = []
# 	refDates = []
# 	refBal = []
# 	fallSemester = datetime.strptime('09/01/2018 12:00 AM', formatStr)
# 	fallSemesterEnd = datetime.strptime('12/22/2018 12:00 PM', formatStr)


# 	for i in range(0, DAYSINSEM):
# 		temp = fallSemester + timedelta(days=i)  
# 		refDates.append(temp)

# 	tempTot = 0
# 	divisor = TOTAL / DAYSINSEM
# 	for i in range(0, DAYSINSEM):
# 		tempTot = tempTot + divisor
# 		refBal.append(TOTAL - tempTot)

# 	print(refDates)
# 	print(refBal)

# 	with open(filename,'r') as csvfile:
# 		plots = csv.reader(csvfile, delimiter=',')
# 		for row in plots:
# 			if row[0] != "Date":
# 				inputdT.append(row[0])
# 				fullLocs.append(row[1])
# 				usage.append(int(row[2]))
# 				balances.append(int(row[3]))

# 	for d in inputdT:
# 		date, time = d.split(" ")
# 		dates.append(date)
# 		times.append(time)
# 		print(d)
# 		newD = d[:len(d) - 2] + " " + d[len(d) -2 :]
# 		print(newD)
# 		#print(datetime.strptime(d, formatStr))
# 		dateTimes.append(datetime.strptime(newD, formatStr))

# 	for l in fullLocs:
# 		fullLoc = l.split(" ")
# 		locations.append(fullLoc[0])


# 	allDates = []
# 	for dateTime in dateTimes:
# 		allDates.append(dateTime)

# 	allBalances = []
# 	for balance in balances:
# 		allBalances.append(balance)



# 	toPrintADates = []
# 	toPrintABal = []
# 	toPrintRDates = []
# 	toPrintRBal = []

# 	for i in range(0,len(allDates)):
# 		if allDates[i] > firstdate:
# 			toPrintADates.append(allDates[i])
# 			toPrintABal.append(allBalances[i])

# 	for i in range(0,len(refDates)):
# 		if refDates[i] > firstdate:
# 			toPrintRDates.append(refDates[i])
# 			toPrintRBal.append(refBal[i])

# 	# print()
# 	# print(toPrintADates)

# 	# plt.plot(toPrintADates,toPrintABal, label='Actual')
# 	# plt.plot(toPrintRDates, toPrintRBal, label='Reference')
# 	# #plt.plot(newDates,returns, label='Projection')
# 	# plt.xlabel('date')
# 	# plt.ylabel('balance')
# 	# plt.title('Your ' + str(TOTAL) + ' Meal Plan Usage')
# 	# plt.legend()
# 	# plt.show()
# 	values = []
# 	labels = toPrintABal


# 	# for v in toPrintADates:
# 	# 	values.append(v.strftime("%B %d, %Y"))

# 	for i in range(0,len(toPrintADates)):
# 		values.append(122 - i)	



# 	return render_template('chart.html', values=values, labels=labels)
 
# if __name__ == "__main__":
# 	app.run(host='0.0.0.0', port=5001)











