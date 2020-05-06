var names = ["Anna", "John", "Jason", "Henna", "Jack", "Liam", "Paula",  "Henry"];


for (name in names)
{ 

   if (names[name].charAt(0).toLowerCase() == 'j' ) {
      
        goodBye(names[name]);
    } else {
      
        Hello(names[name]);

    }
}