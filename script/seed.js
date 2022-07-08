'use strict'

const {db, models: { Member, Date, Member_Date}} = require('../server/db')
//const {Date} = require('../server/db/models')

// const productsDummyData = [
//   {
//     name: 'plush monkey',
//     price: 10,
//     stock: 3,
//     animalType: 'monkey'
//   },
//   {
//     name: 'plush cat',
//     price: 20,
//     stock: 10,
//     animalType: 'cat'
//   },
//   {
//     name: 'plush dog',
//     price: 10,
//     stock: 20,
//     animalType: 'dog'
//   },
//   {
//     name: 'plush bird',
//     price: 30,
//     stock: 30,
//     animalType: 'bird'
//   },
//   {
//     name: 'plush bear',
//     price: 10,
//     stock: 30,
//     animalType: 'bear'
//   },
//   {
//     name: 'plush squirrel',
//     price: 15,
//     stock: 7,
//     animalType: 'squirrel'
//   },
//   {
//     name: 'plush dog agian',
//     price: 40,
//     stock: 4,
//     animalType: 'dog'
//   },
//   {
//     name: 'plush cat again',
//     price: 10,
//     stock: 5,
//     animalType: 'cat'
//   },
// ]

// const usersDummyData = [
//   {
//     username: 'Jiefei',
//     email: 'wangjfmh@gmail.com',
//     password: '123'
//   },
//   {
//     username: 'Lily',
//     email: 'lily@gmail.com',
//     password: '123'
//   },
// ]
const dummyData = [{id: 1, name: "Sarah", imageUrl: "Photo-Coming"}, 
                    {id: 2, name: "James", imageUrl: "Photo-Coming"}, 
                    {id: 3, name: "John", imageUrl: "Photo-Coming"}];

const dummyAttendance = [{memberId: 1, dateId: 1},
                     {memberId: 1, dateId: 2},
                     {memberId: 1, dateId: 3}];

const dummyDates = [{id: 1, date: '5/1/2022'},
                     {id: 2, date: '5/2/2022'},
                     {id: 3, date: '5/3/2022'}];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const members = await Promise.all(dummyData.map(member => Member.create(member)))

  const dates = await Promise.all(dummyDates.map(date => Date.create(date)))

  const attendantDate = await Promise.all(dummyAttendance.map(attendDate => Member_Date.create(attendDate)))

  //const users = await Promise.all(usersDummyData.map(user => User.create(user)))

  console.log(`seeded ${members.length}  members`)
  console.log(`seeded ${dates.length}  dates`)
  console.log(`seeded ${attendantDate.length}  attendantDate`)
  console.log(`seeded successfully`)
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1]
  //   }
  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
