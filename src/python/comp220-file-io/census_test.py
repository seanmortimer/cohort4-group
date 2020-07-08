import census

def test_reportOutput():
    assert (census.readCSV() == 'Total: 1264656\nResidental: 208 Res Count: 1263734\n'
    'Industrial: 42 Res Count: 922\n'
    'North: 81 NE: 44 NW: 30\n'
    'South: 81 SE: 23 SW: 44\n'
    'East: 90 West: 63 Centre: 62')
