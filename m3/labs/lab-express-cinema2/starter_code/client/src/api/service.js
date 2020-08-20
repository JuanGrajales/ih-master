import axios from 'axios';
 
const service = axios.create({
  baseURL: 'http://localhost:5000/api',
  // withCredentials: true // => you might need this when having the users in the app 
});
 
const errorHandler = err => {
  // console.error(err);
  throw err;
};

function handleUpload (theFile) {
  // console.log('file in service: ', theFile)
  return service.post('/upload', theFile)
    .then(res => res.data)
    .catch(errorHandler);
}

function saveNewThing (newThing) {
  // console.log('new thing is: ', newThing)
  return service.post('/things/create', newThing)
    .then(res => res.data)
    .catch(errorHandler);
}
 
export default {
  service,
  handleUpload,
  saveNewThing
}