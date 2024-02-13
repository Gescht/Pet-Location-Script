/*todo


*/

/* variables */
/*/final npc string info (for final addon usage)
var npcString       = null;
//npc data
var npcMap          = null;
var npcName         = null;
var npcId           = null;
var npcLevel        = null;
var npcCreatureType = null;
var npcElite        = null;
var npcLocations    = null;
*/
const worldMapAreaID = {
	4:"Durotar",
	9:"Mulgore",
	11:"Northern Barrens",
	13:"Kalimdor",
	14:"Eastern Kingdoms",
	16:"Arathi Highlands",
	17:"Badlands",
	19:"Blasted Lands",
	20:"Tirisfal Glades",
	21:"Silverpine Forest",
	22:"Western Plaguelands",
	23:"Eastern Plaguelands",
	24:"Hillsbrad Foothills",
	26:"The Hinterlands",
	27:"Dun Morogh",
	28:"Searing Gorge",
	29:"Burning Steppes",
	30:"Elwynn Forest",
	32:"Deadwind Pass",
	34:"Duskwood",
	35:"Loch Modan",
	36:"Redridge Mountains",
	37:"Northern Stranglethorn",
	38:"Swamp of Sorrows",
	39:"Westfall",
	40:"Wetlands",
	41:"Teldrassil",
	42:"Darkshore",
	43:"Ashenvale",
	61:"Thousand Needles",
	81:"Stonetalon Mountains",
	101:"Desolace",
	121:"Feralas",
	141:"Dustwallow Marsh",
	161:"Tanaris",
	181:"Azshara",
	182:"Felwood",
	201:"Un'Goro Crater",
	241:"Moonglade",
	261:"Silithus",
	281:"Winterspring",
	301:"Stormwind City",
	321:"Orgrimmar",
	341:"Ironforge",
	362:"Thunder Bluff",
	381:"Darnassus",
	382:"Undercity",
	401:"Alterac Valley",
	443:"Warsong Gulch",
	461:"Arathi Basin",
	462:"Eversong Woods",
	463:"Ghostlands",
	464:"Azuremyst Isle",
	465:"Hellfire Peninsula",
	466:"Outland",
	467:"Zangarmarsh",
	471:"The Exodar",
	473:"Shadowmoon Valley",
	475:"Blade's Edge Mountains",
	476:"Bloodmyst Isle",
	477:"Nagrand",
	478:"Terokkar Forest",
	479:"Netherstorm",
	480:"Silvermoon City",
	481:"Shattrath City",
	482:"Eye of the Storm",
	485:"Northrend",
	486:"Borean Tundra",
	488:"Dragonblight",
	490:"Grizzly Hills",
	491:"Howling Fjord",
	492:"Icecrown",
	493:"Sholazar Basin",
	495:"The Storm Peaks",
	496:"Zul'Drak",
	499:"Isle of Quel'Danas",
	501:"Wintergrasp",
	502:"The Scarlet Enclave",
	504:"Dalaran",
	510:"Crystalsong Forest",
	512:"Strand of the Ancients",
	520:"The Nexus",
	521:"The Culling of Stratholme",
	522:"Ahn'kahet: The Old Kingdom",
	523:"Utgarde Keep",
	524:"Utgarde Pinnacle",
	525:"Halls of Lightning",
	526:"Halls of Stone",
	527:"The Eye of Eternity",
	528:"The Oculus",
	529:"Ulduar",
	530:"Gundrak",
	531:"The Obsidian Sanctum",
	532:"Vault of Archavon",
	533:"Azjol-Nerub",
	534:"Drak'Tharon Keep",
	535:"Naxxramas",
	536:"The Violet Hold",
	540:"Isle of Conquest",
	541:"Hrothgar's Landing",
	542:"Trial of the Champion",
	543:"Trial of the Crusader",
	544:"The Lost Isles",
	545:"Gilneas",
	601:"The Forge of Souls",
	602:"Pit of Saron",
	603:"Halls of Reflection",
	604:"Icecrown Citadel",
	605:"Kezan",
	606:"Mount Hyjal",
	607:"Southern Barrens",
	609:"The Ruby Sanctum",
	610:"Kelp'thar Forest",
	611:"Gilneas City",
	613:"Vashj'ir",
	614:"Abyssal Depths",
	615:"Shimmering Expanse",
	626:"Twin Peaks",
	640:"Deepholm",
	673:"The Cape of Stranglethorn",
	680:"Ragefire Chasm",
	684:"Ruins of Gilneas",
	685:"Ruins of Gilneas City",
	686:"Zul'Farrak",
	687:"The Temple of Atal'Hakkar",
	688:"Blackfathom Deeps",
	689:"Stranglethorn Vale",
	690:"The Stockade",
	691:"Gnomeregan",
	692:"Uldaman",
	696:"Molten Core",
	699:"Dire Maul",
	700:"Twilight Highlands",
	704:"Blackrock Depths",
	708:"Tol Barad",
	709:"Tol Barad Peninsula",
	710:"The Shattered Halls",
	717:"Ruins of Ahn'Qiraj",
	718:"Onyxia's Lair",
	720:"Uldum",
	721:"Blackrock Spire",
	722:"Auchenai Crypts",
	723:"Sethekk Halls",
	724:"Shadow Labyrinth",
	725:"The Blood Furnace",
	726:"The Underbog",
	727:"The Steamvault",
	728:"The Slave Pens",
	729:"The Botanica",
	730:"The Mechanar",
	731:"The Arcatraz",
	732:"Mana-Tombs",
	733:"The Black Morass",
	734:"Old Hillsbrad Foothills",
	736:"The Battle for Gilneas",
	737:"The Maelstrom",
	747:"Lost City of the Tol'vir",
	749:"Wailing Caverns",
	750:"Maraudon",
	751:"The Maelstrom",
	752:"Baradin Hold",
	753:"Blackrock Caverns",
	754:"Blackwing Descent",
	755:"Blackwing Lair",
	756:"The Deadmines",
	757:"Grim Batol",
	758:"The Bastion of Twilight",
	759:"Halls of Origination",
	760:"Razorfen Downs",
	761:"Razorfen Kraul",
	764:"Shadowfang Keep",
	765:"Stratholme",
	766:"Temple of Ahn'Qiraj",
	767:"Throne of the Tides",
	768:"The Stonecore",
	769:"The Vortex Pinnacle",
	772:"Ahn'Qiraj: The Fallen Kingdom",
	773:"Throne of the Four Winds",
	775:"Hyjal Summit",
	776:"Gruul's Lair",
	779:"Magtheridon's Lair",
	780:"Serpentshrine Cavern",
	781:"Zul'Aman",
	782:"The Eye",
	789:"Sunwell Plateau",
	793:"Zul'Gurub",
	795:"Molten Front",
	796:"Black Temple",
	797:"Hellfire Ramparts",
	798:"Magisters' Terrace",
	799:"Karazhan",
	800:"Firelands",
	806:"The Jade Forest",
	807:"Valley of the Four Winds",
	808:"The Wandering Isle",
	809:"Kun-Lai Summit",
	810:"Townlong Steppes",
	811:"Vale of Eternal Blossoms",
	816:"Well of Eternity",
	819:"Hour of Twilight",
	820:"End Time",
	824:"Dragon Soul",
	851:"Theramore's Fall (H)",
	856:"Temple of Kotmogu",
	857:"Krasarang Wilds",
	858:"Dread Wastes",
	860:"Silvershard Mines",
	862:"Pandaria",
	864:"Northshire",
	866:"Coldridge Valley",
	867:"Temple of the Jade Serpent",
	871:"Scarlet Halls",
	873:"The Veiled Stair",
	874:"Scarlet Monastery",
	875:"Gate of the Setting Sun",
	876:"Stormstout Brewery",
	877:"Shado-pan Monastery",
	878:"A Brewing Storm",
	880:"Greenstone Village",
	882:"Unga Ingoo",
	883:"Assault on Zan'vess",
	884:"Brewmoon Festival",
	885:"Mogu'Shan Palace",
	886:"Terrace of Endless Spring",
	887:"Siege of Niuzao Temple",
	888:"Shadowglen",
	889:"Valley of Trials",
	890:"Camp Narache",
	891:"Echo Isles",
	892:"Deathknell",
	893:"Sunstrider Isle",
	894:"Ammen Vale",
	895:"New Tinkertown",
	896:"Mogu'shan Vaults",
	897:"Heart of Fear",
	898:"Scholomance",
	899:"Arena of Annihilation",
	900:"Crypt of Forgotten Kings",
	903:"Shrine of Two Moons",
	905:"Shrine of Seven Stars",
	906:"Theramore's Fall (A)",
	911:"Lion's Landing (A)",
	912:"A Little Patience",
	914:"Dagger in the Dark",
	920:"Domination Point (H)",
	928:"Isle of Thunder",
	929:"Isle of Giants",
	930:"Throne of Thunder",
	935:"Deepwind Gorge",
	937:"Dark Heart of Pandaria",
	938:"The Secrets of Ragefire",
	939:"Blood in the Snow",
	940:"Battle on the High Seas",
	951:"Timeless Isle",
	953:"Siege of Orgrimmar",
	955:"Celestial Tournament",
	1086:"Malorne's Nightmare",
	1099:"The Road to Fel"
}
/*  functions */
//get npc name
function getPetName(){
    return document.getElementById("main-contents").getElementsByTagName('h1')[0].innerText;
}
function getPetId(){
    return document.URL.match("(\\d+)")[0];
}
function getZoneName(){
    return document.getElementById("locations").getElementsByClassName(' selected')[0].innerText.replace(/ /g,"");
}
function getNpcCreatureType(){
    return document.getElementById("main-precontents").getElementsByTagName('span')[2].innerText.replace(/s$/,"");
}
function getNpcElite(){
    return /Elite/.test(document.getElementById("infobox-contents0").getElementsByTagName('div')[1].innerText);
}
function getNpcLocations(){
    let nodes = document.getElementById("mapper-generic").children[0].children[2].children;
    const data = [];
    for (var i=0, max=nodes.length; i < max; i++) {
        let left = nodes[i].style.left.replace(/\./,"").replace(/%/,"");
        do {
            left = left + "0"
        } while (left.length < 4)
        let top = nodes[i].style.top.replace(/\./,"").replace(/%/,"");
        do {
            top = top + "0"
        } while (top.length < 4)
        data[i] = left + top ;
    }
    return data
}
//create the final npc info string
function createNpcString() {
    let npcInfo = "\t\t\t[\""              + npcName         + "\"] = {";
    npcInfo = npcInfo + "id="              + npcId           + ",";
    npcInfo = npcInfo + "level="           + npcLevel        + ",";
    npcInfo = npcInfo + "creature_type=\"" + npcCreatureType + "\",";
    if (npcElite) {
        npcInfo = npcInfo + "elite=true,";
    }
    npcInfo = npcInfo + "locations = {"
    for (var i=0, max=npcLocations.length; i < max; i++) {
        if (!(npcLocations[i].includes("px"))) {
            npcInfo = npcInfo + npcLocations[i] + ",";
        }
    }
    npcInfo = npcInfo + "},},";
    return npcInfo
}


//copy string to clipboard
//function copyToClipboard(text) { window.prompt("Copy to clipboard: Ctrl+C, Enter", text);}
function copyToClipboard(text) { navigator.clipboard.writeText(text);}
//create the html
function createButton() {
    let newSpan         = document.createElement('span');
    let newI            = document.createElement('i');
    let newB           = document.createElement('b');
    let newEm          = document.createElement('em');
    let newA            = document.createElement('a');
    //let newSpann        = document.createElement('span');
    newSpan.innerHTML   = "Copy NPC Info";
    newI.innerHTML      = "Copy NPC Info";
    newB.appendChild(newI);
    newEm.appendChild(newB);
    newEm.appendChild(newSpan);
    newA.appendChild(newEm);
    newA.onclick        = function(){
        copyToClipboard(npcString);
    }
    newA.className      = "button-red";
    //newSpann.appendChild(newA);
    //newSpann.className  = "menu-buttons";
    let doc = document.getElementsByClassName("text");
    doc[0].insertBefore(newA,null);
}
//all in one call for npc handling
function queryNpcInfo() {
    //getNpcMap();
    npcName         = getNpcName();
    npcId           = getNpcId();
    npcLevel        = getNpcLevel();
    npcCreatureType = getNpcCreatureType();
    npcElite        = getNpcElite();
    npcLocations    = getNpcLocations();

    npcString       = createNpcString();
    document.getElementsByTagName("h2")[0].innerText = "Related"+" "+npcString;
}

if (window.history) {
    window.addEventListener('hashchange', function(){
        queryNpcInfo();
    });
}
queryNpcInfo();
createButton();