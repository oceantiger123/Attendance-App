'use strict'

const {db, models: { Member, Admin}} = require('../server/db')

// const dummyData = [
//     {
//       "objectId": "YXDU8DyFlu",
//       "Name": "Ilona",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "EqE2v6Ub8D",
//       "Name": "Ian",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "tYDjguvgax",
//       "Name": "Idabelle",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "GKlpu84XTM",
//       "Name": "Ingeborg",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "0DkLTzf47X",
//       "Name": "Ica",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "DrKCKkG3Kh",
//       "Name": "Ivan",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "h34iakTIO2",
//       "Name": "Iliana",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "xVnES1xdcE",
//       "Name": "Ivah",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "sT8HCWDPlg",
//       "Name": "Ieshia",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "vbBMkJ0Bhv",
//       "Name": "Ira",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "IUGJ8HIi4z",
//       "Name": "Iridian",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "bDGXR1kJmq",
//       "Name": "Irven",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "vPRGoAK2Ut",
//       "Name": "Irl",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "xfCcuTNDIu",
//       "Name": "Ibrahim",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "0Dh3MgRPiJ",
//       "Name": "Inger",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "8U1u0TNhWZ",
//       "Name": "Ines",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "lp6yoYXrtj",
//       "Name": "Idamae",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "ESz2D2WmVk",
//       "Name": "Irving",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "HtAvFWIxYY",
//       "Name": "Ilene",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "WqFx0nEeTo",
//       "Name": "Ione",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "ZOSmgNKd5M",
//       "Name": "Iona",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "mHA6G5dG3Y",
//       "Name": "Ireland",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "elitiXegwL",
//       "Name": "Ida",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "iW5NFFRdTz",
//       "Name": "Idell",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "HuTHauyi27",
//       "Name": "Isa",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "iNtcZLFTmo",
//       "Name": "Idella",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "XPwZQAm5gA",
//       "Name": "Imanol",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "J9yBjJhJDK",
//       "Name": "Icy",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "3MXzcxTbgj",
//       "Name": "Iesha",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "KDJm8wKIoZ",
//       "Name": "Irene",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Wg1GnZJwGL",
//       "Name": "Irwin",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "AKyEfwI9S7",
//       "Name": "Isabela",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "1I3ZH42iyt",
//       "Name": "Ilo",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "GqQZAjwxSQ",
//       "Name": "Ike",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "Ym7CnlAsGJ",
//       "Name": "Illa",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "FJXNV0KHTn",
//       "Name": "Ina",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "vzcjikMCkL",
//       "Name": "Isabel",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "18oLv9gebD",
//       "Name": "Isla",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "jTa6nA2hrc",
//       "Name": "Irine",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Sth9d4iSY7",
//       "Name": "Immanuel",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "JuuLThjxpC",
//       "Name": "Inell",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "K8erNTc5xB",
//       "Name": "Ishaan",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "y8MSkUSDek",
//       "Name": "Isam",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "vREb8rLEC8",
//       "Name": "Ima",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "SrkY5FiGyH",
//       "Name": "Isidore",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "xaasq9AuIV",
//       "Name": "Indiana",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "Nztx1W1CYE",
//       "Name": "Ishmael",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "sxs3A42e48",
//       "Name": "Isadora",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "R3ECfAmNAz",
//       "Name": "Isaac",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "6Z2HJ4g1yD",
//       "Name": "Illya",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "vKTr2iFvvE",
//       "Name": "Inga",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "qChCWhHmwp",
//       "Name": "Imogene",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "3ijIePGeiD",
//       "Name": "Icie",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "xbiRblnX0o",
//       "Name": "Inez",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "16PsfSiTiX",
//       "Name": "Ilma",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "Tdacwdltz9",
//       "Name": "Icey",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "ycB5aED7wv",
//       "Name": "Irena",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "gJFIhb5NI7",
//       "Name": "Imelda",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "EUGT1AIDf3",
//       "Name": "Isham",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "kQJf4MtJKW",
//       "Name": "Ingrid",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "3Ck1DJNsxD",
//       "Name": "Itzel",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Q5QrxFuHw7",
//       "Name": "Isidro",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Z2tCD3vPNn",
//       "Name": "Isiah",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "LQMlBNEoLG",
//       "Name": "Isai",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "SUkSWI7PxW",
//       "Name": "India",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "UrbVZrzivq",
//       "Name": "Ismael",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "pTpcmD2BbU",
//       "Name": "Issac",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "rPUrJGZuqj",
//       "Name": "Isobel",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "kuROAru5St",
//       "Name": "Ingram",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "yKTNEKhBgA",
//       "Name": "Imo",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "hdB0MGEkE6",
//       "Name": "Iva",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "sjBPFMma8g",
//       "Name": "Imani",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "taD4UDOA9y",
//       "Name": "Isamar",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Q164oyyBQK",
//       "Name": "Ilda",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "LwBCfk4oyZ",
//       "Name": "Isabella",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "af5BE9FkJX",
//       "Name": "Ilah",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "qsxPCs0CXO",
//       "Name": "Isaias",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "CUyk6TScKN",
//       "Name": "Irva",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "0vlsXEG8aw",
//       "Name": "Iola",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "KeB5QHLq7A",
//       "Name": "Iris",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Ar4vJx3G9l",
//       "Name": "Ila",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "B2SCDsDUz2",
//       "Name": "Isabelle",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "579keFUGgc",
//       "Name": "Isadore",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "VIpn5xDdsl",
//       "Name": "Irma",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "qzsUSdjG8P",
//       "Name": "Ignacio",
//       "createdAt": "2020-01-23T22:26:56.824Z",
//       "updatedAt": "2020-01-23T22:26:56.824Z"
//     },
//     {
//       "objectId": "JsuPGEdMxW",
//       "Name": "Irvin",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "Xigls37o0U",
//       "Name": "Ignatius",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "dl1TzZvWX2",
//       "Name": "Iverson",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "QtEUV4fBtr",
//       "Name": "Iver",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "LxKyWkkV4P",
//       "Name": "Ignatz",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "RU45YVeL8U",
//       "Name": "Isaiah",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "kqJmA7Vsm5",
//       "Name": "Infant",
//       "createdAt": "2020-01-23T22:26:56.825Z",
//       "updatedAt": "2020-01-23T22:26:56.825Z"
//     },
//     {
//       "objectId": "C6hyEaynMA",
//       "Name": "Isom",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "8JcnCHJGOe",
//       "Name": "Ivana",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "mgDEdrTTDQ",
//       "Name": "Isidor",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "qCjGQUIwDC",
//       "Name": "Irvine",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "VzMxBohtT2",
//       "Name": "Israel",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "z8nhtsskRQ",
//       "Name": "Isabell",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "CCvZDCDOvI",
//       "Name": "Isaak",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     },
//     {
//       "objectId": "v8WkSPEkSE",
//       "Name": "Isis",
//       "createdAt": "2020-01-23T22:26:56.826Z",
//       "updatedAt": "2020-01-23T22:26:56.826Z"
//     }
//   ];
  // const dummyMember2 = dummyData.reduce((pre, curMember)=>{
  //   let curObject = {name: curMember["Name"]};
  //   pre = [...pre, curObject];
  //   return pre
  // }, []);
 

// const dummyAttendance = [{memberId: 1, dateId: 1},
//                      {memberId: 1, dateId: 2},
//                      {memberId: 2, dateId: 3},
//                      {memberId: 1, dateId: 4}];

// const dummyDates = [{date: 'May 01 2022'},
//                      {date: 'May 02 2022'},
//                      {date: 'Jul 02 2022'},
//                      {date: 'Jul 01 2022'}];

const dummyAdmin = [{username: "admin", password: '123'}];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  //const members = await Promise.all(dummyMember2.map(member => Member.create(member)))

  //const dates = await Promise.all(dummyDates.map(date => Date.create(date)))

  //const attendantDate = await Promise.all(dummyAttendance.map(attendDate => Member_Date.create(attendDate)))

  const admin = await Promise.all(dummyAdmin.map(user => Admin.create(user)))

  //console.log(`seeded ${members.length}  members`)
  //console.log(`seeded ${dates.length}  dates`)
  //console.log(`seeded ${attendantDate.length}  attendantDate`)
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
