export default function sendWebhookMessage(event, todo) {
  var url = new URL(
    `https://www.hostedhooks.com/api/v1/apps/${process.env.NEXT_PUBLIC_APP_UUID}/messages`
  );

  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_HOSTEDHOOKS_API_KEY}`);
  myHeaders.append('Content-Type', 'application/json');

  // ex: user session data
  const user = {
    id: 'user_id',
    role: 'team_manager',
  };

  // webhook message
  var messagePayload = JSON.stringify({
    data: {
      user: user,
      todo: todo, // todo data
    },
    version: '1.0',
    event_type: event,
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: messagePayload,
    redirect: 'follow',
  };

  fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
