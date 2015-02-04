from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def solution(request):
    return render(request, 'solution.html')
