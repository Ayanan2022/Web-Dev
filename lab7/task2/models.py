class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return f"{self.name} makes a sound."

    def info(self):
        return f"{self.name} is {self.age} years old and has {self.color} color."

    def __str__(self):
        return f"Animal(Name: {self.name}, Age: {self.age}, Color: {self.color})"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball."

    def __str__(self):
        return f"Dog(Name: {self.name}, Age: {self.age}, Color: {self.color}, Breed: {self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color, lives_left):
        super().__init__(name, age, color)
        self.lives_left = lives_left

    def speak(self):
        return f"{self.name} says: Meow!"

    def climb(self):
        return f"{self.name} is climbing a tree."

    def __str__(self):
        return (
            f"Cat(Name: {self.name}, Age: {self.age}, "
            f"Color: {self.color}, Lives left: {self.lives_left})"
        )