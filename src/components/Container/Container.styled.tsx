import styled from 'styled-components';
import devices from '../../constants/devices.constants';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  @media (${devices.small}) {
    max-width: 540px;
  }

  @media (${devices.medium}) {
    max-width: 720px;
  }

  @media (${devices.large}) {
    max-width: 960px;
  }

  @media (${devices.xLarge}) {
    max-width: 1140px;
  }
`;
