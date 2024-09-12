Rails.application.routes.draw do
  resources :projects
  resources :courses
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'welcome#index'

  resources :students

  get 'welcome/about'
  get '/about' => 'welcome#about'

 # namespace :admin do
  #  resources :students
  #end

  #scope :admin do
   # resources :students
  #end
end
