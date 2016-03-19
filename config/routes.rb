Rails.application.routes.draw do
  resources :spaces
  # match '*any' => 'application#options', :via => [:options]
end