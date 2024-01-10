// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Hotiul 1
// const firebaseConfig = {
//   apiKey: "AIzaSyACK1byUNHYBvi0aJRiHzmDbM4XHoCAB5A",
//   authDomain: "hotiul.firebaseapp.com",
//   projectId: "hotiul",
//   storageBucket: "hotiul.appspot.com",
//   messagingSenderId: "13250723084",
//   appId: "1:13250723084:web:27908d4224d230113fdd29",
//   measurementId: "G-36RW5PYSM7",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDHi_F_OOHUiYed_ImY71Fxi7VPttR45Dc",
//   authDomain: "finalniu.firebaseapp.com",
//   projectId: "finalniu",
//   storageBucket: "finalniu.appspot.com",
//   messagingSenderId: "70753497752",
//   appId: "1:70753497752:web:e5e3a9dcc58e1eea2b56ed",
//   measurementId: "G-W93FDRJ6D3",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyB6lD_eepS8XHk9MsBO5UC75rW9RLuPOXM",
//   authDomain: "niuhotiu.firebaseapp.com",
//   projectId: "niuhotiu",
//   storageBucket: "niuhotiu.appspot.com",
//   messagingSenderId: "795613102120",
//   appId: "1:795613102120:web:9892f8268dc4ee04fef51d",
//   measurementId: "G-4E06ZF507V",
// };

// Hotiul 2
// const firebaseConfig = {
//   apiKey: "AIzaSyBnqcFDMddroMdne3qVmdF6BTMzYeRUUNo",
//   authDomain: "hotiul2.firebaseapp.com",
//   projectId: "hotiul2",
//   storageBucket: "hotiul2.appspot.com",
//   messagingSenderId: "14324845591",
//   appId: "1:14324845591:web:1258441a1cafbdcde0e052",
//   measurementId: "G-V9FBMQMK08",
// };

//Hotiul 3
// const firebaseConfig = {
//   apiKey: "AIzaSyDQLfSxe8XmDoOukdsdkG3m198UfmCpVrc",
//   authDomain: "hotiul3.firebaseapp.com",
//   projectId: "hotiul3",
//   storageBucket: "hotiul3.appspot.com",
//   messagingSenderId: "442975610624",
//   appId: "1:442975610624:web:cf92301da2d0f42abc35e5",
//   measurementId: "G-EXMZDDRZFP",
// };

//Hotiul test

// const firebaseConfig = {
// 	apiKey: 'AIzaSyDlu3iJLjpCyUjJ52NG-peL5ZZGyEuvOnY',
// 	authDomain: 'hotiul-test.firebaseapp.com',
// 	projectId: 'hotiul-test',
// 	storageBucket: 'hotiul-test.appspot.com',
// 	messagingSenderId: '107175772235',
// 	appId: '1:107175772235:web:0afe1ce3ee4ab547f9cdce',
// 	measurementId: 'G-K0P69R1XJ3',
// };

//Hotiul 4
// const firebaseConfig = {
//   apiKey: "AIzaSyC_bB2WhutoHLD6TC2hLHkqmV27wz7RbZM",
//   authDomain: "hotiul4.firebaseapp.com",
//   projectId: "hotiul4",
//   storageBucket: "hotiul4.appspot.com",
//   messagingSenderId: "679546932269",
//   appId: "1:679546932269:web:2864d19a05fc2520a5bca4",
//   measurementId: "G-3HSSGKJNLZ"
// };

// Hotiul 5
// const firebaseConfig = {
//   apiKey: "AIzaSyBCJzDoazj1YyzJoIC6aiynZ6C_fk01v84",
//   authDomain: "hotiul5-45c01.firebaseapp.com",
//   projectId: "hotiul5-45c01",
//   storageBucket: "hotiul5-45c01.appspot.com",
//   messagingSenderId: "938501227061",
//   appId: "1:938501227061:web:71c5b9405637beedbee77c",
//   measurementId: "G-HP790ECXE3"
// };

// Hotiul 6
// const firebaseConfig = {
//   apiKey: "AIzaSyCxmoZimcGjKZSvO6qsjCvXkYLt6O3_mIA",
//   authDomain: "hotiul6.firebaseapp.com",
//   projectId: "hotiul6",
//   storageBucket: "hotiul6.appspot.com",
//   messagingSenderId: "230418311677",
//   appId: "1:230418311677:web:d74428566474828bbe9194",
//   measurementId: "G-FQS2S08H43"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyDbok3PaFnfP1JhS1LlLyHxlfbxLDuhBwI",
//   authDomain: "finoniu.firebaseapp.com",
//   projectId: "finoniu",
//   storageBucket: "finoniu.appspot.com",
//   messagingSenderId: "68776458013",
//   appId: "1:68776458013:web:770192541402670e76d3f4",
//   measurementId: "G-1QFP7J7TYL",
// };
// Initialize Firebase

// const firebaseConfig = {
// 	apiKey: 'AIzaSyAUndCxGQCWEulcqk60o7z8tft07wZVLtM',
// 	authDomain: 'hotiultest-ff724.firebaseapp.com',
// 	projectId: 'hotiultest-ff724',
// 	storageBucket: 'hotiultest-ff724.appspot.com',
// 	messagingSenderId: '1011450394342',
// 	appId: '1:1011450394342:web:7169006c10993573ed2d27',
// 	measurementId: 'G-BBP1PT489V',
// };

//hotiul 4
// const firebaseConfig = {
// 	apiKey: 'AIzaSyC_bB2WhutoHLD6TC2hLHkqmV27wz7RbZM',
// 	authDomain: 'hotiul4.firebaseapp.com',
// 	projectId: 'hotiul4',
// 	storageBucket: 'hotiul4.appspot.com',
// 	messagingSenderId: '679546932269',
// 	appId: '1:679546932269:web:2864d19a05fc2520a5bca4',
// 	measurementId: 'G-3HSSGKJNLZ',
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyAwJ2hx69qVmqBiBBNk7wQhEGMzU_vXkvY",
//   authDomain: "niuniuniu-c4ca3.firebaseapp.com",
//   projectId: "niuniuniu-c4ca3",
//   storageBucket: "niuniuniu-c4ca3.appspot.com",
//   messagingSenderId: "926575785629",
//   appId: "1:926575785629:web:6b3bb802d57fb9b2644674",
//   measurementId: "G-C78BJ7MXW1",
// };
//Myhotiul
// const firebaseConfig = {
//   apiKey: "AIzaSyAa7m3odNMuCAbPFg74SRWWjWBMuMrsr0U",
//   authDomain: "myhotiul.firebaseapp.com",
//   projectId: "myhotiul",
//   storageBucket: "myhotiul.appspot.com",
//   messagingSenderId: "828394723262",
//   appId: "1:828394723262:web:1ed837152abae65cd58bef",
//   measurementId: "G-KFE89RVT21",
// };
//Hotiul test

//5

// const firebaseConfig = {
// 	apiKey: 'AIzaSyBCJzDoazj1YyzJoIC6aiynZ6C_fk01v84',
// 	authDomain: 'hotiul5-45c01.firebaseapp.com',
// 	projectId: 'hotiul5-45c01',
// 	storageBucket: 'hotiul5-45c01.appspot.com',
// 	messagingSenderId: '938501227061',
// 	appId: '1:938501227061:web:71c5b9405637beedbee77c',
// 	measurementId: 'G-HP790ECXE3',
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDlu3iJLjpCyUjJ52NG-peL5ZZGyEuvOnY",
//   authDomain: "hotiul-test.firebaseapp.com",
//   projectId: "hotiul-test",
//   storageBucket: "hotiul-test.appspot.com",
//   messagingSenderId: "107175772235",
//   appId: "1:107175772235:web:0afe1ce3ee4ab547f9cdce",
//   measurementId: "G-K0P69R1XJ3",
// };

//Hotiul 4
// const firebaseConfig = {
//   apiKey: "AIzaSyC_bB2WhutoHLD6TC2hLHkqmV27wz7RbZM",
//   authDomain: "hotiul4.firebaseapp.com",
//   projectId: "hotiul4",
//   storageBucket: "hotiul4.appspot.com",
//   messagingSenderId: "679546932269",
//   appId: "1:679546932269:web:2864d19a05fc2520a5bca4",
//   measurementId: "G-3HSSGKJNLZ"

//x3
// const firebaseConfig = {
// 	apiKey: 'AIzaSyBLaFmR1FZsFhjsZlErv_oB5VDfKHt0CPY',
// 	authDomain: 'hotiulx3.firebaseapp.com',
// 	projectId: 'hotiulx3',
// 	storageBucket: 'hotiulx3.appspot.com',
// 	messagingSenderId: '784033549645',
// 	appId: '1:784033549645:web:d2071ff91164ec38997b04',
// 	measurementId: 'G-HLYLR25WND',
// };

///---------------------///
// //11
// const firebaseConfig = {
// 	apiKey: 'AIzaSyAngnPq2s_wKXx8axpfk3YnWjrGOriCJG4',
// 	authDomain: 'hotiul11.firebaseapp.com',
// 	projectId: 'hotiul11',
// 	storageBucket: 'hotiul11.appspot.com',
// 	messagingSenderId: '975500922153',
// 	appId: '1:975500922153:web:a67c551ecb01d42ba0bb38',
// 	measurementId: 'G-87NWSVPZXT',
// };

// // //22
// const firebaseConfig = {
// 	apiKey: 'AIzaSyC9reMUbEdp0_4JV0gsfPhZjRVeGgBycHc',
// 	authDomain: 'hotiul22.firebaseapp.com',
// 	projectId: 'hotiul22',
// 	storageBucket: 'hotiul22.appspot.com',
// 	messagingSenderId: '883200827',
// 	appId: '1:883200827:web:1794764a24310a18be5d1e',
// 	measurementId: 'G-V0E33VQDVM',
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyCdiesVO99xxA2CyGZHm5RF7iLO6nTOsJE",
//   authDomain: "hotiulniu.firebaseapp.com",
//   projectId: "hotiulniu",
//   storageBucket: "hotiulniu.appspot.com",
//   messagingSenderId: "340569071652",
//   appId: "1:340569071652:web:42a16adf974e667780b8b1",
//   measurementId: "G-H27TMYBZ33",
// };
const firebaseConfig = {
  apiKey: "AIzaSyD85iPxvnHj675rpfmotgnyPgv0pRRtm9I",
  authDomain: "hotiulniuniu.firebaseapp.com",
  projectId: "hotiulniuniu",
  storageBucket: "hotiulniuniu.appspot.com",
  messagingSenderId: "216976820021",
  appId: "1:216976820021:web:9a20256a4ed8693bb22e7c",
  measurementId: "G-KM4QZE34RZ",
};
// //33
// const firebaseConfig = {
// 	apiKey: 'AIzaSyAuu2YPlWD5iu-oViGW7D8ot_6m6wtcnvA',
// 	authDomain: 'hotiul33-35416.firebaseapp.com',
// 	projectId: 'hotiul33-35416',
// 	storageBucket: 'hotiul33-35416.appspot.com',
// 	messagingSenderId: '972975959268',
// 	appId: '1:972975959268:web:c193adf6a5686d9b8b10f1',
// 	measurementId: 'G-9ZE0W5VE46',
// };

// 44
// const firebaseConfig = {
// 	apiKey: 'AIzaSyANkm3G23zlp_wa7E6VlmxpF305mOnUJVQ',
// 	authDomain: 'hotiul44.firebaseapp.com',
// 	projectId: 'hotiul44',
// 	storageBucket: 'hotiul44.appspot.com',
// 	messagingSenderId: '202478913049',
// 	appId: '1:202478913049:web:b394f6d6610d05f88f4c88',
// };

// 55
// const firebaseConfig = {
// 	apiKey: 'AIzaSyDjLsgIr6ug_h3b7E_IgnVBDQbjRQFngVE',
// 	authDomain: 'hotiul55.firebaseapp.com',
// 	projectId: 'hotiul55',
// 	storageBucket: 'hotiul55.appspot.com',
// 	messagingSenderId: '941979233384',
// 	appId: '1:941979233384:web:7999696d11f45888d89fdd',
// };
// 66
// const firebaseConfig = {
// 	apiKey: 'AIzaSyDRwuDUUnic3oDdtSa-GJ4-MwkhhQY00xI',
// 	authDomain: 'hotiul66.firebaseapp.com',
// 	projectId: 'hotiul66',
// 	storageBucket: 'hotiul66.appspot.com',
// 	messagingSenderId: '321270205853',
// 	appId: '1:321270205853:web:88ccf277fcc9688bfef374',
// };
// 77
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCHSqjhEom9iFOYfk62zot_1UC-VGiICe0',
// 	authDomain: 'hotiul77.firebaseapp.com',
// 	projectId: 'hotiul77',
// 	storageBucket: 'hotiul77.appspot.com',
// 	messagingSenderId: '374144982409',
// 	appId: '1:374144982409:web:018dd6cf1aaab3b86a9558',
// };

// 88
// const firebaseConfig = {
// 	apiKey: 'AIzaSyDFztbNZkyarfjsKbVHTs3w0WGaE9yJIWY',
// 	authDomain: 'hotiul-d3e8f.firebaseapp.com',
// 	projectId: 'hotiul-d3e8f',
// 	storageBucket: 'hotiul-d3e8f.appspot.com',
// 	messagingSenderId: '936815058427',
// 	appId: '1:936815058427:web:1c58f3c727264d2cecff5e',
// };
// 99
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCsI6SDVxH4QVzcz9q6Qg40NkZqrZYQYow',
// 	authDomain: 'hotiul99.firebaseapp.com',
// 	projectId: 'hotiul99',
// 	storageBucket: 'hotiul99.appspot.com',
// 	messagingSenderId: '184601068150',
// 	appId: '1:184601068150:web:8f49bd7bd8a1548816d557',
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
