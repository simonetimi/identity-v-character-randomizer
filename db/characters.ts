export interface Character {
  name: string;
  nickname: string;
  img: string;
  duo?: boolean;
}

export const hunters: Character[] = [
  {
    name: "Leo Beck",
    nickname: "Hell Ember",
    img: "https://static.wikia.nocookie.net/id5/images/e/eb/HellEmber.png",
    duo: true,
  },
  {
    name: "Joker",
    nickname: "Smiley Face",
    img: "https://static.wikia.nocookie.net/id5/images/6/66/SmileyFace.png",
    duo: true,
  },
  {
    name: "Bane Perez",
    nickname: "Gamekeeper",
    img: "https://static.wikia.nocookie.net/id5/images/b/b3/Gamekeeper.png",
    duo: true,
  },
  {
    name: "Jack",
    nickname: "The Ripper",
    img: "https://static.wikia.nocookie.net/id5/images/8/82/TheRipper.png",
    duo: true,
  },
  {
    name: "Violetta",
    nickname: "Soul Weaver",
    img: "https://static.wikia.nocookie.net/id5/images/b/b2/SoulWeaver.png",
    duo: true,
  },
  {
    name: "Michiko",
    nickname: "Geisha",
    img: "https://static.wikia.nocookie.net/id5/images/a/ab/Geisha.png",
    duo: true,
  },
  {
    name: "Hastur",
    nickname: "The Feaster",
    img: "https://static.wikia.nocookie.net/id5/images/4/4d/TheFeaster.png",
    duo: true,
  },
  {
    name: "Xie Bi'an & Fan Wujiu",
    nickname: "Wu Chang",
    img: "https://static.wikia.nocookie.net/id5/images/4/4c/WuChang.png",
    duo: true,
  },
  {
    name: "Joseph Desaulnier",
    nickname: "Photographer",
    img: "https://static.wikia.nocookie.net/id5/images/2/2f/Photographer.png",
  },
  {
    name: "Burke Lapadura",
    nickname: "Mad Eyes",
    img: "https://static.wikia.nocookie.net/id5/images/0/0e/MadEyes.png",
    duo: true,
  },
  {
    name: "Yidhra",
    nickname: "Dream Witch",
    img: "https://static.wikia.nocookie.net/id5/images/8/89/DreamWitch.png",
  },
  {
    name: "Robbie",
    nickname: "Axe Boy",
    img: "https://static.wikia.nocookie.net/id5/images/3/32/AxeBoy.png",
    duo: true,
  },
  {
    name: "Luchino Diruse",
    nickname: "Evil Reptilian",
    img: "https://static.wikia.nocookie.net/id5/images/2/24/EvilReptilian.png",
    duo: true,
  },
  {
    name: "Mary",
    nickname: "Bloody Queen",
    img: "https://static.wikia.nocookie.net/id5/images/c/c3/BloodyQueen.png",
    duo: true,
  },
  {
    name: "Bonbon",
    nickname: "Guard 26",
    img: "https://static.wikia.nocookie.net/id5/images/8/89/Guard26.png",
    duo: true,
  },
  {
    name: "Ann",
    nickname: "Disciple",
    img: "https://static.wikia.nocookie.net/id5/images/b/bd/Disciple.png",
    duo: true,
  },
  {
    name: "Antonio",
    nickname: "Violinist",
    img: "https://static.wikia.nocookie.net/id5/images/f/f1/Violinist.png",
    duo: true,
  },
  {
    name: "Galatea Claude",
    nickname: "Sculptor",
    img: "https://static.wikia.nocookie.net/id5/images/5/53/Sculptor.png",
    duo: true,
  },
  {
    name: "Percy",
    nickname: "Undead",
    img: "https://static.wikia.nocookie.net/id5/images/b/bf/Undead.png",
  },
  {
    name: "The Will Brothers",
    nickname: "The Breaking Wheel",
    img: "https://static.wikia.nocookie.net/id5/images/b/b1/TheBreakingWheel.png",
    duo: true,
  },
  {
    name: "Grace",
    nickname: "Naiad",
    img: "https://static.wikia.nocookie.net/id5/images/f/fd/Naiad.png",
    duo: true,
  },
  {
    name: "Philippe",
    nickname: "Wax Artist",
    img: "https://static.wikia.nocookie.net/id5/images/3/38/WaxArtist1.png",
    duo: true,
  },
  {
    name: "Orpheus",
    nickname: "Nightmare",
    img: "https://static.wikia.nocookie.net/id5/images/8/89/%22Nightmare%22.png",
    duo: true,
  },
  {
    name: "Keigan Nicholas Keogh",
    nickname: "Clerk",
    img: "https://static.wikia.nocookie.net/id5/images/4/48/Clerk.png",
  },
  {
    name: "Alva Lorenz",
    nickname: "Hermit",
    img: "https://static.wikia.nocookie.net/id5/images/1/1e/Hermit.png",
  },
  {
    name: "Ithaqua",
    nickname: "Night Watch",
    img: "https://static.wikia.nocookie.net/id5/images/2/24/NightWatch.png",
    duo: true,
  },
  {
    name: "Sangria",
    nickname: "Opera Singer",
    img: "https://static.wikia.nocookie.net/id5/images/8/83/OperaSinger.png",
    duo: true,
  },
  {
    name: "Norton Campbell",
    nickname: "Fool's Gold",
    img: "https://static.wikia.nocookie.net/id5/images/6/6b/FoolsGold.png",
    duo: true,
  },
  {
    name: "Ivy",
    nickname: "The Shadow",
    img: "https://static.wikia.nocookie.net/id5/images/b/ba/TheShadow.png",
    duo: true,
  },
  {
    name: "Jeffrey Bonavita",
    nickname: "The Goatman",
    img: "https://static.wikia.nocookie.net/id5/images/4/49/Goatman.png",
  },
  {
    name: "Mike Morton",
    nickname: "Hullabaloo",
    img: "https://static.wikia.nocookie.net/id5/images/5/5a/Hullabaloo.png",
    duo: true,
  },
];

export const survivors: Character[] = [
  {
    name: "Emily Dyer",
    nickname: "Doctor",
    img: "https://static.wikia.nocookie.net/id5/images/6/6c/Doctor.png",
  },
  {
    name: "Freddy Riley",
    nickname: "Lawyer",
    img: "https://static.wikia.nocookie.net/id5/images/1/1a/Lawyer.png",
  },
  {
    name: "Kreacher Pierson",
    nickname: "Thief",
    img: "https://static.wikia.nocookie.net/id5/images/f/fc/Thief.png",
  },
  {
    name: "Emma Woods",
    nickname: "Gardener",
    img: "https://static.wikia.nocookie.net/id5/images/1/19/Gardener.png",
  },
  {
    name: "Lucky Guy",
    nickname: "Deduction Substitute",
    img: "https://static.wikia.nocookie.net/id5/images/9/92/LuckyGuy.png",
  },
  {
    name: "Servais Le Roy",
    nickname: "Magician",
    img: "https://static.wikia.nocookie.net/id5/images/c/ca/Magician.png",
  },
  {
    name: "Kurt Frank",
    nickname: "Explorer",
    img: "https://static.wikia.nocookie.net/id5/images/c/ca/Explorer.png",
  },
  {
    name: "Naib Subedar",
    nickname: "Mercenary",
    img: "https://static.wikia.nocookie.net/id5/images/0/00/Mercenary.png",
  },
  {
    name: "Martha Behamfil",
    nickname: "Coordinator",
    img: "https://static.wikia.nocookie.net/id5/images/b/b1/Coordinator.png",
  },
  {
    name: "Tracy Reznik",
    nickname: "Mechanic",
    img: "https://static.wikia.nocookie.net/id5/images/5/55/Mechanic.png",
  },
  {
    name: "William Ellis",
    nickname: "Forward",
    img: "https://static.wikia.nocookie.net/id5/images/0/0e/Forward.png",
  },
  {
    name: "Helena Adams",
    nickname: "The Mind's Eye",
    img: "https://static.wikia.nocookie.net/id5/images/0/0d/TheMindsEye.png",
  },
  {
    name: "Fiona Gilman",
    nickname: "Priestess",
    img: "https://static.wikia.nocookie.net/id5/images/b/bc/Priestess.png",
  },
  {
    name: "Vera Nair",
    nickname: "Perfumer",
    img: "https://static.wikia.nocookie.net/id5/images/3/31/Perfumer.png",
  },
  {
    name: "Kevin Ayuso",
    nickname: "Cowboy",
    img: "https://static.wikia.nocookie.net/id5/images/8/89/Cowboy.png",
  },
  {
    name: "Margaretha Zelle",
    nickname: "Female Dancer",
    img: "https://static.wikia.nocookie.net/id5/images/1/1d/FemaleDancer.png",
  },
  {
    name: "Eli Clark",
    nickname: "Seer",
    img: "https://static.wikia.nocookie.net/id5/images/e/ee/Seer.png",
  },
  {
    name: "Aesop Carl",
    nickname: "Embalmer",
    img: "https://static.wikia.nocookie.net/id5/images/c/cf/Embalmer.png",
  },
  {
    name: "Norton Cambell",
    nickname: "Prospector",
    img: "https://static.wikia.nocookie.net/id5/images/a/ae/Prospector.png",
  },
  {
    name: "Patricia Dorval",
    nickname: "Enchantress",
    img: "https://static.wikia.nocookie.net/id5/images/9/99/Enchantress.png",
  },
  {
    name: "Murro",
    nickname: "Wildling",
    img: "https://static.wikia.nocookie.net/id5/images/b/bb/Wildling.png",
  },
  {
    name: "Mike Morton",
    nickname: "Acrobat",
    img: "https://static.wikia.nocookie.net/id5/images/8/8f/Acrobat.png",
  },
  {
    name: "Jose Baden",
    nickname: "First Officer",
    img: "https://static.wikia.nocookie.net/id5/images/a/a3/FirstOfficer.png",
  },
  {
    name: "Demi Bourbon",
    nickname: "Barmaid",
    img: "https://static.wikia.nocookie.net/id5/images/c/cd/Barmaid.png",
  },
  {
    name: "Victor Grantz",
    nickname: "Postman",
    img: "https://static.wikia.nocookie.net/id5/images/1/16/Postman.png",
  },
  {
    name: "Andrew Kreiss",
    nickname: "Grave Keeper",
    img: "https://static.wikia.nocookie.net/id5/images/e/e9/GraveKeeper.png",
  },
  {
    name: "Luca Balsa",
    nickname: "Prisoner",
    img: "https://static.wikia.nocookie.net/id5/images/7/71/Prisoner.png",
  },
  {
    name: "Melly Plinius",
    nickname: "Entomologist",
    img: "https://static.wikia.nocookie.net/id5/images/5/53/Entomologist.png",
  },
  {
    name: "Edgar Valden",
    nickname: "Painter",
    img: "https://static.wikia.nocookie.net/id5/images/2/24/Painter.png",
  },
  {
    name: "Ganji Gupta",
    nickname: "Batter",
    img: "https://static.wikia.nocookie.net/id5/images/7/7c/Batter.png",
  },
  {
    name: "Anne Lester",
    nickname: "Toy Merchant",
    img: "https://static.wikia.nocookie.net/id5/images/a/a2/ToyMerchant.png",
  },
  {
    name: "Emil",
    nickname: "Patient",
    img: "https://static.wikia.nocookie.net/id5/images/e/e6/Patient.png",
  },
  {
    name: "Ada Mesmer",
    nickname: "Psychologist",
    img: "https://static.wikia.nocookie.net/id5/images/b/b1/Psychologist.png",
  },
  {
    name: "Orpheus",
    nickname: "Novelist",
    img: "https://static.wikia.nocookie.net/id5/images/1/16/Novelist.png",
  },
  {
    name: "Memory",
    nickname: "Little Girl",
    img: "https://static.wikia.nocookie.net/id5/images/0/0f/LittleGirl.png",
  },
  {
    name: "Joker",
    nickname: "Weeping Clown",
    img: "https://static.wikia.nocookie.net/id5/images/9/9e/WeepingClown.png",
  },
  {
    name: "Luchino Diruse",
    nickname: "Professor",
    img: "https://static.wikia.nocookie.net/id5/images/b/b1/Professor.png",
  },
  {
    name: "Qi Shiyi",
    nickname: "Antiquarian",
    img: "https://static.wikia.nocookie.net/id5/images/2/23/Antiquarian.png",
  },
  {
    name: "Frederick Kreiburg",
    nickname: "Composer",
    img: "https://static.wikia.nocookie.net/id5/images/6/60/Composer.png",
  },
  {
    name: "Alice DeRoss",
    nickname: "Journalist",
    img: "https://static.wikia.nocookie.net/id5/images/1/1e/Journalist.png",
  },
  {
    name: "Charles Holt",
    nickname: "Aeroplanist",
    img: "https://static.wikia.nocookie.net/id5/images/b/b0/Aeroplanist.png",
  },
  {
    name: "Lily Barriere",
    nickname: "Cheerleader",
    img: "https://static.wikia.nocookie.net/id5/images/b/b7/Cheerleader.png",
  },
  {
    name: "Matthias Czernin",
    nickname: "Puppeteer",
    img: "https://static.wikia.nocookie.net/id5/images/7/7a/Puppeteer.png",
  },
  {
    name: "Florian Brand",
    nickname: "Fire Investigator",
    img: "https://static.wikia.nocookie.net/id5/images/4/43/FireInvestigator.png",
  },
  {
    name: "Evelyn Mora",
    nickname: "Faro Lady",
    img: "https://static.wikia.nocookie.net/id5/images/3/37/FaroLady.png",
  },
  {
    name: "Richard Sterling",
    nickname: "Knight",
    img: "https://static.wikia.nocookie.net/id5/images/6/6b/Knight.png",
  },
  {
    name: "Wendy Foote",
    nickname: "Meteorologist",
    img: "https://static.wikia.nocookie.net/id5/images/8/8e/Meteorologist.png/",
  },
];
