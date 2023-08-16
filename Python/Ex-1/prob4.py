
# event set = {Sl, Name_of_event, budget, invitation_status(T/F)}
event = {1, "Pitch Deck", 10000.00, True}

'''
    pop(): Removes random item from the set

'''
event.pop()
print("pop() : ",event)

# event set = {Sl, Name_of_event, budget, invitation_status(T/F)}
event = {1, "Pitch Deck", 10000.00, True}
''' 
    clear(): Removes all elements in a set.
'''
event.clear()
print("clear() : ", event)

# event set = {Sl, Name_of_event, budget, invitation_status(T/F)}
event = {1, "Pitch Deck", 10000.00, True}
''' 
    discard(): Similar to remove() just that discard() does not raises 
    an error if the value entered does not exsist.
'''
event.discard("p")
print("discard(<value>) : ", event)

# event set = {Sl, Name_of_event, budget, invitation_status(T/F)}
event = {1, "Pitch Deck", 10000.00, True}
''' 
    del : Deletes the set event,  so print(event) will raise an error
'''
del event
print("del event : ", end="")
print(event)