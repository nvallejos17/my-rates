type IRatesProps = {
  busdArs: number;
  busdEur: number;
  eurArs: number;
  isLoading: boolean;
};

const DECIMALS = 2;

const Rates = ({ busdArs, busdEur, eurArs, isLoading }: IRatesProps) => {
  return (
    <div>
      <h2>Current rates</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>
            <b>1 BUSD:</b> {busdEur.toFixed(DECIMALS)} EUR
          </li>
          <li>
            <b>1 BUSD:</b> {busdArs.toFixed(DECIMALS)} ARS
          </li>
          <li>
            <b>1 EUR:</b> {eurArs.toFixed(DECIMALS)} ARS
          </li>
        </ul>
      )}
    </div>
  );
};

export default Rates;
