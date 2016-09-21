# app.rb
require 'sinatra'
require 'sinatra/reloader'
require 'json'
require 'pry'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/contact' do
  erb :contact
end

get '/checkout' do
  erb :checkout
end

get '/faq' do
  erb :faq
end

get '/custromise' do
  erb :customise
end
