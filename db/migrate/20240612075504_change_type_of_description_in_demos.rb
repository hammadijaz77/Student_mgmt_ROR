class ChangeTypeOfDescriptionInDemos < ActiveRecord::Migration[7.0]
 # def change
   # Don't do this --- this is not reversible migration because it does not know the last datatype of description attribute 
   # change_column :demos, :description,:text

   # Do this instead
  #  reversible do |dir|
  #     dir.up do
  #       change_column :demos, :description,:text
  #     end
  #     dir.down do
  #       change_column :demos, :description,:string
  #     end
  #  end

  # OR Do This

  def up
    change_column :demos, :description,:text
  end

  def down
    change_column :demos, :description,:string
  end


 # end
end
