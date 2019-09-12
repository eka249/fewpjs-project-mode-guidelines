class GamesController < ApplicationController

    def index
        @games= Game.all
        render :json => @games
       end
    
    def show
        @game = Game.find(params[:id])
        render :json => @game
    end

    def create
        @game = game.new(game_params)
        @game.name = game.name
        @game.save
        render json => @game
    end

    def delete
        @game = game.find(params[:id])
        @game.destroy
    end

    private

    def game_params
        params.require(:game).permit(:totScore => {})
    end

end
