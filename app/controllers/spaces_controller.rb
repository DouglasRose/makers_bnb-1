class SpacesController < ApplicationController
  def index
    return [{id: 1, name: "My lovely space"}, {id: 2, name: "My horrible space"}]
  end
end