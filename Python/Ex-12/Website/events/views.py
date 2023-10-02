from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.

list = []

def index(request):
    return render(request, "events/layout.html", {
        "events" : list
    })

def addEvents(request):

    if request.method == "POST":
        if request.POST.get("name") and request.POST.get("location") and request.POST.get("date"):
            event ={
                "name" : request.POST.get("name"),
                "location" : request.POST.get("location"),
                "date" : request.POST.get("date")
            }

            list.append(event)


        return render(request, "events/events.html",{
            "events" : list
        })