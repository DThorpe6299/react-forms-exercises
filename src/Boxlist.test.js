import { fireEvent, getByText, render} from '@testing-library/react';
import BoxList from './Boxlist';

//smoke test
it("rednders without crashing", ()=>{
  render(<BoxList/>)
})

//snapshot test
it("matches snapshot", ()=>{
  const {asFragment} = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot;
});

it("inspecting the DOM rendered", ()=>{
    const {queryByText, getByLabelText, getByTestId} = render(<BoxList/>);
    expect(queryByText("Boxes")).toBeInTheDocument();

    //entering a new box
    const input1= getByLabelText('Width:');
    const input2 = getByLabelText('Height:');
    const input3 = getByLabelText('Background Color:');
    const btn = queryByText('Add A Box');

    //box properties entered & submitted
    fireEvent.change(input1, {target: {value: "200"}});
    fireEvent.change(input2, {target: {value: "200"}});
    fireEvent.change(input3, {target: {value: "red"}});

    fireEvent.click(btn);

    //select box by testId
    const boxElement = getByTestId('box-0');
    expect(boxElement).toBeInTheDocument();
  
    //delete box
    const deleteBtn = queryByText('X');
    fireEvent.click(deleteBtn);
    expect(queryByText('X')).not.toBeInTheDocument();
})