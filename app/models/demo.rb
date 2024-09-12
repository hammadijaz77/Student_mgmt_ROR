class Demo < ApplicationRecord
    has_one :sub_demo

    #method-1
    # before_create :greeting_message
    # def greeting_message
    #     puts "Hey, I will run before you create an object!"
    # end

    #method-2 not preferable
    before_create do
         puts "Hey, I will run before you create an object!"
     end
end
