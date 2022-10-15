'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: "Natalia Waller",
      login: "nataliawaller@test.com",
      password: "$2a$04$sbMIKv7aEbhH/C441kZxZulr4cQrtCa.7c82ka1yKc2/9k1XqhtEO",
    },
    {
      name: "Terence Wolf",
      login: "terencewolf@test.com",
      password: "$2a$04$n32T8jSIDlaAFwjNQO0n5uWVv9SoUcKwZb85vbAvaoEE86pB.rB66",
      boss_id: 1
    },
    {
      name: "Lexi-Mae Milne",
      login: "lexi-maemilne@test.com",
      password: "$2a$04$hNrqalxQTFySXXgrIhJeFOiSMPdjayMyfMMqIbGIHY1sKCvh3shGm",
      boss_id: 2
     },
     {
      name: "Vihaan Noel",
      login: "vihaannoel@test.com",
      password: "$2a$04$kAlSCdlqN2DoLYA6sWWwxOp2hpY/qkX7xUihZbtsoLEybags5fZK2",
      boss_id: 2
     },
     {
      name: "Gurveer Gonzalez",
      login: "gurveergonzalez@test.com",
      password: "$2a$04$.DzDPo9RQEZd8cWDcMIe7uvxTPGZbmgMOOU7LTOz67QlD9iC1bAxa",
      boss_id: 2
     },
     {
      name: "Kelsi Field",
      login: "kelsifield@test.com",
      password: "$2a$04$FAnKhK8s7ds5I6XEyrBoaemX5iLnDbsxt3iJL7uO.ZSDNI6v1cONS",
      boss_id: 3
     },
     {
      name: "Janine Schultz",
      login: "janineschultz@test.com",
      password: "$2a$04$BEIhGMgCSHaq0YvF82cbPedhVwxKORgHvm7Kt9WGDBZVa6P3Ah/nS",
      boss_id: 3
     },
     {
      name: "Hussein Nielsen",
      login: "husseinnielsen@test.com",
      password: "$2a$04$jlybFyZd3pGpVi9Hh11PdO3b5TXj9.pAX/v8BjDQLNopmUK8ghjWa",
      boss_id: 4
     },
     {
      name: "Cohen Wynn",
      login: "cohenwynn@test.com",
      password: "$2a$04$Qw/5y58Nu0HFGZTLDl9uxu/7vdmeQ5uKQv6amcl/p5S/GlJ.pDn8C",
      boss_id: 4
     },
     {
      name: "Bethany Montoya",
      login: "bethanymontoya@test.com",
      password: "$2a$04$y2uYT8kMWPUDwE7V9DGub.tUmH66nLkucERQkDEq1WTbu5ahtIwna",
      boss_id: 6
     },
     {
      name: "Arian Richardson",
      login: "arianrichardson@test.com",
      password: "$2a$04$tyLzfSLA0NFXw7zAXCvFYuSAXCEJ3wpbL8a56g7T2N0/qLkXSKXc.",
      boss_id: 6
     },
     {
      name: "Lara Fletcher",
      login: "larafletcher@test.com",
      password: "$2a$04$mfiFNkt.aZSjsodxzh8PBuBUUsF4lW78LwbTW2ceIkl6ZduGufgFu",
      boss_id: 8
     },
     {
      name: "Mahamed Macias",
      login: "mahamedmacias@test.com",
      password: "$2a$04$pdjOnA5xhQ0wTkWHgzDM.OugLKGovFGRBnNtgWLFWzQh01oQGputC",
      boss_id: 11
     },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
