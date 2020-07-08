import census


def test_reportOutput():
    assert(census.readCSV() == '')
