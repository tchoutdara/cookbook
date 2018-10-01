class Api::IngredientsController < ApplicationController
  before_action :set_ingredients, only: [:show, :update, :destroy]

  def index
    render json: Ingredient.all
  end

  def show
    render json: @ingredient
  end

  def create
    ingredient = Ingredient.new(ingredient_params)

    if ingredient.save
      render json: ingredient
    else
      render_error(ingredient)
    end
  end

  def update
    if @ingredient.update
      render json: @ingredient
    else
      render_error(@ingredient)
  end

  private
    def set_ingredients
      @ingredient = Ingredient.find(params[:id])
    end

    def ingredient_params
      params.require(:ingredient).permit(:name)
    end
end
