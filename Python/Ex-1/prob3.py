def main():

    alpha, numeric, special = 0, 0, 0
    name ="Suryansh Bachchan Verma"
    reg = 2347260
    year = 2023
    para = f'My name is {name}, I have choose "Event Management" as my domain my registration number is {reg}, from MCA section B {year}'


    for i in para:

        if i.isdigit():
            numeric += 1
        elif i.isalpha():
            alpha += 1 
        elif not i == " ":
            special += 1
        
    print(f"Number of int characters in the paragraph: {numeric}")
    print(f"Number of String characters in the paragraph: {alpha}")
    print(f"Number of special characters in the paragraph: {special}")

main()
