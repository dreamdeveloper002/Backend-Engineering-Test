const phoneBooks = [
  {
    '234803058431': {
      Name: 'Meal',
      Email: 'test2@gmail.com',
      Date_created: '2020'
    }
  },
  {
    '234803058432': {
      Name: 'Meals',
      Email: 'test@gmail.com',
      Date_created: '2020'
    }
  }
]

const createPhoneNumber = (phoneNumber, Name, Email, Date_created) => {
  if(typeof phoneNumber !== 'number') {
    console.log('invalid phone number')
    return false;
  }

  for (let i = 0; i < phoneBooks.length; i++) {
    if(phoneBooks[i].hasOwnProperty(phoneNumber)) {
      console.log('Duplicate number')
      return false;
    }
  }

  return phoneBooks.push({
    [phoneNumber] : {
      Name, Email, Date_created
    }
  })
}

const getPhoneNumber = (phoneNumber) => {
  if(typeof phoneNumber !== 'number') {
    console.log('invalid phone number')
    return false;
  }

  for (let i = 0; i < phoneBooks.length; i++) {
    if (phoneBooks[i].hasOwnProperty(phoneNumber)){
         return phoneBooks[i];
    }

    return false;
  }
}


const getAllPhoneNumber = () => {
  return phoneBooks;
}


// const result = getPhoneNumber(234803058431)
// console.log(result);
// createPhoneNumber( +234803058431, 'Meal', 'test3@gmail.com', '2020');
// const results = getAllPhoneNumber()
// console.log(results);