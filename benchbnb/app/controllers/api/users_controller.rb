require 'byebug'

class Api::UsersController < ApplicationController
  def create
    # debugger

    @user = User.new(user_params)
    if @user.save


      log_in(@user)
      render "api/users/show"
    else
      debugger

      render json: @user.errors.full_messages, status: 422
    end
  end

end
