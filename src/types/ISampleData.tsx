export interface ISampleData {
  "Asset Name": AssetName
  Lat: string
  Long: string
  "Business Category": BusinessCategory
  "Risk Rating": string
  "Risk Factors": string
  Year: string
  risks?: RiskFactors
  "Extreme heat"?: string
  Flooding?: string
  Tornado?: string
  Volcano?: string
  Wildfire?: string
  "Sea level rise"?: string
  Earthquake?: string
  Hurricane?: string
  Drought?: string
  "Extreme cold"?: string
}

export interface ISampleDataFixed {
  "Asset Name": string
  Lat: string
  Long: string
  "Business Category": string
  "Risk Rating": string
  "Risk Factors": string
  Year: string
  Hurricane: string
  "Extreme heat": string
  Tornado: string
  Wildfire: string
  Flooding: string
  Drought: string
  Volcano: string
  "Extreme cold": string
  Earthquake: string
  "Sea level rise": string
}
export interface RiskFactors {
  "Extreme heat": string
  Flooding: string
  Tornado: string
  Volcano: string
  Wildfire: string
  "Sea level rise": string
  Earthquake: string
  Hurricane: string
  Drought: string
  "Extreme cold": string
}

export enum AssetName {
  AcevedoKennedy = "Acevedo-Kennedy",
  AlvarezInc = "Alvarez Inc",
  AndersonGroup = "Anderson Group",
  BanksCarlson = "Banks-Carlson",
  BenderWarrenAndSanchez = "Bender, Warren and Sanchez",
  CamposAndSons = "Campos and Sons",
  ClarkeLutzAndFarrell = "Clarke, Lutz and Farrell",
  CookBurns = "Cook-Burns",
  DavisAllenAndRivera = "Davis, Allen and Rivera",
  DukeLtd = "Duke Ltd",
  FlynnAnderson = "Flynn-Anderson",
  FosterFlores = "Foster-Flores",
  FoxDanielAndColeman = "Fox, Daniel and Coleman",
  GoodLewis = "Good-Lewis",
  GrantCoffey = "Grant-Coffey",
  GrayEvans = "Gray-Evans",
  GrossPLC = "Gross PLC",
  GuzmanLtd = "Guzman Ltd",
  HallMeadowsAndAnderson = "Hall, Meadows and Anderson",
  HarrisonMezaAndRios = "Harrison, Meza and Rios",
  HigginsBrownAndVaughn = "Higgins, Brown and Vaughn",
  HooperEvansAndMerritt = "Hooper, Evans and Merritt",
  HorneAndSons = "Horne and Sons",
  JimenezGallegos = "Jimenez-Gallegos",
  JohnsonAndSons = "Johnson and Sons",
  JonesLtd = "Jones Ltd",
  KelleyBarnesAndHutchinson = "Kelley, Barnes and Hutchinson",
  KempAnderson = "Kemp-Anderson",
  LandryMolinaAndGreen = "Landry, Molina and Green",
  MarksGarrettAndCummings = "Marks, Garrett and Cummings",
  MartinJenkins = "Martin-Jenkins",
  McknightBeasleyAndStewart = "Mcknight, Beasley and Stewart",
  McphersonSimmonsAndSimpson = "Mcpherson, Simmons and Simpson",
  MejiaRobertsAndGay = "Mejia, Roberts and Gay",
  MillerNorris = "Miller-Norris",
  NortonSpencer = "Norton-Spencer",
  ObrienOneill = "Obrien-Oneill",
  ParkAndSons = "Park and Sons",
  PatelBrooks = "Patel-Brooks",
  PatelNorrisAndJackson = "Patel, Norris and Jackson",
  PerezRobertson = "Perez-Robertson",
  PittmanPLC = "Pittman PLC",
  ReidPLC = "Reid PLC",
  ReidSherman = "Reid-Sherman",
  RiveraInc = "Rivera Inc",
  RobertsBurkeAndWilliams = "Roberts, Burke and Williams",
  RobertsonPetersen = "Robertson-Petersen",
  RodriguezRobertsAndFuller = "Rodriguez, Roberts and Fuller",
  SkinnerRojas = "Skinner-Rojas",
  SmithWoods = "Smith-Woods",
  StantonJoyce = "Stanton-Joyce",
  StewartPLC = "Stewart PLC",
  StricklandDaniels = "Strickland-Daniels",
  SullivanCurtis = "Sullivan-Curtis",
  TaylorMitchellAndWard = "Taylor, Mitchell and Ward",
  ThomasChavez = "Thomas-Chavez",
  ThompsonDavisAndBrown = "Thompson, Davis and Brown",
  TorresSanchez = "Torres-Sanchez",
  VegaHuffman = "Vega-Huffman",
  WagnerCurryAndPearson = "Wagner, Curry and Pearson",
  WalkerHoganAndMendez = "Walker, Hogan and Mendez",
  WallerLtd = "Waller Ltd",
  WarePLC = "Ware PLC",
  WashingtonRogersAndMorrison = "Washington, Rogers and Morrison",
  WatsonEvansAndSmith = "Watson, Evans and Smith",
  WileyLtd = "Wiley Ltd",
  WilkersonMiranda = "Wilkerson-Miranda",
  WilliamsGroup = "Williams Group",
  WillisNewman = "Willis-Newman",
  ZunigaInc = "Zuniga Inc",
}

export enum BusinessCategory {
  Energy = "Energy",
  Finance = "Finance",
  Healthcare = "Healthcare",
  Manufacturing = "Manufacturing",
  Retail = "Retail",
  Technology = "Technology",
}
