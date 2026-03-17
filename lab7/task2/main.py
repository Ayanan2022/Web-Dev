from models import Animal, Dog, Cat


def main():
    animal1 = Animal("Generic Animal", 5, "gray")
    dog1 = Dog("Buddy", 3, "brown", "Labrador")
    cat1 = Cat("Whiskers", 2, "white", 9)

    animals = [animal1, dog1, cat1]

    for animal in animals:
        print(animal)
        print(animal.info())
        print(animal.speak())   # polymorphism
        print()

    print(dog1.fetch())
    print(cat1.climb())


if __name__ == "__main__":
    main()