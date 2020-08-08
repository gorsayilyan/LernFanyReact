// import React, {useState} from 'react';

// const EffectDemo = () => {
//     //State
//     const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
//     const [title,setTitle] = useState('useEffect() in Hooks');
    
    
//     return(
//         <div>
//             <h1>Title: {title}</h1>
//             <h3>Name: {fullName.name}</h3>
//             <h3>Family Name: {fullName.familyName}</h3>
//         </div>
//     );
// };



// import React, {useEffect, useState} from 'react';

// const EffectDemo = () => {
//     //State
//     const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
//     const [title,setTitle] = useState('useEffect() in Hooks');

//     //useEffect
//     useEffect(() => { 
    //    console.log('useEffect has been called!');
//         setFullName({name:'Marco',familyName: 'Shaw'});
//     });

//     return(
//         <div>
//             <h1>Title: {title}</h1>
//             <h3>Name: {fullName.name}</h3>
//             <h3>Family Name: {fullName.familyName}</h3>
//         </div>
//     );
// };



// import React, {useEffect, useState} from 'react';

// export const EffectDemo = () => {
//     //State
//     const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
//     const [title,setTitle] = useState('useEffect() in Hooks');

//     //useEffect
//     useEffect(() => {
//         console.log('useEffect has been called!');
//         setFullName({name:'Marco',familyName: 'Shaw'});
//     },[]); //Pass Array as second argument

//     return(
//         <div>
//             <h1>Title: {title}</h1>
//             <h3>Name: {fullName.name}</h3>
//             <h3>Family Name: {fullName.familyName}</h3>
//         </div>
//     );
// };




// import React,{useEffect,useState} from 'react';

//  const CountryList = () => {
//     const [countries, setCountries] = useState([]);
//     const [load, setLoad] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         axios.get('https://restcountries.eu/rest/v2/all') // es toxi maman
//             .then(res => {
//                 setCountries(res.data);
//                 setLoad(true);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoad(true)
//             })
//     }, []);
    
    
//     if (load) {
//         return (<ul>
//             {error ? <li>{error.message}</li> : countries.map((country, index) => <li key={index}>{country.name}</li>)}
//         </ul>);
//     } else {
//         return (
//             <div>
//                 Loading...
//             </div>
//         );
//     }
// };
// export default CountryList




// import axios from 'axios';

//  const getItem = (url) => {
//     return new Promise((resolve, reject) => {
//         axios.get(url).then(res => {
//             resolve(res.data);
//         }).catch(err => reject(err));
//     });
// };
// export default getItem





// import React, {useEffect, useState} from 'react';
// import {getItem} from './generalMethods'
// import axios from 'axios';

// const CountryList = () => {
//     const [countries, setCountries] = useState([]);
//     const [load, setLoad] = useState(false);
//     const [error, setError] = useState('');
   
//     useEffect(() => {
//         getItem('https://restcountries.eu/rest/v2/all')
//           .then(res => {
//             setCountries(res);
//             setLoad(true)
//         }).catch(err => {
//                 setError(err);
//                 setLoad(true);
//             }
//         );
//     }, []);
    
//     if (load) {
//         return (<ul>
//             {error ? <li>{error.message}</li> : countries.map((country, index) => <li key={index}>{country.name}</li>)}
//         </ul>);
//     } else {
//         return (
//             <div>
//                 Loading...
//             </div>
//         );
//     }
// };

// export default CountryList