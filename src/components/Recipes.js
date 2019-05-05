import React from "react";
// import Sort from "./Sort";
// import Loading from "./Loading";

const Recipes = ({ recipes, ingredient, handleSort, sort, loading }) => {
  return (
    <div className="container">
      <p className="ingredient_container">
        Showing <span className="recipe_num">{recipes && recipes.length}</span>{" "}
        Recipes,{" "}
        {ingredient.length > 0 && (
          <span>
            Containing <span className="ingredient">{ingredient}</span>
          </span>
        )}
        {/* <span> sorted by</span> */}
      </p>
      {/* <Sort handleSort={handleSort} sort={sort} /> */}
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <div className="row">
        {recipes.map(recipe => {
          return (
            <div className="col-md-4" key={recipe.recipe_id}>
              <div className="recipes__box">
                <img
                  className="recipe__box-img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title}`}
                  </h5>
                  <p className="recipes__subtitle">
                    Publisher: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <a
                  className="recipe_buttons"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={recipe.source_url}
                >
                  View Recipe
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {/* )} */}
    </div>
  );
};

export default Recipes;
