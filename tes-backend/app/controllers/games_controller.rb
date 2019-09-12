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
        @game = Game.new(game_params)
        # @game.name = game.name
        @game.save
        render :json => @game
    end

    # def edit
    #     @game.
    # end

    def update
    end


    def delete
        @game = Game.find(params[:id])
        @game.destroy
    end

    private

    def game_params
        params.require(:game).permit(:totScore => {})
    end

end
