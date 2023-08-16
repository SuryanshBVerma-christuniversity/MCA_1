domain = input("Enter your domain name : ")
list = list(domain.replace(" ",""))

print(list, end="\n\n")
# Positive indexing and slicing
print("Positive indexing and slicing:")
print("Character at index 0:", domain[0])       
print("Characters from index 1 to 3:", domain[1:4]) 
print("Characters from index 2 onwards:", domain[2:])

# Negative indexing and slicing
print("\nNegative indexing and slicing:")
print("Character at index -1:", domain[-1])
print("Characters from index -4 to -2:", domain[-4:-1])
print("Characters except the last one:", domain[:-1])

# Using negative step in slicing
print("\nUsing negative step:")
print("Reverse the string:", domain[::-1])
print("Every second character in reverse:", domain[::-2])
