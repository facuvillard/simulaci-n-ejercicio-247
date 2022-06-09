import table
import charts
import calculations as calc
import inputs
from decimal import *


def main():
    prec = inputs.getPrecision()
    getcontext().prec = prec
    result = iterate()
    table.showTable(result['iterations'], prec)
    charts.showChart(result['arrayOfTValues'], result['arrayOfCValues'])


def iterate():
    iterations = []
    arrayOfCValues = []
    arrayOfTValues = []

    t = Decimal(0)
    V = Decimal(10)
    F = Decimal(200)
    Q = Decimal(1)
    k = Decimal(0.1)
    c = Decimal(0)
    h = Decimal(inputs.getH())
    K1 = calc.calculateK1(c, k, Q, F, V)
    K2 = calc.calculateK2(c, k, Q, F, V, h, K1)
    K3 = calc.calculateK3(c, k, Q, F, V, h, K2)
    K4 = calc.calculateK4(c, k, Q, F, V, h, K3)
    nextC = calc.calculateNextC(c, h, K1, K2, K3, K4)
    nextT = calc.calculateNextT(h, t)
    iterations.append([t, c, K1, K2, K3, K4, nextC, nextT])
    while c != nextC:
        arrayOfCValues.append(c)
        arrayOfTValues.append(t)
        t = nextT
        c = nextC
        K1 = calc.calculateK1(c, k, Q, F, V)
        K2 = calc.calculateK2(c, k, Q, F, V, h, K1)
        K3 = calc.calculateK3(c, k, Q, F, V, h, K2)
        K4 = calc.calculateK4(c, k, Q, F, V, h, K3)
        nextC = calc.calculateNextC(c, h, K1, K2, K3, K4)
        nextT = calc.calculateNextT(h, t)
        iterations.append([t, c, K1, K2, K3, K4, nextC, nextT])
    
    result = dict()
    result['iterations'] = iterations
    result['arrayOfTValues'] = arrayOfTValues
    result['arrayOfCValues'] = arrayOfCValues
    return result


main()
