import { useEffect, useState } from 'react';
import RatesApi from '../services/rates.services';

const BINANCE_FEE = 2;

function useRates() {
  const [busdArs, setBusdArs] = useState(0);
  const [busdEur, setBusdEur] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState(new Date());

  const fetchRates = async () => {
    setIsLoading(true);

    await Promise.all([
      RatesApi.fetchBusdArsRates(),
      RatesApi.fetchBusdEurRates(),
    ])
      .then((res) => {
        const buenbitData = res[0].data;
        const binanceData = res[1].data;

        setBusdArs(buenbitData.bid);
        setBusdEur((1 / binanceData.price) * (1 + BINANCE_FEE / 100));
        setUpdatedAt(new Date());
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRates();
  }, []);

  return {
    busdArs,
    busdEur,
    eurArs: busdArs / busdEur,
    fetchRates,
    isLoading,
    updatedAt,
  };
}

export default useRates;
