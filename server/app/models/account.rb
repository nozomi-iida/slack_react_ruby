# Account
class Account < ApplicationRecord
  include JWT::Authenticatable

  # Validations
  validates :name, presence: true
  validates :slack_access_token, presence: true

  def self.find_or_create_from_auth_hash(auth_hash)
    name = auth_hash[:info][:nickname]
    slack_access_token = auth_hash[:credentials][:token]
    find_or_create_by(name: name) do |account|
      account.name = name
      account.slack_access_token = slack_access_token
    end
  end
end
