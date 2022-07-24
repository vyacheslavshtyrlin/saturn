export default class API {
  constructor(url) {
    this._url = url;
  }

  _checkStatus(promise) {
    return promise.then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    });
  }

  sendData(data) {
    const promise = fetch(`${this._url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        tel: data.tel,
        email: data.email,
        date: data.time,
      }),
    });
    return this._checkStatus(promise);
  }
}
