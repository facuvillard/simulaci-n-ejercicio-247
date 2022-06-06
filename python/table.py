from tabulate import tabulate

def showTable(data): 
        col_names = ["Iteración", "t", "c", "K1", "K2", "K3", "K4", "c(i+1)", "t(i+1)"]
        print(tabulate(data, headers=col_names, tablefmt="grid", showindex="always"))



