# frozen_string_literal: true
module Auth
  # SlackController
  class SlackController < ApplicationController
    skip_before_action :authenticate_account!

    def callback
      account = Account.find_or_create_from_auth_hash(auth_hash)
      token = account.jwt
      redirect_to "https://slack-react-ruby.vercel.app/sign_in/slack?token=#{token}"
    end

    private

    def auth_hash
      request.env['omniauth.auth']
    end
  end
end
