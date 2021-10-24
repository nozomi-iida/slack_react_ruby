module V1
  class AccountsController < ApplicationController
    def callback
      render json: current_account
    end
  end
end
