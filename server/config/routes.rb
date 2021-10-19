Rails.application.routes.draw do
  # ヘルスチェック用
  get '/health', to: proc {
    [200, {}, ['']]
  }
end
