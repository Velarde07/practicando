//Social media profile

//1. User information
const username = 'codeCrafter'
const fullname = 'Boris Noel'
const age = 20
const isStudent = true

// 2. Address
const address = {
    street: '123 apples',
    city: 'Lima',
    state: 'Maryland',
    zipCode: 245
}

// 3. Hobbies
const hobbies = ['Coding', 'Reading', 'Gaming']

// 4. Generating personalized bio
const personalized = `Hi, yo soy ${fullname}, tengo ${age} años. 
Vivo en ${address.city}. 
Me encanta ${hobbies.join(',')}. 
Sígueme para más aventuras!`

// 5. Print the user profile and bio
console.log(personalized)