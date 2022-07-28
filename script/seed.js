'use strict'

const {db, models: { Member, Date, Member_Date, Admin}} = require('../server/db')

const dummyData = [{name: "Sarah",}, 
                    {name: "James"}, 
                    {name: "John"}];

const dummyAttendance = [{memberId: 1, dateId: 1},
                     {memberId: 1, dateId: 2},
                     {memberId: 2, dateId: 3},
                     {memberId: 1, dateId: 4}];

const dummyDates = [{date: 'May 01 2022'},
                     {date: 'May 02 2022'},
                     {date: 'Jul 02 2022'},
                     {date: 'Jul 01 2022'}];

const dummyAdmin = [{username: "admin", password: '123'}];

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

  const admin = await Promise.all(dummyAdmin.map(user => Admin.create(user)))

  console.log(`seeded ${members.length}  members`)
  console.log(`seeded ${dates.length}  dates`)
  console.log(`seeded ${attendantDate.length}  attendantDate`)
  console.log(`seeded ${admin.length}  admin`)
  console.log(`seeded successfully`)
  
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
