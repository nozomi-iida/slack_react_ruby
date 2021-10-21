Rails.application.config.middleware.use OmniAuth::Builder do
  provider :slack, ENV['SLACK_CLIENT_ID'], ENV['SLACK_SECRET_KEY'], scope: %i[identity.basic chat:write]
end

OmniAuth.config.allowed_request_methods = %i[get]
