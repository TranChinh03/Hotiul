// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
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

const firebaseConfig = {
  apiKey: "AIzaSyDHi_F_OOHUiYed_ImY71Fxi7VPttR45Dc",
  authDomain: "finalniu.firebaseapp.com",
  projectId: "finalniu",
  storageBucket: "finalniu.appspot.com",
  messagingSenderId: "70753497752",
  appId: "1:70753497752:web:e5e3a9dcc58e1eea2b56ed",
  measurementId: "G-W93FDRJ6D3",
};

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
