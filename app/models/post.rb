class Post < ApplicationRecord
    # has_one_attached :image 
    # validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
    has_attached_file :image
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
