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

    resCount = 0

    classResCount = int(classCount['residential'])
    classIndCount = int(classCount['industrial'])
    classParkCount = int(classCount['major park'])
    classSubCount = int(classCount['residual sub area'])
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
                num = int(line.split(',')[9])
                resCount += num

                # Class
                if 'Residential' in line:
                    classResCount += 1
                if 'Industrial' in line:
                    classIndCount += 1
                if 'Major Park' in line:
                    classParkCount += 1
                if 'Residual Sub Area' in line:
                    classSubCount += 1

                # Sector
                if 'NORTH' in line:
                    secNorth += 1
                if 'NORTHEAST' in line:
                    secNE += 1
                if 'NORTHWEST' in line:
                    secNW += 1
                if 'SOUTH' in line:
                    secSouth += 1
                if 'SOUTHEAST' in line:
                    secSE += 1
                if 'SOUTHWEST' in line:
                    secSW += 1
                if 'EAST' in line:
                    secEast += 1
                if 'WEST' in line:
                    secWest += 1
                if 'CENTRE' in line:
                    secCentre += 1

            wf.write('--- Class Count --- \n')
            wf.write(f'Residental: {classResCount} \n')
            wf.write(f'Industrial: {classIndCount} \n')
            wf.write(f'Major Park: {classParkCount} \n')
            wf.write(f'Residual Sub Area: {classSubCount} \n' + ' \n')
            wf.write('--- Sector Count --- \n')
            wf.write(f'North: {secNorth} NE: {secNE} NW: {secNW} \n')
            wf.write(f'South: {secSouth} SE: {secSW} SW: {secSW} \n')
            wf.write(f'East: {secEast} \n')
            wf.write(f'West: {secWest} \n')
            wf.write(f'Centre: {secCentre} \n' + ' \n')
            wf.write('--- Res Count ---\n'+f'Res Count: {resCount}')

readCSV()

                # wf.write('Class: ' + line.split(',')[0] + ' '
                # + 'Sector: ' + line.split(',')[4]  + ' '
                # + 'Res Count: ' + line.split(',')[9] + '\n')