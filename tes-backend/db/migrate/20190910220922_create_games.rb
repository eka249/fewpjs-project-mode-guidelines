class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :userId
      t.integer :totScore

      t.timestamps
    end
  end
end
