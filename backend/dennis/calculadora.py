num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
menu = input("Qual operação você deseja fazer? \n (a) Adição \n (b) Subtração \n (c) Divisão \n (d) Multiplicação \n Digite: ")

if menu == "a":
    resultado = num1 + num2
    print("resultado da operação: " + str(num1) + " + " + str(num2) + " = " + str(resultado))
elif menu == "b":
    resultado = num1 - num2
    print("resultado da operação: " + str(num1) + " - " + str(num2) + " = " + str(resultado))
    
elif menu == "c":
    resultado = num1/num2
    print("resultado da operação: " + str(num1) + " % " + str(num2) + " = " + str(resultado))
elif menu == "d":
    resultado = num1 * num2
    print("resultado da operação: " + str(num1) + " x " + str(num2) + " = " + str(resultado))
else :
    print("Digite corretamente a opção")
