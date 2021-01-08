get=input("enter the size:")
the_size=["big","medium","small"]
the_price=[1000,500,200]

if get in the_size:
    get_ok=the_size.index(get)
    price=the_price[get_ok]
    print(price)

else:
    print("wrong input")


