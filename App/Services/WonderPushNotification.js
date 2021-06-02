import axios from 'axios';
const qs = require('querystring')

const notificationApiClient = () =>
  axios.create({
    baseURL: "https://management-api.wonderpush.com/",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 3000,
  });

function sendNotification(payload) {
  return notificationApiClient()
    .post('v1/deliveries?accessToken=Nzc3YzE5ZGQzNDQ1YTdjNTMzYTZhODY1MzU5MjQ2OGU2Y2VlOWFlOTMxYWU3NTFjNjExZTY0OGZkNmQ0YzYyZQ', qs.stringify(payload))
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}

export const NotificationService = {
  sendNotification,
};
