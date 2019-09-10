class CardsController < ApplicationController
    def index
        @cards= card.all
        render :json => @cards
       end
    
    def show
        @card = card.find(params[:id])
        render :json => @card
    end
end
