# frozen_string_literal: true
# Authenticatable
module Authenticatable
  extend ActiveSupport::Concern

  # includedを使用することでクラスメソッドもインスタンスメソッドと同時に追加することができる
  included do
    before_action :authenticate_account!

    attr_reader :current_account

    def authenticate_account!
      @current_jwt = /[Bb]earer (.*)/.match(request.headers[:Authorization] || request.headers[:authorization]).to_a[1]

      @current_account = Account.authenticate!(@current_jwt)
    end

    def authenticate_account
      authenticate_account!
    rescue StandardError
      nil
    end
  end
end
