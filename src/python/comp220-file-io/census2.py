# total res_cnt by CLASS & SECTOR
# do not use lists, sort file, just 1 loop
# count number of lines for each independently, CLASS and SECTOR
# count # of lines
# print report
# try with no if statements
# write to a file called report.txt

def readCSV():
    classCount = {'residential': 0,
        'industrial': 0,
        'major park': 0,
        'residual sub area': 0}

    sectorCount = {'east': 0,
        'west': 0,
        'north': 0,
        'south': 0,
        'centre': 0,
        'nw': 0,
        'ne': 0,
        'sw': 0,
        'se': 0}

    resCount = int(0)

    classResCount = int(classCount['residential'])
    classIndCount = int(classCount['industrial'])
    classParkCount = int(classCount['major park'])
    classSubCount = int(classCount['residual sub area'])
    resResCount = int(0)
    indResCount = int(0)
    parkResCount = int(0)
    subResCount = int(0)
    secNorth = int(sectorCount['north'])
    secSouth = int(sectorCount['south'])
    secWest = int(sectorCount['west'])
    secEast = int(sectorCount['east'])
    secCentre = int(sectorCount['centre'])
    secNE = int(sectorCount['ne'])
    secNW = int(sectorCount['nw'])
    secSW = int(sectorCount['sw'])
    secSE = int(sectorCount['se'])
            
    with open('census.csv', 'r') as rf:
        with open('report.txt', 'w') as wf:           
            wf.write('----- 2018 Census ----- \n' + ' \n')
            next(rf)
            for line in rf:
                # Res Count            
                resCount += int(line.split(',')[9])

                # Class
                if 'Residential' in line.split(',')[0]:
                    classResCount += 1
                    resResCount += int(line.split(',')[9])
                if 'Industrial' in line.split(',')[0]:
                    classIndCount += 1
                    indResCount += int(line.split(',')[9])
                if 'Major Park' in line.split(',')[0]:
                    classParkCount += 1
                    parkResCount += int(line.split(',')[9])
                if 'Residual Sub Area' in line.split(',')[0]:
                    classSubCount += 1
                    subResCount += int(line.split(',')[9])

                # Sector

                if 'NORTH' in line.split(',')[4]:
                    secNorth += 1
                if 'NORTHEAST' in line.split(',')[4]:
                    secNE += 1
                if 'NORTHWEST' in line.split(',')[4]:
                    secNW += 1
                if 'SOUTH' in line.split(',')[4] :
                    secSouth += 1
                if 'SOUTHEAST' in line.split(',')[4] :
                    secSE += 1
                if 'SOUTHWEST' in line.split(',')[4]:
                    secSW += 1
                if 'EAST' in line.split(',')[4]:
                    secEast += 1
                if 'WEST' in line.split(',')[4]:
                    secWest += 1
                if 'CENTRE' in line.split(',')[4]:
                    secCentre += 1

            wf.write('--- Class Count --- \n')
            wf.write(f'Residental: {classResCount} Count: {resResCount}\n')
            wf.write(f'Industrial: {classIndCount} Count: {indResCount}\n')
            wf.write(f'Major Park: {classParkCount} Count: {parkResCount}\n')
            wf.write(f'Residual Sub Area: {classSubCount} Count: {subResCount}\n' + ' \n')
            wf.write('--- Sector Count --- \n')
            wf.write(f'North: {secNorth} NE: {secNE} NW: {secNW} \n')
            wf.write(f'South: {secSouth} SE: {secSE} SW: {secSW} \n')
            wf.write(f'East: {secEast} \n')
            wf.write(f'West: {secWest} \n')
            wf.write(f'Centre: {secCentre} \n' + ' \n')
            wf.write('--- Res Count ---\n'+f'Total Res Count: {resCount} \n')


            # file = open('report.txt', 'r')
            # data = file.read()
            # if = len(data)
            # file.close()
            # return (f'There are {charCount} characters in syntax.js')
            
readCSV()

                # wf.write('Class: ' + line.split(',')[0] + ' '
                # + 'Sector: ' + line.split(',')[4]  + ' '
                # + 'Res Count: ' + line.split(',')[9] + '\n')