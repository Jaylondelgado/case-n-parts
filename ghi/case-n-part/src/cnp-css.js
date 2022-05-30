import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  display: block;

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

export default styled;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// render(
//   <div>
//     <Button as="u">Normal Button</Button>
//     <Button as="a" href="#">
//       Link with Button styles
//     </Button>
//     <TomatoButton as="a" href="#">
//       Link with Tomato Button styles
//     </TomatoButton>
//   </div>
// );
