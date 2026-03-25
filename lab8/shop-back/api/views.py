from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
        })
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({
            'id': p.id,
            'name': p.name,
            'price': p.price,
        })
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)


def category_list(request):
    categories = Category.objects.all()
    data = []
    for c in categories:
        data.append({
            'id': c.id,
            'name': c.name,
        })
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({
            'id': c.id,
            'name': c.name,
        })
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)


def category_products(request, id):
    try:
        c = Category.objects.get(id=id)
        products = c.product_set.all()

        data = []
        for p in products:
            data.append({
                'id': p.id,
                'name': p.name,
                'price': p.price,
            })

        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)