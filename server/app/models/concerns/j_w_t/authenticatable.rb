# frozen_string_literal: true

module JWT
  # Authenticatable
  module Authenticatable
    extend ActiveSupport::Concern

    # create
    def jwt
      iat = Time.now.to_i
      exp = iat + (3600 * 24 * 7) # one week
      payload = {
        iat: iat,
        exp: exp,
        sub: id
      }

      JWT::Helper.encode(payload)
    end

    class_methods do
      def authenticate!(token)
        payload, _header = JWT::Helper.decode(
          token,
          algorithm: 'HS256'
        )

        find(payload['sub'])
      end
    end
  end
end
