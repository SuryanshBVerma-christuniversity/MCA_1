from re import split

def get_datatype(element):
    try:
        int(element)
        return "int"
    except ValueError:
        pass
    
    try:
        float(element)
        return "float"
    except ValueError:
        pass
    
    return "string"


def main():
    name ="Suryansh Bachchan Verma"
    reg = 2347260
    year = 2023
    para = f'My name is {name}, I have choose "Event Management" as my domain my registration number is {reg}, from MCA section B {year}'

    words = split(" |, ", para)
    print("Data Types of Selected Specific Elements:")
    for word in words:
        datatype = get_datatype(word)
        print(f"{word} - {datatype}")

main()

