import React from "react";

const Recipes = ({ recipes, ingredient, handleSort, sort }) => (
  <div className="container">
    {recipes && (
      <p className="ingredient_container">
        Showing <span className="recipe_num">{recipes.length}</span> Recipes{" "}
        {ingredient !== "undefined" && (
          <span className="ingredient">Containing {ingredient}</span>
        )}
      </p>
    )}
    {recipes && (
      <React.Fragment>
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
      </React.Fragment>
    )}
  </div>
);

export default Recipes;
