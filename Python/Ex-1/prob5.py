event = set()
print(type(event))

event_details = {"5 Pm", "Near Greenwich Park", "Cultural Event", "Students", "Food:Available"}
event.update(event_details)

print(event)

# Arranging in decending order

sorted_list = sorted(event, reverse=True)

print(set(sorted_list))