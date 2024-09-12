class AddDateOfBirthInStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :date_of_birth, :date
  end
end
