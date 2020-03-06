class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :photo
      t.string :writer
      t.string :platform
      t.string :programmer
      t.float :price
      t.date :release_date
      t.references :developer, foreign_key: true
      t.references :genre, foreign_key: true

      t.timestamps
    end
  end
end
