import table
import charts
import calculations as calc

def main():
    result = iterate()
    table.showTable(result['iterations'])
    charts.showChart(result['arrayOfTValues'], result['arrayOfCValues'] )


def iterate():
    iterations = []
    arrayOfCValues=[]
    arrayOfTValues=[]

    t = 0
    V = 10
    F = 200
    Q = 1
    k = 0.1
    c = 0
    h = 0.01
    K1 = calc.calculateK1(c, k, Q, F, V)
    K2 = calc.calculateK2(c, k, Q, F, V, h, K1)
    K3 = calc.calculateK3(c, k, Q, F, V, h, K2)
    K4 = calc.calculateK4(c, k, Q, F, V, h, K3)
    nextC = calc.calculateNextC(c, h, K1, K2, K3, K4)
    nextT = calc.calculateNextT(h, t)

    for i in range(0, 1000):
        iterations.append([i, t, c, K1, K2, K3, K4, nextC, nextT])
        arrayOfCValues.append(c)
        arrayOfTValues.append(t)
        c = nextC
        t = nextT
        K1 = calc.calculateK1(c, k, Q, F, V)
        K2 = calc.calculateK2(c, k, Q, F, V, h, K1)
        K3 = calc.calculateK3(c, k, Q, F, V, h, K2)
        K4 = calc.calculateK4(c, k, Q, F, V, h, K3)
        nextC = calc.calculateNextC(c, h, K1, K2, K3, K4)
        nextT = calc.calculateNextT(h, t)

    result = dict()
    result['iterations'] = iterations
    result['arrayOfTValues'] = arrayOfTValues
    result['arrayOfCValues'] = arrayOfCValues
    return result

main()


