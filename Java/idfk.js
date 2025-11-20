const games = [
    {name: 'Roblox', device: 'PC, mobile and console', dev: 'Roblox Corporation', released: 2006, type: 'Online Game Creation platform'},
    {name: 'Batman: Arkham Asylum' , device: 'PC and console', dev: 'Rocksteady Studios', released: 2009, type: 'Single Player Story Campaign'},
    {name: 'Minecraft', device: 'PC, mobile and console', dev: 'Mojang Studios', released: 2011, type: 'Sandbox Survival'},
    {name: 'Batman: Arkham City' , device: 'PC and console', dev: 'Rocksteady Studios', released: 2011, type: 'Single Player Story Campaign'},
    {name: 'Grand Theft Auto V', device: 'PC and console', dev: 'Rockstar Games', released: 2013, type: 'Open World Action-Adventure'},
    {name: 'Batman: Arkham Origins' , device: 'PC and console', dev: 'WB Games Montréal', released: 2013, type: 'Single Player Story Campaign'},
    {name: 'Batman: Arkham Knight' , device: 'PC and console', dev: 'Rocksteady Studios', released: 2015, type: 'Single Player Story Campaign'},
    {name: 'Fortnite', device: 'PC, mobile and console', dev: 'Epic Games', released: 2017, type: 'Battle Royale'},
    {name: 'Among Us', device: 'PC and mobile', dev: 'Innersloth', released: 2018, type: 'Social Deduction'},
    {name: 'Call of Duty: Warzone' , device: 'PC and console', dev: 'Infinity Ward', released: 2020, type: 'Battle Royale'},
    {name: 'Genshin Impact', device: 'PC, mobile and console', dev: 'miHoYo', released: 2020, type: 'Action RPG'}
];

games.forEach(game => {
    console.log(`Name: ${game.name}
Device: ${game.device}
Dev: ${game.dev}
Released: ${game.released}
Type: ${game.type}`);
    console.log('-------------------------');
});
