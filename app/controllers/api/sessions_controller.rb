class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid credentials. Please try again!'], status: 405
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render 'api/users/show'
        else
            render json: ['Please sign in!'], status: 422
        end
    end
end
