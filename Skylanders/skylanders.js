// Skylanders dataset (converted from your TypeScript)
const skylanders = [
  { name: "Spyro", image : "photos/SpyrosAdventure/Spyro.webp", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Dark Spyro", image : "photos/SpyrosAdventure/DarkSpyro.jpg", element: "Magic", game: "Spyro's Adventure", type: "Dark" },
  { name: "Legendary Spyro", image : "photos/SpyrosAdventure/LegendSpyro.webp", element: "Magic", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Eon's Elite Spyro", image : "photos/Trap Team/EliteSpyro.webp", element: "Magic", game: "Trap Team", type: "Eon's Elite" },
  { name: "Spyro (Series 2)", image : "photos/Giants/Spyro2.webp", element: "Magic", game: "Giants", type: "Core" },
  { name: "Mega Ram Spyro <br> (Series 3)", image : "photos/SwapForce/Spyro3.webp", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Mega Ram Dark Spyro (Series 3)", image : "photos/SwapForce/DarkSpyro3.webp", element: "Magic", game: "Swap Force", type: "Dark" },
  { name: "Spry", image : "photos/Trap Team/Spry.jpg", element: "Magic", game: "Trap Team", type: "Mini" },
  { name: "Gill Grunt", image : "photos/SpyrosAdventure/GillGrunt.webp", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Gill Grunt", image : "photos/Trap Team/EliteGillGrunt.webp", element: "Water", game: "Trap Team", type: "Eon's Elite" },
  { name: "Gill Grunt (Series 2)", image : "photos/Giants/GillGrunt2.webp", element: "Water", game: "Giants", type: "Core" },
  { name: "Anchors Away Gill Grunt (Series 3)", image : "photos/SwapForce/GillGrunt3.webp", element: "Water", game: "Swap Force", type: "Core" },
  { name: "Tidal Wave Gill Grunt (Series 4)", image : "photos/Trap Team/GillGrunt4.webp", element: "Water", game: "Trap Team", type: "Core" },
  { name: "Gill Runt", image : "photos/SpyrosAdventure/GillRunt.webp", element: "Water", game: "Spyro's Adventure", type: "Mini" },
  { name: "Deep Dive Gill Grunt", image : "photos/Superchargers/DeepGillGrunt.webp", element: "Water", game: "SuperChargers", type: "SuperCharger" },
  { name: "Trigger Happy", image : "photos/SpyrosAdventure/TriggerHappy.jpg", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Trigger Happy", image : "photos/SpyrosAdventure/LegendTriggerHappy.webp", element: "Tech", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Eon's Elite Trigger Happy", image : "photos/Trap Team/EliteTriggerHappy.webp", element: "Tech", game: "Trap Team", type: "Eon's Elite" },
  { name: "Trigger Happy (Series 2)", image : "photos/Giants/TriggerHappy2.webp", element: "Tech", game: "Giants", type: "Core" },
  { name: "Big Bang Trigger Happy (Series 3)", image : "photos/SwapForce/TriggerHappy3.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Springtime Trigger Happy", image : "photos/SwapForce/SpringTriggerHappy.webp", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Trigger Snappy", image : "photos/SpyrosAdventure/TriggerSnappy.webp", element: "Tech", game: "Spyro's Adventure", type: "Mini" },
  { name: "Double Dare Trigger Happy", image : "photos/Superchargers/DoubleTriggerHappy.webp", element: "Tech", game: "SuperChargers", type: "SuperCharger" },
  { name: "Stealth Elf", image : "photos/SpyrosAdventure/StealthElf.webp", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Stealth Elf", image : "photos/Trap Team/EliteStealthElf.webp", element: "Life", game: "Trap Team", type: "Eon's Elite" },
  { name: "Stealth Elf (Series 2)", image : "photos/Giants/StealthElf2.jpg", element: "Life", game: "Giants", type: "Core" },
  { name: "Legendary Stealth Elf (Series 2)", image : "photos/Giants/LegendStealthElf.webp", element: "Life", game: "Giants", type: "Legendary" },
  { name: "Ninja Stealth Elf (Series 3)", image : "photos/SwapForce/StealthElf3.webp", element: "Life", game: "Swap Force", type: "Core" },
  { name: "Dark Stealth Elf", image : "photos/SwapForce/DarkStealthElf.webp", element: "Life", game: "Swap Force", type: "Dark" },
  { name: "Whisper Elf", image : "photos/SpyrosAdventure/WhisperElf.webp", element: "Life", game: "Spyro's Adventure", type: "Mini" },
  { name: "Super Shot Stealth Elf", image : "photos/Superchargers/SuperStealthElf.jpg", element: "Life", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Super Shot Stealth Elf", image : "photos/Superchargers/DarkSuperStealthElf.webp", element: "Life", game: "SuperChargers", type: "Dark" },
  { name: "Bash", image: "photos/SpyrosAdventure/Bash.webp", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Bash", image: "photos/SpyrosAdventure/LegendBash.jpg", element: "Earth", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Birthday Bash", image: "photos/Lost Islands/BirthdayBash.webp", element: "Earth", game: "Lost Islands"},
  { name: "Bash (Series 2)", image: "photos/Giants/Bash2.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Bop", image : "photos/Trap Team/Bop.webp", element: "Earth", game: "Trap Team", type: "Mini" },
  { name: "Eruptor", image: "photos/SpyrosAdventure/Eruptor.webp", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Eruptor", image: "photos/Trap Team/EliteEruptor.webp", element: "Fire", game: "Trap Team", type: "Eon's Elite" },
  { name: "Eruptor (Series 2)", image: "photos/Giants/Eruptor2.webp", element: "Fire", game: "Giants", type: "Core" },
  { name: "Lightcore Eruptor <br> (Series 2)", image: "photos/Giants/LCEruptor.webp", element: "Fire", game: "Giants", type: "Lightcore" },
  { name: "Lava Barf Eruptor <br> (Series 3)", image: "photos/SwapForce/Eruptor3.webp", element: "Fire", game: "Swap Force", type: "Core" },
  { name: "Weeruptor", element: "Fire", game: "Minis", type: "Mini" },
  { name: "Eggsellent Weeruptor", element: "Fire", game: "Minis", type: "Holiday" },
  { name: "Lava Lance Eruptor", image: "photos/Superchargers/SuperEruptor.webp", element: "Fire", game: "SuperChargers", type: "SuperCharger" },
  { name: "Chop Chop", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Chop Chop", element: "Undead", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Eon's Elite Chop Chop", image: "photos/Trap Team/EliteChopChop.webp", element: "Undead", game: "Trap Team", type: "Eon's Elite" },
  { name: "Terrafin", image: "photos/SpyrosAdventure/Terrafin.webp", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Terrafin", image: "photos/Trap Team/EliteTerrafin.webp", element: "Earth", game: "Trap Team", type: "Eon's Elite" },
  { name: "Terrafin (Series 2)", image: "photos/Giants/Terrafin2.webp", element: "Earth", game: "Giants", type: "Core" },
  { name: "Knockout Terrafin (Series 3)", image: "photos/SwapForce/Terrafin3.webp", element: "Earth", game: "Swap Force", type: "Core" },
  { name: "Terrabite", element: "Earth", game: "Giants", type: "Mini" },
  { name: "Shark Shooter Terrafin", image: "photos/Superchargers/SuperTerrafin.jpg", element: "Earth", game: "SuperChargers", type: "SuperCharger" },
  { name: "Lightning Rod", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Ignitor", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Ignitor", element: "Fire", game: "Spyro's Adventure", type: "Legendary" },
  { name: "Cynder", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Skeletal Cynder", element: "Undead", game: "Lost Islands", type: "Dark" },
  { name: "Sonic Boom", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Flameslinger", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Cupid Flameslinger", element: "Fire", game: "Lost Islands", type: "Holiday" },
  { name: "Wrecking Ball", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Voodood", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Voodood", element: "Magic", game: "Eon's Elite", type: "Eon's Elite" },
  { name: "Prism Break", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Prism Break", element: "Earth", game: "Lightcore", type: "Lightcore" },
  { name: "Zap", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Drobot", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Drobot", element: "Tech", game: "Giants", type: "Lightcore" },
  { name: "Drobit", element: "Tech", game: "Trap Team", type: "Mini" },
  { name: "Stump Smash", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Hex", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Hex", element: "Undead", game: "Lightcore", type: "Lightcore" },
  { name: "Hallow's Eve Hex", element: "Undead", game: "Lost Islands", type: "Holiday" },
  { name: "Hijinx", element: "Undead", game: "Trap Team", type: "Mini" },
  { name: "Dino-Rang", element: "Earth", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Dino-Rang", image : "photos/Superchargers/", element: "Earth", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Whirlwind", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Whirlwind", image : "photos/Trap Team/", element: "Air", game: "Trap Team", type: "Eon's Elite" },
  { name: "Breeze", element: "Air", game: "Trap Team", type: "Mini" },
  { name: "Double Trouble", element: "Magic", game: "Spyro's Adventure", type: "Core" },
  { name: "Slam Bam", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Legendary Slam Bam", element: "Water", game: "Legendary", type: "Legendary" },
  { name: "Eon's Elite Slam Bam", element: "Water", game: "Eon's Elite", type: "Eon's Elite" },
  { name: "Boomer", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Lucky Boomer", element: "Tech", game: "Lost Islands", type: "Holiday" },
  { name: "Eon's Elite Boomer", image : "photos/Superchargers/", element: "Tech", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Zook", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Fireworks Zook", element: "Life", game: "Lost Islands", type: "Holiday" },
  { name: "Eon's Elite Zook", image : "photos/Superchargers/", element: "Life", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Ghost Roaster", element: "Undead", game: "Spyro's Adventure", type: "Core" },
  { name: "Eon's Elite Ghost Roaster", image : "photos/Superchargers/", element: "Undead", game: "SuperChargers", type: "Eon's Elite" },
  { name: "Camo", element: "Life", game: "Spyro's Adventure", type: "Core" },
  { name: "Warnado", element: "Air", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Warnado", element: "Air", game: "Lightcore", type: "Lightcore" },
  { name: "Drill Sergeant", element: "Tech", game: "Spyro's Adventure", type: "Core" },
  { name: "Sunburn", element: "Fire", game: "Spyro's Adventure", type: "Core" },
  { name: "Wham-Shell", element: "Water", game: "Spyro's Adventure", type: "Core" },
  { name: "Lightcore Wham-Shell", element: "Water", game: "Swap Force", type: "Lightcore" },

  // Giants (2012) - 16 New Core + 8 Giants
  { name: "Tree Rex", element: "Life", game: "Giants", type: "Giant" },
  { name: "Barkley", element: "Life", game: "Giants", type: "Mini" },
  { name: "Gnarly Barkley", element: "Life", game: "Trap Team", type: "Holiday" },
  { name: "Bouncer", element: "Tech", game: "Giants", type: "Giant" },
  { name: "Legendary Bouncer", element: "Tech", game: "Legendary", type: "Legendary" },
  { name: "Crusher", element: "Earth", game: "Giants", type: "Giant" },
  { name: "Hot Head", element: "Fire", game: "Giants", type: "Giant" },
  { name: "Eye-Brawl", element: "Undead", game: "Giants", type: "Giant" },
  { name: "Eye-Small", element: "Undead", game: "Giants", type: "Mini" },
  { name: "Ninjini", element: "Magic", game: "Giants", type: "Giant" },
  { name: "Mini-Jini", element: "Magic", game: "Giants", type: "Mini" },
  { name: "Swarm", element: "Air", game: "Giants", type: "Giant" },
  { name: "Thumpback", element: "Water", game: "Giants", type: "Giant" },
  { name: "Thumpling", element: "Water", game: "Giants", type: "Mini" },
  { name: "Jet-Vac", element: "Air", game: "Giants", type: "Core" },
  { name: "Legendary Jet-Vac", element: "Air", game: "Legendary", type: "Legendary" },
  { name: "Lightcore Jet-Vac", element: "Air", game: "Lightcore", type: "Lightcore" },
  { name: "Pet Vac", element: "Air", game: "Trap Team", type: "Mini" },
  { name: "Power Punch Pet Vac", element: "Air", game: "Trap Team", type: "Mini" },
  { name: "Hurricane Jet-Vac", element: "Air", game: "SuperChargers", type: "SuperCharger" },
  { name: "Legendary Hurricane Jet-Vac", element: "Air", game: "SuperChargers", type: "Legendary" },
  { name: "Chill", element: "Water", game: "Giants", type: "Core" },
  { name: "Lightcore Chill", element: "Water", game: "Lightcore", type: "Lightcore" },
  { name: "Legendary Chill", element: "Water", game: "Legendary", type: "Legendary" },
  { name: "Pop Fizz", element: "Magic", game: "Giants", type: "Core" },
  { name: "Lightcore Pop Fizz", element: "Magic", game: "Lightcore", type: "Lightcore" },
  { name: "Love Potion Pop Fizz", element: "Magic", game: "Trap Team", type: "Holiday" },
  { name: "Hoppity Pop Fizz", element: "Magic", game: "Lost Islands", type: "Holiday" },
  { name: "Big Bubble Pop Fizz", element: "Magic", game: "SuperChargers", type: "SuperCharger" },
  { name: "Birthday Bash Big Bubble Pop Fizz", element: "Magic", game: "Lost Islands", type: "Holiday" },
  { name: "Fizzy Frenzy Pop Fizz", element: "Magic", game: "Minis", type: "Mini" },
  { name: "Fright Rider", element: "Undead", game: "Giants", type: "Core" },
  { name: "Sprocket", element: "Tech", game: "Giants", type: "Core" },
  { name: "Flashwing", element: "Earth", game: "Giants", type: "Core" },
  { name: "Lightcore Flashwing", element: "Earth", game: "Giants", type: "Lightcore" },
  { name: "Shroomboom", element: "Life", game: "Giants", type: "Core" },
  { name: "Lightcore Shroomboom", element: "Life", game: "Giants", type: "Lightcore" },
  { name: "Hot Dog", element: "Fire", game: "Giants", type: "Core" },
  
  // Swap Force (2013) - 16 Swap Force + Cores
  { name: "Wash Buckler", element: "Water", game: "Swap Force", type: "Swap Force" },
  { name: "Dark Wash Buckler", element: "Water", game: "Swap Force", type: "Dark" },
  { name: "Holiday Wash Buckler", element: "Water", game: "Lost Islands", type: "Holiday" },
  { name: "Blast Zone", element: "Fire", game: "Swap Force", type: "Swap Force" },
  { name: "Dark Blast Zone", element: "Fire", game: "Swap Force", type: "Dark" },
  { name: "Magna Charge", element: "Tech", game: "Swap Force", type: "Swap Force" },
  { name: "Nitro Magna Charge", element: "Tech", game: "Swap Force", type: "Nitro" },
  { name: "Rattle Shake", element: "Undead", game: "Swap Force", type: "Swap Force" },
  { name: "Free Ranger", element: "Air", game: "Swap Force", type: "Swap Force" },
  { name: "Legendary Free Ranger", element: "Air", game: "Legendary", type: "Legendary" },
  { name: "Rubble Rouser", element: "Earth", game: "Swap Force", type: "Swap Force" },
  { name: "Stink Bomb", element: "Life", game: "Swap Force", type: "Swap Force" },
  { name: "Hoot Loop", element: "Magic", game: "Swap Force", type: "Swap Force" },
  { name: "Spy Rise", element: "Tech", game: "Swap Force", type: "Swap Force" },
  { name: "Night Shift", element: "Undead", game: "Swap Force", type: "Swap Force" },
  { name: "Legendary Night Shift", element: "Undead", game: "Legendary", type: "Legendary" },
  { name: "Boom Jet", element: "Air", game: "Swap Force", type: "Swap Force" },
  { name: "Fire Kraken", element: "Fire", game: "Swap Force", type: "Swap Force" },
  { name: "Grilla Drilla", element: "Life", game: "Swap Force", type: "Swap Force" },
  { name: "Doom Stone", element: "Earth", game: "Swap Force", type: "Swap Force" },
  { name: "Freeze Blade", element: "Water", game: "Swap Force", type: "Swap Force" },
  { name: "Nitro Freeze Blade", element: "Water", game: "Swap Force", type: "Dark" },
  { name: "Trap Shadow", element: "Magic", game: "Swap Force", type: "Swap Force" },
  { name: "Countdown", element: "Tech", game: "Swap Force", type: "Core" },
  { name: "Lightcore Countdown", element: "Tech", game: "Lightcore", type: "Lightcore" },
  { name: "Kickoff Countdown", element: "Tech", game: "Swap Force", type: "Holiday" },
  { name: " New Year's Countdown", element: "Tech", game: "Lost Islands", type: "Holiday" },
  { name: "Bumble Blast", element: "Life", game: "Swap Force", type: "Core" },
  { name: "Lightcore Bumble Blast", element: "Life", game: "Lightcore", type: "Lightcore" },
  { name: "Jolly Bumble Blast", element: "Life", game: "Swap Force", type: "Holiday" },
  { name: "Zoo Lou", element: "Life", game: "Swap Force", type: "Core" },
  { name: "Legendary Zoo Lou", element: "Life", game: "Legendary", type: "Legendary" },
  { name: "Scorp", element: "Earth", game: "Swap Force", type: "Core" },
  { name: "Grim Creeper", element: "Undead", game: "Swap Force", type: "Core" },
  { name: "Legendary Grim Creeper", element: "Undead", game: "Legendary", type: "Legendary" },
  { name: "Lightcore Grim Creeper", element: "Undead", game: "Lightcore", type: "Lightcore" },
  { name: "Rip Tide", element: "Water", game: "Swap Force", type: "Core" },
  { name: "Punk Shock", element: "Air", game: "Swap Force", type: "Core" },
  { name: "Roller Brawl", element: "Undead", game: "Swap Force", type: "Core" },
  { name: "Smolderdash", element: "Fire", game: "Swap Force", type: "Core" },
  { name: "Lightcore Smolderdash", element: "Fire", game: "Lightcore", type: "Lightcore" },
  { name: "Star Strike", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Legendary Star Strike", element: "Magic", game: "Legendary", type: "Legendary" },
  { name: "Lightcore Star Strike", element: "Magic", game: "Swap Force", type: "Lightcore" },
  { name: "Scratch", element: "Magic", game: "Swap Force", type: "Core" },
  { name: "Fryno", element: "Fire", game: "Swap Force", type: "Core" },
  { name: "Small Fry", element: "Fire", game: "Trap Team", type: "Mini" },
  { name: "Wind-Up", element: "Tech", game: "Swap Force", type: "Core" },
  
  // Trap Team (2014) - Trap Masters + Cores + Minis
  { name: "Snap Shot", element: "Water", game: "Trap Team", type: "Trap Master" },
  { name: "Dark Snap Shot", element: "Water", game: "Trap Team", type: "Dark" },
  { name: "Merry Snap Shot", element: "Water", game: "Lost Islands", type: "Holiday" },
  { name: "Wallop", element: "Earth", game: "Trap Team", type: "Trap Master" },
  { name: "Head Rush", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Nitro Head Rush", element: "Air", game: "Trap Team", type: "Nitro" },
  { name: "Krypt King", element: "Undead", game: "Trap Team", type: "Trap Master" },
  { name: "Nitro Krypt King", element: "Undead", game: "Trap Team", type: "Nitro" },
  { name: "Wildfire", element: "Fire", game: "Trap Team", type: "Trap Master" },
  { name: "Dark Wildfire", element: "Fire", game: "Trap Team", type: "Dark" },
  { name: "Ka-Boom", element: "Fire", game: "Trap Team", type: "Trap Master" },
  { name: "Jawbreaker", element: "Earth", game: "Trap Team", type: "Trap Master" },
  { name: "Legendary Jawbreaker", element: "Earth", game: "Trap Team", type: "Legendary" },
  { name: "Blades", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Legendary Blades", element: "Air", game: "Trap Team", type: "Legendary" },
  { name: "Torch", element: "Fire", game: "Trap Team", type: "Trap Master" },
  { name: "Lob-Star", element: "Water", game: "Trap Team", type: "Trap Master" },
  { name: "Winterfest Lob-Star", element: "Water", game: "Trap Team", type: "Holiday" },
  { name: "Knight Mare", element: "Dark", game: "Trap Team", type: "Trap Master" },
  { name: "Knight Light", element: "Light", game: "Trap Team", type: "Trap Master" },
  { name: "Bushwhack", element: "Life", game: "Trap Team", type: "Trap Master" },
  { name: "Legendary Bushwhack", element: "Life", game: "Trap Team", type: "Legendary" },
  { name: "Gearshift", element: "Tech", game: "Trap Team", type: "Trap Master" },
  { name: "Spotlight", element: "Light", game: "Trap Team", type: "Trap Master" },
  { name: "Blackout", element: "Dark", game: "Trap Team", type: "Trap Master" },
  { name: "Short Cut", element: "Magic", game: "Trap Team", type: "Trap Master" },
  { name: "Tuff Luck", element: "Magic", game: "Trap Team", type: "Trap Master" },
  { name : "Enigma", element : "Magic", game : "Trap Team", type : "Trap Master"},
  { name: "Gusto", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Thunderbolt", element: "Air", game: "Trap Team", type: "Trap Master" },

  // Trap Team - Core Characters
  { name: "Gusto", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Thunderbolt", element: "Air", game: "Trap Team", type: "Trap Master" },
  { name: "Fling Kong", element: "Air", game: "Trap Team", type: "Core" },
  { name: "Flip Wreck", element: "Water", game: "Trap Team", type: "Core" },
  { name: "Echo", element: "Water", game: "Trap Team", type: "Core" },
  { name: "Blastermind", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Funny Bone", element: "Undead", game: "Trap Team", type: "Core" },
  { name: "Fortune Funny Bone", element: "Undead", game: "Lost Islands", type: "Holiday" },
  { name: "Bat Spin", element: "Undead", game: "Trap Team", type: "Core" },
  { name: "Chopper", element: "Tech", game: "Trap Team", type: "Core" },
  { name: "Tread Head", element: "Tech", game: "Trap Team", type: "Core" },
  { name: "Cobra Cadabra", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Charming Cobra Cadabra", element: "Magic", game: "Lost Islands", type: "Holiday" },
  { name: "Rocky Roll", element: "Earth", game: "Trap Team", type: "Core" },
  { name: "Rocky Egg Roll", element: "Earth", game: "Lost Islands", type: "Holiday" },
  { name: "Slobber Tooth", element: "Earth", game: "Trap Team", type: "Core" },
  { name: "Dark Slobber Tooth", element: "Earth", game: "Swap Force", type: "Dark" },
  { name: "Trail Blazer", element: "Fire", game: "Trap Team", type: "Core" },
  { name: "Food Fight", element: "Life", game: "Trap Team", type: "Core" },
  { name: "Dark Food Fight", element: "Life", game: "Trap Team", type: "Dark" },
  { name: "High Five", element: "Life", game: "Trap Team", type: "Core" },
  

  // SuperChargers (2015) - 20 SuperChargers + Variants
  { name: "Spitfire", element: "Fire", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Spitfire", element: "Fire", game: "SuperChargers", type: "Dark" },
  { name: "Dive-Clops", element: "Water", game: "SuperChargers", type: "SuperCharger" },
  { name: "Missile-Tow Dive-Clops", element: "Water", game: "SuperChargers", type: "Holiday" },
  { name: "Fiesta", element: "Undead", game: "SuperChargers", type: "SuperCharger" },
  { name: "Frightful Fiesta", element: "Undead", game: "SuperChargers", type: "Holiday" },
  { name: "Splat", element: "Magic", game: "SuperChargers", type: "SuperCharger" },
  { name: "Stormblade", element: "Air", game: "SuperChargers", type: "SuperCharger" },
  { name: "Smash Hit", element: "Earth", game: "SuperChargers", type: "SuperCharger" },
  { name: "Deep Dive Gill Grunt", element: "Water", game: "SuperChargers", type: "SuperCharger" },
  { name: "Bone Bash Roller Brawl", element: "Undead", game: "SuperChargers", type: "SuperCharger" },
  { name: "Legendary Bone Bash Roller Brawl", element: "Undead", game: "SuperChargers", type: "Legendary" },
  { name: "Thrillipede", element: "Life", game: "SuperChargers", type: "SuperCharger" },
  { name: "Eggciting Thrillipede", element: "Life", game: "SuperChargers", type: "Holiday" },
  { name: "Nightfall", element: "Dark", game: "SuperChargers", type: "SuperCharger" },
  { name: "Astroblast", element: "Light", game: "SuperChargers", type: "SuperCharger" },
  { name: "Legendary Astroblast", element: "Light", game: "SuperChargers", type: "Legendary" },
  { name: "High Volt", element: "Tech", game: "SuperChargers", type: "SuperCharger" },
  { name: "Turbo Charge Donkey Kong", element: "Tech", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Turbo Charge Donkey Kong", element: "Tech", game: "SuperChargers", type: "Dark" },
  { name: "Hammer Slam Bowser", element: "Fire", game: "SuperChargers", type: "SuperCharger" },
  { name: "Dark Hammer Slam Bowser", element: "Fire", game: "SuperChargers", type: "Dark" },
  
  // SuperChargers - Dark Edition
  { name: "Dark Hot Streak", element: "Fire", game: "SuperChargers", type: "Dark" },
  { name: "Dark Clown Cruiser", element: "Magic", game: "SuperChargers", type: "Dark" },
  { name: "Legendary Astroblast", element: "Light", game: "SuperChargers", type: "Legendary" },
  

  { name: "Eon's Elite Zap", element: "Water", game: "Eon's Elite", type: "Eon's Elite" },

  // Imaginators (2016) - 31 Senseis + Variants
  { name: "King Pen", element: "Water", game: "Imaginators", type: "Sensei" },
  { name: "Dark King Pen", element: "Water", game: "Imaginators", type: "Dark" },
  { name: "Legendary King Pen", element: "Water", game: "Legendary", type: "Legendary" },
  { name: "Golden Queen", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Dark Golden Queen", element: "Earth", game: "Imaginators", type: "Dark" },
  { name: "Wolfgang", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Dark Wolfgang", element: "Undead", game: "Imaginators", type: "Dark" },
  { name: "Chopscotch", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Chopscotch", element: "Magic", game: "Imaginators", type: "Legendary" },
  { name: "Candy-Coated Chopscotch", element: "Magic", game: "Imaginators", type: "Holiday" },
  { name: "Tae Kwon Crow", element: "Air", game: "Imaginators", type: "Sensei" },
  { name: "Dr. Krankcase", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Ember", element: "Fire", game: "Imaginators", type: "Sensei" },
  { name: "Ambush", element: "Life", game: "Imaginators", type: "Sensei" },
  { name: "Starcast", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Buckshot", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Heartbreaker Buckshot", element: "Earth", game: "Imaginators", type: "Holiday" },
  { name: "Aurora", element: "Light", game: "Imaginators", type: "Sensei" },
  { name: "Solar Flare Aurora", element: "Light", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Aurora", element: "Light", game: "Legendary", type: "Legendary" },
  { name: "Flare Wolf", element: "Fire", game: "Imaginators", type: "Sensei" },
  { name: "Hard-Boiled Flare Wolf", element: "Fire", game: "Imaginators", type: "Holiday" },
  { name: "Pit Boss", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Pit Boss", element: "Undead", game: "Legendary", type: "Legendary" },
  { name: "Tri-Tip", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Legendary Tri-Tip", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Blaster-Tron", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Chain Reaction", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Barbella", element: "Earth", game: "Imaginators", type: "Sensei" },
  { name: "Pain-Yatta", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Mysticat", element: "Magic", game: "Imaginators", type: "Sensei" },
  { name: "Ro-Bow", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Air Strike", element: "Air", game: "Imaginators", type: "Sensei" },
  { name: "Egg Bomber Air Strike", element: "Air", game: "Imaginators", type: "Holiday" },
  { name: "Bad Juju", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Wild Storm", element: "Air", game: "Imaginators", type: "Sensei" },
  { name: "Grave Clobber", element: "Undead", game: "Imaginators", type: "Sensei" },
  { name: "Hood Sickle", element: "Dark", game: "Imaginators", type: "Sensei" },
  { name: "Tidepool", element: "Water", game: "Imaginators", type: "Sensei" },
  { name: "Crash Bandicoot", element: "Life", game: "Imaginators", type: "Sensei" },
  { name: "Dr. Neo Cortex", element: "Tech", game: "Imaginators", type: "Sensei" },
  { name: "Boom Bloom", element: "Life", game: "Imaginators", type: "Sensei" },
  
  // Imaginators - Cursed Tiki Temple
  { name: "Cursed Tiki Temple Multi-Pack", element: "Magic", game: "Imaginators", type: "Special" },
  
  // Additional Missing Characters
  { name: "Deja Vu", element: "Magic", game: "Trap Team", type: "Core" },
  { name: "Legendary Deja Vu", element: "Magic", game: "Trap Team", type: "Legendary" },
  { name: "Chompy Mage", element: "Life", game: "Imaginators", type: "Sensei" },
  { name: "Jingle Bell Chompy Mage", element: "Life", game: "Imaginators", type: "Holiday" },
  { name: "Ro-Bow", element: "Tech", game: "Imaginators", type: "Sensei" },
  // 👉 Paste **all the rest of your list here**, unchanged.
];

const listEl = document.getElementById("skylander-list");
const searchEl = document.getElementById("search");
const filterElement = document.getElementById("filter-element");
const filterGame = document.getElementById("filter-game");
const filterType = document.getElementById("filter-type");

// Populate filter dropdowns dynamically
function populateFilters() {
  const elements = new Set();
  const games = new Set();
  const types = new Set();

  skylanders.forEach(s => {
    elements.add(s.element);
    games.add(s.game);
    types.add(s.type);
  });

  for (const e of elements) {
    filterElement.innerHTML += `<option value="${e}">${e}</option>`;
  }
  for (const g of games) {
    filterGame.innerHTML += `<option value="${g}">${g}</option>`;
  }
  for (const t of types) {
    filterType.innerHTML += `<option value="${t}">${t}</option>`;
  }
}

populateFilters();

// Render list
function render() {
  const search = searchEl.value.toLowerCase();
  const selectedElement = filterElement.value;
  const selectedGame = filterGame.value;
  const selectedType = filterType.value;

  const filtered = skylanders.filter(s => {
    return (
      s.name.toLowerCase().includes(search) &&
      (selectedElement === "" || s.element === selectedElement) &&
      (selectedGame === "" || s.game === selectedGame) &&
      (selectedType === "" || s.type === selectedType)
    );
  });

 listEl.innerHTML = filtered
  .map(
    s => `
      <div class="card">
        <div class="name">${s.name}</div>

        <!-- IMAGE GOES HERE -->
        <img src="${s.image}" alt="${s.name}" class="skylander-img">

        <div class="tag">Element: ${s.element}</div>
        <div class="tag">Game: ${s.game}</div>
        <div class="tag">Type: ${s.type}</div>
      </div>
    `
  )
  .join("");

}

render();

searchEl.addEventListener("input", render);
filterElement.addEventListener("change", render);
filterGame.addEventListener("change", render);
filterType.addEventListener("change", render);