class ArticlesController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_article, only: [:show, :edit, :update, :destroy]

    def index
        @articles = Article.all
        render json: @articles
    end

   def show
        render json: @article
   end

    def new
        @article = Article.new
    end

    def create
        @article = Article.new(article_params)

        if @article.save
            render json: @article
        else
            render :new
        end
    end

    def edit
        
    end

    def update
        if @article.update(article_params)
            render json: @article
        else
            render :edit
        end
    end

    def destroy
        @article.destroy
        redirect_to articles_url
      end

    private

    def set_article
        @article = Article.find(params[:id])
    end

    def article_params
        params.permit(:name, :body)
    end
end
