class StudentsController < ApplicationController
  include ApplicationHelper
    before_action :set_student, only: %i[show edit update destroy]
    
    def index
        @students = Student.all
    end

    def new
        @student = Student.new
    end

   def create
        @student = Student.new(student_params)
        #     first_name: params[:student][:first_name],
        #     last_name: params[:student][:last_name],
        #     email: params[:student][:email]
        # )
       if @student.save
         redirect_to students_path, notice: 'Student is Created Successfully'
       else
        render :new
       end
    end

    def show
     #   @student = Student.find(params[:id])
    end

    def edit
      #  @student = Student.find(params[:id])
    end

    def update
      #  @student = Student.find(params[:id])
       if @student.update(student_params)
         redirect_to students_path, notice: 'Student is Updated Successfully'
         # redirect_to student_path(@student) this will redirect to student detail page (View)  
       else
        render :edit
       end
    end

    def destroy
      #  @student = Student.find(params[:id])
        @student.destroy
        redirect_to students_path , notice: 'Student is Deleted Successfully'

    end


    private

    def student_params
        params.require(:student).permit(:first_name, :last_name, :email,:date_of_birth)
    end

    def set_student
        @student = Student.find(params[:id])
    end
end