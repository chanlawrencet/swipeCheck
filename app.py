from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)
api = Api(app)


def getPlot(csvData, settings):
    data = dict()
    for i in csvData:
        if 'Date' in i and i['Date'] != '' and 'Balance' in i and i['Balance'] != '':
            currDT = datetime.strptime(i['Date'], '%m/%d/%Y %I:%M%p')
            stringDT = currDT.strftime('%Y-%m-%d')
            if stringDT not in data:
                data[stringDT] = i['Balance']
            else:
                # take larger balance (end-of-day balance)
                data[stringDT] = i['Balance'] if i['Balance'] > data[stringDT] else data[stringDT]


    startDate = datetime.strptime('09/01/2018', '%m/%d/%Y')
    endDate = datetime.strptime('12/20/2018', '%m/%d/%Y')
    numMeals = settings['mealPlan']
    timeD = endDate - startDate
    perDay = numMeals / timeD.days
    currDate = startDate
    currMeals = numMeals

    ideal = dict()
    while currDate < endDate:
        ideal[currDate.strftime('%Y-%m-%d')] = currMeals
        currMeals = currMeals - perDay
        currDate = currDate + timedelta(days=1)

    list = []
    for i in ideal:
        list.insert(0, {
            'date': i,
            'yourUsage': data[i] if i in data else None,
            'idealUsage': round(ideal[i], 0),
        })

    return list


def getCalendar(csvData):
    data = dict()
    for i in csvData:
        if 'Date' in i and i['Date'] != '':
            currDT = datetime.strptime(i['Date'], '%m/%d/%Y %I:%M%p')
            stringDT = currDT.strftime('%Y-%m-%d')
            if stringDT not in data:
                data[stringDT] = 1
            else:
                data[stringDT] = data[stringDT] + 1

    list = []
    for i in data:
        list.append({'day': i,
                     'value': data[i]})
    return ({
        'from': '2018-09-01',
        'to': '2018-12-31',
        'data': list
    })

def getPerLocation(csvData):
    counts = {'H': 0, 'P': 0, 'D': 0, 'C': 0}
    for i in csvData:
        if 'Description' in i:
            counts[i['Description'][0]] = counts[i['Description'][0]] + 1

    return (
        [
            {'id': 'Hodgdon', 'label': 'Hodgdon', 'value': counts['H']},
            {'id': 'Pax et Lox', 'label': 'Pax et Lox', 'value': counts['P']},
            {'id': 'Dewick', 'label': 'Dewick', 'value': counts['D']},
            {'id': 'Carm', 'label': 'Carm', 'value': counts['C']}
        ]
    )

class HelloWorld(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        csvData = list()
        settings = dict()
        csvData = json_data['csvData']
        settings = json_data['settings']



        getCalendar(csvData)

        return {
            'plot': getPlot(csvData, settings),

            'stats': {
                'perLocation': getPerLocation(csvData),
                'calendar': getCalendar(csvData),
            }
        }

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)