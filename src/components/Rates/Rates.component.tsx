type IRatesProps = {
  busdArs: number;
  busdEur: number;
  eurArs: number;
  isLoading: boolean;
};

const Rates = ({ busdArs, busdEur, eurArs, isLoading }: IRatesProps) => {
  return (
    <div>
      <h2>Current rates</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>
            <b>1 BUSD:</b> {busdEur.toFixed(2)} EUR
          </li>
          <li>
            <b>1 BUSD:</b> {busdArs.toFixed(2)} ARS
          </li>
          <li>
            <b>1 EUR:</b> {eurArs.toFixed(2)} ARS
          </li>
        </ul>
      )}
    </div>
  );
};

export default Rates;
