json.extract! game, :id, :title, :photo, :writer, :platform, :programmer, :price, :release_date, :developer_id, :genre_id, :created_at, :updated_at
json.url game_url(game, format: :json)
