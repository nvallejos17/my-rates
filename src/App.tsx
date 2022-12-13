import { ChangeEventHandler, useState } from 'react';
import Container from './components/Container/Container.component';
import InputGroup from './components/InputGroup/InputGroup.component';
import Rates from './components/Rates/Rates.component';
import useRates from './hooks/useRates.hook';

const App = () => {
  const { busdArs, busdEur, eurArs, fetchRates, isLoading, updatedAt } =
    useRates();

  const [values, setValues] = useState({
    ars: 0,
    busd: 0,
    eur: 0,
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value !== '' ? parseFloat(e.target.value) : 0;

    if (name === 'ars') {
      setValues({
        ars: value,
        busd: value / busdArs,
        eur: value / eurArs,
      });
    }

    if (name === 'busd') {
      setValues({
        ars: value * busdArs,
        busd: value,
        eur: value * busdEur,
      });
    }

    if (name === 'eur') {
      setValues({
        ars: value * eurArs,
        busd: value / busdEur,
        eur: value,
      });
    }
  };

  return (
    <Container>
      <Rates
        busdArs={busdArs}
        busdEur={busdEur}
        eurArs={eurArs}
        isLoading={isLoading}
      />
      <button type="button" onClick={fetchRates} disabled={isLoading}>
        Refresh
      </button>

      {!isLoading && (
        <p>
          <small>
            <i>
              <b>Updated At:</b> {updatedAt.toLocaleString()}
            </i>
          </small>
        </p>
      )}

      <h2>Conversions</h2>
      <div>
        <InputGroup
          label="EUR"
          name="eur"
          onChange={onChange}
          value={values.eur}
        />
        <InputGroup
          label="BUSD"
          name="busd"
          onChange={onChange}
          value={values.busd}
        />
        <InputGroup
          label="ARS"
          name="ars"
          onChange={onChange}
          value={values.ars}
        />
      </div>
    </Container>
  );
};

export default App;
