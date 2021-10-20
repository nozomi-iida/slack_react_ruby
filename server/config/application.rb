require_relative "boot"

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"

Bundler.require(*Rails.groups)

module Server
  class Application < Rails::Application
    config.load_defaults 6.1
    config.api_only = true
    config.autoload_paths << Rails.root.join('lib')

     # For Omniauth
     config.session_store :cookie_store, key: '_interslice_session'
     config.middleware.use ActionDispatch::Cookies # Required for all session management
     config.middleware.use ActionDispatch::Session::CookieStore, config.session_options
  end
end
