module V1
  class AccountController < ApplicationController
    def callback
      render json: @current_account
    end
  end
end
