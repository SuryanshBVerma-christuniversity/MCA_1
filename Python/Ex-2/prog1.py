domain_attributes = ["Event_Name", "Location", "Time"]

domain_attributes.append("Invitation_Status")
print("append() : ", domain_attributes)

domain_attributes.insert(0, "Sl_no")
print("insert() : ", domain_attributes)

new = ["Manager_name",]
domain_attributes.extend(new)
print("extend() : ", domain_attributes)

loc = ["Sans berg", "St. Thomas's", "Eden Park"]
domain_attributes.insert(2, loc)
print(domain_attributes)