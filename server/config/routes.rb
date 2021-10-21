Rails.application.routes.draw do
  # ヘルスチェック用
  get '/health', to: proc {
    [200, {}, ['']]
  }

  namespace :auth do
    scope :slack do
      get :callback, to: 'slack#callback'
    end
  end

  namespace :v1 do
    get :account, to: 'account#callback'
  end
end
