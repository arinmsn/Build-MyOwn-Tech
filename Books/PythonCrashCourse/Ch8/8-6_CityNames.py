# Write a function called city_country() that takes in the name
# of a city and its country. The function should return a string formatted like this:
# "Santiago, Chile"
# Call your function with at least three city-country pairs, and print the value
# that’s returned.

def city_country(city, country):
    message = city + ', ' + country
    return message

while True:
    print("Type 'q' at any time to quit ")
    city_name = input("Enter a city name: ")
    if city_name == 'q':
        break

    country_name = input("Enter name of that city's country: ")
    if country_name == 'q':
        break

    formatted_message = city_country(city_name, country_name)
    print(f'{formatted_message}')

city_country()