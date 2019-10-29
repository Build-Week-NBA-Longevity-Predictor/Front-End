const teams = [
    {
        id: 0,
        team: 'Select...',
        abr: 'lal',
        players:[
            {
                id: 0, 
                name: 'Select...'
            }
        ]
    },
    {
        id: 1,
        team: 'Atlanta Hawks',
        abr: 'atl',
        players: [
            {
                id: 0,
                name: 'Trae Young',
                position: 'Point Guard',
                number: 11
            },

            {
                id: 1,
                name: 'Evan Turner',
                position: 'Point Guard',
                number: 1
            },

            {
                id: 2, 
                name: 'Brandon Goodwin',
                position: 'Point Guard',
                number: 6
            },

            {
                id: 3,
                name: 'Kevin Huerter',
                position: 'Shooting Guard',
                number: 3
            },

            {
                id: 4,
                name: 'Allen Crabbe',
                position: 'Shooting Guard',
                number: 33
            }
        ]
    },

    {
        id: 2,
        abr: 'bos',
        team: 'Boston Celtics',
        players: [
            {
                id: 0,
                name: 'Kemba Walker', 
                position: 'Point Guard',
                number: 15
            },

            {
                id: 1,
                name: 'Brad Wanamaker', 
                position: 'Point Guard',
                number: 9
            },

            {
                id: 2,
                name: 'Jason Tatum', 
                position: 'Small Forward',
                number: 0
            },

            {
                id: 3,
                name: 'Jaylen Brown', 
                position: 'Shooting Guard',
                number: 7
            },

            {
                id: 4,
                name: 'Marcus Smart', 
                position: 'Shooting Guard',
                number: 36
            },
            
        ]
    },

    {
        id: 3,
        team: 'Brooklyn Nets',
        abr: 'bkn',
        players: [
            {
                id: 0,
                name: 'Kyrie Irving', 
                position: 'Point Guard',
                number: 11
            },

            {
                id: 1,
                name: 'Spencer Dinwiddie', 
                position: 'Point Guard',
                number: 8
            },

            {
                id: 2,
                name: 'Joe Harris', 
                position: 'Shooting Guard',
                number: 12
            },

            {
                id: 3,
                name: 'Kevin Durant', 
                position: 'Power Forward',
                number: 35
            },

            {
                id: 4,
                name: 'Garrett Temple', 
                position: 'Shooting Guard',
                number: 17
            },
            
        ]
    },

    {
        id: 4,
        team: 'Charlotte Hornets',
        abr: 'cha',
        players: [
            {
                id: 0,
                name: 'Terry Rozier', 
                position: 'Point Guard',
                number: 12
            },

            {
                id: 1,
                name: `Devonte Graham`, 
                position: 'Point Guard',
                number: 4
            },

            {
                id: 2,
                name: 'Kobi Simmons', 
                position: 'Point Guard',
                number: 3
            },

            {
                id: 3,
                name: 'Nicolas Batum', 
                position: 'Shooting Guard',
                number: 5
            },

            {
                id: 4,
                name: 'Dwayne Brown', 
                position: 'Shooting Guard',
                number: 7
            },
            
        ]
    },

    {
        id: 5,
        team: 'Chicago Bulls',
        abr: 'chi',
        players: [
            {
                id: 0,
                name: 'Kris Dunn', 
                position: 'Point Guard',
                number: 32
            },

            {
                id: 1,
                name: 'Ryan Arcidiacono', 
                position: 'Point Guard',
                number: 51
            },

            {
                id: 2,
                name: 'Shaquille Harrison', 
                position: 'Point Guard',
                number: 3
            },

            {
                id: 3,
                name: 'Zach LaVine', 
                position: 'Shooting Guard',
                number: 8
            },

            {
                id: 4,
                name: 'Tomas Satoransky', 
                position: 'Shooting Guard',
                number: 31
            },
            
        ]
    },

    {
        id: 6,
        team: 'Cleveland Cavaliers',
        abr: 'cle',
        players: [
            {
                id: 0,
                name: 'Collin Sexton', 
                position: 'Point Guard',
                number: 2
            },

            {
                id: 1,
                name: 'Jordan Clarkson', 
                position: 'Point Guard',
                number: 8
            },

            {
                id: 2,
                name: 'Matthew Dellavedova', 
                position: 'Small Forward',
                number: 18
            },

            {
                id: 3,
                name: 'Brandon Knight', 
                position: 'Shooting Guard',
                number: 20
            },

            {
                id: 4,
                name: 'Cedi Osman', 
                position: 'Small Forward',
                number: 16
            },
            
        ]
    },

    {
        id: 7,
        team: 'Dallas Mavericks',
        abr: 'dal',
        players: [
            {
                id: 0,
                name: 'Jalen Brunson', 
                position: 'Point Guard',
                number: 13
            },

            {
                id: 1,
                name: 'Seth Curry', 
                position: 'Point Guard',
                number: 31
            },

            {
                id: 2,
                name: 'Delon Wright', 
                position: 'Point Guard',
                number: 2
            },

            {
                id: 3,
                name: 'Luka Doncic', 
                position: 'Shooting Guard',
                number: 77
            },

            {
                id: 4,
                name: 'Kristaps Porzingis', 
                position: 'Power Forward',
                number: 6
            },
            
        ]
    },

    {
        id: 8,
        team: 'Denver Nuggets',
        abr: 'den',
        players: [
            {
                id: 0,
                name: 'Jamal Murray', 
                position: 'Point Guard',
                number: 27
            },

            {
                id: 1,
                name: 'Gary Harris', 
                position: 'Shooting Guard',
                number: 14
            },

            {
                id: 2,
                name: 'Will Barton', 
                position: 'Shooting Guard',
                number: 5
            },

            {
                id: 3,
                name: 'Paul Milsap', 
                position: 'Power Forward',
                number: 4
            },

            {
                id: 4,
                name: 'Nikola Jokic', 
                position: 'Center',
                number: 15
            },
            
        ]
    },

    {
        id: 9,
        team: 'Detroit Pistons',
        abr: 'det',
        players: [
            {
                id: 0,
                name: 'Derrick Rose', 
                position: 'Point Guard',
                number: 25
            },

            {
                id: 1,
                name: 'Tim Frazier', 
                position: 'Point Guard',
                number: 12
            },

            {
                id: 2,
                name: 'Tony Snell', 
                position: 'Shooting Guard',
                number: 21
            },

            {
                id: 3,
                name: 'Blake Griffin', 
                position: 'Power Forward',
                number: 23
            },

            {
                id: 4,
                name: 'Thon Maker', 
                position: 'Power Forward',
                number: 7
            },
            
        ]
    },
]

export default teams;