import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
const ROOM = [
  {
    ID: "R101",
    Name: "R101",
    Status: "In Use",
    TypeID: "RT01",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R102",
    Name: "R102",
    Status: "In Use",
    TypeID: "RT01",
    TypeName: "Single VIP Room",
  },
  {
    ID: "R103",
    Name: "R103",
    Status: "Fixing",
    TypeID: "RT01",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R104",
    Name: "R104",
    Status: "Available",
    TypeID: "RT01",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R105",
    Name: "R105",
    Status: "In Use",
    TypeID: "RT01",
    TypeName: "Small Family Room",
  },
  {
    ID: "R201",
    Name: "R201",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R202",
    Name: "R202",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R203",
    Name: "R203",
    Status: "In Use",
    TypeID: "RT02",
    TypeName: "Small Family Room",
  },
  {
    ID: "R204",
    Name: "R204",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R205",
    Name: "R205",
    Status: "Cleaning",
    TypeID: "RT02",
    TypeName: "Small Family Room",
  },
  {
    ID: "R301",
    Name: "R301",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R302",
    Name: "R302",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R303",
    Name: "R303",
    Status: "Cleaning",
    TypeID: "RT03",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R304",
    Name: "R304",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Single VIP Room",
  },
  {
    ID: "R305",
    Name: "R305",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R401",
    Name: "R401",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R402",
    Name: "R402",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R403",
    Name: "R403",
    Status: "Fixing",
    TypeID: "RT04",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R404",
    Name: "R404",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Small Family Room",
  },
  {
    ID: "R405",
    Name: "R405",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R501",
    Name: "R501",
    Status: "Cleaning",
    TypeID: "RT05",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R502",
    Name: "R502",
    Status: "Cleaning",
    TypeID: "RT05",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R503",
    Name: "R503",
    Status: "Available",
    TypeID: "RT05",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R504",
    Name: "R504",
    Status: "Available",
    TypeID: "RT05",
    TypeName: "Small Family Room",
  },
  {
    ID: "R505",
    Name: "R505",
    Status: "Available",
    TypeID: "RT05",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R601",
    Name: "R601",
    Status: "Available",
    TypeID: "RT01",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R602",
    Name: "R602",
    Status: "In Use",
    TypeID: "RT01",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R603",
    Name: "R603",
    Status: "Fixing",
    TypeID: "RT01",
    TypeName: "Small Family Room",
  },
  {
    ID: "R604",
    Name: "R604",
    Status: "Available",
    TypeID: "RT01",
    TypeName: "Small Family Room",
  },
  {
    ID: "R605",
    Name: "R605",
    Status: "Available",
    TypeID: "RT01",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R701",
    Name: "R701",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R702",
    Name: "R702",
    Status: "Cleaning",
    TypeID: "RT02",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R703",
    Name: "R703",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Small Family Room",
  },
  {
    ID: "R704",
    Name: "R704",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Small Family Room",
  },
  {
    ID: "R705",
    Name: "R705",
    Status: "Available",
    TypeID: "RT02",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R801",
    Name: "R801",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Couple VIP Room",
  },
  {
    ID: "R802",
    Name: "R802",
    Status: "In Use",
    TypeID: "RT03",
    TypeName: "Couple VIP Room",
  },
  {
    ID: "R803",
    Name: "R803",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Single VIP Room",
  },
  {
    ID: "R804",
    Name: "R804",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Couple VIP Room",
  },
  {
    ID: "R805",
    Name: "R705",
    Status: "Available",
    TypeID: "RT03",
    TypeName: "Single VIP Room",
  },
  {
    ID: "R901",
    Name: "R901",
    Status: "In Use",
    TypeID: "RT05",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R902",
    Name: "R902",
    Status: "Cleaning",
    TypeID: "RT05",
    TypeName: "Single VIP Room",
  },
  {
    ID: "R903",
    Name: "R903",
    Status: "Available",
    TypeID: "RT05",
    TypeName: "Small Family Room",
  },
  {
    ID: "R904",
    Name: "R904",
    Status: "Cleaning",
    TypeID: "RT05",
    TypeName: "Couple Regular Room",
  },
  {
    ID: "R905",
    Name: "R905",
    Status: "Available",
    TypeID: "RT05",
    TypeName: "Single Regular Room",
  },
  {
    ID: "R1001",
    Name: "R1001",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Couple VIP Room",
  },
  {
    ID: "R1002",
    Name: "R1002",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Small Family Room",
  },
  {
    ID: "R1003",
    Name: "R1003",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Couple VIP Room",
  },
  {
    ID: "R1004",
    Name: "R1004",
    Status: "Fixing",
    TypeID: "RT04",
    TypeName: "Small Family Room",
  },
  {
    ID: "R1005",
    Name: "R1005",
    Status: "Available",
    TypeID: "RT04",
    TypeName: "Single VIP Room",
  },
];

export const addDbRoom = async () => {
  ROOM.map(async (b) => {
    await setDoc(doc(db, "ROOM", b.ID), b);
  });
};
