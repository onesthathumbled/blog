Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://localhost'  
  
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        expose: ['Authorization']  # You can expose additional headers if needed.
    end
  end