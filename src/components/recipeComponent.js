import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding; 30px;
  width: 300px; 
  gap: 20px;
  bax-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
  height: 200px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsTest = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center; 
  margin-bottom: 12px;
`;

export const SeeMoreText = styled.span`
font-size: 18px;
border: solid 1px red;
color: black;
cursor: pointer;
padding: 10px 15px;
border-radius: 4px;
color: red;
text-align: center; 
`;