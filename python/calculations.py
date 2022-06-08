from decimal import *

def calculateK1(c, k, Q, F, V):
    term1 = k * (c**2)
    term2 = (Q*c)/V
    term3 = (F/V)
    return Decimal(- term1 - term2 + term3)

def calculateK2(c, k, Q, F, V, h, K1): 
    c2 = c + ((h/2)* K1)
    term1 = k * (c2**2)
    term2 = (Q*c2)/V
    term3 = (F/V)
    return Decimal(- term1 - term2 + term3)

def calculateK3(c, k, Q, F, V, h, K2):
    c3 = c + ((h/2)* K2)
    term1 = k * (c3**2)
    term2 = (Q*c3)/V
    term3 = F/V
    return Decimal(- term1 - term2 + term3)
    
def calculateK4(c, k, Q, F, V, h, K3):
    c4 = c + (h*K3)
    term1 = k * (c4**2)
    term2 = (Q*c4)/V
    term3 = F/V
    return Decimal(- term1 - term2 + term3)


def calculateNextC(c, h, K1, K2, K3, K4):
    return Decimal(c + ((h/6)*(K1 + (2*K2) + (2*K3) + K4)))

def calculateNextT(h, t):
    return Decimal(t + h);
