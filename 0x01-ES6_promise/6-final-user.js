import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((response) => {
      response.map((obj) => ({
        status: obj.status,
        value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
      }));
    });
}
