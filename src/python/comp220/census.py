import csv


def census():
    totalLines = 0

    totalResidentCount = 0
    residentialResidentCount = 0
    industrialResidentCount = 0
    majorParkResidentCount = 0
    residualSubAreaResidentCount = 0

    classCount = {
        'Residential': 0,
        'Industrial': 0,
        'Major Park': 0,
        'Residual Sub Area': 0
    }

    sectorCount = {
        'Centre': 0,
        'North': 0,
        'Northeast': 0,
        'East': 0,
        'Southeast': 0,
        'South': 0,
        'Southwest': 0,
        'West': 0,
        'Northwest': 0
    }

    censusResults = {}

    with open("Census_by_Community_2018.csv", 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=',')
        for line in csv_reader:
            totalLines += 1

            if line['CLASS'] == "Residential":
                classCount["Residential"] += 1
                residentialResidentCount += int(line["RES_CNT"])
                totalResidentCount += int(line["RES_CNT"])
            elif line['CLASS'] == "Industrial":
                classCount["Industrial"] += 1
                industrialResidentCount += int(line["RES_CNT"])
                totalResidentCount += int(line["RES_CNT"])
            elif line['CLASS'] == "Major Park":
                classCount["Major Park"] += 1
                majorParkResidentCount += int(line["RES_CNT"])
                totalResidentCount += int(line["RES_CNT"])
            elif line['CLASS'] == "Residual Sub Area":
                classCount["Residual Sub Area"] += 1
                residualSubAreaResidentCount += int(line["RES_CNT"])
                totalResidentCount += int(line["RES_CNT"])

            if line['SECTOR'] == 'CENTRE':
                sectorCount['Centre'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'NORTH':
                sectorCount['North'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'NORTHEAST':
                sectorCount['Northeast'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'EAST':
                sectorCount['East'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'SOUTHEAST':
                sectorCount['Southeast'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'SOUTH':
                sectorCount['South'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'SOUTHWEST':
                sectorCount['Southwest'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'WEST':
                sectorCount['West'] += int(line["RES_CNT"])
            elif line['SECTOR'] == 'NORTHWEST':
                sectorCount['Northwest'] += int(line["RES_CNT"])


    censusResults["lines"] = totalLines
    censusResults["Total Resident Count"] = totalResidentCount
    censusResults["Residential Resident Count"] = residentialResidentCount
    censusResults["Industrial Resident Count"] = industrialResidentCount
    censusResults["Major Park Resident Count"] = majorParkResidentCount
    censusResults["Residual Sub Area Resident Count"] = residualSubAreaResidentCount

    with open('report.txt', 'w') as report:
        report.write("--------2018 Calgary Census brought to you by Python--------\n")
        report.write(f"There were {censusResults['lines']} lines in the dataset\n")
        report.write(f"There was {censusResults['Total Resident Count']} residents during this census\n")
        report.write("\n --------Class Data--------\n")
        report.writelines([f"Occupied Residential dwellings: {classCount['Residential']}, Population: {censusResults['Residential Resident Count']}\n",
                           f"Occupied Industrial dwellings: {classCount['Industrial']}, Population: {censusResults['Industrial Resident Count']}\n",
                           f"Major Park dwellings: {classCount['Major Park']}, Population: {censusResults['Major Park Resident Count']}\n",
                           f"Residual Sub Area dwellings: {classCount['Residual Sub Area']}, Population: {censusResults['Residual Sub Area Resident Count']}\n",
                           ])
        report.write("\n --------Sector Data--------\n")
        report.writelines([f"City Centre: {sectorCount['Centre']}\n",
                           f"City North: {sectorCount['North']}\n",
                           f"City Northeast: {sectorCount['Northeast']}\n",
                           f"City East: {sectorCount['East']}\n",
                           f"City Southeast: {sectorCount['Southeast']}\n",
                           f"City South: {sectorCount['South']}\n",
                           f"City Southwest: {sectorCount['Southwest']}\n",
                           f"City West: {sectorCount['West']}\n",
                           f"City Northwest: {sectorCount['Northwest']}\n",
                           ])

    return (f'There were {censusResults["lines"]} lines in the dataset')

census()
