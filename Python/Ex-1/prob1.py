
def main():

    name ="Suryansh Bachchan Verma"
    reg = 2347260
    para = f'My name is {name}, I have choose "Event Management" as my domain my registration number is {reg}, from MCA section B'

    word = "my"
    frequency = count_word_frequency(para, word)
    print(f"The word '{word}' appears {frequency} times in the paragraph.")


def count_word_frequency(paragraph, word):
    words_list = paragraph.split()
    count = 0
    for w in words_list:
        if w.lower().strip('.,') == word.lower().strip('.,'):
            count += 1
    return count

main()