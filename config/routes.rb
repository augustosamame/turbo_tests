Rails.application.routes.draw do
  get 'main/page_A'
  get 'main/page_B'
  get 'main/page_A_data_turbo_eval_false'
  get 'main/page_B_data_turbo_eval_false'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "main#page_A"

end
