class RemoveContactNoFromStudents < ActiveRecord::Migration[7.0]
  def change
    remove_column :students, :contact_no, :string
    remove_column :students, :roll_no, :string
  end
end
