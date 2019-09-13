class CardGamesController < ApplicationController
   def index
    @card_games = CardGame.all
    render :json => @card_games
   end

   def show
    @card_games = CardGame.find(params[:id])
    render :json => @card_games
   end

   def new
      @card_game=CardGame.new
   end

  def create
      @card_game = CardGame.new(card_game_params)
      @card_game.save
      render :json => @card_game
  end


  def update
      @card_game = CardGame.find(params[:id])
      @card_game.update(gameId: card_game_params, c1: card_game_params, c2: card_game_params, c3: card_game_params)

    end

   private 

   def card_game_params
      params.require(:card_game).permit(:c1 => {}, :c2=>{}, :c3=>{}, :gameId=>{})
  end

end

