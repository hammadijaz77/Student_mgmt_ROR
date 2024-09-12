module ApplicationHelper
    def formatted_date(date)
        date.strftime('%A,%b,%d,%Y')
    end
end
