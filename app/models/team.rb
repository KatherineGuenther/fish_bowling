class Team < ApplicationRecord
  validates :name, presence: true
  belongs_to :game
  has_and_belongs_to_many :players,
                          join_table: "players_teams",
                          class_name: User,
                          association_foreign_key: 'player_id'

  def increase_score
    self.score += 1
    self.save
  end

  def players_list
    players.map do |player|
      { id: player.id, display_name: player.display_name }
    end
  end

end
