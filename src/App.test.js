import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import App from './App';
import TodoList from './TodoList';

it("renders without crashing", ()=>{
  render(<App/>)
})

it("matches snapshot", () =>{
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})

it("should add a new todo", ()=>{
  const {queryByText, getByLabelText} = render(<TodoList/>);
  expect(queryByText("wash the dishes")).not.toBeInTheDocument();

  //entering a new todo
  const input = getByLabelText('New Todo:');
  const btn = queryByText('Add a Todo');
  fireEvent.change(input, {target: {value: "wash the dishes"}});

  fireEvent.click(btn);
  expect(queryByText("wash the dishes")).toBeInTheDocument();

  //deleting a todo
  const deleteBtn = queryByText('X');
  fireEvent.click(deleteBtn);
  expect(queryByText("wash the dishes")).not.toBeInTheDocument();
})