import { render} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

//smoke test
it("rednders without crashing", ()=>{
  render(<NewBoxForm/>)
})

//snapshot test
it("matches snapshot", ()=>{
  const {asFragment} = render(<NewBoxForm/>);
  expect(asFragment()).toMatchSnapshot;
});

