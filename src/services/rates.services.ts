import axios from 'axios';

class RatesApi {
  fetchBusdArsRates() {
    return axios.get('https://criptoya.com/api/buenbit/busd/ars');
  }

  fetchBusdEurRates() {
    return axios.get(
      'https://api.binance.com/api/v3/ticker/price?symbol=EURBUSD'
    );
  }
}

export default new RatesApi();
