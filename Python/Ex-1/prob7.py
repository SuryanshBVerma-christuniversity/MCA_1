domain = input("Enter your domain name : ")
domain = domain.replace(" ","")

letter = input("Eneter the letter to search : ")
count = 0

for i in domain.lower():
    if letter == i:
        count += 1 

print("Count = ", count)

