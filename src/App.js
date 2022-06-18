import React from 'react';
import styled from 'styled-components';
import img1 from './images/loupe.png';
import img2 from './images/burger.png';
import img3 from './images/hamburger.png';
import img4 from './images/Chicken-Curry.png';
import img5 from './images/Chilli-Paneer.png';
import img6 from './images/kathi-roll.png';
import img7 from './images/mutton-biriyani.png';
import img8 from './images/Mutton-Dum-Biriyani.png';
import img9 from './images/palak-paneer.png';

import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput, SearchIcon } from './components/headerComponent';
import {RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientsTest, SeeMoreText} from './components/recipeComponent';
const Container = styled.div`
display:flex;
flex-direction:column;
`;

const App = () => {
  return(
  <>
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src={img2}/>
          Recipr Finder
          </AppNameComponent>
        <SearchComponent>
           <SearchIcon src={img1} alt=""/>
           <SearchInput placeholder="Search Recipe" /> 
        </SearchComponent>
      </Header>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img3}/>
            <RecipeName>Matar paneer</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img4}/>
            <RecipeName>Chicken Curry</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img5}/>
            <RecipeName>Chilli Paneer</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img6}/>
            <RecipeName>Kathi Roll</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img7}/>
            <RecipeName>Mutton Biryani</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img8}/>
            <RecipeName>Mutton Biryani</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
        <RecipeListContainer>
          <RecipeContainer>
            <CoverImage src={img9}/>
            <RecipeName>Palak Paneer</RecipeName>
            <IngredientsTest>Ingredients</IngredientsTest>
            <SeeMoreText>See Complete Recipe</SeeMoreText>
          </RecipeContainer>
        </RecipeListContainer>
    </Container>
  </>
    )
 }

export default App