// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCzychNARsabmXwdsX__YMqkYu7YuKgDnM',
  authDomain: 'talkmall.firebaseapp.com',
  projectId: 'talkmall',
  storageBucket: 'talkmall.appspot.com',
  messagingSenderId: '686325720797',
  appId: '1:686325720797:web:329e5f89d2990003955d34',
  measurementId: 'G-GMW6E4SV71',
};

export const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);

export default firebaseapp;
