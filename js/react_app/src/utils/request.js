const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function headers() {
  const jwt = localStorage.getItem('phoenixAuthToken');

  return { ...defaultHeaders, Authorization: jwt };
}

export function checkStatus(response) {
  if (response.ok) {
    return response;
  } else {
    var error      = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function parseJSON(response) {
  return response.json();
}


export function httpGet(url) {

  return fetch(url, {
    headers: headers(),
  })
  .then(checkStatus)
  .then(parseJSON);
}


export default function httpPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'post',
    headers: headers(),
    body: body,
  }).then(checkStatus)
    .then(parseJSON);
}
